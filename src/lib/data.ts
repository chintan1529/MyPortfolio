export interface FlagshipProject {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  stack: string[];
  github: string;
  live?: string;
  metrics: { value: string; label: string; detail?: string }[];
  architecture: { title: string; desc: string }[];
  evaluation?: string[];
}

export interface SecondaryProject {
  number: string;
  title: string;
  tagline: string;
  description: string;
  stack: string[];
  github: string;
}

export const personalInfo = {
  name: "Chintan Chhajed",
  title: "AI Engineer",
  subtitle: "Building Intelligent Systems",
  location: "Ahmedabad / India",
  education: {
    institution: "SRM Institute of Science and Technology",
    degree: "M.Tech (Integrated) in Artificial Intelligence",
    cgpa: "9.39 / 10",
  },
  status: "OPEN TO OPPORTUNITIES",
  statusSub: "AI / ML · GENAI · SOFTWARE ENGINEERING",
  meta: "AHMEDABAD / INDIA · AI · ML · RAG · GENAI · SYSTEMS · BUILDING SINCE 2023",
  email: "chintanchhajed@gmail.com",
  github: "https://github.com/chintan1529",
  linkedin: "https://www.linkedin.com/in/chintan-chhajed-339b86294",
  focusAreas: [
    "AI Engineering",
    "Machine Learning",
    "RAG / GenAI",
    "Computer Vision",
    "Backend Systems",
    "Full-Stack Engineering",
  ],
};

export const flagshipProjects: FlagshipProject[] = [
  {
    id: "nhs",
    number: "01",
    title: "NEIGHBORHOOD SUSTAINABILITY HUB",
    subtitle: "AI-POWERED CIVIC INTELLIGENCE",
    category: "Full-Stack AI Platform",
    description:
      "A full-stack civic AI platform connecting residents, collectors, recyclers, and administrators through intelligent waste reporting, geospatial workflows, real-time risk intelligence, and route optimization.",
    stack: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "PostGIS", "Hugging Face"],
    github: "https://github.com/chintan1529/neighborhood-sustainability-hub",
    live: "https://neighborhood-sustainability-hub.vercel.app/",
    metrics: [
      { value: "70+", label: "Application Routes", detail: "Comprehensive role-based routing" },
      { value: "13", label: "REST API Handlers", detail: "Modular edge-ready endpoints" },
      { value: "22", label: "DB Migrations", detail: "PostgreSQL schema with PostGIS" },
      { value: "RLS", label: "Row-Level Security", detail: "Supabase real-time subscriptions" },
      { value: "TSP", label: "Route Optimizer", detail: "Heuristic collection path solver" },
      { value: "E2E", label: "Vitest & Playwright", detail: "Automated regression testing" },
    ],
    architecture: [
      {
        title: "Intelligent Ingestion & Classification",
        desc: "Automated multi-modal image classification via Hugging Face API to detect recyclable vs. hazardous waste categories in real time.",
      },
      {
        title: "Geospatial Clustering & Risk Mapping",
        desc: "PostGIS spatial index paired with Leaflet and Geohash-based clustering to identify illegal dumping hotspots and trigger dispatch alerts.",
      },
      {
        title: "Collector Route Optimization (TSP)",
        desc: "Graph-based Travelling Salesperson heuristic algorithm calculating optimal pick-up sequences to minimize fuel consumption and transit latency.",
      },
      {
        title: "Real-time State & Governance",
        desc: "Supabase Realtime event channels synchronizing collector telematics, resident status updates, and administrative moderation logs.",
      },
    ],
  },
  {
    id: "vectoria",
    number: "02",
    title: "VECTORIA",
    subtitle: "NEURAL RETRIEVAL & GROUNDED GENERATION",
    category: "Adaptive RAG Architecture",
    description:
      "An adaptive RAG platform combining dense semantic retrieval, BM25 lexical search, Reciprocal Rank Fusion, reranking, and grounded LLM generation.",
    stack: ["Python", "FAISS", "BM25", "Sentence Transformers", "Ollama", "OpenAI"],
    github: "https://github.com/chintan1529/Vectoria",
    metrics: [
      { value: "Hybrid", label: "Dual Retrieval Engine", detail: "Dense semantic + BM25 lexical" },
      { value: "RRF", label: "Rank Fusion", detail: "Reciprocal Rank Fusion aggregation" },
      { value: "Cross", label: "Reranker Stage", detail: "Cross-encoder context scoring" },
      { value: "Agnostic", label: "LLM Orchestration", detail: "Local Ollama + cloud API streaming" },
    ],
    architecture: [
      {
        title: "Dual-Path Retrieval",
        desc: "Simultaneous execution of FAISS dense vector search over Sentence Transformers embeddings and BM25 token-level inverted index.",
      },
      {
        title: "Reciprocal Rank Fusion (RRF)",
        desc: "Score-invariant rank aggregation synthesizing lexical precision with semantic depth to mitigate vocabulary mismatch problems.",
      },
      {
        title: "Cross-Encoder Reranking",
        desc: "Deep interaction scoring across top candidates, filtering irrelevant chunks and surfacing highest information-density context.",
      },
      {
        title: "Grounded Generation & Streaming",
        desc: "Strict context boundary prompting with source citation tracking, delivered through server-sent streaming inference.",
      },
    ],
    evaluation: ["Precision@5", "Recall@5", "MRR (Mean Reciprocal Rank)", "nDCG (Normalized Discounted Cumulative Gain)"],
  },
];

