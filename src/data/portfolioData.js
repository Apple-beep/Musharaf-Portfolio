export const personalInfo = {
  name: "Musharaf Khan Pathan",
  role: "Software Engineer | CS @ Illinois Tech (graduating 2026)",
  location: "Chicago, IL | F-1 OPT Ready",
  email: "mpathan2work@gmail.com",
  github: "github.com/Apple-beep",
  githubUrl: "https://github.com/Apple-beep",
  linkedIn: "linkedin.com/in/musharaf-khan-pathan",
  linkedInUrl: "https://linkedin.com/in/musharaf-khan-pathan",
  resumeUrl: "/resume.pdf",
  heroStatus: "Available for SWE / Data / AI / security Roles — May 2026",
  heroSummaryLine: "Illinois Tech '26 • GPA 3.8 • Dean's List 6×",
  heroDescription:
    "Building AI, security & full-stack solutions with Python, React & AWS. My projects have served 1K+ users and reduced phishing clicks by 84%.",
};

export const heroTypewriter = [
  "AI resume screeners reducing bias.",
  "security tools blocking 92% of phishing.",
  "iOS apps for visually impaired users.",
  "emergency response systems.",
  "full-stack React + Flask applications.",
  "data pipelines processing 50K+ records.",
];

export const navLinks = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "certifications", label: "Certifications" },
  { id: "testimonials", label: "Testimonials" },
  { id: "contact", label: "Contact" },
];

export const quickCommands = [
  { id: "about", label: "About", hint: "A", type: "scroll", target: "about" },
  { id: "experience", label: "Experience", hint: "E", type: "scroll", target: "experience" },
  { id: "projects", label: "Projects", hint: "P", type: "scroll", target: "projects" },
  { id: "skills", label: "Skills", hint: "S", type: "scroll", target: "skills" },
  { id: "certifications", label: "Certifications", hint: "F", type: "scroll", target: "certifications" },
  { id: "testimonials", label: "Testimonials", hint: "T", type: "scroll", target: "testimonials" },
  { id: "contact", label: "Contact", hint: "C", type: "scroll", target: "contact" },
  {
    id: "resume",
    label: "Download Resume",
    hint: "R",
    type: "url",
    target: "/resume.pdf",
    openInNewTab: true,
  },
  {
    id: "github",
    label: "GitHub Profile",
    hint: "G",
    type: "url",
    target: "https://github.com/Apple-beep",
    openInNewTab: true,
  },
  {
    id: "linkedin",
    label: "LinkedIn Profile",
    hint: "L",
    type: "url",
    target: "https://linkedin.com/in/musharaf-khan-pathan",
    openInNewTab: true,
  },
];

