# create-rn-web-template

一个用于快速创建 React Native Web 项目的命令行工具。

## 特性

- 🚀 快速创建 React Native Web 项目
- 📱 支持 Web 和移动端开发
- 🎨 内置基础样式和布局
- 📦 包含必要的依赖配置
- 🔧 TypeScript 支持
- 📝 详细的文档和注释

## 快速开始

使用 npm:

```bash
npx create-rn-web my-app
```

使用 yarn:

```bash
yarn create rn-web my-app
```

## 使用方法

1. 创建新项目：

```bash
npx create-rn-web my-app
```

2. 进入项目目录：

```bash
cd my-app
```

3. 安装依赖：

```bash
npm install
```

4. 启动开发服务器：

```bash
npm start
```

5. 在浏览器中访问 http://localhost:3000

## 项目结构

```
my-app/
  ├── public/              # 静态资源
  │   ├── index.html      # HTML 模板
  │   └── manifest.json   # Web 应用清单
  ├── src/                # 源代码
  │   ├── App.tsx        # 主应用组件
  │   └── index.tsx      # 入口文件
  ├── package.json       # 项目配置
  └── tsconfig.json     # TypeScript 配置
```

## 可用脚本

- `npm start` - 启动开发服务器
- `npm build` - 构建生产版本
- `npm test` - 运行测试
- `npm run eject` - 弹出配置文件

## 技术栈

- React
- React Native
- React Native Web
- TypeScript
- React DOM
- React Scripts

## 浏览器支持

- Chrome (最新版)
- Firefox (最新版)
- Safari (最新版)
- Edge (最新版)

## 贡献指南

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情 