// CompTIA Security+ SY0-701 Performance-Based Questions (PBQs) & Hands-on Labs Dataset

const PBQ_DATA = [
  // =========================================================================
  // LAB 1: Interactive Linux Terminal Hardening
  // =========================================================================
  {
    id: "lab-1",
    title: "Lab 1: Linux Server Hardening & Terminal Security",
    domain: "Domain 4: Security Operations",
    difficulty: "Medium",
    type: "terminal_lab",
    scenario: `You are a Systems Security Administrator tasked with hardening a newly deployed production Linux web server (Ubuntu/Debian). An initial audit identified several severe security misconfigurations.
    
Your Objectives:
1. Identify listening ports and running services.
2. Stop and disable the insecure legacy 'telnet' service.
3. Fix insecure file permissions on '/etc/shadow' (must be set to 600 or 640).
4. Configure and enable UFW firewall: default deny incoming, permit SSH (port 22) and HTTPS (port 443), then enable UFW.`,
    tasks: [
      { id: "t1", desc: "Inspect listening ports / services using 'ss -tulpn' or 'netstat -tulnp'", done: false },
      { id: "t2", desc: "Stop and disable the insecure 'telnet' service ('systemctl stop telnet' & 'systemctl disable telnet')", done: false },
      { id: "t3", desc: "Restrict permissions on '/etc/shadow' using 'chmod 600 /etc/shadow' or 'chmod 640 /etc/shadow'", done: false },
      { id: "t4", desc: "Configure UFW firewall: 'ufw default deny incoming', 'ufw allow 22/tcp', 'ufw allow 443/tcp', and 'ufw enable'", done: false }
    ],
    initialFilesystem: {
      "/etc/shadow": { perms: "-rw-r--r--", owner: "root:root", content: "root:$6$xyz...:19500:0:99999:7:::\nadmin:$6$abc...:19500:0:99999:7:::\nwww-data:*:19500:0:99999:7:::" },
      "/etc/passwd": { perms: "-rw-r--r--", owner: "root:root", content: "root:x:0:0:root:/root:/bin/bash\nadmin:x:1000:1000:Admin:/home/admin:/bin/bash\nwww-data:x:33:33:www-data:/var/www:/usr/sbin/nologin" },
      "/var/log/auth.log": { perms: "-rw-r-----", owner: "root:adm", content: "Sep 6 09:12:01 web-prod-01 sshd[1244]: Server listening on 0.0.0.0 port 22.\nSep 6 09:12:05 web-prod-01 in.telnetd[1299]: Telnet daemon active on port 23." }
    },
    initialServices: {
      telnet: { running: true, enabled: true, port: 23, proto: "tcp" },
      nginx: { running: true, enabled: true, port: 443, proto: "tcp" },
      sshd: { running: true, enabled: true, port: 22, proto: "tcp" }
    },
    initialUfw: {
      enabled: false,
      defaultIncoming: "ALLOW",
      rules: []
    },
    explanation: `Technical Breakdown & Hardening Best Practices:
• File Permissions: /etc/shadow contains sensitive password hashes and must never be world-readable. Standard secure permission is 600 (read/write root only) or 640 (root + shadow group).
• Legacy Services: Telnet (port 23) transmits all keystrokes and credentials in cleartext. Disabling telnet eliminates eavesdropping and MITM vulnerabilities.
• Host Firewall (UFW): Setting default deny incoming ensures a strict zero-trust baseline on the endpoint, exposing only required ports (22 for encrypted administration, 443 for encrypted HTTPS).`
  },

  // =========================================================================
  // LAB 2: Network Reconnaissance & Nmap Port Scanning
  // =========================================================================
  {
    id: "lab-2",
    title: "Lab 2: Network Reconnaissance & Nmap Port Scanning",
    domain: "Domain 2: Threats, Vulnerabilities & Mitigations",
    difficulty: "Medium",
    type: "nmap_lab",
    scenario: `You are performing an authorized vulnerability assessment against a remote server (10.0.5.25). You need to discover active services, detect version banners, identify plaintext protocols, and document security findings.

Your Objectives:
1. Execute a TCP SYN stealth scan with service version detection: 'nmap -sS -sV 10.0.5.25'
2. Identify the high-risk unencrypted protocols operating on the host.
3. Formulate the required remediation steps for each insecure service found.`,
    targetHost: "10.0.5.25",
    scanResults: {
      openPorts: [
        { port: 21, proto: "tcp", state: "open", service: "ftp", version: "vsftpd 2.3.4 (Anonymous allowed)", risk: "High (Cleartext credentials & anonymous read)" },
        { port: 22, proto: "tcp", state: "open", service: "ssh", version: "OpenSSH 8.9p1 Ubuntu", risk: "Low (Secure encrypted management)" },
        { port: 23, proto: "tcp", state: "open", service: "telnet", version: "Linux telnetd", risk: "Critical (Cleartext authentication)" },
        { port: 80, proto: "tcp", state: "open", service: "http", version: "Apache httpd 2.4.52", risk: "Medium (Unencrypted HTTP web traffic)" },
        { port: 443, proto: "tcp", state: "open", service: "https", version: "Apache httpd 2.4.52 (TLS 1.3)", risk: "Secure" },
        { port: 3389, proto: "tcp", state: "open", service: "ms-wbt-server", version: "xrdp (RDP)", risk: "High (Exposed remote desktop service)" }
      ]
    },
    questions: [
      {
        id: "q1",
        prompt: "1. Which two services on 10.0.5.25 transmit credentials in cleartext and should be immediately replaced?",
        options: [
          "SSH (22) and HTTPS (443)",
          "FTP (21) and Telnet (23)",
          "RDP (3389) and HTTP (80)",
          "DNS (53) and NTP (123)"
        ],
        correctAnswer: "FTP (21) and Telnet (23)"
      },
      {
        id: "q2",
        prompt: "2. What is the recommended secure replacement for FTP (port 21)?",
        options: [
          "TFTP",
          "SFTP (SSH File Transfer Protocol - Port 22) or FTPS",
          "Telnet",
          "SNMPv1"
        ],
        correctAnswer: "SFTP (SSH File Transfer Protocol - Port 22) or FTPS"
      },
      {
        id: "q3",
        prompt: "3. What is the best practice for securing the exposed RDP port (3389)?",
        options: [
          "Leave it open on the public perimeter without authentication",
          "Place RDP behind an encrypted VPN tunnel, MFA, or Bastion jump host and restrict source IPs",
          "Change the port to 80",
          "Enable Telnet instead"
        ],
        correctAnswer: "Place RDP behind an encrypted VPN tunnel, MFA, or Bastion jump host and restrict source IPs"
      }
    ],
    explanation: `Nmap Scan Analysis:
• Port 21 (FTP) & Port 23 (Telnet): Insecure legacy protocols that send usernames and passwords unencrypted over the wire. Replace FTP with SFTP (Port 22) or FTPS (Port 990), and replace Telnet with SSH (Port 22).
• Port 80 (HTTP): Should redirect all requests to HTTPS (Port 443) using HSTS (HTTP Strict Transport Security).
• Port 3389 (RDP): Should never be directly exposed to the public Internet; it should be accessible only via a VPN with MFA or a hardened Bastion host.`
  },

  // =========================================================================
  // LAB 3: Enterprise Firewall ACL Configurator & Packet Tester
  // =========================================================================
  {
    id: "lab-3",
    title: "Lab 3: Enterprise Firewall ACL Rule Builder & Live Packet Simulator",
    domain: "Domain 3: Security Architecture",
    difficulty: "Medium",
    type: "firewall_interactive_lab",
    scenario: `You are the lead network security engineer at a financial enterprise. You must configure the perimeter firewall access control list (ACL) on the interface facing the Demilitarized Zone (DMZ) and Internal Management Subnet.
    
Security Requirements:
1. Allow public web traffic to the DMZ Web Server (10.0.1.50) using encrypted HTTPS (443 TCP).
2. Block unencrypted HTTP (80 TCP) to the DMZ Web Server.
3. Allow internal systems (192.168.1.0/24) to query the external corporate DNS server (8.8.8.8 UDP 53).
4. Allow the IT Security Administrator workstation (192.168.1.10) to securely manage the DMZ Web Server via SSH (22 TCP).
5. Explicitly block legacy unencrypted Telnet (23 TCP).
6. Enforce an implicit deny for all other unmatched traffic.`,
    initialRules: [
      { id: 1, action: "PERMIT", src: "Any", dst: "10.0.1.50", port: "443", protocol: "TCP", desc: "Allow HTTPS to Web Server" },
      { id: 2, action: "DENY", src: "Any", dst: "10.0.1.50", port: "80", protocol: "TCP", desc: "Deny unencrypted HTTP" },
      { id: 3, action: "PERMIT", src: "192.168.1.0/24", dst: "8.8.8.8", port: "53", protocol: "UDP", desc: "Allow DNS resolution" },
      { id: 4, action: "PERMIT", src: "192.168.1.10", dst: "10.0.1.50", port: "22", protocol: "TCP", desc: "Allow Secure Admin SSH" },
      { id: 5, action: "DENY", src: "Any", dst: "Any", port: "23", protocol: "TCP", desc: "Explicit Deny Telnet" },
      { id: 6, action: "DENY", src: "Any", dst: "Any", port: "Any", protocol: "Any", desc: "Implicit Deny All" }
    ],
    availableOptions: {
      actions: ["PERMIT", "DENY"],
      sources: ["Any", "192.168.1.0/24", "192.168.1.10", "10.0.1.50", "8.8.8.8", "0.0.0.0/0"],
      destinations: ["Any", "10.0.1.50", "192.168.1.0/24", "8.8.8.8", "192.168.1.10"],
      ports: ["20/21", "22", "23", "53", "80", "443", "3389", "Any"],
      protocols: ["TCP", "UDP", "TCP/UDP", "ICMP", "Any"]
    },
    testPackets: [
      { id: "p1", name: "Public HTTPS Request", src: "198.51.100.22", dst: "10.0.1.50", port: "443", protocol: "TCP", expectedAction: "PERMIT" },
      { id: "p2", name: "Public HTTP Request", src: "198.51.100.22", dst: "10.0.1.50", port: "80", protocol: "TCP", expectedAction: "DENY" },
      { id: "p3", name: "Internal DNS Query", src: "192.168.1.105", dst: "8.8.8.8", port: "53", protocol: "UDP", expectedAction: "PERMIT" },
      { id: "p4", name: "Admin SSH Connection", src: "192.168.1.10", dst: "10.0.1.50", port: "22", protocol: "TCP", expectedAction: "PERMIT" },
      { id: "p5", name: "Unauthorized SSH Attempt", src: "192.168.1.99", dst: "10.0.1.50", port: "22", protocol: "TCP", expectedAction: "DENY" },
      { id: "p6", name: "Inbound Telnet Probe", src: "203.0.113.88", dst: "10.0.1.50", port: "23", protocol: "TCP", expectedAction: "DENY" }
    ],
    explanation: `Firewall Configuration Rationale:
• HTTPS (Port 443 TCP) is permitted from 'Any' to the DMZ Web Server (10.0.1.50) to deliver encrypted web services.
• HTTP (Port 80 TCP) is explicitly blocked to enforce encrypted data-in-transit.
• DNS (Port 53 UDP) is permitted from internal subnet (192.168.1.0/24) to the external DNS resolver (8.8.8.8).
• SSH (Port 22 TCP) is permitted strictly from the authorized administrator host (192.168.1.10) to 10.0.1.50 (least privilege).
• Telnet (Port 23 TCP) is explicitly blocked due to plaintext credential transmission risk.
• Implicit Deny drops all unmatched packets.`
  },

  // =========================================================================
  // LAB 4: SIEM SOC Incident Triage & Investigation
  // =========================================================================
  {
    id: "lab-4",
    title: "Lab 4: SOC Incident Triage & SIEM Threat Investigation",
    domain: "Domain 4: Security Operations",
    difficulty: "Hard",
    type: "siem_lab",
    scenario: `A tier-2 SOC analyst receives multiple correlated SIEM alerts triggered by web server and database logs during after-hours operations.
    
Analyze the raw log streams below, identify the attack type, determine the external attacker IP and targeted host, and select the appropriate containment and remediation actions.`,
    logs: [
      {
        source: "Nginx Web Server Access Log (/var/log/nginx/access.log)",
        timestamp: "2026-09-06T02:14:02.112Z",
        entry: `198.51.100.44 - - [06/Sep/2026:02:14:02 +0000] "GET /products/search.php?id=1%20UNION%20SELECT%20null,username,password_hash%20FROM%20users-- HTTP/1.1" 200 4892 "Mozilla/5.0 (X11; Linux x86_64)"`
      },
      {
        source: "PostgreSQL Database Audit Log (/var/log/postgresql/audit.log)",
        timestamp: "2026-09-06T02:14:02.240Z",
        entry: `LOG: statement: SELECT item_name, price FROM inventory WHERE id=1 UNION SELECT null,username,password_hash FROM users--`
      },
      {
        source: "Snort NIDS Alert (/var/log/snort/alert)",
        timestamp: "2026-09-06T02:14:02.301Z",
        entry: `[1:1000042:3] WEB-ATTACKS SQL Injection Attempt (UNION SELECT users table detected) [Classification: Web Application Attack] [Priority: 1] {TCP} 198.51.100.44:54210 -> 10.0.1.50:443`
      },
      {
        source: "WAF Telemetry Event",
        timestamp: "2026-09-06T02:14:03.010Z",
        entry: `ALERT [RuleID: 942100] SQLi Detection Pattern 'UNION SELECT' matched in query string 'id'. Action: Pass (WAF in Detection/Audit Only Mode).`
      }
    ],
    questions: [
      {
        id: "q1",
        prompt: "1. What is the specific attack vector indicated by the log artifacts?",
        type: "select",
        options: [
          "Cross-Site Scripting (XSS)",
          "SQL Injection (SQLi) - UNION Based",
          "Server-Side Request Forgery (SSRF)",
          "Buffer Overflow Attack",
          "Directory Traversal / Path Manipulation"
        ],
        correctAnswer: "SQL Injection (SQLi) - UNION Based"
      },
      {
        id: "q2",
        prompt: "2. What is the external attacker IP address and target internal host IP?",
        type: "select",
        options: [
          "Attacker: 10.0.1.50 | Target: 198.51.100.44",
          "Attacker: 198.51.100.44 | Target: 10.0.1.50",
          "Attacker: 192.168.1.10 | Target: 8.8.8.8",
          "Attacker: 127.0.0.1 | Target: 10.0.1.50"
        ],
        correctAnswer: "Attacker: 198.51.100.44 | Target: 10.0.1.50"
      },
      {
        id: "q3",
        prompt: "3. What is the most immediate Containment action the SOC analyst should execute?",
        type: "select",
        options: [
          "Immediately format the web server hard drive",
          "Block the IP 198.51.100.44 on the perimeter firewall and switch the WAF mode from Detection to Active Blocking",
          "Email the database administrator to delete the users table",
          "Reboot the PostgreSQL database server immediately"
        ],
        correctAnswer: "Block the IP 198.51.100.44 on the perimeter firewall and switch the WAF mode from Detection to Active Blocking"
      },
      {
        id: "q4",
        prompt: "4. What is the root cause Eradication / Remediation fix that developers must implement?",
        type: "select",
        options: [
          "Switch database from PostgreSQL to MySQL",
          "Implement Parameterized Queries (Prepared Statements) and input validation in search.php",
          "Change web server port from 443 to 8443",
          "Install a local HIDS on the developer laptops"
        ],
        correctAnswer: "Implement Parameterized Queries (Prepared Statements) and input validation in search.php"
      }
    ],
    explanation: `Log Analysis Breakdown:
1. Attack Type: The query '1 UNION SELECT null,username,password_hash FROM users--' is a classic UNION-based SQL Injection designed to extract credentials from the users table.
2. IPs: 198.51.100.44 (public source) is attacking internal Web Server 10.0.1.50 on port 443.
3. Immediate Containment: Block the offending external IP (198.51.100.44) and switch the WAF from audit/detection mode to active prevention/blocking mode.
4. Long-term Remediation: Developers must use parameterized queries (prepared statements) and strict input sanitization to ensure user input is treated strictly as data rather than executable SQL.`
  },

  // =========================================================================
  // LAB 5: Wireless Security & 802.1X Enterprise AP Configuration (GUI)
  // =========================================================================
  {
    id: "lab-5",
    title: "Lab 5: Wireless LAN Controller (WLC) & 802.1X Enterprise Security",
    domain: "Domain 3: Security Architecture",
    difficulty: "Medium",
    type: "wlc_gui_lab",
    scenario: `You are configuring a new corporate wireless network (SSID: Corp-Secure) on the enterprise Wireless LAN Controller (WLC). The company policy mandates enterprise-grade authentication with certificate-based 802.1X, mutual authentication, protection against deauthentication/management frame attacks, and backend RADIUS authentication.

Configure the WLC settings below to satisfy corporate policy.`,
    fields: [
      { id: "ssid", label: "SSID Network Name", type: "text", value: "Corp-Secure", readOnly: true },
      { id: "sec_mode", label: "Security Mode", type: "select", options: ["Open (No Security)", "WEP (Legacy)", "WPA2-Personal (PSK)", "WPA3-Enterprise (802.1X)", "WPA3-Personal (SAE)"], correct: "WPA3-Enterprise (802.1X)" },
      { id: "radius_ip", label: "RADIUS Authentication Server IP", type: "select", options: ["192.168.1.15 (Corporate RADIUS / NPS)", "8.8.8.8 (Public DNS)", "10.0.1.50 (DMZ Web Server)", "127.0.0.1 (Loopback)"], correct: "192.168.1.15 (Corporate RADIUS / NPS)" },
      { id: "radius_port", label: "RADIUS Authentication Port", type: "select", options: ["1812 (UDP)", "1813 (UDP)", "80 (TCP)", "443 (TCP)", "53 (UDP)"], correct: "1812 (UDP)" },
      { id: "eap_method", label: "EAP Authentication Framework", type: "select", options: ["EAP-TLS (Mutual Certificate Auth)", "LEAP (Cisco Legacy)", "PAP (Plaintext Passwords)", "WEP-Shared"], correct: "EAP-TLS (Mutual Certificate Auth)" },
      { id: "pmf", label: "Protected Management Frames (PMF - 802.11w)", type: "select", options: ["Required (Mandatory for WPA3)", "Disabled", "Optional"], correct: "Required (Mandatory for WPA3)" }
    ],
    explanation: `Wireless Enterprise Configuration Rationale:
• WPA3-Enterprise (802.1X): Delivers centralized user-based authentication without sharing a single static pre-shared key.
• RADIUS Server (192.168.1.15 on UDP Port 1812): Port 1812 handles RADIUS Authentication/Authorization; Port 1813 handles Accounting.
• EAP-TLS: Mandates X.509 digital certificates on both the client device and the RADIUS server, providing the strongest mutual authentication.
• PMF (802.11w): Cryptographically protects management frames (disassociation/deauthentication frames), preventing wireless denial-of-service and evil twin attacks.`
  },

  // =========================================================================
  // LAB 6: Web App Security & OWASP SQLi Defense Lab
  // =========================================================================
  {
    id: "lab-6",
    title: "Lab 6: OWASP Web App Exploit & Parameterized Query Defense",
    domain: "Domain 2: Threats, Vulnerabilities & Mitigations",
    difficulty: "Medium",
    type: "owasp_lab",
    scenario: `An internal employee directory portal is susceptible to SQL injection. Test the vulnerable search form with injection payloads, observe the backend query structure, and then enable 'Parameterized Query Defense' to verify that the vulnerability is neutralized.`,
    samplePayloads: [
      { label: "Normal Search", input: "Alice", desc: "Standard search for employee Alice" },
      { label: "SQLi Auth Bypass", input: "' OR '1'='1' --", desc: "Classic injection that forces condition to TRUE and comments out rest of query" },
      { label: "UNION Database Extraction", input: "1 UNION SELECT username, password_hash FROM users --", desc: "Extracts credentials from users table" }
    ],
    explanation: `OWASP SQL Injection Defense:
• Vulnerable implementation uses string concatenation: "SELECT * FROM employees WHERE name = '" + userInput + "'"
• Parameterized Queries (Prepared Statements): Pre-compiles the SQL query structure in the database engine and passes user input strictly as literal data variables, ensuring user input can NEVER alter the SQL query logic or execution syntax.`
  },

  // =========================================================================
  // LAB 7: Digital Certificates & PKI Certificate Inspector
  // =========================================================================
  {
    id: "lab-7",
    title: "Lab 7: Digital Certificates & PKI Lifecycle Inspector",
    domain: "Domain 1: General Security Concepts",
    difficulty: "Medium",
    type: "pki_lab",
    scenario: `You are issuing a new TLS certificate for the enterprise portal 'portal.company.com'. Match each PKI component and certificate field to its correct technical purpose.`,
    matches: [
      { requirement: "Unique cryptographic string that proves the certificate was signed and vouched for by the Root/Intermediate CA", options: ["CA Digital Signature (RSA/ECDSA + SHA-256)", "Public Key", "Subject Alternative Name (SAN)", "Serial Number"], correct: "CA Digital Signature (RSA/ECDSA + SHA-256)", reason: "The CA hashes the certificate fields and encrypts the hash with its private key to create the signature." },
      { requirement: "Specifies all valid hostnames and domain names covered by the certificate (e.g. portal.company.com, api.company.com)", options: ["Subject Alternative Name (SAN)", "Common Name (CN) only", "CRL Distribution Point", "Key Usage"], correct: "Subject Alternative Name (SAN)", reason: "SAN extension allows modern browsers to validate multi-domain and subdomain certificates." },
      { requirement: "URL where clients can check whether this specific certificate was revoked before expiration in real-time", options: ["OCSP Authority Information Access (AIA) URL", "DNS Server IP", "NTP Server", "DHCP Option 6"], correct: "OCSP Authority Information Access (AIA) URL", reason: "OCSP responder endpoint provides real-time validity status." },
      { requirement: "Public cryptographic component sent to clients during the TLS handshake to encrypt pre-master secrets", options: ["Server Public Key", "Server Private Key", "CA Root Private Key", "Diffie-Hellman Salt"], correct: "Server Public Key", reason: "The public key is shared freely in the certificate to establish secure asymmetric key exchange." }
    ],
    explanation: `PKI Component Analysis:
• Digital Signature: Proves authenticity and integrity using the issuing CA's private key.
• SAN (Subject Alternative Name): Defines domain coverage (RFC 5280 standard for multi-domain TLS).
• OCSP / CRL: Protocols for verifying revocation status in real-time.
• Public Key: Used by connecting clients for asymmetric authentication and session key exchange.`
  },

  // =========================================================================
  // LAB 8: Digital Forensics, Volatility Order & Evidence Hashing
  // =========================================================================
  {
    id: "lab-8",
    title: "Lab 8: Digital Forensics, Order of Volatility & Evidence Hashing",
    domain: "Domain 4: Security Operations",
    difficulty: "Medium",
    type: "forensics_lab",
    scenario: `A digital forensics examiner arrives at an incident scene where an active ransomware beacon has compromised an executive workstation.

Tasks:
1. Arrange the data sources into the correct Order of Volatility (most volatile to least volatile).
2. Calculate and verify the cryptographic SHA-256 hash of the collected raw disk image against the forensic evidence ledger.`,
    volatilityItems: [
      { id: "v1", name: "CPU Registers and Cache", correctRank: 1 },
      { id: "v2", name: "System RAM (Routing tables, running processes, decrypted keys)", correctRank: 2 },
      { id: "v3", name: "Temporary File Systems / Swap space / Pagefile", correctRank: 3 },
      { id: "v4", name: "Hard Disks / SSD Non-Volatile Storage", correctRank: 4 },
      { id: "v5", name: "Remote Logging Data & SIEM Event Logs", correctRank: 5 },
      { id: "v6", name: "Archival Backups (Tape Drives / Optical Media)", correctRank: 6 }
    ],
    hashVerification: {
      targetFile: "suspect_workstation_image.raw",
      computedHash: "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
      expectedLedgerHash: "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
      isMatched: true
    },
    explanation: `Digital Forensics Order of Volatility:
1. CPU Registers and Cache (disappears in nanoseconds)
2. System RAM (cleared upon shutdown/power loss)
3. Temporary File Systems / Swap Space
4. Hard Disk / Solid-State Drive Media
5. Remote Event Logs
6. Archival Backup Tapes

Hash Verification:
Calculating SHA-256 checksums immediately upon disk acquisition and logging in a Chain of Custody document proves mathematical integrity (the image has not been altered by even one bit) for legal admissibility.`
  },

  // =========================================================================
  // LAB 9: Incident Response Lifecycle & Host Isolation Playbook
  // =========================================================================
  {
    id: "lab-9",
    title: "Lab 9: Incident Response Lifecycle & Threat Containment Playbook",
    domain: "Domain 4: Security Operations",
    difficulty: "Medium",
    type: "ir_playbook_lab",
    scenario: `An active endpoint alert reports anomalous LSASS memory dumping (Mimikatz execution) and C2 beaconing on a Finance Workstation (192.168.10.45).

Your Objectives:
1. Align each incident response action with its official NIST SP 800-61 lifecycle phase.
2. Select the optimal immediate network containment strategy.
3. Determine the required post-incident remediation steps.`,
    lifecyclePhases: [
      { phase: "Preparation", action: "Establish incident response team (CSIRT), define playbooks, train staff, and deploy EDR agents across endpoints.", correct: true },
      { phase: "Detection & Analysis", action: "Correlate SIEM alerts, inspect EDR process trees, and identify the initial attack vector and compromised hosts.", correct: true },
      { phase: "Containment", action: "Isolate host 192.168.10.45 from the network via EDR quarantine while maintaining live telemetry for forensic capture.", correct: true },
      { phase: "Eradication", action: "Terminate malicious processes, remove persistence registry keys, delete dropper malware, and revoke compromised credentials.", correct: true },
      { phase: "Recovery", action: "Rebuild or restore host from trusted golden image, verify patch status, reconnect to network, and monitor closely for reinfection.", correct: true },
      { phase: "Lessons Learned", action: "Conduct post-incident review, document root cause, evaluate team response time, and update detection rules and policies.", correct: true }
    ],
    questions: [
      {
        id: "q1",
        prompt: "1. What is the most appropriate first containment action to execute on the compromised endpoint (192.168.10.45)?",
        options: [
          "Instantly power off and pull the power cord immediately",
          "Apply logical network isolation via EDR / host firewall to block lateral traffic while preserving volatile RAM",
          "Reboot the workstation into safe mode and delete Windows System32",
          "Email the attacker demanding a ransom negotiation"
        ],
        correctAnswer: "Apply logical network isolation via EDR / host firewall to block lateral traffic while preserving volatile RAM"
      },
      {
        id: "q2",
        prompt: "2. Why should the endpoint NOT be powered off immediately prior to memory acquisition?",
        options: [
          "Powering off consumes excess datacenter electricity",
          "Power loss wipes volatile RAM, destroying active decrypted encryption keys, process memory, and open network sockets",
          "Powering off automatically sends an alert to the dark web",
          "The motherboard will suffer permanent hardware damage"
        ],
        correctAnswer: "Power loss wipes volatile RAM, destroying active decrypted encryption keys, process memory, and open network sockets"
      },
      {
        id: "q3",
        prompt: "3. Which phase of the NIST incident response lifecycle focuses on updating firewall rules and training users based on incident findings?",
        options: [
          "Containment",
          "Eradication",
          "Recovery",
          "Lessons Learned (Post-Incident Review)"
        ],
        correctAnswer: "Lessons Learned (Post-Incident Review)"
      }
    ],
    explanation: `Incident Response Lifecycle Rationale:
• Containment: Logical isolation via EDR prevents lateral movement while preserving volatile RAM for forensic memory analysis (order of volatility).
• Powering off destroys volatile evidence such as in-memory malware, decrypted payloads, and C2 socket connections.
• NIST SP 800-61 Order: Preparation → Detection & Analysis → Containment → Eradication → Recovery → Lessons Learned.`
  },

  // =========================================================================
  // LAB 10: Enterprise Network Architecture & Zone Placement Matrix
  // =========================================================================
  {
    id: "lab-10",
    title: "Lab 10: Network Security Architecture & Defense-in-Depth Zone Placement",
    domain: "Domain 3: Security Architecture",
    difficulty: "Hard",
    type: "architecture_matrix_lab",
    scenario: `You are architecting the network defense topology for a SaaS enterprise. You must assign each critical security appliance and infrastructure component to its correct secure network zone.`,
    components: [
      { id: "c1", name: "Web Application Firewall (WAF) & Reverse Proxy", correctZone: "DMZ (Perimeter Buffer)", options: ["Public Internet Edge", "DMZ (Perimeter Buffer)", "Internal Corporate LAN", "Secure Database VLAN", "Out-of-Band Management VLAN"] },
      { id: "c2", name: "Customer-Facing Production Web Server", correctZone: "DMZ (Perimeter Buffer)", options: ["Public Internet Edge", "DMZ (Perimeter Buffer)", "Internal Corporate LAN", "Secure Database VLAN", "Out-of-Band Management VLAN"] },
      { id: "c3", name: "Backend SQL Database Cluster (PII / Cardholder Data)", correctZone: "Secure Database VLAN", options: ["Public Internet Edge", "DMZ (Perimeter Buffer)", "Internal Corporate LAN", "Secure Database VLAN", "Out-of-Band Management VLAN"] },
      { id: "c4", name: "Corporate Employee Laptops & Workstations", correctZone: "Internal Corporate LAN", options: ["Public Internet Edge", "DMZ (Perimeter Buffer)", "Internal Corporate LAN", "Secure Database VLAN", "Out-of-Band Management VLAN"] },
      { id: "c5", name: "Bastion Jump Host with MFA & Session Recording", correctZone: "Out-of-Band Management VLAN", options: ["Public Internet Edge", "DMZ (Perimeter Buffer)", "Internal Corporate LAN", "Secure Database VLAN", "Out-of-Band Management VLAN"] },
      { id: "c6", name: "Hardware Security Module (HSM) for Master Root Keys", correctZone: "Out-of-Band Management VLAN", options: ["Public Internet Edge", "DMZ (Perimeter Buffer)", "Internal Corporate LAN", "Secure Database VLAN", "Out-of-Band Management VLAN"] },
      { id: "c7", name: "SIEM Central Log Repository & Analysis Engine", correctZone: "Out-of-Band Management VLAN", options: ["Public Internet Edge", "DMZ (Perimeter Buffer)", "Internal Corporate LAN", "Secure Database VLAN", "Out-of-Band Management VLAN"] },
      { id: "c8", name: "External DDoS Scrubbing / Edge BGP Router", correctZone: "Public Internet Edge", options: ["Public Internet Edge", "DMZ (Perimeter Buffer)", "Internal Corporate LAN", "Secure Database VLAN", "Out-of-Band Management VLAN"] }
    ],
    explanation: `Network Architecture Best Practices:
• Public Internet Edge: DDoS scrubbing appliances and edge routers inspect traffic before entering corporate networks.
• DMZ (Demilitarized Zone): Public-facing services (WAF, Reverse Proxy, NGINX) reside here to buffer internal infrastructure from untrusted clients.
• Secure Database VLAN: Mission-critical databases hosting PII must NEVER sit in the DMZ or be directly accessible from the Internet.
• Out-of-Band Management VLAN: Dedicated isolated segment for sensitive management tools (Bastion hosts, HSM, SIEM collectors) accessible only via strict MFA jumpboxes.`
  },

  // =========================================================================
  // LAB 11: Cryptographic Suite & Security Protocol Matrix
  // =========================================================================
  {
    id: "lab-11",
    title: "Lab 11: Cryptographic Algorithm & Cipher Suite Selector",
    domain: "Domain 1: General Security Concepts",
    difficulty: "Medium",
    type: "crypto_matrix_lab",
    scenario: `Match each enterprise cryptographic requirement to the industry-standard, compliant algorithm or protocol.`,
    matches: [
      { requirement: "High-speed symmetric encryption for bulk storage at rest with built-in authenticated integrity (AEAD)", options: ["AES-256-GCM", "DES", "RC4", "MD5"], correct: "AES-256-GCM", reason: "AES in Galois/Counter Mode (GCM) provides both confidentiality and hardware-accelerated integrity verification." },
      { requirement: "Salting and slow key stretching for securely storing user passwords resistant to GPU/ASIC brute-force", options: ["Argon2id / PBKDF2 / bcrypt", "SHA-1", "Base64", "ROT13"], correct: "Argon2id / PBKDF2 / bcrypt", reason: "Argon2 and PBKDF2 use memory-hard and computationally expensive iterations to defeat GPU cracking." },
      { requirement: "Asymmetric key exchange providing Perfect Forward Secrecy (PFS) where compromised long-term keys do not expose past sessions", options: ["ECDHE (Elliptic Curve Diffie-Hellman Ephemeral)", "Static RSA Key Exchange", "Telnet", "HTTP Basic"], correct: "ECDHE (Elliptic Curve Diffie-Hellman Ephemeral)", reason: "Ephemeral Diffie-Hellman generates temporary one-time session keys for every connection." },
      { requirement: "Fast cryptographic data integrity check and digital signature hashing (Collision Resistant)", options: ["SHA-256 / SHA-384", "MD5", "CRC32", "SHA-1"], correct: "SHA-256 / SHA-384", reason: "SHA-2/SHA-3 produce secure collision-resistant hashes, unlike broken algorithms like MD5 and SHA-1." },
      { requirement: "Lightweight asymmetric cryptography with shorter key lengths providing equivalent high security for mobile and IoT devices", options: ["ECC (Elliptic Curve Cryptography)", "RSA-1024", "Blowfish", "3DES"], correct: "ECC (Elliptic Curve Cryptography)", reason: "A 256-bit ECC key provides equivalent cryptographic strength to a 3072-bit RSA key with far less CPU overhead." }
    ],
    explanation: `Cryptographic Rationale:
• AES-256-GCM: Golden standard for symmetric encryption + authentication.
• Argon2id/bcrypt/PBKDF2: Standard password hashing functions with deliberate computational cost.
• ECDHE: Ephemeral key agreement delivering Perfect Forward Secrecy (PFS).
• SHA-256/384: Secure hashing standards replacing legacy MD5/SHA-1.
• ECC: High security with small keys, ideal for mobile and TLS handshakes.`
  },

  // =========================================================================
  // LAB 12: Security Controls Classification Matrix
  // =========================================================================
  {
    id: "lab-12",
    title: "Lab 12: Security Controls Classification & Framework Alignment",
    domain: "Domain 5: Security Program Management & Oversight",
    difficulty: "Medium",
    type: "controls_lab",
    scenario: `Classify each enterprise defense mechanism by its Control Category (Technical, Operational/Managerial, Physical) and its Control Functional Type (Preventive, Detective, Corrective, Compensating, Deterrent).`,
    items: [
      { id: "ctrl-1", name: "Annual employee security awareness and anti-phishing training", correctCategory: "Operational / Managerial", correctType: "Preventive" },
      { id: "ctrl-2", name: "Automated daily SIEM log correlation and alert dashboard", correctCategory: "Technical", correctType: "Detective" },
      { id: "ctrl-3", name: "Restoring database servers from immutable offsite air-gapped backups", correctCategory: "Technical", correctType: "Corrective" },
      { id: "ctrl-4", name: "Access control vestibule (Mantrap) with dual biometric authentication at datacenter entrance", correctCategory: "Physical", correctType: "Preventive" },
      { id: "ctrl-5", name: "Deploying temporary jumpbox with full session recording while VPN MFA is being upgraded", correctCategory: "Technical", correctType: "Compensating" },
      { id: "ctrl-6", name: "Prominently posted warning signage: 'Area Under 24/7 Monitored Video Surveillance'", correctCategory: "Physical", correctType: "Deterrent" }
    ],
    categories: ["Technical", "Operational / Managerial", "Physical"],
    types: ["Preventive", "Detective", "Corrective", "Compensating", "Deterrent"],
    explanation: `Security Controls Framework Rationale:
• Technical Controls: Implemented via hardware, software, or firmware (SIEM, backups, firewalls, ACLs).
• Operational / Managerial Controls: Implemented via people, policies, and procedures (training, background checks, audits).
• Physical Controls: Real-world physical barriers (mantraps, fences, guards, cameras, warning signs).
• Functional Types:
  - Preventive: Stops incidents before they occur.
  - Detective: Identifies incidents during or after occurrence.
  - Corrective: Restores systems and fixes damage.
  - Compensating: Alternative control that satisfies security intent when primary control cannot be deployed.
  - Deterrent: Discourages adversaries from attempting an attack.`
  },

  // =========================================================================
  // LAB 13: IAM Least Privilege & Permission Auditor
  // =========================================================================
  {
    id: "lab-13",
    title: "Lab 13: Identity & Access Management (IAM) Policy & Permission Auditor",
    domain: "Domain 3: Security Architecture",
    difficulty: "Hard",
    type: "iam_audit_lab",
    scenario: `As the identity security engineer, audit the employee access profiles below, detect Separation of Duties (SoD) violations and privilege creep, and select the appropriate remediation actions.`,
    users: [
      {
        id: "u1",
        name: "Carol Danvers (Finance Department)",
        currentRoles: ["Accounts Payable Creator", "Payment Batch Approver", "General Ledger Viewer"],
        issue: "Separation of Duties (SoD) Conflict",
        risk: "Can create fraudulent invoices and self-approve disbursement without secondary review."
      },
      {
        id: "u2",
        name: "Peter Parker (Transferred from IT Helpdesk to Marketing)",
        currentRoles: ["Active Directory Domain Admin", "Helpdesk Password Reset Admin", "Marketing Campaign Lead"],
        issue: "Privilege Creep (Accumulated Permissions)",
        risk: "Retained high-privilege IT administration access after transferring to non-technical business unit."
      },
      {
        id: "u3",
        name: "Bruce Banner (Research Scientist)",
        currentRoles: ["Research Data Scientist", "Lab Database Read/Write"],
        issue: "Missing MFA on Remote / Off-Hours Access",
        risk: "Accesses confidential R&D repositories remotely without step-up contextual MFA enforcement."
      }
    ],
    questions: [
      {
        id: "q1",
        prompt: "1. What is the mandatory fix for Carol Danvers to resolve the Separation of Duties conflict?",
        options: [
          "Grant Carol the CFO role as well",
          "Remove 'Payment Batch Approver' or 'Accounts Payable Creator' so one person cannot both generate and approve payments",
          "Give Carol full domain administrator access",
          "Disable audit logging for accounts payable"
        ],
        correctAnswer: "Remove 'Payment Batch Approver' or 'Accounts Payable Creator' so one person cannot both generate and approve payments"
      },
      {
        id: "q2",
        prompt: "2. How should Peter Parker's privilege creep be remediated and prevented in the future?",
        options: [
          "Allow Peter to keep domain admin in case marketing needs technical help",
          "Immediately revoke Helpdesk & Domain Admin roles, and enforce automated Access Certification / Recertification reviews upon job transfer",
          "Ask Peter to promise not to use domain admin rights",
          "Create a second account with the same domain admin rights"
        ],
        correctAnswer: "Immediately revoke Helpdesk & Domain Admin roles, and enforce automated Access Certification / Recertification reviews upon job transfer"
      },
      {
        id: "q3",
        prompt: "3. What modern access control framework evaluates contextual signals (device health, IP geolocation, time of day) before granting access to Bruce Banner?",
        options: [
          "Discretionary Access Control (DAC)",
          "Mandatory Access Control (MAC)",
          "Attribute-Based Access Control (ABAC) / Zero Trust Conditional Access",
          "Role-Based Access Control (RBAC) without context"
        ],
        correctAnswer: "Attribute-Based Access Control (ABAC) / Zero Trust Conditional Access"
      }
    ],
    explanation: `IAM Security Best Practices:
• Separation of Duties: Prevents fraud by requiring at least two individuals to complete a critical business transaction.
• Privilege Creep: Occurs when employees accumulate permissions over time through department transfers. Periodic access reviews and automated role de-provisioning eliminate excess rights.
• ABAC & Conditional Access: Evaluates real-time contextual attributes (user role, device compliance, geofence, risk score) to enforce adaptive step-up authentication.`
  },

  // =========================================================================
  // LAB 14: Mobile Device & Endpoint Security Policy Matrix (MDM/MAM)
  // =========================================================================
  {
    id: "lab-14",
    title: "Lab 14: Mobile Device Security Policy & MDM/MAM Profile Matrix",
    domain: "Domain 3: Security Architecture",
    difficulty: "Medium",
    type: "mdm_policy_lab",
    scenario: `Configure the enterprise Mobile Device Management (MDM) / Mobile Application Management (MAM) profile for corporate and BYOD smartphone deployments. Match each security requirement to its corresponding MDM policy capability.`,
    matches: [
      { requirement: "Isolate enterprise email and confidential documents inside an encrypted sandbox separate from personal photos and social media", options: ["Containerization / Workspace Isolation", "Full Device Wipe", "Sideloading", "Microsegmentation"], correct: "Containerization / Workspace Isolation", reason: "Containerization encrypts and segregates corporate apps/data from the personal partition on BYOD devices." },
      { requirement: "Erase all corporate data from a lost or stolen employee phone without deleting personal family photos or personal files", options: ["Selective / Enterprise Wipe", "Full Device Factory Reset", "Rooting", "Tethering"], correct: "Selective / Enterprise Wipe", reason: "Selective wipe deletes corporate credentials and managed apps while preserving personal user data." },
      { requirement: "Automatically block access and disable camera hardware when the smartphone enters a secure semiconductor manufacturing facility", options: ["Geofencing & Context-Aware Policy", "USB OTG", "OTA Updates", "Jailbreaking"], correct: "Geofencing & Context-Aware Policy", reason: "Geofencing uses GPS/Wi-Fi positioning to enforce location-restricted policies." },
      { requirement: "Immediately quarantine any mobile device where the operating system security controls or sandbox protections have been bypassed", options: ["Jailbreak & Root Detection", "Carrier Unlocking", "Screen Timeout", "Remote Backup"], correct: "Jailbreak & Root Detection", reason: "Rooted/jailbroken devices lose core OS sandboxing, exposing enterprise tokens to malware." },
      { requirement: "Protect all data stored on internal smartphone flash memory in the event the device is physically stolen", options: ["Full Disk Storage Encryption (AES) with Biometric/PIN", "Cloud Storage Sync", "Screen Brightness Lock", "Bluetooth Pairing"], correct: "Full Disk Storage Encryption (AES) with Biometric/PIN", reason: "Hardware-backed storage encryption prevents raw NAND flash memory extraction." }
    ],
    explanation: `MDM / Mobile Security Rationale:
• Containerization: Separates personal vs. corporate data, crucial for BYOD privacy and compliance.
• Selective Wipe: Removes corporate secrets while preserving employee personal assets.
• Geofencing: Dynamically toggles security features based on physical location boundaries.
• Root/Jailbreak Detection: Blocks compromised endpoints from connecting to enterprise APIs.
• Full Device Encryption: Ensures data-at-rest confidentiality on lost/stolen hardware.`
  }
];

