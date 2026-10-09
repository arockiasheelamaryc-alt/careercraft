// Learning Path Data for Category 3: Data Science & AI
export const dataAiData = {
  id: "data-ai",
  title: "Data Science & AI",
  icon: "🤖",
  role: "Data Analyst / Machine Learning Engineer",
  summary: "Master data wrangling, mathematical computing, statistical modeling, data visualization, and foundational Machine Learning algorithms.",
  technologies: [
    {
      id: "python-data",
      name: "Python",
      tagline: "The Leading Programming Language for Data Analysis, Science, and Machine Learning",
      beginnerFriendly: "Python reads almost like plain English. While other languages force you to write 10 lines of complex syntax to read numbers from a file, Python lets you do it in two clear lines.",
      whatIsIt: "Python is a high-level, interpreted, general-purpose language with extensive numerical and scientific computing libraries. It is universally acknowledged as the primary language for Data Science and Artificial Intelligence.",
      whyUsed: "Python combines extreme developer productivity with an unparalleled scientific ecosystem (NumPy, SciPy, Pandas, TensorFlow, PyTorch).",
      whereUsed: "Used across research institutes, Wall Street hedge funds, tech giants (Google, OpenAI), healthcare diagnostics, and e-commerce recommendation engines.",
      mainFeatures: [
        "Dynamic Typing & Expressive Syntax: Write mathematical computations rapidly with minimal boilerplate.",
        "Rich Standard Library: Built-in math, statistics, file handling, and serialization modules.",
        "Integration Capabilities: Wraps fast C/C++ libraries under the hood for blazing numerical performance.",
        "List Comprehensions & Generators: High-performance data filtering and stream processing.",
        "Vibrant Data Community: Huge ecosystem of open-source packages accessible via pip."
      ],
      importantConcepts: [
        {
          title: "Lists, Dictionaries, and Sets",
          desc: "Key data structures for holding sequences, mapping key-values, and filtering duplicates in datasets."
        },
        {
          title: "List Comprehensions",
          desc: "Compact, pythonic syntax for transforming and filtering lists: [x * 2 for x in data if x > 0]."
        },
        {
          title: "Lambda Functions & Higher Order Functions",
          desc: "Anonymous single-line functions commonly used in data pipelines with map(), filter(), and sorted()."
        },
        {
          title: "File & CSV I/O",
          desc: "Reading and writing files with the `with open(...)` context manager to ensure safe resource cleanup."
        }
      ],
      howItWorks: "Python source files (.py) are compiled into bytecode (.pyc) and executed on the Python Virtual Machine (PVM). For intensive numerical work, packages like NumPy call optimized underlying C/Fortran libraries (BLAS/LAPACK) for hardware acceleration.",
      stepByStep: [
        "Step 1: Install Python 3 via python.org or Anaconda distribution.",
        "Step 2: Learn data types, slicing operations (`data[1:5]`), and string manipulation.",
        "Step 3: Master control structures and write reusable functions with type hints.",
        "Step 4: Use Python virtual environments (`venv`) and install data packages via `pip install numpy pandas`.",
        "Step 5: Write automated data transformation scripts that parse raw JSON/CSV feeds."
      ],
      syntax: `# Python Data Processing Example
import csv

# Reading and filtering student exam records
def get_top_performers(filename, cutoff=85):
    top_students = []
    with open(filename, mode='r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        for row in reader:
            score = float(row['score'])
            if score >= cutoff:
                top_students.append({
                    'name': row['name'],
                    'score': score,
                    'track': row.get('track', 'General')
                })
    return sorted(top_students, key=lambda x: x['score'], reverse=True)

# List Comprehension for data transformation
raw_scores = [65, 82, 94, 71, 88, 59]
scaled_scores = [round(score * 1.05, 1) for score in raw_scores]
print("Scaled Scores:", scaled_scores)`,
      examples: [
        {
          title: "Statistical Summary Helper Function",
          code: `def calculate_stats(numbers):
    if not numbers:
        return None
    n = len(numbers)
    mean = sum(numbers) / n
    variance = sum((x - mean) ** 2 for x in numbers) / n
    std_dev = variance ** 0.5
    return {"count": n, "mean": round(mean, 2), "std_dev": round(std_dev, 2)}

scores = [78, 85, 92, 88, 76, 95]
print(calculate_stats(scores))`
        },
        {
          title: "Handling Missing Data with Default Values",
          code: `user_records = [
    {"name": "Alice", "gpa": 3.8},
    {"name": "Bob", "gpa": None},
    {"name": "Charlie"}
]

# Impute missing GPA with cohort average 3.0
cleaned = [
    {"name": u["name"], "gpa": u.get("gpa") if u.get("gpa") is not None else 3.0}
    for u in user_records
]`
        }
      ],
      practicalExamples: "Processing 50,000 raw sales transaction logs from multiple retail branches, cleaning invalid dates, calculating daily revenue, and exporting an executive summary.",
      realWorldUsage: "Spotify uses Python to analyze millions of streaming patterns, user song skips, and playlist additions to feed its personalized Discover Weekly algorithm.",
      importantPoints: [
        "Avoid using traditional for-loops when operating over huge arrays; use vectorized operations in NumPy/Pandas instead.",
        "Always isolate data science project dependencies using virtual environments (`python -m venv .venv`).",
        "Use descriptive variable names (e.g. `customer_churn_rate` instead of `ccr`) for reproducible analytics."
      ],
      thingsToLearn: [
        "Basic Python syntax, list slicing, dictionary mappings",
        "List comprehensions and lambda expressions",
        "File handling, reading/writing JSON and CSV datasets",
        "Exception handling and defensive coding in data pipelines",
        "Virtual environments and pip package management"
      ],
      miniPracticalTasks: [
        "Task 1: Write a script that calculates the median of a list of numbers without using external libraries.",
        "Task 2: Read a CSV file containing student names and grades, and write a new file containing only passing students.",
        "Task 3: Count the frequency of every unique letter in an input paragraph using a Python dictionary."
      ]
    },
    {
      id: "pandas-numpy",
      name: "Pandas & NumPy",
      tagline: "High-Performance Numerical Computing and Tabular Data Manipulation",
      beginnerFriendly: "NumPy is like a supercharged calculator that can add a million numbers in a millisecond. Pandas is like Microsoft Excel on rocket fuel, letting you filter, merge, and clean massive tables using code.",
      whatIsIt: "NumPy provides support for large multi-dimensional arrays and matrices along with a collection of mathematical functions. Pandas builds on NumPy to provide fast, flexible DataFrames for structured tabular data analysis.",
      whyUsed: "Standard Python lists are slow for millions of items. NumPy arrays store data contiguously in memory for vectorized C-speed performance. Pandas simplifies data cleaning, handling missing values, and merging disparate datasets.",
      whereUsed: "Every data science, quantitative finance, bioinformatics, and machine learning pipeline starts with NumPy and Pandas.",
      mainFeatures: [
        "NumPy ndarray: Fast, memory-efficient homogenous N-dimensional array.",
        "Vectorized Operations: Element-wise mathematical computations without slow Python loops.",
        "Pandas Series & DataFrame: 1D and 2D labeled data structures with intuitive indexing.",
        "Handling Missing Data: Simple detection and imputation (`isna()`, `fillna()`, `dropna()`).",
        "Groupby & Aggregations: Powerful split-apply-combine data summarization operations."
      ],
      importantConcepts: [
        {
          title: "Vectorization & Broadcasting",
          desc: "Performing operations across whole arrays simultaneously and broadcasting different shaped arrays together without manual loops."
        },
        {
          title: "DataFrame Indexing (loc vs iloc)",
          desc: "loc uses label-based indexing; iloc uses integer position-based indexing for selecting rows and columns."
        },
        {
          title: "Missing Value Imputation",
          desc: "Detecting nulls (NaN) and replacing them with column mean, median, mode, or removing corrupt rows."
        },
        {
          title: "Merging & Joining DataFrames",
          desc: "Combining tables using inner, left, right, and outer joins similar to SQL queries using `pd.merge()`."
        }
      ],
      howItWorks: "NumPy stores data in continuous memory blocks with fixed C data types. Pandas wraps these C arrays into labeled Series and DataFrames, offloading heavy mathematical operations to vectorized CPU instructions (SIMD).",
      stepByStep: [
        "Step 1: Install packages via `pip install numpy pandas`.",
        "Step 2: Import conventionally as `import numpy as np` and `import pandas as pd`.",
        "Step 3: Load tabular data from CSV using `df = pd.read_csv('dataset.csv')`.",
        "Step 4: Inspect data shapes, data types, and null counts using `df.info()` and `df.describe()`.",
        "Step 5: Clean null values, filter rows, compute group aggregates, and export clean data via `df.to_csv()`."
      ],
      syntax: `import numpy as np
import pandas as pd

# 1. NumPy Vectorized Computing
prices = np.array([120.0, 450.0, 99.0, 310.0])
tax_rate = 0.18 # 18% tax
total_prices = prices * (1 + tax_rate) # Vectorized multiplication
print("Total Prices:", total_prices)

# 2. Pandas DataFrame Manipulation
data = {
    'StudentID': [101, 102, 103, 104, 105],
    'Name': ['Aarav', 'Diya', 'Kiran', 'Meera', 'Rohan'],
    'Department': ['CSE', 'ECE', 'CSE', 'MECH', 'ECE'],
    'Score': [88, 92, np.nan, 76, 85]
}

df = pd.DataFrame(data)

# Impute missing score with department average or column mean
df['Score'] = df['Score'].fillna(df['Score'].mean())

# Filter CSE students scoring > 80
cse_top = df[(df['Department'] == 'CSE') & (df['Score'] > 80)]
print(cse_top)

# Groupby: Calculate average score per department
dept_summary = df.groupby('Department')['Score'].agg(['count', 'mean']).reset_index()
print(dept_summary)`,
      examples: [
        {
          title: "Detecting and Cleaning Outliers",
          code: `# Identify values beyond 3 standard deviations
mean_val = df['Score'].mean()
std_val = df['Score'].std()
clean_df = df[(df['Score'] >= mean_val - 3 * std_val) & (df['Score'] <= mean_val + 3 * std_val)]`
        },
        {
          title: "Merging Two DataFrames on a Common Key",
          code: `students_df = pd.DataFrame({'id': [1, 2], 'name': ['Ravi', 'Pooja']})
grades_df = pd.DataFrame({'id': [1, 2], 'gpa': [3.7, 3.9]})

merged = pd.merge(students_df, grades_df, on='id', how='inner')
print(merged)`
        }
      ],
      practicalExamples: "Analyzing a 500,000-row e-commerce dataset to identify customer churn patterns, computing customer lifetime value, and imputing missing delivery timestamps.",
      realWorldUsage: "Uber dynamically calculates fare surges based on NumPy array calculations comparing rider demand vectors with driver supply density grids.",
      importantPoints: [
        "Never iterate over DataFrame rows using `for index, row in df.iterrows()` for large datasets; use vectorized column operations which are 100x faster.",
        "Check DataFrame memory usage using `df.memory_usage(deep=True)` and downcast data types (e.g., float64 to float32) for large datasets.",
        "Make copies explicitly (`df.copy()`) when slicing DataFrames to avoid SettingWithCopy warnings."
      ],
      thingsToLearn: [
        "NumPy array creation, indexing, reshaping, and mathematical functions",
        "Pandas Series and DataFrame structures",
        "Data loading and exporting (CSV, Excel, JSON, Parquet)",
        "Data filtering with loc and iloc",
        "Handling missing values and duplicates",
        "Groupby aggregations, pivot tables, and merging DataFrames"
      ],
      miniPracticalTasks: [
        "Task 1: Create a 3x3 NumPy array with random values between 1 and 100 and find its row-wise maximum.",
        "Task 2: Load a sample CSV into Pandas, identify columns with missing values, and replace them with column medians.",
        "Task 3: Group a dataset of employee salaries by department and calculate both average and maximum salary."
      ]
    },
    {
      id: "sql-data",
      name: "SQL",
      tagline: "Structured Query Language for Relational Data Extraction and Business Intelligence",
      beginnerFriendly: "Think of SQL as ordering food from a giant restaurant kitchen. Instead of cooking everything yourself, you tell the kitchen: 'Give me the names and prices of all pizzas with cheese, sorted from cheapest to most expensive.'",
      whatIsIt: "SQL is the universal language used by data analysts, scientists, and engineers to query, aggregate, filter, and extract business data from relational databases.",
      whyUsed: "Enterprise data is rarely stored in static CSV files; it lives in production relational databases. SQL enables data professionals to slice millions of transaction rows directly at the database engine level before loading into Python.",
      whereUsed: "PostgreSQL, MySQL, Google BigQuery, Snowflake, Amazon Redshift, and Microsoft SQL Server across all business industries.",
      mainFeatures: [
        "Declarative Querying: Specify *what* data you need rather than *how* to compute it.",
        "Window Functions: Advanced calculations like ROW_NUMBER(), RANK(), DENSE_RANK(), and moving averages.",
        "Common Table Expressions (CTEs): Modular readable subqueries defined with `WITH`.",
        "Aggregations & Grouping: Computing sums, averages, counts, percentiles, and group distributions.",
        "Relational Joins: Seamlessly unifying customer tables, order logs, product catalogs, and shipping events."
      ],
      importantConcepts: [
        {
          title: "Order of Query Execution",
          desc: "FROM -> WHERE -> GROUP BY -> HAVING -> SELECT -> DISTINCT -> ORDER BY -> LIMIT (crucial for debugging)."
        },
        {
          title: "Window Functions vs GROUP BY",
          desc: "GROUP BY collapses multiple rows into a single summary row; Window Functions perform calculations across row partitions while preserving individual rows."
        },
        {
          title: "INNER vs LEFT JOIN",
          desc: "INNER JOIN preserves only intersecting matches; LEFT JOIN keeps all rows from the primary table even if matches don't exist."
        },
        {
          title: "Common Table Expressions (CTEs)",
          desc: "Temporary result sets defined using WITH that simplify complex nested queries into logical steps."
        }
      ],
      howItWorks: "The database query engine receives the SQL text, parses it into an algebraic expression tree, uses table statistics to find the lowest-cost disk scan path, runs parallel worker threads, and streams back the result tuples.",
      stepByStep: [
        "Step 1: Connect to database via DBeaver, pgAdmin, or Python `sqlalchemy`.",
        "Step 2: Understand the table schema and entity relationships.",
        "Step 3: Filter records using WHERE with comparison operators and wildcards.",
        "Step 4: Group data and compute metrics using COUNT(), SUM(), AVG(), MIN(), MAX().",
        "Step 5: Combine multi-table data using JOINs and use CTEs for multi-step cohort calculations."
      ],
      syntax: `-- Advanced SQL for Data Analysts: Customer Retention Cohort
WITH monthly_sales AS (
  SELECT 
    customer_id,
    DATE_TRUNC('month', order_date) AS order_month,
    SUM(total_amount) AS monthly_spend,
    COUNT(order_id) AS total_orders
  FROM orders
  WHERE status = 'COMPLETED'
  GROUP BY customer_id, DATE_TRUNC('month', order_date)
),
ranked_customers AS (
  SELECT 
    customer_id,
    order_month,
    monthly_spend,
    -- Window function to rank monthly top spenders
    DENSE_RANK() OVER (PARTITION BY order_month ORDER BY monthly_spend DESC) AS spend_rank
  FROM monthly_sales
)
SELECT 
  c.customer_name,
  r.order_month,
  r.monthly_spend,
  r.spend_rank
FROM ranked_customers r
JOIN customers c ON r.customer_id = c.customer_id
WHERE r.spend_rank <= 3
ORDER BY r.order_month DESC, r.spend_rank ASC;`,
      examples: [
        {
          title: "Cumulative Running Total using Window Function",
          code: `SELECT 
  order_date,
  daily_revenue,
  SUM(daily_revenue) OVER (ORDER BY order_date ASC) AS cumulative_revenue
FROM daily_sales_summary;`
        },
        {
          title: "Connecting SQL with Python Pandas",
          code: `import pandas as pd
from sqlalchemy import create_engine

engine = create_engine('postgresql://user:password@localhost:5432/analytics_db')
query = "SELECT department, AVG(salary) as avg_sal FROM employees GROUP BY department"
df = pd.read_sql(query, engine)
print(df)`
        }
      ],
      practicalExamples: "Writing queries to calculate month-over-month revenue growth, customer churn percentage, and identifying repeat buyers versus single-time shoppers.",
      realWorldUsage: "Netflix uses SQL on cloud data warehouses (Presto/Trino on AWS S3) to analyze hundreds of billions of daily streaming events and determine which TV shows to renew.",
      importantPoints: [
        "Never use `SELECT *` in production analytical queries on large tables; select only required columns to reduce network I/O and memory usage.",
        "Understand execution order: you cannot reference a column alias created in `SELECT` within the `WHERE` clause.",
        "Be careful with NULL values when using `NOT IN (subquery)`; if the subquery returns a single NULL, the entire query returns zero results."
      ],
      thingsToLearn: [
        "Basic querying: SELECT, FROM, WHERE, ORDER BY, LIMIT",
        "Aggregations with GROUP BY and filtering with HAVING",
        "All JOIN types: INNER, LEFT, RIGHT, FULL OUTER, SELF JOIN",
        "Window functions: ROW_NUMBER, RANK, LAG, LEAD, SUM OVER",
        "Subqueries, CTEs, and query performance optimization"
      ],
      miniPracticalTasks: [
        "Task 1: Write a query to find the second highest salary from an Employee table.",
        "Task 2: Write a query calculating the running cumulative count of registered students ordered by registration date.",
        "Task 3: Use a LEFT JOIN to find all customers who have never placed an order."
      ]
    },
    {
      id: "matplotlib-powerbi",
      name: "Matplotlib / Power BI",
      tagline: "Data Visualization, Visual Storytelling, and Executive Business Dashboards",
      beginnerFriendly: "Nobody likes reading a dry table with 50,000 numbers. Data visualization turns those numbers into colorful, interactive charts that tell an instant visual story to business leaders.",
      whatIsIt: "Matplotlib is Python's foundational plotting library for creating static, animated, and interactive visualizations. Microsoft Power BI is a premier enterprise Business Intelligence platform for building interactive reporting dashboards.",
      whyUsed: "Humans process visual patterns 60,000 times faster than raw text. Good charts reveal trends, outliers, correlations, and seasonality that remain invisible in spreadsheet rows.",
      whereUsed: "Executive boardrooms, financial reporting, marketing campaign tracking, academic research papers, and public dashboards.",
      mainFeatures: [
        "Matplotlib Figure & Axes: Object-oriented charting control over every pixel, tick mark, and label.",
        "Diverse Chart Types: Line charts, bar graphs, histograms, scatter plots, heatmaps, box plots.",
        "Power BI Interactive Dashboards: Cross-filtering, drill-through reports, and real-time KPI cards.",
        "DAX (Data Analysis Expressions): Formula language in Power BI for custom metrics and time intelligence.",
        "Power Query: Visual ETL tool within Power BI for cleaning and transforming data without writing code."
      ],
      importantConcepts: [
        {
          title: "Visual Hierarchy & Chart Selection",
          desc: "Using the right chart for the data: Line charts for trends over time, Bar charts for comparisons, Scatter plots for correlations, Box plots for distributions."
        },
        {
          title: "Matplotlib Object-Oriented API",
          desc: "Using fig, ax = plt.subplots() rather than state-based plt.plot() for precise multi-chart layout control."
        },
        {
          title: "DAX Measures in Power BI",
          desc: "Dynamic calculated values (e.g., Year-to-Date Sales, Profit Margin %) computed in real time based on active dashboard slicers."
        },
        {
          title: "Color Theory & Accessibility",
          desc: "Choosing color palettes that emphasize important insights and remain legible to colorblind users."
        }
      ],
      howItWorks: "Matplotlib translates numerical array points into vector geometries rendered to screen backends or exported as PNG/PDF. Power BI ingests data into its in-memory VertiPaq tabular engine, linking visual widgets through an interactive relational data model.",
      stepByStep: [
        "Step 1: Install Matplotlib and Seaborn via `pip install matplotlib seaborn`.",
        "Step 2: Create a figure canvas: `fig, ax = plt.subplots(figsize=(10, 6))`.",
        "Step 3: Plot data, add meaningful titles, axis labels, legends, and gridlines.",
        "Step 4: In Power BI, import datasets via Power Query, model relationships, and drag-and-drop visual cards.",
        "Step 5: Write DAX formulas for dynamic business metrics and publish reports to the cloud."
      ],
      syntax: `import matplotlib.pyplot as plt
import numpy as np

# Sample Data: Monthly Student Enrollments
months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
web_dev = [120, 150, 180, 220, 260, 310]
data_ai = [80, 110, 140, 190, 240, 290]

# Object-Oriented Matplotlib Plot
fig, ax = plt.subplots(figsize=(10, 5))

# Plot lines with custom styling
ax.plot(months, web_dev, marker='o', color='#2563eb', linewidth=2.5, label='Web Development')
ax.plot(months, data_ai, marker='s', color='#10b981', linewidth=2.5, linestyle='--', label='Data Science & AI')

# Customizing annotations and labels
ax.set_title('Career Craft Monthly Student Enrollment Trends (2026)', fontsize=14, fontweight='bold', pad=15)
ax.set_xlabel('Month', fontsize=11)
ax.set_ylabel('Active Students Enrolled', fontsize=11)
ax.grid(True, linestyle=':', alpha=0.6)
ax.legend(loc='upper left', frameon=True)

# Annotate highest peak
ax.annotate('Record High', xy=('Jun', 310), xytext=('May', 300),
            arrowprops=dict(facecolor='black', shrink=0.05, width=1, headwidth=6))

plt.tight_layout()
plt.savefig('enrollment_trends.png', dpi=300)
plt.show()`,
      examples: [
        {
          title: "Power BI DAX Calculation for Year-over-Year Growth",
          code: `YoY_Growth_Pct = 
VAR CurrentYearSales = [Total_Sales]
VAR PriorYearSales = CALCULATE([Total_Sales], SAMEPERIODLASTYEAR('Calendar'[Date]))
RETURN
DIVIDE(CurrentYearSales - PriorYearSales, PriorYearSales, 0)`
        },
        {
          title: "Seaborn Correlation Heatmap in Python",
          code: `import seaborn as sns
import matplotlib.pyplot as plt

# Visualizing correlations across numeric features
corr = df[['age', 'gpa', 'study_hours', 'score']].corr()
plt.figure(figsize=(8, 6))
sns.heatmap(corr, annot=True, cmap='coolwarm', fmt='.2f', linewidths=0.5)
plt.title('Feature Correlation Matrix')
plt.show()`
        }
      ],
      practicalExamples: "Designing an interactive university placement dashboard displaying hiring companies, salary distributions across engineering departments, and yearly placement percentages.",
      realWorldUsage: "Healthcare organizations used Power BI dashboards to track COVID-19 vaccine distribution, ICU bed occupancy, and hospital supply chain statuses in real time.",
      importantPoints: [
        "Avoid 3D charts, pie charts with more than 5 slices, and unnecessary visual clutter (chart junk).",
        "Always label your axes clearly with units (e.g. '$ in Millions', 'Time in Seconds').",
        "Ensure dashboard reports are interactive and responsive across both mobile screens and desktop monitors."
      ],
      thingsToLearn: [
        "Matplotlib Figure and Axes hierarchy and subplots",
        "Plot types: line, bar, scatter, histogram, boxplot, heatmap",
        "Seaborn statistical graphics library",
        "Power BI Power Query transformations and data modeling",
        "Power BI DAX formulas (CALCULATE, RELATED, DIVIDE, FILTER)"
      ],
      miniPracticalTasks: [
        "Task 1: Create a bar chart showing the top 5 highest-grossing movies using Matplotlib with formatted data labels.",
        "Task 2: Plot a histogram of student test scores to inspect whether the distribution is bell-shaped (normal).",
        "Task 3: Build a simple Power BI dashboard with a date slicer, a KPI card for total sales, and a bar chart by category."
      ]
    },
    {
      id: "jupyter-notebook",
      name: "Jupyter Notebook",
      tagline: "Interactive Computational Environment for Code, Data, and Documentation",
      beginnerFriendly: "Traditional programs run all at once from top to bottom. A Jupyter Notebook is like a digital lab notebook divided into interactive blocks (cells). You can run one cell, see its graph immediately, and write notes right next to it.",
      whatIsIt: "Jupyter Notebook is an open-source web application that allows you to create and share documents containing live code, equations, visualizations, and narrative markdown text.",
      whyUsed: "It is the standard working environment for data exploration, rapid prototyping, mathematical research, and machine learning experimentation.",
      whereUsed: "Used across university research labs, Kaggle data competitions, Google Colab, and industry data science teams worldwide.",
      mainFeatures: [
        "Interactive Cell Execution: Run individual code cells independently without restarting the entire program.",
        "Rich In-line Outputs: Direct display of pandas tables, charts, audio, video, and HTML widgets.",
        "Markdown & LaTeX Support: Beautiful documentation with formatted text, mathematical formulas ($$E = mc^2$$), and diagrams.",
        "Magic Commands: Built-in shortcuts like `%timeit`, `%matplotlib inline`, and `!pip install`.",
        "Kernel Architecture: Decoupled client-server model supporting Python, R, Julia, and Scala."
      ],
      importantConcepts: [
        {
          title: "Code Cells vs Markdown Cells",
          desc: "Code cells execute Python; Markdown cells render formatted text, headers, lists, links, and LaTeX math equations."
        },
        {
          title: "Execution State & Out-of-Order Execution",
          desc: "Notebook state is held in the active kernel memory. Running cells out of order can cause state discrepancies; always 'Restart & Run All' before publishing."
        },
        {
          title: "Jupyter Magic Commands",
          desc: "Line magics (%time, %timeit) and cell magics (%%writefile, %%bash) provide developer superpowers."
        },
        {
          title: "Exporting Formats",
          desc: "Exporting notebooks cleanly to HTML, PDF, executable Python scripts (.py), or presentation slides."
        }
      ],
      howItWorks: "The browser connects via WebSockets to the local Jupyter Server. When you press Shift+Enter, code from the cell is sent over ZeroMQ to the IPython Kernel, executed in memory, and the results (tables, plots, stdout) are streamed back to the browser.",
      stepByStep: [
        "Step 1: Install Jupyter via `pip install notebook` or install Anaconda.",
        "Step 2: Launch Jupyter from terminal: `jupyter notebook` or open in VS Code with the Jupyter extension.",
        "Step 3: Create a new `.ipynb` notebook file.",
        "Step 4: Use Markdown cells to document project objectives and hypotheses.",
        "Step 5: Write code cells to import data, visualize distributions, and build ML models, executing with `Shift + Enter`."
      ],
      syntax: `# Common Jupyter Magic Commands and Markdown Syntax
# In a Markdown Cell:
# # Exploratory Data Analysis: Housing Prices
# **Hypothesis**: Proximity to public transit positively correlates with property values.
# Equation: $$ Price = \\beta_0 + \\beta_1 \\times Distance + \\epsilon $$

# In a Code Cell:
%matplotlib inline
import time

# Benchmark computation time of an operation
%timeit sum(range(1000000))

# Run terminal shell commands directly inside the notebook
!pip list | grep pandas`,
      examples: [
        {
          title: "Inspecting Execution Times with %%time",
          code: `%%time
# Measures exact execution time of the entire cell
import numpy as np
large_matrix = np.random.rand(2000, 2000)
result = np.dot(large_matrix, large_matrix)`
        },
        {
          title: "Displaying Interactive DataFrames in Jupyter",
          code: `import pandas as pd
# Configure Jupyter to display up to 100 columns without truncation
pd.set_option('display.max_columns', 100)
pd.set_option('display.max_rows', 20)

df = pd.read_csv('customers.csv')
display(df.head()) # Renders a styled HTML table directly`
        }
      ],
      practicalExamples: "Documenting an end-to-end Machine Learning experiment: loading clinical patient data, performing exploratory data analysis, plotting distributions, testing 3 classification models, and displaying confusion matrix charts.",
      realWorldUsage: "Researchers at LIGO used Jupyter Notebooks to process and visualize gravitational wave data from colliding black holes, publishing the notebooks openly for the global scientific community.",
      importantPoints: [
        "Always restart kernel and run all cells (`Kernel -> Restart & Run All`) before sharing your notebook to ensure reproducibility.",
        "Avoid leaving giant intermediate outputs (like printing 100,000 raw lines) which bloat notebook file sizes.",
        "Keep notebooks organized into logical chapters: Data Ingestion, Cleaning, Exploration, Modeling, Conclusions."
      ],
      thingsToLearn: [
        "Jupyter keyboard shortcuts (Shift+Enter, Esc, B, A, DD, M, Y)",
        "Markdown syntax, tables, and LaTeX math formatting",
        "Using line and cell magic commands",
        "Managing kernels, installing packages within notebooks",
        "Using Google Colab for cloud GPU acceleration"
      ],
      miniPracticalTasks: [
        "Task 1: Create a notebook, write an introductory Markdown cell with math formulas, and execute a Python cell below it.",
        "Task 2: Use `%timeit` to compare the execution speed of a Python list comprehension versus a NumPy vectorized sum.",
        "Task 3: Export a completed notebook to a clean HTML report ready to share with team members."
      ]
    },
    {
      id: "scikit-learn",
      name: "Scikit-Learn Basics",
      tagline: "Foundational Machine Learning Library for Classification, Regression, and Clustering",
      beginnerFriendly: "Imagine teaching a child to recognize fruits by showing them 100 pictures of apples and oranges labeled with their weight and color. Scikit-Learn teaches computers to recognize patterns and make predictions from historical data.",
      whatIsIt: "Scikit-Learn (sklearn) is Python's gold standard open-source library for classical machine learning, built upon NumPy, SciPy, and Matplotlib.",
      whyUsed: "It provides a simple, consistent API across dozens of predictive algorithms (fit, transform, predict), along with comprehensive tools for data preprocessing, cross-validation, and performance evaluation.",
      whereUsed: "Used across predictive analytics, fraud detection, customer churn forecasting, real estate price estimation, and sentiment analysis.",
      mainFeatures: [
        "Supervised Learning: Linear Regression, Logistic Regression, Decision Trees, Random Forests, Support Vector Machines.",
        "Unsupervised Learning: K-Means clustering, PCA (Principal Component Analysis).",
        "Consistent API Design: Estimator (`fit()`), Transformer (`transform()`), Predictor (`predict()`).",
        "Model Preprocessing: StandardScaler, OneHotEncoder, train_test_split, SimpleImputer.",
        "Evaluation Metrics: Accuracy, Precision, Recall, F1-Score, ROC-AUC, Mean Squared Error (MSE)."
      ],
      importantConcepts: [
        {
          title: "Supervised vs Unsupervised Learning",
          desc: "Supervised algorithms train on labeled features (X) with known targets (y). Unsupervised algorithms discover hidden groupings in unlabeled data (X)."
        },
        {
          title: "Train / Test Split",
          desc: "Splitting data (typically 80% train, 20% test) to validate model performance on unseen data and prevent data leakage."
        },
        {
          title: "Overfitting vs Underfitting",
          desc: "Overfitting occurs when a model memorizes training noise and fails on new data; Underfitting occurs when a model is too simplistic to capture real patterns."
        },
        {
          title: "Feature Scaling & Encoding",
          desc: "Standardizing numerical features to zero mean / unit variance, and converting categorical strings into one-hot binary columns."
        }
      ],
      howItWorks: "The algorithm minimizes a mathematical loss function (such as Mean Squared Error for regression or Cross-Entropy for classification) using optimization techniques like gradient descent, tuning internal weights until predictions match training labels.",
      stepByStep: [
        "Step 1: Install Scikit-Learn via `pip install scikit-learn`.",
        "Step 2: Prepare features matrix `X` and target vector `y`.",
        "Step 3: Split into training and testing sets: `X_train, X_test, y_train, y_test = train_test_split(...)`.",
        "Step 4: Scale features using `StandardScaler` and instantiate your model (`model = RandomForestClassifier()`).",
        "Step 5: Train using `model.fit(X_train, y_train)`, evaluate with `model.predict(X_test)`, and print accuracy metrics."
      ],
      syntax: `import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score, classification_report

# Sample Dataset: Student Pass/Fail Prediction
data = {
    'StudyHours': [2.5, 5.1, 3.2, 8.5, 3.5, 1.5, 9.2, 5.5, 8.3, 2.7, 7.7, 5.9],
    'AttendancePct': [60, 80, 65, 95, 70, 50, 98, 85, 92, 62, 90, 82],
    'Passed': [0, 1, 0, 1, 0, 0, 1, 1, 1, 0, 1, 1] # Target
}

df = pd.DataFrame(data)
X = df[['StudyHours', 'AttendancePct']]
y = df['Passed']

# 1. Split Data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.25, random_state=42)

# 2. Scale Features
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

# 3. Initialize and Train Model
classifier = LogisticRegression()
classifier.fit(X_train_scaled, y_train)

# 4. Predict and Evaluate
predictions = classifier.predict(X_test_scaled)
print("Model Accuracy:", accuracy_score(y_test, predictions))
print(classification_report(y_test, predictions))`,
      examples: [
        {
          title: "Linear Regression for House Price Estimation",
          code: `from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error, r2_score

# X: [SquareFootage, Bedrooms], y: Price
regressor = LinearRegression()
regressor.fit(X_train, y_train)
y_pred = regressor.predict(X_test)

print("R^2 Score:", r2_score(y_test, y_pred))
print("RMSE:", mean_squared_error(y_test, y_pred, squared=False))`
        },
        {
          title: "Confusion Matrix Evaluation",
          code: `from sklearn.metrics import confusion_matrix
cm = confusion_matrix(y_test, predictions)
# [[True Negative, False Positive],
#  [False Negative, True Positive]]
print("Confusion Matrix:\n", cm)`
        }
      ],
      practicalExamples: "Building a bank loan approval predictor that evaluates applicant credit score, annual income, debt ratio, and loan amount to forecast probability of default.",
      realWorldUsage: "E-commerce platforms like Amazon and eBay use Scikit-Learn models to categorize millions of newly submitted merchant product listings into correct product categories.",
      importantPoints: [
        "Never fit the scaler on the test set (`scaler.fit_transform(X_test)` is data leakage!); always fit only on `X_train` and just `transform()` on `X_test`.",
        "Accuracy is misleading for imbalanced datasets (e.g. 99% non-fraud vs 1% fraud); use Precision, Recall, and F1-Score instead.",
        "Always set a fixed `random_state` during splits and model training to ensure your experiments are 100% reproducible."
      ],
      thingsToLearn: [
        "Machine learning concepts: features, targets, supervised vs unsupervised",
        "Data splitting, train_test_split, K-Fold cross validation",
        "Preprocessing: StandardScaler, MinMaxScaler, OneHotEncoder, LabelEncoder",
        "Algorithms: Linear Regression, Logistic Regression, Decision Trees, Random Forests",
        "Model evaluation: Confusion Matrix, Precision, Recall, F1-Score, ROC-AUC, MSE"
      ],
      miniPracticalTasks: [
        "Task 1: Train a Linear Regression model on study hours vs exam scores and print the model's slope and intercept.",
        "Task 2: Train a Decision Tree Classifier on the famous Iris dataset and evaluate its classification accuracy.",
        "Task 3: Implement K-Means clustering to segment sample customers into 3 clusters based on income and spending score."
      ]
    },
    {
      id: "excel-data",
      name: "Excel",
      tagline: "Spreadsheet Analytics, Pivot Tables, and Business Financial Modeling",
      beginnerFriendly: "Before opening Python or writing a single line of SQL, 90% of business managers and clients open Excel. It remains the world's most ubiquitous, quick, and accessible business analysis tool.",
      whatIsIt: "Microsoft Excel is a spreadsheet software application featuring calculation capabilities, graphing tools, Pivot Tables, and a macro programming language called Visual Basic for Applications (VBA).",
      whyUsed: "It provides immediate visual feedback, requires zero coding setup, enables rapid data inspection, and is universally understood by business managers and non-technical stakeholders.",
      whereUsed: "Corporate finance, budget planning, audit reports, human resources, sales tracking, and operational inventory management.",
      mainFeatures: [
        "Pivot Tables: Dynamic drag-and-drop tool for slicing, grouping, and summarizing large tables.",
        "Lookup Functions: XLOOKUP (modern), VLOOKUP, INDEX & MATCH for querying related spreadsheets.",
        "Conditional Formatting: Visual heatmaps and highlighting based on cell values and rules.",
        "Data Validation: Restricting user inputs to valid ranges, dropdown lists, or date formats.",
        "What-If Analysis: Goal Seek and Scenario Manager for financial forecasting."
      ],
      importantConcepts: [
        {
          title: "XLOOKUP vs VLOOKUP",
          desc: "VLOOKUP can only search from left to right and breaks if columns are inserted. XLOOKUP searches in any direction, handles missing values cleanly, and defaults to exact match."
        },
        {
          title: "Pivot Tables & Slicers",
          desc: "Summarizing thousands of transactional rows into clean multi-dimensional summary grids with interactive filter buttons."
        },
        {
          title: "Absolute vs Relative Cell Referencing",
          desc: "Relative references (A1) adjust when formulas are copied; Absolute references ($A$1) lock the row and column permanently."
        },
        {
          title: "Logical and Statistical Formulas",
          desc: "SUMIFS, COUNTIFS, AVERAGEIFS, IFERROR, IF/AND/OR for robust conditional calculations."
        }
      ],
      howItWorks: "Excel maintains an in-memory computational dependency graph of all cells. When any cell value changes, Excel recalculates only the specific dependent formulas rather than re-computing the entire workbook.",
      stepByStep: [
        "Step 1: Organize raw data in a tabular layout (headers in row 1, no blank rows, consistent data types).",
        "Step 2: Convert data range into an official Excel Table (`Ctrl + T`) for dynamic formula expansion.",
        "Step 3: Clean data using TRIM, PROPER, and Remove Duplicates tool.",
        "Step 4: Create summary statistics using SUMIFS, COUNTIFS, and XLOOKUP.",
        "Step 5: Insert a Pivot Table with Pivot Charts and interactive Slicers for an executive summary."
      ],
      syntax: `// Essential Excel Formulas Cheat Sheet
// 1. Modern Lookup (XLOOKUP)
=XLOOKUP(E2, A2:A100, B2:B100, "Not Found", 0)

// 2. Multi-Condition Aggregation (SUMIFS)
=SUMIFS(SalesAmount, Department, "CSE", Region, "South")

// 3. Conditional Count (COUNTIFS)
=COUNTIFS(ScoreRange, ">=75", AttendanceRange, ">=85")

// 4. Robust Error Handling with IFERROR
=IFERROR(A2 / B2, 0)

// 5. Text Cleaning
=TRIM(PROPER(A2)) // Strips excess spaces and Capitalizes Each Word`,
      examples: [
        {
          title: "Building an Executive Pivot Table",
          code: `Fields Configuration:
- Rows: Sales Region -> Branch
- Columns: Product Category
- Values: Sum of Revenue, Average of Discount
- Filter / Slicer: Quarter (Q1, Q2, Q3, Q4)`
        },
        {
          title: "Nested IF with AND Condition",
          code: `=IF(AND(Score >= 80, Attendance >= 90), "Honors Distinction", 
  IF(Score >= 50, "Passed", "Needs Improvement"))`
        }
      ],
      practicalExamples: "Creating a monthly student fee collection tracker that highlights overdue payments in red, calculates total collected fees by course using SUMIFS, and provides an interactive dropdown filter.",
      realWorldUsage: "Investment banks and consulting firms (Goldman Sachs, McKinsey) build multi-million dollar merger & acquisition valuation models and discounted cash flow models directly inside Excel.",
      importantPoints: [
        "Always format raw data as an official Excel Table (`Ctrl + T`); this automatically expands formulas down new rows and enables structured references.",
        "Use modern `XLOOKUP` whenever possible instead of legacy `VLOOKUP` to prevent brittle formulas.",
        "Never hardcode static values inside complex formulas; reference dedicated input cells with clear labels."
      ],
      thingsToLearn: [
        "Keyboard shortcuts: Ctrl+T (Table), Alt+H+O+I (Auto-fit), F4 (Lock Reference)",
        "Formulas: SUM, AVERAGE, COUNT, SUMIFS, COUNTIFS, AVERAGEIFS",
        "Lookup formulas: XLOOKUP, VLOOKUP, INDEX & MATCH",
        "Creating and customizing Pivot Tables and Pivot Charts",
        "Conditional formatting, data validation rules, and dropdown lists"
      ],
      miniPracticalTasks: [
        "Task 1: Convert a sample student mark sheet into an official Excel table and calculate total marks using structured references.",
        "Task 2: Use XLOOKUP to automatically populate student department names based on their Student ID from a master lookup table.",
        "Task 3: Build a Pivot Table that displays total sales broken down by region and product category."
      ]
    }
  ],
  practiceTest: {
    categoryTitle: "Data Science & Artificial Intelligence",
    totalQuestions: 15,
    instructions: "Answer the following conceptual and practical questions on Data Science and AI technologies (Python, Pandas & NumPy, SQL, Matplotlib/Power BI, Jupyter Notebook, Scikit-Learn, Excel). Write your detailed answers in your study notes.",
    questions: [
      {
        id: 1,
        technology: "Python",
        question: "Explain the difference between mutable and immutable data types in Python. Give two examples of each and explain how passing a mutable object to a function affects its state."
      },
      {
        id: 2,
        technology: "Python",
        question: "What is a list comprehension in Python? Write a list comprehension that takes a list of integers and returns only the squares of even numbers greater than 10."
      },
      {
        id: 3,
        technology: "Pandas & NumPy",
        question: "Explain why NumPy arrays provide significantly faster mathematical performance than standard Python lists. What is vectorization, and how does it eliminate explicit for-loops?"
      },
      {
        id: 4,
        technology: "Pandas & NumPy",
        question: "Describe the difference between '.loc' and '.iloc' indexing in a Pandas DataFrame. Give a clear example showing when each indexer should be used."
      },
      {
        id: 5,
        technology: "Pandas & NumPy",
        question: "How does Pandas handle missing data (NaN values)? Describe the difference between 'dropna()' and 'fillna()' and discuss strategies for imputing missing numerical values."
      },
      {
        id: 6,
        technology: "SQL",
        question: "What is the logical order of execution of an SQL query? Explain why you cannot filter aggregated values (e.g. SUM or COUNT) inside a WHERE clause."
      },
      {
        id: 7,
        technology: "SQL",
        question: "What are SQL Window Functions? Explain the difference between 'ROW_NUMBER()', 'RANK()', and 'DENSE_RANK()' when handling tied numerical values."
      },
      {
        id: 8,
        technology: "Matplotlib / Power BI",
        question: "Compare the use cases of a Bar Chart, a Line Chart, a Scatter Plot, and a Histogram. Under what data analysis scenario is each chart type appropriate?"
      },
      {
        id: 9,
        technology: "Matplotlib / Power BI",
        question: "In Microsoft Power BI, what is the role of DAX (Data Analysis Expressions)? How does a calculated column differ from a calculated measure?"
      },
      {
        id: 10,
        technology: "Jupyter Notebook",
        question: "What causes the 'out-of-order execution' problem in Jupyter Notebooks? Why is it considered best practice to restart the kernel and run all cells before sharing a notebook?"
      },
      {
        id: 11,
        technology: "Scikit-Learn Basics",
        question: "Explain the fundamental difference between Supervised Learning and Unsupervised Learning. Name two classic algorithms used for each category."
      },
      {
        id: 12,
        technology: "Scikit-Learn Basics",
        question: "What is 'data leakage' in machine learning? Explain why feature scaling (e.g., StandardScaler) must be fit strictly on the training set and only transformed on the test set."
      },
      {
        id: 13,
        technology: "Scikit-Learn Basics",
        question: "What is a Confusion Matrix? Define True Positive, False Positive, True Negative, and False Negative, and explain why Accuracy is insufficient for evaluating imbalanced datasets."
      },
      {
        id: 14,
        technology: "Excel",
        question: "Compare Microsoft Excel's 'XLOOKUP' function with the traditional 'VLOOKUP' function. What major limitations of VLOOKUP does XLOOKUP resolve?"
      },
      {
        id: 15,
        technology: "Excel",
        question: "What is an Excel Pivot Table? Explain how Rows, Columns, Values, and Slicers interact to summarize multidimensional sales data without manual formulas."
      }
    ]
  }
};
