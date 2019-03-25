# Antd_project

> 这是一个基于 create-react-app 的多页 antd 项目框架

## 项目结构

```
├── LICENSE
├── README.md
├── config                           # webpavk配置文件夹
│   ├── env.js
│   ├── jest
│   │   ├── cssTransform.js
│   │   └── fileTransform.js
│   ├── paths.js                     # 一些路径常量
│   ├── webpack.config.dev.js        # 开发模式webpack配置
│   ├── webpack.config.prod.js       # 生产模式webpack配置
│   └── webpackDevServer.config.js   # 热加载配置
├── package.json
├── prettier.config.js               # prettier配置文件
├── public                           # 公共资源
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
├── scripts                          # scripts 脚本文件目录
│   ├── build.js                     # 构建
│   ├── new.js                       # 新建 page/component 目录
│   ├── start.js                     # 开发
│   └── test.js                      # 测试
├── src
│   ├── components                   # 公用组件
│   ├── http                         # 封装请求
│   │   ├── axios.js                 # 配置 axios 全局拦截器
│   │   ├── config.js                # 公用配置文件
│   │   ├── example                  # 已页面为单位的 api 声明目录
│   │   │   └── example.js
│   │   └── index.js                 # 导出所有 api
│   ├── index.js
│   ├── pages                        # 页面目录
│   │   └── index                    # index 页面
│   │       ├── App.js               # 配置 React-router
│   │       ├── index.js             # 入口文件
│   │       ├── index.scss
│   │       ├── serviceWorker.js
│   │       └── veiws                # 页面下视图目录(由react-router路由)
│   │          └── index
│   │              ├── index.js
│   │              └── index.scss
│   ├── setuProxy.js                 # 开发模式代理文件
│   ├── style                        # 全局scss目录
│   │   ├── global.scss              # 全局
│   │   ├── mixins.scss              # mixin
│   │   └── variable.scss            # sass变量
│   └── utils                        # 工具文件
│       ├── index.js                 # 入口/导出
│       └── template                 # new scripts 的模板文件
│           ├── component
│           │   ├── hello.jsx
│           │   └── hello.scss
│           └── page
│               ├── App.js
│               ├── index.js
│               ├── index.scss
│               ├── serviceWorker.js
│               └── veiws
│                   └── newView
│                       ├── index.js
│                       └── index.scss
└── yarn.lock
```