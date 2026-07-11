// ============================================================
// Portfolio Data — Samson Vincent Julius
// ============================================================

export const personal = {
  name: "Samson Vincent Julius",
  title: "Software Engineer",
  location: "Lucknow, Uttar Pradesh, India",
  email: "samsonvjulius@gmail.com",
  phone: "+91-8604559883",
  github: "https://github.com/SamVJulius",
  linkedin: "https://www.linkedin.com/in/samson-vincent-julius/",
  resume: "/resume.pdf",
  tagline:
    "Building scalable backend systems, distributed infrastructure, and innovative digital experiences at the intersection of software engineering and emerging technology.",
  bio: "I'm a Computer Science graduate from JUIT with a deep passion for backend engineering, distributed systems, and blockchain infrastructure. My journey through the cosmos of technology has taken me from designing RESTful microservices to building cross-chain blockchain relayers — each project a new mission pushing the boundaries of what's possible.",
};

export const roles = [
  "Software Engineer",
  "Backend Developer",
  "Blockchain Infrastructure Engineer",
  "Distributed Systems Engineer",
  "Full Stack Developer",
  "Java & Golang Developer",
];

export const stats = [
  { value: 8.2,  label: "CGPA",                suffix: "" },
  { value: 25,   label: "Team Members Led",     suffix: "+" },
  { value: 5,    label: "Production Projects",  suffix: "+" },
  { value: 30,   label: "Technical Events",     suffix: "+" },
];

export const education = [
  {
    id: "juit",
    institution: "Jaypee University of Information Technology",
    short: "JUIT, Solan",
    degree: "B.Tech — Computer Science & Engineering",
    duration: "Sep 2022 – 2026",
    score: "CGPA: 8.2",
    type: "university",
    icon: "🪐",
    coursework: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Operating Systems",
      "Database Management Systems",
      "Computer Networks",
      "Software Engineering",
    ],
    highlight: "Hands-on production internship experience alongside academics",
  },
  {
    id: "sfcl-xii",
    institution: "St. Francis' College",
    short: "St. Francis' College, Lucknow",
    degree: "Higher Secondary — Class XII (Science)",
    duration: "2022",
    score: "93.75%",
    type: "school",
    icon: "⭐",
    highlight: "Top academic performer in Science stream",
  },
  {
    id: "sfcl-x",
    institution: "St. Francis' College",
    short: "St. Francis' College, Lucknow",
    degree: "Secondary — Class X",
    duration: "2020",
    score: "95.60%",
    type: "school",
    icon: "🌟",
    highlight: "Consistent high achiever across all subjects",
  },
];

export const skillGroups = [
  {
    label: "Languages",
    color: "#6C3FC5",
    colorLight: "rgba(108,63,197,0.15)",
    skills: [
      { name: "Java",       level: 90 },
      { name: "Golang",     level: 85 },
      { name: "Python",     level: 75 },
      { name: "SQL",        level: 85 },
      { name: "JavaScript", level: 70 },
      { name: "C / C++",    level: 65 },
    ],
  },
  {
    label: "Backend & Frameworks",
    color: "#4F46E5",
    colorLight: "rgba(79,70,229,0.15)",
    skills: [
      { name: "Spring Boot",   level: 88 },
      { name: "Spring MVC",    level: 82 },
      { name: "Hibernate",     level: 80 },
      { name: "Gin (Go)",      level: 80 },
      { name: "REST APIs",     level: 90 },
      { name: "Microservices", level: 85 },
      { name: "JWT / Auth",    level: 82 },
    ],
  },
  {
    label: "Blockchain",
    color: "#22D3EE",
    colorLight: "rgba(34,211,238,0.12)",
    skills: [
      { name: "Hyperledger Fabric", level: 80 },
      { name: "Cosmos SDK",         level: 78 },
      { name: "IBC Protocol",       level: 75 },
      { name: "Cosmos EVM",         level: 72 },
      { name: "Go Relayers",        level: 73 },
    ],
  },
  {
    label: "Data & Infrastructure",
    color: "#0EA5E9",
    colorLight: "rgba(14,165,233,0.12)",
    skills: [
      { name: "PostgreSQL", level: 85 },
      { name: "MySQL",      level: 83 },
      { name: "Redis",      level: 78 },
      { name: "RabbitMQ",   level: 75 },
      { name: "Docker",     level: 70 },
    ],
  },
  {
    label: "Frontend & Tools",
    color: "#A855F7",
    colorLight: "rgba(168,85,247,0.12)",
    skills: [
      { name: "React.js",  level: 72 },
      { name: "HTML/CSS",  level: 80 },
      { name: "Git",       level: 88 },
      { name: "IntelliJ",  level: 85 },
      { name: "VS Code",   level: 90 },
    ],
  },
];