export const experienceData = [
  {
    company: "Colorado Resilience",
    role: "Software Engineer (Full Stack)",
    date: "Oct 2025 – Present",
    location: "Remote",
    type: "Engineering",
    points: [
      "Engineered 10+ ReactJS/JavaScript components from Figma wireframe specs - implementing Redux state management, responsive layouts, and cross-browser compatibility across Chrome, Firefox, Safari, Edge, and Brave, reducing UI bug reports by ~30%.",
      "Built Flask/Python REST APIs from Swagger specifications - configured Keycloak-backed JWT authentication with role-based access control, integrated PostgreSQL for persistent data, and validated all endpoints via Postman, delivering a stateless, scalable auth layer supporting 500+ concurrent users.",
      "Implemented and maintained NIST and CMMC cybersecurity compliance standards across the CI/CD pipeline - contributed to audit-trail features, access-control documentation, and compliance reporting for a regulated production environment, directly supporting the platform's enterprise security posture.",
      "Automated the full CI/CD pipeline using GitHub Actions + AWS (EC2, S3, IAM) and configured VirtualBox/Ubuntu dev environments — cutting manual deployment time from 4 hours to 15 minutes, enabling zero-downtime releases for a distributed team of 8+ engineers.",
    ],
  },
  {
    company: "Illinois Tech",
    role: "Undergraduate Teaching Assistant",
    course: "Systems Programming (C)",
    date: "Aug 2025 – Dec 2025",
    location: "Chicago IL",
    type: "Education",
    points: [
      "Guided 100+ students through CS 351's four signature labs - Data, Bomb, Malloc, and Shell Lab - covering bit-level ops, GDB-based reverse engineering, dynamic memory allocation from scratch, and Unix process control (fork/exec/signals), helping students convert theory into working low-level C systems.",
      "Ran structured debugging clinics for segmentation faults, heap corruption, and buffer overflows - teaching a repeatable triage method (reproduce → isolate → inspect with GDB/objdump/sanitizers) that reduced repeated lab failures and built students' independent debugging confidence.",
      "Graded 500+ submissions using rubrics centered on memory safety, defensive C practices, and performance - reinforcing the security-aware, correctness-first mindset explicitly targeted in CS 351 outcomes.",
    ],
  },
  {
    company: "EcoCAR EV Challenge",
    role: "CAV Team Member",
    date: "Aug 2025 – Dec 2025",
    location: "Chicago IL",
    type: "Automotive",
    points: [
      "Engineered autonomous vehicle systems integrating LiDAR, radar, and camera sensor fusion for lane-keeping and adaptive cruise control, achieving 94% accuracy in object detection under varied weather conditions",
      "Developed path planning algorithms using Python and ROS (Robot Operating System), reducing vehicle response time by 180ms in simulation and real-world testing environments",
      "Implemented V2X (Vehicle-to-Everything) communication protocols enabling real-time vehicle-to-infrastructure data exchange, improving traffic flow prediction accuracy by 23%",
    ],
  },
  {
    company: "Illinois Tech",
    role: "Undergraduate Teaching Assistant",
    course: "Object-Oriented Programming (Java)",
    date: "Jan 2024 – May 2025",
    location: "Chicago IL",
    type: "Education",
    points: [
      "Taught core Java OOP principles - encapsulation, inheritance, polymorphism, and interface design - through live code reviews and guided refactors, building students' ability to design clean, extensible systems from scratch.",
      "Coached students through data structures and algorithm implementations (linked lists, recursion, sorting/searching), helping them reason through design tradeoffs and complexity expected from day-one developers.",
      "Graded 500+ assignments with rubric-driven feedback on correctness, edge-case handling, and documentation style - reinforcing the professional code quality habits central to the CS 115/116 sequence.",
    ],
  },
  {
    company: "The Global Career Accelerator",
    role: "Data Analyst",
    date: "Jan 2025 – May 2025",
    location: "Remote",
    type: "Data",
    points: [
      "Built data visualizations and Tableau dashboards for Intel's Sustainability team - analyzing real-world datasets to surface actionable insights for a 20-person global stakeholder group, reducing manual reporting effort and improving decision-support clarity.",
      "Applied Python (Pandas/NumPy) to analyze 50,000+ records from The Recording Academy's content and audience strategy data - identifying engagement trends and presenting findings in Tableau dashboards aligned with Grammy.com's content goals.",
      "Optimized PostgreSQL queries on production datasets - diagnosed bottlenecks, refactored logic, and cut average query execution time by 20%, improving dashboard load speed and analyst workflow efficiency.",
    ],
  },
  {
    company: "Radical AI",
    role: "AI Engineer",
    date: "Jun 2024 – Aug 2024",
    location: "Remote NYC",
    type: "AI",
    points: [
      "Fine-tuned large language models using OpenAI GPT-4 and Google Gemini APIs to deliver personalized career guidance for 2,500+ users, achieving 89% satisfaction rate through iterative user feedback and model optimization",
      "Implemented ethical AI guardrails including bias detection algorithms, fairness audits, and explainability frameworks, reducing discriminatory outputs by 31% and ensuring transparency across 15 diverse user demographics",
      "Collaborated with cross-functional team of 8 data scientists, ML engineers, and product managers to iterate on AI model performance, reducing career recommendation latency by 240ms and improving match accuracy by 27%",
      "Deployed production-ready AI career coaching chatbot serving 1,200+ queries/day with 87% accuracy in skill-to-role mapping and continuous monitoring for bias mitigation",
    ],
  },
];

