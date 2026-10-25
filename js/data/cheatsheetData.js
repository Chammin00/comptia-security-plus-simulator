// CompTIA Security+ Cheatsheet Dataset
// Extracted from official ZTM CompTIA Security+ Cheat Sheet (Aleksa Tamburkovski)

const CHEATSHEET_TERMS = [
  {
    id: "cs-1",
    acronym: "AAA",
    term: "Authentication, Authorization, and Accounting",
    definition: "A security framework that ensures only authorized individuals are able to access resources.",
    page: 3
  },
  {
    id: "cs-2",
    acronym: "ABAC",
    term: "Attribute Based Access Control",
    definition: "Evaluates attributes to determine the access.",
    page: 3
  },
  {
    id: "cs-3",
    acronym: "ACL",
    term: "Access Control List",
    definition: "List of rules that specifies which users or systems are granted or denied access to a particular object or system resource.",
    page: 3
  },
  {
    id: "cs-4",
    acronym: "AES",
    term: "Advanced Encryption Standard",
    definition: "A specification for the encryption of electronic data established by the U.S National Institute of Standards and Technology (NIST) in 2001. AES is widely used today as it is much stronger than DES and triple DES despite being harder to implement.",
    page: 3
  },
  {
    id: "cs-5",
    acronym: "AIS",
    term: "Automated Indicator Sharing",
    definition: "Service provided by CISA that enables real-time exchange of machine-readable cyber threat indicators and defensive measures between public and private sector organizations.",
    page: 3
  },
  {
    id: "cs-6",
    acronym: "APT",
    term: "Advanced Persistent Threat",
    definition: "A type of cyber attack in which an unauthorized user gains access to a system or network and remains undetected for an extended period of time.",
    page: 3
  },
  {
    id: "cs-7",
    acronym: "ARP",
    term: "Address Resolution Protocol",
    definition: "A protocol used to map an IP address to a physical MAC address.",
    page: 3
  },
  {
    id: "cs-8",
    acronym: "ASLR",
    term: "Address Space Layout Randomization",
    definition: "A technique used to prevent attackers from exploiting vulnerabilities in software by randomizing the location of key data areas in memory.",
    page: 4
  },
  {
    id: "cs-9",
    acronym: "BCP",
    term: "Business Continuity Planning",
    definition: "Detailed strategy and set of systems for ensuring an organization’s ability to prevent or rapidly recover from a significant disruption to its operations. The plan is essentially a playbook for how any type of organization—such as a private-sector company, a government agency or a school will continue its day-to-day business during a disaster scenario or otherwise abnormal conditions.",
    page: 4
  },
  {
    id: "cs-10",
    acronym: "BDPU Guard",
    term: "Bridge Protocol Data Units Guard",
    definition: "BDPU guard is a feature that defends the layer 2 STP topology against BDPU-related threats.",
    page: 4
  },
  {
    id: "cs-11",
    acronym: "BIA",
    term: "Business Impact Analysis",
    definition: "The BIA should identify the operational and financial impacts resulting from the disruption of business functions and processes.",
    page: 4
  },
  {
    id: "cs-12",
    acronym: "BIOS",
    term: "Basic Input/Output System",
    definition: "BIOS, or Basic Input/Output System, is software stored on a small memory chip, also known as firmware. BIOS is found on the motherboard. BIOS instructs the computer on how to perform basic functions like booting and keyboard control; it is also used to identify and configure the hardware in a computer such as the hard drive, CPU, memory, and related equipment. Finally, it manages data flow between the computer's operating system (OS) and attached devices.",
    page: 4
  },
  {
    id: "cs-13",
    acronym: "BLOB",
    term: "Binary Large Object Storage",
    definition: "Used by cloud providers as a database for large amounts of text or binary data.",
    page: 4
  },
  {
    id: "cs-14",
    acronym: "BPA",
    term: "Business Partnership Agreement",
    definition: "Agreement between 2 companies that are doing business together in which it is confirmed how much each company should contribute as well as their responsibility and how the profit will be split.",
    page: 4
  },
  {
    id: "cs-15",
    acronym: "BYOD",
    term: "Bring Your Own Device",
    definition: "A policy that allows employees to use their personal devices, such as smartphones or laptops, to access company resources.",
    page: 5
  },
  {
    id: "cs-16",
    acronym: "CA",
    term: "Certificate Authority",
    definition: "Trusted entity that issues digital certificates used to verify the identities of individuals, organizations, websites or devices.",
    page: 5
  },
  {
    id: "cs-17",
    acronym: "CAC",
    term: "Common Access Card",
    definition: "Smart card about the size of a credit card. It is the standard identification for Active Duty United States Defense personnel.",
    page: 5
  },
  {
    id: "cs-18",
    acronym: "CASB",
    term: "Cloud Access Security Broker",
    definition: "Software/hardware that sits between users and their cloud service to enforce security policies.",
    page: 5
  },
  {
    id: "cs-19",
    acronym: "CAPTCHA",
    term: "Completely Automated Public Turing test to tell Computers and Humans Apart",
    definition: "A challenge-response test used to distinguish between human and automated users.",
    page: 5
  },
  {
    id: "cs-20",
    acronym: "CBC",
    term: "Cipher Block Chaining",
    definition: "A mode of operation for a block cipher -- one in which a sequence of bits are encrypted as a single unit, or block, with a cipher key applied to the entire block. Cipher block chaining uses what is known as an initialization vector (IV) of a certain length. By using this along with a single encryption key, organizations and individuals can safely encrypt and decrypt large amounts of plaintext.",
    page: 5
  },
  {
    id: "cs-21",
    acronym: "CER",
    term: "Certificate",
    definition: "Security files provided and generated by an Certificate Authority. These files help a browser to verify if a website is secure and save to enter, verifying its authenticity. These CER security certificates are usually installed on a web server.",
    page: 5
  },
  {
    id: "cs-22",
    acronym: "CER",
    term: "Crossover Error Rate",
    definition: "Point where FAR and FRR are equal.",
    page: 5
  },
  {
    id: "cs-23",
    acronym: "CHAP",
    term: "Challenge Handshake Authentication Protocol",
    definition: "Challenge-response identity authentication protocol. It depends on a combination of CHAP security credentials and a “shared secret” between the requestor (client) and the authenticator (server), and it does not expose a password.",
    page: 6
  },
  {
    id: "cs-24",
    acronym: "CIA",
    term: "Confidentiality, Integrity, and Availability",
    definition: "The three core principles of information security.",
    page: 6
  },
  {
    id: "cs-25",
    acronym: "CIRT",
    term: "Computer Incident Response Team",
    definition: "A team responsible for responding to and mitigating cyber security incidents.",
    page: 6
  },
  {
    id: "cs-26",
    acronym: "COPE",
    term: "Corporate-Owned, Personally-Enabled",
    definition: "A policy that allows employees to use company-owned devices for personal use.",
    page: 6
  },
  {
    id: "cs-27",
    acronym: "CRC",
    term: "Cyclic Redundancy Check",
    definition: "A mathematical algorithm used to detect errors in data transmission.",
    page: 6
  },
  {
    id: "cs-28",
    acronym: "CRL",
    term: "Certificate Revocation List",
    definition: "First phase of checking if certificate is valid.",
    page: 6
  },
  {
    id: "cs-29",
    acronym: "CSA",
    term: "Cloud Security Alliance",
    definition: "Non-profit organization that provides different resources to help Cloud Security Providers (CSPs).",
    page: 6
  },
  {
    id: "cs-30",
    acronym: "CSRF",
    term: "Cross-Site Request Forgery",
    definition: "Is a web security vulnerability that allows an attacker to induce users to perform actions that they do not intend to perform.",
    page: 6
  },
  {
    id: "cs-31",
    acronym: "CSO",
    term: "Chief Security Officer",
    definition: "A senior-level executive responsible for overseeing an organization's security program.",
    page: 6
  },
  {
    id: "cs-32",
    acronym: "CSP",
    term: "Cloud Service Provider",
    definition: "Is a third-party company that provides scalable computing resources that businesses can access on demand over a network, including cloud-based compute, storage, platform, and application services.",
    page: 6
  },
  {
    id: "cs-33",
    acronym: "CSR",
    term: "Certificate Signing Request",
    definition: "A request made by a user or device to a certificate authority for a digital certificate.",
    page: 7
  },
  {
    id: "cs-34",
    acronym: "CSV",
    term: "Comma Separated Values",
    definition: "A file format used to store data in a table-like format, with each row separated by a comma.",
    page: 7
  },
  {
    id: "cs-35",
    acronym: "CVE",
    term: "Common Vulnerabilities and Exposure",
    definition: "List of vulnerabilities created by MITRE.",
    page: 7
  },
  {
    id: "cs-36",
    acronym: "CVSS",
    term: "Common Vulnerabilities Scoring System",
    definition: "Ranking of vulnerabilities and their severity.",
    page: 7
  },
  {
    id: "cs-37",
    acronym: "CYOD",
    term: "Choose Your Own Device",
    definition: "Company has set of devices that employees can choose to use for work.",
    page: 7
  },
  {
    id: "cs-38",
    acronym: "DAC",
    term: "Discretionary Access Control",
    definition: "Restricting access to objects based on the identity of subject.",
    page: 7
  },
  {
    id: "cs-39",
    acronym: "DDoS",
    term: "Distributed Denial of Service",
    definition: "A type of cyber attack in which multiple systems are used to flood a target server or network with traffic, causing it to become unavailable.",
    page: 7
  },
  {
    id: "cs-40",
    acronym: "DES",
    term: "Data Encryption Standard",
    definition: "Is a symmetric-key block cipher published by the National Institute of Standards and Technology (NIST) that was widely used in the past but is now considered insecure.",
    page: 7
  },
  {
    id: "cs-41",
    acronym: "DHCP",
    term: "Dynamic Host Configuration Protocol",
    definition: "A protocol used to automatically assign IP addresses and other network settings to devices on a network.",
    page: 8
  },
  {
    id: "cs-42",
    acronym: "DMZ",
    term: "Demilitarized Zone",
    definition: "A network segment that is isolated from the internal network and is used to provide public-facing services, such as web servers or email servers.",
    page: 8
  },
  {
    id: "cs-43",
    acronym: "DNS",
    term: "Domain Name System",
    definition: "A system that translates domain names into IP addresses.",
    page: 8
  },
  {
    id: "cs-44",
    acronym: "DoS",
    term: "Denial of Service",
    definition: "A type of cyber attack in which a server or network is overwhelmed with traffic, causing it to become unavailable.",
    page: 8
  },
  {
    id: "cs-45",
    acronym: "DPO",
    term: "Data Protection Officer",
    definition: "DPO makes sure that the organization is correctly protecting individuals personal data according to current legislation.",
    page: 8
  },
  {
    id: "cs-46",
    acronym: "DRP",
    term: "Disaster Recovery Plan",
    definition: "Preparing for any type of disaster that could occur.",
    page: 8
  },
  {
    id: "cs-47",
    acronym: "EAP",
    term: "Extensible Authentication Protocol",
    definition: "Architectural framework that provides extensibility for authentication methods for commonly used protected network access technologies such as IEEE 802.1X-based wireless access, IEEE 802.1X-based wired access and Point-to-Point Protocol (PPP).",
    page: 8
  },
  {
    id: "cs-48",
    acronym: "EFS",
    term: "Encrypting File System",
    definition: "A feature in Windows that allows files and folders to be encrypted using a user's public key. Windows' EFS feature allows you to easily encrypt and decrypt files on your Windows NTFS drives. Once you’ve encrypted files with this tool, other people won’t be able to access them unless they have your password.",
    page: 8
  },
  {
    id: "cs-49",
    acronym: "EMI",
    term: "Electromagnetic Interference",
    definition: "Interference caused by electromagnetic waves, which can disrupt the functioning of electronic devices.",
    page: 9
  },
  {
    id: "cs-50",
    acronym: "EMP",
    term: "Electromagnetic Pulse",
    definition: "A burst of electromagnetic radiation that can cause damage to electronic devices.",
    page: 9
  },
  {
    id: "cs-51",
    acronym: "ESP",
    term: "Encapsulating Security Payload",
    definition: "Security payload is an individual protocol in IPSec. ESP is responsible for the CIA triad of security (Confidentiality, Integrity, Availability), which is considered significant only when encryption is carried along with them. Securing all payload/ packets/ content in IPv4 and IPv6 is the responsibility of ESP.",
    page: 9
  },
  {
    id: "cs-52",
    acronym: "FAR",
    term: "False Acceptance Rate",
    definition: "Metric used to measure the likelihood of granting access to an unauthorized user.",
    page: 9
  },
  {
    id: "cs-53",
    acronym: "FDE",
    term: "Full Disk Encryption",
    definition: "Security technique that encrypts all data stored on a disk or storage device, including the operating system, applications, and user data.",
    page: 9
  },
  {
    id: "cs-54",
    acronym: "FISMA",
    term: "Federal Information Security Management Act",
    definition: "FISMA requires federal agencies to develop, document, and implement an agency-wide program to provide information security for the information and systems that support the operations and assets of the agency, including those provided or managed by another agency, contractor, or other source.",
    page: 9
  },
  {
    id: "cs-55",
    acronym: "FRR",
    term: "False Rejection Rate",
    definition: "Metric used to measure the likelihood of denying access to an authorized user.",
    page: 9
  },
  {
    id: "cs-56",
    acronym: "FTP",
    term: "File Transfer Protocol",
    definition: "A protocol used to transfer files between computers over a network. Port 21.",
    page: 9
  },
  {
    id: "cs-57",
    acronym: "GDPR",
    term: "General Data Protection Regulation",
    definition: "Regulation in European Union (EU) law on data protection and privacy for individuals within the EU and the European Economic Area (EEA). It came into effect on May 25, 2018 and is enforced by the EU Data Protection Authorities.",
    page: 10
  },
  {
    id: "cs-58",
    acronym: "GPS",
    term: "Global Positioning System",
    definition: "A system of satellites used to determine the location of a device.",
    page: 10
  },
  {
    id: "cs-59",
    acronym: "GRE",
    term: "Generic Routing Encapsulation",
    definition: "A protocol used to encapsulate one type of packet within another.",
    page: 10
  },
  {
    id: "cs-60",
    acronym: "GBAC",
    term: "Group Based Access Control",
    definition: "Gives access to a group of individuals to the resources that they need.",
    page: 10
  },
  {
    id: "cs-61",
    acronym: "HMAC",
    term: "Hash-based Message Authentication Code",
    definition: "Is a cryptographic authentication technique that uses a hash function and a secret key. With HMAC, you can achieve authentication and verify that data is correct and authentic with shared secrets, as opposed to approaches that use signatures and asymmetric cryptography.",
    page: 10
  },
  {
    id: "cs-62",
    acronym: "HIDS",
    term: "Host Intrusion Detection System",
    definition: "HIDS stands for host-based intrusion detection system and represents an application that is monitoring a computer or network for suspicious activities.",
    page: 10
  },
  {
    id: "cs-63",
    acronym: "HIPAA",
    term: "Health Insurance Portability And Accountability Act",
    definition: "Federal law that was enacted in 1996 to protect the privacy and security of patients' personal health information (PHI).",
    page: 10
  },
  {
    id: "cs-64",
    acronym: "HOTP",
    term: "HMAC-based One-Time Password",
    definition: "Algorithm used to generate one-time passwords that are used for authentication purposes.",
    page: 10
  },
  {
    id: "cs-65",
    acronym: "HSM",
    term: "Hardware Security Module",
    definition: "Type of specialized hardware device designed to securely store and manage digital keys and perform cryptographic operations. It can be used to store encryption keys, digital certificates, and other sensitive data.",
    page: 11
  },
  {
    id: "cs-66",
    acronym: "HSTS",
    term: "HTTP Strict Transport Security",
    definition: "Web security policy mechanism used to protect against protocol downgrade attacks and cookie hijacking.",
    page: 11
  },
  {
    id: "cs-67",
    acronym: "HTML",
    term: "Hypertext Markup Language",
    definition: "Is the standard markup language for creating Web pages.",
    page: 11
  },
  {
    id: "cs-68",
    acronym: "HTTP",
    term: "Hypertext Transfer Protocol",
    definition: "HTTP is the foundation of the World Wide Web, and is used to load webpages using hypertext links. HTTP is an application layer protocol designed to transfer information between networked devices and runs on top of other layers of the network protocol stack. A typical flow over HTTP involves a client machine making a request to a server, which then sends a response message. HTTP uses port 80.",
    page: 11
  },
  {
    id: "cs-69",
    acronym: "HTTPS",
    term: "Hypertext Transfer Protocol Secure",
    definition: "A secure version of HTTP that uses encryption to protect data in transit. HTTPS uses port 443.",
    page: 11
  },
  {
    id: "cs-70",
    acronym: "IaaS",
    term: "Infrastructure as a Service",
    definition: "A cloud computing model in which infrastructure resources, such as servers and storage, are provided by a third-party provider.",
    page: 11
  },
  {
    id: "cs-71",
    acronym: "IAM",
    term: "Identity and Access Management",
    definition: "A cybersecurity practice that enables IT administrators to restrict access to organizational resources so that only the people who need access have access.",
    page: 11
  },
  {
    id: "cs-72",
    acronym: "ICMP",
    term: "Internet Control Message Protocol",
    definition: "A network layer protocol used by network devices to diagnose network communication issues. ICMP is mainly used to determine whether or not data is reaching its intended destination in a timely manner.",
    page: 11
  },
  {
    id: "cs-73",
    acronym: "IDS",
    term: "Intrusion Detection System",
    definition: "A monitoring system that detects suspicious activities and generates alerts when they are detected. Based upon these alerts, a security operations center (SOC) analyst or incident responder can investigate the issue and take the appropriate actions to remediate the threat.",
    page: 12
  },
  {
    id: "cs-74",
    acronym: "IPS",
    term: "Intrusion Prevention System",
    definition: "A network security technology that goes beyond the capabilities of an IDS (Intrusion Detection System) by actively preventing identified threats from being carried out. An IPS monitors network traffic, just like an IDS, but it can also take action to prevent attacks.",
    page: 12
  },
  {
    id: "cs-75",
    acronym: "IEEE",
    term: "Institute of Electrical and Electronics Engineers",
    definition: "The IEEE describes itself as the world's largest technical professional society -- promoting the development and application of electrotechnology and allied sciences for the benefit of humanity, the advancement of the profession, and the well-being of our members.",
    page: 12
  },
  {
    id: "cs-76",
    acronym: "IKE",
    term: "Internet Key Exchange",
    definition: "A standard protocol used to set up a secure and authenticated communication channel between two parties via a virtual private network (VPN).",
    page: 12
  },
  {
    id: "cs-77",
    acronym: "IMAP",
    term: "Internet Message Access Protocol",
    definition: "An Internet standard protocol used by email clients to retrieve email messages from a mail server over a TCP/IP connection. IMAP uses port 143.",
    page: 12
  },
  {
    id: "cs-78",
    acronym: "IoT",
    term: "Internet Of Things Devices",
    definition: "Physical devices that are connected to the internet and that can exchange data with each other.",
    page: 12
  },
  {
    id: "cs-79",
    acronym: "IP",
    term: "Internet Protocol",
    definition: "A protocol, or set of rules, for routing and addressing packets of data so that they can travel across networks and arrive at the correct destination.",
    page: 12
  },
  {
    id: "cs-80",
    acronym: "IPv4",
    term: "Internet Protocol version 4",
    definition: "An IPv4 address is a 32-bit address that is usually represented in dotted decimal notation, with a decimal value representing each of the four octets (bytes) that make up the address.",
    page: 12
  },
  {
    id: "cs-81",
    acronym: "IPv6",
    term: "Internet Protocol version 6",
    definition: "A network protocol that serves as the successor to IPv4. The purpose of IPv6 is to provide a larger address space for the internet as the number of connected devices continues to grow. One of the main differences between IPv6 and IPv4 is the size of the address space. IPv4 uses 32-bit addresses, allowing for approximately 4.3 billion unique addresses. In contrast, IPv6 uses 128-bit addresses, which allows for an almost unlimited number of unique addresses.",
    page: 13
  },
  {
    id: "cs-82",
    acronym: "ISA",
    term: "Interconnection Security Agreement",
    definition: "A document that regulates security-relevant aspects of an intended connection between an agency and an external system. It regulates the security interface between any two systems operating under two different distinct authorities.",
    page: 13
  },
  {
    id: "cs-83",
    acronym: "ISO",
    term: "International Organization for Standardization",
    definition: "An international standard-setting organization.",
    page: 13
  },
  {
    id: "cs-84",
    acronym: "ISP",
    term: "Internet Service Provider",
    definition: "A company that provides Internet access to customers.",
    page: 13
  },
  {
    id: "cs-85",
    acronym: "JSON",
    term: "JavaScript Object Notation",
    definition: "A lightweight data interchange format.",
    page: 13
  },
  {
    id: "cs-86",
    acronym: "LDAP",
    term: "Lightweight Directory Access Protocol",
    definition: "Is a software protocol for enabling anyone to locate data about organizations, individuals and other resources such as files and devices in a network -- whether on the public internet or a corporate intranet. LDAP is a 'lightweight' version of Directory Access Protocol (DAP), which is part of X.500, a standard for directory services in a network. LDAP is considered lightweight because it uses a smaller amount of code than other protocols.",
    page: 13
  },
  {
    id: "cs-87",
    acronym: "MAC",
    term: "Media Access Control",
    definition: "A unique identifier assigned to a network interface controller (NIC).",
    page: 13
  },
  {
    id: "cs-88",
    acronym: "MAC",
    term: "Mandatory Access Control",
    definition: "Limiting access to resources based on the sensitivity of information.",
    page: 14
  },
  {
    id: "cs-89",
    acronym: "MCSP",
    term: "Managed Cloud Service Provider",
    definition: "Provides managed cloud services to customers. Managed cloud services are a type of cloud computing service in which a third-party provider manages and delivers cloud computing resources and services to customers over the internet.",
    page: 14
  },
  {
    id: "cs-90",
    acronym: "MFA",
    term: "Multi-Factor Authentication",
    definition: "A security feature that requires multiple forms of authentication to access a resource.",
    page: 14
  },
  {
    id: "cs-91",
    acronym: "MITB",
    term: "Man In The Browser",
    definition: "An MITB attack injects malicious software (malware) into a victim's web browser. The malware typically exploits vulnerabilities in the browser or its plugins to intercept and manipulate data exchanged between the browser and the websites the user visits.",
    page: 14
  },
  {
    id: "cs-92",
    acronym: "MITM",
    term: "Man-in-the-Middle",
    definition: "A type of cyber attack in which an attacker intercepts communications between two parties in order to either steal or change the data in transit.",
    page: 14
  },
  {
    id: "cs-93",
    acronym: "MSSP",
    term: "Managed Security Service Provider",
    definition: "Provides managed security services to customers, typically on a subscription basis.",
    page: 14
  },
  {
    id: "cs-94",
    acronym: "MTBF",
    term: "Mean Time Between Failures",
    definition: "Average amount of time between system failure which shows how reliable a system is.",
    page: 14
  },
  {
    id: "cs-95",
    acronym: "MTTD",
    term: "Mean Time To Detect",
    definition: "Average time it takes for an organization to detect a security incident or breach after it occurs.",
    page: 14
  },
  {
    id: "cs-96",
    acronym: "MTTR",
    term: "Mean Time To Repair",
    definition: "Average time that it takes to fix a system.",
    page: 15
  },
  {
    id: "cs-97",
    acronym: "NAC",
    term: "Network Access Control",
    definition: "A system used to control access to a network based on the identity of the user or device.",
    page: 15
  },
  {
    id: "cs-98",
    acronym: "NAT",
    term: "Network Address Translation",
    definition: "A technique used to map private IP addresses to public IP addresses.",
    page: 15
  },
  {
    id: "cs-99",
    acronym: "NDA",
    term: "Non Disclosure Agreement",
    definition: "Contract that prevents any side of the business to give away the secrets to others.",
    page: 15
  },
  {
    id: "cs-100",
    acronym: "NFC",
    term: "Near Field Communication",
    definition: "Short-range wireless communication technology that enables data exchange between devices that are within close proximity to each other, typically within a few centimeters.",
    page: 15
  },
  {
    id: "cs-101",
    acronym: "NIDS",
    term: "Network Intrusion Detection System",
    definition: "A system used to detect unauthorized activity on a network.",
    page: 15
  },
  {
    id: "cs-102",
    acronym: "NIPS",
    term: "Network Intrusion Prevention System",
    definition: "Type of security system that is used to detect and prevent unauthorized access, attacks, and other malicious activity on a network.",
    page: 15
  },
  {
    id: "cs-103",
    acronym: "NIST",
    term: "National Institute of Standards and Technology",
    definition: "A U.S. government agency that develops standards for technology and engineering.",
    page: 15
  },
  {
    id: "cs-104",
    acronym: "NTFS",
    term: "New Technology File System",
    definition: "A file system used in Windows operating systems.",
    page: 15
  },
  {
    id: "cs-105",
    acronym: "OAuth",
    term: "Open Authorization",
    definition: "Open standard protocol that is used for authorization and authentication between applications or services. It allows users to grant access to their private resources stored on one website to another website or application, without sharing their credentials, such as passwords.",
    page: 15
  },
  {
    id: "cs-106",
    acronym: "OCSP",
    term: "Online Certificate Status Protocol",
    definition: "A protocol used to check the validity of a digital certificate.",
    page: 16
  },
  {
    id: "cs-107",
    acronym: "OSI",
    term: "Open Systems Interconnection",
    definition: "Conceptual framework that is used to standardize and describe the communication functions of a telecommunication or computing system. The OSI model is divided into seven layers, each with a specific function, that define the communication process between two devices in a network.",
    page: 16
  },
  {
    id: "cs-108",
    acronym: "PaaS",
    term: "Platform as a Service",
    definition: "A cloud computing model in which a third-party provider offers a platform for developing and deploying applications.",
    page: 16
  },
  {
    id: "cs-109",
    acronym: "PAM",
    term: "Privileged Access Management",
    definition: "Type of security solution that helps organizations manage and control access to privileged accounts and systems.",
    page: 16
  },
  {
    id: "cs-110",
    acronym: "PCI DSS",
    term: "Payment Card Industry Data Security Standard",
    definition: "A set of security standards for protecting credit card data.",
    page: 16
  },
  {
    id: "cs-111",
    acronym: "PGP",
    term: "Pretty Good Privacy",
    definition: "An encryption program that provides cryptographic privacy and authentication for data communication. PGP is used for signing, encrypting, and decrypting texts, e-mails, files, directories, and whole disk partitions and to increase the security of e-mail communications.",
    page: 16
  },
  {
    id: "cs-112",
    acronym: "PMF",
    term: "Protected Management Frames",
    definition: "Security feature used in Wi-Fi networks to protect against certain types of attacks that can be carried out against wireless management frames.",
    page: 16
  },
  {
    id: "cs-113",
    acronym: "POP3",
    term: "Post Office Protocol version 3",
    definition: "A protocol used to retrieve email messages from a mail server.",
    page: 17
  },
  {
    id: "cs-114",
    acronym: "PPP",
    term: "Point-to-Point Protocol",
    definition: "A protocol used to establish a direct connection between two devices.",
    page: 17
  },
  {
    id: "cs-115",
    acronym: "RAID",
    term: "Redundant Array of Inexpensive Disks",
    definition: "A technique used to increase the reliability and performance of data storage.",
    page: 17
  },
  {
    id: "cs-116",
    acronym: "RADIUS",
    term: "Remote Authentication Dial-In User Service",
    definition: "Networking protocol that is used to provide centralized authentication, authorization, and accounting (AAA) management for users who connect and use network services. RADIUS is commonly used in enterprise and service provider environments, such as Wi-Fi networks, virtual private networks (VPNs), and dial-up services.",
    page: 17
  },
  {
    id: "cs-117",
    acronym: "RAM",
    term: "Random Access Memory",
    definition: "Computer's short-term memory, where the data that the processor is currently using is stored. Your computer can access RAM memory much faster than data on a hard disk, SSD, or other long-term storage device, which is why RAM capacity is critical for system performance.",
    page: 17
  },
  {
    id: "cs-118",
    acronym: "RAT",
    term: "Remote Access Trojan",
    definition: "A type of malware that allows an attacker to remotely control a victim's computer.",
    page: 17
  },
  {
    id: "cs-119",
    acronym: "RDP",
    term: "Remote Desktop Protocol",
    definition: "A protocol used to remotely access and control a desktop computer.",
    page: 17
  },
  {
    id: "cs-120",
    acronym: "REST",
    term: "Representational State Transfer",
    definition: "Software architectural style that describes the architecture of the web.",
    page: 17
  },
  {
    id: "cs-121",
    acronym: "RFID",
    term: "Radio Frequency Identification",
    definition: "A technology used for tracking and identifying objects using radio waves.",
    page: 18
  },
  {
    id: "cs-122",
    acronym: "RIPEMD",
    term: "RACE Integrity Primitives Evaluation Message Digest",
    definition: "A cryptographic hash function.",
    page: 18
  },
  {
    id: "cs-123",
    acronym: "RTO",
    term: "Recovery Time Objective",
    definition: "The maximum amount of time it takes to recover data after a disaster.",
    page: 18
  },
  {
    id: "cs-124",
    acronym: "RTOS",
    term: "Real Time Operating System",
    definition: "An operating system commonly found in Internet of Things Devices.",
    page: 18
  },
  {
    id: "cs-125",
    acronym: "RBAC",
    term: "Rule Based Access Control",
    definition: "High level rules that determine how, where and when employees can access spaces or resources.",
    page: 18
  },
  {
    id: "cs-126",
    acronym: "S/MIME",
    term: "Secure/Multipurpose Internet Mail Extensions",
    definition: "Standard for secure email messaging that provides encryption and digital signing capabilities.",
    page: 18
  },
  {
    id: "cs-127",
    acronym: "SAN",
    term: "Storage Area Network",
    definition: "Specialized, high-speed network that provides network access to storage devices. SANs are typically composed of hosts, switches, storage elements, and storage devices that are interconnected using a variety of technologies, topologies, and protocols.",
    page: 18
  },
  {
    id: "cs-128",
    acronym: "SaaS",
    term: "Software as a Service",
    definition: "A cloud computing model in which a third-party provider offers software applications.",
    page: 18
  },
  {
    id: "cs-129",
    acronym: "SAE",
    term: "Simultaneous Authentication of Equals",
    definition: "Key exchange protocol that provides stronger security and that replaced PSK in WPA2.",
    page: 18
  },
  {
    id: "cs-130",
    acronym: "SATCOM",
    term: "Secure Satellite Communications",
    definition: "Refers to the use of satellite technology for communication purposes, including voice, data, and video transmission.",
    page: 19
  },
  {
    id: "cs-131",
    acronym: "SCADA",
    term: "Supervisory Control and Data Acquisition",
    definition: "A system used to control and monitor industrial processes.",
    page: 19
  },
  {
    id: "cs-132",
    acronym: "SCP",
    term: "Secure Copy Protocol",
    definition: "A protocol used to securely transfer files between two devices.",
    page: 19
  },
  {
    id: "cs-133",
    acronym: "SFTP",
    term: "Secure File Transfer Protocol",
    definition: "A protocol used to securely transfer files between two devices.",
    page: 19
  },
  {
    id: "cs-134",
    acronym: "SHA",
    term: "Secure Hash Algorithm",
    definition: "SHA stands for secure hashing algorithm. SHA is a modified version of MD5 and used for hashing data and certificates. A hashing algorithm shortens the input data into a smaller form that cannot be understood by using bitwise operations, modular additions, and compression functions.",
    page: 19
  },
  {
    id: "cs-135",
    acronym: "SID",
    term: "Security Identifier",
    definition: "A unique identifier used to identify a user or group in Windows operating systems.",
    page: 19
  },
  {
    id: "cs-136",
    acronym: "SIEM",
    term: "Security Information and Event Management",
    definition: "Type of security solution that provides real-time analysis of security alerts and events generated by network hardware and applications.",
    page: 19
  },
  {
    id: "cs-137",
    acronym: "SMTP",
    term: "Simple Mail Transfer Protocol",
    definition: "A protocol used to send email messages between servers.",
    page: 19
  },
  {
    id: "cs-138",
    acronym: "SNMP",
    term: "Simple Network Management Protocol",
    definition: "A protocol used to manage and monitor network devices.",
    page: 19
  },
  {
    id: "cs-139",
    acronym: "SOAR",
    term: "Security Orchestration, Automation and Response",
    definition: "Security technology that helps organizations automate and streamline their security operations and incident response processes.",
    page: 20
  },
  {
    id: "cs-140",
    acronym: "SoC",
    term: "System on Chip",
    definition: "Integrated circuit (IC) that combines various components of a computer or electronic system into a single chip.",
    page: 20
  },
  {
    id: "cs-141",
    acronym: "SQL",
    term: "Structured Query Language",
    definition: "A programming language used for managing and manipulating data in relational databases.",
    page: 20
  },
  {
    id: "cs-142",
    acronym: "SSH",
    term: "Secure Shell",
    definition: "A protocol used for secure remote access to a device. Uses Port 22.",
    page: 20
  },
  {
    id: "cs-143",
    acronym: "SSL",
    term: "Secure Sockets Layer",
    definition: "SSL, or Secure Sockets Layer, is an encryption-based Internet security protocol. It was first developed by Netscape in 1995 for the purpose of ensuring privacy, authentication, and data integrity in Internet communications. SSL is the predecessor to the modern TLS encryption used today. A website that implements SSL/TLS has 'HTTPS' in its URL instead of 'HTTP'.",
    page: 20
  },
  {
    id: "cs-144",
    acronym: "STP",
    term: "Spanning Tree Protocol",
    definition: "A protocol used to prevent loops in a network topology.",
    page: 20
  },
  {
    id: "cs-145",
    acronym: "STIX",
    term: "Structured Threat Information Exchange",
    definition: "Designed to support the sharing of cybersecurity threat intelligence between different organizations and cybersecurity technologies.",
    page: 20
  },
  {
    id: "cs-146",
    acronym: "TACACS+",
    term: "Terminal Access Controller Access Control System Plus",
    definition: "Protocol used for providing centralized authentication, authorization, and accounting (AAA) services for network devices such as routers, switches, and firewalls.",
    page: 20
  },
  {
    id: "cs-147",
    acronym: "TAXII",
    term: "Trusted Automated Exchange of Indicator Information",
    definition: "Application protocol for exchanging Cyber Threat Intelligence over HTTPS. It works with STIX.",
    page: 21
  },
  {
    id: "cs-148",
    acronym: "TCP",
    term: "Transmission Control Protocol",
    definition: "A protocol used to establish a reliable connection between two devices. Uses three way handshake.",
    page: 21
  },
  {
    id: "cs-149",
    acronym: "TOTP",
    term: "Time Based One Time Password",
    definition: "TOTP uses a timestamp and a time-based factor to generate the password. Specifically, TOTP calculates the message authentication code based on the current time and a time interval (usually 30 seconds).",
    page: 21
  },
  {
    id: "cs-150",
    acronym: "TPM",
    term: "Trusted Platform Module",
    definition: "Chip on motherboard that can be used to store critical information such as encryption keys. TPM can be used for FDE (Full Disk Encryption).",
    page: 21
  },
  {
    id: "cs-151",
    acronym: "UBA",
    term: "User Behaviour Analysis",
    definition: "Checks whether user activity sticks out from their usual activity.",
    page: 21
  },
  {
    id: "cs-152",
    acronym: "UDP",
    term: "User Datagram Protocol",
    definition: "A protocol used for sending datagrams over a network. Connectionless.",
    page: 21
  },
  {
    id: "cs-153",
    acronym: "UEFI",
    term: "Unified Extensible Firmware Interface",
    definition: "Modern version of BIOS. UEFI can be used for securely starting a device.",
    page: 21
  },
  {
    id: "cs-154",
    acronym: "URL",
    term: "Uniform Resource Locator",
    definition: "A unique identifier used to locate a resource on the Internet. It is also referred to as a web address.",
    page: 21
  },
  {
    id: "cs-155",
    acronym: "VLAN",
    term: "Virtual Local Area Network",
    definition: "A logical grouping of devices on a network that are grouped together based on factors such as function, department, or location, rather than physical location.",
    page: 21
  },
  {
    id: "cs-156",
    acronym: "VM",
    term: "Virtual Machine",
    definition: "A software environment that emulates a physical computer.",
    page: 22
  },
  {
    id: "cs-157",
    acronym: "VPN",
    term: "Virtual Private Network",
    definition: "A virtual private network, or VPN, is an encrypted connection over the Internet from a device to a network. The encrypted connection helps ensure that sensitive data is safely transmitted. It prevents unauthorized people from eavesdropping on the traffic and allows the user to conduct work remotely. VPN technology is widely used in corporate environments.",
    page: 22
  },
  {
    id: "cs-158",
    acronym: "VTP",
    term: "VLAN Trunking Protocol",
    definition: "Proprietary protocol used by Cisco switches to exchange VLAN information. With VTP, you can synchronize VLAN information (such as VLAN ID or VLAN name) with switches inside the same VTP domain.",
    page: 22
  },
  {
    id: "cs-159",
    acronym: "WAF",
    term: "Web Application Firewall",
    definition: "Firewall used to protect web applications.",
    page: 22
  },
  {
    id: "cs-160",
    acronym: "WAP",
    term: "Wireless Access Point",
    definition: "Network device that receives and transmits data over WLAN.",
    page: 22
  },
  {
    id: "cs-161",
    acronym: "WEP",
    term: "Wired Equivalent Privacy",
    definition: "Wired equivalent privacy is meant to protect Wi-Fi transmissions by encrypting the data so outsiders who are not inside the encrypted network will not be able to read the messages or data contained within. WEP is better than no security at all, and it is still used on older devices that do not support WPA or WPA2.",
    page: 22
  },
  {
    id: "cs-162",
    acronym: "WIDS",
    term: "Wireless Intrusion Detection System",
    definition: "A system used to detect unauthorized access to a wireless network.",
    page: 22
  },
  {
    id: "cs-163",
    acronym: "WPA",
    term: "Wi-Fi Protected Access",
    definition: "A security protocol used for wireless networks. There is WPA, WPA2, WPA3.",
    page: 22
  },
  {
    id: "cs-164",
    acronym: "X.509",
    term: "X.509 Public Key Certificate Standard",
    definition: "A standard for public key certificates used for authentication in network communication.",
    page: 23
  },
  {
    id: "cs-165",
    acronym: "XML",
    term: "Extensible Markup Language",
    definition: "A markup language used for encoding documents in a format that is both human-readable and machine-readable.",
    page: 23
  },
  {
    id: "cs-166",
    acronym: "XSS",
    term: "Cross-Site Scripting",
    definition: "A type of attack in which an attacker injects malicious code into a web page viewed by other users. Usually this code is javascript code. There are 3 main versions of XSS: DOM Based, Stored and Reflected XSS.",
    page: 23
  }
];
