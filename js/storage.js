// LocalStorage Manager for CompTIA Security+ Exam Simulator

const STORAGE_KEYS = {
  EXAM_HISTORY: "secplus_exam_history",
  BOOKMARKS: "secplus_bookmarked_questions",
  MISSED_QUESTIONS: "secplus_missed_questions",
  NOTES: "secplus_study_notes",
  THEME: "secplus_theme_mode",
  DRILL_SCORES: "secplus_drill_scores",
  FLASHCARD_PROGRESS: "secplus_flashcard_progress",
  CUSTOM_SETTINGS: "secplus_custom_settings",
  VOLUME: "secplus_audio_volume"
};

const StorageManager = {
  // Volume
  getVolume() {
    const v = localStorage.getItem(STORAGE_KEYS.VOLUME);
    return v !== null ? parseFloat(v) : 1.0;
  },
  setVolume(vol) {
    localStorage.setItem(STORAGE_KEYS.VOLUME, vol.toString());
  },

  // Theme
  getTheme() {
    return localStorage.getItem(STORAGE_KEYS.THEME) || "dark";
  },
  setTheme(theme) {
    localStorage.setItem(STORAGE_KEYS.THEME, theme);
  },

  // Exam History
  getExamHistory() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.EXAM_HISTORY);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.error("Failed to parse exam history", e);
      return [];
    }
  },
  saveExamResult(result) {
    const history = this.getExamHistory();
    history.unshift(result); // latest first
    // keep maximum 50 attempts
    if (history.length > 50) history.pop();
    localStorage.setItem(STORAGE_KEYS.EXAM_HISTORY, JSON.stringify(history));

    // Also update missed questions list
    if (result.missedQuestionIds && result.missedQuestionIds.length > 0) {
      this.recordMissedQuestions(result.missedQuestionIds);
    }
  },
  clearExamHistory() {
    localStorage.removeItem(STORAGE_KEYS.EXAM_HISTORY);
  },

  // Missed Questions
  getMissedQuestionIds() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.MISSED_QUESTIONS);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      return [];
    }
  },
  recordMissedQuestions(questionIds) {
    const existing = new Set(this.getMissedQuestionIds());
    questionIds.forEach(id => existing.add(id));
    localStorage.setItem(STORAGE_KEYS.MISSED_QUESTIONS, JSON.stringify(Array.from(existing)));
  },
  removeMissedQuestion(questionId) {
    const existing = this.getMissedQuestionIds().filter(id => id !== questionId);
    localStorage.setItem(STORAGE_KEYS.MISSED_QUESTIONS, JSON.stringify(existing));
  },

  // Bookmarks
  getBookmarks() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.BOOKMARKS);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      return [];
    }
  },
  isBookmarked(questionId) {
    return this.getBookmarks().includes(questionId);
  },
  toggleBookmark(questionId) {
    let bookmarks = this.getBookmarks();
    if (bookmarks.includes(questionId)) {
      bookmarks = bookmarks.filter(id => id !== questionId);
    } else {
      bookmarks.push(questionId);
    }
    localStorage.setItem(STORAGE_KEYS.BOOKMARKS, JSON.stringify(bookmarks));
    return bookmarks.includes(questionId);
  },

  // User Study Notes
  getNotes() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.NOTES);
      return data ? JSON.parse(data) : {};
    } catch (e) {
      return {};
    }
  },
  getNoteForQuestion(questionId) {
    const notes = this.getNotes();
    return notes[questionId] || "";
  },
  saveNoteForQuestion(questionId, text) {
    const notes = this.getNotes();
    if (!text || text.trim() === "") {
      delete notes[questionId];
    } else {
      notes[questionId] = text.trim();
    }
    localStorage.setItem(STORAGE_KEYS.NOTES, JSON.stringify(notes));
  },

  // Drill Scores & High Scores
  getDrillScores() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.DRILL_SCORES);
      return data ? JSON.parse(data) : { portsBestStreak: 0, acronymsBestStreak: 0, totalAnswered: 0 };
    } catch (e) {
      return { portsBestStreak: 0, acronymsBestStreak: 0, totalAnswered: 0 };
    }
  },
  updateDrillScore(type, streak) {
    const scores = this.getDrillScores();
    if (type === "ports" && streak > scores.portsBestStreak) {
      scores.portsBestStreak = streak;
    } else if (type === "acronyms" && streak > scores.acronymsBestStreak) {
      scores.acronymsBestStreak = streak;
    }
    scores.totalAnswered = (scores.totalAnswered || 0) + 1;
    localStorage.setItem(STORAGE_KEYS.DRILL_SCORES, JSON.stringify(scores));
  }
};

