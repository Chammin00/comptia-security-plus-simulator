// CompTIA Security+ Interactive Practice / Study Mode Engine
// Comprehensive Support for: Multiple Choice, Select Two/Three, Matching & Ordering

class PracticeEngine {
  constructor() {
    this.questions = [];
    this.currentIndex = 0;
    this.answeredState = {}; // questionId -> { selectedIndex, selectedIndices, userMatches, userOrder, isSubmitted }
    this.activeFilter = "all"; // "all", domainId (1..5), "exam-1".."exam-5", "missed", "bookmarked"
  }

  startPractice(filter = "all", customQuestionIds = null) {
    this.activeFilter = filter;
    this.currentIndex = 0;
    this.answeredState = {};

    if (customQuestionIds && customQuestionIds.length > 0) {
      this.questions = SECURITY_QUESTIONS.filter(q => customQuestionIds.includes(q.id));
    } else if (filter === "all") {
      this.questions = [...SECURITY_QUESTIONS];
    } else if (filter === "pbq" || filter === "pbq-all") {
      this.questions = SECURITY_QUESTIONS.filter(q => q.questionType === "Matching" || q.questionType === "Ordering" || q.questionType === "Select Two" || q.questionType === "Select Three");
    } else if (filter === "pbq-matching") {
      this.questions = SECURITY_QUESTIONS.filter(q => q.questionType === "Matching");
    } else if (filter === "pbq-ordering") {
      this.questions = SECURITY_QUESTIONS.filter(q => q.questionType === "Ordering");
    } else if (filter === "pbq-multiselect") {
      this.questions = SECURITY_QUESTIONS.filter(q => q.questionType === "Select Two" || q.questionType === "Select Three");
    } else if (filter === "missed") {
      const missedIds = StorageManager.getMissedQuestionIds();
      this.questions = SECURITY_QUESTIONS.filter(q => missedIds.includes(q.id));
    } else if (filter === "bookmarked") {
      const bookmarkedIds = StorageManager.getBookmarks();
      this.questions = SECURITY_QUESTIONS.filter(q => bookmarkedIds.includes(q.id));
    } else if (typeof filter === "string" && filter.startsWith("exam-")) {
      const examNum = parseInt(filter.replace("exam-", ""));
      this.questions = SECURITY_QUESTIONS.filter(q => q.examNum === examNum || q.examSet === `Practice Exam ${examNum}`);
    } else {
      const dId = parseInt(filter);
      this.questions = SECURITY_QUESTIONS.filter(q => q.domainId === dId);
    }

    if (this.questions.length === 0) {
      alert("No questions found matching the selected filter. Loading all questions instead.");
      this.questions = [...SECURITY_QUESTIONS];
      this.activeFilter = "all";
    }

    this.renderPracticeView();
  }

