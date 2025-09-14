# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 常用命令

### 开发和构建
- `npm run dev` - 启动开发服务器 (http://localhost:3000)
- `npm run build` - 构建生产版本
- `npm run generate` - 生成静态站点
- `npm run preview` - 本地预览生产构建
- `npm install` - 安装依赖

### 代码质量
- ESLint 配置位于 `eslint.config.mjs`，已禁用 `vue/html-self-closing` 规则

## 项目架构

这是一个基于 Nuxt 4.1.1 的博客应用，采用以下技术栈：

### 核心框架和模块
- **Nuxt.js 4.1.1** - Vue.js 全栈框架
- **@nuxt/content 3.7.0** - 内容管理系统，用于处理 Markdown 文件
- **@nuxt/ui 3.3.3** - UI 组件库
- **@nuxt/image 1.11.0** - 图片优化
- **@nuxt/scripts 0.11.13** - 脚本管理
- **@nuxt/eslint 1.9.0** - ESLint 集成
- **better-sqlite3 12.2.0** - SQLite 数据库

### 目录结构
```
app/
├── app.vue              # 根组件，使用 NuxtLayout 和 NuxtPage
├── pages/               # 页面路由
│   ├── index.vue        # 首页
│   ├── about.vue        # 关于页面
│   └── blog.vue         # 博客页面
├── components/          # Vue 组件
│   └── NavBar.vue       # 导航栏组件
└── layouts/             # 页面布局

content/                 # Markdown 内容文件
├── index.md
└── intro.md

server/
└── api/
    └── first.ts         # API 路由

public/                  # 静态资源

content.config.ts        # Content 模块配置
nuxt.config.ts           # Nuxt 主配置文件
```

### 内容管理
- 使用 `@nuxt/content` 模块管理 Markdown 内容
- 内容配置在 `content.config.ts` 中定义
- 支持 `**/*.md` 模式的页面类型集合

### 开发注意事项
- 项目使用 TypeScript
- ESLint 配置已自定义，禁用了 Vue 的 HTML 自关闭标签规则
- 使用 Nuxt 的文件系统路由
- API 端点位于 `server/api/` 目录