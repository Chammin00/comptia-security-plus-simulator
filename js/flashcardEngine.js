// Flashcards, Ports & Acronyms Interactive Drill Engine

class FlashcardEngine {
  constructor() {
    this.currentCardIndex = 0;
    this.isFlipped = false;
    this.cards = [...SECURITY_FLASHCARDS];
    this.activeDomainFilter = "all";

    // Drills State
    this.drillType = "ports"; // "ports" or "acronyms"
    this.drillQuestions = [];
    this.drillCurrentIndex = 0;
    this.drillScore = 0;
    this.drillStreak = 0;
    this.drillUserAnswered = false;
  }

  // --- Flashcard Methods ---
  startFlashcards(domainFilter = "all") {
    this.activeDomainFilter = domainFilter;
    this.currentCardIndex = 0;
    this.isFlipped = false;

    if (domainFilter === "all") {
      this.cards = [...SECURITY_FLASHCARDS];
    } else {
      this.cards = SECURITY_FLASHCARDS.filter(c => c.domain.includes(domainFilter));
    }

    this.renderFlashcardView();
  }

  renderFlashcardView() {
    const container = document.getElementById("flashcard-screen-container");
    if (!container) return;

    if (this.cards.length === 0) {
      container.innerHTML = `<div class="empty-state-card">No flashcards found for this domain.</div>`;
      return;
    }

    const card = this.cards[this.currentCardIndex];

    container.innerHTML = `
      <div class="drill-subnav-bar">
        <div class="subnav-title">
          <span>📇 Flashcard Master</span>
          <span class="subnav-counter">${this.currentCardIndex + 1} of ${this.cards.length}</span>
        </div>

        <div class="subnav-filters">
          <select id="fc-domain-select" class="filter-select">
            <option value="all" ${this.activeDomainFilter === "all" ? "selected" : ""}>All Exam Concepts</option>
            <option value="Domain 1" ${this.activeDomainFilter === "Domain 1" ? "selected" : ""}>Domain 1: Concepts & Crypto</option>
            <option value="Domain 2" ${this.activeDomainFilter === "Domain 2" ? "selected" : ""}>Domain 2: Threats & Attacks</option>
            <option value="Domain 3" ${this.activeDomainFilter === "Domain 3" ? "selected" : ""}>Domain 3: Architecture</option>
            <option value="Domain 4" ${this.activeDomainFilter === "Domain 4" ? "selected" : ""}>Domain 4: Operations & Forensics</option>
            <option value="Domain 5" ${this.activeDomainFilter === "Domain 5" ? "selected" : ""}>Domain 5: Risk & Governance</option>
          </select>
          <button id="btn-fc-shuffle" class="action-pill-btn" title="Shuffle flashcards">🔀 Shuffle</button>
        </div>
      </div>

      <!-- 3D Flip Card Container -->
      <div class="flashcard-stage">
        <div id="active-flashcard" class="flashcard-box ${this.isFlipped ? 'flipped' : ''}">
          <!-- Front Face -->
          <div class="card-face card-front">
            <div class="card-top-tag">${card.domain}</div>
            <div class="card-prompt">${card.front}</div>
            <div class="card-hint-footer">👆 Click card or press Spacebar to flip</div>
          </div>

          <!-- Back Face -->
          <div class="card-face card-back">
            <div class="card-top-tag">Technical Breakdown & Key Concepts</div>
            <div class="card-answer-body">${card.back.replace(/\n/g, "<br>")}</div>
            <div class="card-keywords-row">
              ${card.keywords.map(k => `<span class="kw-tag">${k}</span>`).join("")}
            </div>
          </div>
        </div>
      </div>

      <!-- Controls -->
      <div class="flashcard-controls-bar">
        <button id="btn-fc-prev" class="exam-nav-btn secondary" ${this.currentCardIndex === 0 ? 'disabled' : ''}>
          ← Previous Card
        </button>

        <button id="btn-fc-flip" class="exam-nav-btn neutral">
          🔄 Flip Card
        </button>

        <button id="btn-fc-next" class="exam-nav-btn primary" ${this.currentCardIndex === this.cards.length - 1 ? 'disabled' : ''}>
          Next Card →
        </button>
      </div>
    `;

    this.attachFlashcardEvents();
  }

