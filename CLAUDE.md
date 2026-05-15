## 1. Project Overview

This project is a personal works collection website.

The website is used to showcase my development projects, technical skills, project screenshots, project highlights, GitHub links, demo links, and contact information.

This is not a complex business system. It is a static and visually polished portfolio showcase website.

The first version focuses on showcasing one main work:

AI Knowledge Base QA Platform / AI 知识库问答平台

However, the project structure must support adding more works in the future.

## 2. Core Goal

Build a modern, beautiful, responsive works showcase website.

The website should:

- Attract attention at first glance
- Clearly display my project works
- Look professional and polished
- Work well on desktop and mobile
- Be suitable for GitHub, resume, and interview presentation
- Support future works expansion
- Stay simple and easy to maintain

## 3. Important Product Constraint

This project is only for showcasing works.

Do not implement:

- Login
- Register
- Admin panel
- Backend API
- Database
- Blog CMS
- Comment system
- Search system
- User system
- Image upload system
- Online work management system
- Complex routing
- Authentication
- Authorization

All project data should be local static frontend data.

Future works should be added by editing local data files and adding image assets, not by building an online upload backend.

## 4. Tech Stack

Use:

- React
- Vite
- TypeScript
- Tailwind CSS
- Framer Motion
- lucide-react

Do not use:

- Large UI frameworks
- Backend frameworks
- Database
- Heavy animation libraries
- Unnecessary dependencies
- Complex state management libraries unless truly needed

## 5. Design Direction

The design should follow a modern AI product portfolio style.

Visual keywords:

- Dark Mode
- Gradient Background
- Glassmorphism
- Soft Glow
- Large Typography
- Premium Cards
- Smooth Hover Animation
- Project Screenshot Showcase
- Responsive Layout
- Modern Portfolio
- AI Product Showcase

The final page should not look like:

- A dashboard
- A plain resume
- A backend admin system
- A generic template
- A cluttered landing page

## 6. Page Sections

The website should be a single-page layout with the following sections:

1. Navbar
2. Hero
3. Featured Works
4. Works Grid
5. Selected Work Showcase
6. Visual Gallery
7. Tech Stack
8. Contact
9. Footer

## 7. Future Works Expansion Rule

This website must be designed as an expandable works showcase.

The first version may only contain one featured work, but the code structure must support multiple works in the future.

Do not hard-code the page for only one project.

Use a local data file:

    src/data/works.ts

All project cards, featured works, screenshots, tags, highlights, tech stacks, GitHub links, and demo links should be rendered from this data file.

## 8. Asset Rule

Each work should have its own asset folder:

    public/works/{work-slug}/

Example:

    public/works/ai-knowledge-base-qa/
    ├── cover.png
    ├── login.png
    ├── knowledge-base-list.png
    ├── document-management.png
    └── qa-chat.png

When adding a new work in the future:

1. Add image assets under public/works/{work-slug}/
2. Add a new work object in src/data/works.ts
3. The UI should automatically render the new work
4. No core component rewrite should be required

## 9. Suggested Work Data Structure

Create a reusable Work type.

Suggested structure:

    export type Work = {
      id: string;
      slug: string;
      title: string;
      subtitle?: string;
      description: string;
      longDescription?: string;
      coverImage: string;
      screenshots: WorkScreenshot[];
      tags: string[];
      highlights: string[];
      techStack: WorkTechStackGroup[];
      githubUrl?: string;
      demoUrl?: string;
      featured: boolean;
      status?: "completed" | "in-progress" | "planned";
    };

    export type WorkScreenshot = {
      title: string;
      image: string;
      description?: string;
    };

    export type WorkTechStackGroup = {
      category: string;
      items: string[];
    };

## 10. Current Main Work Content

The first work is:

### AI Knowledge Base QA Platform

Chinese name:

AI 知识库问答平台

Description:

一个基于 RAG 的 AI 知识库问答平台，支持知识库管理、文档上传、文档解析、切片、向量化、自然语言问答、答案引用、问答日志、环境变量配置和前端可视化管理。

Tags:

- React
- TypeScript
- Spring Boot
- MySQL
- Redis
- RabbitMQ
- RAG
- Embedding
- LLM API
- Docker

Highlights:

- 基于 RAG 实现知识库智能问答
- 支持文档上传、解析、切片和向量化
- 支持答案引用来源，降低大模型幻觉风险
- 支持知识库管理和文档管理
- 支持问答对话界面
- 支持 Docker Compose 启动基础依赖
- 支持环境变量配置和部署说明

Screenshots should be displayed in this order:

1. 登录页面
2. 知识库列表
3. 文档管理
4. 问答对话

## 11. Visual Gallery Rules

All screenshots must follow these rules:

- Use 16:9 aspect ratio
- Do not stretch images
- Use consistent card size
- Desktop: two-column grid
- Mobile: one-column layout
- If images are missing, show polished placeholders
- Do not show broken images
- Do not expose private data in screenshots

## 12. Component Requirements

Components should be reusable and data-driven.

Suggested components:

    src/components/
    ├── Navbar.tsx
    ├── Hero.tsx
    ├── FeaturedWorks.tsx
    ├── WorksGrid.tsx
    ├── WorkCard.tsx
    ├── SelectedWorkShowcase.tsx
    ├── WorkGallery.tsx
    ├── TechStack.tsx
    ├── Contact.tsx
    └── Footer.tsx

Suggested data files:

    src/data/
    ├── works.ts
    └── techStack.ts

Suggested type files:

    src/types/
    └── work.ts

## 13. Code Quality Rules

Follow these rules:

- Use TypeScript types clearly
- Keep components small and focused
- Separate data from UI
- Render works from works.ts
- Do not hard-code only one work in components
- Use Tailwind CSS for styling
- Add short comments for important components
- Avoid duplicated content
- Avoid unnecessary abstraction
- Avoid complex business logic
- Keep the first version simple and polished
- Make sure mobile layout is carefully handled

## 14. Animation Rules

Allowed:

- Hero fade-in
- Card hover lift
- Button hover glow
- Section reveal animation
- Subtle background gradient movement
- Smooth scroll
- Light micro-interactions

Not allowed:

- Excessive rotation
- Flashing animations
- Complex 3D effects
- Animations that hurt readability
- Too many motion effects at the same time
- Performance-heavy animation

## 15. Development Workflow

Before implementing code:

1. Read docs/PRD.md
2. Read docs/DESIGN_GUIDE.md
3. Read docs/ASSETS_CHECKLIST.md
4. Confirm the project is a static works showcase website
5. Do not add unnecessary features

After completing each module:

1. Check visual quality
2. Check responsive layout
3. Check TypeScript errors
4. Run build
5. Summarize what changed
6. Review before moving to the next module

Do not start a new module before the previous module is reviewed.

## 16. Acceptance Criteria

The first version is accepted only when:

- The page includes all required sections
- The page looks visually polished
- The Hero section is attractive
- The works section supports multiple works
- The current main work is clearly displayed
- Screenshot cards use consistent 16:9 ratio
- Desktop layout works well
- Mobile layout works well
- npm install works
- npm run dev works
- npm run build works
- No backend/API/database/login features are added
- README is updated