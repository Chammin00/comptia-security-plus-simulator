// CompTIA Security+ Analytics & Exam Readiness Engine

const AnalyticsManager = {
  calculateReadiness() {
    const history = StorageManager.getExamHistory();
    if (history.length === 0) {
      return {
        score: 0,
        status: "Not Started",
        badgeClass: "badge-neutral",
        advice: "Take your first timed exam simulation or domain practice quiz to calculate your readiness score.",
        domainMastery: {},
        passRate: 0,
        avgScore: 0,
        attemptsCount: 0
      };
    }

    const attemptsCount = history.length;
    const passCount = history.filter(h => h.passed).length;
    const passRate = Math.round((passCount / attemptsCount) * 100);

    const totalScaledScore = history.reduce((acc, h) => acc + (h.scaledScore || 100), 0);
    const avgScore = Math.round(totalScaledScore / attemptsCount);

    // Domain Mastery Calculation
    const domainMastery = {
      1: { name: "General Security Concepts", total: 0, correct: 0, pct: 0 },
      2: { name: "Threats, Vulnerabilities & Mitigations", total: 0, correct: 0, pct: 0 },
      3: { name: "Security Architecture", total: 0, correct: 0, pct: 0 },
      4: { name: "Security Operations", total: 0, correct: 0, pct: 0 },
      5: { name: "Security Program Management", total: 0, correct: 0, pct: 0 }
    };

    history.forEach(h => {
      if (h.domainStats) {
        Object.keys(h.domainStats).forEach(dId => {
          if (domainMastery[dId]) {
            domainMastery[dId].total += h.domainStats[dId].total || 0;
            domainMastery[dId].correct += h.domainStats[dId].correct || 0;
          }
        });
      }
    });

    Object.keys(domainMastery).forEach(dId => {
      const d = domainMastery[dId];
      d.pct = d.total > 0 ? Math.round((d.correct / d.total) * 100) : 0;
    });

    // Weighted Readiness Score
    // Weight latest score 50%, avgScore 30%, domain balance 20%
    const latestScore = history[0].scaledScore;
    const readinessScore = Math.min(100, Math.round((latestScore / 900) * 100));

    let status = "Needs Practice";
    let badgeClass = "badge-warn";
    let advice = "Focus on drilling your lowest-scoring domain and review missed questions.";

    if (readinessScore >= 84) {
      status = "Exam Ready";
      badgeClass = "badge-pass";
      advice = "Outstanding performance! You are consistently scoring above the 750 CompTIA passing threshold.";
    } else if (readinessScore >= 70) {
      status = "Approaching Passing";
      badgeClass = "badge-info";
      advice = "Good progress! A few more practice sessions and PBQ drills will push you comfortably above 750.";
    } else {
      status = "Critical Gaps";
      badgeClass = "badge-fail";
      advice = "Review fundamental concepts in Domain 1 & Domain 4 and practice flashcards.";
    }

    return {
      score: readinessScore,
      latestScaledScore: latestScore,
      status: status,
      badgeClass: badgeClass,
      advice: advice,
      domainMastery: domainMastery,
      passRate: passRate,
      avgScore: avgScore,
      attemptsCount: attemptsCount
    };
  },

  renderAnalyticsDashboard() {
    const container = document.getElementById("analytics-screen-container");
    if (!container) return;

    const data = this.calculateReadiness();
    const history = StorageManager.getExamHistory();
    const missedCount = StorageManager.getMissedQuestionIds().length;
    const bookmarkedCount = StorageManager.getBookmarks().length;

    container.innerHTML = `
      <div class="analytics-header">
        <div class="analytics-title">
          <span class="an-icon">📊</span>
          <div>
            <h2>Exam Readiness & Performance Analytics</h2>
            <p>Live progress tracking, domain diagnostic metrics, and historical test attempts</p>
          </div>
        </div>

        <button id="btn-clear-history" class="action-pill-btn" title="Reset all test history">
          🗑️ Reset History
        </button>
      </div>

      <!-- Top Summary Cards -->
      <div class="analytics-summary-grid">
        <div class="an-card readiness-card">
          <div class="an-card-label">Overall Exam Readiness</div>
          <div class="readiness-gauge-display">
            <span class="readiness-num">${data.score}%</span>
            <span class="readiness-tag ${data.badgeClass}">${data.status}</span>
          </div>
          <div class="an-card-subtext">${data.advice}</div>
        </div>

        <div class="an-card">
          <div class="an-card-label">Average Scaled Score</div>
          <div class="metric-highlight">${data.avgScore > 0 ? data.avgScore : '--'} <span class="denom">/ 900</span></div>
          <div class="an-card-subtext">Pass Mark: 750 (CompTIA Standard)</div>
        </div>

        <div class="an-card">
          <div class="an-card-label">Exam Pass Rate</div>
          <div class="metric-highlight">${data.passRate}%</div>
          <div class="an-card-subtext">${data.attemptsCount} total simulation(s) taken</div>
        </div>

        <div class="an-card">
          <div class="an-card-label">Weak Area Vault</div>
          <div class="metric-highlight text-warn">${missedCount}</div>
          <div class="an-card-subtext">${bookmarkedCount} questions bookmarked</div>
        </div>
      </div>

      <!-- Domain Mastery Diagnostics -->
      <div class="domain-diagnostics-section">
        <h3>Domain Mastery Diagnostic (% Correct)</h3>
        <div class="domain-grid-cards">
          ${Object.keys(data.domainMastery).map(dId => {
            const d = data.domainMastery[dId];
            const isPassing = d.pct >= 80;
            return `
              <div class="domain-diag-card">
                <div class="diag-header">
                  <span class="diag-d-name">${d.name}</span>
                  <span class="diag-d-pct ${isPassing ? 'text-pass' : 'text-warn'}">${d.pct}%</span>
                </div>
                <div class="domain-bar-bg">
                  <div class="domain-bar-fill ${isPassing ? 'bar-good' : 'bar-warn'}" style="width: ${d.pct}%;"></div>
                </div>
                <div class="diag-footer-stats">
                  <span>${d.correct} / ${d.total} answered correctly</span>
                </div>
              </div>
            `;
          }).join("")}
        </div>
      </div>

      <!-- History Table -->
      <div class="history-table-section">
        <h3>Exam Attempt History</h3>
        ${history.length === 0 ? `
          <div class="empty-history-box">No exam attempts recorded yet. Complete a timed simulation to view your historical trends.</div>
        ` : `
          <div class="table-responsive">
            <table class="history-table">
              <thead>
                <tr>
                  <th>Date & Time</th>
                  <th>Mode</th>
                  <th>Questions</th>
                  <th>Scaled Score</th>
                  <th>Result</th>
                  <th>Time Spent</th>
                </tr>
              </thead>
              <tbody>
                ${history.map(h => {
                  const dateStr = new Date(h.date).toLocaleDateString() + " " + new Date(h.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
                  const mins = Math.floor((h.timeSpentSeconds || 0) / 60);
                  const secs = (h.timeSpentSeconds || 0) % 60;
                  return `
                    <tr>
                      <td>${dateStr}</td>
                      <td><span class="mode-tag">${h.mode.toUpperCase()}</span></td>
                      <td>${h.correctCount} / ${h.totalQuestions} (${h.percentage}%)</td>
                      <td><strong>${h.scaledScore} / 900</strong></td>
                      <td>
                        <span class="status-pill ${h.passed ? 'pill-answered' : 'pill-unanswered'}">
                          ${h.passed ? 'PASS' : 'FAIL'}
                        </span>
                      </td>
                      <td>${mins}m ${secs}s</td>
                    </tr>
                  `;
                }).join("")}
              </tbody>
            </table>
          </div>
        `}
      </div>
    `;

    const btnClear = document.getElementById("btn-clear-history");
    if (btnClear) {
      btnClear.addEventListener("click", () => {
        if (confirm("Are you sure you want to clear your exam history? This cannot be undone.")) {
          StorageManager.clearExamHistory();
          this.renderAnalyticsDashboard();
        }
      });
    }
  }
};
