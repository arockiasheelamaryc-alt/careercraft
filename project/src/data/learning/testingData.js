// Learning Path Data for Category 7: Software Testing & QA
export const testingData = {
  id: "software-testing",
  title: "Testing / QA",
  icon: "🧪",
  role: "QA Tester / Software Test Engineer",
  summary: "Master manual testing methodologies, Selenium WebDriver automation, Postman API testing, professional test case writing, bug lifecycle tracking, and test scripting in Java/Python.",
  technologies: [
    {
      id: "manual-testing",
      name: "Manual Testing",
      tagline: "Foundational Software Verification, Validation, and Defect Discovery",
      beginnerFriendly: "Think of a Manual Tester like an automobile crash test expert or food quality inspector. Before customers taste the dish or drive the car, the tester checks every door, button, and edge case to guarantee it is safe and delicious.",
      whatIsIt: "Manual Testing is the process of manually executing test cases on software applications without using automation tools, to identify defects, bugs, usability issues, and verify that software meets specified business requirements.",
      whyUsed: "Automated scripts can only test what they were programmed to test. Human testers provide critical visual intuition, exploratory testing, UX evaluation, and subjective feedback on user experience.",
      whereUsed: "Standard phase across every software release cycle in banking, e-commerce, gaming, healthcare, and enterprise applications.",
      mainFeatures: [
        "Software Testing Life Cycle (STLC): Structured phases from Requirement Analysis to Test Closure.",
        "Black Box Testing: Testing software functionality without knowledge of internal code logic.",
        "White Box Testing: Structural testing analyzing internal code paths, branches, and logic.",
        "Testing Types: Functional, Smoke, Sanity, Regression, Usability, Performance, and Security testing.",
        "Defect Life Cycle: Tracking bugs from New -> Assigned -> In Progress -> Fixed -> Retested -> Closed."
      ],
      importantConcepts: [
        {
          title: "Verification vs Validation",
          desc: "Verification asks: 'Are we building the product right?' (static checking of specs/designs). Validation asks: 'Are we building the right product?' (dynamic testing of working software against user needs)."
        },
        {
          title: "Smoke vs Sanity Testing",
          desc: "Smoke testing verifies if the critical, major features of a build work (shallow & broad); Sanity testing verifies specific bug fixes after a build update (deep & narrow)."
        },
        {
          title: "Regression Testing",
          desc: "Re-testing unchanged parts of an application to guarantee that new code additions or bug fixes did not break existing functionality."
        },
        {
          title: "Boundary Value Analysis (BVA)",
          desc: "Black-box technique testing boundary limits of input fields (Min - 1, Min, Min + 1, Max - 1, Max, Max + 1) where bugs cluster."
        }
      ],
      howItWorks: "The manual tester reviews functional specifications, drafts detailed test cases, executes test steps manually against test environments, compares expected results with actual results, logs discrepancy defects in Jira, and performs re-testing after developer fixes.",
      stepByStep: [
        "Step 1: Analyze software requirement documents (SRS / User Stories).",
        "Step 2: Prepare a comprehensive Test Plan and Traceability Matrix.",
        "Step 3: Write detailed Test Cases with clear preconditions, steps, and expected outputs.",
        "Step 4: Execute tests across multiple browsers (Chrome, Safari, Firefox) and mobile devices.",
        "Step 5: Log defects with step-by-step reproduction instructions and screenshots, and conduct regression testing."
      ],
      syntax: `// Standard Test Case Document Format (Conceptual Template)
Test Case ID: TC_LOGIN_001
Test Priority: High / P1
Module: Authentication
Test Title: Verify successful login with valid student credentials
Preconditions: Student account exists and is active in database.

Test Steps:
1. Navigate to Career Craft login page: https://careercraft.com/login
2. Enter valid email "student@college.edu" in the Email input field.
3. Enter valid password "ValidPass2026!" in the Password input field.
4. Click on the "Login" button.

Expected Result:
- System successfully authenticates the user.
- User is redirected to the Student Learning Dashboard.
- Welcome banner displays "Welcome, Student".

Actual Result: As Expected.
Status: PASS (or FAIL / BLOCKED)`,
      examples: [
        {
          title: "Boundary Value Analysis (BVA) for Age Input Field (18 - 60 years)",
          code: `Valid Range: 18 to 60 years
Boundary Test Values:
1. 17 (Just below minimum -> Expect: Error rejected)
2. 18 (Exact minimum -> Expect: Valid accepted)
3. 19 (Just above minimum -> Expect: Valid accepted)
4. 59 (Just below maximum -> Expect: Valid accepted)
5. 60 (Exact maximum -> Expect: Valid accepted)
6. 61 (Just above maximum -> Expect: Error rejected)`
        },
        {
          title: "Equivalence Class Partitioning (ECP)",
          code: `Discount Code Input (Requires 6-letter uppercase code):
- Valid Partition: EXACT 6 uppercase letters ("SUMMER") -> PASS
- Invalid Partition 1: Less than 6 characters ("FALL") -> FAIL
- Invalid Partition 2: More than 6 characters ("WINTER2026") -> FAIL
- Invalid Partition 3: Special characters or lowercase ("sum@12") -> FAIL`
        }
      ],
      practicalExamples: "Testing an online flight booking checkout flow: entering various payment card combinations, testing expired cards, refreshing page during payment processing, and testing mobile viewport responsiveness.",
      realWorldUsage: "QA teams at Amazon manually test hundreds of localized international store features (payment options, currencies, shipping address formats) before holiday shopping spikes.",
      importantPoints: [
        "Always document steps to reproduce a bug so clearly that any developer can replicate it on the first attempt.",
        "Never assume an obvious step is too trivial to write down in a test case.",
        "Distinguish clearly between Severity (impact on application: Critical, Major, Minor) and Priority (urgency of fix: High, Medium, Low)."
      ],
      thingsToLearn: [
        "Software Development Life Cycle (SDLC) vs Software Testing Life Cycle (STLC)",
        "Static testing vs Dynamic testing, Verification vs Validation",
        "Test design techniques: Boundary Value Analysis (BVA), Equivalence Partitioning (ECP)",
        "Testing levels: Unit, Integration, System, Acceptance (UAT)",
        "Defect Life Cycle, severity vs priority, and bug report authoring"
      ],
      miniPracticalTasks: [
        "Task 1: Write 5 positive and 5 negative test cases for an online ATM pin code verification screen.",
        "Task 2: Identify and document 3 visual bugs or UX issues on any public website using a bug report template.",
        "Task 3: Apply Boundary Value Analysis to an input field that accepts exam marks between 0 and 100."
      ]
    },
    {
      id: "selenium-webdriver",
      name: "Selenium WebDriver",
      tagline: "Industry-Standard Browser Automation Framework for End-to-End Testing",
      beginnerFriendly: "Imagine a robotic ghost sitting at your computer, opening Chrome, clicking buttons, typing passwords, and verifying test results 50 times faster than a human ever could. That is Selenium WebDriver.",
      whatIsIt: "Selenium WebDriver is an open-source, automated testing framework used to validate web applications across different browsers and platforms, supporting languages like Java, Python, C#, and JavaScript.",
      whyUsed: "Manually re-testing 500 regression test cases before every software release takes days of human effort. Selenium automates those 500 tests in 10 minutes, running headlessly in CI/CD pipelines.",
      whereUsed: "Automated regression suites, cross-browser web testing, end-to-end verification across thousands of IT companies.",
      mainFeatures: [
        "Cross-Browser Automation: Drives Google Chrome, Mozilla Firefox, Microsoft Edge, and Safari natively.",
        "Robust Locators: Locating elements via ID, Name, ClassName, XPath, and CSS Selectors.",
        "Explicit & Implicit Waits: Synchronizing test actions with modern asynchronous, dynamic React/AJAX elements.",
        "Headless Execution: Running tests without rendering browser GUI to save CPU resources in CI/CD pipelines.",
        "Page Object Model (POM): Design pattern that decouples page UI locators from test logic for high maintainability."
      ],
      importantConcepts: [
        {
          title: "Element Locators (XPath & CSS)",
          desc: "XPath (`//button[@id='submit']`) and CSS Selectors (`button#submit`) used by WebDriver to pinpoint DOM elements."
        },
        {
          title: "Explicit vs Implicit Waits",
          desc: "Implicit wait sets a global poll timeout; Explicit wait (`WebDriverWait` with `ExpectedConditions`) pauses until a specific condition (e.g. elementToBeClickable) is met."
        },
        {
          title: "Page Object Model (POM)",
          desc: "Creating separate classes for each webpage representing its UI elements and actions, so UI changes only require editing one file."
        },
        {
          title: "Headless Browser Mode",
          desc: "Running the browser in the background without opening a visible window on the desktop, ideal for server execution."
        }
      ],
      howItWorks: "Selenium WebDriver communicates with browser-specific drivers (like ChromeDriver or GeckoDriver) using the W3C WebDriver standard JSON protocol. The driver translates commands into browser native automation calls.",
      stepByStep: [
        "Step 1: Set up a Java/Maven or Python project and install Selenium (`pip install selenium`).",
        "Step 2: Initialize WebDriver instance (`driver = webdriver.Chrome()`).",
        "Step 3: Navigate to target URL using `driver.get('https://example.com')`.",
        "Step 4: Locate elements and perform actions (`send_keys()`, `click()`).",
        "Step 5: Assert expected results and quit the browser session with `driver.quit()`."
      ],
      syntax: `# Selenium WebDriver with Python Example
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

# 1. Initialize Chrome in Headless Mode
options = webdriver.ChromeOptions()
options.add_argument("--headless=new")
driver = webdriver.Chrome(options=options)

try:
    # 2. Navigate to Portal
    driver.get("https://careercraft.com/login")
    driver.maximize_window()

    # 3. Explicit Wait for Email input to be visible
    wait = WebDriverWait(driver, 10)
    email_field = wait.until(EC.visibility_of_element_located((By.ID, "email")))
    
    # 4. Perform User Actions
    email_field.send_keys("student@college.edu")
    driver.find_element(By.ID, "password").send_keys("SecurePass2026!")
    driver.find_element(By.XPATH, "//button[@type='submit']").click()

    # 5. Assert Redirection to Learning Dashboard
    dashboard_header = wait.until(
        EC.visibility_of_element_located((By.CLASS_NAME, "cc-hero-title"))
    )
    assert "IT Job Categories" in dashboard_header.text
    print("TEST PASSED: Student login automated successfully.")

finally:
    # Always cleanly terminate browser process
    driver.quit()`,
      examples: [
        {
          title: "Java Selenium WebDriver with TestNG Assertion",
          code: `WebDriver driver = new ChromeDriver();
driver.get("https://careercraft.com");
String title = driver.getTitle();
Assert.assertEquals(title, "Career Craft");
driver.quit();`
        },
        {
          title: "Writing Resilient XPath Locators",
          code: `// Relative XPath using text contains
By registerBtn = By.xpath("//button[contains(text(), 'Start Learning')]");

// Relative XPath using attribute combinations
By activeNavTab = By.xpath("//a[@class='cc-nav-link' and @href='/jobs']");`
        }
      ],
      practicalExamples: "Automating an e-commerce regression suite that logs in, searches for a product, adds it to the shopping cart, inputs shipping details, and verifies that the checkout summary matches expected totals.",
      realWorldUsage: "Leading banks run thousands of Selenium automated test cases overnight across multiple browsers and OS combinations on cloud device farms like BrowserStack and Sauce Labs.",
      importantPoints: [
        "Never use hardcoded `Thread.sleep()` or `time.sleep()`; always use dynamic `WebDriverWait` with Expected Conditions to avoid flaky tests.",
        "Always call `driver.quit()` in a `finally` block or test teardown method to prevent orphaned chromedriver processes from leaking memory.",
        "Prefer CSS Selectors or IDs over absolute XPath locators (`/html/body/div[1]/...`) which break whenever HTML structure slightly changes."
      ],
      thingsToLearn: [
        "Selenium architecture and W3C WebDriver Protocol",
        "Locating strategies: ID, Name, CSS Selectors, Relative XPath",
        "Synchronizations: Implicit Wait vs Explicit Wait (ExpectedConditions)",
        "Handling alerts, dropdowns (Select class), iframes, and multi-window tabs",
        "Implementing the Page Object Model (POM) pattern",
        "Test automation frameworks: TestNG / JUnit (Java) or PyTest (Python)"
      ],
      miniPracticalTasks: [
        "Task 1: Write a script that opens Google, types 'Career Craft Learning', presses Enter, and asserts the page title.",
        "Task 2: Build a script that fills out a student registration form and verifies that a success alert appears.",
        "Task 3: Automate downloading a file and verifying that the file exists on your local disk."
      ]
    },
    {
      id: "postman-api",
      name: "Postman (API Testing)",
      tagline: "The Premier API Platform for Building, Testing, and Automating REST Services",
      beginnerFriendly: "Think of an API like the kitchen order window in a restaurant. Postman is the waiter standing at the window, sending order slips (requests), and inspecting the food plates (JSON responses) to make sure they taste right.",
      whatIsIt: "Postman is an API platform used by developers and QA engineers for designing, building, testing, and iterating on APIs. It allows users to send HTTP requests (GET, POST, PUT, DELETE) and inspect server status codes and JSON payloads.",
      whyUsed: "Testing through the frontend UI is slow and misses hidden server bugs. Postman tests backend business logic directly at the API layer, catching security flaws, broken contracts, and performance regressions early.",
      whereUsed: "Used by over 30 million developers across tech companies to test REST, GraphQL, and WebSocket APIs.",
      mainFeatures: [
        "HTTP Request Builder: Easily craft GET, POST, PUT, PATCH, DELETE requests with headers and query params.",
        "Collections & Environments: Group related endpoints and manage dynamic variables (`{{base_url}}`, `{{token}}`).",
        "Automated Test Scripts: Write JavaScript assertions in the 'Tests' tab to validate response schemas and status codes.",
        "Newman CLI Runner: Command-line companion for executing Postman collections directly inside CI/CD pipelines.",
        "Mock Servers & Documentation: Generate interactive API documentation and mock responses before backend code is built."
      ],
      importantConcepts: [
        {
          title: "HTTP Status Code Families",
          desc: "2xx (Success, 200 OK, 201 Created), 3xx (Redirection), 4xx (Client Error, 400 Bad Request, 401 Unauthorized, 404 Not Found), 5xx (Server Error, 500 Internal Error)."
        },
        {
          title: "Environment Variables",
          desc: "Using dynamic variables like {{baseUrl}} and {{authToken}} to switch seamlessly between Dev, Staging, and Production environments."
        },
        {
          title: "Postman Tests Tab (JavaScript Assertions)",
          desc: "Writing pm.test() blocks using Chai.js assertion syntax to validate response time, status, and JSON schema fields."
        },
        {
          title: "Collection Runner & Data-Driven Testing",
          desc: "Executing dozens of API calls in sequence using an external CSV or JSON file containing multiple test data scenarios."
        }
      ],
      howItWorks: "Postman sends HTTP requests over TCP/IP sockets to the target server API endpoint, parses the returned headers, response time, and body payload, runs the registered JavaScript test assertions, and reports Pass/Fail results.",
      stepByStep: [
        "Step 1: Download and install Postman desktop app from postman.com.",
        "Step 2: Create a new Collection named `Career Craft API Suite`.",
        "Step 3: Create an Environment with variable `baseUrl = http://localhost:5000`.",
        "Step 4: Create a GET request to `{{baseUrl}}/api/students` and click 'Send'.",
        "Step 5: Write JavaScript assertions in the 'Tests' tab and verify test results."
      ],
      syntax: `// Postman JavaScript Test Assertions (Chai.js Syntax)
// 1. Verify Status Code is 200 OK
pm.test("Status code is 200 OK", function () {
    pm.response.to.have.status(200);
});

// 2. Verify Response Time is under 500ms
pm.test("Response time is acceptable (< 500ms)", function () {
    pm.expect(pm.response.responseTime).to.be.below(500);
});

// 3. Verify JSON Payload Structure and Content
pm.test("Validate Student Data Payload", function () {
    const jsonData = pm.response.json();
    
    // Check top-level properties
    pm.expect(jsonData).to.have.property("success", true);
    pm.expect(jsonData.data).to.be.an("array");
    
    // Validate first student object fields
    const firstStudent = jsonData.data[0];
    pm.expect(firstStudent).to.have.property("id");
    pm.expect(firstStudent).to.have.property("name");
    pm.expect(firstStudent).to.have.property("course");
});

// 4. Save Authentication Token to Environment for Next Requests
const token = pm.response.json().token;
if (token) {
    pm.environment.set("jwtToken", token);
}`,
      examples: [
        {
          title: "Executing Collections in CI/CD via Newman CLI",
          code: `# Run Postman collection headlessly from terminal
newman run CareerCraft_Tests.json -e dev_environment.json --reporters cli,html`
        },
        {
          title: "Testing Error Status Codes (400 Bad Request)",
          code: `pm.test("Status code is 400 when missing payload", function () {
    pm.response.to.have.status(400);
    pm.expect(pm.response.json().message).to.eql("Name and course are required");
});`
        }
      ],
      practicalExamples: "Testing an authentication flow where Request #1 logs in with credentials and extracts the JWT bearer token, which is automatically passed in the Authorization header of Requests #2 through #10.",
      realWorldUsage: "Fintech engineering teams at Stripe and PayPal use Postman automated collections to test thousands of payment processing API variations, edge-case tax calculations, and currency conversions daily.",
      importantPoints: [
        "Never hardcode environment URLs (like `https://api.staging.com`) directly into requests; always use variables like `{{baseUrl}}`.",
        "Test for negative conditions (e.g. invalid tokens, missing fields, SQL injection characters in params), not just happy paths.",
        "Use Postman Pre-request Scripts to generate dynamic timestamps or unique random test emails (`Date.now() + '@test.com'`)."
      ],
      thingsToLearn: [
        "HTTP verbs (GET, POST, PUT, PATCH, DELETE) and headers",
        "Understanding JSON payloads, query parameters, and URL path variables",
        "Writing test assertions in JavaScript using pm.expect() and pm.test()",
        "Managing Environment and Global variables across requests",
        "Chaining API requests by extracting response data for downstream calls",
        "Running collections headlessly in CI/CD using the Newman CLI"
      ],
      miniPracticalTasks: [
        "Task 1: Send a GET request to `https://jsonplaceholder.typicode.com/posts` in Postman and assert 200 OK.",
        "Task 2: Send a POST request with a JSON body and verify that status code 201 Created is returned.",
        "Task 3: Write a test asserting that response time is less than 300 milliseconds and the response body is an array."
      ]
    },
    {
      id: "test-case-writing",
      name: "Test Case Writing",
      tagline: "Professional Test Documentation, Traceability, and Defect Reporting",
      beginnerFriendly: "Think of a Test Case like a recipe in a cookbook. It tells anyone exactly what ingredients (preconditions) are needed, what steps to follow, and what the finished dish (expected result) should look like.",
      whatIsIt: "Test Case Writing is the disciplined practice of designing clear, reproducible, step-by-step specifications that guide QA testers and engineers through verifying software features against requirements.",
      whyUsed: "Clear test cases ensure comprehensive test coverage, prevent missed bugs, enable reproducible testing across team members, and serve as legal audit trails for regulatory compliance.",
      whereUsed: "Standard documentation practice across every professional software engineering and quality assurance department.",
      mainFeatures: [
        "Standard Test Case Fields: ID, Title, Description, Preconditions, Steps, Test Data, Expected vs Actual Result, Status.",
        "Requirements Traceability Matrix (RTM): Maps each business requirement directly to its covering test cases.",
        "Positive vs Negative Test Scenarios: Validating normal operation as well as graceful handling of erroneous inputs.",
        "Defect Report Writing: Professional bug reporting with Summary, Severity, Priority, Steps to Reproduce, and Logs.",
        "Test Coverage Metrics: Measuring percentage of requirements validated by executed test cases."
      ],
      importantConcepts: [
        {
          title: "Requirements Traceability Matrix (RTM)",
          desc: "A grid tracking requirements to test cases, ensuring zero requirements are left untested (forward traceability) and no unnecessary tests exist (backward traceability)."
        },
        {
          title: "Positive vs Negative Testing",
          desc: "Positive testing verifies the system works when given valid inputs; Negative testing verifies the system properly rejects invalid inputs and shows friendly errors."
        },
        {
          title: "Reproducibility in Bug Reports",
          desc: "A bug report is useless if developers cannot reproduce it; reproduction steps must be precise, sequential, and deterministic."
        },
        {
          title: "Severity vs Priority",
          desc: "Severity measures technical impact (e.g. system crash = Critical); Priority measures business urgency (e.g. CEO's logo misspelled = High Priority, Low Severity)."
        }
      ],
      howItWorks: "QA engineers analyze user stories from Jira, brainstorm edge cases, write test cases in test management tools (TestRail, Zephyr, or Excel), execute each test step sequentially, and record outcomes.",
      stepByStep: [
        "Step 1: Read the User Story and acceptance criteria carefully.",
        "Step 2: Assign a unique identifier: `TC_<MODULE>_<NUMBER>` (e.g. `TC_CART_003`).",
        "Step 3: Define preconditions clearly (e.g., 'User is logged in with active cart').",
        "Step 4: Write numbered, unambiguous steps using action verbs ('Click', 'Enter', 'Select').",
        "Step 5: Specify the exact expected result and compare with actual result during execution."
      ],
      syntax: `// Professional Bug Report Template
Bug ID: BUG_AUTH_1042
Severity: Critical (Blocker)
Priority: High (P1)
Environment: Windows 11 / Chrome v122 / Staging Server (v2.4.1)

Summary: Clicking "Submit" on Registration page causes 500 Internal Server Error when email contains '+' symbol.

Preconditions:
- User is on registration page: https://staging.careercraft.com/signup

Steps to Reproduce:
1. Enter "Alex Smith" in Full Name field.
2. Enter "alex+test@college.edu" in Email field.
3. Enter "ValidPass2026!" in Password field.
4. Click "Register Now" button.

Expected Result:
- Account created successfully or validation error displayed.

Actual Result:
- Screen freezes for 5 seconds and displays raw "500 Internal Server Error".
- Browser console error: Uncaught SyntaxError in auth-service.js line 45.

Attachments:
- screenshot_error_500.png
- network_har_log.har`,
      examples: [
        {
          title: "Requirements Traceability Matrix (RTM) Grid Example",
          code: `Req ID  | Requirement Description             | Test Case ID   | Execution Status
REQ_01  | User can register with student email| TC_AUTH_001    | PASS
REQ_01  | Password must contain at least 8 char| TC_AUTH_002   | PASS
REQ_02  | User can reset forgotten password   | TC_AUTH_003    | FAIL (BUG_1045)
REQ_03  | User can download PDF study guides  | TC_STUDY_001   | PASS`
        },
        {
          title: "Positive vs Negative Test Case Pair",
          code: `TC_01 (Positive): Enter 10-digit valid phone "9876543210" -> Success
TC_02 (Negative): Enter 9-digit phone "987654321" -> Display: "Phone must be 10 digits"`
        }
      ],
      practicalExamples: "Drafting a complete test suite for an online student exam submission module, covering time expirations, network disconnection recovery, back-button clicks, and score calculation.",
      realWorldUsage: "Aviation, medical device, and banking software teams are legally required by regulators (FDA, FAA, ISO) to maintain meticulous test cases and traceability documentation for every feature.",
      importantPoints: [
        "Avoid vague expected results like 'it works properly'; specify exact expected UI text, status codes, and database updates.",
        "Write test cases so clearly that a new QA tester joining the team tomorrow could execute them without asking questions.",
        "Always attach screenshots, video recordings, or network console logs when logging defect reports."
      ],
      thingsToLearn: [
        "Standard test case structure and industry conventions",
        "Creating Requirements Traceability Matrices (RTM)",
        "Writing positive, negative, and edge-case test scenarios",
        "Authoring high-impact, reproducible bug reports",
        "Using test management tools like TestRail, Zephyr, and Xray"
      ],
      miniPracticalTasks: [
        "Task 1: Write 3 positive and 3 negative test cases for an online password reset feature.",
        "Task 2: Write a detailed bug report for an imaginary bug where a shopping cart price total is calculated incorrectly.",
        "Task 3: Construct a simple Requirements Traceability Matrix matching 4 user requirements to 6 test cases."
      ]
    },
    {
      id: "jira-excel-qa",
      name: "Bug Tracking Tools (Jira / Excel)",
      tagline: "Agile Project Management, Issue Tracking, and Test Metrics Logging",
      beginnerFriendly: "Think of Jira like the mission control board in an airport. It tracks every flight (ticket), whether it is scheduled (To Do), taxiing on the runway (In Progress), or successfully landed (Done).",
      whatIsIt: "Jira is an industry-leading issue and bug tracking software developed by Atlassian, widely used by Agile software teams. Microsoft Excel / Google Sheets are universally used for tabular test matrices and bug logs.",
      whyUsed: "Software projects have hundreds of simultaneous tasks and bugs. Jira centralizes tickets, assigns responsibility to developers, tracks progress on Scrum/Kanban boards, and ensures no defect is forgotten.",
      whereUsed: "Standard across Agile, Scrum, and DevOps software engineering teams globally.",
      mainFeatures: [
        "Jira Issue Types: Bug, Task, Story, Epic, Sub-task.",
        "Agile Boards: Interactive Kanban and Scrum sprint boards with drag-and-drop status columns.",
        "Custom Workflows: Automated state transitions (Open -> In Progress -> Code Review -> QA Testing -> Closed).",
        "Release Roadmaps & Burndown Charts: Tracking team velocity and sprint completion progress.",
        "Excel Test Management: Flexible spreadsheets for RTM tracking, defect metrics, and test execution logs."
      ],
      importantConcepts: [
        {
          title: "The Bug Life Cycle in Jira",
          desc: "New (reported) -> Assigned -> In Progress -> In Review -> Ready for QA -> Closed (or Reopened if fix fails)."
        },
        {
          title: "Scrum vs Kanban Boards",
          desc: "Scrum uses time-boxed 2-week Sprints with sprint backlogs; Kanban uses continuous flow with Work-In-Progress (WIP) limits."
        },
        {
          title: "Epic and User Story Hierarchy",
          desc: "An Epic is a large business initiative broken down into manageable User Stories, which are split into technical Sub-tasks."
        },
        {
          title: "Defect Density Metric",
          desc: "Quality metric calculated as: (Total Defect Count / Module Size in KLOC or Story Points)."
        }
      ],
      howItWorks: "QA testers submit a Bug ticket in Jira detailing the defect. Jira sends automated email/Slack alerts to assigned developers. The ticket moves across swimlanes as developers fix code, until QA validates the fix on staging and marks the ticket Closed.",
      stepByStep: [
        "Step 1: Open Jira and click the '+' or 'Create' button in the navigation bar.",
        "Step 2: Select Project and set Issue Type to 'Bug'.",
        "Step 3: Enter a concise Summary title following the format: `[Module] Description of defect`.",
        "Step 4: Fill in Description with preconditions, steps to reproduce, expected vs actual result, and attach logs.",
        "Step 5: Assign Severity, Priority, Sprint, and Assignee, then click 'Create'."
      ],
      syntax: `// Standard Jira Issue Fields Guide
Project: Career Craft Portal (CCP)
Issue Type: Bug
Summary: [JobsPage] Filter search bar fails to filter categories when input has trailing whitespace
Components: Frontend / React
Fix Version: Release 2.1
Priority: Medium

Description:
*Description:*
When a student types a category name with an extra space at the end (e.g. "Python "), zero categories appear instead of matching "Data Science & AI".

*Steps to Reproduce:*
1. Navigate to /jobs.
2. Type "Python " in the Search Categories input.
3. Observe the cards grid.

*Expected:* Search input should be trimmed before matching.
*Actual:* No categories displayed.`,
      examples: [
        {
          title: "Excel QA Execution Tracking Sheet Columns",
          code: `Columns:
[Test ID] | [Module] | [Test Scenario] | [Tester] | [Date] | [Status: Pass/Fail] | [Jira Bug ID] | [Comments]`
        },
        {
          title: "Calculating Defect Rejection Ratio in Excel",
          code: `Formula:
= (Rejected_Bugs_Count / Total_Bugs_Logged) * 100
# High rejection ratio indicates poor test quality or unclear requirements.`
        }
      ],
      practicalExamples: "Conducting a 2-week sprint QA cycle: running 60 test cases logged in Excel, reporting 8 defects in Jira, attending daily standup meetings, and re-testing resolved Jira tickets before sprint release.",
      realWorldUsage: "Tech companies like Spotify, Airbnb, and Microsoft coordinate thousands of engineers and QA analysts using Jira boards to ship software updates smoothly every week.",
      importantPoints: [
        "Always search Jira before logging a bug to check if another tester has already reported the same issue (prevent duplicate tickets).",
        "Never close a Jira bug ticket until you have personally verified the fix on a clean test environment.",
        "Keep the bug summary short and specific (e.g. 'Login button disabled on Safari' instead of 'Website broken')."
      ],
      thingsToLearn: [
        "Agile Scrum and Kanban fundamentals",
        "Creating and managing Jira tickets: Epics, Stories, Bugs, Tasks",
        "Navigating Jira sprint boards, backlogs, and roadmaps",
        "Tracking defects in Excel with conditional formatting and formulas",
        "Key QA metrics: Defect Density, Defect Leakage, Reopen Rate"
      ],
      miniPracticalTasks: [
        "Task 1: Create a mock Excel spreadsheet tracking 5 test cases with 'PASS' highlighted in green and 'FAIL' in red.",
        "Task 2: Write a complete Jira bug ticket draft for a mobile responsiveness layout bug.",
        "Task 3: Diagram the stages of a Bug Life Cycle from 'New' to 'Closed' and explain when a bug is 'Reopened'."
      ]
    },
    {
      id: "automation-scripting",
      name: "Java / Python Basics for Automation",
      tagline: "Core Scripting Foundations for Building Automated Test Frameworks",
      beginnerFriendly: "You don't need to be a software architect to write test automation scripts. You just need solid programming fundamentals: loops to repeat tests, conditions to check results, and functions to keep scripts clean.",
      whatIsIt: "Java and Python are the two most prevalent programming languages used in QA test automation to drive frameworks like Selenium, Playwright, Appium, and PyTest.",
      whyUsed: "They power automated test frameworks that read data from Excel files, execute browser actions, take failure screenshots, generate HTML test reports, and integrate into CI/CD pipelines.",
      whereUsed: "Automated QA teams worldwide building UI, API, and mobile test automation suites.",
      mainFeatures: [
        "Object-Oriented Testing: Encapsulating page models and reusable test utilities into classes.",
        "File I/O for Test Data: Reading test scenarios from Excel, CSV, and JSON files.",
        "Assertions & Validations: Built-in and third-party assertion libraries (AssertJ, Hamcrest, PyTest assertions).",
        "Exception Handling: Handling NoSuchElementException and TimeoutException gracefully without crashing suites.",
        "Test Framework Integration: JUnit 5 / TestNG for Java, PyTest for Python."
      ],
      importantConcepts: [
        {
          title: "Data-Driven Testing (DDT)",
          desc: "Running the exact same automated test logic against multiple rows of test data loaded from external Excel or CSV files."
        },
        {
          title: "Exception Handling in Automation",
          desc: "Catching NoSuchElementException, StaleElementReferenceException, and taking automated failure screenshots."
        },
        {
          title: "TestNG / PyTest Annotations",
          desc: "Annotations like @Test, @BeforeMethod, @AfterMethod, @DataProvider (Java) or @pytest.fixture (Python) managing test lifecycles."
        },
        {
          title: "Automated Reporting (Allure / ExtentReports)",
          desc: "Generating visual HTML dashboards with pass/fail graphs, execution times, and embedded error screenshots."
        }
      ],
      howItWorks: "The test runner (TestNG or PyTest) reads test annotations, executes setup fixtures (opening the browser), runs the test methods, evaluates assertions, executes teardown fixtures (closing the browser), and outputs an execution summary.",
      stepByStep: [
        "Step 1: Choose your primary automation language (Python or Java).",
        "Step 2: Master variables, conditional statements, loops, lists/arrays, and dictionary/hash maps.",
        "Step 3: Understand Object-Oriented principles (Classes, Methods, Inheritance for BaseTest).",
        "Step 4: Learn exception handling (`try/catch` or `try/except`) to prevent unhandled test suite crashes.",
        "Step 5: Write automated tests using a framework runner like PyTest or TestNG."
      ],
      syntax: `// Java TestNG Automation Script Example
import org.testng.Assert;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

public class CareerCraftLoginTest {
    private MockWebDriver driver;

    @BeforeMethod
    public void setup() {
        // Initialize browser before each test
        driver = new MockWebDriver();
        driver.open("https://careercraft.com/login");
    }

    @Test(priority = 1)
    public void testValidStudentLogin() {
        driver.type("email_field", "student@college.edu");
        driver.type("password_field", "ValidPassword123!");
        driver.click("submit_btn");

        // Assertion
        String currentUrl = driver.getCurrentUrl();
        Assert.assertEquals(currentUrl, "https://careercraft.com/jobs", "URL did not match expected dashboard");
    }

    @AfterMethod
    public void teardown() {
        // Cleanly close browser after each test
        if (driver != null) {
            driver.quit();
        }
    }
}`,
      examples: [
        {
          title: "Python PyTest Script with Parameterized Data-Driven Testing",
          code: `import pytest

# Testing login with multiple invalid credentials
@pytest.mark.parametrize("email, password, expected_error", [
    ("", "password123", "Email is required"),
    ("student@test.com", "", "Password is required"),
    ("invalid_email", "password123", "Invalid email format")
])
def test_invalid_login_validation(email, password, expected_error):
    # Simulated validation function
    error_message = validate_login_inputs(email, password)
    assert error_message == expected_error`
        },
        {
          title: "Taking Failure Screenshot in Selenium on Exception",
          code: `try:
    driver.find_element(By.ID, "dashboard").is_displayed()
except Exception as e:
    driver.save_screenshot("test_failure.png")
    raise e`
        }
      ],
      practicalExamples: "Building a data-driven test framework that reads 100 student exam scores from an Excel sheet using Apache POI (Java) or Pandas (Python), verifies grading logic, and produces an HTML summary report.",
      realWorldUsage: "QA automation engineers at Microsoft and Netflix write maintainable automation frameworks in Python and Java to run tens of thousands of automated checks per commit.",
      importantPoints: [
        "Keep tests independent; one test should never rely on data created by a previous test.",
        "Always use assertions (`Assert.assertEquals` or `assert x == y`) in test methods; a test without an assertion is not testing anything.",
        "Maintain a shared `BaseTest` class for common setup and teardown routines to avoid duplicate code."
      ],
      thingsToLearn: [
        "Core language syntax: loops, conditionals, methods, arrays, collections",
        "Object-Oriented Programming principles applied to test automation",
        "Reading files: CSV, JSON, and Excel (Apache POI or openpyxl)",
        "Writing robust exception handling for test stability",
        "TestNG / PyTest test lifecycles, fixtures, and assertions",
        "Generating visual HTML reports with ExtentReports or Allure"
      ],
      miniPracticalTasks: [
        "Task 1: Write a function in Java or Python that reads data from a CSV file and prints each row.",
        "Task 2: Write a simple PyTest or TestNG test with an assertion verifying that a calculation returns 100.",
        "Task 3: Implement a `try...catch` block that captures an error and prints a friendly custom error message."
      ]
    }
  ],
  practiceTest: {
    categoryTitle: "Software Testing & Quality Assurance",
    totalQuestions: 15,
    instructions: "Answer the following conceptual, methodology, and automation questions covering Software Testing technologies (Manual Testing, Selenium WebDriver, Postman, Test Case Writing, Jira/Excel, Automation Scripting). Record your answers in your study workbook.",
    questions: [
      {
        id: 1,
        technology: "Manual Testing",
        question: "Explain the difference between Verification and Validation in the Software Testing Life Cycle (STLC). Give one practical example of each."
      },
      {
        id: 2,
        technology: "Manual Testing",
        question: "Compare Smoke Testing and Sanity Testing. Under what project conditions is each performed, and how do they differ in scope and depth?"
      },
      {
        id: 3,
        technology: "Manual Testing",
        question: "What is Boundary Value Analysis (BVA)? If an input field accepts an age between 18 and 60, list all the boundary test values a QA tester should evaluate."
      },
      {
        id: 4,
        technology: "Manual Testing",
        question: "What is Regression Testing? Why is regression testing essential whenever developers introduce new code or fix existing bugs?"
      },
      {
        id: 5,
        technology: "Selenium WebDriver",
        question: "Explain the difference between an Implicit Wait and an Explicit Wait in Selenium WebDriver. Why are hardcoded sleep pauses (Thread.sleep) discouraged in automated suites?"
      },
      {
        id: 6,
        technology: "Selenium WebDriver",
        question: "What is the Page Object Model (POM) design pattern in test automation? Explain how POM improves code maintainability and reduces test script duplication."
      },
      {
        id: 7,
        technology: "Selenium WebDriver",
        question: "Compare XPath and CSS Selectors for locating web elements. Why are relative XPaths preferred over absolute XPaths?"
      },
      {
        id: 8,
        technology: "Postman (API Testing)",
        question: "Explain the meaning and typical scenarios for HTTP status codes: 200 OK, 201 Created, 400 Bad Request, 401 Unauthorized, 404 Not Found, and 500 Internal Server Error."
      },
      {
        id: 9,
        technology: "Postman (API Testing)",
        question: "In Postman, how do you extract an authentication token from the response of a login request and pass it dynamically into the Authorization header of subsequent requests?"
      },
      {
        id: 10,
        technology: "Test Case Writing",
        question: "List the standard fields of a professional Test Case specification. What is the difference between positive testing and negative testing?"
      },
      {
        id: 11,
        technology: "Test Case Writing",
        question: "What is a Requirements Traceability Matrix (RTM)? Explain how forward and backward traceability prevent missing test coverage."
      },
      {
        id: 12,
        technology: "Bug Tracking Tools",
        question: "Explain the difference between Defect Severity and Defect Priority. Provide an example of a defect that has High Severity but Low Priority, and vice versa."
      },
      {
        id: 13,
        technology: "Bug Tracking Tools",
        question: "Diagram and explain the stages of the Defect Life Cycle (from New to Closed). Under what circumstances should a bug be transitioned to the 'Reopened' state?"
      },
      {
        id: 14,
        technology: "Automation Scripting",
        question: "What is Data-Driven Testing (DDT)? Explain how test frameworks like TestNG or PyTest run a single automated test method with multiple rows of external test data."
      },
      {
        id: 15,
        technology: "Automation Scripting",
        question: "How should an automated test script handle unexpected exceptions (e.g., element not found)? Why is capturing an automated failure screenshot considered best practice?"
      }
    ]
  }
};
