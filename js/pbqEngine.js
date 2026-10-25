// CompTIA Security+ SY0-701 Performance-Based Questions (PBQs) & Hands-on Labs Engine

class PBQEngine {
  constructor() {
    this.currentPbqIndex = 0;
    this.userPbqAnswers = {}; // pbqId -> user state
    this.submittedState = {}; // pbqId -> boolean
    this.terminalState = {};  // lab-1 state
    this.terminalHistory = [];
    this.historyIndex = -1;
  }

  startPBQMode(index = 0) {
    this.currentPbqIndex = index;
    this.initLabState();
    this.renderPBQ();
  }

  initLabState() {
    const pbq = PBQ_DATA[this.currentPbqIndex];
    if (!pbq) return;

    if (pbq.type === "terminal_lab" && !this.terminalState[pbq.id]) {
      this.terminalState[pbq.id] = {
        filesystem: JSON.parse(JSON.stringify(pbq.initialFilesystem)),
        services: JSON.parse(JSON.stringify(pbq.initialServices)),
        ufw: JSON.parse(JSON.stringify(pbq.initialUfw)),
        tasks: JSON.parse(JSON.stringify(pbq.tasks)),
        historyLog: [
          "Linux sec-prod-srv-01 5.15.0-89-generic #99-Ubuntu SMP x86_64",
          "Type 'help' for available commands or execute hardening tasks directly.",
          ""
        ]
      };
    }

    if (!this.userPbqAnswers[pbq.id]) {
      if (pbq.type === "firewall_interactive_lab" || pbq.type === "firewall_acl") {
        this.userPbqAnswers[pbq.id] = {
          rules: JSON.parse(JSON.stringify(pbq.initialRules)),
          packetResults: {}
        };
      } else if (pbq.type === "wlc_gui_lab") {
        this.userPbqAnswers[pbq.id] = {};
        pbq.fields.forEach(f => {
          this.userPbqAnswers[pbq.id][f.id] = f.value || (f.options ? f.options[0] : "");
        });
      } else if (pbq.type === "owasp_lab") {
        this.userPbqAnswers[pbq.id] = {
          searchQuery: "Alice",
          isParameterized: false,
          executed: false
        };
      } else if (pbq.type === "forensics_lab") {
        this.userPbqAnswers[pbq.id] = {
          volatilityOrder: pbq.volatilityItems.map(i => i.id),
          hashVerified: false
        };
      } else if (pbq.questions) {
        this.userPbqAnswers[pbq.id] = {};
      } else if (pbq.matches) {
        this.userPbqAnswers[pbq.id] = {};
      }
    }
  }

  renderPBQ() {
    const container = document.getElementById("pbq-screen-container");
    if (!container) return;

    const pbq = PBQ_DATA[this.currentPbqIndex];
    if (!pbq) return;

    const isSubmitted = this.submittedState[pbq.id] || false;

    container.innerHTML = `
      <div class="pbq-header-bar">
        <div class="pbq-title-box">
          <span class="pbq-badge-icon">🛠️</span>
          <div>
            <div class="pbq-title">${pbq.title}</div>
            <div class="pbq-subtitle">${pbq.domain} • Difficulty: <strong>${pbq.difficulty}</strong></div>
          </div>
        </div>

        <div class="pbq-selector-nav">
          ${PBQ_DATA.map((item, idx) => `
            <button class="pbq-nav-pill ${idx === this.currentPbqIndex ? 'active' : ''}" data-index="${idx}">
              Lab ${idx + 1}
            </button>
          `).join("")}
        </div>
      </div>

      <!-- Scenario Description Card -->
      <div class="pbq-scenario-card">
        <div class="scenario-title">📋 Hands-on Lab Scenario & Directives:</div>
        <p class="scenario-text">${pbq.scenario.replace(/\n/g, "<br>")}</p>
      </div>

      <!-- Interactive Workspace Container -->
      <div class="pbq-interactive-workspace">
        ${this.renderPBQContent(pbq, isSubmitted)}
      </div>

      <!-- Explanation Drawer -->
      ${isSubmitted ? `
        <div class="pbq-explanation-drawer animate-fade-in">
          <div class="pbq-exp-header">
            <span>💡 Technical Walkthrough & Lab Solution</span>
          </div>
          <div class="pbq-exp-content">
            ${ExplanationFormatter.format(pbq.explanation)}
          </div>
        </div>
      ` : ''}

      <!-- Footer Actions -->
      <div class="pbq-footer-bar">
        <button id="btn-pbq-reset" class="exam-nav-btn secondary">
          ↺ Reset Lab
        </button>

        <div class="pbq-footer-right">
          ${!isSubmitted ? `
            <button id="btn-pbq-submit" class="exam-nav-btn primary">
              ✓ Evaluate & Submit Lab
            </button>
          ` : `
            <button id="btn-pbq-retry" class="exam-nav-btn neutral">
              Try Again
            </button>
          `}
        </div>
      </div>
    `;

    this.attachPBQEventListeners(pbq, isSubmitted);
  }

  renderPBQContent(pbq, isSubmitted) {
    if (pbq.type === "terminal_lab") {
      return this.renderTerminalLab(pbq, isSubmitted);
    } else if (pbq.type === "nmap_lab") {
      return this.renderNmapLab(pbq, isSubmitted);
    } else if (pbq.type === "firewall_interactive_lab" || pbq.type === "firewall_acl") {
      return this.renderFirewallInteractiveLab(pbq, isSubmitted);
    } else if (pbq.type === "siem_lab") {
      return this.renderSiemLab(pbq, isSubmitted);
    } else if (pbq.type === "wlc_gui_lab") {
      return this.renderWlcGuiLab(pbq, isSubmitted);
    } else if (pbq.type === "owasp_lab") {
      return this.renderOwaspLab(pbq, isSubmitted);
    } else if (pbq.type === "pki_lab" || pbq.type === "crypto_matrix_lab" || pbq.type === "mdm_policy_lab") {
      return this.renderPkiLab(pbq, isSubmitted);
    } else if (pbq.type === "forensics_lab") {
      return this.renderForensicsLab(pbq, isSubmitted);
    } else if (pbq.type === "ir_playbook_lab") {
      return this.renderIrPlaybookLab(pbq, isSubmitted);
    } else if (pbq.type === "architecture_matrix_lab") {
      return this.renderArchitectureMatrixLab(pbq, isSubmitted);
    } else if (pbq.type === "controls_lab") {
      return this.renderControlsLab(pbq, isSubmitted);
    } else if (pbq.type === "iam_audit_lab") {
      return this.renderIamAuditLab(pbq, isSubmitted);
    }
    return `<div>Lab content loading...</div>`;
  }

