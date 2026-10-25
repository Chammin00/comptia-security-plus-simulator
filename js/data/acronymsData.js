// CompTIA Security+ SY0-701 High-Yield Acronyms & Terminology Master Dataset
// Fully synchronized with Updated-acronyms-Security-Plus.txt and official CompTIA SY0-701 objectives

const SECURITY_ACRONYMS = [
  {
    acronym: "AAA",
    term: "Authentication, Authorization, and Accounting",
    domain: "Domain 1 & 3",
    definition: "A centralized security framework that verifies a user's identity (Authentication), defines permissions and access privileges (Authorization), and tracks/logs user activities (Accounting).",
    tip: "RADIUS and TACACS+ are the industry-standard AAA protocols."
  },
  {
    acronym: "ACL",
    term: "Access Control List",
    domain: "Domain 3: Security Architecture",
    definition: "A sequential list of rule statements configured on routers, switches, or firewalls that permits or denies network packets based on IP addresses, ports, and protocols.",
    tip: "Firewall ACLs are evaluated top-down with an implicit deny all rule at the end."
  },
  {
    acronym: "AES",
    term: "Advanced Encryption Standard",
    domain: "Domain 1: General Security Concepts",
    definition: "Symmetric block cipher with key lengths of 128, 192, and 256 bits (block size 128 bits). The global standard for data-at-rest and data-in-transit encryption.",
    tip: "AES-GCM mode provides both confidentiality and data authenticity (AEAD)."
  },
  {
    acronym: "ALE",
    term: "Annual Loss Expectancy",
    domain: "Domain 5: Program Management & Oversight",
    definition: "The total expected monetary financial loss resulting from a specific risk over the course of an entire year.",
    tip: "Formula: ALE = SLE (Single Loss Expectancy) × ARO (Annualized Rate of Occurrence)."
  },
  {
    acronym: "APT",
    term: "Advanced Persistent Threat",
    domain: "Domain 2: Threats, Vulnerabilities & Mitigations",
    definition: "A sophisticated, highly resourced threat actor (often nation-state backed) that establishes a stealthy, continuous long-term presence within a target network.",
    tip: "Characterized by high capability, patience, and custom zero-day exploits."
  },
  {
    acronym: "ARO",
    term: "Annualized Rate of Occurrence",
    domain: "Domain 5: Program Management & Oversight",
    definition: "The estimated number of times a specific risk or loss event is expected to occur within a single year (e.g., losing 7 laptops per year = ARO of 7).",
    tip: "Multiplied by SLE to calculate total Annual Loss Expectancy (ALE)."
  },
  {
    acronym: "Attestation",
    term: "Cryptographic / Security Attestation",
    domain: "Domain 1 & 4",
    definition: "A formal verification or audit process where a system proves its integrity and security posture using digital signatures, hardware measurements, or formal auditor statements.",
    tip: "TPM remote attestation checks boot measurements against trusted baselines."
  },
  {
    acronym: "AUP",
    term: "Acceptable Use Policy",
    domain: "Domain 5: Program Management & Oversight",
    definition: "An organizational policy agreed to by employees detailing the permitted, authorized, and prohibited uses of company computer systems, hardware, networks, and data.",
    tip: "Signed by employees during onboarding to reduce employer liability and establish clear rules of conduct."
  },
  {
    acronym: "BIA",
    term: "Business Impact Analysis",
    domain: "Domain 5: Program Management & Oversight",
    definition: "A systematic assessment that identifies critical business functions, the consequences of their disruption, and determines RTO, RPO, and MTD.",
    tip: "Conducted as part of BCP before designing disaster recovery plans."
  },
  {
    acronym: "BPA",
    term: "Business Partners Agreement",
    domain: "Domain 5: Program Management & Oversight",
    definition: "A formal written agreement between business partners establishing the terms, financial sharing, responsibilities, and operational procedures of their joint commercial endeavor.",
    tip: "Governs the business relationship between independent partnering companies."
  },
  {
    acronym: "BYOD",
    term: "Bring Your Own Device",
    domain: "Domain 3: Security Architecture",
    definition: "Corporate policy allowing employees to use personal mobile devices for enterprise work. Managed via MDM, MAM, and containerization.",
    tip: "Containerization prevents personal and corporate data from mixing and enables selective remote wipe."
  },
  {
    acronym: "CA",
    term: "Certificate Authority",
    domain: "Domain 1: General Security Concepts",
    definition: "A trusted entity that issues, signs, validates, and manages digital X.509 public key certificates in a Public Key Infrastructure (PKI).",
    tip: "Root CAs sign Intermediate CAs, establishing a chain of trust."
  },
  {
    acronym: "CASB",
    term: "Cloud Access Security Broker",
    domain: "Domain 3: Security Architecture",
    definition: "Software tool or service sitting between cloud service consumers and providers to enforce enterprise security policies (DLP, encryption, access control, shadow IT detection).",
    tip: "Deployed in forward proxy, reverse proxy, or API mode."
  },
  {
    acronym: "CBC",
    term: "Cipher Block Chaining",
    domain: "Domain 1: General Security Concepts",
    definition: "A block cipher mode of operation where each block of plaintext is XORed with the previous ciphertext block before encryption. Requires an Initialization Vector (IV).",
    tip: "Vulnerable to padding oracle attacks if not paired with MAC."
  },
  {
    acronym: "CIA",
    term: "Confidentiality, Integrity, and Availability",
    domain: "Domain 1: General Security Concepts",
    definition: "The fundamental triad of information security: Confidentiality (encryption/access control), Integrity (hashing/digital signatures), Availability (redundancy/fault tolerance).",
    tip: "Every security control aligns back to one or more pillars of the CIA triad."
  },
  {
    acronym: "COPE",
    term: "Corporate-Owned, Personally Enabled",
    domain: "Domain 3: Security Architecture",
    definition: "A mobile deployment model where the enterprise purchases and owns standard devices but permits employees to use them for approved personal tasks alongside business functions.",
    tip: "Standardizes corporate hardware while providing flexibility for employee personal use."
  },
  {
    acronym: "CRL",
    term: "Certificate Revocation List",
    domain: "Domain 1: General Security Concepts",
    definition: "A published list of digital certificates that have been revoked before their scheduled expiration date, maintained directly by the issuing Certificate Authority (CA).",
    tip: "Requires clients to download the entire list from the CA, which can introduce latency compared to OCSP."
  },
  {
    acronym: "CSRF / XSRF",
    term: "Cross-Site Request Forgery",
    domain: "Domain 2: Threats, Vulnerabilities & Mitigations",
    definition: "An attack that tricks a victim's authenticated browser into executing unwanted actions on a trusted web application without their knowledge.",
    tip: "Mitigated using anti-CSRF tokens, SameSite cookies, and re-authentication."
  },
  {
    acronym: "CTI",
    term: "Cyber Threat Intelligence",
    domain: "Domain 2: Threats, Vulnerabilities & Mitigations",
    definition: "Information collected, processed, and analyzed regarding cyber threat actors, motives, attack vectors, and techniques used to make proactive defensive security decisions.",
    tip: "Categorized into Strategic (executive), Tactical (TTPs), and Operational (IOCs) intelligence."
  },
  {
    acronym: "CVE",
    term: "Common Vulnerabilities and Exposures",
    domain: "Domain 2: Threats, Vulnerabilities & Mitigations",
    definition: "A publicly known list of standardized identifiers for cybersecurity vulnerabilities maintained by the MITRE Corporation.",
    tip: "Standard format: CVE-YYYY-NNNNN."
  },
  {
    acronym: "CVSS",
    term: "Common Vulnerability Scoring System",
    domain: "Domain 2: Threats, Vulnerabilities & Mitigations",
    definition: "A standardized framework for rating the severity of software vulnerabilities on a numerical scale from 0.0 to 10.0 (None, Low, Medium, High, Critical).",
    tip: "Composed of Base, Temporal, and Environmental metric groups."
  },
  {
    acronym: "CYOD",
    term: "Choose Your Own Device",
    domain: "Domain 3: Security Architecture",
    definition: "A deployment model where employees choose a mobile device from an organization-approved list of supported makes and models.",
    tip: "Standardizes hardware while giving employees personal choice."
  },
  {
    acronym: "DAC",
    term: "Discretionary Access Control",
    domain: "Domain 1: General Security Concepts",
    definition: "Access control model where the resource owner determines who is granted access and what privileges they possess (e.g., standard NTFS/Unix permissions).",
    tip: "Contrast with MAC (labels/clearance) and RBAC (roles/groups)."
  },
  {
    acronym: "DDoS",
    term: "Distributed Denial of Service",
    domain: "Domain 2: Threats, Vulnerabilities & Mitigations",
    definition: "A malicious attempt to disrupt normal traffic of a targeted server, service, or network by overwhelming the target with a flood of Internet traffic from multiple compromised systems (botnet).",
    tip: "Mitigated by CDN Anycast scrubbing, traffic rate-limiting, and volumetric filters."
  },
  {
    acronym: "DHCP",
    term: "Dynamic Host Configuration Protocol",
    domain: "Domain 3: Security Architecture",
    definition: "Network protocol used to automatically assign IP addresses and network configuration parameters to client devices (UDP 67/68).",
    tip: "DHCP Snooping on switches prevents rogue DHCP servers."
  },
  {
    acronym: "DKIM",
    term: "DomainKeys Identified Mail",
    domain: "Domain 3: Security Architecture",
    definition: "An email authentication method that uses cryptographic digital signatures and a DNS public key to verify that an email was sent by the authentic domain owner and was not altered in transit.",
    tip: "Provides cryptographic integrity and sender validation for outgoing messages."
  },
  {
    acronym: "DLP",
    term: "Data Loss Prevention",
    domain: "Domain 1 & 4",
    definition: "A suite of technologies and policies designed to scan, detect, and block unauthorized transmission, exfiltration, or modification of sensitive data at rest, in transit, and in use.",
    tip: "Can inspect outbound email, USB transfers, clipboard actions, and network flows."
  },
  {
    acronym: "DMARC",
    term: "Domain-based Message Authentication, Reporting, and Conformance",
    domain: "Domain 3: Security Architecture",
    definition: "An email security protocol that uses SPF and DKIM to determine the preferred disposition (accept, quarantine/spam, or reject) of suspicious incoming email messages.",
    tip: "Allows domain owners to publish policy instructions on how receivers should handle unauthorized messages."
  },
  {
    acronym: "DNS",
    term: "Domain Name System",
    domain: "Domain 3: Security Architecture",
    definition: "A hierarchical, decentralized naming system that translates human-friendly domain names (e.g., example.com) into numerical IP addresses (Port 53).",
    tip: "Secured using DNSSEC to prevent spoofing and cache poisoning."
  },
  {
    acronym: "DNSSEC",
    term: "Domain Name System Security Extensions",
    domain: "Domain 3: Security Architecture",
    definition: "A suite of extension specifications for securing DNS information by cryptographically authenticating DNS responses using public key cryptography.",
    tip: "Prevents DNS spoofing, cache poisoning, and man-in-the-middle attacks."
  },
  {
    acronym: "DRP",
    term: "Disaster Recovery Plan",
    domain: "Domain 5: Program Management & Oversight",
    definition: "A documented, structured approach describing how an organization can quickly resume work after an unplanned incident (hot/warm/cold sites, backups).",
    tip: "Focuses on IT infrastructure recovery, whereas BCP covers the whole business."
  },
  {
    acronym: "EAP",
    term: "Extensible Authentication Protocol",
    domain: "Domain 3: Security Architecture",
    definition: "An authentication routing framework commonly used in enterprise wireless networks and point-to-point connections to support diverse authentication mechanisms (EAP-TLS, PEAP, EAP-FAST).",
    tip: "EAP-TLS provides highest security through mutual certificate authentication."
  },
  {
    acronym: "EDR",
    term: "Endpoint Detection and Response",
    domain: "Domain 4: Security Operations",
    definition: "A host-based security solution that continuously monitors endpoint device behaviors, detects anomalies, and enables automated threat containment and forensic investigation.",
    tip: "Catches advanced zero-day attacks and behavioral anomalies that slip past basic antivirus."
  },
  {
    acronym: "Exfiltration",
    term: "Data Exfiltration",
    domain: "Domain 2: Threats, Vulnerabilities & Mitigations",
    definition: "The unauthorized transfer or theft of sensitive organizational data from a system or network by an attacker or malicious insider.",
    tip: "Commonly executed over covert channels, DNS tunneling, or encrypted web sessions; mitigated by DLP."
  },
  {
    acronym: "FAR",
    term: "False Acceptance Rate (Type II Error)",
    domain: "Domain 1: General Security Concepts",
    definition: "The rate at which a biometric system incorrectly authenticates an unauthorized user. Represents a critical security breach.",
    tip: "CER (Crossover Error Rate) is the point where FAR equals FRR."
  },
  {
    acronym: "Federation",
    term: "Identity Federation",
    domain: "Domain 3: Security Architecture",
    definition: "An identity management system that links a user's identity across distinct organizational security boundaries, allowing members of one organization to access resources of another using existing credentials.",
    tip: "Standardized across enterprises using SAML, OAuth 2.0, and OpenID Connect."
  },
  {
    acronym: "FRR",
    term: "False Rejection Rate (Type I Error)",
    domain: "Domain 1: General Security Concepts",
    definition: "The rate at which a biometric system incorrectly denies access to an authorized legitimate user. Represents a usability issue.",
    tip: "Lowering sensitivity reduces FRR but increases FAR."
  },
  {
    acronym: "GDPR",
    term: "General Data Protection Regulation",
    domain: "Domain 5: Program Management & Oversight",
    definition: "A comprehensive European Union regulation governing data protection, privacy, and personal data rights for individuals within the EU/EEA.",
    tip: "Requires breach notification within 72 hours and grants 'right to be forgotten'."
  },
  {
    acronym: "GPO",
    term: "Group Policy Object",
    domain: "Domain 3: Security Architecture",
    definition: "A centralized management feature in Microsoft Active Directory that allows system administrators to define and enforce security settings, configurations, and user policies across all domain computers.",
    tip: "Enforces password complexity, screen lockouts, and disables USB ports enterprise-wide."
  },
  {
    acronym: "HA",
    term: "High Availability",
    domain: "Domain 3: Security Architecture",
    definition: "A system design architecture that ensures continuous operational uptime and eliminates single points of failure through redundancy, clustering, and automatic failover mechanisms.",
    tip: "Measured in percentages of uptime ('five nines' = 99.999%)."
  },
  {
    acronym: "HIDS / HIPS",
    term: "Host-based Intrusion Detection/Prevention System",
    domain: "Domain 4: Security Operations",
    definition: "Security application installed on individual endpoints that monitors local system calls, file integrity, and network traffic for malicious activity.",
    tip: "HIPS can actively block/terminate processes, whereas HIDS only alerts."
  },
  {
    acronym: "HSM",
    term: "Hardware Security Module",
    domain: "Domain 1: General Security Concepts",
    definition: "A high-end cryptographic hardware appliance designed for secure generation, storage, and management of digital keys.",
    tip: "HSMs provide tamper-evident and tamper-resistant cryptographic storage."
  },
  {
    acronym: "HTTPS",
    term: "Hypertext Transfer Protocol Secure",
    domain: "Domain 1 & 3",
    definition: "An encrypted web communication protocol that encapsulates HTTP traffic inside a TLS/SSL tunnel to guarantee confidentiality, data integrity, and server authentication on TCP port 443.",
    tip: "Protects web logins, sessions, and e-commerce data in transit."
  },
  {
    acronym: "IaC",
    term: "Infrastructure as Code",
    domain: "Domain 3: Security Architecture",
    definition: "The management and provisioning of computer data centers, networks, and cloud resources through machine-readable configuration definition files (e.g., Terraform, Ansible, CloudFormation).",
    tip: "Enables version control, automated security testing, and consistent immutable infrastructure."
  },
  {
    acronym: "IAM",
    term: "Identity and Access Management",
    domain: "Domain 1 & 3",
    definition: "A comprehensive framework of security policies, technologies, and processes that ensures authorized individuals have appropriate access to enterprise resources across authentication, authorization, and user lifecycles.",
    tip: "Encompasses authentication, authorization, user provisioning, role-based access, and auditing."
  },
  {
    acronym: "ICS",
    term: "Industrial Control Systems",
    domain: "Domain 3: Security Architecture",
    definition: "Command and control systems used to monitor and manage industrial processes, critical infrastructure, power grids, water treatment, and manufacturing facilities (includes SCADA and PLCs).",
    tip: "Requires strict network segmentation, air gapping, and specialized OT security."
  },
  {
    acronym: "IOC",
    term: "Indicator of Compromise",
    domain: "Domain 2 & 4",
    definition: "A piece of forensic evidence or digital artifact indicating that a computer system or network has been breached (e.g., suspicious IP addresses, malware file hashes, abnormal outbound connections).",
    tip: "Known as the digital footprints left behind during and after an attack."
  },
  {
    acronym: "IoT",
    term: "Internet of Things",
    domain: "Domain 3: Security Architecture",
    definition: "A network of physical devices (sensors, smart cameras, thermostats, appliances) equipped with computing and network connectivity that often lack traditional enterprise security controls.",
    tip: "Should always be isolated on dedicated IoT VLANs with strict firewall egress controls."
  },
  {
    acronym: "IPsec",
    term: "Internet Protocol Security",
    domain: "Domain 3: Security Architecture",
    definition: "A suite of cryptographic protocols that encrypts and authenticates network packets across an IP network, commonly used for site-to-site and remote access VPN tunnels.",
    tip: "Utilizes Authentication Header (AH) for integrity and Encapsulating Security Payload (ESP) for confidentiality."
  },
  {
    acronym: "LDAP",
    term: "Lightweight Directory Access Protocol",
    domain: "Domain 1 & 3",
    definition: "An open, vendor-neutral network protocol used to query, search, and manage centralized directory services and user identity databases (TCP/UDP port 389, LDAPS port 636).",
    tip: "Forms the querying foundation for Microsoft Active Directory and OpenLDAP."
  },
  {
    acronym: "MAC",
    term: "Mandatory Access Control / Message Authentication Code",
    domain: "Domain 1: General Security Concepts",
    definition: "1) Access model using security clearance labels assigned by the OS/admin (e.g. Top Secret). 2) Cryptographic checksum verifying data integrity and authenticity.",
    tip: "In MAC access control, users cannot change permissions on their own files."
  },
  {
    acronym: "MD5",
    term: "Message-Digest Algorithm 5",
    domain: "Domain 1: General Security Concepts",
    definition: "A legacy cryptographic hash function producing a 128-bit (32 hexadecimal characters) hash value; now considered cryptographically broken and vulnerable to collision attacks.",
    tip: "No longer secure for digital signatures or certificates, but still used for simple checksums."
  },
  {
    acronym: "MDM",
    term: "Mobile Device Manager / Management",
    domain: "Domain 3: Security Architecture",
    definition: "A centralized software system used to manage, monitor, enforce encryption policies, and control mobile devices (smartphones and tablets) within an organization.",
    tip: "Enforces remote wipe, passcode requirements, and application whitelisting."
  },
  {
    acronym: "MDT",
    term: "Mobile Threat Defense",
    domain: "Domain 3: Security Architecture",
    definition: "A security solution designed to protect mobile devices against advanced network attacks, malicious apps, and OS vulnerabilities in real time.",
    tip: "Complements MDM by providing active threat detection and behavioral analysis on smartphones."
  },
  {
    acronym: "MFA",
    term: "Multi-Factor Authentication",
    domain: "Domain 1: General Security Concepts",
    definition: "A security process requiring users to supply two or more distinct authentication categories: Something you know (password), Something you have (token), Something you are (biometrics), Somewhere you are (GPS), Something you do.",
    tip: "Providing two passwords is single-factor; combining a password and phone push is multi-factor."
  },
  {
    acronym: "MOA",
    term: "Memorandum of Agreement",
    domain: "Domain 5: Program Management & Oversight",
    definition: "A formal written document between two or more cooperating parties outlining agreed-upon mutual goals, responsibilities, and specific terms of a partnership.",
    tip: "More specific and legally formal than an MOU, but often precedes a contract."
  },
  {
    acronym: "MOU",
    term: "Memorandum of Understanding",
    domain: "Domain 5: Program Management & Oversight",
    definition: "An informal preliminary agreement between two parties that states mutual intent and goodwill to collaborate on a common objective without creating legally binding contract obligations.",
    tip: "Less formal than an SLA or binding contract; expresses shared intent."
  },
  {
    acronym: "MTBF",
    term: "Mean Time Between Failures",
    domain: "Domain 5: Program Management & Oversight",
    definition: "The estimated average operational time elapsed between expected system failures or hardware outages under normal working conditions.",
    tip: "Measures overall hardware reliability based on manufacturer component specifications."
  },
  {
    acronym: "MTTD",
    term: "Mean Time to Detect",
    domain: "Domain 4: Security Operations",
    definition: "The average time it takes for a security team to discover a security breach or incident after it occurs.",
    tip: "Key metric for evaluating SOC monitoring efficiency."
  },
  {
    acronym: "MTTR",
    term: "Mean Time to Repair / Mean Time to Restore",
    domain: "Domain 5: Program Management & Oversight",
    definition: "The average amount of time required to repair, troubleshoot, and get a product or system back up and running after a failure.",
    tip: "A critical metric for service level agreements and calculating Recovery Time Objectives."
  },
  {
    acronym: "NAC",
    term: "Network Access Control",
    domain: "Domain 3: Security Architecture",
    definition: "An access control system that performs health checks or posture assessments (antivirus status, OS patches, firewalls) before granting endpoint devices permission to join the network.",
    tip: "Non-compliant endpoints are quarantined onto an isolated remediation network."
  },
  {
    acronym: "NDA",
    term: "Non-Disclosure Agreement",
    domain: "Domain 5: Program Management & Oversight",
    definition: "A legally binding contract between entities that protects proprietary, sensitive, or trade-secret information by prohibiting unauthorized sharing or public disclosure.",
    tip: "Standard document executed prior to sharing proprietary data with vendors or employees."
  },
  {
    acronym: "NGFW",
    term: "Next-Generation Firewall",
    domain: "Domain 3: Security Architecture",
    definition: "An advanced, application-aware network firewall that combines traditional packet filtering with deep packet inspection (DPI), intrusion prevention (IPS), and TLS decryption.",
    tip: "Inspects Layer 7 application payloads rather than just Layer 3/4 ports and IP addresses."
  },
  {
    acronym: "NIST",
    term: "National Institute of Standards and Technology",
    domain: "Domain 5: Program Management & Oversight",
    definition: "US non-regulatory government agency that develops standards and guidelines, including the NIST Cybersecurity Framework (Identify, Protect, Detect, Respond, Recover, Govern).",
    tip: "NIST SP 800-53 defines security and privacy controls for federal information systems."
  },
  {
    acronym: "OCSP",
    term: "Online Certificate Status Protocol",
    domain: "Domain 1: General Security Concepts",
    definition: "A protocol used by web browsers to query a certificate authority in real-time to check if a specific digital certificate has been revoked.",
    tip: "Provides real-time validation without downloading large revocation lists."
  },
  {
    acronym: "OCSP Stapling",
    term: "Online Certificate Status Protocol Stapling",
    domain: "Domain 1: General Security Concepts",
    definition: "A method where the web server queries the CA directly, caches the timestamped OCSP response, and 'staples' it into the initial SSL/TLS handshake to reduce client DNS/Internet traffic and enhance privacy.",
    tip: "Avoids individual client lookups to external CAs during SSL/TLS handshakes."
  },
  {
    acronym: "OIDC",
    term: "OpenID Connect",
    domain: "Domain 3: Security Architecture",
    definition: "A simple, modern identity layer built directly on the OAuth 2.0 framework that enables clients to verify end-user identity using JSON Web Tokens (JWT) for authentication.",
    tip: "OAuth 2.0 handles authorization (API tokens); OIDC handles authentication (ID tokens)."
  },
  {
    acronym: "Order of Volatility",
    term: "Order of Volatility (Digital Forensics)",
    domain: "Domain 4: Security Operations",
    definition: "The standard sequence for collecting digital forensic evidence starting with the most fragile, short-lived data to permanent data: CPU Cache/Registers → RAM → Network State → Hard Disk/SSD → Optical Media/Backups.",
    tip: "Turning off power destroys volatile CPU cache and RAM evidence immediately."
  },
  {
    acronym: "OSINT",
    term: "Open Source Intelligence",
    domain: "Domain 2: Threats, Vulnerabilities & Mitigations",
    definition: "The process of collecting, analyzing, and synthesizing threat intelligence from publicly accessible sources such as social media, public databases, forums, and corporate websites.",
    tip: "A non-intrusive passive reconnaissance method."
  },
  {
    acronym: "PAM",
    term: "Privileged Access Management",
    domain: "Domain 1 & 3",
    definition: "A security framework and tooling suite focused on safeguarding, vaulting, rotating, and auditing credentials with elevated administrative rights (root/administrator).",
    tip: "Implements credential vaulting, session recording, and Just-In-Time (JIT) access."
  },
  {
    acronym: "PFS",
    term: "Perfect Forward Secrecy",
    domain: "Domain 1: General Security Concepts",
    definition: "Cryptographic feature ensuring that session keys will not be compromised even if the server's long-term private key is compromised in the future.",
    tip: "Implemented via ephemeral Diffie-Hellman key exchanges (DHE / ECDHE)."
  },
  {
    acronym: "PKI",
    term: "Public Key Infrastructure",
    domain: "Domain 1: General Security Concepts",
    definition: "The complete ecosystem of policies, software, hardware, cryptography, and procedures required to create, distribute, store, revoke, and manage digital certificates and public/private key pairs.",
    tip: "Provides confidentiality, authentication, integrity, and non-repudiation across networks."
  },
  {
    acronym: "PSK",
    term: "Pre-Shared Key",
    domain: "Domain 3: Security Architecture",
    definition: "A shared static passphrase configured across a wireless access point and all connecting clients to authenticate and generate encryption keys (WPA2/WPA3-Personal).",
    tip: "Simple for home networks, but vulnerable if shared widely in enterprise settings."
  },
  {
    acronym: "RAID",
    term: "Redundant Array of Independent Disks",
    domain: "Domain 3: Security Architecture",
    definition: "A storage virtualization technology that combines multiple physical drives into a single logical unit to provide fault tolerance, data redundancy, and enhanced read/write performance.",
    tip: "Provides high availability for disk drives, but is never a replacement for offline backups."
  },
  {
    acronym: "RADIUS",
    term: "Remote Authentication Dial-In User Service",
    domain: "Domain 1 & 3",
    definition: "A centralized client/server protocol that provides AAA management for users connecting to network services (UDP ports 1812/1813 or 1645/1646).",
    tip: "Encrypts only the password in the packet, unlike TACACS+ which encrypts the entire payload."
  },
  {
    acronym: "RBAC",
    term: "Role-Based Access Control",
    domain: "Domain 1: General Security Concepts",
    definition: "Access control mechanism defined around roles and privileges assigned to specific organizational job functions rather than individual users.",
    tip: "Simplifies administration and enforces the principle of least privilege."
  },
  {
    acronym: "RFID",
    term: "Radio Frequency Identification",
    domain: "Domain 3 & 4",
    definition: "A technology that uses radio frequency electromagnetic fields to identify and track tags attached to badges, objects, or physical assets.",
    tip: "Can be cloned if unencrypted; protected by shielded sleeves and encrypted RFID credentials."
  },
  {
    acronym: "RPO",
    term: "Recovery Point Objective",
    domain: "Domain 5: Program Management & Oversight",
    definition: "The maximum acceptable amount of data loss measured backward in time (e.g., 2 hours of data) that an organization can tolerate after a disruption.",
    tip: "Dictates the required frequency and scheduling of backup solutions."
  },
  {
    acronym: "RTO",
    term: "Recovery Time Objective",
    domain: "Domain 5: Program Management & Oversight",
    definition: "The targeted maximum duration of time allowed to restore a system or business service back to an acceptable operating level following an outage.",
    tip: "Focuses on the maximum tolerable downtime duration."
  },
  {
    acronym: "RTOS",
    term: "Real-Time Operating System",
    domain: "Domain 3: Security Architecture",
    definition: "An operating system engineered to execute instructions with strict deterministic timing constraints, commonly deployed in automotive systems, medical equipment, robotics, and industrial automation.",
    tip: "Prioritizes immediate, precise processing predictability over user multitasking."
  },
  {
    acronym: "Salted Hash",
    term: "Cryptographic Salted Hash",
    domain: "Domain 1: General Security Concepts",
    definition: "A hash calculation that appends a unique random string of characters (a salt) to a password before hashing to defeat precomputed dictionary and rainbow table attacks.",
    tip: "Ensures two identical passwords generate completely distinct hash values."
  },
  {
    acronym: "SAML",
    term: "Security Assertion Markup Language",
    domain: "Domain 3: Security Architecture",
    definition: "An open XML-based standard for exchanging authentication and authorization data between an Identity Provider (IdP) and a Service Provider (SP) for federated SSO.",
    tip: "Standard protocol for corporate web-based single sign-on."
  },
  {
    acronym: "SASE",
    term: "Secure Access Service Edge",
    domain: "Domain 3: Security Architecture",
    definition: "A cloud-native architecture combining SD-WAN network connectivity with comprehensive cloud security services (CASB, FWaaS, ZTNA, SWG) into a single unified service.",
    tip: "Provides seamless, identity-driven Zero Trust protection for remote and mobile workers."
  },
  {
    acronym: "SCAP",
    term: "Security Content Automation Protocol",
    domain: "Domain 4: Security Operations",
    definition: "A standardized suite of open specifications used by automated tools to evaluate vulnerabilities, measure security compliance, and standardize threat reporting.",
    tip: "Maintained by NIST to automate vulnerability management and policy auditing."
  },
  {
    acronym: "SDN",
    term: "Software-Defined Networking",
    domain: "Domain 3: Security Architecture",
    definition: "An architectural approach that decouples the network control plane (decision-making) from the data plane (underlying traffic forwarding) to enable centralized automation and dynamic configuration.",
    tip: "Allows programmatic control of network paths and automated microsegmentation."
  },
  {
    acronym: "SHA-256",
    term: "Secure Hash Algorithm 256-bit",
    domain: "Domain 1: General Security Concepts",
    definition: "A cryptographic hash function that deterministically converts input data of any size into a fixed 256-bit (64 hexadecimal characters) output hash with one-way irreversibility and strong collision resistance.",
    tip: "Demonstrates the avalanche effect: changing 1 bit in input completely scrambles the output hash."
  },
  {
    acronym: "SIEM",
    term: "Security Information and Event Management",
    domain: "Domain 4: Security Operations",
    definition: "A centralized security server used to consolidate, normalize, correlate, and report on log files across network infrastructure devices.",
    tip: "Provides centralized logging and compliance reporting, but does not inline control or block traffic directly."
  },
  {
    acronym: "SLA",
    term: "Service Level Agreement",
    domain: "Domain 5: Program Management & Oversight",
    definition: "A formal contractual agreement between a service provider and a customer that establishes quantifiable minimum performance metrics, such as guaranteed uptime, throughput, and incident response times.",
    tip: "Includes financial penalties or service credits if performance targets are breached."
  },
  {
    acronym: "SLE",
    term: "Single Loss Expectancy",
    domain: "Domain 5: Program Management & Oversight",
    definition: "The monetary loss or cost incurred each time a single risk event occurs (e.g., replacement cost of $1,000 for one stolen laptop).",
    tip: "Formula: SLE = Asset Value (AV) × Exposure Factor (EF)."
  },
  {
    acronym: "SMS",
    term: "Short Message Service",
    domain: "Domain 1: General Security Concepts",
    definition: "Text message protocol commonly used for sending one-time verification codes, though vulnerable to interception via SIM-swapping.",
    tip: "Hardware tokens and app authenticators are preferred over SMS authentication."
  },
  {
    acronym: "SNMP",
    term: "Simple Network Management Protocol",
    domain: "Domain 4: Security Operations",
    definition: "A network management protocol used to monitor network-connected devices, collect health metrics, and receive alert traps when critical system thresholds are exceeded (Port 161/162).",
    tip: "SNMPv3 is required for secure environments because it adds cryptographic authentication and encryption."
  },
  {
    acronym: "SOAR",
    term: "Security Orchestration, Automation, and Response",
    domain: "Domain 4: Security Operations",
    definition: "A technology solution that gathers threat data from diverse security tools and executes automated playbooks to streamline and accelerate incident response triage.",
    tip: "Automates repetitive SOC analyst workflows to dramatically reduce incident response time."
  },
  {
    acronym: "SOC",
    term: "Security Operations Center",
    domain: "Domain 4: Security Operations",
    definition: "A centralized organizational unit comprising cybersecurity professionals that continuously monitors, detects, analyzes, and responds to cybersecurity events and incidents.",
    tip: "Operates 24/7/365 to handle triage, incident response, and continuous defense."
  },
  {
    acronym: "SOW",
    term: "Statement of Work",
    domain: "Domain 5: Program Management & Oversight",
    definition: "A detailed document that specifies the exact project deliverables, timelines, milestones, labor tasks, and scope of work expected from a vendor or contractor.",
    tip: "Defines the exact operational boundaries and expectations for third-party contracts."
  },
  {
    acronym: "SPF",
    term: "Sender Policy Framework",
    domain: "Domain 3: Security Architecture",
    definition: "An email authentication protocol that publishes a DNS record listing all authorized mail servers permitted to send email on behalf of a specific domain name.",
    tip: "Helps receiving mail servers detect and prevent email spoofing."
  },
  {
    acronym: "SQLi",
    term: "Structured Query Language Injection",
    domain: "Domain 2: Threats, Vulnerabilities & Mitigations",
    definition: "An injection vulnerability where an attacker submits malicious SQL queries into user input fields to bypass authentication, read confidential database records, or modify database contents.",
    tip: "Prevented by using parameterized queries / prepared statements and input validation."
  },
  {
    acronym: "SSID",
    term: "Service Set Identifier",
    domain: "Domain 3: Security Architecture",
    definition: "The alphanumeric broadcast name assigned to a specific 802.11 wireless network that allows clients to locate and connect to the wireless access point.",
    tip: "Disabling SSID broadcast is security through obscurity and does not prevent network discovery."
  },
  {
    acronym: "SSO",
    term: "Single Sign-On",
    domain: "Domain 1 & 3",
    definition: "An access control method that enables an authenticated user to log in once with a single set of credentials and access multiple independent applications or systems without re-authenticating.",
    tip: "Reduces password fatigue and centralizes session revocation."
  },
  {
    acronym: "STIX / TAXII",
    term: "Structured Threat Information Expression / Trusted Automated eXchange of Indicator Information",
    domain: "Domain 2: Threats, Vulnerabilities & Mitigations",
    definition: "STIX defines the standardized JSON schema for describing cyber threat intelligence; TAXII defines the secure transport protocol for sharing STIX feeds.",
    tip: "Standard open framework for automated threat intelligence exchange."
  },
  {
    acronym: "TIP",
    term: "Threat Intelligence Platform",
    domain: "Domain 2 & 4",
    definition: "A specialized software platform that aggregates, normalizes, de-duplicates, and analyzes threat data feeds from internal and external sources into actionable threat intelligence.",
    tip: "Converts raw IOCs into prioritized, actionable feeds for firewalls, EDR, and SIEM."
  },
  {
    acronym: "TLS",
    term: "Transport Layer Security",
    domain: "Domain 1 & 3",
    definition: "Cryptographic protocol providing communications security over a computer network (confidentiality, authentication, and integrity). Successor to SSL.",
    tip: "TLS 1.3 deprecated legacy cipher suites and mandates Perfect Forward Secrecy."
  },
  {
    acronym: "TOTP",
    term: "Time-Based One-Time Password",
    domain: "Domain 1: General Security Concepts",
    definition: "A temporary numeric code generated by an algorithm that uses the current time and a shared secret key (typically expiring every 30 to 60 seconds) for two-factor authentication.",
    tip: "More secure than SMS OTP because it is resistant to SIM swapping attacks."
  },
  {
    acronym: "TPM",
    term: "Trusted Platform Module",
    domain: "Domain 3: Security Architecture",
    definition: "A dedicated hardware microcontroller cryptographic chip embedded on a motherboard that securely generates, stores, and protects encryption keys and hardware measurements.",
    tip: "Used by BitLocker for Full Disk Encryption and platform attestation."
  },
  {
    acronym: "UEFI",
    term: "Unified Extensible Firmware Interface & Secure Boot",
    domain: "Domain 3: Security Architecture",
    definition: "Modern firmware architecture replacing legacy BIOS; Secure Boot uses digital signatures to verify bootloader and OS kernel integrity before loading, blocking rootkits and bootkits.",
    tip: "Prevents unauthorized or corrupted operating systems and drivers from loading at startup."
  },
  {
    acronym: "UPS",
    term: "Uninterruptible Power Supply",
    domain: "Domain 3: Security Architecture",
    definition: "An emergency backup battery system that provides immediate electrical power to critical servers and hardware when primary utility power fails.",
    tip: "Prevents sudden system crashes and bridges the gap until generators spin up."
  },
  {
    acronym: "UTM",
    term: "Unified Threat Management",
    domain: "Domain 3: Security Architecture",
    definition: "An all-in-one centralized hardware security appliance that consolidates multiple security functions—firewall, antivirus, anti-spam, VPN, content filtering, and intrusion prevention—into a single device.",
    tip: "Simplifies management for small/medium networks, but introduces a single point of failure."
  },
  {
    acronym: "VLAN",
    term: "Virtual Local Area Network",
    domain: "Domain 3: Security Architecture",
    definition: "A logical grouping and network segmentation of devices on network switches regardless of physical location, creating isolated broadcast domains.",
    tip: "Enforces network separation between departments, guests, and IoT devices."
  },
  {
    acronym: "VPN",
    term: "Virtual Private Network",
    domain: "Domain 3: Security Architecture",
    definition: "An encrypted communication tunnel across an untrusted public network (like the Internet) that enables secure, private access to internal enterprise resources.",
    tip: "Common implementations include IPsec and SSL/TLS VPNs."
  },
  {
    acronym: "WAF",
    term: "Web Application Firewall",
    domain: "Domain 3: Security Architecture",
    definition: "A specialized Layer 7 application firewall that monitors, filters, and blocks malicious HTTP/HTTPS traffic targeting web applications (SQLi, XSS, CSRF).",
    tip: "Operates at OSI Layer 7, unlike traditional network stateful firewalls (Layers 3/4)."
  },
  {
    acronym: "Wildcard",
    term: "Wildcard Digital Certificate",
    domain: "Domain 1: General Security Concepts",
    definition: "A single public key digital certificate applied to a parent domain that automatically secures an unlimited number of first-level subdomains (e.g., *.example.com).",
    tip: "Convenient to manage, but compromising the private key compromises all subdomains."
  },
  {
    acronym: "WPA3",
    term: "Wi-Fi Protected Access 3",
    domain: "Domain 3: Security Architecture",
    definition: "The latest Wi-Fi encryption standard that uses Simultaneous Authentication of Equals (SAE) to protect against offline dictionary attacks and mandates 192-bit cryptographic strength in Enterprise mode.",
    tip: "Replaces the pre-shared key 4-way handshake with dragonfly handshake (SAE)."
  },
  {
    acronym: "XDR",
    term: "Extended Detection and Response",
    domain: "Domain 4: Security Operations",
    definition: "A cross-layered detection and response platform that consolidates telemetry across endpoints, networks, cloud workloads, and email systems for unified threat analysis.",
    tip: "Broader scope than standalone EDR or NDIR."
  },
  {
    acronym: "XSS",
    term: "Cross-Site Scripting",
    domain: "Domain 2: Threats, Vulnerabilities & Mitigations",
    definition: "A vulnerability where malicious client-side scripts (typically JavaScript) are injected into trusted web pages viewed by other users (Reflected, Stored, DOM-based).",
    tip: "Mitigated by input validation, output encoding, and Content Security Policy (CSP)."
  },
  {
    acronym: "ZTNA",
    term: "Zero Trust Network Access",
    domain: "Domain 3: Security Architecture",
    definition: "A security model operating on the principle of 'Never Trust, Always Verify', granting least-privilege access to specific individual applications rather than broad network access.",
    tip: "Requires continuous verification of user identity, device posture, and context."
  },
  {
    acronym: "802.1X",
    term: "IEEE 802.1X Port-Based Network Access Control",
    domain: "Domain 3: Security Architecture",
    definition: "An IEEE standard for network authentication that requires endpoints (supplicants) to authenticate against a centralized AAA server (like RADIUS) via an authenticator (switch/AP) before gaining port access.",
    tip: "Separates the Supplicant (client), Authenticator (switch/AP), and Authentication Server (RADIUS/TACACS+)."
  }
];