  renderPracticeView() {
    const container = document.getElementById("practice-screen-container");
    if (!container) return;

    if (this.questions.length === 0) {
      container.innerHTML = `
        <div class="empty-state-card">
          <div class="empty-icon">📭</div>
          <h2>No Questions Available</h2>
          <p>No questions matched your filter.</p>
          <button class="exam-nav-btn primary" onclick="window.app.practiceEngine.startPractice('all')">Load All Questions</button>
        </div>
      `;
      return;
    }

    const q = this.questions[this.currentIndex];
    const isBookmarked = StorageManager.isBookmarked(q.id);
    const state = this.answeredState[q.id] || { 
      selectedIndex: null, 
      selectedIndices: [], 
      userMatches: {}, 
      userOrder: q.orderingItems ? q.orderingItems.map(i => i.letter) : [],
      isSubmitted: false 
    };
    this.answeredState[q.id] = state;

    const noteText = StorageManager.getNoteForQuestion(q.id);
    const isCorrect = this.evaluateCorrectness(q, state);

    container.innerHTML = `
      <div class="practice-header-bar">
        <div class="practice-title-box">
          <span class="p-badge-icon">📚</span>
          <div>
            <div class="practice-title">Study & Practice Mode</div>
            <div class="practice-subtitle">${q.domain} • Question ${this.currentIndex + 1} of ${this.questions.length} • [${q.questionType || 'Multiple Choice'}]</div>
          </div>
        </div>

        <div class="practice-filter-bar">
          <select id="practice-domain-filter" class="filter-select">
            <option value="all" ${this.activeFilter === "all" ? "selected" : ""}>All Questions (450 Question Pool)</option>
            <option value="pbq-all" ${this.activeFilter === "pbq-all" || this.activeFilter === "pbq" ? "selected" : ""}>🛠️ All PBQ & Performance-Based Questions (82 Questions)</option>
            <option value="pbq-matching" ${this.activeFilter === "pbq-matching" ? "selected" : ""}>🧩 Matching PBQs (60 Questions)</option>
            <option value="pbq-ordering" ${this.activeFilter === "pbq-ordering" ? "selected" : ""}>🔢 Ordering / Sequence PBQs (10 Questions)</option>
            <option value="pbq-multiselect" ${this.activeFilter === "pbq-multiselect" ? "selected" : ""}>☑️ Multi-Select PBQ Questions (12 Questions)</option>
            <option value="exam-1" ${this.activeFilter === "exam-1" ? "selected" : ""}>📝 Mock Exam 1 (90 Questions)</option>
            <option value="exam-2" ${this.activeFilter === "exam-2" ? "selected" : ""}>📝 Mock Exam 2 (90 Questions)</option>
            <option value="exam-3" ${this.activeFilter === "exam-3" ? "selected" : ""}>📝 Mock Exam 3 (90 Questions)</option>
            <option value="exam-4" ${this.activeFilter === "exam-4" ? "selected" : ""}>📝 Mock Exam 4 (90 Questions)</option>
            <option value="exam-5" ${this.activeFilter === "exam-5" ? "selected" : ""}>📝 Security+ Practice Exam 05 (90 Questions)</option>
            <option value="1" ${this.activeFilter === 1 || this.activeFilter === "1" ? "selected" : ""}>Domain 1: General Security Concepts (12%)</option>
            <option value="2" ${this.activeFilter === 2 || this.activeFilter === "2" ? "selected" : ""}>Domain 2: Threats, Vulnerabilities & Mitigations (22%)</option>
            <option value="3" ${this.activeFilter === 3 || this.activeFilter === "3" ? "selected" : ""}>Domain 3: Security Architecture (18%)</option>
            <option value="4" ${this.activeFilter === 4 || this.activeFilter === "4" ? "selected" : ""}>Domain 4: Security Operations (28%)</option>
            <option value="5" ${this.activeFilter === 5 || this.activeFilter === "5" ? "selected" : ""}>Domain 5: Security Program Management & Oversight (20%)</option>
            <option value="missed" ${this.activeFilter === "missed" ? "selected" : ""}>🎯 Missed Questions Vault (${StorageManager.getMissedQuestionIds().length})</option>
            <option value="bookmarked" ${this.activeFilter === "bookmarked" ? "selected" : ""}>⭐ Bookmarked Questions (${StorageManager.getBookmarks().length})</option>
          </select>

          <button id="btn-practice-speak" class="action-pill-btn" title="Read Question Aloud">
            <span>🔊</span> Read Aloud
          </button>

          <button id="btn-practice-bookmark" class="action-pill-btn ${isBookmarked ? 'bookmarked-active' : ''}" title="Bookmark Question">
            <span>${isBookmarked ? '⭐ Bookmarked' : '☆ Bookmark'}</span>
          </button>

          <button id="btn-practice-note" class="action-pill-btn" title="Add Personal Study Note">
            <span>📝</span> Note ${noteText ? '•' : ''}
          </button>
        </div>
      </div>

      <!-- Practice Main Card -->
      <div class="practice-main-card">
        <div class="question-meta-row">
          <span class="q-number-tag">Question ${this.currentIndex + 1} of ${this.questions.length}</span>
          <span class="q-type-tag badge-info">${q.questionType || 'Multiple Choice'}</span>
          <span class="objective-tag">${q.objective}</span>
        </div>

        <div class="question-text-block">
          <p>${q.question.replace(/\n/g, "<br>")}</p>
        </div>

        <!-- Render Question Body by Type -->
        <div class="question-interactive-container">
          ${this.renderQuestionOptions(q, state)}
        </div>

        <!-- Submit / Check Answer Button -->
        ${!state.isSubmitted ? `
          <div class="practice-check-btn-row">
            <button id="btn-check-answer" class="exam-nav-btn primary" ${!this.isAnswerSelected(q, state) ? "disabled" : ""}>
              ✓ Verify & Check Answer
            </button>
          </div>
        ` : ''}

        <!-- Explanation Drawer -->
        ${state.isSubmitted ? `
          <div class="practice-explanation-drawer animate-fade-in">
            <div class="drawer-header ${isCorrect ? 'drawer-pass' : 'drawer-fail'}">
              <span>${isCorrect ? '🎉 Excellent! Correct Answer.' : '⚠️ Incorrect. Review the detailed rationales below:'}</span>
            </div>
            <div class="drawer-content">
              <div class="drawer-meta-bar">
                <span class="drawer-domain-tag"><strong>Domain & Objective:</strong> ${q.domain} • ${q.objective}</span>
              </div>
              <div class="exp-body-text">${ExplanationFormatter.format(q.explanation)}</div>
            </div>
          </div>
        ` : ''}
      </div>

      <!-- Practice Footer Navigator -->
      <div class="practice-footer-bar">
        <button id="btn-p-prev" class="exam-nav-btn secondary" ${this.currentIndex === 0 ? "disabled" : ""}>
          ← Previous
        </button>

        <div class="practice-counter-pill">
          ${this.currentIndex + 1} / ${this.questions.length}
        </div>

        <button id="btn-p-next" class="exam-nav-btn primary" ${this.currentIndex === this.questions.length - 1 ? "disabled" : ""}>
          Next →
        </button>
      </div>
    `;

    this.attachPracticeEvents(q, state);
  }

