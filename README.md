# CompTIA Security+ (SY0-701) Exam Simulator & Mastery Hub 🛡️

A comprehensive, realistic, and modern web-based exam simulator for **CompTIA Security+ SY0-701**. Zero installation or complex build tools required — works straight out of the box in Google Chrome, Microsoft Edge, Mozilla Firefox, or any modern web browser.

---

## 🌟 Key Features

### 1. 🔊 Audio Cheat Sheet & Read Aloud Engine (NEW)
- **Official Security+ Cheat Sheet Audio Reader**: 160+ official cybersecurity acronyms, terms, and definitions extracted directly from the comprehensive cheat sheet.
- **Interactive Navigation**:
  - **⏮ Previous** and **Next ⏭** buttons to seamlessly browse terms.
  - **▶ Read Aloud / ⏸ Pause / ⏹ Stop** audio controls.
  - **Continuous Auto-Play (Auto-Advance)**: Automatically advances to the next term upon completion.
  - **Volume Bar Control**: Interactive volume slider with quick mute/unmute button (0% to 100%).
  - **Voice Speed Control**: Adjust playback speed from 0.75x to 1.75x.
  - **Voice Selection**: Choose between installed operating system voices.
  - **Search & Page Filter**: Jump directly to any of the 23 cheat sheet pages or search for specific terms (e.g. *AAA*, *RADIUS*, *Zero Trust*, *WAF*).
  - **Quick Index Table**: Interactive table to jump directly to any term with one click.
  - **Practice Mode TTS**: Listen to practice questions and options read aloud with a single click.

### 2. ⏱️ Realistic Pearson VUE Timed Exam Simulation & 5-Mock Exam Series
- **5 Complete Official-Style Mock Exams (450 Questions Total)**:
  - **Mock Exam 1 (90 Questions)**
  - **Mock Exam 2 (90 Questions)**
  - **Mock Exam 3 (90 Questions)**
  - **Mock Exam 4 (90 Questions)**
  - **Security+ Practice Exam 05 (90 Questions)**
- **One-Click Launchers on Dashboard**: Instantly start any exam in **Timed Simulation Mode** (90 mins, 100-900 scaled score, passing score 750) or **Study / Practice Mode** with immediate feedback.
- **Pearson VUE Testing Tools**:
  - **Flag for Review**: Bookmark difficult questions to revisit.
  - **Question Grid Navigator**: Jump to any question and track answered/flagged status at a glance.
  - **Strike-Through Tool**: Eliminate incorrect distractors with a click.
  - **Interactive Scratchpad**: Take custom notes per question (persisted in LocalStorage).
  - **Pre-Submission Review Screen**: View unanswered, answered, and flagged questions before final submission.
  - **Comprehensive Answer Review**: In-depth explanations for why correct options are right and distractors are wrong.

### 3. 🛠️ Interactive Performance-Based Questions (PBQs) & Hands-on Labs
- **Lab 1: Linux Server Hardening & Terminal Security**: Live interactive simulated bash shell (`root@sec-prod-srv-01:~#`) with command execution (`ss`, `systemctl`, `chmod 600 /etc/shadow`, `ufw default deny`, `ufw allow 22,443`, `ufw enable`) and real-time objective tracking.
- **Lab 2: Network Reconnaissance & Nmap Port Scanning**: Live port scanning simulator (`nmap -sS -sV 10.0.5.25`) with protocol analysis (FTP, Telnet, HTTP, HTTPS, RDP) and security remediation triage.
- **Lab 3: Enterprise Firewall ACL Rule Builder & Live Packet Simulator**: Visual stateful ACL table editor with a live packet injection engine (`🚀 Send Packet`) to test packet filtering across rules in real time.
- **Lab 4: SOC Incident Triage & SIEM Threat Investigation**: Multi-stream log analysis (Nginx, PostgreSQL audit, Snort NIDS, WAF) with incident response containment and eradication workflows.
- **Lab 5: Wireless LAN Controller (WLC) & 802.1X Enterprise Security**: Realistic WLC Web GUI for configuring WPA3-Enterprise, RADIUS IP/Port (1812 UDP), EAP-TLS mutual certificates, and Protected Management Frames (PMF).
- **Lab 6: OWASP Web App Exploit & Parameterized Query Defense**: Interactive employee search portal with live SQL injection testing (`' OR '1'='1' --`) and a toggleable Parameterized Query (Prepared Statement) defense engine.
- **Lab 7: Digital Certificates & PKI Lifecycle Inspector**: Interactive X.509 Certificate and CSR mapping matrix covering SAN, OCSP AIA, and CA Digital Signatures.
- **Lab 8: Digital Forensics, Order of Volatility & Evidence Hashing**: Interactive drag-and-drop / rank sorter for Order of Volatility (CPU > RAM > Swap > Disk > Logs > Tape) and cryptographic SHA-256 evidence integrity verifier.

### 4. 📚 Domain Study & Practice Mode
- Filter by individual **CompTIA Security+ SY0-701 Domains**:
  - **Domain 1**: General Security Concepts (12%)
  - **Domain 2**: Threats, Vulnerabilities, and Mitigations (22%)
  - **Domain 3**: Security Architecture (18%)
  - **Domain 4**: Security Operations (28%)
  - **Domain 5**: Security Program Management and Oversight (20%)
- Instant answer verification with deep rationales.
- **Weak Area Vault**: Dedicated mode that collects previously missed questions for targeted re-drilling.
- **Bookmarked Questions**: Quickly review questions saved during your study sessions.

### 5. ⚡ Speed Drills & Flashcards
- **High-Yield Ports & Protocols Drill**: Rapid-fire quiz testing key Security+ ports (22 SSH, 53 DNS, 88 Kerberos, 389 LDAP, 636 LDAPS, 3389 RDP, 1812/1813 RADIUS, 514 Syslog, etc.) with streak counters and scoring.
- **Acronym Decrypter Drill**: Test your recall of high-frequency acronyms (CASB, EDR, XDR, SIEM, SOAR, BIA, RTO, RPO, MTBF, MTTR, SAML, OIDC, etc.).
- **3D Flip Flashcards**: Interactive concept cards categorized by domain with keyboard navigation.

### 6. 📊 Exam Readiness & Analytics Dashboard
- **Readiness Score Gauge**: Evaluates your performance across past test attempts.
- **Domain Mastery Breakdown**: Track percentage mastery per domain to identify weaknesses before test day.
- **Historical Trends Table**: Complete record of all past simulation scores, time spent, and pass/fail status.

### 7. 🎨 Theme & Keyboard Shortcuts
- **Cyber SOC Dark Theme** (high-contrast terminal/operations center aesthetic) and **Clean Light Mode**.
- **Keyboard Shortcuts**:
  - `Space`: Read Aloud / Pause in Audio Reader; Flip card in Flashcards
  - `Left Arrow` / `P`: Previous term / question
  - `Right Arrow` / `N`: Next term / question
  - `1`, `2`, `3`, `4` or `A`, `B`, `C`, `D`: Select answer choices in exam
  - `F`: Flag for review

---

## 🚀 How to Run the Application

Simply open `index.html` in your web browser of choice:

```bash
# Windows PowerShell (opens default browser)
Start-Process "index.html"
```

No internet connection or Node/Python installation required; the simulator runs 100% locally and stores all progress in your browser's `localStorage`.
