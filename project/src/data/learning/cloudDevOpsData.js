// Learning Path Data for Category 4: Cloud & DevOps
export const cloudDevOpsData = {
  id: "cloud-devops",
  title: "Cloud & DevOps",
  icon: "☁️",
  role: "Cloud Support Associate / Junior DevOps Engineer",
  summary: "Master Linux terminal administration, AWS cloud infrastructure, Docker containerization, CI/CD automated deployment pipelines, and Nginx reverse proxies.",
  technologies: [
    {
      id: "linux-bash",
      name: "Linux / Bash",
      tagline: "Operating System Kernel and Command Line Scripting for Cloud Servers",
      beginnerFriendly: "Windows has a mouse and colorful desktop icons. Linux servers in the cloud don't have screens or mice; you command them entirely by typing powerful text instructions in a terminal.",
      whatIsIt: "Linux is an open-source, Unix-like operating system kernel that powers over 90% of the world's public cloud servers. Bash (Bourne Again SHell) is the command language interpreter executed in the terminal.",
      whyUsed: "Linux offers rock-solid stability, low resource overhead, high security, multi-user permissions, and complete automation via Bash shell scripts.",
      whereUsed: "Virtually all AWS, Azure, and Google Cloud virtual machines, Docker containers, Kubernetes clusters, and internet routers run Linux.",
      mainFeatures: [
        "Unix File Hierarchy: Unified tree structure starting at root (`/`) without Windows drive letters.",
        "File Permissions & Ownership: Strict read, write, and execute permissions (chmod, chown).",
        "Process Management: Monitoring and controlling background services (systemctl, top, ps, kill).",
        "Stream Redirection & Piping: Chaining commands together (`|`) to filter text streams.",
        "Automated Shell Scripting: Automating backups, deployments, and cron job maintenance."
      ],
      importantConcepts: [
        {
          title: "File Permissions (chmod & chown)",
          desc: "Three sets of permissions: User, Group, and Others with Read (4), Write (2), and Execute (1) modes (e.g. chmod 755 script.sh)."
        },
        {
          title: "Pipes & Streams (stdin, stdout, stderr)",
          desc: "Standard streams where stdout of one command becomes stdin of another command (e.g., ps aux | grep node)."
        },
        {
          title: "Package Managers (apt / yum)",
          desc: "Installing, updating, and managing system software and security patches from certified repositories."
        },
        {
          title: "Systemd & Daemon Services",
          desc: "Managing long-running background services using systemctl start, stop, restart, enable, and status."
        }
      ],
      howItWorks: "The user enters a command into the terminal emulator. Bash interprets the command name, locates the binary in the `$PATH` environment variable, makes system calls to the Linux kernel, and prints the result back to standard output.",
      stepByStep: [
        "Step 1: Install WSL (Windows Subsystem for Linux) with Ubuntu on Windows or launch a free EC2 instance.",
        "Step 2: Learn navigation: `pwd` (print working directory), `ls -la` (list files), `cd` (change directory).",
        "Step 3: Master file operations: `mkdir`, `touch`, `cp`, `mv`, `rm -rf`, `cat`, `head`, `tail -f`.",
        "Step 4: Understand permissions: `chmod +x` to make scripts executable, and `chown` to alter ownership.",
        "Step 5: Write automated Bash scripts starting with the shebang `#!/bin/bash`."
      ],
      syntax: `#!/bin/bash
# CareerCraft Automated Server Health & Backup Script

echo "=== System Health Report: $(date) ==="

# Check disk space usage
echo "--- Disk Space ---"
df -h | grep '^/dev/'

# Check memory utilization
echo "--- Memory Usage ---"
free -m

# Create automated compressed backup of web directory
BACKUP_DIR="/var/backups"
SOURCE_DIR="/var/www/careercraft"
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
ARCHIVE_NAME="backup_$TIMESTAMP.tar.gz"

mkdir -p "$BACKUP_DIR"
tar -czf "$BACKUP_DIR/$ARCHIVE_NAME" "$SOURCE_DIR" 2>/dev/null

if [ $? -eq 0 ]; then
  echo "Backup successfully created at $BACKUP_DIR/$ARCHIVE_NAME"
else
  echo "Backup failed!" >&2
fi`,
      examples: [
        {
          title: "Searching Log Files with grep and tail",
          code: `# Search for error lines in real-time server logs
tail -f /var/log/nginx/error.log | grep --line-buffered "404"

# Count how many times an IP address visited the server
cat access.log | awk '{print $1}' | sort | uniq -c | sort -nr | head -n 10`
        },
        {
          title: "Process Control and Port Checking",
          code: `# Check what process is listening on port 5000
sudo lsof -i :5000
# Or using netstat / ss
ss -tulnp | grep :5000

# Kill process gracefully or forcefully
kill -15 <PID> # Graceful
kill -9 <PID>  # Force`
        }
      ],
      practicalExamples: "Setting up a Linux cron job that runs every night at 2:00 AM to rotate server logs, delete temporary cache files older than 7 days, and email a disk usage summary.",
      realWorldUsage: "All 500 of the world's top 500 fastest supercomputers and all major public cloud providers run specialized Linux distributions.",
      importantPoints: [
        "Be extremely cautious with `sudo rm -rf`; in Linux, there is no Recycle Bin, and deleted files are gone permanently.",
        "Always use `systemctl enable <service>` if you want a service (like Nginx or Docker) to automatically start after a server reboot.",
        "Always secure SSH by disabling root login and requiring public/private SSH key pairs instead of plain passwords."
      ],
      thingsToLearn: [
        "File system hierarchy (/etc, /var, /home, /bin, /usr, /root)",
        "Core navigation and file manipulation commands",
        "Permissions model (read, write, execute, numeric representations 755, 644)",
        "Pipes, redirections (> and >>), grep, find, awk, sed",
        "Bash script variables, if/else conditionals, loops, exit codes",
        "SSH remote access and key-based authentication"
      ],
      miniPracticalTasks: [
        "Task 1: Write a Bash script that takes a directory path as an argument and counts total files inside it.",
        "Task 2: Configure a cron job scheduled to echo 'Server active' into a log file every 5 minutes.",
        "Task 3: Create a new user `developer`, generate an SSH key pair, and grant the user sudo privileges."
      ]
    },
    {
      id: "aws-cloud",
      name: "AWS (Amazon Web Services)",
      tagline: "Global Cloud Computing Platform and On-Demand Infrastructure Services",
      beginnerFriendly: "Instead of buying an expensive physical server computer and keeping it in your bedroom with fans running all night, AWS lets you rent virtual computers in Amazon's massive data centers for pennies per hour.",
      whatIsIt: "Amazon Web Services (AWS) is the world's most comprehensive and broadly adopted cloud platform, offering over 200 fully featured services from data centers globally.",
      whyUsed: "Elasticity and pay-as-you-go pricing: companies can scale from one server to 10,000 servers in minutes during traffic surges, and turn them off when no longer needed.",
      whereUsed: "Netflix, Airbnb, NASA, Samsung, Epic Games (Fortnite), and thousands of startups host their entire infrastructure on AWS.",
      mainFeatures: [
        "Compute (EC2): Elastic Compute Cloud virtual servers scalable on demand.",
        "Storage (S3): Simple Storage Service providing 99.999999999% durability object storage.",
        "Networking (VPC): Virtual Private Clouds with subnets, route tables, and internet gateways.",
        "Identity & Access (IAM): Granular user roles, permissions, and multi-factor authentication.",
        "Databases (RDS): Managed relational database service for MySQL, PostgreSQL, and Aurora."
      ],
      importantConcepts: [
        {
          title: "Regions & Availability Zones (AZs)",
          desc: "Regions are physical geographic locations worldwide; each Region contains multiple isolated, fault-tolerant Availability Zones."
        },
        {
          title: "IAM Security Best Practices",
          desc: "Never use the AWS root account for daily work; create IAM users with Least Privilege principle and enforce MFA."
        },
        {
          title: "Security Groups & NACLs",
          desc: "Security Groups act as virtual firewalls at the instance level (stateful); NACLs act at the subnet level (stateless)."
        },
        {
          title: "S3 Buckets & Storage Classes",
          desc: "Object storage organized in uniquely named buckets with storage tiers: Standard, Intelligent-Tiering, Glacier (archival)."
        }
      ],
      howItWorks: "AWS uses hardware hypervisors (Nitro system) to slice massive physical data center server racks into virtual instances. Users configure resources via the AWS Management Console, AWS CLI, or Infrastructure as Code (Terraform/CloudFormation).",
      stepByStep: [
        "Step 1: Create an AWS Free Tier account and set up IAM user credentials with MFA.",
        "Step 2: Launch an EC2 virtual machine running Ubuntu, specifying instance type (t2.micro / t3.micro).",
        "Step 3: Configure Security Group to allow inbound traffic on Port 22 (SSH), Port 80 (HTTP), and Port 443 (HTTPS).",
        "Step 4: Connect via SSH using your `.pem` private key file.",
        "Step 5: Create an S3 bucket to store media assets and connect it to your application."
      ],
      syntax: `# AWS CLI Commands Cheat Sheet
# 1. Configure local credentials
aws configure
# Prompts for: Access Key ID, Secret Key, Default region (e.g. us-east-1)

# 2. List all S3 buckets
aws s3 ls

# 3. Upload a folder to S3 bucket
aws s3 sync ./dist s3://careercraft-assets-bucket/ --acl public-read

# 4. Describe running EC2 instances
aws ec2 describe-instances --filters "Name=instance-state-name,Values=running"

# 5. Connect to EC2 via SSH
ssh -i "careercraft-key.pem" ubuntu@ec2-54-210-45-12.compute-1.amazonaws.com`,
      examples: [
        {
          title: "Sample IAM Policy: Read-Only Access to S3",
          code: `{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:Get*",
        "s3:List*"
      ],
      "Resource": "arn:aws:s3:::careercraft-assets-bucket/*"
    }
  ]
}`
        },
        {
          title: "Launching a Web Server via EC2 User Data Script",
          code: `#!/bin/bash
# Automatically executed on first boot
apt-get update -y
apt-get install -y nginx
echo "<h1>Welcome to CareerCraft on AWS EC2</h1>" > /var/www/html/index.html
systemctl start nginx
systemctl enable nginx`
        }
      ],
      practicalExamples: "Deploying a full stack application where the React frontend is hosted on AWS S3 with CloudFront CDN, the Node.js API runs on EC2 behind an Application Load Balancer, and user data is stored in AWS RDS MySQL.",
      realWorldUsage: "Netflix streams petabytes of video content using AWS EC2 auto-scaling groups to dynamically spin up thousands of instances as evening viewers tune in.",
      importantPoints: [
        "Set up an AWS Billing Alarm immediately using AWS CloudWatch to notify you if spending exceeds $5.",
        "Never commit AWS Access Keys or Secret Keys into Git or public code.",
        "Always restrict SSH (Port 22) access in Security Groups to your own IP address rather than `0.0.0.0/0`."
      ],
      thingsToLearn: [
        "AWS Global Infrastructure (Regions, AZs, Edge Locations)",
        "EC2 instance lifecycle, AMIs, instance types, and EBS volumes",
        "S3 bucket policies, versioning, and static website hosting",
        "VPC fundamentals: public vs private subnets, NAT gateways, route tables",
        "IAM policies, roles, groups, and multi-factor authentication"
      ],
      miniPracticalTasks: [
        "Task 1: Launch an EC2 t2.micro Ubuntu instance and SSH into it from your computer.",
        "Task 2: Host a static single-page portfolio website directly on an AWS S3 bucket.",
        "Task 3: Create an IAM role that allows an EC2 instance to read from an S3 bucket without hardcoded credentials."
      ]
    },
    {
      id: "docker-cloud",
      name: "Docker",
      tagline: "Software Containerization Platform for Consistent Development and Deployment",
      beginnerFriendly: "Ever said 'It works on my machine, why does it crash on your server?' Docker packages your application code, operating system files, and libraries into a sealed shipping container that runs identically on any computer.",
      whatIsIt: "Docker is an open-source platform that automates the deployment of applications inside lightweight, portable, self-sufficient containers using OS-level virtualization.",
      whyUsed: "Containers eliminate the 'works on my machine' headache, boot up in seconds (unlike heavy virtual machines), isolate application dependencies, and ensure continuous parity between dev, staging, and production.",
      whereUsed: "Standard modern deployment format across Kubernetes, AWS ECS, Google Cloud Run, and Azure Container Apps.",
      mainFeatures: [
        "Lightweight Isolation: Shares host OS kernel while providing completely isolated user-space environments.",
        "Dockerfile: Simple text blueprint defining how a container image is assembled step-by-step.",
        "Docker Hub: Global registry containing hundreds of thousands of pre-built official images (Node, Python, Postgres).",
        "Docker Compose: Multi-container orchestration tool defined in a clean YAML file.",
        "Volumes & Networks: Persistent data storage outside container lifecycles and virtual container networking."
      ],
      importantConcepts: [
        {
          title: "Images vs Containers",
          desc: "An Image is a read-only template/blueprint (class); a Container is a running, live instance of that image (object)."
        },
        {
          title: "Layer Caching in Dockerfile",
          desc: "Each Dockerfile instruction creates a cached layer. Placing unchanging steps (like dependency installation) before source code accelerates builds."
        },
        {
          title: "Docker Volumes",
          desc: "Containers are stateless and ephemeral; Volumes mount host directories to persist database data when containers restart."
        },
        {
          title: "Multi-Stage Builds",
          desc: "Using separate build and production stages to compile code in one container and copy only the final binary into a tiny production image."
        }
      ],
      howItWorks: "Docker utilizes Linux kernel features: Namespaces (which isolate process IDs, network interfaces, and file mounts) and Cgroups (Control Groups, which throttle CPU and RAM consumption). Containers run directly on the host kernel without the CPU emulation overhead of virtual machines.",
      stepByStep: [
        "Step 1: Install Docker Desktop on Windows/Mac or Docker Engine on Linux.",
        "Step 2: Create a `Dockerfile` in the root of your application project.",
        "Step 3: Define base image (`FROM node:18-alpine`), copy files, install dependencies, and declare start command.",
        "Step 4: Build the image using `docker build -t careercraft-app:1.0 .`.",
        "Step 5: Run the container using `docker run -d -p 5000:5000 careercraft-app:1.0`."
      ],
      syntax: `# Multi-Stage Dockerfile for a Node.js Application
# Stage 1: Build & Dependencies
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Stage 2: Minimal Production Image
FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/src ./src

ENV NODE_ENV=production
ENV PORT=5000
EXPOSE 5000

USER node
CMD ["node", "src/index.js"]`,
      examples: [
        {
          title: "Multi-Container docker-compose.yml File",
          code: `version: '3.8'
services:
  web-app:
    build: .
    ports:
      - "5000:5000"
    environment:
      - DB_HOST=db
      - DB_USER=root
      - DB_PASSWORD=secret
    depends_on:
      - db

  db:
    image: mysql:8.0
    environment:
      MYSQL_ROOT_PASSWORD: secret
      MYSQL_DATABASE: careercraft
    volumes:
      - db_data:/var/lib/mysql

volumes:
  db_data:`
        },
        {
          title: "Essential Docker CLI Commands",
          code: `# List running containers
docker ps

# Stop and remove container
docker stop <container_id>
docker rm <container_id>

# View container logs
docker logs -f <container_id>

# Launch interactive bash terminal inside running container
docker exec -it <container_id> /bin/sh`
        }
      ],
      practicalExamples: "Containerizing a full stack web portal and running both the Node backend and MySQL database locally with a single terminal command: `docker compose up --build`.",
      realWorldUsage: "Spotify runs thousands of microservices encapsulated in Docker containers, allowing disparate teams to deploy updates independently multiple times a day.",
      importantPoints: [
        "Never run container processes as `root` in production; create and switch to an unprivileged user (e.g. `USER node`).",
        "Always use lightweight base images like Alpine Linux (`node:18-alpine` instead of full `node:18`) to minimize security attack surfaces.",
        "Always include a `.dockerignore` file containing `node_modules` and `.git` to prevent bloating build contexts."
      ],
      thingsToLearn: [
        "Containers vs Virtual Machines differences",
        "Writing clean Dockerfiles (FROM, WORKDIR, COPY, RUN, CMD, EXPOSE)",
        "Docker CLI commands: build, run, ps, stop, logs, exec, rm, rmi",
        "Managing persistent storage with Docker Volumes",
        "Orchestrating multi-container systems using Docker Compose"
      ],
      miniPracticalTasks: [
        "Task 1: Write a Dockerfile to package a static HTML website using the official `nginx:alpine` image.",
        "Task 2: Containerize a simple Node or Python application and map port 8080 to access it in your local browser.",
        "Task 3: Create a `docker-compose.yml` that starts a WordPress site connected to a MySQL container."
      ]
    },
    {
      id: "git-github-devops",
      name: "Git & GitHub",
      tagline: "Version Control and Source Code Repository Automation for DevOps Engineers",
      beginnerFriendly: "In DevOps, Git isn't just for saving code; it is the trigger switch. The moment you push code to GitHub, automated robots wake up, run security scans, test your code, and deploy it to cloud servers.",
      whatIsIt: "Git & GitHub provide the source control foundation for 'GitOps' and modern automated software delivery. Every infrastructure definition and deployment script is managed in Git repositories.",
      whyUsed: "It creates a single source of truth for code and infrastructure configurations, provides complete rollback capabilities, and automates approvals via branch protection rules.",
      whereUsed: "Every DevOps and platform engineering team uses Git to version infrastructure, application code, and deployment manifests.",
      mainFeatures: [
        "GitOps Architecture: Managing Kubernetes and cloud infrastructure declaratively in Git repositories.",
        "Branch Protection Policies: Requiring status checks to pass and peer reviews before production deployment.",
        "Release Tagging & Webhooks: Triggering external automation systems upon code push or tag creation.",
        "Repository Secrets: Encrypted storage of cloud deployment credentials (AWS keys, Docker tokens).",
        "CodeQL Security Scanning: Automated vulnerability scanning on pull requests."
      ],
      importantConcepts: [
        {
          title: "Infrastructure as Code (IaC) in Git",
          desc: "Storing Terraform or Ansible code in Git, allowing peer review and history tracking for server infrastructure."
        },
        {
          title: "Webhooks",
          desc: "Automated HTTP POST notifications sent from GitHub to external services (like Jenkins or Slack) when repository events occur."
        },
        {
          title: "Protected Branches",
          desc: "Rules preventing direct pushes to main, enforcing PR approvals and passing automated test suites."
        },
        {
          title: "Trunk-Based Development",
          desc: "DevOps practice where developers merge small, frequent updates into the main trunk rather than long-lived feature branches."
        }
      ],
      howItWorks: "Developers push code to GitHub. GitHub triggers registered webhooks or internal GitHub Actions runners, which execute the deployment scripts defined in `.github/workflows/`.",
      stepByStep: [
        "Step 1: Structure repository with clear directory separations (`/src`, `/infrastructure`, `/.github`).",
        "Step 2: Configure branch protections on the `main` branch.",
        "Step 3: Store cloud credentials securely under `Settings -> Secrets and variables -> Actions`.",
        "Step 4: Write CI/CD automation manifests that listen for code pushes.",
        "Step 5: Use Git tags (`v1.0.1`) to automatically trigger production deployment jobs."
      ],
      syntax: `# DevOps Git Commands: Tagging and Rollbacks
# 1. Tag a release version
git tag -a v1.2.0 -m "Release v1.2.0: includes database index improvements"
git push origin v1.2.0

# 2. Revert a bad commit cleanly in production without rewriting history
git revert <faulty_commit_hash>
git push origin main

# 3. View who modified a specific line in a configuration file
git blame nginx.conf`,
      examples: [
        {
          title: "Automated Release Workflow on Git Tag",
          code: `name: Production Release
on:
  push:
    tags:
      - 'v*'
jobs:
  release:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Build Docker Production Image
        run: docker build -t myapp:\${{ github.ref_name }} .`
        },
        {
          title: "Pre-commit Hook for Secrets Detection (.git/hooks/pre-commit)",
          code: `#!/bin/sh
# Check if developers accidentally staged AWS keys
if git diff --cached | grep -E "AKIA[0-9A-Z]{16}"; then
  echo "ERROR: Attempting to commit AWS Access Key! Aborting commit."
  exit 1
fi`
        }
      ],
      practicalExamples: "Setting up a Git repository where committing changes to `main` automatically triggers automated tests, builds a Docker image, and updates the staging environment.",
      realWorldUsage: "Tech companies practice GitOps with tools like ArgoCD, ensuring that whatever state is committed to Git is automatically synchronized with live Kubernetes clusters.",
      importantPoints: [
        "Never disable branch protection rules to push quick fixes directly to `main` in production.",
        "Never hardcode cloud credentials in Git scripts; use GitHub Secrets or AWS IAM OIDC roles.",
        "Keep commit messages descriptive and link them to issue tracker tickets."
      ],
      thingsToLearn: [
        "Git branching strategies for continuous delivery (Trunk-based vs GitFlow)",
        "Managing GitHub Repository Secrets and environment variables",
        "Configuring branch protection and required status checks",
        "Using Git tags for release management",
        "Automating security scans and pre-commit hooks"
      ],
      miniPracticalTasks: [
        "Task 1: Configure branch protection on a GitHub repository requiring 1 review before merging.",
        "Task 2: Create and push an annotated Git tag `v1.0.0` to GitHub.",
        "Task 3: Set up a repository secret `AWS_ACCOUNT_ID` in your GitHub repository settings."
      ]
    },
    {
      id: "cicd-pipelines",
      name: "CI/CD Pipelines",
      tagline: "Continuous Integration & Continuous Delivery Automation",
      beginnerFriendly: "Think of a car assembly line. Instead of a mechanic manually checking every bolt and painting each door by hand, robotic conveyor belts automatically test the engine, spray the paint, and drive the car out the door.",
      whatIsIt: "CI/CD is a software engineering method that delivers applications to customers frequently by introducing automation into the stages of app development. CI = Continuous Integration; CD = Continuous Delivery or Continuous Deployment.",
      whyUsed: "Manual deployments are error-prone and slow. CI/CD catches bugs within minutes of code being committed, runs automated regression tests, builds Docker images, and deploys to servers seamlessly with zero downtime.",
      whereUsed: "GitHub Actions, GitLab CI/CD, Jenkins, CircleCI, AWS CodePipeline, and ArgoCD across all modern tech companies.",
      mainFeatures: [
        "Continuous Integration (CI): Automatically builds and runs unit/integration tests on every pull request.",
        "Continuous Delivery (CD): Automatically packages code and prepares deployable artifacts for one-click release.",
        "Continuous Deployment (CD): Automatically ships every passing change straight into live production.",
        "Pipeline Stages / Jobs: Modular execution graph (Lint -> Test -> Build -> Deploy).",
        "Zero-Downtime Rollouts: Rolling updates, blue-green deployments, or canary releases."
      ],
      importantConcepts: [
        {
          title: "Continuous Integration (CI)",
          desc: "Developers frequently merge code into a central branch, triggering automated builds and test suites to detect regressions early."
        },
        {
          title: "Continuous Delivery vs Continuous Deployment",
          desc: "Continuous Delivery stops at a staging environment requiring manual approval for production; Continuous Deployment deploys straight to production automatically."
        },
        {
          title: "Blue-Green Deployment",
          desc: "Running two identical environments; new version is deployed to Green and tested, then router switches traffic from Blue to Green instantly."
        },
        {
          title: "Rollback Strategies",
          desc: "Automated mechanisms that detect health check failures in new deployments and revert traffic to the previous stable release."
        }
      ],
      howItWorks: "A Git event (like `git push`) triggers the CI server. The server spins up an ephemeral runner (virtual machine or container), clones the repo, installs dependencies, executes test suites, reports pass/fail back to GitHub, and if successful, triggers cloud deployment scripts.",
      stepByStep: [
        "Step 1: Create a `.github/workflows/` directory in your project repository.",
        "Step 2: Create a YAML file, e.g. `ci-cd.yml`.",
        "Step 3: Define trigger events: `on: [push, pull_request]`.",
        "Step 4: Define jobs with steps: checkout code, setup Node/Python/Java, install packages, run tests.",
        "Step 5: Add a deployment job that deploys the verified artifact to AWS, Vercel, or a Docker registry."
      ],
      syntax: `# Comprehensive GitHub Actions CI/CD Pipeline (.github/workflows/main.yml)
name: CareerCraft CI/CD Pipeline

on:
  push:
    branches: [ "main" ]
  pull_request:
    branches: [ "main" ]

jobs:
  # 1. Continuous Integration (Lint & Test)
  test:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Code
        uses: actions/checkout@v3

      - name: Setup Node.js 18
        uses: actions/setup-node@v3
        with:
          node-version: 18
          cache: 'npm'

      - name: Install Dependencies
        run: npm ci

      - name: Run Linter
        run: npm run lint --if-present

      - name: Run Automated Unit Tests
        run: npm test -- --coverage

  # 2. Continuous Delivery (Build & Docker Push)
  build-and-deploy:
    needs: test
    if: github.ref == 'refs/heads/main' && github.event_name == 'push'
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Code
        uses: actions/checkout@v3

      - name: Log in to Docker Hub
        uses: docker/login-action@v2
        with:
          username: \${{ secrets.DOCKER_USERNAME }}
          password: \${{ secrets.DOCKER_PASSWORD }}

      - name: Build and Push Docker Image
        uses: docker/build-push-action@v4
        with:
          context: .
          push: true
          tags: \${{ secrets.DOCKER_USERNAME }}/careercraft:latest`,
      examples: [
        {
          title: "Multi-Job Dependency in Pipeline",
          code: `jobs:
  lint:
    runs-on: ubuntu-latest
    steps: [...]
  test:
    runs-on: ubuntu-latest
    steps: [...]
  deploy:
    needs: [lint, test] # Runs ONLY if both lint and test succeed
    runs-on: ubuntu-latest
    steps: [...]`
        },
        {
          title: "Slack Notification on Build Failure",
          code: `- name: Notify Slack on Failure
  if: failure()
  uses: rtCamp/action-slack-notify@v2
  env:
    SLACK_WEBHOOK: \${{ secrets.SLACK_WEBHOOK }}
    SLACK_COLOR: '#ff0000'
    SLACK_MESSAGE: 'Production CI/CD build failed on main branch!'`
        }
      ],
      practicalExamples: "Configuring a pipeline that automatically tests a Pull Request, prevents merging if tests fail, and upon merging, builds a Docker image and deploys to an AWS EC2 cluster.",
      realWorldUsage: "Amazon engineers deploy new software updates to production an average of every 11 seconds using automated continuous deployment pipelines.",
      importantPoints: [
        "Never commit code if you know the local tests are failing; breaking the shared main branch blocks the entire team.",
        "Always use `npm ci` instead of `npm install` in CI pipelines to guarantee clean, deterministic builds from package-lock.json.",
        "Ensure pipeline execution times are fast (< 10 minutes) to avoid slowing down developer momentum."
      ],
      thingsToLearn: [
        "Concepts of Continuous Integration, Delivery, and Deployment",
        "Writing GitHub Actions workflows in YAML (triggers, jobs, steps, uses, run)",
        "Using environment secrets safely in pipelines",
        "Artifact caching to speed up pipeline execution",
        "Deployment strategies: In-place, Rolling, Blue-Green, Canary"
      ],
      miniPracticalTasks: [
        "Task 1: Create a GitHub Actions workflow that executes `npm test` on every push to your repository.",
        "Task 2: Add an automated linting step that fails the build if code formatting violations exist.",
        "Task 3: Set up a pipeline step that archives build artifacts (.zip) and makes them downloadable."
      ]
    },
    {
      id: "nginx-servers",
      name: "Nginx / Web Servers",
      tagline: "High-Performance Reverse Proxy, Load Balancer, and Static Web Server",
      beginnerFriendly: "Think of Nginx as the front desk receptionist at a busy hospital. Instead of visitors wandering into operating rooms, the receptionist checks tickets, directs people to the right doctor, and balances queues.",
      whatIsIt: "Nginx (pronounced 'Engine-X') is an open-source, high-performance HTTP web server, reverse proxy, load balancer, and HTTP cache.",
      whyUsed: "It handles tens of thousands of simultaneous connections with low memory usage using an event-driven, asynchronous architecture. It protects backend servers by terminating SSL/TLS certificates and serving static files at lightning speed.",
      whereUsed: "Powers over one-third of the world's top 10 million websites, including Netflix, Cloudflare, WordPress, and Dropbox.",
      mainFeatures: [
        "Reverse Proxy: Forwards client requests to backend Node/Python application servers seamlessly.",
        "Load Balancing: Distributes incoming web traffic across multiple backend servers (Round Robin, Least Connections).",
        "SSL/TLS Termination: Decrypts HTTPS requests at the proxy edge, relieving backend servers of cryptographic CPU load.",
        "High-Speed Static File Serving: Directly serves HTML, CSS, JS, and image files without bothering application servers.",
        "Gzip & Brotli Compression: Compresses assets on the fly to accelerate user page load times."
      ],
      importantConcepts: [
        {
          title: "Forward Proxy vs Reverse Proxy",
          desc: "A Forward Proxy protects clients accessing the internet; a Reverse Proxy protects backend servers from clients."
        },
        {
          title: "Upstream Blocks & Load Balancing",
          desc: "Defining server groups in nginx.conf to distribute requests across multiple backend instances."
        },
        {
          title: "SSL/TLS & Let's Encrypt / Certbot",
          desc: "Enabling HTTPS encryption using free, auto-renewing SSL certificates from Let's Encrypt."
        },
        {
          title: "Location Blocks & Regular Expressions",
          desc: "Routing different URL paths to different services or static directories (e.g. /api/ to Node, / to React static build)."
        }
      ],
      howItWorks: "Unlike Apache which spawns a new thread or process for each incoming request, Nginx uses an asynchronous, non-blocking, event-driven loop with a small number of worker processes that each handle thousands of simultaneous connections.",
      stepByStep: [
        "Step 1: Install Nginx on Ubuntu: `sudo apt update && sudo apt install -y nginx`.",
        "Step 2: Start and enable the service: `sudo systemctl enable --now nginx`.",
        "Step 3: Edit server block configuration under `/etc/nginx/sites-available/default`.",
        "Step 4: Test configuration syntax: `sudo nginx -t`.",
        "Step 5: Reload Nginx without dropping active user connections: `sudo systemctl reload nginx`."
      ],
      syntax: `# Nginx Configuration File: Reverse Proxy & Load Balancer
upstream careercraft_backend {
  # Load balance across two Node.js server instances
  server 127.0.0.1:5001 weight=3;
  server 127.0.0.1:5002;
}

server {
  listen 80;
  server_name careercraft.com www.careercraft.com;

  # Redirect all HTTP traffic to secure HTTPS
  return 301 https://$host$request_uri;
}

server {
  listen 443 ssl http2;
  server_name careercraft.com www.careercraft.com;

  ssl_certificate /etc/letsencrypt/live/careercraft.com/fullchain.pem;
  ssl_certificate_key /etc/letsencrypt/live/careercraft.com/privkey.pem;

  # Serve static React frontend files directly
  root /var/www/careercraft/build;
  index index.html;

  location / {
    try_files $uri $uri/ /index.html;
  }

  # Forward /api requests to backend Node cluster
  location /api/ {
    proxy_pass http://careercraft_backend;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_cache_bypass $http_upgrade;
  }
}`,
      examples: [
        {
          title: "Enabling Gzip Compression in Nginx",
          code: `gzip on;
gzip_vary on;
gzip_min_length 1024;
gzip_proxied expired no-cache no-store private auth;
gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml application/json;
gzip_disable "MSIE [1-6]\\.";`
        },
        {
          title: "Testing and Reloading Nginx Configuration",
          code: `# ALWAYS test syntax before reloading in production!
sudo nginx -t

# Output:
# nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
# nginx: configuration file /etc/nginx/nginx.conf test is successful

# Reload configuration seamlessly
sudo systemctl reload nginx`
        }
      ],
      practicalExamples: "Configuring Nginx on an AWS EC2 instance to serve a compiled React single-page application at `/` and proxy API requests at `/api/` to an internal Node.js Express process running on port 5000.",
      realWorldUsage: "Cloudflare uses a customized Nginx architecture as its global edge reverse proxy to inspect, protect, and cache internet traffic for millions of websites worldwide.",
      importantPoints: [
        "Always run `nginx -t` to test configuration syntax before reloading Nginx; a syntax error in config will prevent Nginx from starting.",
        "Always pass `X-Forwarded-For` and `X-Real-IP` headers in proxy_pass so backend servers know the real client IP address.",
        "For React/Vue Single Page Applications, include `try_files $uri $uri/ /index.html;` to ensure client-side routing works on page refresh."
      ],
      thingsToLearn: [
        "Nginx architecture vs Apache (Event-driven vs Process-driven)",
        "Nginx configuration structure: main, events, http, server, location blocks",
        "Configuring reverse proxy with proxy_pass and proxy headers",
        "Load balancing algorithms: Round Robin, Least Connections, IP Hash",
        "Setting up SSL/TLS with Let's Encrypt Certbot",
        "Configuring caching, gzip compression, and rate limiting"
      ],
      miniPracticalTasks: [
        "Task 1: Install Nginx and configure it to serve a custom HTML page from `/var/www/test/index.html`.",
        "Task 2: Configure a reverse proxy that directs incoming port 80 traffic to an internal app on port 3000.",
        "Task 3: Install Certbot and generate a free SSL certificate for a domain using `sudo certbot --nginx`."
      ]
    }
  ],
  practiceTest: {
    categoryTitle: "Cloud Computing & DevOps",
    totalQuestions: 15,
    instructions: "Answer the following conceptual and infrastructure engineering questions covering Cloud & DevOps technologies (Linux/Bash, AWS, Docker, Git & GitHub, CI/CD Pipelines, Nginx). Write your responses in your study notebook.",
    questions: [
      {
        id: 1,
        technology: "Linux / Bash",
        question: "Explain the Linux file permissions model. What do the numeric values in 'chmod 755 filename' and 'chmod 644 filename' represent for User, Group, and Others?"
      },
      {
        id: 2,
        technology: "Linux / Bash",
        question: "What is the difference between standard output (stdout), standard error (stderr), and standard input (stdin) in Linux? How do you redirect both stdout and stderr into a single log file?"
      },
      {
        id: 3,
        technology: "AWS",
        question: "Describe the AWS Shared Responsibility Model. Which security and operational aspects are managed by AWS, and which aspects remain the customer's responsibility?"
      },
      {
        id: 4,
        technology: "AWS",
        question: "Compare Security Groups and Network Access Control Lists (NACLs) in Amazon VPC. Which one is stateful, and which operates at the subnet level?"
      },
      {
        id: 5,
        technology: "AWS",
        question: "What is an IAM Role in AWS and how does it differ from an IAM User? Why is it considered best practice to attach IAM Roles to EC2 instances rather than storing access keys?"
      },
      {
        id: 6,
        technology: "Docker",
        question: "Explain the architectural difference between a Docker container and a traditional Virtual Machine (VM). Why do containers launch faster and consume fewer system resources?"
      },
      {
        id: 7,
        technology: "Docker",
        question: "What is the difference between a Docker Image and a Docker Container? Explain how the Dockerfile instructions 'RUN', 'CMD', and 'ENTRYPOINT' differ from each other."
      },
      {
        id: 8,
        technology: "Docker",
        question: "What are Docker Volumes and why are they necessary when running stateful applications like relational databases inside containers?"
      },
      {
        id: 9,
        technology: "Docker",
        question: "Explain what a Multi-Stage Build is in Docker. How does it help create significantly smaller and more secure production container images?"
      },
      {
        id: 10,
        technology: "CI/CD Pipelines",
        question: "Explain the difference between Continuous Integration (CI), Continuous Delivery (CD), and Continuous Deployment (CD). What steps typically take place during the CI stage?"
      },
      {
        id: 11,
        technology: "CI/CD Pipelines",
        question: "What is a Blue-Green deployment strategy? How does it enable zero-downtime updates and immediate rollback in the event of an unexpected software crash?"
      },
      {
        id: 12,
        technology: "CI/CD Pipelines",
        question: "In GitHub Actions, what is the role of 'secrets' and why should deployment credentials never be hardcoded into workflow YAML files?"
      },
      {
        id: 13,
        technology: "Nginx / Web Servers",
        question: "What is a Reverse Proxy? Explain three practical benefits of placing an Nginx reverse proxy in front of a Node.js or Python application server."
      },
      {
        id: 14,
        technology: "Nginx / Web Servers",
        question: "What does 'SSL/TLS Termination' mean in Nginx? Why is it beneficial to terminate encrypted HTTPS connections at the proxy layer instead of the application code?"
      },
      {
        id: 15,
        technology: "Nginx / Web Servers",
        question: "Why does refreshing a page on a React single-page application hosted on Nginx often return a 404 error if 'try_files $uri $uri/ /index.html;' is missing from the configuration?"
      }
    ]
  }
};