const ExplanationFormatter = {
  escapeHtml(str) {
    if (!str) return "";
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  },

  format(rawText) {
    if (!rawText || typeof rawText !== "string") return "";

    let text = rawText.trim();
    let headerHtml = "";

    // Extract "Correct Answer: ..." if present
    if (/^Correct Answer\s*:/i.test(text)) {
      const parts = text.split(/\n\n+/);
      const answerLine = parts[0].replace(/^Correct Answer\s*:\s*/i, "").trim();
      headerHtml = `
        <div class="exp-correct-banner">
          <div class="exp-banner-badge">
            <span class="exp-badge-icon">✅</span>
            <span class="exp-badge-title">CORRECT ANSWER</span>
          </div>
          <div class="exp-banner-text">${this.escapeHtml(answerLine)}</div>
        </div>
      `;
      text = parts.slice(1).join("\n\n").trim();
    }

    if (!text) {
      return `<div class="formatted-explanation-wrapper">${headerHtml}</div>`;
    }

    // Replace single line breaks inside paragraphs with spaces (clean up PDF wrap artifacts),
    // but preserve double newlines and lists starting with bullet points or numbers
    const normalizedBlocks = text.split(/\n\n+/).map(block => {
      if (/^\s*[-*•]\s+/m.test(block) || /^\s*\d+\.\s+/m.test(block)) {
        return block.split(/\n/).map(line => line.trim()).filter(Boolean).join("\n");
      }
      return block.replace(/([^\n])\n([^\n])/g, "$1 $2").trim();
    }).join("\n\n");

    // Lookahead split pattern for rationales
    const splitRegex = /(?:(?<=[\.\;\!\?\:])\s+|\n+)(?=(?:[A-G]\.\s+|[A-G]\s*\([^\)]+\)\s*(?:is|are)|[A-G]\s+(?:is|are)\s+(?:correct|incorrect)|[A-G]\s+and\s+[A-G]\s+(?:and\s+[A-G]\s+)?are|[A-G]\s+is\s+|[A-G]\s+are\s+|\d+\s*(?:->|=|→)\s*[A-G]|Unused\:|The correct mapping is\:|Correct order\:|The correct pairings are\:|Correct pairings\:|Technical Breakdown|Nmap Scan Analysis|Firewall Configuration|Log Analysis|Wireless Enterprise|OWASP|PKI Component|Digital Forensics))/i;

    let segments = normalizedBlocks.split(splitRegex).map(s => s.trim()).filter(Boolean);

    if (segments.length <= 1 && normalizedBlocks.includes("\n")) {
      segments = normalizedBlocks.split(/\n+/).map(s => s.trim()).filter(Boolean);
    }

    const cardsHtml = segments.map((seg) => {
      const lower = seg.toLowerCase();
      let cardClass = "exp-card-neutral";
      let icon = "💡";
      let badgeLabel = "RATIONALE";

      if (
        lower.includes("is correct") ||
        lower.includes("are correct") ||
        lower.startsWith("correct:") ||
        lower.startsWith("correct ") ||
        lower.startsWith("correct —") ||
        lower.startsWith("correct -") ||
        lower.includes("is right") ||
        lower.startsWith("the correct mapping") ||
        lower.startsWith("the correct pairings") ||
        lower.startsWith("the correct order")
      ) {
        cardClass = "exp-card-correct";
        icon = "✓";
        badgeLabel = "CORRECT";
      } else if (
        lower.includes("is incorrect") ||
        lower.includes("are incorrect") ||
        lower.includes("incorrect:") ||
        lower.includes("is not correct") ||
        lower.includes("is not a recognized") ||
        lower.includes("is not standard") ||
        lower.includes("incorrect (")
      ) {
        cardClass = "exp-card-incorrect";
        icon = "✗";
        badgeLabel = "DISTRACTOR";
      } else if (lower.startsWith("unused:") || lower.startsWith("unused options:")) {
        cardClass = "exp-card-unused";
        icon = "⚠️";
        badgeLabel = "UNUSED";
      } else if (/^\d+\s*(?:->|=|→)\s*[A-G]/i.test(seg)) {
        cardClass = "exp-card-mapping";
        icon = "🔗";
        badgeLabel = "MATCH";
      } else if (
        lower.includes("breakdown") ||
        lower.includes("analysis") ||
        lower.includes("walkthrough") ||
        lower.includes("rationale")
      ) {
        cardClass = "exp-card-info";
        icon = "📘";
        badgeLabel = "KEY CONCEPT";
      }

      let safeText = this.escapeHtml(seg);

      // Re-apply bold styling to leading option indicators
      safeText = safeText.replace(
        /^([A-G]\.\s+|[A-G]\s*\([^\)]+\)\s*(?:is|are)\s*(?:correct|incorrect)?\:?|[A-G]\s+(?:is|are)\s+(?:correct|incorrect)\:?|[A-G]\s+and\s+[A-G]\s+(?:and\s+[A-G]\s+)?are\s*(?:correct|incorrect)\:?|\d+\s*(?:-&gt;|=|→)\s*[A-G][^:]*\:|Unused\:|The correct (?:mapping|pairings|order) (?:is|are)\:?)/i,
        '<strong class="exp-lead-tag">$1</strong>'
      );

      safeText = safeText.replace(/\n/g, "<br>");

      return `
        <div class="exp-card ${cardClass}">
          <div class="exp-card-header-bar">
            <span class="exp-card-icon">${icon}</span>
            <span class="exp-card-badge">${badgeLabel}</span>
          </div>
          <div class="exp-card-body">${safeText}</div>
        </div>
      `;
    }).join("");

    return `
      <div class="formatted-explanation-wrapper">
        ${headerHtml}
        <div class="exp-cards-list">
          ${cardsHtml}
        </div>
      </div>
    `;
  }
};