  // =========================================================================
  // 1. TERMINAL LAB RENDERER
  // =========================================================================
  renderTerminalLab(pbq, isSubmitted) {
    const state = this.terminalState[pbq.id];
    const completedCount = state.tasks.filter(t => t.done).length;

    return `
      <div class="lab-terminal-layout">
        <!-- Left Side: Task Checklist -->
        <div class="lab-tasks-sidebar">
          <div class="tasks-header">
            <h4>🎯 Lab Objectives (${completedCount}/${state.tasks.length} Completed)</h4>
          </div>
          <div class="tasks-list">
            ${state.tasks.map((t, idx) => `
              <div class="task-item ${t.done ? 'task-done' : ''}">
                <span class="task-check">${t.done ? '✅' : '⬜'}</span>
                <span class="task-desc">${t.desc}</span>
              </div>
            `).join("")}
          </div>
          <div class="terminal-quick-hints">
            <strong>💡 Helpful Commands:</strong>
            <code>ss -tulpn</code>
            <code>systemctl stop telnet</code>
            <code>systemctl disable telnet</code>
            <code>chmod 600 /etc/shadow</code>
            <code>ufw default deny incoming</code>
            <code>ufw allow 22/tcp</code>
            <code>ufw allow 443/tcp</code>
            <code>ufw enable</code>
          </div>
        </div>

        <!-- Right Side: Interactive Shell -->
        <div class="terminal-window">
          <div class="terminal-header">
            <span class="term-dot red"></span>
            <span class="term-dot yellow"></span>
            <span class="term-dot green"></span>
            <span class="term-title">root@sec-prod-srv-01:~ (Ubuntu 22.04 LTS)</span>
          </div>
          <div class="terminal-body" id="term-output-area">
            ${state.historyLog.map(line => `<div class="term-line">${line}</div>`).join("")}
            <div class="term-prompt-row">
              <span class="term-prompt">root@sec-prod-srv-01:~#</span>
              <input type="text" id="term-cmd-input" class="term-input" autocomplete="off" spellcheck="false" autofocus placeholder="Type command here and press Enter...">
            </div>
          </div>
        </div>
      </div>
    `;
  }

  handleTerminalCommand(cmd, pbq) {
    const raw = cmd.trim();
    if (!raw) return;

    const state = this.terminalState[pbq.id];
    state.historyLog.push(`root@sec-prod-srv-01:~# ${raw}`);

    const parts = raw.split(/\s+/);
    const mainCmd = parts[0].toLowerCase();
    const args = parts.slice(1);

    switch (mainCmd) {
      case "help":
        state.historyLog.push(
          "Available Security Commands:",
          "  ls [-la] [path]        List directory contents",
          "  cat [file]             View file contents",
          "  chmod [mode] [file]    Change file mode/permissions",
          "  chown [owner] [file]   Change file owner",
          "  ss -tulpn              Inspect listening network sockets",
          "  netstat -tulnp         Inspect network connections",
          "  systemctl [cmd] [srv]  Control system services (status/stop/disable/start)",
          "  ufw [cmd]              Manage host firewall (status/allow/deny/enable/disable)",
          "  whoami / id            Display current user credentials",
          "  clear                  Clear terminal screen"
        );
        break;

      case "clear":
        state.historyLog = [];
        break;

      case "whoami":
        state.historyLog.push("root");
        break;

      case "id":
        state.historyLog.push("uid=0(root) gid=0(root) groups=0(root)");
        break;

      case "ls":
        if (args.includes("-la") || args.includes("-l")) {
          state.historyLog.push(
            "total 32",
            "drwxr-xr-x  3 root root 4096 Sep  6 09:00 .",
            "drwxr-xr-x 19 root root 4096 Sep  6 08:50 ..",
            "-rw-r--r--  1 root root  220 Jan  6  2022 .bash_logout",
            "-rw-r--r--  1 root root 3771 Jan  6  2022 .bashrc",
            "-rw-r--r--  1 root root  807 Jan  6  2022 .profile"
          );
        } else {
          state.historyLog.push("bin  boot  dev  etc  home  lib  opt  root  run  srv  tmp  usr  var");
        }
        break;

      case "cat":
        const targetFile = args[0];
        if (state.filesystem[targetFile]) {
          state.historyLog.push(state.filesystem[targetFile].content);
        } else if (targetFile === "/etc/shadow" && state.filesystem["/etc/shadow"].perms === "-rw-------") {
          state.historyLog.push(state.filesystem["/etc/shadow"].content);
        } else {
          state.historyLog.push(`cat: ${targetFile || ''}: No such file or directory`);
        }
        break;

      case "chmod":
        const mode = args[0];
        const file = args[1];
        if (file === "/etc/shadow" || file === "etc/shadow") {
          if (mode === "600" || mode === "0600") {
            state.filesystem["/etc/shadow"].perms = "-rw-------";
            state.tasks[2].done = true;
            state.historyLog.push("Permissions updated: /etc/shadow -> 600 (Read/Write root only - Secure)");
          } else if (mode === "640" || mode === "0640") {
            state.filesystem["/etc/shadow"].perms = "-rw-r-----";
            state.tasks[2].done = true;
            state.historyLog.push("Permissions updated: /etc/shadow -> 640 (Read/Write root, Read shadow group - Secure)");
          } else {
            state.historyLog.push(`Permissions updated to ${mode}, but Security+ standards recommend 600 or 640 for /etc/shadow.`);
          }
        } else {
          state.historyLog.push(`chmod: cannot access '${file || ''}': No such file`);
        }
        break;

      case "ss":
      case "netstat":
        state.tasks[0].done = true;
        const telnetStatus = state.services.telnet.running ? "LISTEN (INSECURE)" : "CLOSED";
        const nginxStatus = state.services.nginx.running ? "LISTEN" : "CLOSED";
        const sshdStatus = state.services.sshd.running ? "LISTEN" : "CLOSED";
        state.historyLog.push(
          "Netid  State   Recv-Q Send-Q Local Address:Port  Peer Address:Port Process",
          `tcp    ${telnetStatus.padEnd(7)} 0      128    0.0.0.0:23          0.0.0.0:*     users:(("in.telnetd",pid=1299,fd=3))`,
          `tcp    ${sshdStatus.padEnd(7)} 0      128    0.0.0.0:22          0.0.0.0:*     users:(("sshd",pid=1244,fd=3))`,
          `tcp    ${nginxStatus.padEnd(7)} 0      511    0.0.0.0:443         0.0.0.0:*     users:(("nginx",pid=1450,fd=6))`
        );
        break;

      case "systemctl":
        const action = args[0];
        const srv = args[1];
        if (srv === "telnet" || srv === "telnetd" || srv === "in.telnetd") {
          if (action === "stop") {
            state.services.telnet.running = false;
            state.historyLog.push("Service 'telnet' stopped.");
          } else if (action === "disable") {
            state.services.telnet.enabled = false;
            state.historyLog.push("Synchronizing state of telnet.service with SysV service script...", "Removed /etc/systemd/system/multi-user.target.wants/telnet.service.");
          } else if (action === "status") {
            state.historyLog.push(`● telnet.service - Telnet Server Daemon\n   Loaded: loaded\n   Active: ${state.services.telnet.running ? 'active (running)' : 'inactive (dead)'}`);
          }
          if (!state.services.telnet.running && !state.services.telnet.enabled) {
            state.tasks[1].done = true;
          }
        } else {
          state.historyLog.push(`systemctl: action '${action || ''}' processed on ${srv || 'service'}.`);
        }
        break;

      case "ufw":
        const ufwSub = args.join(" ").toLowerCase();
        if (ufwSub.includes("default deny incoming") || ufwSub.includes("default deny")) {
          state.ufw.defaultIncoming = "DENY";
          state.historyLog.push("Default incoming policy changed to 'deny'\n(be sure to update your rules accordingly)");
        } else if (ufwSub.includes("allow 22") || ufwSub.includes("allow ssh")) {
          if (!state.ufw.rules.includes("22/tcp")) state.ufw.rules.push("22/tcp");
          state.historyLog.push("Rule added\nRule added (v6)");
        } else if (ufwSub.includes("allow 443") || ufwSub.includes("allow https")) {
          if (!state.ufw.rules.includes("443/tcp")) state.ufw.rules.push("443/tcp");
          state.historyLog.push("Rule added\nRule added (v6)");
        } else if (ufwSub === "enable") {
          state.ufw.enabled = true;
          state.historyLog.push("Firewall is active and enabled on system startup");
        } else if (ufwSub === "status") {
          state.historyLog.push(
            `Status: ${state.ufw.enabled ? 'active' : 'inactive'}`,
            `Default: ${state.ufw.defaultIncoming.toLowerCase()} (incoming), allow (outgoing)`,
            "To                         Action      From",
            "--                         ------      ----",
            ...state.ufw.rules.map(r => `${r.padEnd(26)} ALLOW       Anywhere`)
          );
        }

        if (state.ufw.enabled && state.ufw.defaultIncoming === "DENY" && state.ufw.rules.includes("22/tcp") && state.ufw.rules.includes("443/tcp")) {
          state.tasks[3].done = true;
        }
        break;

      default:
        state.historyLog.push(`bash: ${mainCmd}: command not found. Type 'help' for guidance.`);
        break;
    }

    this.renderPBQ();
    setTimeout(() => {
      const outputArea = document.getElementById("term-output-area");
      if (outputArea) outputArea.scrollTop = outputArea.scrollHeight;
      const cmdInput = document.getElementById("term-cmd-input");
      if (cmdInput) cmdInput.focus();
    }, 50);
  }