  renderQuestionOptions(q, state) {
    if (q.questionType === "Matching" && q.matchingItems && q.matchingDescriptions) {
      return `
        <div class="matching-container">
          <div class="matching-instructions-bar">
            <span>Select the correct description for each numbered item:</span>
          </div>
          <div class="matching-grid">
            ${q.matchingItems.map(item => {
              const userMatch = state.userMatches[item.num] || "";
              const isMatchCorrect = userMatch === item.correctLetter;
              return `
                <div class="matching-row ${state.isSubmitted ? (isMatchCorrect ? 'match-correct' : 'match-incorrect') : ''}">
                  <div class="matching-item-title">
                    <span class="matching-num">${item.num}.</span>
                    <span class="matching-text"><strong>${item.text}</strong></span>
                  </div>
                  <div class="matching-select-wrapper">
                    <select class="matching-select" data-item-num="${item.num}" ${state.isSubmitted ? 'disabled' : ''}>
                      <option value="">-- Select Match --</option>
                      ${q.matchingDescriptions.map(d => `
                        <option value="${d.letter}" ${userMatch === d.letter ? 'selected' : ''}>
                          ${d.letter}. ${d.text}
                        </option>
                      `).join("")}
                    </select>
                  </div>
                  ${state.isSubmitted ? `
                    <div class="matching-feedback-badge ${isMatchCorrect ? 'pass' : 'fail'}">
                      ${isMatchCorrect ? '✓ Matched' : `✗ Correct: ${item.correctLetter}`}
                    </div>
                  ` : ''}
                </div>
              `;
            }).join("")}
          </div>
        </div>
      `;
    }

    if (q.questionType === "Ordering" && q.orderingItems) {
      const itemsMap = {};
      q.orderingItems.forEach(it => { itemsMap[it.letter] = it.text; });
      const currentOrder = state.userOrder && state.userOrder.length > 0 ? state.userOrder : q.orderingItems.map(i => i.letter);

      return `
        <div class="ordering-container">
          <div class="ordering-instructions-bar">
            <span>Use the arrows to arrange the steps into the correct sequence:</span>
          </div>
          <div class="ordering-list">
            ${currentOrder.map((letter, idx) => {
              const text = itemsMap[letter] || "";
              const expectedLetter = q.correctOrder ? q.correctOrder[idx] : null;
              const isPositionCorrect = expectedLetter === letter;

              return `
                <div class="ordering-item-row ${state.isSubmitted ? (isPositionCorrect ? 'order-correct' : 'order-incorrect') : ''}">
                  <span class="order-step-tag">Step ${idx + 1}</span>
                  <span class="order-letter-tag">${letter}</span>
                  <div class="order-text">${text}</div>
                  <div class="order-move-btns">
                    <button class="order-btn-move" data-dir="up" data-idx="${idx}" ${idx === 0 || state.isSubmitted ? 'disabled' : ''}>▲</button>
                    <button class="order-btn-move" data-dir="down" data-idx="${idx}" ${idx === currentOrder.length - 1 || state.isSubmitted ? 'disabled' : ''}>▼</button>
                  </div>
                  ${state.isSubmitted ? `
                    <span class="order-feedback-tag ${isPositionCorrect ? 'pass' : 'fail'}">
                      ${isPositionCorrect ? '✓' : `Expected: ${expectedLetter}`}
                    </span>
                  ` : ''}
                </div>
              `;
            }).join("")}
          </div>
          ${state.isSubmitted ? `
            <div class="order-solution-banner">
              <strong>Correct Sequence:</strong> ${q.correctAnswerRaw || q.correctOrder.join(" > ")}
            </div>
          ` : ''}
        </div>
      `;
    }

    if (q.isMultiSelect) {
      const reqCount = q.requiredSelectCount || 2;
      return `
        <div class="multiselect-container">
          <div class="multiselect-hint-bar">
            <span>☑️ Choose <strong>${reqCount}</strong> correct options:</span>
          </div>
          <div class="options-container">
            ${q.options.map((opt, idx) => {
              const isSelected = state.selectedIndices.includes(idx);
              const isCorrectTarget = q.correctOptions && q.correctOptions.includes(idx);
              let rowClass = "option-row multiselect-row";
              if (isSelected) rowClass += " selected";

              if (state.isSubmitted) {
                if (isCorrectTarget) {
                  rowClass += " practice-correct-highlight";
                } else if (isSelected && !isCorrectTarget) {
                  rowClass += " practice-incorrect-highlight";
                }
              }

              return `
                <div class="${rowClass}" data-multi-index="${idx}">
                  <div class="option-checkbox">${isSelected ? '☑' : '☐'}</div>
                  <div class="option-letter">${String.fromCharCode(65 + idx)}</div>
                  <div class="option-text">${opt}</div>
                  ${state.isSubmitted && isCorrectTarget ? '<span class="status-tag correct">✓ Correct</span>' : ''}
                  ${state.isSubmitted && isSelected && !isCorrectTarget ? '<span class="status-tag incorrect">✗ Your Choice</span>' : ''}
                </div>
              `;
            }).join("")}
          </div>
        </div>
      `;
    }

    // Default Single Multiple Choice
    return `
      <div class="options-container">
        ${q.options.map((opt, idx) => {
          let rowClass = "option-row";
          if (state.selectedIndex === idx) rowClass += " selected";
          
          if (state.isSubmitted) {
            if (idx === q.correctOption) {
              rowClass += " practice-correct-highlight";
            } else if (state.selectedIndex === idx && idx !== q.correctOption) {
              rowClass += " practice-incorrect-highlight";
            }
          }

          return `
            <div class="${rowClass}" data-index="${idx}">
              <div class="option-letter">${String.fromCharCode(65 + idx)}</div>
              <div class="option-text">${opt}</div>
              ${state.isSubmitted && idx === q.correctOption ? '<span class="status-tag correct">✓ Correct</span>' : ''}
              ${state.isSubmitted && state.selectedIndex === idx && idx !== q.correctOption ? '<span class="status-tag incorrect">✗ Your Answer</span>' : ''}
            </div>
          `;
        }).join("")}
      </div>
    `;
  }

