import type { Work } from "../types/work";

export const works: Work[] = [
  {
    id: "ai-knowledge-base-qa",
    slug: "ai-knowledge-base-qa",
    title: "AI Knowledge Base QA Platform",
    subtitle: "AI 知识库问答平台",
    description:
      "面向企业内部知识查询场景的 RAG 问答平台，支持知识库管理、文档上传解析、文本切片、Embedding 向量化、语义检索、LLM 问答生成、引用来源、多轮会话、用户反馈、问答日志和未命中问题分析。",
    longDescription:
      "该项目面向企业内部知识分散、查询效率低和回答口径不一致等问题，基于 RAG 检索增强生成构建完整知识问答链路。系统支持管理员维护知识库与文档，普通用户通过统一问答入口自然语言提问，并通过文档解析、文本切片、Embedding 向量化、相似度检索、Prompt 构造和 LLM 生成实现可追溯问答。项目同时支持引用来源、多轮会话、反馈闭环、问答运营、统一拒答与降级策略，并通过前后端分离和环境变量配置提升工程化交付能力。",
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
      "Java 17",
      "Spring Boot",
      "MyBatis-Plus",
      "MySQL",
      "Spring Security",
      "JWT",
      "React",
      "TypeScript",
      "Vite",
      "Redis",
      "RabbitMQ",
      "Flyway",
      "RAG",
      "Embedding",
      "LLM API",
      "Docker Compose",
    ],
    highlights: [
      "设计并实现 RAG 问答主链路，完成文档解析、文本切片、Embedding 向量化、相似度检索、Prompt 构造和 LLM 回答生成",
      "封装第三方 LLM 与 Embedding API 调用层，支持 BaseURL、Model、API Key、超时等环境变量配置和异常 fallback",
      "实现答案引用来源机制，绑定文档名、chunkIndex、score、contentSnippet 等元数据，提高回答可追溯性",
      "基于 conversationId 设计多轮会话能力，支持历史消息加载、继续追问、会话恢复和历史会话管理",
      "构建用户反馈闭环，支持点赞、点踩、原因反馈，并在管理端沉淀反馈数据",
      "实现问答日志、未命中问题分析和用户反馈管理，帮助发现知识库覆盖不足",
      "设计统一拒答与降级策略，降低检索无命中、弱命中或 LLM 不可用时的无依据生成风险",
      "优化类 ChatGPT 问答体验，支持历史会话侧边栏、引用来源展开、复制回答、重试生成和轻量反馈操作",
    ],
    techStack: [
      {
        category: "Backend",
        items: ["Java 17", "Spring Boot", "MyBatis-Plus", "Spring Security", "JWT", "MySQL", "Redis", "RabbitMQ", "Flyway", "Maven"],
      },
      {
        category: "Frontend",
        items: ["React", "TypeScript", "Vite", "Tailwind CSS"],
      },
      {
        category: "AI / RAG",
        items: ["RAG", "Document Parsing", "Text Chunking", "Embedding API", "Vector Search", "Prompt Engineering", "LLM API", "Citation Traceability"],
      },
      {
        category: "Engineering",
        items: ["Docker Compose", "Git", "Apifox", "Environment Variables", "Global Exception Handling", "Unified Response"],
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
