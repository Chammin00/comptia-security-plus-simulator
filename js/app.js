// Main Application Coordinator for CompTIA Security+ Exam Simulator

class AppCoordinator {
  constructor() {
    this.currentView = "dashboard";
    this.examEngine = new ExamEngine();
    this.practiceEngine = new PracticeEngine();
    this.pbqEngine = new PBQEngine();
    this.flashcardEngine = new FlashcardEngine();
    this.matchingEngine = new MatchingEngine();
    this.audioReaderEngine = new AudioReaderEngine();
    this.activeScratchpadQId = null;

    this.init();
  }

  init() {
    // Apply saved theme
    this.applyTheme(StorageManager.getTheme());

    // Setup navigation bar listeners
    this.setupNavigation();

    // Setup global keyboard shortcuts
    this.setupKeyboardShortcuts();

    // Setup modals
    this.setupModals();

    // Setup dashboard quick action buttons
    this.setupDashboardActions();

    // Render initial dashboard view
    this.showView("dashboard");
  }

  applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    StorageManager.setTheme(theme);
    const themeBtn = document.getElementById("btn-theme-toggle");
    if (themeBtn) {
      themeBtn.innerHTML = theme === "dark" ? "🌙 Dark SOC" : "☀️ Light Mode";
    }
  }

  toggleTheme() {
    const current = StorageManager.getTheme();
    const next = current === "dark" ? "light" : "dark";
    this.applyTheme(next);
  }

  setupNavigation() {
    document.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetView = link.getAttribute("data-view");
        if (targetView) {
          this.showView(targetView);
        }
      });
    });

    const btnTheme = document.getElementById("btn-theme-toggle");
    if (btnTheme) {
      btnTheme.addEventListener("click", () => this.toggleTheme());
    }
  }

  showView(viewName, param = null) {
    // If leaving audio reader, pause/stop speech if playing
    if (this.currentView === "audio-reader" && viewName !== "audio-reader") {
      this.audioReaderEngine.stopSpeech();
    }

    this.currentView = viewName;

    // Update active nav styling
    document.querySelectorAll(".nav-link").forEach(link => {
      if (link.getAttribute("data-view") === viewName) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });

    // Hide all view panels
    document.querySelectorAll(".view-panel").forEach(panel => {
      panel.classList.remove("active-panel");
    });

    // Show target view panel
    const targetPanel = document.getElementById(`view-${viewName}`);
    if (targetPanel) {
      targetPanel.classList.add("active-panel");
    }

    // Trigger engine view rendering
    if (viewName === "dashboard") {
      this.renderDashboard();
    } else if (viewName === "audio-reader") {
      this.audioReaderEngine.startAudioReader("all");
    } else if (viewName === "exam") {
      if (param && typeof param === "object") {
        this.examEngine.startExam(param);
      } else if (!this.examEngine.questions || this.examEngine.questions.length === 0) {
        this.examEngine.startExam({
          mode: "full",
          questionCount: 90,
          durationMinutes: 90,
          domains: [1, 2, 3, 4, 5],
          includePbqs: true
        });
      } else {
        this.examEngine.renderQuestionView();
      }
    } else if (viewName === "practice") {
      this.practiceEngine.startPractice(param || "all");
    } else if (viewName === "pbq") {
      this.pbqEngine.startPBQMode(typeof param === "number" ? param : 0);
    } else if (viewName === "flashcards") {
      this.flashcardEngine.startFlashcards("all");
    } else if (viewName === "drills") {
      this.flashcardEngine.startDrill("ports");
    } else if (viewName === "matching") {
      this.matchingEngine.startMatching(param || "all", "column");
    } else if (viewName === "analytics") {
      AnalyticsManager.renderAnalyticsDashboard();
    }
  }

  renderDashboard() {
    const readinessData = AnalyticsManager.calculateReadiness();
    const missedCount = StorageManager.getMissedQuestionIds().length;
    const bookmarkCount = StorageManager.getBookmarks().length;

    const readinessNumElem = document.getElementById("dash-readiness-num");
    const readinessTagElem = document.getElementById("dash-readiness-tag");
    const readinessAdviceElem = document.getElementById("dash-readiness-advice");
    const missedBadgeElem = document.getElementById("dash-missed-count");
    const bookmarkBadgeElem = document.getElementById("dash-bookmark-count");

    if (readinessNumElem) readinessNumElem.textContent = `${readinessData.score}%`;
    if (readinessTagElem) {
      readinessTagElem.textContent = readinessData.status;
      readinessTagElem.className = `readiness-tag ${readinessData.badgeClass}`;
    }
    if (readinessAdviceElem) readinessAdviceElem.textContent = readinessData.advice;
    if (missedBadgeElem) missedBadgeElem.textContent = missedCount;
    if (bookmarkBadgeElem) bookmarkBadgeElem.textContent = bookmarkCount;

    // Render domain progress bars on dashboard
    const domainGrid = document.getElementById("dash-domain-bars");
    if (domainGrid) {
      domainGrid.innerHTML = EXAM_DOMAINS.map(d => {
        const stats = readinessData.domainMastery[d.id] || { pct: 0, correct: 0, total: 0 };
        return `
          <div class="dash-domain-card" data-domain="${d.id}">
            <div class="d-card-top">
              <span class="d-card-name">${d.name}</span>
              <span class="d-card-weight">${d.weight}</span>
            </div>
            <div class="domain-bar-bg">
              <div class="domain-bar-fill" style="width: ${stats.pct}%; background-color: ${d.color};"></div>
            </div>
            <div class="d-card-bottom">
              <span>Mastery: <strong>${stats.pct}%</strong></span>
              <button class="dash-d-btn" onclick="window.app.startDomainPractice(${d.id})">Practice →</button>
            </div>
          </div>
        `;
      }).join("");
    }
  }

  setupDashboardActions() {
    // Start Full Timed Exam
    const btnStartFull = document.getElementById("btn-start-full-exam");
    if (btnStartFull) {
      btnStartFull.addEventListener("click", () => {
        this.startFullExam();
      });
    }

    // Custom Exam Builder Button
    const btnCustomExam = document.getElementById("btn-custom-exam");
    if (btnCustomExam) {
      btnCustomExam.addEventListener("click", () => {
        this.openCustomExamModal();
      });
    }

    // Missed questions quick practice
    const btnMissedPractice = document.getElementById("btn-dash-missed");
    if (btnMissedPractice) {
      btnMissedPractice.addEventListener("click", () => {
        this.startMissedPractice();
      });
    }

    // Bookmarked questions quick practice
    const btnBookmarkPractice = document.getElementById("btn-dash-bookmarks");
    if (btnBookmarkPractice) {
      btnBookmarkPractice.addEventListener("click", () => {
        this.showView("practice", "bookmarked");
      });
    }

    // Launch Mock Exam Set in Timed Mode
    document.querySelectorAll(".btn-launch-exam-set").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        const examSet = btn.getAttribute("data-set");
        this.launchExamSet(examSet);
      });
    });

    // Launch Mock Exam Set in Study Mode
    document.querySelectorAll(".btn-launch-study-set").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        const filter = btn.getAttribute("data-filter");
        this.launchStudySet(filter);
      });
    });
  }

  launchExamSet(examSet) {
    const isPbq = examSet === "PBQ Practice Exam";
    this.showView("exam");
    this.examEngine.startExam({
      mode: isPbq ? "pbq" : "custom",
      examSet: examSet,
      isPbqOnly: isPbq,
      questionCount: isPbq ? 40 : 90,
      durationMinutes: isPbq ? 45 : 90,
      domains: [1, 2, 3, 4, 5],
      includePbqs: true
    });
  }

  launchStudySet(filter) {
    this.showView("practice", filter);
  }

  startPbqExam() {
    this.launchExamSet("PBQ Practice Exam");
  }

  startPbqStudy() {
    this.launchStudySet("pbq-all");
  }

  startPbqLab(index = 0) {
    this.showView("pbq", index);
  }

  startFullExam() {
    this.showView("exam", {
      mode: "full",
      questionCount: 90,
      durationMinutes: 90,
      domains: [1, 2, 3, 4, 5],
      includePbqs: true
    });
  }

  startDomainPractice(domainId) {
    this.showView("practice", domainId);
  }

  startMissedPractice(specificIds = null) {
    if (specificIds && specificIds.length > 0) {
      this.showView("practice");
      this.practiceEngine.startPractice("missed", specificIds);
    } else {
      this.showView("practice", "missed");
    }
  }

  // --- Modals Management ---
  setupModals() {
    // Close modal on backdrop click or close button
    document.querySelectorAll(".modal-overlay").forEach(modal => {
      modal.addEventListener("click", (e) => {
        if (e.target === modal || e.target.classList.contains("modal-close-btn")) {
          modal.classList.remove("active-modal");
        }
      });
    });

    // Custom Exam Form
    const customForm = document.getElementById("custom-exam-form");
    if (customForm) {
      customForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const examSet = document.getElementById("custom-exam-set").value;
        const count = parseInt(document.getElementById("custom-q-count").value);
        const time = parseInt(document.getElementById("custom-time-limit").value);
        const isPbq = examSet === "PBQ Practice Exam";
        
        const selectedDomains = [];
        document.querySelectorAll(".custom-domain-cb:checked").forEach(cb => {
          selectedDomains.push(parseInt(cb.value));
        });

        if (selectedDomains.length === 0 && !isPbq) {
          alert("Please select at least one domain for your custom exam.");
          return;
        }

        document.getElementById("modal-custom-exam").classList.remove("active-modal");
        this.showView("exam");
        this.examEngine.startExam({
          mode: isPbq ? "pbq" : "custom",
          examSet: examSet,
          isPbqOnly: isPbq,
          questionCount: count,
          durationMinutes: time,
          domains: selectedDomains.length > 0 ? selectedDomains : [1, 2, 3, 4, 5]
        });
      });
    }

    // Scratchpad save
    const noteTextarea = document.getElementById("scratchpad-textarea");
    if (noteTextarea) {
      noteTextarea.addEventListener("input", (e) => {
        if (this.activeScratchpadQId) {
          StorageManager.saveNoteForQuestion(this.activeScratchpadQId, e.target.value);
        }
      });
    }
  }

  openCustomExamModal() {
    const modal = document.getElementById("modal-custom-exam");
    if (modal) modal.classList.add("active-modal");
  }

  openScratchpadModal(questionId) {
    this.activeScratchpadQId = questionId;
    const modal = document.getElementById("modal-scratchpad");
    const textarea = document.getElementById("scratchpad-textarea");
    const title = document.getElementById("scratchpad-modal-title");

    if (textarea) {
      textarea.value = StorageManager.getNoteForQuestion(questionId);
    }
    if (title) {
      title.textContent = `Scratchpad & Notes (${questionId})`;
    }
    if (modal) {
      modal.classList.add("active-modal");
    }
  }

  setupKeyboardShortcuts() {
    document.addEventListener("keydown", (e) => {
      // Ignore if typing inside textarea or text input
      if (["INPUT", "TEXTAREA", "SELECT"].includes(e.target.tagName)) return;

      const key = e.key.toUpperCase();

      if (this.currentView === "audio-reader") {
        if (key === "ARROWLEFT" || key === "P") {
          e.preventDefault();
          this.audioReaderEngine.previousItem();
        } else if (key === "ARROWRIGHT" || key === "N") {
          e.preventDefault();
          this.audioReaderEngine.nextItem();
        } else if (e.code === "Space") {
          e.preventDefault();
          if (this.audioReaderEngine.isPlaying && !this.audioReaderEngine.isPaused) {
            this.audioReaderEngine.pauseSpeech();
          } else if (this.audioReaderEngine.isPaused) {
            this.audioReaderEngine.resumeSpeech();
          } else {
            this.audioReaderEngine.speakCurrent();
          }
        }
      } else if (this.currentView === "exam" && !this.examEngine.isReviewScreen && !this.examEngine.isFinished) {
        const q = this.examEngine.questions[this.examEngine.currentIndex];
        if (!q) return;

        // 1-4 or A-D for option selection
        if (["1", "2", "3", "4"].includes(key)) {
          const idx = parseInt(key) - 1;
          if (idx < q.options.length) {
            this.examEngine.userAnswers[q.id] = idx;
            this.examEngine.renderQuestionView();
          }
        } else if (["A", "B", "C", "D"].includes(key)) {
          const idx = key.charCodeAt(0) - 65;
          if (idx < q.options.length) {
            this.examEngine.userAnswers[q.id] = idx;
            this.examEngine.renderQuestionView();
          }
        } else if (key === "N") {
          // Next
          if (this.examEngine.currentIndex < this.examEngine.questions.length - 1) {
            this.examEngine.currentIndex++;
            this.examEngine.renderQuestionView();
          }
        } else if (key === "P") {
          // Prev
          if (this.examEngine.currentIndex > 0) {
            this.examEngine.currentIndex--;
            this.examEngine.renderQuestionView();
          }
        } else if (key === "F") {
          // Flag
          if (this.examEngine.flagged.has(q.id)) {
            this.examEngine.flagged.delete(q.id);
          } else {
            this.examEngine.flagged.add(q.id);
          }
          this.examEngine.renderQuestionView();
        }
      } else if (this.currentView === "flashcards") {
        if (e.code === "Space") {
          e.preventDefault();
          const card = document.getElementById("active-flashcard");
          if (card) {
            this.flashcardEngine.isFlipped = !this.flashcardEngine.isFlipped;
            card.classList.toggle("flipped", this.flashcardEngine.isFlipped);
          }
        } else if (key === "ARROWLEFT" || key === "P") {
          if (this.flashcardEngine.currentCardIndex > 0) {
            this.flashcardEngine.currentCardIndex--;
            this.flashcardEngine.isFlipped = false;
            this.flashcardEngine.renderFlashcardView();
          }
        } else if (key === "ARROWRIGHT" || key === "N") {
          if (this.flashcardEngine.currentCardIndex < this.flashcardEngine.cards.length - 1) {
            this.flashcardEngine.currentCardIndex++;
            this.flashcardEngine.isFlipped = false;
            this.flashcardEngine.renderFlashcardView();
          }
        }
      }
    });
  }
}

// Global bootstrap
window.addEventListener("DOMContentLoaded", () => {
  window.app = new AppCoordinator();
});