export const projectData = [
  {
    id: "01",
    title: "HireLens: AI Resume Screener",
    category: "AI",
    description:
      "Resume screening workspace with explainable AI — ingests job descriptions, ranks candidates, detects hiring bias with counterfactual insights and audit trails.",
    impact: "⚡ Bias detection + fairness audits",
    tech: ["Python", "React", "NLP", "OpenAI API"],
    link: "https://github.com/Apple-beep/hirelens",
    github: "https://github.com/Apple-beep/hirelens",
    featured: true,
  },
  {
    id: "02",
    title: "CheckURL: Phishing Link Scanner",
    category: "Security",
    description:
      "Firefox extension scanning URLs in real-time with green/yellow/red risk indicators. Tested on URLhaus malicious dataset achieving sub-900ms per scan.",
    impact: "⚡ 92% accuracy · 84% fewer dangerous clicks",
    tech: ["JavaScript", "Firefox Extension", "HTML5"],
    link: "https://github.com/Apple-beep/CheckUrl-ext",
    github: "https://github.com/Apple-beep/CheckUrl-ext",
    featured: false,
  },
  {
    id: "03",
    title: "VisionVoice: iOS Accessibility App",
    category: "iOS",
    description:
      "iOS app for visually impaired users with voice-to-text, AI plant care analysis, and on-device ML for offline privacy. WCAG 2.1 AA compliant.",
    impact: "⚡ 95% OCR accuracy · Apple WWDC",
    tech: ["Swift", "SwiftUI", "AVFoundation", "Vision"],
    link: "https://github.com/Apple-beep/Projects",
    github: "https://github.com/Apple-beep/Projects",
    featured: false,
  },
  {
    id: "04",
    title: "Soteria: Smart Emergency Response",
    category: "IoT",
    description:
      "IoT prototype with real-time UI, sensor integration, and automated evacuation guidance for smart occupancy monitoring.",
    impact: "⚡ Reduced emergency response time ~50%",
    tech: ["Python", "ESP32", "IoT", "PoE"],
    link: "https://github.com/poe-iit2",
    github: "https://github.com/poe-iit2",
    featured: false,
  },
  {
    id: "05",
    title: "F1 Database Management System",
    category: "Database",
    description:
      "Full CRUD system with OLAP analytics over Formula 1 racing data. Complex JOIN queries and optimized indexing for high-volume data retrieval.",
    impact: "⚡ 10K+ records with OLAP analytics",
    tech: ["Python", "MySQL", "SQL", "OLAP"],
    link: "https://github.com/Apple-beep/f1-database-management-system",
    github: "https://github.com/Apple-beep/f1-database-management-system",
    featured: false,
  },
  {
    id: "06",
    title: "AI Pathfinding: Greedy & A* Search",
    category: "AI",
    description:
      "Implementation and comparison of Greedy Best-First and A* search algorithms with heuristic optimization for maze and grid traversal.",
    impact: "⚡ ~1000× speedup over brute force",
    tech: ["Python", "AI", "Algorithms"],
    link: "https://github.com/Apple-beep/AI-Pathfinding-Search-Algorithms",
    github: "https://github.com/Apple-beep/AI-Pathfinding-Search-Algorithms",
    featured: false,
  },
];

export const heroSkillBadges = ["Python", "React + Flask", "AI/ML", "AWS", "Swift", "Security"];

export const aboutInfoChips = [
  "📍 Chicago, IL",
  "🎓 Graduating May 2026",
  "💼 F-1 OPT Ready",
];

export const statsData = [
  { label: "GPA", value: 3.8, decimals: 1, suffix: "" },
  { label: "Dean's List", value: 6, decimals: 0, suffix: "×" },
  { label: "Students Mentored", value: 100, decimals: 0, suffix: "+" },
  { label: "Professional Roles", value: 5, decimals: 0, suffix: "" },
];

