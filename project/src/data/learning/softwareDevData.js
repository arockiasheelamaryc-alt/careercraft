// Learning Path Data for Category 2: Software Development
export const softwareDevData = {
  id: "software-development",
  title: "Software Development",
  icon: "💻",
  role: "Software Developer / Engineer",
  summary: "Master core programming languages, Object-Oriented Programming principles, Data Structures & Algorithms, database connections, and industry IDE tools.",
  technologies: [
    {
      id: "languages",
      name: "Java / Python / C++",
      tagline: "Core Programming Languages for Engineering Robust Software Systems",
      beginnerFriendly: "Think of a programming language like a natural spoken language (English, Spanish, Hindi), but designed specifically to give precise step-by-step instructions to computer hardware.",
      whatIsIt: "Java, Python, and C++ are the three primary foundational languages in computer science. C++ offers raw hardware performance and memory management; Java offers platform independence with its JVM architecture; Python offers clean, rapid syntax ideal for scripting, backends, and AI.",
      whyUsed: "Every software application needs a core computational engine. C++ powers operating systems and game engines; Java powers enterprise banking and Android; Python enables rapid development, automation, and data computing.",
      whereUsed: "Operating systems, banking software, game engines (Unreal Engine), cloud microservices, NASA mission systems, and autonomous vehicles.",
      mainFeatures: [
        "C++: High performance, pointer manipulation, direct hardware access, low runtime overhead.",
        "Java: Platform independence ('Write Once, Run Anywhere'), automatic garbage collection, robust multi-threading.",
        "Python: Highly readable syntax, dynamic typing, vast standard library, cross-platform portability.",
        "Compilers & Interpreters: Translates human-readable instructions into executable binary machine code.",
        "Type Systems: Static typing (Java/C++) catches errors at compile time; dynamic typing (Python) speeds up prototyping."
      ],
      importantConcepts: [
        {
          title: "Compilation vs Interpretation",
          desc: "C++ compiles directly to machine code; Java compiles to bytecode run by the JVM; Python interprets bytecode dynamically at runtime."
        },
        {
          title: "Memory Management (Stack vs Heap)",
          desc: "Stack holds primitive local variables and function frames (fast, automatic); Heap holds dynamically allocated objects and data structures."
        },
        {
          title: "Standard Libraries & Package Ecosystem",
          desc: "Built-in utilities for input/output, string processing, math calculations, and networking."
        },
        {
          title: "Pointers & References",
          desc: "Variables storing memory addresses of other variables (essential in C++, abstracted in Java and Python)."
        }
      ],
      howItWorks: "Source code is written by the programmer, fed to a compiler or interpreter, checked for syntax correctness, converted into intermediate bytecode or machine binaries, and executed by the CPU instruction cycles.",
      stepByStep: [
        "Step 1: Install a compiler or runtime (JDK for Java, Python 3.x, or GCC/G++ for C++).",
        "Step 2: Learn basic syntax: variable declarations, data types (int, float, char, boolean, string).",
        "Step 3: Master control flow: conditional logic (`if/else`), switch statements, and loops (`for`, `while`).",
        "Step 4: Understand modular functions/methods, parameter passing by value vs reference, and return values.",
        "Step 5: Learn file handling and exception handling (`try/catch/finally`) to build crash-proof software."
      ],
      syntax: `// --- Java Example ---
public class StudentProfile {
    private String name;
    private int id;

    public StudentProfile(String name, int id) {
        this.name = name;
        this.id = id;
    }

    public void display() {
        System.out.println("Student ID: " + id + " | Name: " + name);
    }

    public static void main(String[] args) {
        StudentProfile s1 = new StudentProfile("Rohan", 101);
        s1.display();
    }
}

# --- Python Equivalent ---
# class StudentProfile:
#     def __init__(self, name, student_id):
#         self.name = name
#         self.id = student_id
#     def display(self):
#         print(f"Student ID: {self.id} | Name: {self.name}")`,
      examples: [
        {
          title: "Python Exception Handling and File Reading",
          code: `try:
    with open("data.txt", "r") as file:
        lines = file.readlines()
        print(f"Total lines: {len(lines)}")
except FileNotFoundError:
    print("Error: The specified file does not exist.")
except Exception as e:
    print(f"An unexpected error occurred: {e}")`
        },
        {
          title: "C++ Memory Allocation and Pointer Usage",
          code: `#include <iostream>
using namespace std;

int main() {
    int score = 95;
    int* ptr = &score; // Pointer storing memory address

    cout << "Score Value: " << *ptr << endl;
    cout << "Memory Address: " << ptr << endl;
    return 0;
}`
        }
      ],
      practicalExamples: "Writing a student grade management system that reads CSV scores, computes percentiles and grade boundaries, and exports performance report cards.",
      realWorldUsage: "Google uses C++ for core search ranking engines, Java for Android platform OS layers, and Python for YouTube backend operations and AI model training.",
      importantPoints: [
        "Choose the right language for the problem: C++ for raw speed, Java for rock-solid enterprise backends, Python for quick automation and AI.",
        "Always release dynamically allocated resources (close database connections and file handles, or use auto-closing constructs).",
        "Never ignore compiler warnings; they often indicate hidden logic flaws or undefined behavior."
      ],
      thingsToLearn: [
        "Core syntax, data types, type casting, operators",
        "Loops, nested loops, conditional branches",
        "Functions, recursion, scope, call stack",
        "Memory fundamentals: Stack vs Heap, garbage collection",
        "Input/Output streams and exception handling"
      ],
      miniPracticalTasks: [
        "Task 1: Write a program in your chosen language that determines whether an input integer is prime.",
        "Task 2: Build a program that reverses a string without using built-in reverse functions.",
        "Task 3: Create a file reader script that counts the frequency of each word in a text file."
      ]
    },
    {
      id: "oop",
      name: "Object-Oriented Programming (OOP)",
      tagline: "The Architectural Paradigm of Modern Software Systems",
      beginnerFriendly: "Think of an automobile blueprint (Class). Using that one blueprint, you can manufacture thousands of real physical cars (Objects). Each car has attributes (color, speed) and actions (accelerate, brake).",
      whatIsIt: "Object-Oriented Programming (OOP) is a programming paradigm organized around real-world modeling through 'Objects' containing data (fields/attributes) and behavior (code/methods).",
      whyUsed: "It structures large codebases into modular, reusable, and maintainable units, preventing monolithic spaghetti code and reducing development redundancy.",
      whereUsed: "Standard paradigm across Java, C++, C#, Python, Swift, Kotlin, and enterprise software architectures worldwide.",
      mainFeatures: [
        "Classes and Objects: Blueprints vs runtime instances.",
        "Encapsulation: Bundling data and methods together and restricting unauthorized external access.",
        "Inheritance: Deriving new classes from existing classes to promote code reuse.",
        "Polymorphism: Allowing one interface to represent different underlying forms (overloading & overriding).",
        "Abstraction: Hiding complex internal implementation details while exposing only essential interfaces."
      ],
      importantConcepts: [
        {
          title: "Encapsulation & Access Modifiers",
          desc: "Using private, protected, and public keywords with getters/setters to safeguard internal object state."
        },
        {
          title: "Inheritance ('is-a' relationship)",
          desc: "A Child class inherits attributes and methods from a Parent class using extends/inherits syntax."
        },
        {
          title: "Polymorphism (Compile-time vs Runtime)",
          desc: "Method overloading (same method name with different parameters) vs method overriding (child reimplementing parent's method)."
        },
        {
          title: "Abstract Classes & Interfaces",
          desc: "Contracts that define required method signatures without implementing them, ensuring uniform architecture across teams."
        }
      ],
      howItWorks: "At runtime, instantiating a class allocates memory on the heap. The object maintains a reference pointer to its class method table (vtable in C++/Java), allowing polymorphic method invocations and clean access control checks.",
      stepByStep: [
        "Step 1: Identify real-world entities in your system (e.g. BankAccount, Customer, Transaction).",
        "Step 2: Define classes with private member variables to enforce encapsulation.",
        "Step 3: Write public constructors to initialize object fields cleanly.",
        "Step 4: Use inheritance when clear parent-child relationships exist (e.g., SavingsAccount extends BankAccount).",
        "Step 5: Apply abstract classes or interfaces to standardize common behavior across diverse classes."
      ],
      syntax: `// Java Example Demonstrating the 4 Pillars of OOP
abstract class BankAccount {
    // Encapsulation: private balance protected from external tampering
    private String accountNumber;
    private double balance;

    public BankAccount(String accountNumber, double initialDeposit) {
        this.accountNumber = accountNumber;
        this.balance = initialDeposit;
    }

    public double getBalance() {
        return balance;
    }

    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            System.out.println("Deposited $" + amount + ". New Balance: $" + balance);
        }
    }

    // Abstraction: Subclasses must implement their own interest calculation
    public abstract void applyMonthlyInterest();
}

// Inheritance & Polymorphism
class SavingsAccount extends BankAccount {
    private double interestRate = 0.04; // 4%

    public SavingsAccount(String accNo, double initialBalance) {
        super(accNo, initialBalance);
    }

    @Override
    public void applyMonthlyInterest() {
        double interest = getBalance() * (interestRate / 12);
        deposit(interest);
        System.out.println("Applied monthly interest of $" + interest);
    }
}`,
      examples: [
        {
          title: "Interface Implementation for Multi-Payment Gateway",
          code: `interface PaymentGateway {
    boolean processPayment(double amount);
}

class UPIPayment implements PaymentGateway {
    public boolean processPayment(double amount) {
        System.out.println("Processing UPI payment of ₹" + amount);
        return true;
    }
}

class CardPayment implements PaymentGateway {
    public boolean processPayment(double amount) {
        System.out.println("Processing Credit Card payment of ₹" + amount);
        return true;
    }
}`
        },
        {
          title: "Method Overloading (Compile-Time Polymorphism)",
          code: `class Calculator {
    // Overloaded sum methods
    public int add(int a, int b) {
        return a + b;
    }
    public double add(double a, double b) {
        return a + b;
    }
    public int add(int a, int b, int c) {
        return a + b + c;
    }
}`
        }
      ],
      practicalExamples: "Designing an RPG Game engine with a base `Character` class inherited by `Warrior`, `Mage`, and `Archer`, each overriding `attack()` and `defend()` uniquely.",
      realWorldUsage: "Enterprise platforms like Oracle E-Business Suite, SAP ERP, and banking cores use OOP models to manage millions of distinct customer accounts, loans, and ledgers.",
      importantPoints: [
        "Favor composition over inheritance when entities do not have a strict 'is-a' relationship.",
        "Keep member variables private and expose only strictly necessary getters and setters.",
        "Adhere to SOLID design principles for scalable, resilient OOP architectures."
      ],
      thingsToLearn: [
        "Classes, objects, constructors, destructors/finalizers",
        "Encapsulation, information hiding, access modifiers",
        "Inheritance, super keyword, method overriding",
        "Polymorphism: method overloading vs runtime dynamic dispatch",
        "Abstract classes, interfaces, and design patterns (Singleton, Factory)"
      ],
      miniPracticalTasks: [
        "Task 1: Create an `Employee` base class and derive `FullTimeEmployee` and `ContractEmployee` with custom salary calculations.",
        "Task 2: Build a `Shape` interface with `getArea()` implemented by `Circle`, `Rectangle`, and `Triangle`.",
        "Task 3: Implement an encapsulated `LibraryBook` class that tracks whether a book is checked out or available."
      ]
    },
    {
      id: "dsa",
      name: "Data Structures & Algorithms (DSA)",
      tagline: "The Problem-Solving Backbone of High-Performance Software",
      beginnerFriendly: "If code is a chef cooking in a kitchen, Data Structures are the jars, shelves, and spice racks that store ingredients, and Algorithms are the step-by-step recipes to prepare food in the fastest time.",
      whatIsIt: "Data Structures are specialized formats for organizing, processing, retrieving, and storing data. Algorithms are finite sets of unambiguous computational steps executed to solve specific problems.",
      whyUsed: "Inefficient algorithms grind applications to a halt as user data scales. DSA enables software to search billions of records in milliseconds and process complex graphs with minimal memory.",
      whereUsed: "Technical interview coding rounds (FAANG/MANG), GPS route mapping (Dijkstra's), search engine indexing, social network friend recommendations, and compression algorithms.",
      mainFeatures: [
        "Linear Data Structures: Arrays, Linked Lists, Stacks, Queues.",
        "Non-Linear Data Structures: Binary Trees, Binary Search Trees, Heaps, Graphs, Hash Tables.",
        "Asymptotic Analysis: Big-O notation for measuring Time and Space Complexity.",
        "Algorithmic Strategies: Two Pointers, Sliding Window, Divide & Conquer, Dynamic Programming, Greedy approaches."
      ],
      importantConcepts: [
        {
          title: "Time & Space Complexity (Big-O)",
          desc: "O(1) constant, O(log N) logarithmic, O(N) linear, O(N log N) log-linear, O(N^2) quadratic, O(2^N) exponential."
        },
        {
          title: "Arrays vs Linked Lists",
          desc: "Arrays offer O(1) random index access but costly O(N) insertions. Linked lists offer dynamic sizing and O(1) pointer updates but O(N) sequential search."
        },
        {
          title: "Hash Tables (HashMaps)",
          desc: "Key-value pair data structure providing average O(1) insertions, deletions, and lookups using hash functions."
        },
        {
          title: "Binary Search",
          desc: "Efficient O(log N) search algorithm on sorted arrays by repeatedly halving the search space."
        }
      ],
      howItWorks: "DSA optimizes CPU cycles and RAM access. For example, Binary Search splits a million items into 20 comparisons (log2(1,000,000) ≈ 20), whereas a linear search might require 1,000,000 steps.",
      stepByStep: [
        "Step 1: Understand Big-O notation and learn to compute time/space tradeoffs.",
        "Step 2: Master foundational linear structures: Arrays, Strings, Linked Lists, Stacks, Queues.",
        "Step 3: Master sorting (Merge Sort, Quick Sort) and searching (Binary Search).",
        "Step 4: Advance to hierarchical structures: Trees, BST traversals (Inorder, Preorder, Postorder), and Hash Maps.",
        "Step 5: Tackle Graph traversals (BFS, DFS) and Dynamic Programming (memoization & tabulation)."
      ],
      syntax: `// Binary Search Algorithm Implementation in Java (O(log N))
public class BinarySearchAlgorithm {
    public static int binarySearch(int[] arr, int target) {
        int left = 0;
        int right = arr.length - 1;

        while (left <= right) {
            int mid = left + (right - left) / 2;

            // Check if target is present at mid
            if (arr[mid] == target) {
                return mid; // Found at index mid
            }

            // If target is greater, ignore left half
            if (arr[mid] < target) {
                left = mid + 1;
            } 
            // If target is smaller, ignore right half
            else {
                right = mid - 1;
            }
        }

        return -1; // Target not found
    }

    public static void main(String[] args) {
        int[] sortedData = {12, 24, 35, 47, 59, 68, 77, 89, 94};
        int index = binarySearch(sortedData, 47);
        System.out.println("Element 47 found at index: " + index);
    }
}`,
      examples: [
        {
          title: "Stack Implementation using Array (LIFO Principle)",
          code: `class CustomStack {
    private int maxSize = 100;
    private int[] stackArray = new int[maxSize];
    private int top = -1;

    public void push(int value) {
        if (top < maxSize - 1) {
            stackArray[++top] = value;
        }
    }

    public int pop() {
        if (top >= 0) {
            return stackArray[top--];
        }
        return -1; // Empty
    }

    public boolean isEmpty() {
        return top == -1;
    }
}`
        },
        {
          title: "Two Sum Problem using HashMap in Python (O(N) Time)",
          code: `def two_sum(nums, target):
    seen = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in seen:
            return [seen[complement], i]
        seen[num] = i
    return []

# Example: [2, 7, 11, 15], target = 9 -> returns [0, 1]`
        }
      ],
      practicalExamples: "Implementing Google Maps route finding using Dijkstra's shortest path graph algorithm to navigate traffic delays in real time.",
      realWorldUsage: "Database indexes use B-Trees and Hash Maps to retrieve millions of customer transactions in milliseconds.",
      importantPoints: [
        "Always analyze edge cases: empty arrays, single elements, duplicates, negative numbers, integer overflow in mid calculations.",
        "Master Hash Tables first; they solve a vast majority of technical interview coding problems in O(N) time.",
        "Recognize recursion depth limits to prevent stack overflow errors."
      ],
      thingsToLearn: [
        "Big-O Time and Space complexity calculation",
        "Arrays, Strings, and Two-Pointer / Sliding Window patterns",
        "Singly and Doubly Linked Lists",
        "Stack (LIFO) and Queue (FIFO) applications",
        "Binary Search Trees, Heaps, and HashMaps",
        "Graph BFS, DFS, and recursion fundamentals"
      ],
      miniPracticalTasks: [
        "Task 1: Implement a function that detects whether a given string is a palindrome ignoring spaces and cases.",
        "Task 2: Write a program that reverses a Singly Linked List iteratively.",
        "Task 3: Implement a function that checks for balanced parentheses in an expression like `{[(())]}` using a Stack."
      ]
    },
    {
      id: "sql-mysql-sd",
      name: "SQL / MySQL",
      tagline: "Relational Database Modeling and SQL Query Engineering",
      beginnerFriendly: "Every app needs a memory. If code is the brain thinking, the SQL database is the notebook where it records information permanently so nothing is forgotten when the power turns off.",
      whatIsIt: "SQL (Structured Query Language) is the standardized domain-specific language used for managing data held in a relational database management system like MySQL.",
      whyUsed: "Applications need persistent, structured data storage that guarantees transactional safety, prevents corrupt states, and enables complex filtering, aggregation, and joining.",
      whereUsed: "Used across backend application servers to store user accounts, financial transactions, order histories, and audit records.",
      mainFeatures: [
        "DDL & DML: Defining table schemas and executing data insertions, reads, and updates.",
        "Integrity Constraints: PRIMARY KEY, FOREIGN KEY, NOT NULL, UNIQUE, CHECK.",
        "Complex Joins: Extracting unified data from multiple tables across relational keys.",
        "Aggregation: COUNT, SUM, AVG, MIN, MAX combined with GROUP BY and HAVING.",
        "Transaction Control (ACID): BEGIN, COMMIT, and ROLLBACK to prevent half-finished state updates."
      ],
      importantConcepts: [
        {
          title: "Relational Schema Design",
          desc: "Structuring tables to mirror business logic with correct data types and foreign key relationships."
        },
        {
          title: "ACID Properties",
          desc: "Atomicity (all or nothing), Consistency (rules preserved), Isolation (no race conditions), Durability (persisted to disk)."
        },
        {
          title: "Subqueries & Common Table Expressions (CTEs)",
          desc: "Nesting queries inside SELECT, FROM, or WHERE clauses to perform multi-stage data processing."
        },
        {
          title: "Indexes & Query Plans",
          desc: "Using EXPLAIN to analyze query execution bottlenecks and adding indexes on foreign keys."
        }
      ],
      howItWorks: "The software application sends SQL statements through JDBC (Java), PyMySQL/SQLAlchemy (Python), or native drivers. The MySQL engine compiles the SQL string, navigates indexed disk blocks, and returns structured result tuples.",
      stepByStep: [
        "Step 1: Design the entity relationship diagram (ERD) identifying primary and foreign keys.",
        "Step 2: Write CREATE TABLE statements with appropriate constraints.",
        "Step 3: Populate sample records using INSERT INTO statements.",
        "Step 4: Query data using SELECT, filtering with WHERE, and aggregating with GROUP BY.",
        "Step 5: Connect application code using parameterized queries to prevent SQL injections."
      ],
      syntax: `-- Software Development Database Schema Example
CREATE TABLE developers (
  dev_id INT AUTO_INCREMENT PRIMARY KEY,
  full_name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  experience_years INT DEFAULT 0
);

CREATE TABLE projects (
  project_id INT AUTO_INCREMENT PRIMARY KEY,
  dev_id INT,
  project_name VARCHAR(150) NOT NULL,
  status VARCHAR(20) DEFAULT 'IN_PROGRESS',
  FOREIGN KEY (dev_id) REFERENCES developers(dev_id)
);

-- Query to find developers with more than 2 completed projects
SELECT 
  d.full_name,
  COUNT(p.project_id) AS total_completed
FROM developers d
JOIN projects p ON d.dev_id = p.dev_id
WHERE p.status = 'COMPLETED'
GROUP BY d.dev_id, d.full_name
HAVING total_completed >= 2;`,
      examples: [
        {
          title: "Bank Account Fund Transfer Transaction (ACID)",
          code: `START TRANSACTION;

-- Deduct 500 from Account 101
UPDATE accounts 
SET balance = balance - 500 
WHERE account_id = 101 AND balance >= 500;

-- Credit 500 to Account 202
UPDATE accounts 
SET balance = balance + 500 
WHERE account_id = 202;

-- Commit if both succeeded, else ROLLBACK
COMMIT;`
        },
        {
          title: "Python MySQL Connection with Cursor",
          code: `import mysql.connector

conn = mysql.connector.connect(
    host="localhost", user="root", password="mypassword", database="software_db"
)
cursor = conn.cursor(dictionary=True)
cursor.execute("SELECT full_name, experience_years FROM developers WHERE experience_years > %s", (3,))
for dev in cursor.fetchall():
    print(dev["full_name"], "has", dev["experience_years"], "years experience")
conn.close()`
        }
      ],
      practicalExamples: "Building a software bug-tracker database tracking bugs, priority levels, assigned engineers, status updates, and resolution comments.",
      realWorldUsage: "Fintech giants like PayPal and Stripe manage ledgers and billing cycles using relational databases with strict ACID transaction controls.",
      importantPoints: [
        "Never use plain string interpolation when executing queries from code; always bind parameters to prevent SQL injection.",
        "Add indexes to columns used in JOIN conditions and frequent WHERE filters.",
        "Always use transactions when performing multiple related write operations."
      ],
      thingsToLearn: [
        "DDL, DML, and DCL commands",
        "Table normalization (1NF, 2NF, 3NF)",
        "JOIN types: INNER, LEFT, RIGHT, FULL OUTER",
        "Indexes, clustered vs non-clustered, performance tuning",
        "Transactions, locks, and concurrency management"
      ],
      miniPracticalTasks: [
        "Task 1: Design an ER schema for a university library with Students, Books, and Borrowings tables.",
        "Task 2: Write a query using a subquery to find employees earning above the department average salary.",
        "Task 3: Write an SQL transaction that creates an order and decreases stock quantity safely."
      ]
    },
    {
      id: "git-github-sd",
      name: "Git & GitHub",
      tagline: "Collaborative Code Management and Continuous Integration",
      beginnerFriendly: "Imagine writing an encyclopedia with 50 other co-authors. Git lets everyone write chapters independently without overriding anyone else, and lets you review edits before printing the final book.",
      whatIsIt: "Git is a distributed version control system that enables software developers to record snapshots of code changes. GitHub is the cloud repository hosting platform that enables collaborative pull requests, issue tracking, and CI/CD pipelines.",
      whyUsed: "Essential for team engineering, maintaining historical release versions, isolating experimental features, and automating test suites upon each code commit.",
      whereUsed: "Standard across every professional software engineering team worldwide.",
      mainFeatures: [
        "Branching workflows (GitFlow, trunk-based development).",
        "Interactive rebase and commit squashing for clean git histories.",
        "Merge conflict resolution tools and visual diffing.",
        "GitHub Pull Requests with automated status checks.",
        "Tagging releases (Semantic Versioning: v1.0.0, v2.1.3)."
      ],
      importantConcepts: [
        {
          title: "Git Rebase vs Merge",
          desc: "Merge creates a merge commit preserving exact history; Rebase replays commits on top of another branch for a linear history."
        },
        {
          title: "Git Stash",
          desc: "Temporarily shelving uncommitted changes when you need to switch branches urgently without losing work."
        },
        {
          title: "Pull Request Code Reviews",
          desc: "Peer feedback workflow where teammates review code diffs, comment on improvements, and approve merges."
        },
        {
          title: "Semantic Versioning",
          desc: "Format MAJOR.MINOR.PATCH to communicate breaking changes, new features, and bug fixes."
        }
      ],
      howItWorks: "Git tracks repository state as directed acyclic graphs (DAGs) of commit nodes. Each commit points to parent commits and tree objects representing directory hierarchies.",
      stepByStep: [
        "Step 1: Clone an existing repository using `git clone <url>`.",
        "Step 2: Create a descriptive feature branch (`git checkout -b feature/auth-service`).",
        "Step 3: Make changes, test code, and stage files with `git add <files>`.",
        "Step 4: Commit with standard conventional commit syntax (`git commit -m 'feat: implement JWT token expiration'`).",
        "Step 5: Push branch to GitHub, open a Pull Request, and merge after review."
      ],
      syntax: `# Common Advanced Git Commands
# 1. Stash changes to switch branches quickly
git stash
git switch main
git pull
git switch -
git stash pop

# 2. View a compact graph of all branches
git log --graph --oneline --all

# 3. Interactive rebase to squash last 3 commits
git rebase -i HEAD~3

# 4. Undo the last commit while keeping changes staged
git reset --soft HEAD~1`,
      examples: [
        {
          title: "Resolving a Merge Conflict via Command Line",
          code: `# When git merge produces conflict markers:
# <<<<<<< HEAD (Current Branch changes)
# double interestRate = 0.05;
# =======
# double interestRate = 0.06;
# >>>>>>> feature/updated-rates (Incoming changes)

# Developer manually edits the file to resolve:
# double interestRate = 0.055;

git add Account.java
git commit -m "fix: resolve interest rate calculation merge conflict"`
        },
        {
          title: "GitHub Actions CI Pipeline (.github/workflows/test.yml)",
          code: `name: Build and Test
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Set up JDK 17
        uses: actions/setup-java@v3
        with:
          java-version: '17'
      - name: Run Maven Tests
        run: mvn clean test`
        }
      ],
      practicalExamples: "Setting up a GitHub repository with branch protection rules requiring at least one teammate review and passing automated unit tests before merging into `main`.",
      realWorldUsage: "Microsoft, Google, and Amazon run millions of automated build and test pipelines daily on Git commits before shipping code to cloud servers.",
      importantPoints: [
        "Never rewrite public commit history on shared branches (`git push --force` on main is dangerous).",
        "Commit early and commit often with atomic, single-purpose commits.",
        "Keep branch names descriptive (e.g. `feat/payment-gateway`, `fix/login-null-pointer`)."
      ],
      thingsToLearn: [
        "Local git staging, commits, and diffing",
        "Branching workflows, fast-forward vs three-way merges",
        "Using git stash, git cherry-pick, and git revert",
        "Creating and reviewing Pull Requests on GitHub",
        "Setting up GitHub Actions for continuous testing"
      ],
      miniPracticalTasks: [
        "Task 1: Clone a sample open-source repo, create a branch, make a doc change, and inspect `git diff`.",
        "Task 2: Practice using `git stash` when you have unstaged changes and need to switch branches.",
        "Task 3: Create a release tag `v1.0.0` on your project and push it to GitHub using `git push origin --tags`."
      ]
    },
    {
      id: "vscode-intellij",
      name: "VS Code / IntelliJ IDEA",
      tagline: "Professional Integrated Development Environments and Developer Tooling",
      beginnerFriendly: "Think of an IDE like a supercar cockpit. Instead of just an engine (compiler) and steering wheel (Notepad), you have GPS, automatic lane assist, safety sensors, and diagnostic computers all in one screen.",
      whatIsIt: "VS Code (Visual Studio Code) is a lightweight, highly extensible code editor developed by Microsoft. IntelliJ IDEA is a flagship Java/Kotlin IDE developed by JetBrains known for deep code analysis and refactoring tools.",
      whyUsed: "They boost developer productivity through intelligent code autocompletion (IntelliSense), real-time syntax checking, integrated terminal, breakpoint debuggers, and Git integration.",
      whereUsed: "Standard day-to-day work environment for millions of software engineers across corporations and university computer labs.",
      mainFeatures: [
        "IntelliSense / Smart Completion: Context-aware suggestions of variables, methods, and imports.",
        "Interactive Debuggers: Setting breakpoints, inspecting call stacks, watching variable values line-by-line.",
        "Integrated Terminal: Running build commands, tests, and scripts directly inside the editor.",
        "Automated Refactoring: Renaming variables, extracting methods, and reordering parameters across hundreds of files safely.",
        "Extension Ecosystem: Linters (ESLint, SonarLint), themes, Docker, GitLens, and AI assistants."
      ],
      importantConcepts: [
        {
          title: "Breakpoints & Step Debugging",
          desc: "Pausing code execution at a specific line to step into, step over, or step out of functions to catch elusive bugs."
        },
        {
          title: "Safe Code Refactoring",
          desc: "Using Shift+F6 (IntelliJ) or F2 (VS Code) to rename an identifier across the entire workspace without breaking references."
        },
        {
          title: "Hotkeys & Productivity Shortcuts",
          desc: "Navigating files (Ctrl+P / Cmd+P), symbol search (Ctrl+T), and multi-cursor editing (Alt+Click)."
        },
        {
          title: "Workspace Configuration",
          desc: "Customizing launch.json, settings.json, and formatting rules to keep team code styling consistent."
        }
      ],
      howItWorks: "IDEs utilize Language Server Protocols (LSP) and abstract syntax trees in memory. As you type, the engine continuously parses code, reports errors, provides type hints, and compiles incremental changes in the background.",
      stepByStep: [
        "Step 1: Download and install VS Code or IntelliJ IDEA Community Edition.",
        "Step 2: Install required language packs and extensions (e.g. Java Extension Pack, Python extension).",
        "Step 3: Open your project workspace directory and configure SDKs/compilers.",
        "Step 4: Use keyboard shortcuts to navigate code and inspect method documentation.",
        "Step 5: Set a breakpoint on a suspicious line of code, launch the debugger, and inspect variables."
      ],
      syntax: `// Sample launch.json for VS Code Debugging a Node/Java App
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "java",
      "name": "Debug (Launch) - CareerCraftApp",
      "request": "launch",
      "mainClass": "com.careercraft.MainApplication",
      "projectName": "careercraft-core"
    },
    {
      "type": "node",
      "request": "launch",
      "name": "Debug Server",
      "program": "\${workspaceFolder}/server.js"
    }
  ]
}`,
      examples: [
        {
          title: "Essential IDE Keyboard Shortcuts",
          code: `Shortcut (VS Code / IntelliJ):
- Search Files: Ctrl+P / Shift+Shift
- Global Search: Ctrl+Shift+F / Ctrl+Shift+F
- Rename Symbol: F2 / Shift+F6
- Format Code: Shift+Alt+F / Ctrl+Alt+L
- Toggle Terminal: Ctrl+\` / Alt+F12
- Step Over in Debugger: F10 / F8
- Step Into in Debugger: F11 / F7`
        },
        {
          title: "Recommended Extensions for Software Engineers",
          code: `1. GitLens (Visual git blame and commit annotations)
2. SonarLint (Detects bugs and security hotspots as you write)
3. Prettier / Code Formatter (Enforces uniform spacing)
4. Docker Extension (Manage containers from sidebar)
5. Bracket Pair Colorizer (Visual code nesting)`
        }
      ],
      practicalExamples: "Using IntelliJ's breakpoint debugger with conditional triggers to catch a `NullPointerException` that only occurs when processing customer ID #4092.",
      realWorldUsage: "Engineers at Apple, Spotify, and Uber spend 8+ hours a day in these IDEs writing code, executing automated test suites, and debugging distributed services.",
      importantPoints: [
        "Never debug solely by adding print statements (`console.log` or `System.out.println`); learn to use the interactive breakpoint debugger.",
        "Learn key navigation shortcuts to eliminate reliance on the mouse, dramatically speeding up development.",
        "Use workspace-specific settings to avoid imposing personal formatting choices on shared team projects."
      ],
      thingsToLearn: [
        "Setting up project SDKs and build systems (Maven/Gradle/npm)",
        "Using breakpoints, watch expressions, and call stacks in the debugger",
        "Code navigation: go to definition, find references, hierarchy view",
        "Automated refactoring: rename, extract method, extract variable",
        "Configuring linters, auto-formatting on save, and keybindings"
      ],
      miniPracticalTasks: [
        "Task 1: Set a breakpoint inside a loop in your code and inspect how variable values change with each iteration.",
        "Task 2: Use the 'Rename Symbol' refactoring shortcut to rename a method used across 3 different files.",
        "Task 3: Configure a code formatter to automatically clean up your indentation whenever you save a file."
      ]
    }
  ],
  practiceTest: {
    categoryTitle: "Software Development",
    totalQuestions: 15,
    instructions: "Answer the following conceptual and analytical questions covering Software Development technologies (Java/Python/C++, OOP, DSA, SQL/MySQL, Git & GitHub, VS Code/IntelliJ). Write your responses in your study notebook.",
    questions: [
      {
        id: 1,
        technology: "Java / Python / C++",
        question: "Explain the difference between Stack memory and Heap memory. What types of data reside in each, and how is deallocation handled in Java versus C++?"
      },
      {
        id: 2,
        technology: "Java / Python / C++",
        question: "What does 'Write Once, Run Anywhere' mean in Java? Explain the specific roles of the JDK, JRE, and JVM in enabling this cross-platform capability."
      },
      {
        id: 3,
        technology: "Object-Oriented Programming (OOP)",
        question: "Define the four fundamental pillars of Object-Oriented Programming (Encapsulation, Abstraction, Inheritance, Polymorphism) and provide a real-world scenario illustrating each."
      },
      {
        id: 4,
        technology: "Object-Oriented Programming (OOP)",
        question: "Compare an Abstract Class with an Interface. Under what architectural design conditions should a software engineer choose an abstract class instead of an interface?"
      },
      {
        id: 5,
        technology: "Object-Oriented Programming (OOP)",
        question: "Explain the difference between method overloading (compile-time polymorphism) and method overriding (runtime polymorphism). How does dynamic method dispatch operate at runtime?"
      },
      {
        id: 6,
        technology: "Data Structures & Algorithms (DSA)",
        question: "What is Big-O notation? Arrange the following time complexities in ascending order of growth: O(N log N), O(1), O(N^2), O(N), O(2^N), O(log N)."
      },
      {
        id: 7,
        technology: "Data Structures & Algorithms (DSA)",
        question: "Compare an Array and a Singly Linked List with respect to access time, insertion at the beginning, deletion at the end, and memory overhead."
      },
      {
        id: 8,
        technology: "Data Structures & Algorithms (DSA)",
        question: "How does a Hash Table achieve average O(1) time complexity for lookup operations? What is a hash collision, and what are two common methods used to resolve collisions?"
      },
      {
        id: 9,
        technology: "Data Structures & Algorithms (DSA)",
        question: "Describe the working mechanism of the Binary Search algorithm. What is its time complexity, and what strict precondition must the input array satisfy before binary search can be applied?"
      },
      {
        id: 10,
        technology: "Data Structures & Algorithms (DSA)",
        question: "What is the difference between Depth First Search (DFS) and Breadth First Search (BFS) in tree/graph traversal? What auxiliary data structure is typically used for each?"
      },
      {
        id: 11,
        technology: "SQL / MySQL",
        question: "What are ACID properties in database management systems? Explain why ACID compliance is critical in financial and e-commerce software transactions."
      },
      {
        id: 12,
        technology: "SQL / MySQL",
        question: "What is database normalization? Describe the requirements for a database table to satisfy First Normal Form (1NF), Second Normal Form (2NF), and Third Normal Form (3NF)."
      },
      {
        id: 13,
        technology: "Git & GitHub",
        question: "Explain the fundamental difference between 'git merge' and 'git rebase'. When is it safe to rebase, and when should rebasing be avoided?"
      },
      {
        id: 14,
        technology: "Git & GitHub",
        question: "What is a Pull Request (PR) in GitHub? Describe the steps involved in conducting a code review and merging a PR into a protected main branch."
      },
      {
        id: 15,
        technology: "VS Code / IntelliJ",
        question: "How does an interactive breakpoint debugger work? Explain the difference between 'Step Into', 'Step Over', and 'Step Out' during a live debugging session."
      }
    ]
  }
};
