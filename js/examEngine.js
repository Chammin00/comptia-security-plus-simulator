// CompTIA Security+ Realistic Exam Engine (Pearson VUE Simulation)
// Full Multi-Question Type Support: Multiple Choice, Select Two/Three, Matching, Ordering

class ExamEngine {
  constructor() {
    this.questions = [];
    this.currentIndex = 0;
    this.userAnswers = {}; // questionId -> selected choice (index, array of indices, matches object, or order array)
    this.flagged = new Set(); // set of questionIds
    this.struckThrough = {}; // questionId -> Set of option indices
    this.timeRemaining = 90 * 60; // seconds
    this.timerInterval = null;
    this.isReviewScreen = false;
    this.isFinished = false;
    this.examConfig = {
      mode: "full", // "full" or "custom"
      examSet: "all",
      questionCount: 90,
      durationMinutes: 90,
      domains: [1, 2, 3, 4, 5],
      includePbqs: true
    };
  }

  startExam(config = {}) {
    this.examConfig = { ...this.examConfig, ...config };
    this.userAnswers = {};
    this.flagged = new Set();
    this.struckThrough = {};
    this.currentIndex = 0;
    this.isReviewScreen = false;
    this.isFinished = false;

    // Filter questions according to selected examSet or domains or PBQ mode
    let pool = SECURITY_QUESTIONS;
    if (this.examConfig.isPbqOnly || this.examConfig.examSet === "PBQ Practice Exam" || this.examConfig.mode === "pbq") {
      pool = pool.filter(q => q.questionType === "Matching" || q.questionType === "Ordering" || q.questionType === "Select Two" || q.questionType === "Select Three");
      this.examConfig.questionCount = Math.min(this.examConfig.questionCount || 40, pool.length);
    } else if (this.examConfig.examSet && this.examConfig.examSet !== "all") {
      pool = pool.filter(q => q.examSet === this.examConfig.examSet);
    } else if (this.examConfig.domains && this.examConfig.domains.length > 0) {
      pool = pool.filter(q => this.examConfig.domains.includes(q.domainId));
    }
    
    // For realistic full exams (like Mock Exams and Full Exam), ensure 3-5 PBQs appear at the beginning
    if (!this.examConfig.isPbqOnly && this.examConfig.mode !== "pbq" && (!this.examConfig.examSet || this.examConfig.examSet === "all" || this.examConfig.examSet.startsWith("Practice Exam"))) {
      const pbqItems = pool.filter(q => q.questionType === "Matching" || q.questionType === "Ordering" || q.questionType === "Select Two");
      const mcqItems = pool.filter(q => q.questionType === "Multiple Choice");
      
      const shuffledPbqs = this.shuffleArray([...pbqItems]);
      const shuffledMcqs = this.shuffleArray([...mcqItems]);
      
      const pbqCount = Math.min(4, shuffledPbqs.length);
      const totalCount = Math.min(this.examConfig.questionCount || 90, pool.length);
      const mcqCount = Math.max(0, totalCount - pbqCount);
      
      this.questions = [...shuffledPbqs.slice(0, pbqCount), ...shuffledMcqs.slice(0, mcqCount)];
    } else {
      pool = this.shuffleArray([...pool]);
      const count = Math.min(this.examConfig.questionCount || pool.length, pool.length);
      this.questions = pool.slice(0, count);
    }

    // Initialize ordering question defaults
    this.questions.forEach(q => {
      if (q.questionType === "Ordering" && q.orderingItems) {
        this.userAnswers[q.id] = q.orderingItems.map(i => i.letter);
      }
    });

    // Set timer
    this.timeRemaining = this.examConfig.durationMinutes * 60;
    this.startTimer();

    this.renderQuestionView();
  }

  startTimer() {
    clearInterval(this.timerInterval);
    this.timerInterval = setInterval(() => {
      if (this.timeRemaining > 0) {
        this.timeRemaining--;
        this.updateTimerDisplay();
      } else {
        clearInterval(this.timerInterval);
        alert("Time has expired! Submitting your exam now.");
        this.submitExam();
      }
    }, 1000);
  }

  updateTimerDisplay() {
    const display = document.getElementById("exam-timer-display");
    if (!display) return;
    const minutes = Math.floor(this.timeRemaining / 60);
    const seconds = this.timeRemaining % 60;
    display.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    
    if (this.timeRemaining <= 300) {
      display.classList.add("timer-warning");
    } else {
      display.classList.remove("timer-warning");
    }
  }

