// ============================================================
// Portfolio Data — Samson Vincent Julius
// Source: summary.txt + Resume_software.pdf
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
  bio: "I'm a Computer Science graduate from JUIT with a deep passion for backend engineering, distributed systems, and blockchain infrastructure. My journey through the cosmos of technology has taken me from designing RESTful microservices to building cross-chain blockchain relayers—each project a new mission pushing the boundaries of what's possible.",
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
  { value: 8.2, label: "CGPA", suffix: "" },
  { value: 25, label: "Team Members Led", suffix: "+" },
  { value: 5, label: "Production Projects", suffix: "+" },
  { value: 30, label: "Technical Events", suffix: "+" },
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
    highlight: "Senior undergraduate with hands-on production internship experience",
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
    highlight: "Consistently high academic achievement",
  },
];

export const skillCategories = [
  {
    orbit: "core",
    label: "Core Languages",
    color: "#6C3FC5",
    skills: [
      { name: "Java", level: 90, icon: "☕" },
      { name: "Golang", level: 85, icon: "🐹" },
      { name: "Python", level: 75, icon: "🐍" },
      { name: "SQL", level: 85, icon: "🗄️" },
      { name: "JavaScript", level: 70, icon: "⚡" },
    ],
  },
  {
    orbit: "backend",
    label: "Backend & Frameworks",
    color: "#4F46E5",
    skills: [
      { name: "Spring Boot", level: 88, icon: "🌱" },
      { name: "Spring MVC", level: 82, icon: "🔧" },
      { name: "Hibernate", level: 80, icon: "🏗️" },
      { name: "Gin (Go)", level: 80, icon: "🍸" },
      { name: "REST APIs", level: 90, icon: "🔗" },
      { name: "Microservices", level: 85, icon: "⚙️" },
      { name: "JWT / OAuth", level: 82, icon: "🔐" },
    ],
  },
  {
    orbit: "blockchain",
    label: "Blockchain",
    color: "#22D3EE",
    skills: [
      { name: "Hyperledger Fabric", level: 80, icon: "🔗" },
      { name: "Cosmos SDK", level: 78, icon: "🌌" },
      { name: "Cosmos EVM", level: 72, icon: "💎" },
      { name: "IBC Protocol", level: 75, icon: "🛸" },
      { name: "Go Relayers", level: 73, icon: "📡" },
    ],
  },
  {
    orbit: "infra",
    label: "Data & Infrastructure",
    color: "#0EA5E9",
    skills: [
      { name: "PostgreSQL", level: 85, icon: "🐘" },
      { name: "MySQL", level: 83, icon: "🐬" },
      { name: "Redis", level: 78, icon: "🔴" },
      { name: "RabbitMQ", level: 75, icon: "🐇" },
      { name: "Docker", level: 70, icon: "🐳" },
    ],
  },
  {
    orbit: "frontend",
    label: "Frontend & Tools",
    color: "#A855F7",
    skills: [
      { name: "React.js", level: 72, icon: "⚛️" },
      { name: "HTML / CSS", level: 80, icon: "🎨" },
      { name: "Git & GitHub", level: 88, icon: "🐙" },
      { name: "IntelliJ IDEA", level: 85, icon: "💡" },
      { name: "VS Code", level: 90, icon: "📝" },
    ],
  },
];

export const experience = [
  {
    id: "antier",
    company: "Antier Solutions Pvt. Ltd.",
    role: "Software Engineer Intern",
    type: "Full-time Internship",
    duration: "Aug 2025 – Apr 2026",
    location: "Remote / India",
    focus: "Backend Engineering · Blockchain Infrastructure · Distributed Systems",
    color: "#6C3FC5",
    achievements: [
      {
        category: "Blockchain Infrastructure",
        icon: "🔗",
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
        bullets: [
          "Built Hyperledger Fabric Proof-of-Concept solutions for supply chain traceability with immutable audit trails",
          "Developed Letter of Credit workflow automation enabling secure multi-party transaction management",
          "Designed chaincode smart contracts enforcing role-based access and business rule compliance",
        ],
      },
      {
        category: "Backend Engineering",
        icon: "⚙️",
        bullets: [
          "Developed Golang microservices with layered service-repository architecture handling user lifecycle management",
          "Implemented dual-factor authentication: OTP-based and JWT token authentication with refresh token rotation",
          "Integrated RabbitMQ message broker for asynchronous task processing, improving system decoupling and throughput",
          "Designed scalable backend workflows supporting high-concurrency distributed environments",
        ],
      },
    ],
    tech: [
      "Golang", "Java", "Cosmos SDK", "Hyperledger Fabric", "IBC", "RabbitMQ",
      "PostgreSQL", "Redis", "JWT", "Microservices", "Docker",
    ],
  },
];

