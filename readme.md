### 微信小程序后端程序

```javascript
|-- WeChatApp_back-end
    |-- .babelrc
    |-- .gitignore
    |-- app.js	      // 项目入口文件
    |-- index.js      // @babel/register 入口文件
    |-- nodemon.json
    |-- package.json
    |-- README.md 
    |-- .vscode
    |   |-- launch.json
    |-- config        // 数据库和微信小程序的配置文件，其中 .env 和 .env.prod 文件未上传到仓库
    |   |-- .env
    |   |-- .env.prod
    |   |-- configs.js
    |   |-- index.js
    |-- controller
    |   |-- basic     // 基础页面的 controller
    |   |   |-- getCards.js
    |   |   |-- index.js
    |   |   |-- login.js
    |   |-- card      // 帖子相关的 controller
    |       |-- getCardComments.js
    |       |-- index.js
    |-- migrations    // sequlize 迁移文件
    |   |-- 20200229134858-create-user.js
    |   |-- 20200315123638-create-cards.js
    |   |-- 20200315124015-create-personal-info.js
    |   |-- 20200315124103-create-school-Info.js
    |   |-- 20200323030705-create-user-card-like.js
    |   |-- 20200323030716-create-user-info.js
    |   |-- 20200323030741-create-comment.js
    |   |-- 20200323030801-create-user-comment-like.js
    |-- models        // sequlize model 文件
    |   |-- cards.js
    |   |-- comments.js
    |   |-- index.js
    |   |-- personalInfo.js
    |   |-- schoolInfo.js
    |   |-- userCardLike.js
    |   |-- userCommentLike.js
    |   |-- userInfo.js
    |   |-- users.js
    |-- plugins       // hapi 插件
    |   |-- hapi_swagger.js
    |-- routes        // 项目路由
    |   |-- index.js
    |   |-- route_basic.js
    |   |-- route_card.js
    |-- seeders       // sequlize 种子文件
    |   |-- 20200315135026-init-user.js
    |   |-- 20200315135040-init-card.js
    |   |-- 20200315135059-init-personal-Info.js
    |   |-- 20200315135128-init-school-info.js
    |   |-- 20200323030705-init-user-card-like.js
    |   |-- 20200323030716-init-user-info.js
    |   |-- 20200325164437-init-comment.js
    |   |-- 20200325164517-init-user-comment-like.js
    |-- utils         // 通用工具函数
        |-- utils.js
// 使用 mddir 生成目录结构
```


