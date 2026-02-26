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
  heroStatus: "Available for SWE / Data / AI / Cybersecurity Roles — May 2026",
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
  { id: "contact", label: "Contact" },
];

export const quickCommands = [
  { id: "about", label: "About", hint: "A", type: "scroll", target: "about" },
  { id: "experience", label: "Experience", hint: "E", type: "scroll", target: "experience" },
  { id: "projects", label: "Projects", hint: "P", type: "scroll", target: "projects" },
  { id: "skills", label: "Skills", hint: "S", type: "scroll", target: "skills" },
  { id: "certifications", label: "Certifications", hint: "F", type: "scroll", target: "certifications" },
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
    role: "Software Engineer Intern",
    date: "Oct 2025 – Present",
    location: "Remote",
    type: "Engineering",
    points: [
      "Engineered 10 ReactJS components from Figma specs with Redux, reducing UI bug reports by 30%",
      "Built Flask/Python REST APIs with JWT auth, PostgreSQL integration across 5 endpoints",
      "Configured AWS EC2, S3, IAM for distributed team of 8 engineers",
      "Maintained NIST/CMMC cybersecurity compliance in CI/CD pipeline",
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
    date: "Jan 2024 – Dec 2025",
    location: "Chicago IL",
    type: "Education",
    points: [
      "Mentored 100+ students in Systems Programming (C, Assembly) and Object-Oriented Programming (Java), improving average test scores by 15% through hands-on debugging sessions and weekly algorithm workshops",
      "Designed and delivered 20 lab sessions covering data structures, OOP principles (inheritance, polymorphism, encapsulation), memory management (malloc/free, stack/heap), process control (fork/exec/signals), and multi-threading concepts",
      "Graded 500+ assignments with detailed feedback on time complexity (Big O analysis), memory leak detection (Valgrind), defensive programming techniques, and Java best practices, maintaining 92% student satisfaction rating",
    ],
  },
  {
    company: "The Global Career Accelerator",
    role: "Data Analyst",
    date: "Jan 2025 – May 2025",
    location: "Remote",
    type: "Data",
    points: [
      "Analyzed 50,000 records with Python Pandas/NumPy, cutting data processing time by 25%",
      "Built 5 Tableau dashboards for 20-person global team",
      "Optimized PostgreSQL queries reducing query time by 20%",
    ],
  },
  {
    company: "Radical AI",
    role: "AI Engineer",
    date: "Jun 2024 –Aug 2024",
    location: "Remote NYC",
    type: "AI",
    points: [
      "Fine-tuned large language models using OpenAI GPT-4 and Google Gemini APIs to deliver personalized career guidance for 2,500+ users, achieving 89% satisfaction rate through iterative user feedback and A/B testing",
      "Implemented ethical AI guardrails including bias detection algorithms, fairness audits, and explainability frameworks, reducing discriminatory outputs by 31% and ensuring transparency across 15 diverse user demographics",
      "Collaborated with cross-functional team of 8 data scientists, ML engineers, and product managers to iterate on AI model performance, reducing career recommendation latency by 240ms and improving match accuracy by 27%",
      "Deployed production-ready AI career coaching chatbot serving 1,200+ queries/day with 87% accuracy in skill-to-role mapping and continuous monitoring for bias mitigation",
    ],
  },
];

export const projectData = [
  {
    id: "01",
    title: "HireLens — AI Resume Screener",
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
    title: "CheckURL — Phishing Link Scanner",
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
    title: "VisionVoice — iOS Accessibility App",
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
    title: "Soteria — Smart Emergency Response",
    category: "IoT",
    description:
      "IoT prototype with real-time UI, sensor integration, and automated evacuation guidance for smart occupancy monitoring.",
    impact: "⚡ Reduced emergency response time ~50%",
    tech: ["Python", "ESP32", "IoT", "PoE"],
    link: "https://github.com/Apple-beep/Projects",
    github: "https://github.com/Apple-beep/Projects",
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
    title: "AI Pathfinding — Greedy & A* Search",
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
  "C++",
  "SQL",
  "TensorFlow",
  "PyTorch",
  "Scikit-learn",
  "NLP",
  "Computer Vision",
  "Deep Learning",
  "Pandas",
  "NumPy",
  "Matplotlib",
  "MongoDB",
  "Data Analysis",
  "Visualization",
  "AWS",
  "Azure",
  "Docker",
  "Kubernetes",
  "Linux",
  "Git",
  "CI/CD",
  "React",
  "Node.js",
  "Express",
  "Firebase",
  "REST APIs",
  "GraphQL",
  "Leadership",
  "Communication",
  "Problem Solving",
  "Team Collaboration",
  "Mentoring",
];

export const skillCategories = [
  {
    name: "Languages",
    accent: "linear-gradient(90deg, #00d4ff, #50f5ff)",
    icon: "Code2",
    tags: ["Python", "JavaScript", "TypeScript", "Java", "C++", "SQL", "HTML/CSS"],
  },
  {
    name: "AI/ML",
    accent: "linear-gradient(90deg, #7b2ff7, #b07bff)",
    icon: "BrainCircuit",
    tags: ["TensorFlow", "PyTorch", "Scikit-learn", "NLP", "Computer Vision", "Deep Learning"],
  },
  {
    name: "Data",
    accent: "linear-gradient(90deg, #2d9cdb, #56ccf2)",
    icon: "BarChart3",
    tags: ["Pandas", "NumPy", "Matplotlib", "MongoDB", "Data Analysis", "Visualization"],
  },
  {
    name: "Cloud & Systems",
    accent: "linear-gradient(90deg, #ff8c42, #ffb347)",
    icon: "Cloud",
    tags: ["AWS", "Azure", "Docker", "Kubernetes", "Linux", "CI/CD"],
  },
  {
    name: "Web/Tools",
    accent: "linear-gradient(90deg, #00ff88, #5bffb4)",
    icon: "Globe",
    tags: ["React", "Node.js", "Express", "Firebase", "REST APIs", "GraphQL", "Git"],
  },
  {
    name: "Soft Skills",
    accent: "linear-gradient(90deg, #ff5da2, #ffa6cc)",
    icon: "Users",
    tags: ["Leadership", "Communication", "Problem Solving", "Team Collaboration", "Mentoring"],
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
  { id: "contact", label: "Contact" },
];