export const projects = [
  {
    id: "asset-mgmt",
    name: "Asset Management Application",
    subtitle: "Blockchain-Powered Supply Chain Platform",
    description:
      "A production-grade blockchain application built on Hyperledger Fabric that provides end-to-end asset tracking with supply-chain transparency, immutable audit trails, and smart-contract-driven role enforcement. Enables enterprises to track asset lifecycle across distributed participants with zero trust assumptions.",
    tech: ["Hyperledger Fabric", "Golang", "Chaincode", "Docker"],
    highlights: [
      "Immutable audit trail for every asset state transition",
      "Role-based access control via Hyperledger MSP",
      "Smart-contract-driven automated workflows",
      "Multi-organization supply chain transparency",
    ],
    category: "Blockchain",
    icon: "🔗",
    color: "#6C3FC5",
    github: "https://github.com/SamVJulius",
    status: "Production",
  },
  {
    id: "btc-eth-indexer",
    name: "BTC/ETH Blockchain Indexer",
    subtitle: "High-Performance Blockchain Data Indexing Engine",
    description:
      "A high-throughput blockchain data indexer that extracts, normalizes, and stores Bitcoin and Ethereum transaction data in real-time. Features Redis caching for sub-millisecond query response, PostgreSQL for normalized relational storage, and RPC-based blockchain node communication.",
    tech: ["Golang", "PostgreSQL", "Redis", "RPC", "Bitcoin Node", "Ethereum Node"],
    highlights: [
      "Real-time BTC & ETH transaction extraction via RPC",
      "Normalized relational data model in PostgreSQL",
      "Redis caching layer for high-speed analytics queries",
      "Concurrent goroutine-based ingestion pipeline",
    ],
    category: "Backend / Blockchain",
    icon: "📡",
    color: "#22D3EE",
    github: "https://github.com/SamVJulius",
    status: "Completed",
  },
  {
    id: "petcare",
    name: "PetCare Platform",
    subtitle: "Multi-Role Veterinary Management System",
    description:
      "A comprehensive veterinary management platform featuring distinct workflows for patients, veterinarians, and administrators. Built with Spring Boot and Hibernate ORM, implementing JWT-based authentication, role-based authorization, and full CRUD operations across all domain entities.",
    tech: ["Java", "Spring Boot", "Hibernate", "MySQL", "JWT", "Spring MVC"],
    highlights: [
      "Multi-role system: Patient / Vet / Admin workflows",
      "JWT authentication with role-based authorization",
      "Hibernate ORM with optimized relational schema",
      "RESTful API with complete CRUD coverage",
    ],
    category: "Backend",
    icon: "🏥",
    color: "#4F46E5",
    github: "https://github.com/SamVJulius",
    status: "Completed",
  },
  {
    id: "quiz-app",
    name: "Online Quiz Application",
    subtitle: "Concurrent RESTful Quiz Management System",
    description:
      "A scalable quiz platform built with Java and Spring Boot supporting concurrent quiz submissions. Features a clean layered architecture, full CRUD operations for quiz management, and concurrent session handling. Designed with the Spring MVC pattern for maintainability and testability.",
    tech: ["Java", "Spring Boot", "Spring MVC", "REST APIs", "Layered Architecture"],
    highlights: [
      "Concurrent quiz submission handling",
      "Clean layered architecture (Controller → Service → Repository)",
      "Full CRUD for quiz, question, and user management",
      "RESTful API design with proper HTTP semantics",
    ],
    category: "Backend",
    icon: "📝",
    color: "#0EA5E9",
    github: "https://github.com/SamVJulius",
    status: "Completed",
  },
  {
    id: "ieee-website",
    name: "IEEE JUIT Student Branch Website",
    subtitle: "Community Platform for 30+ Technical Events",
    description:
      "The official website for the IEEE JUIT Student Branch, built with React.js. A fully responsive web platform featuring event registration tracking, member management, and community updates. Supported coordination of 30+ technical workshops, bootcamps, and hackathons.",
    tech: ["React.js", "CSS", "JavaScript", "Responsive Design"],
    highlights: [
      "Fully responsive across all device sizes",
      "Event registration and tracking system",
      "Supported 30+ technical events and workshops",
      "Community-focused design for IEEE member engagement",
    ],
    category: "Full Stack",
    icon: "🌐",
    color: "#A855F7",
    github: "https://github.com/SamVJulius",
    status: "Deployed",
  },
];

export const leadership = [
  {
    id: "ieee-vc",
    role: "Vice Chairperson",
    organization: "IEEE JUIT Student Branch",
    duration: "2023 – 2025",
    icon: "🏛️",
    color: "#F59E0B",
    achievements: [
      "Led and mentored a team of 25+ active student members across technical committees",
      "Organized and executed 30+ workshops, bootcamps, and technical events",
      "Managed cross-functional coordination between technical, design, and logistics teams",
      "Drove community growth and member engagement in IEEE professional network",
      "Delivered large-scale technical initiatives from planning through successful execution",
    ],
    impact: {
      members: "25+",
      events: "30+",
      role: "Executive Leadership",
    },
  },
];

export const certifications = [
  {
    id: "cert-1",
    name: "Add Your Certification",
    issuer: "Certification Body",
    year: "2025",
    placeholder: true,
  },
  {
    id: "cert-2",
    name: "Add Your Certification",
    issuer: "Certification Body",
    year: "2025",
    placeholder: true,
  },
  {
    id: "cert-3",
    name: "Add Your Certification",
    issuer: "Certification Body",
    year: "2024",
    placeholder: true,
  },
];

export const interests = [
  { label: "Backend Engineering", icon: "⚙️" },
  { label: "Distributed Systems", icon: "🔀" },
  { label: "Blockchain Infrastructure", icon: "🔗" },
  { label: "System Design", icon: "🏗️" },
  { label: "AI / ML", icon: "🤖" },
  { label: "Cloud Native", icon: "☁️" },
  { label: "Open Source", icon: "🌍" },
];

export const nav = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Leadership", href: "#leadership" },
  { label: "Contact", href: "#contact" },
];