export const skillsTicker = [
  "Python",
  "JavaScript",
  "TypeScript",
  "Java",
  "Swift",
  "C++",
  "C",
  "Go",
  "SQL",
  "MATLAB",
  "React",
  "Flask",
  "Node.js",
  "Redux",
  "Express",
  "TensorFlow",
  "PyTorch",
  "Scikit-learn",
  "NLP",
  "Computer Vision",
  "Deep Learning",
  "Pandas",
  "NumPy",
  "Matplotlib",
  "Tableau",
  "Data Analysis",
  "AWS (EC2, S3, Lambda)",
  "Azure",
  "Docker",
  "Kubernetes",
  "Linux/Ubuntu",
  "CI/CD",
  "Jenkins",
  "Git/GitHub",
  "VirtualBox",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "Firebase",
  "REST APIs",
  "GraphQL",
  "API Design",
  "Performance Optimization",
  "SwiftUI",
  "Xcode",
  "valgrind",
  "LiDAR",
  "ROS (Robot Operating System)",
  "V2X Communication",
  "Agile/Scrum",
  "Test-Driven Development",
  "Code Review",
];

export const skillCategories = [
  {
    name: "Languages & Frameworks",
    accent: "linear-gradient(90deg, #00d4ff, #50f5ff)",
    icon: "Code2",
    tags: [
      "Python",
      "JavaScript",
      "TypeScript",
      "Java",
      "Swift",
      "C++",
      "C",
      "Go",
      "SQL",
      "MATLAB",
      "HTML/CSS",
      "React",
      "Flask",
      "Node.js",
      "Redux",
      "Express",
    ],
  },
  {
    name: "AI/ML & Data Science",
    accent: "linear-gradient(90deg, #7b2ff7, #b07bff)",
    icon: "BrainCircuit",
    tags: [
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "NLP",
      "Computer Vision",
      "Deep Learning",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Tableau",
      "Data Analysis",
    ],
  },
  {
    name: "Cloud & DevOps",
    accent: "linear-gradient(90deg, #ff8c42, #ffb347)",
    icon: "Cloud",
    tags: [
      "AWS (EC2, S3, Lambda)",
      "Azure",
      "Docker",
      "Kubernetes",
      "Linux/Ubuntu",
      "CI/CD",
      "Jenkins",
      "Git/GitHub",
      "VirtualBox",
      "Microservices",
    ],
  },
  {
    name: "Databases & APIs",
    accent: "linear-gradient(90deg, #2d9cdb, #56ccf2)",
    icon: "Database",
    tags: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Firebase",
      "REST APIs",
      "GraphQL",
      "API Design",
      "Performance Optimization",
    ],
  },
  {
    name: "Mobile & Systems",
    accent: "linear-gradient(90deg, #0ea5e9, #38bdf8)",
    icon: "Smartphone",
    tags: [
      "Swift",
      "SwiftUI",
      "AVFoundation",
      "Xcode",
      "Instruments",
      "Vision",
      "C/Assembly",
      "gdb",
      "valgrind",
      "strace",
      "Embedded Systems",
    ],
  },
  {
    name: "Specialized & Emerging Tech",
    accent: "linear-gradient(90deg, #ef4444, #f97316)",
    icon: "Car",
    tags: [
      "LiDAR",
      "Radar",
      "ROS (Robot Operating System)",
      "V2X Communication",
      "Camera Sensor Fusion",
      "Agile/Scrum",
      "Test-Driven Development",
      "Code Review",
    ],
  },
];

