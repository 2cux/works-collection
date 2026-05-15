export type TechCategory = {
  category: string;
  items: string[];
};

export const techStack: TechCategory[] = [
  {
    category: "Frontend",
    items: ["React", "TypeScript", "Vite", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["Java", "Spring Boot", "MyBatis-Plus", "RESTful API"],
  },
  {
    category: "Database & Middleware",
    items: ["MySQL", "Redis", "RabbitMQ"],
  },
  {
    category: "AI Application",
    items: ["RAG", "Embedding", "LLM API", "Prompt Engineering"],
  },
  {
    category: "DevOps",
    items: ["Docker", "GitHub", "Linux Server", "Environment Variables"],
  },
];
