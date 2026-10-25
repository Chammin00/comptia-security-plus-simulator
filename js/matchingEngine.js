// CompTIA Security+ SY0-701 Definition and Word Matching Game Engine
// Supports Column Match, Speed Rush, and Cyber Grid Memory modes with high-yield Security+ acronyms

class MatchingEngine {
  constructor() {
    this.gameMode = "column"; // "column", "grid", "speed"
    this.activeCategory = "all";
    this.roundSize = 6;
    
    // Dataset & State
    this.allTerms = [...SECURITY_ACRONYMS];
    this.filteredPool = [...SECURITY_ACRONYMS];
    this.activePairs = [];
    this.selectedWordId = null;
    this.selectedDefId = null;
    this.matchedPairIds = new Set();
    
    // Scoring & Stats
    this.score = 0;
    this.streak = 0;
    this.bestStreak = 0;
    this.totalMatchesCompleted = 0;
    this.timerSeconds = 0;
    this.timerInterval = null;
    
    // Speed Rush State
    this.speedTimeRemaining = 60;
    this.speedTimerInterval = null;
    this.speedCurrentQuestion = null;
    this.speedScore = 0;
    this.speedStreak = 0;

    // Load High Scores from Storage
    this.loadStats();
  }

  loadStats() {
    const saved = localStorage.getItem("secplus_match_stats");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        this.bestStreak = parsed.bestStreak || 0;
        this.totalMatchesCompleted = parsed.totalMatchesCompleted || 0;
      } catch (e) {
        console.error("Failed to load match stats", e);
      }
    }
  }

  saveStats() {
    const stats = {
      bestStreak: Math.max(this.bestStreak, this.streak),
      totalMatchesCompleted: this.totalMatchesCompleted
    };
    localStorage.setItem("secplus_match_stats", JSON.stringify(stats));
  }

  startMatching(category = "all", mode = "column") {
    this.activeCategory = category;
    this.gameMode = mode;
    this.selectedWordId = null;
    this.selectedDefId = null;
    this.matchedPairIds.clear();
    this.score = 0;
    this.streak = 0;
    this.timerSeconds = 0;

    this.filterPool();

    if (this.timerInterval) clearInterval(this.timerInterval);
    if (this.speedTimerInterval) clearInterval(this.speedTimerInterval);

    if (this.gameMode === "speed") {
      this.startSpeedRush();
    } else {
      this.startTimer();
      this.initRound();
      this.render();
    }
  }

  filterPool() {
    if (this.activeCategory === "all") {
      this.filteredPool = [...this.allTerms];
    } else if (this.activeCategory.startsWith("Domain")) {
      this.filteredPool = this.allTerms.filter(t => t.domain.toLowerCase().includes(this.activeCategory.toLowerCase()));
    } else if (this.activeCategory === "policies") {
      const polList = ["SLA", "SOW", "MOU", "MOA", "NDA", "AUP", "BPA", "BIA", "DRP", "GDPR", "NIST", "COPE", "BYOD", "CYOD"];
      this.filteredPool = this.allTerms.filter(t => polList.includes(t.acronym));
    } else if (this.activeCategory === "crypto") {
      const cryptoList = ["AES", "SHA-256", "MD5", "CA", "CRL", "OCSP", "OCSP Stapling", "HSM", "TPM", "Wildcard", "PFS", "PKI", "Salted Hash", "CBC", "TLS", "HTTPS"];
      this.filteredPool = this.allTerms.filter(t => cryptoList.includes(t.acronym));
    } else if (this.activeCategory === "auth") {
      const authList = ["AAA", "802.1X", "RADIUS", "LDAP", "SAML", "OIDC", "IAM", "PAM", "TOTP", "MFA", "SSO", "Federation", "EAP", "PSK", "DAC", "MAC", "RBAC"];
      this.filteredPool = this.allTerms.filter(t => authList.includes(t.acronym));
    } else if (this.activeCategory === "network") {
      const netList = ["WAF", "NGFW", "SASE", "SDN", "VLAN", "CASB", "ZTNA", "VPN", "UTM", "ACL", "IPS", "HIDS / HIPS", "NAC", "WPA3", "SPF", "DKIM", "DMARC", "DNS", "DNSSEC", "DHCP"];
      this.filteredPool = this.allTerms.filter(t => netList.includes(t.acronym));
    } else if (this.activeCategory === "ops") {
      const opsList = ["SIEM", "SOAR", "EDR", "XDR", "TIP", "SOC", "Order of Volatility", "IOC", "CTI", "MTTR", "MTBF", "MTTD", "RPO", "RTO", "ALE", "ARO", "SLE", "SCAP", "OSINT"];
      this.filteredPool = this.allTerms.filter(t => opsList.includes(t.acronym));
    }

    if (this.filteredPool.length === 0) {
      this.filteredPool = [...this.allTerms];
    }
  }

  startTimer() {
    if (this.timerInterval) clearInterval(this.timerInterval);
    this.timerInterval = setInterval(() => {
      this.timerSeconds++;
      const timerElem = document.getElementById("match-timer-display");
      if (timerElem) {
        const mins = String(Math.floor(this.timerSeconds / 60)).padStart(2, "0");
        const secs = String(this.timerSeconds % 60).padStart(2, "0");
        timerElem.textContent = `${mins}:${secs}`;
      }
    }, 1000);
  }

  initRound() {
    this.matchedPairIds.clear();
    this.selectedWordId = null;
    this.selectedDefId = null;

    // Pick random items from pool
    const shuffledPool = [...this.filteredPool].sort(() => Math.random() - 0.5);
    const count = this.gameMode === "grid" ? 6 : this.roundSize;
    this.activePairs = shuffledPool.slice(0, Math.min(count, shuffledPool.length)).map((item, idx) => ({
      id: `pair_${idx}_${item.acronym.replace(/[^a-zA-Z0-9]/g, "_")}`,
      acronym: item.acronym,
      term: item.term,
      definition: item.definition,
      tip: item.tip,
      domain: item.domain
    }));
  }

  render() {
    const container = document.getElementById("matching-screen-container");
    if (!container) return;

    if (this.gameMode === "speed") {
      this.renderSpeedRush();
      return;
    }

    const mins = String(Math.floor(this.timerSeconds / 60)).padStart(2, "0");
    const secs = String(this.timerSeconds % 60).padStart(2, "0");

    const wordsShuffled = [...this.activePairs].sort(() => Math.random() - 0.5);
    const defsShuffled = [...this.activePairs].sort(() => Math.random() - 0.5);

    container.innerHTML = `
      <div class="match-game-wrapper">
        <!-- Top Toolbar & Navigation -->
        <div class="match-header-toolbar">
          <div class="match-title-area">
            <div class="match-badge-tag">🧩 CompTIA SY0-701 Definition Matcher</div>
            <h2>Match Words & Acronyms to Definitions</h2>
          </div>

          <div class="match-stats-row">
            <div class="match-stat-chip">
              <span class="stat-label">Mode:</span>
              <div class="match-mode-tabs">
                <button class="mode-tab-btn ${this.gameMode === 'column' ? 'active' : ''}" onclick="window.app.matchingEngine.startMatching('${this.activeCategory}', 'column')">Column Match</button>
                <button class="mode-tab-btn ${this.gameMode === 'grid' ? 'active' : ''}" onclick="window.app.matchingEngine.startMatching('${this.activeCategory}', 'grid')">Cyber Grid</button>
                <button class="mode-tab-btn ${this.gameMode === 'speed' ? 'active' : ''}" onclick="window.app.matchingEngine.startMatching('${this.activeCategory}', 'speed')">⚡ Speed Rush</button>
              </div>
            </div>

            <div class="match-stat-chip">
              <span class="stat-label">Category:</span>
              <select id="match-category-select" class="match-filter-select">
                <option value="all" ${this.activeCategory === 'all' ? 'selected' : ''}>All Acronyms & Terms (${this.allTerms.length})</option>
                <option value="Domain 1" ${this.activeCategory === 'Domain 1' ? 'selected' : ''}>Domain 1: Concepts & Cryptography</option>
                <option value="Domain 2" ${this.activeCategory === 'Domain 2' ? 'selected' : ''}>Domain 2: Threats & Attacks</option>
                <option value="Domain 3" ${this.activeCategory === 'Domain 3' ? 'selected' : ''}>Domain 3: Architecture & Networks</option>
                <option value="Domain 4" ${this.activeCategory === 'Domain 4' ? 'selected' : ''}>Domain 4: Security Operations</option>
                <option value="Domain 5" ${this.activeCategory === 'Domain 5' ? 'selected' : ''}>Domain 5: Governance & Risk</option>
                <option value="crypto" ${this.activeCategory === 'crypto' ? 'selected' : ''}>🔐 Cryptography & PKI Focus</option>
                <option value="auth" ${this.activeCategory === 'auth' ? 'selected' : ''}>🛡️ Authentication & IAM Focus</option>
                <option value="network" ${this.activeCategory === 'network' ? 'selected' : ''}>🌐 Network & Cloud Focus</option>
                <option value="ops" ${this.activeCategory === 'ops' ? 'selected' : ''}>🚨 Incident Response & Metrics</option>
                <option value="policies" ${this.activeCategory === 'policies' ? 'selected' : ''}>📋 Agreements, SLA & Policies</option>
              </select>
            </div>

            <div class="match-stat-chip timer">
              <span class="stat-label">⏱️ Time:</span>
              <span id="match-timer-display" class="stat-value">${mins}:${secs}</span>
            </div>

            <div class="match-stat-chip score">
              <span class="stat-label">🏆 Score:</span>
              <span id="match-score-display" class="stat-value">${this.score}</span>
            </div>

            <div class="match-stat-chip streak">
              <span class="stat-label">🔥 Streak:</span>
              <span id="match-streak-display" class="stat-value">${this.streak} (Best: ${this.bestStreak})</span>
            </div>
          </div>
        </div>

        <!-- Instructions Banner -->
        <div class="match-guide-banner">
          <span>💡 <strong>How to Play:</strong> Click an <em>Acronym / Word</em> card on the left, then click its corresponding <em>Definition</em> on the right to connect them!</span>
          <button class="action-pill-btn" onclick="window.app.matchingEngine.speakCurrentHint()">🔊 Read Instructions</button>
        </div>

        <!-- Main Play Area -->
        ${this.gameMode === 'column' ? this.renderColumnMode(wordsShuffled, defsShuffled) : this.renderGridMode()}

        <!-- Match Feedback Drawer -->
        <div id="match-feedback-drawer" class="match-feedback-drawer" style="display: none;"></div>

        <!-- Bottom Action Bar -->
        <div class="match-action-bar">
          <button class="exam-nav-btn secondary" onclick="window.app.matchingEngine.initRound(); window.app.matchingEngine.render();">
            🔀 New Shuffled Set
          </button>
          <button class="exam-nav-btn neutral" onclick="window.app.matchingEngine.giveHint()">
            💡 Need a Hint?
          </button>
          <button class="exam-nav-btn primary" onclick="window.app.showView('audio-reader')">
            🔊 Listen to Full Audio Reader →
          </button>
        </div>
      </div>
    `;

    this.attachEvents();
  }

  renderColumnMode(words, defs) {
    return `
      <div class="match-columns-container">
        <!-- Left: Word / Acronym Cards -->
        <div class="match-column words-col">
          <div class="col-header">
            <h3>🏷️ Acronyms & Cybersecurity Terms (${words.length})</h3>
            <span class="col-sub">Select a term</span>
          </div>
          <div class="cards-stack">
            ${words.map(pair => `
              <div class="match-card word-card ${this.matchedPairIds.has(pair.id) ? 'is-matched' : ''}" 
                   id="word_${pair.id}" 
                   data-pair-id="${pair.id}">
                <div class="card-tag">${pair.domain.split(':')[0]}</div>
                <div class="card-main-title">
                  <strong>${pair.acronym}</strong>
                  <button class="btn-voice-mini" title="Pronounce word" onclick="event.stopPropagation(); window.app.matchingEngine.speakText('${pair.acronym}. ${pair.term.replace(/'/g, "\\'")}')">🔊</button>
                </div>
                <div class="card-term-subtitle">${pair.term}</div>
              </div>
            `).join("")}
          </div>
        </div>

        <!-- Center VS / Connector Graphic -->
        <div class="match-center-divider">
          <div class="pulse-icon">⚡</div>
          <div class="match-progress-ring">
            <span id="match-count-indicator">${this.matchedPairIds.size} / ${this.activePairs.length}</span>
            <small>Matched</small>
          </div>
        </div>

        <!-- Right: Definition Cards -->
        <div class="match-column defs-col">
          <div class="col-header">
            <h3>📖 Official Definitions & Concepts (${defs.length})</h3>
            <span class="col-sub">Select matching definition</span>
          </div>
          <div class="cards-stack">
            ${defs.map(pair => `
              <div class="match-card def-card ${this.matchedPairIds.has(pair.id) ? 'is-matched' : ''}" 
                   id="def_${pair.id}" 
                   data-pair-id="${pair.id}">
                <div class="card-def-text">${pair.definition}</div>
                <div class="card-def-footer">
                  <span class="exam-tip-badge">💡 Exam Key</span>
                  <button class="btn-voice-mini" title="Read definition" onclick="event.stopPropagation(); window.app.matchingEngine.speakText('${pair.definition.replace(/'/g, "\\'")}')">🔊</button>
                </div>
              </div>
            `).join("")}
          </div>
        </div>
      </div>
    `;
  }

  renderGridMode() {
    // Flatten words and defs into 12 cards
    const gridItems = [];
    this.activePairs.forEach(p => {
      gridItems.push({
        id: `grid_w_${p.id}`,
        pairId: p.id,
        type: "word",
        display: `<strong>${p.acronym}</strong><br><small>${p.term}</small>`,
        speech: p.acronym
      });
      gridItems.push({
        id: `grid_d_${p.id}`,
        pairId: p.id,
        type: "def",
        display: p.definition,
        speech: p.definition
      });
    });

    // Shuffle grid
    gridItems.sort(() => Math.random() - 0.5);

    return `
      <div class="match-grid-container">
        <div class="grid-cards-matrix">
          ${gridItems.map(item => `
            <div class="match-grid-card ${this.matchedPairIds.has(item.pairId) ? 'is-matched' : ''}" 
                 id="${item.id}" 
                 data-pair-id="${item.pairId}" 
                 data-type="${item.type}">
              <div class="grid-card-inner">
                <div class="grid-card-badge">${item.type === 'word' ? '🏷️ Term' : '📖 Definition'}</div>
                <div class="grid-card-content">${item.display}</div>
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    `;
  }

  // --- Speed Rush Mode ---
  startSpeedRush() {
    this.speedTimeRemaining = 60;
    this.speedScore = 0;
    this.speedStreak = 0;
    this.nextSpeedQuestion();

    if (this.speedTimerInterval) clearInterval(this.speedTimerInterval);
    this.speedTimerInterval = setInterval(() => {
      this.speedTimeRemaining--;
      const timerElem = document.getElementById("speed-timer-num");
      if (timerElem) timerElem.textContent = `${this.speedTimeRemaining}s`;

      if (this.speedTimeRemaining <= 0) {
        clearInterval(this.speedTimerInterval);
        this.finishSpeedRush();
      }
    }, 1000);

    this.renderSpeedRush();
  }

  nextSpeedQuestion() {
    if (this.filteredPool.length < 4) this.filteredPool = [...this.allTerms];
    const target = this.filteredPool[Math.floor(Math.random() * this.filteredPool.length)];
    
    // Pick 3 distractors
    const distractors = this.filteredPool.filter(t => t.acronym !== target.acronym);
    const chosen = [];
    while (chosen.length < 3 && distractors.length > 0) {
      const rand = Math.floor(Math.random() * distractors.length);
      chosen.push(distractors.splice(rand, 1)[0]);
    }

    const options = [target, ...chosen].sort(() => Math.random() - 0.5);
    this.speedCurrentQuestion = { target, options };
  }

  renderSpeedRush() {
    const container = document.getElementById("matching-screen-container");
    if (!container) return;

    if (!this.speedCurrentQuestion) {
      this.nextSpeedQuestion();
    }

    const q = this.speedCurrentQuestion;

    container.innerHTML = `
      <div class="match-game-wrapper speed-rush-theme">
        <div class="match-header-toolbar">
          <div class="match-title-area">
            <div class="match-badge-tag speed">⚡ Speed Rush Challenge</div>
            <h2>Rapid Acronym & Definition Blitz (60s)</h2>
          </div>

          <div class="match-stats-row">
            <div class="match-stat-chip">
              <span class="stat-label">Mode:</span>
              <div class="match-mode-tabs">
                <button class="mode-tab-btn" onclick="window.app.matchingEngine.startMatching('${this.activeCategory}', 'column')">Column Match</button>
                <button class="mode-tab-btn" onclick="window.app.matchingEngine.startMatching('${this.activeCategory}', 'grid')">Cyber Grid</button>
                <button class="mode-tab-btn active" onclick="window.app.matchingEngine.startMatching('${this.activeCategory}', 'speed')">⚡ Speed Rush</button>
              </div>
            </div>

            <div class="match-stat-chip timer speed-timer">
              <span class="stat-label">⏳ Time Left:</span>
              <span id="speed-timer-num" class="stat-value highlight">${this.speedTimeRemaining}s</span>
            </div>

            <div class="match-stat-chip score">
              <span class="stat-label">🏆 Speed Score:</span>
              <span class="stat-value">${this.speedScore}</span>
            </div>

            <div class="match-stat-chip streak">
              <span class="stat-label">🔥 Blitz Streak:</span>
              <span class="stat-value">${this.speedStreak}</span>
            </div>
          </div>
        </div>

        <div class="speed-rush-stage">
          <div class="speed-question-card">
            <div class="speed-q-domain">${q.target.domain}</div>
            <div class="speed-q-prompt">
              <div class="speed-q-def">${q.target.definition}</div>
            </div>
            <div class="speed-q-subtext">Which Security+ term or acronym matches this exact definition?</div>
          </div>

          <div class="speed-options-grid">
            ${q.options.map(opt => `
              <button class="speed-opt-btn" onclick="window.app.matchingEngine.handleSpeedAnswer('${opt.acronym}')">
                <span class="speed-opt-acronym">${opt.acronym}</span>
                <span class="speed-opt-term">${opt.term}</span>
              </button>
            `).join("")}
          </div>
        </div>
      </div>
    `;
  }

  handleSpeedAnswer(selectedAcronym) {
    if (this.speedTimeRemaining <= 0) return;
    const isCorrect = selectedAcronym === this.speedCurrentQuestion.target.acronym;

    if (isCorrect) {
      this.speedScore += 100 + (this.speedStreak * 25);
      this.speedStreak++;
      this.totalMatchesCompleted++;
      this.saveStats();
      this.nextSpeedQuestion();
      this.renderSpeedRush();
    } else {
      this.speedStreak = 0;
      this.speedTimeRemaining = Math.max(0, this.speedTimeRemaining - 3); // -3s penalty
      this.nextSpeedQuestion();
      this.renderSpeedRush();
    }
  }

  finishSpeedRush() {
    const container = document.getElementById("matching-screen-container");
    if (!container) return;

    container.innerHTML = `
      <div class="match-game-wrapper">
        <div class="match-round-summary-card">
          <div class="summary-icon">🏁</div>
          <h2>Speed Rush Finished!</h2>
          <p>Great session! You tested your split-second recall on high-yield Security+ concepts.</p>
          
          <div class="summary-stats-grid">
            <div class="sum-box">
              <span class="sum-num">${this.speedScore}</span>
              <span class="sum-label">Final Score</span>
            </div>
            <div class="sum-box">
              <span class="sum-num">🔥 ${this.speedStreak}</span>
              <span class="sum-label">Peak Streak</span>
            </div>
            <div class="sum-box">
              <span class="sum-num">${this.totalMatchesCompleted}</span>
              <span class="sum-label">Total Acronyms Mastered</span>
            </div>
          </div>

          <div class="summary-actions-row">
            <button class="exam-nav-btn primary" onclick="window.app.matchingEngine.startSpeedRush()">
              ⚡ Play Speed Rush Again
            </button>
            <button class="exam-nav-btn secondary" onclick="window.app.matchingEngine.startMatching('all', 'column')">
              🧩 Switch to Column Match
            </button>
          </div>
        </div>
      </div>
    `;
  }

  // --- Column & Grid Match Logic ---
  attachEvents() {
    const selectCat = document.getElementById("match-category-select");
    if (selectCat) {
      selectCat.addEventListener("change", (e) => {
        this.startMatching(e.target.value, this.gameMode);
      });
    }

    if (this.gameMode === "column") {
      const wordCards = document.querySelectorAll(".word-card:not(.is-matched)");
      const defCards = document.querySelectorAll(".def-card:not(.is-matched)");

      wordCards.forEach(card => {
        card.addEventListener("click", () => {
          if (card.classList.contains("is-matched")) return;
          const pairId = card.getAttribute("data-pair-id");

          // Deselect previous word card
          document.querySelectorAll(".word-card").forEach(c => c.classList.remove("is-selected"));
          
          this.selectedWordId = pairId;
          card.classList.add("is-selected");

          if (this.selectedDefId) {
            this.evaluateMatch();
          }
        });
      });

      defCards.forEach(card => {
        card.addEventListener("click", () => {
          if (card.classList.contains("is-matched")) return;
          const pairId = card.getAttribute("data-pair-id");

          // Deselect previous def card
          document.querySelectorAll(".def-card").forEach(c => c.classList.remove("is-selected"));

          this.selectedDefId = pairId;
          card.classList.add("is-selected");

          if (this.selectedWordId) {
            this.evaluateMatch();
          }
        });
      });
    } else if (this.gameMode === "grid") {
      const gridCards = document.querySelectorAll(".match-grid-card:not(.is-matched)");
      gridCards.forEach(card => {
        card.addEventListener("click", () => {
          if (card.classList.contains("is-matched")) return;
          const pairId = card.getAttribute("data-pair-id");
          const type = card.getAttribute("data-type");

          if (type === "word") {
            document.querySelectorAll(".match-grid-card[data-type='word']").forEach(c => c.classList.remove("is-selected"));
            this.selectedWordId = pairId;
            card.classList.add("is-selected");
          } else {
            document.querySelectorAll(".match-grid-card[data-type='def']").forEach(c => c.classList.remove("is-selected"));
            this.selectedDefId = pairId;
            card.classList.add("is-selected");
          }

          if (this.selectedWordId && this.selectedDefId) {
            this.evaluateMatch();
          }
        });
      });
    }
  }

  evaluateMatch() {
    const isCorrect = this.selectedWordId === this.selectedDefId;
    const wordElem = document.getElementById(`word_${this.selectedWordId}`) || document.querySelector(`.match-grid-card[data-pair-id='${this.selectedWordId}'][data-type='word']`);
    const defElem = document.getElementById(`def_${this.selectedDefId}`) || document.querySelector(`.match-grid-card[data-pair-id='${this.selectedDefId}'][data-type='def']`);
    const feedbackDrawer = document.getElementById("match-feedback-drawer");

    const targetItem = this.activePairs.find(p => p.id === this.selectedWordId);

    if (isCorrect) {
      // MATCH SUCCESS
      this.matchedPairIds.add(this.selectedWordId);
      this.score += 150 + (this.streak * 30);
      this.streak++;
      this.totalMatchesCompleted++;
      this.saveStats();

      if (wordElem) {
        wordElem.classList.remove("is-selected");
        wordElem.classList.add("is-matched", "matched-pulse");
      }
      if (defElem) {
        defElem.classList.remove("is-selected");
        defElem.classList.add("is-matched", "matched-pulse");
      }

      // Update counters
      const countElem = document.getElementById("match-count-indicator");
      if (countElem) countElem.textContent = `${this.matchedPairIds.size} / ${this.activePairs.length}`;
      const scoreElem = document.getElementById("match-score-display");
      if (scoreElem) scoreElem.textContent = this.score;
      const streakElem = document.getElementById("match-streak-display");
      if (streakElem) streakElem.textContent = `${this.streak} (Best: ${Math.max(this.bestStreak, this.streak)})`;

      // Feedback Drawer
      if (feedbackDrawer && targetItem) {
        feedbackDrawer.style.display = "block";
        feedbackDrawer.className = "match-feedback-drawer match-correct";
        feedbackDrawer.innerHTML = `
          <div class="fb-header">
            <span class="fb-icon">✓</span>
            <strong>Correct Match: ${targetItem.acronym} — ${targetItem.term}</strong>
          </div>
          <div class="fb-body">
            <p>${targetItem.definition}</p>
            <div class="fb-tip"><strong>Exam Tip:</strong> ${targetItem.tip}</div>
          </div>
        `;
      }

      // Reset selection
      this.selectedWordId = null;
      this.selectedDefId = null;

      // Check if entire set is finished
      if (this.matchedPairIds.size === this.activePairs.length) {
        setTimeout(() => this.showRoundComplete(), 800);
      }
    } else {
      // MATCH FAILED
      this.streak = 0;
      const streakElem = document.getElementById("match-streak-display");
      if (streakElem) streakElem.textContent = `0 (Best: ${this.bestStreak})`;

      if (wordElem) wordElem.classList.add("match-error-shake");
      if (defElem) defElem.classList.add("match-error-shake");

      if (feedbackDrawer) {
        feedbackDrawer.style.display = "block";
        feedbackDrawer.className = "match-feedback-drawer match-incorrect";
        feedbackDrawer.innerHTML = `
          <div class="fb-header">
            <span class="fb-icon">✗</span>
            <strong>Not a Match!</strong>
          </div>
          <div class="fb-body">
            <p>That definition does not belong to the selected acronym. Try reviewing the keywords or press "Need a Hint?".</p>
          </div>
        `;
      }

      setTimeout(() => {
        if (wordElem) {
          wordElem.classList.remove("is-selected", "match-error-shake");
        }
        if (defElem) {
          defElem.classList.remove("is-selected", "match-error-shake");
        }
        this.selectedWordId = null;
        this.selectedDefId = null;
      }, 700);
    }
  }

  showRoundComplete() {
    const container = document.getElementById("matching-screen-container");
    if (!container) return;

    const mins = String(Math.floor(this.timerSeconds / 60)).padStart(2, "0");
    const secs = String(this.timerSeconds % 60).padStart(2, "0");

    container.innerHTML = `
      <div class="match-game-wrapper">
        <div class="match-round-summary-card">
          <div class="summary-icon">🎉</div>
          <h2>Set Complete! Perfect Matching!</h2>
          <p>You correctly paired all ${this.activePairs.length} acronyms and definitions in this set.</p>
          
          <div class="summary-stats-grid">
            <div class="sum-box">
              <span class="sum-num">${this.score}</span>
              <span class="sum-label">Round Score</span>
            </div>
            <div class="sum-box">
              <span class="sum-num">${mins}:${secs}</span>
              <span class="sum-label">Elapsed Time</span>
            </div>
            <div class="sum-box">
              <span class="sum-num">🔥 ${this.streak}</span>
              <span class="sum-label">Current Streak</span>
            </div>
            <div class="sum-box">
              <span class="sum-num">${this.totalMatchesCompleted}</span>
              <span class="sum-label">All-Time Mastered</span>
            </div>
          </div>

          <!-- Quick Review Table of this set -->
          <div class="summary-review-box">
            <h3>📑 Set Concepts Breakdown:</h3>
            <div class="summary-review-list">
              ${this.activePairs.map(item => `
                <div class="review-item-row">
                  <div class="review-item-head">
                    <strong>${item.acronym}</strong>: <em>${item.term}</em>
                    <span class="domain-pill">${item.domain.split(':')[0]}</span>
                  </div>
                  <div class="review-item-def">${item.definition}</div>
                  <div class="review-item-tip"><strong>Key Tip:</strong> ${item.tip}</div>
                </div>
              `).join("")}
            </div>
          </div>

          <div class="summary-actions-row">
            <button class="exam-nav-btn primary" onclick="window.app.matchingEngine.initRound(); window.app.matchingEngine.render();">
              🎯 Next Shuffled Set (${this.roundSize} Pairs)
            </button>
            <button class="exam-nav-btn secondary" onclick="window.app.matchingEngine.startSpeedRush()">
              ⚡ Test Speed in Speed Rush (60s)
            </button>
            <button class="exam-nav-btn neutral" onclick="window.app.showView('dashboard')">
              🏠 Back to Dashboard
            </button>
          </div>
        </div>
      </div>
    `;
  }

  giveHint() {
    const unmatched = this.activePairs.filter(p => !this.matchedPairIds.has(p.id));
    if (unmatched.length === 0) return;

    const target = unmatched[0];
    const wordElem = document.getElementById(`word_${target.id}`);
    const defElem = document.getElementById(`def_${target.id}`);

    if (wordElem && defElem) {
      wordElem.classList.add("hint-glow");
      defElem.classList.add("hint-glow");
      
      const feedbackDrawer = document.getElementById("match-feedback-drawer");
      if (feedbackDrawer) {
        feedbackDrawer.style.display = "block";
        feedbackDrawer.className = "match-feedback-drawer match-hint";
        feedbackDrawer.innerHTML = `
          <div class="fb-header">
            <span class="fb-icon">💡</span>
            <strong>Hint: Match highlighted in gold!</strong>
          </div>
          <div class="fb-body">
            <strong>${target.acronym}</strong> corresponds to: "${target.definition.substring(0, 75)}..."
          </div>
        `;
      }

      setTimeout(() => {
        wordElem.classList.remove("hint-glow");
        defElem.classList.remove("hint-glow");
      }, 2500);
    }
  }

  speakText(text) {
    if (!('speechSynthesis' in window)) {
      alert("Text-to-speech is not supported in this browser environment.");
      return;
    }
    window.speechSynthesis.cancel();
    const cleanText = text.replace(/<[^>]*>/g, "");
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.rate = 1.0;
    utterance.pitch = 1.0;
    window.speechSynthesis.speak(utterance);
  }

  speakCurrentHint() {
    this.speakText("CompTIA Security Plus Definition Matcher. Click a word or acronym on the left, then click its matching definition on the right.");
  }
}
