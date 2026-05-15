## 1. 项目背景

我需要创建一个个人作品展示网站，用来集中展示自己的开发项目、技术能力、项目截图和项目成果。

这个网站主要服务于：

- GitHub 项目展示
- 简历投递
- 面试介绍
- 个人品牌建设
- 后续持续沉淀作品

当前重点展示作品为：

AI Knowledge Base QA Platform / AI 知识库问答平台

后续可以继续添加更多作品。

## 2. 项目目标

本项目的核心目标是：

1. 用精美、有视觉冲击力的页面展示我的作品。
2. 清楚呈现项目价值、技术栈、核心功能和开发亮点。
3. 让访问者快速理解我的技术方向：AI 应用开发、RAG、Java 后端工程、前后端分离项目。
4. 支持桌面端和移动端良好展示。
5. 支持未来持续添加多个作品。
6. 可部署到 Vercel、GitHub Pages 或其他静态网站托管平台。
7. 作为简历和 GitHub 主页中的项目展示入口。

## 3. 项目定位

这是一个个人作品展示网站，不是复杂业务系统。

关键词：

- Works Collection
- Portfolio
- Showcase
- AI Product
- RAG Project
- Modern Landing Page
- Developer Branding

## 4. 目标用户

### 4.1 招聘方 / 面试官

快速了解我的项目能力、技术栈、工程实践和项目完成度。

### 4.2 技术同学 / 开发者

了解我的项目实现方向、技术选型和开发思路。

### 4.3 GitHub 访问者

通过作品集网站更直观地理解我的项目成果。

### 4.4 我自己

用于集中整理项目成果，方便后续持续更新作品。

## 5. 核心需求

### 5.1 精美展示

页面需要有较强视觉吸引力，不能像普通简历页面，也不能像后台管理系统。

要求：

- 首屏有视觉冲击力
- 项目卡片精美
- 截图展示统一
- 页面风格现代
- 移动端适配良好

### 5.2 多作品扩展

第一版可以只展示一个主作品，但项目结构必须支持未来添加多个作品。

未来新增作品时，只需要：

1. 添加作品图片资源。
2. 在本地数据文件中新增作品配置。
3. 页面自动渲染新作品。
4. 不需要重写核心组件。

### 5.3 当前主展示作品

项目名称：

AI Knowledge Base QA Platform / AI 知识库问答平台

项目简介：

一个基于 RAG 的 AI 知识库问答平台，支持知识库管理、文档上传、文档解析、切片、向量化、自然语言问答、答案引用、问答日志、环境变量配置和前端可视化管理。

项目展示重点：

- 项目背景
- 解决的问题
- 核心功能
- 技术架构
- 页面截图
- 技术亮点
- GitHub 仓库入口
- 在线演示入口

## 6. 页面结构

网站采用单页 Landing Page 结构。

### 6.1 Navbar

内容：

- 左侧：站点名称，例如 Works Collection
- 右侧导航：
  - Works
  - Gallery
  - Tech Stack
  - Contact

要求：

- 桌面端固定顶部
- 移动端简洁适配
- 点击导航平滑滚动到对应区域

### 6.2 Hero

目标：

第一眼吸引访问者注意。

内容：

- 主标题：Building AI Products with Clean Engineering
- 副标题：我专注于 AI 应用开发、RAG 知识库问答系统、Java 后端工程和前后端分离项目交付。
- 按钮：
  - View My Works
  - GitHub

设计要求：

- 深色科技风
- 渐变背景
- 光斑效果
- 大标题
- 有视觉中心
- 不拥挤
- 桌面端接近满屏高度

### 6.3 Featured Works

展示精选作品。

第一版展示：

- AI Knowledge Base QA Platform

未来可以展示多个精选作品。

内容包括：

- 作品名称
- 作品简介
- 技术标签
- 项目亮点
- 封面图
- GitHub / Demo 按钮

设计要求：

- 使用大卡片
- 卡片有高级感
- 项目截图占据主要视觉空间
- hover 有轻微动效
- 标签使用 pill 样式

### 6.4 Works Grid

展示所有作品卡片。

第一版只有一个作品，但必须通过数据渲染，不能写死。

每个作品卡片包含：

- 封面图
- 标题
- 副标题
- 简短描述
- 技术标签
- GitHub / Demo 链接

未来新增作品后，自动在这里展示。

### 6.5 Selected Work Showcase

详细展示当前重点作品。

内容包括：

- 这个项目解决什么问题
- 核心功能
- 技术架构
- 关键难点
- 我的开发贡献
- 技术亮点

要求：

- 不堆砌长文字
- 使用分栏、卡片或图文布局
- 重点突出项目价值和技术含量

### 6.6 Visual Gallery

展示项目截图墙。

当前主项目截图顺序：

1. 登录页面
2. 知识库列表
3. 文档管理
4. 问答对话

要求：

- 4 张截图
- 统一 16:9
- 桌面端两列
- 移动端单列
- 图片不能拉伸变形
- 图片卡片风格统一
- 图片缺失时显示美观占位卡片

