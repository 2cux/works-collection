import type { Work } from "../types/work";

export const works: Work[] = [
  {
    id: "ai-knowledge-base-qa",
    slug: "ai-knowledge-base-qa",
    title: "AI Knowledge Base QA Platform",
    subtitle: "AI 知识库问答平台",
    description:
      "一个基于 RAG 的 AI 知识库问答平台，支持知识库管理、文档上传、文档解析、切片、向量化、自然语言问答、答案引用、问答日志、环境变量配置和前端可视化管理。",
    longDescription:
      "这个项目面向企业内部知识检索和高频问答场景，通过文档上传、解析、切片、向量化和 RAG 检索增强生成，将分散的知识内容转化为可查询、可追溯、可复用的智能问答能力。项目重点关注知识检索准确性、答案来源可追溯、前后端分离交付和工程化部署。",
    coverImage: "/works/ai-knowledge-base-qa/cover.png",
    screenshots: [
      {
        title: "登录页面",
        image: "/works/ai-knowledge-base-qa/login.png",
      },
      {
        title: "知识库列表",
        image: "/works/ai-knowledge-base-qa/knowledge-base-list.png",
      },
      {
        title: "文档管理",
        image: "/works/ai-knowledge-base-qa/document-management.png",
      },
      {
        title: "问答对话",
        image: "/works/ai-knowledge-base-qa/qa-chat.png",
      },
    ],
    tags: [
      "React",
      "TypeScript",
      "Spring Boot",
      "MySQL",
      "Redis",
      "RabbitMQ",
      "RAG",
      "Embedding",
      "LLM API",
      "Docker",
    ],
    highlights: [
      "基于 RAG 实现知识库智能问答",
      "支持文档上传、解析、切片和向量化",
      "支持答案引用来源，降低大模型幻觉风险",
      "支持知识库管理和文档管理",
      "支持问答对话界面",
      "支持 Docker Compose 启动基础依赖",
      "支持环境变量配置和部署说明",
    ],
    techStack: [
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
    ],
    githubUrl: "#",
    demoUrl: "#",
    featured: true,
    status: "completed",
  },
];

export function getFeaturedWorks(): Work[] {
  return works.filter((w) => w.featured);
}

export function getWorkBySlug(slug: string): Work | undefined {
  return works.find((w) => w.slug === slug);
}