  attachFlashcardEvents() {
    const cardElement = document.getElementById("active-flashcard");
    const btnFlip = document.getElementById("btn-fc-flip");
    const toggleFlip = () => {
      this.isFlipped = !this.isFlipped;
      if (cardElement) {
        cardElement.classList.toggle("flipped", this.isFlipped);
      }
    };

    if (cardElement) cardElement.addEventListener("click", toggleFlip);
    if (btnFlip) btnFlip.addEventListener("click", toggleFlip);

    const btnPrev = document.getElementById("btn-fc-prev");
    if (btnPrev) {
      btnPrev.addEventListener("click", () => {
        if (this.currentCardIndex > 0) {
          this.currentCardIndex--;
          this.isFlipped = false;
          this.renderFlashcardView();
        }
      });
    }

    const btnNext = document.getElementById("btn-fc-next");
    if (btnNext) {
      btnNext.addEventListener("click", () => {
        if (this.currentCardIndex < this.cards.length - 1) {
          this.currentCardIndex++;
          this.isFlipped = false;
          this.renderFlashcardView();
        }
      });
    }

    const selectDomain = document.getElementById("fc-domain-select");
    if (selectDomain) {
      selectDomain.addEventListener("change", (e) => {
        this.startFlashcards(e.target.value);
      });
    }

    const btnShuffle = document.getElementById("btn-fc-shuffle");
    if (btnShuffle) {
      btnShuffle.addEventListener("click", () => {
        for (let i = this.cards.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
        this.currentCardIndex = 0;
        this.isFlipped = false;
        this.renderFlashcardView();
      });
    }
  }

  // --- Speed Drills (Ports & Acronyms) ---
  startDrill(type = "ports") {
    this.drillType = type;
    this.drillScore = 0;
    this.drillStreak = 0;
    this.drillCurrentIndex = 0;
    this.drillUserAnswered = false;

    if (type === "ports") {
      this.generatePortQuestions();
    } else {
      this.generateAcronymQuestions();
    }

    this.renderDrillView();
  }

  generatePortQuestions() {
    const questions = [];
    const pool = [...SECURITY_PORTS];
    
    // Shuffle pool
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }

    pool.forEach(target => {
      // Pick 3 distractors
      const distractors = pool.filter(p => p.port !== target.port);
      const chosenDistractors = [];
      while (chosenDistractors.length < 3 && distractors.length > 0) {
        const rand = Math.floor(Math.random() * distractors.length);
        chosenDistractors.push(distractors.splice(rand, 1)[0]);
      }

      const options = [target.port, ...chosenDistractors.map(d => d.port)];
      // Shuffle options
      for (let i = options.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [options[i], options[j]] = [options[j], options[i]];
      }

      questions.push({
        prompt: `Which port and protocol is utilized by: <strong>${target.name}</strong>?`,
        detail: target.description,
        correct: target.port,
        options: options,
        protocol: target.protocol
      });
    });

    this.drillQuestions = questions;
  }

  generateAcronymQuestions() {
    const questions = [];
    const pool = [...SECURITY_ACRONYMS];
    
    // Shuffle pool
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }

    pool.forEach(target => {
      const distractors = pool.filter(a => a.acronym !== target.acronym);
      const chosenDistractors = [];
      while (chosenDistractors.length < 3 && distractors.length > 0) {
        const rand = Math.floor(Math.random() * distractors.length);
        chosenDistractors.push(distractors.splice(rand, 1)[0]);
      }

      const options = [target.term, ...chosenDistractors.map(d => d.term)];
      // Shuffle options
      for (let i = options.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [options[i], options[j]] = [options[j], options[i]];
      }

      questions.push({
        prompt: `What does the cybersecurity acronym <strong>${target.acronym}</strong> stand for?`,
        detail: `${target.definition} <br><br><em>Exam Tip: ${target.tip}</em>`,
        correct: target.term,
        options: options,
        domain: target.domain
      });
    });