export const softSkills = [
  {
    name: "Leadership",
    icon: "Users",
    description:
      "Led distributed engineering teams through sprint planning, code reviews, and deployment cycles at Colorado Resilience. Mentored 100+ students as a TA across two semesters.",
  },
  {
    name: "Communication",
    icon: "MessageSquare",
    description:
      "Presented data insights to 20-person stakeholder groups at Intel and The Recording Academy. Ran structured debugging clinics translating complex systems concepts for students.",
  },
  {
    name: "Problem Solving",
    icon: "Lightbulb",
    description:
      "Diagnosed and resolved production bottlenecks cutting query times by 20%. Built phishing detection achieving 92% accuracy through iterative testing on real malicious datasets.",
  },
  {
    name: "Team Collaboration",
    icon: "Handshake",
    description:
      "Collaborated with cross-functional teams of 8+ engineers, data scientists, and product managers. Contributed across the full stack at Colorado Resilience from React frontend to Flask APIs.",
  },
  {
    name: "Mentoring",
    icon: "GraduationCap",
    description:
      "Guided students through Data Lab, Bomb Lab, Malloc Lab, and Shell Lab in Systems Programming. Coached OOP design patterns and data structure implementations across 500+ graded assignments.",
  },
  {
    name: "Adaptability",
    icon: "RefreshCw",
    description:
      "Transitioned across AI, security, iOS, and full-stack roles within two years. Rapidly onboarded to new tech stacks from ROS and LiDAR at EcoCAR to Keycloak and CMMC compliance at Colorado Resilience.",
  },
];

export const testimonialHighlightTags = [
  "Leadership",
  "Communication",
  "Professionalism",
  "Teamwork",
  "Time Management",
];

export const testimonialsData = [
  {
    quote:
      "Musharaf has consistently demonstrated excellent service and professionalism in his role as a Community Desk Assistant. His maturity, teamwork, and time management skills have been a true asset to our department, especially during high-pressure times like finals.",
    name: "Emily Chelmecki",
    title: "Assistant Director of Residential Operations",
    org: "Office of Residence Life, Illinois Tech",
    tags: ["Leadership", "Teamwork", "Time Management"],
  },
  {
    quote:
      "Musharaf brought strong ownership and professionalism to his software engineering work. He communicated clearly, contributed effectively across the stack, and approached technical challenges with maturity, collaboration, and a real focus on delivering reliable results.",
    name: "Jackie Brackett",
    title: "Supervisor",
    org: "Colorado Resilience",
    tags: ["Communication", "Professionalism", "Collaboration"],
  },
];

export const proficiencyData = [
  { label: "Python + AI", value: 88 },
  { label: "React + Frontend", value: 86 },
  { label: "Backend + SQL", value: 84 },
  { label: "Cloud + DevOps", value: 81 },
  { label: "Security", value: 79 },
];

export const certificationsData = [
  {
    name: "AWS Certified Solutions Architect",
    issuer: "AWS",
    featured: true,
  },
  {
    name: "Dean's List (6×)",
    issuer: "Illinois Tech",
    featured: true,
  },
  {
    name: "Data Analytics Professional",
    issuer: "The Global Career Accelerator",
  },
  {
    name: "Career Development Specialist",
    issuer: "The Global Career Accelerator",
  },
  {
    name: "Music Industry Essentials (GRAMMYs)",
    issuer: "GRAMMYs / Podium",
  },
  {
    name: "AI Fundamentals (Intel)",
    issuer: "Intel",
  },
  {
    name: "Academic Excellence Award",
    issuer: "Illinois Tech",
  },
  {
    name: "Leadership Certificate",
    issuer: "Illinois Tech",
  },
  {
    name: "Research Scholar",
    issuer: "Illinois Tech",
  },
  {
    name: "Python Advanced (HackerRank)",
    issuer: "HackerRank",
  },
  {
    name: "Technology Consulting (Deloitte)",
    issuer: "Deloitte",
  },
  {
    name: "Data Visualization (Tata)",
    issuer: "Tata",
  },
  {
    name: "Software Engineering (Wells Fargo)",
    issuer: "Wells Fargo",
  },
  {
    name: "Cybersecurity (Mastercard)",
    issuer: "Mastercard",
  },
];

export const certificationAccentByIssuer = {
  AWS: "#ff9900",
  "Illinois Tech": "#cc0000",
  HackerRank: "#00d4ff",
  "GRAMMYs / Podium": "#ffd700",
  Intel: "#0071c5",
  Deloitte: "#86bc25",
  "Wells Fargo": "#d71e28",
  Mastercard: "#eb001b",
  Tata: "#008080",
  "The Global Career Accelerator": "#00d4ff",
};

export const footerLinks = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "certifications", label: "Certifications" },
  { id: "testimonials", label: "Testimonials" },
  { id: "contact", label: "Contact" },
];