export const experience = [
  {
    id: "antier",
    company: "Antier Solutions Pvt. Ltd.",
    role: "Software Engineer Intern",
    type: "Internship",
    duration: "Aug 2025 – Apr 2026",
    location: "India",
    focus: "Backend Engineering · Blockchain Infrastructure · Distributed Systems",
    color: "#6C3FC5",
    missions: [
      {
        category: "Blockchain Infrastructure",
        icon: "🔗",
        color: "#22D3EE",
        bullets: [
          "Architected custom modules using Cosmos SDK enabling on-chain business logic for enterprise clients",
          "Implemented Inter-Blockchain Communication (IBC) enabling seamless cross-chain asset transfers",
          "Configured and deployed Go-based relayers bridging multiple sovereign blockchain networks",
          "Delivered production-grade Cosmos EVM integrations for decentralized finance workflows",
        ],
      },
      {
        category: "Enterprise Blockchain",
        icon: "🏢",
        color: "#A855F7",
        bullets: [
          "Built Hyperledger Fabric PoC solutions for supply chain traceability with immutable audit trails",
          "Developed Letter of Credit workflow automation enabling secure multi-party transaction management",
          "Designed chaincode smart contracts enforcing role-based access and business rule compliance",
        ],
      },
      {
        category: "Backend Engineering",
        icon: "⚙️",
        color: "#4F46E5",
        bullets: [
          "Developed Golang microservices with service-repository architecture handling full user lifecycle",
          "Implemented dual-factor authentication: OTP-based and JWT with refresh token rotation",
          "Integrated RabbitMQ message broker for async task processing, decoupling services at scale",
          "Designed high-concurrency backend workflows for distributed production environments",
        ],
      },
    ],
    tech: ["Golang", "Java", "Cosmos SDK", "Hyperledger Fabric", "IBC", "RabbitMQ", "PostgreSQL", "Redis", "JWT", "Docker"],
  },
];