  renderQuestionView() {
    this.isReviewScreen = false;
    const container = document.getElementById("exam-screen-container");
    if (!container || this.questions.length === 0) return;

    const q = this.questions[this.currentIndex];
    if (!q) return;

    const isFlagged = this.flagged.has(q.id);
    const selectedAnswer = this.userAnswers[q.id];
    const strikes = this.struckThrough[q.id] || new Set();

    const progressPct = Math.round(((this.currentIndex + 1) / this.questions.length) * 100);

    container.innerHTML = `
      <!-- Exam Header / Pearson VUE Style Top Bar -->
      <div class="exam-header-bar">
        <div class="exam-title-badge">
          <span class="exam-badge-icon">🛡️</span>
          <div>
            <div class="exam-top-title">CompTIA Security+ (SY0-701) Exam Simulator</div>
            <div class="exam-top-subtitle">${q.domain} • Question ${this.currentIndex + 1} of ${this.questions.length} • [${q.questionType || 'Multiple Choice'}]</div>
          </div>
        </div>

        <div class="exam-top-controls">
          <div class="timer-box">
            <span class="timer-icon">⏱️</span>
            <span id="exam-timer-display" class="timer-digits">90:00</span>
          </div>

          <button id="btn-flag-question" class="action-pill-btn ${isFlagged ? 'flagged-active' : ''}" title="Flag this question to review later (Shortcut: F)">
            <span class="flag-icon">🚩</span>
            <span class="btn-text">${isFlagged ? "Flagged for Review" : "Flag for Review"}</span>
          </button>

          <button id="btn-scratchpad" class="action-pill-btn" title="Open Scratchpad / Notes">
            <span>📝</span>
            <span class="btn-text">Scratchpad</span>
          </button>
        </div>
      </div>

      <!-- Exam Progress Bar -->
      <div class="exam-progress-track">
        <div class="exam-progress-fill" style="width: ${progressPct}%;"></div>
      </div>

      <!-- Exam Body / Question Content Area -->
      <div class="exam-main-layout">
        <div class="exam-question-column">
          <div class="question-meta-row">
            <span class="q-number-tag">Question ${this.currentIndex + 1}</span>
            <span class="q-type-tag badge-info">${q.questionType || 'Multiple Choice'}</span>
            <span class="objective-tag">${q.objective}</span>
          </div>

          <div class="question-text-block">
            <p>${this.formatQuestionText(q.question)}</p>
          </div>

          <!-- Interactive Options Area by Type -->
          <div class="options-interactive-area">
            ${this.renderExamOptions(q, selectedAnswer, strikes)}
          </div>
        </div>

        <!-- Right Side: Question Matrix Navigator -->
        <div class="exam-nav-sidebar">
          <div class="nav-matrix-header">
            <div class="matrix-title">Question Grid</div>
            <div class="matrix-legend">
              <span class="legend-item"><span class="dot answered"></span> Answered</span>
              <span class="legend-item"><span class="dot flagged"></span> Flagged</span>
            </div>
          </div>
          <div class="nav-matrix-grid">
            ${this.questions.map((item, idx) => {
              const isAnswered = this.isQuestionAnswered(item);
              const flagged = this.flagged.has(item.id);
              const current = idx === this.currentIndex;
              let cls = "matrix-btn";
              if (current) cls += " current";
              if (isAnswered) cls += " answered";
              if (flagged) cls += " flagged";
              return `<button class="${cls}" data-goto="${idx}">${idx + 1}</button>`;
            }).join("")}
          </div>

          <div class="nav-summary-box">
            <div>Answered: <strong>${this.countAnswered()} / ${this.questions.length}</strong></div>
            <div>Flagged: <strong>${this.flagged.size}</strong></div>
          </div>
        </div>
      </div>

      <!-- Exam Footer / Navigation Buttons -->
      <div class="exam-footer-bar">
        <button id="btn-exam-prev" class="exam-nav-btn secondary" ${this.currentIndex === 0 ? "disabled" : ""}>
          ← Previous
        </button>

        <div class="footer-center-tools">
          <button id="btn-exam-review-screen" class="exam-nav-btn neutral">
            📋 Review Screen (${this.countAnswered()}/${this.questions.length})
          </button>
        </div>

        <div class="footer-right-actions">
          ${this.currentIndex === this.questions.length - 1 ? `
            <button id="btn-exam-review-final" class="exam-nav-btn primary">
              Pre-Submission Review →
            </button>
          ` : `
            <button id="btn-exam-next" class="exam-nav-btn primary">
              Next →
            </button>
          `}
        </div>
      </div>
    `;

    this.updateTimerDisplay();
    this.attachQuestionEventListeners(q);
  }

