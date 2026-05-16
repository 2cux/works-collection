# Works Collection

Works Collection 是一个用于展示个人开发作品的静态作品集网站，面向 GitHub、简历和面试场景展示。

## 个人定位

**后端开发实习生，具备 AI / RAG 应用开发经验。**

南昌大学软件工程本科在读（2029 届），求职方向为后端开发实习生。关注 Java 后端工程、Spring Boot 生态、RAG 知识库问答系统和 AI 应用工程化交付。

## 主展示项目

### AI Knowledge Base QA Platform（AI 知识库问答平台）

面向企业内部知识查询场景的 RAG 问答平台，支持知识库管理、文档上传解析、文本切片、Embedding 向量化、语义检索、LLM 问答生成、引用来源、多轮会话、用户反馈、问答日志和未命中问题分析。

核心技术栈：Java 17、Spring Boot、MyBatis-Plus、MySQL、Spring Security、JWT、React、TypeScript、Vite、Redis、RabbitMQ、Flyway、RAG、Embedding、LLM API、Docker Compose

项目地址：[https://github.com/2cux/ai-knowledge-base-rag-qa-platform](https://github.com/2cux/ai-knowledge-base-rag-qa-platform)

## 页面模块

- Navbar — 顶部导航，锚点平滑滚动
- Hero — 首屏，渐变背景，大标题，CTA 按钮
- Featured Works — 精选作品大卡片展示
- Works Grid — 所有作品网格
- Selected Work Showcase — 作品详情、功能亮点、技术架构
- Work Gallery — 项目截图墙（16:9 统一比例，浏览器风格卡片，Lightbox 预览）
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
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 本地预览生产版本
npm run preview
```

## Vercel 部署

1. 将仓库导入 Vercel
2. 配置如下：

| 设置项 | 值 |
|--------|-----|
| Framework Preset | Vite |
| Build Command | `npm run build` |
| Output Directory | `dist` |
| Install Command | `npm install` |

3. 部署完成即可访问

## 如何添加新作品

1. 在 `public/works/{work-slug}/` 下添加作品图片（cover.png + 截图）
2. 在 `src/data/works.ts` 中新增一个 Work 对象
3. 页面自动渲染新作品，无需修改核心组件

## 非目标

本项目不做：

- 登录注册
- 后台管理
- 数据库
- 在线上传作品
- CMS / 博客 / 评论
- 搜索功能
- 用户系统
- 后端 API
- 中英文切换
- 复杂路由

## 项目结构

```
works-collection/
├── public/
│   └── works/{work-slug}/
│       ├── cover.png
│       └── screenshots...
├── src/
│   ├── components/       # 页面组件
│   ├── data/             # 作品和技术栈数据
│   ├── types/            # TypeScript 类型定义
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── docs/                 # 项目文档
├── index.html
├── vite.config.ts
├── tsconfig.json
└── package.json
```

## 许可

本项目仅用于个人作品展示。