  isAnswerSelected(q, state) {
    if (q.questionType === "Matching") {
      if (!q.matchingItems) return true;
      return q.matchingItems.every(it => state.userMatches && state.userMatches[it.num]);
    }
    if (q.questionType === "Ordering") {
      return state.userOrder && state.userOrder.length > 0;
    }
    if (q.isMultiSelect) {
      return state.selectedIndices && state.selectedIndices.length > 0;
    }
    return state.selectedIndex !== null;
  }

  evaluateCorrectness(q, state) {
    if (q.questionType === "Matching") {
      if (!q.matchingItems || !state.userMatches) return false;
      return q.matchingItems.every(it => state.userMatches[it.num] === it.correctLetter);
    }
    if (q.questionType === "Ordering") {
      if (!q.correctOrder || !state.userOrder) return false;
      return q.userOrder.join("") === q.correctOrder.join("");
    }
    if (q.isMultiSelect) {
      if (!q.correctOptions || !state.selectedIndices) return false;
      const uSorted = [...state.selectedIndices].sort().join(",");
      const cSorted = [...q.correctOptions].sort().join(",");
      return uSorted === cSorted;
    }
    return state.selectedIndex === q.correctOption;
  }

  attachPracticeEvents(q, state) {
    // Single choice options
    if (!q.isMultiSelect && q.questionType !== "Matching" && q.questionType !== "Ordering") {
      const optionRows = document.querySelectorAll(".option-row:not(.multiselect-row)");
      optionRows.forEach(row => {
        row.addEventListener("click", () => {
          if (state.isSubmitted) return;
          const idx = parseInt(row.getAttribute("data-index"));
          state.selectedIndex = idx;
          this.renderPracticeView();
        });
      });
    }

    // Multi-select options
    if (q.isMultiSelect) {
      const multiRows = document.querySelectorAll(".multiselect-row");
      multiRows.forEach(row => {
        row.addEventListener("click", () => {
          if (state.isSubmitted) return;
          const idx = parseInt(row.getAttribute("data-multi-index"));
          if (state.selectedIndices.includes(idx)) {
            state.selectedIndices = state.selectedIndices.filter(i => i !== idx);
          } else {
            state.selectedIndices.push(idx);
          }
          this.renderPracticeView();
        });
      });
    }

    // Matching dropdowns
    if (q.questionType === "Matching") {
      document.querySelectorAll(".matching-select").forEach(sel => {
        sel.addEventListener("change", (e) => {
          const itemNum = parseInt(sel.getAttribute("data-item-num"));
          state.userMatches[itemNum] = e.target.value;
          // update check answer button state
          const btnCheck = document.getElementById("btn-check-answer");
          if (btnCheck) {
            btnCheck.disabled = !this.isAnswerSelected(q, state);
          }
        });
      });
    }

    // Ordering move buttons
    if (q.questionType === "Ordering") {
      document.querySelectorAll(".order-btn-move").forEach(btn => {
        btn.addEventListener("click", () => {
          if (state.isSubmitted) return;
          const idx = parseInt(btn.getAttribute("data-idx"));
          const dir = btn.getAttribute("data-dir");
          const targetIdx = dir === "up" ? idx - 1 : idx + 1;
          if (targetIdx >= 0 && targetIdx < state.userOrder.length) {
            const temp = state.userOrder[idx];
            state.userOrder[idx] = state.userOrder[targetIdx];
            state.userOrder[targetIdx] = temp;
            this.renderPracticeView();
          }
        });
      });
    }

    // Check Answer
    const btnCheck = document.getElementById("btn-check-answer");
    if (btnCheck) {
      btnCheck.addEventListener("click", () => {
        state.isSubmitted = true;
        const isPass = this.evaluateCorrectness(q, state);
        if (isPass) {
          StorageManager.removeMissedQuestion(q.id);
        } else {
          StorageManager.recordMissedQuestions([q.id]);
        }
        this.renderPracticeView();
      });
    }

    // Domain filter dropdown
    const filterSelect = document.getElementById("practice-domain-filter");
    if (filterSelect) {
      filterSelect.addEventListener("change", (e) => {
        this.startPractice(e.target.value);
      });
    }

    // Speak Question
    const btnSpeak = document.getElementById("btn-practice-speak");
    if (btnSpeak) {
      btnSpeak.addEventListener("click", () => {
        if (!window.speechSynthesis) return;
        window.speechSynthesis.cancel();
        let optionsText = "";
        if (q.questionType === "Matching" && q.matchingItems) {
          optionsText = "Items to match: " + q.matchingItems.map(i => `${i.num}. ${i.text}`).join(". ");
        } else if (q.questionType === "Ordering" && q.orderingItems) {
          optionsText = "Steps to arrange: " + q.orderingItems.map(i => `${i.letter}. ${i.text}`).join(". ");
        } else {
          optionsText = q.options.map((opt, i) => `Option ${String.fromCharCode(65 + i)}: ${opt}`).join(". ");
        }
        const textToSpeak = `Question ${this.currentIndex + 1}. ${q.question}. ${optionsText}`;
        const utter = new SpeechSynthesisUtterance(textToSpeak);
        utter.rate = 1.0;
        window.speechSynthesis.speak(utter);
      });
    }

    // Bookmark Toggle
    const btnBookmark = document.getElementById("btn-practice-bookmark");
    if (btnBookmark) {
      btnBookmark.addEventListener("click", () => {
        StorageManager.toggleBookmark(q.id);
        this.renderPracticeView();
      });
    }

    // Notes
    const btnNote = document.getElementById("btn-practice-note");
    if (btnNote) {
      btnNote.addEventListener("click", () => {
        window.app.openScratchpadModal(q.id);
      });
    }

    // Previous & Next
    const btnPrev = document.getElementById("btn-p-prev");
    if (btnPrev) {
      btnPrev.addEventListener("click", () => {
        if (this.currentIndex > 0) {
          this.currentIndex--;
          this.renderPracticeView();
        }
      });
    }

    const btnNext = document.getElementById("btn-p-next");
    if (btnNext) {
      btnNext.addEventListener("click", () => {
        if (this.currentIndex < this.questions.length - 1) {
          this.currentIndex++;
          this.renderPracticeView();
        }
      });
    }
  }
}