  // =========================================================================
  // 2. NMAP RECONNAISSANCE LAB RENDERER
  // =========================================================================
  renderNmapLab(pbq, isSubmitted) {
    const answers = this.userPbqAnswers[pbq.id] || {};

    return `
      <div class="nmap-lab-container">
        <div class="nmap-console-box">
          <div class="nmap-banner">
            <span>📡 Target Host: <strong>${pbq.targetHost}</strong></span>
            <button id="btn-run-nmap" class="action-pill-btn">▶ Run 'nmap -sS -sV 10.0.5.25'</button>
          </div>

          <div class="nmap-output-terminal">
            <pre id="nmap-raw-output">Starting Nmap 7.94 ( https://nmap.org ) at 2026-09-06 10:30 UTC
Nmap scan report for sec-db-target.corp.local (10.0.5.25)
Host is up (0.00042s latency).
Not shown: 994 closed tcp ports (reset)
PORT     STATE SERVICE       VERSION
21/tcp   open  ftp           vsftpd 2.3.4 (Anonymous allowed)
22/tcp   open  ssh           OpenSSH 8.9p1 Ubuntu 3ubuntu0.4 (Ubuntu Linux; protocol 2.0)
23/tcp   open  telnet        Linux telnetd
80/tcp   open  http          Apache httpd 2.4.52 ((Ubuntu))
443/tcp  open  ssl/https     Apache httpd 2.4.52 (TLSv1.3 only)
3389/tcp open  ms-wbt-server xrdp

Service Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel</pre>
          </div>
        </div>

        <div class="nmap-findings-section">
          <h4>Vulnerability Assessment & Triage Questions:</h4>
          ${pbq.questions.map((q, qIdx) => {
            const userChoice = answers[q.id];
            return `
              <div class="log-q-box">
                <div class="log-q-prompt">${q.prompt}</div>
                <div class="log-q-options">
                  ${q.options.map(opt => `
                    <label class="radio-label ${isSubmitted ? (opt === q.correctAnswer ? 'correct-highlight' : (userChoice === opt ? 'incorrect-highlight' : '')) : ''}">
                      <input type="radio" name="nmap_q_${q.id}" value="${opt}" ${userChoice === opt ? 'checked' : ''} ${isSubmitted ? 'disabled' : ''}>
                      <span>${opt}</span>
                    </label>
                  `).join("")}
                </div>
              </div>
            `;
          }).join("")}
        </div>
      </div>
    `;
  }

