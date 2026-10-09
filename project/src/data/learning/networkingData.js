// Learning Path Data for Category 9: IT Support & Networking
export const networkingData = {
  id: "it-networking",
  title: "IT Support & Networking",
  icon: "📡",
  role: "IT Support Specialist / Network Associate",
  summary: "Master TCP/IP networking, multi-platform OS administration (Windows/Linux), hardware cabling and routers, network troubleshooting command-line tools, Active Directory domain services, and enterprise remote support.",
  technologies: [
    {
      id: "tcpip-network-admin",
      name: "TCP/IP Networking",
      tagline: "The Core Communication Architecture of Computer Networks and the Internet",
      beginnerFriendly: "Think of computer networking like a highway system. IP addresses are the house street numbers, routers are the traffic intersections directing cars, and TCP is the certified delivery truck ensuring every package arrives safely without getting lost.",
      whatIsIt: "TCP/IP (Transmission Control Protocol / Internet Protocol) is the suite of communication protocols used to interconnect network devices across Local Area Networks (LAN) and Wide Area Networks (WAN).",
      whyUsed: "It is the foundational protocol suite powering the global internet. IT support specialists and network engineers rely on TCP/IP to configure office subnets, assign IP addresses, resolve connectivity problems, and guarantee end-to-end communication.",
      whereUsed: "Every connected computer, smartphone, server, router, switch, printer, and smart IoT device on earth.",
      mainFeatures: [
        "Layered Architecture: Application (HTTP, DNS), Transport (TCP, UDP), Internet (IP, ICMP), Network Access (Ethernet, Wi-Fi).",
        "IP Addressing: IPv4 (32-bit dotted-decimal, e.g. 192.168.1.1) and IPv6 (128-bit hexadecimal).",
        "Subnetting & CIDR: Dividing network ranges into efficient subnets using CIDR notation (/24, /26).",
        "DHCP (Dynamic Host Configuration Protocol): Automatic assignment of IP addresses, subnet masks, and default gateways.",
        "DNS (Domain Name System): Hierarchical system translating human domain names into computer IP addresses."
      ],
      importantConcepts: [
        {
          title: "Public vs Private IP Addresses",
          desc: "Private IPs (10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16) are used internally on LANs and not routable on the public internet; Public IPs are unique worldwide and assigned by ISPs."
        },
        {
          title: "NAT (Network Address Translation)",
          desc: "Allows an entire office of hundreds of devices with private IPs to share a single public IPv4 address to access the internet."
        },
        {
          title: "Default Gateway",
          desc: "The router interface IP on a local subnet that forwards packets destined for remote networks or the internet."
        },
        {
          title: "Subnet Masks & CIDR",
          desc: "Defines which portion of an IP address represents the network and which portion represents individual host devices."
        }
      ],
      howItWorks: "When a user visits a website, DNS resolves the domain to an IP address. The OS encapsulates the payload into a TCP segment with port numbers, adds IP headers with source/destination addresses, resolves the gateway MAC address via ARP, and transmits Ethernet frames across the network.",
      stepByStep: [
        "Step 1: Understand OSI 7-Layer model versus TCP/IP 4-Layer model.",
        "Step 2: Memorize standard private IP ranges (Class A: 10.x, Class B: 172.16.x, Class C: 192.168.x).",
        "Step 3: Practice subnetting calculations (calculating network ID, broadcast IP, and usable host count).",
        "Step 4: Understand the 4-step DHCP DORA process (Discover, Offer, Request, Acknowledge).",
        "Step 5: Master DNS query recursion from Root servers down to Authoritative nameservers."
      ],
      syntax: `# Common TCP/IP Port Assignments Reference
# Port 20/21: FTP (File Transfer Protocol)
# Port 22:    SSH (Secure Shell)
# Port 23:    Telnet (Unencrypted remote terminal)
# Port 25:    SMTP (Simple Mail Transfer Protocol)
# Port 53:    DNS (Domain Name System)
# Port 67/68: DHCP (Dynamic Host Configuration Protocol)
# Port 80:    HTTP (Hypertext Transfer Protocol)
# Port 110:   POP3 (Post Office Protocol v3)
# Port 143:   IMAP (Internet Message Access Protocol)
# Port 443:   HTTPS (HTTP Secure / TLS)
# Port 3389:  RDP (Remote Desktop Protocol)`,
      examples: [
        {
          title: "Calculating a Subnet (/26 Mask: 255.255.255.192)",
          code: `Network: 192.168.1.0/26
Total Bits for Host = 32 - 26 = 6 bits
Total IPs = 2^6 = 64
Usable Hosts = 64 - 2 = 62 hosts
- Network Address: 192.168.1.0
- First Usable Host: 192.168.1.1 (Typically Gateway)
- Last Usable Host: 192.168.1.62
- Broadcast Address: 192.168.1.63`
        },
        {
          title: "DHCP DORA Process Breakdown",
          code: `1. Discover: Client broadcasts "I need an IP address!" (DHCPDISCOVER)
2. Offer: DHCP Server responds "Here is 192.168.1.50 for you." (DHCPOFFER)
3. Request: Client broadcasts "I accept 192.168.1.50!" (DHCPREQUEST)
4. Acknowledge: Server confirms "192.168.1.50 is leased to you for 24h." (DHCPACK)`
        }
      ],
      practicalExamples: "Configuring a newly opened college branch office network with two separate subnets: one for staff computers and another for student Wi-Fi, separated by VLANs with automatic DHCP IP distribution.",
      realWorldUsage: "Enterprise network engineers at Cisco and university network operations centers (NOCs) monitor campus-wide TCP/IP traffic, managing routing tables and ensuring high-speed internet connectivity.",
      importantPoints: [
        "Every subnet loses 2 IP addresses: the first is reserved for the Network ID and the last is reserved for the Broadcast address.",
        "If a device assigns itself an IP address starting with `169.254.x.x` (APIPA), it means the device failed to reach the DHCP server.",
        "Always confirm default gateway and DNS settings when a user complains they can access the local network but cannot browse the internet."
      ],
      thingsToLearn: [
        "OSI 7 Layers vs TCP/IP 4 Layers",
        "IPv4 addressing classes (A, B, C) and Subnetting (/24, /25, /26, /27)",
        "Public vs Private IP ranges (RFC 1918)",
        "DNS hierarchy and resolution process",
        "DHCP DORA process and lease management",
        "TCP vs UDP protocols and port numbers"
      ],
      miniPracticalTasks: [
        "Task 1: Calculate the usable IP address range for subnet `172.16.50.0/24`.",
        "Task 2: Identify what port number is used by secure HTTPS traffic and DNS queries.",
        "Task 3: Look at your computer's current IP address and identify if it is public or private."
      ]
    },
    {
      id: "windows-linux-os",
      name: "Windows 10/11 & Linux OS",
      tagline: "Operating System Installation, Administration, and Technical Troubleshooting",
      beginnerFriendly: "Think of operating systems as the managers of a company. Windows is the friendly manager with a mouse and colorful buttons everyone is familiar with. Linux is the technical engineer working quietly behind the scenes with pure power and zero distractions.",
      whatIsIt: "Windows 10/11 and Linux (Ubuntu, Debian, Red Hat) are the two primary operating systems encountered by IT support professionals. Windows dominates office desktops and laptops; Linux dominates cloud servers and networking gear.",
      whyUsed: "IT specialists must be bilingual: diagnosing Windows blue screens, driver conflicts, registry issues, and user profiles on the desktop side, while managing Linux server daemons, permissions, and log files on the backend.",
      whereUsed: "Every corporate office, university computer lab, helpdesk support center, and server datacenter.",
      mainFeatures: [
        "OS Installation & Imaging: Creating bootable USB drives (Rufus) and deploying standardized system images.",
        "Device Manager & Driver Maintenance: Updating, rolling back, and troubleshooting hardware peripheral drivers.",
        "Windows Registry & Group Policy (GPO): Centralized administrative control over desktop settings.",
        "Task Manager & Resource Monitor: Analyzing high CPU, memory leaks, and unresponsive frozen processes.",
        "Linux File System & CLI Administration: Managing services, user permissions, and package updates."
      ],
      importantConcepts: [
        {
          title: "BSOD (Blue Screen of Death)",
          desc: "Critical Windows stop error caused by hardware failure, corrupted kernel drivers, or overheating, diagnosed via minidump logs."
        },
        {
          title: "Safe Mode & Clean Boot",
          desc: "Diagnostic startup mode running Windows with minimal drivers and services to isolate software conflicts and malware."
        },
        {
          title: "Windows Event Viewer",
          desc: "System logging console tracking Application, Security, Setup, and System event logs with Event IDs."
        },
        {
          title: "Linux Systemd & Services",
          desc: "Managing system startup and background daemons using systemctl commands on modern Linux distributions."
        }
      ],
      howItWorks: "The operating system manages hardware abstraction via device drivers, schedules CPU execution threads, manages virtual memory (paging/swap files), and provides file system access (NTFS on Windows, ext4 on Linux).",
      stepByStep: [
        "Step 1: Create a bootable Windows or Linux USB drive using Rufus or Ventoy.",
        "Step 2: Enter BIOS/UEFI settings, configure boot order, and install the OS on SSD.",
        "Step 3: Install motherboard chipset, graphics, and network interface card (NIC) drivers.",
        "Step 4: Configure system updates, antivirus, and backup restore points.",
        "Step 5: Troubleshoot performance issues using Task Manager, Event Viewer, and CLI tools."
      ],
      syntax: `# Windows PowerShell & CMD Troubleshooting Commands
# 1. System File Checker (Scans and repairs corrupt Windows OS files)
sfc /scannow

# 2. Deployment Image Servicing and Management (DISM) repair
DISM /Online /Cleanup-Image /RestoreHealth

# 3. Check and repair disk bad sectors
chkdsk C: /f /r

# 4. Flush and reset local DNS resolver cache
ipconfig /flushdns

# --- Linux Equivalent Commands ---
# Check disk health and partition space
df -h
# Check system journal for errors
sudo journalctl -p 3 -xb`,
      examples: [
        {
          title: "Investigating Windows Blue Screen Stop Code",
          code: `Common Stop Codes:
- CRITICAL_PROCESS_DIED: Corrupt system files (run sfc /scannow).
- MEMORY_MANAGEMENT: Faulty RAM hardware (run Windows Memory Diagnostic: mdsched.exe).
- DRIVER_IRQL_NOT_LESS_OR_EQUAL: Faulty device driver (boot into Safe Mode and roll back driver).`
        },
        {
          title: "Creating a System Restore Point in PowerShell",
          code: `Checkpoint-Computer -Description "Before Driver Update" -RestorePointType "MODIFY_SETTINGS"`
        }
      ],
      practicalExamples: "Resolving an employee support ticket where Windows 11 freezes upon booting: booting into Safe Mode, reviewing Event Viewer logs to identify a corrupt graphics driver update, rolling back the driver, and restoring normal functionality.",
      realWorldUsage: "Helpdesk teams at major enterprises support tens of thousands of Windows laptops and Linux developer workstations using automated deployment tools and centralized imaging.",
      importantPoints: [
        "Always create a System Restore Point or full backup before editing the Windows Registry or updating critical firmware.",
        "Be careful with `chkdsk /r`; running it on failing mechanical drives can cause heavy disk stress; back up data first.",
        "Keep user personal files on a separate drive or cloud backup (OneDrive/Google Drive) so Windows can be cleanly reinstalled without data loss."
      ],
      thingsToLearn: [
        "BIOS/UEFI configuration: Secure Boot, TPM 2.0, boot device priorities",
        "Disk partitioning schemes (MBR vs GPT) and file systems (NTFS, FAT32, ext4)",
        "Windows Administrative tools: Event Viewer, Device Manager, Disk Management, Services.msc",
        "System repair utilities: sfc, DISM, chkdsk, msconfig",
        "Linux basics for IT support: package updates (apt), file permissions, viewing logs"
      ],
      miniPracticalTasks: [
        "Task 1: Open Windows Event Viewer and inspect the System log for any warning or error events.",
        "Task 2: Run `sfc /scannow` in an elevated command prompt to verify system file integrity.",
        "Task 3: Open Disk Management and identify your primary partition file system format (NTFS or exFAT)."
      ]
    },
    {
      id: "routers-switches-cabling",
      name: "Routers, Switches & Cabling",
      tagline: "Physical Network Infrastructure, Hardware Interconnections, and Cabling Standards",
      beginnerFriendly: "Think of network hardware like a road system. Ethernet cables are the paved roads. Network Switches are the local city intersections connecting buildings in the same town. Routers are the interstate highway exits that connect your town to the rest of the world.",
      whatIsIt: "Routers, switches, and cabling represent the physical and data link infrastructure that physically connects computing devices across local and wide area networks.",
      whyUsed: "Without physical cables, switches, and routers, devices cannot exchange electric pulses or radio signals. IT technicians must know how to terminate Ethernet cables, patch patch panels, configure VLANs on switches, and set up Wi-Fi routers.",
      whereUsed: "Every office server room, university campus, data center, and smart home network.",
      mainFeatures: [
        "Network Switches (Layer 2): High-speed frame switching between devices on the same LAN using MAC address tables.",
        "Network Routers (Layer 3): Packet routing between different networks using IP routing tables.",
        "Ethernet Cabling Standards: Cat5e, Cat6, Cat6a, Cat7 copper twisted-pair cables with RJ45 connectors.",
        "T568A vs T568B Wiring Standards: Color-coded pinout order for straight-through and crossover cables.",
        "Fiber Optic Cabling: High-speed, long-distance data transmission using light pulses immune to electromagnetic interference."
      ],
      importantConcepts: [
        {
          title: "Switch vs Hub vs Router",
          desc: "Hubs broadcast all packets to all ports (collision-prone, obsolete); Switches forward frames specifically to destination MAC address; Routers route packets between different IP subnets."
        },
        {
          title: "VLAN (Virtual Local Area Network)",
          desc: "Logically partitioning a single physical switch into multiple isolated broadcast domains for security and performance."
        },
        {
          title: "Straight-Through vs Crossover Cables",
          desc: "Straight-through connects different devices (PC to Switch); Crossover connects identical devices (Switch to Switch, PC to PC; largely automated today by Auto-MDIX)."
        },
        {
          title: "PoE (Power over Ethernet)",
          desc: "Delivering electrical power alongside data over a single Ethernet cable to power IP cameras, VoIP phones, and Wi-Fi Access Points."
        }
      ],
      howItWorks: "Copper twisted-pair cables cancel electromagnetic interference through differential signaling. Switches read Layer 2 destination MAC addresses in incoming frames and lookup their CAM table to forward frames directly to the appropriate physical port.",
      stepByStep: [
        "Step 1: Strip the outer jacket of a Cat6 cable using a wire stripper tool.",
        "Step 2: Untwist pairs and arrange wires according to T568B standard: White-Orange, Orange, White-Green, Blue, White-Blue, Green, White-Brown, Brown.",
        "Step 3: Trim wires evenly and push into an RJ45 modular plug.",
        "Step 4: Crimp securely using an RJ45 crimping tool and test with a cable continuity tester.",
        "Step 5: Connect cable between PC and Switch, verifying link activity lights turn solid green."
      ],
      syntax: `# T568B Standard Wiring Pinout Order (Industry Standard)
Pin 1: White / Orange
Pin 2: Orange
Pin 3: White / Green
Pin 4: Blue
Pin 5: White / Blue
Pin 6: Green
Pin 7: White / Brown
Pin 8: Brown

# Cable Categories & Max Bandwidth:
# Cat5e: Up to 1 Gbps (100 MHz) up to 100 meters
# Cat6:  Up to 10 Gbps (250 MHz) up to 55 meters (1 Gbps at 100m)
# Cat6a: Up to 10 Gbps (500 MHz) up to 100 meters
# Fiber (Single-mode): 100+ Gbps across kilometers (Long-range backbone)`,
      examples: [
        {
          title: "Basic Cisco Switch VLAN Configuration Commands",
          code: `Switch# configure terminal
Switch(config)# vlan 10
Switch(config-vlan)# name Student_Lab
Switch(config-vlan)# exit

# Assign port FastEthernet 0/1 to VLAN 10
Switch(config)# interface fastEthernet 0/1
Switch(config-if)# switchport mode access
Switch(config-if)# switchport access vlan 10
Switch(config-if)# no shutdown`
        },
        {
          title: "Router Static Route Command",
          code: `# Route traffic destined for 192.168.20.0/24 through gateway 10.0.0.1
Router(config)# ip route 192.168.20.0 255.255.255.0 10.0.0.1`
        }
      ],
      practicalExamples: "Cabling a 30-computer college lab: running Cat6 cables through raceways to a patch panel in the server rack, punching down wires using a punch-down tool, patching into a 48-port Gigabit managed switch, and connecting to the campus gateway router.",
      realWorldUsage: "Data center technicians at Amazon Web Services and Google install miles of fiber optic and high-grade copper cables across server racks, maintaining strict labeling and color codes.",
      importantPoints: [
        "Never exceed the maximum 100-meter (328 feet) length limit for Ethernet copper cables without a repeater or switch, or signal attenuation will degrade connectivity.",
        "Avoid running Ethernet cables parallel to high-voltage fluorescent lights or AC power cables to prevent electromagnetic interference (EMI).",
        "Always test newly terminated cables with a cable continuity tester before installing them in walls or ceilings."
      ],
      thingsToLearn: [
        "Network topology designs: Star, Mesh, Bus, Hybrid",
        "Cabling standards: Cat5e, Cat6, Cat6a, Single-mode and Multi-mode Fiber",
        "T568A vs T568B pinout standards and RJ45 crimping",
        "Switch mechanics: MAC address learning, forwarding, flooding, CAM tables",
        "Router fundamentals: Routing tables, default routes, static vs dynamic routing",
        "VLANs, Trunking (802.1Q), and Power over Ethernet (PoE)"
      ],
      miniPracticalTasks: [
        "Task 1: Memorize the 8-wire color sequence for the T568B wiring standard.",
        "Task 2: Inspect an Ethernet cable in your home or lab and identify whether it is Cat5e or Cat6.",
        "Task 3: Access your home Wi-Fi router web portal (usually `192.168.1.1`) and check the connected device list."
      ]
    },
    {
      id: "cli-troubleshooting",
      name: "Command Line (ipconfig, ping, tracert)",
      tagline: "Essential Terminal Commands for Rapid Network Diagnostics and Troubleshooting",
      beginnerFriendly: "When a user calls the IT helpdesk saying 'My internet isn't working!', you don't guess. You open the command prompt and run 4 standard diagnostic commands that pinpoint the exact broken wire or misconfigured setting in 30 seconds.",
      whatIsIt: "Network diagnostic command-line tools (ipconfig/ifconfig, ping, tracert/traceroute, nslookup, netstat, arp) are built-in utilities used to inspect and troubleshoot network connectivity issues.",
      whyUsed: "They provide instant, unambiguous technical data: verifying IP lease status, testing latency and packet loss, identifying failing routers along a route, testing DNS resolution, and viewing active open TCP connections.",
      whereUsed: "Used daily by every IT support technician, systems engineer, and network administrator worldwide.",
      mainFeatures: [
        "ipconfig (Windows) / ip (Linux): Displays active IP addresses, subnet masks, default gateways, and DNS servers.",
        "ping: Sends ICMP Echo Request packets to test reachability, round-trip time (RTT), and packet loss.",
        "tracert (Windows) / traceroute (Linux): Maps every router hop between your computer and a target destination.",
        "nslookup: Queries DNS servers to test name-to-IP resolution and inspect DNS records.",
        "netstat / ss: Lists all active network connections, listening ports, and associated process IDs."
      ],
      importantConcepts: [
        {
          title: "The Step-by-Step 'Ping' Troubleshooting Ladder",
          desc: "1. ping 127.0.0.1 (Loopback tests local TCP/IP stack) -> 2. ping local IP (tests NIC) -> 3. ping Default Gateway (tests router cable/Wi-Fi) -> 4. ping 8.8.8.8 (tests internet) -> 5. ping google.com (tests DNS)."
        },
        {
          title: "Time To Live (TTL) in Ping",
          desc: "Decrements by 1 at each router hop; indicates how many hops were traversed and provides clues about the target OS (Windows default ~128, Linux default ~64)."
        },
        {
          title: "Tracert / Traceroute Mechanics",
          desc: "Sends packets with sequentially increasing TTL values (TTL=1, TTL=2, TTL=3) to provoke ICMP Time Exceeded messages from each intermediate router."
        },
        {
          title: "ipconfig /release and /renew",
          desc: "Releases an expired or conflicting DHCP IP address and requests a fresh lease from the DHCP server."
        }
      ],
      howItWorks: "These utilities craft low-level ICMP and IP packets via OS sockets, send them across the network stack, listen for ICMP replies or error messages, and calculate round-trip latency in milliseconds.",
      stepByStep: [
        "Step 1: Open Terminal (PowerShell or Command Prompt as Administrator).",
        "Step 2: Run `ipconfig /all` to verify IP address, default gateway, and DNS servers.",
        "Step 3: Run the Ping Troubleshooting Ladder to identify where packets drop.",
        "Step 4: Use `tracert <destination>` to locate the exact network hop experiencing latency.",
        "Step 5: Use `nslookup <domain>` to verify DNS resolution and `ipconfig /flushdns` to clear bad caches."
      ],
      syntax: `# Essential Network Troubleshooting Commands
# 1. View detailed network configuration
ipconfig /all

# 2. Release and renew DHCP IP address
ipconfig /release
ipconfig /renew

# 3. Clear corrupted local DNS cache
ipconfig /flushdns

# 4. Test connectivity and latency (4 packets by default)
ping -n 4 8.8.8.8

# 5. Continuous ping to test intermittent cable drops (Ctrl+C to stop)
ping -t 192.168.1.1

# 6. Trace router hops to destination
tracert google.com

# 7. Test DNS resolution for a domain
nslookup careercraft.com

# 8. View active network connections and listening ports
netstat -ano`,
      examples: [
        {
          title: "Executing the Complete Ping Ladder in PowerShell",
          code: `# Step 1: Test local loopback
ping 127.0.0.1

# Step 2: Test local default gateway (router)
ping 192.168.1.1

# Step 3: Test external internet IP
ping 8.8.8.8

# Step 4: Test DNS name resolution
ping google.com`
        },
        {
          title: "Interpreting Tracert Output",
          code: `tracert 8.8.8.8
# Hop 1: <1 ms   192.168.1.1  (Local Router - OK)
# Hop 2: 12 ms   10.50.0.1    (ISP Local Node - OK)
# Hop 3: *   *   *  Request timed out. (Firewall dropped ICMP or outage)
# Hop 4: 18 ms   8.8.8.8      (Destination reached)`
        }
      ],
      practicalExamples: "A user cannot open web pages. You run `ipconfig` and see an IP of `169.254.12.8` (APIPA). You realize the DHCP server is unreachable, inspect the cable, discover a loose RJ45 connector, plug it in firmly, run `ipconfig /renew`, and resolve the issue.",
      realWorldUsage: "Helpdesk support specialists at multinational corporations use these command-line tools to diagnose remote VPN disconnects and server outages in seconds.",
      importantPoints: [
        "A destination timing out on `ping` does not always mean the server is down; many secure enterprise firewalls intentionally drop ICMP ping packets for security.",
        "If you can ping `8.8.8.8` successfully but cannot ping `google.com`, the internet connection is fine, but DNS resolution is misconfigured.",
        "Always run Command Prompt or PowerShell as Administrator when running commands that modify network interfaces."
      ],
      thingsToLearn: [
        "Syntax and parameters of ipconfig (/all, /release, /renew, /flushdns)",
        "Executing and interpreting ping (packet loss, RTT, TTL, timeouts)",
        "Executing and interpreting tracert / traceroute output",
        "Using nslookup to query DNS records (A, CNAME, MX)",
        "Using netstat and ss to locate processes occupying specific ports",
        "The 5-step Ping Ladder troubleshooting methodology"
      ],
      miniPracticalTasks: [
        "Task 1: Open terminal and execute `ipconfig /all`. Identify your IP address, default gateway, and DNS servers.",
        "Task 2: Ping `127.0.0.1` and verify that 0% packet loss is reported.",
        "Task 3: Run `tracert google.com` and count how many router hops your packets traverse."
      ]
    },
    {
      id: "active-directory",
      name: "Active Directory Basics",
      tagline: "Centralized Identity Management, User Authentication, and Domain Security",
      beginnerFriendly: "Imagine a school with 2,000 students and 100 computers. Instead of creating 2,000 separate user accounts on all 100 individual computers by hand, Active Directory lets you create each student account once on a central server, allowing students to log in from any computer in any classroom.",
      whatIsIt: "Active Directory (AD) is a directory service developed by Microsoft for Windows domain networks. It provides centralized management of user accounts, computers, security permissions, and enterprise policies.",
      whyUsed: "It is the standard backbone of corporate and educational IT infrastructure, providing Single Sign-On (SSO), centralized password resets, automated software deployment, and role-based access control.",
      whereUsed: "Over 90% of Fortune 1000 companies, universities, hospitals, and government agencies use Active Directory.",
      mainFeatures: [
        "Active Directory Domain Services (AD DS): Stores centralized directory data about users, computers, and groups.",
        "Domain Controller (DC): The server that runs AD DS and authenticates user logins using Kerberos protocol.",
        "Organizational Units (OUs): Folders within a domain used to organize users and computers logically by department.",
        "Group Policy Objects (GPOs): Centralized rules enforcing security configurations (e.g., minimum password lengths, blocking USB drives).",
        "Active Directory Users and Computers (ADUC): Primary administrative GUI console for managing domain objects."
      ],
      importantConcepts: [
        {
          title: "Domains, Trees, and Forests",
          desc: "Domain is the basic administrative boundary; Tree is a collection of domains sharing a contiguous DNS namespace; Forest is the top-level collection of trees sharing a common schema."
        },
        {
          title: "Kerberos Authentication",
          desc: "Ticket-based cryptographic authentication protocol used by Active Directory to securely authenticate users without transmitting passwords."
        },
        {
          title: "Group Policy Objects (GPOs)",
          desc: "Automated policy templates pushed to domain-joined computers on login (e.g. disabling Control Panel, enforcing desktop wallpapers, deploying software)."
        },
        {
          title: "Security Groups vs Distribution Groups",
          desc: "Security groups are used to grant access to shared folders and printers; Distribution groups are used only for email distribution lists."
        }
      ],
      howItWorks: "When a user logs in, the computer queries DNS for a Domain Controller (SRV record). The Domain Controller verifies the user's password hash against the NTDS.dit database, issues a Kerberos Ticket Granting Ticket (TGT), and downloads assigned Group Policies to the workstation.",
      stepByStep: [
        "Step 1: Open Server Manager on Windows Server and launch 'Active Directory Users and Computers' (ADUC).",
        "Step 2: Create an Organizational Unit (OU) for a department (e.g., `OU=ComputerScience,DC=careercraft,DC=edu`).",
        "Step 3: Right-click the OU, select 'New -> User', and configure username and initial password.",
        "Step 4: Check 'User must change password at next logon' to ensure user privacy.",
        "Step 5: Add the user to appropriate Security Groups (e.g. `Students_Group`, `Lab_Access`)."
      ],
      syntax: `# Active Directory Administration via PowerShell (ActiveDirectory Module)
# 1. Create a new Active Directory User
New-ADUser -Name "Rahul Sharma" \`
           -GivenName "Rahul" \`
           -Surname "Sharma" \`
           -SamAccountName "rsharma" \`
           -UserPrincipalName "rsharma@careercraft.edu" \`
           -Path "OU=Students,DC=careercraft,DC=edu" \`
           -AccountPassword (ConvertTo-SecureString "TempPass2026!" -AsPlainText -Force) \`
           -ChangePasswordAtLogon $true \`
           -Enabled $true

# 2. Reset a User Password
Set-ADAccountPassword -Identity "rsharma" -NewPassword (ConvertTo-SecureString "NewPass2026!" -AsPlainText -Force) -Reset

# 3. Unlock a locked user account (after failed password attempts)
Unlock-ADAccount -Identity "rsharma"

# 4. Add user to a Security Group
Add-ADGroupMember -Identity "Lab_Students" -Members "rsharma"`,
      examples: [
        {
          title: "Common GPO Policies Applied to Student Computers",
          code: `1. Enforce password complexity (min 8 chars, numbers, uppercase, special symbols).
2. Lock account after 5 consecutive incorrect password attempts.
3. Automatically map network shared drive 'Z:' to \\\\server\\student_files.
4. Disable USB Mass Storage write access to prevent malware propagation.`
        },
        {
          title: "Checking which Domain Controller authenticated a workstation",
          code: `# In Command Prompt on client PC:
echo %LOGONSERVER%
# Returns: \\\\DC01`
        }
      ],
      practicalExamples: "Handling a helpdesk support ticket: a student forgot their password and locked their account after 5 attempts. The IT technician opens ADUC, unlocks the account, issues a temporary password, and checks 'User must change password at next logon'.",
      realWorldUsage: "Global enterprises like Deloitte and JPMorgan Chase manage hundreds of thousands of employee identities, email mailboxes, and corporate laptop privileges using Microsoft Active Directory and Azure AD / Entra ID.",
      importantPoints: [
        "Always check 'User must change password at next logon' when provisioning new accounts or resetting passwords for security and privacy.",
        "Active Directory relies 100% on healthy DNS; if DNS is misconfigured, workstations will fail to join the domain or locate Domain Controllers.",
        "Never log into routine client computers with Domain Admin credentials; use local administrator accounts or dedicated workstation admin accounts."
      ],
      thingsToLearn: [
        "Active Directory architecture: Domains, Forests, Trees, OUs",
        "Domain Controllers, Global Catalog, and the NTDS.dit database",
        "Managing Users, Groups, and Computers in ADUC",
        "Group Policy Objects (GPO) configuration and gpupdate /force",
        "Automating user creation using PowerShell (New-ADUser)",
        "Troubleshooting account lockouts, password resets, and domain joins"
      ],
      miniPracticalTasks: [
        "Task 1: Diagram an Active Directory Organizational Unit (OU) structure for a college with Faculty and Student branches.",
        "Task 2: Write a PowerShell script template that creates a new user account with temporary password.",
        "Task 3: Run `gpresult /r` in Windows Command Prompt to view the Group Policies currently applied to your machine."
      ]
    },
    {
      id: "remote-support-tools",
      name: "Remote Support Tools (TeamViewer / AnyDesk)",
      tagline: "Remote Desktop Control, Screen Sharing, and Helpdesk Ticket Resolution",
      beginnerFriendly: "Imagine being able to teleport your hands and eyes onto a student's computer 500 miles away. Remote support tools let you see their screen, move their mouse, and fix their software problems as if you were sitting right beside them.",
      whatIsIt: "Remote support and desktop management software (TeamViewer, AnyDesk, Microsoft Remote Desktop / Quick Assist) allow IT technicians to remotely access, view, and control computers over the internet for technical assistance.",
      whyUsed: "In modern hybrid and remote work environments, IT technicians cannot physically walk to every desk. Remote tools allow technicians to resolve user tickets, install software, and diagnose errors anywhere in the world within seconds.",
      whereUsed: "Standard everyday tool for IT helpdesk departments, managed service providers (MSPs), and remote technical support centers.",
      mainFeatures: [
        "Attended Support: User provides a one-time 9-digit session ID and temporary password to grant access.",
        "Unattended Access: Secure, password-protected background access to servers and office PCs without requiring user presence.",
        "Bi-Directional File Transfer: Drag-and-drop transfer of diagnostic tools, installers, and log files.",
        "Remote Reboot & Reconnect: Safely rebooting remote computers into Safe Mode while maintaining the remote session.",
        "Session Recording & Chat: Built-in text chat, audio calls, and audit video recording for security compliance."
      ],
      importantConcepts: [
        {
          title: "Attended vs Unattended Access",
          desc: "Attended requires the remote user to accept connection and share credentials; Unattended uses a fixed service password for servers and kiosks."
        },
        {
          title: "Firewall & NAT Traversal",
          desc: "Tools use outbound connections over ports 80 and 443 through cloud relay servers, bypassing complex corporate router firewall rules."
        },
        {
          title: "Security & Social Engineering Risks",
          desc: "Scammers frequently abuse remote desktop tools; IT technicians must educate users never to grant remote access to unverified callers."
        },
        {
          title: "Windows Quick Assist & RDP",
          desc: "Built-in Windows tools: Quick Assist for interactive remote help, and Remote Desktop (RDP, port 3389) for server administration."
        }
      ],
      howItWorks: "Both computers establish an outbound encrypted connection (TLS/AES-256) to the remote software's global relay server. The remote client streams compressed, encrypted video frames of the host desktop and transmits mouse and keyboard event signals back.",
      stepByStep: [
        "Step 1: Open the support ticket and contact the student via phone or helpdesk chat.",
        "Step 2: Ask the student to open TeamViewer or AnyDesk and read their 9-digit Connection ID.",
        "Step 3: Enter the ID in your technician console and request remote connection.",
        "Step 4: The student clicks 'Accept' or provides the temporary one-time password.",
        "Step 5: Diagnose and resolve the issue, transfer necessary patches, close the session, and verify the connection is terminated."
      ],
      syntax: `# Connecting via Windows Built-in Remote Tools
# 1. Launch Windows Remote Desktop Connection
mstsc.exe /v:192.168.1.100

# 2. Launch Windows Quick Assist (Built into Windows 10/11)
quickassist.exe

# 3. Enable Remote Desktop via PowerShell (Administrative)
Set-ItemProperty -Path 'HKLM:\\System\\CurrentControlSet\\Control\\Terminal Server' -name "fDenyTSConnections" -value 0
Enable-NetFirewallRule -DisplayGroup "Remote Desktop"`,
      examples: [
        {
          title: "Helpdesk Protocol for Safe Remote Sessions",
          code: `1. Verify student identity using student ID number and official email.
2. Clearly explain: "I am going to request screen control to inspect your printer drivers."
3. Ask the student to close any sensitive private windows (email, banking).
4. Perform the fix with the student watching.
5. Disconnect immediately upon completion and confirm the session is ended.`
        },
        {
          title: "TeamViewer Unattended Access Configuration",
          code: `1. Settings -> Security -> Set a strong permanent Personal Password.
2. Grant Easy Access to your verified technician account.
3. Configure 2-Factor Authentication (2FA) on the technician management portal.`
        }
      ],
      practicalExamples: "A remote professor cannot print lecture notes. The IT technician connects via AnyDesk, opens Windows Device Manager, reinstalls the corrupted network printer driver, runs a successful test print, and closes the ticket within 5 minutes.",
      realWorldUsage: "Global IT services firms (Wipro, Infosys, Accenture) operate 24/7 global IT helpdesks resolving millions of remote technical support tickets annually using enterprise remote control platforms.",
      importantPoints: [
        "Always ensure the user closes personal documents and web browser banking tabs before beginning a remote support session.",
        "Enforce Two-Factor Authentication (2FA) on technician remote support accounts to prevent account takeovers.",
        "Always confirm that the session has completely terminated before moving on to another ticket."
      ],
      thingsToLearn: [
        "TeamViewer and AnyDesk interface and configuration",
        "Differences between Attended and Unattended remote support",
        "Using Windows Quick Assist and Microsoft Remote Desktop (RDP)",
        "Performing secure file transfers during active sessions",
        "Security best practices and protecting users against social engineering scams"
      ],
      miniPracticalTasks: [
        "Task 1: Launch Windows Quick Assist on your computer and explore the 'Get Assistance' interface.",
        "Task 2: Download AnyDesk or TeamViewer and locate your device's unique 9-digit Connection ID.",
        "Task 3: Write a 4-step checklist for safely ending a remote helpdesk session with a user."
      ]
    }
  ],
  practiceTest: {
    categoryTitle: "IT Support & Networking",
    totalQuestions: 15,
    instructions: "Answer the following conceptual, troubleshooting, and network administration questions covering IT Support technologies (TCP/IP, Windows/Linux OS, Routers/Switches/Cabling, Command Line tools, Active Directory, Remote Support). Record your answers in your study workbook.",
    questions: [
      {
        id: 1,
        technology: "TCP/IP Networking",
        question: "Explain the difference between a Public IP address and a Private IP address. List the three standard private IPv4 address ranges defined by RFC 1918."
      },
      {
        id: 2,
        technology: "TCP/IP Networking",
        question: "What is the DHCP DORA process? Describe the sequence and purpose of Discover, Offer, Request, and Acknowledge packets during automatic IP configuration."
      },
      {
        id: 3,
        technology: "TCP/IP Networking",
        question: "What is an APIPA address (Automatic Private IP Addressing)? What does an IP address starting with 169.254.x.x indicate about a computer's network connectivity?"
      },
      {
        id: 4,
        technology: "Windows & Linux OS",
        question: "What is a Windows Stop Error (Blue Screen of Death / BSOD)? Name two common stop codes and explain the step-by-step diagnostic process to isolate the cause."
      },
      {
        id: 5,
        technology: "Windows & Linux OS",
        question: "Explain the purpose of the 'sfc /scannow' command and the 'DISM /Online /Cleanup-Image /RestoreHealth' command in Windows operating system repair."
      },
      {
        id: 6,
        technology: "Routers, Switches & Cabling",
        question: "Compare a Layer 2 Network Switch with a Layer 3 Network Router. What type of addressing (MAC vs IP) does each hardware device use to make forwarding decisions?"
      },
      {
        id: 7,
        technology: "Routers, Switches & Cabling",
        question: "What is a VLAN (Virtual Local Area Network)? Explain two primary reasons why enterprise networks segment local switch ports into different VLANs."
      },
      {
        id: 8,
        technology: "Routers, Switches & Cabling",
        question: "List the 8-wire color sequence for the T568B cabling standard in order from Pin 1 to Pin 8. What is the maximum certified distance for a Cat6 Ethernet cable run?"
      },
      {
        id: 9,
        technology: "Command Line Troubleshooting",
        question: "Explain the 5-step 'Ping Troubleshooting Ladder' (from loopback 127.0.0.1 to external domain name). What does failure at each specific step reveal?"
      },
      {
        id: 10,
        technology: "Command Line Troubleshooting",
        question: "How does the 'tracert' (traceroute) command work under the hood using IP Time To Live (TTL) values? What does an asterisk (*) indicate in tracert output?"
      },
      {
        id: 11,
        technology: "Command Line Troubleshooting",
        question: "If a user can ping an external IP address (8.8.8.8) successfully but cannot browse websites using domain names (e.g. google.com), what network component is failing and how is it tested with nslookup?"
      },
      {
        id: 12,
        technology: "Active Directory",
        question: "What is a Domain Controller (DC) in Microsoft Active Directory? What is the function of the NTDS.dit database file on a domain controller?"
      },
      {
        id: 13,
        technology: "Active Directory",
        question: "What is an Organizational Unit (OU) in Active Directory, and how does it differ from a Security Group? How are Group Policy Objects (GPOs) applied to OUs?"
      },
      {
        id: 14,
        technology: "Active Directory",
        question: "Why is it considered best security practice to check 'User must change password at next logon' whenever an IT technician provisions a new account or performs a password reset?"
      },
      {
        id: 15,
        technology: "Remote Support Tools",
        question: "Compare 'Attended Access' with 'Unattended Access' in remote support tools like TeamViewer and AnyDesk. What security precautions should a technician follow before initiating a remote session?"
      }
    ]
  }
};