  renderExamOptions(q, selectedAnswer, strikes) {
    if (q.questionType === "Matching" && q.matchingItems && q.matchingDescriptions) {
      const userMatches = selectedAnswer || {};
      return `
        <div class="matching-container">
          <div class="matching-instructions-bar">
            <span>Match each item on the left with the correct description from the dropdown:</span>
          </div>
          <div class="matching-grid">
            ${q.matchingItems.map(item => `
              <div class="matching-row">
                <div class="matching-item-title">
                  <span class="matching-num">${item.num}.</span>
                  <span class="matching-text"><strong>${item.text}</strong></span>
                </div>
                <div class="matching-select-wrapper">
                  <select class="matching-select" data-item-num="${item.num}">
                    <option value="">-- Select Match --</option>
                    ${q.matchingDescriptions.map(d => `
                      <option value="${d.letter}" ${userMatches[item.num] === d.letter ? 'selected' : ''}>
                        ${d.letter}. ${d.text}
                      </option>
                    `).join("")}
                  </select>
                </div>
              </div>
            `).join("")}
          </div>
        </div>
      `;
    }

    if (q.questionType === "Ordering" && q.orderingItems) {
      const itemsMap = {};
      q.orderingItems.forEach(it => { itemsMap[it.letter] = it.text; });
      const currentOrder = Array.isArray(selectedAnswer) && selectedAnswer.length > 0 ? selectedAnswer : q.orderingItems.map(i => i.letter);

      return `
        <div class="ordering-container">
          <div class="ordering-instructions-bar">
            <span>Click the ▲ / ▼ arrows to arrange the sequence in the correct chronological or procedural order:</span>
          </div>
          <div class="ordering-list">
            ${currentOrder.map((letter, idx) => `
              <div class="ordering-item-row">
                <span class="order-step-tag">Step ${idx + 1}</span>
                <span class="order-letter-tag">${letter}</span>
                <div class="order-text">${itemsMap[letter] || ''}</div>
                <div class="order-move-btns">
                  <button class="order-btn-move" data-dir="up" data-idx="${idx}" ${idx === 0 ? 'disabled' : ''}>▲</button>
                  <button class="order-btn-move" data-dir="down" data-idx="${idx}" ${idx === currentOrder.length - 1 ? 'disabled' : ''}>▼</button>
                </div>
              </div>
            `).join("")}
          </div>
        </div>
      `;
    }

    if (q.isMultiSelect) {
      const selectedIndices = Array.isArray(selectedAnswer) ? selectedAnswer : [];
      const reqCount = q.requiredSelectCount || 2;

      return `
        <div class="multiselect-container">
          <div class="multiselect-hint-bar">
            <span>☑️ Select <strong>${reqCount}</strong> choices:</span>
          </div>
          <div class="options-container">
            ${q.options.map((opt, idx) => {
              const isSelected = selectedIndices.includes(idx);
              const isStruck = strikes.has(idx);
              return `
                <div class="option-row multiselect-row ${isSelected ? 'selected' : ''} ${isStruck ? 'struck-out' : ''}" data-multi-index="${idx}">
                  <div class="option-checkbox">${isSelected ? '☑' : '☐'}</div>
                  <div class="option-letter">${String.fromCharCode(65 + idx)}</div>
                  <div class="option-text">${opt}</div>
                  <button class="btn-strikethrough-toggle" title="Strike-through this option">
                    <s>${isStruck ? 'Unstrike' : 'Strike'}</s>
                  </button>
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
          const isSelected = selectedAnswer === idx;
          const isStruck = strikes.has(idx);
          return `
            <div class="option-row ${isSelected ? 'selected' : ''} ${isStruck ? 'struck-out' : ''}" data-index="${idx}">
              <div class="option-letter">${String.fromCharCode(65 + idx)}</div>
              <div class="option-text">${opt}</div>
              <button class="btn-strikethrough-toggle" title="Strike-through this option (eliminate)">
                <s>${isStruck ? 'Unstrike' : 'Strike'}</s>
              </button>
            </div>
          `;
        }).join("")}
      </div>
    `;
  }

  isQuestionAnswered(q) {
    const val = this.userAnswers[q.id];
    if (val === undefined || val === null) return false;
    if (q.questionType === "Matching") {
      if (!q.matchingItems) return false;
      return typeof val === "object" && q.matchingItems.every(it => val[it.num]);
    }
    if (q.questionType === "Ordering") {
      return Array.isArray(val) && val.length > 0;
    }
    if (q.isMultiSelect) {
      return Array.isArray(val) && val.length > 0;
    }
    return typeof val === "number";
  }

  countAnswered() {
    return this.questions.filter(q => this.isQuestionAnswered(q)).length;
  }

  attachQuestionEventListeners(q) {
    // Single Multiple Choice Selection
    if (!q.isMultiSelect && q.questionType !== "Matching" && q.questionType !== "Ordering") {
      const optionRows = document.querySelectorAll(".option-row:not(.multiselect-row)");
      optionRows.forEach(row => {
        row.addEventListener("click", (e) => {
          if (e.target.closest(".btn-strikethrough-toggle")) return;
          const idx = parseInt(row.getAttribute("data-index"));
          this.userAnswers[q.id] = idx;
          this.renderQuestionView();
        });
      });
    }

    // Multi-Select Checkbox Options
    if (q.isMultiSelect) {
      const multiRows = document.querySelectorAll(".multiselect-row");
      multiRows.forEach(row => {
        row.addEventListener("click", (e) => {
          if (e.target.closest(".btn-strikethrough-toggle")) return;
          const idx = parseInt(row.getAttribute("data-multi-index"));
          let currentList = Array.isArray(this.userAnswers[q.id]) ? [...this.userAnswers[q.id]] : [];
          if (currentList.includes(idx)) {
            currentList = currentList.filter(i => i !== idx);
          } else {
            currentList.push(idx);
          }
          this.userAnswers[q.id] = currentList;
          this.renderQuestionView();
        });
      });
    }

    // Matching Dropdowns
    if (q.questionType === "Matching") {
      document.querySelectorAll(".matching-select").forEach(sel => {
        sel.addEventListener("change", (e) => {
          const itemNum = parseInt(sel.getAttribute("data-item-num"));
          if (!this.userAnswers[q.id] || typeof this.userAnswers[q.id] !== "object") {
            this.userAnswers[q.id] = {};
          }
          this.userAnswers[q.id][itemNum] = e.target.value;
          this.renderQuestionView();
        });
      });
    }

    // Ordering Sequence Buttons
    if (q.questionType === "Ordering") {
      document.querySelectorAll(".order-btn-move").forEach(btn => {
        btn.addEventListener("click", () => {
          const idx = parseInt(btn.getAttribute("data-idx"));
          const dir = btn.getAttribute("data-dir");
          let currentOrder = Array.isArray(this.userAnswers[q.id]) ? [...this.userAnswers[q.id]] : q.orderingItems.map(i => i.letter);
          const targetIdx = dir === "up" ? idx - 1 : idx + 1;
          if (targetIdx >= 0 && targetIdx < currentOrder.length) {
            const temp = currentOrder[idx];
            currentOrder[idx] = currentOrder[targetIdx];
            currentOrder[targetIdx] = temp;
            this.userAnswers[q.id] = currentOrder;
            this.renderQuestionView();
          }
        });
      });
    }

    // Strike-through toggles
    const strikeBtns = document.querySelectorAll(".btn-strikethrough-toggle");
    strikeBtns.forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const row = btn.closest(".option-row");
        const idx = parseInt(row.getAttribute("data-index") || row.getAttribute("data-multi-index"));
        if (!this.struckThrough[q.id]) {
          this.struckThrough[q.id] = new Set();
        }
        if (this.struckThrough[q.id].has(idx)) {
          this.struckThrough[q.id].delete(idx);
        } else {
          this.struckThrough[q.id].add(idx);
        }
        this.renderQuestionView();
      });
    });

    // Flag toggle
    const btnFlag = document.getElementById("btn-flag-question");
    if (btnFlag) {
      btnFlag.addEventListener("click", () => {
        if (this.flagged.has(q.id)) {
          this.flagged.delete(q.id);
        } else {
          this.flagged.add(q.id);
        }
        this.renderQuestionView();
      });
    }

    // Scratchpad
    const btnScratch = document.getElementById("btn-scratchpad");
    if (btnScratch) {
      btnScratch.addEventListener("click", () => {
        window.app.openScratchpadModal(q.id);
      });
    }

    // Navigation buttons
    const btnPrev = document.getElementById("btn-exam-prev");
    if (btnPrev) {
      btnPrev.addEventListener("click", () => {
        if (this.currentIndex > 0) {
          this.currentIndex--;
          this.renderQuestionView();
        }
      });
    }

    const btnNext = document.getElementById("btn-exam-next");
    if (btnNext) {
      btnNext.addEventListener("click", () => {
        if (this.currentIndex < this.questions.length - 1) {
          this.currentIndex++;
          this.renderQuestionView();
        }
      });
    }

    const btnReviewScreen = document.getElementById("btn-exam-review-screen");
    if (btnReviewScreen) {
      btnReviewScreen.addEventListener("click", () => {
        this.renderReviewScreen();
      });
    }

    const btnReviewFinal = document.getElementById("btn-exam-review-final");
    if (btnReviewFinal) {
      btnReviewFinal.addEventListener("click", () => {
        this.renderReviewScreen();
      });
    }

    // Matrix navigation
    const matrixBtns = document.querySelectorAll(".matrix-btn");
    matrixBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        const gotoIndex = parseInt(btn.getAttribute("data-goto"));
        this.currentIndex = gotoIndex;
        this.renderQuestionView();
      });
    });
  }

  renderReviewScreen() {
    this.isReviewScreen = true;
    const container = document.getElementById("exam-screen-container");
    if (!container) return;

    const total = this.questions.length;
    const answeredCount = this.countAnswered();
    const unansweredCount = total - answeredCount;
    const flaggedCount = this.flagged.size;

    container.innerHTML = `
      <div class="exam-header-bar">
        <div class="exam-title-badge">
          <span class="exam-badge-icon">📋</span>
          <div>
            <div class="exam-top-title">CompTIA Security+ Exam Review Screen</div>
            <div class="exam-top-subtitle">Review your answers and flagged questions before final submission</div>
          </div>
        </div>

        <div class="exam-top-controls">
          <div class="timer-box">
            <span class="timer-icon">⏱️</span>
            <span id="exam-timer-display" class="timer-digits">90:00</span>
          </div>
        </div>
      </div>

      <div class="review-screen-body">
        <div class="review-stats-banner">
          <div class="stat-card">
            <div class="stat-num">${total}</div>
            <div class="stat-label">Total Questions</div>
          </div>
          <div class="stat-card answered">
            <div class="stat-num">${answeredCount}</div>
            <div class="stat-label">Answered</div>
          </div>
          <div class="stat-card unanswered">
            <div class="stat-num">${unansweredCount}</div>
            <div class="stat-label">Unanswered / Incomplete</div>
          </div>
          <div class="stat-card flagged">
            <div class="stat-num">${flaggedCount}</div>
            <div class="stat-label">Flagged for Review</div>
          </div>
        </div>

        <div class="review-table-container">
          <table class="review-table">
            <thead>
              <tr>
                <th>Q#</th>
                <th>Type</th>
                <th>Domain</th>
                <th>Status</th>
                <th>Flagged</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              ${this.questions.map((q, idx) => {
                const isAnswered = this.isQuestionAnswered(q);
                const isFlagged = this.flagged.has(q.id);
                return `
                  <tr class="${!isAnswered ? 'row-unanswered' : ''}">
                    <td><strong>Question ${idx + 1}</strong></td>
                    <td><span class="q-type-tag badge-info">${q.questionType || 'Multiple Choice'}</span></td>
                    <td>${q.domain}</td>
                    <td>
                      <span class="status-pill ${isAnswered ? 'pill-answered' : 'pill-unanswered'}">
                        ${isAnswered ? '✓ Answered' : '✗ Unanswered'}
                      </span>
                    </td>
                    <td>
                      ${isFlagged ? '<span class="flag-icon-badge">🚩 Flagged</span>' : '<span class="text-muted">-</span>'}
                    </td>
                    <td>
                      <button class="table-jump-btn" data-goto="${idx}">Jump to Question</button>
                    </td>
                  </tr>
                `;
              }).join("")}
            </tbody>
          </table>
        </div>
      </div>

      <div class="exam-footer-bar">
        <button id="btn-return-to-question" class="exam-nav-btn secondary">
          ← Return to Question ${this.currentIndex + 1}
        </button>

        <div class="footer-right-actions">
          <button id="btn-confirm-submit-exam" class="exam-nav-btn danger-submit">
            🚨 End & Submit Exam Now
          </button>
        </div>
      </div>
    `;

    this.updateTimerDisplay();

    document.getElementById("btn-return-to-question").addEventListener("click", () => {
      this.renderQuestionView();
    });

    document.getElementById("btn-confirm-submit-exam").addEventListener("click", () => {
      if (unansweredCount > 0) {
        const confirmEnd = confirm(`You have ${unansweredCount} unanswered/incomplete questions. Are you sure you want to finish and submit the exam?`);
        if (!confirmEnd) return;
      }
      this.submitExam();
    });

    document.querySelectorAll(".table-jump-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const targetIdx = parseInt(btn.getAttribute("data-goto"));
        this.currentIndex = targetIdx;
        this.renderQuestionView();
      });
    });
  }

  evaluateExamAnswer(q, userChoice) {
    if (userChoice === undefined || userChoice === null) return false;
    if (q.questionType === "Matching") {
      if (!q.matchingItems || typeof userChoice !== "object") return false;
      return q.matchingItems.every(it => userChoice[it.num] === it.correctLetter);
    }
    if (q.questionType === "Ordering") {
      if (!q.correctOrder || !Array.isArray(userChoice)) return false;
      return userChoice.join("") === q.correctOrder.join("");
    }
    if (q.isMultiSelect) {
      if (!q.correctOptions || !Array.isArray(userChoice)) return false;
      const uSorted = [...userChoice].sort().join(",");
      const cSorted = [...q.correctOptions].sort().join(",");
      return uSorted === cSorted;
    }
    return userChoice === q.correctOption;
  }

  submitExam() {
    clearInterval(this.timerInterval);
    this.isFinished = true;

    // Calculate score
    let correctCount = 0;
    const domainStats = {};
    const missedQuestionIds = [];

    EXAM_DOMAINS.forEach(d => {
      domainStats[d.id] = { name: d.name, total: 0, correct: 0 };
    });

    this.questions.forEach(q => {
      const userChoice = this.userAnswers[q.id];
      const isCorrect = this.evaluateExamAnswer(q, userChoice);

      if (!domainStats[q.domainId]) {
        domainStats[q.domainId] = { name: q.domain, total: 0, correct: 0 };
      }

      domainStats[q.domainId].total++;

      if (isCorrect) {
        correctCount++;
        domainStats[q.domainId].correct++;
      } else {
        missedQuestionIds.push(q.id);
      }
    });

    const total = this.questions.length;
    const percentage = total > 0 ? (correctCount / total) * 100 : 0;

    // CompTIA Scaled Score (100 - 900 scale, passing score 750 = ~83.3%)
    const scaledScore = Math.round(100 + (percentage / 100) * 800);
    const passed = scaledScore >= 750;

    const timeSpentSeconds = (this.examConfig.durationMinutes * 60) - this.timeRemaining;

    const examResult = {
      id: "exam-" + Date.now(),
      date: new Date().toISOString(),
      mode: this.examConfig.mode,
      totalQuestions: total,
      correctCount: correctCount,
      percentage: Math.round(percentage),
      scaledScore: scaledScore,
      passed: passed,
      timeSpentSeconds: timeSpentSeconds,
      domainStats: domainStats,
      missedQuestionIds: missedQuestionIds
    };

    StorageManager.saveExamResult(examResult);
    this.renderResultScreen(examResult);
  }

  renderResultScreen(result) {
    const container = document.getElementById("exam-screen-container");
    if (!container) return;

    const minutesSpent = Math.floor(result.timeSpentSeconds / 60);
    const secondsSpent = result.timeSpentSeconds % 60;

    container.innerHTML = `
      <div class="result-screen-wrapper">
        <div class="result-header-banner ${result.passed ? 'result-passed' : 'result-failed'}">
          <div class="result-icon-large">${result.passed ? '🎉' : '⚠️'}</div>
          <div class="result-status-title">
            ${result.passed ? 'PASS - CONGRATULATIONS!' : 'NEEDS PRACTICE - DID NOT PASS'}
          </div>
          <div class="result-score-gauge">
            <span class="scaled-score-number">${result.scaledScore}</span>
            <span class="score-scale-denom">/ 900</span>
          </div>
          <div class="result-sub-info">
            Passing Score: <strong>750</strong> • Your Score: <strong>${result.scaledScore}</strong> (${result.percentage}%) • Correct: <strong>${result.correctCount} / ${result.totalQuestions}</strong>
          </div>
        </div>

        <div class="result-meta-cards">
          <div class="stat-card">
            <div class="stat-num">${minutesSpent}m ${secondsSpent}s</div>
            <div class="stat-label">Time Elapsed</div>
          </div>
          <div class="stat-card ${result.passed ? 'answered' : 'unanswered'}">
            <div class="stat-num">${result.percentage}%</div>
            <div class="stat-label">Raw Accuracy</div>
          </div>
          <div class="stat-card">
            <div class="stat-num">${result.missedQuestionIds.length}</div>
            <div class="stat-label">Questions Missed</div>
          </div>
        </div>

        <!-- Domain Mastery Breakdown Table -->
        <div class="result-domain-table-box">
          <h3>Domain Mastery Breakdown</h3>
          <table class="review-table">
            <thead>
              <tr>
                <th>Exam Domain</th>
                <th>Questions</th>
                <th>Correct</th>
                <th>Mastery %</th>
              </tr>
            </thead>
            <tbody>
              ${Object.keys(result.domainStats).map(dId => {
                const stat = result.domainStats[dId];
                const pct = stat.total > 0 ? Math.round((stat.correct / stat.total) * 100) : 0;
                return `
                  <tr>
                    <td><strong>${stat.name}</strong></td>
                    <td>${stat.total}</td>
                    <td>${stat.correct}</td>
                    <td>
                      <span class="readiness-tag ${pct >= 80 ? 'badge-pass' : pct >= 60 ? 'badge-warn' : 'badge-fail'}">
                        ${pct}%
                      </span>
                    </td>
                  </tr>
                `;
              }).join("")}
            </tbody>
          </table>
        </div>

        <!-- Bottom Actions -->
        <div class="result-actions-row">
          <button id="btn-review-all-questions" class="exam-nav-btn primary">
            🔍 Review All Questions & Rationales
          </button>
          ${result.missedQuestionIds.length > 0 ? `
            <button id="btn-practice-missed" class="exam-nav-btn secondary">
              🎯 Practice Missed Questions (${result.missedQuestionIds.length})
            </button>
          ` : ''}
          <button id="btn-return-dashboard" class="exam-nav-btn neutral">
            🏠 Return to Dashboard
          </button>
        </div>
      </div>
    `;

    document.getElementById("btn-review-all-questions").addEventListener("click", () => {
      this.renderFullDetailedReview();
    });

    const btnMissed = document.getElementById("btn-practice-missed");
    if (btnMissed) {
      btnMissed.addEventListener("click", () => {
        window.app.startMissedPractice(result.missedQuestionIds);
      });
    }

    document.getElementById("btn-return-dashboard").addEventListener("click", () => {
      window.app.showView("dashboard");
    });
  }

  renderFullDetailedReview() {
    const container = document.getElementById("exam-screen-container");
    if (!container) return;

    container.innerHTML = `
      <div class="exam-header-bar">
        <div class="exam-title-badge">
          <span class="exam-badge-icon">📖</span>
          <div>
            <div class="exam-top-title">Comprehensive Exam Review</div>
            <div class="exam-top-subtitle">Review questions, your answers, and in-depth rationales</div>
          </div>
        </div>

        <button id="btn-exit-review" class="action-pill-btn">
          <span>✕</span> Exit Review
        </button>
      </div>

      <div class="detailed-review-list">
        ${this.questions.map((q, idx) => {
          const userChoice = this.userAnswers[q.id];
          const isCorrect = this.evaluateExamAnswer(q, userChoice);
          const isUnanswered = !this.isQuestionAnswered(q);

          return `
            <div class="review-card ${isCorrect ? 'card-correct' : 'card-incorrect'}">
              <div class="review-card-header">
                <div class="review-q-title">
                  <span class="q-badge">Question ${idx + 1}</span>
                  <span class="q-type-tag badge-info">${q.questionType || 'Multiple Choice'}</span>
                  <span class="result-badge ${isCorrect ? 'badge-pass' : 'badge-fail'}">
                    ${isCorrect ? '✓ Correct' : isUnanswered ? '✗ Unanswered' : '✗ Incorrect'}
                  </span>
                </div>
                <div class="review-objective-badge">${q.domain} • ${q.objective}</div>
              </div>

              <div class="review-question-text">
                ${this.formatQuestionText(q.question)}
              </div>

              <!-- Review Options Display by Type -->
              <div class="review-options-list">
                ${this.renderReviewOptionsBody(q, userChoice)}
              </div>

              <div class="review-explanation-box">
                <div class="exp-title">💡 Detailed Breakdown & Rationales:</div>
                <div class="exp-content">${ExplanationFormatter.format(q.explanation)}</div>
              </div>
            </div>
          `;
        }).join("")}
      </div>
    `;

    document.getElementById("btn-exit-review").addEventListener("click", () => {
      window.app.showView("dashboard");
    });
  }

  renderReviewOptionsBody(q, userChoice) {
    if (q.questionType === "Matching" && q.matchingItems && q.matchingDescriptions) {
      const userMatches = userChoice || {};
      return `
        <div class="matching-review-grid">
          ${q.matchingItems.map(item => {
            const userLetter = userMatches[item.num] || "None";
            const isMatchCorrect = userLetter === item.correctLetter;
            const descObj = q.matchingDescriptions.find(d => d.letter === item.correctLetter);
            const descText = descObj ? descObj.text : "";

            return `
              <div class="matching-review-row ${isMatchCorrect ? 'match-correct' : 'match-incorrect'}">
                <div class="matching-item-title"><strong>${item.num}. ${item.text}</strong></div>
                <div class="matching-result-info">
                  Your Answer: <strong>${userLetter}</strong> | Correct: <strong>${item.correctLetter}. ${descText}</strong>
                  <span class="matching-badge-pill ${isMatchCorrect ? 'pass' : 'fail'}">${isMatchCorrect ? '✓ Match' : '✗ Mismatch'}</span>
                </div>
              </div>
            `;
          }).join("")}
        </div>
      `;
    }

    if (q.questionType === "Ordering" && q.orderingItems) {
      const itemsMap = {};
      q.orderingItems.forEach(it => { itemsMap[it.letter] = it.text; });
      const userSeq = Array.isArray(userChoice) ? userChoice : [];

      return `
        <div class="ordering-review-box">
          <div style="margin-bottom: 0.5rem;">Your Sequence: <code>${userSeq.join(" > ") || "None"}</code></div>
          <div style="margin-bottom: 0.75rem; color: var(--accent-green);">Correct Sequence: <strong>${q.correctAnswerRaw || q.correctOrder.join(" > ")}</strong></div>
          <div class="ordering-review-steps">
            ${(q.correctOrder || []).map((letter, stepIdx) => `
              <div class="order-step-review-item">
                <span class="order-step-tag">Step ${stepIdx + 1}</span>
                <span class="order-letter-tag">${letter}</span>
                <span>${itemsMap[letter] || ''}</span>
              </div>
            `).join("")}
          </div>
        </div>
      `;
    }

    if (q.isMultiSelect) {
      const selectedIndices = Array.isArray(userChoice) ? userChoice : [];
      return `
        <div class="multiselect-review-list">
          ${q.options.map((opt, optIdx) => {
            const isSelected = selectedIndices.includes(optIdx);
            const isCorrectTarget = q.correctOptions && q.correctOptions.includes(optIdx);
            let optClass = "review-option";
            if (isCorrectTarget) optClass += " correct-target";
            if (isSelected && !isCorrectTarget) optClass += " user-wrong-target";

            return `
              <div class="${optClass}">
                <span class="opt-label">${String.fromCharCode(65 + optIdx)}</span>
                <span class="opt-text">${opt}</span>
                ${isCorrectTarget ? '<span class="correct-indicator">✓ Correct Choice</span>' : ''}
                ${isSelected && !isCorrectTarget ? '<span class="user-indicator">Your Choice (Incorrect)</span>' : ''}
              </div>
            `;
          }).join("")}
        </div>
      `;
    }

    // Default Single Choice Review
    return `
      ${q.options.map((opt, optIdx) => {
        const isUserSelection = userChoice === optIdx;
        const isAnswer = q.correctOption === optIdx;
        let optClass = "review-option";
        if (isAnswer) optClass += " correct-target";
        if (isUserSelection && !isAnswer) optClass += " user-wrong-target";

        return `
          <div class="${optClass}">
            <span class="opt-label">${String.fromCharCode(65 + optIdx)}</span>
            <span class="opt-text">${opt}</span>
            ${isAnswer ? '<span class="correct-indicator">✓ Correct Answer</span>' : ''}
            ${isUserSelection && !isAnswer ? '<span class="user-indicator">Your Answer</span>' : ''}
          </div>
        `;
      }).join("")}
    `;
  }

  formatQuestionText(text) {
    if (!text) return "";
    return text.replace(/\n/g, "<br>");
  }

  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
}
