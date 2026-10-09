// Learning Path Data for Category 6: Database Administration
export const databaseData = {
  id: "database",
  title: "Database Administration",
  icon: "🗄️",
  role: "Database Administrator / SQL Developer",
  summary: "Master enterprise relational databases (MySQL, PostgreSQL, Microsoft SQL Server), document NoSQL databases (MongoDB), database management GUIs, backup replication, and schema normalization.",
  technologies: [
    {
      id: "mysql-admin",
      name: "MySQL",
      tagline: "The World's Most Popular Open-Source Relational Database Engine",
      beginnerFriendly: "Think of MySQL like an ultra-secure, multi-user bank vault with millions of safety deposit boxes. Each box (table) is strictly organized, indexed with numbers, and audited so no data ever goes missing.",
      whatIsIt: "MySQL is an open-source Relational Database Management System (RDBMS) owned by Oracle Corporation. It organizes data into tables composed of rows and columns, enforcing relational schemas through primary and foreign keys.",
      whyUsed: "It is battle-tested, lightning fast for read-heavy workloads, adheres to ACID standards, powers over 40% of the web (via WordPress), and scales easily through read-replicas.",
      whereUsed: "WordPress, Facebook, Twitter, Uber, Shopify, GitHub, and millions of enterprise e-commerce systems.",
      mainFeatures: [
        "Storage Engines: Pluggable architecture including InnoDB (ACID, transactions, foreign keys) and MyISAM.",
        "ACID Guarantees: Full Atomicity, Consistency, Isolation, and Durability on transactions.",
        "Replication & Clustering: Asynchronous and semi-synchronous Master-Slave replication for high availability.",
        "B-Tree Indexing: High-speed indexed searches, primary keys, and composite indexes.",
        "Stored Procedures & Triggers: Server-side business logic and automated audit logging."
      ],
      importantConcepts: [
        {
          title: "InnoDB Storage Engine",
          desc: "The default MySQL engine supporting ACID transactions, row-level locking, foreign key constraints, and crash recovery via redo/undo logs."
        },
        {
          title: "Master-Slave Replication",
          desc: "Writing transactions to a primary master database which asynchronously synchronizes with one or more read-only slave databases."
        },
        {
          title: "Database Normalization (1NF to BCNF)",
          desc: "The mathematical process of structuring relations to avoid update, insert, and delete anomalies."
        },
        {
          title: "Slow Query Log & EXPLAIN",
          desc: "Tools to identify poorly written queries that scan too many rows without utilizing indexes."
        }
      ],
      howItWorks: "SQL queries arrive via network connections. The query parser constructs a parse tree, the optimizer determines the fastest execution path using statistics, and InnoDB reads or writes 16KB data pages to disk buffer pools.",
      stepByStep: [
        "Step 1: Install MySQL Server (`sudo apt install mysql-server` or Windows MSI installer).",
        "Step 2: Run `sudo mysql_secure_installation` to configure root password and remove test databases.",
        "Step 3: Create databases and tables with normalized columns and primary keys.",
        "Step 4: Configure user privileges with `GRANT` statements and the principle of least privilege.",
        "Step 5: Perform scheduled automated backups using `mysqldump` and verify restore procedures."
      ],
      syntax: `-- Administrative MySQL Configuration and Queries
-- 1. Create a specialized database and user with least privilege
CREATE DATABASE careercraft_prod CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE USER 'app_user'@'%' IDENTIFIED BY 'StrongPass2026!';
GRANT SELECT, INSERT, UPDATE, DELETE ON careercraft_prod.* TO 'app_user'@'%';
FLUSH PRIVILEGES;

-- 2. Create Table with Foreign Key and Index
USE careercraft_prod;

CREATE TABLE customers (
  customer_id BIGINT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_email (email)
) ENGINE=InnoDB;

-- 3. Query Execution Plan Analysis
EXPLAIN SELECT * FROM customers WHERE email = 'student@college.edu';`,
      examples: [
        {
          title: "Automated mysqldump Backup and Restore",
          code: `# Backup full database with routines and triggers
mysqldump -u root -p --single-transaction --routines --triggers careercraft_prod > backup_prod.sql

# Restore backup file into target database
mysql -u root -p careercraft_prod < backup_prod.sql`
        },
        {
          title: "Enabling the Slow Query Log in /etc/mysql/my.cnf",
          code: `[mysqld]
slow_query_log = 1
slow_query_log_file = /var/log/mysql/mysql-slow.log
long_query_time = 2 # Log queries taking longer than 2 seconds`
        }
      ],
      practicalExamples: "Setting up a production MySQL database with master-slave replication where write operations hit the master server and analytical reports query the read slave.",
      realWorldUsage: "Uber uses MySQL and Schemaless (built on top of MySQL InnoDB engines) to store trip histories and driver dispatch records across thousands of servers.",
      importantPoints: [
        "Always use `utf8mb4` encoding instead of standard `utf8` in MySQL to support modern multi-byte characters and emojis.",
        "Always use `--single-transaction` when dumping InnoDB databases with `mysqldump` to avoid locking user tables.",
        "Never run queries that omit a `LIMIT` clause on tables containing millions of rows in production."
      ],
      thingsToLearn: [
        "MySQL architecture, connection pool, and query optimizer",
        "InnoDB vs MyISAM engines, row-level locking, and MVCC",
        "User administration and privileges (GRANT, REVOKE)",
        "Backup strategies with mysqldump and physical backups (Percona XtraBackup)",
        "Index optimization, composite indexes, and EXPLAIN query plan analysis"
      ],
      miniPracticalTasks: [
        "Task 1: Create a database, create a dedicated non-root user with read-only access, and test the connection.",
        "Task 2: Take a logical backup of a database using `mysqldump` and restore it under a new database name.",
        "Task 3: Run `EXPLAIN` on an unindexed query versus an indexed query and compare `rows` examined."
      ]
    },
    {
      id: "postgresql",
      name: "PostgreSQL",
      tagline: "The World's Most Advanced Open-Source Object-Relational Database",
      beginnerFriendly: "If MySQL is the reliable family sedan of databases, PostgreSQL is the precision-engineered Swiss army knife supercar. It supports relational tables, JSON documents, geographic maps, and complex math with ironclad stability.",
      whatIsIt: "PostgreSQL ('Postgres') is a powerful, open-source object-relational database system with over 35 years of active development. It is famous for strict SQL standard compliance, extensibility, and advanced data types.",
      whyUsed: "It excels at handling complex data types (JSONB, Arrays, UUIDs), advanced indexing (GIN, GiST), spatial data (PostGIS), and concurrency control (MVCC) without table-locking bottlenecks.",
      whereUsed: "Apple, Instagram, Reddit, Spotify, Twitch, Robinhood, and modern AI/vector applications (pgvector).",
      mainFeatures: [
        "Native JSONB Support: Query and index nested JSON documents at relational speeds.",
        "Advanced Indexing: B-Tree, Hash, GIN (Generalized Inverted Index for JSON/arrays), GiST, BRIN.",
        "Full ACID & Concurrency: Multi-Version Concurrency Control (MVCC) where readers never block writers.",
        "Extensibility: Add custom functions in Python, C, or PL/pgSQL; PostGIS for geospatial analysis.",
        "pgvector Extension: Vector similarity search for AI and Large Language Model embeddings."
      ],
      importantConcepts: [
        {
          title: "Multi-Version Concurrency Control (MVCC)",
          desc: "Readers never block writers, and writers never block readers. Postgres creates new tuple versions upon updates, cleaning dead tuples via VACUUM."
        },
        {
          title: "JSONB vs JSON",
          desc: "JSON stores exact text (slower to query); JSONB stores decomposed binary format (fast to query and supports GIN indexing)."
        },
        {
          title: "VACUUM and Autovacuum",
          desc: "Reclaims disk space occupied by updated or deleted dead tuples and updates table statistics for the query planner."
        },
        {
          title: "Connection Pooling (PgBouncer)",
          desc: "Postgres spawns a process per connection; PgBouncer pools connections to prevent memory exhaustion under thousands of clients."
        }
      ],
      howItWorks: "Postgres uses a process-based architecture (postmaster forks backend worker processes). It stores write operations in a Write-Ahead Log (WAL) before updating disk pages, ensuring zero data loss during server crashes.",
      stepByStep: [
        "Step 1: Install PostgreSQL: `sudo apt install postgresql postgresql-contrib`.",
        "Step 2: Access the Postgres CLI: `sudo -u postgres psql`.",
        "Step 3: Create a database and user: `CREATE USER app_user WITH PASSWORD 'secret';`.",
        "Step 4: Use advanced features like JSONB and GIN indexes for semi-structured data.",
        "Step 5: Monitor autovacuum daemon and analyze queries using `EXPLAIN ANALYZE`."
      ],
      syntax: `-- Advanced PostgreSQL Queries & JSONB
-- 1. Create Table with UUID and JSONB Column
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE user_profiles (
  user_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  username VARCHAR(50) UNIQUE NOT NULL,
  metadata JSONB NOT NULL DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Insert Structured JSON Data
INSERT INTO user_profiles (username, metadata)
VALUES ('priya_tech', '{"tier": "premium", "skills": ["Python", "SQL", "Docker"], "active": true}');

-- 3. Query Inside the JSONB Document
SELECT username, metadata->>'tier' AS membership_tier
FROM user_profiles
WHERE metadata->'skills' ? 'Python';

-- 4. Create GIN Index on JSONB for Instant Lookups
CREATE INDEX idx_user_metadata ON user_profiles USING GIN (metadata);`,
      examples: [
        {
          title: "Performance Profiling with EXPLAIN ANALYZE",
          code: `EXPLAIN (ANALYZE, BUFFERS)
SELECT * FROM user_profiles 
WHERE username = 'priya_tech';

# Shows execution time, actual rows scanned, and disk page buffer hits`
        },
        {
          title: "Window Function with Partitioning",
          code: `SELECT 
  employee_id, 
  department, 
  salary,
  AVG(salary) OVER (PARTITION BY department) as dept_avg_salary
FROM employees;`
        }
      ],
      practicalExamples: "Building a modern SaaS application database that stores structured relational user billing in standard tables while storing dynamic third-party integration webhook payloads in indexed JSONB columns.",
      realWorldUsage: "Instagram migrated its core backend infrastructure to massive PostgreSQL clusters, utilizing sharding and custom partitioning to manage hundreds of millions of user media posts.",
      importantPoints: [
        "Ensure the `autovacuum` process is running properly; dead tuples from heavy updates can bloat disk size and degrade query speed.",
        "Always use `TIMESTAMPTZ` (timestamp with timezone) instead of plain `TIMESTAMP` to avoid timezone bugs.",
        "Use a connection pooler like `PgBouncer` when deploying with serverless backends or microservices that spawn high connection volumes."
      ],
      thingsToLearn: [
        "Object-relational architecture and psql CLI commands (\\l, \\c, \\dt, \\d+)",
        "Working with JSONB, Arrays, and custom ENUM data types",
        "Indexing types: B-Tree, GIN, GiST, BRIN, Partial Indexes",
        "Understanding MVCC, WAL (Write-Ahead Logging), and VACUUM",
        "PostgreSQL performance tuning in postgresql.conf (shared_buffers, work_mem)"
      ],
      miniPracticalTasks: [
        "Task 1: Connect to psql, create a database, and table with an auto-generated UUID primary key.",
        "Task 2: Store an array of 5 programming languages in a single column and query for records containing 'PostgreSQL'.",
        "Task 3: Run `EXPLAIN ANALYZE` on a query and verify whether an Index Scan or Sequential Scan was executed."
      ]
    },
    {
      id: "sql-server",
      name: "SQL Server",
      tagline: "Microsoft's Enterprise Relational Database Management System",
      beginnerFriendly: "Think of SQL Server as the preferred corporate data engine for Fortune 500 banks, healthcare networks, and enterprise institutions that run seamlessly on Windows enterprise infrastructure.",
      whatIsIt: "Microsoft SQL Server (MSSQL) is an enterprise relational database management system developed by Microsoft, supporting Transact-SQL (T-SQL) as its proprietary query extension.",
      whyUsed: "It provides deep integration with the Microsoft ecosystem (.NET, Azure, Active Directory), enterprise-grade security (Always Encrypted, Row-Level Security), and advanced business intelligence tools (SSIS, SSAS, SSRS).",
      whereUsed: "Global banks, healthcare health systems, government agencies, logistics networks, and enterprise .NET applications.",
      mainFeatures: [
        "Transact-SQL (T-SQL): Procedural extensions including variables, TRY/CATCH blocks, and cursors.",
        "SQL Server Management Studio (SSMS): The most comprehensive GUI management console in the industry.",
        "Always On Availability Groups: High-availability enterprise disaster recovery architecture.",
        "Columnstore Indexes: High-performance data warehousing indexes providing 10x query speed and 7x data compression.",
        "Always Encrypted: Protects sensitive data (credit cards, SSNs) at rest, in transit, and even from database administrators."
      ],
      importantConcepts: [
        {
          title: "Transact-SQL (T-SQL)",
          desc: "Microsoft's extension of standard SQL adding procedural programming elements, exception handling, and local variables."
        },
        {
          title: "Clustered vs Non-Clustered Indexes",
          desc: "A Clustered index defines the physical order of table data on disk (only 1 per table); Non-Clustered indexes are separate lookup structures pointing to table rows."
        },
        {
          title: "Row-Level Security (RLS)",
          desc: "Security predicates restricting data access at the database layer based on the user's login identity."
        },
        {
          title: "Transaction Log Management",
          desc: "Managing the LDF transaction log file to prevent disk exhaustion under Full Recovery models."
        }
      ],
      howItWorks: "SQL Server processes queries through its Relational Engine (query parser, optimizer) and Storage Engine (Buffer Pool manager, Lock manager). Data is organized in 8KB data pages and 64KB extents on disk.",
      stepByStep: [
        "Step 1: Download SQL Server Developer Edition and install SQL Server Management Studio (SSMS).",
        "Step 2: Connect to the server instance via Windows Authentication.",
        "Step 3: Create databases and tables with T-SQL script files.",
        "Step 4: Write stored procedures with error handling (`BEGIN TRY...BEGIN CATCH`).",
        "Step 5: Configure automated maintenance plans for backups and index defragmentation."
      ],
      syntax: `-- Microsoft T-SQL Stored Procedure with Transaction and Error Handling
CREATE OR ALTER PROCEDURE TransferStudentFees
  @SenderStudentId INT,
  @ReceiverStudentId INT,
  @Amount DECIMAL(10,2)
AS
BEGIN
  SET NOCOUNT ON;
  
  BEGIN TRY
    BEGIN TRANSACTION;

    -- 1. Deduct fee balance
    UPDATE StudentBalances
    SET Balance = Balance - @Amount
    WHERE StudentId = @SenderStudentId AND Balance >= @Amount;

    IF @@ROWCOUNT = 0
    BEGIN
      THROW 50001, 'Insufficient funds or student not found.', 1;
    END

    -- 2. Credit fee balance
    UPDATE StudentBalances
    SET Balance = Balance + @Amount
    WHERE StudentId = @ReceiverStudentId;

    -- Commit transaction if both succeed
    COMMIT TRANSACTION;
    PRINT 'Fee transfer completed successfully.';
  END TRY
  BEGIN CATCH
    -- Rollback on any failure
    IF @@TRANCOUNT > 0
      ROLLBACK TRANSACTION;

    PRINT 'Error encountered: ' + ERROR_MESSAGE();
  END CATCH
END;`,
      examples: [
        {
          title: "T-SQL CTE and Ranking Window Function",
          code: `WITH RankedStudents AS (
  SELECT 
    StudentName, 
    Department, 
    GPA,
    DENSE_RANK() OVER (PARTITION BY Department ORDER BY GPA DESC) AS DeptRank
  FROM StudentRecords
)
SELECT * FROM RankedStudents WHERE DeptRank = 1;`
        },
        {
          title: "Creating a Clustered and Non-Clustered Index",
          code: `-- Clustered index controls physical disk order
CREATE CLUSTERED INDEX idx_student_id ON Students(StudentId);

-- Non-clustered index speeds up search on frequent filter
CREATE NONCLUSTERED INDEX idx_student_email ON Students(Email);`
        }
      ],
      practicalExamples: "Designing an enterprise hospital medical records database with Row-Level Security ensuring doctors only see records for patients in their assigned department.",
      realWorldUsage: "Major financial trading firms and insurance giants rely on SQL Server Always On Availability Groups across geographically separated data centers to maintain zero data loss.",
      importantPoints: [
        "Always configure regular Transaction Log backups when using Full Recovery mode; otherwise the log file (.ldf) will grow until disk space is 100% full.",
        "Choose clustered index keys carefully; they should be narrow, unique, unchanging, and monotonically increasing (like IDENTITY).",
        "Use `SET NOCOUNT ON` at the start of stored procedures to eliminate unnecessary network traffic caused by row-count messages."
      ],
      thingsToLearn: [
        "SQL Server architecture and SSMS navigation",
        "T-SQL programming: variables, conditionals, TRY/CATCH, stored procedures, triggers",
        "Clustered vs Non-Clustered indexes and execution plans",
        "Backup recovery models: Simple, Full, Bulk-Logged",
        "Database maintenance plans (Integrity checks, index reorganization)"
      ],
      miniPracticalTasks: [
        "Task 1: Install SSMS, connect to a local SQL Server instance, and create a sample database.",
        "Task 2: Write a T-SQL stored procedure with TRY/CATCH error handling that inserts a record and returns the new ID.",
        "Task 3: View the graphical execution plan of a query in SSMS and locate the Clustered Index Seek."
      ]
    },
    {
      id: "mongodb-nosql",
      name: "MongoDB (NoSQL basics)",
      tagline: "Leading Document-Oriented NoSQL Database for Flexible JSON-Like Data",
      beginnerFriendly: "In traditional SQL, you must define strict table columns first. If you want to add a new column later, it's difficult. MongoDB is like a digital filing cabinet of JSON documents where every document can have different fields whenever needed.",
      whatIsIt: "MongoDB is an open-source, document-oriented NoSQL database system designed for high availability, automatic horizontal scaling (sharding), and developer agility. It stores data as BSON (Binary JSON) documents.",
      whyUsed: "It provides a flexible, schema-free data model ideal for rapid prototyping, modern JavaScript/Node.js stacks (MERN), real-time product catalogs, mobile apps, and hierarchical data.",
      whereUsed: "Coinbase, eBay, Forbes, EA Sports, Adobe, and millions of modern web applications.",
      mainFeatures: [
        "Document-Oriented: Data is stored as JSON/BSON documents in flexible collections.",
        "Rich Query Language: Deep filtering, regex matching, array operations, and geospatial lookups.",
        "Aggregation Pipeline: Multi-stage data processing pipeline (`$match`, `$group`, `$sort`, `$project`).",
        "Horizontal Scalability: Built-in sharding distributes massive datasets across clusters of servers.",
        "Flexible Schema: Documents in the same collection can have varying fields and embedded sub-documents."
      ],
      importantConcepts: [
        {
          title: "BSON (Binary JSON)",
          desc: "Binary-encoded serialization of JSON supporting additional data types like ObjectId, Date, and 64-bit integers."
        },
        {
          title: "Embedding vs Referencing",
          desc: "Embedding places related data directly inside the document (1:1 or 1:few); Referencing stores ObjectIds linking to separate collections (1:many or many:many)."
        },
        {
          title: "Aggregation Pipeline",
          desc: "Data processing framework where documents pass through a sequence of transformation stages similar to Unix pipes."
        },
        {
          title: "Replica Sets",
          desc: "Cluster of MongoDB servers with 1 Primary (handles writes) and multiple Secondaries that replicate data and provide automatic failover."
        }
      ],
      howItWorks: "Applications communicate with MongoDB using native drivers. MongoDB writes documents to memory first and records operations in an append-only journal (`WiredTiger` storage engine), periodically flushing data pages to disk.",
      stepByStep: [
        "Step 1: Install MongoDB Community Edition and MongoDB Compass GUI.",
        "Step 2: Connect via terminal using the `mongosh` shell.",
        "Step 3: Create or select a database (`use careercraft_db`).",
        "Step 4: Insert BSON documents using `db.collection.insertOne()` or `insertMany()`.",
        "Step 5: Write queries with operators like `$gt`, `$in`, and build multi-stage aggregation pipelines."
      ],
      syntax: `// MongoDB Shell (mongosh) CRUD and Aggregation Examples
// 1. Insert Document with Embedded Arrays and Sub-documents
use careercraft_db;

db.students.insertOne({
  name: "Kavita Reddy",
  email: "kavita@college.edu",
  department: "Computer Science",
  enrolledCourses: ["Web Development", "Cloud & DevOps"],
  performance: {
    gpa: 3.85,
    attendancePct: 92
  },
  registeredDate: new Date()
});

// 2. Query with Conditions on Nested Fields and Arrays
db.students.find({
  "performance.gpa": { $gte: 3.5 },
  enrolledCourses: "Web Development"
}).pretty();

// 3. Multi-Stage Aggregation Pipeline
db.students.aggregate([
  // Stage 1: Filter students with GPA >= 3.0
  { $match: { "performance.gpa": { $gte: 3.0 } } },
  
  // Stage 2: Group by department and compute average GPA
  { $group: {
      _id: "$department",
      totalStudents: { $sum: 1 },
      averageGPA: { $avg: "$performance.gpa" }
    }
  },
  
  // Stage 3: Sort by average GPA descending
  { $sort: { averageGPA: -1 } }
]);`,
      examples: [
        {
          title: "Updating Documents with $set and $push",
          code: `// Add a new course to student's enrolled courses array
db.students.updateOne(
  { email: "kavita@college.edu" },
  { 
    $push: { enrolledCourses: "Cyber Security" },
    $set: { "performance.attendancePct": 94 }
  }
);`
        },
        {
          title: "Connecting MongoDB with Mongoose (Node.js)",
          code: `const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true },
  enrolled: { type: Boolean, default: true }
});

const Student = mongoose.model('Student', studentSchema);`
        }
      ],
      practicalExamples: "Designing an e-commerce catalog where products have wildly different specifications (laptops have RAM and CPU, shirts have size and color) without having thousands of NULL columns.",
      realWorldUsage: "EA Sports uses MongoDB to store and update live player stats, inventories, and match achievements for millions of online gamers in real time.",
      importantPoints: [
        "Avoid unbounded array growth inside a single document (MongoDB has a strict 16MB document size limit).",
        "Create indexes on frequently filtered fields (`db.collection.createIndex({ email: 1 })`) to avoid slow COLLSCANs (collection scans).",
        "Remember that MongoDB is NoSQL, but ACID transactions across multiple documents are supported when needed using sessions."
      ],
      thingsToLearn: [
        "JSON vs BSON data formats and ObjectId structure",
        "CRUD operations in mongosh: insert, find, updateOne, deleteOne",
        "Query and projection operators ($eq, $gt, $in, $and, $or, $exists)",
        "Array update operators ($push, $pull, $addToSet)",
        "Aggregation pipeline stages ($match, $group, $sort, $project, $lookup)",
        "Connecting Node.js via Mongoose ORM"
      ],
      miniPracticalTasks: [
        "Task 1: Install MongoDB Compass, connect to `mongodb://localhost:27017`, and create a collection.",
        "Task 2: Insert 3 student documents with an array of skills and write a query to find students who know 'React'.",
        "Task 3: Run an aggregation pipeline that counts total documents grouped by a categorical field."
      ]
    },
    {
      id: "mysql-workbench",
      name: "MySQL Workbench",
      tagline: "Visual Database Architecture, Query Tool, and Server Administration Console",
      beginnerFriendly: "Typing raw SQL commands in a black terminal window can feel intimidating. MySQL Workbench is a friendly visual application with buttons to click, colored query editors, and diagrams showing how tables connect.",
      whatIsIt: "MySQL Workbench is the official graphical client tool developed by Oracle for MySQL. It provides visual database design, SQL development, server administration, user management, and performance monitoring.",
      whyUsed: "It eliminates terminal friction, allows visual entity-relationship modeling (ER diagrams), generates SQL scripts automatically, and displays visual execution plan diagrams.",
      whereUsed: "Standard tool for database developers, system administrators, and university computer science courses.",
      mainFeatures: [
        "SQL Query Editor: Syntax highlighting, auto-complete, multi-result tabs, and CSV/JSON export.",
        "Visual ER Data Modeling: Drag-and-drop table design that forward-engineers into executable SQL scripts.",
        "Server Administration Dashboard: Real-time graphs for CPU load, query traffic, buffer pool hits, and active connections.",
        "User & Privilege Management: Visual interface for creating database accounts and setting granular table permissions.",
        "Data Export and Import: GUI wizard for creating full logical dumps and restoring database snapshots."
      ],
      importantConcepts: [
        {
          title: "Visual ER Diagramming",
          desc: "Creating visual diagrams representing tables, columns, foreign keys, and 1:N or M:N relationships before creating real tables."
        },
        {
          title: "Forward & Reverse Engineering",
          desc: "Forward Engineering turns a visual model into SQL schema; Reverse Engineering imports an existing database into a visual diagram."
        },
        {
          title: "Visual Explain Plan",
          desc: "Color-coded diagram (green = index seek, red = full table scan) illustrating query cost and bottlenecks."
        },
        {
          title: "Data Export Wizard",
          desc: "Exporting database tables directly into Excel CSV files or `.sql` dump archives."
        }
      ],
      howItWorks: "Workbench connects to MySQL servers over TCP port 3306 or via SSH tunnels. It sends standard management SQL commands behind the scenes and translates the outputs into interactive tables and charts.",
      stepByStep: [
        "Step 1: Download and install MySQL Workbench from mysql.com/products/workbench.",
        "Step 2: Click the '+' icon on the home screen to configure a new MySQL connection.",
        "Step 3: Enter host (localhost), port (3306), username (root), and click 'Test Connection'.",
        "Step 4: Open the SQL editor, write queries, and click the yellow lightning bolt icon to execute.",
        "Step 5: Use 'Data Export' in the Navigator sidebar to generate database backups."
      ],
      syntax: `-- Using MySQL Workbench Query Shortcuts
-- Execute current statement under cursor: Ctrl + Enter
-- Format SQL Query: Ctrl + B
-- New Query Tab: Ctrl + T

SELECT 
  TABLE_NAME, 
  TABLE_ROWS, 
  DATA_LENGTH / 1024 / 1024 AS size_in_mb
FROM information_schema.TABLES
WHERE TABLE_SCHEMA = 'careercraft_prod'
ORDER BY DATA_LENGTH DESC;`,
      examples: [
        {
          title: "Using Visual Explain Plan",
          code: `1. Write complex query in query editor tab.
2. Click the 'Explain' icon (looks like an exclamation badge next to the lightning bolt).
3. Inspect the 'Visual Explain' tab:
   - Green boxes indicate fast index lookups.
   - Red boxes indicate dangerous full table scans needing index creation.`
        },
        {
          title: "Exporting Query Results to CSV",
          code: `1. Execute SELECT statement in Workbench.
2. In the Results Grid toolbar, click 'Export'.
3. Choose 'CSV' or 'JSON' and save to your desktop.`
        }
      ],
      practicalExamples: "Designing an entire college database schema visually in Workbench, generating the ER diagram for project documentation, and forward-engineering the schema directly into the production MySQL server.",
      realWorldUsage: "Database administrators at universities and software consultancies use MySQL Workbench daily to monitor database traffic spikes, export audit reports, and tune slow queries.",
      importantPoints: [
        "Workbench enables 'Safe Updates' by default, blocking UPDATE and DELETE queries without a WHERE clause that uses a KEY column.",
        "Use SSH tunneling built into Workbench to connect securely to remote cloud databases without exposing port 3306 to the public internet.",
        "Always review the Forward Engineering script preview before clicking 'Apply' to prevent accidental dropping of existing tables."
      ],
      thingsToLearn: [
        "Configuring local and remote SSH database connections",
        "Query editor features: running selected lines, auto-formatting, snippets",
        "Visual Database Modeling and Forward/Reverse Engineering",
        "Managing database users, roles, and privileges visually",
        "Using Data Export and Data Import tools for backups"
      ],
      miniPracticalTasks: [
        "Task 1: Connect MySQL Workbench to your local server and view the Schemas list.",
        "Task 2: Create an ER diagram with two tables connected by a Foreign Key and forward-engineer it.",
        "Task 3: Execute a SELECT query and export the results grid into a CSV file on your desktop."
      ]
    },
    {
      id: "phpmyadmin",
      name: "phpMyAdmin",
      tagline: "Web-Based Open-Source Administration Interface for MySQL and MariaDB",
      beginnerFriendly: "Unlike software programs you have to download and install on your computer, phpMyAdmin is a website tool. You just open your web browser, enter a URL, and manage your MySQL database from anywhere.",
      whatIsIt: "phpMyAdmin is a free, web-based software tool written in PHP, intended to handle the administration of MySQL and MariaDB over the World Wide Web.",
      whyUsed: "It is bundled with almost every shared web hosting plan (cPanel, XAMPP, WampServer), allowing developers to manage databases from any web browser without installing desktop software.",
      whereUsed: "Web hosting control panels (cPanel, Plesk), PHP/WordPress development stacks, local development bundles (XAMPP, LAMP, MAMP).",
      mainFeatures: [
        "Intuitive Web Interface: Browse databases, tables, views, fields, indexes, and users via browser.",
        "Visual Table Operations: Create, copy, drop, rename, and alter tables through web forms.",
        "Direct SQL Execution: Web-based query window with bookmarking for frequently used queries.",
        "Import and Export: Upload `.sql` or `.csv` files to populate tables or download database dumps.",
        "User Privilege Administration: Create new MySQL users, change passwords, and assign global/database privileges."
      ],
      importantConcepts: [
        {
          title: "Web-Based Architecture",
          desc: "Browser communicates over HTTP/HTTPS with the PHP server, which in turn connects locally to MySQL on port 3306."
        },
        {
          title: "XAMPP / WampServer Integration",
          desc: "Bundled as the default database manager on `http://localhost/phpmyadmin` in local PHP development packages."
        },
        {
          title: "Import File Size Limits",
          desc: "Upload limit is controlled by PHP settings (upload_max_filesize and post_max_size in php.ini); large dumps should be imported via CLI."
        },
        {
          title: "Security & Web Exposure",
          desc: "Publicly accessible phpMyAdmin installations are frequent targets of brute-force bots and should be password protected or restricted by IP."
        }
      ],
      howItWorks: "The browser sends HTTP requests to PHP scripts running on an Apache/Nginx web server. phpMyAdmin translates web interactions into SQL queries, sends them to MySQL via the PHP `mysqli` extension, and formats the output into responsive HTML tables.",
      stepByStep: [
        "Step 1: Install XAMPP on your computer and start Apache and MySQL modules.",
        "Step 2: Open your browser and navigate to `http://localhost/phpmyadmin`.",
        "Step 3: Click 'New' in the left sidebar, enter a database name, and click 'Create'.",
        "Step 4: Use the visual form to define table columns, types, and primary keys.",
        "Step 5: Use the 'Export' tab to download a quick `.sql` backup file to your computer."
      ],
      syntax: `-- Typical SQL Operations Run in the phpMyAdmin SQL Tab
-- 1. Create a quick test table
CREATE TABLE student_feedback (
  id INT AUTO_INCREMENT PRIMARY KEY,
  student_name VARCHAR(100),
  rating INT CHECK (rating BETWEEN 1 AND 5),
  comments TEXT,
  submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. Optimize and repair table
OPTIMIZE TABLE student_feedback;
REPAIR TABLE student_feedback;`,
      examples: [
        {
          title: "Exporting Database via phpMyAdmin Web Interface",
          code: `1. Select target database in the left sidebar.
2. Click the 'Export' tab in the top navigation menu.
3. Choose 'Quick - display only the minimal options' and Format: 'SQL'.
4. Click 'Export' -> browser downloads 'database_name.sql'.`
        },
        {
          title: "Importing a .sql File",
          code: `1. Create new empty database.
2. Click the 'Import' tab.
3. Click 'Choose File' and select your .sql script from computer.
4. Click 'Import' at the bottom of the page.`
        }
      ],
      practicalExamples: "Using phpMyAdmin inside a local XAMPP environment to manage WordPress database tables, resetting admin passwords by generating MD5 hashes, and exporting the site database for cloud migration.",
      realWorldUsage: "Millions of web freelancers and digital agencies rely on phpMyAdmin to deploy client websites and perform rapid database fixes directly inside web hosting cPanels.",
      importantPoints: [
        "Never leave a default phpMyAdmin URL (`/phpmyadmin`) publicly exposed without strong authentication or an IP whitelist.",
        "If an import fails due to 'Maximum execution time exceeded', increase `max_execution_time` and `upload_max_filesize` in `php.ini` or use the command line.",
        "Always confirm before clicking 'Drop' in phpMyAdmin; dropping a table immediately deletes all rows."
      ],
      thingsToLearn: [
        "Navigating phpMyAdmin: databases, tables, structure, browse, SQL, search, insert",
        "Creating tables and setting auto-increment primary keys via web forms",
        "Running raw SQL queries and bookmarking them",
        "Importing and exporting SQL and CSV files",
        "Managing database users and configuring permissions"
      ],
      miniPracticalTasks: [
        "Task 1: Launch XAMPP, open `http://localhost/phpmyadmin`, and create a database named `careercraft_demo`.",
        "Task 2: Create a table visually with 4 columns and insert 2 sample rows using the 'Insert' web form.",
        "Task 3: Export the database as a `.sql` file, drop the database, and re-import it using the 'Import' tab."
      ]
    }
  ],
  practiceTest: {
    categoryTitle: "Database Administration & Engineering",
    totalQuestions: 15,
    instructions: "Answer the following comprehensive database architecture, SQL, and administration questions covering MySQL, PostgreSQL, SQL Server, MongoDB, MySQL Workbench, and phpMyAdmin. Document your answers in your study notebook.",
    questions: [
      {
        id: 1,
        technology: "MySQL",
        question: "Explain the architectural difference between the InnoDB storage engine and the MyISAM storage engine in MySQL. Why is InnoDB considered the industry standard for production systems?"
      },
      {
        id: 2,
        technology: "MySQL",
        question: "What is Master-Slave replication in MySQL? Describe how binary logs (binlogs) and relay logs operate to synchronize transactions from the master server to replica slave servers."
      },
      {
        id: 3,
        technology: "PostgreSQL",
        question: "Explain Multi-Version Concurrency Control (MVCC) in PostgreSQL. How does MVCC allow concurrent read and write operations without readers blocking writers or writers blocking readers?"
      },
      {
        id: 4,
        technology: "PostgreSQL",
        question: "What is the difference between JSON and JSONB data types in PostgreSQL? Under what conditions should a database designer choose JSONB and apply a GIN index?"
      },
      {
        id: 5,
        technology: "PostgreSQL",
        question: "What is the purpose of the 'VACUUM' process in PostgreSQL? What is a 'dead tuple', and what problems occur if the autovacuum daemon is improperly disabled?"
      },
      {
        id: 6,
        technology: "SQL Server",
        question: "Compare a Clustered Index with a Non-Clustered Index in Microsoft SQL Server. Why can a table have only one clustered index, and how does it determine physical disk storage?"
      },
      {
        id: 7,
        technology: "SQL Server",
        question: "Explain the three database recovery models in SQL Server (Simple, Full, Bulk-Logged). Why does a database running under Full Recovery require periodic transaction log backups?"
      },
      {
        id: 8,
        technology: "MongoDB",
        question: "Compare the relational model (tables/rows/columns) with MongoDB's document model (databases/collections/documents). What is BSON, and what advantages does it offer over plain JSON?"
      },
      {
        id: 9,
        technology: "MongoDB",
        question: "Explain the difference between 'Embedding' and 'Referencing' when designing data models in MongoDB. What architectural factors determine whether related data should be embedded or referenced?"
      },
      {
        id: 10,
        technology: "MongoDB",
        question: "Describe MongoDB's Aggregation Pipeline. Explain how the '$match', '$group', and '$sort' pipeline stages process and transform document streams sequentially."
      },
      {
        id: 11,
        technology: "Database Administration",
        question: "Define the four ACID properties (Atomicity, Consistency, Isolation, Durability) and describe a practical banking failure scenario that would occur if each property were violated."
      },
      {
        id: 12,
        technology: "Database Administration",
        question: "Explain the differences between First Normal Form (1NF), Second Normal Form (2NF), and Third Normal Form (3NF). What is a transitive dependency?"
      },
      {
        id: 13,
        technology: "MySQL Workbench",
        question: "Explain the difference between 'Forward Engineering' and 'Reverse Engineering' in MySQL Workbench ER modeling. How does the Visual Explain Plan assist in detecting slow queries?"
      },
      {
        id: 14,
        technology: "phpMyAdmin",
        question: "What are the common causes of import failures (e.g., file size limits or execution timeouts) in phpMyAdmin, and what server configuration parameters in php.ini control these thresholds?"
      },
      {
        id: 15,
        technology: "Database Administration",
        question: "Explain the difference between a Logical Backup (e.g. mysqldump / pg_dump) and a Physical Backup (binary disk snapshots). What are the recovery time and storage tradeoffs of each?"
      }
    ]
  }
};