    this.drillQuestions = questions;
  }

  renderDrillView() {
    const container = document.getElementById("drills-screen-container");
    if (!container) return;

    if (this.drillQuestions.length === 0) return;

    const q = this.drillQuestions[this.drillCurrentIndex];
    const highScores = StorageManager.getDrillScores();
    const bestStreak = this.drillType === "ports" ? highScores.portsBestStreak : highScores.acronymsBestStreak;

    container.innerHTML = `
      <div class="drill-subnav-bar">
        <div class="subnav-title">
          <span>⚡ ${this.drillType === 'ports' ? 'Port & Protocol Speed Drill' : 'Acronym Decrypter Drill'}</span>
          <span class="subnav-counter">Question ${this.drillCurrentIndex + 1} of ${this.drillQuestions.length}</span>
        </div>

        <div class="drill-scoreboard">
          <div class="drill-stat">Score: <strong>${this.drillScore}</strong></div>
          <div class="drill-stat streak">Streak: <strong>🔥 ${this.drillStreak}</strong> (Best: ${bestStreak})</div>
        </div>

        <div class="drill-type-switch">
          <button class="action-pill-btn ${this.drillType === 'ports' ? 'active-pill' : ''}" onclick="window.app.flashcardEngine.startDrill('ports')">Ports Drill</button>
          <button class="action-pill-btn ${this.drillType === 'acronyms' ? 'active-pill' : ''}" onclick="window.app.flashcardEngine.startDrill('acronyms')">Acronyms Drill</button>
        </div>
      </div>

      <div class="drill-main-card">
        <div class="drill-prompt-box">
          <div class="drill-prompt-text">${q.prompt}</div>
        </div>

        <div class="drill-options-grid">
          ${q.options.map((opt, idx) => `
            <button class="drill-opt-btn" data-value="${opt}">
              ${opt}
            </button>
          `).join("")}
        </div>

        <div id="drill-feedback-drawer" class="drill-feedback-drawer" style="display: none;"></div>
      </div>

      <div class="drill-footer-bar">
        <button id="btn-drill-next" class="exam-nav-btn primary" style="display: none;">
          Next Drill Question →
        </button>
      </div>
    `;

    this.attachDrillEvents(q);
  }

  attachDrillEvents(q) {
    const optButtons = document.querySelectorAll(".drill-opt-btn");
    const feedbackDrawer = document.getElementById("drill-feedback-drawer");
    const btnNext = document.getElementById("btn-drill-next");

    optButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        if (this.drillUserAnswered) return;
        this.drillUserAnswered = true;

        const val = btn.getAttribute("data-value");
        const isCorrect = String(val) === String(q.correct);

        if (isCorrect) {
          btn.classList.add("drill-opt-correct");
          this.drillScore += 100 + (this.drillStreak * 20);
          this.drillStreak++;
          StorageManager.updateDrillScore(this.drillType, this.drillStreak);
        } else {
          btn.classList.add("drill-opt-incorrect");
          this.drillStreak = 0;
          // Highlight correct one
          optButtons.forEach(b => {
            if (String(b.getAttribute("data-value")) === String(q.correct)) {
              b.classList.add("drill-opt-correct");
            }
          });
        }

        // Show feedback
        feedbackDrawer.style.display = "block";
        feedbackDrawer.innerHTML = `
          <div class="drill-feedback-title ${isCorrect ? 'text-pass' : 'text-fail'}">
            ${isCorrect ? '✓ Correct!' : '✗ Incorrect!'}
          </div>
          <div class="drill-feedback-desc">${q.detail}</div>
        `;

        if (btnNext) btnNext.style.display = "inline-block";
      });
    });

    if (btnNext) {
      btnNext.addEventListener("click", () => {
        if (this.drillCurrentIndex < this.drillQuestions.length - 1) {
          this.drillCurrentIndex++;
          this.drillUserAnswered = false;
          this.renderDrillView();
        } else {
          alert(`Drill completed! Final Score: ${this.drillScore}`);
          this.startDrill(this.drillType);
        }
      });
    }
  }
}
