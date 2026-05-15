# Works Collection

Works Collection 是一个用于展示个人开发作品的精美作品集网站。

本项目不是复杂业务系统，而是一个面向 GitHub、简历、面试和个人品牌展示的静态作品展示网站。网站重点展示我的项目成果、技术能力、项目截图、开发亮点和联系方式。

## 项目定位

Works Collection 是一个可持续扩展的个人作品展示网站。

第一版重点展示：

- AI Knowledge Base QA Platform / AI 知识库问答平台

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

## 页面模块

第一版包含以下模块：

- Navbar — 顶部导航，平滑滚动
- Hero — 首屏，渐变背景，大标题，CTA 按钮
- Featured Works — 精选作品大卡片展示
- Works Grid — 所有作品网格
- Selected Work Showcase — 作品详情、功能、技术亮点
- Work Gallery — 项目截图墙（16:9 统一比例）
- Tech Stack — 按类别展示技术栈
- Contact — 联系方式
- Footer — 版权信息

## 技术栈

- React
- Vite
- TypeScript
- Tailwind CSS
- Framer Motion
- lucide-react

## 本地开发

```bash
npm install
npm run dev
npm run build
```

## 项目结构

```
works-collection/
├── public/
│   └── works/{work-slug}/
│       ├── cover.png
│       ├── login.png
│       └── ...
├── src/
│   ├── components/       # 页面组件
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── FeaturedWorks.tsx
│   │   ├── WorksGrid.tsx
│   │   ├── WorkCard.tsx
│   │   ├── SelectedWorkShowcase.tsx
│   │   ├── WorkGallery.tsx
│   │   ├── TechStack.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── SafeImage.tsx      # 图片加载失败优雅降级
│   │   └── GitHubIcon.tsx     # GitHub SVG 图标
│   ├── data/
│   │   ├── works.ts           # 作品数据配置
│   │   └── techStack.ts       # 技术栈数据
│   ├── types/
│   │   └── work.ts            # 作品类型定义
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── docs/                      # 项目文档
├── index.html
├── vite.config.ts
├── tsconfig.json
└── package.json
```

## 如何添加新作品

1. 在 `public/works/{work-slug}/` 下添加作品图片（cover.png + screenshots）
2. 在 `src/data/works.ts` 中新增一个 Work 对象
3. 页面自动渲染新作品，无需修改核心组件

## 如何添加真实截图

在 `public/works/ai-knowledge-base-qa/` 目录下放置以下图片：

- `cover.png` — 作品封面图
- `login.png` — 登录页面截图
- `knowledge-base-list.png` — 知识库列表截图
- `document-management.png` — 文档管理截图
- `qa-chat.png` — 问答对话截图

图片推荐尺寸：1920x1080（16:9 比例）。

图片缺失时页面会自动显示美观占位卡片，不会出现 broken image。

## 部署

推荐部署到：

- Vercel
- GitHub Pages
- Netlify

## 非目标

本项目不做：

- 登录注册
- 后台管理
- 数据库
- 博客系统
- 评论系统
- 搜索功能
- 用户系统
- 后端 API
- 在线上传作品
- CMS 系统

## 当前阶段

- [x] 创建项目仓库
- [x] 创建基础文档结构
- [x] 编写 PRD
- [x] 编写设计规范
- [x] 编写 AI 开发约束
- [x] 准备项目截图（占位）
- [x] 创建前端项目
- [x] 开发页面
- [ ] 部署上线