  // =========================================================================
  // 3. FIREWALL INTERACTIVE LAB RENDERER
  // =========================================================================
  renderFirewallInteractiveLab(pbq, isSubmitted) {
    const state = this.userPbqAnswers[pbq.id] || { rules: [...pbq.initialRules], packetResults: {} };

    return `
      <div class="firewall-workspace">
        <div class="firewall-top-bar">
          <h4>Perimeter Firewall ACL Rule Table (Top-to-Bottom Evaluation)</h4>
        </div>

        <div class="acl-table-container">
          <table class="acl-editor-table">
            <thead>
              <tr>
                <th style="width: 5%;">Seq</th>
                <th style="width: 12%;">Action</th>
                <th style="width: 20%;">Source IP/Subnet</th>
                <th style="width: 20%;">Destination IP</th>
                <th style="width: 12%;">Port</th>
                <th style="width: 12%;">Protocol</th>
                <th style="width: 19%;">Rule Description</th>
              </tr>
            </thead>
            <tbody>
              ${state.rules.map((rule, idx) => `
                <tr class="acl-rule-row" data-seq="${idx}">
                  <td><strong>${idx + 10}</strong></td>
                  <td>
                    <select class="acl-field action" data-field="action" data-seq="${idx}" ${isSubmitted ? 'disabled' : ''}>
                      <option value="PERMIT" ${rule.action === "PERMIT" ? 'selected' : ''}>PERMIT</option>
                      <option value="DENY" ${rule.action === "DENY" ? 'selected' : ''}>DENY</option>
                    </select>
                  </td>
                  <td>
                    <input type="text" class="acl-input-text" data-field="src" data-seq="${idx}" value="${rule.src}" ${isSubmitted ? 'disabled' : ''}>
                  </td>
                  <td>
                    <input type="text" class="acl-input-text" data-field="dst" data-seq="${idx}" value="${rule.dst}" ${isSubmitted ? 'disabled' : ''}>
                  </td>
                  <td>
                    <input type="text" class="acl-input-text" data-field="port" data-seq="${idx}" value="${rule.port}" ${isSubmitted ? 'disabled' : ''}>
                  </td>
                  <td>
                    <select class="acl-field protocol" data-field="protocol" data-seq="${idx}" ${isSubmitted ? 'disabled' : ''}>
                      <option value="TCP" ${rule.protocol === "TCP" ? 'selected' : ''}>TCP</option>
                      <option value="UDP" ${rule.protocol === "UDP" ? 'selected' : ''}>UDP</option>
                      <option value="TCP/UDP" ${rule.protocol === "TCP/UDP" ? 'selected' : ''}>TCP/UDP</option>
                      <option value="ICMP" ${rule.protocol === "ICMP" ? 'selected' : ''}>ICMP</option>
                      <option value="Any" ${rule.protocol === "Any" ? 'selected' : ''}>Any</option>
                    </select>
                  </td>
                  <td>
                    <span class="rule-desc-text">${rule.desc || ''}</span>
                  </td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>

        <!-- Live Packet Injector / Test Simulator -->
        <div class="packet-injector-card">
          <div class="injector-header">
            <h4>🧪 Live Packet Injection & Policy Validation Engine</h4>
            <span class="sub">Click a test packet to verify how your ACL evaluates real network traffic:</span>
          </div>
          <div class="packet-test-grid">
            ${pbq.testPackets ? pbq.testPackets.map(pkt => {
              const res = state.packetResults[pkt.id];
              return `
                <div class="packet-test-item" data-pkt-id="${pkt.id}">
                  <div class="pkt-top">
                    <span class="pkt-name">${pkt.name}</span>
                    ${res ? `<span class="pkt-res-badge ${res.action === pkt.expectedAction ? 'pass' : 'fail'}">${res.action} (Match: Rule ${res.matchedRule})</span>` : '<span class="pkt-res-badge untested">Ready to test</span>'}
                  </div>
                  <div class="pkt-details">
                    <code>${pkt.src} -> ${pkt.dst}:${pkt.port} [${pkt.protocol}]</code>
                  </div>
                  <button class="btn-test-pkt action-pill-btn" data-pkt-id="${pkt.id}">🚀 Send Packet</button>
                </div>
              `;
            }).join("") : ''}
          </div>
        </div>
      </div>
    `;
  }

  // =========================================================================
  // 4. SIEM SOC LAB RENDERER
  // =========================================================================
  renderSiemLab(pbq, isSubmitted) {
    const answers = this.userPbqAnswers[pbq.id] || {};

    return `
      <div class="siem-lab-layout">
        <div class="siem-logs-panel">
          <div class="siem-panel-header">
            <span>🛡️ SIEM Correlated Log Stream</span>
          </div>
          <div class="logs-scroll-area">
            ${pbq.logs.map((log, idx) => `
              <div class="siem-log-entry">
                <div class="log-top-row">
                  <span class="log-source-tag">${log.source}</span>
                  <span class="log-ts">${log.timestamp}</span>
                </div>
                <pre class="log-text">${log.entry}</pre>
              </div>
            `).join("")}
          </div>
        </div>

        <div class="siem-triage-panel">
          <h4>🚨 Incident Triage & Decision Form</h4>
          ${pbq.questions.map((q, idx) => {
            const userChoice = answers[q.id];
            return `
              <div class="log-q-box">
                <div class="log-q-prompt">${q.prompt}</div>
                <div class="log-q-options">
                  ${q.options.map(opt => `
                    <label class="radio-label ${isSubmitted ? (opt === q.correctAnswer ? 'correct-highlight' : (userChoice === opt ? 'incorrect-highlight' : '')) : ''}">
                      <input type="radio" name="siem_q_${q.id}" value="${opt}" ${userChoice === opt ? 'checked' : ''} ${isSubmitted ? 'disabled' : ''}>
                      <span>${opt}</span>
                    </label>
                  `).join("")}
                </div>
              </div>
            `;
          }).join("")}
        </div>
      </div>
    `;
  }

  // =========================================================================
  // 5. WLC WIRELESS GUI LAB RENDERER
  // =========================================================================
  renderWlcGuiLab(pbq, isSubmitted) {
    const answers = this.userPbqAnswers[pbq.id] || {};

    return `
      <div class="wlc-gui-window">
        <div class="wlc-navbar">
          <span class="wlc-brand">🌐 Enterprise Wireless LAN Controller (WLC 9800-CL)</span>
          <span class="wlc-status">Status: Connected • Management IP: 192.168.1.5</span>
        </div>

        <div class="wlc-body">
          <div class="wlc-tabs">
            <button class="wlc-tab active">WLANs > Security Profile (Corp-Secure)</button>
          </div>

          <div class="wlc-form-grid">
            ${pbq.fields.map(field => `
              <div class="wlc-form-group">
                <label class="wlc-label">${field.label}:</label>
                ${field.options ? `
                  <select class="wlc-select" data-field-id="${field.id}" ${isSubmitted ? 'disabled' : ''}>
                    ${field.options.map(opt => `
                      <option value="${opt}" ${answers[field.id] === opt ? 'selected' : ''}>${opt}</option>
                    `).join("")}
                  </select>
                ` : `
                  <input type="text" class="wlc-input" value="${answers[field.id] || field.value}" ${field.readOnly ? 'readonly' : ''}>
                `}
                ${isSubmitted && field.correct ? `
                  <span class="wlc-field-validation ${answers[field.id] === field.correct ? 'pass' : 'fail'}">
                    ${answers[field.id] === field.correct ? '✓ Valid' : `✗ Expected: ${field.correct}`}
                  </span>
                ` : ''}
              </div>
            `).join("")}
          </div>
        </div>
      </div>
    `;
  }

  // =========================================================================
  // 6. OWASP WEB APP DEFENSE LAB RENDERER
  // =========================================================================
  renderOwaspLab(pbq, isSubmitted) {
    const state = this.userPbqAnswers[pbq.id] || { searchQuery: "Alice", isParameterized: false, executed: false };
    const queryStr = state.searchQuery || "";
    const isInjection = queryStr.includes("'") || queryStr.includes("UNION") || queryStr.includes("OR");

    let resultHtml = "";
    if (state.executed) {
      if (state.isParameterized) {
        resultHtml = `
          <div class="owasp-res-card secure">
            <span class="owasp-badge safe">🛡️ Parameterized Query (Prepared Statement) Active</span>
            <p>Database safely escaped user input. Exact match search executed for string: <code>${queryStr}</code></p>
            <div class="db-output">Query Output: 0 rows returned. (No injection possible).</div>
          </div>
        `;
      } else if (isInjection) {
        resultHtml = `
          <div class="owasp-res-card exploit">
            <span class="owasp-badge vuln">🚨 Vulnerability Exploited! SQL Injection Successful</span>
            <p>Concatenated SQL executed: <code>SELECT * FROM employees WHERE name = '${queryStr}'</code></p>
            <div class="db-output">
              <table class="review-table">
                <thead><tr><th>id</th><th>username</th><th>password_hash</th><th>role</th></tr></thead>
                <tbody>
                  <tr><td>1</td><td>admin</td><td>$2b$12$e8x... (EXFILTRATED)</td><td>Domain Admin</td></tr>
                  <tr><td>2</td><td>cfo_user</td><td>$2b$12$k9p... (EXFILTRATED)</td><td>Finance Exec</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        `;
      } else {
        resultHtml = `
          <div class="owasp-res-card normal">
            <span class="owasp-badge normal">Standard Search Result</span>
            <p>Results for '${queryStr}': Found 1 employee (Alice Johnson - Security Analyst).</p>
          </div>
        `;
      }
    }

    return `
      <div class="owasp-lab-layout">
        <div class="owasp-app-mockup">
          <div class="owasp-app-header">
            <span>🏢 Corporate Employee Directory Portal (vulnerable-app.corp.internal)</span>
          </div>
          <div class="owasp-app-body">
            <div class="owasp-form-row">
              <label>Search Employee Directory:</label>
              <input type="text" id="owasp-input" class="form-input" value="${state.searchQuery}">
              <button id="btn-owasp-search" class="exam-nav-btn primary">Search</button>
            </div>

            <div class="owasp-payload-picker">
              <span>Quick Test Payloads:</span>
              ${pbq.samplePayloads.map(p => `
                <button class="action-pill-btn btn-payload-preset" data-val="${p.input}" title="${p.desc}">${p.label}</button>
              `).join("")}
            </div>

            <div class="owasp-toggle-row">
              <label class="toggle-switch-label">
                <input type="checkbox" id="cb-parameterized" ${state.isParameterized ? 'checked' : ''}>
                <span class="switch-slider"></span>
                <span class="setting-text"><strong>Enable Secure Prepared Statements (Parameterized Queries)</strong></span>
              </label>
            </div>

            <div class="owasp-results-area">
              ${resultHtml}
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // =========================================================================
  // 7. PKI & CERTIFICATE LAB RENDERER
  // =========================================================================
  renderPkiLab(pbq, isSubmitted) {
    const answers = this.userPbqAnswers[pbq.id] || {};

    return `
      <div class="pki-lab-layout">
        <h4>Match each PKI requirement to the correct X.509 Certificate component:</h4>
        <div class="crypto-matrix-grid">
          ${pbq.matches.map((item, idx) => {
            const userChoice = answers[idx];
            const isCorrect = userChoice === item.correct;
            return `
              <div class="crypto-matrix-card ${isSubmitted ? (isCorrect ? 'matrix-pass' : 'matrix-fail') : ''}">
                <div class="matrix-req-text">${idx + 1}. ${item.requirement}</div>
                <div class="matrix-select-wrap">
                  <select class="pki-matrix-select" data-index="${idx}" ${isSubmitted ? 'disabled' : ''}>
                    <option value="">-- Select Certificate Component --</option>
                    ${item.options.map(opt => `
                      <option value="${opt}" ${userChoice === opt ? 'selected' : ''}>${opt}</option>
                    `).join("")}
                  </select>
                </div>
                ${isSubmitted ? `
                  <div class="matrix-feedback ${isCorrect ? 'text-success' : 'text-danger'}">
                    ${isCorrect ? '✓ Correct Choice' : `✗ Correct: <strong>${item.correct}</strong>`}
                    <div class="matrix-reason">${item.reason}</div>
                  </div>
                ` : ''}
              </div>
            `;
          }).join("")}
        </div>
      </div>
    `;
  }

  // =========================================================================
  // 8. DIGITAL FORENSICS LAB RENDERER
  // =========================================================================
  renderForensicsLab(pbq, isSubmitted) {
    const answers = this.userPbqAnswers[pbq.id] || { volatilityOrder: pbq.volatilityItems.map(i => i.id), hashVerified: false };

    return `
      <div class="forensics-lab-layout">
        <!-- Part 1: Volatility Sequence -->
        <div class="forensics-section">
          <h4>Part 1: Order of Volatility (Arrange from Most Volatile [1] to Least Volatile [6])</h4>
          <div class="volatility-list" id="volatility-sort-container">
            ${pbq.volatilityItems.map((item, idx) => `
              <div class="volatility-row" data-id="${item.id}">
                <span class="vol-rank-num">#${idx + 1}</span>
                <span class="vol-name">${item.name}</span>
                <div class="vol-btns">
                  <button class="vol-move-btn" data-dir="up" data-idx="${idx}" ${idx === 0 || isSubmitted ? 'disabled' : ''}>▲</button>
                  <button class="vol-move-btn" data-dir="down" data-idx="${idx}" ${idx === pbq.volatilityItems.length - 1 || isSubmitted ? 'disabled' : ''}>▼</button>
                </div>
              </div>
            `).join("")}
          </div>
        </div>

        <!-- Part 2: Evidence Integrity & Hash Verification -->
        <div class="forensics-section">
          <h4>Part 2: Disk Image SHA-256 Checksum Verification</h4>
          <div class="hash-verifier-box">
            <div class="hash-row">
              <span class="hash-label">Acquired Evidence File:</span>
              <code>${pbq.hashVerification.targetFile} (Size: 512 GB)</code>
            </div>
            <div class="hash-row">
              <span class="hash-label">Computed SHA-256 Hash:</span>
              <code class="hash-val">${pbq.hashVerification.computedHash}</code>
            </div>
            <div class="hash-row">
              <span class="hash-label">Evidence Ledger Hash:</span>
              <code class="hash-val">${pbq.hashVerification.expectedLedgerHash}</code>
            </div>
            <div class="hash-status-bar ${answers.hashVerified ? 'verified' : ''}">
              <span>${answers.hashVerified ? '✅ HASH INTEGRITY VERIFIED (Match: Mathematical Bit-for-Bit Parity Confirmed)' : 'Integrity status: Click below to verify hash against Chain of Custody'}</span>
            </div>
            <button id="btn-verify-hash" class="action-pill-btn" ${isSubmitted ? 'disabled' : ''}>🔍 Verify Cryptographic Hash</button>
          </div>
        </div>
      </div>
    `;
  }

  // =========================================================================
  // 9. INCIDENT RESPONSE PLAYBOOK LAB RENDERER
  // =========================================================================
  renderIrPlaybookLab(pbq, isSubmitted) {
    const answers = this.userPbqAnswers[pbq.id] || {};

    return `
      <div class="siem-lab-layout">
        <!-- Left Side: NIST SP 800-61 Lifecycle Roadmap -->
        <div class="siem-logs-panel">
          <div class="siem-panel-header">
            <span>📋 NIST SP 800-61 Incident Response Playbook Roadmap</span>
          </div>
          <div class="logs-scroll-area" style="gap: 0.75rem;">
            ${pbq.lifecyclePhases.map((phase, idx) => `
              <div class="siem-log-entry" style="border-left: 4px solid var(--accent-blue);">
                <div class="log-top-row">
                  <span class="log-source-tag" style="background: rgba(2, 132, 199, 0.2); color: #38bdf8;">Phase ${idx + 1}: ${phase.phase}</span>
                </div>
                <div style="font-size: 0.9rem; color: var(--text-primary); margin-top: 0.35rem;">
                  ${phase.action}
                </div>
              </div>
            `).join("")}
          </div>
        </div>

        <!-- Right Side: Triage & Containment Questions -->
        <div class="siem-triage-panel">
          <h4>🚨 Live Incident Containment & Eradication Decisions</h4>
          ${pbq.questions.map((q) => {
            const userChoice = answers[q.id];
            return `
              <div class="log-q-box">
                <div class="log-q-prompt">${q.prompt}</div>
                <div class="log-q-options">
                  ${q.options.map(opt => `
                    <label class="radio-label ${isSubmitted ? (opt === q.correctAnswer ? 'correct-highlight' : (userChoice === opt ? 'incorrect-highlight' : '')) : ''}">
                      <input type="radio" name="ir_q_${q.id}" value="${opt}" ${userChoice === opt ? 'checked' : ''} ${isSubmitted ? 'disabled' : ''}>
                      <span>${opt}</span>
                    </label>
                  `).join("")}
                </div>
              </div>
            `;
          }).join("")}
        </div>
      </div>
    `;
  }

  // =========================================================================
  // 10. ARCHITECTURE MATRIX LAB RENDERER
  // =========================================================================
  renderArchitectureMatrixLab(pbq, isSubmitted) {
    const answers = this.userPbqAnswers[pbq.id] || {};

    return `
      <div class="pki-lab-layout">
        <h4>Assign each critical security appliance to its secure network zone:</h4>
        <div class="crypto-matrix-grid">
          ${pbq.components.map((item) => {
            const userChoice = answers[item.id] || "";
            const isCorrect = userChoice === item.correctZone;
            return `
              <div class="crypto-matrix-card ${isSubmitted ? (isCorrect ? 'matrix-pass' : 'matrix-fail') : ''}">
                <div class="matrix-req-text">🛡️ <strong>${item.name}</strong></div>
                <div class="matrix-select-wrap">
                  <select class="arch-matrix-select" data-id="${item.id}" ${isSubmitted ? 'disabled' : ''}>
                    <option value="">-- Select Network Zone --</option>
                    ${item.options.map(opt => `
                      <option value="${opt}" ${userChoice === opt ? 'selected' : ''}>${opt}</option>
                    `).join("")}
                  </select>
                </div>
                ${isSubmitted ? `
                  <div class="matrix-feedback ${isCorrect ? 'text-success' : 'text-danger'}">
                    ${isCorrect ? '✓ Correct Zone Assignment' : `✗ Correct Zone: <strong>${item.correctZone}</strong>`}
                  </div>
                ` : ''}
              </div>
            `;
          }).join("")}
        </div>
      </div>
    `;
  }

  // =========================================================================
  // 12. CONTROLS CLASSIFICATION LAB RENDERER
  // =========================================================================
  renderControlsLab(pbq, isSubmitted) {
    const answers = this.userPbqAnswers[pbq.id] || {};

    return `
      <div class="pki-lab-layout">
        <h4>Classify each enterprise control by Category and Functional Type:</h4>
        <div class="crypto-matrix-grid">
          ${pbq.items.map((item, idx) => {
            const userCat = answers[`${item.id}_cat`] || "";
            const userType = answers[`${item.id}_type`] || "";
            const isCatCorrect = userCat === item.correctCategory;
            const isTypeCorrect = userType === item.correctType;
            const isAllCorrect = isCatCorrect && isTypeCorrect;

            return `
              <div class="crypto-matrix-card ${isSubmitted ? (isAllCorrect ? 'matrix-pass' : 'matrix-fail') : ''}">
                <div class="matrix-req-text">${idx + 1}. <strong>${item.name}</strong></div>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; margin-top: 0.5rem;">
                  <div>
                    <label style="font-size: 0.75rem; color: var(--text-secondary); text-transform: uppercase; font-weight: 700;">Control Category:</label>
                    <select class="control-cat-select" data-id="${item.id}" ${isSubmitted ? 'disabled' : ''}>
                      <option value="">-- Category --</option>
                      ${pbq.categories.map(cat => `
                        <option value="${cat}" ${userCat === cat ? 'selected' : ''}>${cat}</option>
                      `).join("")}
                    </select>
                  </div>
                  <div>
                    <label style="font-size: 0.75rem; color: var(--text-secondary); text-transform: uppercase; font-weight: 700;">Functional Type:</label>
                    <select class="control-type-select" data-id="${item.id}" ${isSubmitted ? 'disabled' : ''}>
                      <option value="">-- Functional Type --</option>
                      ${pbq.types.map(t => `
                        <option value="${t}" ${userType === t ? 'selected' : ''}>${t}</option>
                      `).join("")}
                    </select>
                  </div>
                </div>
                ${isSubmitted ? `
                  <div class="matrix-feedback ${isAllCorrect ? 'text-success' : 'text-danger'}">
                    ${isAllCorrect ? '✓ Correct Classification' : `✗ Correct: <strong>${item.correctCategory}</strong> / <strong>${item.correctType}</strong>`}
                  </div>
                ` : ''}
              </div>
            `;
          }).join("")}
        </div>
      </div>
    `;
  }

  // =========================================================================
  // 13. IAM AUDIT LAB RENDERER
  // =========================================================================
  renderIamAuditLab(pbq, isSubmitted) {
    const answers = this.userPbqAnswers[pbq.id] || {};

    return `
      <div class="siem-lab-layout">
        <!-- Left Side: Employee Identity Cards -->
        <div class="siem-logs-panel">
          <div class="siem-panel-header">
            <span>👥 Access Control Directory Profiles</span>
          </div>
          <div class="logs-scroll-area" style="gap: 0.85rem;">
            ${pbq.users.map(u => `
              <div class="siem-log-entry" style="border-left: 4px solid var(--accent-amber);">
                <div class="log-top-row">
                  <span class="log-source-tag" style="background: rgba(245, 158, 11, 0.2); color: #fbbf24;">👤 ${u.name}</span>
                  <span class="log-ts" style="color: #ef4444; font-weight: 700;">⚠️ ${u.issue}</span>
                </div>
                <div style="margin: 0.4rem 0;">
                  <strong style="font-size: 0.82rem; color: var(--text-secondary);">Assigned Roles:</strong>
                  <div style="display: flex; flex-wrap: wrap; gap: 0.35rem; margin-top: 0.2rem;">
                    ${u.currentRoles.map(r => `<span style="background: var(--bg-card); border: 1px solid var(--border-color); padding: 0.15rem 0.45rem; border-radius: 4px; font-size: 0.78rem;">${r}</span>`).join("")}
                  </div>
                </div>
                <div style="font-size: 0.82rem; color: var(--text-muted);">
                  <strong>Identified Risk:</strong> ${u.risk}
                </div>
              </div>
            `).join("")}
          </div>
        </div>

        <!-- Right Side: Remediation Actions -->
        <div class="siem-triage-panel">
          <h4>🔒 IAM Remediation & Least Privilege Actions</h4>
          ${pbq.questions.map((q) => {
            const userChoice = answers[q.id];
            return `
              <div class="log-q-box">
                <div class="log-q-prompt">${q.prompt}</div>
                <div class="log-q-options">
                  ${q.options.map(opt => `
                    <label class="radio-label ${isSubmitted ? (opt === q.correctAnswer ? 'correct-highlight' : (userChoice === opt ? 'incorrect-highlight' : '')) : ''}">
                      <input type="radio" name="iam_q_${q.id}" value="${opt}" ${userChoice === opt ? 'checked' : ''} ${isSubmitted ? 'disabled' : ''}>
                      <span>${opt}</span>
                    </label>
                  `).join("")}
                </div>
              </div>
            `;
          }).join("")}
        </div>
      </div>
    `;
  }

  // =========================================================================
  // EVENT LISTENERS & INTERACTION ATTACHMENT
  // =========================================================================
  attachPBQEventListeners(pbq, isSubmitted) {
    // Navigation pills
    document.querySelectorAll(".pbq-nav-pill").forEach(pill => {
      pill.addEventListener("click", () => {
        const idx = parseInt(pill.getAttribute("data-index"));
        this.startPBQMode(idx);
      });
    });

    // Reset button
    const btnReset = document.getElementById("btn-pbq-reset");
    if (btnReset) {
      btnReset.addEventListener("click", () => {
        delete this.terminalState[pbq.id];
        delete this.userPbqAnswers[pbq.id];
        this.submittedState[pbq.id] = false;
        this.initLabState();
        this.renderPBQ();
      });
    }

    // Submit / Evaluate button
    const btnSubmit = document.getElementById("btn-pbq-submit");
    if (btnSubmit) {
      btnSubmit.addEventListener("click", () => {
        this.submittedState[pbq.id] = true;
        this.renderPBQ();
      });
    }

    // Retry button
    const btnRetry = document.getElementById("btn-pbq-retry");
    if (btnRetry) {
      btnRetry.addEventListener("click", () => {
        this.submittedState[pbq.id] = false;
        this.renderPBQ();
      });
    }

    // Terminal Input Listeners
    if (pbq.type === "terminal_lab") {
      const termInput = document.getElementById("term-cmd-input");
      if (termInput) {
        termInput.addEventListener("keydown", (e) => {
          if (e.key === "Enter") {
            const cmd = termInput.value;
            termInput.value = "";
            this.handleTerminalCommand(cmd, pbq);
          }
        });
      }
    }

    // Nmap Listeners
    if (pbq.type === "nmap_lab") {
      document.querySelectorAll("input[type=radio]").forEach(radio => {
        radio.addEventListener("change", (e) => {
          const qId = e.target.name.replace("nmap_q_", "");
          if (!this.userPbqAnswers[pbq.id]) this.userPbqAnswers[pbq.id] = {};
          this.userPbqAnswers[pbq.id][qId] = e.target.value;
        });
      });
    }

    // IR Playbook Listeners
    if (pbq.type === "ir_playbook_lab") {
      document.querySelectorAll("input[type=radio]").forEach(radio => {
        radio.addEventListener("change", (e) => {
          const qId = e.target.name.replace("ir_q_", "");
          if (!this.userPbqAnswers[pbq.id]) this.userPbqAnswers[pbq.id] = {};
          this.userPbqAnswers[pbq.id][qId] = e.target.value;
        });
      });
    }

    // IAM Audit Listeners
    if (pbq.type === "iam_audit_lab") {
      document.querySelectorAll("input[type=radio]").forEach(radio => {
        radio.addEventListener("change", (e) => {
          const qId = e.target.name.replace("iam_q_", "");
          if (!this.userPbqAnswers[pbq.id]) this.userPbqAnswers[pbq.id] = {};
          this.userPbqAnswers[pbq.id][qId] = e.target.value;
        });
      });
    }

    // Architecture Matrix Listeners
    if (pbq.type === "architecture_matrix_lab") {
      document.querySelectorAll(".arch-matrix-select").forEach(sel => {
        sel.addEventListener("change", (e) => {
          const id = sel.getAttribute("data-id");
          if (!this.userPbqAnswers[pbq.id]) this.userPbqAnswers[pbq.id] = {};
          this.userPbqAnswers[pbq.id][id] = e.target.value;
        });
      });
    }

    // Controls Classification Listeners
    if (pbq.type === "controls_lab") {
      document.querySelectorAll(".control-cat-select").forEach(sel => {
        sel.addEventListener("change", (e) => {
          const id = sel.getAttribute("data-id");
          if (!this.userPbqAnswers[pbq.id]) this.userPbqAnswers[pbq.id] = {};
          this.userPbqAnswers[pbq.id][`${id}_cat`] = e.target.value;
        });
      });
      document.querySelectorAll(".control-type-select").forEach(sel => {
        sel.addEventListener("change", (e) => {
          const id = sel.getAttribute("data-id");
          if (!this.userPbqAnswers[pbq.id]) this.userPbqAnswers[pbq.id] = {};
          this.userPbqAnswers[pbq.id][`${id}_type`] = e.target.value;
        });
      });
    }

    // Firewall Listeners
    if (pbq.type === "firewall_interactive_lab" || pbq.type === "firewall_acl") {
      document.querySelectorAll(".acl-field, .acl-input-text").forEach(input => {
        input.addEventListener("change", (e) => {
          const seq = parseInt(e.target.getAttribute("data-seq"));
          const field = e.target.getAttribute("data-field");
          if (this.userPbqAnswers[pbq.id] && this.userPbqAnswers[pbq.id].rules[seq]) {
            this.userPbqAnswers[pbq.id].rules[seq][field] = e.target.value;
          }
        });
      });

      // Packet Test Buttons
      document.querySelectorAll(".btn-test-pkt").forEach(btn => {
        btn.addEventListener("click", () => {
          const pktId = btn.getAttribute("data-pkt-id");
          const pkt = pbq.testPackets.find(p => p.id === pktId);
          if (!pkt) return;

          const rules = this.userPbqAnswers[pbq.id].rules;
          let matchedAction = "DENY";
          let matchedSeq = "Implicit Deny (End of Table)";

          for (let i = 0; i < rules.length; i++) {
            const r = rules[i];
            const srcMatch = r.src === "Any" || r.src === pkt.src || (r.src.includes("/24") && pkt.src.startsWith("192.168.1."));
            const dstMatch = r.dst === "Any" || r.dst === pkt.dst;
            const portMatch = r.port === "Any" || r.port === pkt.port || (r.port.includes("/") && r.port.includes(pkt.port));
            const protoMatch = r.protocol === "Any" || r.protocol === pkt.protocol || r.protocol.includes(pkt.protocol);

            if (srcMatch && dstMatch && portMatch && protoMatch) {
              matchedAction = r.action;
              matchedSeq = `#${(i + 1) * 10} (${r.desc})`;
              break;
            }
          }

          if (!this.userPbqAnswers[pbq.id].packetResults) this.userPbqAnswers[pbq.id].packetResults = {};
          this.userPbqAnswers[pbq.id].packetResults[pktId] = { action: matchedAction, matchedRule: matchedSeq };
          this.renderPBQ();
        });
      });
    }

    // SIEM Listeners
    if (pbq.type === "siem_lab") {
      document.querySelectorAll("input[type=radio]").forEach(radio => {
        radio.addEventListener("change", (e) => {
          const qId = e.target.name.replace("siem_q_", "");
          if (!this.userPbqAnswers[pbq.id]) this.userPbqAnswers[pbq.id] = {};
          this.userPbqAnswers[pbq.id][qId] = e.target.value;
        });
      });
    }

    // WLC GUI Listeners
    if (pbq.type === "wlc_gui_lab") {
      document.querySelectorAll(".wlc-select").forEach(sel => {
        sel.addEventListener("change", (e) => {
          const fId = sel.getAttribute("data-field-id");
          if (!this.userPbqAnswers[pbq.id]) this.userPbqAnswers[pbq.id] = {};
          this.userPbqAnswers[pbq.id][fId] = e.target.value;
        });
      });
    }

    // OWASP Listeners
    if (pbq.type === "owasp_lab") {
      const searchInput = document.getElementById("owasp-input");
      const btnSearch = document.getElementById("btn-owasp-search");
      const cbParam = document.getElementById("cb-parameterized");

      if (btnSearch && searchInput) {
        btnSearch.addEventListener("click", () => {
          if (!this.userPbqAnswers[pbq.id]) this.userPbqAnswers[pbq.id] = {};
          this.userPbqAnswers[pbq.id].searchQuery = searchInput.value;
          this.userPbqAnswers[pbq.id].isParameterized = cbParam ? cbParam.checked : false;
          this.userPbqAnswers[pbq.id].executed = true;
          this.renderPBQ();
        });
      }

      document.querySelectorAll(".btn-payload-preset").forEach(btn => {
        btn.addEventListener("click", () => {
          const val = btn.getAttribute("data-val");
          if (searchInput) searchInput.value = val;
          if (btnSearch) btnSearch.click();
        });
      });
    }

    // PKI & Crypto Matrix & MDM Listeners
    if (pbq.type === "pki_lab" || pbq.type === "crypto_matrix_lab" || pbq.type === "mdm_policy_lab") {
      document.querySelectorAll(".pki-matrix-select").forEach(sel => {
        sel.addEventListener("change", (e) => {
          const idx = parseInt(sel.getAttribute("data-index"));
          if (!this.userPbqAnswers[pbq.id]) this.userPbqAnswers[pbq.id] = {};
          this.userPbqAnswers[pbq.id][idx] = e.target.value;
        });
      });
    }

    // Forensics Listeners
    if (pbq.type === "forensics_lab") {
      const btnVerify = document.getElementById("btn-verify-hash");
      if (btnVerify) {
        btnVerify.addEventListener("click", () => {
          if (!this.userPbqAnswers[pbq.id]) this.userPbqAnswers[pbq.id] = {};
          this.userPbqAnswers[pbq.id].hashVerified = true;
          this.renderPBQ();
        });
      }

      document.querySelectorAll(".vol-move-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          const idx = parseInt(btn.getAttribute("data-idx"));
          const dir = btn.getAttribute("data-dir");
          const items = pbq.volatilityItems;
          const targetIdx = dir === "up" ? idx - 1 : idx + 1;
          if (targetIdx >= 0 && targetIdx < items.length) {
            const temp = items[idx];
            items[idx] = items[targetIdx];
            items[targetIdx] = temp;
            this.renderPBQ();
          }
        });
      });
    }
  }
}

