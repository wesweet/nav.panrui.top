
# 项目技术栈

- [x] nuxt
- [x] less
- [x] vue3
- [x] vue-router
- [x] element-plus
- [x] nuxtjs/axios

# 文档说明

1. Nuxt.js 会依据 pages 目录中的所有 *.vue 文件生成应用的路由配置
2. 资源目录 assets 用于组织未编译的静态资源如 LESS、SASS 或 JavaScript
3. 组件目录 components 用于组织应用的 Vue.js 组件
4. 布局目录 layouts 用于组织应用的布局组件
5. middleware 目录用于存放应用的中间件
6. 插件目录 plugins 用于组织那些需要在 根vue.js应用 实例化之前需要运行的 Javascript 插件
7. 静态文件目录 static 用于存放应用的静态文件，此类文件不会被 Nuxt.js 调用 Webpack 进行构建编译处理。服务器启动的时候，该目录下的文件会映射至应用的根路径 / 下
8. store 目录用于组织应用的 Vuex 状态树 文件。 Nuxt.js 框架集成了 Vuex 状态树 的相关功能配置，在 store 目录下创建一个 index.js 文件可激活这些配置
9. nuxt.config.js 文件用于组织 Nuxt.js 应用的个性化配置，以便覆盖默认配置

# 版本记录

### master

##### 菜单数据使用接口获取 (未开发)
