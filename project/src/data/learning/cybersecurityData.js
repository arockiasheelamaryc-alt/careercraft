// Learning Path Data for Category 5: Cyber Security
export const cybersecurityData = {
  id: "cybersecurity",
  title: "Cyber Security",
  icon: "🛡️",
  role: "Junior Security Analyst / SOC Analyst",
  summary: "Master network packet sniffing with Wireshark, port scanning with Nmap, Linux server hardening, TCP/IP defense, firewalls, and cryptographic algorithms.",
  technologies: [
    {
      id: "wireshark",
      name: "Wireshark",
      tagline: "The World's Foremost Network Packet Protocol Analyzer",
      beginnerFriendly: "Think of Wireshark like an X-ray machine or magnifying glass for internet cables. It lets you inspect every single message, email, or data packet traveling between computers in real time.",
      whatIsIt: "Wireshark is a free and open-source packet analyzer used for network troubleshooting, analysis, software and communications protocol development, and cybersecurity incident response.",
      whyUsed: "It captures microscopic network traffic flowing through network interfaces, decodes hundreds of protocols, and allows security analysts to spot suspicious malware beacons, plain-text credential leaks, or DDoS floods.",
      whereUsed: "Security Operations Centers (SOCs), network engineering teams, forensic laboratories, and penetration testing firms worldwide.",
      mainFeatures: [
        "Live Packet Capture: Capturing Ethernet, Wi-Fi, Bluetooth, and loopback traffic in real time.",
        "Deep Protocol Inspection: Decodes hundreds of protocols (TCP, UDP, DNS, HTTP, TLS, ARP, ICMP).",
        "Display Filters: Powerful filtering syntax (`http.request.method == 'POST'`, `ip.addr == 192.168.1.1`).",
        "Follow TCP Stream: Reconstructs entire conversations between client and server into human-readable text.",
        "Color-Coded Analysis: Highlights errors, retransmissions, and warnings automatically in the packet list."
      ],
      importantConcepts: [
        {
          title: "Promiscuous Mode",
          desc: "Network adapter setting allowing Wireshark to capture all packets traversing the local network segment, not just packets addressed to that host."
        },
        {
          title: "Capture Filters vs Display Filters",
          desc: "Capture filters (BPF syntax) limit what is recorded to disk during capture; Display filters filter already-captured packets during inspection."
        },
        {
          title: "TCP 3-Way Handshake",
          desc: "The SYN -> SYN-ACK -> ACK packet sequence establishing reliable TCP connections."
        },
        {
          title: "Plaintext Credential Identification",
          desc: "Identifying unencrypted HTTP, FTP, or Telnet sessions where usernames and passwords travel in clear text."
        }
      ],
      howItWorks: "Wireshark leverages low-level packet capture drivers (Npcap on Windows, libpcap on Linux). It copies packets directly from the data link layer before the host OS protocol stack processes them, dissects the binary headers, and visualizes them across three pane views.",
      stepByStep: [
        "Step 1: Download and install Wireshark along with the Npcap driver from wireshark.org.",
        "Step 2: Select your active network interface (Ethernet or Wi-Fi) with green activity spikes.",
        "Step 3: Click the blue shark fin icon to begin live packet capture.",
        "Step 4: Generate traffic (browse a website or ping an address) and click the red square to stop capture.",
        "Step 5: Apply display filters like `dns` or `http` and right-click packets to 'Follow TCP Stream'."
      ],
      syntax: `# Essential Wireshark Display Filter Expressions
# 1. Filter traffic to/from a specific IP
ip.addr == 192.168.1.45

# 2. Filter specific protocol ports
tcp.port == 80 || tcp.port == 443

# 3. Filter DNS queries only
dns.flags.response == 0

# 4. Filter HTTP POST requests (often contains logins or forms)
http.request.method == "POST"

# 5. Detect TCP SYN flood / port scanning attempts
tcp.flags.syn == 1 && tcp.flags.ack == 0

# 6. Filter suspicious ICMP ping packets
icmp.type == 8`,
      examples: [
        {
          title: "Inspecting an Insecure HTTP Login",
          code: `# Filter for HTTP login submissions
http.request.method == "POST"

# Right-click packet -> Follow -> TCP Stream:
# Result shows unencrypted plaintext:
# POST /login.php HTTP/1.1
# Host: insecure-site.com
# user=admin&password=SuperSecretPassword123!`
        },
        {
          title: "Command-Line Capture with TShark",
          code: `# TShark is Wireshark's CLI tool
tshark -i eth0 -f "tcp port 80" -Y "http.request" -T fields -e http.host -e http.request.uri`
        }
      ],
      practicalExamples: "Analyzing a packet capture (.pcap) file from a compromised office workstation to identify the exact IP address and domain of an external Command & Control (C2) malware server.",
      realWorldUsage: "Cyber incident responders at CrowdStrike and Mandiant use Wireshark during breach investigations to extract malware payloads and determine how attackers entered corporate networks.",
      importantPoints: [
        "Never capture network traffic on networks you do not own or do not have explicit written authorization to monitor.",
        "In modern HTTPS traffic, payload data is encrypted by TLS; you can see IP endpoints and domain names via SNI, but not inner message text.",
        "Save packet captures in standard `.pcapng` format so team members can inspect them across different operating systems."
      ],
      thingsToLearn: [
        "Wireshark 3-pane layout: Packet List, Packet Details, Packet Bytes",
        "Capture filters using Berkeley Packet Filter (BPF) syntax",
        "Display filters syntax (ip.addr, tcp.port, http, dns, icmp)",
        "Analyzing the TCP 3-way handshake and TCP teardown",
        "Extracting files and objects from HTTP/SMB streams",
        "Detecting ARP poisoning and rogue DHCP servers"
      ],
      miniPracticalTasks: [
        "Task 1: Capture traffic while pinging `8.8.8.8` and identify the ICMP Request and Reply packets in Wireshark.",
        "Task 2: Use display filter `dns` to identify which DNS server resolves `google.com` and inspect the returned IP.",
        "Task 3: Download a sample malware `.pcap` from an educational site and locate the infected machine's IP address."
      ]
    },
    {
      id: "nmap",
      name: "Nmap",
      tagline: "Network Mapper for Network Discovery and Vulnerability Auditing",
      beginnerFriendly: "Think of Nmap like a security guard walking down a hotel hallway, knocking on every door (ports 1 to 65535) to see which doors are unlocked, what is inside, and whether the locks are outdated.",
      whatIsIt: "Nmap ('Network Mapper') is a free and open-source utility for network discovery, host detection, port scanning, and security vulnerability auditing.",
      whyUsed: "It is the premier reconnaissance tool used by network administrators to inventory connected network devices and by cybersecurity specialists to find exposed ports and outdated software services vulnerable to exploits.",
      whereUsed: "Security assessments, vulnerability management teams, ethical hacking, network inventory, and penetration testing.",
      mainFeatures: [
        "Host Discovery: Identifies which hosts are live on a network subnet (ping sweeps).",
        "Port Scanning: Determines open, closed, or filtered states for all 65,535 TCP/UDP ports.",
        "Service & Version Detection (`-sV`): Probes open ports to detect running software and exact version numbers.",
        "OS Detection (`-O`): Analyzes TCP/IP stack fingerprints to identify host operating systems.",
        "Nmap Scripting Engine (NSE): Hundreds of automated scripts for vulnerability detection and exploitation checks."
      ],
      importantConcepts: [
        {
          title: "Port States (Open, Closed, Filtered)",
          desc: "Open = application listening; Closed = host responds but no service active; Filtered = firewall drops packets without response."
        },
        {
          title: "SYN Stealth Scan (-sS)",
          desc: "Default scan: sends SYN packet, waits for SYN-ACK, then immediately sends RST to tear down connection without completing handshake (avoids full logging)."
        },
        {
          title: "Nmap Scripting Engine (NSE)",
          desc: "Lua scripts run with `--script` to test for specific CVE vulnerabilities, default passwords, and SSL certificate expiration."
        },
        {
          title: "Timing Templates (-T0 to -T5)",
          desc: "Controls scan speed: -T1/T2 for stealthy evasion, -T4 for fast reliable scans, -T5 for ultra-aggressive testing."
        }
      ],
      howItWorks: "Nmap crafts raw IP packets with specific header flags (SYN, FIN, NULL, ACK), transmits them across network interfaces, and inspects the nuanced behavioral timing and TCP response flags returned by the target system.",
      stepByStep: [
        "Step 1: Install Nmap on Linux (`sudo apt install nmap`) or download the Windows installer from nmap.org.",
        "Step 2: Discover active hosts on your local subnet: `nmap -sn 192.168.1.0/24`.",
        "Step 3: Perform a standard stealth port scan on a target: `sudo nmap -sS <target_ip>`.",
        "Step 4: Enable service version and OS detection: `sudo nmap -sV -O <target_ip>`.",
        "Step 5: Run vulnerability assessment scripts: `nmap --script vuln <target_ip>`."
      ],
      syntax: `# Nmap Essential Commands Cheat Sheet
# 1. Quick Ping Sweep (Discover live hosts on network)
nmap -sn 192.168.1.0/24

# 2. Stealth TCP SYN Scan of top 1000 ports (Requires sudo)
sudo nmap -sS 192.168.1.50

# 3. Comprehensive Scan (Service versions, OS detection, Default scripts)
sudo nmap -A -T4 192.168.1.50

# 4. Scan specific ports only (e.g. Web and SSH ports)
nmap -p 22,80,443,3306 192.168.1.50

# 5. Scan all 65,535 ports
nmap -p- -T4 192.168.1.50

# 6. Check for known vulnerabilities using NSE scripts
nmap --script vuln 192.168.1.50`,
      examples: [
        {
          title: "Scanning an Authorized Test Server (scanme.nmap.org)",
          code: `nmap -sV -p 22,80 scanme.nmap.org

# Output:
# PORT   STATE SERVICE VERSION
# 22/tcp open  ssh     OpenSSH 6.6.1p1 Ubuntu
# 80/tcp open  http    Apache httpd 2.4.7 ((Ubuntu))`
        },
        {
          title: "Saving Scan Output to File for Reporting",
          code: `# Save in multiple formats: normal, XML, and greppable
nmap -A 192.168.1.50 -oA audit_report_2026`
        }
      ],
      practicalExamples: "Auditing an enterprise office network before a security compliance inspection to ensure no employees have unauthorized Telnet (port 23) or unprotected database ports open to the public internet.",
      realWorldUsage: "Security engineers scan cloud server IP ranges weekly with Nmap to ensure security groups haven't mistakenly left internal administration ports open.",
      importantPoints: [
        "Scanning systems without prior authorization is illegal in many jurisdictions; always use authorized targets like your own local virtual lab or `scanme.nmap.org`.",
        "Full scans across all 65,535 ports can trigger network intrusion detection system (IDS) alerts.",
        "UDP port scans (`-sU`) take significantly longer than TCP scans because closed UDP ports return ICMP port unreachable at rate-limited intervals."
      ],
      thingsToLearn: [
        "Network host discovery methods (ARP ping, ICMP ping, TCP ping)",
        "Port scan types: SYN scan (-sS), Connect scan (-sT), UDP scan (-sU)",
        "Service version detection (-sV) and OS fingerprinting (-O)",
        "Nmap timing templates (-T0 to -T5)",
        "Using Nmap Scripting Engine (NSE) categories (auth, default, safe, vuln)"
      ],
      miniPracticalTasks: [
        "Task 1: Run a ping sweep (`nmap -sn`) on your home Wi-Fi network and identify all connected device IPs.",
        "Task 2: Scan your local machine (`localhost` / `127.0.0.1`) and identify which ports are listening.",
        "Task 3: Run `nmap -sV scanme.nmap.org` and report the exact version of the running Apache web server."
      ]
    },
    {
      id: "linux-security",
      name: "Linux Security",
      tagline: "Operating System Hardening, Access Control, and Defense in Depth",
      beginnerFriendly: "An unhardened server is like a house with the front door unlocked and windows wide open. Linux Security is the art of locking all doors, installing security cameras, and giving keys only to trusted family members.",
      whatIsIt: "Linux Security involves system hardening, configuring user authentication, restricting file permissions, managing firewalls (UFW/iptables), auditing system logs, and enforcing mandatory access controls.",
      whyUsed: "Linux servers host the world's most critical financial and enterprise databases. Hardening prevents unauthorized privilege escalation, remote code execution, and persistent backdoor installations.",
      whereUsed: "Enterprise cloud environments, defense systems, banking infrastructure, and government IT agencies.",
      mainFeatures: [
        "Principle of Least Privilege: Restricting user accounts and disabling root logins over SSH.",
        "Firewall Configuration (UFW / iptables): Blocking all unnecessary incoming network ports.",
        "Fail2ban Intrusion Defense: Automatically banning IP addresses that repeatedly fail password attempts.",
        "SELinux & AppArmor: Mandatory Access Control (MAC) sandboxing application processes.",
        "System Log Auditing: Inspecting `/var/log/auth.log` and `journalctl` for intrusion attempts."
      ],
      importantConcepts: [
        {
          title: "SSH Hardening",
          desc: "Disabling root login (`PermitRootLogin no`), changing standard port 22, and enforcing cryptographic SSH keys (`PasswordAuthentication no`)."
        },
        {
          title: "Fail2ban",
          desc: "Daemon that monitors authentication logs and adds temporary firewall drop rules for brute-force attacking IPs."
        },
        {
          title: "Uncomplicated Firewall (UFW)",
          desc: "User-friendly frontend for iptables to block all incoming traffic by default and allow only necessary services."
        },
        {
          title: "SUID & SGID Binaries",
          desc: "Special file permissions that run with the file owner's privileges (often exploited by attackers for privilege escalation if misconfigured)."
        }
      ],
      howItWorks: "Linux enforces security through user/group IDs in the kernel, file system permission masks, PAM (Pluggable Authentication Modules), netfilter packet filtering hooks in the Linux kernel, and kernel security modules (SELinux/AppArmor).",
      stepByStep: [
        "Step 1: Keep packages updated: `sudo apt update && sudo apt upgrade -y`.",
        "Step 2: Create a non-root sudo user and disable root SSH login in `/etc/ssh/sshd_config`.",
        "Step 3: Enable UFW firewall: `sudo ufw default deny incoming`, allow SSH and HTTP, then `sudo ufw enable`.",
        "Step 4: Install and configure Fail2ban to block brute-force attacks.",
        "Step 5: Audit active listening ports with `ss -tulnp` and disable unnecessary daemons."
      ],
      syntax: `# Linux Hardening Commands & Configuration
# 1. Configure UFW Firewall
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw allow 22/tcp
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw enable
sudo ufw status verbose

# 2. Hardening SSH Configuration (/etc/ssh/sshd_config)
# Edit with sudo nano /etc/ssh/sshd_config:
# PermitRootLogin no
# PasswordAuthentication no
# MaxAuthTries 3
# X11Forwarding no

# 3. Restart SSH Daemon
sudo systemctl restart sshd

# 4. Find all SUID binaries on system (Potential Privilege Escalation Vectors)
find / -perm -4000 -type f 2>/dev/null`,
      examples: [
        {
          title: "Installing and Checking Fail2ban",
          code: `sudo apt install fail2ban -y
sudo systemctl enable --now fail2ban

# Check jail status to see banned attacker IPs
sudo fail2ban-client status sshd
# Output:
# Currently banned: 5
# Banned IP list: 185.220.101.5 45.142.214.12 ...`
        },
        {
          title: "Inspecting Failed Authentication Attempts",
          code: `# Search for failed login attempts in system logs
grep "Failed password" /var/log/auth.log | head -n 10`
        }
      ],
      practicalExamples: "Hardening an Ubuntu server on AWS EC2 by removing default passwords, enforcing SSH key-only logins, installing Fail2ban, and setting up automatic security updates via `unattended-upgrades`.",
      realWorldUsage: "Financial platforms enforce strict CIS (Center for Internet Security) Linux Benchmarks to ensure all cloud virtual machines comply with banking security regulations.",
      importantPoints: [
        "Never disable SELinux or AppArmor in production just to make an app work; configure proper policies instead.",
        "Always verify you have an active, working SSH connection in a separate terminal before restarting the SSH daemon with hardened configs.",
        "Regularly run automated vulnerability scanners like Lynis (`sudo lynis audit system`) to review your server's security posture."
      ],
      thingsToLearn: [
        "User and group management, sudoers configuration (`visudo`)",
        "SSH security hardening best practices",
        "Configuring UFW and understanding iptables chains",
        "Installing and tuning Fail2ban for service protection",
        "Auditing logs in /var/log/auth.log, syslog, and journalctl"
      ],
      miniPracticalTasks: [
        "Task 1: Set up UFW on a Linux VM to block all incoming traffic except SSH and HTTP.",
        "Task 2: Configure SSH to prohibit password logins and require an SSH key.",
        "Task 3: Run `lynis audit system` and review the generated security hardening score."
      ]
    },
    {
      id: "tcpip-protocols",
      name: "TCP/IP Protocols",
      tagline: "The Core Communications Architecture and Security Vulnerabilities of the Internet",
      beginnerFriendly: "Think of the internet like an international postal system. TCP/IP is the rulebook deciding how letters are addressed, divided into smaller envelopes, routed across delivery trucks, and assembled back in order.",
      whatIsIt: "TCP/IP (Transmission Control Protocol / Internet Protocol) is the fundamental suite of communication protocols used to connect network devices on the internet and local networks.",
      whyUsed: "Understanding TCP/IP is mandatory for cybersecurity professionals because network attacks (IP spoofing, SYN floods, Man-in-the-Middle, DNS poisoning) exploit flaws in these protocol mechanics.",
      whereUsed: "Every connected computer, smartphone, web server, router, and IoT sensor on earth.",
      mainFeatures: [
        "4-Layer Model: Application, Transport, Internet, Network Access.",
        "Reliable Transport (TCP): Connection-oriented, sequencing, acknowledgments, flow control, retransmissions.",
        "Unreliable Transport (UDP): Connectionless, low latency, no acknowledgments (DNS, streaming, gaming).",
        "Addressing (IP): IPv4 (32-bit dotted decimal) and IPv6 (128-bit hexadecimal).",
        "Auxiliary Protocols: ARP (IP to MAC translation), ICMP (diagnostics & ping), DNS, DHCP."
      ],
      importantConcepts: [
        {
          title: "The TCP 3-Way Handshake",
          desc: "SYN (synchronize sequence numbers) -> SYN-ACK (server acknowledges and synchronizes) -> ACK (client acknowledges)."
        },
        {
          title: "SYN Flood Denial of Service Attack",
          desc: "Attacker sends thousands of SYN requests with spoofed IPs and never completes the handshake, exhausting server connection memory."
        },
        {
          title: "ARP Spoofing / Cache Poisoning",
          desc: "Attacker broadcasts fake ARP replies to trick devices into routing local LAN traffic through the attacker's machine (Man-in-the-Middle)."
        },
        {
          title: "DNS Spoofing & Cache Poisoning",
          desc: "Corrupting DNS resolver records to redirect legitimate domain requests to fraudulent phishing servers."
        }
      ],
      howItWorks: "Data from application software passes down the stack. Each layer encapsulates the data with its own header: Transport adds TCP/UDP port numbers, Internet adds source/destination IP addresses, and Network Access adds MAC addresses before transmitting raw bits across the physical cable or Wi-Fi radio.",
      stepByStep: [
        "Step 1: Understand OSI 7-Layer model versus TCP/IP 4-Layer model.",
        "Step 2: Memorize standard port assignments: 20/21 (FTP), 22 (SSH), 25 (SMTP), 53 (DNS), 80 (HTTP), 443 (HTTPS).",
        "Step 3: Analyze the fields in an IPv4 packet header (TTL, checksum, protocol, source/destination).",
        "Step 4: Analyze TCP control flags (SYN, ACK, FIN, RST, PSH, URG).",
        "Step 5: Understand common network-level attack vectors and defense techniques (SYN cookies, dynamic ARP inspection)."
      ],
      syntax: `# TCP/IP Packet Header Breakdown (Conceptual)
# --- TCP Segment Header (20 Bytes minimum) ---
# [Source Port: 16 bits]    [Destination Port: 16 bits]
# [Sequence Number: 32 bits]
# [Acknowledgment Number: 32 bits]
# [Data Offset: 4 bits] [Reserved: 3 bits] [Flags: 9 bits (URG, ACK, PSH, RST, SYN, FIN)]
# [Window Size: 16 bits]
# [Checksum: 16 bits]        [Urgent Pointer: 16 bits]

# --- IPv4 Packet Header (20 Bytes minimum) ---
# [Version: 4] [IHL: 4] [TOS: 8] [Total Length: 16 bits]
# [Identification: 16 bits] [Flags: 3 bits] [Fragment Offset: 13 bits]
# [Time To Live (TTL): 8 bits] [Protocol: 8 bits (6=TCP, 17=UDP, 1=ICMP)]
# [Header Checksum: 16 bits]
# [Source IP Address: 32 bits]
# [Destination IP Address: 32 bits]`,
      examples: [
        {
          title: "Detecting ARP Poisoning on Linux",
          code: `# Check ARP table for duplicate MAC addresses
arp -a
# If two different IP addresses have the identical MAC address,
# an ARP poisoning attack is likely occurring on the local network!`
        },
        {
          title: "Mitigating SYN Flood with Linux SYN Cookies",
          code: `# Verify if SYN cookies are enabled in kernel
sysctl net.ipv4.tcp_syncookies
# Enable SYN cookies to protect against connection exhaustion:
sudo sysctl -w net.ipv4.tcp_syncookies=1`
        }
      ],
      practicalExamples: "Investigating why an office printer cannot be reached by checking its default gateway IP, verifying subnet masks, and checking ARP table mappings for IP conflicts.",
      realWorldUsage: "Internet Service Providers and cloud datacenters deploy BGP and TCP/IP scrubbing centers to absorb multi-terabit volumetric DDoS attacks targeting major online services.",
      importantPoints: [
        "TCP guarantees delivery and ordering; UDP does not guarantee delivery or packet ordering.",
        "IP packets have a Time to Live (TTL) field that decrements at each router hop to prevent packets from looping infinitely.",
        "ARP operates entirely at Layer 2 (Data Link) and has zero built-in authentication, making local Wi-Fi networks inherently vulnerable without 802.1X."
      ],
      thingsToLearn: [
        "OSI 7 Layers vs TCP/IP 4 Layers",
        "TCP connection lifecycle (Handshake, Data transfer, FIN/RST teardown)",
        "UDP mechanics and when to use UDP vs TCP",
        "IP addressing, subnet masks, CIDR notation (/24, /16)",
        "Core protocols: ARP, ICMP, DNS, DHCP, HTTP/HTTPS",
        "Common protocol vulnerabilities (IP spoofing, SYN flood, Man-in-the-middle)"
      ],
      miniPracticalTasks: [
        "Task 1: Calculate the network address, broadcast address, and total usable hosts for subnet `192.168.10.0/26`.",
        "Task 2: Use `ping` to determine the TTL value of a website and infer its underlying operating system.",
        "Task 3: Use `traceroute` (or `tracert` on Windows) to trace the number of router hops between your machine and `8.8.8.8`."
      ]
    },
    {
      id: "firewalls-antivirus",
      name: "Firewalls & Antivirus",
      tagline: "Perimeter Network Defense and Endpoint Detection & Response",
      beginnerFriendly: "A Firewall is the security gate at the front entrance of a building checking IDs and keeping intruders out. An Antivirus is the security guard patrolling inside the hallways checking for suspicious people who snuck past the gate.",
      whatIsIt: "Firewalls monitor and filter incoming and outgoing network traffic based on an organization's previously established security policies. Antivirus / Endpoint Detection & Response (EDR) software detects, quarantines, and eradicates malicious software on endpoints.",
      whyUsed: "They form the primary perimeter and endpoint defense lines against unauthorized remote connections, ransomware, spyware, Trojans, and zero-day exploits.",
      whereUsed: "Every home Wi-Fi router, corporate network boundary, student laptop, and enterprise cloud infrastructure.",
      mainFeatures: [
        "Packet Filtering Firewalls: Inspects IP addresses, ports, and protocols against access control lists (ACLs).",
        "Stateful Inspection: Tracks the state of active network connections and allows returning reply packets automatically.",
        "Next-Generation Firewalls (NGFW): Deep packet inspection, application awareness, and integrated intrusion prevention (IPS).",
        "Signature-Based Antivirus: Compares file hashes against known databases of malicious malware signatures.",
        "Heuristic & Behavioral EDR: Analyzes anomalous process behavior (e.g., suspicious file encryption patterns) in real time."
      ],
      importantConcepts: [
        {
          title: "Default Deny Rule",
          desc: "The golden rule of firewall security: block all incoming traffic by default, and explicitly allow only verified services."
        },
        {
          title: "Stateful vs Stateless Filtering",
          desc: "Stateful firewalls remember that an outbound request was initiated and allow the response back through; stateless firewalls evaluate every packet independently."
        },
        {
          title: "Malware Signatures & Hashes (MD5, SHA-256)",
          desc: "Unique cryptographic fingerprint of a binary file used by antivirus tools like VirusTotal to detect known malware."
        },
        {
          title: "EDR (Endpoint Detection and Response)",
          desc: "Modern endpoint protection that continuously monitors process execution trees, memory injections, and network telemetry."
        }
      ],
      howItWorks: "Network firewalls hook into the operating system network stack (like iptables/netfilter), comparing packet header fields against ordered rule tables. Antivirus programs install filesystem minifilter drivers that intercept file execution calls, scan memory blocks, and compute cryptographic hashes against threat intelligence feeds.",
      stepByStep: [
        "Step 1: Check your active firewall status: `sudo ufw status` or Windows Defender Firewall console.",
        "Step 2: Define your inbound rules: block everything except necessary ports.",
        "Step 3: Keep antivirus definitions updated automatically.",
        "Step 4: Use online multi-engine scanners like VirusTotal to analyze suspicious file hashes.",
        "Step 5: Review blocked connection logs regularly to detect ongoing port scans."
      ],
      syntax: `# Enterprise iptables Firewall Rules Example
# 1. Flush existing rules
sudo iptables -F

# 2. Set default policies: DROP incoming and forward, ACCEPT outgoing
sudo iptables -P INPUT DROP
sudo iptables -P FORWARD DROP
sudo iptables -P OUTPUT ACCEPT

# 3. Allow traffic on loopback interface (localhost)
sudo iptables -A INPUT -i lo -j ACCEPT

# 4. Allow established and related incoming connections (Stateful)
sudo iptables -A INPUT -m conntrack --ctstate ESTABLISHED,RELATED -j ACCEPT

# 5. Allow incoming SSH (port 22) and Web traffic (ports 80 and 443)
sudo iptables -A INPUT -p tcp --dport 22 -j ACCEPT
sudo iptables -A INPUT -p tcp --dport 80 -j ACCEPT
sudo iptables -A INPUT -p tcp --dport 443 -j ACCEPT

# 6. View active rules with line numbers
sudo iptables -L -v -n --line-numbers`,
      examples: [
        {
          title: "Checking File Hash with PowerShell",
          code: `# Calculate SHA256 hash of a downloaded file to verify authenticity
Get-FileHash -Algorithm SHA256 .\\installer.exe

# Output:
# Algorithm       Hash                                Path
# ---------       ----                                ----
# SHA256          5E884898DA28047151D0E56F8DC629277... installer.exe`
        },
        {
          title: "Submitting Hash to Threat Intelligence",
          code: `# Querying VirusTotal API with curl
curl --request GET \\
  --url "https://www.virustotal.com/api/v3/files/<file_hash>" \\
  --header "x-apikey: YOUR_API_KEY"`
        }
      ],
      practicalExamples: "Configuring a company perimeter firewall to block all traffic originating from known high-risk geographical IP blocks and alerting the SOC team if an internal host attempts to connect to a blacklisted malware IP.",
      realWorldUsage: "Enterprises deploy Palo Alto Networks or Fortinet Next-Generation Firewalls at datacenter edges to inspect encrypted SSL traffic and block zero-day exploits before they reach internal corporate networks.",
      importantPoints: [
        "A firewall cannot protect against malicious email attachments opened by users over permitted ports (like HTTP/HTTPS); layered defense in depth is required.",
        "Never run two competing real-time antivirus engines on the same Windows machine; they will conflict, cause extreme latency, and crash the system.",
        "Keep firewall rules ordered carefully; firewall rules are evaluated sequentially from top to bottom, and the first matching rule wins."
      ],
      thingsToLearn: [
        "Firewall types: packet filtering, stateful, proxy, next-generation (NGFW)",
        "Writing iptables and UFW rules on Linux",
        "Antivirus mechanics: signature detection, heuristics, behavioral monitoring",
        "Endpoint Detection and Response (EDR) concepts",
        "Analyzing malware hashes on VirusTotal and MalwareBazaar"
      ],
      miniPracticalTasks: [
        "Task 1: Calculate the SHA-256 hash of a file on your computer and search for it on VirusTotal.",
        "Task 2: Configure Windows Defender Firewall to block all incoming connections to a specific port.",
        "Task 3: Inspect your local computer's firewall log and locate at least 3 blocked incoming probe attempts."
      ]
    },
    {
      id: "cryptography-cyber",
      name: "Cryptography (AES / RSA / Hashing)",
      tagline: "The Mathematical Foundation of Data Confidentiality, Integrity, and Authentication",
      beginnerFriendly: "Think of Cryptography like secret message encoding. Hashing is a digital fingerprint (one-way); Symmetric encryption is a locked treasure chest with one key; Asymmetric encryption is a mailbox with a public slot anyone can drop letters into, but only you have the private key to unlock.",
      whatIsIt: "Cryptography is the practice and study of techniques for secure communication in the presence of adversarial third parties. It provides Confidentiality, Integrity, Authentication, and Non-repudiation.",
      whyUsed: "Without cryptography, all passwords, credit cards, banking transactions, medical files, and private chats sent over the internet would be intercepted and stolen in plain text.",
      whereUsed: "HTTPS (TLS/SSL), WhatsApp end-to-end encryption, SSH keys, password storage (bcrypt/Argon2), cryptocurrency blockchains, and digital signatures.",
      mainFeatures: [
        "Symmetric Encryption (AES): Same secret key used for encryption and decryption; extremely fast.",
        "Asymmetric Encryption (RSA / ECC): Public key for encryption, private key for decryption; solves key exchange.",
        "Cryptographic Hash Functions (SHA-256): One-way mathematical functions converting any input into a fixed-size digest.",
        "Digital Signatures: Verifies sender identity and guarantees that a message was not tampered with.",
        "Password Hashing & Salting: Using slow, memory-hard algorithms (bcrypt, PBKDF2, Argon2) with random salts."
      ],
      importantConcepts: [
        {
          title: "Symmetric vs Asymmetric Encryption",
          desc: "Symmetric (AES-256) is fast and ideal for bulk data; Asymmetric (RSA-2048 / ECC) is used to securely exchange the symmetric key over untrusted networks."
        },
        {
          title: "Hashing vs Encryption",
          desc: "Encryption is two-way (can be decrypted with the right key); Hashing is strictly one-way (impossible to reverse the hash back into the original input)."
        },
        {
          title: "Salt in Password Storage",
          desc: "Random string added to passwords before hashing to defeat precomputed Rainbow Table lookup attacks."
        },
        {
          title: "Public Key Infrastructure (PKI) & Digital Certificates",
          desc: "Certificate Authorities (CAs) signing digital certificates to bind public keys to domain names for HTTPS."
        }
      ],
      howItWorks: "Cryptographic algorithms rely on complex mathematical problems that are easy to compute in one direction but computationally infeasible to invert without the key (e.g., factoring massive prime numbers in RSA or discrete logarithms on elliptic curves).",
      stepByStep: [
        "Step 1: Understand the CIA Triad (Confidentiality via encryption, Integrity via hashing, Availability).",
        "Step 2: Generate an RSA key pair using `ssh-keygen` or OpenSSL.",
        "Step 3: Encrypt and decrypt a file using symmetric AES-256 with OpenSSL.",
        "Step 4: Hash passwords in code using salted `bcrypt` rather than plain MD5 or SHA-256.",
        "Step 5: Verify digital signatures and inspect SSL/TLS certificates in your web browser."
      ],
      syntax: `# Practical Cryptography with OpenSSL Command Line
# 1. Symmetric Encryption: Encrypt a file using AES-256-CBC
openssl enc -aes-256-cbc -salt -in confidential.txt -out encrypted.enc

# 2. Symmetric Decryption: Decrypt the file
openssl enc -d -aes-256-cbc -in encrypted.enc -out decrypted.txt

# 3. Generate a 2048-bit RSA Private Key
openssl genrsa -out private_key.pem 2048

# 4. Extract the matching RSA Public Key
openssl rsa -in private_key.pem -pubout -out public_key.pem

# 5. Compute SHA-256 Hash of a file
openssl dgst -sha256 confidential.txt`,
      examples: [
        {
          title: "Secure Password Hashing with Node.js bcrypt",
          code: `const bcrypt = require('bcrypt');
const saltRounds = 12; // Computationally intensive work factor

async function securePassword(plainPassword) {
  // Automatically generates salt and hashes password
  const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);
  console.log("Safe Database Hash:", hashedPassword);

  // Verifying password during login
  const isMatch = await bcrypt.compare(plainPassword, hashedPassword);
  console.log("Password Valid?", isMatch);
}

securePassword("StudentSecret2026!");`
        },
        {
          title: "Python Hashlib SHA-256 Checksum",
          code: `import hashlib

def get_checksum(text):
    return hashlib.sha256(text.encode('utf-8')).hexdigest()

print("Hash:", get_checksum("Career Craft Cyber Track"))`
        }
      ],
      practicalExamples: "Implementing a user registration and login system that salts and hashes passwords using bcrypt, rejects weak passwords, and enforces HTTPS communication to prevent session sniffing.",
      realWorldUsage: "Signal and WhatsApp use the Signal Protocol (combining Double Ratchet, Curve25519, and AES-256) to guarantee end-to-end encryption for over 2 billion global users.",
      importantPoints: [
        "Never invent your own cryptographic algorithm ('Don't roll your own crypto'); always use peer-reviewed, industry-standard algorithms.",
        "Never use deprecated algorithms like MD5 or SHA-1 for passwords or security certificates; they suffer from known collision vulnerabilities.",
        "Never use plain SHA-256 for passwords; standard SHA-256 is too fast and easily cracked by GPUs. Always use slow algorithms like bcrypt, scrypt, or Argon2."
      ],
      thingsToLearn: [
        "Symmetric encryption algorithms (AES, DES/3DES history, ChaCha20)",
        "Asymmetric encryption algorithms (RSA, ECC, Diffie-Hellman key exchange)",
        "Cryptographic hashes (SHA-256, SHA-3) vs insecure hashes (MD5, SHA-1)",
        "Password hashing with salt and work factors (bcrypt, Argon2)",
        "Digital certificates, Certificate Authorities, and TLS handshake process"
      ],
      miniPracticalTasks: [
        "Task 1: Generate an SSH key pair (`ssh-keygen -t rsa -b 4096`) and examine the public and private key files.",
        "Task 2: Encrypt a text file using OpenSSL AES-256 and decrypt it using your password passphrase.",
        "Task 3: Write a Python script that calculates the SHA-256 hash of a file and verifies if the file content changed."
      ]
    }
  ],
  practiceTest: {
    categoryTitle: "Cyber Security",
    totalQuestions: 15,
    instructions: "Answer the following conceptual, protocol, and security auditing questions covering Cyber Security technologies (Wireshark, Nmap, Linux Security, TCP/IP, Firewalls & Antivirus, Cryptography). Record your answers in your study workbook.",
    questions: [
      {
        id: 1,
        technology: "Wireshark",
        question: "Explain the difference between a Capture Filter and a Display Filter in Wireshark. Give an example filter syntax for each."
      },
      {
        id: 2,
        technology: "Wireshark",
        question: "What is 'Promiscuous Mode' in network packet capturing? Why is it necessary to enable promiscuous mode when analyzing traffic across a shared network hub or switched port with port mirroring?"
      },
      {
        id: 3,
        technology: "Wireshark",
        question: "How can an analyst detect a cleartext credential leak using Wireshark? Which protocols transmit credentials in clear text, and which encrypted protocols mitigate this vulnerability?"
      },
      {
        id: 4,
        technology: "Nmap",
        question: "Describe the mechanics of an Nmap TCP SYN Stealth Scan (-sS). Why is it called a 'half-open' scan, and how does it avoid completing the TCP 3-way handshake?"
      },
      {
        id: 5,
        technology: "Nmap",
        question: "Explain what Nmap means when a scanned port is reported in the 'Filtered' state versus the 'Closed' state."
      },
      {
        id: 6,
        technology: "Nmap",
        question: "What is the Nmap Scripting Engine (NSE)? Describe two common use cases for running NSE scripts during a vulnerability assessment."
      },
      {
        id: 7,
        technology: "Linux Security",
        question: "What are the recommended steps for hardening an OpenSSH server configuration on a public Linux cloud instance?"
      },
      {
        id: 8,
        technology: "Linux Security",
        question: "Explain the role of 'Fail2ban' in server security. How does it monitor authentication log files and interact with the firewall to block brute-force attacks?"
      },
      {
        id: 9,
        technology: "TCP/IP Protocols",
        question: "Diagram and explain the TCP 3-Way Handshake (SYN, SYN-ACK, ACK). How does an attacker exploit this handshake mechanism to perform a SYN Flood denial of service attack?"
      },
      {
        id: 10,
        technology: "TCP/IP Protocols",
        question: "What is ARP Spoofing (ARP Cache Poisoning)? Explain how an attacker on a local network can execute a Man-in-the-Middle attack by manipulating ARP replies."
      },
      {
        id: 11,
        technology: "Firewalls & Antivirus",
        question: "Explain the difference between a Stateless Packet Filtering Firewall and a Stateful Inspection Firewall. Which one maintains connection state tables?"
      },
      {
        id: 12,
        technology: "Firewalls & Antivirus",
        question: "What is the 'Default Deny' rule in firewall architecture and why is it considered the foundational baseline for network perimeter defense?"
      },
      {
        id: 13,
        technology: "Cryptography",
        question: "Explain the fundamental difference between Symmetric Encryption and Asymmetric Encryption. Name one primary advantage and one primary disadvantage of each."
      },
      {
        id: 14,
        technology: "Cryptography",
        question: "Why should cryptographic hash functions like SHA-256 never be used alone to store user passwords in databases? What is a 'Salt', and why are algorithms like bcrypt or Argon2 preferred?"
      },
      {
        id: 15,
        technology: "Cryptography",
        question: "What is a Digital Signature? Explain how asymmetric cryptography provides both sender authentication and message integrity in a digital signature."
      }
    ]
  }
};