export const projects = [
  {
    id: "asset-mgmt",
    name: "Asset Management Application",
    subtitle: "Blockchain-Powered Supply Chain Platform",
    description:
      "Production-grade blockchain application on Hyperledger Fabric providing end-to-end asset tracking with supply-chain transparency, immutable audit trails, and smart-contract-driven role enforcement across distributed enterprise participants.",
    tech: ["Hyperledger Fabric", "Golang", "Chaincode", "Docker"],
    highlights: [
      "Immutable audit trail for every asset state transition",
      "Role-based access control via Hyperledger MSP",
      "Smart-contract-driven automated workflows",
      "Multi-org supply chain transparency",
    ],
    category: "Blockchain",
    icon: "🔗",
    color: "#6C3FC5",
    github: "https://github.com/SamVJulius/asset-management",
    status: "Production",
  },
  {
    id: "btc-eth-indexer",
    name: "BTC/ETH Blockchain Indexer",
    subtitle: "High-Performance Blockchain Data Engine",
    description:
      "High-throughput indexer that extracts, normalizes, and stores Bitcoin and Ethereum transaction data in real-time using RPC-based node communication, Redis caching for sub-millisecond queries, and PostgreSQL for structured storage.",
    tech: ["Golang", "PostgreSQL", "Redis", "RPC"],
    highlights: [
      "Real-time BTC & ETH extraction via RPC",
      "Normalized relational data model in PostgreSQL",
      "Redis caching layer for high-speed analytics",
      "Concurrent goroutine-based ingestion pipeline",
    ],
    category: "Backend / Blockchain",
    icon: "📡",
    color: "#22D3EE",
    github: "https://github.com/SamVJulius/blockchain-indexer",
    status: "Completed",
  },
  {
    id: "petcare",
    name: "PetCare Platform",
    subtitle: "Multi-Role Veterinary Management System",
    description:
      "Comprehensive veterinary management platform with distinct workflows for patients, vets, and admins. Built with Spring Boot and Hibernate ORM implementing JWT authentication, role-based authorization, and full CRUD across domain entities.",
    tech: ["Java", "Spring Boot", "Hibernate", "MySQL", "JWT"],
    highlights: [
      "Multi-role system: Patient / Vet / Admin",
      "JWT authentication with RBAC",
      "Hibernate ORM with optimized schema",
      "RESTful API with complete CRUD coverage",
    ],
    category: "Backend",
    icon: "🏥",
    color: "#4F46E5",
    github: "https://github.com/SamVJulius/PetCare",
    status: "Completed",
  },
  {
    id: "quiz-app",
    name: "Online Quiz Application",
    subtitle: "Concurrent RESTful Quiz Management System",
    description:
      "Scalable quiz platform built with Java and Spring Boot supporting concurrent quiz submissions. Features clean layered architecture, full CRUD for quiz management, and concurrent session handling with Spring MVC pattern.",
    tech: ["Java", "Spring Boot", "Spring MVC", "REST APIs"],
    highlights: [
      "Concurrent quiz submission handling",
      "Clean layered architecture (Controller → Service → Repo)",
      "Full CRUD for quiz, question, and user entities",
      "Proper RESTful HTTP semantics throughout",
    ],
    category: "Backend",
    icon: "📝",
    color: "#0EA5E9",
    github: "https://github.com/SamVJulius/quiz-online",
    status: "Completed",
  },
  {
    id: "ieee-website",
    name: "IEEE JUIT Branch Website",
    subtitle: "Community Platform for 30+ Technical Events",
    description:
      "Official website for IEEE JUIT Student Branch built with React.js. Fully responsive platform featuring event registration tracking, member management, and community updates — coordinating 30+ technical workshops and hackathons.",
    tech: ["React.js", "CSS", "JavaScript"],
    highlights: [
      "Fully responsive across all device sizes",
      "Event registration and tracking system",
      "Supported 30+ technical events",
      "IEEE member community engagement hub",
    ],
    category: "Full Stack",
    icon: "🌐",
    color: "#A855F7",
    github: "https://github.com/SamVJulius/ieee-website",
    status: "Deployed",
  },
  {
  id: "bhal-lang",
  name: "bhal-lang",
  subtitle: "A Custom Interpreted Programming Language",
  description:
    "A hand-crafted, interpreted programming language built from scratch in Python, featuring a quirky BH-prefixed keyword system. Implements a full Lexer → Parser → Interpreter pipeline with support for variables, arithmetic, control flow, functions, lists, and an interactive REPL shell — all with a unique syntax flavor.",
  tech: ["Python"],
  highlights: [
    "Full Lexer → Parser → Interpreter pipeline built from scratch",
    "Interactive REPL shell with script file execution support",
    "Supports functions, closures, higher-order functions, and recursion",
    "Dynamic typing with integers, floats, strings, and lists",
    "Custom keyword system with BH-prefix syntax (BHIF, BHFOR, BHUNC, etc.)",
    "Descriptive runtime error reporting with call stack tracebacks",
  ],
  category: "Programming Languages",
  icon: "🐻",
  color: "#F59E0B",
  github: "https://github.com/SamVJulius/bhal-lang",
  status: "Completed",
},
];

export const leadership = [
  {
    id: "ieee-vc",
    role: "Vice Chairperson",
    organization: "IEEE JUIT Student Branch",
    duration: "2024 – 2025",
    icon: "🏛️",
    color: "#F59E0B",
    achievements: [
      "Led and mentored a team of 25+ active student members across technical committees",
      "Organized and executed 30+ workshops, bootcamps, and technical events from end to end",
      "Managed cross-functional coordination between technical, design, and logistics teams",
      "Drove community growth and member engagement in IEEE professional network",
      "Delivered large-scale technical initiatives from planning through successful execution",
    ],
    impact: { members: "25+", events: "30+", role: "Executive Leadership" },
  },
];

export const certifications = [
  { id: "cert-1", name: "Social Networks", issuer: "IIT Madras", year: "2025", placeholder: false },
  { id: "cert-2", name: "Digital Electronic Circuits", issuer: "IIT Kharagpur", year: "2025", placeholder: false },
  { id: "cert-3", name: "Add Certification Here", issuer: "Certification Body", year: "2024", placeholder: true },
];

export const nav = [
  { label: "About",      href: "#about" },
  { label: "Education",  href: "#education" },
  { label: "Skills",     href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects",   href: "#projects" },
  { label: "Leadership", href: "#leadership" },
  { label: "Contact",    href: "#contact" },
];
