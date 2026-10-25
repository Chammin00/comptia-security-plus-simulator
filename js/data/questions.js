// CompTIA Security+ (SY0-701) Comprehensive Question Bank
// Complete 450 Official-Style Practice Exam Questions across 5 Mock Exams
// Full Interactive Support for: Multiple Choice, Select Two/Three, Matching & Ordering

const EXAM_DOMAINS = [
  {
    "id": 1,
    "name": "Domain 1: General Security Concepts",
    "weight": "12%",
    "color": "#38bdf8"
  },
  {
    "id": 2,
    "name": "Domain 2: Threats, Vulnerabilities & Mitigations",
    "weight": "22%",
    "color": "#f87171"
  },
  {
    "id": 3,
    "name": "Domain 3: Security Architecture",
    "weight": "18%",
    "color": "#fbbf24"
  },
  {
    "id": 4,
    "name": "Domain 4: Security Operations",
    "weight": "28%",
    "color": "#34d399"
  },
  {
    "id": 5,
    "name": "Domain 5: Security Program Management & Oversight",
    "weight": "20%",
    "color": "#a78bfa"
  }
];

const SECURITY_QUESTIONS = [
  {
    "id": "e1-q01",
    "examSet": "Practice Exam 1",
    "examNum": 1,
    "questionNumber": 1,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "D",
    "explanation": "Correct Answer: D\n\nD. Security awareness training is correct because it directly reduces the likelihood that employees fall for phishing,\npretexting, and similar social-engineering lures, which is the cause of the unintentional insider incidents described. C.\nContainerization is incorrect because isolating applications or workspaces does not make employees less likely to be\ndeceived. A. Least functionality is incorrect because removing unnecessary software and services hardens systems\nbut does not address human susceptibility to manipulation. B. Enforced password changes are incorrect because\nperiodically rotating passwords does not stop an employee from disclosing credentials or acting on a fraudulent\nrequest.",
    "question": "Which measure is MOST effective at reducing unintentional insider threats caused by employees falling for\nsocial-engineering attacks?",
    "options": [
      "Least functionality",
      "Enforced password changes",
      "Containerization",
      "Security awareness training"
    ],
    "correctOption": 3,
    "isMultiSelect": false,
    "domainId": 2,
    "domain": "Domain 2: Threats, Vulnerabilities & Mitigations",
    "objective": "2.1-2.4 Threats, Vulnerabilities, Attack Vectors & Mitigations"
  },
  {
    "id": "e1-q02",
    "examSet": "Practice Exam 1",
    "examNum": 1,
    "questionNumber": 2,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "B",
    "explanation": "Correct Answer: B\n\nB (Geolocation) is correct: geolocation is the process of identifying the geographical location of a mobile device,\ntypically using GPS, cell tower signals, or Wi-Fi positioning. It is the underlying capability that mobile device\nmanagement relies on for features such as locating a lost device or applying location-based access rules. C\n(Geotracking) is incorrect because it is not the Security+ term for determining a device's position; it loosely describes\nfollowing a device over time, which depends on geolocation but is not the process of identifying the location itself. D\n(GeoID) is incorrect because it is not a recognized mobile security concept. A (Geomonitoring) is incorrect because it\nis not a standard term; the objectives use geolocation for determining where a device is and geofencing for acting on\nthat location.",
    "question": "What is the process of identifying the geographical location of a mobile device?",
    "options": [
      "Geomonitoring",
      "Geolocation",
      "Geotracking",
      "GeoID"
    ],
    "correctOption": 1,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e1-q03",
    "examSet": "Practice Exam 1",
    "examNum": 1,
    "questionNumber": 3,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "C",
    "explanation": "Correct Answer: C\n\nB. Eliminating the need for password rotation is incorrect: issuing session tokens does not change password lifecycle\npolicy, which is managed separately. A. Enforcing disk-level encryption on the endpoint's local storage is incorrect:\nsession tokens operate at the authentication and session layer and have nothing to do with storage encryption, which\nis provided by full-disk encryption. C. Allowing session management without constant re-authentication is correct: after\nthe initial authentication, the token is presented with subsequent requests, so the user does not have to re-enter\ncredentials for every action during the session. D. Increasing the bandwidth available for cloud storage transfers is\nincorrect: tokens have no effect on network capacity.",
    "question": "After a user is initially authenticated, what is a primary benefit of issuing a session token?",
    "options": [
      "They enforce disk-level encryption on the endpoint's local storage",
      "They eliminate the need for password rotation",
      "They allow session management without constant re-authentication",
      "They increase the bandwidth available for cloud storage transfers"
    ],
    "correctOption": 2,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e1-q04",
    "examSet": "Practice Exam 1",
    "examNum": 1,
    "questionNumber": 4,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "C",
    "explanation": "Correct Answer: C\n\nC. System hardening is correct. System hardening reduces a system's attack surface by disabling unnecessary\nservices, closing unused ports, removing default accounts, applying security patches, and enforcing secure\nconfigurations. The goal is to limit the number of vectors an attacker can exploit by eliminating anything that is not\nrequired for the system's intended function. A. Phishing is incorrect. Phishing is a social engineering attack technique\nused to steal credentials \u2014 it is an attack, not a defensive practice. B. Social engineering is incorrect. Social\nengineering refers to manipulating people into revealing information or performing actions \u2014 it is an attack category,\nnot a hardening technique. D. Buffer overflow is incorrect. A buffer overflow is a software vulnerability caused by\ninadequate input validation \u2014 it is an attack type, not a security practice.",
    "question": "Fill in the blank: __________ is the practice of removing unnecessary services and software to reduce\nattack surface.",
    "options": [
      "Phishing",
      "Social engineering",
      "System hardening",
      "Buffer overflow"
    ],
    "correctOption": 2,
    "isMultiSelect": false,
    "domainId": 2,
    "domain": "Domain 2: Threats, Vulnerabilities & Mitigations",
    "objective": "2.1-2.4 Threats, Vulnerabilities, Attack Vectors & Mitigations"
  },
  {
    "id": "e1-q05",
    "examSet": "Practice Exam 1",
    "examNum": 1,
    "questionNumber": 5,
    "questionType": "Matching",
    "correctAnswerRaw": "1 = D; 2 = A; 3 = C; 4 = B",
    "explanation": "Correct Answer: 1 = D; 2 = A; 3 = C; 4 = B\n\nThe correct mapping is: Identify focuses on inventorying critical assets and data \u2014 understanding what the\norganization has, its value, and its risk exposure. Protect involves restricting unauthorized access through controls\nsuch as access management, encryption, and training. Detect covers alerting on anomalies \u2014 using tools like SIEM,\nIDS, and monitoring to identify potential incidents in progress. Respond means containing the impact of incidents \u2014\nexecuting response plans to limit damage and restore normal operations. The NIST CSF also includes a fifth function,\nRecover, focused on restoring capabilities. These five functions provide a complete risk management cycle.",
    "question": "Match each NIST Cybersecurity Framework core function to its activity.",
    "matchingItems": [
      {
        "num": 1,
        "text": "Identify",
        "correctLetter": "D"
      },
      {
        "num": 2,
        "text": "Protect",
        "correctLetter": "A"
      },
      {
        "num": 3,
        "text": "Detect",
        "correctLetter": "C"
      },
      {
        "num": 4,
        "text": "Respond",
        "correctLetter": "B"
      }
    ],
    "matchingDescriptions": [
      {
        "letter": "A",
        "text": "Restrict unauthorized access"
      },
      {
        "letter": "B",
        "text": "Contain the impact of incidents"
      },
      {
        "letter": "C",
        "text": "Alert on anomalies"
      },
      {
        "letter": "D",
        "text": "Inventory critical assets and data"
      }
    ],
    "correctMapping": {
      "1": "D",
      "2": "A",
      "3": "C",
      "4": "B"
    },
    "options": [
      "A. Restrict unauthorized access",
      "B. Contain the impact of incidents",
      "C. Alert on anomalies",
      "D. Inventory critical assets and data"
    ],
    "correctOption": 0,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e1-q06",
    "examSet": "Practice Exam 1",
    "examNum": 1,
    "questionNumber": 6,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "C",
    "explanation": "Correct Answer: C\n\nD. Cellular is incorrect because it provides wide-area carrier connectivity to mobile networks, not short-range pairing\nwith nearby peripherals. C. Bluetooth is correct: it is the mobile connection method designed for short-range wireless\npairing between devices and nearby peripherals such as headsets, keyboards, and speakers. B. Wi-Fi is incorrect\nbecause it provides local network access rather than direct device-to-peripheral pairing. A. Ethernet is incorrect\nbecause it is a wired connection method and cannot serve as a wireless pairing technology.",
    "question": "A company needs a wireless connection method for pairing corporate mobile devices with nearby\nperipherals. Which technology should it use?",
    "options": [
      "Ethernet",
      "Wi-Fi",
      "Bluetooth",
      "Cellular"
    ],
    "correctOption": 2,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e1-q07",
    "examSet": "Practice Exam 1",
    "examNum": 1,
    "questionNumber": 7,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "B",
    "explanation": "Correct Answer: B\n\nB. CVSS is correct. The Common Vulnerability Scoring System provides a standardized numerical score (0\u201310) based\non metrics like attack vector, complexity, and impact on confidentiality, integrity, and availability, enabling security\nteams to prioritize which vulnerabilities to remediate first. A. CVE is incorrect. CVE (Common Vulnerabilities and\nExposures) is an identifier that names and catalogues vulnerabilities but does not provide a severity or exploitability\nscore. D. CWE is incorrect. CWE (Common Weakness Enumeration) classifies software weaknesses by type but does\nnot score individual vulnerabilities for prioritization. C. NIST score is incorrect. NIST does not define a standalone\n'NIST score' for vulnerability prioritization.",
    "question": "Fill in the blank: The __________ score helps prioritize vulnerabilities based on exploitability and impact.",
    "options": [
      "CVE",
      "CVSS",
      "NIST score",
      "CWE"
    ],
    "correctOption": 1,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e1-q08",
    "examSet": "Practice Exam 1",
    "examNum": 1,
    "questionNumber": 8,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "A",
    "explanation": "Correct Answer: A\n\nA. Correct \u2014 an access control vestibule (also called a mantrap) is an automated entry with two interlocking doors\nwhere only one door can open at a time, controlling access and preventing tailgating. B. A reception area is a staffed\nlobby, not a two-door interlocking barrier. C. A waiting room is a general-purpose space with no interlocking-door\naccess control. D. \"Vestibule office\" is not a physical access control mechanism.",
    "question": "Which type of buffer is automated and has two interlocking doors, only one of which can be opened at a\ntime?",
    "options": [
      "Access control vestibule",
      "Reception area",
      "Waiting room",
      "Vestibule office"
    ],
    "correctOption": 0,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e1-q09",
    "examSet": "Practice Exam 1",
    "examNum": 1,
    "questionNumber": 9,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "C",
    "explanation": "Correct Answer: C\n\nC (XDR collects and correlates data across various network appliances) is correct: extended detection and response\nwidens telemetry beyond the endpoint to email, network, identity and cloud sources and correlates it into a single\ndetection, which is precisely what EDR on its own cannot do. A (XDR is faster than EDR) is incorrect because speed is\nnot the distinguishing property; breadth of correlated telemetry is. B (The agent footprint of XDR is significantly smaller\nthan an agent for EDR) is incorrect because XDR still relies on the same endpoint agents plus extra collectors, so the\nfootprint is equal or larger. D (XDR does not require user input) is incorrect because analysts still tune, triage and\nrespond in both platforms.",
    "question": "What is the advantage of XDR over EDR?",
    "options": [
      "XDR is faster than EDR.",
      "The agent footprint of XDR is significantly smaller than an agent for EDR.",
      "XDR collects and correlates data across various network appliances.",
      "XDR does not require user input."
    ],
    "correctOption": 2,
    "isMultiSelect": false,
    "domainId": 4,
    "domain": "Domain 4: Security Operations",
    "objective": "4.1-4.4 Security Operations, Monitoring, Incident Response & Forensics"
  },
  {
    "id": "e1-q10",
    "examSet": "Practice Exam 1",
    "examNum": 1,
    "questionNumber": 10,
    "questionType": "Select Two",
    "correctAnswerRaw": "B, D",
    "explanation": "Correct Answer: B, D\n\nB and D are correct: disabling unused ports and protocols shrinks the attack surface, and changing default vendor\npasswords removes well-known credentials that attackers routinely try. E is incorrect: granting all users administrative\nrights violates least privilege and widens the attack surface. A is incorrect: opening Telnet exposes an unencrypted\nmanagement protocol and increases risk rather than reducing it. C is incorrect: installing a duplicate copy of the\napplication adds unnecessary software, the opposite of hardening.",
    "question": "An administrator is hardening a newly deployed Linux web server. Which TWO actions are recognized\nhardening techniques? (Select TWO.)",
    "options": [
      "Open Telnet for easier remote access",
      "Disable unused ports and protocols",
      "Install a duplicate copy of the application",
      "Change default vendor passwords",
      "Grant all users administrative rights"
    ],
    "optionLetters": [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    "isMultiSelect": true,
    "requiredSelectCount": 2,
    "correctOptions": [
      1,
      3
    ],
    "correctLetters": [
      "B",
      "D"
    ],
    "correctOption": 1,
    "domainId": 1,
    "domain": "Domain 1: General Security Concepts",
    "objective": "1.1-1.4 Security Controls, Cryptography, Identity & Access Management"
  },
  {
    "id": "e1-q11",
    "examSet": "Practice Exam 1",
    "examNum": 1,
    "questionNumber": 11,
    "questionType": "Matching",
    "correctAnswerRaw": "1 = D; 2 = C; 3 = A; 4 = B",
    "explanation": "Correct Answer: 1 = D; 2 = C; 3 = A; 4 = B\n\nThe correct mapping is: Eradication removes the threat from affected systems \u2014 deleting malware, closing backdoors,\nand eliminating the root cause. Containment limits the spread and impact of the incident by isolating compromised\nsystems or network segments. Recovery restores systems to normal operations, verifying they are clean and\nfunctional before returning to production. Lessons learned involves reviewing what went well and what failed after the\nincident is resolved, informing improvements to policies, procedures, and controls. These phases follow the NIST SP\n800-61 incident response lifecycle and occur in sequence.",
    "question": "Match each incident response term with its definition.",
    "matchingItems": [
      {
        "num": 1,
        "text": "Eradication",
        "correctLetter": "D"
      },
      {
        "num": 2,
        "text": "Containment",
        "correctLetter": "C"
      },
      {
        "num": 3,
        "text": "Recovery",
        "correctLetter": "A"
      },
      {
        "num": 4,
        "text": "Lessons learned",
        "correctLetter": "B"
      }
    ],
    "matchingDescriptions": [
      {
        "letter": "A",
        "text": "Restore systems to normal operations"
      },
      {
        "letter": "B",
        "text": "Analyze what went well or failed"
      },
      {
        "letter": "C",
        "text": "Limit spread and impact"
      },
      {
        "letter": "D",
        "text": "Remove the threat from affected systems"
      }
    ],
    "correctMapping": {
      "1": "D",
      "2": "C",
      "3": "A",
      "4": "B"
    },
    "options": [
      "A. Restore systems to normal operations",
      "B. Analyze what went well or failed",
      "C. Limit spread and impact",
      "D. Remove the threat from affected systems"
    ],
    "correctOption": 0,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e1-q12",
    "examSet": "Practice Exam 1",
    "examNum": 1,
    "questionNumber": 12,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "A",
    "explanation": "Correct Answer: A\n\nA. Correct: when no single entity owns and controls a library, accountability for secure development and timely\npatching can be diffuse, which raises supply-chain risk where governance and maintenance are weak. B. Incorrect:\nopen-source projects use the same classes of development tools as commercial software; inferior tooling is not an\ninherent open-source trait. C. Incorrect: open-source libraries are not unverifiable stubs; their source code is publicly\navailable and can be inspected. D. Incorrect: open-source platforms are operated by legitimate communities and\nvendors, not by threat actors.",
    "question": "Which characteristic of some open-source libraries can increase software supply-chain risk if governance\nand maintenance are weak?",
    "options": [
      "These libraries are not owned and controlled by any single entity",
      "They use coding tools that are considered inferior to standardized tools",
      "They are \"stubs\" that cannot be properly verified for malware",
      "Their platforms are known to be owned and managed by threat actors"
    ],
    "correctOption": 0,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e1-q13",
    "examSet": "Practice Exam 1",
    "examNum": 1,
    "questionNumber": 13,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "C",
    "explanation": "Correct Answer: C\n\nC (Separation of duties) is correct: preventing one employee from both creating an invoice and approving its payment\nsplits a sensitive financial process between two people, which is the classic anti-fraud application of separation of\nduties. D (Role-based access control) is incorrect because RBAC is only the mechanism that assigns permissions by\njob role; on its own it would happily place both permissions in one role. B (Discretionary access control) is incorrect\nbecause DAC lets the owner of an object grant access at their discretion, which is about who controls a resource, not\nabout conflicting duties. A (Least functionality) is incorrect because it means disabling unneeded services and features\non a system, a hardening idea unrelated to who approves payments.",
    "question": "You are configuring a system to ensure that no single employee can approve both invoice creation and\npayment processing. What security concept are you applying?",
    "options": [
      "Least functionality",
      "Discretionary access control",
      "Separation of duties",
      "Role-based access control"
    ],
    "correctOption": 2,
    "isMultiSelect": false,
    "domainId": 1,
    "domain": "Domain 1: General Security Concepts",
    "objective": "1.1-1.4 Security Controls, Cryptography, Identity & Access Management"
  },
  {
    "id": "e1-q14",
    "examSet": "Practice Exam 1",
    "examNum": 1,
    "questionNumber": 14,
    "questionType": "Select Two",
    "correctAnswerRaw": "B, C",
    "explanation": "Correct Answer: B, C\n\nB and C are correct: firewall logs show which outbound connections were permitted, to which external address, and\nhow much data crossed, while NetFlow records provide flow metadata such as source, destination, ports, and byte\ncounts without a full packet capture, so together they reconstruct where the data went and how much left. A is\nincorrect (The most recent vulnerability scan report for the database server) because a scan report lists weaknesses\nthat could be exploited; it records nothing about traffic that actually occurred. D is incorrect (The antivirus signature\nupdate log on the server) because it only shows when definitions were downloaded and cannot reveal outbound data\ntransfers. E is incorrect (The password policy audit report for the database accounts) because it describes\nconfiguration compliance for credentials, not network activity or data movement.",
    "question": "A security analyst suspects that several gigabytes were copied from a database server to an external\naddress overnight. No packet capture was running at the time. Which TWO data sources would MOST\ndirectly show the destination and volume of the outbound transfer? (Select TWO.)",
    "options": [
      "The most recent vulnerability scan report for the database server",
      "Firewall logs recording allowed outbound connections with byte counts",
      "NetFlow records exported from the core switch",
      "The antivirus signature update log on the server",
      "The password policy audit report for the database accounts"
    ],
    "optionLetters": [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    "isMultiSelect": true,
    "requiredSelectCount": 2,
    "correctOptions": [
      1,
      2
    ],
    "correctLetters": [
      "B",
      "C"
    ],
    "correctOption": 1,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e1-q15",
    "examSet": "Practice Exam 1",
    "examNum": 1,
    "questionNumber": 15,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "A",
    "explanation": "Correct Answer: A\n\nC. Set the scope is incorrect because the scenario states that scoping has already been completed. D. Determine the\nsensitivity level is incorrect because sensitivity decisions belong to the planning phase already finished at this point. A.\nUpdate the plug-ins is correct: refreshing the scanner's plug-ins immediately before execution ensures the scan can\ndetect the most recently disclosed vulnerabilities. B. Execute the scan is incorrect because running it without updated\nplug-ins would miss newly published vulnerabilities.",
    "question": "An authorized vulnerability scan has already been scoped and configured. Which action should be taken\nimmediately before executing the scan to detect the latest known vulnerabilities?",
    "options": [
      "Update the plug-ins",
      "Execute the scan",
      "Set the scope",
      "Determine the sensitivity level"
    ],
    "correctOption": 0,
    "isMultiSelect": false,
    "domainId": 2,
    "domain": "Domain 2: Threats, Vulnerabilities & Mitigations",
    "objective": "2.1-2.4 Threats, Vulnerabilities, Attack Vectors & Mitigations"
  },
  {
    "id": "e1-q16",
    "examSet": "Practice Exam 1",
    "examNum": 1,
    "questionNumber": 16,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "B",
    "explanation": "Correct Answer: B\n\nB. Network packet analysis is correct. Packet captures record the actual contents of network communications, so\nanalyzing them lets Sergio examine what was transmitted during the incident. C. Law enforcement data is incorrect. It\naggregates external crime statistics and case information; it does not contain the organization's captured network\ntraffic. D. Insurance company data is incorrect. Insurers provide loss and claims statistics useful for risk calculations,\nnot the contents of network communications. A. Data from computer incident monitoring organizations is incorrect.\nThese organizations share incident trends and indicators across companies; they do not hold the packets captured on\nSergio's network.",
    "question": "Sergio is investigating a suspected compromise and needs to examine the contents of network\ncommunications captured during the incident. Which data source would be MOST useful?",
    "options": [
      "Data from computer incident monitoring organizations",
      "Network packet analysis",
      "Law enforcement data",
      "Insurance company data"
    ],
    "correctOption": 1,
    "isMultiSelect": false,
    "domainId": 4,
    "domain": "Domain 4: Security Operations",
    "objective": "4.1-4.4 Security Operations, Monitoring, Incident Response & Forensics"
  },
  {
    "id": "e1-q17",
    "examSet": "Practice Exam 1",
    "examNum": 1,
    "questionNumber": 17,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "A",
    "explanation": "Correct Answer: A\n\nD. EAP-SSL is incorrect. It is not a recognized EAP method; SSL is a deprecated predecessor of TLS, not an EAP\nvariant. C. EAP-TLS is incorrect. EAP-TLS performs mutual certificate-based authentication and requires a digital\ncertificate on every client; it does not carry password- or token-based inner authentication, so it fails the\nno-client-certificate requirement. A. EAP-TTLS is correct. EAP-TTLS builds a TLS tunnel authenticated by the server's\ncertificate and then carries legacy inner authentication protocols \u2014 such as PAP with passwords or\none-time-password token codes \u2014 inside the protected tunnel, with no client certificate required. B. EAP-FAST is\nincorrect. EAP-FAST does establish a protected TLS tunnel, but it typically does so with a Protected Access Credential\n(PAC) rather than a server certificate, and its inner methods are EAP-based; it does not meet the requirement for a\nserver-certificate-authenticated tunnel carrying legacy protocols such as PAP.",
    "question": "Makena needs an EAP method that creates a server-authenticated TLS tunnel and supports legacy inner\nauthentication protocols such as PAP for passwords or one-time password tokens, without requiring client\ncertificates. Which should she recommend?",
    "options": [
      "EAP-TTLS",
      "EAP-FAST",
      "EAP-TLS",
      "EAP-SSL"
    ],
    "correctOption": 0,
    "isMultiSelect": false,
    "domainId": 3,
    "domain": "Domain 3: Security Architecture",
    "objective": "3.1-3.4 Security Architecture, Cloud, Infrastructure & Resilience"
  },
  {
    "id": "e1-q18",
    "examSet": "Practice Exam 1",
    "examNum": 1,
    "questionNumber": 18,
    "questionType": "Matching",
    "correctAnswerRaw": "1 = C; 2 = B; 3 = D; 4 = E; 5 = F",
    "explanation": "Correct Answer: 1 = C; 2 = B; 3 = D; 4 = E; 5 = F\n\n1 \u2192 C (Espionage): espionage steals confidential information to gain strategic or competitive intelligence. 2 \u2192 B\n(Service disruption): service disruption makes systems or services unavailable to interrupt operations. 3 \u2192 D\n(Blackmail): blackmail is coercion \u2014 the attacker threatens to release stolen data unless demands are met. 4 \u2192 E\n(Financial gain): financial gain is direct profit from stealing money, card data, or credentials that can be sold. 5 \u2192 F\n(Revenge): revenge retaliates against an employer or individual for a perceived wrong. Unused: G (ethical) \u2014\nresponsible, lawful disclosure is an ethical motivation not listed here; A (misinformation) \u2014 spreading false information\nto mislead the public is a separate motivation and vector.",
    "question": "Drag each adversary motivation to the description that best defines it.",
    "matchingItems": [
      {
        "num": 1,
        "text": "Espionage",
        "correctLetter": "C"
      },
      {
        "num": 2,
        "text": "Service disruption",
        "correctLetter": "B"
      },
      {
        "num": 3,
        "text": "Blackmail",
        "correctLetter": "D"
      },
      {
        "num": 4,
        "text": "Financial gain",
        "correctLetter": "E"
      },
      {
        "num": 5,
        "text": "Revenge",
        "correctLetter": "F"
      }
    ],
    "matchingDescriptions": [
      {
        "letter": "A",
        "text": "Spreading false information to mislead the public"
      },
      {
        "letter": "B",
        "text": "Making systems or services unavailable to interrupt operations"
      },
      {
        "letter": "C",
        "text": "Stealing confidential information for strategic or competitive intelligence"
      },
      {
        "letter": "D",
        "text": "Threatening to release stolen data unless demands are met"
      },
      {
        "letter": "E",
        "text": "Stealing money, card data, or credentials that can be sold for profit"
      },
      {
        "letter": "F",
        "text": "Retaliating against an employer or individual for a perceived wrong"
      },
      {
        "letter": "G",
        "text": "Disclosing flaws responsibly and within the law"
      }
    ],
    "correctMapping": {
      "1": "C",
      "2": "B",
      "3": "D",
      "4": "E",
      "5": "F"
    },
    "options": [
      "A. Spreading false information to mislead the public",
      "B. Making systems or services unavailable to interrupt operations",
      "C. Stealing confidential information for strategic or competitive intelligence",
      "D. Threatening to release stolen data unless demands are met",
      "E. Stealing money, card data, or credentials that can be sold for profit",
      "F. Retaliating against an employer or individual for a perceived wrong",
      "G. Disclosing flaws responsibly and within the law"
    ],
    "correctOption": 0,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e1-q19",
    "examSet": "Practice Exam 1",
    "examNum": 1,
    "questionNumber": 19,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "C",
    "explanation": "Correct Answer: C\n\nB. Insider threat is incorrect. An insider threat comes from someone within the organization who abuses authorized\naccess; here the actor is an external vendor. A. Privilege escalation is incorrect. Privilege escalation is gaining rights\nbeyond those granted; the scenario describes access through a legitimate trusted connection, not the elevation of\nprivileges. C. Third-party risk is correct. Granting a vendor access through a trusted connection extends the\norganization's attack surface to that external party, so a compromise of the vendor can reach internal systems - the\nessence of third-party (supply-chain) risk. D. Data classification failure is incorrect. A classification failure is mislabeling\ndata sensitivity; the issue here is external access, not how data is labeled.",
    "question": "A vendor gains access to internal systems through a trusted connection. What risk does this illustrate?",
    "options": [
      "Privilege escalation",
      "Insider threat",
      "Third-party risk",
      "Data classification failure"
    ],
    "correctOption": 2,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e1-q20",
    "examSet": "Practice Exam 1",
    "examNum": 1,
    "questionNumber": 20,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "D",
    "explanation": "Correct Answer: D\n\nD is correct (A conflict of interest): a conflict of interest exists when a person involved in a decision has a personal or\nfinancial relationship that could bias the outcome. The appropriate response is to document the disclosure and remove\nthe lead from scoring so that the selection stays objective and defensible. B is incorrect (A lack of due diligence)\nbecause due diligence is the investigation of a vendor's financial stability, security posture, and reputation; the lead's\ndisclosure does not indicate that this research was skipped. C is incorrect (A supply chain dependency) because that\ndescribes reliance on upstream suppliers whose failure would affect operations, not a personal relationship influencing\na purchasing decision. A is incorrect (A rules-of-engagement violation) because rules of engagement govern the\nconduct of penetration tests and are unrelated to procurement ethics.",
    "question": "During the selection of a managed security service provider, the procurement lead who scores the\nproposals discloses that a close family member is a sales director at one of the three bidding vendors.\nWhich vendor selection concern does this situation represent?",
    "options": [
      "A rules-of-engagement violation",
      "A lack of due diligence",
      "A supply chain dependency",
      "A conflict of interest"
    ],
    "correctOption": 3,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e1-q21",
    "examSet": "Practice Exam 1",
    "examNum": 1,
    "questionNumber": 21,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "B",
    "explanation": "Correct Answer: B\n\nB (SIEM with alerting) is correct: a SIEM ingests authentication and access logs from across the environment,\ncorrelates them and fires alerts on patterns such as repeated failed logins, off-hours access or impossible travel, which\nis what real-time detection of unauthorised attempts requires. C (DLP) is incorrect because data loss prevention\nwatches sensitive data leaving the organisation, not who is trying to log in. D (Endpoint encryption) is incorrect\nbecause full disk encryption protects data at rest on a lost device and produces no access alerting. A (Load balancing)\nis incorrect because distributing sessions across servers serves availability and performance, with no detection role.",
    "question": "Which of the following would MOST help detect unauthorized access attempts in real time?",
    "options": [
      "Load balancing",
      "SIEM with alerting",
      "DLP",
      "Endpoint encryption"
    ],
    "correctOption": 1,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e1-q22",
    "examSet": "Practice Exam 1",
    "examNum": 1,
    "questionNumber": 22,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "D",
    "explanation": "Correct Answer: D\n\nD. Integrity is correct. Integrity ensures that data has not been altered \u2014 whether accidentally (transmission error) or\nmaliciously (tampering). Controls such as hashing, digital signatures, and file integrity monitoring (FIM) enforce\nintegrity by detecting unauthorized modifications to data in transit or at rest. B. Confidentiality is incorrect.\nConfidentiality prevents unauthorized disclosure of information. Encryption and access controls are its primary\nmechanisms \u2014 not verifying accuracy or detecting modifications. A. Availability is incorrect. Availability ensures\nauthorized users can access systems and data when needed \u2014 supported by redundancy, failover, and backup\nstrategies. C. Non-repudiation is incorrect. Non-repudiation prevents a party from denying an action they performed.\nWhile related to integrity, it is a distinct property achieved through digital signatures and audit logs.",
    "question": "Fill in the blank: __________ ensures that information is accurate and has not been modified in transit or\nat rest.",
    "options": [
      "Availability",
      "Confidentiality",
      "Non-repudiation",
      "Integrity"
    ],
    "correctOption": 3,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e1-q23",
    "examSet": "Practice Exam 1",
    "examNum": 1,
    "questionNumber": 23,
    "questionType": "Matching",
    "correctAnswerRaw": "1 = A; 2 = D; 3 = B; 4 = C",
    "explanation": "Correct Answer: 1 = A; 2 = D; 3 = B; 4 = C\n\nThe correct pairings are: Cloud = Scalable resource model via internet; On-premises = Full control of hardware and\nnetwork; Serverless = Provider handles all backend infrastructure; Hybrid = Mix of local and internet-hosted\ninfrastructure. Cloud (public cloud) provides on-demand, internet-accessible compute and storage managed and\nscaled by the provider. On-premises means the organization owns and operates all hardware and software, giving\nmaximum control at higher capital cost. Serverless is a cloud execution model where the provider fully manages\nservers, scaling, and runtime \u2014 customers deploy code only, with no server administration. Hybrid combines\non-premises infrastructure with cloud resources, allowing workloads to move between environments based on cost,\ncompliance, or performance needs.",
    "question": "Match each platform type to its attribute.",
    "matchingItems": [
      {
        "num": 1,
        "text": "Cloud",
        "correctLetter": "A"
      },
      {
        "num": 2,
        "text": "On-premises",
        "correctLetter": "D"
      },
      {
        "num": 3,
        "text": "Serverless",
        "correctLetter": "B"
      },
      {
        "num": 4,
        "text": "Hybrid",
        "correctLetter": "C"
      }
    ],
    "matchingDescriptions": [
      {
        "letter": "A",
        "text": "Scalable resource model via internet"
      },
      {
        "letter": "B",
        "text": "Provider handles all backend infrastructure"
      },
      {
        "letter": "C",
        "text": "Mix of local and internet-hosted infrastructure"
      },
      {
        "letter": "D",
        "text": "Full control of hardware and network"
      }
    ],
    "correctMapping": {
      "1": "A",
      "2": "D",
      "3": "B",
      "4": "C"
    },
    "options": [
      "A. Scalable resource model via internet",
      "B. Provider handles all backend infrastructure",
      "C. Mix of local and internet-hosted infrastructure",
      "D. Full control of hardware and network"
    ],
    "correctOption": 0,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e1-q24",
    "examSet": "Practice Exam 1",
    "examNum": 1,
    "questionNumber": 24,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "B",
    "explanation": "Correct Answer: B\n\nA. They require less storage is incorrect. Immutability governs whether data can be changed, not how much space it\nuses; immutable copies may even consume more storage because they cannot be overwritten. C. They are\ncompressed in real time is incorrect. Compression is a separate storage-efficiency feature and is unrelated to whether\na backup can be modified. B. They cannot be altered once written is correct. An immutable backup is\nwrite-once/read-many: after it is written it cannot be changed, encrypted, or deleted for a defined retention period,\nwhich protects recovery points from ransomware and malicious insiders. D. They allow live editing by admins is\nincorrect. This is the opposite of immutability - the entire point is that not even administrators can modify the protected\ncopy during its retention window.",
    "question": "What is the benefit of immutable backups?",
    "options": [
      "They require less storage",
      "They cannot be altered once written",
      "They are compressed in real time",
      "They allow live editing by admins"
    ],
    "correctOption": 1,
    "isMultiSelect": false,
    "domainId": 2,
    "domain": "Domain 2: Threats, Vulnerabilities & Mitigations",
    "objective": "2.1-2.4 Threats, Vulnerabilities, Attack Vectors & Mitigations"
  },
  {
    "id": "e1-q25",
    "examSet": "Practice Exam 1",
    "examNum": 1,
    "questionNumber": 25,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "C",
    "explanation": "Correct Answer: C\n\nA. \"Mistranslations\" is not a type of attack countered by monitoring look-alike domains. B. \"Spimming\" (SPIM) is\nunsolicited spam sent over instant messaging, which is unrelated to registering look-alike domain names. C. Correct\n\u2014 typosquatting (URL hijacking) registers misspelled or look-alike variations of a legitimate domain; researching and\nclaiming those similar domains is how Wolfgang-Cashman counters it. D. \"Redactioning\" is not a recognized attack\ntype.",
    "question": "Wolfgang-Cashman is a new intern at the online company WebHighSchoolStore.com. He has been\nassigned the task of researching all the similar domain names to theirs in order to counteract attacks. What\nis Wolfgang-Cashman combating?",
    "options": [
      "Mistranslations",
      "Spimming",
      "Typo squatting",
      "Redactioning"
    ],
    "correctOption": 2,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e1-q26",
    "examSet": "Practice Exam 1",
    "examNum": 1,
    "questionNumber": 26,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "C",
    "explanation": "Correct Answer: C\n\nB. Mission-essential functions is incorrect because it identifies the critical activities an organization must sustain, a\ncontinuity-planning concept, not the post-incident review step. D. Recovery objectives is incorrect because targets\nsuch as RTO and RPO define recovery goals; they do not describe documenting and analyzing an incident to improve\nfuture response. C. Lessons learned is correct because this final incident-response phase completes the incident\ndocumentation, analyzes what happened to strengthen security, and feeds improvements into future responses. A.\nTactical summary is incorrect because it is not a defined incident-response phase.",
    "question": "Eden is creating an incident response plan. Which process involves completing incident documentation,\nperforming detailed analysis to increase security, and improving future response efforts?",
    "options": [
      "Tactical summary",
      "Mission-essential functions",
      "Lessons learned",
      "Recovery objectives"
    ],
    "correctOption": 2,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e1-q27",
    "examSet": "Practice Exam 1",
    "examNum": 1,
    "questionNumber": 27,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "D",
    "explanation": "Correct Answer: D\n\nA. Segmentation is incorrect. Network segmentation limits lateral movement between zones but does not directly\nenforce which specific files a user can open. C. Data tokenization is incorrect. Tokenization replaces sensitive values\nwith surrogates; it does not restrict a user from accessing files in a shared folder. D. Role-based access control is\ncorrect. RBAC ensures users receive only the permissions aligned with their job function, so an employee cannot\nreach files outside their assigned role, directly addressing this scenario. B. Whitelisting is incorrect. Application\nallowlisting restricts which programs can execute; it does not govern file-level access by user role.",
    "question": "Scenario: A company detects that an employee accessed files outside their role. Which type of control\nwould have BEST prevented this?",
    "options": [
      "Segmentation",
      "Whitelisting",
      "Data tokenization",
      "Role-based access control"
    ],
    "correctOption": 3,
    "isMultiSelect": false,
    "domainId": 1,
    "domain": "Domain 1: General Security Concepts",
    "objective": "1.1-1.4 Security Controls, Cryptography, Identity & Access Management"
  },
  {
    "id": "e1-q28",
    "examSet": "Practice Exam 1",
    "examNum": 1,
    "questionNumber": 28,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "A",
    "explanation": "Correct Answer: A\n\nA (Finding linkages from multiple data sources.) is correct: data correlation is the process of connecting related events\nthat come from different sources, so that a pattern no single log would reveal becomes visible. A SIEM performs this\ncorrelation with rules and analytics to turn scattered entries into a meaningful security event. B (A requirement for\nusing ML.) is incorrect because machine learning can support correlation, but correlation is not a prerequisite for ML;\nthey are separate concepts. D (A dated technology no longer used...) is incorrect because correlation is the core\nfunction of a SIEM, not something SIEM replaced. C (Using a minimum of three external and three internal data\nsources...) is incorrect because there is no fixed number of sources and correlation applies to all kinds of events, not\nonly zero-day attacks.",
    "question": "What is data correlation?",
    "options": [
      "Finding linkages from multiple data sources.",
      "A requirement for using ML.",
      "Using a minimum of three external and three internal data sources to understand a zero-day attack.",
      "A dated technology no longer used due to the introduction of security information and event management."
    ],
    "correctOption": 0,
    "isMultiSelect": false,
    "domainId": 4,
    "domain": "Domain 4: Security Operations",
    "objective": "4.1-4.4 Security Operations, Monitoring, Incident Response & Forensics"
  },
  {
    "id": "e1-q29",
    "examSet": "Practice Exam 1",
    "examNum": 1,
    "questionNumber": 29,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "B",
    "explanation": "Correct Answer: B\n\nD. Host hardening is incorrect. Hardening individual hosts reduces each system's attack surface but does not restrict\neast-west traffic between peers on a flat network, so lateral movement remains possible. A. Patch management is\nincorrect. Patching closes known vulnerabilities but does not isolate hosts from one another; an attacker with valid\ncredentials or an unpatched path can still move laterally. B. Microsegmentation is correct. Microsegmentation enforces\ngranular policy between workloads, so even within one broadcast domain a compromised host cannot freely reach its\nneighbors \u2014 directly limiting lateral movement. C. NAT is incorrect. Network Address Translation remaps addresses at\na boundary; it provides no internal segmentation and does not stop movement between hosts on the same flat\nnetwork.",
    "question": "Which of the following strategies would MOST reduce the risk of lateral movement in a flat network?",
    "options": [
      "Patch management",
      "Microsegmentation",
      "NAT",
      "Host hardening"
    ],
    "correctOption": 1,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e1-q30",
    "examSet": "Practice Exam 1",
    "examNum": 1,
    "questionNumber": 30,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "A",
    "explanation": "Correct Answer: A\n\nC. NFC capture attack is incorrect. NFC capture refers to intercepting near-field communication at very close range\nand is not the standard term for rogue AP-based wireless interception. A. Evil twin attack is correct. An evil twin sets\nup a rogue access point that mimics a legitimate one, luring users to connect so the attacker can intercept and capture\ntheir wireless transmissions in a man-in-the-middle position. D. WPA grab attack is incorrect. This is not an established\nattack category; it does not describe a mechanism for capturing user transmissions via a rogue AP. B. Sleeper attack\nis incorrect. A sleeper attack refers to malware or an agent that remains dormant before activating \u2014 not a wireless\ninterception technique.",
    "question": "Nia is writing an email to an employee about a wireless attack that is designed to capture wireless\ntransmissions from legitimate users. Which type of attack is she describing?",
    "options": [
      "Evil twin attack",
      "Sleeper attack",
      "NFC capture attack",
      "WPA grab attack"
    ],
    "correctOption": 0,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e1-q31",
    "examSet": "Practice Exam 1",
    "examNum": 1,
    "questionNumber": 31,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "D",
    "explanation": "Correct Answer: D\n\nC. An attacker can steal data from any folder with file sharing enabled is incorrect as a reason \u2014 it IS a genuine risk of\ndefault configurations that enable file sharing, so Zendaya would mention this. D. Wireless devices could be\nsusceptible to an INKSPOT attack is correct (as the NOT answer). INKSPOT is not a recognized wireless security\nthreat, so Zendaya would not cite it as a real risk \u2014 making it the item she would NOT mention. B. User names,\npasswords, and credit card numbers could be captured is incorrect as a reason \u2014 this is a real risk of unencrypted\nWLANs, so she would mention it. A. Malware can be injected into a computer connected to the WLAN is incorrect as a\nreason \u2014 drive-by malware delivery over unsecured Wi-Fi is a documented threat she would warn about.",
    "question": "Zendaya is helping her neighbor install and configure a new wireless router. Her neighbor is reluctant to\nconfigure the settings on the device but just wants to accept the default settings. Which of these is NOT a\nreason Zendaya would give regarding the risks of an improperly configured wireless router?",
    "options": [
      "Malware can be injected into a computer connected to the WLAN.",
      "User names, passwords, credit card numbers, and other information sent over the WLAN could be captured by an attacker.",
      "An attacker can steal data from any folder with file sharing enabled.",
      "Wireless devices could be susceptible to an INKSPOT attack."
    ],
    "correctOption": 3,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e1-q32",
    "examSet": "Practice Exam 1",
    "examNum": 1,
    "questionNumber": 32,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "A",
    "explanation": "Correct Answer: A\n\nD. MAC is incorrect. Mandatory Access Control uses classification labels enforced system-wide; it does not evaluate\ndynamic attributes like time of day or location. C. RBAC is incorrect. Role-Based Access Control grants access based\npurely on assigned roles and does not natively incorporate contextual attributes. A. ABAC is correct. Attribute-Based\nAccess Control evaluates attributes of the subject (department), resource, and environment (time of day, location) at\nthe moment of access, enabling fine-grained, context-aware decisions. B. DAC is incorrect. Discretionary Access\nControl delegates decisions to resource owners; it does not rely on multiple dynamic attributes.",
    "question": "A company configures access to certain documents based on department, time of day, and location. What\nmodel is this?",
    "options": [
      "ABAC",
      "DAC",
      "RBAC",
      "MAC"
    ],
    "correctOption": 0,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e1-q33",
    "examSet": "Practice Exam 1",
    "examNum": 1,
    "questionNumber": 33,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "C",
    "explanation": "Correct Answer: C\n\nC (Software keyloggers are generally easy to detect.) is correct: the question asks for the statement that is NOT true,\nand this one is false. Software keyloggers are designed to hide, often disguising themselves as legitimate processes\nor using rootkit techniques, so they are generally difficult to detect. B (Software keyloggers can be designed to send\ncaptured information...) is incorrect as an answer because transmitting the captured keystrokes to the attacker over\nthe Internet is a typical feature of software keyloggers. A (Hardware keyloggers are installed between the keyboard\nconnector...) is incorrect as an answer because a hardware keylogger is a device inserted between the keyboard cable\nand the computer's port. D (Keyloggers can be used to capture passwords, credit card numbers...) is incorrect as an\nanswer because harvesting such sensitive data is the purpose of a keylogger.",
    "question": "Which statement regarding a keylogger is NOT true?",
    "options": [
      "Hardware keyloggers are installed between the keyboard connector and computer keyboard USB port.",
      "Software keyloggers can be designed to send captured information automatically back to the attacker through the Internet.",
      "Software keyloggers are generally easy to detect.",
      "Keyloggers can be used to capture passwords, credit card numbers, or personal information."
    ],
    "correctOption": 2,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e1-q34",
    "examSet": "Practice Exam 1",
    "examNum": 1,
    "questionNumber": 34,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "B",
    "explanation": "Correct Answer: B\n\nA. Tracking software is incorrect because recording the user's activity is core surveillance functionality that spyware\nperforms after it is installed. D. System-modifying software is incorrect because changing system or browser settings is\na post-installation behavior spyware uses to embed and persist. C. Active tracking technologies is incorrect because\ntechniques such as keystroke logging and screen capture actively monitor the victim once the spyware is running. B.\nAutomatic download of software is correct: automatic or drive-by downloads are the delivery vehicle that gets spyware\nonto the machine in the first place, a distribution method rather than a capability the spyware exercises afterward.",
    "question": "Which of the following is primarily a spyware distribution method rather than a surveillance or\npost-installation capability?",
    "options": [
      "Tracking software",
      "Automatic download of software",
      "Active tracking technologies",
      "System-modifying software"
    ],
    "correctOption": 1,
    "isMultiSelect": false,
    "domainId": 2,
    "domain": "Domain 2: Threats, Vulnerabilities & Mitigations",
    "objective": "2.1-2.4 Threats, Vulnerabilities, Attack Vectors & Mitigations"
  },
  {
    "id": "e1-q35",
    "examSet": "Practice Exam 1",
    "examNum": 1,
    "questionNumber": 35,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "C",
    "explanation": "Correct Answer: C\n\nD. BPA is incorrect. A business partners agreement is a binding contract defining each partner\u2019s obligations,\ncontributions, and share of profits or losses. B. SLA is incorrect. A service-level agreement is a contractual,\nenforceable commitment to measurable service levels, often with penalties for missing them. C. MOU is correct. A\nmemorandum of understanding documents a mutual understanding and intent between parties and is generally not\nintended to create legally binding obligations, while still being more formal than a verbal agreement. A. MSA is\nincorrect. A master service agreement is a binding contract establishing the general terms that govern current and\nfuture work between the parties.",
    "question": "Which agreement type is generally intended to document a mutual understanding between parties without\ncreating legally binding obligations?",
    "options": [
      "MSA",
      "SLA",
      "MOU",
      "BPA"
    ],
    "correctOption": 2,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e1-q36",
    "examSet": "Practice Exam 1",
    "examNum": 1,
    "questionNumber": 36,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "C",
    "explanation": "Correct Answer: C\n\nD. Security training is incorrect because training encourages good password habits but cannot technically stop a user\nfrom choosing a weak password. C. Password complexity policies is correct because complexity requirements are\nenforced at password creation, automatically rejecting passwords that are too short or too simple. B. Biometric\nauthentication is incorrect because it adds or replaces an authentication factor; it does nothing to prevent weak\npasswords from being created where passwords are still in use. A. Application firewall is incorrect because it filters\ntraffic to applications and plays no role in password creation.",
    "question": "Which of the following would MOST directly prevent users from creating short, easily guessed passwords?",
    "options": [
      "Application firewall",
      "Biometric authentication",
      "Password complexity policies",
      "Security training"
    ],
    "correctOption": 2,
    "isMultiSelect": false,
    "domainId": 3,
    "domain": "Domain 3: Security Architecture",
    "objective": "3.1-3.4 Security Architecture, Cloud, Infrastructure & Resilience"
  },
  {
    "id": "e1-q37",
    "examSet": "Practice Exam 1",
    "examNum": 1,
    "questionNumber": 37,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "C",
    "explanation": "Correct Answer: C\n\nC (It uses strictly automatic processes.) is correct: the question asks what Alois would NOT say, and this statement is\nfalse. A security operations center combines people, processes, and technology; orchestration tools may filter basic\nalerts, but tiered human analysts triage alerts, investigate incidents, hunt threats, and decide on response, so a SOC is\nnever strictly automatic. D (It houses the IT security team.) is incorrect as an answer because the SOC is the\ncentralized hub where the security analysts work. B (It is responsible for detecting and analyzing cybersecurity\nincidents.) is incorrect as an answer because monitoring, detecting, and analyzing incidents in real time is the primary\nfunction of a SOC. A (A SOC responds to cybersecurity incidents.) is incorrect as an answer because coordinating\nrapid response and remediation is one of the SOC's key objectives.",
    "question": "Alois is explaining to his parents his new position in a SOC. Which of the following would Alois NOT say\nabout a SOC?",
    "options": [
      "A SOC responds to cybersecurity incidents.",
      "It is responsible for detecting and analyzing cybersecurity incidents.",
      "It uses strictly automatic processes.",
      "It houses the IT security team."
    ],
    "correctOption": 2,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e1-q38",
    "examSet": "Practice Exam 1",
    "examNum": 1,
    "questionNumber": 38,
    "questionType": "Matching",
    "correctAnswerRaw": "1 = C; 2 = B; 3 = A; 4 = D",
    "explanation": "Correct Answer: 1 = C; 2 = B; 3 = A; 4 = D\n\nThe correct mapping is: Policy is a high-level rule that guides organizational decision-making (e.g., 'all sensitive data\nmust be encrypted'). Standard is a mandatory, detailed technical requirement that supports a policy (e.g., 'AES-256\nmust be used'). Guideline is an optional recommended practice \u2014 it offers advice but is not enforceable. Procedure is\na step-by-step action plan describing exactly how a task must be performed. These four terms form a hierarchy:\npolicies set intent, standards enforce specifics, guidelines advise, and procedures operationalize.",
    "question": "Match each governance term with its description.",
    "matchingItems": [
      {
        "num": 1,
        "text": "Policy",
        "correctLetter": "C"
      },
      {
        "num": 2,
        "text": "Standard",
        "correctLetter": "B"
      },
      {
        "num": 3,
        "text": "Guideline",
        "correctLetter": "A"
      },
      {
        "num": 4,
        "text": "Procedure",
        "correctLetter": "D"
      }
    ],
    "matchingDescriptions": [
      {
        "letter": "A",
        "text": "Optional recommended practice"
      },
      {
        "letter": "B",
        "text": "Mandatory, detailed technical requirement"
      },
      {
        "letter": "C",
        "text": "High-level rule for decision-making"
      },
      {
        "letter": "D",
        "text": "Step-by-step action plan"
      }
    ],
    "correctMapping": {
      "1": "C",
      "2": "B",
      "3": "A",
      "4": "D"
    },
    "options": [
      "A. Optional recommended practice",
      "B. Mandatory, detailed technical requirement",
      "C. High-level rule for decision-making",
      "D. Step-by-step action plan"
    ],
    "correctOption": 0,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e1-q39",
    "examSet": "Practice Exam 1",
    "examNum": 1,
    "questionNumber": 39,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "A",
    "explanation": "Correct Answer: A\n\nC. Physical is incorrect. Physical controls protect the physical environment (locks, fences, guards); applying an\nencryption algorithm to backups is not a physical measure. D. Administrative is incorrect. Administrative (managerial)\ncontrols are policies, procedures, and training \u2014 not the technology that performs the encryption. A. Technical is\ncorrect. AES-256 is implemented through technology (software/hardware that encrypts the data), which makes it a\ntechnical (logical) control safeguarding the backups' confidentiality. B. Compensating is incorrect. A compensating\ncontrol substitutes for a primary control that cannot be used; here encryption is a direct primary control, not a substitute\nfor one.",
    "question": "Scenario: A company uses AES-256 to protect database backups. Which type of control is this?",
    "options": [
      "Technical",
      "Compensating",
      "Physical",
      "Administrative"
    ],
    "correctOption": 0,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e1-q40",
    "examSet": "Practice Exam 1",
    "examNum": 1,
    "questionNumber": 40,
    "questionType": "Matching",
    "correctAnswerRaw": "1 = B; 2 = D; 3 = C; 4 = A",
    "explanation": "Correct Answer: 1 = B; 2 = D; 3 = C; 4 = A\n\nThe correct pairings are: Risk avoidance = Not launching a project due to potential risk; Risk acceptance = Choosing\nto do nothing after risk evaluation; Risk mitigation = Applying a patch to remove vulnerability; Risk transference =\nBuying cyber insurance. Risk avoidance eliminates the risk by deciding not to engage in the activity that creates it \u2014\ndeclining to launch a product because its security risks are unacceptable is the classic example. Risk acceptance is a\nconscious decision to tolerate a known risk without additional controls, typically because mitigation cost exceeds\npotential loss. Risk mitigation reduces the probability or impact of a risk through controls such as patching, MFA, or\nnetwork segmentation. Risk transference moves the financial consequence to a third party \u2014 most commonly through\ncyber liability insurance policies.",
    "question": "Match each risk term with its meaning.",
    "matchingItems": [
      {
        "num": 1,
        "text": "Risk avoidance",
        "correctLetter": "B"
      },
      {
        "num": 2,
        "text": "Risk acceptance",
        "correctLetter": "D"
      },
      {
        "num": 3,
        "text": "Risk mitigation",
        "correctLetter": "C"
      },
      {
        "num": 4,
        "text": "Risk transference",
        "correctLetter": "A"
      }
    ],
    "matchingDescriptions": [
      {
        "letter": "A",
        "text": "Buying cyber insurance"
      },
      {
        "letter": "B",
        "text": "Not launching a project due to potential risk"
      },
      {
        "letter": "C",
        "text": "Applying a patch to remove vulnerability"
      },
      {
        "letter": "D",
        "text": "Choosing to do nothing after risk evaluation"
      }
    ],
    "correctMapping": {
      "1": "B",
      "2": "D",
      "3": "C",
      "4": "A"
    },
    "options": [
      "A. Buying cyber insurance",
      "B. Not launching a project due to potential risk",
      "C. Applying a patch to remove vulnerability",
      "D. Choosing to do nothing after risk evaluation"
    ],
    "correctOption": 0,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e1-q41",
    "examSet": "Practice Exam 1",
    "examNum": 1,
    "questionNumber": 41,
    "questionType": "Matching",
    "correctAnswerRaw": "1 = D; 2 = C; 3 = A; 4 = B",
    "explanation": "Correct Answer: 1 = D; 2 = C; 3 = A; 4 = B\n\nThe correct mapping is: Syslog standardizes the format for remote log collection, providing a universal protocol for\ndevices to send log messages to a centralized server over UDP (port 514) or TCP. Immutable logs prevent tampering\nafter capture \u2014 once written, they cannot be altered, deleted, or overwritten, making them critical for forensic integrity.\nLog aggregation provides centralized analysis and storage, collecting logs from disparate sources into one platform for\ncorrelation and searching. Chain of custody preserves evidence integrity by documenting every person who handled\nevidence, when, and what was done \u2014 essential for legal admissibility in investigations.",
    "question": "Match each logging feature to its function.",
    "matchingItems": [
      {
        "num": 1,
        "text": "Syslog",
        "correctLetter": "D"
      },
      {
        "num": 2,
        "text": "Immutable logs",
        "correctLetter": "C"
      },
      {
        "num": 3,
        "text": "Log aggregation",
        "correctLetter": "A"
      },
      {
        "num": 4,
        "text": "Chain of custody",
        "correctLetter": "B"
      }
    ],
    "matchingDescriptions": [
      {
        "letter": "A",
        "text": "Centralized analysis and storage"
      },
      {
        "letter": "B",
        "text": "Preserves evidence integrity"
      },
      {
        "letter": "C",
        "text": "Prevents tampering after capture"
      },
      {
        "letter": "D",
        "text": "Standardizes format for remote log collection"
      }
    ],
    "correctMapping": {
      "1": "D",
      "2": "C",
      "3": "A",
      "4": "B"
    },
    "options": [
      "A. Centralized analysis and storage",
      "B. Preserves evidence integrity",
      "C. Prevents tampering after capture",
      "D. Standardizes format for remote log collection"
    ],
    "correctOption": 0,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e1-q42",
    "examSet": "Practice Exam 1",
    "examNum": 1,
    "questionNumber": 42,
    "questionType": "Matching",
    "correctAnswerRaw": "1 = D; 2 = A; 3 = C; 4 = B",
    "explanation": "Correct Answer: 1 = D; 2 = A; 3 = C; 4 = B\n\nCOBIT pairs with \"IT governance and process management\" because ISACA's COBIT framework provides\ngovernance objectives that align IT with business goals. ISO/IEC 27001 pairs with \"Information security management\nsystems\" because it defines the requirements to establish, operate, and continually improve an ISMS. NIST SP 800-53\npairs with \"Security control catalog for federal systems,\" offering a comprehensive catalog of security and privacy\ncontrols for U.S. federal information systems. CIS Controls pairs with \"Baseline technical controls,\" providing a\nprioritized set of actionable technical safeguards that organizations can implement to defend against common attacks.",
    "question": "Match each security framework with its area of focus.",
    "matchingItems": [
      {
        "num": 1,
        "text": "COBIT",
        "correctLetter": "D"
      },
      {
        "num": 2,
        "text": "ISO/IEC 27001",
        "correctLetter": "A"
      },
      {
        "num": 3,
        "text": "NIST SP 800-53",
        "correctLetter": "C"
      },
      {
        "num": 4,
        "text": "CIS Controls",
        "correctLetter": "B"
      }
    ],
    "matchingDescriptions": [
      {
        "letter": "A",
        "text": "Information security management systems"
      },
      {
        "letter": "B",
        "text": "Baseline technical controls"
      },
      {
        "letter": "C",
        "text": "Security control catalog for federal systems"
      },
      {
        "letter": "D",
        "text": "IT governance and process management"
      }
    ],
    "correctMapping": {
      "1": "D",
      "2": "A",
      "3": "C",
      "4": "B"
    },
    "options": [
      "A. Information security management systems",
      "B. Baseline technical controls",
      "C. Security control catalog for federal systems",
      "D. IT governance and process management"
    ],
    "correctOption": 0,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e1-q43",
    "examSet": "Practice Exam 1",
    "examNum": 1,
    "questionNumber": 43,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "B",
    "explanation": "Correct Answer: B\n\nB (SSRF) is correct: server-side request forgery abuses the trust one server places in another, tricking a vulnerable\nserver into issuing requests on the attacker's behalf to internal or external systems the attacker cannot reach directly.\nC (CSRF) is incorrect because cross-site request forgery abuses the trust a site places in the user's browser and\nsession, riding an authenticated user's cookies rather than a server-to-server relationship. D (EXMAL) is incorrect\nbecause it is not a real attack acronym. A (SCSI) is incorrect because Small Computer System Interface is a storage\nbus standard for disks and tape drives, not an attack of any kind.",
    "question": "Which of the following manipulates the trusting relationship between web servers?",
    "options": [
      "SCSI",
      "SSRF",
      "CSRF",
      "EXMAL"
    ],
    "correctOption": 1,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e1-q44",
    "examSet": "Practice Exam 1",
    "examNum": 1,
    "questionNumber": 44,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "B",
    "explanation": "Correct Answer: B\n\nD. Obfuscation is incorrect because it only makes code harder to read; it does not check untrusted input. A. Code\nsigning is incorrect because it proves the integrity and origin of code, not the safety of user-supplied data. B. Input\nvalidation is correct: checking untrusted user-supplied data against expected formats before it is processed reduces\nthe risk of cross-site scripting (XSS). C. Normalization is incorrect because converting data to a canonical form\nsupports validation but does not by itself check or reject malicious input.",
    "question": "Cahill is writing a web application and wants to reduce the risk of XSS by checking untrusted user-supplied\ndata before it is processed. Which coding technique should he use?",
    "options": [
      "Code signing",
      "Input validation",
      "Normalization",
      "Obfuscation"
    ],
    "correctOption": 1,
    "isMultiSelect": false,
    "domainId": 2,
    "domain": "Domain 2: Threats, Vulnerabilities & Mitigations",
    "objective": "2.1-2.4 Threats, Vulnerabilities, Attack Vectors & Mitigations"
  },
  {
    "id": "e1-q45",
    "examSet": "Practice Exam 1",
    "examNum": 1,
    "questionNumber": 45,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "D",
    "explanation": "Correct Answer: D\n\nD (Simulate response to a security incident) is correct: a tabletop exercise walks the response team through a\nhypothetical scenario in discussion form, testing the plan, clarifying who does what, and surfacing gaps before a real\nincident happens. A (Perform root cause analysis) is incorrect because root cause analysis examines an incident that\nhas actually occurred and belongs to the lessons learned phase. B (Conduct red team evaluation) is incorrect because\na red team mounts a live adversarial attack against real systems, while a tabletop executes nothing. C (Test DLP\npolicies in production) is incorrect because validating data loss prevention rules is a hands-on technical test of one\ncontrol.",
    "question": "What is the main purpose of a tabletop exercise?",
    "options": [
      "Perform root cause analysis",
      "Conduct red team evaluation",
      "Test DLP policies in production",
      "Simulate response to a security incident"
    ],
    "correctOption": 3,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e1-q46",
    "examSet": "Practice Exam 1",
    "examNum": 1,
    "questionNumber": 46,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "C",
    "explanation": "Correct Answer: C\n\nB. Forensic imaging is incorrect. Forensic imaging creates a preserved evidentiary copy of storage media \u2014 it is an\ninvestigation technique, not the phase defined by stopping an attack's spread. A. Playbook execution is incorrect.\nPlaybook execution describes the method of following predefined IR procedures \u2014 it is not a named phase in the\nincident response lifecycle. C. Containment is correct. The containment phase focuses on isolating affected systems to\nprevent the attack from spreading further while the investigation continues. Actions include disconnecting infected\nhosts from the network, blocking malicious IP addresses, and disabling compromised accounts \u2014 all aimed at limiting\ndamage without destroying evidence. D. Threat hunting is incorrect. Threat hunting is a proactive pre-incident activity;\nby definition, it occurs before an incident is confirmed, not after a compromise has been detected.",
    "question": "Fill in the blank: The __________ phase of incident response focuses on isolating affected systems and\npreventing further damage.",
    "options": [
      "Playbook execution",
      "Forensic imaging",
      "Containment",
      "Threat hunting"
    ],
    "correctOption": 2,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e1-q47",
    "examSet": "Practice Exam 1",
    "examNum": 1,
    "questionNumber": 47,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "C",
    "explanation": "Correct Answer: C\n\nB. To encrypt data during transmission is incorrect. Encryption provides confidentiality and is reversible with a key;\nhashing is one-way and does not conceal data for transport. D. To compress large files is incorrect. A hash produces a\nfixed-length digest regardless of input size and cannot be reversed to reconstruct the file, so it is not compression. C.\nTo verify data integrity is correct. Hashing produces a fixed-length digest that changes if the input changes, so\ncomparing hashes confirms whether data has been altered; its primary use is integrity verification. A. To authenticate\nuser credentials is incorrect. Hashing is used when storing passwords, but on its own the function of hashing is\nintegrity, not the authentication decision itself.",
    "question": "What is the primary function of hashing in information security?",
    "options": [
      "To authenticate user credentials",
      "To encrypt data during transmission",
      "To verify data integrity",
      "To compress large files"
    ],
    "correctOption": 2,
    "isMultiSelect": false,
    "domainId": 1,
    "domain": "Domain 1: General Security Concepts",
    "objective": "1.1-1.4 Security Controls, Cryptography, Identity & Access Management"
  },
  {
    "id": "e1-q48",
    "examSet": "Practice Exam 1",
    "examNum": 1,
    "questionNumber": 48,
    "questionType": "Matching",
    "correctAnswerRaw": "1 = A; 2 = C; 3 = B; 4 = D",
    "explanation": "Correct Answer: 1 = A; 2 = C; 3 = B; 4 = D\n\nThe correct pairings are: Hashing = Ensures integrity with a fixed-length output; Symmetric encryption = Encrypts\nusing a shared secret key; Asymmetric encryption = Uses a key pair for secure data exchange; Digital signature =\nProvides authentication and non-repudiation. Hashing algorithms (SHA-256, SHA-3) produce a fixed-length digest \u2014\nany change to the input produces a different digest, making hashing ideal for integrity verification. Symmetric\nencryption (AES, 3DES) uses the same key for encryption and decryption \u2014 fast but requires secure key distribution.\nAsymmetric encryption (RSA, ECC) uses a mathematically linked public/private key pair for secure key exchange and\nencryption. A digital signature applies the sender's private key to a hash of the message \u2014 recipients verify using the\npublic key, proving both authenticity and non-repudiation.",
    "question": "Match each cryptographic function with its purpose.",
    "matchingItems": [
      {
        "num": 1,
        "text": "Hashing",
        "correctLetter": "A"
      },
      {
        "num": 2,
        "text": "Symmetric encryption",
        "correctLetter": "C"
      },
      {
        "num": 3,
        "text": "Asymmetric encryption",
        "correctLetter": "B"
      },
      {
        "num": 4,
        "text": "Digital signature",
        "correctLetter": "D"
      }
    ],
    "matchingDescriptions": [
      {
        "letter": "A",
        "text": "Ensures integrity with a fixed-length output"
      },
      {
        "letter": "B",
        "text": "Uses a key pair for secure data exchange"
      },
      {
        "letter": "C",
        "text": "Encrypts using a shared secret key"
      },
      {
        "letter": "D",
        "text": "Provides authentication and non-repudiation"
      }
    ],
    "correctMapping": {
      "1": "A",
      "2": "C",
      "3": "B",
      "4": "D"
    },
    "options": [
      "A. Ensures integrity with a fixed-length output",
      "B. Uses a key pair for secure data exchange",
      "C. Encrypts using a shared secret key",
      "D. Provides authentication and non-repudiation"
    ],
    "correctOption": 0,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e1-q49",
    "examSet": "Practice Exam 1",
    "examNum": 1,
    "questionNumber": 49,
    "questionType": "Matching",
    "correctAnswerRaw": "1 = B; 2 = D; 3 = C; 4 = A",
    "explanation": "Correct Answer: 1 = B; 2 = D; 3 = C; 4 = A\n\nThe correct pairings are: Containment = Disconnect affected systems; Identification = Analyze logs for signs of\ncompromise; Preparation = Define roles and responsibilities; Eradication = Scan for malware and clean systems.\nPreparation is completed before any incident \u2014 it involves creating IR plans, assigning roles, and provisioning tools.\nIdentification (detection and analysis) involves reviewing logs, alerts, and artifacts to confirm and characterize a\nsecurity event. Containment limits the spread by isolating affected systems from the network. Eradication removes the\nroot cause \u2014 deleting malware, closing backdoors, and revoking compromised credentials so the threat cannot\npersist.",
    "question": "Match each incident response phase with its activity.",
    "matchingItems": [
      {
        "num": 1,
        "text": "Containment",
        "correctLetter": "B"
      },
      {
        "num": 2,
        "text": "Identification",
        "correctLetter": "D"
      },
      {
        "num": 3,
        "text": "Preparation",
        "correctLetter": "C"
      },
      {
        "num": 4,
        "text": "Eradication",
        "correctLetter": "A"
      }
    ],
    "matchingDescriptions": [
      {
        "letter": "A",
        "text": "Scan for malware and clean systems"
      },
      {
        "letter": "B",
        "text": "Disconnect affected systems"
      },
      {
        "letter": "C",
        "text": "Define roles and responsibilities"
      },
      {
        "letter": "D",
        "text": "Analyze logs for signs of compromise"
      }
    ],
    "correctMapping": {
      "1": "B",
      "2": "D",
      "3": "C",
      "4": "A"
    },
    "options": [
      "A. Scan for malware and clean systems",
      "B. Disconnect affected systems",
      "C. Define roles and responsibilities",
      "D. Analyze logs for signs of compromise"
    ],
    "correctOption": 0,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e1-q50",
    "examSet": "Practice Exam 1",
    "examNum": 1,
    "questionNumber": 50,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "C",
    "explanation": "Correct Answer: C\n\nC (MITB) is correct: a man-in-the-browser attack plants malware, typically a malicious extension or injected code,\nbetween the browser and the underlying operating system so it can read and silently alter transactions after the user\nhas already authenticated. B (MITM) is incorrect because a man-in-the-middle attack intercepts traffic between two\nendpoints on the network path, not inside the host between browser and OS. D (MRTR) is incorrect because it is not a\nrecognised attack or security acronym. A (MTTR) is incorrect because mean time to repair is an availability metric\nused in resilience and incident-response planning, not an attack at all.",
    "question": "Which attack intercepts communications between a web browser and the underlying OS?",
    "options": [
      "MTTR",
      "MITM",
      "MITB",
      "MRTR"
    ],
    "correctOption": 2,
    "isMultiSelect": false,
    "domainId": 1,
    "domain": "Domain 1: General Security Concepts",
    "objective": "1.1-1.4 Security Controls, Cryptography, Identity & Access Management"
  },
  {
    "id": "e1-q51",
    "examSet": "Practice Exam 1",
    "examNum": 1,
    "questionNumber": 51,
    "questionType": "Matching",
    "correctAnswerRaw": "1 = B; 2 = D; 3 = E; 4 = A",
    "explanation": "Correct Answer: 1 = B; 2 = D; 3 = E; 4 = A\n\n1 \u2192 B (Removable device): a USB drive dropped in a parking lot relies on someone plugging in physical media. 2 \u2192 D\n(Message-based email or file): a malicious macro inside an emailed invoice arrives through a message and file vector.\n3 \u2192 E (Supply chain): a tampered driver update from a trusted vendor is a supply chain compromise. 4 \u2192 A\n(Image-based): a malicious QR code sticker delivers its payload through an image the victim scans. Unused: F (default\ncredentials) \u2014 no unchanged factory password is involved; C (open service port) \u2014 no exposed listening service is\nused in these scenarios.",
    "question": "Match each attack scenario to the threat vector it used.",
    "matchingItems": [
      {
        "num": 1,
        "text": "A USB drive labeled 'Payroll' left in the parking lot",
        "correctLetter": "B"
      },
      {
        "num": 2,
        "text": "A malicious macro inside an emailed invoice attachment",
        "correctLetter": "D"
      },
      {
        "num": 3,
        "text": "A driver update pushed from a compromised software vendor",
        "correctLetter": "E"
      },
      {
        "num": 4,
        "text": "A QR code sticker placed over a legitimate payment poster",
        "correctLetter": "A"
      }
    ],
    "matchingDescriptions": [
      {
        "letter": "A",
        "text": "Image-based"
      },
      {
        "letter": "B",
        "text": "Removable device"
      },
      {
        "letter": "C",
        "text": "Open service port"
      },
      {
        "letter": "D",
        "text": "Message-based email or file"
      },
      {
        "letter": "E",
        "text": "Supply chain"
      },
      {
        "letter": "F",
        "text": "Default credentials"
      }
    ],
    "correctMapping": {
      "1": "B",
      "2": "D",
      "3": "E",
      "4": "A"
    },
    "options": [
      "A. Image-based",
      "B. Removable device",
      "C. Open service port",
      "D. Message-based email or file",
      "E. Supply chain",
      "F. Default credentials"
    ],
    "correctOption": 0,
    "domainId": 1,
    "domain": "Domain 1: General Security Concepts",
    "objective": "1.1-1.4 Security Controls, Cryptography, Identity & Access Management"
  },
  {
    "id": "e1-q52",
    "examSet": "Practice Exam 1",
    "examNum": 1,
    "questionNumber": 52,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "B",
    "explanation": "Correct Answer: B\n\nD. Vulnerability scanning is incorrect. Vulnerability scanning is an active process of probing systems for known\nweaknesses using tools like Nessus or Qualys \u2014 it is a security assessment activity, not a traffic-filtering network\ndevice. A. Threat hunting is incorrect. Threat hunting is a proactive analyst-led activity searching for adversaries in the\nenvironment \u2014 it is not a network appliance. C. Playbook execution is incorrect. A playbook is a documented set of\nincident response procedures \u2014 it is a process guide, not a security device placed in the network path. B. Firewall is\ncorrect. A firewall is a network security device (hardware or software) positioned between internal networks and\nexternal connections. It inspects traffic and permits or denies it based on configured rules. Stateful firewalls track\nconnection state; next-generation firewalls add application awareness, deep packet inspection, and integrated threat\nintelligence.",
    "question": "Fill in the blank: A __________ is a security device placed between internal networks and external\nconnections to filter traffic.",
    "options": [
      "Threat hunting",
      "Firewall",
      "Playbook execution",
      "Vulnerability scanning"
    ],
    "correctOption": 1,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e1-q53",
    "examSet": "Practice Exam 1",
    "examNum": 1,
    "questionNumber": 53,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "D",
    "explanation": "Correct Answer: D\n\nD. Base score is correct. In CVSS, the Base metrics represent the intrinsic characteristics of a vulnerability, including\nConfidentiality, Integrity, and Availability impact sub-metrics, producing a severity score that does not change with time\nor environment. A. Gap analysis is incorrect. A gap analysis compares current state to desired state; it is not part of\nCVSS. B. Zero trust is incorrect. Zero trust is a security architecture philosophy, unrelated to CVSS scoring. C.\nNon-repudiation is incorrect. Non-repudiation is a cryptographic property ensuring actions cannot be denied, not a\nvulnerability scoring metric.",
    "question": "Fill in the blank: The __________ metric in CVSS reflects how severely a vulnerability impacts\nconfidentiality, integrity, and availability.",
    "options": [
      "Gap analysis",
      "Zero trust",
      "Non-repudiation",
      "Base score"
    ],
    "correctOption": 3,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e1-q54",
    "examSet": "Practice Exam 1",
    "examNum": 1,
    "questionNumber": 54,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "C",
    "explanation": "Correct Answer: C\n\nB. OWE is incorrect because Opportunistic Wireless Encryption encrypts traffic on open networks that use no\npassword at all, so it plays no role in protecting a password from guessing attacks. C. SAE is correct: Simultaneous\nAuthentication of Equals replaces WPA2-style pre-shared-key authentication with a password-authenticated key\nexchange (Dragonfly), so a captured exchange cannot be used for offline password guessing and each session\nderives fresh keying material. A. XR3 is incorrect because it is not a real WPA3 technology or wireless security\nstandard. D. PMF is incorrect because Protected Management Frames defend against forged management frames\nsuch as deauthentication attacks; they do not protect the password exchange.",
    "question": "Which WPA3 technology mitigates offline password-guessing attacks by replacing pre-shared-key\nauthentication with a password-authenticated key exchange?",
    "options": [
      "XR3",
      "OWE",
      "SAE",
      "PMF"
    ],
    "correctOption": 2,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e1-q55",
    "examSet": "Practice Exam 1",
    "examNum": 1,
    "questionNumber": 55,
    "questionType": "Ordering",
    "correctAnswerRaw": "C > D > A > B",
    "explanation": "Correct Answer: C > D > A > B\n\nThe correct vulnerability management lifecycle order is: Discovery first \u2014 scanning the environment to identify assets\nand potential vulnerabilities. Then Assessment \u2014 analyzing discovered vulnerabilities to understand their severity,\nexploitability, and risk. Then Remediation \u2014 applying patches, configuration changes, or mitigations to address\nidentified weaknesses. Finally Verification \u2014 re-scanning or testing to confirm that remediation was successful and the\nvulnerability no longer exists. Skipping or reordering steps (e.g., remediating before assessing severity) leads to\nwasted effort and unresolved risk.",
    "question": "Arrange the following steps in a vulnerability management lifecycle. Place the following in the correct order:",
    "orderingItems": [
      {
        "letter": "A",
        "text": "Remediation"
      },
      {
        "letter": "B",
        "text": "Verification"
      },
      {
        "letter": "C",
        "text": "Discovery"
      },
      {
        "letter": "D",
        "text": "Assessment"
      }
    ],
    "correctOrder": [
      "C",
      "D",
      "A",
      "B"
    ],
    "options": [
      "A. Remediation",
      "B. Verification",
      "C. Discovery",
      "D. Assessment"
    ],
    "correctOption": 0,
    "domainId": 4,
    "domain": "Domain 4: Security Operations",
    "objective": "4.1-4.4 Security Operations, Monitoring, Incident Response & Forensics"
  },
  {
    "id": "e1-q56",
    "examSet": "Practice Exam 1",
    "examNum": 1,
    "questionNumber": 56,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "C",
    "explanation": "Correct Answer: C\n\nA. Injecting code into a website is incorrect. That describes injection attacks such as XSS or SQL injection, not\ninterception of a conversation. C. Intercepting communication between two parties is correct. In a man-in-the-middle\nattack the adversary secretly positions itself between two communicating endpoints, relaying and possibly altering\ntraffic while both sides believe they talk directly to each other (for example via ARP spoofing or a rogue access point).\nB. Using a fake login page to steal credentials is incorrect. That describes phishing or credential harvesting, which\ntricks a user rather than intercepting an existing session. D. Escalating local privileges is incorrect. Privilege escalation\nraises an attacker's rights on a system already accessed; it is unrelated to intercepting communications.",
    "question": "Which of the following BEST describes a man-in-the-middle (MITM) attack?",
    "options": [
      "Injecting code into a website",
      "Using a fake login page to steal credentials",
      "Intercepting communication between two parties",
      "Escalating local privileges"
    ],
    "correctOption": 2,
    "isMultiSelect": false,
    "domainId": 2,
    "domain": "Domain 2: Threats, Vulnerabilities & Mitigations",
    "objective": "2.1-2.4 Threats, Vulnerabilities, Attack Vectors & Mitigations"
  },
  {
    "id": "e1-q57",
    "examSet": "Practice Exam 1",
    "examNum": 1,
    "questionNumber": 57,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "A",
    "explanation": "Correct Answer: A\n\nB. Compression errors introduced during transfer is incorrect: compression is unrelated to the confidentiality risk of\nclear-text transmission. D. Repeated authentication failures at the gateway is incorrect: the absence of encryption\ndoes not by itself cause authentication attempts to fail. A. Data interception by unauthorized parties is correct: PII sent\nover an unencrypted protocol travels in clear text and can be captured by anyone eavesdropping on the network path.\nC. Higher CPU load on the sending and receiving hosts is incorrect: skipping encryption actually reduces processing\noverhead, so CPU load is not the concern.",
    "question": "What is the primary concern when transferring PII over an unencrypted protocol?",
    "options": [
      "Data interception by unauthorized parties",
      "Compression errors introduced during transfer",
      "Higher CPU load on the sending and receiving hosts",
      "Repeated authentication failures at the gateway"
    ],
    "correctOption": 0,
    "isMultiSelect": false,
    "domainId": 1,
    "domain": "Domain 1: General Security Concepts",
    "objective": "1.1-1.4 Security Controls, Cryptography, Identity & Access Management"
  },
  {
    "id": "e1-q58",
    "examSet": "Practice Exam 1",
    "examNum": 1,
    "questionNumber": 58,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "A",
    "explanation": "Correct Answer: A\n\nC. Vulnerability scanning is incorrect as the exception because it is a primary identification method used to find known\nweaknesses in systems. D. Penetration testing is incorrect because simulated attacks are a listed way to identify\nvulnerabilities that automated scanners can miss. B. Responsible disclosure program is incorrect because such\nprograms, including bug bounties, let external researchers report vulnerabilities and are part of identification. A. Data\nretention is correct: it is a data lifecycle and disposal/decommissioning consideration within asset management, not a\nvulnerability management activity.",
    "question": "Which of the following is NOT an activity associated with vulnerability management?",
    "options": [
      "Data retention",
      "Responsible disclosure program",
      "Vulnerability scanning",
      "Penetration testing"
    ],
    "correctOption": 0,
    "isMultiSelect": false,
    "domainId": 2,
    "domain": "Domain 2: Threats, Vulnerabilities & Mitigations",
    "objective": "2.1-2.4 Threats, Vulnerabilities, Attack Vectors & Mitigations"
  },
  {
    "id": "e1-q59",
    "examSet": "Practice Exam 1",
    "examNum": 1,
    "questionNumber": 59,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "A",
    "explanation": "Correct Answer: A\n\nB. GDPR is incorrect: it protects the personal data of individuals in the EU, not U.S. health records specifically. D. PCI\nDSS is incorrect: it governs payment card data, not medical records. A. HIPAA is correct: the Health Insurance\nPortability and Accountability Act governs the privacy and security of protected health information for U.S. patients. C.\nFISMA is incorrect: it applies to U.S. federal agency information systems, not private health records generally.",
    "question": "A company stores health records for U.S. patients. Which regulation most likely applies?",
    "options": [
      "HIPAA",
      "GDPR",
      "FISMA",
      "PCI DSS"
    ],
    "correctOption": 0,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e1-q60",
    "examSet": "Practice Exam 1",
    "examNum": 1,
    "questionNumber": 60,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "C",
    "explanation": "Correct Answer: C\n\nA. Determine regulatory and contractual compliance obligations is incorrect. Identifying legal and contractual\nobligations is part of governance and compliance programs, not the purpose of a BIA. D. Catalogue third-party\nvendors and their contract terms is incorrect. Building an inventory of suppliers and the terms they are held to is\nvendor and third-party risk management; the BIA consumes that inventory when it assesses impact but does not exist\nto produce it. C. Identify critical business functions and dependencies is correct. A BIA determines which business\nfunctions are most critical, the resources and dependencies they rely on, and the impact of their disruption over time -\nfeeding recovery priorities and values such as RTO and RPO. B. Plan incident response and escalation procedures is\nincorrect. Building IR and escalation procedures is a separate activity; the BIA informs continuity and recovery\nplanning but does not itself define incident response steps.",
    "question": "What is the main purpose of a business impact analysis (BIA)?",
    "options": [
      "Determine regulatory and contractual compliance obligations",
      "Plan incident response and escalation procedures",
      "Identify critical business functions and dependencies",
      "Catalogue third-party vendors and their contract terms"
    ],
    "correctOption": 2,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e1-q61",
    "examSet": "Practice Exam 1",
    "examNum": 1,
    "questionNumber": 61,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "D",
    "explanation": "Correct Answer: D\n\nA. Frequent account lockouts for legitimate users is incorrect: lockouts result from exceeding failed login thresholds,\nnot from leaving default credentials in place. C. Authentication fatigue from repeated MFA prompts is incorrect: that\ndescribes users approving repeated push notifications until one is accepted, which is unrelated to default credentials.\nD. Unauthorized access from known exploits is correct: default vendor usernames and passwords are publicly\ndocumented, so attackers can look them up and log in directly if they are not changed. B. Loss of the encryption keys\nheld in escrow is incorrect: key loss is a key-management and escrow issue, not a consequence of default credentials.",
    "question": "What is one risk of using default credentials in enterprise systems?",
    "options": [
      "Frequent account lockouts for legitimate users",
      "Loss of the encryption keys held in escrow",
      "Authentication fatigue from repeated MFA prompts",
      "Unauthorized access from known exploits"
    ],
    "correctOption": 3,
    "isMultiSelect": false,
    "domainId": 1,
    "domain": "Domain 1: General Security Concepts",
    "objective": "1.1-1.4 Security Controls, Cryptography, Identity & Access Management"
  },
  {
    "id": "e1-q62",
    "examSet": "Practice Exam 1",
    "examNum": 1,
    "questionNumber": 62,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "D",
    "explanation": "Correct Answer: D\n\nC. To improve application response times under peak user load is incorrect. Configuration baselines define approved\nsecure settings; any performance effect is incidental and is not their purpose. B. To give end users more freedom to\nchange system settings is incorrect, and in fact reversed: baselines constrain configurations to an approved standard,\nreducing rather than increasing user discretion. D. To establish secure and standardized system settings is correct. A\nconfiguration baseline defines the approved, hardened configuration for a device or application type (for example CIS\nBenchmarks or DISA STIGs), and tooling compares running systems against it so configuration drift can be detected\nand corrected. A. To prevent data loss during unplanned system failures is incorrect. Surviving a hardware or system\nfailure without losing data depends on backups, replication and redundancy; a baseline standardizes how a system is\nconfigured and does not protect the data it holds.",
    "question": "What is the primary goal of implementing configuration baselines?",
    "options": [
      "To prevent data loss during unplanned system failures",
      "To give end users more freedom to change system settings",
      "To improve application response times under peak user load",
      "To establish secure and standardized system settings"
    ],
    "correctOption": 3,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e1-q63",
    "examSet": "Practice Exam 1",
    "examNum": 1,
    "questionNumber": 63,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "D",
    "explanation": "Correct Answer: D\n\nD (Defense in depth) is correct: it is a layered security strategy in which multiple overlapping controls protect the same\nasset, so that if one layer fails the next one still stops the attacker. B (Least privilege) is incorrect because it is a single\naccess principle about granting accounts only the minimum rights they need, not about stacking layers of protection. C\n(Social engineering) is incorrect because it is an attack technique that manipulates people into breaking procedure; it\nis a threat, not a protective method. A (Tokenization) is incorrect because it is one data-protection technique that\nswaps sensitive values for non-sensitive tokens, a single control rather than a multi-layer strategy.",
    "question": "Which term refers to a method that uses multiple layers of security to protect systems?",
    "options": [
      "Tokenization",
      "Least privilege",
      "Social engineering",
      "Defense in depth"
    ],
    "correctOption": 3,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e1-q64",
    "examSet": "Practice Exam 1",
    "examNum": 1,
    "questionNumber": 64,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "B",
    "explanation": "Correct Answer: B\n\nD. \"Organizations can enrich their own existing information and make it more actionable\" is a genuine advantage of\nsharing, so it is not the answer. A. \"Organizations can independently confirm their own observations with other sharing\nmembers and improve overall quality by reducing ambiguity and errors\" is a genuine advantage, so it is not the\nanswer. C. \"Organizations can leverage the collective knowledge, experience, and capabilities of the sharing\ncommunity for a more complete understanding of threats\" is a genuine advantage, so it is not the answer. B.\n\"Organizations can identify third-party OSINT providers more quickly to purchase their threat feeds\" is correct because\nit is NOT an advantage of sharing threat intelligence: locating vendors to buy feeds from is unrelated to the value that\ncomes from members exchanging and corroborating threat data.",
    "question": "Which of the following is NOT an advantage of an organization sharing threat intelligence information?",
    "options": [
      "Organizations can independently confirm their own observations with other sharing members and improve the overall quality of the threat information through the reduction of ambiguity and errors",
      "Organizations can identify third-party OSINT providers more quickly to purchase their threat feeds",
      "Organizations can leverage the collective knowledge, experience, and capabilities of other organizations in their sharing community to gain a more complete understanding of the threats they face",
      "Organizations can enrich their own existing information and make it more actionable"
    ],
    "correctOption": 1,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e1-q65",
    "examSet": "Practice Exam 1",
    "examNum": 1,
    "questionNumber": 65,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "B",
    "explanation": "Correct Answer: B\n\nB. Expansionary is correct: an expansionary risk appetite means the organization is willing to take on more risk in\npursuit of growth and new opportunities. C. Conservative is incorrect: a conservative risk appetite favors minimizing\nrisk, accepting lower returns or slower growth in exchange for greater safety. A. Neutral is incorrect: a neutral risk\nappetite balances risk-taking and caution rather than favoring growth-driven risk. D. Restrictive is incorrect: it is not\none of the risk appetite types in the SY0-701 objectives, which list expansionary, conservative, and neutral.",
    "question": "An organization's leadership is willing to accept higher levels of risk in pursuit of business growth and new\nopportunities. Which type of risk appetite does this describe?",
    "options": [
      "Neutral",
      "Expansionary",
      "Conservative",
      "Restrictive"
    ],
    "correctOption": 1,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e1-q66",
    "examSet": "Practice Exam 1",
    "examNum": 1,
    "questionNumber": 66,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "D",
    "explanation": "Correct Answer: D\n\nD is correct (Tune the rule to exclude the misconfigured service account): alert tuning is the remedy for alert fatigue.\nBecause the noise has a confirmed benign cause, the rule should be refined to filter that account while the scheduled\njob is fixed, keeping a threshold that still catches brute-force patterns, so analysts trust the queue again. B is incorrect\n(disable the failed-login correlation rule) because switching the rule off blinds the SOC to real brute-force attempts. A is\nincorrect (quarantine every host) because quarantine answers a confirmed threat; this is a known misconfiguration, so\nisolating hosts would disrupt production for no gain. C is incorrect (shorten the log retention period) because retention\ngoverns how long logs are stored for compliance and forensics, not how many new events match the rule each day.",
    "question": "A SIEM correlation rule for failed logins generates about 400 alerts per day. Analysts have confirmed that\nmore than 90 percent come from one service account whose password was changed but never updated in\na scheduled job, and they have started ignoring the whole queue. Which action should the security team\ntake FIRST?",
    "options": [
      "Quarantine every host where the service account attempts to log in",
      "Disable the failed-login correlation rule until the queue is empty",
      "Shorten the log retention period so that fewer events are correlated",
      "Tune the rule to exclude the misconfigured service account"
    ],
    "correctOption": 3,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e1-q67",
    "examSet": "Practice Exam 1",
    "examNum": 1,
    "questionNumber": 67,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "D",
    "explanation": "Correct Answer: D\n\nB. Ransomware is incorrect. Ransomware encrypts files or systems and demands payment; the defining trait here is\ndisguise as a legitimate tool, not extortion. C. Adware is incorrect. Adware displays or injects unwanted advertising; it\ndoes not centrally describe software masquerading as a legitimate application to gain installation. D. Trojan is correct.\nA Trojan is malware disguised as a legitimate or desirable program, relying on the user to install it voluntarily \u2014 exactly\nthe scenario described. A. Rootkit is incorrect. A rootkit hides its presence and maintains privileged persistence on a\nsystem; concealment after compromise is its hallmark, not the initial deception used to get installed.",
    "question": "Scenario: An attacker convinces a user to install an application disguised as a legitimate tool. What type of\nthreat is this?",
    "options": [
      "Rootkit",
      "Ransomware",
      "Adware",
      "Trojan"
    ],
    "correctOption": 3,
    "isMultiSelect": false,
    "domainId": 2,
    "domain": "Domain 2: Threats, Vulnerabilities & Mitigations",
    "objective": "2.1-2.4 Threats, Vulnerabilities, Attack Vectors & Mitigations"
  },
  {
    "id": "e1-q68",
    "examSet": "Practice Exam 1",
    "examNum": 1,
    "questionNumber": 68,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "B",
    "explanation": "Correct Answer: B\n\nC. Reduces insurance premiums is incorrect. While robust security practices may influence insurance costs, asset\ninventory itself does not directly reduce premiums \u2014 this is a secondary, indirect benefit. D. Prevents phishing attacks\nis incorrect. Asset inventory does not stop phishing \u2014 that requires email filtering, user training, and anti-phishing\ncontrols. B. Identifies unmanaged or vulnerable devices is correct. An asset inventory provides visibility into every\ndevice on the network, including shadow IT, unpatched systems, and devices not enrolled in endpoint management \u2014\nenabling the security team to address vulnerabilities that would otherwise be invisible. A. Speeds up application\ndevelopment is incorrect. Asset inventory is a security and operations function \u2014 it has no direct relationship to\ndevelopment velocity.",
    "question": "Which of the following is a primary benefit of asset inventory management in cybersecurity?",
    "options": [
      "Speeds up application development",
      "Identifies unmanaged or vulnerable devices",
      "Reduces insurance premiums",
      "Prevents phishing attacks"
    ],
    "correctOption": 1,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e1-q69",
    "examSet": "Practice Exam 1",
    "examNum": 1,
    "questionNumber": 69,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "C",
    "explanation": "Correct Answer: C\n\nC. Technical and preventive is correct because the control is implemented through technology (endpoint security\nsoftware) and it stops unauthorized USB data transfers before they occur. A. Managerial and detective is incorrect\nbecause managerial controls govern policy and oversight, and detective controls identify events rather than block\nthem. D. Operational and corrective is incorrect because operational controls are carried out primarily by people and\nprocesses, and corrective controls remediate damage after an incident. B. Physical and deterrent is incorrect because\nphysical controls rely on tangible barriers, and deterrent controls merely discourage attackers instead of technically\nblocking the action.",
    "question": "A company uses endpoint security software to block unauthorized external USB storage devices before\nthey can transfer data. How should this control be classified?",
    "options": [
      "Managerial and detective",
      "Physical and deterrent",
      "Technical and preventive",
      "Operational and corrective"
    ],
    "correctOption": 2,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e1-q70",
    "examSet": "Practice Exam 1",
    "examNum": 1,
    "questionNumber": 70,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "A",
    "explanation": "Correct Answer: A\n\nA. Correct \u2014 this statement is NOT accurate: with proper remediation and recovery procedures, such as restoring\nfrom clean backups or rebuilding, an infected device can often be returned to normal operation. B. Encrypting data and\nmaking resources inaccessible is core ransomware behavior, so this statement is accurate. C. Ransomware can take\ncritical systems offline and halt business processes, so this statement is accurate. D. Phishing emails and other\nmessage-based vectors are among the most common ransomware delivery methods, so this statement is accurate.",
    "question": "Which statement about ransomware is NOT accurate?",
    "options": [
      "Once a device is infected with ransomware, it can never function normally again.",
      "Ransomware can encrypt data and make resources inaccessible.",
      "Ransomware attacks can severely disrupt an organization's operations.",
      "Ransomware is often delivered through message-based vectors such as phishing emails."
    ],
    "correctOption": 0,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e1-q71",
    "examSet": "Practice Exam 1",
    "examNum": 1,
    "questionNumber": 71,
    "questionType": "Ordering",
    "correctAnswerRaw": "D > C > F > A > E > B",
    "explanation": "Correct Answer: D > C > F > A > E > B\n\nCorrect order: 1. Generate a public/private key pair \u2014 the private key stays secret while the public key will be certified.\n2. Create a certificate signing request containing the public key \u2014 the CSR carries the public key and identifying\ndetails. 3. Submit the CSR to the certificate authority \u2014 the request goes to the CA for processing. 4. The CA validates\nthe requester's identity \u2014 the CA or its registration authority confirms who is asking. 5. The CA issues the signed\ndigital certificate \u2014 the CA binds the identity to the public key with its signature. 6. Install the certificate on the server\n\u2014 the server can now present the trusted certificate to clients.",
    "question": "Arrange the steps to obtain and deploy a digital certificate in the correct order. Place the following in the correct order:",
    "orderingItems": [
      {
        "letter": "A",
        "text": "The CA validates the requester's identity"
      },
      {
        "letter": "B",
        "text": "Install the certificate on the server"
      },
      {
        "letter": "C",
        "text": "Create a certificate signing request containing the public key"
      },
      {
        "letter": "D",
        "text": "Generate a public/private key pair"
      },
      {
        "letter": "E",
        "text": "The CA issues the signed digital certificate"
      },
      {
        "letter": "F",
        "text": "Submit the CSR to the certificate authority"
      }
    ],
    "correctOrder": [
      "D",
      "C",
      "F",
      "A",
      "E",
      "B"
    ],
    "options": [
      "A. The CA validates the requester's identity",
      "B. Install the certificate on the server",
      "C. Create a certificate signing request containing the public key",
      "D. Generate a public/private key pair",
      "E. The CA issues the signed digital certificate",
      "F. Submit the CSR to the certificate authority"
    ],
    "correctOption": 0,
    "domainId": 1,
    "domain": "Domain 1: General Security Concepts",
    "objective": "1.1-1.4 Security Controls, Cryptography, Identity & Access Management"
  },
  {
    "id": "e1-q72",
    "examSet": "Practice Exam 1",
    "examNum": 1,
    "questionNumber": 72,
    "questionType": "Matching",
    "correctAnswerRaw": "1 = D; 2 = C; 3 = A; 4 = B",
    "explanation": "Correct Answer: 1 = D; 2 = C; 3 = A; 4 = B\n\nThe correct mapping is: Brute-force attacks target authentication systems \u2014 systematically attempting password\ncombinations until the correct one is found. Cross-site scripting (XSS) targets web browser sessions \u2014 injecting\nmalicious scripts into trusted web pages that execute in victims' browsers, stealing session tokens or credentials. ARP\nspoofing targets LAN devices \u2014 the attacker sends fake ARP replies to associate their MAC address with a legitimate\nIP, enabling man-in-the-middle attacks on local network traffic. Phishing targets email recipients \u2014 crafting deceptive\nmessages to trick users into revealing credentials or clicking malicious links. Each attack exploits a fundamentally\ndifferent layer or communication channel.",
    "question": "Match each attack technique with its target.",
    "matchingItems": [
      {
        "num": 1,
        "text": "Brute-force",
        "correctLetter": "D"
      },
      {
        "num": 2,
        "text": "Cross-site scripting (XSS)",
        "correctLetter": "C"
      },
      {
        "num": 3,
        "text": "ARP spoofing",
        "correctLetter": "A"
      },
      {
        "num": 4,
        "text": "Phishing",
        "correctLetter": "B"
      }
    ],
    "matchingDescriptions": [
      {
        "letter": "A",
        "text": "LAN devices"
      },
      {
        "letter": "B",
        "text": "Email recipients"
      },
      {
        "letter": "C",
        "text": "Web browser sessions"
      },
      {
        "letter": "D",
        "text": "Authentication systems"
      }
    ],
    "correctMapping": {
      "1": "D",
      "2": "C",
      "3": "A",
      "4": "B"
    },
    "options": [
      "A. LAN devices",
      "B. Email recipients",
      "C. Web browser sessions",
      "D. Authentication systems"
    ],
    "correctOption": 0,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e1-q73",
    "examSet": "Practice Exam 1",
    "examNum": 1,
    "questionNumber": 73,
    "questionType": "Matching",
    "correctAnswerRaw": "1 = A; 2 = B; 3 = D; 4 = C",
    "explanation": "Correct Answer: 1 = A; 2 = B; 3 = D; 4 = C\n\nHTTPS matches \"Encrypt web-based communications\" because it wraps HTTP traffic inside TLS, providing\nconfidentiality and integrity for browser-to-server exchanges. SFTP matches \"Provide encrypted file transfer\" since\nSFTP runs file transfer operations over an SSH tunnel on port 22. SNMPv3 matches \"Secure monitoring of network\ndevices\" because it adds authentication and encryption to SNMP-based management, unlike v1 and v2c which are\ncleartext. TLS matches \"Add confidentiality to legacy apps,\" because TLS can be used as a generic transport wrapper\nto protect traffic from protocols that do not have built-in encryption (e.g., via TLS-enabled SMTP, LDAPS, FTPS, or\nstunnel wrappers).",
    "question": "Match each secure protocol with its purpose.",
    "matchingItems": [
      {
        "num": 1,
        "text": "HTTPS",
        "correctLetter": "A"
      },
      {
        "num": 2,
        "text": "SFTP",
        "correctLetter": "B"
      },
      {
        "num": 3,
        "text": "SNMPv3",
        "correctLetter": "D"
      },
      {
        "num": 4,
        "text": "TLS",
        "correctLetter": "C"
      }
    ],
    "matchingDescriptions": [
      {
        "letter": "A",
        "text": "Encrypt web-based communications"
      },
      {
        "letter": "B",
        "text": "Provide encrypted file transfer"
      },
      {
        "letter": "C",
        "text": "Add confidentiality to legacy apps"
      },
      {
        "letter": "D",
        "text": "Secure monitoring of network devices"
      }
    ],
    "correctMapping": {
      "1": "A",
      "2": "B",
      "3": "D",
      "4": "C"
    },
    "options": [
      "A. Encrypt web-based communications",
      "B. Provide encrypted file transfer",
      "C. Add confidentiality to legacy apps",
      "D. Secure monitoring of network devices"
    ],
    "correctOption": 0,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e1-q74",
    "examSet": "Practice Exam 1",
    "examNum": 1,
    "questionNumber": 74,
    "questionType": "Ordering",
    "correctAnswerRaw": "B > D > A > E > C",
    "explanation": "Correct Answer: B > D > A > E > C\n\nCorrect order: 1. A subject requests access to a resource \u2014 the flow begins with the user or system asking for access.\n2. The policy enforcement point intercepts the request \u2014 the PEP stops the request rather than allowing implicit trust.\n3. The policy engine evaluates identity, device posture, and context \u2014 the engine makes the access decision. 4. The\npolicy administrator issues or denies session credentials based on the decision \u2014 it carries the decision out. 5. The\nenforcement point grants access and the session is logged \u2014 access is allowed only after verification, and activity is\nrecorded.",
    "question": "Arrange the events of a Zero Trust access request in the order they occur. Place the following in the correct order:",
    "orderingItems": [
      {
        "letter": "A",
        "text": "The policy engine evaluates identity, device posture, and context"
      },
      {
        "letter": "B",
        "text": "A subject requests access to a resource"
      },
      {
        "letter": "C",
        "text": "The enforcement point grants access and the session is logged"
      },
      {
        "letter": "D",
        "text": "The policy enforcement point intercepts the request"
      },
      {
        "letter": "E",
        "text": "The policy administrator issues or denies session credentials based on the decision"
      }
    ],
    "correctOrder": [
      "B",
      "D",
      "A",
      "E",
      "C"
    ],
    "options": [
      "A. The policy engine evaluates identity, device posture, and context",
      "B. A subject requests access to a resource",
      "C. The enforcement point grants access and the session is logged",
      "D. The policy enforcement point intercepts the request",
      "E. The policy administrator issues or denies session credentials based on the decision"
    ],
    "correctOption": 0,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e1-q75",
    "examSet": "Practice Exam 1",
    "examNum": 1,
    "questionNumber": 75,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "D",
    "explanation": "Correct Answer: D\n\nD. Write blocker is correct. A write blocker sits between the investigator's system and the source drive and permits\nread-only access, preventing any write from altering the original media during acquisition. This preserves evidence\nintegrity and keeps the forensic hash of the copy identical to the source. A. Firewall rule is incorrect. Firewall rules filter\nnetwork traffic; they play no role in preserving the state of acquired storage media. B. Tokenization is incorrect.\nTokenization substitutes sensitive values with non-sensitive references to protect data in use; it is not an\nacquisition-integrity control. C. EDR alert is incorrect. An endpoint detection and response alert flags suspicious\nactivity but does nothing to guarantee that acquired evidence remains unmodified.",
    "question": "Which of the following best supports forensic evidence integrity during acquisition?",
    "options": [
      "Firewall rule",
      "Tokenization",
      "EDR alert",
      "Write blocker"
    ],
    "correctOption": 3,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e1-q76",
    "examSet": "Practice Exam 1",
    "examNum": 1,
    "questionNumber": 76,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "D",
    "explanation": "Correct Answer: D\n\nC. Packet sniffer is incorrect. A packet sniffer captures raw network traffic but requires manual analysis to identify\nbehavioral patterns \u2014 it lacks the analytical intelligence to automatically detect unusual connection patterns across\nmany hosts. B. SIEM is incorrect. A SIEM correlates log data and generates alerts but focuses on events rather than\nper-user or per-host behavioral baselines \u2014 it is less targeted at behavioral anomalies in outbound connections. A.\nIDS is incorrect. An IDS detects known attack signatures or statistical anomalies but is not specifically designed to\nprofile individual host behavior over time. D. UEBA is correct. User and Entity Behavior Analytics builds baseline\nbehavioral profiles for users and hosts, then detects deviations \u2014 such as unusual outbound connections at atypical\ntimes or to unusual destinations \u2014 that suggest compromise, insider threat, or data exfiltration.",
    "question": "Which technology is specifically designed to establish behavioral baselines for individual hosts over time\nand flag outbound connections that deviate from those baselines?",
    "options": [
      "IDS",
      "SIEM",
      "Packet sniffer",
      "UEBA"
    ],
    "correctOption": 3,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e1-q77",
    "examSet": "Practice Exam 1",
    "examNum": 1,
    "questionNumber": 77,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "A",
    "explanation": "Correct Answer: A\n\nC. Compliance is incorrect: it describes adherence to laws and standards, not a category of data itself. A. Financial\ninformation is correct: it is a recognized data type that organizations classify and protect, alongside types such as\nregulated data, trade secrets, intellectual property, and legal information. D. Tactical is incorrect: it describes a\nplanning or intelligence level, not a data type. B. Strategic is incorrect for the same reason: it characterizes planning\nhorizons, not a category of data.",
    "question": "When classifying data for protection, which of the following is a recognized data type?",
    "options": [
      "Financial information",
      "Strategic",
      "Compliance",
      "Tactical"
    ],
    "correctOption": 0,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e1-q78",
    "examSet": "Practice Exam 1",
    "examNum": 1,
    "questionNumber": 78,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "B",
    "explanation": "Correct Answer: B\n\nA. RPO (Recovery Point Objective) is incorrect. RPO defines the maximum acceptable amount of data loss measured\nin time (how far back you must be able to recover), not the acceptable downtime. C. MTBF (Mean Time Between\nFailures) is incorrect. MTBF is a reliability metric estimating the average time between failures of a system, not a target\nfor tolerable downtime. D. MTTR (Mean Time To Repair) is incorrect. MTTR is the average time actually taken to\nrepair a failed component; it is a measured value, not the defined acceptable-downtime objective. B. RTO (Recovery\nTime Objective) is correct. RTO specifies the maximum acceptable length of time a system or application can be down\nbefore it must be restored, making it the metric that defines acceptable downtime.",
    "question": "Fill in the blank: The __________ defines the acceptable amount of downtime for a system or application.",
    "options": [
      "RPO (Recovery Point Objective)",
      "RTO (Recovery Time Objective)",
      "MTBF (Mean Time Between Failures)",
      "MTTR (Mean Time To Repair)"
    ],
    "correctOption": 1,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e1-q79",
    "examSet": "Practice Exam 1",
    "examNum": 1,
    "questionNumber": 79,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "A",
    "explanation": "Correct Answer: A\n\nD. Risk mitigation is incorrect. Mitigation applies a control to reduce likelihood or impact, but here the manager\ndeliberately applies no fix. B. Risk transfer is incorrect. Transfer moves the impact to a third party (for example,\ninsurance); the organization keeps the risk itself in this scenario. C. Risk avoidance is incorrect. Avoidance would\nmean discontinuing the activity to eliminate the risk entirely, which is not what happens here. A. Risk acceptance is\ncorrect. Judging exploitation unlikely and the fix too costly, the manager knowingly chooses to leave the issue\nunpatched and live with the residual risk - the definition of accepting a risk.",
    "question": "A manager decides not to patch a minor issue because exploitation is unlikely and mitigation is costly. This\nis an example of:",
    "options": [
      "Risk acceptance",
      "Risk transfer",
      "Risk avoidance",
      "Risk mitigation"
    ],
    "correctOption": 0,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e1-q80",
    "examSet": "Practice Exam 1",
    "examNum": 1,
    "questionNumber": 80,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "C",
    "explanation": "Correct Answer: C\n\nD. To define remote access and VPN client configuration standards is incorrect. Remote access settings and VPN\nclient requirements are specified in a remote access policy and its technical standards, not in an AUP. C. To outline\nresponsible use of organizational resources is correct. An Acceptable Use Policy defines how employees may and\nmay not use organizational systems, networks, and data, setting expectations for appropriate conduct. A. To assign\nrisk ratings to information systems is incorrect. Assigning risk ratings is part of risk assessment and system\ncategorization, not the purpose of an AUP. B. To verify endpoint health before network access is incorrect. Checking\ndevice posture before admission is performed by NAC or endpoint compliance tooling, not by an AUP.",
    "question": "What is the function of an Acceptable Use Policy (AUP)?",
    "options": [
      "To assign risk ratings to information systems",
      "To verify endpoint health before network access",
      "To outline responsible use of organizational resources",
      "To define remote access and VPN client configuration standards"
    ],
    "correctOption": 2,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e1-q81",
    "examSet": "Practice Exam 1",
    "examNum": 1,
    "questionNumber": 81,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "A",
    "explanation": "Correct Answer: A\n\nD. DNS query log is incorrect. DNS query logs record domain name lookups and are useful for tracking\ncommand-and-control or data-exfiltration domains, not for tracing how a specific user account was used. A.\nAuthentication log is correct. Investigating account misuse centers on who logged in, when, from where, and whether\nattempts succeeded or failed - exactly the events (logons, logoffs, failed authentications, privilege use) captured in\nauthentication logs. C. Network flow log is incorrect. Flow logs summarize traffic between hosts (addresses, ports,\nvolume) but do not tie activity to a user account's authentication events. B. Email delivery log is incorrect. Email\ndelivery logs track message routing and delivery status, which is unrelated to how an account was authenticated or\nmisused.",
    "question": "Which log type is most relevant during user account misuse investigation?",
    "options": [
      "Authentication log",
      "Email delivery log",
      "Network flow log",
      "DNS query log"
    ],
    "correctOption": 0,
    "isMultiSelect": false,
    "domainId": 4,
    "domain": "Domain 4: Security Operations",
    "objective": "4.1-4.4 Security Operations, Monitoring, Incident Response & Forensics"
  },
  {
    "id": "e1-q82",
    "examSet": "Practice Exam 1",
    "examNum": 1,
    "questionNumber": 82,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "B",
    "explanation": "Correct Answer: B\n\nA. A certificate authority (CA) issues and signs certificates; it is not itself the public directory used to view certificate\nstatus. B. Correct \u2014 a certificate repository (CR) is a publicly accessible, centralized directory of digital certificates that\ncan be used to view their status. C. \"CB\" is not a recognized term for a certificate directory. D. \"CX\" is not a recognized\nterm for a certificate directory.",
    "question": "What is a publicly accessible centralized directory of digital certificates that can be used to view the status\nof a digital certificate?",
    "options": [
      "CA",
      "CR",
      "CB",
      "CX"
    ],
    "correctOption": 1,
    "isMultiSelect": false,
    "domainId": 1,
    "domain": "Domain 1: General Security Concepts",
    "objective": "1.1-1.4 Security Controls, Cryptography, Identity & Access Management"
  },
  {
    "id": "e1-q83",
    "examSet": "Practice Exam 1",
    "examNum": 1,
    "questionNumber": 83,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "A",
    "explanation": "Correct Answer: A\n\nA is correct (Just-in-time elevation using ephemeral credentials from a PAM vault): privileged access management\ntools grant elevated rights only for an approved task and issue short-lived credentials that expire when the session\nends, removing standing privileges and shrinking the window an attacker could use. C is incorrect (shared\nadministrator account with 90-day expiration) because a shared account is a standing privilege that destroys\naccountability, and its credential stays usable for months. B is incorrect (permanent domain administrators\nmembership with MFA) because MFA hardens the login, but the privilege is always present, so a hijacked session or\nan insider holds domain rights around the clock. D is incorrect (role-based access control with time-of-day restrictions)\nbecause the role still carries standing rights during the allowed hours and the credentials never expire.",
    "question": "Five administrators need domain-level privileges a few times each month for maintenance windows. The\nCISO wants no standing administrative accounts and requires that any elevated credential be issued only\nfor an approved task and become unusable automatically when the task ends. Which approach BEST\nmeets these requirements?",
    "options": [
      "Just-in-time elevation using ephemeral credentials from a PAM vault",
      "Permanent membership in the domain administrators group protected by multifactor authentication",
      "A shared administrator account protected by a 90-day password expiration policy",
      "Role-based access control combined with time-of-day login restrictions"
    ],
    "correctOption": 0,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e1-q84",
    "examSet": "Practice Exam 1",
    "examNum": 1,
    "questionNumber": 84,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "B",
    "explanation": "Correct Answer: B\n\nC. NDA is incorrect: a non-disclosure agreement protects confidential information exchanged between the parties and\ndoes not define service levels. A. MOU is incorrect: a memorandum of understanding records a general, often\nnon-binding, mutual intent and does not set measurable performance targets. B. SLA is correct: a service-level\nagreement defines measurable service requirements such as response times, availability, and performance targets\nthat the provider must meet. D. AUP is incorrect: an acceptable use policy governs how users may use organizational\nsystems, not a third party's service commitments.",
    "question": "A company is outsourcing log analysis to a third-party provider. Which document should define\nmeasurable service requirements, such as analysis response times, availability, and performance targets?",
    "options": [
      "MOU",
      "SLA",
      "NDA",
      "AUP"
    ],
    "correctOption": 1,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e1-q85",
    "examSet": "Practice Exam 1",
    "examNum": 1,
    "questionNumber": 85,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "B",
    "explanation": "Correct Answer: B\n\nB (Logic bomb) is correct: a logic bomb is malicious code planted inside a system that stays inert until a trigger fires,\nsuch as a date, a specific event, or an account disappearing from the payroll file, and only then deletes data or\ncorrupts systems. D (Worm) is incorrect because a worm is defined by self-replication and autonomous spread across\nnetworks, acting immediately rather than waiting on a condition. C (Rootkit) is incorrect because a rootkit works\ncontinuously to hide an attacker's presence and maintain privileged access, rather than lying dormant. A (Dropper) is\nincorrect because a dropper is the delivery component that installs or downloads its payload as soon as it runs.",
    "question": "A __________ is a piece of code that lies dormant until triggered by a specific condition or time.",
    "options": [
      "Dropper",
      "Logic bomb",
      "Rootkit",
      "Worm"
    ],
    "correctOption": 1,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e1-q86",
    "examSet": "Practice Exam 1",
    "examNum": 1,
    "questionNumber": 86,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "A",
    "explanation": "Correct Answer: A\n\nA. Digital signature is correct: Bob signs the message with his private key, so Alice can verify with Bob's public key that\nthis specific message originated from Bob and was not altered, which also supports non-repudiation. D. 'Encrypted\nsignature' is incorrect because it is not a standard cryptographic mechanism. C. A digest is incorrect because a hash\nalone proves only integrity; anyone could compute it, so it says nothing about who sent the message. B. A digital\ncertificate is incorrect because it only binds Bob's identity to his public key; by itself it provides no evidence about who\ncreated or sent a particular message.",
    "question": "Bob sends Alice a message. Which of the following gives Alice the strongest assurance that this specific\nmessage was created and sent by Bob?",
    "options": [
      "Digital signature",
      "Digital certificate",
      "Digest",
      "Encrypted signature"
    ],
    "correctOption": 0,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e1-q87",
    "examSet": "Practice Exam 1",
    "examNum": 1,
    "questionNumber": 87,
    "questionType": "Matching",
    "correctAnswerRaw": "1 = B; 2 = A; 3 = D; 4 = C",
    "explanation": "Correct Answer: 1 = B; 2 = A; 3 = D; 4 = C\n\nSQL injection pairs with \"Extract data from backend databases\" because malicious input manipulates SQL queries to\nread, modify, or exfiltrate database content. Cross-site scripting pairs with \"Inject code into a browser session\" since\nXSS places attacker-controlled scripts into a trusted page, running them in the victim's browser to steal cookies or\nperform actions. Directory traversal pairs with \"Gain unauthorized access to file system paths\" because it uses\nsequences like ../ to escape the intended web root and read arbitrary server files. Clickjacking pairs with \"Redirect\nusers into clicking hidden UI elements,\" tricking users with transparent overlays so their clicks are captured by an\nattacker-controlled element.",
    "question": "Match each web attack with its primary goal.",
    "matchingItems": [
      {
        "num": 1,
        "text": "SQL injection",
        "correctLetter": "B"
      },
      {
        "num": 2,
        "text": "Cross-site scripting",
        "correctLetter": "A"
      },
      {
        "num": 3,
        "text": "Directory traversal",
        "correctLetter": "D"
      },
      {
        "num": 4,
        "text": "Clickjacking",
        "correctLetter": "C"
      }
    ],
    "matchingDescriptions": [
      {
        "letter": "A",
        "text": "Inject code into a browser session"
      },
      {
        "letter": "B",
        "text": "Extract data from backend databases"
      },
      {
        "letter": "C",
        "text": "Redirect users into clicking hidden UI elements"
      },
      {
        "letter": "D",
        "text": "Gain unauthorized access to file system paths"
      }
    ],
    "correctMapping": {
      "1": "B",
      "2": "A",
      "3": "D",
      "4": "C"
    },
    "options": [
      "A. Inject code into a browser session",
      "B. Extract data from backend databases",
      "C. Redirect users into clicking hidden UI elements",
      "D. Gain unauthorized access to file system paths"
    ],
    "correctOption": 0,
    "domainId": 2,
    "domain": "Domain 2: Threats, Vulnerabilities & Mitigations",
    "objective": "2.1-2.4 Threats, Vulnerabilities, Attack Vectors & Mitigations"
  },
  {
    "id": "e1-q88",
    "examSet": "Practice Exam 1",
    "examNum": 1,
    "questionNumber": 88,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "B",
    "explanation": "Correct Answer: B\n\nB (Risk register) is correct: the risk register is the living document that lists every known risk together with its likelihood,\nimpact, owner, current status, treatment plan, and residual risk. Because it records both the risks and how each one\nwill be handled, it is the artifact the blank describes. D (Risk matrix) is incorrect because a matrix, or heat map, is a\nvisual grid that plots likelihood against impact for prioritization; it does not record treatment plans. A (Risk assessment\nreport) is incorrect because an assessment report presents the findings of a single evaluation at a point in time,\nwhereas the register is the ongoing inventory maintained across assessments. C (Business impact analysis) is\nincorrect because a BIA identifies critical business functions and defines metrics such as RTO and RPO; it feeds risk\ndecisions but is not the list of risks and their treatments.",
    "question": "Fill in the blank: The document that lists all known risks and their treatment plans is called a __________.",
    "options": [
      "Risk assessment report",
      "Risk register",
      "Business impact analysis",
      "Risk matrix"
    ],
    "correctOption": 1,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e1-q89",
    "examSet": "Practice Exam 1",
    "examNum": 1,
    "questionNumber": 89,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "B",
    "explanation": "Correct Answer: B\n\nA. Security awareness training is incorrect. Training educates users about threats and policies but does not formally\nverify compliance with laws or controls. D. Policy review is incorrect. A policy review evaluates policy content and\nrelevance, but it does not assess actual operational adherence to laws and regulations. C. Risk assessment is\nincorrect. A risk assessment identifies and rates threats and vulnerabilities; it is not the formal mechanism for verifying\ncompliance. B. Compliance audit is correct. A compliance audit is a formal, evidence-based examination conducted to\nverify that an organization's controls, processes, and records meet legal, regulatory, and internal policy requirements.",
    "question": "Fill in the blank: A __________ audit verifies compliance with laws, regulations, and internal controls.",
    "options": [
      "Security awareness training",
      "Compliance audit",
      "Risk assessment",
      "Policy review"
    ],
    "correctOption": 1,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e1-q90",
    "examSet": "Practice Exam 1",
    "examNum": 1,
    "questionNumber": 90,
    "questionType": "Ordering",
    "correctAnswerRaw": "B > E > D > C > A",
    "explanation": "Correct Answer: B > E > D > C > A\n\nCorrect order: 1. Define the assessment scope and the control objectives the organization must meet \u2014 a gap\nanalysis is measured against a stated target, so the systems in scope and the controls that apply are fixed first. 2.\nReview policies, configurations, and interview technical staff to document the current state \u2014 evidence gathering\nestablishes what the organization actually does, as opposed to what its documents claim. 3. Identify where current\npractice falls short of the required controls \u2014 the gaps emerge from comparing the documented current state against\nthe control objectives, so they cannot be listed before either exists. 4. Remediate the shortfalls, prioritizing them by risk\n\u2014 limited resources go to the gaps with the greatest exposure, which is why the gap list has to come first. 5. Undergo\nthe independent third-party audit and receive the certification decision \u2014 the external audit is scheduled last, because\na gap analysis is run before a formal audit precisely to close weaknesses and avoid surprises in front of the assessor.",
    "question": "A company has committed to earning an external certification against an information security standard within a year. The compliance lead decides to run a gap analysis before the certification audit is booked. Arrange the activities in the order they should be performed. Place the following in the correct order:",
    "orderingItems": [
      {
        "letter": "A",
        "text": "Undergo the independent third-party audit and receive the certification decision"
      },
      {
        "letter": "B",
        "text": "Define the assessment scope and the control objectives the organization must meet"
      },
      {
        "letter": "C",
        "text": "Remediate the shortfalls, prioritizing them by risk"
      },
      {
        "letter": "D",
        "text": "Identify where current practice falls short of the required controls"
      },
      {
        "letter": "E",
        "text": "Review policies, configurations, and interview technical staff to document the current state"
      }
    ],
    "correctOrder": [
      "B",
      "E",
      "D",
      "C",
      "A"
    ],
    "options": [
      "A. Undergo the independent third-party audit and receive the certification decision",
      "B. Define the assessment scope and the control objectives the organization must meet",
      "C. Remediate the shortfalls, prioritizing them by risk",
      "D. Identify where current practice falls short of the required controls",
      "E. Review policies, configurations, and interview technical staff to document the current state"
    ],
    "correctOption": 0,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e2-q01",
    "examSet": "Practice Exam 2",
    "examNum": 2,
    "questionNumber": 1,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "A",
    "explanation": "Correct Answer: A\n\nB. RTS/CTS replay attack is incorrect because it abuses the 802.11 request-to-send/clear-to-send control-frame\nexchange to reserve the medium and starve legitimate stations, which is protocol manipulation rather than raw\ninterference. C. Duration field values attack is incorrect because it forges inflated duration values so other stations set\ntheir network allocation vector and defer transmission, again abusing a protocol field. D. Disassociation attack is\nincorrect because it spoofs 802.11 management frames to disconnect clients from the access point. A. Jamming is\ncorrect: it floods the frequency band with radio noise at Layer 1, denying service through interference without touching\n802.11 frames or fields.",
    "question": "Which of the following wireless denial-of-service techniques uses Layer 1 radio-frequency interference\nrather than manipulating 802.11 frames or protocol fields?",
    "options": [
      "Jamming",
      "RTS/CTS replay attack",
      "Duration field values attack",
      "Disassociation attack"
    ],
    "correctOption": 0,
    "isMultiSelect": false,
    "domainId": 1,
    "domain": "Domain 1: General Security Concepts",
    "objective": "1.1-1.4 Security Controls, Cryptography, Identity & Access Management"
  },
  {
    "id": "e2-q02",
    "examSet": "Practice Exam 2",
    "examNum": 2,
    "questionNumber": 2,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "B",
    "explanation": "Correct Answer: B\n\nC. Sensitivity level is incorrect. Sensitivity level controls the depth and intrusiveness of the scan (e.g., safe vs.\naggressive checks), not which assets are included. D. Region is incorrect. Region is not a standard vulnerability scan\nparameter; it is not used to define which specific devices are targeted. B. Scope is correct. The scope parameter\ndefines exactly which hosts, IP ranges, or network segments are included in the vulnerability scan, ensuring only\nauthorized targets are assessed. A. NET-SCAN is incorrect. NET-SCAN is not a recognized vulnerability scanning\nparameter; it does not exist as a standard configuration option.",
    "question": "Borysko needs to specify which devices need to be included in the next vulnerability scan. What parameter\nmust he set?",
    "options": [
      "NET-SCAN",
      "Scope",
      "Sensitivity level",
      "Region"
    ],
    "correctOption": 1,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e2-q03",
    "examSet": "Practice Exam 2",
    "examNum": 2,
    "questionNumber": 3,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "A",
    "explanation": "Correct Answer: A\n\nB. Review lessons learned is incorrect. Lessons learned reviews happen after an incident or after a BCP exercise \u2014\nthey require an existing plan and cannot be the starting point for building one. A. Perform a business impact analysis is\ncorrect. A BIA is the mandatory first step in BCP. It identifies critical business functions, their dependencies, and the\nfinancial and operational consequences of disruption \u2014 generating the RTO and RPO values that drive all subsequent\nrecovery strategy decisions. D. Conduct employee training is incorrect. Training is essential but occurs after the plan\nexists \u2014 you cannot train people to execute a plan that hasn't been created yet. C. Develop technical playbooks is\nincorrect. Playbooks are procedural documents built after the BIA determines which functions need protection and at\nwhat recovery speed.",
    "question": "Your organization is developing its first business continuity plan. What is the FIRST step?",
    "options": [
      "Perform a business impact analysis",
      "Review lessons learned",
      "Develop technical playbooks",
      "Conduct employee training"
    ],
    "correctOption": 0,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e2-q04",
    "examSet": "Practice Exam 2",
    "examNum": 2,
    "questionNumber": 4,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "D",
    "explanation": "Correct Answer: D\n\nA. Router is incorrect because a router is a network device that can be configured with access control lists and traffic\nfiltering to provide security protection. C. Switch is incorrect because a switch is a network device that supports\nprotections such as port security and 802.1X authentication. D. Endpoint is correct because an endpoint (such as a\nworkstation or mobile device) is a host that connects to the network; it is not a network device that provides security\nprotection for network traffic. B. Firewall is incorrect because a firewall is the classic network device dedicated to\nfiltering and protecting network traffic.",
    "question": "Which of the following is NOT a common network device that can be configured to provide a degree of\nsecurity protection?",
    "options": [
      "Router",
      "Firewall",
      "Switch",
      "Endpoint"
    ],
    "correctOption": 3,
    "isMultiSelect": false,
    "domainId": 3,
    "domain": "Domain 3: Security Architecture",
    "objective": "3.1-3.4 Security Architecture, Cloud, Infrastructure & Resilience"
  },
  {
    "id": "e2-q05",
    "examSet": "Practice Exam 2",
    "examNum": 2,
    "questionNumber": 5,
    "questionType": "Matching",
    "correctAnswerRaw": "1 = B; 2 = C; 3 = B; 4 = A",
    "explanation": "Correct Answer: 1 = B; 2 = C; 3 = B; 4 = A\n\nThe correct mapping is: Data encryption maps to Confidentiality because it prevents unauthorized parties from reading\nsensitive data. System uptime monitoring maps to Availability because it ensures services remain accessible and\ndowntime is detected promptly. Access control lists that restrict read access map to Confidentiality because they\ncontrol who can view specific resources, preventing unauthorized disclosure. File integrity checking maps to Integrity\nbecause hash comparison detects unauthorized modifications, confirming data has not been altered. Note that both\nencryption and read-access ACLs support Confidentiality through different mechanisms.",
    "question": "Match each concept to its appropriate CIA Triad component. Note: the same description may apply to more than one item.",
    "matchingItems": [
      {
        "num": 1,
        "text": "Data encryption",
        "correctLetter": "B"
      },
      {
        "num": 2,
        "text": "System uptime monitoring",
        "correctLetter": "C"
      },
      {
        "num": 3,
        "text": "Access control lists that restrict read access to sensitive files",
        "correctLetter": "B"
      },
      {
        "num": 4,
        "text": "File integrity checking",
        "correctLetter": "A"
      }
    ],
    "matchingDescriptions": [
      {
        "letter": "A",
        "text": "Integrity"
      },
      {
        "letter": "B",
        "text": "Confidentiality"
      },
      {
        "letter": "C",
        "text": "Availability"
      }
    ],
    "correctMapping": {
      "1": "B",
      "2": "C",
      "3": "B",
      "4": "A"
    },
    "options": [
      "A. Integrity",
      "B. Confidentiality",
      "C. Availability"
    ],
    "correctOption": 0,
    "domainId": 4,
    "domain": "Domain 4: Security Operations",
    "objective": "4.1-4.4 Security Operations, Monitoring, Incident Response & Forensics"
  },
  {
    "id": "e2-q06",
    "examSet": "Practice Exam 2",
    "examNum": 2,
    "questionNumber": 6,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "A",
    "explanation": "Correct Answer: A\n\nB. Blacklisting is more secure is incorrect. Blacklisting only blocks known-bad items, so unknown or new malware can\nstill run. C. Whitelisting blocks known bad apps only is incorrect. This reverses the model; blocking known-bad is\nblacklisting. A. Whitelisting allows only explicitly approved apps is correct. Application allowlisting (whitelisting) runs in\ndefault-deny mode, permitting execution only of applications that have been explicitly vetted and approved. D.\nBlacklisting restricts apps based on file size is incorrect. File size has no bearing on allow/deny decisions; listing is by\napplication identity, not size.",
    "question": "What is the primary difference between whitelisting and blacklisting applications?",
    "options": [
      "Whitelisting allows only explicitly approved apps",
      "Blacklisting is more secure",
      "Whitelisting blocks known bad apps only",
      "Blacklisting restricts apps based on file size"
    ],
    "correctOption": 0,
    "isMultiSelect": false,
    "domainId": 1,
    "domain": "Domain 1: General Security Concepts",
    "objective": "1.1-1.4 Security Controls, Cryptography, Identity & Access Management"
  },
  {
    "id": "e2-q07",
    "examSet": "Practice Exam 2",
    "examNum": 2,
    "questionNumber": 7,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "A",
    "explanation": "Correct Answer: A\n\nA (Least privilege) is correct: granting a guest account full disk access hands it far more rights than its role could ever\nrequire, and least privilege demands that every account get only the minimum access needed for its job. B (Zero trust)\nis incorrect because zero trust is a broad architecture of continuous verification and no implicit trust; what failed here is\nthe size of the grant, not the verification of a request. D (Defense in depth) is incorrect because that concerns layering\nmultiple overlapping controls, and nothing in the scenario says other layers were removed. C (Separation of duties) is\nincorrect because it splits a sensitive process among several people to prevent fraud; a single over-broad permission\nwas assigned, not a pair of conflicting duties.",
    "question": "A junior admin accidentally granted full disk access to a guest user. Which principle was most clearly\nviolated?",
    "options": [
      "Least privilege",
      "Zero trust",
      "Separation of duties",
      "Defense in depth"
    ],
    "correctOption": 0,
    "isMultiSelect": false,
    "domainId": 3,
    "domain": "Domain 3: Security Architecture",
    "objective": "3.1-3.4 Security Architecture, Cloud, Infrastructure & Resilience"
  },
  {
    "id": "e2-q08",
    "examSet": "Practice Exam 2",
    "examNum": 2,
    "questionNumber": 8,
    "questionType": "Matching",
    "correctAnswerRaw": "1 = F; 2 = C; 3 = B; 4 = E",
    "explanation": "Correct Answer: 1 = F; 2 = C; 3 = B; 4 = E\n\n1 \u2192 F (Technical): a next-generation firewall enforces protection through technology. 2 \u2192 C (Managerial): approving a\nrisk assessment and security policy is governance and oversight of the program. 3 \u2192 B (Operational): help-desk staff\nfollowing a documented identity-verification procedure before a password reset is a day-to-day task carried out by\npeople. 4 \u2192 E (Physical): chain-link fencing is a tangible barrier protecting the facility. Unused: D (Compensating) \u2014\nno substitute-for-a-missing-control is shown; A (Deterrent) \u2014 deterrent is a control type, not one of the four categories\nbeing sorted here.",
    "question": "Assign each item to the correct control category.",
    "matchingItems": [
      {
        "num": 1,
        "text": "A next-generation firewall filtering traffic",
        "correctLetter": "F"
      },
      {
        "num": 2,
        "text": "Approving a risk assessment and security policy",
        "correctLetter": "C"
      },
      {
        "num": 3,
        "text": "Help-desk staff verifying a caller's identity before resetting a password, per procedure",
        "correctLetter": "B"
      },
      {
        "num": 4,
        "text": "Chain-link fencing around the perimeter",
        "correctLetter": "E"
      }
    ],
    "matchingDescriptions": [
      {
        "letter": "A",
        "text": "Deterrent: discourages an attacker from acting"
      },
      {
        "letter": "B",
        "text": "Operational: day-to-day tasks carried out by people"
      },
      {
        "letter": "C",
        "text": "Managerial: policies, planning, and risk oversight"
      },
      {
        "letter": "D",
        "text": "Compensating: a stand-in for an unavailable control"
      },
      {
        "letter": "E",
        "text": "Physical: tangible barriers protecting facilities"
      },
      {
        "letter": "F",
        "text": "Technical: enforced by hardware or software"
      }
    ],
    "correctMapping": {
      "1": "F",
      "2": "C",
      "3": "B",
      "4": "E"
    },
    "options": [
      "A. Deterrent: discourages an attacker from acting",
      "B. Operational: day-to-day tasks carried out by people",
      "C. Managerial: policies, planning, and risk oversight",
      "D. Compensating: a stand-in for an unavailable control",
      "E. Physical: tangible barriers protecting facilities",
      "F. Technical: enforced by hardware or software"
    ],
    "correctOption": 0,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e2-q09",
    "examSet": "Practice Exam 2",
    "examNum": 2,
    "questionNumber": 9,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "A",
    "explanation": "Correct Answer: A\n\nC. GDPR is incorrect. The General Data Protection Regulation governs the privacy of personal data of individuals in\nthe EU, not payment card data specifically. D. FISMA is incorrect. The Federal Information Security Management Act\nsets security requirements for U.S. federal government information systems. A. PCI DSS is correct. The Payment Card\nIndustry Data Security Standard is the industry standard that defines how organizations must protect cardholder data\nwhen they store, process, or transmit payment card information. B. HIPAA is incorrect. The Health Insurance\nPortability and Accountability Act protects the privacy and security of health information, not cardholder data.",
    "question": "Which compliance standard is focused on cardholder data security?",
    "options": [
      "PCI DSS",
      "HIPAA",
      "GDPR",
      "FISMA"
    ],
    "correctOption": 0,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e2-q10",
    "examSet": "Practice Exam 2",
    "examNum": 2,
    "questionNumber": 10,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "C",
    "explanation": "Correct Answer: C\n\nC (It is designed to replace asset management.) is correct: the question asks what Aristide would NOT say, and this\nstatement is false. Cybersecurity asset management (CAM) does not replace traditional asset management; it builds\non it by adding a security perspective so that every hardware, software, and data asset is not only tracked but also\nassessed for risk. D (It is a relatively new process that combines asset management with information security.) is\nincorrect as an answer because that is exactly what CAM is. A (It can identify assets on a continuous and real-time\nbasis.) is incorrect as an answer because CAM continuously discovers and monitors connected devices. B (It can use\nvulnerability scanners.) is incorrect as an answer because CAM draws on vulnerability scanners and similar tools to\nenumerate assets and identify their weaknesses.",
    "question": "Aristide is explaining to a coworker the new cybersecurity asset management (CAM) system. Which of the\nfollowing would he NOT say about a CAM?",
    "options": [
      "It can identify assets on a continuous and real-time basis.",
      "It can use vulnerability scanners.",
      "It is designed to replace asset management.",
      "It is a relatively new process that combines asset management with information security."
    ],
    "correctOption": 2,
    "isMultiSelect": false,
    "domainId": 2,
    "domain": "Domain 2: Threats, Vulnerabilities & Mitigations",
    "objective": "2.1-2.4 Threats, Vulnerabilities, Attack Vectors & Mitigations"
  },
  {
    "id": "e2-q11",
    "examSet": "Practice Exam 2",
    "examNum": 2,
    "questionNumber": 11,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "A",
    "explanation": "Correct Answer: A\n\nC. Vishing is incorrect because it is conducted through voice calls, not email. B. Smishing is incorrect because it uses\nSMS text messages as the delivery vector, not email. D. Watering hole is incorrect because that attack compromises a\nlegitimate website the intended victims routinely visit; it does not start with a deceptive email. A. Phishing is correct: a\ndeceptive email that directs the recipient to a fake sign-in page to steal credentials is a classic phishing attack.",
    "question": "A senior vice president of finance receives a deceptive email directing the recipient to a fake sign-in page\ndesigned to steal credentials. Which human-vector attack is this?",
    "options": [
      "Phishing",
      "Smishing",
      "Vishing",
      "Watering hole"
    ],
    "correctOption": 0,
    "isMultiSelect": false,
    "domainId": 2,
    "domain": "Domain 2: Threats, Vulnerabilities & Mitigations",
    "objective": "2.1-2.4 Threats, Vulnerabilities, Attack Vectors & Mitigations"
  },
  {
    "id": "e2-q12",
    "examSet": "Practice Exam 2",
    "examNum": 2,
    "questionNumber": 12,
    "questionType": "Matching",
    "correctAnswerRaw": "1 = C; 2 = B; 3 = A; 4 = D",
    "explanation": "Correct Answer: 1 = C; 2 = B; 3 = A; 4 = D\n\nThe correct pairings are: SOP = Step-by-step operational guidance; Risk register = Lists and tracks organizational\nrisks; SLA = Defines service performance expectations; DRP = Plans for recovery after disruption. An SOP (Standard\nOperating Procedure) provides detailed, sequential instructions for performing specific tasks consistently and in\ncompliance with policy. A risk register is a living document recording identified risks along with their likelihood, impact\nrating, owner, and treatment status. An SLA (Service Level Agreement) defines measurable performance\ncommitments \u2014 such as 99.9% uptime or 4-hour support response \u2014 between a provider and customer. A DRP\n(Disaster Recovery Plan) documents procedures to restore IT systems and data after a major outage or disaster.",
    "question": "Match each documentation type with its purpose.",
    "matchingItems": [
      {
        "num": 1,
        "text": "SOP",
        "correctLetter": "C"
      },
      {
        "num": 2,
        "text": "Risk register",
        "correctLetter": "B"
      },
      {
        "num": 3,
        "text": "SLA",
        "correctLetter": "A"
      },
      {
        "num": 4,
        "text": "DRP",
        "correctLetter": "D"
      }
    ],
    "matchingDescriptions": [
      {
        "letter": "A",
        "text": "Defines service performance expectations"
      },
      {
        "letter": "B",
        "text": "Lists and tracks organizational risks"
      },
      {
        "letter": "C",
        "text": "Step-by-step operational guidance"
      },
      {
        "letter": "D",
        "text": "Plans for recovery after disruption"
      }
    ],
    "correctMapping": {
      "1": "C",
      "2": "B",
      "3": "A",
      "4": "D"
    },
    "options": [
      "A. Defines service performance expectations",
      "B. Lists and tracks organizational risks",
      "C. Step-by-step operational guidance",
      "D. Plans for recovery after disruption"
    ],
    "correctOption": 0,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e2-q13",
    "examSet": "Practice Exam 2",
    "examNum": 2,
    "questionNumber": 13,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "A",
    "explanation": "Correct Answer: A\n\nC. Filter inbound email attachments and embedded links is incorrect. Attachment filtering is performed by a secure\nemail gateway, not a jump server. D. Enforce mobile device enrollment and compliance policies is incorrect.\nEnrollment and device compliance are the role of an MDM or UEM platform, unrelated to a jump server. A. Isolate\nadministrative access to critical systems is correct. A jump server (jump box) is a hardened, monitored host that\nadministrators must connect through to reach sensitive systems, creating a single controlled chokepoint for privileged\naccess. B. Patch and rebuild the running cloud container images is incorrect. Container patching is handled by image\nbuild pipelines and orchestration, not by a jump server.",
    "question": "What is the primary role of a jump server in a secure architecture?",
    "options": [
      "Isolate administrative access to critical systems",
      "Patch and rebuild the running cloud container images",
      "Filter inbound email attachments and embedded links",
      "Enforce mobile device enrollment and compliance policies"
    ],
    "correctOption": 0,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e2-q14",
    "examSet": "Practice Exam 2",
    "examNum": 2,
    "questionNumber": 14,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "D",
    "explanation": "Correct Answer: D\n\nB. Base score is incorrect. The base score is the overall severity rating derived from combining exploitability and\nimpact factors; it is not the specific measure of how easily the flaw can be exploited. C. Impact score is incorrect. The\nimpact subscore reflects the consequences to confidentiality, integrity, and availability if the vulnerability is exploited,\nnot the ease of exploitation. D. Exploitability subscore is correct. Within CVSS, the exploitability subscore captures\nhow easily a vulnerability can be exploited, based on factors such as attack vector, attack complexity, privileges\nrequired, and user interaction. A. Temporal score is incorrect. The temporal metrics adjust severity over time for\nfactors like exploit code maturity and remediation level; they do not define the baseline ease of exploitation.",
    "question": "Which CVSS metric indicates how easily a vulnerability can be exploited?",
    "options": [
      "Temporal score",
      "Base score",
      "Impact score",
      "Exploitability subscore"
    ],
    "correctOption": 3,
    "isMultiSelect": false,
    "domainId": 4,
    "domain": "Domain 4: Security Operations",
    "objective": "4.1-4.4 Security Operations, Monitoring, Incident Response & Forensics"
  },
  {
    "id": "e2-q15",
    "examSet": "Practice Exam 2",
    "examNum": 2,
    "questionNumber": 15,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "D",
    "explanation": "Correct Answer: D\n\nC. SQL injection is incorrect. SQLi targets backend databases through malicious query input, not the browsers of site\nvisitors. A. Phishing is incorrect. Phishing uses deceptive messages (email, SMS) to lure users; it does not typically\ninject code into a trusted website. B. Social engineering is incorrect. Social engineering is a broad human-targeting\ncategory, not a specific web attack. D. Cross-site scripting (XSS) is correct. XSS works by inserting malicious scripts\ninto pages served by a trusted website; when other users visit the page, their browsers execute the script, enabling\nsession theft or actions on behalf of the victim.",
    "question": "Fill in the blank: __________ is a type of attack where malicious code is inserted into a trusted website to\ntarget its visitors.",
    "options": [
      "Phishing",
      "Social engineering",
      "SQL injection",
      "Cross-site scripting (XSS)"
    ],
    "correctOption": 3,
    "isMultiSelect": false,
    "domainId": 2,
    "domain": "Domain 2: Threats, Vulnerabilities & Mitigations",
    "objective": "2.1-2.4 Threats, Vulnerabilities, Attack Vectors & Mitigations"
  },
  {
    "id": "e2-q16",
    "examSet": "Practice Exam 2",
    "examNum": 2,
    "questionNumber": 16,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "B",
    "explanation": "Correct Answer: B\n\nA. A hot site is incorrect because it is a fully equipped facility with near-real-time data replication, which exceeds the\nstated budget. B. A warm site is correct: it provides power, connectivity, and hardware already in place, while data is\nrestored from backups at failover time, trading some downtime for lower cost. C. A cold site is incorrect because it\noffers only space and utilities, with no server hardware installed. D. A geographically dispersed mirror site is incorrect\nbecause a continuously synchronized duplicate facility is exactly the option the budget rules out.",
    "question": "An organization needs an alternate site that already has power, network connectivity, and server hardware\ninstalled, but data must be restored from backups before operations can resume. The budget does not\nallow a fully synchronized duplicate facility. Which site type should the organization select?",
    "options": [
      "Hot site",
      "Warm site",
      "Cold site",
      "Geographically dispersed mirror site"
    ],
    "correctOption": 1,
    "isMultiSelect": false,
    "domainId": 3,
    "domain": "Domain 3: Security Architecture",
    "objective": "3.1-3.4 Security Architecture, Cloud, Infrastructure & Resilience"
  },
  {
    "id": "e2-q17",
    "examSet": "Practice Exam 2",
    "examNum": 2,
    "questionNumber": 17,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "C",
    "explanation": "Correct Answer: C\n\nD. Detection is incorrect. The detection phase involves identifying that a compromise has occurred \u2014 it precedes any\nremediation action. B. Eradication is incorrect. Eradication focuses on removing the malware, unauthorized accounts,\nor persistence mechanisms \u2014 it does not restore system functionality. C. Recovery is correct. The recovery phase\ninvolves restoring systems to a known-good state so normal operations can resume. Using a gold image (a verified\nclean baseline snapshot) to rebuild a compromised system is a textbook recovery activity. A. Lessons learned is\nincorrect. The lessons learned phase occurs after recovery; it involves reviewing what happened and improving\ncontrols to prevent recurrence.",
    "question": "A system was compromised but restored using a gold image. Which response phase does this represent?",
    "options": [
      "Lessons learned",
      "Eradication",
      "Recovery",
      "Detection"
    ],
    "correctOption": 2,
    "isMultiSelect": false,
    "domainId": 4,
    "domain": "Domain 4: Security Operations",
    "objective": "4.1-4.4 Security Operations, Monitoring, Incident Response & Forensics"
  },
  {
    "id": "e2-q18",
    "examSet": "Practice Exam 2",
    "examNum": 2,
    "questionNumber": 18,
    "questionType": "Select Two",
    "correctAnswerRaw": "D, E",
    "explanation": "Correct Answer: D, E\n\nE and D are correct: disk encryption prevents unauthorized disclosure of data before it can occur, and multifactor\nauthentication prevents unauthorized logins by requiring more than a password. B is incorrect: reviewing\nsecurity-camera footage identifies events after they happen, which is a detective control. C is incorrect: intrusion\ndetection system alerts also detect activity after it begins rather than stopping it, so they are detective. A is incorrect:\nrestoring data from backup repairs damage after an incident, which is a corrective control.",
    "question": "A security architect is labeling controls by type. Which TWO of the following are preventive controls?\n(Select TWO.)",
    "options": [
      "Restoring data from backup",
      "Security camera footage review",
      "Intrusion detection system alerts",
      "Multifactor authentication at login",
      "Disk encryption on laptops"
    ],
    "optionLetters": [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    "isMultiSelect": true,
    "requiredSelectCount": 2,
    "correctOptions": [
      3,
      4
    ],
    "correctLetters": [
      "D",
      "E"
    ],
    "correctOption": 3,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e2-q19",
    "examSet": "Practice Exam 2",
    "examNum": 2,
    "questionNumber": 19,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "A",
    "explanation": "Correct Answer: A\n\nC. CVE is incorrect. CVE (Common Vulnerabilities and Exposures) assigns unique identifiers (e.g., CVE-2024-12345)\nto publicly known vulnerabilities \u2014 it names them but does not score their severity. D. CWE is incorrect. CWE\n(Common Weakness Enumeration) catalogs types of software weaknesses such as buffer overflow or SQL injection \u2014\nit is a classification system, not a severity scoring mechanism. A. CVSS is correct. CVSS (Common Vulnerability\nScoring System) provides a standardized numerical score from 0 to 10 based on exploitability, scope, and impact\nsub-metrics. Organizations and tools like the NVD use CVSS scores to prioritize which vulnerabilities to remediate\nfirst. B. NIST score is incorrect. While NIST's National Vulnerability Database publishes CVSS scores, 'NIST score' is\nnot a recognized scoring system name.",
    "question": "Fill in the blank: The __________ score provides a standardized way to prioritize software vulnerabilities.",
    "options": [
      "CVSS",
      "NIST score",
      "CVE",
      "CWE"
    ],
    "correctOption": 0,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e2-q20",
    "examSet": "Practice Exam 2",
    "examNum": 2,
    "questionNumber": 20,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "D",
    "explanation": "Correct Answer: D\n\nB. Risk transfer is incorrect. Transferring risk shifts the financial impact to a third party, such as buying insurance or\noutsourcing the function; the company here is retaining the risk itself. C. Risk avoidance is incorrect. Avoidance\neliminates the risk by not engaging in the activity at all; the organization continues to operate with the vulnerability in\nplace. D. Risk acceptance is correct. When the cost of remediation outweighs the low potential impact, the\norganization consciously decides to live with the vulnerability rather than spend to fix it - the definition of accepting the\nrisk. A. Risk mitigation is incorrect. Mitigation reduces the likelihood or impact by applying a control, but here no fix is\napplied because it is judged too costly.",
    "question": "A company accepts a low-risk vulnerability due to the cost of fixing it. This is an example of:",
    "options": [
      "Risk mitigation",
      "Risk transfer",
      "Risk avoidance",
      "Risk acceptance"
    ],
    "correctOption": 3,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e2-q21",
    "examSet": "Practice Exam 2",
    "examNum": 2,
    "questionNumber": 21,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "B",
    "explanation": "Correct Answer: B\n\nB. Insider threat is correct: insider threat awareness covers harmful actions by people with authorized access,\nincluding an employee who intentionally exfiltrates data for an ideological cause. A. Password management is\nincorrect: it addresses creating and protecting credentials, not deliberate data theft by an authorized user. D.\nRemovable media and cables is incorrect: that training topic addresses the risks of storage devices and untrusted\ncables, which is not the central issue in this scenario. C. Hybrid/remote work environments is incorrect: that guidance\naddresses the risks of working outside traditional offices, not intentional insider exfiltration.",
    "question": "An employee intentionally exfiltrates sensitive organizational data to support an ideological cause. Which\nsecurity awareness topic most directly addresses this risk?",
    "options": [
      "Password management",
      "Insider threat",
      "Hybrid/remote work environments",
      "Removable media and cables"
    ],
    "correctOption": 1,
    "isMultiSelect": false,
    "domainId": 1,
    "domain": "Domain 1: General Security Concepts",
    "objective": "1.1-1.4 Security Controls, Cryptography, Identity & Access Management"
  },
  {
    "id": "e2-q22",
    "examSet": "Practice Exam 2",
    "examNum": 2,
    "questionNumber": 22,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "A",
    "explanation": "Correct Answer: A\n\nC. Immutable logs are incorrect. Tamper-proof logs preserve evidence for analysis and investigation but do not restore\nsystems or data to service. D. File integrity monitoring is incorrect. FIM detects unauthorized changes to files; it aids\ndetection, not the restoration of operations. A. Snapshot-based backups are correct. The recovery phase aims to\nrestore affected systems to normal operation; point-in-time snapshots let responders roll systems back to a\nknown-good state quickly, directly supporting recovery. B. Privilege auditing is incorrect. Reviewing access rights\nsupports prevention and detection of excessive permissions; it does not restore systems after an incident.",
    "question": "Which of the following would BEST support the recovery phase of incident response?",
    "options": [
      "Snapshot-based backups",
      "Privilege auditing",
      "Immutable logs",
      "File integrity monitoring"
    ],
    "correctOption": 0,
    "isMultiSelect": false,
    "domainId": 4,
    "domain": "Domain 4: Security Operations",
    "objective": "4.1-4.4 Security Operations, Monitoring, Incident Response & Forensics"
  },
  {
    "id": "e2-q23",
    "examSet": "Practice Exam 2",
    "examNum": 2,
    "questionNumber": 23,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "C",
    "explanation": "Correct Answer: C\n\nA. Remote vulnerability scan is incorrect. \"Remote\" only means the scanner does not run on the target host itself; a\nremote scan can also be launched from inside the network. C. External vulnerability scan is correct. It is the specific\nterm for a scan launched from outside the organization's network perimeter, simulating an internet-based attacker's\nview of exposed services. D. Network vulnerability scan is incorrect. This describes what is being scanned (network\ndevices and services), not the vantage point the scan is launched from. B. Internal vulnerability scan is incorrect. It is\nconducted from inside the perimeter to reveal what an insider or an attacker with a foothold could exploit.",
    "question": "Which term specifically describes a vulnerability scan conducted from outside the target organization's\nnetwork perimeter?",
    "options": [
      "Remote vulnerability scan",
      "Internal vulnerability scan",
      "External vulnerability scan",
      "Network vulnerability scan"
    ],
    "correctOption": 2,
    "isMultiSelect": false,
    "domainId": 2,
    "domain": "Domain 2: Threats, Vulnerabilities & Mitigations",
    "objective": "2.1-2.4 Threats, Vulnerabilities, Attack Vectors & Mitigations"
  },
  {
    "id": "e2-q24",
    "examSet": "Practice Exam 2",
    "examNum": 2,
    "questionNumber": 24,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "B",
    "explanation": "Correct Answer: B\n\nB (Governance is not concerned with overseeing the delivery of services...) is correct: the question asks for the\nstatement that is NOT true, and this one is false. Governance is the set of policies, procedures, roles, and\nresponsibilities that oversee service delivery, the implementation of plans and programs, and the monitoring and\nmitigation of risk. D (Governance refers to the structures, systems, and practices...) is incorrect as an answer because\nit accurately describes governance structures such as boards and committees. C (Governance is involved in assigning\ndecision-making responsibilities...) is incorrect as an answer because setting strategic direction and decision rights is a\ntrue governance function. A (Governance involves reporting on performance...) is incorrect as an answer because\nmonitoring, revision, and corrective action are genuine elements of effective governance.",
    "question": "Which of the following is NOT correct about governance?",
    "options": [
      "Governance involves reporting on performance toward achieving intended results and then using that performance information to drive ongoing improvements and corrective actions.",
      "Governance is not concerned with overseeing the delivery of services; the implementation of its policies, plans, programs, and projects; and the monitoring and mitigation of risks.",
      "Governance is involved in assigning decision-making responsibilities, defining how decisions are to be made, and establishing the organization's strategic direction.",
      "Governance refers to the structures, systems, and practices an organization has in place to assign, oversee, and report."
    ],
    "correctOption": 1,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e2-q25",
    "examSet": "Practice Exam 2",
    "examNum": 2,
    "questionNumber": 25,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "C",
    "explanation": "Correct Answer: C\n\nA. Marketing staff granted access to sales pipeline and invoicing tools is incorrect. Access beyond what the marketing\nrole requires is excessive privilege, the opposite of least privilege. B. Developers running code with administrative\nrights is incorrect. Running with admin rights when not required grants more privilege than the task needs, violating\nleast privilege. C. A user given access only to the specific files needed for their job is correct. Least privilege grants\neach user exactly the access required to perform their duties and nothing more, limiting the damage from compromise\nor misuse. D. The helpdesk team with unrestricted access to all user mailboxes is incorrect. Unrestricted access to\nevery mailbox far exceeds what support tasks require, contradicting least privilege.",
    "question": "Which of the following scenarios BEST illustrates the concept of \"least privilege\"?",
    "options": [
      "Marketing staff granted access to sales pipeline and invoicing tools",
      "Developers running code with administrative rights",
      "A user given access only to the specific files needed for their job",
      "The helpdesk team with unrestricted access to all user mailboxes"
    ],
    "correctOption": 2,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e2-q26",
    "examSet": "Practice Exam 2",
    "examNum": 2,
    "questionNumber": 26,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "D",
    "explanation": "Correct Answer: D\n\nD. Authority is correct: the caller leverages a claimed senior executive position so the request is obeyed out of\ndeference to rank. A. Fright is incorrect because it is not a recognized principle of human manipulation, and the caller\nrelies on rank rather than provoking fear. C. Intimidation is incorrect because the caller issues no threat of negative\nconsequences in this scenario; compliance is sought through position, not menace. B. Urgency is incorrect because\nthe caller imposes no deadline or time pressure on the request.",
    "question": "An unknown caller claims to be a senior vice president and requests a password reset, relying on the\ncaller's claimed executive rank to gain compliance. Which principle of human manipulation is being used?",
    "options": [
      "Fright",
      "Urgency",
      "Intimidation",
      "Authority"
    ],
    "correctOption": 3,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e2-q27",
    "examSet": "Practice Exam 2",
    "examNum": 2,
    "questionNumber": 27,
    "questionType": "Matching",
    "correctAnswerRaw": "1 = A; 2 = D; 3 = C; 4 = B",
    "explanation": "Correct Answer: 1 = A; 2 = D; 3 = C; 4 = B\n\nThe correct mapping is: Application allowlisting prevents execution of unapproved programs by maintaining a list of\nexplicitly authorized applications \u2014 anything not on the list is blocked by default. EDR (Endpoint Detection and\nResponse) detects and contains advanced threats through real-time behavioral monitoring, investigation, and\nautomated response on endpoint devices. Antivirus removes known malware by comparing files against signature\ndatabases and quarantining or deleting matches. Patch management closes known software vulnerabilities by\napplying vendor-released updates, reducing the exploitable attack surface. Each tool targets a different layer of\nendpoint security.",
    "question": "Match each endpoint protection technique with its goal.",
    "matchingItems": [
      {
        "num": 1,
        "text": "Application allowlisting",
        "correctLetter": "A"
      },
      {
        "num": 2,
        "text": "EDR",
        "correctLetter": "D"
      },
      {
        "num": 3,
        "text": "Antivirus",
        "correctLetter": "C"
      },
      {
        "num": 4,
        "text": "Patch management",
        "correctLetter": "B"
      }
    ],
    "matchingDescriptions": [
      {
        "letter": "A",
        "text": "Prevent execution of unapproved programs"
      },
      {
        "letter": "B",
        "text": "Close known software vulnerabilities"
      },
      {
        "letter": "C",
        "text": "Remove known malware"
      },
      {
        "letter": "D",
        "text": "Detect and contain advanced threats"
      }
    ],
    "correctMapping": {
      "1": "A",
      "2": "D",
      "3": "C",
      "4": "B"
    },
    "options": [
      "A. Prevent execution of unapproved programs",
      "B. Close known software vulnerabilities",
      "C. Remove known malware",
      "D. Detect and contain advanced threats"
    ],
    "correctOption": 0,
    "domainId": 4,
    "domain": "Domain 4: Security Operations",
    "objective": "4.1-4.4 Security Operations, Monitoring, Incident Response & Forensics"
  },
  {
    "id": "e2-q28",
    "examSet": "Practice Exam 2",
    "examNum": 2,
    "questionNumber": 28,
    "questionType": "Matching",
    "correctAnswerRaw": "1 = A; 2 = D; 3 = B; 4 = C",
    "explanation": "Correct Answer: 1 = A; 2 = D; 3 = B; 4 = C\n\nThe correct pairings are: Worm = Replicates itself without needing a host file; Rootkit = Conceals administrative\naccess and hides its presence; Ransomware = Locks or encrypts files for payment; Adware = Displays unwanted\npromotional content. A worm is self-propagating malware that spreads across networks autonomously without\nattaching to a host file. A rootkit embeds deeply into the OS to hide its presence and maintain privileged (root-level)\naccess, often masking other malware. Ransomware encrypts a victim's data and demands payment for the decryption\nkey. Adware displays unsolicited advertisements, often bundled with free software, generating revenue for the attacker\nthrough clicks or impressions.",
    "question": "Match each malware type to its behavior.",
    "matchingItems": [
      {
        "num": 1,
        "text": "Worm",
        "correctLetter": "A"
      },
      {
        "num": 2,
        "text": "Rootkit",
        "correctLetter": "D"
      },
      {
        "num": 3,
        "text": "Ransomware",
        "correctLetter": "B"
      },
      {
        "num": 4,
        "text": "Adware",
        "correctLetter": "C"
      }
    ],
    "matchingDescriptions": [
      {
        "letter": "A",
        "text": "Replicates itself without needing a host file"
      },
      {
        "letter": "B",
        "text": "Locks or encrypts files for payment"
      },
      {
        "letter": "C",
        "text": "Displays unwanted promotional content"
      },
      {
        "letter": "D",
        "text": "Conceals administrative access and hides its presence"
      }
    ],
    "correctMapping": {
      "1": "A",
      "2": "D",
      "3": "B",
      "4": "C"
    },
    "options": [
      "A. Replicates itself without needing a host file",
      "B. Locks or encrypts files for payment",
      "C. Displays unwanted promotional content",
      "D. Conceals administrative access and hides its presence"
    ],
    "correctOption": 0,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e2-q29",
    "examSet": "Practice Exam 2",
    "examNum": 2,
    "questionNumber": 29,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "A",
    "explanation": "Correct Answer: A\n\nD. All open network ports is incorrect. Enumerating open ports is a function of network or vulnerability scanning, not of\na BIA. B. Organizational structure gaps is incorrect. A BIA assesses the effect of disruptions on business functions, not\ngaps in the organizational chart. A. The impact of disruption on critical functions is correct. A Business Impact Analysis\nidentifies critical business functions and processes and quantifies the operational and financial impact of their\ndisruption, informing recovery priorities and objectives such as RTO and RPO. C. Vulnerabilities in encryption\nprotocols is incorrect. Finding cryptographic weaknesses is the role of vulnerability assessments, not a BIA.",
    "question": "What does a Business Impact Analysis (BIA) help identify?",
    "options": [
      "The impact of disruption on critical functions",
      "Organizational structure gaps",
      "Vulnerabilities in encryption protocols",
      "All open network ports"
    ],
    "correctOption": 0,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e2-q30",
    "examSet": "Practice Exam 2",
    "examNum": 2,
    "questionNumber": 30,
    "questionType": "Matching",
    "correctAnswerRaw": "1 = B; 2 = A; 3 = C; 4 = D",
    "explanation": "Correct Answer: 1 = B; 2 = A; 3 = C; 4 = D\n\nThe correct mapping is: Clean desk ensures physical confidentiality by requiring employees to clear sensitive materials\nfrom their workspace when unattended, preventing unauthorized viewing. BYOD regulates personal device usage,\ndefining security requirements for employee-owned phones, tablets, and laptops that access company resources.\nData retention controls storage timelines, specifying how long data is stored and when it must be deleted to meet legal\nor operational requirements. Separation of duties divides critical tasks among multiple people so that no single\nindividual has unchecked control over a sensitive process.",
    "question": "Match each policy type to its focus.",
    "matchingItems": [
      {
        "num": 1,
        "text": "Clean desk",
        "correctLetter": "B"
      },
      {
        "num": 2,
        "text": "BYOD",
        "correctLetter": "A"
      },
      {
        "num": 3,
        "text": "Data retention",
        "correctLetter": "C"
      },
      {
        "num": 4,
        "text": "Separation of duties",
        "correctLetter": "D"
      }
    ],
    "matchingDescriptions": [
      {
        "letter": "A",
        "text": "Regulates personal device usage"
      },
      {
        "letter": "B",
        "text": "Ensures physical confidentiality"
      },
      {
        "letter": "C",
        "text": "Controls storage timelines"
      },
      {
        "letter": "D",
        "text": "Divides critical tasks among multiple people to prevent unchecked control"
      }
    ],
    "correctMapping": {
      "1": "B",
      "2": "A",
      "3": "C",
      "4": "D"
    },
    "options": [
      "A. Regulates personal device usage",
      "B. Ensures physical confidentiality",
      "C. Controls storage timelines",
      "D. Divides critical tasks among multiple people to prevent unchecked control"
    ],
    "correctOption": 0,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e2-q31",
    "examSet": "Practice Exam 2",
    "examNum": 2,
    "questionNumber": 31,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "A",
    "explanation": "Correct Answer: A\n\nD. Block USB ports is incorrect. Disabling USB limits one infection and data-transfer vector but does nothing to recover\nfiles already encrypted by ransomware. C. Encrypt user data is incorrect. Encryption protects confidentiality;\nransomware simply encrypts the already-encrypted files again, so it does not prevent data loss. A. Maintain offline\nbackups is correct. Offline (or otherwise isolated/immutable) backups cannot be reached and encrypted by\nransomware that spreads across the network, so clean copies remain available to restore data without paying a\nransom \u2014 the most effective defense against ransomware data loss. B. Require strong passwords is incorrect. Strong\npasswords help resist credential attacks but do not ensure recoverable data once ransomware has encrypted it.",
    "question": "What is the MOST effective way to prevent data loss due to ransomware?",
    "options": [
      "Maintain offline backups",
      "Require strong passwords",
      "Encrypt user data",
      "Block USB ports"
    ],
    "correctOption": 0,
    "isMultiSelect": false,
    "domainId": 2,
    "domain": "Domain 2: Threats, Vulnerabilities & Mitigations",
    "objective": "2.1-2.4 Threats, Vulnerabilities, Attack Vectors & Mitigations"
  },
  {
    "id": "e2-q32",
    "examSet": "Practice Exam 2",
    "examNum": 2,
    "questionNumber": 32,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "C",
    "explanation": "Correct Answer: C\n\nA. Technical is incorrect. Technical (logical) controls are enforced by technology such as firewalls or access-control\nsoftware; a scheduled rotation of duties is a management practice, not a technical mechanism. C. Administrative is\ncorrect. Rotating roles among privileged users is a managerial and administrative control: a policy-driven procedure\nthat reduces fraud and single-person dependency by periodically changing who holds sensitive duties. D. Physical is\nincorrect. Physical controls protect tangible assets and facilities (locks, guards, fences); role rotation involves no\nphysical safeguard. B. Detective is incorrect. Detective controls identify events after they occur (logs, alerts); role\nrotation is a preventive administrative measure, not a detection mechanism.",
    "question": "What kind of control is enforced by implementing regular role rotations among privileged users?",
    "options": [
      "Technical",
      "Detective",
      "Administrative",
      "Physical"
    ],
    "correctOption": 2,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e2-q33",
    "examSet": "Practice Exam 2",
    "examNum": 2,
    "questionNumber": 33,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "A",
    "explanation": "Correct Answer: A\n\nC. Prioritizing remediation efforts is a genuine challenge \u2014 scans surface many findings that must be triaged and fixed\nwith limited resources \u2014 so it is not the answer. B. Working within scanner technical limitations is a genuine challenge\n\u2014 scanners can miss issues behind segmentation, encryption, or missing credentials \u2014 so it is not the answer. D.\nReviewing false positives is a genuine challenge \u2014 reported findings must be validated before acting on them \u2014 so it\nis not the answer. A. Low volume of scan data is correct because it is NOT a challenge: vulnerability scans typically\ngenerate large volumes of data that require significant time and expertise to analyze and prioritize.",
    "question": "Which of the following is NOT a challenge of running a vulnerability scan?",
    "options": [
      "Low volume of scan data",
      "Working within scanner technical limitations",
      "Prioritizing remediation efforts",
      "Reviewing false positives"
    ],
    "correctOption": 0,
    "isMultiSelect": false,
    "domainId": 4,
    "domain": "Domain 4: Security Operations",
    "objective": "4.1-4.4 Security Operations, Monitoring, Incident Response & Forensics"
  },
  {
    "id": "e2-q34",
    "examSet": "Practice Exam 2",
    "examNum": 2,
    "questionNumber": 34,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "C",
    "explanation": "Correct Answer: C\n\nC is correct (A false negative): the vulnerability was still present, but the scanner reported that it was gone. A false\nnegative is the most dangerous confirmation error because it creates unwarranted confidence and closes remediation\ntickets while the exposure remains, which is why validation of remediation should combine rescanning with verification,\nsuch as checking the installed version or running a targeted test. A is incorrect (A false positive) because a false\npositive is a reported finding that turns out not to exist; here nothing was reported. B is incorrect (A true positive)\nbecause a true positive means the scanner correctly flagged a real weakness, but this scanner flagged nothing. D is\nincorrect (A true negative) because a true negative would mean the scanner correctly found no vulnerability, yet the\npenetration tester proved the flaw was still exploitable.",
    "question": "After patching a web server, an administrator runs a credentialed vulnerability rescan, which reports no\nremaining findings, and the ticket is closed. Two weeks later, an external penetration tester exploits the\nsame vulnerability on that server because the patch never applied correctly. Which analysis outcome\nBEST describes the rescan result?",
    "options": [
      "A false positive",
      "A true positive",
      "A false negative",
      "A true negative"
    ],
    "correctOption": 2,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e2-q35",
    "examSet": "Practice Exam 2",
    "examNum": 2,
    "questionNumber": 35,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "D",
    "explanation": "Correct Answer: D\n\nD (Resist) is correct: the question asks for the option that is NOT a recognized response to risk, and resist is not one of\nthem. The SY0-701 risk management strategies are transfer, accept, avoid, and mitigate; an organization does not\nformally resist a risk, it chooses one of those four treatments after assessing likelihood and impact. C (Mitigate) is\nincorrect as an answer because mitigation is a genuine response in which controls such as firewalls, training, or\nsegmentation reduce the likelihood or impact of the risk. A (Accept) is incorrect as an answer because acceptance is a\ngenuine response in which the organization acknowledges the risk and takes no further action, typically when the cost\nof treatment exceeds the potential loss. B (Avoid) is incorrect as an answer because avoidance is a genuine response\nthat eliminates the risk by discontinuing the activity that creates it.",
    "question": "Which of the following is NOT a response to risk?",
    "options": [
      "Accept",
      "Avoid",
      "Mitigate",
      "Resist"
    ],
    "correctOption": 3,
    "isMultiSelect": false,
    "domainId": 3,
    "domain": "Domain 3: Security Architecture",
    "objective": "3.1-3.4 Security Architecture, Cloud, Infrastructure & Resilience"
  },
  {
    "id": "e2-q36",
    "examSet": "Practice Exam 2",
    "examNum": 2,
    "questionNumber": 36,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "C",
    "explanation": "Correct Answer: C\n\nC. Directory traversal is correct: repeated ../ sequences in a URL are the classic indicator of navigating outside the\nweb root to reach files that should not be reachable. D. Buffer overflow is incorrect because it involves overrunning\nmemory with oversized input, not crafted directory paths. B. Race condition is incorrect because it exploits\ntime-of-check/time-of-use timing gaps, which the URL evidence does not show. A. Privilege escalation is incorrect\nbecause no account rights were elevated; the attacker abused path handling to read files.",
    "question": "Nollaig finds that an attacker submitted a URL containing repeated ../ sequences to access confidential\nfiles stored outside a web server's root directory. What type of attack was this?",
    "options": [
      "Privilege escalation",
      "Race condition",
      "Directory traversal",
      "Buffer overflow"
    ],
    "correctOption": 2,
    "isMultiSelect": false,
    "domainId": 2,
    "domain": "Domain 2: Threats, Vulnerabilities & Mitigations",
    "objective": "2.1-2.4 Threats, Vulnerabilities, Attack Vectors & Mitigations"
  },
  {
    "id": "e2-q37",
    "examSet": "Practice Exam 2",
    "examNum": 2,
    "questionNumber": 37,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "C",
    "explanation": "Correct Answer: C\n\nD. Disable the database is incorrect. Taking the database offline would disrupt business operations and is\ndisproportionate based solely on SIEM alerts without confirmed malicious activity. B. Reset all credentials is incorrect.\nMass credential resets cause user disruption and may destroy forensic evidence before the scope of the breach is\nunderstood. A. Isolate the affected server is incorrect. Isolation is a containment step that comes after the incident has\nbeen investigated and confirmed \u2014 acting too quickly could disrupt evidence collection. C. Initiate an incident\ninvestigation is correct. Repeated failed logins outside business hours are suspicious indicators but not confirmed\nattacks. The proper first step is to open a formal investigation \u2014 reviewing authentication logs, correlating with other\nevents, and determining whether the activity represents a real threat before taking disruptive action.",
    "question": "Scenario: Your SIEM flags repeated failed login attempts on a database server outside business hours.\nWhat is the MOST appropriate next step?",
    "options": [
      "Isolate the affected server",
      "Reset all credentials",
      "Initiate an incident investigation",
      "Disable the database"
    ],
    "correctOption": 2,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e2-q38",
    "examSet": "Practice Exam 2",
    "examNum": 2,
    "questionNumber": 38,
    "questionType": "Select Two",
    "correctAnswerRaw": "B, D",
    "explanation": "Correct Answer: B, D\n\nB and D are correct: B (Security camera recording) is correct because it is a detective control: recorded video does not\nstop an intruder, but it identifies that an event occurred and who was involved after the fact. D (Log analysis tool) is\ncorrect for the same reason: reviewing logs reveals security events such as failed logins or unusual traffic that have\nalready happened. A (Antivirus quarantine) is incorrect because isolating a detected file is a corrective action that\nlimits the damage of a threat, not merely a detection. E (Intrusion prevention system) is incorrect because an IPS sits\nin line and actively blocks malicious traffic, making it a preventive control; an IDS would be the detective counterpart. C\n(Security awareness training) is incorrect because training guides user behavior before an incident and is classified as\na directive or preventive control.",
    "question": "Which of the following are examples of detection controls? (Select TWO)",
    "options": [
      "Antivirus quarantine",
      "Security camera recording",
      "Security awareness training",
      "Log analysis tool",
      "Intrusion prevention system"
    ],
    "optionLetters": [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    "isMultiSelect": true,
    "requiredSelectCount": 2,
    "correctOptions": [
      1,
      3
    ],
    "correctLetters": [
      "B",
      "D"
    ],
    "correctOption": 1,
    "domainId": 1,
    "domain": "Domain 1: General Security Concepts",
    "objective": "1.1-1.4 Security Controls, Cryptography, Identity & Access Management"
  },
  {
    "id": "e2-q39",
    "examSet": "Practice Exam 2",
    "examNum": 2,
    "questionNumber": 39,
    "questionType": "Matching",
    "correctAnswerRaw": "1 = D; 2 = C; 3 = A; 4 = B",
    "explanation": "Correct Answer: 1 = D; 2 = C; 3 = A; 4 = B\n\nThe correct mapping is: Preventive controls stop unauthorized access before it occurs (e.g., firewalls, access controls).\nDetective controls alert when a policy is violated, identifying incidents after or during occurrence (e.g., IDS, log\nmonitoring). Corrective controls restore a system to normal after an incident (e.g., restoring from backup, patching).\nCompensating controls are used as alternatives when the primary control is too costly or impractical to implement.\nEach type serves a distinct phase of the security lifecycle \u2014 prevention, detection, recovery, and substitution.",
    "question": "Match each control type to its purpose.",
    "matchingItems": [
      {
        "num": 1,
        "text": "Preventive",
        "correctLetter": "D"
      },
      {
        "num": 2,
        "text": "Detective",
        "correctLetter": "C"
      },
      {
        "num": 3,
        "text": "Corrective",
        "correctLetter": "A"
      },
      {
        "num": 4,
        "text": "Compensating",
        "correctLetter": "B"
      }
    ],
    "matchingDescriptions": [
      {
        "letter": "A",
        "text": "Restores a system to normal"
      },
      {
        "letter": "B",
        "text": "Used when the primary control is too costly"
      },
      {
        "letter": "C",
        "text": "Alerts when a policy is violated"
      },
      {
        "letter": "D",
        "text": "Stops unauthorized access"
      }
    ],
    "correctMapping": {
      "1": "D",
      "2": "C",
      "3": "A",
      "4": "B"
    },
    "options": [
      "A. Restores a system to normal",
      "B. Used when the primary control is too costly",
      "C. Alerts when a policy is violated",
      "D. Stops unauthorized access"
    ],
    "correctOption": 0,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e2-q40",
    "examSet": "Practice Exam 2",
    "examNum": 2,
    "questionNumber": 40,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "D",
    "explanation": "Correct Answer: D\n\nB. The same user writes and deploys production code is incorrect. Concentrating both writing and deploying in one\nperson removes the checks that separation of duties is meant to create. A. A finance manager approves and pays\ninvoices is incorrect. Letting one person both approve and pay concentrates a sensitive process in a single individual\n\u2014 the opposite of separation of duties. D. One admin handles backups while another restores them is correct.\nSeparation of duties splits a critical task across two people so no single individual controls the entire process, reducing\nthe risk of fraud or error; assigning backup and restore to different admins is a textbook example. C. Developers push\npatches directly into production is incorrect. Allowing developers to move their own changes straight to production\nbypasses independent review and does not separate the duties involved.",
    "question": "Which of the following BEST illustrates the principle of separation of duties?",
    "options": [
      "A finance manager approves and pays invoices",
      "The same user writes and deploys production code",
      "Developers push patches directly into production",
      "One admin handles backups while another restores them"
    ],
    "correctOption": 3,
    "isMultiSelect": false,
    "domainId": 1,
    "domain": "Domain 1: General Security Concepts",
    "objective": "1.1-1.4 Security Controls, Cryptography, Identity & Access Management"
  },
  {
    "id": "e2-q41",
    "examSet": "Practice Exam 2",
    "examNum": 2,
    "questionNumber": 41,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "B",
    "explanation": "Correct Answer: B\n\nA. Stating that authorized forwarding to internal recipients may be permitted by corporate policy is accurate, so it is not\nthe correct choice. B. Correct \u2014 this statement is NOT correct: employees should not auto-forward corporate email to\npersonal or external accounts; doing so exposes sensitive information to unmanaged systems and typically violates\nsecurity policy, regardless of any perceived spam-filtering benefit. C. It is true that external auto-forwarding can reduce\nthe organization's control over preserving email as evidence, weakening forensic readiness, so it is not the correct\nchoice. D. It is true that messages forwarded to unmanaged accounts could become accessible to unauthorized users,\nso it is not the correct choice.",
    "question": "Which of the following is NOT correct about forwarding emails?",
    "options": [
      "Authorized forwarding to internal recipients may be permitted by corporate policy.",
      "Employees should auto-forward corporate email to personal or external accounts for enhanced spam filtering.",
      "External auto-forwarding can reduce organizational control over preserving email as evidence.",
      "Messages forwarded to unmanaged accounts could become accessible to unauthorized users."
    ],
    "correctOption": 1,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e2-q42",
    "examSet": "Practice Exam 2",
    "examNum": 2,
    "questionNumber": 42,
    "questionType": "Matching",
    "correctAnswerRaw": "1 = C; 2 = E; 3 = A; 4 = G; 5 = F",
    "explanation": "Correct Answer: 1 = C; 2 = E; 3 = A; 4 = G; 5 = F\n\n1 \u2192 C (Metric tracked over time that warns when a risk is approaching an unacceptable level): a key risk indicator is\nan early-warning measurement, such as the number of unpatched critical systems, that shows a risk trending in the\nwrong direction. 2 \u2192 E (Person accountable for deciding how a specific risk is treated and for its status): the risk\nowner, usually a business or department head, has the authority to accept, mitigate, transfer, or avoid the risk. 3 \u2192 A\n(Level of risk above which escalation or treatment becomes mandatory): the risk threshold is the trigger point in the\nregister that forces action or escalation. 4 \u2192 G (Estimated number of times a specific loss event is expected to happen\nin a year): ARO is the frequency term in the ALE calculation; an event expected every four years has an ARO of 0.25.\n5 \u2192 F (Percentage of an asset's value expected to be lost in a single event): exposure factor is multiplied by asset\nvalue to produce the single loss expectancy. Unused: D (Overall level of risk the organization is willing to pursue in\norder to meet its objectives) \u2014 that defines risk appetite, set by leadership rather than recorded per risk; B (Risk that\nremains after the selected controls have been applied) \u2014 that is residual risk, an outcome of treatment rather than a\nregister input.",
    "question": "A risk manager is training a new analyst on the fields used in the organization's risk register and quantitative analysis. Match each term to its definition.",
    "matchingItems": [
      {
        "num": 1,
        "text": "Key risk indicator",
        "correctLetter": "C"
      },
      {
        "num": 2,
        "text": "Risk owner",
        "correctLetter": "E"
      },
      {
        "num": 3,
        "text": "Risk threshold",
        "correctLetter": "A"
      },
      {
        "num": 4,
        "text": "Annualized rate of occurrence",
        "correctLetter": "G"
      },
      {
        "num": 5,
        "text": "Exposure factor",
        "correctLetter": "F"
      }
    ],
    "matchingDescriptions": [
      {
        "letter": "A",
        "text": "Level of risk above which escalation or treatment becomes mandatory"
      },
      {
        "letter": "B",
        "text": "Risk that remains after the selected controls have been applied"
      },
      {
        "letter": "C",
        "text": "Metric tracked over time that warns when a risk is approaching an unacceptable level"
      },
      {
        "letter": "D",
        "text": "Overall level of risk the organization is willing to pursue in order to meet its objectives"
      },
      {
        "letter": "E",
        "text": "Person accountable for deciding how a specific risk is treated and for its status"
      },
      {
        "letter": "F",
        "text": "Percentage of an asset's value expected to be lost in a single event"
      },
      {
        "letter": "G",
        "text": "Estimated number of times a specific loss event is expected to happen in a year"
      }
    ],
    "correctMapping": {
      "1": "C",
      "2": "E",
      "3": "A",
      "4": "G",
      "5": "F"
    },
    "options": [
      "A. Level of risk above which escalation or treatment becomes mandatory",
      "B. Risk that remains after the selected controls have been applied",
      "C. Metric tracked over time that warns when a risk is approaching an unacceptable level",
      "D. Overall level of risk the organization is willing to pursue in order to meet its objectives",
      "E. Person accountable for deciding how a specific risk is treated and for its status",
      "F. Percentage of an asset's value expected to be lost in a single event",
      "G. Estimated number of times a specific loss event is expected to happen in a year"
    ],
    "correctOption": 0,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e2-q43",
    "examSet": "Practice Exam 2",
    "examNum": 2,
    "questionNumber": 43,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "C",
    "explanation": "Correct Answer: C\n\nD. Threat hunting is incorrect: it proactively searches for adversaries already in the environment, not for code flaws\nbefore deployment. C. Secure SDLC is correct: a secure software development lifecycle builds security into each\nphase (design, coding, testing) to identify and remediate vulnerabilities before software is deployed. A. EDR is\nincorrect: endpoint detection and response monitors running endpoints for threats, it does not review software during\ndevelopment. B. Deprovisioning is incorrect: it removes user access at offboarding and has nothing to do with software\nvulnerability remediation.",
    "question": "An organization wants to reduce risk by identifying and remediating software vulnerabilities before\ndeployment. What process should they implement?",
    "options": [
      "EDR",
      "Deprovisioning",
      "Secure SDLC",
      "Threat hunting"
    ],
    "correctOption": 2,
    "isMultiSelect": false,
    "domainId": 4,
    "domain": "Domain 4: Security Operations",
    "objective": "4.1-4.4 Security Operations, Monitoring, Incident Response & Forensics"
  },
  {
    "id": "e2-q44",
    "examSet": "Practice Exam 2",
    "examNum": 2,
    "questionNumber": 44,
    "questionType": "Matching",
    "correctAnswerRaw": "1 = D; 2 = A; 3 = B; 4 = C",
    "explanation": "Correct Answer: 1 = D; 2 = A; 3 = B; 4 = C\n\nThe correct mapping is: Provisioning is the initial creation of user access \u2014 creating accounts, assigning roles, and\ngranting permissions when a user joins the organization. Deprovisioning disables access after termination \u2014 removing\naccounts and permissions promptly to prevent former employees from retaining access. SSO (Single Sign-On)\nenables central login for multiple services \u2014 users authenticate once and gain access to all connected applications.\nFederation enables cross-organization authentication \u2014 allowing users from one organization's identity provider to\naccess resources in a partner organization without creating separate accounts. Each concept addresses a different\nphase or scope of identity lifecycle management.",
    "question": "Match each identity term to its definition.",
    "matchingItems": [
      {
        "num": 1,
        "text": "Provisioning",
        "correctLetter": "D"
      },
      {
        "num": 2,
        "text": "Deprovisioning",
        "correctLetter": "A"
      },
      {
        "num": 3,
        "text": "SSO",
        "correctLetter": "B"
      },
      {
        "num": 4,
        "text": "Federation",
        "correctLetter": "C"
      }
    ],
    "matchingDescriptions": [
      {
        "letter": "A",
        "text": "Disabling access after termination"
      },
      {
        "letter": "B",
        "text": "Central login for multiple services"
      },
      {
        "letter": "C",
        "text": "Cross-organization authentication"
      },
      {
        "letter": "D",
        "text": "Initial creation of user access"
      }
    ],
    "correctMapping": {
      "1": "D",
      "2": "A",
      "3": "B",
      "4": "C"
    },
    "options": [
      "A. Disabling access after termination",
      "B. Central login for multiple services",
      "C. Cross-organization authentication",
      "D. Initial creation of user access"
    ],
    "correctOption": 0,
    "domainId": 1,
    "domain": "Domain 1: General Security Concepts",
    "objective": "1.1-1.4 Security Controls, Cryptography, Identity & Access Management"
  },
  {
    "id": "e2-q45",
    "examSet": "Practice Exam 2",
    "examNum": 2,
    "questionNumber": 45,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "C",
    "explanation": "Correct Answer: C\n\nB. Asset classification is incorrect: it categorizes data and systems by sensitivity and value; it does not establish the\nrequirement that policies reflect legal obligations. D. Due diligence is incorrect: it is the investigation performed before\na decision, such as vetting a vendor, not a standing board-level requirement on policies and standards. A. Risk\nmitigation is incorrect: it applies controls to reduce the likelihood or impact of specific risks rather than defining policy\nrequirements. C. Governance is correct: security governance is where the board and senior leadership set direction\nand require policies and control standards to account for external considerations such as local legal requirements.",
    "question": "An organization's governing board requires its security policies and control standards to account for local\nlegal requirements. This requirement is part of which security program element?",
    "options": [
      "Risk mitigation",
      "Asset classification",
      "Governance",
      "Due diligence"
    ],
    "correctOption": 2,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e2-q46",
    "examSet": "Practice Exam 2",
    "examNum": 2,
    "questionNumber": 46,
    "questionType": "Matching",
    "correctAnswerRaw": "1 = D; 2 = B; 3 = A; 4 = C",
    "explanation": "Correct Answer: 1 = D; 2 = B; 3 = A; 4 = C\n\nThe correct pairings are: NIST CSF = Cybersecurity best practices for critical infrastructure; ISO 27001 = Information\nsecurity management system standards; SOX = Financial controls and reporting; HIPAA = Health information privacy.\nNIST CSF was developed specifically to help operators of critical infrastructure manage cybersecurity risk through five\ncore functions (Identify, Protect, Detect, Respond, Recover). ISO 27001 is an international standard that defines\nrequirements for establishing and maintaining an Information Security Management System (ISMS). SOX\n(Sarbanes-Oxley Act) is a U.S. law enacted after financial scandals to strengthen internal controls over financial\nreporting. HIPAA (Health Insurance Portability and Accountability Act) protects the privacy and security of health\ninformation in the U.S.",
    "question": "Match each framework to its focus area.",
    "matchingItems": [
      {
        "num": 1,
        "text": "NIST CSF",
        "correctLetter": "D"
      },
      {
        "num": 2,
        "text": "ISO 27001",
        "correctLetter": "B"
      },
      {
        "num": 3,
        "text": "SOX",
        "correctLetter": "A"
      },
      {
        "num": 4,
        "text": "HIPAA",
        "correctLetter": "C"
      }
    ],
    "matchingDescriptions": [
      {
        "letter": "A",
        "text": "Financial controls and reporting"
      },
      {
        "letter": "B",
        "text": "Information security management system standards"
      },
      {
        "letter": "C",
        "text": "Health information privacy"
      },
      {
        "letter": "D",
        "text": "Cybersecurity best practices for critical infrastructure"
      }
    ],
    "correctMapping": {
      "1": "D",
      "2": "B",
      "3": "A",
      "4": "C"
    },
    "options": [
      "A. Financial controls and reporting",
      "B. Information security management system standards",
      "C. Health information privacy",
      "D. Cybersecurity best practices for critical infrastructure"
    ],
    "correctOption": 0,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e2-q47",
    "examSet": "Practice Exam 2",
    "examNum": 2,
    "questionNumber": 47,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "B",
    "explanation": "Correct Answer: B\n\nD. RPO (Recovery Point Objective) is incorrect. RPO defines the maximum acceptable amount of data loss measured\nin time, not how long a system can be unavailable. B. RTO (Recovery Time Objective) is correct. The RTO is the\nmaximum tolerable length of time a system or process can be down after a disruption before it unacceptably affects\nbusiness continuity. C. MTBF (Mean Time Between Failures) is incorrect. MTBF is a reliability metric describing the\naverage operating time between failures, not a downtime tolerance target. A. MTTR (Mean Time To Repair) is\nincorrect. MTTR is the average time taken to repair a failed component, a maintenance metric rather than a continuity\nthreshold.",
    "question": "Fill in the blank: A __________ defines how long data can be unavailable before affecting business\ncontinuity.",
    "options": [
      "MTTR (Mean Time To Repair)",
      "RTO (Recovery Time Objective)",
      "MTBF (Mean Time Between Failures)",
      "RPO (Recovery Point Objective)"
    ],
    "correctOption": 1,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e2-q48",
    "examSet": "Practice Exam 2",
    "examNum": 2,
    "questionNumber": 48,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "D",
    "explanation": "Correct Answer: D\n\nA. Virtualization is incorrect. Virtualization abstracts physical hardware into virtual machines but does not by itself\nmean defining infrastructure declaratively in code. D. IaC (Infrastructure as Code) is correct. IaC uses\nmachine-readable configuration files (Terraform, CloudFormation, Ansible, etc.) to provision and manage infrastructure\nin a repeatable, version-controlled, and auditable way. C. Containerization is incorrect. Containerization packages\napplications and their dependencies into isolated runtime units; it is a deployment technology, not a method of\nmanaging infrastructure definitions. B. SDN is incorrect. Software-Defined Networking decouples the network control\nplane from data plane, which is related but narrower in scope than IaC.",
    "question": "Which concept involves managing infrastructure through machine-readable configuration files?",
    "options": [
      "Virtualization",
      "SDN",
      "Containerization",
      "IaC (Infrastructure as Code)"
    ],
    "correctOption": 3,
    "isMultiSelect": false,
    "domainId": 3,
    "domain": "Domain 3: Security Architecture",
    "objective": "3.1-3.4 Security Architecture, Cloud, Infrastructure & Resilience"
  },
  {
    "id": "e2-q49",
    "examSet": "Practice Exam 2",
    "examNum": 2,
    "questionNumber": 49,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "B",
    "explanation": "Correct Answer: B\n\nD. Installing a host-based firewall is incorrect. A host firewall filters network connections and does not stop a user from\nbeing deceived by a phishing message. A. Enforcing browser sandboxing is incorrect. Sandboxing can contain\nmalicious code execution but does not prevent a user from disclosing credentials to a convincing phishing site. B.\nConducting regular user awareness training is correct. Because phishing targets human judgment, training users to\nrecognize and report suspicious messages is the most effective countermeasure against it. C. Encrypting email\nattachments is incorrect. Encryption protects the confidentiality of legitimate attachments; it does nothing to prevent\nphishing attempts.",
    "question": "Which method is most effective for preventing phishing attacks?",
    "options": [
      "Enforcing browser sandboxing",
      "Conducting regular user awareness training",
      "Encrypting email attachments",
      "Installing a host-based firewall"
    ],
    "correctOption": 1,
    "isMultiSelect": false,
    "domainId": 3,
    "domain": "Domain 3: Security Architecture",
    "objective": "3.1-3.4 Security Architecture, Cloud, Infrastructure & Resilience"
  },
  {
    "id": "e2-q50",
    "examSet": "Practice Exam 2",
    "examNum": 2,
    "questionNumber": 50,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "B",
    "explanation": "Correct Answer: B\n\nD. MOU is incorrect. A Memorandum of Understanding expresses general intent between parties and does not define\nmeasurable service levels. A. NDA is incorrect. A Non-Disclosure Agreement protects confidentiality of shared\ninformation and has no service-level clauses. B. SLA is correct. A Service Level Agreement formally defines the\nexpected performance metrics (uptime, response time, penalties) and the responsibilities of both the provider and the\ncustomer. C. BPA is incorrect. A Business Partnership Agreement governs ownership, profit-sharing, and\nresponsibilities between partners, not provider-customer service levels.",
    "question": "Fill in the blank: The __________ outlines expected service levels and responsibilities between a provider\nand a customer.",
    "options": [
      "NDA",
      "SLA",
      "BPA",
      "MOU"
    ],
    "correctOption": 1,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e2-q51",
    "examSet": "Practice Exam 2",
    "examNum": 2,
    "questionNumber": 51,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "D",
    "explanation": "Correct Answer: D\n\nD. Code of conduct is correct. A code of conduct defines the ethical standards, values, and behavioral expectations\nthat guide how an organization and its employees act \u2014 including how the organization fulfills its legal and ethical\nresponsibilities to regulators, customers, and stakeholders. It formalizes commitments to integrity, compliance, and\nprofessional behavior. A. Business impact analysis is incorrect. A BIA identifies critical business functions and\nquantifies the impact of disruptions \u2014 it is a risk and continuity planning tool, not a governance ethics document. B.\nPolicy review is incorrect. A policy review is a periodic process for evaluating whether existing policies remain accurate\nand effective \u2014 it is not a document type. C. Risk assessment is incorrect. A risk assessment identifies and evaluates\nthreats and vulnerabilities to determine risk exposure \u2014 it is an analytical activity, not a document that articulates legal\nand ethical commitments.",
    "question": "Fill in the blank: A __________ document defines how an organization meets its legal and ethical\nresponsibilities.",
    "options": [
      "Business impact analysis",
      "Policy review",
      "Risk assessment",
      "Code of conduct"
    ],
    "correctOption": 3,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e2-q52",
    "examSet": "Practice Exam 2",
    "examNum": 2,
    "questionNumber": 52,
    "questionType": "Matching",
    "correctAnswerRaw": "1 = C; 2 = A; 3 = B; 4 = D",
    "explanation": "Correct Answer: 1 = C; 2 = A; 3 = B; 4 = D\n\nThe correct mapping is: WPA2 \u2192 uses AES encryption with a pre-shared key, the widely deployed standard that\nreplaced WPA/TKIP. WPA3 \u2192 the most secure current standard, adding SAE authentication and forward secrecy so\npast sessions stay protected even if a password is later compromised. WEP \u2192 uses RC4 encryption with weak\ninitialization vectors; it is cryptographically broken, considered outdated and insecure, and must never be used. Open\n\u2192 unencrypted access with no authentication, leaving all traffic visible to anyone in range. Note that TKIP was the\ninterim fix introduced with WPA (not WEP) and is itself deprecated.",
    "question": "Match each wireless security protocol with its characteristic.",
    "matchingItems": [
      {
        "num": 1,
        "text": "WPA2",
        "correctLetter": "C"
      },
      {
        "num": 2,
        "text": "WPA3",
        "correctLetter": "A"
      },
      {
        "num": 3,
        "text": "WEP",
        "correctLetter": "B"
      },
      {
        "num": 4,
        "text": "Open",
        "correctLetter": "D"
      }
    ],
    "matchingDescriptions": [
      {
        "letter": "A",
        "text": "Most secure with SAE and forward secrecy"
      },
      {
        "letter": "B",
        "text": "Uses RC4 encryption; considered outdated and insecure"
      },
      {
        "letter": "C",
        "text": "Uses AES encryption with pre-shared key"
      },
      {
        "letter": "D",
        "text": "Unencrypted access"
      }
    ],
    "correctMapping": {
      "1": "C",
      "2": "A",
      "3": "B",
      "4": "D"
    },
    "options": [
      "A. Most secure with SAE and forward secrecy",
      "B. Uses RC4 encryption; considered outdated and insecure",
      "C. Uses AES encryption with pre-shared key",
      "D. Unencrypted access"
    ],
    "correctOption": 0,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e2-q53",
    "examSet": "Practice Exam 2",
    "examNum": 2,
    "questionNumber": 53,
    "questionType": "Matching",
    "correctAnswerRaw": "1 = D; 2 = B; 3 = A; 4 = C",
    "explanation": "Correct Answer: 1 = D; 2 = B; 3 = A; 4 = C\n\nThe correct mapping is: Rootkit embeds itself deeply in the OS to gain and maintain administrative (root) access while\nconcealing its presence from security tools. Adware shows unsolicited promotional content, generating revenue for the\nattacker through forced ad impressions. Worm replicates itself across networks without requiring user interaction or a\nhost file. Spyware silently monitors user activity \u2014 keystrokes, browsing, credentials \u2014 and transmits data to the\nattacker. Each type has a distinct persistence and impact profile that Security+ candidates must distinguish.",
    "question": "Match each malware type with its behavior.",
    "matchingItems": [
      {
        "num": 1,
        "text": "Rootkit",
        "correctLetter": "D"
      },
      {
        "num": 2,
        "text": "Adware",
        "correctLetter": "B"
      },
      {
        "num": 3,
        "text": "Worm",
        "correctLetter": "A"
      },
      {
        "num": 4,
        "text": "Spyware",
        "correctLetter": "C"
      }
    ],
    "matchingDescriptions": [
      {
        "letter": "A",
        "text": "Replicates through networks without user action"
      },
      {
        "letter": "B",
        "text": "Shows unsolicited promotional content"
      },
      {
        "letter": "C",
        "text": "Steals user activity silently"
      },
      {
        "letter": "D",
        "text": "Embeds itself to gain administrative access"
      }
    ],
    "correctMapping": {
      "1": "D",
      "2": "B",
      "3": "A",
      "4": "C"
    },
    "options": [
      "A. Replicates through networks without user action",
      "B. Shows unsolicited promotional content",
      "C. Steals user activity silently",
      "D. Embeds itself to gain administrative access"
    ],
    "correctOption": 0,
    "domainId": 2,
    "domain": "Domain 2: Threats, Vulnerabilities & Mitigations",
    "objective": "2.1-2.4 Threats, Vulnerabilities, Attack Vectors & Mitigations"
  },
  {
    "id": "e2-q54",
    "examSet": "Practice Exam 2",
    "examNum": 2,
    "questionNumber": 54,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "B",
    "explanation": "Correct Answer: B\n\nB (Tcpdump) is correct: tcpdump is a command-line packet capture and analysis tool that ships with or is easily\ninstalled on Linux. It runs entirely from the terminal, so it fits a hardened web server that has no graphical interface and\na deliberately minimal footprint, and its captures can later be opened in Wireshark elsewhere if deeper analysis is\nneeded. A (Ethereal) is incorrect because Ethereal was the former name of Wireshark, a graphical protocol analyzer\nthat requires a GUI and would add unnecessary software to the server. D (Network General) is incorrect because it is\nthe name of a company that sold commercial network analysis products, not a lightweight command-line tool for Linux.\nC (Sniffer) is incorrect because sniffer is a generic term for any packet capture tool and was also a commercial GUI\nproduct; it is not the specific command-line utility Akari needs.",
    "question": "Akari has been asked to install a packet analysis tool on a Linux web server. Because this server does not\ndo anything unnecessary so it reduces the footprint that a threat actor could exploit, all applications on the\nserver are command-line applications and there is no graphical user interface (GUI). Which tool would\nAkari install?",
    "options": [
      "Ethereal",
      "Tcpdump",
      "Sniffer",
      "Network General"
    ],
    "correctOption": 1,
    "isMultiSelect": false,
    "domainId": 4,
    "domain": "Domain 4: Security Operations",
    "objective": "4.1-4.4 Security Operations, Monitoring, Incident Response & Forensics"
  },
  {
    "id": "e2-q55",
    "examSet": "Practice Exam 2",
    "examNum": 2,
    "questionNumber": 55,
    "questionType": "Ordering",
    "correctAnswerRaw": "D > F > E > B > A > C",
    "explanation": "Correct Answer: D > F > E > B > A > C\n\nCorrect order: 1. Submit a formal change request \u2014 this initiates the process with a documented objective and\njustification. 2. Perform impact analysis \u2014 evaluate the technical and business consequences, including downtime and\nrisk. 3. Obtain change advisory board approval \u2014 stakeholders sign off before any work begins. 4. Test the change in\na staging environment \u2014 validate it safely before touching production. 5. Implement the change during the\nmaintenance window \u2014 deploy at a low-impact time with a rollback ready. 6. Update documentation and conduct a\npost-change review \u2014 record what changed and capture lessons learned.",
    "question": "Arrange the change-management steps in the order an organization should perform them. Place the following in the correct order:",
    "orderingItems": [
      {
        "letter": "A",
        "text": "Implement the change during the maintenance window"
      },
      {
        "letter": "B",
        "text": "Test the change in a staging environment"
      },
      {
        "letter": "C",
        "text": "Update documentation and conduct a post-change review"
      },
      {
        "letter": "D",
        "text": "Submit a formal change request"
      },
      {
        "letter": "E",
        "text": "Obtain change advisory board approval"
      },
      {
        "letter": "F",
        "text": "Perform impact analysis"
      }
    ],
    "correctOrder": [
      "D",
      "F",
      "E",
      "B",
      "A",
      "C"
    ],
    "options": [
      "A. Implement the change during the maintenance window",
      "B. Test the change in a staging environment",
      "C. Update documentation and conduct a post-change review",
      "D. Submit a formal change request",
      "E. Obtain change advisory board approval",
      "F. Perform impact analysis"
    ],
    "correctOption": 0,
    "domainId": 1,
    "domain": "Domain 1: General Security Concepts",
    "objective": "1.1-1.4 Security Controls, Cryptography, Identity & Access Management"
  },
  {
    "id": "e2-q56",
    "examSet": "Practice Exam 2",
    "examNum": 2,
    "questionNumber": 56,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "C",
    "explanation": "Correct Answer: C\n\nC (Chain of custody) is correct: chain of custody is the documented trail that records who collected, handled,\ntransferred, and stored digital evidence, and exactly when each hand-off occurred. It is maintained with timestamps,\nsignatures, hashes, and tamper-evident containers so the evidence can be shown to be unaltered and admissible if\nlegal action follows. A (Evidence log) is incorrect because it is not the recognized term; a log of items may exist, but\nthe formal record of handling and custody transfers is the chain of custody. D (Incident report) is incorrect because an\nincident report summarizes what happened, the impact, and the response; it does not track the handling of individual\npieces of evidence. B (Forensic timeline) is incorrect because a timeline reconstructs the sequence of the attacker's\nactions from artifacts, not the sequence of people who handled the evidence.",
    "question": "Fill in the blank: __________ refers to the process of recording who handled digital evidence and when.",
    "options": [
      "Evidence log",
      "Forensic timeline",
      "Chain of custody",
      "Incident report"
    ],
    "correctOption": 2,
    "isMultiSelect": false,
    "domainId": 4,
    "domain": "Domain 4: Security Operations",
    "objective": "4.1-4.4 Security Operations, Monitoring, Incident Response & Forensics"
  },
  {
    "id": "e2-q57",
    "examSet": "Practice Exam 2",
    "examNum": 2,
    "questionNumber": 57,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "C",
    "explanation": "Correct Answer: C\n\nC is correct (Asymmetric key exchange): public-key methods let two parties establish a shared symmetric key over an\nuntrusted channel without transmitting the secret itself. D is incorrect (Symmetric encryption): symmetric encryption\nrequires both parties to already hold the same secret key, which is the very problem being solved. B is incorrect\n(Hashing): hashing is a one-way function for integrity and cannot be used to share or recover a key. A is incorrect\n(Steganography): steganography hides the existence of data within other data and provides no key-agreement\ncapability.",
    "question": "Two servers that have never shared a secret must agree on a symmetric session key across an untrusted\nnetwork without an eavesdropper learning it. Which cryptographic approach makes this possible?",
    "options": [
      "Steganography",
      "Hashing",
      "Asymmetric key exchange",
      "Symmetric encryption"
    ],
    "correctOption": 2,
    "isMultiSelect": false,
    "domainId": 1,
    "domain": "Domain 1: General Security Concepts",
    "objective": "1.1-1.4 Security Controls, Cryptography, Identity & Access Management"
  },
  {
    "id": "e2-q58",
    "examSet": "Practice Exam 2",
    "examNum": 2,
    "questionNumber": 58,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "B",
    "explanation": "Correct Answer: B\n\nC. Detective is incorrect. Detective controls identify and alert that an incident has occurred (e.g., IDS alerts, log\nreview); replacing hardware and restoring data goes beyond identifying the failure. D. Physical is incorrect. Physical\ncontrols (locks, guards, cameras) protect the physical environment; replacing a failed component and restoring data is\na recovery activity, not physical protection. A. Preventive is incorrect. Preventive controls act before an incident to stop\nit from happening; here the hardware failure has already occurred. B. Corrective is correct. Corrective controls restore\nsystems to normal operation after an incident \u2014 replacing the failed component and restoring data from backup is a\ntextbook corrective action.",
    "question": "After a server experiences a hardware failure, a company replaces the failed component and restores its\ndata from backup to return it to normal operation. What kind of control is this?",
    "options": [
      "Preventive",
      "Corrective",
      "Detective",
      "Physical"
    ],
    "correctOption": 1,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e2-q59",
    "examSet": "Practice Exam 2",
    "examNum": 2,
    "questionNumber": 59,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "A",
    "explanation": "Correct Answer: A\n\nA. Redundancy is correct: it is the duplication of critical components \u2014 power supplies, network links, servers, sites \u2014\nso that a backup component can take over when the primary fails, keeping essential services available. B. Encryption\nis incorrect: it protects data confidentiality and provides no duplicate component to take over after a failure. D. VPN\ntunnel is incorrect: it provides secure remote connectivity, not duplication of components. C. Load balancing is\nincorrect: it distributes traffic across multiple active servers for performance and scalability; it is not itself the\nduplication of a component with a backup standing by to take over.",
    "question": "Fill in the blank: The duplication of critical components so that a backup component can take over after a\nfailure is called __________.",
    "options": [
      "Redundancy",
      "Encryption",
      "Load balancing",
      "VPN tunnel"
    ],
    "correctOption": 0,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e2-q60",
    "examSet": "Practice Exam 2",
    "examNum": 2,
    "questionNumber": 60,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "A",
    "explanation": "Correct Answer: A\n\nA (Authentication) is correct: authentication is the process of verifying that a user, device, or system is who it claims to\nbe. It relies on factors such as something you know (a password), something you have (a token or smart card), or\nsomething you are (a fingerprint), and it must succeed before any access decision is made. D (Authorization) is\nincorrect because authorization comes after authentication and determines what an already-identified user is permitted\nto access or do. C (Accounting) is incorrect because accounting is the third element of AAA, the logging and tracking\nof what users did and when, used for auditing rather than identity confirmation. B (Encryption) is incorrect because\nencryption protects the confidentiality of data by transforming it into unreadable ciphertext; it does not confirm\nanyone's identity.",
    "question": "Fill in the blank: The process of confirming a user's identity is known as __________.",
    "options": [
      "Authentication",
      "Encryption",
      "Accounting",
      "Authorization"
    ],
    "correctOption": 0,
    "isMultiSelect": false,
    "domainId": 1,
    "domain": "Domain 1: General Security Concepts",
    "objective": "1.1-1.4 Security Controls, Cryptography, Identity & Access Management"
  },
  {
    "id": "e2-q61",
    "examSet": "Practice Exam 2",
    "examNum": 2,
    "questionNumber": 61,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "C",
    "explanation": "Correct Answer: C\n\nA. Cross-site scripting is incorrect. XSS injects malicious scripts that execute in other users' browsers; it targets the\nclient side, not backend database queries. C. SQL injection is correct. SQL injection sends crafted input that the\napplication interprets as part of a database query, letting an attacker read, modify, or delete backend data or bypass\nauthentication. B. DNS poisoning is incorrect. DNS poisoning corrupts name-resolution records to redirect users to\nmalicious hosts; it does not manipulate database queries. D. URL spoofing is incorrect. URL spoofing disguises a\nmalicious link as a trusted address to deceive users; it does not send queries to a backend database.",
    "question": "Which type of cyberattack involves sending crafted queries to manipulate backend databases?",
    "options": [
      "Cross-site scripting",
      "DNS poisoning",
      "SQL injection",
      "URL spoofing"
    ],
    "correctOption": 2,
    "isMultiSelect": false,
    "domainId": 2,
    "domain": "Domain 2: Threats, Vulnerabilities & Mitigations",
    "objective": "2.1-2.4 Threats, Vulnerabilities, Attack Vectors & Mitigations"
  },
  {
    "id": "e2-q62",
    "examSet": "Practice Exam 2",
    "examNum": 2,
    "questionNumber": 62,
    "questionType": "Matching",
    "correctAnswerRaw": "1 = A; 2 = D; 3 = C; 4 = B",
    "explanation": "Correct Answer: 1 = A; 2 = D; 3 = C; 4 = B\n\nThe correct mapping is: Pharming redirects traffic using DNS poisoning \u2014 attackers corrupt DNS cache entries so\nusers are sent to malicious sites even when typing the correct URL. Vishing is social engineering via phone \u2014\nattackers call targets impersonating legitimate organizations to extract credentials or sensitive information. Logic bomb\nis a malicious script triggered by a specific condition (e.g., a date, login event, or file deletion), lying dormant until\nactivated. Typosquatting involves registering a domain similar to a legitimate one (e.g., 'micosoft.com') to intercept\nusers who mistype URLs, delivering phishing pages or malware.",
    "question": "Match each attack type to its method.",
    "matchingItems": [
      {
        "num": 1,
        "text": "Pharming",
        "correctLetter": "A"
      },
      {
        "num": 2,
        "text": "Vishing",
        "correctLetter": "D"
      },
      {
        "num": 3,
        "text": "Logic bomb",
        "correctLetter": "C"
      },
      {
        "num": 4,
        "text": "Typosquatting",
        "correctLetter": "B"
      }
    ],
    "matchingDescriptions": [
      {
        "letter": "A",
        "text": "Redirecting traffic using DNS poisoning"
      },
      {
        "letter": "B",
        "text": "Registering a domain similar to a legitimate one"
      },
      {
        "letter": "C",
        "text": "Malicious script triggered by a condition"
      },
      {
        "letter": "D",
        "text": "Social engineering via phone"
      }
    ],
    "correctMapping": {
      "1": "A",
      "2": "D",
      "3": "C",
      "4": "B"
    },
    "options": [
      "A. Redirecting traffic using DNS poisoning",
      "B. Registering a domain similar to a legitimate one",
      "C. Malicious script triggered by a condition",
      "D. Social engineering via phone"
    ],
    "correctOption": 0,
    "domainId": 2,
    "domain": "Domain 2: Threats, Vulnerabilities & Mitigations",
    "objective": "2.1-2.4 Threats, Vulnerabilities, Attack Vectors & Mitigations"
  },
  {
    "id": "e2-q63",
    "examSet": "Practice Exam 2",
    "examNum": 2,
    "questionNumber": 63,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "A",
    "explanation": "Correct Answer: A\n\nA (Ensure ongoing operations during and after a crisis) is correct: a business continuity plan identifies the critical\nbusiness functions and sets out the people, processes and alternate resources needed to keep them running through\na disruption and to restore normal service afterwards. C (Reduce employee turnover in the IT and security teams) is\nincorrect because staff retention is an HR objective with no role in continuity planning. D (Identify exploitable\nvulnerabilities in production hosts) is incorrect because finding technical weaknesses belongs to vulnerability\nmanagement, which may feed the impact analysis but is not the plan's goal. B (Monitor patch compliance across\nendpoints) is incorrect because patch compliance is a day-to-day operational metric, not a continuity outcome.",
    "question": "What is the primary goal of a Business Continuity Plan (BCP)?",
    "options": [
      "Ensure ongoing operations during and after a crisis",
      "Monitor patch compliance across endpoints",
      "Reduce employee turnover in the IT and security teams",
      "Identify exploitable vulnerabilities in production hosts"
    ],
    "correctOption": 0,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e2-q64",
    "examSet": "Practice Exam 2",
    "examNum": 2,
    "questionNumber": 64,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "D",
    "explanation": "Correct Answer: D\n\nA. Security awareness training is incorrect. Awareness training reduces risk from an organization's own users; it does\nnot assess or control the security of third parties. D. Supply chain auditing is correct. Auditing vendors and suppliers,\nincluding reviewing their controls, right-to-audit clauses, and independent assessments, directly evaluates and\nreduces the risk introduced by third parties in the supply chain. B. Whitelisting is incorrect. Application allowlisting\nrestricts which programs can run on a host; it is an endpoint control and does not address third-party or vendor risk. C.\nTraffic shaping is incorrect. Traffic shaping manages bandwidth and network performance; it has no bearing on\nthird-party risk.",
    "question": "Which of the following MOST helps minimize third-party risk?",
    "options": [
      "Security awareness training",
      "Whitelisting",
      "Traffic shaping",
      "Supply chain auditing"
    ],
    "correctOption": 3,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e2-q65",
    "examSet": "Practice Exam 2",
    "examNum": 2,
    "questionNumber": 65,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "C",
    "explanation": "Correct Answer: C\n\nD. RFID swiping is incorrect. \"Swiping\" is not the standard term for the duplication of RFID tag data. C. RFID cloning is\ncorrect. RFID cloning is the act of reading the data from a legitimate tag and writing an identical copy onto another tag\nso it can be used to impersonate the original. A. RFID duplicating is incorrect. While conceptually similar, \"duplicating\"\nis not the recognized Security+ term; the industry-standard term is cloning. B. RFID mirroring is incorrect. Mirroring\nrefers to replicating data stores in real time and is not an RFID attack category.",
    "question": "Which of the following attacks transfers the data from one RFID tag to another?",
    "options": [
      "RFID duplicating",
      "RFID mirroring",
      "RFID cloning",
      "RFID swiping"
    ],
    "correctOption": 2,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e2-q66",
    "examSet": "Practice Exam 2",
    "examNum": 2,
    "questionNumber": 66,
    "questionType": "Ordering",
    "correctAnswerRaw": "D > C > B > A > E",
    "explanation": "Correct Answer: D > C > B > A > E\n\nCorrect order: 1. Procure the server through the approved acquisition process \u2014 the lifecycle begins with acquisition,\nwhere security requirements and supplier vetting are applied before the asset enters the environment. 2. Assign an\nowner and classify the data the server will hold \u2014 assignment and accounting establish who is accountable and what\nprotection level the data requires, which drives every later control. 3. Track the server's location, patch level, and\nconfiguration while it is in service \u2014 monitoring and asset tracking keep the record accurate so the system stays\npatched, scanned, and in scope for incident response. 4. Sanitize the storage media so that no customer data can be\nrecovered \u2014 at decommissioning, wiping, degaussing, or destroying the media eliminates retrievable information\naccording to the data classification. 5. Obtain a certificate of destruction from the disposal vendor and update the\nrecords \u2014 certification proves disposal was completed and closes the asset's entry, supporting audits and retention\nrequirements. In-service tracking cannot start before the asset exists and has an owner, and certifying destruction\nbefore sanitization would document something that has not happened.",
    "question": "A company is purchasing a new database server that will hold customer records. Arrange the asset management activities in the order they occur across the server's lifecycle. Place the following in the correct order:",
    "orderingItems": [
      {
        "letter": "A",
        "text": "Sanitize the storage media so that no customer data can be recovered"
      },
      {
        "letter": "B",
        "text": "Track the server's location, patch level, and configuration while it is in service"
      },
      {
        "letter": "C",
        "text": "Assign an owner and classify the data the server will hold"
      },
      {
        "letter": "D",
        "text": "Procure the server through the approved acquisition process"
      },
      {
        "letter": "E",
        "text": "Obtain a certificate of destruction from the disposal vendor and update the records"
      }
    ],
    "correctOrder": [
      "D",
      "C",
      "B",
      "A",
      "E"
    ],
    "options": [
      "A. Sanitize the storage media so that no customer data can be recovered",
      "B. Track the server's location, patch level, and configuration while it is in service",
      "C. Assign an owner and classify the data the server will hold",
      "D. Procure the server through the approved acquisition process",
      "E. Obtain a certificate of destruction from the disposal vendor and update the records"
    ],
    "correctOption": 0,
    "domainId": 4,
    "domain": "Domain 4: Security Operations",
    "objective": "4.1-4.4 Security Operations, Monitoring, Incident Response & Forensics"
  },
  {
    "id": "e2-q67",
    "examSet": "Practice Exam 2",
    "examNum": 2,
    "questionNumber": 67,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "B",
    "explanation": "Correct Answer: B\n\nB. Typo-squatting is correct. Typo-squatting registers domains that closely resemble a trusted name, using common\nmisspellings or look-alike characters, so users who mistype or trust the familiar-looking address are lured to a\nmalicious site. A. Command injection is incorrect. Command injection runs attacker-supplied operating-system\ncommands through a vulnerable application; it does not rely on imitating a trusted domain. C. ARP spoofing is\nincorrect. ARP spoofing forges ARP replies on a local network to intercept traffic; it operates at Layer 2 and does not\nmimic a domain name. D. Session replay is incorrect. Session replay reuses captured session data to impersonate a\nuser; it does not involve a look-alike domain to trick the victim.",
    "question": "An attacker tricks a user into visiting a malicious site by mimicking a trusted domain. What type of attack is\nthis?",
    "options": [
      "Command injection",
      "Typo-squatting",
      "ARP spoofing",
      "Session replay"
    ],
    "correctOption": 1,
    "isMultiSelect": false,
    "domainId": 1,
    "domain": "Domain 1: General Security Concepts",
    "objective": "1.1-1.4 Security Controls, Cryptography, Identity & Access Management"
  },
  {
    "id": "e2-q68",
    "examSet": "Practice Exam 2",
    "examNum": 2,
    "questionNumber": 68,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "C",
    "explanation": "Correct Answer: C\n\nC. Policy Engine is correct. In the Zero Trust control plane, the Policy Engine evaluates each access request against\npolicy and renders the grant or deny decision. A. Policy Enforcement Point is incorrect. The PEP sits in the data plane\nand enforces the decision by establishing or blocking the connection; it does not make the policy decision itself. B.\nSubject/System is incorrect. The subject or system is the entity requesting access to a resource, not a component that\nevaluates requests. D. Implicit trust zone is incorrect. It is a data-plane concept describing areas where traffic is\ntrusted by default, something Zero Trust aims to reduce or eliminate, not a decision-making component.",
    "question": "Which Zero Trust control-plane component evaluates access requests and makes policy decisions?",
    "options": [
      "Policy Enforcement Point",
      "Subject/System",
      "Policy Engine",
      "Implicit trust zone"
    ],
    "correctOption": 2,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e2-q69",
    "examSet": "Practice Exam 2",
    "examNum": 2,
    "questionNumber": 69,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "C",
    "explanation": "Correct Answer: C\n\nA. A skilled hacker working for a nation-state is incorrect. Nation-state actors are highly resourced and sophisticated,\nthe opposite of a script kiddie. B. An insider using custom exploits is incorrect. Writing custom exploits requires\ntechnical skill a script kiddie lacks, and this describes an insider threat. C. An unskilled attacker using pre-built tools is\ncorrect. A script kiddie is an inexperienced attacker who runs pre-built tools and scripts written by others, without deep\ntechnical understanding. D. A hacktivist promoting political change is incorrect. A hacktivist is defined by political or\nideological motivation, not by skill level.",
    "question": "Which of the following describes a script kiddie?",
    "options": [
      "A skilled hacker working for a nation-state",
      "An insider using custom exploits",
      "An unskilled attacker using pre-built tools",
      "A hacktivist promoting political change"
    ],
    "correctOption": 2,
    "isMultiSelect": false,
    "domainId": 2,
    "domain": "Domain 2: Threats, Vulnerabilities & Mitigations",
    "objective": "2.1-2.4 Threats, Vulnerabilities, Attack Vectors & Mitigations"
  },
  {
    "id": "e2-q70",
    "examSet": "Practice Exam 2",
    "examNum": 2,
    "questionNumber": 70,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "D",
    "explanation": "Correct Answer: D\n\nA. Schedule patch timelines is incorrect: patch scheduling is a vulnerability-management task, not a forensic control.\nB. Track incident trends is incorrect: trend analysis is a reporting activity, not the purpose of chain of custody. D.\nDocument evidence handling is correct: a chain of custody records who collected, accessed, transferred, and stored\neach piece of evidence and when, preserving its integrity and admissibility. C. Encrypt audit logs is incorrect:\nencryption protects log confidentiality but is not what chain of custody provides.",
    "question": "What is the purpose of a chain of custody document in a forensic investigation?",
    "options": [
      "Schedule patch timelines",
      "Track incident trends",
      "Encrypt audit logs",
      "Document evidence handling"
    ],
    "correctOption": 3,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e2-q71",
    "examSet": "Practice Exam 2",
    "examNum": 2,
    "questionNumber": 71,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "B",
    "explanation": "Correct Answer: B\n\nC. Allowing access once users are inside the corporate LAN is incorrect: zero trust rejects implicit trust based on\nnetwork location, so being on the internal LAN grants nothing by itself. B. Requiring re-authentication when accessing\neach new resource is correct: zero trust follows \"never trust, always verify,\" validating identity and authorization for\nevery resource request rather than once at the perimeter. D. Whitelisting all known MAC addresses is incorrect: MAC\nfiltering is a weak, easily spoofed network control and does not implement per-request verification. A. Disabling\nmultifactor authentication for internal users is incorrect: it weakens verification, the opposite of zero trust, which\nstrengthens authentication everywhere.",
    "question": "A security team is deploying a zero trust model. Which of the following best aligns with this strategy?",
    "options": [
      "Disable multifactor authentication for internal users",
      "Require re-authentication when accessing each new resource",
      "Allow access once users are inside the corporate LAN",
      "Whitelist all known MAC addresses"
    ],
    "correctOption": 1,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e2-q72",
    "examSet": "Practice Exam 2",
    "examNum": 2,
    "questionNumber": 72,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "D",
    "explanation": "Correct Answer: D\n\nA. Certificate authority (CA) is incorrect: in this arrangement the CA issues and signs the certificate after verification is\ncomplete; verifying the applicant is delegated to the intermediary component. D. Registration authority (RA) is correct:\nthe RA acts as the intermediary between the applicant and the CA, verifying the applicant's identity and credentials\nbefore the CA issues the certificate. B. Certificate signing request (CSR) is incorrect: a CSR is the message containing\nthe applicant's public key and identifying information \u2014 it is a data object, not a component that verifies anyone. C.\nIntermediate CA is incorrect: an intermediate CA is a subordinate certificate authority that signs certificates in the chain\nbelow the root; it is not the component that verifies applicant credentials.",
    "question": "In a public key infrastructure (PKI), which component acts as an intermediary between the certificate\napplicant and the certificate authority, verifying the applicant's identity and credentials before the certificate\nis issued?",
    "options": [
      "Certificate authority (CA)",
      "Certificate signing request (CSR)",
      "Intermediate CA",
      "Registration authority (RA)"
    ],
    "correctOption": 3,
    "isMultiSelect": false,
    "domainId": 1,
    "domain": "Domain 1: General Security Concepts",
    "objective": "1.1-1.4 Security Controls, Cryptography, Identity & Access Management"
  },
  {
    "id": "e2-q73",
    "examSet": "Practice Exam 2",
    "examNum": 2,
    "questionNumber": 73,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "B",
    "explanation": "Correct Answer: B\n\nB. SDN is correct because software-defined networking virtualizes parts of a physical local network by separating the\ncontrol plane from the data plane, enabling centralized, programmable network management. D. SDV is incorrect\nbecause it is not a recognized networking technology. A. VDI is incorrect because Virtual Desktop Infrastructure\nvirtualizes user desktops, not the local network. C. SD-WAN is incorrect because software-defined WAN applies these\nprinciples to wide area networks connecting remote sites, not to a physical local network.",
    "question": "Which of the following virtualizes parts of a physical local network?",
    "options": [
      "VDI",
      "SDN",
      "SD-WAN",
      "SDV"
    ],
    "correctOption": 1,
    "isMultiSelect": false,
    "domainId": 3,
    "domain": "Domain 3: Security Architecture",
    "objective": "3.1-3.4 Security Architecture, Cloud, Infrastructure & Resilience"
  },
  {
    "id": "e2-q74",
    "examSet": "Practice Exam 2",
    "examNum": 2,
    "questionNumber": 74,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "D",
    "explanation": "Correct Answer: D\n\nA. WEP is incorrect. WEP (Wired Equivalent Privacy) is an outdated and broken protocol predating WPA3; it uses RC4\nencryption with known critical weaknesses. D. SAE is correct. Simultaneous Authentication of Equals replaces the\nPSK handshake in WPA3, using a Dragonfly key exchange that prevents offline dictionary attacks and provides\nforward secrecy during authentication. C. OWE is incorrect. OWE (Opportunistic Wireless Encryption) enhances open\nnetworks with encryption but does not address handshake authentication specifically. B. PXF is incorrect. PXF is not a\ndefined WPA3 security feature or protocol.",
    "question": "Which WPA3 security feature is designed to increase security at the time of the handshake?",
    "options": [
      "WEP",
      "PXF",
      "OWE",
      "SAE"
    ],
    "correctOption": 3,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e2-q75",
    "examSet": "Practice Exam 2",
    "examNum": 2,
    "questionNumber": 75,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "C",
    "explanation": "Correct Answer: C\n\nB. Block all attackers is incorrect. A honeypot is a passive decoy meant to be probed and studied; it observes and\nrecords attacker activity rather than blocking it. C. Provide threat intelligence is correct. A honeypot mimics a\nvulnerable server so that attackers interact with it; the resulting logs \u2014 tools, IP addresses, and techniques used \u2014\nyield threat intelligence that defenders apply to harden and detect attacks on production systems. D. Restore data\nbackups is incorrect. Backup and recovery are handled by dedicated backup systems; a honeypot holds no production\ndata to restore. A. Segment VLAN traffic is incorrect. Network segmentation is enforced by switches, VLANs, and\nfirewalls; a honeypot is a deception system, not a segmentation control.",
    "question": "A security team installs a honeypot that mimics a vulnerable server. What is the primary purpose of this\nconfiguration?",
    "options": [
      "Segment VLAN traffic",
      "Block all attackers",
      "Provide threat intelligence",
      "Restore data backups"
    ],
    "correctOption": 2,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e2-q76",
    "examSet": "Practice Exam 2",
    "examNum": 2,
    "questionNumber": 76,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "A",
    "explanation": "Correct Answer: A\n\nC. CVSS is incorrect. The Common Vulnerability Scoring System rates the severity of a vulnerability; it is a\nmeasurement, not a path an attacker uses to reach a target. A. Email phishing link is correct. A threat vector is the\nmeans or path an attacker uses to gain access, and a phishing link delivered by email is a classic message-based\nvector for delivering malware or stealing credentials. D. Password policy is incorrect. A password policy is a preventive\nadministrative control, not an avenue of attack. B. Firewall appliance is incorrect. A firewall is a defensive network\ncontrol used to filter traffic, not a vector attackers use to get in.",
    "question": "Which of the following is an example of a threat vector?",
    "options": [
      "Email phishing link",
      "Firewall appliance",
      "CVSS",
      "Password policy"
    ],
    "correctOption": 0,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e2-q77",
    "examSet": "Practice Exam 2",
    "examNum": 2,
    "questionNumber": 77,
    "questionType": "Matching",
    "correctAnswerRaw": "1 = C; 2 = A; 3 = D; 4 = B",
    "explanation": "Correct Answer: 1 = C; 2 = A; 3 = D; 4 = B\n\nThe correct pairings are: 443 = HTTPS; 22 = SSH; 53 = DNS; 3389 = RDP. Port 443 is used by HTTPS (HTTP over\nTLS/SSL) \u2014 the standard for encrypted web browsing and API communication. Port 22 is assigned to SSH (Secure\nShell), providing encrypted remote terminal access; it is also used by SFTP and SCP for secure file transfers. Port 53\nis used by DNS (Domain Name System) for name-to-IP resolution, typically UDP for queries and TCP for zone\ntransfers and large responses. Port 3389 is used by RDP (Remote Desktop Protocol), Microsoft's graphical remote\ndesktop service for Windows \u2014 it is a frequent target for brute-force attacks and exploitation, making its exposure to\nthe internet a high-risk configuration.",
    "question": "Match each port number to its corresponding protocol.",
    "matchingItems": [
      {
        "num": 1,
        "text": "443",
        "correctLetter": "C"
      },
      {
        "num": 2,
        "text": "22",
        "correctLetter": "A"
      },
      {
        "num": 3,
        "text": "53",
        "correctLetter": "D"
      },
      {
        "num": 4,
        "text": "3389",
        "correctLetter": "B"
      }
    ],
    "matchingDescriptions": [
      {
        "letter": "A",
        "text": "SSH"
      },
      {
        "letter": "B",
        "text": "RDP"
      },
      {
        "letter": "C",
        "text": "HTTPS"
      },
      {
        "letter": "D",
        "text": "DNS"
      }
    ],
    "correctMapping": {
      "1": "C",
      "2": "A",
      "3": "D",
      "4": "B"
    },
    "options": [
      "A. SSH",
      "B. RDP",
      "C. HTTPS",
      "D. DNS"
    ],
    "correctOption": 0,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e2-q78",
    "examSet": "Practice Exam 2",
    "examNum": 2,
    "questionNumber": 78,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "B",
    "explanation": "Correct Answer: B\n\nA. Boot from HDD and store data on SSD is incorrect because it speeds up file access but leaves boot operations on\nthe slower HDD. C. Boot from SSD and store data on HDD is incorrect because it speeds up booting but leaves file\nread/write operations on the slower HDD. B. Boot from SSD and store data on SSD is correct because it maximizes\nboth boot responsiveness and file read/write responsiveness, which the scenario prioritizes over cost and capacity. D.\nBoot from HDD and store data on HDD is incorrect because both booting and file operations would run on the slower\nmedium.",
    "question": "During capacity planning for a new file server, Shai's organization prioritizes maximum boot and file\nread/write responsiveness over cost and storage capacity. Which configuration best meets this\nrequirement?",
    "options": [
      "Boot from HDD and store data on SSD",
      "Boot from SSD and store data on SSD",
      "Boot from SSD and store data on HDD",
      "Boot from HDD and store data on HDD"
    ],
    "correctOption": 1,
    "isMultiSelect": false,
    "domainId": 1,
    "domain": "Domain 1: General Security Concepts",
    "objective": "1.1-1.4 Security Controls, Cryptography, Identity & Access Management"
  },
  {
    "id": "e2-q79",
    "examSet": "Practice Exam 2",
    "examNum": 2,
    "questionNumber": 79,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "A",
    "explanation": "Correct Answer: A\n\nD. Social engineering is incorrect. Social engineering is an attack category involving human manipulation \u2014 it has no\nrole in CVSS scoring. A. Exploitability is correct. In CVSS (Common Vulnerability Scoring System), the exploitability\nmetrics describe how easily a vulnerability can be leveraged by an attacker. These sub-metrics include Attack Vector,\nAttack Complexity, Privileges Required, and User Interaction. A high exploitability score indicates the vulnerability is\neasy to exploit remotely without special conditions. C. SQL injection is incorrect. SQL injection is a specific attack\ntechnique \u2014 not a CVSS scoring metric. B. Buffer overflow is incorrect. Buffer overflow is a vulnerability class and\nattack type, not a component of the CVSS framework.",
    "question": "Fill in the blank: The __________ value in CVSS reflects how easily a vulnerability can be exploited.",
    "options": [
      "Exploitability",
      "Buffer overflow",
      "SQL injection",
      "Social engineering"
    ],
    "correctOption": 0,
    "isMultiSelect": false,
    "domainId": 2,
    "domain": "Domain 2: Threats, Vulnerabilities & Mitigations",
    "objective": "2.1-2.4 Threats, Vulnerabilities, Attack Vectors & Mitigations"
  },
  {
    "id": "e2-q80",
    "examSet": "Practice Exam 2",
    "examNum": 2,
    "questionNumber": 80,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "C",
    "explanation": "Correct Answer: C\n\nA. \"The cloud network configuration does not require any servers\" is incorrect because serverless still runs on servers;\nthey are simply provisioned and managed by the cloud provider. C. \"Server resources of the cloud are inconspicuous\nto the end-user\" is correct because in serverless computing the provider manages the underlying servers and they are\ninvisible to the user, who only writes code and defines trigger events. D. \"Servers are run as VMs\" is incorrect because\nthat describes traditional virtualization, not the serverless model. B. \"All appliances are virtual and do not interact with\nphysical servers\" is incorrect because serverless workloads ultimately execute on the provider's physical servers.",
    "question": "What does the term \"serverless\" mean in cloud computing?",
    "options": [
      "The cloud network configuration does not require any servers",
      "All appliances are virtual and do not interact with physical servers",
      "Server resources of the cloud are inconspicuous to the end-user",
      "Servers are run as VMs"
    ],
    "correctOption": 2,
    "isMultiSelect": false,
    "domainId": 3,
    "domain": "Domain 3: Security Architecture",
    "objective": "3.1-3.4 Security Architecture, Cloud, Infrastructure & Resilience"
  },
  {
    "id": "e2-q81",
    "examSet": "Practice Exam 2",
    "examNum": 2,
    "questionNumber": 81,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "B",
    "explanation": "Correct Answer: B\n\nC. Threat hunting is incorrect. Threat hunting proactively searches an organization\u2019s own environment for signs of\nhidden compromise; it is not a review of a vendor\u2019s documentation. D. Vulnerability assessment is incorrect. A\nvulnerability assessment scans systems for technical weaknesses; reviewing documented policies and compliance\nposture is a governance evaluation, not a technical scan. B. Vendor risk management is correct. Evaluating a\nthird-party provider\u2019s security policies, procedures, and compliance posture before contracting is the assessment step\nof vendor (third-party) risk management. A. Digital forensics is incorrect. Digital forensics collects and analyzes\nevidence related to a security incident; it is not used to evaluate a prospective vendor.",
    "question": "An organization evaluates a third-party SaaS provider\u2019s documented security policies, procedures, and\ncompliance posture before signing a contract. What is this process called?",
    "options": [
      "Digital forensics",
      "Vendor risk management",
      "Threat hunting",
      "Vulnerability assessment"
    ],
    "correctOption": 1,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e2-q82",
    "examSet": "Practice Exam 2",
    "examNum": 2,
    "questionNumber": 82,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "A",
    "explanation": "Correct Answer: A\n\nD. Rootkit is incorrect. A rootkit hides its presence and maintains privileged access on a host; it does not\nself-propagate across a network on its own. A. Worm is correct. A worm is self-replicating malware that spreads\nautomatically from system to system across a network \u2014 for example by exploiting a service vulnerability \u2014 without\nany user having to open a file or click a link. B. Trojan is incorrect. A Trojan is disguised as legitimate software and\nrelies on a user to run it; it does not spread by itself. C. Spyware is incorrect. Spyware covertly collects information\nabout a user; its propagation typically depends on another delivery method rather than autonomous network\nspreading.",
    "question": "Which type of malware spreads across a network without requiring user interaction?",
    "options": [
      "Worm",
      "Trojan",
      "Spyware",
      "Rootkit"
    ],
    "correctOption": 0,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e2-q83",
    "examSet": "Practice Exam 2",
    "examNum": 2,
    "questionNumber": 83,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "B",
    "explanation": "Correct Answer: B\n\nB is correct (Maintaining the baseline by monitoring for configuration drift): a baseline is a living standard, not a\none-time template. After deployment, systems must be re-validated regularly with configuration-compliance scanning\nso that deviations such as new services or changed registry values are detected and corrected promptly. A is incorrect\n(Establishing the baseline from a recognized benchmark) because the team did establish it; the hardened image was\nbuilt from a benchmark. D is incorrect (Deploying the baseline through centralized configuration tools) because\ndeployment also happened; Group Policy pushed the image to every server. C is incorrect (Sandboxing the servers so\nthat new services cannot be installed) because sandboxing isolates untrusted code for analysis; it is not a baseline\nlifecycle activity and would not reveal drift in registry settings.",
    "question": "A systems team built a hardened server image from an industry benchmark and pushed it to every server\nwith Group Policy. Six months later, an audit finds unauthorized services running and registry settings that\nno longer match the image, and nobody had been notified. Which secure-baseline activity did the team fail\nto carry out?",
    "options": [
      "Establishing the baseline from a recognized benchmark",
      "Maintaining the baseline by monitoring for configuration drift",
      "Sandboxing the servers so that new services cannot be installed",
      "Deploying the baseline through centralized configuration tools"
    ],
    "correctOption": 1,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e2-q84",
    "examSet": "Practice Exam 2",
    "examNum": 2,
    "questionNumber": 84,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "B",
    "explanation": "Correct Answer: B\n\nB is correct (Virtual machine escape): VM escape occurs when a compromised guest breaks the hypervisor's isolation\nto reach the host or neighboring VMs. C is incorrect (Resource reuse): resource reuse is when leftover memory or\nstorage from one tenant is exposed to another, not a breakout from the guest. A is incorrect (Race condition): a race\ncondition exploits timing between a check and a use of a resource, which is unrelated to hypervisor isolation. D is\nincorrect (Directory traversal): directory traversal uses path sequences to read files outside a web root, not to escape\nvirtualization.",
    "question": "A penetration tester exploits a hypervisor flaw that lets code running inside one guest virtual machine\nbreak out and reach the host and other guests. Which vulnerability class does this demonstrate?",
    "options": [
      "Race condition",
      "Virtual machine escape",
      "Resource reuse",
      "Directory traversal"
    ],
    "correctOption": 1,
    "isMultiSelect": false,
    "domainId": 4,
    "domain": "Domain 4: Security Operations",
    "objective": "4.1-4.4 Security Operations, Monitoring, Incident Response & Forensics"
  },
  {
    "id": "e2-q85",
    "examSet": "Practice Exam 2",
    "examNum": 2,
    "questionNumber": 85,
    "questionType": "Ordering",
    "correctAnswerRaw": "B > D > F > E > A > C",
    "explanation": "Correct Answer: B > D > F > E > A > C\n\nCorrect order: 1. A user opens a phishing email attachment, giving initial access \u2014 the intrusion usually starts with a\nmessage-based vector. 2. The malware executes and installs on the host \u2014 the payload runs and gains a foothold. 3.\nThe malware establishes a command-and-control channel \u2014 it reaches out for instructions. 4. The attacker moves\nlaterally to additional systems \u2014 access is expanded across the network. 5. Files are encrypted across the reachable\nsystems \u2014 the payload locks data on every system it can reach. 6. A ransom demand is displayed \u2014 the victim is told\nto pay to recover access.",
    "question": "Arrange the stages of a typical ransomware intrusion in the order they occur. Place the following in the correct order:",
    "orderingItems": [
      {
        "letter": "A",
        "text": "Files are encrypted across the reachable systems"
      },
      {
        "letter": "B",
        "text": "A user opens a phishing email attachment, giving initial access"
      },
      {
        "letter": "C",
        "text": "A ransom demand is displayed"
      },
      {
        "letter": "D",
        "text": "The malware executes and installs on the host"
      },
      {
        "letter": "E",
        "text": "The attacker moves laterally to additional systems"
      },
      {
        "letter": "F",
        "text": "The malware establishes a command-and-control channel"
      }
    ],
    "correctOrder": [
      "B",
      "D",
      "F",
      "E",
      "A",
      "C"
    ],
    "options": [
      "A. Files are encrypted across the reachable systems",
      "B. A user opens a phishing email attachment, giving initial access",
      "C. A ransom demand is displayed",
      "D. The malware executes and installs on the host",
      "E. The attacker moves laterally to additional systems",
      "F. The malware establishes a command-and-control channel"
    ],
    "correctOption": 0,
    "domainId": 2,
    "domain": "Domain 2: Threats, Vulnerabilities & Mitigations",
    "objective": "2.1-2.4 Threats, Vulnerabilities, Attack Vectors & Mitigations"
  },
  {
    "id": "e2-q86",
    "examSet": "Practice Exam 2",
    "examNum": 2,
    "questionNumber": 86,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "A",
    "explanation": "Correct Answer: A\n\nA. Correct \u2014 data masking creates a copy of the original data in which sensitive elements are obfuscated (for\nexample, replaced or partially hidden), preserving a usable, structurally similar substitute for processes that do not\nneed the real values. B. \"Data protecting\" is not a defined data-security method. C. \"Data tokening\" is not the correct\nterm; tokenization replaces data with a token that maps to the original stored elsewhere, a different method from\ncopying-and-obfuscating. D. \"Data covering\" is not a recognized data-security method.",
    "question": "Which of the following data security methods creates a copy of the original data but uses obfuscation on\nany sensitive elements?",
    "options": [
      "Data masking",
      "Data protecting",
      "Data tokening",
      "Data covering"
    ],
    "correctOption": 0,
    "isMultiSelect": false,
    "domainId": 1,
    "domain": "Domain 1: General Security Concepts",
    "objective": "1.1-1.4 Security Controls, Cryptography, Identity & Access Management"
  },
  {
    "id": "e2-q87",
    "examSet": "Practice Exam 2",
    "examNum": 2,
    "questionNumber": 87,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "C",
    "explanation": "Correct Answer: C\n\nB. Block known threats is incorrect. Blocking known threats is the job of a firewall, IPS, or antivirus; a vulnerability scan\nreports issues but does not block traffic. C. Identify misconfigurations and weaknesses is correct. A vulnerability scan\nenumerates hosts and services and compares them against a database of known flaws and insecure settings,\nproducing a prioritized list of weaknesses to remediate. A. Exploit system vulnerabilities is incorrect. Actively exploiting\nweaknesses is penetration testing; a vulnerability scan identifies without exploiting. D. Prevent data exfiltration is\nincorrect. Preventing data from leaving the organization is the role of data loss prevention (DLP), not the goal of a\nvulnerability scan.",
    "question": "What is the main goal of a vulnerability scan?",
    "options": [
      "Exploit system vulnerabilities",
      "Block known threats",
      "Identify misconfigurations and weaknesses",
      "Prevent data exfiltration"
    ],
    "correctOption": 2,
    "isMultiSelect": false,
    "domainId": 3,
    "domain": "Domain 3: Security Architecture",
    "objective": "3.1-3.4 Security Architecture, Cloud, Infrastructure & Resilience"
  },
  {
    "id": "e2-q88",
    "examSet": "Practice Exam 2",
    "examNum": 2,
    "questionNumber": 88,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "A",
    "explanation": "Correct Answer: A\n\nC. Cross-site request forgery is incorrect. CSRF tricks an authenticated user's browser into sending unwanted\nrequests; it does not inject code through a web form. A. Input validation flaw is correct. When a web form fails to\nvalidate or sanitize input, attackers can submit unexpected code (such as SQL injection or cross-site scripting\npayloads); the underlying weakness is improper input validation. D. URL redirection is incorrect. Unvalidated redirects\nsend users to untrusted sites; they are not about injecting code into a form field. B. Packet sniffing is incorrect. Sniffing\npassively captures network traffic and involves no code injection into a web form.",
    "question": "What kind of vulnerability allows attackers to inject unexpected code into a web form?",
    "options": [
      "Input validation flaw",
      "Packet sniffing",
      "Cross-site request forgery",
      "URL redirection"
    ],
    "correctOption": 0,
    "isMultiSelect": false,
    "domainId": 2,
    "domain": "Domain 2: Threats, Vulnerabilities & Mitigations",
    "objective": "2.1-2.4 Threats, Vulnerabilities, Attack Vectors & Mitigations"
  },
  {
    "id": "e2-q89",
    "examSet": "Practice Exam 2",
    "examNum": 2,
    "questionNumber": 89,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "A",
    "explanation": "Correct Answer: A\n\nA (SLE) is correct: single loss expectancy is the expected monetary loss each time a specific risk occurs. It is\ncalculated as SLE = asset value (AV) x exposure factor (EF), where the exposure factor is the percentage of the\nasset's value that would be lost in one incident, so it is precisely the figure Emiliano needs. D (AV) is incorrect because\nasset value is only an input to the calculation, the worth of the asset itself, not the loss expected from a single event. C\n(ARO) is incorrect because the annualized rate of occurrence expresses how many times per year the risk is expected\nto happen, a frequency rather than a monetary amount. B (ALE) is incorrect because annualized loss expectancy\nmultiplies SLE by ARO to give the expected loss per year across all occurrences, not the loss from one occurrence.",
    "question": "Emiliano needs to determine the expected monetary loss every time a risk occurs. Which formula will he\nuse?",
    "options": [
      "SLE",
      "ALE",
      "ARO",
      "AV"
    ],
    "correctOption": 0,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e2-q90",
    "examSet": "Practice Exam 2",
    "examNum": 2,
    "questionNumber": 90,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "C",
    "explanation": "Correct Answer: C\n\nC (A benign activity incorrectly flagged as malicious) is correct: a false positive is an alert raised on something\nharmless, and although it is safer than missing an attack, a high false positive rate drives alert fatigue and wastes\nanalyst time. A (A legitimate alert that analysts close without reviewing it) is incorrect because that is a triage or\nprocess failure on a true positive, not a misclassification by the tool. B (A real threat that the detection tool fails to\ncatch) is incorrect because that defines a false negative, the dangerous opposite case. D (A phishing attempt that\nsuccessfully steals a user's credentials) is incorrect because it describes the outcome of an attack - a security incident\nto be handled - and not a category of detection accuracy at all.",
    "question": "Which of the following best defines a \"false positive\" in a security monitoring context?",
    "options": [
      "A legitimate alert that analysts close without reviewing it",
      "A real threat that the detection tool fails to catch",
      "A benign activity incorrectly flagged as malicious",
      "A phishing attempt that successfully steals a user's credentials"
    ],
    "correctOption": 2,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e3-q01",
    "examSet": "Practice Exam 3",
    "examNum": 3,
    "questionNumber": 1,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "D",
    "explanation": "Correct Answer: D\n\nD (Real-time threat containment and investigation) is correct: EDR agents continuously record process, file and\nnetwork activity on the endpoint, flag suspicious behaviour, and let an analyst isolate the host, kill processes and\nreconstruct the timeline. B (DNS resolution logging as the agent's only telemetry) is incorrect because DNS activity is\none narrow signal an EDR may collect, not the whole of what the product does. C (Web application request filtering at\nthe network edge) is incorrect because inspecting HTTP requests to protect a web application is the role of a WAF, not\nof an endpoint agent. A (Automated full-disk backup and imaging) is incorrect because scheduled imaging belongs to\nbackup software and serves recovery, not detection.",
    "question": "Which of the following is a common feature of endpoint detection and response (EDR) solutions?",
    "options": [
      "Automated full-disk backup and imaging",
      "DNS resolution logging as the agent's only telemetry",
      "Web application request filtering at the network edge",
      "Real-time threat containment and investigation"
    ],
    "correctOption": 3,
    "isMultiSelect": false,
    "domainId": 4,
    "domain": "Domain 4: Security Operations",
    "objective": "4.1-4.4 Security Operations, Monitoring, Incident Response & Forensics"
  },
  {
    "id": "e3-q02",
    "examSet": "Practice Exam 3",
    "examNum": 3,
    "questionNumber": 2,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "B",
    "explanation": "Correct Answer: B\n\nB. 'Security automation always requires both AI and ML' is the statement that is NOT correct. Automation is typically\nbuilt from scripts, playbooks, and API integrations; AI and ML can enhance it, but neither is required. A. is a true\nstatement \u2014 ticket creation and alert escalation are standard automation use cases. C. is true \u2014 enforcing secure\nbaselines and standard infrastructure configurations is a recognized benefit of automation. D. is true \u2014 enabling and\ndisabling services and access is a common automation use case in provisioning and incident response.",
    "question": "Which of the following is NOT correct about security automation?",
    "options": [
      "Automation can create tickets and escalate alerts.",
      "Security automation always requires both AI and ML.",
      "Automation can help enforce baselines and standard configurations.",
      "Automation can enable or disable services and access."
    ],
    "correctOption": 1,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e3-q03",
    "examSet": "Practice Exam 3",
    "examNum": 3,
    "questionNumber": 3,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "B",
    "explanation": "Correct Answer: B\n\nD. SoC is incorrect. A System on a Chip integrates a full processor, memory, and peripherals on one die - it is a\ncomplete computer subsystem, not the minimal microcontroller board best suited to a simple factory-floor controller. A.\nRaspberry Pi is incorrect. The Raspberry Pi runs a full microprocessor and a general-purpose operating system; it is\nmore capable (and more complex) than needed to drive a single device controller. B. Arduino is correct. Arduino\nboards are small, low-cost microcontroller boards designed exactly for embedded control tasks like reading sensors\nand driving actuators on a factory floor, with no operating system to manage. C. FPGA is incorrect. A\nField-Programmable Gate Array is reconfigurable logic hardware programmed at the gate level - powerful for custom\ndigital circuits but far more complex than required for a straightforward device controller.",
    "question": "Yusuf has been asked to experiment with different hardware to create a controller for a new device on the\nfactory floor. He needs a credit-card-sized motherboard that has a microcontroller instead of a\nmicroprocessor. Which would be the best solution?",
    "options": [
      "Raspberry Pi",
      "Arduino",
      "FPGA",
      "SoC"
    ],
    "correctOption": 1,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e3-q04",
    "examSet": "Practice Exam 3",
    "examNum": 3,
    "questionNumber": 4,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "A",
    "explanation": "Correct Answer: A\n\nB. Heuristic analysis is incorrect. Heuristic analysis identifies unknown threats by examining behavioral characteristics\nand code patterns \u2014 it is a detection method, not a file of known patterns. A. Signature is correct. A signature file\ncontains known patterns (byte sequences, hash values, or code strings) extracted from previously identified malware.\nAntivirus engines compare scanned files against these signatures to detect known threats quickly and accurately. C.\nBehavioral analysis is incorrect. Behavioral analysis monitors how programs execute at runtime to detect suspicious\nactivity \u2014 it does not rely on pre-stored pattern files. D. Anomaly detection is incorrect. Anomaly detection flags\ndeviations from an established baseline \u2014 it is not a file of known malicious patterns.",
    "question": "Fill in the blank: A __________ is a file that contains known patterns used to identify malicious code.",
    "options": [
      "Signature",
      "Heuristic analysis",
      "Behavioral analysis",
      "Anomaly detection"
    ],
    "correctOption": 0,
    "isMultiSelect": false,
    "domainId": 1,
    "domain": "Domain 1: General Security Concepts",
    "objective": "1.1-1.4 Security Controls, Cryptography, Identity & Access Management"
  },
  {
    "id": "e3-q05",
    "examSet": "Practice Exam 3",
    "examNum": 3,
    "questionNumber": 5,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "C",
    "explanation": "Correct Answer: C\n\nA. Social engineering is incorrect. Social engineering is a category of attack exploiting human behavior, not a type of\nsoftware vulnerability classification. B. Malware is incorrect. Malware is a general term for malicious software \u2014 it is\nnot a vulnerability descriptor. D. Phishing is incorrect. Phishing is a social engineering attack method \u2014 not a term\ndescribing the patch status of a disclosed vulnerability. C. Zero-day is correct. A zero-day vulnerability is one that has\nbeen publicly disclosed but for which no vendor patch yet exists \u2014 named because defenders have 'zero days' to\napply a fix. Attackers may exploit it while the vendor works on a patch, creating a critical window of exposure.",
    "question": "Fill in the blank: A __________ vulnerability is one that has been publicly disclosed but not yet patched by\nthe vendor.",
    "options": [
      "Social engineering",
      "Malware",
      "Zero-day",
      "Phishing"
    ],
    "correctOption": 2,
    "isMultiSelect": false,
    "domainId": 2,
    "domain": "Domain 2: Threats, Vulnerabilities & Mitigations",
    "objective": "2.1-2.4 Threats, Vulnerabilities, Attack Vectors & Mitigations"
  },
  {
    "id": "e3-q06",
    "examSet": "Practice Exam 3",
    "examNum": 3,
    "questionNumber": 6,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "C",
    "explanation": "Correct Answer: C\n\nB. Phishing is incorrect. Phishing is a social engineering attack that tricks users via fraudulent emails or websites \u2014 it\ndoes not involve overwhelming a target with network traffic. D. Buffer overflow is incorrect. A buffer overflow occurs\nwhen a program writes more data to a memory buffer than it can hold, potentially enabling code execution \u2014 it is a\nsoftware vulnerability, not a traffic-based availability attack. A. Man-in-the-middle is incorrect. A MITM attack intercepts\ncommunication between two parties to eavesdrop or alter data \u2014 it does not flood a target to deny service. C.\nDenial-of-service (DoS) is correct. A DoS attack floods a target system, server, or network with traffic or requests,\nexhausting its processing capacity or bandwidth and making it unavailable to legitimate users. When coordinated from\nmany compromised hosts simultaneously, it becomes a Distributed DoS (DDoS), significantly amplifying the attack\nvolume.",
    "question": "Fill in the blank: __________ is a process in which legitimate users are denied access due to\noverwhelming traffic.",
    "options": [
      "Man-in-the-middle",
      "Phishing",
      "Denial-of-service (DoS)",
      "Buffer overflow"
    ],
    "correctOption": 2,
    "isMultiSelect": false,
    "domainId": 2,
    "domain": "Domain 2: Threats, Vulnerabilities & Mitigations",
    "objective": "2.1-2.4 Threats, Vulnerabilities, Attack Vectors & Mitigations"
  },
  {
    "id": "e3-q07",
    "examSet": "Practice Exam 3",
    "examNum": 3,
    "questionNumber": 7,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "C",
    "explanation": "Correct Answer: C\n\nC is correct (Unknown environment): in an unknown environment test, sometimes called black box, the testers start\nwith no internal knowledge and must discover the attack surface through reconnaissance, which most closely\nsimulates an external attacker. D is incorrect (Partially known environment) because a partially known test gives\ntesters some information, such as an IP range, an architecture overview, or a standard user account, to focus the\neffort. B is incorrect (Known environment) because a known environment test provides full documentation, credentials,\nand often source code, so the engagement is about depth rather than discovery. A is incorrect (Integrated) because\nintegrated testing describes offensive and defensive teams working together during the exercise; it concerns who\nparticipates, not how much information the testers receive.",
    "question": "A company hires a firm to test its internet-facing systems. The testers receive only the company name and\nare told to discover the target systems themselves; no network diagrams, credentials, or source code are\nprovided. Which type of penetration test is this?",
    "options": [
      "Integrated",
      "Known environment",
      "Unknown environment",
      "Partially known environment"
    ],
    "correctOption": 2,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e3-q08",
    "examSet": "Practice Exam 3",
    "examNum": 3,
    "questionNumber": 8,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "D",
    "explanation": "Correct Answer: D\n\nB. Keylogger is incorrect. A keylogger records keystrokes to steal credentials; it does not encrypt or rename a victim's\nfiles. A. Worm is incorrect. A worm self-propagates across systems; spreading is its defining behavior, not encrypting\nfiles and changing their extensions. D. Ransomware is correct. Systematically encrypting files one by one and\nappending an unusual extension is the classic signature of ransomware, which locks the victim's data and then\ndemands payment for the decryption key. C. Rootkit is incorrect. A rootkit hides its presence and maintains privileged\naccess; it conceals activity rather than openly encrypting and renaming files.",
    "question": "A user reports that files are being encrypted one by one and renamed with a strange extension. What type\nof malware is likely involved?",
    "options": [
      "Worm",
      "Keylogger",
      "Rootkit",
      "Ransomware"
    ],
    "correctOption": 3,
    "isMultiSelect": false,
    "domainId": 2,
    "domain": "Domain 2: Threats, Vulnerabilities & Mitigations",
    "objective": "2.1-2.4 Threats, Vulnerabilities, Attack Vectors & Mitigations"
  },
  {
    "id": "e3-q09",
    "examSet": "Practice Exam 3",
    "examNum": 3,
    "questionNumber": 9,
    "questionType": "Matching",
    "correctAnswerRaw": "1 = A; 2 = B; 3 = D; 4 = C",
    "explanation": "Correct Answer: 1 = A; 2 = B; 3 = D; 4 = C\n\nThe Incident commander pairs with \"Has overall authority during a security event\" since this role owns strategic\ndecisions and coordinates all other responders. The Communications coordinator pairs with \"Manages internal and\nexternal reporting,\" handling messaging to employees, customers, regulators, and the press so that technical teams\ncan focus on remediation. The Legal advisor pairs with \"Ensures regulatory and legal compliance,\" guiding\nchain-of-custody, breach-notification timing, and evidence handling. The Technical lead pairs with \"Coordinates\nforensic containment and eradication,\" driving the hands-on actions to isolate systems, remove the threat, and restore\nservices.",
    "question": "Match each incident response role with its responsibility.",
    "matchingItems": [
      {
        "num": 1,
        "text": "Incident commander",
        "correctLetter": "A"
      },
      {
        "num": 2,
        "text": "Communications coordinator",
        "correctLetter": "B"
      },
      {
        "num": 3,
        "text": "Legal advisor",
        "correctLetter": "D"
      },
      {
        "num": 4,
        "text": "Technical lead",
        "correctLetter": "C"
      }
    ],
    "matchingDescriptions": [
      {
        "letter": "A",
        "text": "Has overall authority during a security event"
      },
      {
        "letter": "B",
        "text": "Manages internal and external reporting"
      },
      {
        "letter": "C",
        "text": "Coordinates forensic containment and eradication"
      },
      {
        "letter": "D",
        "text": "Ensures regulatory and legal compliance"
      }
    ],
    "correctMapping": {
      "1": "A",
      "2": "B",
      "3": "D",
      "4": "C"
    },
    "options": [
      "A. Has overall authority during a security event",
      "B. Manages internal and external reporting",
      "C. Coordinates forensic containment and eradication",
      "D. Ensures regulatory and legal compliance"
    ],
    "correctOption": 0,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e3-q10",
    "examSet": "Practice Exam 3",
    "examNum": 3,
    "questionNumber": 10,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "D",
    "explanation": "Correct Answer: D\n\nD. Provisioning is correct. Provisioning is the IAM lifecycle process of creating, modifying, and revoking user accounts\nand access rights to systems, applications, and data. It encompasses the full lifecycle: granting access at onboarding,\nadjusting permissions as roles change, and removing access during offboarding (deprovisioning). A. Forensic imaging\nis incorrect. Forensic imaging creates a bit-for-bit copy of storage media for investigation and evidence preservation \u2014\nit is an incident response activity unrelated to access management. B. Threat hunting is incorrect. Threat hunting\nproactively searches for hidden adversaries in the environment \u2014 it does not manage user access rights. C. Playbook\nexecution is incorrect. Playbook execution follows predefined incident response procedures \u2014 it is not an identity or\naccess management process.",
    "question": "Fill in the blank: The process of granting, modifying, or revoking access to systems or resources is called\n__________.",
    "options": [
      "Forensic imaging",
      "Threat hunting",
      "Playbook execution",
      "Provisioning"
    ],
    "correctOption": 3,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e3-q11",
    "examSet": "Practice Exam 3",
    "examNum": 3,
    "questionNumber": 11,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "A",
    "explanation": "Correct Answer: A\n\nB. Push-button is incorrect. The push-button (PBC) method requires physical presence and only has a short activation\nwindow, so it is not the primary WPS weakness. A. PIN is correct. The 8-digit WPS PIN is validated in two halves,\neffectively reducing the keyspace to about 11,000 combinations. Tools like Reaver can brute-force it in hours, allowing\nattackers to recover the WPA/WPA2 passphrase. D. NXC is incorrect. NXC is not a defined WPS method; it is a\ndistractor. C. Click-to-send is incorrect. This is not a recognized WPS provisioning method.",
    "question": "Which WPS connection method is most susceptible to a remote brute-force attack?",
    "options": [
      "PIN",
      "Push-button",
      "Click-to-send",
      "NXC"
    ],
    "correctOption": 0,
    "isMultiSelect": false,
    "domainId": 3,
    "domain": "Domain 3: Security Architecture",
    "objective": "3.1-3.4 Security Architecture, Cloud, Infrastructure & Resilience"
  },
  {
    "id": "e3-q12",
    "examSet": "Practice Exam 3",
    "examNum": 3,
    "questionNumber": 12,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "B",
    "explanation": "Correct Answer: B\n\nD. \"Scripting can integrate security tools through APIs\" is a true statement, so it is not the answer; integrations and\napplication programming interfaces (APIs) are a standard automation use case. C. \"Scripting can automate\nuser-provisioning tasks\" is a true statement, so it is not the answer; user provisioning is one of the most common\nscripting use cases. A. \"Scripting can help enforce standard infrastructure configurations and guard rails\" is a true\nstatement, so it is not the answer; automation is regularly used to apply baselines and guard rails consistently. B.\n\"Scripting should not be used for automation\" is the correct answer because the statement is false: automation is one\nof the primary reasons scripting is used in security operations.",
    "question": "Lyam is researching scripting. Which of the following is NOT correct about scripting?",
    "options": [
      "Scripting can help enforce standard infrastructure configurations and guard rails.",
      "Scripting should not be used for automation.",
      "Scripting can automate user-provisioning tasks.",
      "Scripting can integrate security tools through APIs."
    ],
    "correctOption": 1,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e3-q13",
    "examSet": "Practice Exam 3",
    "examNum": 3,
    "questionNumber": 13,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "C",
    "explanation": "Correct Answer: C\n\nB. Application log is incorrect because it records events generated by a specific application (errors, transactions, user\nactions), not information that describes other data. D. Network log is incorrect because it captures traffic and\nconnection activity between hosts, such as source and destination addresses, not descriptions of other data. C.\nMetadata log is correct because metadata is \"data about data\" \u2014 details such as a file's creation date, size, owner,\nand permissions \u2014 so a metadata log records information that describes other data. A. Endpoint log is incorrect\nbecause it records activity on a specific device (processes, logins, local security events), not descriptive information\nabout other data.",
    "question": "Which of the following logs contains data that describes information about other data?",
    "options": [
      "Endpoint log",
      "Application log",
      "Metadata log",
      "Network log"
    ],
    "correctOption": 2,
    "isMultiSelect": false,
    "domainId": 1,
    "domain": "Domain 1: General Security Concepts",
    "objective": "1.1-1.4 Security Controls, Cryptography, Identity & Access Management"
  },
  {
    "id": "e3-q14",
    "examSet": "Practice Exam 3",
    "examNum": 3,
    "questionNumber": 14,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "C",
    "explanation": "Correct Answer: C\n\nD. SORA is incorrect. SORA is not a recognized Security+ acronym for an application development policy and does\nnot describe how software is built. A. SCAP is incorrect. SCAP (Security Content Automation Protocol) is a suite of\nspecifications for standardized vulnerability and configuration reporting, not a development policy. C. SDLC is correct.\nThe Software Development Life Cycle defines the phases, controls, and policies that govern how applications are\nplanned, developed, tested, deployed, and maintained. B. SARC is incorrect. SARC is not a standard Security+ term\nfor software development governance.",
    "question": "Which policy outlines how applications should be developed?",
    "options": [
      "SCAP",
      "SARC",
      "SDLC",
      "SORA"
    ],
    "correctOption": 2,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e3-q15",
    "examSet": "Practice Exam 3",
    "examNum": 3,
    "questionNumber": 15,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "D",
    "explanation": "Correct Answer: D\n\nA. Weak Wi-Fi encryption is incorrect. Attacking weak wireless encryption targets the network link, not the trusted\nwebsites a victim group visits. C. USB device insertion is incorrect. That describes a removable-device or baiting\nvector, not the mechanism of a watering hole attack. D. Frequently visited websites is correct. In a watering hole\nattack, the adversary compromises a legitimate website known to be frequented by the target group, so that members\nare infected when they browse a site they already trust. B. Overused passwords is incorrect. Reused or weak\npasswords are exploited by credential attacks such as spraying or stuffing, not by a watering hole.",
    "question": "What does a watering hole attack attempt to exploit?",
    "options": [
      "Weak Wi-Fi encryption",
      "Overused passwords",
      "USB device insertion",
      "Frequently visited websites"
    ],
    "correctOption": 3,
    "isMultiSelect": false,
    "domainId": 1,
    "domain": "Domain 1: General Security Concepts",
    "objective": "1.1-1.4 Security Controls, Cryptography, Identity & Access Management"
  },
  {
    "id": "e3-q16",
    "examSet": "Practice Exam 3",
    "examNum": 3,
    "questionNumber": 16,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "C",
    "explanation": "Correct Answer: C\n\nC is correct (A right-to-audit clause): a right-to-audit clause gives the customer the contractual authority to examine the\nvendor's controls, processes, and records, directly or through an independent assessor, so that compliance with\nsecurity and regulatory obligations can be verified rather than assumed. A is incorrect (A non-disclosure agreement)\nbecause an NDA restricts how confidential information may be shared; it grants no inspection rights. B is incorrect (A\nstatement of rules of engagement) because rules of engagement define the scope, timing, and limits of a penetration\ntest, not ongoing audit rights over a supplier. D is incorrect (A conflict-of-interest disclosure) because it reveals\nrelationships that could bias vendor selection; it does not give the customer any ability to inspect the vendor's\nenvironment.",
    "question": "A hospital is negotiating a contract with a cloud provider that will store patient records. The compliance\nteam insists that the contract allow the hospital, or an assessor acting for it, to inspect the provider's\nsecurity controls and relevant records during the relationship. Which contractual element satisfies this\nrequirement?",
    "options": [
      "A non-disclosure agreement",
      "A statement of rules of engagement",
      "A right-to-audit clause",
      "A conflict-of-interest disclosure"
    ],
    "correctOption": 2,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e3-q17",
    "examSet": "Practice Exam 3",
    "examNum": 3,
    "questionNumber": 17,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "A",
    "explanation": "Correct Answer: A\n\nC. Principle of least privilege is incorrect. Least privilege grants each user or process only the permissions needed for\nits role; it governs assigned rights, not a blanket deny-unless-allowed rule on traffic. A. Default deny is correct. A\ndefault-deny stance blocks all traffic or access unless a rule explicitly permits it, so anything not expressly allowed is\nrejected, exactly the behavior described. D. Zero trust is incorrect. Zero trust is a broader architecture that\ncontinuously verifies every request; default deny can be one element of it, but the specific 'deny unless explicitly\nallowed' rule is the default-deny principle itself. B. Role-based access is incorrect. RBAC assigns permissions based\non job roles; it defines who may do what, not the deny-all-by-default posture for network traffic.",
    "question": "A system is configured to deny all network traffic unless explicitly allowed. What security principle does this\ndemonstrate?",
    "options": [
      "Default deny",
      "Role-based access",
      "Principle of least privilege",
      "Zero trust"
    ],
    "correctOption": 0,
    "isMultiSelect": false,
    "domainId": 3,
    "domain": "Domain 3: Security Architecture",
    "objective": "3.1-3.4 Security Architecture, Cloud, Infrastructure & Resilience"
  },
  {
    "id": "e3-q18",
    "examSet": "Practice Exam 3",
    "examNum": 3,
    "questionNumber": 18,
    "questionType": "Matching",
    "correctAnswerRaw": "1 = D; 2 = B; 3 = A; 4 = C",
    "explanation": "Correct Answer: 1 = D; 2 = B; 3 = A; 4 = C\n\nAgent-based monitoring pairs with \u201cRequires local software installation\u201d because an agent runs on the host itself,\ncollecting telemetry directly from the operating system. Agentless monitoring pairs with \u201cUses remote access protocols\nwithout client installation,\u201d leveraging WMI, SSH, SNMP, or APIs to gather data without deploying software.\nSignature-based detection pairs with \u201cCompares observed artifacts or activity against known malicious signatures,\u201d\nmatching files, hashes, and traffic against a database of known indicators. Heuristic detection pairs with \u201cAnalyzes\nbehavior to identify unknown threats,\u201d using rules, statistical models, or behavioral analysis to flag suspicious activity\nthat no signature yet covers.",
    "question": "Match each monitoring method to its description.",
    "matchingItems": [
      {
        "num": 1,
        "text": "Agent-based monitoring",
        "correctLetter": "D"
      },
      {
        "num": 2,
        "text": "Agentless monitoring",
        "correctLetter": "B"
      },
      {
        "num": 3,
        "text": "Signature-based detection",
        "correctLetter": "A"
      },
      {
        "num": 4,
        "text": "Heuristic detection",
        "correctLetter": "C"
      }
    ],
    "matchingDescriptions": [
      {
        "letter": "A",
        "text": "Compares observed artifacts or activity against known malicious signatures"
      },
      {
        "letter": "B",
        "text": "Uses remote access protocols without client installation"
      },
      {
        "letter": "C",
        "text": "Analyzes behavior to identify unknown threats"
      },
      {
        "letter": "D",
        "text": "Requires local software installation"
      }
    ],
    "correctMapping": {
      "1": "D",
      "2": "B",
      "3": "A",
      "4": "C"
    },
    "options": [
      "A. Compares observed artifacts or activity against known malicious signatures",
      "B. Uses remote access protocols without client installation",
      "C. Analyzes behavior to identify unknown threats",
      "D. Requires local software installation"
    ],
    "correctOption": 0,
    "domainId": 1,
    "domain": "Domain 1: General Security Concepts",
    "objective": "1.1-1.4 Security Controls, Cryptography, Identity & Access Management"
  },
  {
    "id": "e3-q19",
    "examSet": "Practice Exam 3",
    "examNum": 3,
    "questionNumber": 19,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "A",
    "explanation": "Correct Answer: A\n\nC. SLA is incorrect. A service-level agreement defines measurable performance targets, such as uptime or response\ntimes, for a specific service; it is not the umbrella contract that governs the whole relationship. A. MSA is correct. A\nmaster service agreement establishes the overarching terms and conditions between the two parties, and each future\nproject is then executed under it through its own work order or statement of work. D. MOU is incorrect. A memorandum\nof understanding records a mutual, often non-binding, intent to work together; it does not serve as the binding\nframework contract for future statements of work. B. BPA is incorrect. A business partners agreement defines each\npartner's responsibilities and stake in a shared business venture, not a framework for future service engagements with\na vendor.",
    "question": "A company is negotiating a long-term relationship with an IT services vendor. They want one overarching\ncontract that defines the general terms and conditions of the relationship, with each future project to be\ndefined in its own statement of work. Which agreement type should they use?",
    "options": [
      "MSA",
      "BPA",
      "SLA",
      "MOU"
    ],
    "correctOption": 0,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e3-q20",
    "examSet": "Practice Exam 3",
    "examNum": 3,
    "questionNumber": 20,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "A",
    "explanation": "Correct Answer: A\n\nB. Evil twin is incorrect. An evil twin is a rogue wireless access point that impersonates a legitimate SSID to lure\nvictims; it is a specific wireless setup, not the general act of intercepting and altering traffic between two parties. C.\nSession replay is incorrect. A replay attack captures valid data such as a session token and resends it later to\nimpersonate a user; it reuses traffic rather than sitting between the parties and modifying their live communication. A.\nMan-in-the-middle is correct. In a man-in-the-middle (on-path) attack, the attacker secretly positions themselves\nbetween two communicating parties, relaying and potentially altering the messages while both sides believe they are\ntalking directly to each other. D. DNS tunneling is incorrect. DNS tunneling encodes data inside DNS queries and\nresponses to bypass controls or exfiltrate data; it is a covert channel technique, not the interception and alteration of a\nconversation.",
    "question": "Which of the following terms describes a process where an attacker intercepts and alters communications\nbetween two parties without their knowledge?",
    "options": [
      "Man-in-the-middle",
      "Evil twin",
      "Session replay",
      "DNS tunneling"
    ],
    "correctOption": 0,
    "isMultiSelect": false,
    "domainId": 2,
    "domain": "Domain 2: Threats, Vulnerabilities & Mitigations",
    "objective": "2.1-2.4 Threats, Vulnerabilities, Attack Vectors & Mitigations"
  },
  {
    "id": "e3-q21",
    "examSet": "Practice Exam 3",
    "examNum": 3,
    "questionNumber": 21,
    "questionType": "Matching",
    "correctAnswerRaw": "1 = C; 2 = D; 3 = B; 4 = A",
    "explanation": "Correct Answer: 1 = C; 2 = D; 3 = B; 4 = A\n\nHIPAA matches \"Health information privacy\" because it is the U.S. law protecting Protected Health Information (PHI)\nhandled by covered entities and business associates. NIST CSF matches \"Cybersecurity risk management\" since the\nframework's five core functions (Identify, Protect, Detect, Respond, Recover) are designed to help organizations\nmanage cyber risk systematically. PCI DSS matches \"Payment security standards\" as it is the industry standard that\nmandates controls for any entity handling cardholder data. GDPR matches \"Personal data protection for EU residents\"\nbecause it governs how personal data of EU data subjects must be collected, processed, stored, and disclosed.",
    "question": "Match each framework or law with its focus.",
    "matchingItems": [
      {
        "num": 1,
        "text": "HIPAA",
        "correctLetter": "C"
      },
      {
        "num": 2,
        "text": "NIST CSF",
        "correctLetter": "D"
      },
      {
        "num": 3,
        "text": "PCI DSS",
        "correctLetter": "B"
      },
      {
        "num": 4,
        "text": "GDPR",
        "correctLetter": "A"
      }
    ],
    "matchingDescriptions": [
      {
        "letter": "A",
        "text": "Personal data protection for EU residents"
      },
      {
        "letter": "B",
        "text": "Payment security standards"
      },
      {
        "letter": "C",
        "text": "Health information privacy"
      },
      {
        "letter": "D",
        "text": "Cybersecurity risk management"
      }
    ],
    "correctMapping": {
      "1": "C",
      "2": "D",
      "3": "B",
      "4": "A"
    },
    "options": [
      "A. Personal data protection for EU residents",
      "B. Payment security standards",
      "C. Health information privacy",
      "D. Cybersecurity risk management"
    ],
    "correctOption": 0,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e3-q22",
    "examSet": "Practice Exam 3",
    "examNum": 3,
    "questionNumber": 22,
    "questionType": "Matching",
    "correctAnswerRaw": "1 = D; 2 = C; 3 = B; 4 = A",
    "explanation": "Correct Answer: 1 = D; 2 = C; 3 = B; 4 = A\n\nThe correct mapping is: Policy is a broad security requirement \u2014 a high-level statement of intent that defines what\nmust be done (e.g., 'data must be protected'). Standard is a detailed technical specification that mandates specific\nimplementations to support a policy (e.g., 'AES-256 must be used for encryption'). Guideline is recommended but not\nmandatory \u2014 it provides best practice advice that organizations should follow but are not required to. Procedure\nprovides step-by-step operational instructions for carrying out a task in compliance with policies and standards. The\nhierarchy runs: Policy \u2192 Standard \u2192 Guideline/Procedure, each adding operational specificity.",
    "question": "Match each compliance term with its description.",
    "matchingItems": [
      {
        "num": 1,
        "text": "Policy",
        "correctLetter": "D"
      },
      {
        "num": 2,
        "text": "Standard",
        "correctLetter": "C"
      },
      {
        "num": 3,
        "text": "Guideline",
        "correctLetter": "B"
      },
      {
        "num": 4,
        "text": "Procedure",
        "correctLetter": "A"
      }
    ],
    "matchingDescriptions": [
      {
        "letter": "A",
        "text": "Step-by-step operational steps"
      },
      {
        "letter": "B",
        "text": "Recommended but not mandatory"
      },
      {
        "letter": "C",
        "text": "Detailed technical specification"
      },
      {
        "letter": "D",
        "text": "Broad security requirement"
      }
    ],
    "correctMapping": {
      "1": "D",
      "2": "C",
      "3": "B",
      "4": "A"
    },
    "options": [
      "A. Step-by-step operational steps",
      "B. Recommended but not mandatory",
      "C. Detailed technical specification",
      "D. Broad security requirement"
    ],
    "correctOption": 0,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e3-q23",
    "examSet": "Practice Exam 3",
    "examNum": 3,
    "questionNumber": 23,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "B",
    "explanation": "Correct Answer: B\n\nB. Air-gapped isolation is correct. An air-gapped system is physically isolated, with no wired or wireless link to any\nother network, so data can only move to or from it through controlled physical means such as removable media. D.\nLogical segmentation is incorrect. Logical segmentation, for example with VLANs, separates traffic on shared\ninfrastructure, but a physical path to other networks still exists. A. Software-defined networking (SDN) is incorrect.\nSDN centralizes and programs network control; it manages connectivity rather than eliminating it. C. Containerization\nis incorrect. Containerization isolates applications on a shared operating system; the host itself remains connected to\nthe network.",
    "question": "A defense contractor requires that the system storing its most sensitive design files have no physical or\nwireless connection to any other network. Which architecture approach satisfies this requirement?",
    "options": [
      "Software-defined networking (SDN)",
      "Air-gapped isolation",
      "Containerization",
      "Logical segmentation"
    ],
    "correctOption": 1,
    "isMultiSelect": false,
    "domainId": 4,
    "domain": "Domain 4: Security Operations",
    "objective": "4.1-4.4 Security Operations, Monitoring, Incident Response & Forensics"
  },
  {
    "id": "e3-q24",
    "examSet": "Practice Exam 3",
    "examNum": 3,
    "questionNumber": 24,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "A",
    "explanation": "Correct Answer: A\n\nA. Correct \u2014 automated ticket creation and routing on a critical scanner finding is a recognized automation use case: it\nspeeds escalation and ensures critical vulnerabilities are tracked without manual delay. B. Automatically granting\nevery new user administrator privileges is incorrect because it violates least privilege; automated user provisioning\nshould assign only the access each role requires. C. Automatically disabling endpoint logging under storage pressure\nis incorrect because it would blind monitoring and investigations exactly when data is needed; storage issues call for\nexpansion or archiving instead. D. Automatically deleting unreviewed security alerts is incorrect because it can silently\ndiscard evidence of unresolved threats; alerts should be triaged or tuned, not purged unseen.",
    "question": "Which security operations task is an appropriate use case for automation and scripting?",
    "options": [
      "Automatically create and route a ticket when a vulnerability scanner detects a critical finding.",
      "Automatically grant every newly provisioned user administrator privileges.",
      "Automatically disable endpoint logging on every host when storage utilization on the log server reaches 80%.",
      "Automatically delete unreviewed security alerts after 24 hours."
    ],
    "correctOption": 0,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e3-q25",
    "examSet": "Practice Exam 3",
    "examNum": 3,
    "questionNumber": 25,
    "questionType": "Matching",
    "correctAnswerRaw": "1 = F; 2 = G; 3 = E; 4 = A; 5 = D",
    "explanation": "Correct Answer: 1 = F; 2 = G; 3 = E; 4 = A; 5 = D\n\n1 \u2192 F (Hashing): hashing produces a fixed-length, one-way digest used to verify that data has not changed. 2 \u2192 G\n(Salting): salting adds random data to a password before hashing so precomputed rainbow tables do not work. 3 \u2192 E\n(Steganography): steganography conceals the very existence of a message by hiding it inside another file. 4 \u2192 A\n(Tokenization): tokenization swaps sensitive data for a non-sensitive token while the original is held in a secure vault. 5\n\u2192 D (Digital signature): a digital signature applies the sender's private key to prove origin and integrity. Unused: C\n(full-disk encryption) \u2014 volume encryption is not one of these techniques; B (chain of trust) \u2014 distributing CA trust\ndescribes PKI structure, not a listed technique.",
    "question": "Match each cryptographic technique to what it does.",
    "matchingItems": [
      {
        "num": 1,
        "text": "Hashing",
        "correctLetter": "F"
      },
      {
        "num": 2,
        "text": "Salting",
        "correctLetter": "G"
      },
      {
        "num": 3,
        "text": "Steganography",
        "correctLetter": "E"
      },
      {
        "num": 4,
        "text": "Tokenization",
        "correctLetter": "A"
      },
      {
        "num": 5,
        "text": "Digital signature",
        "correctLetter": "D"
      }
    ],
    "matchingDescriptions": [
      {
        "letter": "A",
        "text": "Replaces sensitive data with a non-sensitive substitute stored in a secure vault"
      },
      {
        "letter": "B",
        "text": "Distributes trust across a chain of certificate authorities"
      },
      {
        "letter": "C",
        "text": "Scrambles an entire disk volume to protect data at rest"
      },
      {
        "letter": "D",
        "text": "Applies the sender's private key to prove origin and integrity"
      },
      {
        "letter": "E",
        "text": "Conceals the existence of a message by hiding it inside another file"
      },
      {
        "letter": "F",
        "text": "Produces a fixed-length, one-way digest to verify integrity"
      },
      {
        "letter": "G",
        "text": "Adds random data to a password before hashing to defeat precomputed tables"
      }
    ],
    "correctMapping": {
      "1": "F",
      "2": "G",
      "3": "E",
      "4": "A",
      "5": "D"
    },
    "options": [
      "A. Replaces sensitive data with a non-sensitive substitute stored in a secure vault",
      "B. Distributes trust across a chain of certificate authorities",
      "C. Scrambles an entire disk volume to protect data at rest",
      "D. Applies the sender's private key to prove origin and integrity",
      "E. Conceals the existence of a message by hiding it inside another file",
      "F. Produces a fixed-length, one-way digest to verify integrity",
      "G. Adds random data to a password before hashing to defeat precomputed tables"
    ],
    "correctOption": 0,
    "domainId": 1,
    "domain": "Domain 1: General Security Concepts",
    "objective": "1.1-1.4 Security Controls, Cryptography, Identity & Access Management"
  },
  {
    "id": "e3-q26",
    "examSet": "Practice Exam 3",
    "examNum": 3,
    "questionNumber": 26,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "B",
    "explanation": "Correct Answer: B\n\nD. CRL is incorrect. A Certificate Revocation List is a static, periodically published list of revoked certificates. Clients\nmust download the entire list and it may be outdated between publication cycles. C. LDAP is incorrect. LDAP\n(Lightweight Directory Access Protocol) is used for directory lookups to retrieve user and resource information \u2014 not\nfor checking certificate revocation status. A. RADIUS is incorrect. RADIUS (Remote Authentication Dial-In User\nService) handles centralized authentication for network access and is unrelated to PKI certificate status queries. B.\nOCSP is correct. OCSP (Online Certificate Status Protocol) allows a client to query a CA's OCSP responder in real\ntime for the status of a specific certificate. Unlike CRL, OCSP returns a targeted response for just the queried\ncertificate, making it more timely and bandwidth-efficient.",
    "question": "Fill in the blank: The __________ protocol is used to request certificate status information in real time.",
    "options": [
      "RADIUS",
      "OCSP",
      "LDAP",
      "CRL"
    ],
    "correctOption": 1,
    "isMultiSelect": false,
    "domainId": 3,
    "domain": "Domain 3: Security Architecture",
    "objective": "3.1-3.4 Security Architecture, Cloud, Infrastructure & Resilience"
  },
  {
    "id": "e3-q27",
    "examSet": "Practice Exam 3",
    "examNum": 3,
    "questionNumber": 27,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "C",
    "explanation": "Correct Answer: C\n\nB. Host-based firewall is incorrect. A host-based firewall filters network traffic to and from a device; it cannot stop a\nperson from being deceived into revealing information or taking an unsafe action. C. User training and awareness is\ncorrect. Social engineering targets human judgment, so educating users to recognize and report phishing, pretexting,\nand similar manipulation is the most effective countermeasure. A. NAT is incorrect. Network Address Translation\nremaps IP addresses and offers no defense against manipulation of people. D. Data loss prevention (DLP) is incorrect.\nDLP can help limit what leaves the organization, but it does not prevent a user from being tricked in the first place.",
    "question": "Which of the following security controls would be most effective against social engineering attacks?",
    "options": [
      "NAT",
      "Host-based firewall",
      "User training and awareness",
      "Data loss prevention (DLP)"
    ],
    "correctOption": 2,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e3-q28",
    "examSet": "Practice Exam 3",
    "examNum": 3,
    "questionNumber": 28,
    "questionType": "Matching",
    "correctAnswerRaw": "1 = B; 2 = A; 3 = C; 4 = F",
    "explanation": "Correct Answer: 1 = B; 2 = A; 3 = C; 4 = F\n\n1 \u2192 B (A firewall access list applies the same permit and deny conditions to every connection attempt, whoever\ninitiates it): rule-based access control enforces predefined conditions uniformly, without regard to the individual identity\nbehind the request. 2 \u2192 A (Contractor accounts are prevented from signing in between 8 p.m. and 6 a.m.): a\ntime-of-day restriction limits when an account may be used, shrinking the window in which stolen credentials are\nuseful. 3 \u2192 C (Managers formally certify each quarter that the people on their team still require the access they hold):\nattestation is the periodic, documented confirmation of entitlements that catches privilege creep. 4 \u2192 F (A new hire\nmust present a government-issued ID and answer knowledge-based verification questions before an account is\ncreated): identity proofing verifies that a person is who they claim to be before an identity is issued. Unused: D (Access\nis recalculated at every request from the requester's department, device posture, and clearance) \u2014 that is\nattribute-based access control, which weighs identity attributes rather than applying one fixed rule to everyone; E\n(Every user receives only the permissions required to perform their job duties) \u2014 that is least privilege, a principle that\nguides how rights are sized rather than a control applied in one of these situations.",
    "question": "An identity and access management team is reviewing the controls it applies to accounts across the enterprise. Match each identity and access management practice to the situation in which it is being applied.",
    "matchingItems": [
      {
        "num": 1,
        "text": "Rule-based access control",
        "correctLetter": "B"
      },
      {
        "num": 2,
        "text": "Time-of-day restriction",
        "correctLetter": "A"
      },
      {
        "num": 3,
        "text": "Attestation",
        "correctLetter": "C"
      },
      {
        "num": 4,
        "text": "Identity proofing",
        "correctLetter": "F"
      }
    ],
    "matchingDescriptions": [
      {
        "letter": "A",
        "text": "Contractor accounts are prevented from signing in between 8 p.m. and 6 a.m."
      },
      {
        "letter": "B",
        "text": "A firewall access list applies the same permit and deny conditions to every connection attempt, whoever initiates it"
      },
      {
        "letter": "C",
        "text": "Managers formally certify each quarter that the people on their team still require the access they hold"
      },
      {
        "letter": "D",
        "text": "Access is recalculated at every request from the requester's department, device posture, and clearance"
      },
      {
        "letter": "E",
        "text": "Every user receives only the permissions required to perform their job duties, and nothing more"
      },
      {
        "letter": "F",
        "text": "A new hire must present a government-issued ID and answer knowledge-based verification questions before an account is created"
      }
    ],
    "correctMapping": {
      "1": "B",
      "2": "A",
      "3": "C",
      "4": "F"
    },
    "options": [
      "A. Contractor accounts are prevented from signing in between 8 p.m. and 6 a.m.",
      "B. A firewall access list applies the same permit and deny conditions to every connection attempt, whoever initiates it",
      "C. Managers formally certify each quarter that the people on their team still require the access they hold",
      "D. Access is recalculated at every request from the requester's department, device posture, and clearance",
      "E. Every user receives only the permissions required to perform their job duties, and nothing more",
      "F. A new hire must present a government-issued ID and answer knowledge-based verification questions before an account is created"
    ],
    "correctOption": 0,
    "domainId": 3,
    "domain": "Domain 3: Security Architecture",
    "objective": "3.1-3.4 Security Architecture, Cloud, Infrastructure & Resilience"
  },
  {
    "id": "e3-q29",
    "examSet": "Practice Exam 3",
    "examNum": 3,
    "questionNumber": 29,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "A",
    "explanation": "Correct Answer: A\n\nA. An automated assessment that identifies known weaknesses in systems or applications is correct: a vulnerability\nscan runs automated tools against hosts and software and compares the results with databases of known\nvulnerabilities. D. An audit that evaluates only security procedures and processes is incorrect because that describes a\nsystem/process audit, which is a separate identification method in vulnerability management. B. A guarantee that\nevery reported weakness is exploitable is incorrect because scan output can contain false positives that must be\nconfirmed during analysis. C. A one-time activity that removes the need to rescan is incorrect because rescanning\nafter remediation is the standard way to validate that fixes actually worked.",
    "question": "Which of the following best describes a vulnerability scan?",
    "options": [
      "An automated assessment that identifies known weaknesses in systems or applications",
      "A guarantee that every weakness it reports is exploitable",
      "A one-time activity that removes the need to rescan after remediation",
      "An audit that evaluates only an organization's security procedures and processes"
    ],
    "correctOption": 0,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e3-q30",
    "examSet": "Practice Exam 3",
    "examNum": 3,
    "questionNumber": 30,
    "questionType": "Matching",
    "correctAnswerRaw": "1 = B; 2 = C; 3 = A; 4 = D",
    "explanation": "Correct Answer: 1 = B; 2 = C; 3 = A; 4 = D\n\nFederation pairs with \"Linking identities across organizations\" because federated identity uses standards like SAML or\nOIDC to let users authenticate in one domain and access resources in another. SSO pairs with \"Centralized\nauthentication across services\" since a user logs in once and gains access to multiple internal systems without\nre-authenticating each time. MFA pairs with \"Using multiple verification methods,\" combining factors such as\nsomething you know, have, and are to raise assurance. Deprovisioning pairs with \"Automatically removing access\nwhen no longer needed,\" ensuring that accounts are disabled and entitlements revoked promptly at offboarding or role\nchange.",
    "question": "Match each identity management term to its meaning.",
    "matchingItems": [
      {
        "num": 1,
        "text": "Federation",
        "correctLetter": "B"
      },
      {
        "num": 2,
        "text": "SSO",
        "correctLetter": "C"
      },
      {
        "num": 3,
        "text": "MFA",
        "correctLetter": "A"
      },
      {
        "num": 4,
        "text": "Deprovisioning",
        "correctLetter": "D"
      }
    ],
    "matchingDescriptions": [
      {
        "letter": "A",
        "text": "Using multiple verification methods"
      },
      {
        "letter": "B",
        "text": "Linking identities across organizations"
      },
      {
        "letter": "C",
        "text": "Centralized authentication across services"
      },
      {
        "letter": "D",
        "text": "Automatically removing access when no longer needed"
      }
    ],
    "correctMapping": {
      "1": "B",
      "2": "C",
      "3": "A",
      "4": "D"
    },
    "options": [
      "A. Using multiple verification methods",
      "B. Linking identities across organizations",
      "C. Centralized authentication across services",
      "D. Automatically removing access when no longer needed"
    ],
    "correctOption": 0,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e3-q31",
    "examSet": "Practice Exam 3",
    "examNum": 3,
    "questionNumber": 31,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "D",
    "explanation": "Correct Answer: D\n\nB. Disabling file sharing is incorrect. It removes one specific service but does not stop network-based lateral\nmovement between workloads over other protocols and paths. D. Microsegmentation is correct. It divides the network\ninto small, isolated zones with per-workload security policies, so a compromised account can reach far fewer systems\nand lateral movement is contained. A. Application whitelisting is incorrect. It restricts which executables can run on a\nhost; it does not constrain network paths between workloads. C. VLAN hopping is incorrect. It is an attack technique\nthat escapes VLAN boundaries, not a security control.",
    "question": "What control would best limit network-based lateral movement between workloads after a user account is\ncompromised?",
    "options": [
      "Application whitelisting",
      "Disabling file sharing",
      "VLAN hopping",
      "Microsegmentation"
    ],
    "correctOption": 3,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e3-q32",
    "examSet": "Practice Exam 3",
    "examNum": 3,
    "questionNumber": 32,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "B",
    "explanation": "Correct Answer: B\n\nB (Guardrails add friction to slow down the development process.) is correct: the question asks for the statement that\nis NOT true, and this one is false. Cloud guardrails are automated policy controls that let developers move quickly\nwhile staying within safe boundaries; they reduce friction rather than add it, catching misconfigurations without manual\nreviews. C (Guardrails can automatically remediate issues.) is incorrect as an answer because guardrails can be\nconfigured to fix a violation automatically. D (Guardrails constantly watch cloud deployments.) is incorrect as an\nanswer because continuous monitoring of the cloud environment is a defining characteristic of guardrails. A\n(Guardrails leverage cloud APIs and automation.) is incorrect as an answer because guardrails work precisely by\nusing the provider's APIs and automation to enforce policy at scale.",
    "question": "Which of the following is NOT correct about guardrails?",
    "options": [
      "Guardrails leverage cloud APIs and automation.",
      "Guardrails add friction to slow down the development process.",
      "Guardrails can automatically remediate issues.",
      "Guardrails constantly watch cloud deployments."
    ],
    "correctOption": 1,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e3-q33",
    "examSet": "Practice Exam 3",
    "examNum": 3,
    "questionNumber": 33,
    "questionType": "Matching",
    "correctAnswerRaw": "1 = A; 2 = D; 3 = C; 4 = B",
    "explanation": "Correct Answer: 1 = A; 2 = D; 3 = C; 4 = B\n\nThe correct pairings are: SLA = Defines expected performance and services; NDA = Legal protection of shared\nconfidential data; AUP = Outlines acceptable behavior when using systems; MOU = High-level understanding between\ntwo parties. An SLA (Service Level Agreement) specifies measurable performance targets such as uptime, response\ntimes, and support windows. An NDA (Non-Disclosure Agreement) is a legal contract preventing parties from\ndisclosing confidential information. An AUP (Acceptable Use Policy) sets rules for employees about appropriate use of\nIT resources. An MOU (Memorandum of Understanding) is a non-binding document that establishes a general\nframework of cooperation between organizations.",
    "question": "Match each compliance-related document with its purpose.",
    "matchingItems": [
      {
        "num": 1,
        "text": "SLA",
        "correctLetter": "A"
      },
      {
        "num": 2,
        "text": "NDA",
        "correctLetter": "D"
      },
      {
        "num": 3,
        "text": "AUP",
        "correctLetter": "C"
      },
      {
        "num": 4,
        "text": "MOU",
        "correctLetter": "B"
      }
    ],
    "matchingDescriptions": [
      {
        "letter": "A",
        "text": "Defines expected performance and services"
      },
      {
        "letter": "B",
        "text": "High-level understanding between two parties"
      },
      {
        "letter": "C",
        "text": "Outlines acceptable behavior when using systems"
      },
      {
        "letter": "D",
        "text": "Legal protection of shared confidential data"
      }
    ],
    "correctMapping": {
      "1": "A",
      "2": "D",
      "3": "C",
      "4": "B"
    },
    "options": [
      "A. Defines expected performance and services",
      "B. High-level understanding between two parties",
      "C. Outlines acceptable behavior when using systems",
      "D. Legal protection of shared confidential data"
    ],
    "correctOption": 0,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e3-q34",
    "examSet": "Practice Exam 3",
    "examNum": 3,
    "questionNumber": 34,
    "questionType": "Select Two",
    "correctAnswerRaw": "C, D",
    "explanation": "Correct Answer: C, D\n\nC and D are correct: the policy engine evaluates context and makes the access decision, and the policy administrator\ncarries that decision out by managing session credentials, so both are control-plane functions. E is incorrect: the policy\nenforcement point is a data-plane component that actually permits or blocks traffic. A is incorrect: an implicit trust zone\nexists in the data plane and describes an area trusted after a request passes the PEP. B is incorrect: the subject or\nsystem is the requesting entity in the data plane, not a decision-making component.",
    "question": "In Zero Trust Architecture, decision-making responsibilities live in the control plane. Which TWO of the\nfollowing are control-plane components? (Select TWO.)",
    "options": [
      "Implicit trust zone",
      "Subject/System",
      "Policy Engine",
      "Policy Administrator",
      "Policy Enforcement Point"
    ],
    "optionLetters": [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    "isMultiSelect": true,
    "requiredSelectCount": 2,
    "correctOptions": [
      2,
      3
    ],
    "correctLetters": [
      "C",
      "D"
    ],
    "correctOption": 2,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e3-q35",
    "examSet": "Practice Exam 3",
    "examNum": 3,
    "questionNumber": 35,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "B",
    "explanation": "Correct Answer: B\n\nA. Threat hunting driven by hypotheses about adversary behavior is incorrect. Threat hunting is the proactive\nhuman-led search for undetected adversaries; it consumes aggregated data but is not the platform that collects and\ncorrelates logs. C. Incident triage against a documented severity matrix is incorrect. Triage prioritizes alerts once they\nexist; it is a response activity, not the technology that collects and correlates logs from multiple devices. B. SIEM\n(Security Information and Event Management) is correct. A SIEM ingests logs and events from many devices,\nnormalizes them, and correlates them into a single view, enabling alerting and investigation across the environment.\nD. Log analysis performed on a single host's local records is incorrect. Examining one system's logs in isolation gives\nno cross-device correlation; the question asks for the platform that groups and correlates logs from multiple sources,\nwhich is the SIEM.",
    "question": "Fill in the blank: The purpose of __________ is to group and correlate logs from multiple devices into one\nview.",
    "options": [
      "Threat hunting driven by hypotheses about adversary behavior",
      "SIEM (Security Information and Event Management)",
      "Incident triage against a documented severity matrix",
      "Log analysis performed on a single host's local records"
    ],
    "correctOption": 1,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e3-q36",
    "examSet": "Practice Exam 3",
    "examNum": 3,
    "questionNumber": 36,
    "questionType": "Matching",
    "correctAnswerRaw": "1 = B; 2 = A; 3 = C; 4 = D",
    "explanation": "Correct Answer: 1 = B; 2 = A; 3 = C; 4 = D\n\nThe correct pairings are: Risk appetite = General level of risk an organization is willing to accept; Residual risk = Level\nof risk remaining after controls; Risk tolerance = Willingness to accept deviations within limits; Inherent risk = Total risk\nwithout controls applied. Risk appetite is the high-level strategic statement of how much risk leadership accepts in\npursuit of objectives. Inherent risk is the raw level of risk present before any controls are applied. Residual risk is what\nremains after controls have been implemented \u2014 even well-protected environments retain some residual risk. Risk\ntolerance is narrower than appetite \u2014 it defines the acceptable variance from the target risk level in operational terms,\nspecifying how much deviation from appetite is permissible.",
    "question": "Match each risk term with its definition.",
    "matchingItems": [
      {
        "num": 1,
        "text": "Risk appetite",
        "correctLetter": "B"
      },
      {
        "num": 2,
        "text": "Residual risk",
        "correctLetter": "A"
      },
      {
        "num": 3,
        "text": "Risk tolerance",
        "correctLetter": "C"
      },
      {
        "num": 4,
        "text": "Inherent risk",
        "correctLetter": "D"
      }
    ],
    "matchingDescriptions": [
      {
        "letter": "A",
        "text": "Level of risk remaining after controls"
      },
      {
        "letter": "B",
        "text": "General level of risk an organization is willing to accept"
      },
      {
        "letter": "C",
        "text": "Willingness to accept deviations within limits"
      },
      {
        "letter": "D",
        "text": "Total risk without controls applied"
      }
    ],
    "correctMapping": {
      "1": "B",
      "2": "A",
      "3": "C",
      "4": "D"
    },
    "options": [
      "A. Level of risk remaining after controls",
      "B. General level of risk an organization is willing to accept",
      "C. Willingness to accept deviations within limits",
      "D. Total risk without controls applied"
    ],
    "correctOption": 0,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e3-q37",
    "examSet": "Practice Exam 3",
    "examNum": 3,
    "questionNumber": 37,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "A",
    "explanation": "Correct Answer: A\n\nB. Zero-day escalation is incorrect. This scenario chains known low-severity bugs; it does not hinge on a previously\nunknown (zero-day) vulnerability. C. Privilege elevation is incorrect. Privilege elevation/escalation names the outcome\n(gaining admin rights), not the technique of combining several weaknesses to get there. D. Vulnerability stacking is\nincorrect. This is not an established term for the technique described. A. Exploit chaining is correct. Exploit chaining\nlinks multiple individually minor vulnerabilities together so that their combined effect achieves a high-impact result such\nas administrative access.",
    "question": "An attacker gains admin access by chaining multiple low-severity bugs. What is this technique called?",
    "options": [
      "Exploit chaining",
      "Zero-day escalation",
      "Privilege elevation",
      "Vulnerability stacking"
    ],
    "correctOption": 0,
    "isMultiSelect": false,
    "domainId": 1,
    "domain": "Domain 1: General Security Concepts",
    "objective": "1.1-1.4 Security Controls, Cryptography, Identity & Access Management"
  },
  {
    "id": "e3-q38",
    "examSet": "Practice Exam 3",
    "examNum": 3,
    "questionNumber": 38,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "C",
    "explanation": "Correct Answer: C\n\nA. Cloud monitoring is incorrect. Cloud monitoring observes resource health and metrics; it does not define or enforce\nserver configurations. D. Asset tagging is incorrect. Tags identify and categorize assets for tracking and billing but do\nnot drive configuration uniformity. C. Configuration baselines is correct. A baseline defines the approved, standardized\nconfiguration for systems, and automated tooling compares running systems against that baseline to detect drift and\nenforce consistency. B. Virtual patching is incorrect. Virtual patching uses network-layer filters to block exploitation of a\nvulnerability without changing the system itself; it does not standardize configurations.",
    "question": "Which of the following would BEST help ensure system configurations are consistent across all servers?",
    "options": [
      "Cloud monitoring",
      "Virtual patching",
      "Configuration baselines",
      "Asset tagging"
    ],
    "correctOption": 2,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e3-q39",
    "examSet": "Practice Exam 3",
    "examNum": 3,
    "questionNumber": 39,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "B",
    "explanation": "Correct Answer: B\n\nA. DNS spoofing is incorrect. DNS spoofing corrupts name-resolution responses to redirect victims to malicious hosts;\nit does not guess passwords. B. Brute-force attack is correct. A brute-force attack uses automation to try large\nnumbers of password guesses in rapid succession until the correct one is found; account lockouts, rate limiting, and\nMFA are common defenses. D. Clickjacking is incorrect. Clickjacking tricks a user into clicking a hidden or disguised UI\nelement; it targets user interaction, not password guessing. C. Man-in-the-middle is incorrect. A man-in-the-middle\nattack intercepts or alters traffic between two parties; it captures or manipulates data in transit rather than iterating\nthrough password guesses.",
    "question": "What attack exploits repeated attempts to guess a password through rapid automation?",
    "options": [
      "DNS spoofing",
      "Brute-force attack",
      "Man-in-the-middle",
      "Clickjacking"
    ],
    "correctOption": 1,
    "isMultiSelect": false,
    "domainId": 1,
    "domain": "Domain 1: General Security Concepts",
    "objective": "1.1-1.4 Security Controls, Cryptography, Identity & Access Management"
  },
  {
    "id": "e3-q40",
    "examSet": "Practice Exam 3",
    "examNum": 3,
    "questionNumber": 40,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "B",
    "explanation": "Correct Answer: B\n\nC. To replace an organization's cloud-delivered security services is incorrect. A UTM is an on-network appliance; it is\nnot defined by replacing cloud-delivered security, and many organizations run both. B. To combine multiple security\nfunctions in one device is correct. Unified Threat Management consolidates capabilities such as firewall, IDS/IPS,\nantivirus, content/URL filtering, and VPN into a single appliance for simpler management. D. To store and protect the\norganization's encryption keys is incorrect. Secure key storage and protection is the role of an HSM or key\nmanagement system, not a UTM. A. To manage multifactor authentication enrollment and tokens is incorrect. Enrolling\nusers and issuing MFA tokens is handled by identity and access management systems, not by a UTM appliance.",
    "question": "What is the key function of a UTM (Unified Threat Management) appliance?",
    "options": [
      "To manage multifactor authentication enrollment and tokens",
      "To combine multiple security functions in one device",
      "To replace an organization's cloud-delivered security services",
      "To store and protect the organization's encryption keys"
    ],
    "correctOption": 1,
    "isMultiSelect": false,
    "domainId": 3,
    "domain": "Domain 3: Security Architecture",
    "objective": "3.1-3.4 Security Architecture, Cloud, Infrastructure & Resilience"
  },
  {
    "id": "e3-q41",
    "examSet": "Practice Exam 3",
    "examNum": 3,
    "questionNumber": 41,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "D",
    "explanation": "Correct Answer: D\n\nC. Encrypting secure email is a genuine use: the public key bound in a certificate is used to protect email messages.\nA. Encrypting channels is a genuine use: TLS relies on server certificates to establish secure sessions between clients\nand servers. D. This is the correct answer: no digital certificate can guarantee that a certificate authority will never be\ncompromised \u2014 certificates express trust relationships, they do not provide immunity from CA compromise. B.\nVerifying the identity of clients and servers on the web is a genuine use and the core purpose of TLS certificates.",
    "question": "Ansgar is studying how digital certificates can be used. Which of the following is NOT a use of a digital\ncertificate?",
    "options": [
      "To encrypt channels to provide secure communication between clients and servers",
      "To verify the identity of clients and servers on the web",
      "To encrypt messages for secure email communications",
      "To guarantee that a certificate authority will never be compromised"
    ],
    "correctOption": 3,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e3-q42",
    "examSet": "Practice Exam 3",
    "examNum": 3,
    "questionNumber": 42,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "D",
    "explanation": "Correct Answer: D\n\nD is correct ($25,000): single loss expectancy (SLE) is asset value multiplied by exposure factor, so $200,000 \u00d7 0.25 =\n$50,000 per fire. The annualized rate of occurrence (ARO) for an event expected once every two years is 0.5, and ALE\n= SLE \u00d7 ARO = $50,000 \u00d7 0.5 = $25,000. This is the figure used to judge whether a countermeasure's yearly cost is\njustified. C is incorrect ($12,500) because it applies the ARO twice, halving the correct ALE. B is incorrect ($50,000)\nbecause it is the SLE, the loss from a single fire, and ignores that the fire is expected only every other year. A is\nincorrect ($100,000) because it multiplies the SLE by 2 as if the fire happened twice a year, instead of using an ARO of\n0.5.",
    "question": "A risk analyst is performing a quantitative analysis of a warehouse management system valued at\n$200,000. A fire in the server room is estimated to destroy 25 percent of the asset's value, and such a fire\nis expected to occur once every two years. What is the annualized loss expectancy (ALE)?",
    "options": [
      "$100,000",
      "$50,000",
      "$12,500",
      "$25,000"
    ],
    "correctOption": 3,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e3-q43",
    "examSet": "Practice Exam 3",
    "examNum": 3,
    "questionNumber": 43,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "D",
    "explanation": "Correct Answer: D\n\nD (SIEM platforms) is correct: continuous monitoring depends on collecting logs from across the whole estate,\ncorrelating them and alerting around the clock, which is exactly the role a SIEM plays at the centre of a SOC. C (Data\nbackup tools) is incorrect because backups support recovery and availability and give no ongoing visibility into security\nevents. B (Packet sniffers) is incorrect because a sniffer offers a deep but point-in-time view of one segment and lacks\nthe correlation, retention and alerting a SOC needs. A (Email gateways) is incorrect because they filter a single\nchannel and feed a SIEM rather than replacing it.",
    "question": "Which of the following best supports continuous monitoring in a SOC environment?",
    "options": [
      "Email gateways",
      "Packet sniffers",
      "Data backup tools",
      "SIEM platforms"
    ],
    "correctOption": 3,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e3-q44",
    "examSet": "Practice Exam 3",
    "examNum": 3,
    "questionNumber": 44,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "B",
    "explanation": "Correct Answer: B\n\nB is correct (Backout plan): a backout, or rollback, plan defines how to restore the prior working configuration if a\nchange causes problems. C is incorrect (Impact analysis): impact analysis evaluates the technical and business\nconsequences of a change before approval, not how to undo it. A is incorrect (Maintenance window): a maintenance\nwindow is the scheduled time to perform the change, not the recovery procedure. D is incorrect (Standard operating\nprocedure): an SOP is a repeatable step-by-step guide for a task, not the specific rollback for a failed change.",
    "question": "During a change advisory board review, a member asks what will let the team quickly return a production\nsystem to its previous working state if a scheduled upgrade fails. Which element of the change process are\nthey describing?",
    "options": [
      "Maintenance window",
      "Backout plan",
      "Impact analysis",
      "Standard operating procedure"
    ],
    "correctOption": 1,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e3-q45",
    "examSet": "Practice Exam 3",
    "examNum": 3,
    "questionNumber": 45,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "D",
    "explanation": "Correct Answer: D\n\nC. Social engineering is incorrect. Social engineering is an attack category involving human manipulation \u2014 it is not a\nCVSS metric. B. SQL injection is incorrect. SQL injection is an attack technique, not a component of CVSS\nvulnerability scoring. D. Exploitability is correct. The CVSS Exploitability metrics measure how easily a vulnerability\ncan be exploited \u2014 incorporating factors such as attack vector (network vs. local), attack complexity, privileges\nrequired, and user interaction needed. Higher exploitability scores indicate lower barriers to exploitation. A. Buffer\noverflow is incorrect. A buffer overflow is a specific vulnerability type, not a CVSS scoring metric.",
    "question": "Fill in the blank: The __________ value in CVSS scoring reflects the ease with which a vulnerability can be\nexploited.",
    "options": [
      "Buffer overflow",
      "SQL injection",
      "Social engineering",
      "Exploitability"
    ],
    "correctOption": 3,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e3-q46",
    "examSet": "Practice Exam 3",
    "examNum": 3,
    "questionNumber": 46,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "C",
    "explanation": "Correct Answer: C\n\nA. Vulnerability scanning is incorrect. Vulnerability scanning is a separate proactive process performed before an\nincident, not a phase within the incident response lifecycle. C. Identification is correct. The Identification phase (also\ncalled Detection and Analysis) focuses on determining whether a security event has actually occurred \u2014 analysts\nreview alerts, logs, and indicators of compromise to confirm and classify the incident before moving to containment. B.\nEDR containment is incorrect. Containment is a later phase in incident response that occurs after an incident has been\nidentified and confirmed. D. Log analysis is incorrect. Log analysis is a tool or activity used during identification, not the\nname of the phase itself.",
    "question": "Fill in the blank: The __________ phase of incident response focuses on determining if a security event\nhas occurred.",
    "options": [
      "Vulnerability scanning",
      "EDR containment",
      "Identification",
      "Log analysis"
    ],
    "correctOption": 2,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e3-q47",
    "examSet": "Practice Exam 3",
    "examNum": 3,
    "questionNumber": 47,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "C",
    "explanation": "Correct Answer: C\n\nC. Type I is correct because a Type I (bare-metal) hypervisor runs directly on the host's physical hardware and\nmanages the guest operating systems itself. A. Type II is incorrect because a Type II (hosted) hypervisor runs as an\napplication on top of an existing operating system rather than directly on the hardware. D. Type III is incorrect because\nthere is no Type III hypervisor classification. B. Type IV is incorrect because there is no Type IV hypervisor\nclassification.",
    "question": "Which type of hypervisor runs directly on a computer's hardware?",
    "options": [
      "Type II",
      "Type IV",
      "Type I",
      "Type III"
    ],
    "correctOption": 2,
    "isMultiSelect": false,
    "domainId": 3,
    "domain": "Domain 3: Security Architecture",
    "objective": "3.1-3.4 Security Architecture, Cloud, Infrastructure & Resilience"
  },
  {
    "id": "e3-q48",
    "examSet": "Practice Exam 3",
    "examNum": 3,
    "questionNumber": 48,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "C",
    "explanation": "Correct Answer: C\n\nB. Rootkit is incorrect. A rootkit is malware that conceals its presence and grants persistent admin access \u2014 it would\nnot selectively stop update processes in response to a configuration change. C. Misconfiguration is correct. When\nmultiple systems simultaneously stop receiving updates after a configuration change, the most logical cause is a\nmisconfiguration \u2014 such as an incorrect update server URL, a firewall rule blocking update traffic, or a group policy\nerror \u2014 rather than a security attack. D. Session hijacking is incorrect. Session hijacking targets active user sessions\nin applications \u2014 it does not cause systems to stop receiving software updates. A. Policy violation is incorrect. A policy\nviolation describes non-compliant human behavior, not a technical failure mode causing update delivery to break.",
    "question": "A technician notices that multiple systems have stopped receiving updates after a recent configuration\nchange. What type of error could this represent?",
    "options": [
      "Policy violation",
      "Rootkit",
      "Misconfiguration",
      "Session hijacking"
    ],
    "correctOption": 2,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e3-q49",
    "examSet": "Practice Exam 3",
    "examNum": 3,
    "questionNumber": 49,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "A",
    "explanation": "Correct Answer: A\n\nA (Network traffic analyzer) is correct: lateral movement is the attacker's technique of moving from the initially\ncompromised host to other systems inside the network, and that movement leaves traces in network traffic such as\nunusual SMB, RDP, or authentication connections between internal hosts. A network traffic analyzer lets investigators\nreconstruct which systems the attacker reached and when. D (Patch manager) is incorrect because patch\nmanagement deploys updates to reduce vulnerabilities; it does not record attacker activity. C (Backup client) is\nincorrect because backup software copies and restores data; it provides no visibility into host-to-host connections\nduring a breach. B (Secure email gateway) is incorrect because an email gateway filters messages and could show\nthe initial phishing delivery, but it cannot trace movement between internal systems.",
    "question": "Which of the following tools would best support investigation of a lateral movement during a breach?",
    "options": [
      "Network traffic analyzer",
      "Secure email gateway",
      "Backup client",
      "Patch manager"
    ],
    "correctOption": 0,
    "isMultiSelect": false,
    "domainId": 2,
    "domain": "Domain 2: Threats, Vulnerabilities & Mitigations",
    "objective": "2.1-2.4 Threats, Vulnerabilities, Attack Vectors & Mitigations"
  },
  {
    "id": "e3-q50",
    "examSet": "Practice Exam 3",
    "examNum": 3,
    "questionNumber": 50,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "D",
    "explanation": "Correct Answer: D\n\nC. Whitelisting is incorrect: application allow-listing controls which programs may run, it does not itself close unused\nports and services. B. Sandboxing is incorrect: it isolates code execution for containment, not for reducing exposed\nservices. D. System hardening is correct: hardening reduces the attack surface by disabling unnecessary ports,\nservices, and accounts and applying secure configuration. A. Load balancing is incorrect: it distributes traffic across\nservers for availability, not for reducing the attack surface.",
    "question": "Which method reduces the attack surface by disabling unused ports and services?",
    "options": [
      "Load balancing",
      "Sandboxing",
      "Whitelisting",
      "System hardening"
    ],
    "correctOption": 3,
    "isMultiSelect": false,
    "domainId": 4,
    "domain": "Domain 4: Security Operations",
    "objective": "4.1-4.4 Security Operations, Monitoring, Incident Response & Forensics"
  },
  {
    "id": "e3-q51",
    "examSet": "Practice Exam 3",
    "examNum": 3,
    "questionNumber": 51,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "C",
    "explanation": "Correct Answer: C\n\nA. Honeyfile is incorrect. A honeyfile is a decoy file, such as a fake passwords.txt, placed to lure attackers into opening\nit; it is a file to be accessed, not a credential or record designed to be used. B. Honeypot is incorrect. A honeypot is an\nentire decoy system set up to attract attackers and observe their techniques. D. Honeynet is incorrect. A honeynet is a\nnetwork of honeypots that simulates a complete environment. C. Honeytoken is correct. A honeytoken is a fake data\nitem such as a bogus credential, API key, or database record; because it has no legitimate use, any use of it is a\nreliable indicator of unauthorized access.",
    "question": "Which deception technology is a fake credential, API key, or database record planted so that any attempt\nto use it triggers an alert and reveals unauthorized activity?",
    "options": [
      "Honeyfile",
      "Honeypot",
      "Honeytoken",
      "Honeynet"
    ],
    "correctOption": 2,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e3-q52",
    "examSet": "Practice Exam 3",
    "examNum": 3,
    "questionNumber": 52,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "B",
    "explanation": "Correct Answer: B\n\nD. To enable geofencing for location-based access is incorrect. Geofencing uses GPS, Wi-Fi, or IP location data to\nenforce location-based policy - it has no relationship to certificate self-signing. C. To bypass HTTPS certificate\nwarnings shown by browsers is incorrect, and in fact reversed. A self-signed certificate is what causes the browser\nwarning, because it is not issued by a publicly trusted CA; it does not suppress warnings or bypass the protocol. B. To\nencrypt and authenticate internal communications is correct. A self-signed certificate lets an organization secure\ninternal services (dev environments, internal APIs, internal admin consoles) with TLS without purchasing a public\nCA-signed certificate. It provides encryption and, if the issuer is trusted by internal systems, authentication - at the cost\nof not being trusted by external parties. A. To sign authoritative DNS responses for a public zone is incorrect. DNS\nresponses are signed with DNSSEC zone-signing and key-signing keys, not with TLS certificates; the two systems are\nseparate.",
    "question": "What is the purpose of a self-signed certificate?",
    "options": [
      "To sign authoritative DNS responses for a public zone",
      "To encrypt and authenticate internal communications",
      "To bypass HTTPS certificate warnings shown by browsers",
      "To enable geofencing for location-based access"
    ],
    "correctOption": 1,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e3-q53",
    "examSet": "Practice Exam 3",
    "examNum": 3,
    "questionNumber": 53,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "B",
    "explanation": "Correct Answer: B\n\nA. Availability is incorrect. Availability ensures systems and data are accessible when needed; encryption does not\nprimarily serve that goal and can even add overhead. D. Accountability is incorrect. Accountability ties actions to\nidentities through logging and auditing, and it is not one of the three CIA elements that encryption supports. B.\nConfidentiality is correct. Encrypting data at rest and in transit keeps it unreadable to unauthorized parties, which is the\nessence of confidentiality. C. Integrity is incorrect. Integrity ensures data is not altered and is verified mainly with\nhashing and digital signatures; encryption alone protects secrecy rather than detecting modification.",
    "question": "A company encrypts data at rest and in transit. Which CIA principle does this MOST support?",
    "options": [
      "Availability",
      "Confidentiality",
      "Integrity",
      "Accountability"
    ],
    "correctOption": 1,
    "isMultiSelect": false,
    "domainId": 1,
    "domain": "Domain 1: General Security Concepts",
    "objective": "1.1-1.4 Security Controls, Cryptography, Identity & Access Management"
  },
  {
    "id": "e3-q54",
    "examSet": "Practice Exam 3",
    "examNum": 3,
    "questionNumber": 54,
    "questionType": "Matching",
    "correctAnswerRaw": "1 = C; 2 = A; 3 = D; 4 = B",
    "explanation": "Correct Answer: 1 = C; 2 = A; 3 = D; 4 = B\n\nTailgating pairs with \"Following someone into a secured area\" because the attacker physically slips in behind an\nauthorized person through a controlled door. Pretexting pairs with \"Lying about identity to obtain data\" since the\nattacker fabricates a believable scenario or false identity to manipulate the target. Vishing pairs with \"Fake phone call\nfrom technical support\" because it is voice-based phishing carried out over the telephone, often impersonating IT or\nhelp desk staff. Baiting pairs with \"Leaving infected USB drives\" because it relies on enticing the victim with attractive\nphysical media that, when plugged in, delivers malware.",
    "question": "Match each social engineering attack to its technique.",
    "matchingItems": [
      {
        "num": 1,
        "text": "Tailgating",
        "correctLetter": "C"
      },
      {
        "num": 2,
        "text": "Pretexting",
        "correctLetter": "A"
      },
      {
        "num": 3,
        "text": "Vishing",
        "correctLetter": "D"
      },
      {
        "num": 4,
        "text": "Baiting",
        "correctLetter": "B"
      }
    ],
    "matchingDescriptions": [
      {
        "letter": "A",
        "text": "Lying about identity to obtain data"
      },
      {
        "letter": "B",
        "text": "Leaving infected USB drives"
      },
      {
        "letter": "C",
        "text": "Following someone into a secured area"
      },
      {
        "letter": "D",
        "text": "Fake phone call from \"technical support\""
      }
    ],
    "correctMapping": {
      "1": "C",
      "2": "A",
      "3": "D",
      "4": "B"
    },
    "options": [
      "A. Lying about identity to obtain data",
      "B. Leaving infected USB drives",
      "C. Following someone into a secured area",
      "D. Fake phone call from \"technical support\""
    ],
    "correctOption": 0,
    "domainId": 2,
    "domain": "Domain 2: Threats, Vulnerabilities & Mitigations",
    "objective": "2.1-2.4 Threats, Vulnerabilities, Attack Vectors & Mitigations"
  },
  {
    "id": "e3-q55",
    "examSet": "Practice Exam 3",
    "examNum": 3,
    "questionNumber": 55,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "C",
    "explanation": "Correct Answer: C\n\nD. Detective is incorrect. A detective control (like IDS alerts or log reviews) identifies incidents after the fact rather than\nblocking them. C. Preventive is correct. Automatically blocking known-malicious IPs stops attacks before they can\nimpact systems, which is the defining purpose of a preventive control. B. Corrective is incorrect. Corrective controls act\nafter an incident to restore systems or mitigate damage (e.g., restoring from backup). A. Compensating is incorrect.\nCompensating controls substitute for a primary control that cannot be implemented; IP blocklisting is itself a primary\npreventive measure.",
    "question": "A company uses a tool to automatically block known malicious IP addresses. What kind of control is this?",
    "options": [
      "Compensating",
      "Corrective",
      "Preventive",
      "Detective"
    ],
    "correctOption": 2,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e3-q56",
    "examSet": "Practice Exam 3",
    "examNum": 3,
    "questionNumber": 56,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "A",
    "explanation": "Correct Answer: A\n\nA (Provides controlled access to a private network from an external location) is correct: a bastion host, or jump server,\nis a hardened and closely monitored system on the untrusted edge that administrators must pass through, giving one\nauditable entry point into internal systems. C (Distributes inbound client sessions evenly across a pool of backend\nservers) is incorrect because spreading sessions across a server pool for performance and availability is the job of a\nload balancer. B (Hosts a DMZ for client VPN connections) is incorrect because terminating client VPNs belongs to a\nVPN concentrator or firewall; a bastion may sit inside a DMZ but does not host one. D (Monitors container\norchestration in cloud) is incorrect because that is the work of cloud workload protection and posture management\ntooling.",
    "question": "What is the function of a bastion host in a secure network design?",
    "options": [
      "Provides controlled access to a private network from an external location",
      "Hosts a DMZ for client VPN connections",
      "Distributes inbound client sessions evenly across a pool of backend servers",
      "Monitors container orchestration in cloud"
    ],
    "correctOption": 0,
    "isMultiSelect": false,
    "domainId": 3,
    "domain": "Domain 3: Security Architecture",
    "objective": "3.1-3.4 Security Architecture, Cloud, Infrastructure & Resilience"
  },
  {
    "id": "e3-q57",
    "examSet": "Practice Exam 3",
    "examNum": 3,
    "questionNumber": 57,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "C",
    "explanation": "Correct Answer: C\n\nC. Traffic analysis is correct. It examines flow-level patterns \u2014 connection timing, frequency, volume, and destinations\n\u2014 across the network, which is exactly how periodic outbound beaconing to a C&C server is identified. B. Port\nanalysis is incorrect. Examining which ports and services are open or in use does not reveal the temporal pattern of\nrepeated outbound connections. D. Packet analysis is incorrect. Inspecting the contents of individual packets can\nsupport a deeper investigation, but it does not aggregate timing and frequency patterns across connections, which is\nwhat exposes beaconing. A. Probe analysis is incorrect. Probing refers to actively scanning systems for information; it\nis not a method for reviewing outbound communication patterns.",
    "question": "Ichika wants to examine aggregated network-flow metadata, including connection timing, frequency, and\ndestinations, to identify devices making periodic outbound connections to a C&C server. Which type of\nanalysis is most appropriate?",
    "options": [
      "Probe analysis",
      "Port analysis",
      "Traffic analysis",
      "Packet analysis"
    ],
    "correctOption": 2,
    "isMultiSelect": false,
    "domainId": 4,
    "domain": "Domain 4: Security Operations",
    "objective": "4.1-4.4 Security Operations, Monitoring, Incident Response & Forensics"
  },
  {
    "id": "e3-q58",
    "examSet": "Practice Exam 3",
    "examNum": 3,
    "questionNumber": 58,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "D",
    "explanation": "Correct Answer: D\n\nC. Automatically restore backup data after a system outage is incorrect. Automated backup restoration is a\ndisaster-recovery capability; a BCP is broader and is not limited to restoring data. B. Detect insider threats through\ncontinuous behavior monitoring is incorrect. Detecting malicious insiders is a monitoring and user-behavior-analytics\nfunction, not the purpose of a continuity plan. D. Maintain operations during and after disruptions is correct. A business\ncontinuity plan defines how an organization keeps its essential functions running during and after an incident or\ndisaster, minimizing downtime to critical operations. A. Enforce perimeter firewall rules across all network edges is\nincorrect. Enforcing firewall rules is a preventive network-security control and has nothing to do with sustaining\nbusiness operations through a disruption.",
    "question": "What is the purpose of a business continuity plan (BCP)?",
    "options": [
      "Enforce perimeter firewall rules across all network edges",
      "Detect insider threats through continuous behavior monitoring",
      "Automatically restore backup data after a system outage",
      "Maintain operations during and after disruptions"
    ],
    "correctOption": 3,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e3-q59",
    "examSet": "Practice Exam 3",
    "examNum": 3,
    "questionNumber": 59,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "A",
    "explanation": "Correct Answer: A\n\nD. Local-only authentication is incorrect. Restricting authentication to a local source does not deliver the continuous,\ncontext-aware verification zero trust demands. C. Role-based access without reauth is incorrect. Granting access by\nrole and then not re-verifying assumes standing trust, which contradicts zero trust's 'never trust, always verify'\nprinciple. B. Always-on VPN is incorrect. A VPN establishes an encrypted tunnel and often implies broad implicit trust\nonce connected, the opposite of evaluating each request individually. A. Per-request policy evaluation is correct. Zero\ntrust evaluates identity, device posture, and context on every request rather than trusting a session after initial login, so\nper-request policy evaluation directly embodies the model.",
    "question": "Which of the following BEST supports a zero trust strategy?",
    "options": [
      "Per-request policy evaluation",
      "Always-on VPN",
      "Role-based access without reauth",
      "Local-only authentication"
    ],
    "correctOption": 0,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e3-q60",
    "examSet": "Practice Exam 3",
    "examNum": 3,
    "questionNumber": 60,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "C",
    "explanation": "Correct Answer: C\n\nA. This statement is true: threat intelligence is precisely data collected, processed, and analyzed to understand threat\nactors' motives, targets, and attack behaviors, so it is not the correct choice. B. This statement is true: by providing\nevidence-based context, threat intelligence enables faster, more informed security decisions, so it is not the correct\nchoice. C. Correct \u2014 this statement is NOT true: threat intelligence is an analytical product built from threat feeds and\nother intelligence sources; it does not involve actively exploiting target systems, which describes penetration testing\ninstead. D. This statement is true: knowing threat actors' tactics in advance shifts an organization from reacting to\nincidents toward proactively defending against anticipated attacks, so it is not the correct choice.",
    "question": "Which of the following is NOT true about threat intelligence?",
    "options": [
      "Threat intelligence is data that is collected, processed, and analyzed to understand a threat actor's motives, targets, and attack behaviors",
      "Threat intelligence enables organizations to make faster, more informed data-based security decisions",
      "Threat intelligence is a form of active testing that requires exploiting target systems",
      "Threat intelligence changes behavior from being reactive to proactive"
    ],
    "correctOption": 2,
    "isMultiSelect": false,
    "domainId": 2,
    "domain": "Domain 2: Threats, Vulnerabilities & Mitigations",
    "objective": "2.1-2.4 Threats, Vulnerabilities, Attack Vectors & Mitigations"
  },
  {
    "id": "e3-q61",
    "examSet": "Practice Exam 3",
    "examNum": 3,
    "questionNumber": 61,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "B",
    "explanation": "Correct Answer: B\n\nA. 'A threat is an unpatched system; a vulnerability is an attacker' is incorrect. The definitions are reversed: an\nunpatched system is a vulnerability, and an attacker is a threat actor. B. 'A vulnerability is an exploitable weakness; a\nthreat is a potential cause of harm' is correct. A vulnerability is a weakness that could be exploited, whereas a threat is\nany potential event or actor that could exploit a vulnerability to cause harm. C. 'A vulnerability is detected after a threat;\na threat is the result' is incorrect. Vulnerabilities exist independently of, and typically before, any threat acting on them;\na threat is not the 'result.' D. 'They are interchangeable terms' is incorrect. Vulnerability and threat are distinct concepts\nand are not synonyms.",
    "question": "What is the difference between a vulnerability and a threat?",
    "options": [
      "A threat is an unpatched system; a vulnerability is an attacker",
      "A vulnerability is an exploitable weakness; a threat is a potential cause of harm",
      "A vulnerability is detected after a threat; a threat is the result",
      "They are interchangeable terms"
    ],
    "correctOption": 1,
    "isMultiSelect": false,
    "domainId": 2,
    "domain": "Domain 2: Threats, Vulnerabilities & Mitigations",
    "objective": "2.1-2.4 Threats, Vulnerabilities, Attack Vectors & Mitigations"
  },
  {
    "id": "e3-q62",
    "examSet": "Practice Exam 3",
    "examNum": 3,
    "questionNumber": 62,
    "questionType": "Select Two",
    "correctAnswerRaw": "B, D",
    "explanation": "Correct Answer: B, D\n\nD and B are correct: nation-state actors are backed by government-level funding and field advanced capabilities such\nas custom malware and zero-day exploits. A is incorrect: relying only on pre-built tools without understanding them\ndescribes an unskilled attacker, not a nation-state. E is incorrect: petty vandalism for fun characterizes low-skill actors,\nwhereas nation-states pursue espionage, sabotage, or strategic advantage. C is incorrect: nation-state operations are\ntypically stealthy and hard to attribute, not consistently noisy.",
    "question": "An intelligence briefing describes an adversary that maintains long-term, stealthy access to critical\ninfrastructure. Which TWO attributes most strongly characterize a nation-state threat actor? (Select TWO.)",
    "options": [
      "Reliance solely on pre-built tools they do not understand",
      "Access to custom malware and zero-day exploits",
      "Consistently noisy, easily detected attacks",
      "Very high resources and funding",
      "A primary motivation of petty vandalism for fun"
    ],
    "optionLetters": [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    "isMultiSelect": true,
    "requiredSelectCount": 2,
    "correctOptions": [
      1,
      3
    ],
    "correctLetters": [
      "B",
      "D"
    ],
    "correctOption": 1,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e3-q63",
    "examSet": "Practice Exam 3",
    "examNum": 3,
    "questionNumber": 63,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "C",
    "explanation": "Correct Answer: C\n\nA. Rogue portal is incorrect. A rogue portal is a malicious portal designed to steal credentials \u2014 it masquerades as a\nlegitimate login page and is associated with evil twin attacks, not legitimate coffee shop Wi-Fi. B. Approval portal is\nincorrect. This is not a standard term in networking or security; there is no recognized portal type by this name. D.\nLimited portal is incorrect. This is also not a standard classification for wireless access portals. C. Captive portal is\ncorrect. A captive portal intercepts the user's first HTTP request and redirects them to a web page requiring\nacceptance of an AUP or providing credentials before granting full network access. Public Wi-Fi in hotels, cafes, and\nairports commonly uses this mechanism.",
    "question": "Zuri is on vacation and visits a local coffee shop to enjoy a beverage and check her email through the free\nWi-Fi. When she first connects, a screen appears asking her to agree to an acceptable use policy (AUP)\nbefore continuing. What type of AP portal has she encountered?",
    "options": [
      "Rogue portal",
      "Approval portal",
      "Captive portal",
      "Limited portal"
    ],
    "correctOption": 2,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e3-q64",
    "examSet": "Practice Exam 3",
    "examNum": 3,
    "questionNumber": 64,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "A",
    "explanation": "Correct Answer: A\n\nA (Security awareness training) is correct: administrative, or managerial, controls are the policies, procedures and\ntraining that govern how people behave, and awareness training is the textbook example, cutting susceptibility to\nphishing and everyday human error. C (SIEM alerting) is incorrect because log correlation and alerting is implemented\nin software and is therefore a technical control. D (Patch management scripts) is incorrect because automated\npatching is likewise technical, enforced by the system rather than by written policy. B (Motion detector) is incorrect\nbecause a sensor guarding a physical space is a physical control.",
    "question": "Which of the following is considered an administrative control?",
    "options": [
      "Security awareness training",
      "Motion detector",
      "SIEM alerting",
      "Patch management scripts"
    ],
    "correctOption": 0,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e3-q65",
    "examSet": "Practice Exam 3",
    "examNum": 3,
    "questionNumber": 65,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "D",
    "explanation": "Correct Answer: D\n\nD. Change in ownership or stakeholders is correct: it is an organizational change that alters who is accountable for or\naffected by a system, not an activity executed as part of a change procedure. C. Implementing impact analysis or test\nresults is incorrect: these are procedural change-management activities used to evaluate and validate a change. B.\nExecuting a backout plan or using a maintenance window is incorrect: both are procedural mechanisms for deploying\na change safely and reversing it if needed. A. Changing allow lists/deny lists is incorrect: it is a technical, procedural\nactivity performed while implementing a change.",
    "question": "Which of the following is an organizational change rather than a procedural activity carried out during\nchange management?",
    "options": [
      "Change allow lists/deny lists",
      "Execute backout plan or maintenance window",
      "Implement impact analysis or test results",
      "Change in ownership or stakeholders"
    ],
    "correctOption": 3,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e3-q66",
    "examSet": "Practice Exam 3",
    "examNum": 3,
    "questionNumber": 66,
    "questionType": "Matching",
    "correctAnswerRaw": "1 = B; 2 = C; 3 = D; 4 = A",
    "explanation": "Correct Answer: 1 = B; 2 = C; 3 = D; 4 = A\n\nVishing matches the automated phone call because vishing uses voice calls to trick victims into revealing account\ncredentials. Smishing matches the SMS about the locked bank account because smishing delivers phishing lures over\ntext messages. Pretexting matches the fabricated external-auditor identity because pretexting builds an invented\npersona and backstory to gain trust and extract confidential information. Business email compromise matches the\napparent CEO email because BEC impersonates a trusted executive identity to induce a fraudulent payment.",
    "question": "Match each attack with its example.",
    "matchingItems": [
      {
        "num": 1,
        "text": "Vishing",
        "correctLetter": "B"
      },
      {
        "num": 2,
        "text": "Smishing",
        "correctLetter": "C"
      },
      {
        "num": 3,
        "text": "Pretexting",
        "correctLetter": "D"
      },
      {
        "num": 4,
        "text": "Business email compromise",
        "correctLetter": "A"
      }
    ],
    "matchingDescriptions": [
      {
        "letter": "A",
        "text": "An email appearing to come from the CEO asks accounts payable to make an urgent wire transfer."
      },
      {
        "letter": "B",
        "text": "An automated phone call directs a user to call a fraudulent bank number and provide account credentials."
      },
      {
        "letter": "C",
        "text": "An SMS says, \"Your bank account has been locked; click here to unlock it.\""
      },
      {
        "letter": "D",
        "text": "A person creates a detailed false identity and backstory as an external auditor to obtain confidential records."
      }
    ],
    "correctMapping": {
      "1": "B",
      "2": "C",
      "3": "D",
      "4": "A"
    },
    "options": [
      "A. An email appearing to come from the CEO asks accounts payable to make an urgent wire transfer.",
      "B. An automated phone call directs a user to call a fraudulent bank number and provide account credentials.",
      "C. An SMS says, \"Your bank account has been locked; click here to unlock it.\"",
      "D. A person creates a detailed false identity and backstory as an external auditor to obtain confidential records."
    ],
    "correctOption": 0,
    "domainId": 2,
    "domain": "Domain 2: Threats, Vulnerabilities & Mitigations",
    "objective": "2.1-2.4 Threats, Vulnerabilities, Attack Vectors & Mitigations"
  },
  {
    "id": "e3-q67",
    "examSet": "Practice Exam 3",
    "examNum": 3,
    "questionNumber": 67,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "A",
    "explanation": "Correct Answer: A\n\nA. Correct \u2014 this statement is false: business email compromise (BEC) has been growing in popularity among threat\nactors because it is effective and can yield large payouts, so calling it 'decreasing' is inaccurate. B. BEC does exploit\nelectronic payments and funds transfers, so this statement is true and not the answer. C. BEC does take advantage of\nthe size and complexity of large enterprises, where requests are harder to verify, so this statement is true and not the\nanswer. D. BEC is not limited to businesses; individuals and other organizations can also be targeted, so this\nstatement is true and not the answer.",
    "question": "Which of the following is NOT true about BEC?",
    "options": [
      "It is decreasing in popularity among threat actors",
      "It takes advantage of electronically making payments or transferring funds",
      "It takes advantage of the size and complexity of large enterprises",
      "It is not limited to businesses"
    ],
    "correctOption": 0,
    "isMultiSelect": false,
    "domainId": 1,
    "domain": "Domain 1: General Security Concepts",
    "objective": "1.1-1.4 Security Controls, Cryptography, Identity & Access Management"
  },
  {
    "id": "e3-q68",
    "examSet": "Practice Exam 3",
    "examNum": 3,
    "questionNumber": 68,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "D",
    "explanation": "Correct Answer: D\n\nD (It separates personal data from corporate data.) is correct: containerization creates an encrypted area for corporate\napps and data that is managed separately from the user's personal apps. This is what makes BYOD and COPE\ndeployments workable because the corporate container can be secured or wiped without touching personal content. A\n(It splits operating system functions only on specific brands of mobile devices.) is incorrect because containerization is\nnot brand specific and it isolates data and applications rather than dividing operating system functions. C (It places all\nkeys in a special vault.) is incorrect because secure key storage is handled by hardware features such as a secure\nenclave or TPM, not by containerization. B (It slows down a mobile device to half speed.) is incorrect because\ncontainerization is a logical separation with no such performance effect.",
    "question": "What does containerization do?",
    "options": [
      "It splits operating system functions only on specific brands of mobile devices.",
      "It slows down a mobile device to half speed.",
      "It places all keys in a special vault.",
      "It separates personal data from corporate data."
    ],
    "correctOption": 3,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e3-q69",
    "examSet": "Practice Exam 3",
    "examNum": 3,
    "questionNumber": 69,
    "questionType": "Matching",
    "correctAnswerRaw": "1 = D; 2 = A; 3 = B; 4 = C",
    "explanation": "Correct Answer: 1 = D; 2 = A; 3 = B; 4 = C\n\nSY0-701 groups security controls into four categories. Technical controls are implemented through technology -\nanti-malware software. Managerial controls govern through policy and oversight - the security policy document.\nOperational controls are carried out by people in day-to-day activities - incident response training. Physical controls\nprotect the physical environment - the camera system.",
    "question": "Match each security control example to its category.",
    "matchingItems": [
      {
        "num": 1,
        "text": "Camera system",
        "correctLetter": "D"
      },
      {
        "num": 2,
        "text": "Security policy",
        "correctLetter": "A"
      },
      {
        "num": 3,
        "text": "Anti-malware software",
        "correctLetter": "B"
      },
      {
        "num": 4,
        "text": "Incident response training",
        "correctLetter": "C"
      }
    ],
    "matchingDescriptions": [
      {
        "letter": "A",
        "text": "Managerial"
      },
      {
        "letter": "B",
        "text": "Technical"
      },
      {
        "letter": "C",
        "text": "Operational"
      },
      {
        "letter": "D",
        "text": "Physical"
      }
    ],
    "correctMapping": {
      "1": "D",
      "2": "A",
      "3": "B",
      "4": "C"
    },
    "options": [
      "A. Managerial",
      "B. Technical",
      "C. Operational",
      "D. Physical"
    ],
    "correctOption": 0,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e3-q70",
    "examSet": "Practice Exam 3",
    "examNum": 3,
    "questionNumber": 70,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "B",
    "explanation": "Correct Answer: B\n\nC. Federation is incorrect. Federation lets a user authenticate once with one identity provider and access resources\nacross separate organizations or domains; it does not describe combining multiple credentials at a single login. A.\nTwo-step verification is incorrect. Two-step verification adds a second step that may rely on the same factor category\n(for example, a password followed by an emailed code); this scenario deliberately combines two different factor\ncategories. B. Multifactor authentication is correct. The login combines something you know (the password) with\nsomething you are (the fingerprint) - two distinct authentication factors - which is the defining characteristic of\nmultifactor authentication. The username is only an identifier, not a factor. D. Single sign-on is incorrect. Single sign-on\nlets one authenticated session grant access to many applications without re-authenticating; it does not refer to using\nmultiple factors.",
    "question": "A user logs in using a username, password, and fingerprint scan. This is an example of:",
    "options": [
      "Two-step verification",
      "Multifactor authentication",
      "Federation",
      "Single sign-on"
    ],
    "correctOption": 1,
    "isMultiSelect": false,
    "domainId": 1,
    "domain": "Domain 1: General Security Concepts",
    "objective": "1.1-1.4 Security Controls, Cryptography, Identity & Access Management"
  },
  {
    "id": "e3-q71",
    "examSet": "Practice Exam 3",
    "examNum": 3,
    "questionNumber": 71,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "C",
    "explanation": "Correct Answer: C\n\nC. DNS spoofing is correct: forging or modifying DNS responses so that a legitimate name resolves to an\nattacker-controlled address redirects users to a malicious site. A. VLAN hopping is incorrect because it abuses\nswitch/VLAN tagging behavior to reach other network segments; it does not manipulate name resolution. B. Session\nhijacking is incorrect because it takes over an existing authenticated session rather than altering DNS answers. D.\nPassword spraying is incorrect because it tries a few common passwords across many accounts and involves no DNS\nmanipulation.",
    "question": "An attacker modifies DNS responses to redirect users to a malicious site. What type of attack is this?",
    "options": [
      "VLAN hopping",
      "Session hijacking",
      "DNS spoofing",
      "Password spraying"
    ],
    "correctOption": 2,
    "isMultiSelect": false,
    "domainId": 1,
    "domain": "Domain 1: General Security Concepts",
    "objective": "1.1-1.4 Security Controls, Cryptography, Identity & Access Management"
  },
  {
    "id": "e3-q72",
    "examSet": "Practice Exam 3",
    "examNum": 3,
    "questionNumber": 72,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "A",
    "explanation": "Correct Answer: A\n\nC. Lower email deliverability is incorrect: it is a messaging/reputation issue, not a consequence of weak cryptography.\nB. Failure of biometric devices is incorrect: biometric hardware is unrelated to the strength of a communication cipher.\nA. Exposure to brute-force or known attacks is correct: outdated algorithms (e.g., DES, MD5) have known weaknesses\nand short key lengths, making them susceptible to brute-force and published cryptanalytic attacks. D. Increase in\nmemory usage is incorrect: outdated algorithms are often less resource-intensive, and memory is not the security risk\nhere.",
    "question": "What is a risk of using outdated cryptographic algorithms in secure communications?",
    "options": [
      "Exposure to brute-force or known attacks",
      "Failure of biometric devices",
      "Lower email deliverability",
      "Increase in memory usage"
    ],
    "correctOption": 0,
    "isMultiSelect": false,
    "domainId": 1,
    "domain": "Domain 1: General Security Concepts",
    "objective": "1.1-1.4 Security Controls, Cryptography, Identity & Access Management"
  },
  {
    "id": "e3-q73",
    "examSet": "Practice Exam 3",
    "examNum": 3,
    "questionNumber": 73,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "B",
    "explanation": "Correct Answer: B\n\nB. Risk assessment is correct. Risk assessment is the systematic process of identifying, analyzing, and evaluating\nrisks \u2014 assigning likelihood and impact scores to prioritize which risks require treatment and in what order. It forms the\nfoundation of any risk management program. A. Security awareness training is incorrect. Training educates employees\nto recognize threats but does not itself evaluate or rank organizational risks. C. Third-party audit is incorrect. A\nthird-party audit verifies compliance with standards or regulations \u2014 it is an evaluation of controls, not a risk ranking\nmethodology. D. Policy review is incorrect. Policy review examines whether documented rules are current and\neffective \u2014 it is not the process of evaluating and ranking risks by likelihood and impact.",
    "question": "Fill in the blank: The process of __________ involves evaluating and ranking risks based on likelihood and\nimpact.",
    "options": [
      "Security awareness training",
      "Risk assessment",
      "Third-party audit",
      "Policy review"
    ],
    "correctOption": 1,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e3-q74",
    "examSet": "Practice Exam 3",
    "examNum": 3,
    "questionNumber": 74,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "A",
    "explanation": "Correct Answer: A\n\nD. SIEM is incorrect. A SIEM aggregates, correlates, and alerts on security events; it is not primarily a playbook-driven\norchestration engine for response workflows. A. SOAR is correct. Security orchestration, automation, and response\nplatforms connect multiple security tools and run playbooks that automate workflows such as ticket creation,\nescalation, and disabling access. B. Vulnerability scanner is incorrect. It identifies weaknesses in systems and\napplications; it does not orchestrate response actions across tools. C. DLP is incorrect. Data loss prevention monitors\nand controls the movement of sensitive data; it does not run cross-tool response playbooks.",
    "question": "Which platform uses playbooks to orchestrate multiple security tools and automate response workflows\nsuch as ticket creation, escalation, and disabling access?",
    "options": [
      "SOAR",
      "Vulnerability scanner",
      "DLP",
      "SIEM"
    ],
    "correctOption": 0,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e3-q75",
    "examSet": "Practice Exam 3",
    "examNum": 3,
    "questionNumber": 75,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "A",
    "explanation": "Correct Answer: A\n\nA (Threat hunting) is correct: threat hunting is the proactive, hypothesis-driven search for malicious activity that has\nalready slipped past existing defenses without triggering an alert. Analysts query SIEM data, endpoint telemetry, and\nthreat intelligence to find hidden adversaries. C (Vulnerability scanning) is incorrect because scanning identifies\nweaknesses such as missing patches and misconfigurations; it looks for exposures, not for attackers already inside. D\n(Penetration testing) is incorrect because a pentest is an authorized simulated attack that tests whether defenses can\nbe breached, rather than a search for real intruders who evaded them. B (Log analysis) is incorrect because reviewing\nlogs is a technique that threat hunters use, but by itself it is general monitoring and not the proactive process the blank\ndescribes.",
    "question": "Fill in the blank: __________ is a proactive process of seeking threats that have evaded traditional\ndefenses.",
    "options": [
      "Threat hunting",
      "Log analysis",
      "Vulnerability scanning",
      "Penetration testing"
    ],
    "correctOption": 0,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e3-q76",
    "examSet": "Practice Exam 3",
    "examNum": 3,
    "questionNumber": 76,
    "questionType": "Matching",
    "correctAnswerRaw": "1 = A; 2 = D; 3 = C; 4 = B",
    "explanation": "Correct Answer: 1 = A; 2 = D; 3 = C; 4 = B\n\nKerberos matches \"Ticket-granting protocol for internal SSO\" because it uses a Key Distribution Center to issue\ntime-limited tickets that authenticate users across services within an Active Directory domain. RADIUS matches \"Used\nfor centralized authentication over UDP,\" providing AAA services for network access (VPN, 802.1X, remote access)\nvia UDP ports 1812/1813. LDAP matches \"Directory access protocol used for user lookups,\" supplying read and write\naccess to directory entries such as users, groups, and computers. SAML matches \"Federated identity for cloud-based\napplications\" since it is an XML-based standard that exchanges authentication assertions between identity providers\nand service providers in web SSO scenarios.",
    "question": "Match each authentication protocol with its key characteristic.",
    "matchingItems": [
      {
        "num": 1,
        "text": "Kerberos",
        "correctLetter": "A"
      },
      {
        "num": 2,
        "text": "RADIUS",
        "correctLetter": "D"
      },
      {
        "num": 3,
        "text": "LDAP",
        "correctLetter": "C"
      },
      {
        "num": 4,
        "text": "SAML",
        "correctLetter": "B"
      }
    ],
    "matchingDescriptions": [
      {
        "letter": "A",
        "text": "Ticket-granting protocol for internal SSO"
      },
      {
        "letter": "B",
        "text": "Federated identity for cloud-based applications"
      },
      {
        "letter": "C",
        "text": "Directory access protocol used for user lookups"
      },
      {
        "letter": "D",
        "text": "Used for centralized authentication over UDP"
      }
    ],
    "correctMapping": {
      "1": "A",
      "2": "D",
      "3": "C",
      "4": "B"
    },
    "options": [
      "A. Ticket-granting protocol for internal SSO",
      "B. Federated identity for cloud-based applications",
      "C. Directory access protocol used for user lookups",
      "D. Used for centralized authentication over UDP"
    ],
    "correctOption": 0,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e3-q77",
    "examSet": "Practice Exam 3",
    "examNum": 3,
    "questionNumber": 77,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "D",
    "explanation": "Correct Answer: D\n\nB. NAT is incorrect. Network address translation maps private IP addresses to public ones at a network boundary; it is\nan addressing function, not a bundled security platform. D. UTM is correct. Unified threat management appliances are\ndefined precisely by combining multiple security functions \u2014 firewall, antivirus, intrusion detection or prevention, and\ncontent filtering \u2014 within a single platform. C. WAF is incorrect. A web application firewall specializes in inspecting\nHTTP/HTTPS traffic to protect web applications; it does not bundle antivirus and content filtering for the whole\nnetwork. A. NGFW is incorrect. A next-generation firewall adds application awareness and intrusion prevention to\nfirewalling, but the category defined by bundling firewall, antivirus, IDS/IPS, and content filtering in one appliance is the\nUTM.",
    "question": "Which network appliance category is specifically intended to combine firewall, antivirus, intrusion detection\nor prevention, and content filtering in a single platform?",
    "options": [
      "NGFW",
      "NAT",
      "WAF",
      "UTM"
    ],
    "correctOption": 3,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e3-q78",
    "examSet": "Practice Exam 3",
    "examNum": 3,
    "questionNumber": 78,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "A",
    "explanation": "Correct Answer: A\n\nA. Correct \u2014 this statement is NOT true: a secure cookie protects the cookie itself during transmission; it does not\nprotect the web browser from malware or other browser attacks. B. The Secure attribute does instruct the browser to\nsend the cookie only over a secure (HTTPS) connection, so this statement is true and not the answer. C. When\nHTTPS is used, TLS encrypts the HTTP request, including the header that carries the cookie, so this statement is true\nand not the answer. D. Because the cookie travels inside an encrypted channel, an interceptor who captures the traffic\ncannot read the cookie's contents in transit, so this statement is true and not the answer.",
    "question": "Which of the following is NOT correct about a secure cookie?",
    "options": [
      "It protects the web browser itself from malware and other browser attacks.",
      "The Secure attribute directs the browser to send the cookie only over a secure connection.",
      "When HTTPS is used, TLS encrypts the HTTP request containing the cookie header.",
      "It reduces the risk that an interceptor can read the cookie while it is in transit."
    ],
    "correctOption": 0,
    "isMultiSelect": false,
    "domainId": 1,
    "domain": "Domain 1: General Security Concepts",
    "objective": "1.1-1.4 Security Controls, Cryptography, Identity & Access Management"
  },
  {
    "id": "e3-q79",
    "examSet": "Practice Exam 3",
    "examNum": 3,
    "questionNumber": 79,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "A",
    "explanation": "Correct Answer: A\n\nD. RTO is incorrect. The Recovery Time Objective sets the maximum acceptable time to restore a service after a\ndisruption; it measures downtime, not the point in time to which data is recovered. A. RPO (Recovery Point Objective)\nis correct. The RPO defines the maximum acceptable amount of data loss expressed as a point in time, the moment to\nwhich data must be restored, and therefore drives how frequently backups or replication must run. C. MTBF is\nincorrect. Mean Time Between Failures is a reliability metric describing how long a component operates before failing;\nit says nothing about data restore points. B. SLA is incorrect. A Service Level Agreement is a contract defining\nexpected service levels; it may reference RPO/RTO but is not itself the data-restore-point metric.",
    "question": "Fill in the blank: The __________ identifies the point in time to which data must be restored after a\ndisruption.",
    "options": [
      "RPO (Recovery Point Objective)",
      "SLA (Service Level Agreement)",
      "MTBF (Mean Time Between Failures)",
      "RTO (Recovery Time Objective)"
    ],
    "correctOption": 0,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e3-q80",
    "examSet": "Practice Exam 3",
    "examNum": 3,
    "questionNumber": 80,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "D",
    "explanation": "Correct Answer: D\n\nB. RPO is incorrect. Recovery Point Objective defines the maximum acceptable data loss measured in time, not an\nincident response phase. A. MTBF is incorrect. Mean Time Between Failures is a reliability metric for hardware, not an\nIR phase. C. MTTR is incorrect. Mean Time To Repair measures average time needed to fix failures; it is a\nmaintenance metric, not an IR phase. D. Recovery is correct. In the NIST incident response lifecycle, the Recovery\nphase restores affected systems to normal operations, verifies they function properly, and returns them to production\nafter eradication.",
    "question": "Fill in the blank: The __________ phase of incident response includes restoring operations to normal and\nconfirming systems are functioning properly.",
    "options": [
      "MTBF (Mean Time Between Failures)",
      "RPO (Recovery Point Objective)",
      "MTTR (Mean Time To Repair)",
      "Recovery"
    ],
    "correctOption": 3,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e3-q81",
    "examSet": "Practice Exam 3",
    "examNum": 3,
    "questionNumber": 81,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "A",
    "explanation": "Correct Answer: A\n\nB. Conflict-based resource race condition is incorrect because it is not a standard classification of race conditions. D.\nValue-comparison memory race condition is incorrect because it is likewise not a recognized category. C.\nThread-scheduling execution race condition in the kernel scheduler is incorrect because it is a generic label for\nconcurrent execution rather than a recognized named pattern, and the scheduler is not what changes the reference\nhere; the scenario hinges on a validated state changing between validation and use. A. Time-of-check/time-of-use\n(TOCTOU) race condition is correct because the application checked that the reference was valid and, before it was\nused, another process changed it - that gap between the time of check and the time of use is exactly what defines a\ntime-of-check to time-of-use race condition, and here it results in a NULL pointer dereference.",
    "question": "An application verifies that an object reference is not NULL. Before the application uses the reference,\nanother process changes it to NULL, causing a crash when it is dereferenced. Which race condition does\nthis illustrate?",
    "options": [
      "Time-of-check/time-of-use (TOCTOU) race condition",
      "Conflict-based resource race condition",
      "Thread-scheduling execution race condition in the kernel scheduler",
      "Value-comparison memory race condition"
    ],
    "correctOption": 0,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e3-q82",
    "examSet": "Practice Exam 3",
    "examNum": 3,
    "questionNumber": 82,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "A",
    "explanation": "Correct Answer: A\n\nA. Authentication is correct. Authentication is a security control used to verify an identity; it is something implemented\non the system, not a resource or design consideration that constrains it. D. Cost is incorrect. Cost is an architecture\nconsideration: tight budgets limit the hardware and the security capabilities an embedded system can include. C.\nPower is incorrect. Power is an architecture consideration: embedded devices often run on limited power, which\nrestricts the processing available for security functions. B. Compute is incorrect. Compute is an architecture\nconsideration: constrained CPU and memory limit the cryptography and monitoring an embedded system can support.",
    "question": "Ahmet is reviewing the resource and design considerations that make it challenging to secure a new\nembedded system. Which of the following is a security control rather than one of these considerations?",
    "options": [
      "Authentication",
      "Compute",
      "Power",
      "Cost"
    ],
    "correctOption": 0,
    "isMultiSelect": false,
    "domainId": 1,
    "domain": "Domain 1: General Security Concepts",
    "objective": "1.1-1.4 Security Controls, Cryptography, Identity & Access Management"
  },
  {
    "id": "e3-q83",
    "examSet": "Practice Exam 3",
    "examNum": 3,
    "questionNumber": 83,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "A",
    "explanation": "Correct Answer: A\n\nC. XSS is incorrect: cross-site scripting injects client-side scripts into web pages viewed by other users, not into SQL\nstatements. B. Directory traversal is incorrect: it manipulates file paths to access files outside the intended directory,\nnot database queries. A. SQL injection is correct: inserting malicious input into a dynamically built SQL statement lets\nan attacker alter the query to read or modify database data. D. XML external entity is incorrect: XXE abuses XML\nparsers to disclose files or reach internal services, it does not target SQL statements.",
    "question": "Which type of attack involves injecting malicious code into a dynamic SQL statement?",
    "options": [
      "SQL injection",
      "Directory traversal",
      "XSS",
      "XML external entity"
    ],
    "correctOption": 0,
    "isMultiSelect": false,
    "domainId": 2,
    "domain": "Domain 2: Threats, Vulnerabilities & Mitigations",
    "objective": "2.1-2.4 Threats, Vulnerabilities, Attack Vectors & Mitigations"
  },
  {
    "id": "e3-q84",
    "examSet": "Practice Exam 3",
    "examNum": 3,
    "questionNumber": 84,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "A",
    "explanation": "Correct Answer: A\n\nA is correct (Attestation): attestation is a formal declaration by a responsible party that specific statements about\ncontrols are accurate. It converts the results of a review into an accountable, signed assertion that customers and\nauditors can rely on. D is incorrect (Self-assessment) because the self-assessment is the internal review the vendor\nperformed to gather the evidence; the signed statement built on it is the attestation. B is incorrect (Regulatory\nexamination) because an examination is conducted by a government or industry regulator with legal authority, not by\nthe company's own executives. C is incorrect (Independent third-party audit) because in a third-party audit an external\nfirm tests the controls and issues its own opinion; here the vendor is asserting the results itself.",
    "question": "After completing an internal review of its security controls, a software vendor's executives sign a formal\nstatement, provided to enterprise customers, declaring that the controls described in its security\ndocumentation are implemented and operating as stated. Which term describes this signed declaration?",
    "options": [
      "Attestation",
      "Regulatory examination",
      "Independent third-party audit",
      "Self-assessment"
    ],
    "correctOption": 0,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e3-q85",
    "examSet": "Practice Exam 3",
    "examNum": 3,
    "questionNumber": 85,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "A",
    "explanation": "Correct Answer: A\n\nC. Data encryption is incorrect. Encryption protects data confidentiality in transit or at rest but does nothing to verify\nthat a state-changing request was intentionally issued by the user, which is what CSRF abuses. A. Token-based\nsession validation is correct. An unpredictable anti-CSRF token tied to the user's session must accompany each\nstate-changing request; because a malicious cross-site page cannot read or guess this token, the forged request is\nrejected. D. Strong passwords are incorrect. CSRF rides on an already-authenticated session, so password strength is\nirrelevant \u2014 the victim is already logged in. B. DNS filtering is incorrect. DNS filtering blocks resolution of malicious\ndomains; it does not validate the origin or intent of requests sent to a legitimate application.",
    "question": "Which of the following BEST mitigates a cross-site request forgery (CSRF) attack?",
    "options": [
      "Token-based session validation",
      "DNS filtering",
      "Data encryption",
      "Strong passwords"
    ],
    "correctOption": 0,
    "isMultiSelect": false,
    "domainId": 2,
    "domain": "Domain 2: Threats, Vulnerabilities & Mitigations",
    "objective": "2.1-2.4 Threats, Vulnerabilities, Attack Vectors & Mitigations"
  },
  {
    "id": "e3-q86",
    "examSet": "Practice Exam 3",
    "examNum": 3,
    "questionNumber": 86,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "B",
    "explanation": "Correct Answer: B\n\nA. Documented recovery procedures is a true element, so it is not the correct choice: a BCP must document how\ncritical operations are restored and continued during a disruption. B. Simplicity as a mandatory planning objective is\nthe correct answer because it is NOT a required BCP element: simplicity is a desirable quality, but continuity plans\noften must be detailed and comprehensive to cover multiple disruption scenarios. C. Defined recovery roles and\nresponsibilities is a true element, so it is not the correct choice: a BCP must state who performs each recovery task\nand who has decision authority. D. Prioritized critical business functions is a true element, so it is not the correct\nchoice: identifying and prioritizing critical functions, typically from the business impact analysis, is the foundation of the\nplan.",
    "question": "Which of the following is NOT an element that should be part of a BCP?",
    "options": [
      "Documented recovery procedures",
      "Simplicity as a mandatory planning objective",
      "Defined recovery roles and responsibilities",
      "Prioritized critical business functions"
    ],
    "correctOption": 1,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e3-q87",
    "examSet": "Practice Exam 3",
    "examNum": 3,
    "questionNumber": 87,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "B",
    "explanation": "Correct Answer: B\n\nA. Hashing is incorrect. Hashing transforms data into a fixed-length digest and is irreversible \u2014 it does not use a key\nand cannot be decrypted. D. Tokenization is incorrect. Tokenization replaces sensitive data with a non-sensitive\nplaceholder (token) but does not use an algorithm and key to transform plaintext to ciphertext. B. Encryption is correct.\nEncryption uses a public or shared algorithm combined with a key to convert plaintext into ciphertext, which can be\nreversed with the appropriate key. C. Obfuscation is incorrect. Obfuscation makes data harder to understand but does\nnot follow a formal algorithm-and-key model to produce ciphertext.",
    "question": "Fill in the blank: The process of converting plaintext into ciphertext using a public algorithm and a key is\ncalled __________.",
    "options": [
      "Hashing",
      "Encryption",
      "Obfuscation",
      "Tokenization"
    ],
    "correctOption": 1,
    "isMultiSelect": false,
    "domainId": 1,
    "domain": "Domain 1: General Security Concepts",
    "objective": "1.1-1.4 Security Controls, Cryptography, Identity & Access Management"
  },
  {
    "id": "e3-q88",
    "examSet": "Practice Exam 3",
    "examNum": 3,
    "questionNumber": 88,
    "questionType": "Matching",
    "correctAnswerRaw": "1 = D; 2 = C; 3 = A; 4 = B",
    "explanation": "Correct Answer: 1 = D; 2 = C; 3 = A; 4 = B\n\nThe correct mapping is: MAC (Mandatory Access Control) is based on labels and classification levels \u2014 the system\nenforces access based on data sensitivity labels (e.g., Confidential, Secret) and user clearance levels, with no\ndiscretion granted to data owners. RBAC (Role-Based Access Control) is based on roles and job functions \u2014 users\ninherit permissions from their assigned role (e.g., 'Network Admin' role), simplifying management in large\norganizations. ABAC (Attribute-Based Access Control) is based on rules and multiple attributes \u2014 decisions\nincorporate user department, time of day, device type, location, and other contextual factors. DAC (Discretionary\nAccess Control) is based on user-defined permissions \u2014 resource owners decide who can access their files or\nobjects.",
    "question": "Match each access control type to its method.",
    "matchingItems": [
      {
        "num": 1,
        "text": "MAC",
        "correctLetter": "D"
      },
      {
        "num": 2,
        "text": "RBAC",
        "correctLetter": "C"
      },
      {
        "num": 3,
        "text": "ABAC",
        "correctLetter": "A"
      },
      {
        "num": 4,
        "text": "DAC",
        "correctLetter": "B"
      }
    ],
    "matchingDescriptions": [
      {
        "letter": "A",
        "text": "Based on rules and attributes"
      },
      {
        "letter": "B",
        "text": "Based on user-defined permissions"
      },
      {
        "letter": "C",
        "text": "Based on roles and job functions"
      },
      {
        "letter": "D",
        "text": "Based on labels and classification levels"
      }
    ],
    "correctMapping": {
      "1": "D",
      "2": "C",
      "3": "A",
      "4": "B"
    },
    "options": [
      "A. Based on rules and attributes",
      "B. Based on user-defined permissions",
      "C. Based on roles and job functions",
      "D. Based on labels and classification levels"
    ],
    "correctOption": 0,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e3-q89",
    "examSet": "Practice Exam 3",
    "examNum": 3,
    "questionNumber": 89,
    "questionType": "Matching",
    "correctAnswerRaw": "1 = C; 2 = B; 3 = D; 4 = A",
    "explanation": "Correct Answer: 1 = C; 2 = B; 3 = D; 4 = A\n\nThe Legal advisor pairs with \"Ensures chain of custody and compliance\" because this role oversees evidence\nhandling, breach notification obligations, and regulatory adherence. The Technical lead pairs with \"Directs technical\nremediation and containment,\" driving the hands-on isolation of systems and removal of threats. The Communications\nofficer pairs with \"Handles external and internal messaging,\" managing press statements, customer advisories, and\nemployee updates. The Incident commander pairs with \"Leads response activities and decision-making,\" having\noverall authority to coordinate resources, approve actions, and escalate across the response team.",
    "question": "Match each incident response role to its responsibility.",
    "matchingItems": [
      {
        "num": 1,
        "text": "Legal advisor",
        "correctLetter": "C"
      },
      {
        "num": 2,
        "text": "Technical lead",
        "correctLetter": "B"
      },
      {
        "num": 3,
        "text": "Communications officer",
        "correctLetter": "D"
      },
      {
        "num": 4,
        "text": "Incident commander",
        "correctLetter": "A"
      }
    ],
    "matchingDescriptions": [
      {
        "letter": "A",
        "text": "Leads response activities and decision-making"
      },
      {
        "letter": "B",
        "text": "Directs technical remediation and containment"
      },
      {
        "letter": "C",
        "text": "Ensures chain of custody and compliance"
      },
      {
        "letter": "D",
        "text": "Handles external and internal messaging"
      }
    ],
    "correctMapping": {
      "1": "C",
      "2": "B",
      "3": "D",
      "4": "A"
    },
    "options": [
      "A. Leads response activities and decision-making",
      "B. Directs technical remediation and containment",
      "C. Ensures chain of custody and compliance",
      "D. Handles external and internal messaging"
    ],
    "correctOption": 0,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e3-q90",
    "examSet": "Practice Exam 3",
    "examNum": 3,
    "questionNumber": 90,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "B",
    "explanation": "Correct Answer: B\n\nD. Force Allow is incorrect because it is vendor-specific terminology, not a standard firewall rule action. A. Force Deny\nis incorrect for the same reason, and it would block rather than permit matching traffic. C. Bypass is incorrect because\nit skips rule inspection entirely instead of permitting an explicitly configured exception. B. Allow is correct: under a\ndefault-deny policy, an Allow rule is the standard action that permits traffic matching an explicit exception, while all\nunmatched traffic remains denied by the default policy.",
    "question": "Under a default-deny firewall policy, which standard rule action permits traffic that matches an explicitly\nconfigured exception?",
    "options": [
      "Force Deny",
      "Allow",
      "Bypass",
      "Force Allow"
    ],
    "correctOption": 1,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e4-q01",
    "examSet": "Practice Exam 4",
    "examNum": 4,
    "questionNumber": 1,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "A",
    "explanation": "Correct Answer: A\n\nA. Fail-closed is correct. In fail-closed mode a failed appliance blocks all traffic passing through it, prioritizing security\nover availability, which is exactly the stated requirement. C. Fail-open is incorrect. Fail-open lets traffic continue to flow\nwhen the device fails, preserving availability but leaving traffic uninspected \u2014 the opposite of the requirement. D.\nPassive operation is incorrect. Active versus passive describes whether a device can act on traffic during normal\noperation; it is not a failure mode. B. Tap/monitor mode is incorrect. A device on a tap or monitor port only receives a\ncopy of traffic for analysis; it never sits in the traffic path, so it cannot block anything, failed or not.",
    "question": "Nadia is deploying an inline network security appliance. She must ensure that if the appliance loses power\nor crashes, all traffic through it is blocked until the device is restored. Which failure mode should she\nconfigure?",
    "options": [
      "Fail-closed",
      "Tap/monitor mode",
      "Fail-open",
      "Passive operation"
    ],
    "correctOption": 0,
    "isMultiSelect": false,
    "domainId": 3,
    "domain": "Domain 3: Security Architecture",
    "objective": "3.1-3.4 Security Architecture, Cloud, Infrastructure & Resilience"
  },
  {
    "id": "e4-q02",
    "examSet": "Practice Exam 4",
    "examNum": 4,
    "questionNumber": 2,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "A",
    "explanation": "Correct Answer: A\n\nD. SLA is incorrect because a service-level agreement defines measurable performance commitments between a\nprovider and a customer, not rules for user behavior on systems. C. NDA is incorrect because a non-disclosure\nagreement protects confidential information exchanged between parties; it does not define permitted system actions.\nB. MOU is incorrect because a memorandum of understanding documents an informal agreement between\norganizations, not what users may do on the network. A. AUP is correct: an acceptable use policy defines the actions\nusers may and may not perform while accessing an organization's systems and networking equipment.",
    "question": "Which policy defines the actions users may perform while accessing systems and networking equipment?",
    "options": [
      "AUP",
      "MOU",
      "NDA",
      "SLA"
    ],
    "correctOption": 0,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e4-q03",
    "examSet": "Practice Exam 4",
    "examNum": 4,
    "questionNumber": 3,
    "questionType": "Matching",
    "correctAnswerRaw": "1 = A; 2 = C; 3 = D; 4 = B",
    "explanation": "Correct Answer: 1 = A; 2 = C; 3 = D; 4 = B\n\nThe correct mapping is: Service account is used by applications or scripts \u2014 it is a non-human account created so that\nsoftware processes can authenticate and access resources without human intervention. Privileged user has elevated\npermissions and higher risk \u2014 admins and root users can make system-wide changes, making their accounts\nhigh-value targets requiring extra controls like PAM and MFA. Standard user has basic access for daily tasks \u2014\nlimited to the resources needed for their role under least privilege. Guest account has limited, temporary access \u2014\ntypically restricted to minimal resources and revoked after a short period, often used for contractor or visitor access.",
    "question": "Match each identity type to its characteristic.",
    "matchingItems": [
      {
        "num": 1,
        "text": "Service account",
        "correctLetter": "A"
      },
      {
        "num": 2,
        "text": "Privileged user",
        "correctLetter": "C"
      },
      {
        "num": 3,
        "text": "Standard user",
        "correctLetter": "D"
      },
      {
        "num": 4,
        "text": "Guest account",
        "correctLetter": "B"
      }
    ],
    "matchingDescriptions": [
      {
        "letter": "A",
        "text": "Used by applications or scripts"
      },
      {
        "letter": "B",
        "text": "Limited, temporary access"
      },
      {
        "letter": "C",
        "text": "Elevated permissions and higher risk"
      },
      {
        "letter": "D",
        "text": "Basic access for daily tasks"
      }
    ],
    "correctMapping": {
      "1": "A",
      "2": "C",
      "3": "D",
      "4": "B"
    },
    "options": [
      "A. Used by applications or scripts",
      "B. Limited, temporary access",
      "C. Elevated permissions and higher risk",
      "D. Basic access for daily tasks"
    ],
    "correctOption": 0,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e4-q04",
    "examSet": "Practice Exam 4",
    "examNum": 4,
    "questionNumber": 4,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "C",
    "explanation": "Correct Answer: C\n\nB. Password policy is incorrect. A password policy is a preventive control \u2014 it reduces the likelihood of unauthorized\naccess before it occurs, not after a breach has happened. D. Firewall is incorrect. A firewall is primarily preventive; it\nblocks unauthorized traffic at network boundaries but does not identify breaches that have already occurred inside the\nperimeter. C. IDS is correct. An Intrusion Detection System monitors network traffic or host activity for indicators of\nmalicious behavior and generates alerts \u2014 it is the textbook detective control. Unlike an IPS (which actively blocks),\nan IDS only detects and reports after suspicious activity occurs or is in progress. A. MFA is incorrect. Multi-factor\nauthentication is a preventive control that blocks unauthorized access attempts \u2014 it operates before a breach, not\nafter.",
    "question": "Which of the following controls is specifically designed to identify a security breach after it has occurred?",
    "options": [
      "MFA",
      "Password policy",
      "IDS",
      "Firewall"
    ],
    "correctOption": 2,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e4-q05",
    "examSet": "Practice Exam 4",
    "examNum": 4,
    "questionNumber": 5,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "A",
    "explanation": "Correct Answer: A\n\nB. Firewall is incorrect. A firewall filters traffic based on network rules (IP, port, protocol) \u2014 it cannot detect behavioral\nanomalies tied to specific internal users or track gradual data exfiltration patterns over time. D. SIEM is incorrect. A\nSIEM aggregates and correlates logs and can detect some anomalies, but it lacks the per-user behavioral baselining\nthat makes UEBA specifically effective for insider threat detection. A. UEBA is correct. UEBA (User and Entity\nBehavior Analytics) establishes behavioral baselines for individual users, then detects deviations \u2014 such as an\nemployee accessing unusually large volumes of files at odd hours or transferring data to external storage. This\npattern-over-time analysis makes it the most effective tool for detecting slow, covert insider exfiltration. C. Load\nbalancer is incorrect. A load balancer distributes traffic for performance and availability \u2014 it provides no security\nmonitoring capability.",
    "question": "A company wants to detect signs of internal employees exfiltrating sensitive data over time. Which tool\nwould be most effective?",
    "options": [
      "UEBA",
      "Firewall",
      "Load balancer",
      "SIEM"
    ],
    "correctOption": 0,
    "isMultiSelect": false,
    "domainId": 4,
    "domain": "Domain 4: Security Operations",
    "objective": "4.1-4.4 Security Operations, Monitoring, Incident Response & Forensics"
  },
  {
    "id": "e4-q06",
    "examSet": "Practice Exam 4",
    "examNum": 4,
    "questionNumber": 6,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "D",
    "explanation": "Correct Answer: D\n\nA. Limit user permissions is incorrect. Limiting user permissions is the goal of least privilege, an access control\nprinciple \u2014 not the primary objective of business continuity planning. C. Protect physical buildings is incorrect.\nPhysical facility protection is a physical security concern. BCP is concerned with operational continuity of business\nfunctions, not building security. D. Maintain operations during a disruption is correct. A BCP defines strategies and\nprocedures to ensure critical business functions continue during and after a disruptive event \u2014 whether a natural\ndisaster, cyberattack, or major system failure. It includes alternate site strategies, communication plans, and recovery\npriorities tied to RTO and RPO values. B. Monitor encrypted traffic is incorrect. Encrypted traffic monitoring (SSL/TLS\ninspection) is a security operations function, unrelated to continuity planning.",
    "question": "Which of the following is a PRIMARY goal of business continuity planning?",
    "options": [
      "Limit user permissions",
      "Monitor encrypted traffic",
      "Protect physical buildings",
      "Maintain operations during a disruption"
    ],
    "correctOption": 3,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e4-q07",
    "examSet": "Practice Exam 4",
    "examNum": 4,
    "questionNumber": 7,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "C",
    "explanation": "Correct Answer: C\n\nA. Being installed by default on many Windows systems is a genuine reason threat actors use PowerShell, so it is not\nthe correct choice. B. Executing commands in memory, which reduces the payload files written to disk, is a genuine\nreason, so it is not the correct choice. C. Correct \u2014 PowerShell cannot execute before an operating system\nenvironment has loaded; it requires a running Windows environment, so this is NOT a reason threat actors use it. D.\nBeing a legitimate administrative tool that security controls may trust or allow is a genuine reason, so it is not the\ncorrect choice.",
    "question": "Which of the following is NOT a reason that threat actors use PowerShell for attacks?",
    "options": [
      "It is installed by default on many Windows systems.",
      "It can execute commands in memory, reducing the need to write payload files to disk.",
      "It can execute before any operating system environment has loaded.",
      "It is a legitimate administrative tool that security controls may trust or allow."
    ],
    "correctOption": 2,
    "isMultiSelect": false,
    "domainId": 2,
    "domain": "Domain 2: Threats, Vulnerabilities & Mitigations",
    "objective": "2.1-2.4 Threats, Vulnerabilities, Attack Vectors & Mitigations"
  },
  {
    "id": "e4-q08",
    "examSet": "Practice Exam 4",
    "examNum": 4,
    "questionNumber": 8,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "C",
    "explanation": "Correct Answer: C\n\nC is correct (Loss of license): the regulator withdrew the bank's authorization to conduct business, which is the loss of\na license, the most severe regulatory consequence because it ends the organization's ability to operate legally in that\njurisdiction. D is incorrect (Fines) because fines are monetary penalties that punish non-compliance while allowing the\norganization to keep operating. A is incorrect (Sanctions) because sanctions are restrictions or penalties imposed on\nan organization, such as limits on activities or increased oversight, that fall short of revoking its right to operate. B is\nincorrect (Contractual impacts) because contractual impacts arise from private agreements with customers or\npartners, such as penalties, termination clauses, or lost deals, not from a regulator's action.",
    "question": "A regional bank repeatedly failed to meet the data protection requirements set by its financial regulator.\nAfter a formal examination, the regulator revoked the bank's authorization to operate in the jurisdiction.\nWhich consequence of non-compliance has the bank experienced?",
    "options": [
      "Sanctions",
      "Contractual impacts",
      "Loss of license",
      "Fines"
    ],
    "correctOption": 2,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e4-q09",
    "examSet": "Practice Exam 4",
    "examNum": 4,
    "questionNumber": 9,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "B",
    "explanation": "Correct Answer: B\n\nD. RPO (Recovery Point Objective) is incorrect. RPO defines the maximum acceptable amount of data loss,\nexpressed as the point in time back to which data must be recoverable; it addresses data loss, not outage duration. B.\nRTO (Recovery Time Objective) is correct. RTO defines the maximum tolerable length of time a system can be down\nbefore it must be restored, so it directly expresses how long an organization can tolerate an outage. C. MTBF (Mean\nTime Between Failures) is incorrect. MTBF is a reliability metric describing the average operating time between\nfailures of a component; it does not set a tolerance for outage length. A. MTTR (Mean Time To Repair) is incorrect.\nMTTR is the average time actually taken to repair a failed component, a measured average rather than the outage\ntolerance the organization sets in advance.",
    "question": "Fill in the blank: The __________ determines how long an organization can tolerate a system outage.",
    "options": [
      "MTTR (Mean Time To Repair)",
      "RTO (Recovery Time Objective)",
      "MTBF (Mean Time Between Failures)",
      "RPO (Recovery Point Objective)"
    ],
    "correctOption": 1,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e4-q10",
    "examSet": "Practice Exam 4",
    "examNum": 4,
    "questionNumber": 10,
    "questionType": "Ordering",
    "correctAnswerRaw": "B > A > C > F > D > E",
    "explanation": "Correct Answer: B > A > C > F > D > E\n\nCorrect order: 1. Isolate the infected laptop from the network \u2014 the compromise is already confirmed, so containment\ncomes first and stops the beaconing. 2. Capture a memory image and preserve logs before cleaning \u2014 volatile\nevidence must be collected while it still exists, because eradication destroys it. 3. Eradicate the malware and remove\nits persistence mechanisms \u2014 remove the keylogger and any footholds it created. 4. Patch the exploited weakness\nand harden the configuration \u2014 close the hole so the same attack cannot recur. 5. Restore the system from a\nknown-good backup \u2014 return clean data and services to the user. 6. Monitor the device to confirm the threat does not\nreturn \u2014 watch for renewed beaconing before closing the case.",
    "question": "A contractor's laptop is confirmed to be running a keylogger that is beaconing to an external host. The team must contain the compromise, clean the device, and return it to service. Arrange the actions in the order the team should take them. Place the following in the correct order:",
    "orderingItems": [
      {
        "letter": "A",
        "text": "Capture a memory image and preserve logs before cleaning"
      },
      {
        "letter": "B",
        "text": "Isolate the infected laptop from the network"
      },
      {
        "letter": "C",
        "text": "Eradicate the malware and remove its persistence mechanisms"
      },
      {
        "letter": "D",
        "text": "Restore the system from a known-good backup"
      },
      {
        "letter": "E",
        "text": "Monitor the device to confirm the threat does not return"
      },
      {
        "letter": "F",
        "text": "Patch the exploited weakness and harden the configuration"
      }
    ],
    "correctOrder": [
      "B",
      "A",
      "C",
      "F",
      "D",
      "E"
    ],
    "options": [
      "A. Capture a memory image and preserve logs before cleaning",
      "B. Isolate the infected laptop from the network",
      "C. Eradicate the malware and remove its persistence mechanisms",
      "D. Restore the system from a known-good backup",
      "E. Monitor the device to confirm the threat does not return",
      "F. Patch the exploited weakness and harden the configuration"
    ],
    "correctOption": 0,
    "domainId": 4,
    "domain": "Domain 4: Security Operations",
    "objective": "4.1-4.4 Security Operations, Monitoring, Incident Response & Forensics"
  },
  {
    "id": "e4-q11",
    "examSet": "Practice Exam 4",
    "examNum": 4,
    "questionNumber": 11,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "A",
    "explanation": "Correct Answer: A\n\nD. IoT devices may react differently to test traffic is incorrect \u2014 this is a genuine disadvantage; IoT devices often run\nminimal or proprietary firmware that can crash or behave unpredictably when probed. C. Sending test traffic increases\nthe risk of the endpoints malfunctioning is incorrect \u2014 this is a valid disadvantage; incompatible queries can trigger\nbuffer overflows or denial-of-service conditions on sensitive devices. B. Smaller networks can become overloaded with\nhigh volumes of test traffic is incorrect \u2014 this is a real drawback; aggressive scanning saturates low-bandwidth links\nand disrupts normal operations. A. Active scanning can accelerate the collection of data is correct. Faster data\ncollection is actually an advantage of active scanning, not a disadvantage \u2014 Bohdan would cite it as a benefit, not a\nreason to avoid active scans.",
    "question": "Bohdan is explaining to an intern some of the disadvantages to active scanning. Which of the following\nwould Bohdan NOT give as a disadvantage?",
    "options": [
      "Active scanning can accelerate the collection of data",
      "Smaller networks can become overloaded with high volumes of test traffic",
      "Sending test traffic increases the risk of the endpoints malfunctioning if incompatible queries are sent",
      "IoT devices may react differently to test traffic"
    ],
    "correctOption": 0,
    "isMultiSelect": false,
    "domainId": 2,
    "domain": "Domain 2: Threats, Vulnerabilities & Mitigations",
    "objective": "2.1-2.4 Threats, Vulnerabilities, Attack Vectors & Mitigations"
  },
  {
    "id": "e4-q12",
    "examSet": "Practice Exam 4",
    "examNum": 4,
    "questionNumber": 12,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "A",
    "explanation": "Correct Answer: A\n\nA is correct (The right to be forgotten): under regulations such as the GDPR, a data subject may request erasure of\npersonal data, and the controller must delete it unless a legal basis for retention exists. The retailer checked for\nretention obligations and then scheduled deletion, which is exactly the right-to-erasure workflow. B is incorrect (data\nportability) because portability entitles the subject to receive their data in a machine-readable format or move it to\nanother provider, not to have it erased. D is incorrect (ownership) because ownership defines which party is\naccountable for a data set; it is an organizational role, not a right a customer exercises. C is incorrect (data inventory)\nbecause a data inventory is an internal record of what data the organization holds and where; it is a compliance\nobligation, not a right granted to individuals.",
    "question": "An online retailer that serves customers in the European Union receives a request from a former customer\nto erase every record of personal data the company holds about them. The privacy team confirms that no\nlegal retention obligation applies and schedules the deletion. Which privacy right is the retailer honoring?",
    "options": [
      "The right to be forgotten",
      "The right to data portability",
      "The right to a data inventory",
      "The right of ownership"
    ],
    "correctOption": 0,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e4-q13",
    "examSet": "Practice Exam 4",
    "examNum": 4,
    "questionNumber": 13,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "D",
    "explanation": "Correct Answer: D\n\nC. Vishing is incorrect because it is conducted through voice calls, not email. D. Phishing is correct: a fraudulent email\nthat impersonates a legitimate organization and directs the recipient to a fake login page is a classic phishing attack. B.\nSmishing is incorrect because its delivery vector is SMS text messaging; here the message arrived by email. A.\nWhaling is incorrect because it targets high-profile executives specifically, and nothing indicates the recipient holds\nsuch a role.",
    "question": "Fill in the blank: A user receives a fraudulent email that impersonates a legitimate organization and directs\nthe user to a fake login page. This is a __________ attack.",
    "options": [
      "Whaling",
      "Smishing",
      "Vishing",
      "Phishing"
    ],
    "correctOption": 3,
    "isMultiSelect": false,
    "domainId": 2,
    "domain": "Domain 2: Threats, Vulnerabilities & Mitigations",
    "objective": "2.1-2.4 Threats, Vulnerabilities, Attack Vectors & Mitigations"
  },
  {
    "id": "e4-q14",
    "examSet": "Practice Exam 4",
    "examNum": 4,
    "questionNumber": 14,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "C",
    "explanation": "Correct Answer: C\n\nB. SIEM automates response actions; SOAR only collects logs is incorrect. This reverses the actual functions of both\nplatforms. A. SOAR collects logs; SIEM performs orchestration is incorrect. Again, both roles are swapped from their\nactual definitions. C. SIEM aggregates and correlates logs; SOAR automates workflows is correct. SIEM (Security\nInformation and Event Management) ingests and correlates logs from across the environment to detect threats. SOAR\n(Security Orchestration, Automation, and Response) then automates the playbook-driven response to those\ndetections, reducing manual analyst workload. D. Both perform the same function is incorrect. While they are often\ndeployed together, they serve distinct and complementary purposes.",
    "question": "What is a key difference between SIEM and SOAR platforms?",
    "options": [
      "SOAR collects logs; SIEM performs orchestration",
      "SIEM automates response actions; SOAR only collects logs",
      "SIEM aggregates and correlates logs; SOAR automates workflows",
      "Both perform the same function"
    ],
    "correctOption": 2,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e4-q15",
    "examSet": "Practice Exam 4",
    "examNum": 4,
    "questionNumber": 15,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "A",
    "explanation": "Correct Answer: A\n\nD. 'Zero trust assumes that networks have already been infiltrated by threat actors' is a true statement about zero trust,\nso it is not the answer. A. 'Zero trust is designed to make a system trusted' is correct as the NOT-true statement. Zero\ntrust does the opposite: it grants no automatic trust and continuously verifies every entity, whether inside or outside the\nnetwork. C. 'The motto of zero trust is Never trust, always verify' is a true statement, so it is not the answer. B. 'Zero\ntrust acknowledges that implicit trust is a vulnerability' is a true statement, since removing implicit trust is central to the\nmodel, so it is not the answer.",
    "question": "Which of the following is NOT true about zero trust?",
    "options": [
      "Zero trust is designed to make a system trusted.",
      "Zero trust acknowledges that implicit trust is a vulnerability.",
      "The motto of zero trust is \"Never trust, always verify.\"",
      "Zero trust assumes that networks have already been infiltrated by threat actors."
    ],
    "correctOption": 0,
    "isMultiSelect": false,
    "domainId": 3,
    "domain": "Domain 3: Security Architecture",
    "objective": "3.1-3.4 Security Architecture, Cloud, Infrastructure & Resilience"
  },
  {
    "id": "e4-q16",
    "examSet": "Practice Exam 4",
    "examNum": 4,
    "questionNumber": 16,
    "questionType": "Matching",
    "correctAnswerRaw": "1 = A; 2 = B; 3 = D; 4 = C",
    "explanation": "Correct Answer: 1 = A; 2 = B; 3 = D; 4 = C\n\nThe correct mapping is: Acceptable Use Policy (AUP) outlines responsible use of IT resources \u2014 defining what\nemployees are and are not permitted to do with organizational technology. BYOD Policy limits and governs personal\ndevice usage \u2014 setting security requirements (e.g., MDM enrollment, screen lock) for employee-owned devices\naccessing company data. Clean Desk Policy ensures sensitive information is not left visible or accessible when\nworkstations are unattended, reducing physical exposure of confidential data. Data Retention Policy defines how long\ndata is kept before it must be archived or destroyed, balancing legal compliance with storage efficiency.",
    "question": "Match each type of policy with its description.",
    "matchingItems": [
      {
        "num": 1,
        "text": "Acceptable Use Policy (AUP)",
        "correctLetter": "A"
      },
      {
        "num": 2,
        "text": "BYOD Policy",
        "correctLetter": "B"
      },
      {
        "num": 3,
        "text": "Clean Desk Policy",
        "correctLetter": "D"
      },
      {
        "num": 4,
        "text": "Data Retention Policy",
        "correctLetter": "C"
      }
    ],
    "matchingDescriptions": [
      {
        "letter": "A",
        "text": "Outlines responsible use of IT resources"
      },
      {
        "letter": "B",
        "text": "Limits personal device usage"
      },
      {
        "letter": "C",
        "text": "Defines how long data is kept"
      },
      {
        "letter": "D",
        "text": "Ensures sensitive information is not left out"
      }
    ],
    "correctMapping": {
      "1": "A",
      "2": "B",
      "3": "D",
      "4": "C"
    },
    "options": [
      "A. Outlines responsible use of IT resources",
      "B. Limits personal device usage",
      "C. Defines how long data is kept",
      "D. Ensures sensitive information is not left out"
    ],
    "correctOption": 0,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e4-q17",
    "examSet": "Practice Exam 4",
    "examNum": 4,
    "questionNumber": 17,
    "questionType": "Ordering",
    "correctAnswerRaw": "D > C > E > B > A",
    "explanation": "Correct Answer: D > C > E > B > A\n\nCorrect order: 1. Identify the audience groups and the threats the program must address \u2014 development begins with\nunderstanding who needs training and which risks, such as invoice fraud for finance or whaling for executives, matter\nmost. 2. Develop role-based training content and phishing simulation templates \u2014 with the needs defined, the material\nand simulations are built to match each audience. 3. Deliver the training modules and launch the first phishing\nsimulation campaign \u2014 execution puts the program in front of employees and produces the first behavioral data. 4.\nCompile the initial report of phishing click rates and training completion percentages \u2014 initial reporting establishes the\nbaseline against which improvement will be measured and is shared with leadership. 5. Track recurring metrics each\nquarter and update the content as threats change \u2014 recurring reporting and monitoring turn a one-time campaign into\na program that adapts over time. Reporting before delivery would have no data to report, and building content before\nknowing the audience would produce generic training that misses the roles most at risk.",
    "question": "A newly hired security awareness manager is building the company's first awareness program. Arrange the program activities in the order they should be carried out. Place the following in the correct order:",
    "orderingItems": [
      {
        "letter": "A",
        "text": "Track recurring metrics each quarter and update the content as threats change"
      },
      {
        "letter": "B",
        "text": "Compile the initial report of phishing click rates and training completion percentages"
      },
      {
        "letter": "C",
        "text": "Develop role-based training content and phishing simulation templates"
      },
      {
        "letter": "D",
        "text": "Identify the audience groups and the threats the program must address"
      },
      {
        "letter": "E",
        "text": "Deliver the training modules and launch the first phishing simulation campaign"
      }
    ],
    "correctOrder": [
      "D",
      "C",
      "E",
      "B",
      "A"
    ],
    "options": [
      "A. Track recurring metrics each quarter and update the content as threats change",
      "B. Compile the initial report of phishing click rates and training completion percentages",
      "C. Develop role-based training content and phishing simulation templates",
      "D. Identify the audience groups and the threats the program must address",
      "E. Deliver the training modules and launch the first phishing simulation campaign"
    ],
    "correctOption": 0,
    "domainId": 2,
    "domain": "Domain 2: Threats, Vulnerabilities & Mitigations",
    "objective": "2.1-2.4 Threats, Vulnerabilities, Attack Vectors & Mitigations"
  },
  {
    "id": "e4-q18",
    "examSet": "Practice Exam 4",
    "examNum": 4,
    "questionNumber": 18,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "A",
    "explanation": "Correct Answer: A\n\nD. Encryption is incorrect because it protects data confidentiality and does not restrict an attacker's movement\nbetween network zones. A. Segmentation is correct: dividing the network into separately controlled zones restricts\nlateral movement, so compromising one system does not grant reach into other zones. B. Patching is incorrect\nbecause it remediates known software flaws; it does not contain movement between zones after a compromise. C.\nDecommissioning is incorrect because it securely removes systems from service and does not constrain an active\nattacker's movement across the network.",
    "question": "Which mitigation technique limits an attacker's ability to move between network zones after compromising\none system?",
    "options": [
      "Segmentation",
      "Patching",
      "Decommissioning",
      "Encryption"
    ],
    "correctOption": 0,
    "isMultiSelect": false,
    "domainId": 1,
    "domain": "Domain 1: General Security Concepts",
    "objective": "1.1-1.4 Security Controls, Cryptography, Identity & Access Management"
  },
  {
    "id": "e4-q19",
    "examSet": "Practice Exam 4",
    "examNum": 4,
    "questionNumber": 19,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "A",
    "explanation": "Correct Answer: A\n\nA is correct (Operational): operational controls are the day-to-day security tasks carried out by people, such as\nanalysts reviewing logs and manually executing an incident-response procedure. B is incorrect (Technical): technical\ncontrols are enforced by technology like firewalls, encryption, or an IDS, not by human-run routines. C is incorrect\n(Physical): physical controls protect the tangible environment with fences, locks, or cameras. D is incorrect\n(Managerial): managerial controls are the policies, risk assessments, and oversight that direct the program rather than\nthe hands-on execution of it.",
    "question": "Analysts on the security team perform daily log reviews and run the incident-response procedure by hand\nwhenever an alert fires. These are day-to-day activities carried out by people rather than by automated\nsystems. Which control category do they best represent?",
    "options": [
      "Operational",
      "Technical",
      "Physical",
      "Managerial"
    ],
    "correctOption": 0,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e4-q20",
    "examSet": "Practice Exam 4",
    "examNum": 4,
    "questionNumber": 20,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "A",
    "explanation": "Correct Answer: A\n\nC. Antivirus signature is incorrect. Signature-based AV is a preventive/detective technical control; it stops malware but\ndoes not visibly dissuade attackers. A. Access badge with security camera is correct. Visible cameras and badge\nreaders are classic deterrent controls because their mere presence discourages would-be intruders from attempting\nunauthorized entry, even before any detection or prevention occurs. B. Data classification policy is incorrect.\nClassification policies are administrative/directive controls that guide how data is labeled and handled; they do not\ndeter attackers in a visible way. D. Disk encryption is incorrect. Disk encryption is a preventive technical control\nprotecting data confidentiality; it is invisible to an attacker and therefore does not deter.",
    "question": "Which of the following is an example of a deterrent control?",
    "options": [
      "Access badge with security camera",
      "Data classification policy",
      "Antivirus signature",
      "Disk encryption"
    ],
    "correctOption": 0,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e4-q21",
    "examSet": "Practice Exam 4",
    "examNum": 4,
    "questionNumber": 21,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "A",
    "explanation": "Correct Answer: A\n\nC. PCI DSS is incorrect. The Payment Card Industry Data Security Standard governs the protection of cardholder\ndata, not corporate financial reporting. D. HIPAA is incorrect. HIPAA protects the privacy and security of health\ninformation, not financial reporting. B. GDPR is incorrect. The General Data Protection Regulation governs personal\ndata of EU residents, not financial reporting integrity. A. SOX is correct. The Sarbanes-Oxley Act mandates controls\nand accountability over corporate financial reporting to ensure its accuracy and integrity for publicly traded companies.",
    "question": "Which regulation is primarily concerned with financial reporting integrity?",
    "options": [
      "SOX",
      "GDPR",
      "PCI DSS",
      "HIPAA"
    ],
    "correctOption": 0,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e4-q22",
    "examSet": "Practice Exam 4",
    "examNum": 4,
    "questionNumber": 22,
    "questionType": "Select Two",
    "correctAnswerRaw": "A, D",
    "explanation": "Correct Answer: A, D\n\nD and A are correct: when patching is impossible, vulnerability response falls back on segmentation and compensating\ncontrols. Isolating the server limits which systems can reach the vulnerable service, and an IPS signature that blocks\nthe exploit pattern reduces the likelihood of a successful attack until the patch arrives. B is incorrect (mark the finding\nas a false positive) because the finding is real; hiding it removes visibility without changing the exposure. C is incorrect\n(lower the CVSS environmental score) because environmental scores must reflect mitigations actually in place; editing\nthe number to escape a threshold is misrepresentation, not risk reduction. E is incorrect (rescan immediately to close\nthe ticket) because rescanning validates remediation already performed; nothing has changed, so it would confirm the\nflaw is still present.",
    "question": "A vulnerability scan reports a critical remote code execution flaw on a server that controls a factory line.\nThe vendor's patch will not be available for six months, and management has approved a documented\nexception. Which TWO actions will MOST reduce the risk while the exception remains open? (Select\nTWO.)",
    "options": [
      "Deploy an intrusion prevention signature that blocks the known exploit traffic as a compensating control",
      "Mark the finding as a false positive so that it no longer appears in scan reports",
      "Lower the CVSS environmental score in the scanner so that the finding falls below the remediation threshold",
      "Move the server into an isolated network segment with firewall rules that permit only the required hosts and ports",
      "Rescan the server immediately so that the ticket can be closed"
    ],
    "optionLetters": [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    "isMultiSelect": true,
    "requiredSelectCount": 2,
    "correctOptions": [
      0,
      3
    ],
    "correctLetters": [
      "A",
      "D"
    ],
    "correctOption": 0,
    "domainId": 4,
    "domain": "Domain 4: Security Operations",
    "objective": "4.1-4.4 Security Operations, Monitoring, Incident Response & Forensics"
  },
  {
    "id": "e4-q23",
    "examSet": "Practice Exam 4",
    "examNum": 4,
    "questionNumber": 23,
    "questionType": "Matching",
    "correctAnswerRaw": "1 = D; 2 = A; 3 = B; 4 = C",
    "explanation": "Correct Answer: 1 = D; 2 = A; 3 = B; 4 = C\n\nFull matches \"Saves all selected data every time\" because a full backup copies every in-scope file regardless of\nchange state, simplifying restore at the cost of storage. Differential matches \"Saves only changes since the last full\nbackup,\" growing each day until the next full and allowing restore with just the full plus the latest differential.\nIncremental matches \"Saves changes since the last backup of any type,\" producing the smallest daily backups but\nrequiring the full plus every incremental in order to restore. Snapshot matches \"Captures system state at a specific\npoint in time,\" typically using storage- or hypervisor-level metadata to enable near-instant rollback.",
    "question": "Match each backup type with its description.",
    "matchingItems": [
      {
        "num": 1,
        "text": "Full",
        "correctLetter": "D"
      },
      {
        "num": 2,
        "text": "Differential",
        "correctLetter": "A"
      },
      {
        "num": 3,
        "text": "Incremental",
        "correctLetter": "B"
      },
      {
        "num": 4,
        "text": "Snapshot",
        "correctLetter": "C"
      }
    ],
    "matchingDescriptions": [
      {
        "letter": "A",
        "text": "Saves only changes since the last full backup"
      },
      {
        "letter": "B",
        "text": "Saves changes since the last backup of any type"
      },
      {
        "letter": "C",
        "text": "Captures system state at a specific point in time"
      },
      {
        "letter": "D",
        "text": "Saves all selected data every time"
      }
    ],
    "correctMapping": {
      "1": "D",
      "2": "A",
      "3": "B",
      "4": "C"
    },
    "options": [
      "A. Saves only changes since the last full backup",
      "B. Saves changes since the last backup of any type",
      "C. Captures system state at a specific point in time",
      "D. Saves all selected data every time"
    ],
    "correctOption": 0,
    "domainId": 3,
    "domain": "Domain 3: Security Architecture",
    "objective": "3.1-3.4 Security Architecture, Cloud, Infrastructure & Resilience"
  },
  {
    "id": "e4-q24",
    "examSet": "Practice Exam 4",
    "examNum": 4,
    "questionNumber": 24,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "D",
    "explanation": "Correct Answer: D\n\nB. Warm is incorrect: a warm site has infrastructure and some systems in place but requires setup time and data\nrestoration before it can take over. A. Cold is incorrect: a cold site provides only basic space and utilities, requiring the\nlongest time to become operational. D. Hot is correct: in the hot/warm/cold classification, a hot site is fully operational\nwith systems and current data ready, so it can take over immediately \u2014 lowest RTO, highest cost. C. Mirror is\nincorrect: it is not one of the hot/warm/cold site classifications used to categorize disaster recovery sites.",
    "question": "Fill in the blank: In the hot/warm/cold classification of disaster recovery sites, a __________ site is fully\noperational and can take over immediately.",
    "options": [
      "Cold",
      "Warm",
      "Mirror",
      "Hot"
    ],
    "correctOption": 3,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e4-q25",
    "examSet": "Practice Exam 4",
    "examNum": 4,
    "questionNumber": 25,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "B",
    "explanation": "Correct Answer: B\n\nC. Restricted data is incorrect because 'restricted' is an access-based classification level an organization may assign;\nit does not describe the category defined by legal protection requirements. B. Regulated data is correct: patient health\ninformation under HIPAA is governed by specific legal requirements for its handling and storage, which is precisely\nwhat defines regulated data. A. Secure data is incorrect because 'secure' describes a protection state, not a\nrecognized data category. D. Private data is incorrect because, while patient information is private in the general\nsense, the category determined by legal handling requirements such as HIPAA is regulated data.",
    "question": "Based specifically on the legal requirements governing its handling and storage, how should patient health\ninformation covered by HIPAA be categorized?",
    "options": [
      "Secure data",
      "Regulated data",
      "Restricted data",
      "Private data"
    ],
    "correctOption": 1,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e4-q26",
    "examSet": "Practice Exam 4",
    "examNum": 4,
    "questionNumber": 26,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "D",
    "explanation": "Correct Answer: D\n\nC. Layer 4 firewall is incorrect. A Layer 4 firewall filters on transport-layer information such as IP addresses, ports, and\nprotocols, so it cannot inspect application content. B. Layer 5 firewall is incorrect. Filtering at the session layer still\ncannot examine application-layer payloads, so it does not offer the most advanced filtering. A. Layer 6 firewall is\nincorrect. Even at the presentation layer, a firewall does not perform full application-aware inspection of protocols and\ncontent. D. Layer 7 firewall is correct. A Layer 7 (application-layer) firewall inspects and filters traffic based on\napplication-specific protocols and content, providing the most advanced traffic filtering of the options.",
    "question": "Which firewall allows for the most advanced traffic filtering?",
    "options": [
      "Layer 6 firewall",
      "Layer 5 firewall",
      "Layer 4 firewall",
      "Layer 7 firewall"
    ],
    "correctOption": 3,
    "isMultiSelect": false,
    "domainId": 3,
    "domain": "Domain 3: Security Architecture",
    "objective": "3.1-3.4 Security Architecture, Cloud, Infrastructure & Resilience"
  },
  {
    "id": "e4-q27",
    "examSet": "Practice Exam 4",
    "examNum": 4,
    "questionNumber": 27,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "D",
    "explanation": "Correct Answer: D\n\nD. Web application firewall (WAF) is correct. A WAF inspects HTTP/HTTPS requests at the application layer and\nblocks web-specific attacks such as SQL injection and cross-site scripting before they reach the application. C. Unified\nthreat management (UTM) is incorrect. A UTM bundles several general-purpose security functions such as firewall,\nantivirus, and content filtering; it is not specialized in parsing HTTP requests to protect a specific web application. A.\nNext-generation firewall (NGFW) is incorrect. An NGFW adds application awareness and intrusion prevention to\nnetwork firewalling, but it is not purpose-built to inspect web requests for attacks like SQL injection the way a WAF is.\nB. Layer 4 firewall is incorrect. A Layer 4 firewall filters on transport-layer information such as IP addresses, ports, and\nprotocols, so it cannot examine the content of HTTP requests at all.",
    "question": "Maya must protect a public-facing web application from attacks such as SQL injection and cross-site\nscripting by inspecting incoming HTTP requests. Which firewall type should she deploy?",
    "options": [
      "Next-generation firewall (NGFW)",
      "Layer 4 firewall",
      "Unified threat management (UTM)",
      "Web application firewall (WAF)"
    ],
    "correctOption": 3,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e4-q28",
    "examSet": "Practice Exam 4",
    "examNum": 4,
    "questionNumber": 28,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "D",
    "explanation": "Correct Answer: D\n\nB. Define technical audit procedures is incorrect. Audit procedures are defined in audit or compliance standards, not in\nan AUP, which addresses user conduct. D. Outline appropriate use of organizational assets is correct. An Acceptable\nUse Policy defines what constitutes permitted and prohibited use of company systems, networks, and data by users,\nsetting expectations and the basis for enforcement. A. Enforce multifactor authentication is incorrect. MFA is a\ntechnical control implemented through configuration and standards; an AUP is a governance document, not an\nenforcement mechanism. C. Identify disaster recovery contacts is incorrect. DR contacts and roles belong in a disaster\nrecovery or business continuity plan, not in the AUP.",
    "question": "What is the role of an Acceptable Use Policy (AUP)?",
    "options": [
      "Enforce multifactor authentication",
      "Define technical audit procedures",
      "Identify disaster recovery contacts",
      "Outline appropriate use of organizational assets"
    ],
    "correctOption": 3,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e4-q29",
    "examSet": "Practice Exam 4",
    "examNum": 4,
    "questionNumber": 29,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "C",
    "explanation": "Correct Answer: C\n\nC (To define minimum configuration standards) is correct: a security baseline states the minimum settings every\nsystem of a given type must meet, covering patch level, disabled services, account policy and auditing, and gives the\nreference point against which configuration drift is measured. A (To block zero-day threats) is incorrect because no\nconfiguration standard stops an unknown exploit; that requires behavioural detection and layered defences. D (To\nprioritize patching) is incorrect because ranking patches by risk is vulnerability management, which uses the baseline\nas input rather than being its purpose. B (To enforce encryption for backups) is incorrect because that is one specific\ncontrol a baseline might contain, not what a baseline is.",
    "question": "What is the purpose of a security baseline in an organization?",
    "options": [
      "To block zero-day threats",
      "To enforce encryption for backups",
      "To define minimum configuration standards",
      "To prioritize patching"
    ],
    "correctOption": 2,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e4-q30",
    "examSet": "Practice Exam 4",
    "examNum": 4,
    "questionNumber": 30,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "B",
    "explanation": "Correct Answer: B\n\nA. Setting a precedent for policy violations is an HR and disciplinary concern, not the technical security threat that\nmakes this situation serious. B. Correct \u2014 the malware introduced from the USB drive can spread from the infected\ncomputer to network shares and other connected devices it can reach, encrypting their files and turning a single\ninfection into an organization-wide data-loss event. C. A fixed $500 ransom figure is arbitrary and understates the\nproblem; the seriousness comes from potential loss of data across the network, not the amount demanded. D. A\none-hour recovery delay trivializes the impact; the real danger is widespread, possibly unrecoverable, encryption of\norganizational data rather than a short wait.",
    "question": "Finn's team leader has just texted him that an employee, who violated company policy by bringing in a file\non a USB flash drive, has just reported that their computer is infected with locking ransomware. Why would\nFinn consider this a serious situation?",
    "options": [
      "It sets a precedent by encouraging other employees to violate company policy.",
      "It can encrypt all files on any network that is connected to the employee's computer.",
      "The organization may be forced to pay up to $500 for the ransom.",
      "The employee would have to wait at least an hour before their computer could be restored."
    ],
    "correctOption": 1,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e4-q31",
    "examSet": "Practice Exam 4",
    "examNum": 4,
    "questionNumber": 31,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "D",
    "explanation": "Correct Answer: D\n\nC. System log is incorrect. System logs capture operating system events like service starts, hardware messages, and\nkernel warnings, not specifically the security/audit trail. D. Audit log is correct. An audit log records security-relevant\nevents (logins, permission changes, file access) specifically for accountability, compliance review, and forensic\nanalysis. B. Error log is incorrect. Error logs capture faults and exceptions within applications or services; they focus\non troubleshooting rather than security accountability. A. Access list is incorrect. An access control list is a policy\nconstruct that defines who may access what; it is a configuration object, not a record of events.",
    "question": "Which type of log is specifically maintained as an accountability trail of security-relevant events, such as\nlogins, permission changes, and file access?",
    "options": [
      "Access list",
      "Error log",
      "System log",
      "Audit log"
    ],
    "correctOption": 3,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e4-q32",
    "examSet": "Practice Exam 4",
    "examNum": 4,
    "questionNumber": 32,
    "questionType": "Matching",
    "correctAnswerRaw": "1 = C; 2 = D; 3 = A; 4 = B",
    "explanation": "Correct Answer: 1 = C; 2 = D; 3 = A; 4 = B\n\nThe correct mapping is: Shoulder surfing involves physically watching a user enter credentials \u2014 the attacker is\nliterally looking over the target's shoulder. Vishing is voice-based phishing, where attackers call victims pretending to\nbe IT support or banks. Impersonation means pretending to be someone with authority (e.g., an executive or IT admin)\nto manipulate a target \u2014 broader than a phone call alone. Smishing uses SMS text messages containing malicious\nlinks or urgent requests. Each technique exploits different communication channels and psychological triggers rather\nthan technical vulnerabilities.",
    "question": "Match each social engineering technique to its description.",
    "matchingItems": [
      {
        "num": 1,
        "text": "Shoulder surfing",
        "correctLetter": "C"
      },
      {
        "num": 2,
        "text": "Vishing",
        "correctLetter": "D"
      },
      {
        "num": 3,
        "text": "Impersonation",
        "correctLetter": "A"
      },
      {
        "num": 4,
        "text": "Smishing",
        "correctLetter": "B"
      }
    ],
    "matchingDescriptions": [
      {
        "letter": "A",
        "text": "Pretending to be someone with authority"
      },
      {
        "letter": "B",
        "text": "Text message with malicious link"
      },
      {
        "letter": "C",
        "text": "Watching a user enter credentials"
      },
      {
        "letter": "D",
        "text": "Voice-based phishing"
      }
    ],
    "correctMapping": {
      "1": "C",
      "2": "D",
      "3": "A",
      "4": "B"
    },
    "options": [
      "A. Pretending to be someone with authority",
      "B. Text message with malicious link",
      "C. Watching a user enter credentials",
      "D. Voice-based phishing"
    ],
    "correctOption": 0,
    "domainId": 2,
    "domain": "Domain 2: Threats, Vulnerabilities & Mitigations",
    "objective": "2.1-2.4 Threats, Vulnerabilities, Attack Vectors & Mitigations"
  },
  {
    "id": "e4-q33",
    "examSet": "Practice Exam 4",
    "examNum": 4,
    "questionNumber": 33,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "D",
    "explanation": "Correct Answer: D\n\nB. Need-to-know is incorrect because it governs access to specific information based on necessity, whereas this\nscenario concerns the level of system permissions granted to users. D. Least privilege is correct because it grants\nusers only the minimum permissions required to perform their assigned duties, reducing the attack surface and limiting\nthe damage a compromised account can cause. C. Defense in depth is incorrect because it describes layering multiple\noverlapping security controls, not sizing user permissions. A. Role rotation is incorrect because rotating job\nresponsibilities helps detect fraud and reduce dependency on a single person; it does not define how permissions are\ngranted.",
    "question": "Which principle is followed when users are granted only the minimum system permissions required to\nperform their assigned job duties?",
    "options": [
      "Role rotation",
      "Need-to-know",
      "Defense in depth",
      "Least privilege"
    ],
    "correctOption": 3,
    "isMultiSelect": false,
    "domainId": 1,
    "domain": "Domain 1: General Security Concepts",
    "objective": "1.1-1.4 Security Controls, Cryptography, Identity & Access Management"
  },
  {
    "id": "e4-q34",
    "examSet": "Practice Exam 4",
    "examNum": 4,
    "questionNumber": 34,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "B",
    "explanation": "Correct Answer: B\n\nA. Blueswiping is incorrect. This is not a recognized Bluetooth attack term. D. Bluehiking is incorrect. This is also not a\nrecognized Bluetooth attack technique. C. Bluejacking is incorrect. Bluejacking involves sending unsolicited messages\n(such as contact cards) to nearby Bluetooth devices \u2014 it is an annoyance but does not steal data. B. Bluesnarfing is\ncorrect. Bluesnarfing is the unauthorized access to data stored on a Bluetooth-enabled device, such as contacts,\nemails, calendar entries, and files. Unlike bluejacking, bluesnarfing actively steals information, making it the attack\ndescribed in the scenario where the CEO's confidential data was exfiltrated.",
    "question": "Muchaneta is investigating a security incident in which the smartphone of the CEO was compromised and\nconfidential data was stolen. She suspects that it was an attack that used Bluetooth. Which attack would\nthis be?",
    "options": [
      "Blueswiping",
      "Bluesnarfing",
      "Bluejacking",
      "Bluehiking"
    ],
    "correctOption": 1,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e4-q35",
    "examSet": "Practice Exam 4",
    "examNum": 4,
    "questionNumber": 35,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "A",
    "explanation": "Correct Answer: A\n\nB. Administrative is incorrect. Administrative controls are policies and procedures; a policy alone does not physically\nstop unauthorized people from entering the datacenter. A. Physical is correct. Restricting who can physically enter the\ndatacenter is achieved with physical controls: locked doors, badge readers, access control vestibules, and guards that\nprotect the tangible facility. D. Technical is incorrect. Technical controls secure systems and data through technology\n(encryption, ACLs, authentication software); they do not govern bodily entry to a room. C. Corrective is incorrect.\nCorrective controls act after an incident to restore normal operations; controlling entry is preventive, not corrective.",
    "question": "A systems administrator needs to ensure that only authorized personnel can access the datacenter. Which\ncontrol type should be implemented?",
    "options": [
      "Physical",
      "Administrative",
      "Corrective",
      "Technical"
    ],
    "correctOption": 0,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e4-q36",
    "examSet": "Practice Exam 4",
    "examNum": 4,
    "questionNumber": 36,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "D",
    "explanation": "Correct Answer: D\n\nA. MAC spoofing attack is incorrect because spoofing forges a device's MAC address to impersonate another host; it\ndoes not fill the switch's MAC address table. B. MAC cloning attack is incorrect because cloning copies a legitimate\ndevice's MAC address, typically to bypass MAC filtering; it also does not overflow the table. D. MAC flooding attack is\ncorrect because sending frames with many bogus source MAC addresses exhausts the switch's MAC address table;\nthe switch then fails open and broadcasts traffic out all ports like a hub, which matches the behavior Yua observed. C.\nARP poisoning attack is incorrect because it corrupts hosts' ARP caches to redirect traffic between endpoints; it does\nnot cause a switch to broadcast all packets.",
    "question": "Yua has discovered that the network switch is broadcasting all packets to all devices. She suspects it is\nthe result of an attack that has overflowed the switch MAC address table. Which type of attack would she\nreport?",
    "options": [
      "MAC spoofing attack",
      "MAC cloning attack",
      "ARP poisoning attack",
      "MAC flooding attack"
    ],
    "correctOption": 3,
    "isMultiSelect": false,
    "domainId": 1,
    "domain": "Domain 1: General Security Concepts",
    "objective": "1.1-1.4 Security Controls, Cryptography, Identity & Access Management"
  },
  {
    "id": "e4-q37",
    "examSet": "Practice Exam 4",
    "examNum": 4,
    "questionNumber": 37,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "A",
    "explanation": "Correct Answer: A\n\nA (A scan is passive; a test actively exploits vulnerabilities) is correct: a vulnerability scan uses automated tools to\nenumerate known weaknesses such as missing patches, weak ciphers and misconfigurations without exploiting them,\nwhile a penetration test actively exploits and chains them to prove real impact. D (A scan remediates the issues it\nfinds; a test only identifies them) is incorrect because it reverses both roles: a scan only reports its findings, and\nremediation is a separate activity carried out by system owners. B (A scan needs credentials, while a test is run\nwithout them) is incorrect because credentialed scanning is an option rather than a requirement, and penetration\ntesters frequently work with supplied credentials in assumed-breach or grey-box engagements. C (A test completes\nfaster than an automated scan) is incorrect because a pentest is manual, scoped work spanning days or weeks, far\nslower than an automated scan.",
    "question": "What is the difference between a vulnerability scan and a penetration test?",
    "options": [
      "A scan is passive; a test actively exploits vulnerabilities",
      "A scan needs credentials, while a test is run without them",
      "A test completes faster than an automated scan",
      "A scan remediates the issues it finds; a test only identifies them"
    ],
    "correctOption": 0,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e4-q38",
    "examSet": "Practice Exam 4",
    "examNum": 4,
    "questionNumber": 38,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "C",
    "explanation": "Correct Answer: C\n\nD. \"Microservice architecture addresses drawbacks of monolithic design by dividing an application into smaller,\nindependently deployable services\" is a true statement, so it is not the answer: decomposing a monolith into\nindependently deployable services is the defining purpose of microservices. A. \"Microservices are commonly used in\ncloud-native application architectures\" is a true statement, so it is not the answer: cloud-native applications are\ntypically composed of microservices, even though the two terms are not synonyms. C. \"Microservices are used only\nwhen an application is developed locally and then imported into the cloud\" is the correct answer (the NOT-true\nstatement): microservices are an architectural approach that applies regardless of where the application is developed\nor deployed; they are not tied to a local-then-cloud workflow. B. \"Microservice boundaries are typically aligned with\nbusiness capabilities rather than technical layers\" is a true statement, so it is not the answer: services are usually\norganized around business capabilities instead of technical tiers.",
    "question": "Which of the following is NOT true about microservices?",
    "options": [
      "Microservices are commonly used in cloud-native application architectures",
      "Microservice boundaries are typically aligned with business capabilities rather than technical layers",
      "Microservices are used only when an application is developed locally and then imported into the cloud",
      "Microservice architecture addresses drawbacks of monolithic design by dividing an application into smaller, independently deployable services"
    ],
    "correctOption": 2,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e4-q39",
    "examSet": "Practice Exam 4",
    "examNum": 4,
    "questionNumber": 39,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "D",
    "explanation": "Correct Answer: D\n\nD. Group Policy is correct: in an Active Directory domain it pushes and enforces security configuration such as\npassword rules, software restrictions, and audit settings across all domain-joined users and computers. B. SELinux is\nincorrect because it provides mandatory access control on Linux systems, not Windows workstations. A. NetFlow is\nincorrect because it exports network flow telemetry for traffic monitoring and configures nothing on endpoints. C.\nRADIUS is incorrect because it centralizes authentication, authorization, and accounting for network access rather\nthan enforcing workstation settings.",
    "question": "Which Windows capability can centrally enforce security settings on domain-joined workstations?",
    "options": [
      "NetFlow",
      "SELinux",
      "RADIUS",
      "Group Policy"
    ],
    "correctOption": 3,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e4-q40",
    "examSet": "Practice Exam 4",
    "examNum": 4,
    "questionNumber": 40,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "D",
    "explanation": "Correct Answer: D\n\nA. Business impact analysis planning is incorrect: a BIA identifies critical functions and quantifies the impact of\ndisruptions (for example RTO and RPO); it does not define restoration procedures. C. IT contingency planning is\nincorrect: it is a broad umbrella term, and the scenario specifically describes restoring IT systems and operations after\na disaster, which the exam objectives call disaster recovery. D. Disaster recovery planning is correct: disaster recovery\nplans define the procedures for restoring IT systems and operations after a disaster causes a major outage. B. Risk IT\nplanning is incorrect: it is not a recognized planning discipline in the SY0-701 objectives.",
    "question": "Mary Alice is developing procedures for restoring IT systems and operations after a disaster causes a\nmajor outage. What type of planning is this?",
    "options": [
      "Business impact analysis planning",
      "Risk IT planning",
      "IT contingency planning",
      "Disaster recovery planning"
    ],
    "correctOption": 3,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e4-q41",
    "examSet": "Practice Exam 4",
    "examNum": 4,
    "questionNumber": 41,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "B",
    "explanation": "Correct Answer: B\n\nC. Daily password rotation is incorrect because forcing frequent changes encourages predictable password patterns\nand adds no independent check on who is logging in. D. Security awareness training is incorrect because it is an\nadministrative measure that does not directly restrict access to the legacy application. A. Strong password complexity\nis incorrect because it is already enforced; an existing control cannot compensate for the missing one. B. Geolocation\nrestrictions is correct because limiting logins to approved locations adds an independent condition on authentication,\nreducing the risk that stolen credentials alone grant access \u2014 a compensating control for the absent MFA.",
    "question": "An organization enforces strong password complexity but cannot implement MFA for a legacy application.\nWhich of the following would BEST compensate for the missing MFA?",
    "options": [
      "Strong password complexity",
      "Geolocation restrictions",
      "Daily password rotation",
      "Security awareness training"
    ],
    "correctOption": 1,
    "isMultiSelect": false,
    "domainId": 1,
    "domain": "Domain 1: General Security Concepts",
    "objective": "1.1-1.4 Security Controls, Cryptography, Identity & Access Management"
  },
  {
    "id": "e4-q42",
    "examSet": "Practice Exam 4",
    "examNum": 4,
    "questionNumber": 42,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "C",
    "explanation": "Correct Answer: C\n\nB. DHCP is incorrect. The Dynamic Host Configuration Protocol assigns IP addresses and network configuration to\nhosts joining a network; it does not resolve names. C. DNS is correct. The Domain Name System translates\nhuman-readable domain names, such as example.com, into the IP addresses that computers use to route traffic, using\na hierarchy of resolvers and authoritative servers. A. ARP is incorrect. The Address Resolution Protocol maps an IP\naddress to a MAC address on the local network segment; it performs a different kind of resolution than name-to-IP. D.\nNAT is incorrect. Network Address Translation rewrites private IP addresses to public ones (and back) at a network\nboundary; it does not translate domain names.",
    "question": "Which system is responsible for translating domain names into IP addresses?",
    "options": [
      "ARP",
      "DHCP",
      "DNS",
      "NAT"
    ],
    "correctOption": 2,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e4-q43",
    "examSet": "Practice Exam 4",
    "examNum": 4,
    "questionNumber": 43,
    "questionType": "Matching",
    "correctAnswerRaw": "1 = D; 2 = B; 3 = C; 4 = A",
    "explanation": "Correct Answer: 1 = D; 2 = B; 3 = C; 4 = A\n\nThe correct mapping is: WPA2 uses AES encryption with a pre-shared key (PSK), providing strong security and is still\nwidely deployed in enterprise and home environments. WEP uses RC4-based encryption and is cryptographically\nbroken \u2014 it can be cracked in minutes using freely available tools and should never be used. WPA3 is the strongest\ncurrent standard, introducing SAE authentication and perfect forward secrecy \u2014 compromising one session's key\ndoes not expose past or future sessions. Open networks have no encryption or authentication, transmitting all traffic in\nplaintext and offering no protection against passive eavesdropping.",
    "question": "Match each wireless protocol to its description.",
    "matchingItems": [
      {
        "num": 1,
        "text": "WPA2",
        "correctLetter": "D"
      },
      {
        "num": 2,
        "text": "WEP",
        "correctLetter": "B"
      },
      {
        "num": 3,
        "text": "WPA3",
        "correctLetter": "C"
      },
      {
        "num": 4,
        "text": "Open",
        "correctLetter": "A"
      }
    ],
    "matchingDescriptions": [
      {
        "letter": "A",
        "text": "Unsecured, no authentication"
      },
      {
        "letter": "B",
        "text": "Outdated and vulnerable encryption"
      },
      {
        "letter": "C",
        "text": "Strongest current standard with forward secrecy"
      },
      {
        "letter": "D",
        "text": "Uses AES with PSK"
      }
    ],
    "correctMapping": {
      "1": "D",
      "2": "B",
      "3": "C",
      "4": "A"
    },
    "options": [
      "A. Unsecured, no authentication",
      "B. Outdated and vulnerable encryption",
      "C. Strongest current standard with forward secrecy",
      "D. Uses AES with PSK"
    ],
    "correctOption": 0,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e4-q44",
    "examSet": "Practice Exam 4",
    "examNum": 4,
    "questionNumber": 44,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "B",
    "explanation": "Correct Answer: B\n\nB is correct (Impossible travel): logins from two distant locations within a window too short to physically travel indicate\na stolen credential being used concurrently. A is incorrect (Resource consumption): resource consumption refers to\nunusual spikes in CPU, memory, or bandwidth, not geographically impossible logins. D is incorrect (Blocked content):\nblocked content shows that a control stopped access to a resource, which is unrelated to login geography. C is\nincorrect (Missing logs): missing logs suggest an attacker deleted evidence, which is not what this timeline shows.",
    "question": "A SIEM shows a user's account authenticating from New York and, four minutes later, from Singapore,\nwith active sessions in both places and no VPN in use. Which indicator of malicious activity does this\npattern represent?",
    "options": [
      "Resource consumption",
      "Impossible travel",
      "Missing logs",
      "Blocked content"
    ],
    "correctOption": 1,
    "isMultiSelect": false,
    "domainId": 4,
    "domain": "Domain 4: Security Operations",
    "objective": "4.1-4.4 Security Operations, Monitoring, Incident Response & Forensics"
  },
  {
    "id": "e4-q45",
    "examSet": "Practice Exam 4",
    "examNum": 4,
    "questionNumber": 45,
    "questionType": "Ordering",
    "correctAnswerRaw": "C > D > F > E > B > A",
    "explanation": "Correct Answer: C > D > F > E > B > A\n\nCorrect order: 1. Contents of the CPU cache and registers \u2014 these are overwritten in fractions of a second by ordinary\nprocessing, so anything not captured immediately is gone. 2. Data held in RAM, including the malware process\nrunning in memory \u2014 memory holds injected code, plaintext credentials, and open sockets, and it disappears the\nmoment the system loses power. 3. The ARP cache and the list of active network connections \u2014 connection state and\ncache entries age out within minutes even while the host stays up. 4. Temporary files in the system's spool and cache\ndirectories \u2014 these survive longer than memory but are routinely purged by the operating system or by cleanup jobs.\n5. Files stored on the server's hard drive \u2014 disk data persists across a reboot, so it can be imaged after the live\nevidence has been secured. 6. Archived backup tapes held in an offsite vault \u2014 backups are the least volatile source\nof all and remain available long after the investigation begins. Collecting in this sequence maximizes evidentiary value\nand limits contamination of the more fragile sources.",
    "question": "A compromised database server is still powered on when the forensic analyst arrives. Several sources of evidence must be collected before the machine is shut down and its disk is imaged. Arrange the evidence sources in the sequence the order of volatility requires. Place the following in the correct order:",
    "orderingItems": [
      {
        "letter": "A",
        "text": "Archived backup tapes held in an offsite vault"
      },
      {
        "letter": "B",
        "text": "Files stored on the server's hard drive"
      },
      {
        "letter": "C",
        "text": "Contents of the CPU cache and registers"
      },
      {
        "letter": "D",
        "text": "Data held in RAM, including the malware process running in memory"
      },
      {
        "letter": "E",
        "text": "Temporary files in the system's spool and cache directories"
      },
      {
        "letter": "F",
        "text": "The ARP cache and the list of active network connections"
      }
    ],
    "correctOrder": [
      "C",
      "D",
      "F",
      "E",
      "B",
      "A"
    ],
    "options": [
      "A. Archived backup tapes held in an offsite vault",
      "B. Files stored on the server's hard drive",
      "C. Contents of the CPU cache and registers",
      "D. Data held in RAM, including the malware process running in memory",
      "E. Temporary files in the system's spool and cache directories",
      "F. The ARP cache and the list of active network connections"
    ],
    "correctOption": 0,
    "domainId": 4,
    "domain": "Domain 4: Security Operations",
    "objective": "4.1-4.4 Security Operations, Monitoring, Incident Response & Forensics"
  },
  {
    "id": "e4-q46",
    "examSet": "Practice Exam 4",
    "examNum": 4,
    "questionNumber": 46,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "C",
    "explanation": "Correct Answer: C\n\nD. Detect insider threats through behavior analytics is incorrect. Detecting malicious insiders relies on user-behavior\nanalytics and monitoring, not on location-based access rules. C. Block logins from unapproved geographic areas is\ncorrect. Geofencing defines a virtual geographic boundary and enforces policy based on a device or user's location, so\naccess attempts originating outside approved regions can be denied. A. Speed up DNS resolution for remote users is\nincorrect. DNS performance depends on resolvers and caching; geofencing does not affect name-resolution speed. B.\nReduce malware downloads from risky external sites is incorrect. Blocking malicious downloads is the job of web\nfiltering and endpoint protection, not of location-based access control.",
    "question": "What is the goal of using geofencing in security policy enforcement?",
    "options": [
      "Speed up DNS resolution for remote users",
      "Reduce malware downloads from risky external sites",
      "Block logins from unapproved geographic areas",
      "Detect insider threats through behavior analytics"
    ],
    "correctOption": 2,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e4-q47",
    "examSet": "Practice Exam 4",
    "examNum": 4,
    "questionNumber": 47,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "D",
    "explanation": "Correct Answer: D\n\nA. Data loss prevention is incorrect. DLP monitors and blocks unauthorized transmission of sensitive data on an\nongoing basis \u2014 it is a continuous security control, not a legal preservation directive triggered by a court order. D.\nLitigation hold is correct. A litigation hold (legal hold) is a formal directive issued when an organization anticipates or is\ninvolved in legal proceedings. It requires preservation of all potentially relevant electronically stored information (ESI)\n\u2014 emails, documents, chat logs \u2014 and overrides normal deletion or data retention schedules until the legal matter is\nresolved. C. Chain of custody is incorrect. Chain of custody documents who handled evidence and how \u2014 it is part of\nevidence management that follows after preservation, not the preservation directive itself. B. File hashing is incorrect.\nFile hashing verifies data integrity by generating a cryptographic fingerprint \u2014 it confirms evidence has not been\naltered, but it does not initiate the legal hold process.",
    "question": "Scenario: An organization receives a legal order to preserve all email records for a lawsuit. What process\ndoes this trigger?",
    "options": [
      "Data loss prevention",
      "File hashing",
      "Chain of custody",
      "Litigation hold"
    ],
    "correctOption": 3,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e4-q48",
    "examSet": "Practice Exam 4",
    "examNum": 4,
    "questionNumber": 48,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "A",
    "explanation": "Correct Answer: A\n\nC. Resource manipulation is incorrect because tampering with system resources suggests malicious activity on a host,\nnot a web filter applying policy. D. Out-of-cycle logging is incorrect because log entries appearing at unexpected times\nare an anomaly indicator unrelated to web filtering. B. Account lockout is incorrect because lockouts follow repeated\nfailed authentication attempts, not URL or content enforcement. A. Blocked content is correct: when a web filter\nmatches a request against a configured block rule, the direct observable outcome is that the requested content is\ndenied and the event is logged.",
    "question": "Which event most directly confirms that a web filter successfully enforced a configured block rule?",
    "options": [
      "Blocked content",
      "Account lockout",
      "Resource manipulation",
      "Out-of-cycle logging"
    ],
    "correctOption": 0,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e4-q49",
    "examSet": "Practice Exam 4",
    "examNum": 4,
    "questionNumber": 49,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "D",
    "explanation": "Correct Answer: D\n\nC. Encrypt the file for secure analysis is incorrect. Sandboxing does not encrypt the sample; encryption protects\nconfidentiality and is unrelated to safe execution. B. Obfuscate file metadata is incorrect. Obfuscating metadata hides\ninformation; it has nothing to do with the purpose of a sandbox. D. Execute code without impacting production is\ncorrect. A sandbox is an isolated environment where a suspicious file or URL can be detonated safely, revealing its\nbehavior (network calls, file changes, persistence) without touching production systems or real data. A. Upload\nsamples to the SIEM is incorrect. A SIEM aggregates and correlates logs; it is not where malware is executed for\ndynamic analysis.",
    "question": "What is the purpose of sandboxing suspicious files in a secure lab environment?",
    "options": [
      "Upload samples to the SIEM",
      "Obfuscate file metadata",
      "Encrypt the file for secure analysis",
      "Execute code without impacting production"
    ],
    "correctOption": 3,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e4-q50",
    "examSet": "Practice Exam 4",
    "examNum": 4,
    "questionNumber": 50,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "A",
    "explanation": "Correct Answer: A\n\nC. Pretending is incorrect because it is not a defined social-engineering technique in security terminology. B.\nPretexting is incorrect because it centers on inventing a fabricated scenario (a pretext) to justify a request; the\ndeception is the false story rather than acting out another person's identity. A. Impersonation is correct: the attacker\nmasquerades as a real or fictitious person and plays out that person's role on the target. D. Acting is incorrect because\nit is not a social-engineering attack category.",
    "question": "Which social engineering attack is masquerading as a real or fictitious character and then playing out the\nrole of that person on a target?",
    "options": [
      "Impersonation",
      "Pretexting",
      "Pretending",
      "Acting"
    ],
    "correctOption": 0,
    "isMultiSelect": false,
    "domainId": 2,
    "domain": "Domain 2: Threats, Vulnerabilities & Mitigations",
    "objective": "2.1-2.4 Threats, Vulnerabilities, Attack Vectors & Mitigations"
  },
  {
    "id": "e4-q51",
    "examSet": "Practice Exam 4",
    "examNum": 4,
    "questionNumber": 51,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "D",
    "explanation": "Correct Answer: D\n\nA. Backup is incorrect. A backup preserves a copy of data for recovery but does not by itself prove the data was\nunaltered during collection or transfer. D. Hashing is correct. Computing a cryptographic hash of the evidence at\ncollection and comparing it later verifies integrity: any change to the data produces a different hash value, proving it\nwas not modified. C. Encryption is incorrect. Encryption protects the confidentiality of data; it does not demonstrate\nthat the content has remained unchanged. B. Whitelisting is incorrect. Allowlisting controls which applications may run;\nit has nothing to do with verifying evidence integrity.",
    "question": "What forensic process ensures data has not been modified during collection or transfer?",
    "options": [
      "Backup",
      "Whitelisting",
      "Encryption",
      "Hashing"
    ],
    "correctOption": 3,
    "isMultiSelect": false,
    "domainId": 4,
    "domain": "Domain 4: Security Operations",
    "objective": "4.1-4.4 Security Operations, Monitoring, Incident Response & Forensics"
  },
  {
    "id": "e4-q52",
    "examSet": "Practice Exam 4",
    "examNum": 4,
    "questionNumber": 52,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "B",
    "explanation": "Correct Answer: B\n\nB (CSRF) is correct: cross-site request forgery exploits the fact that a browser automatically sends a site's session\ncookie with every request. When an authenticated user loads a malicious page, that page can silently issue a request\nto the trusted site, and the site treats it as coming from the user, so the new page effectively inherits the user's identity\nand privileges. D (SSFR) is incorrect because it is not a recognized attack; the similar-sounding SSRF (server-side\nrequest forgery) tricks a server into making requests on the attacker's behalf and does not rely on the user's browser\nsession. C (DLLS) is incorrect because it is not an attack name; DLL injection is a different technique that forces a\nprocess to load malicious code. A (DRCR) is incorrect because it is not a recognized web attack.",
    "question": "Which of the following attacks is based on the principle that when a user is currently authenticated on a\nwebsite and then loads another webpage, the new page inherits the identity and privileges of the first\nwebsite?",
    "options": [
      "DRCR",
      "CSRF",
      "DLLS",
      "SSFR"
    ],
    "correctOption": 1,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e4-q53",
    "examSet": "Practice Exam 4",
    "examNum": 4,
    "questionNumber": 53,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "C",
    "explanation": "Correct Answer: C\n\nA. Expense is a reason Arkady could give, so it is not the answer; continuously scanning every system consumes\nlicensing, infrastructure, and staffing resources. B. Workflow interruptions is a reason he could give, so it is not the\nanswer; scans can degrade performance or disrupt production systems while they run. C.A low tolerance for\nvulnerability risk argues for scanning more frequently, not less, so it would not be a reason to avoid continuous\nscanning. D. Technical constraints is a reason he could give, so it is not the answer; fragile or legacy systems may not\nsafely support constant scanning.",
    "question": "Arkady has been asked to explain to a manager why the SOC is not performing vulnerability scans\ncontinuously over all systems. Which of the following would NOT be a reason Arkady would give?",
    "options": [
      "Expense",
      "Workflow interruptions",
      "Low risk tolerance",
      "Technical constraints"
    ],
    "correctOption": 2,
    "isMultiSelect": false,
    "domainId": 2,
    "domain": "Domain 2: Threats, Vulnerabilities & Mitigations",
    "objective": "2.1-2.4 Threats, Vulnerabilities, Attack Vectors & Mitigations"
  },
  {
    "id": "e4-q54",
    "examSet": "Practice Exam 4",
    "examNum": 4,
    "questionNumber": 54,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "D",
    "explanation": "Correct Answer: D\n\nD. Execute scripted, automated incident responses is correct: in a SOAR platform a playbook codifies a sequence of\nautomated (and sometimes manual) actions that run in response to specific alerts, speeding and standardizing\nincident handling. A. Track audit trail for password resets is incorrect: that is an IAM logging function, not the role of a\nSOAR playbook. C. Store backup encryption keys is incorrect: key storage is handled by a key management system or\nHSM, not a playbook. B. Schedule identity rotations is incorrect: rotating credentials is an identity-management task,\nunrelated to playbook automation.",
    "question": "What is the role of a playbook in a SOAR platform?",
    "options": [
      "Track audit trail for password resets",
      "Schedule identity rotations",
      "Store backup encryption keys",
      "Execute scripted, automated incident responses"
    ],
    "correctOption": 3,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e4-q55",
    "examSet": "Practice Exam 4",
    "examNum": 4,
    "questionNumber": 55,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "B",
    "explanation": "Correct Answer: B\n\nD. Insider is incorrect. An insider threat is a current or former employee, contractor, or partner who misuses authorized\naccess; the motivation is typically revenge, financial gain, or negligence rather than a political or social cause. C.\nNation-state is incorrect. Nation-state actors are well-resourced groups sponsored by a government, motivated by\nespionage, war, or strategic advantage rather than activism. B. Hacktivist is correct. A hacktivist is driven by a political\nor social cause and uses attacks such as website defacement or denial of service to promote or protest that agenda.\nA. Script kiddie is incorrect. This is an unskilled attacker who relies on prebuilt tools, usually seeking notoriety or thrills\nrather than advancing a political or social cause.",
    "question": "Which type of attacker is typically motivated by political or social causes?",
    "options": [
      "Script kiddie",
      "Hacktivist",
      "Nation-state",
      "Insider"
    ],
    "correctOption": 1,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e4-q56",
    "examSet": "Practice Exam 4",
    "examNum": 4,
    "questionNumber": 56,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "C",
    "explanation": "Correct Answer: C\n\nA. Transfer is incorrect. Transferring risk shifts its impact to a third party (for example insurance or outsourcing) rather\nthan simply accepting it. D. Avoid is incorrect. Avoidance eliminates the risk by not undertaking the activity, not by\naccepting it. C. Accept is correct. Risk acceptance means the organization acknowledges a known risk and chooses to\ntake no further action, appropriate when its likelihood and impact are low enough to fall within risk tolerance. B.\nMitigate is incorrect. Mitigation applies controls to reduce the likelihood or impact of the risk instead of accepting it\nas-is.",
    "question": "Which risk treatment involves accepting a known risk due to its low likelihood and impact?",
    "options": [
      "Transfer",
      "Mitigate",
      "Accept",
      "Avoid"
    ],
    "correctOption": 2,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e4-q57",
    "examSet": "Practice Exam 4",
    "examNum": 4,
    "questionNumber": 57,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "A",
    "explanation": "Correct Answer: A\n\nA (Local host file and external DNS server) is correct: name resolution consults the local hosts file first and then the\nDNS server, so poisoning that hosts file or the external resolver are the two classic DNS attack points Himari has to\nprotect. B (Web server buffer and host DNS server) is incorrect because a web server buffer plays no part in name\nresolution; only half the pair is DNS-related. C (Reply referrer and domain buffer) is incorrect because neither is a real\nDNS component; both are invented terms. D (Web browser and browser add-on) is incorrect because those are\nman-in-the-browser targets: the browser asks the resolver for an answer but is not where DNS resolution happens.",
    "question": "Himari needs to protect against potential attacks on DNS. What are the locations she would need to\nprotect?",
    "options": [
      "Local host file and external DNS server",
      "Web server buffer and host DNS server",
      "Reply referrer and domain buffer",
      "Web browser and browser add-on"
    ],
    "correctOption": 0,
    "isMultiSelect": false,
    "domainId": 1,
    "domain": "Domain 1: General Security Concepts",
    "objective": "1.1-1.4 Security Controls, Cryptography, Identity & Access Management"
  },
  {
    "id": "e4-q58",
    "examSet": "Practice Exam 4",
    "examNum": 4,
    "questionNumber": 58,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "B",
    "explanation": "Correct Answer: B\n\nC. Native OS integration is incorrect because the legacy devices in an old plant typically cannot have IPSec support\nadded to their operating systems. A. A hardware security module is incorrect because an HSM safeguards\ncryptographic keys; it is not a way of implementing IPSec on network traffic. B. Bump-in-the-Wire is correct: a\ndedicated inline hardware device adds IPSec protection between the legacy equipment and the network without\nmodifying the devices themselves. D. Bump-in-the-Stack is incorrect because it requires inserting IPSec software into\neach device's network stack, which is impractical across many diverse legacy devices.",
    "question": "Gjord has been assigned to design an implementation of IPSec at an old manufacturing plant that has\nlegacy network equipment and many devices. Which implementation will he choose?",
    "options": [
      "Hardware security module (HSM)",
      "Bump-in-the-Wire (BITW)",
      "Native integration in each device's operating system",
      "Bump-in-the-Stack (BITS)"
    ],
    "correctOption": 1,
    "isMultiSelect": false,
    "domainId": 1,
    "domain": "Domain 1: General Security Concepts",
    "objective": "1.1-1.4 Security Controls, Cryptography, Identity & Access Management"
  },
  {
    "id": "e4-q59",
    "examSet": "Practice Exam 4",
    "examNum": 4,
    "questionNumber": 59,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "C",
    "explanation": "Correct Answer: C\n\nC is correct (Directive): a directive control instructs or mandates required behavior, and an acceptable use policy\ntelling employees how to handle data is a classic example. D is incorrect (Preventive): preventive controls stop an\nevent before it happens, such as encryption or a locked door, rather than instruct behavior. B is incorrect (Detective):\ndetective controls identify an event after it occurs, such as log review or an IDS alert. A is incorrect (Corrective):\ncorrective controls restore systems after an incident, such as restoring from backup.",
    "question": "A firm publishes an acceptable use policy that tells employees exactly how they must handle customer\ndata and requires an annual signed acknowledgment. Which control type is designed to direct or mandate\nspecific behavior in this way?",
    "options": [
      "Corrective",
      "Detective",
      "Directive",
      "Preventive"
    ],
    "correctOption": 2,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e4-q60",
    "examSet": "Practice Exam 4",
    "examNum": 4,
    "questionNumber": 60,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "B",
    "explanation": "Correct Answer: B\n\nA. Certificate pinning associates a host with an expected certificate or key to resist impostor certificates; it does not\nquery a certificate's revocation status in real time. B. Correct \u2014 the Online Certificate Status Protocol (OCSP)\nperforms a real-time lookup of a certificate's status, allowing immediate verification that it has not been revoked. C.\nClipping is unrelated to certificate status checking. D. \"Remote lookup protocol (RLP)\" is not a real protocol for\nchecking certificate status.",
    "question": "Which of the following performs a real-time lookup of a certificate's status?",
    "options": [
      "Pinning",
      "OCSP",
      "Clipping",
      "Remote lookup protocol (RLP)"
    ],
    "correctOption": 1,
    "isMultiSelect": false,
    "domainId": 1,
    "domain": "Domain 1: General Security Concepts",
    "objective": "1.1-1.4 Security Controls, Cryptography, Identity & Access Management"
  },
  {
    "id": "e4-q61",
    "examSet": "Practice Exam 4",
    "examNum": 4,
    "questionNumber": 61,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "B",
    "explanation": "Correct Answer: B\n\nB is correct (Non-repudiation): non-repudiation prevents a party from credibly denying an action; a digital signature ties\nthe message to the sender's private key, proving origin. A is incorrect (Authentication): authentication verifies identity\nat access time but by itself does not create durable proof that a specific message was sent. D is incorrect\n(Confidentiality): confidentiality keeps data secret from unauthorized parties but does not prove authorship. C is\nincorrect (Availability): availability ensures resources are accessible when needed and is unrelated to proving who sent\na message.",
    "question": "A contract is approved by email, and the sender later denies having sent the approval. The security team\nwants a mechanism that cryptographically proves the message originated from that sender so the claim\ncannot be credibly denied. Which concept provides this?",
    "options": [
      "Authentication",
      "Non-repudiation",
      "Availability",
      "Confidentiality"
    ],
    "correctOption": 1,
    "isMultiSelect": false,
    "domainId": 1,
    "domain": "Domain 1: General Security Concepts",
    "objective": "1.1-1.4 Security Controls, Cryptography, Identity & Access Management"
  },
  {
    "id": "e4-q62",
    "examSet": "Practice Exam 4",
    "examNum": 4,
    "questionNumber": 62,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "C",
    "explanation": "Correct Answer: C\n\nA. Man-in-the-middle is incorrect because an on-path attack intercepts or alters traffic between two parties in transit;\nthe attack described is the takeover of an authenticated session via its token. C. Session hijacking is correct: the\nattacker steals or reuses a valid session token to take over an authenticated user's active session and impersonate\nthat user. D. Clickjacking is incorrect because it tricks a user into clicking concealed interface elements; it does not\nseize an active session. B. Buffer overflow is incorrect because it is a memory-corruption application attack and has\nnothing to do with session takeover.",
    "question": "Which attack takes over an authenticated user's active session, typically by stealing or reusing the session\ntoken, to impersonate that user?",
    "options": [
      "Man-in-the-middle",
      "Buffer overflow",
      "Session hijacking",
      "Clickjacking"
    ],
    "correctOption": 2,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e4-q63",
    "examSet": "Practice Exam 4",
    "examNum": 4,
    "questionNumber": 63,
    "questionType": "Select Two",
    "correctAnswerRaw": "A, C",
    "explanation": "Correct Answer: A, C\n\nC and A are correct: C (Email with spoofed domain) is correct because it is a classic phishing indicator: attackers forge\nthe sender address or register a look-alike domain so the message appears to come from a trusted bank. A\n(Suspicious links requesting urgent action) is correct as well, since phishing relies on urgency or fear to push the\nrecipient into clicking a link before thinking. D (Frequent system reboots) is incorrect because unexplained reboots\npoint to unstable software or malware already running on the host, not to a deceptive email. E (Embedded\ncommand-line syntax in file name) is incorrect because that indicator relates to malicious file execution on an endpoint\nrather than to the social engineering message itself. B (IP address conflicts) is incorrect because duplicate IP\naddresses are a network configuration problem unrelated to phishing.",
    "question": "Select TWO common indicators of a phishing attack:",
    "options": [
      "Suspicious links requesting urgent action",
      "IP address conflicts",
      "Email with spoofed domain",
      "Frequent system reboots",
      "Embedded command-line syntax in file name"
    ],
    "optionLetters": [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    "isMultiSelect": true,
    "requiredSelectCount": 2,
    "correctOptions": [
      0,
      2
    ],
    "correctLetters": [
      "A",
      "C"
    ],
    "correctOption": 0,
    "domainId": 2,
    "domain": "Domain 2: Threats, Vulnerabilities & Mitigations",
    "objective": "2.1-2.4 Threats, Vulnerabilities, Attack Vectors & Mitigations"
  },
  {
    "id": "e4-q64",
    "examSet": "Practice Exam 4",
    "examNum": 4,
    "questionNumber": 64,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "C",
    "explanation": "Correct Answer: C\n\nA. Speeding up browser processing is not a purpose of digital certificates; certificate validation adds overhead rather\nthan reducing it. B. Certificates publish and distribute the public key rather than hide it; a public key is meant to be\nshared. C. Correct \u2014 a digital certificate confirms the true identity of the sender by binding that identity to a public key\nvouched for by a trusted authority. D. Certificates do not replace digital signatures; the two work together, with\nsignatures relying on the keys that certificates authenticate.",
    "question": "Alarik is explaining to a colleague about digital certificates. Which of the following statements would he use\nto correctly describe the need for digital certificates?",
    "options": [
      "It can speed up processing time when using a web browser.",
      "It can hide the public key so that it cannot be abused.",
      "It can confirm the true identity of the sender of an encrypted message.",
      "It can replace digital signatures with a more robust technology."
    ],
    "correctOption": 2,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e4-q65",
    "examSet": "Practice Exam 4",
    "examNum": 4,
    "questionNumber": 65,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "C",
    "explanation": "Correct Answer: C\n\nA. Faster recovery time is incorrect. Immutability protects data from modification but does not inherently speed up\nrestores; recovery time depends on backup type, media, and bandwidth. C. Cannot be altered by ransomware is\ncorrect. An immutable backup is written once and cannot be changed or deleted for a defined retention period\n(WORM-style storage), so even if ransomware compromises the environment it cannot encrypt, overwrite, or delete\nthe protected copy, guaranteeing a clean restore point. D. Stored in cold storage is incorrect. Cold storage describes\nwhere and how cheaply data is archived; immutable backups can live on hot or cold tiers, so this is not their defining\nadvantage. B. Supports differential compression is incorrect. Compression is a storage-efficiency feature unrelated to\nimmutability, which is about preventing alteration.",
    "question": "Which of the following is a key advantage of using immutable backups?",
    "options": [
      "Faster recovery time",
      "Supports differential compression",
      "Cannot be altered by ransomware",
      "Stored in cold storage"
    ],
    "correctOption": 2,
    "isMultiSelect": false,
    "domainId": 2,
    "domain": "Domain 2: Threats, Vulnerabilities & Mitigations",
    "objective": "2.1-2.4 Threats, Vulnerabilities, Attack Vectors & Mitigations"
  },
  {
    "id": "e4-q66",
    "examSet": "Practice Exam 4",
    "examNum": 4,
    "questionNumber": 66,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "A",
    "explanation": "Correct Answer: A\n\nA. Threat hunting is correct. It is the proactive search of logs, endpoint telemetry, and network data for malicious\nactivity that automated alerting has not detected. C. Vulnerability scanning is incorrect. It identifies weaknesses and\nmisconfigurations in systems; it does not search for active, undetected intrusions. B. Log archiving is incorrect.\nArchiving preserves records for later use and compliance; it is storage, not proactive analysis. D. User provisioning is\nincorrect. It creates and configures user accounts and permissions; it is an identity management task unrelated to\nsearching for threats.",
    "question": "A security team proactively searches logs, endpoint telemetry, and network data for evidence of threats\nthat automated alerts have not identified. Which activity is the team performing?",
    "options": [
      "Threat hunting",
      "Log archiving",
      "Vulnerability scanning",
      "User provisioning"
    ],
    "correctOption": 0,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e4-q67",
    "examSet": "Practice Exam 4",
    "examNum": 4,
    "questionNumber": 67,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "D",
    "explanation": "Correct Answer: D\n\nD. SLE (Single Loss Expectancy) is correct. SLE represents the expected monetary loss from one occurrence of a\nspecific risk event, calculated as Asset Value multiplied by Exposure Factor, and feeds into the ALE formula. C.\nSecurity awareness training is incorrect. Awareness training is a control, not a quantitative risk metric. B. Business\nimpact analysis is incorrect. A BIA identifies critical functions and the broader impact of outages; it does not represent\nthe loss from a single event. A. Governance framework is incorrect. A governance framework (like COBIT) provides\nstructure for managing IT; it is not a loss-expectancy value.",
    "question": "Fill in the blank: In risk management, the __________ is the amount of loss expected from a single event.",
    "options": [
      "Governance framework",
      "Business impact analysis",
      "Security awareness training",
      "SLE (Single Loss Expectancy)"
    ],
    "correctOption": 3,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e4-q68",
    "examSet": "Practice Exam 4",
    "examNum": 4,
    "questionNumber": 68,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "C",
    "explanation": "Correct Answer: C\n\nC (Avoid) is correct: risk avoidance eliminates a risk entirely by discontinuing or never undertaking the activity that\ncreates it. By choosing not to build the data center in an earthquake zone, the organization removes the earthquake\nexposure altogether, so Giovanni would classify the decision as avoidance. D (Transfer) is incorrect because\ntransferring shifts the financial consequences of a risk to a third party, for example through cyber insurance, while the\nactivity still goes ahead. A (Reject) is incorrect because rejecting a risk is not one of the four recognized risk\nmanagement strategies (transfer, accept, avoid, mitigate); ignoring a known risk is poor practice, not a formal\nresponse. B (Prevent) is incorrect because it is not a Security+ risk strategy term; the closest strategy, mitigation,\nwould mean building the site anyway and adding controls to lower the impact.",
    "question": "Giovanni is completing a report on risks. To which risk option would he classify the action that the\norganization has decided not to construct a new data center because it would be located in an earthquake\nzone?",
    "options": [
      "Reject",
      "Prevent",
      "Avoid",
      "Transfer"
    ],
    "correctOption": 2,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e4-q69",
    "examSet": "Practice Exam 4",
    "examNum": 4,
    "questionNumber": 69,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "D",
    "explanation": "Correct Answer: D\n\nD. Ownership is correct. Assigning an owner establishes who is accountable for a hardware, software, or data asset\nthroughout its life cycle. B. Classification is incorrect. Classification labels an asset by sensitivity or criticality; it does\nnot assign accountability to a person or role. A. Inventory is incorrect. An inventory records and tracks assets but does\nnot designate who is answerable for them. C. Sanitization is incorrect. Sanitization removes data from media before\ndisposal or reuse; it is a decommissioning activity, not an accountability assignment.",
    "question": "Which asset-management activity assigns accountability for a hardware, software, or data asset to a\nresponsible party?",
    "options": [
      "Inventory",
      "Classification",
      "Sanitization",
      "Ownership"
    ],
    "correctOption": 3,
    "isMultiSelect": false,
    "domainId": 1,
    "domain": "Domain 1: General Security Concepts",
    "objective": "1.1-1.4 Security Controls, Cryptography, Identity & Access Management"
  },
  {
    "id": "e4-q70",
    "examSet": "Practice Exam 4",
    "examNum": 4,
    "questionNumber": 70,
    "questionType": "Matching",
    "correctAnswerRaw": "1 = A; 2 = D; 3 = C; 4 = B",
    "explanation": "Correct Answer: 1 = A; 2 = D; 3 = C; 4 = B\n\nEDR matches \"Monitors endpoint activity and contains threats\" because Endpoint Detection and Response agents\ncontinuously record process, file, and network behavior on hosts and can quarantine or isolate them. SOAR matches\n\"Automates incident response playbooks\" since SOAR platforms orchestrate multi-tool workflows and run scripted\nresponses with minimal human intervention. SIEM matches \"Real-time correlation of security events\" because a\nSecurity Information and Event Management platform aggregates logs from many sources and correlates them to\ngenerate alerts. Firewall matches \"Blocks or permits network traffic\" as its core function is to enforce allow/deny rules\non traffic crossing network boundaries.",
    "question": "Match each security tool to its function.",
    "matchingItems": [
      {
        "num": 1,
        "text": "EDR",
        "correctLetter": "A"
      },
      {
        "num": 2,
        "text": "SOAR",
        "correctLetter": "D"
      },
      {
        "num": 3,
        "text": "SIEM",
        "correctLetter": "C"
      },
      {
        "num": 4,
        "text": "Firewall",
        "correctLetter": "B"
      }
    ],
    "matchingDescriptions": [
      {
        "letter": "A",
        "text": "Monitors endpoint activity and contains threats"
      },
      {
        "letter": "B",
        "text": "Blocks or permits network traffic"
      },
      {
        "letter": "C",
        "text": "Real-time correlation of security events"
      },
      {
        "letter": "D",
        "text": "Automates incident response playbooks"
      }
    ],
    "correctMapping": {
      "1": "A",
      "2": "D",
      "3": "C",
      "4": "B"
    },
    "options": [
      "A. Monitors endpoint activity and contains threats",
      "B. Blocks or permits network traffic",
      "C. Real-time correlation of security events",
      "D. Automates incident response playbooks"
    ],
    "correctOption": 0,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e4-q71",
    "examSet": "Practice Exam 4",
    "examNum": 4,
    "questionNumber": 71,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "A",
    "explanation": "Correct Answer: A\n\nA. Manipulating trusted websites to infect a targeted group is correct. In a watering hole attack, the adversary\ncompromises a legitimate website the intended victims are known to visit, so that those specific users are infected\nwhen they browse to it. B. Sending malware through watering hole-themed spam is incorrect. Mass spam is a\nphishing/malspam vector; a watering hole relies on a compromised trusted site, not on themed email. D. Infecting a\nlocal DNS cache is incorrect. That describes DNS cache poisoning, which redirects name resolution \u2014 a different\nattack from compromising a website the targets frequent. C. Poisoning a data lake to spread malware is incorrect.\nTampering with a data repository is not the watering hole technique, which targets a website used by the victim group.",
    "question": "Which of the following BEST describes a watering hole attack?",
    "options": [
      "Manipulating trusted websites to infect a targeted group",
      "Sending malware through watering hole-themed spam",
      "Poisoning a data lake to spread malware",
      "Infecting a local DNS cache"
    ],
    "correctOption": 0,
    "isMultiSelect": false,
    "domainId": 2,
    "domain": "Domain 2: Threats, Vulnerabilities & Mitigations",
    "objective": "2.1-2.4 Threats, Vulnerabilities, Attack Vectors & Mitigations"
  },
  {
    "id": "e4-q72",
    "examSet": "Practice Exam 4",
    "examNum": 4,
    "questionNumber": 72,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "C",
    "explanation": "Correct Answer: C\n\nA. Prevents phishing is incorrect. MFA can reduce the impact of a stolen password, but by itself it does not prevent\nphishing; users can still be deceived, and some MFA methods can be phished or bypassed. D. Prevents all account\nlockouts is incorrect. Account lockouts result from lockout policies and failed attempts; MFA does not eliminate them\nand may add factors that can also fail. C. Reduces reliance on passwords alone is correct. MFA requires an additional\nfactor, something you have or something you are, beyond the password, so a compromised password alone is not\nenough to gain access. B. Speeds up authentication is incorrect. Adding a second factor generally adds a step to the\nlogin process rather than making it faster.",
    "question": "What is a key benefit of using multifactor authentication (MFA)?",
    "options": [
      "Prevents phishing",
      "Speeds up authentication",
      "Reduces reliance on passwords alone",
      "Prevents all account lockouts"
    ],
    "correctOption": 2,
    "isMultiSelect": false,
    "domainId": 2,
    "domain": "Domain 2: Threats, Vulnerabilities & Mitigations",
    "objective": "2.1-2.4 Threats, Vulnerabilities, Attack Vectors & Mitigations"
  },
  {
    "id": "e4-q73",
    "examSet": "Practice Exam 4",
    "examNum": 4,
    "questionNumber": 73,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "D",
    "explanation": "Correct Answer: D\n\nD is correct (Continuous): a continuous risk assessment relies on automated tooling and monitoring to re-evaluate risk\nin near real time as the environment changes, rather than at fixed points in time. The automatic register updates fed by\nscanners and the SIEM are its defining feature. B is incorrect (Recurring) because a recurring assessment is repeated\non a schedule, quarterly or annually, by people, and between cycles the register is static. A is incorrect (Ad hoc)\nbecause an ad hoc assessment is triggered by a specific event or request, such as a new threat report or a\nmanagement question, and is neither systematic nor automated. C is incorrect (One-time) because a one-time\nassessment is performed once for a particular project or system, such as before a new application goes live, and is not\nrepeated.",
    "question": "A financial services company has integrated its vulnerability scanner, configuration monitoring, and SIEM\nso that risk register entries are updated automatically whenever a control fails, a new asset appears, or an\nexposure changes. Which type of risk assessment does this approach represent?",
    "options": [
      "Ad hoc",
      "Recurring",
      "One-time",
      "Continuous"
    ],
    "correctOption": 3,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e4-q74",
    "examSet": "Practice Exam 4",
    "examNum": 4,
    "questionNumber": 74,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "B",
    "explanation": "Correct Answer: B\n\nB. SQL injection is correct. SQL injection exploits insufficient input validation by inserting malicious SQL syntax into\nuser-supplied input fields. When the application passes unsanitized input directly to the database, an attacker can\nmanipulate the SQL statement to dump tables, bypass authentication, modify data, or delete records. D. Cross-site\nscripting is incorrect. XSS injects malicious client-side scripts into web pages viewed by other users \u2014 it targets\nbrowser sessions, not backend database query logic. A. Buffer overflow is incorrect. A buffer overflow writes more\ndata to a memory buffer than it can hold, potentially enabling code execution \u2014 it targets application memory\nmanagement, not SQL query construction. C. Command injection is incorrect. Command injection inserts OS-level\ncommands into an application to be executed by the system shell \u2014 it targets the operating system, not the database\nengine.",
    "question": "Fill in the blank: A __________ attack attempts to exploit a lack of input validation to manipulate backend\ndatabase queries.",
    "options": [
      "Buffer overflow",
      "SQL injection",
      "Command injection",
      "Cross-site scripting"
    ],
    "correctOption": 1,
    "isMultiSelect": false,
    "domainId": 2,
    "domain": "Domain 2: Threats, Vulnerabilities & Mitigations",
    "objective": "2.1-2.4 Threats, Vulnerabilities, Attack Vectors & Mitigations"
  },
  {
    "id": "e4-q75",
    "examSet": "Practice Exam 4",
    "examNum": 4,
    "questionNumber": 75,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "A",
    "explanation": "Correct Answer: A\n\nB. Stand-alone (autonomous) AP is incorrect because it stores its own configuration and operates independently, so it\ncannot be centrally managed by a WLC. A. Controller-based (lightweight) AP is correct because it offloads\nconfiguration, roaming, and policy enforcement to the wireless LAN controller and is designed to be deployed and\nmanaged in bulk through a WLC. D. Wireless range extender is incorrect because it only rebroadcasts an existing\nwireless signal; it is not a type of access point managed by a WLC. C. 'Any type of AP can be managed by a WLC' is\nincorrect because autonomous APs lack controller-management support; only controller-based (lightweight) APs\ncommunicate with a WLC.",
    "question": "Nala needs to purchase WLCs for the office. What type of AP must she also purchase that can be\nmanaged by a WLC?",
    "options": [
      "Controller-based (lightweight) AP",
      "Stand-alone (autonomous) AP",
      "Any type of AP can be managed by a WLC.",
      "Wireless range extender"
    ],
    "correctOption": 0,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e4-q76",
    "examSet": "Practice Exam 4",
    "examNum": 4,
    "questionNumber": 76,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "D",
    "explanation": "Correct Answer: D\n\nB. From government contractors working under classified agreements is incorrect because commercial feeds are not\nbuilt primarily on contractor-supplied or classified data; government-related intelligence typically reaches companies\nthrough information-sharing organizations. D. From the information they collect from their own customers is correct:\nproprietary providers gather telemetry from their subscribers' networks, endpoints, and sensors, then aggregate and\nanonymize it into their commercial product. A. From free and public sources such as vendor blogs and advisories is\nincorrect because publicly available data is OSINT, which the question explicitly sets apart from proprietary feeds. C.\nFrom paid informants recruited inside criminal forums is incorrect because commercial threat intelligence is driven by\ntechnical telemetry collected at scale; human-source reporting is a small adjunct, not the primary input.",
    "question": "Unlike open-source intelligence (OSINT) feeds, where do proprietary third-party threat intelligence\nproviders primarily obtain the telemetry that powers their commercial feeds?",
    "options": [
      "From free and public sources such as vendor blogs and advisories",
      "From government contractors working under classified agreements",
      "From paid informants recruited inside criminal forums",
      "From the information they collect from their own customers"
    ],
    "correctOption": 3,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e4-q77",
    "examSet": "Practice Exam 4",
    "examNum": 4,
    "questionNumber": 77,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "A",
    "explanation": "Correct Answer: A\n\nD. To conserve power usage is incorrect. Power consumption is an operational concern, not the reason for restricting\nfunctionality. A. To reduce the system's attack surface is correct. Least functionality means configuring a system to\nprovide only the capabilities strictly required for its role \u2014 disabling unneeded services, ports, accounts and features.\nEvery unnecessary component is a potential attack vector, so removing it shrinks the surface available to an\nadversary. C. To simplify user access is incorrect. A leaner system may be easier to use, but the driver here is\nsecurity, not usability. B. To increase DNS query speed is incorrect. Name resolution performance has nothing to do\nwith hardening a host.",
    "question": "What is the purpose of implementing least functionality on critical systems?",
    "options": [
      "To reduce the system's attack surface",
      "To increase DNS query speed",
      "To simplify user access",
      "To conserve power usage"
    ],
    "correctOption": 0,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e4-q78",
    "examSet": "Practice Exam 4",
    "examNum": 4,
    "questionNumber": 78,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "D",
    "explanation": "Correct Answer: D\n\nB. Group policy configurations are incorrect. Group Policy could explain the lockout threshold, but you first need\nevidence of what happened; you cannot tell why the account locked without reviewing the logon attempts. C. Time\nserver synchronization is incorrect. Clock skew is a secondary consideration; it does not reveal the source of the failed\nlogons that triggered the lockout. D. Authentication logs are correct. A lockout that occurred while the user was not\nactive points to repeated failed logon attempts (for example, a brute-force attempt or a stale cached credential); the\nauthentication logs show the source, time, and count of those attempts, so they should be examined first. A. File\nintegrity hashes are incorrect. FIM detects changes to files, which is unrelated to why an account was locked out from\nfailed authentications.",
    "question": "Scenario: A user complains their account was locked out overnight, though they were not logged in. What\nshould be investigated first?",
    "options": [
      "File integrity hashes",
      "Group policy configurations",
      "Time server synchronization",
      "Authentication logs"
    ],
    "correctOption": 3,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e4-q79",
    "examSet": "Practice Exam 4",
    "examNum": 4,
    "questionNumber": 79,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "D",
    "explanation": "Correct Answer: D\n\nD is correct (Accounting): accounting, also called auditing, tracks and logs user activity such as files accessed,\ncommands run, and login times, which is exactly what investigators need. A is incorrect (Authentication):\nauthentication verifies a user's identity at login but does not record what they later did. B is incorrect (Authorization):\nauthorization determines what a user is permitted to access, not a log of their actions. C is incorrect (Attestation):\nattestation is a claim about a system's integrity or configuration and is not part of the AAA activity-logging function.",
    "question": "After a breach, investigators need a record showing which files each user opened and which commands\nthey ran, along with timestamps. Which component of the AAA framework produces this record?",
    "options": [
      "Authentication",
      "Authorization",
      "Attestation",
      "Accounting"
    ],
    "correctOption": 3,
    "isMultiSelect": false,
    "domainId": 1,
    "domain": "Domain 1: General Security Concepts",
    "objective": "1.1-1.4 Security Controls, Cryptography, Identity & Access Management"
  },
  {
    "id": "e4-q80",
    "examSet": "Practice Exam 4",
    "examNum": 4,
    "questionNumber": 80,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "D",
    "explanation": "Correct Answer: D\n\nB. Confidential is incorrect because in Jan's scheme it sits below the top level; it covers sensitive data whose\ncompromise would be damaging but would not severely impact the enterprise's function and mission. C. Internal is\nincorrect because it covers data intended for internal use whose compromise would cause only limited impact. D.\nCritical is correct: it is the highest level in the scheme, reserved for data whose compromise would severely impact the\nenterprise's function and mission. A. Public is incorrect because it is the lowest level, for information that can be\ndisclosed without harm.",
    "question": "Jan's organization uses a four-level data classification scheme: Public, Internal, Confidential, and Critical,\nin order of increasing impact. Data has been identified that, if compromised, would severely impact the\nenterprise's function and mission. Which classification should Jan assign?",
    "options": [
      "Public",
      "Confidential",
      "Internal",
      "Critical"
    ],
    "correctOption": 3,
    "isMultiSelect": false,
    "domainId": 1,
    "domain": "Domain 1: General Security Concepts",
    "objective": "1.1-1.4 Security Controls, Cryptography, Identity & Access Management"
  },
  {
    "id": "e4-q81",
    "examSet": "Practice Exam 4",
    "examNum": 4,
    "questionNumber": 81,
    "questionType": "Matching",
    "correctAnswerRaw": "1 = A; 2 = B; 3 = D; 4 = C",
    "explanation": "Correct Answer: 1 = A; 2 = B; 3 = D; 4 = C\n\nThe correct pairings are: Chain of custody = Tracks evidence handling; Syslog = Standard protocol for log forwarding;\nLog aggregation = Centralized storage of security events; Log retention = Stores logs for compliance timeframes.\nChain of custody documents every person who collected, handled, transferred, or analyzed evidence \u2014 essential in\nlegal proceedings to prove evidence integrity. Syslog is the IETF-standard protocol (RFC 5424) allowing devices to\nsend log messages over the network, typically via UDP port 514, to a centralized collector. Log aggregation\nconsolidates logs from firewalls, servers, and endpoints into one platform (often a SIEM) for correlation and analysis.\nLog retention policies define how long logs must be preserved to satisfy regulations such as PCI DSS (1 year) or\nHIPAA (6 years).",
    "question": "Match each logging concept to its function.",
    "matchingItems": [
      {
        "num": 1,
        "text": "Chain of custody",
        "correctLetter": "A"
      },
      {
        "num": 2,
        "text": "Syslog",
        "correctLetter": "B"
      },
      {
        "num": 3,
        "text": "Log aggregation",
        "correctLetter": "D"
      },
      {
        "num": 4,
        "text": "Log retention",
        "correctLetter": "C"
      }
    ],
    "matchingDescriptions": [
      {
        "letter": "A",
        "text": "Tracks evidence handling"
      },
      {
        "letter": "B",
        "text": "Standard protocol for log forwarding"
      },
      {
        "letter": "C",
        "text": "Stores logs for compliance timeframes"
      },
      {
        "letter": "D",
        "text": "Centralized storage of security events"
      }
    ],
    "correctMapping": {
      "1": "A",
      "2": "B",
      "3": "D",
      "4": "C"
    },
    "options": [
      "A. Tracks evidence handling",
      "B. Standard protocol for log forwarding",
      "C. Stores logs for compliance timeframes",
      "D. Centralized storage of security events"
    ],
    "correctOption": 0,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e4-q82",
    "examSet": "Practice Exam 4",
    "examNum": 4,
    "questionNumber": 82,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "A",
    "explanation": "Correct Answer: A\n\nB. Simulation is incorrect because a simulation puts responders through a realistic, often hands-on emulated incident\nrather than an informal 30-minute discussion. A. Tabletop is correct because a tabletop exercise is a discussion-based\nsession in which team members talk through their roles and responses to a scenario in an informal, low-stress setting.\nC. Walkthrough is incorrect because it steps through a specific procedure or plan in detail, not a periodic scenario\ndiscussion. D. Relaxed scenario event (RSE) is incorrect because it is not a recognized type of incident-response\nexercise.",
    "question": "Hannah is planning incident response testing exercises for the next year. This exercise will be a monthly\n30-minute discussion of a scenario conducted in an informal and stress-free environment. What is the\nname of this exercise?",
    "options": [
      "Tabletop",
      "Simulation",
      "Walkthrough",
      "Relaxed scenario event (RSE)"
    ],
    "correctOption": 0,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e4-q83",
    "examSet": "Practice Exam 4",
    "examNum": 4,
    "questionNumber": 83,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "C",
    "explanation": "Correct Answer: C\n\nC (Change management) is correct: change management is the structured process that ensures every modification to\nsystems or configurations is reviewed for impact, tested, approved by stakeholders, and documented before it is\nimplemented. This prevents an unapproved or untested change from introducing a vulnerability or outage. D (Incident\nmanagement) is incorrect because incident management handles the detection, containment, and recovery from\nsecurity events, not the approval of planned changes. B (Risk management) is incorrect because risk management\nidentifies, assesses, and treats risks at an organizational level; it informs change decisions but does not approve and\ntest specific changes. A (Configuration management) is incorrect because configuration management maintains\nbaselines and records of how systems are set up; it documents the state that change management alters.",
    "question": "Fill in the blank: The principle of __________ ensures that changes to systems are approved,\ndocumented, and tested.",
    "options": [
      "Configuration management",
      "Risk management",
      "Change management",
      "Incident management"
    ],
    "correctOption": 2,
    "isMultiSelect": false,
    "domainId": 4,
    "domain": "Domain 4: Security Operations",
    "objective": "4.1-4.4 Security Operations, Monitoring, Incident Response & Forensics"
  },
  {
    "id": "e4-q84",
    "examSet": "Practice Exam 4",
    "examNum": 4,
    "questionNumber": 84,
    "questionType": "Matching",
    "correctAnswerRaw": "1 = G; 2 = B; 3 = F; 4 = A; 5 = E",
    "explanation": "Correct Answer: 1 = G; 2 = B; 3 = F; 4 = A; 5 = E\n\n1 \u2192 G (Senior manager accountable for a data set who decides its classification and who may access it): the owner\nholds ultimate accountability for the data and sets the rules for its protection. 2 \u2192 B (Entity that determines the\npurposes and means of processing personal data): the controller decides why and how personal data is processed\nand carries the primary legal obligations to the data subject. 3 \u2192 F (Third party that handles personal data only on the\ndocumented instructions of another organization): the processor acts for the controller, for example a SaaS provider\nrunning the database, and may not use the data for its own purposes. 4 \u2192 A (Technical role that implements backups,\npermissions, and encryption on behalf of the accountable manager): the custodian or steward operates the day-to-day\ncontrols the owner requires but does not decide policy. 5 \u2192 E (Identifiable individual whom the personal data is about):\nthe data subject is the person whose privacy rights, such as access or erasure, the other roles must honor. Unused: C\n(Independent party that tests controls and issues an opinion on whether they operate effectively) \u2014 that is an external\nauditor, not a data role; D (Executive who leads the overall security program and reports to the board) \u2014 that is the\nCISO, a governance role rather than a responsibility for a specific data set.",
    "question": "A privacy officer is documenting who is responsible for a customer database. Match each role to the description of its responsibility.",
    "matchingItems": [
      {
        "num": 1,
        "text": "Data owner",
        "correctLetter": "G"
      },
      {
        "num": 2,
        "text": "Data controller",
        "correctLetter": "B"
      },
      {
        "num": 3,
        "text": "Data processor",
        "correctLetter": "F"
      },
      {
        "num": 4,
        "text": "Data custodian",
        "correctLetter": "A"
      },
      {
        "num": 5,
        "text": "Data subject",
        "correctLetter": "E"
      }
    ],
    "matchingDescriptions": [
      {
        "letter": "A",
        "text": "Technical role that implements backups, permissions, and encryption on behalf of the accountable manager"
      },
      {
        "letter": "B",
        "text": "Entity that determines the purposes and means of processing personal data"
      },
      {
        "letter": "C",
        "text": "Independent party that tests controls and issues an opinion on whether they operate effectively"
      },
      {
        "letter": "D",
        "text": "Executive who leads the overall security program and reports to the board"
      },
      {
        "letter": "E",
        "text": "Identifiable individual whom the personal data is about"
      },
      {
        "letter": "F",
        "text": "Third party that handles personal data only on the documented instructions of another organization"
      },
      {
        "letter": "G",
        "text": "Senior manager accountable for a data set who decides its classification and who may access it"
      }
    ],
    "correctMapping": {
      "1": "G",
      "2": "B",
      "3": "F",
      "4": "A",
      "5": "E"
    },
    "options": [
      "A. Technical role that implements backups, permissions, and encryption on behalf of the accountable manager",
      "B. Entity that determines the purposes and means of processing personal data",
      "C. Independent party that tests controls and issues an opinion on whether they operate effectively",
      "D. Executive who leads the overall security program and reports to the board",
      "E. Identifiable individual whom the personal data is about",
      "F. Third party that handles personal data only on the documented instructions of another organization",
      "G. Senior manager accountable for a data set who decides its classification and who may access it"
    ],
    "correctOption": 0,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e4-q85",
    "examSet": "Practice Exam 4",
    "examNum": 4,
    "questionNumber": 85,
    "questionType": "Matching",
    "correctAnswerRaw": "1 = C; 2 = D; 3 = B; 4 = A",
    "explanation": "Correct Answer: 1 = C; 2 = D; 3 = B; 4 = A\n\nThe correct mapping is: Heuristic detection identifies threats using generic rule sets and code patterns that suggest\nmalicious intent without matching a known signature \u2014 effective against new variants. Signature-based detection uses\npatterns from known malware samples, providing fast and accurate identification of recognized threats but failing\nagainst novel ones. Anomaly-based detection flags deviations from an established behavioral baseline, catching\nunusual activity even without prior knowledge of the threat. Behavior-based detection evaluates how a process acts\nover time \u2014 if an otherwise legitimate-looking process starts encrypting files or making unusual network calls, it is\nflagged regardless of its signature.",
    "question": "Match each detection method to its characteristic.",
    "matchingItems": [
      {
        "num": 1,
        "text": "Heuristic",
        "correctLetter": "C"
      },
      {
        "num": 2,
        "text": "Signature-based",
        "correctLetter": "D"
      },
      {
        "num": 3,
        "text": "Anomaly-based",
        "correctLetter": "B"
      },
      {
        "num": 4,
        "text": "Behavior-based",
        "correctLetter": "A"
      }
    ],
    "matchingDescriptions": [
      {
        "letter": "A",
        "text": "Evaluates how a process acts over time"
      },
      {
        "letter": "B",
        "text": "Flags deviations from established baselines"
      },
      {
        "letter": "C",
        "text": "Identifies threats using generic rule sets"
      },
      {
        "letter": "D",
        "text": "Uses patterns of known malware"
      }
    ],
    "correctMapping": {
      "1": "C",
      "2": "D",
      "3": "B",
      "4": "A"
    },
    "options": [
      "A. Evaluates how a process acts over time",
      "B. Flags deviations from established baselines",
      "C. Identifies threats using generic rule sets",
      "D. Uses patterns of known malware"
    ],
    "correctOption": 0,
    "domainId": 1,
    "domain": "Domain 1: General Security Concepts",
    "objective": "1.1-1.4 Security Controls, Cryptography, Identity & Access Management"
  },
  {
    "id": "e4-q86",
    "examSet": "Practice Exam 4",
    "examNum": 4,
    "questionNumber": 86,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "B",
    "explanation": "Correct Answer: B\n\nB. Environmental is correct: environmental physical attacks disrupt the supporting infrastructure an organization\ndepends on, such as electrical power, producing outages like a blackout. A. Brute force is incorrect because, in the\nphysical-attack context, it means forcing entry through doors or barriers, not disrupting utilities. D. RFID cloning is\nincorrect because it copies access-badge credentials, which is unrelated to a power outage. C. DDoS is incorrect\nbecause it is a network attack that overwhelms services with traffic, not a physical attack on power infrastructure.",
    "question": "A deliberate attack on electrical infrastructure causes a power blackout at an organization's facility. Which\ntype of physical attack does this scenario illustrate?",
    "options": [
      "Brute force",
      "Environmental",
      "Distributed denial-of-service (DDoS)",
      "RFID cloning"
    ],
    "correctOption": 1,
    "isMultiSelect": false,
    "domainId": 2,
    "domain": "Domain 2: Threats, Vulnerabilities & Mitigations",
    "objective": "2.1-2.4 Threats, Vulnerabilities, Attack Vectors & Mitigations"
  },
  {
    "id": "e4-q87",
    "examSet": "Practice Exam 4",
    "examNum": 4,
    "questionNumber": 87,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "B",
    "explanation": "Correct Answer: B\n\nC. Avoidance is incorrect. Avoidance eliminates the risk by not undertaking the activity at all; here the company keeps\nthe vulnerable test environment running, so it has not avoided the risk. B. Acceptance is correct. Choosing to leave a\nlow-exposure vulnerability unpatched is a deliberate decision to tolerate the risk without further action \u2014 the definition\nof risk acceptance, appropriate when the potential impact is judged low. D. Mitigation is incorrect. Mitigation would\nreduce the risk by applying a control such as patching or segmentation; the company explicitly decides not to patch. A.\nTransfer is incorrect. Transfer shifts the financial consequences to a third party (for example via insurance or\noutsourcing); no such shift occurs here.",
    "question": "Scenario: A company decides not to patch a vulnerability in an internal test environment because it has no\nexternal exposure. What risk response strategy is this?",
    "options": [
      "Transfer",
      "Acceptance",
      "Avoidance",
      "Mitigation"
    ],
    "correctOption": 1,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e4-q88",
    "examSet": "Practice Exam 4",
    "examNum": 4,
    "questionNumber": 88,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "B",
    "explanation": "Correct Answer: B\n\nC. Detective is incorrect. A detective control identifies that something has gone wrong (e.g., an IDS alert or log review)\n\u2014 disabling a protocol is an active prevention action, not detection. B. Preventive is correct. Disabling SMBv1 removes\na known vulnerable protocol from all servers before it can be exploited, directly preventing attacks like\nEternalBlue/WannaCry from succeeding. This is a hardening action that reduces the attack surface proactively. D.\nCompensating is incorrect. A compensating control substitutes for a missing primary control \u2014 disabling an\nunnecessary protocol is a direct primary preventive action, not a substitute. A. Physical is incorrect. Physical controls\nprotect the physical environment; disabling a network protocol is a technical, logical control.",
    "question": "A security analyst disables SMBv1 across all servers. What type of control is this?",
    "options": [
      "Physical",
      "Preventive",
      "Detective",
      "Compensating"
    ],
    "correctOption": 1,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e4-q89",
    "examSet": "Practice Exam 4",
    "examNum": 4,
    "questionNumber": 89,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "A",
    "explanation": "Correct Answer: A\n\nB. Rule-based monitoring is incorrect because it triggers on administrator-defined rules and thresholds, not on\nstatistical deviation from a learned baseline. C. Signature-based monitoring is incorrect because it matches activity\nagainst known patterns of malicious behavior rather than measuring deviation from normal activity. A. Anomaly-based\nmonitoring is correct: it establishes a statistical baseline of normal behavior and flags activity that deviates significantly\nfrom that baseline. D. Heuristic monitoring is incorrect because it applies experience-based rules and approximations\nto judge whether activity is suspicious, rather than comparing activity against a statistical baseline.",
    "question": "Which type of monitoring methodology looks for statistical deviations from a baseline?",
    "options": [
      "Anomaly-based monitoring",
      "Rule-based monitoring",
      "Signature-based monitoring",
      "Heuristic monitoring"
    ],
    "correctOption": 0,
    "isMultiSelect": false,
    "domainId": 1,
    "domain": "Domain 1: General Security Concepts",
    "objective": "1.1-1.4 Security Controls, Cryptography, Identity & Access Management"
  },
  {
    "id": "e4-q90",
    "examSet": "Practice Exam 4",
    "examNum": 4,
    "questionNumber": 90,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "D",
    "explanation": "Correct Answer: D\n\nB. Real-time network analytics is incorrect. It observes live traffic as it happens; it does not preserve a suspect\nsystem\u2019s disk contents for later, repeatable examination. D. Immutable system image is correct. A write-protected,\nhash-verified image of the suspect system\u2019s storage preserves the evidence in its original state, supporting forensic\nacquisition and preservation and allowing analysis to be repeated offline without altering the source. A. Log rotation\nschedule is incorrect. Rotation manages log storage over time and can overwrite older entries \u2014 the opposite of\nevidence preservation. C. Automated patch deployment is incorrect. Patching changes system state and serves\nmaintenance, not evidence preservation.",
    "question": "Which artifact is MOST useful for preserving a suspect system\u2019s disk evidence for repeatable offline\nforensic analysis?",
    "options": [
      "Log rotation schedule",
      "Real-time network analytics",
      "Automated patch deployment",
      "Immutable system image"
    ],
    "correctOption": 3,
    "isMultiSelect": false,
    "domainId": 4,
    "domain": "Domain 4: Security Operations",
    "objective": "4.1-4.4 Security Operations, Monitoring, Incident Response & Forensics"
  },
  {
    "id": "e5-q01",
    "examSet": "Practice Exam 5",
    "examNum": 5,
    "questionNumber": 1,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "A",
    "explanation": "Correct Answer: A\n\nA. A DDoS mitigation and traffic-scrubbing service is correct. Dedicated DDoS mitigation (on-premises appliances or\ncloud scrubbing providers) absorbs and filters volumetric, protocol, and application-layer attack traffic before it reaches\nthe target, which is exactly what Ada is researching. B. A DNS sinkhole for known-malicious domain queries is\nincorrect. A DNS sinkhole answers queries for known-bad domains with a controlled address so that malware cannot\nreach its command-and-control server; it blocks outbound malicious name resolution and does nothing to absorb\ninbound attack traffic aimed at Ada's services. C. A MAC address pit filter appliance is incorrect: it is not a real security\ntechnology, the term is a distractor. D. An IP denier gateway appliance is incorrect: it is likewise not a recognized\nsecurity control.",
    "question": "Ada is researching DDoS mitigations for her company. Which of the following should Ada consider?",
    "options": [
      "A DDoS mitigation and traffic-scrubbing service",
      "A DNS sinkhole for known-malicious domain queries",
      "A MAC address pit filter appliance",
      "An IP denier gateway appliance"
    ],
    "correctOption": 0,
    "isMultiSelect": false,
    "domainId": 3,
    "domain": "Domain 3: Security Architecture",
    "objective": "3.1-3.4 Security Architecture, Cloud, Infrastructure & Resilience"
  },
  {
    "id": "e5-q02",
    "examSet": "Practice Exam 5",
    "examNum": 5,
    "questionNumber": 2,
    "questionType": "Matching",
    "correctAnswerRaw": "1 = C; 2 = D; 3 = F; 4 = E; 5 = G",
    "explanation": "Correct Answer: 1 = C; 2 = D; 3 = F; 4 = E; 5 = G\n\n1 \u2192 C (Preventive): encrypting a database before storage stops unauthorized disclosure before it can happen. 2 \u2192 D\n(Deterrent): a posted warning of 24/7 video monitoring discourages a would-be attacker without physically stopping\nanyone. 3 \u2192 F (Detective): reviewing SIEM logs identifies suspicious activity after it has occurred. 4 \u2192 E (Corrective):\nrestoring servers from backup returns operations to normal after a ransomware incident. 5 \u2192 G (Directive): an\nacceptable use policy mandates how employees must behave. Unused: A (Compensating) \u2014 no\nalternative-for-a-missing-control example is shown; B (Physical) \u2014 this set names control types by function, and no\ntangible barrier is listed.",
    "question": "Identify the control type that each measure below illustrates.",
    "matchingItems": [
      {
        "num": 1,
        "text": "Encrypting a database before it is stored",
        "correctLetter": "C"
      },
      {
        "num": 2,
        "text": "A posted warning that the site is under 24/7 video monitoring",
        "correctLetter": "D"
      },
      {
        "num": 3,
        "text": "Reviewing SIEM logs for anomalies",
        "correctLetter": "F"
      },
      {
        "num": 4,
        "text": "Restoring servers from backup after ransomware",
        "correctLetter": "E"
      },
      {
        "num": 5,
        "text": "An acceptable use policy directing employee behavior",
        "correctLetter": "G"
      }
    ],
    "matchingDescriptions": [
      {
        "letter": "A",
        "text": "Compensating: an alternative used when a primary control is not feasible"
      },
      {
        "letter": "B",
        "text": "Physical: protects the tangible environment with barriers"
      },
      {
        "letter": "C",
        "text": "Preventive: stops an incident before it occurs"
      },
      {
        "letter": "D",
        "text": "Deterrent: discourages a would-be attacker"
      },
      {
        "letter": "E",
        "text": "Corrective: restores normal operation after an incident"
      },
      {
        "letter": "F",
        "text": "Detective: identifies an incident after it occurs"
      },
      {
        "letter": "G",
        "text": "Directive: instructs or mandates required behavior"
      }
    ],
    "correctMapping": {
      "1": "C",
      "2": "D",
      "3": "F",
      "4": "E",
      "5": "G"
    },
    "options": [
      "A. Compensating: an alternative used when a primary control is not feasible",
      "B. Physical: protects the tangible environment with barriers",
      "C. Preventive: stops an incident before it occurs",
      "D. Deterrent: discourages a would-be attacker",
      "E. Corrective: restores normal operation after an incident",
      "F. Detective: identifies an incident after it occurs",
      "G. Directive: instructs or mandates required behavior"
    ],
    "correctOption": 0,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e5-q03",
    "examSet": "Practice Exam 5",
    "examNum": 5,
    "questionNumber": 3,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "D",
    "explanation": "Correct Answer: D\n\nC. SQL injection is incorrect. SQLi injects malicious database queries to read or alter back-end data on the server; it\ndoes not run script in the victim's browser. D. Cross-site scripting (XSS) is correct. XSS injects malicious script into a\nweb page so that it executes in the context of another user's browser, enabling actions such as session token theft or\ncontent manipulation. A. Command injection is incorrect. Command injection runs operating-system commands on the\nserver hosting the application, not code inside the browser. B. Session hijacking is incorrect. Session hijacking steals\nor reuses a valid session token to impersonate a user; it is not the execution of code within the browser.",
    "question": "Which vulnerability type allows attackers to execute malicious code in the context of a web browser?",
    "options": [
      "Command injection",
      "Session hijacking",
      "SQL injection",
      "Cross-site scripting (XSS)"
    ],
    "correctOption": 3,
    "isMultiSelect": false,
    "domainId": 2,
    "domain": "Domain 2: Threats, Vulnerabilities & Mitigations",
    "objective": "2.1-2.4 Threats, Vulnerabilities, Attack Vectors & Mitigations"
  },
  {
    "id": "e5-q04",
    "examSet": "Practice Exam 5",
    "examNum": 5,
    "questionNumber": 4,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "A",
    "explanation": "Correct Answer: A\n\nA. Stateful packet-filtering firewall is correct: it maintains a connection state table and drops incoming packets that do\nnot belong to a connection initiated by an internal endpoint, which is exactly the behavior Astri sees in the log. D.\nApplication-layer firewall is incorrect because it filters based on application-level content and protocol commands, not\non whether an internal endpoint initiated the connection. C. Proxy firewall is incorrect because it terminates and\nre-establishes connections on behalf of clients; the log describes state-based dropping, not proxied sessions. B.\nStateless packet-filtering firewall is incorrect because it evaluates each packet in isolation against static rules and\ncannot know whether the internal endpoint originally created the request.",
    "question": "Astri is reviewing a log file of a new firewall. She notes that the log indicates packets are being dropped for\nincoming packets for which the internal endpoint did not initially create the request. What kind of firewall is\nthis?",
    "options": [
      "Stateful packet-filtering firewall",
      "Stateless packet-filtering firewall",
      "Proxy firewall",
      "Application-layer firewall"
    ],
    "correctOption": 0,
    "isMultiSelect": false,
    "domainId": 4,
    "domain": "Domain 4: Security Operations",
    "objective": "4.1-4.4 Security Operations, Monitoring, Incident Response & Forensics"
  },
  {
    "id": "e5-q05",
    "examSet": "Practice Exam 5",
    "examNum": 5,
    "questionNumber": 5,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "A",
    "explanation": "Correct Answer: A\n\nA. Prevent selected applications from launching based on their power consumption is the correct answer: a UPS\nsupplies and manages power, and neither the unit nor its management software controls which applications are\nallowed to start. B. Provide temporary battery power during an outage is not the answer because battery backup is the\ncore function of every UPS. D. Signal a connected server to begin a graceful shutdown is not the answer because\nUPS management software commonly initiates orderly shutdowns when battery reserve runs low. C. Send\npower-failure and low-battery alerts is not the answer because notifications are a standard feature of UPS\nmanagement software.",
    "question": "Emma is reading the documentation for the new UPS that just arrived. Which of the following will the new\nUPS NOT perform?",
    "options": [
      "Prevent selected applications from launching based on their power consumption",
      "Provide temporary battery power during an outage",
      "Send power-failure and low-battery alerts through UPS management software",
      "Signal a connected server to begin a graceful shutdown through UPS management software"
    ],
    "correctOption": 0,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e5-q06",
    "examSet": "Practice Exam 5",
    "examNum": 5,
    "questionNumber": 6,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "B",
    "explanation": "Correct Answer: B\n\nC. MOU is incorrect. A Memorandum of Understanding is a non-binding, high-level statement of intent between parties\nand does not define measurable performance metrics. B. SLA is correct. A Service Level Agreement is a formal,\ndocumented contract that specifies measurable performance expectations such as uptime, response time, and\nremediation timelines between a provider and a customer. A. NDA is incorrect. A Non-Disclosure Agreement protects\nconfidentiality of shared information; it does not define service performance. D. BPA is incorrect. A Business\nPartnership Agreement outlines ownership, profit-sharing, and responsibilities between partners, not performance\nmetrics between organizations.",
    "question": "Fill in the blank: A __________ is a documented agreement that outlines performance expectations\nbetween two organizations.",
    "options": [
      "NDA",
      "SLA",
      "MOU",
      "BPA"
    ],
    "correctOption": 1,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e5-q07",
    "examSet": "Practice Exam 5",
    "examNum": 5,
    "questionNumber": 7,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "D",
    "explanation": "Correct Answer: D\n\nA. MXIAs is incorrect because it is not a recognized type of provider. C. MPSs is incorrect because it is not the term for\nan outsourced security provider. D. MSSPs is correct because Managed Security Service Providers are the third\nparties that deliver outsourced monitoring and management of an organization's security systems, which is what the\nCEO wants to procure. B. MSSOs is incorrect because it is not an established term.",
    "question": "The CEO is frustrated by the high costs associated with security at the organization and wants to look at a\nthird party assuming part of their cybersecurity defenses. Emeric has been asked to look into acquiring\nrequests for proposals (RFPs) from different third parties. What are these third-party organizations called?",
    "options": [
      "MXIAs",
      "MSSOs",
      "MPSs",
      "MSSPs"
    ],
    "correctOption": 3,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e5-q08",
    "examSet": "Practice Exam 5",
    "examNum": 5,
    "questionNumber": 8,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "C",
    "explanation": "Correct Answer: C\n\nB. Isolate wireless interfaces is incorrect. Disabling radios can prevent remote wiping of a seized device, but that is not\nthe function of a write blocker. D. Log attacker keystrokes is incorrect. Keystroke capture is a monitoring or keylogging\nfunction, unrelated to forensic imaging. C. Prevent modification of original data is correct. A write blocker sits between\nthe investigator's system and the source media and permits reads while blocking any writes, preserving the integrity of\nthe original evidence so the acquisition is forensically sound. A. Disconnect endpoints from cloud is incorrect. Severing\ncloud connectivity is a containment action, not the role of a write blocker.",
    "question": "What is the purpose of a write blocker during forensic investigations?",
    "options": [
      "Disconnect endpoints from cloud",
      "Isolate wireless interfaces",
      "Prevent modification of original data",
      "Log attacker keystrokes"
    ],
    "correctOption": 2,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e5-q09",
    "examSet": "Practice Exam 5",
    "examNum": 5,
    "questionNumber": 9,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "D",
    "explanation": "Correct Answer: D\n\nC. Accept the risk and log it is incorrect. Accepting a documented, known vulnerability without validation is negligent\nwhen a fix may be available. A. Conduct a broad vulnerability scan of the entire environment is incorrect. An\nenvironment-wide scan is slower and less focused than confirming the specific reported CVE on the affected asset. B.\nPerform a penetration test is incorrect. A pen test is a larger engagement; it is disproportionate as an immediate first\nstep when a specific CVE is already reported. D. Review the affected system and patch if verified is correct. The\nappropriate first step is to confirm whether the reported CVE actually applies to the organization\u2019s configuration and\nversion, then remediate via patching or compensating controls.",
    "question": "A company receives a report from an external vendor that their website is vulnerable to a known CVE.\nWhat is the best initial step?",
    "options": [
      "Conduct a broad vulnerability scan of the entire environment",
      "Perform a penetration test",
      "Accept the risk and log it",
      "Review the affected system and patch if verified"
    ],
    "correctOption": 3,
    "isMultiSelect": false,
    "domainId": 2,
    "domain": "Domain 2: Threats, Vulnerabilities & Mitigations",
    "objective": "2.1-2.4 Threats, Vulnerabilities, Attack Vectors & Mitigations"
  },
  {
    "id": "e5-q10",
    "examSet": "Practice Exam 5",
    "examNum": 5,
    "questionNumber": 10,
    "questionType": "Matching",
    "correctAnswerRaw": "1 = C; 2 = A; 3 = D; 4 = B",
    "explanation": "Correct Answer: 1 = C; 2 = A; 3 = D; 4 = B\n\nSymmetric encryption matches \"Uses the same key for encryption and decryption\" because algorithms like AES use\none shared secret for both operations, enabling fast bulk encryption. Asymmetric encryption matches \"Uses two keys:\npublic and private\" since schemes like RSA or ECC rely on a mathematically linked key pair where one key encrypts\nand the other decrypts. Hashing matches \"Converts data into irreversible fixed-length value\" because algorithms such\nas SHA-256 produce a one-way digest used for integrity rather than confidentiality. Tokenization matches \"Replaces\nsensitive values with placeholders\" since tokens are random substitutes stored alongside a secure mapping to the\noriginal data, protecting the real value from exposure.",
    "question": "Match each encryption method with its characteristic.",
    "matchingItems": [
      {
        "num": 1,
        "text": "Symmetric encryption",
        "correctLetter": "C"
      },
      {
        "num": 2,
        "text": "Asymmetric encryption",
        "correctLetter": "A"
      },
      {
        "num": 3,
        "text": "Hashing",
        "correctLetter": "D"
      },
      {
        "num": 4,
        "text": "Tokenization",
        "correctLetter": "B"
      }
    ],
    "matchingDescriptions": [
      {
        "letter": "A",
        "text": "Uses two keys: public and private"
      },
      {
        "letter": "B",
        "text": "Replaces sensitive values with placeholders"
      },
      {
        "letter": "C",
        "text": "Uses the same key for encryption and decryption"
      },
      {
        "letter": "D",
        "text": "Converts data into irreversible fixed-length value"
      }
    ],
    "correctMapping": {
      "1": "C",
      "2": "A",
      "3": "D",
      "4": "B"
    },
    "options": [
      "A. Uses two keys: public and private",
      "B. Replaces sensitive values with placeholders",
      "C. Uses the same key for encryption and decryption",
      "D. Converts data into irreversible fixed-length value"
    ],
    "correctOption": 0,
    "domainId": 1,
    "domain": "Domain 1: General Security Concepts",
    "objective": "1.1-1.4 Security Controls, Cryptography, Identity & Access Management"
  },
  {
    "id": "e5-q11",
    "examSet": "Practice Exam 5",
    "examNum": 5,
    "questionNumber": 11,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "C",
    "explanation": "Correct Answer: C\n\nB. Security event log monitoring and review is incorrect. Reviewing logs is a technical, detective control implemented\nin software, not a physical safeguard. C. Smart card-controlled door access is correct. A smart card reader that gates\nbodily entry through a door is a physical control; the tangible badge and reader are the enforcement mechanism. D.\nSite-to-site VPN tunnel is incorrect. A VPN is a technical control that encrypts network traffic between sites; it has no\nphysical component. A. MAC address filtering on access points is incorrect. Filtering by MAC address is a technical\nnetwork control configured in software on switches or wireless access points.",
    "question": "Which of the following is considered a physical control?",
    "options": [
      "MAC address filtering on access points",
      "Security event log monitoring and review",
      "Smart card-controlled door access",
      "Site-to-site VPN tunnel"
    ],
    "correctOption": 2,
    "isMultiSelect": false,
    "domainId": 1,
    "domain": "Domain 1: General Security Concepts",
    "objective": "1.1-1.4 Security Controls, Cryptography, Identity & Access Management"
  },
  {
    "id": "e5-q12",
    "examSet": "Practice Exam 5",
    "examNum": 5,
    "questionNumber": 12,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "A",
    "explanation": "Correct Answer: A\n\nA (Outsourcing risk to a third party like an insurer) is correct: transference shifts the financial impact of a risk onto\nanother party through cyber insurance or a contract with a service provider, even though accountability for the data\nusually stays with the organisation. D (Accepting all known risks without any mitigation) is incorrect because that is risk\nacceptance, where the organisation knowingly carries the impact itself. B (Ignoring low-impact threats without\ndocumenting them) is incorrect because ignoring a risk is informal acceptance at best and hands nothing to a third\nparty. C (Deleting the sensitive data and retiring the system) is incorrect because removing the asset altogether is risk\navoidance: the exposure is eliminated rather than transferred to someone else.",
    "question": "What does risk transference involve?",
    "options": [
      "Outsourcing risk to a third party like an insurer",
      "Ignoring low-impact threats without documenting them",
      "Deleting the sensitive data and retiring the system",
      "Accepting all known risks without any mitigation"
    ],
    "correctOption": 0,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e5-q13",
    "examSet": "Practice Exam 5",
    "examNum": 5,
    "questionNumber": 13,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "A",
    "explanation": "Correct Answer: A\n\nB. MFA is incorrect. Multifactor authentication combines factors from different categories (something you know, have,\nor are); it is not defined by contextual attributes such as location, device, and time. D. Federation is incorrect.\nFederation lets one organization trust identities issued by another so users can log in across domains; it does not\nevaluate contextual attributes to grant access. A. Context-aware authentication is correct. This approach evaluates\ncontextual signals such as location, device posture, and time of day to make an adaptive, risk-based access decision.\nC. Biometric login is incorrect. Biometrics is a single 'something you are' factor and does not weigh location, device,\nand time.",
    "question": "Which authentication method uses multiple attributes like location, device, and time to allow access?",
    "options": [
      "Context-aware authentication",
      "MFA",
      "Biometric login",
      "Federation"
    ],
    "correctOption": 0,
    "isMultiSelect": false,
    "domainId": 1,
    "domain": "Domain 1: General Security Concepts",
    "objective": "1.1-1.4 Security Controls, Cryptography, Identity & Access Management"
  },
  {
    "id": "e5-q14",
    "examSet": "Practice Exam 5",
    "examNum": 5,
    "questionNumber": 14,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "A",
    "explanation": "Correct Answer: A\n\nA. Correct \u2014 a file-based virus is malicious code that attaches to or becomes part of a legitimate file, infecting it and\nspreading to other files when the host file is executed. B. \"Jump virus\" is not a recognized category of computer virus.\nC. A fileless virus resides in memory and abuses legitimate tools rather than becoming part of a file on disk, so it does\nnot match the description. D. \"RAM-Check virus\" is not a real virus type; it is a fabricated term.",
    "question": "Which of the following types of computer viruses is malicious computer code that becomes part of a file?",
    "options": [
      "File-based virus",
      "Jump virus",
      "Fileless virus",
      "RAM-Check virus"
    ],
    "correctOption": 0,
    "isMultiSelect": false,
    "domainId": 1,
    "domain": "Domain 1: General Security Concepts",
    "objective": "1.1-1.4 Security Controls, Cryptography, Identity & Access Management"
  },
  {
    "id": "e5-q15",
    "examSet": "Practice Exam 5",
    "examNum": 5,
    "questionNumber": 15,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "D",
    "explanation": "Correct Answer: D\n\nA. Drive-by download is incorrect. A drive-by download infects a visitor automatically through a compromised or\nmalicious web page, without presenting a fake update prompt or requiring the user to run an installer. C. Typosquatting\nis incorrect. Typosquatting registers lookalike domain names to catch users who mistype an address; it is not the\ndelivery of a fake update. B. Malvertising is incorrect. Malvertising delivers malicious code through online\nadvertisements; while it can redirect users, it is not specifically the fake-update lure described here. D. Fake update\nattack is correct. Attackers present a bogus software or browser update prompt so the victim voluntarily downloads\nand installs the malicious payload, believing it is a legitimate update.",
    "question": "Which technique is used by attackers to trick users into installing malware through legitimate- looking\nsoftware updates?",
    "options": [
      "Drive-by download",
      "Malvertising",
      "Typosquatting",
      "Fake update attack"
    ],
    "correctOption": 3,
    "isMultiSelect": false,
    "domainId": 2,
    "domain": "Domain 2: Threats, Vulnerabilities & Mitigations",
    "objective": "2.1-2.4 Threats, Vulnerabilities, Attack Vectors & Mitigations"
  },
  {
    "id": "e5-q16",
    "examSet": "Practice Exam 5",
    "examNum": 5,
    "questionNumber": 16,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "C",
    "explanation": "Correct Answer: C\n\nC. Threat hunting is correct \u2014 it is the proactive practice in which analysts form hypotheses and actively search\nsystems, logs, and data for adversary activity that automated controls have not detected. A. Machine learning is\nincorrect \u2014 it is an analytical technique that can support detection, not a defensive practice in itself. D. Data analytics\nis incorrect \u2014 analyzing data is a general capability, not the named proactive search for undetected intrusions. B.\nSecurity operations center (SOC) is incorrect \u2014 a SOC is the organizational team and facility where monitoring and\nhunting take place, not the practice itself.",
    "question": "Which option describes a proactive defensive practice in which analysts search for previously undetected\nadversary activity?",
    "options": [
      "Machine learning",
      "Security operations center (SOC)",
      "Threat hunting",
      "Data analytics"
    ],
    "correctOption": 2,
    "isMultiSelect": false,
    "domainId": 4,
    "domain": "Domain 4: Security Operations",
    "objective": "4.1-4.4 Security Operations, Monitoring, Incident Response & Forensics"
  },
  {
    "id": "e5-q17",
    "examSet": "Practice Exam 5",
    "examNum": 5,
    "questionNumber": 17,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "D",
    "explanation": "Correct Answer: D\n\nD (Orchestration) is correct: orchestration is the coordination of many separate automated tasks and processes so that\nthey run together as a single workflow. In security operations this is what SOAR platforms deliver: they ingest alerts,\nrun playbooks, and chain actions such as IP blocking, user isolation, and ticket creation across multiple tools. C\n(Multitask combination (MTC)) is incorrect because it is not a recognized Security+ term for combining automated\nprocesses. B (Cybersecurity automation) is incorrect because automation refers to a single task being performed\nwithout human intervention, such as a script that blocks an IP address; orchestration is the higher-level combining of\nmany such tasks. A (Autoflow) is incorrect because it is not a standard security operations term; the objectives\ndescribe the combination of automated tasks as orchestration.",
    "question": "Which of the following involves the automation and combination of many different tasks and processes?",
    "options": [
      "Autoflow",
      "Cybersecurity automation",
      "Multitask combination (MTC)",
      "Orchestration"
    ],
    "correctOption": 3,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e5-q18",
    "examSet": "Practice Exam 5",
    "examNum": 5,
    "questionNumber": 18,
    "questionType": "Matching",
    "correctAnswerRaw": "1 = A; 2 = C; 3 = B; 4 = D",
    "explanation": "Correct Answer: 1 = A; 2 = C; 3 = B; 4 = D\n\nThe correct mapping is: Full backup offers the fastest restore time because all data is contained in a single backup set,\nbut it requires the most storage and takes the longest to complete. Incremental backup requires all backups in\nsequence \u2014 the last full plus every incremental since \u2014 meaning restore requires assembling many files but each\nbackup is small and fast. Differential backup has moderate speed and larger file sizes because it captures everything\nchanged since the last full backup, requiring only two backup sets to restore. Snapshot provides instant rollback to a\nspecific point in time, typically used in virtualized environments for near-instant recovery.",
    "question": "Match each backup strategy with its recovery priority.",
    "matchingItems": [
      {
        "num": 1,
        "text": "Full",
        "correctLetter": "A"
      },
      {
        "num": 2,
        "text": "Incremental",
        "correctLetter": "C"
      },
      {
        "num": 3,
        "text": "Differential",
        "correctLetter": "B"
      },
      {
        "num": 4,
        "text": "Snapshot",
        "correctLetter": "D"
      }
    ],
    "matchingDescriptions": [
      {
        "letter": "A",
        "text": "Fastest restore; largest storage"
      },
      {
        "letter": "B",
        "text": "Moderate speed, larger files"
      },
      {
        "letter": "C",
        "text": "Requires all backups in sequence"
      },
      {
        "letter": "D",
        "text": "Instant rollback at a point in time"
      }
    ],
    "correctMapping": {
      "1": "A",
      "2": "C",
      "3": "B",
      "4": "D"
    },
    "options": [
      "A. Fastest restore; largest storage",
      "B. Moderate speed, larger files",
      "C. Requires all backups in sequence",
      "D. Instant rollback at a point in time"
    ],
    "correctOption": 0,
    "domainId": 1,
    "domain": "Domain 1: General Security Concepts",
    "objective": "1.1-1.4 Security Controls, Cryptography, Identity & Access Management"
  },
  {
    "id": "e5-q19",
    "examSet": "Practice Exam 5",
    "examNum": 5,
    "questionNumber": 19,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "D",
    "explanation": "Correct Answer: D\n\nB. Ensuring only authorized users can access data is incorrect. This describes confidentiality \u2014 the 'C' in CIA \u2014 which\nfocuses on restricting information access to authorized parties. A. Making sure systems are always online is incorrect.\nThis describes availability \u2014 the 'A' in CIA \u2014 which ensures resources are accessible when needed. D. Ensuring data\nis not altered without authorization is correct. Integrity guarantees that data remains accurate and unmodified except\nthrough authorized processes, often verified using hashing or digital signatures. C. Encrypting all traffic on a network is\nincorrect. Encryption supports confidentiality but is not itself the definition of integrity in the CIA triad.",
    "question": "Which of the following best describes the concept of integrity in the CIA triad?",
    "options": [
      "Making sure systems are always online",
      "Ensuring only authorized users can access data",
      "Encrypting all traffic on a network",
      "Ensuring data is not altered without authorization"
    ],
    "correctOption": 3,
    "isMultiSelect": false,
    "domainId": 1,
    "domain": "Domain 1: General Security Concepts",
    "objective": "1.1-1.4 Security Controls, Cryptography, Identity & Access Management"
  },
  {
    "id": "e5-q20",
    "examSet": "Practice Exam 5",
    "examNum": 5,
    "questionNumber": 20,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "D",
    "explanation": "Correct Answer: D\n\nC. GDPR is incorrect. The General Data Protection Regulation governs personal data protection and privacy for\nindividuals in the European Union, not U.S. healthcare data specifically. D. HIPAA is correct. The Health Insurance\nPortability and Accountability Act is the U.S. regulation that sets requirements for safeguarding protected health\ninformation (PHI) held by healthcare providers, plans, and their business associates. B. SOX is incorrect. The\nSarbanes-Oxley Act governs financial reporting and corporate accountability for U.S. public companies, not healthcare\ninformation. A. CCPA is incorrect. The California Consumer Privacy Act addresses consumer privacy rights for\nCalifornia residents broadly; it is not the regulation specifically concerned with healthcare information.",
    "question": "Which regulation is MOST concerned with the handling of healthcare information in the U.S.?",
    "options": [
      "CCPA",
      "SOX",
      "GDPR",
      "HIPAA"
    ],
    "correctOption": 3,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e5-q21",
    "examSet": "Practice Exam 5",
    "examNum": 5,
    "questionNumber": 21,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "A",
    "explanation": "Correct Answer: A\n\nA is correct (Maintenance window): a maintenance window is a pre-approved period chosen to minimize disruption\nwhile a change and any service restart are performed. D is incorrect (Backout plan): a backout plan is the rollback\nprocedure used if the change fails, not the timing of the work. C is incorrect (Impact analysis): impact analysis\nassesses risk and consequences beforehand but does not schedule the work. B is incorrect (Version control): version\ncontrol tracks changes to files and configurations over time and is unrelated to choosing a low-traffic time slot.",
    "question": "An administrator schedules a firewall firmware upgrade for Sunday between 2 a.m. and 4 a.m., when\nalmost no users are online, to limit the effect of the required service restart. Which change-management\nconcept does this scheduling represent?",
    "options": [
      "Maintenance window",
      "Version control",
      "Impact analysis",
      "Backout plan"
    ],
    "correctOption": 0,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e5-q22",
    "examSet": "Practice Exam 5",
    "examNum": 5,
    "questionNumber": 22,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "A",
    "explanation": "Correct Answer: A\n\nD. Phishing is incorrect because it is a social-engineering attack that lures victims with deceptive messages; it does\nnot describe redirecting a correctly typed URL through DNS or hosts-file manipulation. C. DNS spoofing is incorrect\nbecause it names the underlying technique of corrupting name resolution, not the overall user-facing attack described\nin the stem. A. Pharming is correct: it is the overall attack in which DNS poisoning or hosts-file modification sends a\nuser who typed the legitimate URL to a fraudulent replica of the site. B. Typosquatting is incorrect because it relies on\nthe attacker registering misspelled domains and the user mistyping the address, not on manipulating name resolution.",
    "question": "Fill in the blank: __________ is the overall attack in which DNS poisoning or hosts-file modification\nredirects a user who entered the correct URL to a fraudulent replica of a legitimate website.",
    "options": [
      "Pharming",
      "Typosquatting",
      "DNS spoofing",
      "Phishing"
    ],
    "correctOption": 0,
    "isMultiSelect": false,
    "domainId": 2,
    "domain": "Domain 2: Threats, Vulnerabilities & Mitigations",
    "objective": "2.1-2.4 Threats, Vulnerabilities, Attack Vectors & Mitigations"
  },
  {
    "id": "e5-q23",
    "examSet": "Practice Exam 5",
    "examNum": 5,
    "questionNumber": 23,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "D",
    "explanation": "Correct Answer: D\n\nA. Identifying vulnerabilities by scanning systems and networks applies - it is the core function of a vulnerability scan.\nB. Reporting discovered weaknesses with severity ratings so administrators can prioritize remediation applies - scan\noutput is ranked by severity (commonly with CVSS scores) and feeds the remediation workflow. C. Using primarily\nautomated checks with some manual validation applies - scans are largely automated with limited manual review to\nweed out false positives. D. Simulating adversarial exploitation to determine whether vulnerabilities are exploitable is\nthe exception: actively exploiting weaknesses like a threat actor characterizes penetration testing, not vulnerability\nscanning.",
    "question": "Which of the following does NOT apply to a vulnerability scan?",
    "options": [
      "Identify vulnerabilities by scanning systems and networks",
      "Report discovered weaknesses with severity ratings so administrators can prioritize remediation",
      "Use primarily automated checks with some manual validation",
      "Simulate adversarial exploitation to determine whether vulnerabilities are exploitable"
    ],
    "correctOption": 3,
    "isMultiSelect": false,
    "domainId": 4,
    "domain": "Domain 4: Security Operations",
    "objective": "4.1-4.4 Security Operations, Monitoring, Incident Response & Forensics"
  },
  {
    "id": "e5-q24",
    "examSet": "Practice Exam 5",
    "examNum": 5,
    "questionNumber": 24,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "D",
    "explanation": "Correct Answer: D\n\nA. Compress them using gzip is incorrect. Compression saves storage but does nothing to detect or prevent\nmodification of the log contents. C. Forward them to a syslog server is incorrect. Centralizing logs helps, but a syslog\nserver does not by itself prove the records were not altered in transit or after arrival unless integrity protection is added.\nD. Digitally sign or hash them is correct. Computing a cryptographic hash or digital signature over each log or batch\nlets you detect any later modification, because altered data produces a different hash; signing also proves origin. This\nis the standard way to guarantee log integrity. B. Archive them on the same host is incorrect. Keeping logs on the\noriginating host leaves them within reach of an attacker who compromises that host and can edit or delete them.",
    "question": "What is the most appropriate method to ensure that logs are not tampered with after collection?",
    "options": [
      "Compress them using gzip",
      "Archive them on the same host",
      "Forward them to a syslog server",
      "Digitally sign or hash them"
    ],
    "correctOption": 3,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e5-q25",
    "examSet": "Practice Exam 5",
    "examNum": 5,
    "questionNumber": 25,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "D",
    "explanation": "Correct Answer: D\n\nC. Encrypted data is incorrect. JSON and XML are plaintext formats; encryption is a protection that may be applied to\ndata, not a property of these formats themselves. D. Human-readable data is correct. JSON and XML are text-based\nformats that a person can open and interpret directly, which places them in the human-readable category of data\ntypes. A. Regulated data is incorrect. Regulated data is defined by the legal obligations attached to its content, such as\nhealth or payment data, not by the file format used to store it. B. Non-human-readable data is incorrect.\nNon-human-readable data, such as binary files or compiled code, cannot be directly interpreted by a person, unlike\nJSON and XML.",
    "question": "JSON and XML would be classified as which type of data?",
    "options": [
      "Regulated data",
      "Non-human-readable data",
      "Encrypted data",
      "Human-readable data"
    ],
    "correctOption": 3,
    "isMultiSelect": false,
    "domainId": 1,
    "domain": "Domain 1: General Security Concepts",
    "objective": "1.1-1.4 Security Controls, Cryptography, Identity & Access Management"
  },
  {
    "id": "e5-q26",
    "examSet": "Practice Exam 5",
    "examNum": 5,
    "questionNumber": 26,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "D",
    "explanation": "Correct Answer: D\n\nA. Accept all low-impact risks is incorrect. Broad acceptance of risk is characteristic of a high (expansionary) risk\nappetite, the opposite of a conservative posture. D. Implement strict access controls is correct. A low risk appetite\nmeans the organization tolerates little risk, so it applies stronger mitigations, such as tight access controls, least\nprivilege, and layered defenses, to drive residual risk down. C. Increase data retention times is incorrect. Retaining\nmore data typically increases exposure and liability, which raises rather than reduces risk. B. Disable redundant\nlogging is incorrect. Removing logging weakens detection and forensic capability, increasing risk, the wrong move for\na risk-averse organization.",
    "question": "An organization has a low risk appetite. What action will they MOST LIKELY take?",
    "options": [
      "Accept all low-impact risks",
      "Disable redundant logging",
      "Increase data retention times",
      "Implement strict access controls"
    ],
    "correctOption": 3,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e5-q27",
    "examSet": "Practice Exam 5",
    "examNum": 5,
    "questionNumber": 27,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "C",
    "explanation": "Correct Answer: C\n\nC. Make routing and policy decisions and program network devices is correct. In software-defined networking the\ncontrol plane is centralized in the controller: it computes routes, defines security and traffic policies, and pushes the\nresulting forwarding rules down to switches and routers. A. Forward packets using installed forwarding rules is\nincorrect \u2014 executing already-installed rules on live traffic is the data plane's job. B. Handle email delivery is incorrect\n\u2014 mail delivery is an application-layer service provided by mail servers, unrelated to network planes. D. Back up\nendpoints is incorrect \u2014 endpoint backup is a data-protection task handled by backup software, not a function of any\nnetwork plane.",
    "question": "In an SDN architecture, what is a primary function of the control plane?",
    "options": [
      "Forward packets using installed forwarding rules",
      "Handle email delivery",
      "Make routing and policy decisions and program network devices",
      "Back up endpoints"
    ],
    "correctOption": 2,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e5-q28",
    "examSet": "Practice Exam 5",
    "examNum": 5,
    "questionNumber": 28,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "C",
    "explanation": "Correct Answer: C\n\nD. Higher network speed is incorrect. A tabletop exercise is a discussion-based walkthrough of a scenario; it has no\neffect on network throughput. B. Elimination of audit trails is incorrect. Audit trails are retained for accountability and\ninvestigation; a tabletop exercise would never aim to remove them. C. Improved incident response coordination is\ncorrect. In a tabletop exercise, stakeholders talk through their roles and decisions against a simulated incident,\nexposing gaps in the plan and improving how teams communicate and coordinate before a real event occurs. A. Full\nrestoration of encrypted files is incorrect. Restoring files is an operational recovery task performed from backups, not\nan outcome of a discussion-based exercise.",
    "question": "What does an organization gain from performing regular tabletop exercises?",
    "options": [
      "Full restoration of encrypted files",
      "Elimination of audit trails",
      "Improved incident response coordination",
      "Higher network speed"
    ],
    "correctOption": 2,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e5-q29",
    "examSet": "Practice Exam 5",
    "examNum": 5,
    "questionNumber": 29,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "D",
    "explanation": "Correct Answer: D\n\nC. Supply chain analysis is incorrect. It is a vendor assessment activity within third-party risk management, used to\nevaluate the risks a vendor inherits from its own suppliers. B. Reviewing a right-to-audit clause is incorrect. The\nright-to-audit clause is a contractual vendor assessment mechanism that lets an organization inspect a third party's\npractices. D. User guidance and training is correct. It belongs to security awareness practices aimed at the\norganization's own users, not to the assessment or management of third-party risk. A. Obtaining an independent\nvendor assessment is incorrect. Independent assessments are a standard vendor assessment method in third-party\nrisk management.",
    "question": "Which activity is associated with security awareness practices rather than third-party risk assessment and\nmanagement?",
    "options": [
      "Obtaining an independent vendor assessment",
      "Reviewing a right-to-audit clause",
      "Supply chain analysis",
      "User guidance and training"
    ],
    "correctOption": 3,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e5-q30",
    "examSet": "Practice Exam 5",
    "examNum": 5,
    "questionNumber": 30,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "C",
    "explanation": "Correct Answer: C\n\nA. Speed is incorrect: execution speed is not what distinguishes a keylogger from spyware. B. Legality is incorrect:\nboth are malicious when installed without consent, so legality does not define the difference. C. Correct: a keylogger is\nnarrowly focused on capturing keystrokes, while spyware is a broader surveillance category that can monitor browsing,\nscreen content, or file access and may itself include keylogging functionality. D. Hardware installation is incorrect, and\nin fact reversed: keyloggers are the ones that also exist as physical inline devices placed between a keyboard and a\nhost, while spyware is software.",
    "question": "What is the difference between a keylogger and spyware?",
    "options": [
      "A keylogger operates much faster than spyware.",
      "Spyware is illegal while a keylogger is not.",
      "A keylogger captures keystrokes, while spyware is a broader user-monitoring category.",
      "Spyware can be installed using an inline hardware device, while a keylogger exists only as software."
    ],
    "correctOption": 2,
    "isMultiSelect": false,
    "domainId": 2,
    "domain": "Domain 2: Threats, Vulnerabilities & Mitigations",
    "objective": "2.1-2.4 Threats, Vulnerabilities, Attack Vectors & Mitigations"
  },
  {
    "id": "e5-q31",
    "examSet": "Practice Exam 5",
    "examNum": 5,
    "questionNumber": 31,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "D",
    "explanation": "Correct Answer: D\n\nB. CRV is incorrect because it is not a vulnerability scoring system. C. VDSS is incorrect because it is not a recognized\nscoring standard. A. RDV is incorrect because it is not a real scoring framework. D. CVSS is correct because the\nCommon Vulnerability Scoring System assigns each vulnerability a numeric severity score, which teams use to\nprioritize remediation.",
    "question": "Danylo is examining the results of a vulnerability scan and is prioritizing the list of vulnerabilities. He wants\nto use a system that will assign a numeric score to each vulnerability. Which system will Danylo use?",
    "options": [
      "RDV",
      "CRV",
      "VDSS",
      "CVSS"
    ],
    "correctOption": 3,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e5-q32",
    "examSet": "Practice Exam 5",
    "examNum": 5,
    "questionNumber": 32,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "D",
    "explanation": "Correct Answer: D\n\nD (Buffer overflow attack) is correct: a buffer overflow occurs when a program writes more data into a memory buffer\nthan it can hold, so the excess spills into adjacent memory. On the stack, the adjacent area contains the function's\nreturn address, and an attacker overwrites it so that when the function finishes, execution jumps to the attacker's code.\nC (Pointer attack) is incorrect because a pointer or object dereference attack manipulates a pointer to reference an\nunexpected memory location; it does not overflow a buffer into the return address. A (Stuffing attack) is incorrect\nbecause credential stuffing is an authentication attack that replays stolen username and password pairs. B (Integer\noverwrite) is incorrect because the related memory flaw is an integer overflow, which produces an unexpectedly\nwrapped value in a calculation, not a rewritten return address.",
    "question": "Which type of memory vulnerability attack manipulates the \"return address\" of the memory location of a\nsoftware program?",
    "options": [
      "Stuffing attack",
      "Integer overwrite",
      "Pointer attack",
      "Buffer overflow attack"
    ],
    "correctOption": 3,
    "isMultiSelect": false,
    "domainId": 2,
    "domain": "Domain 2: Threats, Vulnerabilities & Mitigations",
    "objective": "2.1-2.4 Threats, Vulnerabilities, Attack Vectors & Mitigations"
  },
  {
    "id": "e5-q33",
    "examSet": "Practice Exam 5",
    "examNum": 5,
    "questionNumber": 33,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "C",
    "explanation": "Correct Answer: C\n\nC (Worm) is correct: a worm is malware that self-replicates and spreads on its own from one computer to another\nacross a network, exploiting vulnerabilities without needing a user to run a file. Because its defining behavior is\nentering a system and then moving through the network, it is sometimes called a network virus. A (Fileless virus) is\nincorrect because fileless malware runs in memory and abuses legitimate tools such as PowerShell to evade\ndetection; its distinguishing trait is the absence of a file on disk, not network propagation. D (Trojan) is incorrect\nbecause a Trojan disguises itself as a legitimate program to trick the user into installing it and does not replicate or\ntravel across the network by itself. B (File-based virus) is incorrect because a traditional virus attaches itself to a file\nand needs a user action to execute and spread rather than moving independently.",
    "question": "Which of the following is sometimes called a \"network virus\" because it enters a computer to move through\nthe network?",
    "options": [
      "Fileless virus",
      "File-based virus",
      "Worm",
      "Trojan"
    ],
    "correctOption": 2,
    "isMultiSelect": false,
    "domainId": 2,
    "domain": "Domain 2: Threats, Vulnerabilities & Mitigations",
    "objective": "2.1-2.4 Threats, Vulnerabilities, Attack Vectors & Mitigations"
  },
  {
    "id": "e5-q34",
    "examSet": "Practice Exam 5",
    "examNum": 5,
    "questionNumber": 34,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "A",
    "explanation": "Correct Answer: A\n\nD. Social engineering is incorrect. Social engineering manipulates people through psychological tactics to reveal\ninformation or perform actions \u2014 it is an attack category, not a process for identifying technical weaknesses. B. SQL\ninjection is incorrect. SQL injection is a specific exploit technique targeting database query logic \u2014 not a systematic\nprocess for cataloguing security weaknesses. A. Vulnerability assessment is correct. A vulnerability assessment is the\nstructured process of identifying, quantifying, and documenting security weaknesses in systems, applications, and\nconfigurations using automated scanners and manual techniques \u2014 before attackers can exploit them. C. Zero-day\nexploit is incorrect. A zero-day exploit targets a previously unknown vulnerability for which no patch exists \u2014 it is an\nattack type used against unassessed weaknesses, not the assessment process itself.",
    "question": "Fill in the blank: __________ is the process of identifying and documenting weaknesses that could be\nexploited.",
    "options": [
      "Vulnerability assessment",
      "SQL injection",
      "Zero-day exploit",
      "Social engineering"
    ],
    "correctOption": 0,
    "isMultiSelect": false,
    "domainId": 2,
    "domain": "Domain 2: Threats, Vulnerabilities & Mitigations",
    "objective": "2.1-2.4 Threats, Vulnerabilities, Attack Vectors & Mitigations"
  },
  {
    "id": "e5-q35",
    "examSet": "Practice Exam 5",
    "examNum": 5,
    "questionNumber": 35,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "D",
    "explanation": "Correct Answer: D\n\nA. MDM is incorrect. Mobile device management enforces configuration and security policy on mobile endpoints; it\ndoes not exchange authentication assertions between an identity provider and services. B. LDAP is incorrect. LDAP is\na protocol for querying and authenticating against a central directory service; it is not a federation standard that passes\nassertions from an identity provider to service providers. D. SAML is correct. Security Assertion Markup Language\nexchanges XML-based authentication and authorization assertions between an identity provider and service providers,\nenabling federated single sign-on across multiple services. C. SIEM is incorrect. A SIEM aggregates and correlates\nsecurity event logs for monitoring and alerting; it plays no role in authenticating users.",
    "question": "Which standard enables federated single sign-on by exchanging authentication assertions between an\nidentity provider and multiple service providers?",
    "options": [
      "MDM",
      "LDAP",
      "SIEM",
      "SAML"
    ],
    "correctOption": 3,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e5-q36",
    "examSet": "Practice Exam 5",
    "examNum": 5,
    "questionNumber": 36,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "A",
    "explanation": "Correct Answer: A\n\nB. User training is incorrect. Security awareness training helps users avoid disclosing credentials, but if a password is\nstill stolen, training alone does nothing to stop the attacker from using it. D. Password vault is incorrect. A password\nvault helps store and generate strong, unique passwords, reducing reuse, but once a specific credential is captured\nthe vault does not block its use elsewhere. A. Multifactor authentication is correct. Even when a password is stolen,\nMFA requires an additional factor (something you have or something you are) that the attacker does not possess, so\nthe stolen credential alone cannot grant access - directly minimizing the impact of credential theft. C. Vulnerability scan\nis incorrect. A vulnerability scan identifies weaknesses in systems; it neither prevents credential theft nor limits what an\nattacker can do with a stolen password.",
    "question": "Which of the following is most helpful in minimizing the impact of credential theft?",
    "options": [
      "Multifactor authentication",
      "User training",
      "Vulnerability scan",
      "Password vault"
    ],
    "correctOption": 0,
    "isMultiSelect": false,
    "domainId": 2,
    "domain": "Domain 2: Threats, Vulnerabilities & Mitigations",
    "objective": "2.1-2.4 Threats, Vulnerabilities, Attack Vectors & Mitigations"
  },
  {
    "id": "e5-q37",
    "examSet": "Practice Exam 5",
    "examNum": 5,
    "questionNumber": 37,
    "questionType": "Matching",
    "correctAnswerRaw": "1 = D; 2 = F; 3 = A; 4 = C; 5 = B",
    "explanation": "Correct Answer: 1 = D; 2 = F; 3 = A; 4 = C; 5 = B\n\n1 \u2192 D (Formal notice that relevant records must be retained and not deleted because litigation is anticipated): a legal\nhold suspends normal deletion and retention schedules as soon as litigation is reasonably anticipated. 2 \u2192 F\n(Documented record of every person who handled the evidence, when, and for what purpose): the chain of custody\nproves the evidence was never left unaccounted for, which keeps it admissible. 3 \u2192 A (Creating a verified forensic\nimage or memory capture from the affected system): acquisition is the collection step, performed in order of volatility\nand validated with hashes. 4 \u2192 C (Identifying, collecting, and producing electronically stored information requested for\na legal proceeding): e-discovery is the legal process of producing electronically stored information for a case and is\nbroader than forensic analysis. 5 \u2192 B (Protecting collected evidence from alteration, for example with write blockers\nand hash verification): preservation keeps evidence in its original state throughout the investigation. Unused: G\n(Proactively searching logs and telemetry for adversary activity that automated alerts missed) \u2014 that is threat hunting,\nan operations activity rather than a forensic step; E (Determining the underlying reason an incident occurred so that it\ndoes not recur) \u2014 that is root cause analysis, performed during lessons learned.",
    "question": "A company's incident response team is writing a digital forensics procedure for incidents that may lead to litigation. Match each forensic term to its description.",
    "matchingItems": [
      {
        "num": 1,
        "text": "Legal hold",
        "correctLetter": "D"
      },
      {
        "num": 2,
        "text": "Chain of custody",
        "correctLetter": "F"
      },
      {
        "num": 3,
        "text": "Acquisition",
        "correctLetter": "A"
      },
      {
        "num": 4,
        "text": "E-discovery",
        "correctLetter": "C"
      },
      {
        "num": 5,
        "text": "Preservation",
        "correctLetter": "B"
      }
    ],
    "matchingDescriptions": [
      {
        "letter": "A",
        "text": "Creating a verified forensic image or memory capture from the affected system"
      },
      {
        "letter": "B",
        "text": "Protecting collected evidence from alteration, for example with write blockers and hash verification"
      },
      {
        "letter": "C",
        "text": "Identifying, collecting, and producing electronically stored information requested for a legal proceeding"
      },
      {
        "letter": "D",
        "text": "Formal notice that relevant records must be retained and not deleted because litigation is anticipated"
      },
      {
        "letter": "E",
        "text": "Determining the underlying reason an incident occurred so that it does not recur"
      },
      {
        "letter": "F",
        "text": "Documented record of every person who handled the evidence, when, and for what purpose"
      },
      {
        "letter": "G",
        "text": "Proactively searching logs and telemetry for adversary activity that automated alerts missed"
      }
    ],
    "correctMapping": {
      "1": "D",
      "2": "F",
      "3": "A",
      "4": "C",
      "5": "B"
    },
    "options": [
      "A. Creating a verified forensic image or memory capture from the affected system",
      "B. Protecting collected evidence from alteration, for example with write blockers and hash verification",
      "C. Identifying, collecting, and producing electronically stored information requested for a legal proceeding",
      "D. Formal notice that relevant records must be retained and not deleted because litigation is anticipated",
      "E. Determining the underlying reason an incident occurred so that it does not recur",
      "F. Documented record of every person who handled the evidence, when, and for what purpose",
      "G. Proactively searching logs and telemetry for adversary activity that automated alerts missed"
    ],
    "correctOption": 0,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e5-q38",
    "examSet": "Practice Exam 5",
    "examNum": 5,
    "questionNumber": 38,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "D",
    "explanation": "Correct Answer: D\n\nA. Masking destroys the original values, while tokenization encrypts them in place is incorrect. It misstates both\ntechniques: masking never destroys the source data - it hides or substitutes values in what is presented or in a copy,\nleaving the original record available - and tokenization does not encrypt the field in place, it swaps in a surrogate value.\nC. Tokenization uses real values; masking uses hashes is incorrect. Tokenization specifically avoids exposing real\nvalues by swapping in a token, and masking obscures characters (for example, showing only the last four digits) rather\nthan hashing them. D. Masking obfuscates data on display; tokenization replaces data with a reference is correct. Data\nmasking hides or scrambles values as they are shown while the underlying data is unchanged, whereas tokenization\nreplaces a sensitive value with a surrogate token that maps back to the original only through a secure token vault. B.\nThey are identical in function and interchangeable is incorrect. They are distinct techniques with different mechanisms\nand use cases.",
    "question": "What is the difference between data masking and tokenization?",
    "options": [
      "Masking destroys the original values, while tokenization encrypts them in place",
      "They are identical in function and interchangeable",
      "Tokenization uses real values; masking uses hashes",
      "Masking obfuscates data on display; tokenization replaces data with a reference"
    ],
    "correctOption": 3,
    "isMultiSelect": false,
    "domainId": 1,
    "domain": "Domain 1: General Security Concepts",
    "objective": "1.1-1.4 Security Controls, Cryptography, Identity & Access Management"
  },
  {
    "id": "e5-q39",
    "examSet": "Practice Exam 5",
    "examNum": 5,
    "questionNumber": 39,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "B",
    "explanation": "Correct Answer: B\n\nB (Practicing coordinated response to simulated incidents) is correct: a tabletop exercise is a discussion-based\nwalkthrough in which responders talk through a hypothetical scenario, testing roles, decision points and the playbook\nand exposing gaps without touching production. A (Detonating live malware samples against production endpoints) is\nincorrect because a tabletop executes nothing; running real malware would be a live-fire or red team activity. D\n(Stress-testing the network perimeter with load tools) is incorrect because that is hands-on technical testing performed\nwith tooling, not a discussion. C (Calibrating biometric authentication thresholds) is incorrect because tuning false\nacceptance and rejection rates is a device configuration task unrelated to rehearsing an incident.",
    "question": "What is a common use case for conducting tabletop exercises?",
    "options": [
      "Detonating live malware samples against production endpoints",
      "Practicing coordinated response to simulated incidents",
      "Calibrating biometric authentication thresholds",
      "Stress-testing the network perimeter with load tools"
    ],
    "correctOption": 1,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e5-q40",
    "examSet": "Practice Exam 5",
    "examNum": 5,
    "questionNumber": 40,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "C",
    "explanation": "Correct Answer: C\n\nB. Incident handling capabilities is incorrect: those are evaluated through incident response planning and testing, not a\nPIA. D. Hardware lifespan is incorrect: it relates to asset management, not privacy analysis. C. Data collection\npractices and privacy risks is correct: a privacy impact assessment analyzes what personal data is collected, how it is\nused and stored, and the privacy risks involved. A. Resource scalability in hybrid cloud is incorrect: that is an\narchitecture/capacity concern, unrelated to a PIA.",
    "question": "What does a privacy impact assessment (PIA) help organizations evaluate?",
    "options": [
      "Resource scalability in hybrid cloud",
      "Incident handling capabilities",
      "Data collection practices and privacy risks",
      "Hardware lifespan"
    ],
    "correctOption": 2,
    "isMultiSelect": false,
    "domainId": 4,
    "domain": "Domain 4: Security Operations",
    "objective": "4.1-4.4 Security Operations, Monitoring, Incident Response & Forensics"
  },
  {
    "id": "e5-q41",
    "examSet": "Practice Exam 5",
    "examNum": 5,
    "questionNumber": 41,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "A",
    "explanation": "Correct Answer: A\n\nA (SOW) is correct: a statement of work (SOW), also issued as a work order (WO), is the contractual document that\nspells out the specific work to be performed for a project, including deliverables, timelines, milestones, and acceptance\ncriteria. It typically sits under a broader master service agreement (MSA) and turns the general relationship into a\nconcrete assignment, which matches the document Angelo received. C (EOA) is incorrect because it is not a\nrecognized Security+ agreement type; no standard contract document uses this abbreviation. D (BPP) is incorrect\nbecause it is not a contract or agreement term in the SY0-701 objectives; the closest real term is the business partners\nagreement (BPA). B (EOS) is incorrect because it usually stands for end of support or end of service, a product\nlifecycle milestone, not a document describing work requirements.",
    "question": "Angelo has received a document that is part of a contract that describes the work requirements for a\nspecific project. What type of document is this?",
    "options": [
      "SOW",
      "EOS",
      "EOA",
      "BPP"
    ],
    "correctOption": 0,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e5-q42",
    "examSet": "Practice Exam 5",
    "examNum": 5,
    "questionNumber": 42,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "B",
    "explanation": "Correct Answer: B\n\nC. Whaling is incorrect because nothing indicates the recipient is a high-level executive singled out for their role. A.\nPretexting is incorrect because it centers on a fabricated scenario or impersonated identity used to extract information\nor action, typically in an interactive exchange; here the defining mechanism is a deceptive email link to a\ncredential-harvesting page. B. Phishing is correct: an unsolicited deceptive email that lures the user to a fake\npassword-reset page to steal login credentials is a classic phishing attack. D. Vishing is incorrect because it is carried\nout over voice calls, not email.",
    "question": "A user receives an unsolicited email containing a link to a fake password-reset page designed to steal\nlogin credentials. Which email-based social engineering attack is this?",
    "options": [
      "Pretexting",
      "Phishing",
      "Whaling",
      "Vishing"
    ],
    "correctOption": 1,
    "isMultiSelect": false,
    "domainId": 2,
    "domain": "Domain 2: Threats, Vulnerabilities & Mitigations",
    "objective": "2.1-2.4 Threats, Vulnerabilities, Attack Vectors & Mitigations"
  },
  {
    "id": "e5-q43",
    "examSet": "Practice Exam 5",
    "examNum": 5,
    "questionNumber": 43,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "C",
    "explanation": "Correct Answer: C\n\nA. Containment is incorrect. Containment limits the spread of an active incident and happens during the response, not\nafter it. B. Eradication is incorrect. Eradication removes the cause from the environment; it precedes recovery and is\nstill part of handling the incident. D. Recovery is incorrect. Recovery restores systems to normal operation and\nvalidates that they are clean; documenting and reviewing comes after it. C. Lessons learned is correct. The lessons\nlearned phase, also called post-incident review, takes place once the incident is resolved: responders record what\nhappened, what worked and what failed, and the improvements identified feed back into preparation.",
    "question": "Scenario: After investigating a breach, the team documents all actions taken and identifies areas for\nimprovement. Which phase is this?",
    "options": [
      "Containment",
      "Eradication",
      "Lessons learned",
      "Recovery"
    ],
    "correctOption": 2,
    "isMultiSelect": false,
    "domainId": 4,
    "domain": "Domain 4: Security Operations",
    "objective": "4.1-4.4 Security Operations, Monitoring, Incident Response & Forensics"
  },
  {
    "id": "e5-q44",
    "examSet": "Practice Exam 5",
    "examNum": 5,
    "questionNumber": 44,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "C",
    "explanation": "Correct Answer: C\n\nA. Notify all end users about the pending alerts is incorrect. Notifying users is premature before understanding which\nalerts are genuine threats versus false positives. D. Immediately shut down the entire corporate network is incorrect. A\nblanket network shutdown would cause widespread disruption and is disproportionate before alert severity has been\nassessed. C. Triage the alerts for prioritization is correct. Triage involves evaluating all alerts by severity, credibility,\nand potential impact to determine which require immediate action, preventing analysts from wasting time on\nlow-priority or false-positive alerts while real threats go unaddressed. B. Run a full backup of the affected systems is\nincorrect. Backups are a recovery action, not an initial response to incoming alerts.",
    "question": "A security team receives multiple alerts from a SIEM platform. What should be the first step?",
    "options": [
      "Notify all end users about the pending alerts",
      "Run a full backup of the affected systems",
      "Triage the alerts for prioritization",
      "Immediately shut down the entire corporate network"
    ],
    "correctOption": 2,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e5-q45",
    "examSet": "Practice Exam 5",
    "examNum": 5,
    "questionNumber": 45,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "C",
    "explanation": "Correct Answer: C\n\nA. Displaying a ransom message that may impersonate a trusted organization or authority is a genuine feature of\nblocking ransomware, so it is not the correct choice. B. Preventing the user from operating the device normally is the\ncore behavior of blocking ransomware, so it is not the correct choice. C. Correct \u2014 blocking ransomware cannot\nreliably be removed by power-cycling the device: it persists across reboots and re-locks the screen, so this is NOT one\nof its features. D. Locking access to the device interface rather than primarily encrypting user files is the defining\ncharacteristic of blocking (screen-locking) ransomware, so it is not the correct choice.",
    "question": "Which of the following is NOT a feature of blocking (screen-locking) ransomware?",
    "options": [
      "It displays a ransom message that may impersonate a trusted organization or authority.",
      "It prevents the user from operating the device normally.",
      "It can reliably be removed by power-cycling the device twice.",
      "It locks access to the device interface rather than primarily encrypting user files."
    ],
    "correctOption": 2,
    "isMultiSelect": false,
    "domainId": 2,
    "domain": "Domain 2: Threats, Vulnerabilities & Mitigations",
    "objective": "2.1-2.4 Threats, Vulnerabilities, Attack Vectors & Mitigations"
  },
  {
    "id": "e5-q46",
    "examSet": "Practice Exam 5",
    "examNum": 5,
    "questionNumber": 46,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "A",
    "explanation": "Correct Answer: A\n\nC. Evil twin is incorrect. An evil twin is a rogue access point that impersonates a legitimate one to lure clients; it\nintercepts sessions live rather than capturing ciphertext for later offline cracking. B. Replay is incorrect. A replay attack\nretransmits previously captured frames to gain access in real time; it does not describe collecting traffic to crack\nencryption offline. D. Deauthentication is incorrect. A deauth attack forces clients off the network (often to disrupt\nservice or trigger a handshake); by itself it is a disruption technique, not the capture-and-crack action described. A.\nPacket sniffing is correct. Passively capturing wireless frames \u2014 for example the WPA handshake \u2014 lets an attacker\ntake the captured data away and attempt to crack the encryption key offline through brute-force or dictionary attacks.",
    "question": "Which type of wireless attack captures traffic in the hope of cracking encryption offline?",
    "options": [
      "Packet sniffing",
      "Replay",
      "Evil twin",
      "Deauthentication"
    ],
    "correctOption": 0,
    "isMultiSelect": false,
    "domainId": 2,
    "domain": "Domain 2: Threats, Vulnerabilities & Mitigations",
    "objective": "2.1-2.4 Threats, Vulnerabilities, Attack Vectors & Mitigations"
  },
  {
    "id": "e5-q47",
    "examSet": "Practice Exam 5",
    "examNum": 5,
    "questionNumber": 47,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "D",
    "explanation": "Correct Answer: D\n\nD (Identifying potential indicators of compromise) is correct: detection is the phase where monitoring and alerting turn\nraw events into a validated incident, so analysts hunt for and confirm IoCs such as anomalous logins, beaconing traffic\nor known-bad file hashes. C (Preventing user access to compromised accounts and hosts) is incorrect because cutting\noff accounts or hosts is a containment action taken after an incident is confirmed. B (Removing infected files and other\nmalware artifacts) is incorrect because deleting malware and its artefacts is eradication, which follows containment. A\n(Applying firewall rules) is incorrect because blocking traffic is a containment or mitigation step, not the act of\ndiscovering the incident.",
    "question": "What does the detection phase of incident response involve?",
    "options": [
      "Applying firewall rules",
      "Removing infected files and other malware artifacts",
      "Preventing user access to compromised accounts and hosts",
      "Identifying potential indicators of compromise"
    ],
    "correctOption": 3,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e5-q48",
    "examSet": "Practice Exam 5",
    "examNum": 5,
    "questionNumber": 48,
    "questionType": "Select Two",
    "correctAnswerRaw": "C, E",
    "explanation": "Correct Answer: C, E\n\nE and C are correct: running the whole workflow through one script on one server means any outage stops the\nprocess entirely, which is a single point of failure, and undocumented code that depends on a deprecated API and that\nno current employee can maintain is technical debt that grows more expensive and riskier over time. D is incorrect\n(Workforce multiplier) because that is a benefit of automation, letting a small team handle more work, not a risk shown\nhere. B is incorrect (Reaction time) because faster response is another benefit of automation, whereas this scenario\nshows the workflow failing rather than responding quickly. A is incorrect (Standard infrastructure configurations)\nbecause it describes automation being used to enforce consistent builds, which is a benefit and is unrelated to an\nunmaintained script.",
    "question": "A SOC's entire phishing-response workflow is a single script on one server, written by an engineer who\nhas since left. Nobody else understands the code, it still calls an API version the vendor deprecated, and\nwhen the server was rebooted last week no phishing reports were processed for a day. Which TWO\nautomation considerations does this situation illustrate? (Select TWO.)",
    "options": [
      "Standard infrastructure configurations",
      "Reaction time",
      "Technical debt",
      "Workforce multiplier",
      "Single point of failure"
    ],
    "optionLetters": [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    "isMultiSelect": true,
    "requiredSelectCount": 2,
    "correctOptions": [
      2,
      4
    ],
    "correctLetters": [
      "C",
      "E"
    ],
    "correctOption": 2,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e5-q49",
    "examSet": "Practice Exam 5",
    "examNum": 5,
    "questionNumber": 49,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "A",
    "explanation": "Correct Answer: A\n\nA (Qualitative) is correct: qualitative risk analysis rates each risk using descriptive scales rather than precise\nmeasurements, such as a 1 to 10 score or labels like High, Medium, and Low, often plotted on a risk matrix or heat\nmap. It relies on expert judgment and is quick to communicate, which is why the question's numeric-or-label approach\ndescribes it. C (Quantitative) is incorrect because quantitative analysis assigns concrete monetary or statistical values,\nsuch as asset value, exposure factor, SLE, ARO, and ALE, instead of rankings or labels. B (Rule based) is incorrect\nbecause it is not a risk calculation approach; the term is associated with access control and detection signatures. D\n(Policy based) is incorrect because it is likewise not a method of calculating risk; policies set the requirements that risk\nassessments help enforce, not an analysis technique.",
    "question": "Which of the following approaches to risk calculation typically assigns a numeric value (1\u201310) or label\n(High, Medium, or Low) to represent a risk?",
    "options": [
      "Qualitative",
      "Rule based",
      "Quantitative",
      "Policy based"
    ],
    "correctOption": 0,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e5-q50",
    "examSet": "Practice Exam 5",
    "examNum": 5,
    "questionNumber": 50,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "D",
    "explanation": "Correct Answer: D\n\nC. Encryption and hashing is incorrect. Encryption and hashing are techniques a signature may use internally, not the\nsecurity services it delivers; a signature does not provide confidentiality of the message. D. Authentication and integrity\nis correct. A digital signature is created by encrypting a hash of the message with the signer's private key. Verifying it\nwith the signer's public key proves who signed it (authentication, and by extension non-repudiation) and confirms the\ncontent has not changed since signing (integrity). A. Confidentiality and redundancy is incorrect. A digital signature\ndoes not conceal the message contents (no confidentiality) and has nothing to do with duplicating components\n(redundancy). B. Availability and federation is incorrect. Signatures do not keep systems available, and federation is\nan identity-sharing model unrelated to signing.",
    "question": "A digital signature provides which two core security functions?",
    "options": [
      "Confidentiality and redundancy",
      "Availability and federation",
      "Encryption and hashing",
      "Authentication and integrity"
    ],
    "correctOption": 3,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e5-q51",
    "examSet": "Practice Exam 5",
    "examNum": 5,
    "questionNumber": 51,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "B",
    "explanation": "Correct Answer: B\n\nD. Security information and event management (SIEM) is incorrect. A SIEM aggregates and correlates logs from many\nsources network-wide. While it can surface file-change events if the relevant logs are forwarded to it, it is not the\nprimary dedicated tool for detecting host-level file modifications. B. File integrity monitoring (FIM) is correct. FIM tools\n(such as Tripwire or OSSEC) create cryptographic hashes of critical files and directories at baseline, then continuously\ncompare current state against that baseline. Any modification, deletion, or new file creation triggers an alert - making\nFIM the most direct tool for detecting unauthorized changes on a potentially compromised workstation. A. DNS\nsinkhole redirection is incorrect. A DNS sinkhole redirects malicious domain queries to a controlled IP address for\nblocking and analysis - it has no visibility into the host file system. C. Network intrusion detection system (NIDS) is\nincorrect. A NIDS monitors network traffic for malicious patterns; it cannot inspect the file system of individual\nendpoints.",
    "question": "What tool would most help identify file changes on a suspected compromised workstation?",
    "options": [
      "DNS sinkhole redirection",
      "File integrity monitoring (FIM)",
      "Network intrusion detection system (NIDS)",
      "Security information and event management (SIEM)"
    ],
    "correctOption": 1,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e5-q52",
    "examSet": "Practice Exam 5",
    "examNum": 5,
    "questionNumber": 52,
    "questionType": "Matching",
    "correctAnswerRaw": "1 = C; 2 = D; 3 = B; 4 = A",
    "explanation": "Correct Answer: 1 = C; 2 = D; 3 = B; 4 = A\n\nPCI DSS matches \"Payment card industry security\" because it defines the controls required for any entity storing,\nprocessing, or transmitting cardholder data. HIPAA matches \"Healthcare data protection\" as the U.S. regulation that\nmandates safeguards for Protected Health Information held by covered entities and business associates. ISO/IEC\n27001 matches \"Global ISMS management,\" giving international requirements to implement and certify an Information\nSecurity Management System. NIST SP 800-53 matches \"Technical controls for federal systems,\" providing a\ncomprehensive control catalog used by U.S. federal agencies and contractors to meet FISMA obligations.",
    "question": "Match each framework or standard to its focus.",
    "matchingItems": [
      {
        "num": 1,
        "text": "PCI DSS",
        "correctLetter": "C"
      },
      {
        "num": 2,
        "text": "HIPAA",
        "correctLetter": "D"
      },
      {
        "num": 3,
        "text": "ISO/IEC 27001",
        "correctLetter": "B"
      },
      {
        "num": 4,
        "text": "NIST SP 800-53",
        "correctLetter": "A"
      }
    ],
    "matchingDescriptions": [
      {
        "letter": "A",
        "text": "Technical controls for federal systems"
      },
      {
        "letter": "B",
        "text": "Global ISMS management"
      },
      {
        "letter": "C",
        "text": "Payment card industry security"
      },
      {
        "letter": "D",
        "text": "Healthcare data protection"
      }
    ],
    "correctMapping": {
      "1": "C",
      "2": "D",
      "3": "B",
      "4": "A"
    },
    "options": [
      "A. Technical controls for federal systems",
      "B. Global ISMS management",
      "C. Payment card industry security",
      "D. Healthcare data protection"
    ],
    "correctOption": 0,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e5-q53",
    "examSet": "Practice Exam 5",
    "examNum": 5,
    "questionNumber": 53,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "D",
    "explanation": "Correct Answer: D\n\nB. Playbook execution is incorrect. \"Execution\" is the act of running a plan, not the plan itself; the question asks for the\npredefined plan's name. D. Playbook is correct. In incident response and SOAR workflows, a playbook is a\ndocumented, step-by-step plan that defines exactly what actions to take for a specific incident type (e.g., phishing,\nransomware). A. Threat hunting is incorrect. Threat hunting is the proactive search for undetected adversaries, not a\npredefined response plan. C. EDR containment is incorrect. This describes a specific technical action an EDR tool\nmay take, not the overall incident response document.",
    "question": "Fill in the blank: A __________ is a predefined plan that outlines actions to take during a specific type of\nsecurity incident.",
    "options": [
      "Threat hunting",
      "Playbook execution",
      "EDR containment",
      "Playbook"
    ],
    "correctOption": 3,
    "isMultiSelect": false,
    "domainId": 4,
    "domain": "Domain 4: Security Operations",
    "objective": "4.1-4.4 Security Operations, Monitoring, Incident Response & Forensics"
  },
  {
    "id": "e5-q54",
    "examSet": "Practice Exam 5",
    "examNum": 5,
    "questionNumber": 54,
    "questionType": "Select Two",
    "correctAnswerRaw": "C, E",
    "explanation": "Correct Answer: C, E\n\nE and C are correct: a TPM is a tamper-resistant chip on a device that generates and protects keys, and an HSM is a\ndedicated tamper-resistant appliance that generates, stores, and uses keys, so both keep key material in hardware. B\nis incorrect: a CRL is a published list of revoked certificates, not a key-storage device. D is incorrect: OCSP is a\nprotocol for checking a certificate's revocation status in real time, not hardware. A is incorrect: a self-signed certificate\nis signed by its own creator and stores no keys in tamper-resistant hardware.",
    "question": "An organization wants cryptographic keys generated and stored inside dedicated, tamper-resistant\nhardware rather than in software. Which TWO technologies meet this requirement? (Select TWO.)",
    "options": [
      "Self-signed certificate",
      "Certificate revocation list (CRL)",
      "Hardware security module (HSM)",
      "Online Certificate Status Protocol (OCSP)",
      "Trusted Platform Module (TPM)"
    ],
    "optionLetters": [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    "isMultiSelect": true,
    "requiredSelectCount": 2,
    "correctOptions": [
      2,
      4
    ],
    "correctLetters": [
      "C",
      "E"
    ],
    "correctOption": 2,
    "domainId": 1,
    "domain": "Domain 1: General Security Concepts",
    "objective": "1.1-1.4 Security Controls, Cryptography, Identity & Access Management"
  },
  {
    "id": "e5-q55",
    "examSet": "Practice Exam 5",
    "examNum": 5,
    "questionNumber": 55,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "B",
    "explanation": "Correct Answer: B\n\nB. Jump server is correct. A jump server is a hardened host that administrators connect through to reach systems in a\nprotected zone, concentrating privileged access in a single controlled and monitored point. D. Load balancer is\nincorrect. A load balancer distributes client requests across multiple servers for availability and performance; it is not\nan administrative access path. C. Web application firewall is incorrect. A WAF inspects HTTP/HTTPS traffic to protect\nweb applications; it does not provide administrators with access to protected systems. A. Passive sensor is incorrect.\nA passive sensor only monitors copies of network traffic for analysis; it does not sit in any access path and cannot\nserve as an intermediary.",
    "question": "Which network appliance provides administrators with a controlled, hardened intermediary system for\naccessing devices in a protected security zone?",
    "options": [
      "Passive sensor",
      "Jump server",
      "Web application firewall",
      "Load balancer"
    ],
    "correctOption": 1,
    "isMultiSelect": false,
    "domainId": 3,
    "domain": "Domain 3: Security Architecture",
    "objective": "3.1-3.4 Security Architecture, Cloud, Infrastructure & Resilience"
  },
  {
    "id": "e5-q56",
    "examSet": "Practice Exam 5",
    "examNum": 5,
    "questionNumber": 56,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "C",
    "explanation": "Correct Answer: C\n\nA. \"A pressure sensor can detect pressure caused by a person or vehicle\" is a true statement, so it is not the correct\nchoice: pressure sensors trigger on the weight or force applied to them, whether from a person or a vehicle. B.\n\"Multiple pressure sensors can be arranged to help determine movement direction\" is a true statement, so it is not the\ncorrect choice: the order in which the sensors trigger reveals the direction of travel. C. \"A pressure sensor is a type of\nmanagerial control\" is the correct answer because it is NOT true: a pressure sensor is a physical control that detects\nintrusion, while managerial controls are policies, procedures, and oversight processes. D. \"A pressure sensor can help\ndetect entry into a restricted area\" is a true statement, so it is not the correct choice: placing sensors at entry points\ndetects unauthorized access to the area.",
    "question": "Which of the following statements is NOT true about a pressure sensor?",
    "options": [
      "A pressure sensor can detect pressure caused by a person or vehicle",
      "Multiple pressure sensors can be arranged to help determine movement direction",
      "A pressure sensor is a type of managerial control",
      "A pressure sensor can help detect entry into a restricted area"
    ],
    "correctOption": 2,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e5-q57",
    "examSet": "Practice Exam 5",
    "examNum": 5,
    "questionNumber": 57,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "D",
    "explanation": "Correct Answer: D\n\nA. Audit software license usage is incorrect. License auditing is an IT asset management function \u2014 it has no\nrelationship to offensive security testing or defense evaluation. B. Identify business process inefficiencies is incorrect.\nBusiness process improvement is an operations management function, not the goal of a red team security\nengagement. D. Emulate attacker behavior to test defenses is correct. A red team assessment uses the same tactics,\ntechniques, and procedures (TTPs) as real adversaries \u2014 including social engineering, exploitation, and lateral\nmovement \u2014 to test whether defenses, detection capabilities, and incident response are effective under realistic attack\nconditions. C. Monitor system uptime is incorrect. Uptime monitoring is a NOC (Network Operations Center) function\nusing availability dashboards, not a red team activity.",
    "question": "What is the PRIMARY goal of a red team assessment?",
    "options": [
      "Audit software license usage",
      "Identify business process inefficiencies",
      "Monitor system uptime",
      "Emulate attacker behavior to test defenses"
    ],
    "correctOption": 3,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e5-q58",
    "examSet": "Practice Exam 5",
    "examNum": 5,
    "questionNumber": 58,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "C",
    "explanation": "Correct Answer: C\n\nA. Port scanning is incorrect. Port scanning enumerates open services; it does nothing to stop repeated password\nguessing. C. Account lockout policy is correct. Locking an account after a set number of failed login attempts directly\ndefeats brute-force password attacks by preventing the attacker from continuing to try passwords. D. DNS sinkholing\nis incorrect. DNS sinkholing redirects traffic destined for known-malicious domains and is unrelated to defending\nagainst password guessing. B. Remote wipe capability is incorrect. Remote wipe erases data on a lost or stolen\ndevice; it does not prevent brute-force attempts against an account.",
    "question": "Which of the following is the most effective control against brute-force password attacks?",
    "options": [
      "Port scanning",
      "Remote wipe capability",
      "Account lockout policy",
      "DNS sinkholing"
    ],
    "correctOption": 2,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e5-q59",
    "examSet": "Practice Exam 5",
    "examNum": 5,
    "questionNumber": 59,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "A",
    "explanation": "Correct Answer: A\n\nD. Vishing is incorrect because it uses voice calls rather than text messages. B. Email phishing is incorrect because\nthe fraudulent message reached Tobias by SMS, not by email. A. Smishing is correct: it is phishing carried out over\nSMS text messages, exactly matching the fraudulent bank text Tobias received. C. Business email compromise is\nincorrect because it involves compromised or spoofed business email accounts used to defraud an organization, not\nan SMS sent to an individual.",
    "question": "Tobias received an SMS text message that falsely said his bank account was overdrawn and, to avoid a\n$45 fee, he should contact the bank immediately with an explanation. What type of social engineering\nattack is this?",
    "options": [
      "Smishing",
      "Email phishing",
      "Business email compromise",
      "Vishing"
    ],
    "correctOption": 0,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e5-q60",
    "examSet": "Practice Exam 5",
    "examNum": 5,
    "questionNumber": 60,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "B",
    "explanation": "Correct Answer: B\n\nB is correct (Policy Administrator): the policy administrator acts on the policy engine's decision, generating or revoking\nsession credentials and instructing the enforcement point to allow or block the path. A is incorrect (Policy Engine): the\npolicy engine evaluates identity, device posture, and context to make the decision, but it does not carry the decision\nout. D is incorrect (Policy Enforcement Point): the PEP sits in the data plane and actually permits or denies the traffic,\nenforcing rather than administering the decision. C is incorrect (Implicit trust zone): an implicit trust zone is an area\ntrusted after a request passes a PEP, not a decision-making component.",
    "question": "In a Zero Trust deployment, one control-plane component receives the access decision from the policy\nengine and then sets up or tears down the session by signaling the enforcement point. Which component\nperforms this role?",
    "options": [
      "Policy Engine",
      "Policy Administrator",
      "Implicit trust zone",
      "Policy Enforcement Point"
    ],
    "correctOption": 1,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e5-q61",
    "examSet": "Practice Exam 5",
    "examNum": 5,
    "questionNumber": 61,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "A",
    "explanation": "Correct Answer: A\n\nA (RTO (Recovery Time Objective)) is correct: the recovery time objective is the maximum acceptable amount of time\na system, application, or function can remain down after a disruption, so it defines how quickly restoration must be\ncompleted. An RTO of one hour for a payment system means recovery plans must restore it within that hour. B (RPO\n(Recovery Point Objective)) is incorrect because the RPO measures acceptable data loss in time, that is, how far back\nthe last usable backup may be, not how long recovery takes. D (MTBF (Mean Time Between Failures)) is incorrect\nbecause MTBF is a reliability metric predicting the average operating time between one failure and the next. C (MTTR\n(Mean Time To Repair)) is incorrect because MTTR is the historical average time actually taken to repair a failed\ncomponent, whereas the RTO is the target set by the business impact analysis.",
    "question": "Fill in the blank: __________ defines how long it should take to restore systems after a failure.",
    "options": [
      "RTO (Recovery Time Objective)",
      "RPO (Recovery Point Objective)",
      "MTTR (Mean Time To Repair)",
      "MTBF (Mean Time Between Failures)"
    ],
    "correctOption": 0,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e5-q62",
    "examSet": "Practice Exam 5",
    "examNum": 5,
    "questionNumber": 62,
    "questionType": "Select Two",
    "correctAnswerRaw": "A, B",
    "explanation": "Correct Answer: A, B\n\nB and A are correct: an independent audit report reflects an outside assessor's testing of the vendor's controls, and an\nexternal penetration test shows whether those controls withstand attack; both come from parties other than the\nvendor's own staff, which makes them independent evidence. C is incorrect (unsupported self-assessment\nquestionnaire) because questionnaires help with scoping, but unsupported self-reported answers are neither\nindependent nor verified. E is incorrect (marketing brochure) because marketing material is promotional and\nunverified. D is incorrect (master service agreement) because an MSA sets contract terms such as liability and\ntermination; it documents obligations, not evidence that the vendor's controls work.",
    "question": "A company is evaluating a payroll SaaS provider that will process employee bank details. The\nprocurement team wants independent evidence of the vendor's security posture before signing. Which\nTWO items provide this evidence? (Select TWO.)",
    "options": [
      "The results of a recent penetration test performed against the vendor by an outside firm",
      "An independent third-party audit report covering the vendor's security controls",
      "A self-assessment questionnaire completed by the vendor's sales team without supporting documents",
      "A master service agreement defining the general terms of the relationship",
      "The vendor's published marketing brochure describing its security features"
    ],
    "optionLetters": [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    "isMultiSelect": true,
    "requiredSelectCount": 2,
    "correctOptions": [
      0,
      1
    ],
    "correctLetters": [
      "A",
      "B"
    ],
    "correctOption": 0,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e5-q63",
    "examSet": "Practice Exam 5",
    "examNum": 5,
    "questionNumber": 63,
    "questionType": "Matching",
    "correctAnswerRaw": "1 = A; 2 = B; 3 = C; 4 = A",
    "explanation": "Correct Answer: 1 = A; 2 = B; 3 = C; 4 = A\n\nCorrect pairings: Preventing unauthorized data disclosure = Confidentiality; Ensuring systems are accessible during\nbusiness hours = Availability; Verifying that audit logs haven't been altered = Integrity; Encrypting sensitive data stored\non company laptops = Confidentiality. Confidentiality covers any objective that keeps data readable only by authorized\nparties: both the general goal of preventing disclosure and the specific mechanism of encrypting data at rest fall under\nthis pillar, which is why two items map to it by design. Availability concerns keeping systems and data accessible when\nneeded, which is what business-hours accessibility describes. Integrity ensures information has not been improperly\naltered; verifying that audit logs are unchanged (for example through hashing or write-once storage) is an integrity\ncheck.",
    "question": "Match each security objective to its corresponding CIA triad element. Note: the same description may apply to more than one item.",
    "matchingItems": [
      {
        "num": 1,
        "text": "Preventing unauthorized data disclosure",
        "correctLetter": "A"
      },
      {
        "num": 2,
        "text": "Ensuring systems are accessible during business hours",
        "correctLetter": "B"
      },
      {
        "num": 3,
        "text": "Verifying that audit logs haven't been altered",
        "correctLetter": "C"
      },
      {
        "num": 4,
        "text": "Encrypting sensitive data stored on company laptops",
        "correctLetter": "A"
      }
    ],
    "matchingDescriptions": [
      {
        "letter": "A",
        "text": "Confidentiality"
      },
      {
        "letter": "B",
        "text": "Availability"
      },
      {
        "letter": "C",
        "text": "Integrity"
      }
    ],
    "correctMapping": {
      "1": "A",
      "2": "B",
      "3": "C",
      "4": "A"
    },
    "options": [
      "A. Confidentiality",
      "B. Availability",
      "C. Integrity"
    ],
    "correctOption": 0,
    "domainId": 4,
    "domain": "Domain 4: Security Operations",
    "objective": "4.1-4.4 Security Operations, Monitoring, Incident Response & Forensics"
  },
  {
    "id": "e5-q64",
    "examSet": "Practice Exam 5",
    "examNum": 5,
    "questionNumber": 64,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "A",
    "explanation": "Correct Answer: A\n\nA (Risk appetite) is correct: risk appetite is the strategic level of risk an organization is prepared to accept in pursuit of\nits objectives, defined by the board or executives. Because Gabe's report describes the total risk the organization can\nbear within a given risk profile, he is describing appetite, which can be expansionary, neutral, or conservative. D (Risk\ntolerance) is incorrect because tolerance is the acceptable variation within the appetite, an operational threshold set at\nthe department or team level, rather than the overall amount of risk the organization will carry. B (Risk expansion) is\nincorrect because it is not a risk management term; expansionary is merely one type of risk appetite. C (Risk\nacceptance) is incorrect because acceptance is one of the four risk responses applied to an individual risk, not a\nmeasure of the organization's total capacity for risk.",
    "question": "Gabe is creating a report for his supervisor Cora that outlines the total risk that the organization can bear in\na given risk profile. Which of the following terms would Gabe be using?",
    "options": [
      "Risk appetite",
      "Risk expansion",
      "Risk acceptance",
      "Risk tolerance"
    ],
    "correctOption": 0,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e5-q65",
    "examSet": "Practice Exam 5",
    "examNum": 5,
    "questionNumber": 65,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "B",
    "explanation": "Correct Answer: B\n\nD. Panel is incorrect: a panel is a group convened to advise on or evaluate a specific matter and holds no ultimate\noversight authority. A. Committee is incorrect: committees operate under authority delegated by the board and focus\non specific areas such as audit or risk. B. Board is correct: the board of directors holds ultimate oversight responsibility\nand approves the organization's strategic goals and high-level policies. C. Council is incorrect: a council is an advisory\nor coordinating body and is not the structure with final approval authority over organizational strategy.",
    "question": "Which governance structure has ultimate oversight responsibility for approving an organization's strategic\ngoals and high-level policies?",
    "options": [
      "Committee",
      "Board",
      "Council",
      "Panel"
    ],
    "correctOption": 1,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e5-q66",
    "examSet": "Practice Exam 5",
    "examNum": 5,
    "questionNumber": 66,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "D",
    "explanation": "Correct Answer: D\n\nD (Dynamic code analysis) is correct: dynamic analysis, also called runtime verification, tests an application while it is\nactually executing, observing its behavior, memory use, inputs, and outputs to find flaws that only appear at run time.\nBecause it verifies the running program rather than the source, the two names describe the same technique. A (Static\ncode analysis) is incorrect because static analysis examines the source code or binary without running it, so it is the\nopposite of runtime verification. B (Fuzzering) is incorrect because the real technique is called fuzzing, and although\nfuzzing is one dynamic testing method that feeds random or malformed input to a running program, it is a specific test\nrather than a synonym for runtime verification. C (Weighted code analysis) is incorrect because it is not a recognized\napplication testing method.",
    "question": "What is another name for runtime verification?",
    "options": [
      "Static code analysis",
      "Fuzzering",
      "Weighted code analysis",
      "Dynamic code analysis"
    ],
    "correctOption": 3,
    "isMultiSelect": false,
    "domainId": 1,
    "domain": "Domain 1: General Security Concepts",
    "objective": "1.1-1.4 Security Controls, Cryptography, Identity & Access Management"
  },
  {
    "id": "e5-q67",
    "examSet": "Practice Exam 5",
    "examNum": 5,
    "questionNumber": 67,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "B",
    "explanation": "Correct Answer: B\n\nC. Five Nines is incorrect. 99.999% uptime allows roughly 5.26 minutes of downtime per year, far more than the\nmandated 99.9999999%. B. Nine Nines is correct. 99.9999999% uptime corresponds to nine nines of availability,\nallowing only about 31.5 milliseconds of downtime per year. A. Six Nines is incorrect. 99.9999% uptime allows roughly\n31.5 seconds of downtime per year, which does not meet the mandated level. D. Three Nines is incorrect. 99.9%\nuptime allows almost 8.8 hours of downtime per year, well below the requirement.",
    "question": "Bracha is completing a request for proposal (RFP) to be sent to different vendors. The RFP mandates\n99.9999999% annual uptime. What availability level should Bracha specify?",
    "options": [
      "Six Nines",
      "Nine Nines",
      "Five Nines",
      "Three Nines"
    ],
    "correctOption": 1,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e5-q68",
    "examSet": "Practice Exam 5",
    "examNum": 5,
    "questionNumber": 68,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "B",
    "explanation": "Correct Answer: B\n\nD. Advanced vulnerability information is incorrect as the answer because plug-ins do carry detailed information about\nthe specific vulnerabilities they check for. B. Listing of vulnerable local IP addresses is correct because it is what\nplug-ins do NOT contain: which of your hosts are vulnerable is discovered when the scan runs against your\nenvironment, not shipped inside the plug-in. A. Remediation actions is incorrect as the answer because plug-ins\ncommonly include guidance on how to fix the issues they detect. C. Updated algorithms is incorrect as the answer\nbecause plug-ins are updated with the current detection logic used to test for vulnerabilities.",
    "question": "Which of the following do plug-ins NOT contain?",
    "options": [
      "Remediation actions",
      "Listing of vulnerable local IP addresses",
      "Updated algorithms",
      "Advanced vulnerability information"
    ],
    "correctOption": 1,
    "isMultiSelect": false,
    "domainId": 4,
    "domain": "Domain 4: Security Operations",
    "objective": "4.1-4.4 Security Operations, Monitoring, Incident Response & Forensics"
  },
  {
    "id": "e5-q69",
    "examSet": "Practice Exam 5",
    "examNum": 5,
    "questionNumber": 69,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "C",
    "explanation": "Correct Answer: C\n\nC. User experience (UX) is correct. The user experience is implemented by front-end/UI components and design\nteams; backend microservices expose functionality through APIs but do not render or manage the UX. A. Database is\nincorrect. In a microservices architecture each service typically owns and manages its own data store, which is a\nbackend concern. D. Logs is incorrect. Microservices generate and manage their own logs on the backend for\nmonitoring and troubleshooting. B. Authentication is incorrect. Authentication is enforced on the backend \u2014 by the\nservices themselves or delegated to a backend identity provider or API gateway \u2014 not by front-end components.",
    "question": "Which of the following is typically handled by front-end components rather than by backend microservices?",
    "options": [
      "Database",
      "Authentication",
      "User experience (UX)",
      "Logs"
    ],
    "correctOption": 2,
    "isMultiSelect": false,
    "domainId": 1,
    "domain": "Domain 1: General Security Concepts",
    "objective": "1.1-1.4 Security Controls, Cryptography, Identity & Access Management"
  },
  {
    "id": "e5-q70",
    "examSet": "Practice Exam 5",
    "examNum": 5,
    "questionNumber": 70,
    "questionType": "Matching",
    "correctAnswerRaw": "1 = B; 2 = A; 3 = C; 4 = D",
    "explanation": "Correct Answer: 1 = B; 2 = A; 3 = C; 4 = D\n\nThe correct mapping is: Application log records program-specific errors and events \u2014 crashes, exceptions, transaction\nfailures, and application-level warnings generated by software. System log captures kernel messages and hardware\nstatus \u2014 OS-level events, driver errors, boot sequences, and resource utilization. Security log records login failures\nand policy violations \u2014 authentication attempts, access denials, and security-relevant events used for breach\ndetection and compliance auditing. Audit log tracks user access and changes \u2014 who accessed what resource, when,\nand what actions were taken, providing the accountability trail needed for forensic investigations and compliance\nreviews.",
    "question": "Match each log type to its MOST characteristic content. Each description is used exactly once.",
    "matchingItems": [
      {
        "num": 1,
        "text": "Application log",
        "correctLetter": "B"
      },
      {
        "num": 2,
        "text": "System log",
        "correctLetter": "A"
      },
      {
        "num": 3,
        "text": "Security log",
        "correctLetter": "C"
      },
      {
        "num": 4,
        "text": "Audit log",
        "correctLetter": "D"
      }
    ],
    "matchingDescriptions": [
      {
        "letter": "A",
        "text": "Kernel messages and hardware status"
      },
      {
        "letter": "B",
        "text": "Program-specific errors and events"
      },
      {
        "letter": "C",
        "text": "Login failures and policy violations"
      },
      {
        "letter": "D",
        "text": "User access and changes"
      }
    ],
    "correctMapping": {
      "1": "B",
      "2": "A",
      "3": "C",
      "4": "D"
    },
    "options": [
      "A. Kernel messages and hardware status",
      "B. Program-specific errors and events",
      "C. Login failures and policy violations",
      "D. User access and changes"
    ],
    "correctOption": 0,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e5-q71",
    "examSet": "Practice Exam 5",
    "examNum": 5,
    "questionNumber": 71,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "C",
    "explanation": "Correct Answer: C\n\nB. Zero-day exploit is incorrect. A zero-day refers to a vulnerability unknown to the vendor; it describes disclosure\ntiming, not the mechanism of mishandling input. D. Man-in-the-middle is incorrect. MITM attacks intercept or relay\ntraffic between two parties and are unrelated to memory corruption. C. Buffer overflow is correct. A buffer overflow\nexploits poor bounds checking by writing more data into a buffer than it can hold, overwriting adjacent memory and\npotentially crashing the program or executing attacker-supplied code. A. Brute force is incorrect. Brute force\nsystematically tries credentials or keys; it does not involve unexpected input handling flaws.",
    "question": "Fill in the blank: A __________ attack exploits a vulnerability in how software handles unexpected input,\noften crashing or executing code.",
    "options": [
      "Brute force",
      "Zero-day exploit",
      "Buffer overflow",
      "Man-in-the-middle"
    ],
    "correctOption": 2,
    "isMultiSelect": false,
    "domainId": 2,
    "domain": "Domain 2: Threats, Vulnerabilities & Mitigations",
    "objective": "2.1-2.4 Threats, Vulnerabilities, Attack Vectors & Mitigations"
  },
  {
    "id": "e5-q72",
    "examSet": "Practice Exam 5",
    "examNum": 5,
    "questionNumber": 72,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "A",
    "explanation": "Correct Answer: A\n\nA is correct (Bollards): bollards are short, sturdy posts placed to block vehicles from entering an area while leaving\nroom for people to pass on foot. D is incorrect (Access control vestibule): a vestibule controls how many people move\nthrough a doorway to stop tailgating; it does not stop vehicles. B is incorrect (Video surveillance): cameras record and\ndeter but cannot physically stop a moving vehicle. C is incorrect (Access badge): a badge authenticates a person at a\ndoor and has no effect on a vehicle threat.",
    "question": "A data center needs to stop a vehicle from being driven through the main lobby entrance while still letting\npedestrians walk in freely. Which physical security control best meets this need?",
    "options": [
      "Bollards",
      "Video surveillance",
      "Access badge",
      "Access control vestibule"
    ],
    "correctOption": 0,
    "isMultiSelect": false,
    "domainId": 1,
    "domain": "Domain 1: General Security Concepts",
    "objective": "1.1-1.4 Security Controls, Cryptography, Identity & Access Management"
  },
  {
    "id": "e5-q73",
    "examSet": "Practice Exam 5",
    "examNum": 5,
    "questionNumber": 73,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "B",
    "explanation": "Correct Answer: B\n\nA. A RAT does give a threat actor unauthorized remote access through a command-and-control channel, so this\nstatement is true and not the correct choice. B. Correct \u2014 this statement is NOT true: a worm's basic function is to\nself-replicate and spread across systems, while a RAT's basic function is to provide covert remote access and control;\nthey are fundamentally different. C. RATs commonly let an attacker monitor activity, change settings, browse or copy\nfiles, and pivot to other networked systems, so this statement is true and not the correct choice. D. A RAT's\nremote-access capabilities do depend on the malware's features and the compromised user's privileges, so this\nstatement is true and not the correct choice.",
    "question": "Which of the following is NOT true about RATs?",
    "options": [
      "A RAT can give a threat actor unauthorized remote access through a command-and-control channel.",
      "A RAT and a worm have the same basic function.",
      "A RAT can let an attacker monitor activity, modify settings, browse or copy files, and potentially access other networked systems.",
      "A RAT creates a remote-access channel whose capabilities depend on the malware and the compromised user's privileges."
    ],
    "correctOption": 1,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e5-q74",
    "examSet": "Practice Exam 5",
    "examNum": 5,
    "questionNumber": 74,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "A",
    "explanation": "Correct Answer: A\n\nA (Risk register) is correct: a risk register is the living document or system that catalogs all identified threats and their\nassociated risks. Each entry typically records a risk ID, description, likelihood, impact, risk owner, key risk indicators,\ncurrent status, treatment plan, and residual risk, which makes the register the central list the question describes. C\n(Risk assessment) is incorrect because an assessment is the process of evaluating the likelihood and impact of risks,\nnot the list that stores them; its results are fed into the register. B (Risk matrix) is incorrect because a matrix, or heat\nmap, is a visual grid that plots likelihood against impact to prioritize risks, not a comprehensive listing of threats. D\n(Risk portfolio) is incorrect because it is not a standard Security+ term for the document that tracks identified risks; the\nregister is the recognized artifact.",
    "question": "What is a list of potential threats and associated risks called?",
    "options": [
      "Risk register",
      "Risk matrix",
      "Risk assessment",
      "Risk portfolio"
    ],
    "correctOption": 0,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e5-q75",
    "examSet": "Practice Exam 5",
    "examNum": 5,
    "questionNumber": 75,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "B",
    "explanation": "Correct Answer: B\n\nB. Impersonation is correct: the question asks for the identity-deception technique, and falsely claiming to be the CEO\nis exactly that. C. Shoulder surfing is incorrect because it involves visually observing someone's screen or keypad. D.\nDumpster diving is incorrect because it involves recovering information from discarded materials. A. Vishing is\nincorrect here because it names the voice-call delivery vector, which the stem explicitly excludes in favor of the\nidentity-deception technique.",
    "question": "A helpdesk technician receives a call from someone who falsely claims to be the CEO and urgently\nrequests password changes. Which social-engineering technique describes the caller's false claim of\nidentity, rather than the voice-call delivery vector?",
    "options": [
      "Vishing",
      "Impersonation",
      "Shoulder surfing",
      "Dumpster diving"
    ],
    "correctOption": 1,
    "isMultiSelect": false,
    "domainId": 2,
    "domain": "Domain 2: Threats, Vulnerabilities & Mitigations",
    "objective": "2.1-2.4 Threats, Vulnerabilities, Attack Vectors & Mitigations"
  },
  {
    "id": "e5-q76",
    "examSet": "Practice Exam 5",
    "examNum": 5,
    "questionNumber": 76,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "D",
    "explanation": "Correct Answer: D\n\nA. Developer is incorrect because developers hold elevated rights in development environments and reach production\nonly through controlled change processes, not with a standard business-user profile. C. Service account is incorrect\nbecause service accounts are non-interactive identities scoped to run a specific application or scheduled task; they do\nnot perform routine business work. B. Root user is incorrect because root or administrator is the highest-privilege\naccount and is reserved for system administration, not daily tasks. D. End user is correct: following least privilege,\nordinary end users doing day-to-day business tasks in production should operate with standard nonadministrative\npermissions.",
    "question": "Which type of user should normally receive standard nonadministrative permissions for performing routine\nbusiness tasks in a production environment?",
    "options": [
      "Developer",
      "Root user",
      "Service account",
      "End user"
    ],
    "correctOption": 3,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e5-q77",
    "examSet": "Practice Exam 5",
    "examNum": 5,
    "questionNumber": 77,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "B",
    "explanation": "Correct Answer: B\n\nA. DAC is incorrect. Discretionary Access Control lets the data owner decide who gets access, which is flexible but not\nrule-and-label based. B. MAC is correct. Mandatory Access Control uses system-enforced policies that rely on\npredefined rules and classification labels (e.g., Secret, Top Secret) attached to subjects and objects; users cannot\noverride these decisions. D. RBAC is incorrect. Role-Based Access Control grants permissions based on job roles, not\non rule-and-label logic. C. ABAC is incorrect. Attribute-Based Access Control evaluates attributes of users, resources,\nand environment at access time; it is rule-driven but not based on classification labels the way MAC is.",
    "question": "Which of the following access control models uses predefined rules and labels to enforce policies?",
    "options": [
      "DAC",
      "MAC",
      "ABAC",
      "RBAC"
    ],
    "correctOption": 1,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e5-q78",
    "examSet": "Practice Exam 5",
    "examNum": 5,
    "questionNumber": 78,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "C",
    "explanation": "Correct Answer: C\n\nB. AUP is incorrect. An Acceptable Use Policy defines how employees may use organizational systems and data, not\nhow long records are kept. D. SLA is incorrect. A Service Level Agreement specifies service performance metrics\nbetween two parties; it does not govern retention periods. C. Data retention policy is correct. A data retention policy\ndefines how long different types of records, including email communications, must be stored before they are archived\nor disposed of, balancing legal, regulatory, and operational needs. A. Risk register is incorrect. A risk register lists\nidentified risks and their treatments; it does not dictate retention schedules.",
    "question": "Which document should outline how long an organization retains email communications?",
    "options": [
      "Risk register",
      "AUP",
      "Data retention policy",
      "SLA"
    ],
    "correctOption": 2,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e5-q79",
    "examSet": "Practice Exam 5",
    "examNum": 5,
    "questionNumber": 79,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "D",
    "explanation": "Correct Answer: D\n\nD. Non-repudiation is correct. Non-repudiation ensures that a user cannot credibly deny having performed an action. It\nis achieved through digital signatures, PKI-based authentication, and immutable audit logs with timestamps. When a\nuser signs a transaction with their private key, only they possess that key \u2014 denial becomes computationally\ninfeasible. C. Encryption is incorrect. Encryption protects the confidentiality of data by making it unreadable to\nunauthorized parties \u2014 it does not prevent a user from denying that they performed an action. A. Tokenization is\nincorrect. Tokenization replaces sensitive data values with non-sensitive placeholders (tokens) for data protection \u2014 it\nhas no connection to proving or denying user actions. B. VPN tunnel is incorrect. A VPN tunnel provides encrypted,\nauthenticated remote connectivity \u2014 while it authenticates the connection, it does not provide non-repudiation of\nspecific user actions performed after connecting.",
    "question": "Fill in the blank: __________ ensures that a user cannot deny having performed an action.",
    "options": [
      "Tokenization",
      "VPN tunnel",
      "Encryption",
      "Non-repudiation"
    ],
    "correctOption": 3,
    "isMultiSelect": false,
    "domainId": 4,
    "domain": "Domain 4: Security Operations",
    "objective": "4.1-4.4 Security Operations, Monitoring, Incident Response & Forensics"
  },
  {
    "id": "e5-q80",
    "examSet": "Practice Exam 5",
    "examNum": 5,
    "questionNumber": 80,
    "questionType": "Matching",
    "correctAnswerRaw": "1 = D; 2 = B; 3 = A; 4 = C",
    "explanation": "Correct Answer: 1 = D; 2 = B; 3 = A; 4 = C\n\nThe correct pairings are: Provisioning = Granting user access and roles at onboarding; Deprovisioning = Terminating\nuser access after departure; SSO = Logging into multiple systems with one credential; Federation = Authenticating\nacross domains or organizations. Provisioning creates accounts and assigns appropriate permissions when a user\njoins. Deprovisioning ensures all access is removed when an employee leaves, preventing unauthorized use of former\ncredentials. SSO allows one authenticated session to grant access to multiple applications, reducing password fatigue.\nFederation extends authentication trust across organizational boundaries, enabling a partner company's credentials to\nbe accepted on your systems.",
    "question": "Match each identity-related concept with its function.",
    "matchingItems": [
      {
        "num": 1,
        "text": "Provisioning",
        "correctLetter": "D"
      },
      {
        "num": 2,
        "text": "Deprovisioning",
        "correctLetter": "B"
      },
      {
        "num": 3,
        "text": "SSO",
        "correctLetter": "A"
      },
      {
        "num": 4,
        "text": "Federation",
        "correctLetter": "C"
      }
    ],
    "matchingDescriptions": [
      {
        "letter": "A",
        "text": "Logging into multiple systems with one credential"
      },
      {
        "letter": "B",
        "text": "Terminating user access after departure"
      },
      {
        "letter": "C",
        "text": "Authenticating across domains or organizations"
      },
      {
        "letter": "D",
        "text": "Granting user access and roles at onboarding"
      }
    ],
    "correctMapping": {
      "1": "D",
      "2": "B",
      "3": "A",
      "4": "C"
    },
    "options": [
      "A. Logging into multiple systems with one credential",
      "B. Terminating user access after departure",
      "C. Authenticating across domains or organizations",
      "D. Granting user access and roles at onboarding"
    ],
    "correctOption": 0,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e5-q81",
    "examSet": "Practice Exam 5",
    "examNum": 5,
    "questionNumber": 81,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "D",
    "explanation": "Correct Answer: D\n\nD (Guideline) is correct: a guideline is a recommendation or best-practice suggestion that helps people apply policies\nand standards sensibly, but following it is discretionary. Guidelines offer flexibility where a rigid rule would not fit every\nsituation. C (Policy) is incorrect because a policy is a mandatory, high-level statement of management intent, such as\nan acceptable use policy, that every employee is required to follow. A (Standard) is incorrect because a standard is a\nmandatory rule that specifies exactly how a policy is met, for example minimum password length or an approved\nencryption algorithm. B (Procedure) is incorrect because a procedure is a mandatory step-by-step instruction for\ncarrying out a task, such as an onboarding checklist or a change management playbook, and deviations from it are not\npermitted.",
    "question": "Which of the following is voluntary and not mandatory?",
    "options": [
      "Standard",
      "Procedure",
      "Policy",
      "Guideline"
    ],
    "correctOption": 3,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e5-q82",
    "examSet": "Practice Exam 5",
    "examNum": 5,
    "questionNumber": 82,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "D",
    "explanation": "Correct Answer: D\n\nB. It replicates itself and spreads through email attachments is incorrect. Self-replication and email propagation\ndescribe a worm, not a logic bomb. A. It disables antivirus protection immediately on infection is incorrect. Immediate\naction is not characteristic of a logic bomb, which stays dormant and hidden until it is triggered. D. It activates only\nafter a specific condition is met is correct. A logic bomb is malicious code that remains dormant until a defined trigger\n(a specific date, event, or condition) is met, at which point it executes its payload. C. It encrypts every attached drive\nthe moment it executes is incorrect. Instant mass encryption describes ransomware behavior, not the delayed,\ncondition-based trigger of a logic bomb.",
    "question": "What is a key sign of a logic bomb in a compromised system?",
    "options": [
      "It disables antivirus protection immediately on infection",
      "It replicates itself and spreads through email attachments",
      "It encrypts every attached drive the moment it executes",
      "It activates only after a specific condition is met"
    ],
    "correctOption": 3,
    "isMultiSelect": false,
    "domainId": 2,
    "domain": "Domain 2: Threats, Vulnerabilities & Mitigations",
    "objective": "2.1-2.4 Threats, Vulnerabilities, Attack Vectors & Mitigations"
  },
  {
    "id": "e5-q83",
    "examSet": "Practice Exam 5",
    "examNum": 5,
    "questionNumber": 83,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "C",
    "explanation": "Correct Answer: C\n\nB. Authorization is incorrect. Authorization logs record what an already-identified user was permitted to access; a\nbrute-force attack is about repeated login attempts, which are recorded at authentication. D. Accounting is incorrect.\nAccounting logs track resource usage and actions during a session, not the succession of failed logon attempts that\ncharacterize brute forcing. C. Authentication logs are correct. Brute-force attempts appear as many failed logon events\nfor an account in a short window; authentication logs capture these success/failure records, making the pattern visible.\nA. Encryption is incorrect. Encryption protects data confidentiality and is not a category of log that would reveal\nrepeated login attempts.",
    "question": "Fill in the blank: __________ logs would be most useful for identifying a brute-force login attempt.",
    "options": [
      "Encryption",
      "Authorization",
      "Authentication logs",
      "Accounting"
    ],
    "correctOption": 2,
    "isMultiSelect": false,
    "domainId": 4,
    "domain": "Domain 4: Security Operations",
    "objective": "4.1-4.4 Security Operations, Monitoring, Incident Response & Forensics"
  },
  {
    "id": "e5-q84",
    "examSet": "Practice Exam 5",
    "examNum": 5,
    "questionNumber": 84,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "B",
    "explanation": "Correct Answer: B\n\nD. Intrusion prevention device is incorrect. An IPS inspects traffic inline to detect and block malicious activity; it does\nnot relay internal users' requests on their behalf. B. Forward proxy server is correct. A forward proxy intercepts\nrequests from internal users and makes those requests to external resources on their behalf, commonly for content\nfiltering and access control. A. Reverse proxy server is incorrect. D reverse proxy handles requests coming from\nexternal clients toward internal servers, the opposite direction from what is described. C. Host detection server is\nincorrect. 'Host detection server' is not a recognized network device for proxying user requests; it is a distractor.",
    "question": "Which device intercepts internal user requests and then processes those requests on behalf of the users?",
    "options": [
      "Reverse proxy server",
      "Forward proxy server",
      "Host detection server",
      "Intrusion prevention device"
    ],
    "correctOption": 1,
    "isMultiSelect": false,
    "domainId": 3,
    "domain": "Domain 3: Security Architecture",
    "objective": "3.1-3.4 Security Architecture, Cloud, Infrastructure & Resilience"
  },
  {
    "id": "e5-q85",
    "examSet": "Practice Exam 5",
    "examNum": 5,
    "questionNumber": 85,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "A",
    "explanation": "Correct Answer: A\n\nD. Reduces log sizes is incorrect. Patching does not shrink log files; log management tools handle log volume. B.\nIncreases bandwidth is incorrect. Patches have no bandwidth impact beyond the download itself. A. Fixes known\nvulnerabilities is correct. Patch management systematically deploys vendor updates that close identified security flaws,\nclosing exploitable gaps before attackers can leverage them. C. Obfuscates software versions is incorrect. Hiding\nversion banners is a security-through-obscurity tactic; patching removes the actual underlying vulnerability instead of\nhiding its presence.",
    "question": "Which of the following is a key benefit of patch management?",
    "options": [
      "Fixes known vulnerabilities",
      "Increases bandwidth",
      "Obfuscates software versions",
      "Reduces log sizes"
    ],
    "correctOption": 0,
    "isMultiSelect": false,
    "domainId": 1,
    "domain": "Domain 1: General Security Concepts",
    "objective": "1.1-1.4 Security Controls, Cryptography, Identity & Access Management"
  },
  {
    "id": "e5-q86",
    "examSet": "Practice Exam 5",
    "examNum": 5,
    "questionNumber": 86,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "C",
    "explanation": "Correct Answer: C\n\nC. Availability is correct. Availability is the CIA triad pillar that guarantees authorized users can access systems and\ndata whenever required, through controls such as redundancy, fault tolerance, and capacity planning. D.\nConfidentiality is incorrect. Confidentiality restricts access to authorized parties and protects data disclosure, not\nuptime. A. Integrity is incorrect. Integrity ensures data is not altered without authorization; it does not guarantee\naccess. B. Accountability is incorrect. Accountability ties actions to identities via logging and non-repudiation; it is a\nsupporting principle, not the one guaranteeing access.",
    "question": "Fill in the blank: The __________ principle ensures a system continues to provide access to resources\nwhen needed.",
    "options": [
      "Integrity",
      "Accountability",
      "Availability",
      "Confidentiality"
    ],
    "correctOption": 2,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e5-q87",
    "examSet": "Practice Exam 5",
    "examNum": 5,
    "questionNumber": 87,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "A",
    "explanation": "Correct Answer: A\n\nB. Configure a load balancer in front of the DMZ web server pool is incorrect. A load balancer distributes traffic for\nperformance and availability - it does not enforce a security boundary between the DMZ and the internal network. A.\nUse stateful firewalls between DMZ and internal networks is correct. A stateful firewall inspects the full context of each\nconnection (not just individual packets), allowing legitimate return traffic while blocking unsolicited inbound\nconnections from the DMZ - the critical control for protecting internal resources from a potentially compromised DMZ.\nD. Enable NAT traversal for inbound and outbound application sessions is incorrect. NAT traversal facilitates\nconnectivity through NAT devices and provides no security isolation between network zones. C. Implement failover\nrouting between redundant edge router pairs is incorrect. Failover routing supports availability during link failures but\ndoes not enforce a security boundary between DMZ and internal networks.",
    "question": "A company hosts public services in a DMZ. Which of the following should be the next best control to\nprotect internal resources?",
    "options": [
      "Use stateful firewalls between DMZ and internal networks",
      "Configure a load balancer in front of the DMZ web server pool",
      "Implement failover routing between redundant edge router pairs",
      "Enable NAT traversal for inbound and outbound application sessions"
    ],
    "correctOption": 0,
    "isMultiSelect": false,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e5-q88",
    "examSet": "Practice Exam 5",
    "examNum": 5,
    "questionNumber": 88,
    "questionType": "Select Two",
    "correctAnswerRaw": "C, E",
    "explanation": "Correct Answer: C, E\n\nC. Input sanitization is correct. Validating and cleaning user-supplied input removes or neutralizes the characters and\nquery fragments an attacker would use to alter a SQL statement. A. Code obfuscation is incorrect. Obfuscation makes\nsource code harder to read but does nothing to stop malicious input from reaching the database query. E. Use of\nprepared statements is correct. Parameterized (prepared) queries bind user input as data rather than executable SQL,\nso injected commands cannot change the query's structure \u2014 the primary defense against SQLi. D. Server\nredundancy is incorrect. Redundant servers improve availability; they provide no protection against injection. B.\nApplication load balancing is incorrect. Load balancing distributes traffic for performance and availability and has no\nbearing on how database queries are constructed.",
    "question": "Select TWO methods to help prevent SQL injection attacks:",
    "options": [
      "Code obfuscation",
      "Application load balancing",
      "Input sanitization",
      "Server redundancy",
      "Use of prepared statements"
    ],
    "optionLetters": [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    "isMultiSelect": true,
    "requiredSelectCount": 2,
    "correctOptions": [
      2,
      4
    ],
    "correctLetters": [
      "C",
      "E"
    ],
    "correctOption": 2,
    "domainId": 5,
    "domain": "Domain 5: Security Program Management & Oversight",
    "objective": "5.1-5.5 Security Governance, Risk Management & Compliance"
  },
  {
    "id": "e5-q89",
    "examSet": "Practice Exam 5",
    "examNum": 5,
    "questionNumber": 89,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "A",
    "explanation": "Correct Answer: A\n\nC. Conceals the file's contents from unauthorized viewers is incorrect. Hashing does not conceal data; it produces a\nfixed-length digest and cannot be reversed, so it neither hides nor reveals the original contents. A. Ensures integrity by\ngenerating a unique fingerprint is correct. A hash function produces a fixed-length digest that acts as a unique\nfingerprint of the file; if even one bit changes, the hash changes, so comparing hashes confirms whether the file has\nbeen altered. B. Encrypts the file's contents with a symmetric encryption key is incorrect. Encryption transforms data\ninto reversible ciphertext using a key; hashing is one-way and uses no key, so it does not encrypt. D. Obfuscates the\nfile's metadata fields from indexing tools is incorrect. Hashing neither targets nor obscures metadata; it computes a\ndigest over the file's contents to verify integrity.",
    "question": "A file hash does which of the following?",
    "options": [
      "Ensures integrity by generating a unique fingerprint",
      "Encrypts the file's contents with a symmetric encryption key",
      "Conceals the file's contents from unauthorized viewers",
      "Obfuscates the file's metadata fields from indexing tools"
    ],
    "correctOption": 0,
    "isMultiSelect": false,
    "domainId": 1,
    "domain": "Domain 1: General Security Concepts",
    "objective": "1.1-1.4 Security Controls, Cryptography, Identity & Access Management"
  },
  {
    "id": "e5-q90",
    "examSet": "Practice Exam 5",
    "examNum": 5,
    "questionNumber": 90,
    "questionType": "Multiple Choice",
    "correctAnswerRaw": "D",
    "explanation": "Correct Answer: D\n\nA DNS resource attack typically targets a specific user's DNS resources, affecting only that individual user's ability to\nresolve domain names correctly. Other DNS attacks usually have broader impacts on multiple users or entire\nnetworks.",
    "question": "Which DNS attack would only impact a single user?",
    "options": [
      "DNS hijack attack",
      "DNS poisoning attack",
      "DNS overflow attack",
      "DNS resource attack"
    ],
    "correctOption": 3,
    "isMultiSelect": false,
    "domainId": 1,
    "domain": "Domain 1: General Security Concepts",
    "objective": "1.1-1.4 Security Controls, Cryptography, Identity & Access Management"
  }
];
