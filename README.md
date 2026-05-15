# Works Collection

Works Collection 是一个用于展示个人开发作品的精美作品集网站。

本项目不是复杂业务系统，而是一个面向 GitHub、简历、面试和个人品牌展示的静态作品展示网站。网站重点展示我的项目成果、技术能力、项目截图、开发亮点和联系方式。

## 项目定位

Works Collection 是一个可持续扩展的个人作品展示网站。

第一版重点展示：

- AI Knowledge Base QA Platform
- AI 知识库问答平台

未来可以继续添加更多作品，例如：

- 后端项目
- 前端项目
- AI 应用项目
- 工具类项目
- 全栈项目

## 核心目标

- 页面精美，有视觉冲击力
- 清楚展示我的项目作品
- 适合放到 GitHub、简历和面试中展示
- 支持桌面端和移动端访问
- 支持后续通过配置文件继续添加新作品
- 不做复杂后台功能，保持轻量和易维护

## 当前主展示作品

### AI Knowledge Base QA Platform

一个基于 RAG 的 AI 知识库问答平台，支持知识库管理、文档上传、文档解析、切片、向量化、自然语言问答、答案引用、问答日志、环境变量配置和前端可视化管理。

核心技术栈：

- Java
- Spring Boot
- MyBatis-Plus
- MySQL
- Redis
- RabbitMQ
- React
- TypeScript
- Vite
- RAG
- Embedding
- LLM API
- Docker

## 网站功能

第一版计划包含：

- Hero 首屏展示
- 精选作品展示
- 所有作品网格
- 作品详情展示
- 项目截图墙
- 技术栈展示
- 联系方式
- 响应式布局

## 非目标

本项目第一版不做：

- 登录注册
- 后台管理
- 数据库
- 在线上传作品
- 博客系统
- 评论系统
- 搜索系统
- 用户系统
- CMS 内容管理系统
- 后端 API

后续新增作品时，通过添加图片资源和修改本地数据配置完成。

## 技术栈

计划使用：

- React
- Vite
- TypeScript
- Tailwind CSS
- Framer Motion
- lucide-react

## 未来新增作品方式

新增作品时，不通过后台上传，而是通过以下方式维护：

1. 在 public/works/{work-slug}/ 下添加作品图片。
2. 在 src/data/works.ts 中新增作品数据。
3. 页面自动渲染新的作品卡片和详情。
4. 提交到 GitHub 后自动部署更新。

示例目录：

    public/works/ai-knowledge-base-qa/
    ├── cover.png
    ├── login.png
    ├── knowledge-base-list.png
    ├── document-management.png
    └── qa-chat.png

## 本地开发

后续前端项目创建后使用：

    npm install
    npm run dev
    npm run build

## 部署建议

推荐部署到：

- Vercel
- GitHub Pages
- Netlify

## 当前阶段

当前项目处于准备阶段：

- [x] 创建项目仓库
- [x] 创建基础文档结构
- [ ] 编写 PRD
- [ ] 编写设计规范
- [ ] 编写 AI 开发约束
- [ ] 准备项目截图
- [ ] 创建前端项目
- [ ] 开发页面
- [ ] 部署上线