export const secondaryProjects: SecondaryProject[] = [
  {
    number: "03",
    title: "RecoverIQ",
    tagline: "Recovery Assistance & Sentiment Analytics",
    description:
      "AI-driven addiction recovery assistance platform incorporating natural language sentiment tracking and empathetic crisis response workflows.",
    stack: ["Python", "Flask", "NLP", "Machine Learning"],
    github: "https://github.com/chintan1529/RecoverIQ",
  },
  {
    number: "04",
    title: "AI Stock Intelligence",
    tagline: "Equities Intelligence & Sentiment Synthesis",
    description:
      "Financial intelligence platform for Indian equities utilizing RAG, financial sentiment analysis, and LLM-based qualitative synthesis.",
    stack: ["Python", "RAG", "LLMs", "Sentiment Analysis"],
    github: "https://github.com/chintan1529/ai-stock-intelligence",
  },
  {
    number: "05",
    title: "Autonomous Neural Network Compression",
    tagline: "Structural Sparsity & Model Pruning",
    description:
      "Production-focused compression framework autonomously learning, evaluating, and applying structured pruning and quantization via agent reasoning.",
    stack: ["Python", "PyTorch", "FastAPI", "FAISS", "RAG"],
    github: "https://github.com/chintan1529/Autonomous-Neural-Network-Compression-System",
  },
  {
    number: "06",
    title: "Lidar-Nav-PPO",
    tagline: "Reinforcement Learning Autonomous Navigation",
    description:
      "Deep reinforcement learning obstacle avoidance and path planning using 2D LiDAR range-finding observations and Proximal Policy Optimization.",
    stack: ["Python", "PyTorch", "OpenAI Gym", "PPO"],
    github: "https://github.com/chintan1529/Lidar-Nav-PPO",
  },
];

export const experience = [
  {
    organization: "EduSkills × AWS Academy",
    role: "AI/ML Virtual Intern",
    period: "Apr 2025 — Jun 2025",
    description:
      "Built end-to-end machine learning workflows using AWS and Amazon SageMaker covering preprocessing, training, evaluation, and hosted inference, with hands-on work across NLP, forecasting, and computer vision use cases.",
    technologies: [
      "AWS",
      "Amazon SageMaker",
      "Machine Learning",
      "NLP",
      "Forecasting",
      "Computer Vision",
      "Model Deployment",
    ],
  },
];

export const skillsData = {
  aiMl: {
    category: "AI / MACHINE LEARNING",
    skills: [
      "Python",
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "Hugging Face",
      "Sentence Transformers",
      "Computer Vision",
      "YOLOv8",
    ],
  },
  llmGenAi: {
    category: "LLM / GENAI & RETRIEVAL",
    skills: [
      "RAG Systems",
      "FAISS",
      "BM25",
      "LLM Orchestration",
      "Grounded Generation",
      "Reciprocal Rank Fusion",
      "OpenAI API",
      "Ollama",
    ],
  },
  engineering: {
    category: "SYSTEMS & FULL-STACK",
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "FastAPI",
      "Node.js",
      "REST APIs",
      "Server-Sent Events (SSE)",
      "Docker",
    ],
  },
  dataCloud: {
    category: "DATA, CLOUD & DEVOPS",
    skills: [
      "PostgreSQL",
      "Supabase",
      "PostGIS",
      "MongoDB",
      "AWS",
      "SageMaker",
      "Linux",
      "Git",
      "CI/CD Pipelines",
    ],
  },
};

export const achievementsData = {
  cgpa: "9.39",
  cgpaMax: "10.0",
  hackathons: [
    { title: "1st Runner-Up", event: "HACKRUSH 1.0" },
    { title: "Top 10 Finalist", event: "SEISMO HACK 1.0" },
  ],
  certifications: [
    "MongoDB Certified Associate Developer",
    "SAP Generative AI Developer",
    "IBM Machine Learning with Python",
    "AWS ML Foundations",
    "AWS Cloud Foundations",
    "ZTCA Certification",
  ],
};
