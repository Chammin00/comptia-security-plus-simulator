// CompTIA Security+ SY0-701 High-Yield Flashcards
const SECURITY_FLASHCARDS = [
  {
    id: "fc-1",
    domain: "Domain 1: General Security Concepts",
    front: "What is the difference between Symmetric and Asymmetric Encryption?",
    back: "• Symmetric (AES, 3DES, DES, Blowfish, ChaCha20): Uses a single shared secret key for both encryption and decryption. Fast, ideal for bulk data at rest and data in transit.\n• Asymmetric (RSA, ECC, Diffie-Hellman, DSA): Uses a mathematically linked key pair (Public Key to encrypt, Private Key to decrypt/sign). Slower, ideal for key exchange, digital signatures, and identity authentication.",
    keywords: ["AES", "RSA", "ECC", "Key Pair", "Shared Secret"]
  },
  {
    id: "fc-2",
    domain: "Domain 1: General Security Concepts",
    front: "What are the 5 Authentication Factor categories in Multi-Factor Authentication (MFA)?",
    back: "1. Something You Know: Passwords, PINs, passphrase, security questions.\n2. Something You Have: Smart cards, hardware tokens (YubiKey), smartphone authenticator apps (TOTP/HOTP), SMS/email codes.\n3. Something You Are: Biometrics (fingerprint, retina/iris scan, facial recognition, voiceprint).\n4. Somewhere You Are: Geolocation, GPS coordinates, IP address subnet, geofencing.\n5. Something You Do: Typing cadence, signature dynamics, gait analysis.",
    keywords: ["MFA", "Authentication", "Biometrics", "TOTP", "Smart Card"]
  },
  {
    id: "fc-3",
    domain: "Domain 1: General Security Concepts",
    front: "What are the core differences between DAC, MAC, RBAC, and ABAC?",
    back: "• DAC (Discretionary): Resource owners assign permissions at their discretion (NTFS permissions).\n• MAC (Mandatory): System-enforced labels/clearances (Top Secret, Confidential); users cannot modify permissions.\n• RBAC (Role-Based): Permissions are assigned to roles matching job functions (e.g., HR Manager, Auditor).\n• ABAC (Attribute-Based): Dynamic policies evaluated based on user attributes, resource attributes, environment context (time, location, device health).",
    keywords: ["DAC", "MAC", "RBAC", "ABAC", "Access Control"]
  },
  {
    id: "fc-4",
    domain: "Domain 1: General Security Concepts",
    front: "How does a Digital Signature provide Integrity, Authentication, and Non-Repudiation?",
    back: "1. Sender computes a cryptographic hash of the message (ensuring Integrity).\n2. Sender encrypts the hash using their Private Key (producing the Digital Signature).\n3. Recipient decrypts the signature using the sender's Public Key (verifying Authentication and Non-repudiation) and compares the decrypted hash against their own computed hash.",
    keywords: ["Digital Signature", "Hashing", "Non-Repudiation", "Private Key"]
  },
  {
    id: "fc-5",
    domain: "Domain 2: Threats, Vulnerabilities & Mitigations",
    front: "What are the key differences between Phishing, Spear Phishing, Whaling, Smishing, and Vishing?",
    back: "• Phishing: Broad, untargeted mass social engineering emails designed to steal credentials.\n• Spear Phishing: Highly targeted attack customized for a specific individual or organization.\n• Whaling: Targeted attack specifically directed at high-profile executives (C-suite, board members).\n• Smishing: Phishing conducted via SMS text messages.\n• Vishing: Voice/phone phishing using VoIP spoofing or interactive voice responses.",
    keywords: ["Phishing", "Social Engineering", "Spear Phishing", "Whaling", "Smishing"]
  },
  {
    id: "fc-6",
    domain: "Domain 2: Threats, Vulnerabilities & Mitigations",
    front: "Explain the MITRE ATT&CK Framework and its purpose in modern security operations.",
    back: "A globally accessible curated knowledge base of adversary Tactics, Techniques, and Common Procedures (TTPs) based on real-world observations. It helps security teams model threat scenarios, design detection rules (SIEM/EDR), map attack surfaces, and assess defensive coverage gaps.",
    keywords: ["MITRE ATT&CK", "TTP", "Tactics", "Techniques", "Detection"]
  },
  {
    id: "fc-7",
    domain: "Domain 2: Threats, Vulnerabilities & Mitigations",
    front: "What is the difference between Cross-Site Scripting (XSS) and Cross-Site Request Forgery (CSRF)?",
    back: "• XSS: The attacker executes malicious JavaScript inside the victim's browser context to steal session cookies, capture keystrokes, or deface websites. (Defenses: input sanitization, output encoding, CSP).\n• CSRF: The attacker tricks the victim's already-authenticated browser into making unauthorized forged HTTP requests to a target server. (Defenses: Anti-CSRF synchronization tokens, SameSite cookie attribute).",
    keywords: ["XSS", "CSRF", "Web Security", "SameSite", "Input Validation"]
  },
  {
    id: "fc-8",
    domain: "Domain 3: Security Architecture",
    front: "What is Zero Trust Architecture (ZTA) and what are its core tenets?",
    back: "Zero Trust is a security paradigm predicated on 'Never Trust, Always Verify'.\nKey Tenets (NIST SP 800-207):\n• All data sources and computing services are considered resources.\n• All communication is secured regardless of network location (internal vs external).\n• Access to individual resources is granted on a per-session, least-privilege basis.\n• Access is determined by dynamic policy (identity, device posture, location).\n• Continuous monitoring and verification of all resource states.",
    keywords: ["Zero Trust", "ZTA", "Least Privilege", "Microsegmentation", "NIST 800-207"]
  },
  {
    id: "fc-9",
    domain: "Domain 3: Security Architecture",
    front: "Explain the difference between Forward Proxy, Reverse Proxy, and WAF.",
    back: "• Forward Proxy: Positioned in front of internal clients to inspect, filter, and cache outbound internet web traffic (client protection & content filtering).\n• Reverse Proxy: Positioned in front of backend web servers to load balance, terminate SSL/TLS, and hide internal server IP addresses.\n• WAF (Web Application Firewall): Operates at Layer 7 to inspect HTTP/HTTPS payloads specifically for application attacks (SQLi, XSS, RCE, CSRF).",
    keywords: ["Forward Proxy", "Reverse Proxy", "WAF", "Layer 7"]
  },
  {
    id: "fc-10",
    domain: "Domain 3: Security Architecture",
    front: "What are the common RAID levels and their fault tolerance characteristics?",
    back: "• RAID 0 (Striping): High performance, 0 fault tolerance (1 disk failure = total data loss).\n• RAID 1 (Mirroring): Complete disk duplicate. Tolerates 1 disk failure (requires 2 disks minimum).\n• RAID 5 (Striping with distributed parity): Tolerates 1 disk failure (requires 3 disks minimum).\n• RAID 6 (Striping with dual distributed parity): Tolerates 2 disk failures (requires 4 disks minimum).\n• RAID 10 (1+0, Striped Mirrors): Combines mirroring and striping. Tolerates up to 1 failure per mirror pair (requires 4 disks minimum).",
    keywords: ["RAID", "High Availability", "Fault Tolerance", "Redundancy"]
  },
  {
    id: "fc-11",
    domain: "Domain 4: Security Operations",
    front: "What are the 6 phases of the Incident Response Process (NIST / PICERL)?",
    back: "1. Preparation: Establishing policies, tools, IR team training, communication channels.\n2. Identification / Detection: Detecting anomalies, analyzing alerts, declaring an incident.\n3. Containment: Short-term and long-term isolation (e.g., disconnecting host, disabling accounts) to prevent spread.\n4. Eradication: Removing root cause, artifacts, malware, backdoors, and closing vulnerabilities.\n5. Recovery: Restoring systems to clean production operations, testing, continuous monitoring.\n6. Lessons Learned: Post-incident review meeting, documenting root cause and updating playbooks.",
    keywords: ["NIST IR", "PICERL", "Containment", "Eradication", "Lessons Learned"]
  },
  {
    id: "fc-12",
    domain: "Domain 4: Security Operations",
    front: "Explain the Order of Volatility in Digital Forensics.",
    back: "Data must be captured from most volatile (perishable) to least volatile:\n1. CPU Registers and Cache memory\n2. Routing table, ARP cache, Process table, Kernel statistics, RAM (System Memory)\n3. Temporary file systems / swap space / pagefile\n4. Hard disks, SSDs, non-volatile storage media\n5. Remote logging data, SIEM event logs\n6. Physical network topology, cable connections\n7. Archival media (backup tapes, optical discs, printouts)",
    keywords: ["Order of Volatility", "Forensics", "RAM", "CPU Cache", "Evidence Collection"]
  },
  {
    id: "fc-13",
    domain: "Domain 4: Security Operations",
    front: "What are the differences between SIEM, SOAR, EDR, and XDR?",
    back: "• SIEM: Centralizes, normalizes, and correlates log data across systems for real-time alerting and compliance auditing.\n• SOAR: Automates incident response playbooks and coordinates actions across multiple disparate security tools without human intervention.\n• EDR: Deep telemetry and response (isolate host, kill process) focused specifically on individual endpoint hosts.\n• XDR: Extends detection & response natively across endpoints, network, cloud, email, and identity telemetry in a unified platform.",
    keywords: ["SIEM", "SOAR", "EDR", "XDR", "Automation"]
  },
  {
    id: "fc-14",
    domain: "Domain 5: Program Management & Oversight",
    front: "What are the 5 Risk Treatment / Response Strategies?",
    back: "1. Risk Mitigation (Reduction): Implementing security controls to reduce likelihood or impact (e.g., installing antivirus, MFA).\n2. Risk Avoidance: Completely eliminating the risky activity or technology (e.g., not launching an unsecurable legacy service).\n3. Risk Transference (Sharing): Shifting financial liability to a third party (e.g., purchasing cybersecurity insurance, outsourcing to a vendor).\n4. Risk Acceptance: Acknowledging and tolerating the residual risk when remediation cost exceeds asset value.\n5. Risk Exemption / Exception: Formal temporary documented authorization to bypass a standard control under strict conditions.",
    keywords: ["Risk Treatment", "Mitigation", "Transference", "Avoidance", "Acceptance"]
  },
  {
    id: "fc-15",
    domain: "Domain 5: Program Management & Oversight",
    front: "How do you calculate SLE, ALE, and Cost-Benefit of a Security Control?",
    back: "• Single Loss Expectancy (SLE) = Asset Value (AV) × Exposure Factor (EF)\n• Annualized Loss Expectancy (ALE) = SLE × Annualized Rate of Occurrence (ARO)\n• Cost-Benefit Analysis = (ALE before control - ALE after control) - Annual Cost of Control (ACS)\n• If the cost-benefit result is positive, the control is financially justifiable.",
    keywords: ["SLE", "ALE", "ARO", "Quantitative Risk", "Cost Benefit"]
  },
  {
    id: "fc-16",
    domain: "Domain 5: Program Management & Oversight",
    front: "Explain the differences between RTO, RPO, MTBF, and MTTR.",
    back: "• RTO (Recovery Time Objective): Maximum acceptable downtime duration to restore operations after failure.\n• RPO (Recovery Point Objective): Maximum acceptable age of data loss measured back in time (defines backup frequency).\n• MTBF (Mean Time Between Failures): Average uptime between repairable hardware failures (reliability measure).\n• MTTR (Mean Time to Repair): Average duration required to troubleshoot and restore a broken component.",
    keywords: ["RTO", "RPO", "MTBF", "MTTR", "Disaster Recovery", "BCP"]
  }
];
