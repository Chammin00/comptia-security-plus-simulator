// CompTIA Security+ Audio Reader & Text-To-Speech (TTS) Engine

class AudioReaderEngine {
  constructor() {
    this.items = [...CHEATSHEET_TERMS];
    this.currentIndex = 0;
    this.isPlaying = false;
    this.isPaused = false;
    this.autoAdvance = true;
    this.speechRate = 1.0;
    this.volume = typeof StorageManager !== "undefined" ? StorageManager.getVolume() : 1.0;
    this.previousVolume = this.volume > 0 ? this.volume : 1.0;
    this.selectedVoice = null;
    this.voices = [];
    this.activeFilter = "all"; // "all" or specific page number
    this.searchTerm = "";
    this.filteredItems = [...this.items];
    this.synth = window.speechSynthesis || null;
    this.currentUtterance = null;

    this.initVoices();
  }

  initVoices() {
    if (!this.synth) return;
    const loadVoices = () => {
      this.voices = this.synth.getVoices().filter(v => v.lang.startsWith("en") || v.lang.startsWith("en-US") || v.lang.startsWith("en-GB"));
      if (this.voices.length === 0) {
        this.voices = this.synth.getVoices();
      }
    };
    loadVoices();
    if (speechSynthesis.onvoiceschanged !== undefined) {
      speechSynthesis.onvoiceschanged = loadVoices;
    }
  }

  startAudioReader(page = "all") {
    this.stopSpeech();
    this.activeFilter = page;
    this.searchTerm = "";
    this.applyFilters();
    this.currentIndex = 0;
    this.renderView();
  }

  applyFilters() {
    let result = [...this.items];

    if (this.activeFilter !== "all") {
      const pageNum = parseInt(this.activeFilter);
      result = result.filter(item => item.page === pageNum);
    }

    if (this.searchTerm && this.searchTerm.trim() !== "") {
      const q = this.searchTerm.toLowerCase().trim();
      result = result.filter(item => 
        item.acronym.toLowerCase().includes(q) ||
        item.term.toLowerCase().includes(q) ||
        item.definition.toLowerCase().includes(q)
      );
    }

    this.filteredItems = result;
    if (this.currentIndex >= this.filteredItems.length) {
      this.currentIndex = Math.max(0, this.filteredItems.length - 1);
    }
  }

  getVolumeIcon() {
    if (this.volume === 0) return "🔇";
    if (this.volume < 0.5) return "🔉";
    return "🔊";
  }

