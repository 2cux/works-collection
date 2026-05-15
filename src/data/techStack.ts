export type TechCategory = {
  category: string;
  items: string[];
};

export const techStack: TechCategory[] = [
  {
    category: "Frontend",
    items: ["React 19", "TypeScript 5.9", "Vite 8", "Tailwind CSS 4", "React Router 7", "Axios"],
  },
  {
    category: "Backend",
    items: ["Spring Boot 3.5", "Spring Security", "MyBatis-Plus", "MySQL 8", "Redis 7", "RabbitMQ 3", "Flyway", "JWT", "SpringDoc / Swagger", "PDFBox", "Apache POI", "Maven"],
  },
  {
    category: "AI / RAG",
    items: ["LLM API", "Embedding API", "Vector Search", "Text Splitter", "Prompt Strategy", "RAG Pipeline"],
  },
  {
    category: "DevOps",
    items: ["Docker Compose", "Git", "Apifox", ".env 配置管理"],
  },
];