### 6.7 Tech Stack

按类别展示技术栈。

Frontend:

- React
- TypeScript
- Vite
- Tailwind CSS

Backend:

- Java
- Spring Boot
- MyBatis-Plus
- RESTful API

Database & Middleware:

- MySQL
- Redis
- RabbitMQ

AI Application:

- RAG
- Embedding
- LLM API
- Prompt Engineering

DevOps:

- Docker
- GitHub
- Linux Server
- Environment Variables

### 6.8 Contact

内容：

- GitHub
- Email
- Resume
- 简短联系文案

示例文案：

如果你对 AI 应用开发、RAG 项目实践或后端工程感兴趣，欢迎联系我。

## 7. 未来作品扩展设计

### 7.1 扩展目标

未来新增作品时，不应该大改页面结构。

新增一个作品时，只需要：

1. 在 public/works/{work-slug}/ 下添加作品图片。
2. 在 src/data/works.ts 中新增一条作品数据。
3. 页面自动渲染新的作品卡片、技术标签、截图和链接。

### 7.2 不做在线上传后台

第一版不做在线上传作品功能。

不实现：

- 作品上传后台
- 登录权限
- 数据库
- 图片存储服务
- 管理端编辑页面
- CMS 系统

原因：

当前项目定位是静态作品展示网站，核心目标是精美展示和快速上线。在线上传功能会显著增加复杂度，不符合 MVP 范围。

### 7.3 作品数据结构

每个作品至少包含：

- id
- slug
- title
- subtitle
- description
- longDescription
- coverImage
- screenshots
- tags
- highlights
- techStack
- githubUrl
- demoUrl
- featured
- status

### 7.4 作品资源目录规范

所有作品资源统一放在：

    public/works/{work-slug}/

示例：

    public/works/ai-knowledge-base-qa/
    ├── cover.png
    ├── login.png
    ├── knowledge-base-list.png
    ├── document-management.png
    └── qa-chat.png

### 7.5 未来新增作品流程

新增作品时按以下流程：

1. 创建作品资源目录。
2. 放入 cover 和 screenshots。
3. 在 src/data/works.ts 中新增作品数据。
4. 检查桌面端和移动端展示效果。
5. 运行 npm run build。
6. 提交到 GitHub。
7. 自动部署更新。

## 8. 非目标

本项目第一版不做以下功能：

- 不做登录注册
- 不做后台管理
- 不做数据库
- 不做博客系统
- 不做评论系统
- 不做搜索功能
- 不做用户系统
- 不做复杂路由
- 不接后端接口
- 不做动态项目管理
- 不做在线上传作品
- 不做复杂 CMS

## 9. 技术方案

前端技术栈：

- React
- Vite
- TypeScript
- Tailwind CSS
- Framer Motion
- lucide-react

数据方案：

- 所有展示数据写在本地 TypeScript 配置文件中
- 不请求后端 API
- 不接数据库

图片方案：

- 所有作品图片放在 public/works/{work-slug}/
- 页面通过数据配置引用图片路径
- 图片缺失时显示占位卡片

部署方案：

- 优先部署到 Vercel
- 后续可支持 GitHub Pages

## 10. 视觉风格

整体风格：

- 现代
- 精美
- 科技感
- 深色背景
- 渐变光效
- 玻璃拟态卡片
- 大字号标题
- 高级但不浮夸

视觉关键词：

- Dark Mode
- Gradient
- Glow
- Glassmorphism
- Modern Portfolio
- AI Product Showcase
- Responsive Design

## 11. 响应式要求

必须适配：

- 桌面端
- 平板端
- 手机端

移动端要求：

- 不横向溢出
- 字号合理
- 卡片不拥挤
- 图片比例统一
- 按钮易点击
- 模块上下间距舒适

## 12. 验收标准

第一版完成后必须满足：

1. 页面包含 Navbar、Hero、Featured Works、Works Grid、Selected Work Showcase、Visual Gallery、Tech Stack、Contact。
2. 页面整体精美，有视觉冲击力。
3. 不像后台管理系统，不像普通简历页面。
4. 当前主作品展示清楚。
5. 页面结构支持未来多个作品。
6. 作品卡片通过 works.ts 数据渲染。
7. 截图区域比例统一，不变形。
8. 缺失图片时有美观占位内容。
9. 桌面端和移动端都好看。
10. npm install 成功。
11. npm run dev 成功。
12. npm run build 成功。
13. 没有登录、后台、数据库、API 请求等复杂功能。
14. README 写清楚项目介绍、技术栈、启动方式和部署方式。

## 13. 第一阶段优先级

### P0

- GitHub 仓库初始化
- PRD 编写
- CLAUDE.md 编写
- README 初版
- 页面视觉原型
- 作品数据结构
- 移动端适配
- 项目截图展示

### P1

- 动效优化
- 项目文案优化
- 部署到 Vercel
- GitHub README 优化
- 添加真实项目截图

### P2

- 多项目展示优化
- 中英文切换
- 自定义域名
- 简历下载
- 作品详情页