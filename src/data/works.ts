import type { Work } from "../types/work";

export const works: Work[] = [
  {
    id: "ai-knowledge-base-qa",
    slug: "ai-knowledge-base-qa",
    title: "AI Knowledge Base QA Platform",
    subtitle: "AI 知识库问答平台",
    description:
      "一个基于 RAG 的企业级 AI 知识库问答平台，提供从知识库管理、文档上传与解析、文本切片与向量化，到语义检索和 LLM 问答生成的完整流程，支持带引用来源的智能问答。",
    longDescription:
      "该项目面向企业内部知识分散、查询效率低、回答口径不一致等问题，基于 RAG 检索增强生成构建完整知识问答链路。系统支持知识库管理、文档上传、解析、切片、Embedding 向量化、语义检索、LLM 问答生成、答案引用来源、问答日志、统一拒答策略和敏感信息保护，并通过前后端分离架构与 Docker Compose 提升工程化交付能力。",
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
      "Vite",
      "Tailwind CSS",
      "Spring Boot",
      "Spring Security",
      "MyBatis-Plus",
      "MySQL",
      "Redis",
      "RabbitMQ",
      "Flyway",
      "JWT",
      "RAG",
      "Embedding",
      "LLM API",
      "Docker",
    ],
    highlights: [
      "完整 RAG 问答流程，从文档解析到答案生成形成端到端闭环",
      "支持知识库创建、重命名、删除和文档管理",
      "支持文档上传、解析、切片、处理状态管理和 Embedding 向量化",
      "支持自然语言提问，基于知识库内容生成带引用来源的回答",
      "支持问答日志、未命中问题分析、用户反馈和拒答策略",
      "支持日志脱敏和敏感信息保护",
      "支持兼容 OpenAI 格式的第三方 LLM / Embedding API",
      "支持 Docker Compose 一键启动 MySQL、Redis、RabbitMQ",
      "支持 Flyway 数据库自动迁移",
      "支持中英文 README 和 GitHub 项目展示优化",
    ],
    techStack: [
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
    ],
    githubUrl: "https://github.com/2cux/ai-knowledge-base-rag-qa-platform",
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
