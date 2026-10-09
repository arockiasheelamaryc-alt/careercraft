// Career Craft - 10 IT Job Categories Data
// Simple, beginner-friendly IT career information for college students and freshers

export const itCategories = [
  {
    id: "web-development",
    title: "Web Development",
    role: "Web Developer (Frontend / Full Stack)",
    icon: "🌐",
    shortDesc: "Designs, creates, and maintains websites and modern web applications using web technologies.",
    overview: "Web development focuses on building interactive websites and web applications that run in web browsers. It includes frontend (what users see) and backend (data and server logic). It is one of the most popular starting careers for freshers.",
    requiredSkills: {
      basicSkills: [
        "Basic computer literacy and internet fundamentals",
        "Understanding of how web browsers and websites work",
        "Logical thinking and problem-solving basics",
        "Attention to layout design and user experience"
      ],
      technicalSkills: [
        "HTML5 structure and semantic tags",
        "CSS3 styling, Flexbox, and Grid layouts",
        "JavaScript programming (DOM manipulation, ES6 features)",
        "React.js component-based frontend development",
        "Basic backend concepts (Node.js, Express, REST APIs)",
        "Database basics (MySQL / MongoDB queries)"
      ]
    },
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React.js",
      "Node.js",
      "Express.js",
      "MySQL",
      "Git & GitHub"
    ],
    learningPath: [
      {
        step: 1,
        title: "Learn Web Fundamentals (First)",
        desc: "Master HTML5 tags, structure, headings, forms, and semantic elements."
      },
      {
        step: 2,
        title: "Master Styling & Layouts (Next)",
        desc: "Learn CSS3, colors, Box Model, Flexbox, Grid, and mobile-friendly responsive design."
      },
      {
        step: 3,
        title: "Add Dynamic Interactivity (Core)",
        desc: "Learn JavaScript fundamentals: variables, functions, arrays, DOM manipulation, and event handling."
      },
      {
        step: 4,
        title: "Learn Modern Frontend Framework (Advanced)",
        desc: "Learn React.js: reusable components, props, useState hook, and calling REST APIs."
      },
      {
        step: 5,
        title: "Hands-on Project Practice (Practice)",
        desc: "Build portfolio projects like a personal portfolio, calculator, weather app, or student portal."
      },
      {
        step: 6,
        title: "Interview Preparation (Before Interview)",
        desc: "Revise Box Model, JavaScript closures, React state vs props, REST API calls, and explain your live projects."
      }
    ],
    practice: [
      "Build a personal resume / student profile webpage using HTML and CSS.",
      "Create a responsive landing page using Flexbox and CSS Grid.",
      "Build an interactive To-Do List or Calculator using JavaScript.",
      "Develop a React weather or task management application with API integration."
    ],
    interviewPrep: [
      {
        question: "What is the difference between HTML, CSS, and JavaScript?",
        answer: "HTML creates the structure and content of a webpage, CSS controls the styling and appearance, and JavaScript adds interactivity and dynamic functionality."
      },
      {
        question: "What is the CSS Box Model?",
        answer: "The CSS Box Model consists of content, padding, border, and margin around every HTML element."
      },
      {
        question: "What is React and why is it used?",
        answer: "React is a JavaScript library for building user interfaces using reusable components, making web development faster and easier to maintain."
      }
    ],
    careerOpportunities: [
      "Junior Frontend Developer",
      "Junior Web Developer",
      "React.js Developer",
      "Full Stack Developer Trainee"
    ]
  },
  {
    id: "software-development",
    title: "Software Development",
    role: "Software Developer / Engineer",
    icon: "💻",
    shortDesc: "Develops software applications to solve real-world problems using programming languages and algorithms.",
    overview: "Software development involves writing, testing, and maintaining code to create desktop, enterprise, and cloud software applications. It emphasizes clean code, Object-Oriented Programming (OOPs), and data structures.",
    requiredSkills: {
      basicSkills: [
        "Strong analytical and logical thinking",
        "Basic mathematics and algorithmic problem solving",
        "Understanding of computer architecture and operating systems",
        "Eagerness to debug and fix code errors"
      ],
      technicalSkills: [
        "Core programming language (Java, Python, or C++)",
        "Object-Oriented Programming (OOPs: Encapsulation, Inheritance, Polymorphism)",
        "Basic Data Structures (Arrays, Strings, Linked Lists, Stacks, Queues)",
        "Database querying with SQL",
        "Version control with Git",
        "Unit testing and debugging"
      ]
    },
    technologies: [
      "Java / Python / C++",
      "Object-Oriented Programming (OOP)",
      "Data Structures & Algorithms (DSA)",
      "SQL / MySQL",
      "Git & GitHub",
      "VS Code / IntelliJ"
    ],
    learningPath: [
      {
        step: 1,
        title: "Choose a Primary Language (First)",
        desc: "Learn programming basics in Java, Python, or C++ (syntax, loops, conditions, functions)."
      },
      {
        step: 2,
        title: "Understand OOPs Principles (Next)",
        desc: "Master Classes, Objects, Inheritance, Polymorphism, Abstraction, and Encapsulation."
      },
      {
        step: 3,
        title: "Learn Data Structures & Algorithms (Core)",
        desc: "Practice Arrays, Strings, Searching, Sorting, and basic Stacks/Queues."
      },
      {
        step: 4,
        title: "Connect with Databases (Next)",
        desc: "Learn SQL CRUD operations and connect code to a database like MySQL."
      },
      {
        step: 5,
        title: "Build Console & Desktop Projects (Practice)",
        desc: "Create practical applications like a Student Management System, Banking System, or Library Portal."
      },
      {
        step: 6,
        title: "Interview Preparation (Before Interview)",
        desc: "Practice writing code on paper/whiteboard, revise OOPs concepts with real-world examples, and prepare project walkthroughs."
      }
    ],
    practice: [
      "Write programs to reverse a string, check palindrome, and find prime numbers.",
      "Build a console-based Student Grade Management System using OOPs.",
      "Implement simple search (Linear, Binary) and sort (Bubble, Insertion) algorithms.",
      "Build a database-driven Inventory or Library Management project."
    ],
    interviewPrep: [
      {
        question: "What are the four main pillars of OOPs?",
        answer: "The four pillars are Encapsulation (data hiding), Abstraction (hiding implementation details), Inheritance (code reusability), and Polymorphism (many forms of a method)."
      },
      {
        question: "What is the difference between an Array and a Linked List?",
        answer: "An array has fixed size with contiguous memory and fast indexed access, while a linked list has dynamic size with nodes linked by pointers."
      },
      {
        question: "What is method overloading vs method overriding?",
        answer: "Method overloading is having multiple methods with same name but different parameters in the same class (compile-time). Method overriding is redefining a parent class method in a child class (runtime)."
      }
    ],
    careerOpportunities: [
      "Associate Software Engineer",
      "Java Developer Trainee",
      "Python Developer",
      "Junior Programmer"
    ]
  },
  {
    id: "data-ai",
    title: "Data & AI",
    role: "Data Analyst / AI Junior Specialist",
    icon: "🤖",
    shortDesc: "Works with data and artificial intelligence technologies to extract useful business insights and automated solutions.",
    overview: "Data & AI professionals collect, clean, analyze, and visualize data to help companies make smart decisions. Freshers usually start as Data Analysts or Junior AI/ML Engineers learning Python, SQL, and data visualization.",
    requiredSkills: {
      basicSkills: [
        "Curiosity for numbers and data trends",
        "Basic statistics and probability concepts",
        "Good communication to explain data findings",
        "Attention to detail and data accuracy"
      ],
      technicalSkills: [
        "Python programming for data analysis",
        "Data manipulation with Pandas and NumPy",
        "Data visualization with Matplotlib and Seaborn",
        "SQL queries for extracting and filtering database tables",
        "Basic Machine Learning concepts (Classification, Regression)",
        "Excel basics (vlookup, pivot tables)"
      ]
    },
    technologies: [
      "Python",
      "Pandas & NumPy",
      "SQL",
      "Matplotlib / Power BI",
      "Jupyter Notebook",
      "Scikit-Learn Basics",
      "Excel"
    ],
    learningPath: [
      {
        step: 1,
        title: "Learn Python Basics (First)",
        desc: "Learn Python syntax, lists, dictionaries, functions, and file handling."
      },
      {
        step: 2,
        title: "Master SQL for Data (Next)",
        desc: "Learn SELECT, WHERE, GROUP BY, JOINs, and aggregate functions (COUNT, SUM, AVG)."
      },
      {
        step: 3,
        title: "Data Analysis Libraries (Core)",
        desc: "Learn NumPy for numerical arrays and Pandas for dataframes, filtering, and cleaning data."
      },
      {
        step: 4,
        title: "Data Visualization (Next)",
        desc: "Create charts, bar plots, and histograms using Matplotlib, Seaborn, or Power BI."
      },
      {
        step: 5,
        title: "Build Data Projects (Practice)",
        desc: "Analyze real datasets like Student Marks Analysis, Movie Ratings, or Sales Performance."
      },
      {
        step: 6,
        title: "Interview Preparation (Before Interview)",
        desc: "Practice SQL JOIN queries, explain data cleaning steps, and be ready to present your data visualization charts."
      }
    ],
    practice: [
      "Write SQL queries with INNER and LEFT JOINs on sample database tables.",
      "Clean a messy CSV dataset using Python Pandas (handle missing values).",
      "Create charts showing sales or marks trends using Matplotlib.",
      "Build a simple Machine Learning model to predict house price or student pass/fail."
    ],
    interviewPrep: [
      {
        question: "What is the difference between INNER JOIN and LEFT JOIN in SQL?",
        answer: "INNER JOIN returns only matching rows from both tables. LEFT JOIN returns all rows from the left table and matched rows from the right table (NULL if no match)."
      },
      {
        question: "What is Pandas in Python?",
        answer: "Pandas is a Python library used for data manipulation and analysis, providing DataFrames to work with structured tabular data."
      },
      {
        question: "What is Supervised vs Unsupervised Learning?",
        answer: "Supervised learning trains on labeled data (with known output), whereas Unsupervised learning finds patterns in unlabeled data."
      }
    ],
    careerOpportunities: [
      "Junior Data Analyst",
      "Business Intelligence Trainee",
      "Python Data Associate",
      "AI / ML Intern"
    ]
  },
  {
    id: "cloud-devops",
    title: "Cloud & DevOps",
    role: "Cloud Support Associate / Junior DevOps Engineer",
    icon: "☁️",
    shortDesc: "Manages cloud infrastructure, hosting services, and improves the speed and reliability of software deployment.",
    overview: "Cloud & DevOps is all about hosting web applications on cloud platforms (like AWS or Azure) and automating the testing, build, and deployment process using modern DevOps tools.",
    requiredSkills: {
      basicSkills: [
        "Understanding of how servers and internet hosting work",
        "Willingness to learn Linux terminal commands",
        "Good troubleshooting and problem-solving mindset",
        "Basic networking concepts (IP, ports, DNS)"
      ],
      technicalSkills: [
        "Linux operating system and basic Bash commands",
        "Cloud fundamentals (AWS EC2, S3, IAM basics)",
        "Docker containerization basics",
        "Git version control for collaborative development",
        "CI/CD pipeline concepts (GitHub Actions basics)",
        "Server monitoring and logs checking"
      ]
    },
    technologies: [
      "Linux / Bash",
      "AWS (Amazon Web Services)",
      "Docker",
      "Git & GitHub",
      "CI/CD Pipelines",
      "Nginx / Web Servers"
    ],
    learningPath: [
      {
        step: 1,
        title: "Master Linux Basics (First)",
        desc: "Learn file system navigation (cd, ls, pwd), permissions (chmod), and package managers (apt)."
      },
      {
        step: 2,
        title: "Understand Computer Networking (Next)",
        desc: "Learn IP addresses, DNS, ports (80, 443, 22), HTTP/HTTPS, and SSH protocol."
      },
      {
        step: 3,
        title: "Learn Cloud Computing Concepts (Core)",
        desc: "Explore AWS or Azure basics: Virtual Machines (EC2), Cloud Storage (S3), and Security Groups."
      },
      {
        step: 4,
        title: "Learn Docker Containers (Next)",
        desc: "Understand what containers are, Dockerfile, docker build, and running containers."
      },
      {
        step: 5,
        title: "Deploy a Live Project (Practice)",
        desc: "Deploy a simple React or Node.js website onto a cloud server or GitHub Pages."
      },
      {
        step: 6,
        title: "Interview Preparation (Before Interview)",
        desc: "Practice Linux commands, explain Docker benefits over virtual machines, and explain how you deployed your project."
      }
    ],
    practice: [
      "Practice 20 essential Linux terminal commands on Ubuntu or WSL.",
      "Create an AWS free-tier account and launch an EC2 Linux instance.",
      "Write a simple Dockerfile to package and run a web page.",
      "Set up automatic deployment to GitHub Pages or Netlify."
    ],
    interviewPrep: [
      {
        question: "What is Cloud Computing?",
        answer: "Cloud computing is the on-demand delivery of computing services (servers, storage, databases, networking) over the internet with pay-as-you-go pricing."
      },
      {
        question: "What is Docker and why is it used?",
        answer: "Docker is a containerization platform that packages an application and its dependencies together, ensuring it runs reliably on any machine without environment mismatch."
      },
      {
        question: "What is the difference between CI and CD?",
        answer: "CI (Continuous Integration) automatically tests and merges code changes. CD (Continuous Delivery/Deployment) automatically releases the tested code to production servers."
      }
    ],
    careerOpportunities: [
      "Cloud Support Associate",
      "Junior DevOps Engineer",
      "Linux System Administrator",
      "Site Reliability Trainee"
    ]
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity Analyst",
    role: "Cybersecurity Analyst / SOC Associate",
    icon: "🛡️",
    shortDesc: "Protects systems, computer networks, and confidential organizational data from cyber threats and attacks.",
    overview: "Cybersecurity specialists monitor networks, identify vulnerabilities, safeguard sensitive user data, and protect organizations from hackers, malware, and security breaches.",
    requiredSkills: {
      basicSkills: [
        "High ethical standards and security awareness",
        "Strong curiosity about how networks and attacks work",
        "Patience to analyze security logs and alerts",
        "Keen attention to detail and risk identification"
      ],
      technicalSkills: [
        "Network security fundamentals (Firewalls, VPNs, IDS/IPS)",
        "Understanding common cyber attacks (Phishing, SQL Injection, XSS)",
        "Operating system security (Linux and Windows permissions)",
        "Basic Cryptography (Encryption, Hashing, SSL/TLS)",
        "Security tools (Wireshark packet analysis, Nmap scanning basics)",
        "Security policies and password management"
      ]
    },
    technologies: [
      "Wireshark",
      "Nmap",
      "Linux Security",
      "TCP/IP Protocols",
      "Firewalls & Antivirus",
      "Cryptography (AES/RSA/Hashing)"
    ],
    learningPath: [
      {
        step: 1,
        title: "Learn Networking Fundamentals (First)",
        desc: "Understand OSI model, TCP/IP, DNS, DHCP, routers, switches, and firewalls."
      },
      {
        step: 2,
        title: "Learn Security Principles (Next)",
        desc: "Master the CIA Triad (Confidentiality, Integrity, Availability) and authentication basics."
      },
      {
        step: 3,
        title: "Understand Common Cyber Attacks (Core)",
        desc: "Learn about phishing, malware, ransomware, brute force, SQL injection, and DDoS attacks."
      },
      {
        step: 4,
        title: "Learn Defensive & Monitoring Tools (Next)",
        desc: "Learn Wireshark to inspect network packets and Nmap to scan open network ports."
      },
      {
        step: 5,
        title: "Security Auditing Practice (Practice)",
        desc: "Practice analyzing packet captures, securing home Wi-Fi, and identifying insecure code."
      },
      {
        step: 6,
        title: "Interview Preparation (Before Interview)",
        desc: "Revise OSI model layers, explain the difference between symmetric and asymmetric encryption, and explain how to prevent SQL injection."
      }
    ],
    practice: [
      "Analyze a sample network packet capture file (.pcap) in Wireshark.",
      "Check an HTML form to identify and fix SQL Injection vulnerabilities.",
      "Set up strong firewall rules and multi-factor authentication (MFA).",
      "Create a student security guide on preventing phishing and social engineering."
    ],
    interviewPrep: [
      {
        question: "What is the CIA Triad in Cybersecurity?",
        answer: "The CIA Triad stands for Confidentiality (protecting data from unauthorized access), Integrity (ensuring data is accurate and untampered), and Availability (ensuring data is accessible to authorized users)."
      },
      {
        question: "What is SQL Injection and how can it be prevented?",
        answer: "SQL Injection is a vulnerability where malicious SQL code is inserted into input fields. It is prevented by using prepared statements, parameterized queries, and input validation."
      },
      {
        question: "What is the difference between Symmetric and Asymmetric encryption?",
        answer: "Symmetric encryption uses the same key for both encryption and decryption (faster), while Asymmetric encryption uses a public key to encrypt and a private key to decrypt (more secure for key exchange)."
      }
    ],
    careerOpportunities: [
      "Junior Security Analyst",
      "SOC Analyst (Level 1)",
      "Cybersecurity Trainee",
      "Information Security Associate"
    ]
  },
  {
    id: "database",
    title: "Database Administration",
    role: "Database Administrator / SQL Developer",
    icon: "🗄️",
    shortDesc: "Stores, organizes, manages, and protects organizational data using database management systems.",
    overview: "Every modern software application relies on databases to save user records, transactions, and product details. Database specialists write queries, design schemas, ensure high speed, and take regular data backups.",
    requiredSkills: {
      basicSkills: [
        "Structured and organized mindset",
        "Understanding of data tables and relationships",
        "Carefulness when running data update/delete commands",
        "Basic understanding of business workflows"
      ],
      technicalSkills: [
        "Relational Database Management Systems (MySQL, PostgreSQL)",
        "Writing SQL queries (SELECT, INSERT, UPDATE, DELETE)",
        "Advanced SQL: JOINs, Subqueries, GROUP BY, HAVING",
        "Database normalization (1NF, 2NF, 3NF)",
        "Primary Keys, Foreign Keys, and Constraints",
        "Backup, restore, and indexing basics"
      ]
    },
    technologies: [
      "MySQL",
      "PostgreSQL",
      "SQL Server",
      "MongoDB (NoSQL basics)",
      "MySQL Workbench",
      "phpMyAdmin"
    ],
    learningPath: [
      {
        step: 1,
        title: "Learn Database Fundamentals (First)",
        desc: "Understand what databases, tables, rows, columns, and data types are."
      },
      {
        step: 2,
        title: "Master Basic SQL Queries (Next)",
        desc: "Practice CRUD commands: CREATE TABLE, INSERT INTO, SELECT, UPDATE, and DELETE."
      },
      {
        step: 3,
        title: "Learn Table Relationships & JOINs (Core)",
        desc: "Master Primary Keys, Foreign Keys, One-to-Many relationships, and INNER/LEFT/RIGHT JOINs."
      },
      {
        step: 4,
        title: "Database Design & Normalization (Next)",
        desc: "Learn how to eliminate duplicate data using 1st, 2nd, and 3rd Normal Forms."
      },
      {
        step: 5,
        title: "Real Database Practice (Practice)",
        desc: "Design a complete database schema for a College Management System or E-Library."
      },
      {
        step: 6,
        title: "Interview Preparation (Before Interview)",
        desc: "Practice writing complex SQL queries on paper, explain ACID properties, and explain indexing."
      }
    ],
    practice: [
      "Design a relational database schema for a Student Examination System.",
      "Write SQL queries to find top 5 highest marks using ORDER BY and LIMIT.",
      "Practice multi-table queries connecting Students, Courses, and Marks tables.",
      "Perform a full database backup and restore using MySQL Workbench."
    ],
    interviewPrep: [
      {
        question: "What is the difference between Primary Key and Foreign Key?",
        answer: "A Primary Key uniquely identifies each record in a table and cannot be NULL. A Foreign Key is a field in one table that refers to the Primary Key in another table, establishing a relationship."
      },
      {
        question: "What are ACID properties in a database?",
        answer: "ACID stands for Atomicity (all or nothing), Consistency (valid state transitions), Isolation (independent transactions), and Durability (permanent saved changes)."
      },
      {
        question: "What is Database Normalization?",
        answer: "Normalization is the process of organizing database tables to reduce data redundancy (duplicate information) and improve data integrity."
      }
    ],
    careerOpportunities: [
      "Junior Database Administrator (DBA)",
      "SQL Developer Trainee",
      "Database Support Engineer",
      "Data Operations Assistant"
    ]
  },
  {
    id: "software-testing",
    title: "Testing / QA",
    role: "QA Tester / Software Test Engineer",
    icon: "🧪",
    shortDesc: "Tests software applications to identify bugs, ensure quality, and verify that software meets user requirements.",
    overview: "Software Testing / Quality Assurance ensures applications are bug-free, secure, and user-friendly before releasing them to customers. It includes manual testing of features and automated testing using scripts.",
    requiredSkills: {
      basicSkills: [
        "Strong observation skills to spot visual and functional bugs",
        "Clear written communication to report bugs accurately",
        "Understanding of the Software Development Life Cycle (SDLC)",
        "Attention to edge cases and user error scenarios"
      ],
      technicalSkills: [
        "Manual testing methodologies (Functional, Regression, Smoke testing)",
        "Writing detailed Test Cases and Bug Reports",
        "Understanding of SDLC and STLC (Software Testing Life Cycle)",
        "Basic Automation Testing (Selenium, Java or Python basics)",
        "API testing basics using Postman",
        "Bug tracking tools (Jira basics or spreadsheet bug trackers)"
      ]
    },
    technologies: [
      "Manual Testing",
      "Selenium WebDriver",
      "Postman (API Testing)",
      "Test Case Writing",
      "Bug Tracking Tools (Jira / Excel)",
      "Java / Python Basics for Automation"
    ],
    learningPath: [
      {
        step: 1,
        title: "Learn Software Testing Basics (First)",
        desc: "Understand what bugs are, why testing is essential, and learn SDLC vs STLC."
      },
      {
        step: 2,
        title: "Master Manual Testing Types (Next)",
        desc: "Learn Black Box testing, White Box testing, Functional, Regression, and Smoke testing."
      },
      {
        step: 3,
        title: "Write Test Cases & Bug Reports (Core)",
        desc: "Learn standard test case templates (Test ID, Description, Steps, Expected vs Actual result)."
      },
      {
        step: 4,
        title: "Learn API Testing (Next)",
        desc: "Use Postman to test GET, POST, PUT, DELETE requests and verify status codes (200, 404, 500)."
      },
      {
        step: 5,
        title: "Explore Automation Testing (Practice)",
        desc: "Write simple Selenium scripts to automate opening a browser, typing in a login box, and clicking submit."
      },
      {
        step: 6,
        title: "Interview Preparation (Before Interview)",
        desc: "Practice explaining test cases for everyday objects (like a pen or ATM), and explain the bug life cycle."
      }
    ],
    practice: [
      "Write 10 test cases for a User Login Page (positive and negative test cases).",
      "Find and document 3 bugs on any real college or public website.",
      "Send a GET and POST request to a free public API using Postman.",
      "Create a sample Bug Report with Severity and Priority ratings."
    ],
    interviewPrep: [
      {
        question: "What is the difference between Verification and Validation?",
        answer: "Verification checks whether software is being developed according to specifications ('Are we building the product right?'). Validation checks whether the finished software meets user requirements ('Are we building the right product?')."
      },
      {
        question: "What is the Bug Life Cycle?",
        answer: "The Bug Life Cycle is the journey of a bug: New -> Assigned -> Open -> Fixed -> Retest -> Verified -> Closed (or Reopened)."
      },
      {
        question: "What is the difference between Severity and Priority of a bug?",
        answer: "Severity indicates the technical impact of a bug on the system (e.g. system crash = Critical). Priority indicates how urgently the bug needs to be fixed for the business."
      }
    ],
    careerOpportunities: [
      "Associate QA Engineer",
      "Manual Test Engineer",
      "Automation Testing Trainee",
      "Software Quality Analyst"
    ]
  },
  {
    id: "mobile-development",
    title: "Mobile App Development",
    role: "Mobile App Developer (Android / Flutter / React Native)",
    icon: "📱",
    shortDesc: "Develops interactive and smooth mobile applications for smartphones and tablets on Android and iOS.",
    overview: "Mobile app developers create applications that people use every day on their phones. Freshers can build native apps using Kotlin/Java or cross-platform apps using Flutter or React Native that work on both Android and iOS.",
    requiredSkills: {
      basicSkills: [
        "Familiarity with smartphone operating systems and touch interfaces",
        "Creative interest in mobile UI layouts and screen navigation",
        "Logical programming skills",
        "Patience with emulator testing and mobile permissions"
      ],
      technicalSkills: [
        "Core mobile language (Kotlin, Java, Dart, or JavaScript)",
        "Cross-platform frameworks (Flutter or React Native)",
        "Mobile UI layout (views, buttons, scroll views, touch events)",
        "Calling REST APIs and parsing JSON data on mobile",
        "Local mobile storage (SharedPreferences, SQLite)",
        "Using mobile device features (camera, location basics)"
      ]
    },
    technologies: [
      "Flutter (Dart)",
      "React Native",
      "Android Studio",
      "Kotlin / Java",
      "REST APIs / JSON",
      "SQLite / Firebase Basics"
    ],
    learningPath: [
      {
        step: 1,
        title: "Learn Programming Foundations (First)",
        desc: "Learn Dart (for Flutter) or JavaScript (for React Native) or Kotlin (for Native Android)."
      },
      {
        step: 2,
        title: "Understand Mobile UI Components (Next)",
        desc: "Learn how to build screens, buttons, text inputs, images, and list views for phone screens."
      },
      {
        step: 3,
        title: "Screen Navigation & State Management (Core)",
        desc: "Learn how to move between screens (navigation) and pass data between activities/widgets."
      },
      {
        step: 4,
        title: "Connect to Internet & APIs (Next)",
        desc: "Fetch live data from web APIs and display it in scrollable lists (like news or weather)."
      },
      {
        step: 5,
        title: "Build & Test on a Real Phone (Practice)",
        desc: "Build a complete student app, generate an APK, and install it on your Android phone."
      },
      {
        step: 6,
        title: "Interview Preparation (Before Interview)",
        desc: "Be ready to demonstrate your app running on your phone, explain mobile lifecycle events, and explain API fetching."
      }
    ],
    practice: [
      "Build a simple Mobile Calculator or Flashcard app.",
      "Create a Student Profile & Attendance Viewer mobile screen.",
      "Build a Weather app that fetches live temperature from a free API.",
      "Generate an Android APK and run it on a real mobile device."
    ],
    interviewPrep: [
      {
        question: "What is the difference between Native and Cross-Platform mobile development?",
        answer: "Native apps are built specifically for one OS (e.g. Kotlin for Android, Swift for iOS). Cross-platform apps (e.g. Flutter, React Native) use a single codebase to run on both Android and iOS."
      },
      {
        question: "What is an Activity in Android?",
        answer: "An Activity represents a single focused screen with a user interface that the user can interact with (e.g. login screen, profile screen)."
      },
      {
        question: "What is a State in Flutter / React Native?",
        answer: "State is data that holds information about a screen and can change over time based on user interactions, triggering the UI to re-render."
      }
    ],
    careerOpportunities: [
      "Junior Android Developer",
      "Flutter App Developer Trainee",
      "React Native Associate",
      "Mobile App Programmer"
    ]
  },
  {
    id: "it-networking",
    title: "IT Support & Networking",
    role: "IT Support Specialist / Network Associate",
    icon: "📡",
    shortDesc: "Maintains computer systems, networks, hardware, and provides technical troubleshooting support to users.",
    overview: "IT Support & Networking professionals keep company technology running smoothly. They set up computers, configure office routers and switches, troubleshoot network connectivity, and help staff resolve technical problems.",
    requiredSkills: {
      basicSkills: [
        "Patient, polite, and helpful attitude for user support",
        "Clear verbal communication to guide non-technical users",
        "Hands-on interest in computer hardware and cabling",
        "Methodical troubleshooting process (step-by-step checking)"
      ],
      technicalSkills: [
        "Computer hardware components and assembling basics",
        "Operating system installation (Windows, Linux, macOS)",
        "Networking fundamentals (IP addressing, Subnets, DNS, DHCP)",
        "LAN/WAN setup and Wi-Fi configuration",
        "Troubleshooting tools (ping, tracert, ipconfig, netstat)",
        "Remote desktop tools and ticket management systems"
      ]
    },
    technologies: [
      "TCP/IP Networking",
      "Windows 10/11 & Linux OS",
      "Routers, Switches & Cabling",
      "Command Line (ipconfig, ping, tracert)",
      "Active Directory Basics",
      "Remote Support Tools (TeamViewer / AnyDesk)"
    ],
    learningPath: [
      {
        step: 1,
        title: "Learn Computer Hardware Basics (First)",
        desc: "Understand CPU, RAM, SSD/HDD, motherboard, power supply, and how to assemble a PC."
      },
      {
        step: 2,
        title: "Master OS Installation & Maintenance (Next)",
        desc: "Install Windows and Linux, manage device drivers, and troubleshoot boot errors."
      },
      {
        step: 3,
        title: "Learn Networking Concepts (Core)",
        desc: "Understand IP addresses (IPv4 vs IPv6), MAC addresses, Subnet masks, Default Gateways, and DNS."
      },
      {
        step: 4,
        title: "Master Network Troubleshooting Commands (Next)",
        desc: "Use ipconfig, ping, tracert, nslookup, and netstat to diagnose internet and LAN problems."
      },
      {
        step: 5,
        title: "Configure Routers & Wi-Fi (Practice)",
        desc: "Log into a home or lab Wi-Fi router, set passwords, configure DHCP, and assign static IPs."
      },
      {
        step: 6,
        title: "Interview Preparation (Before Interview)",
        desc: "Be prepared to explain how a computer finds a website (DNS resolution) and step-by-step fix a 'No Internet' problem."
      }
    ],
    practice: [
      "Run ipconfig /all, ping google.com, and tracert to test network connectivity.",
      "Create a bootable USB drive and install an operating system on a virtual machine.",
      "Configure an office or home Wi-Fi router with WPA2/WPA3 security.",
      "Solve a simulated 'PC is slow' or 'No network access' support ticket."
    ],
    interviewPrep: [
      {
        question: "What is an IP address and what is the difference between IPv4 and IPv6?",
        answer: "An IP address uniquely identifies a device on a network. IPv4 is a 32-bit numerical address (e.g., 192.168.1.1), while IPv6 is a 128-bit hexadecimal address created to provide vastly more addresses."
      },
      {
        question: "What is DNS and how does it work?",
        answer: "DNS (Domain Name System) is like the phonebook of the internet. It translates human-friendly domain names (e.g. google.com) into computer-readable IP addresses."
      },
      {
        question: "How do you troubleshoot a computer with 'No Internet Connection'?",
        answer: "Check physical cable/Wi-Fi connection, run 'ipconfig' to verify IP assignment, ping 127.0.0.1 (loopback), ping default gateway (router), ping 8.8.8.8 (internet IP), and ping a domain name to test DNS."
      }
    ],
    careerOpportunities: [
      "Junior Desktop Support Engineer",
      "Network Support Associate",
      "IT Helpdesk Technician",
      "System Support Assistant"
    ]
  },
  {
    id: "ui-ux-design",
    title: "UI / UX Design",
    role: "UI/UX Designer / Product Design Associate",
    icon: "🎨",
    shortDesc: "Designs clean, user-friendly, and visually appealing web and mobile interfaces that give users a great experience.",
    overview: "UI (User Interface) focuses on visual design (colors, typography, buttons, layouts), while UX (User Experience) focuses on how easily and comfortably users can navigate and accomplish their goals inside an app or website.",
    requiredSkills: {
      basicSkills: [
        "Empathy for users and understanding user needs",
        "Good eye for visual aesthetics, spacing, and colors",
        "Creative thinking and sketching ideas on paper",
        "Communication skills to present and justify design choices"
      ],
      technicalSkills: [
        "UI Design tools (Figma, Adobe XD)",
        "Wireframing and Interactive Prototyping",
        "Design systems, typography scales, and color theory",
        "User flow mapping and information architecture",
        "Responsive web design principles (Mobile first vs Desktop)",
        "Basic understanding of HTML and CSS limitations"
      ]
    },
    technologies: [
      "Figma",
      "Adobe XD",
      "Wireframing & Prototyping",
      "Color Theory & Typography",
      "HTML & CSS Basics",
      "Canva / Visual Tools"
    ],
    learningPath: [
      {
        step: 1,
        title: "Learn Design Principles (First)",
        desc: "Learn contrast, visual hierarchy, alignment, white space, and color harmony."
      },
      {
        step: 2,
        title: "Master Figma (Next)",
        desc: "Learn Figma tools: frames, shapes, typography, auto-layout, components, and export."
      },
      {
        step: 3,
        title: "Learn Wireframing (Core)",
        desc: "Create low-fidelity paper and digital wireframes before jumping into final colors."
      },
      {
        step: 4,
        title: "Create Interactive Prototypes (Next)",
        desc: "Connect buttons and screens in Figma to show clickable transitions and micro-interactions."
      },
      {
        step: 5,
        title: "Build a Design Portfolio (Practice)",
        desc: "Redesign an existing college website or create a mobile app design for a food delivery service."
      },
      {
        step: 6,
        title: "Interview Preparation (Before Interview)",
        desc: "Prepare a Behance/Figma link with 2-3 case studies, explaining the problem you solved and design choices made."
      }
    ],
    practice: [
      "Sketch a low-fidelity wireframe on paper for a Student Event Registration page.",
      "Design a modern dark/light mode landing page inside Figma.",
      "Build a clickable 3-screen mobile prototype in Figma.",
      "Write a short UX case study explaining how you improved a website's readability."
    ],
    interviewPrep: [
      {
        question: "What is the difference between UI and UX?",
        answer: "UI (User Interface) is the visual appearance—colors, buttons, typography, and imagery. UX (User Experience) is how the product feels, how easy it is to use, and how efficiently users achieve their goals."
      },
      {
        question: "What is a Wireframe?",
        answer: "A wireframe is a simplified, grayscale visual blueprint of a screen showing layout, content hierarchy, and structure before colors and final graphics are applied."
      },
      {
        question: "Why is White Space important in design?",
        answer: "White space (negative space) gives visual breathing room between elements, prevents clutter, improves readability, and guides user attention to important actions."
      }
    ],
    careerOpportunities: [
      "Junior UI/UX Designer",
      "Web Designer Trainee",
      "Product Design Intern",
      "Visual Designer Assistant"
    ]
  }
];