  renderView() {
    const container = document.getElementById("audio-reader-screen-container");
    if (!container) return;

    if (this.filteredItems.length === 0) {
      container.innerHTML = `
        <div class="audio-reader-header">
          <div class="reader-title-box">
            <span class="reader-badge-icon">🔊</span>
            <div>
              <div class="reader-title">CompTIA Security+ Cheat Sheet Audio Reader</div>
              <div class="reader-subtitle">Listen to official terms, acronyms, and definitions with real-time text-to-speech</div>
            </div>
          </div>
        </div>
        <div class="empty-state-card">
          <div class="empty-icon">🔍</div>
          <h2>No matching terms found</h2>
          <p>Try clearing your search query or choosing another page.</p>
          <button class="exam-nav-btn primary" onclick="window.app.audioReaderEngine.startAudioReader('all')">Reset All Filters</button>
        </div>
      `;
      return;
    }

    const currentItem = this.filteredItems[this.currentIndex];
    const totalCount = this.filteredItems.length;

    // Available pages for dropdown
    const pages = Array.from(new Set(this.items.map(i => i.page))).sort((a, b) => a - b);

    container.innerHTML = `
      <!-- Top Audio Reader Controls Bar -->
      <div class="audio-reader-header">
        <div class="reader-title-box">
          <span class="reader-badge-icon">🔊</span>
          <div>
            <div class="reader-title">CompTIA Security+ Cheat Sheet (Read Aloud)</div>
            <div class="reader-subtitle">Interactive Audio Reader • Aleksa Tamburkovski / ZTM</div>
          </div>
        </div>

        <div class="reader-top-controls">
          <!-- Page Filter -->
          <div class="reader-filter-group">
            <label for="reader-page-select">Page:</label>
            <select id="reader-page-select" class="filter-select">
              <option value="all" ${this.activeFilter === "all" ? "selected" : ""}>All Pages (166 Terms)</option>
              ${pages.map(p => `
                <option value="${p}" ${String(this.activeFilter) === String(p) ? "selected" : ""}>Page ${p}</option>
              `).join("")}
            </select>
          </div>

          <!-- Search Filter -->
          <div class="reader-search-box">
            <input type="text" id="reader-search-input" class="reader-search-input" placeholder="Search term or acronym..." value="${this.searchTerm}">
            ${this.searchTerm ? '<button id="btn-clear-reader-search" class="clear-search-btn">✕</button>' : ''}
          </div>
        </div>
      </div>

      <!-- Main Audio Card Stage -->
      <div class="audio-card-stage">
        <div class="audio-display-card ${this.isPlaying ? 'is-speaking' : ''}">
          <div class="audio-card-top-meta">
            <span class="page-pill">📄 PDF Page ${currentItem.page}</span>
            <div class="progress-pill">${this.currentIndex + 1} of ${totalCount}</div>
            <span class="audio-wave-anim ${this.isPlaying ? 'active' : ''}">
              <span class="bar"></span>
              <span class="bar"></span>
              <span class="bar"></span>
              <span class="bar"></span>
              <span class="bar"></span>
            </span>
          </div>

          <div class="audio-term-hero">
            <div class="audio-acronym-badge">${currentItem.acronym}</div>
            <h2 class="audio-full-term">${currentItem.term}</h2>
          </div>

          <div class="audio-definition-box">
            <p class="audio-def-text">${currentItem.definition}</p>
          </div>

          <!-- Speech Status Subtitle -->
          <div class="speech-status-bar">
            <span class="status-indicator-dot ${this.isPlaying ? 'dot-active' : ''}"></span>
            <span id="speech-status-text">${this.isPlaying ? (this.isPaused ? 'Paused' : 'Speaking...') : 'Ready to read aloud'}</span>
          </div>
        </div>
      </div>

      <!-- Audio Control Console -->
      <div class="audio-console-bar">
        <!-- Previous Button -->
        <button id="btn-reader-prev" class="exam-nav-btn secondary" ${this.currentIndex === 0 ? 'disabled' : ''} title="Previous Term (Shortcut: Left Arrow or P)">
          ⏮ Previous
        </button>

        <!-- Play / Pause / Stop Controls -->
        <div class="playback-center-controls">
          <button id="btn-reader-play" class="playback-btn play-main" title="${this.isPlaying && !this.isPaused ? 'Pause' : 'Read Aloud'}">
            ${this.isPlaying && !this.isPaused ? '⏸ Pause' : '▶ Read Aloud'}
          </button>
          <button id="btn-reader-stop" class="playback-btn stop-btn" ${!this.isPlaying ? 'disabled' : ''} title="Stop Reading">
            ⏹ Stop
          </button>
        </div>

        <!-- Next Button -->
        <button id="btn-reader-next" class="exam-nav-btn primary" ${this.currentIndex === totalCount - 1 ? 'disabled' : ''} title="Next Term (Shortcut: Right Arrow or N)">
          Next ⏭
        </button>
      </div>

      <!-- Settings Toolbar (Volume Bar, Voice Speed, Voice, Auto-Advance) -->
      <div class="audio-settings-toolbar">
        <!-- Volume Control Slider Bar -->
        <div class="setting-item volume-control-group">
          <button id="btn-reader-mute" class="vol-icon-btn" title="Mute / Unmute">
            <span id="vol-icon">${this.getVolumeIcon()}</span>
          </button>
          <div class="vol-slider-wrapper">
            <input type="range" id="reader-volume-slider" min="0" max="1" step="0.05" value="${this.volume}" class="volume-range-slider" title="Volume Slider">
            <span id="volume-val-label" class="vol-label">${Math.round(this.volume * 100)}%</span>
          </div>
        </div>

        <!-- Continuous Auto-Advance Toggle -->
        <div class="setting-item">
          <label class="toggle-switch-label">
            <input type="checkbox" id="cb-auto-advance" ${this.autoAdvance ? 'checked' : ''}>
            <span class="switch-slider"></span>
            <span class="setting-text">Continuous Auto-Play</span>
          </label>
        </div>

        <!-- Voice Speed Selection -->
        <div class="setting-item">
          <label for="reader-speed-select">Speed:</label>
          <select id="reader-speed-select" class="speed-select">
            <option value="0.75" ${this.speechRate === 0.75 ? 'selected' : ''}>0.75x (Slow)</option>
            <option value="1.0" ${this.speechRate === 1.0 ? 'selected' : ''}>1.0x (Normal)</option>
            <option value="1.2" ${this.speechRate === 1.2 ? 'selected' : ''}>1.2x (Brisk)</option>
            <option value="1.5" ${this.speechRate === 1.5 ? 'selected' : ''}>1.5x (Fast)</option>
            <option value="1.75" ${this.speechRate === 1.75 ? 'selected' : ''}>1.75x (Rapid)</option>
          </select>
        </div>

        <!-- Voice Selector -->
        ${this.voices.length > 0 ? `
          <div class="setting-item">
            <label for="reader-voice-select">Voice:</label>
            <select id="reader-voice-select" class="voice-select">
              ${this.voices.map((v, idx) => `
                <option value="${idx}" ${this.selectedVoice && this.selectedVoice.name === v.name ? 'selected' : ''}>
                  ${v.name} (${v.lang})
                </option>
              `).join("")}
            </select>
          </div>
        ` : ''}
      </div>

      <!-- Quick Jump / Cheatsheet Index Table -->
      <div class="cheatsheet-table-section">
        <div class="cs-table-header">
          <h3>Quick Index: Browse All Cheat Sheet Terms (${totalCount})</h3>
          <span class="table-hint">Click any term below to jump directly to it</span>
        </div>
        <div class="cs-table-scroll">
          <table class="review-table">
            <thead>
              <tr>
                <th style="width: 10%;">#</th>
                <th style="width: 15%;">Acronym</th>
                <th style="width: 25%;">Full Term</th>
                <th style="width: 40%;">Definition Summary</th>
                <th style="width: 10%;">Page</th>
              </tr>
            </thead>
            <tbody>
              ${this.filteredItems.map((item, idx) => `
                <tr class="cs-table-row ${idx === this.currentIndex ? 'row-active-term' : ''}" data-idx="${idx}">
                  <td><strong>${idx + 1}</strong></td>
                  <td><span class="cs-acronym-badge">${item.acronym}</span></td>
                  <td><strong>${item.term}</strong></td>
                  <td><div class="table-def-cell">${item.definition}</div></td>
                  <td><span class="page-pill">p. ${item.page}</span></td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `;

    this.attachEvents();
  }

  attachEvents() {
    // Next button
    const btnNext = document.getElementById("btn-reader-next");
    if (btnNext) {
      btnNext.addEventListener("click", () => {
        this.nextItem();
      });
    }

    // Previous button
    const btnPrev = document.getElementById("btn-reader-prev");
    if (btnPrev) {
      btnPrev.addEventListener("click", () => {
        this.previousItem();
      });
    }

    // Play / Pause button
    const btnPlay = document.getElementById("btn-reader-play");
    if (btnPlay) {
      btnPlay.addEventListener("click", () => {
        if (this.isPlaying && !this.isPaused) {
          this.pauseSpeech();
        } else if (this.isPaused) {
          this.resumeSpeech();
        } else {
          this.speakCurrent();
        }
      });
    }

    // Stop button
    const btnStop = document.getElementById("btn-reader-stop");
    if (btnStop) {
      btnStop.addEventListener("click", () => {
        this.stopSpeech();
      });
    }

    // Volume Slider & Mute Toggle
    const volSlider = document.getElementById("reader-volume-slider");
    const volLabel = document.getElementById("volume-val-label");
    const volIcon = document.getElementById("vol-icon");
    const btnMute = document.getElementById("btn-reader-mute");

    if (volSlider) {
      const handleVolChange = (e) => {
        this.volume = parseFloat(e.target.value);
        if (this.volume > 0) {
          this.previousVolume = this.volume;
        }
        if (volLabel) volLabel.textContent = `${Math.round(this.volume * 100)}%`;
        if (volIcon) volIcon.textContent = this.getVolumeIcon();
        StorageManager.setVolume(this.volume);
      };

      volSlider.addEventListener("input", handleVolChange);
      volSlider.addEventListener("change", handleVolChange);
    }

    if (btnMute) {
      btnMute.addEventListener("click", () => {
        if (this.volume > 0) {
          this.previousVolume = this.volume;
          this.volume = 0;
        } else {
          this.volume = this.previousVolume > 0 ? this.previousVolume : 1.0;
        }
        if (volSlider) volSlider.value = this.volume;
        if (volLabel) volLabel.textContent = `${Math.round(this.volume * 100)}%`;
        if (volIcon) volIcon.textContent = this.getVolumeIcon();
        StorageManager.setVolume(this.volume);
      });
    }

    // Auto-advance checkbox
    const cbAuto = document.getElementById("cb-auto-advance");
    if (cbAuto) {
      cbAuto.addEventListener("change", (e) => {
        this.autoAdvance = e.target.checked;
      });
    }

    // Speed select
    const speedSelect = document.getElementById("reader-speed-select");
    if (speedSelect) {
      speedSelect.addEventListener("change", (e) => {
        this.speechRate = parseFloat(e.target.value);
        if (this.isPlaying) {
          this.speakCurrent();
        }
      });
    }

    // Voice select
    const voiceSelect = document.getElementById("reader-voice-select");
    if (voiceSelect) {
      voiceSelect.addEventListener("change", (e) => {
        const idx = parseInt(e.target.value);
        this.selectedVoice = this.voices[idx] || null;
        if (this.isPlaying) {
          this.speakCurrent();
        }
      });
    }

    // Page filter
    const pageSelect = document.getElementById("reader-page-select");
    if (pageSelect) {
      pageSelect.addEventListener("change", (e) => {
        this.stopSpeech();
        this.activeFilter = e.target.value;
        this.applyFilters();
        this.currentIndex = 0;
        this.renderView();
      });
    }

    // Search input
    const searchInput = document.getElementById("reader-search-input");
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        this.searchTerm = e.target.value;
        this.applyFilters();
        this.currentIndex = 0;
        this.renderView();
        // keep focus
        const newSearch = document.getElementById("reader-search-input");
        if (newSearch) {
          newSearch.focus();
          newSearch.setSelectionRange(newSearch.value.length, newSearch.value.length);
        }
      });
    }

    const btnClearSearch = document.getElementById("btn-clear-reader-search");
    if (btnClearSearch) {
      btnClearSearch.addEventListener("click", () => {
        this.searchTerm = "";
        this.applyFilters();
        this.currentIndex = 0;
        this.renderView();
      });
    }

    // Jump by table row click
    document.querySelectorAll(".cs-table-row").forEach(row => {
      row.addEventListener("click", () => {
        const idx = parseInt(row.getAttribute("data-idx"));
        this.currentIndex = idx;
        this.renderView();
        if (this.isPlaying) {
          this.speakCurrent();
        }
      });
    });
  }

  nextItem() {
    if (this.currentIndex < this.filteredItems.length - 1) {
      this.currentIndex++;
      this.renderView();
      if (this.isPlaying || this.autoAdvance) {
        this.speakCurrent();
      }
    } else {
      this.stopSpeech();
    }
  }

  previousItem() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.renderView();
      if (this.isPlaying) {
        this.speakCurrent();
      }
    }
  }

  speakCurrent() {
    if (!this.synth) {
      alert("Text-to-speech is not supported on this browser.");
      return;
    }

    this.synth.cancel(); // Cancel any existing speech

    const item = this.filteredItems[this.currentIndex];
    if (!item) return;

    // Pronunciation helper: separate acronym letters if it's all uppercase for clean speaking
    const acronymSpoken = item.acronym.split("").join(" ");
    const speechText = `${acronymSpoken}. ${item.term}. ${item.definition}`;

    const utterance = new SpeechSynthesisUtterance(speechText);
    utterance.rate = this.speechRate;
    utterance.volume = this.volume;

    if (this.selectedVoice) {
      utterance.voice = this.selectedVoice;
    } else if (this.voices.length > 0) {
      utterance.voice = this.voices[0];
    }

    this.isPlaying = true;
    this.isPaused = false;
    this.currentUtterance = utterance;

    utterance.onstart = () => {
      this.isPlaying = true;
      this.isPaused = false;
      this.updatePlayStateUI();
    };

    utterance.onend = () => {
      this.isPlaying = false;
      this.isPaused = false;
      this.updatePlayStateUI();

      if (this.autoAdvance) {
        // Automatically advance to the next item after a brief 0.5s pause
        setTimeout(() => {
          if (this.currentIndex < this.filteredItems.length - 1) {
            this.currentIndex++;
            this.renderView();
            this.speakCurrent();
          }
        }, 500);
      }
    };

    utterance.onerror = (e) => {
      console.warn("SpeechSynthesis error:", e);
      this.isPlaying = false;
      this.isPaused = false;
      this.updatePlayStateUI();
    };

    this.synth.speak(utterance);
    this.updatePlayStateUI();
  }

  pauseSpeech() {
    if (this.synth && this.isPlaying) {
      this.synth.pause();
      this.isPaused = true;
      this.updatePlayStateUI();
    }
  }

  resumeSpeech() {
    if (this.synth && this.isPaused) {
      this.synth.resume();
      this.isPaused = false;
      this.updatePlayStateUI();
    } else {
      this.speakCurrent();
    }
  }

  stopSpeech() {
    if (this.synth) {
      this.synth.cancel();
    }
    this.isPlaying = false;
    this.isPaused = false;
    this.updatePlayStateUI();
  }

  updatePlayStateUI() {
    const playBtn = document.getElementById("btn-reader-play");
    const stopBtn = document.getElementById("btn-reader-stop");
    const statusText = document.getElementById("speech-status-text");
    const waveAnim = document.querySelector(".audio-wave-anim");
    const card = document.querySelector(".audio-display-card");
    const dot = document.querySelector(".status-indicator-dot");

    if (playBtn) {
      playBtn.innerHTML = this.isPlaying && !this.isPaused ? '⏸ Pause' : '▶ Read Aloud';
    }
    if (stopBtn) {
      stopBtn.disabled = !this.isPlaying;
    }
    if (statusText) {
      statusText.textContent = this.isPlaying 
        ? (this.isPaused ? 'Paused' : 'Speaking...') 
        : 'Ready to read aloud';
    }
    if (waveAnim) {
      waveAnim.classList.toggle("active", this.isPlaying && !this.isPaused);
    }
    if (card) {
      card.classList.toggle("is-speaking", this.isPlaying && !this.isPaused);
    }
    if (dot) {
      dot.classList.toggle("dot-active", this.isPlaying && !this.isPaused);
    }
  }
}
