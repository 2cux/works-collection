export type TechCategory = {
  category: string;
  items: string[];
};

export const techStack: TechCategory[] = [
  {
    category: "Java Backend",
    items: ["Java", "Spring Boot", "RESTful API", "Spring Security", "JWT", "Global Exception Handling", "Validation"],
  },
  {
    category: "Database & Middleware",
    items: ["MySQL", "Redis", "RabbitMQ", "Flyway"],
  },
  {
    category: "AI Application",
    items: ["RAG", "Document Parsing", "Text Chunking", "Embedding", "Vector Search", "Prompt Engineering", "LLM API", "Citation Traceability", "Refusal Strategy"],
  },
  {
    category: "Frontend",
    items: ["React", "TypeScript", "Vite", "Tailwind CSS"],
  },
  {
    category: "Tools",
    items: ["Maven", "Git", "Apifox", "Docker Compose", "Linux Server"],
  },
];
