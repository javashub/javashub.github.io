import { hopeTheme } from "vuepress-theme-hope";

import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "https://imlyk.cn/",

  author: {
    name: "JavasHub",
    url: "https://imlyk.cn/",
  },

  // 网站 logo
  logo: "https://theme-hope-assets.vuejs.press/logo.svg",

  // github 仓库
  repo: "https://github.com/javashub/javashub.github.io",

  // 文档目录
  docsDir: "src",

  // 纯净模式 在这个模式下，我们会禁用一些花哨的动画以及一些色彩，只提供功能
  pure: true,

  // 全屏按钮
  fullscreen: true,

  // 导航栏
  navbar,

  // 侧边栏
  sidebar,

  // 页脚
  footer: 'Deploy by VuePress,Theme <a href="https://theme-hope.vuejs.press/zh/" target="_blank">VuePress Theme Hope</a>',
  displayFooter: true,

  // 加密配置
  encrypt: {
    config: {
      "/demo/encrypt.html": {
        hint: "Password: 1234",
        password: "1234",
      },
    },
  },

  // 多语言配置
  metaLocales: {
    // editLink: "在 GitHub 上编辑此页",
  },

  // 如果想要实时查看任何改变，启用它。注: 这对更新性能有很大负面影响
  // hotReload: true,

  // 此处开启了很多功能用于演示，你应仅保留用到的功能。
  markdown: {
    align: true,
    attrs: true,
    codeTabs: true,
    component: true,
    demo: true,
    figure: true,
    gfm: true,
    imgLazyload: true,
    imgSize: true,
    include: true,
    mark: true,
    plantuml: true,
    spoiler: true,
    stylize: [
      {
        matcher: "Recommended",
        replacer: ({ tag }) => {
          if (tag === "em")
            return {
              tag: "Badge",
              attrs: { type: "tip" },
              content: "Recommended",
            };
        },
      },
    ],
    sub: true,
    sup: true,
    tabs: true,
    tasklist: true,
    vPre: true,

    // 取消注释它们如果你需要 TeX 支持
    // math: {
    //   // 启用前安装 katex
    //   type: "katex",
    //   // 或者安装 mathjax-full
    //   type: "mathjax",
    // },

    // 如果你需要幻灯片，安装 @vuepress/plugin-revealjs 并取消下方注释
    // revealjs: {
    //   plugins: ["highlight", "math", "search", "notes", "zoom"],
    // },

    // 在启用之前安装 chart.js
    // chartjs: true,

    // insert component easily

    // 在启用之前安装 echarts
    // echarts: true,

    // 在启用之前安装 flowchart.ts
    // flowchart: true,

    // 在启用之前安装 mermaid
    // mermaid: true,

    // playground: {
    //   presets: ["ts", "vue"],
    // },

    // 在启用之前安装 @vue/repl
    // vuePlayground: true,

    // 在启用之前安装 sandpack-vue3
    // sandpack: true,
  },

  // 在这里配置主题提供的插件
  plugins: {
    // comment: {
    //   // 开启评论服务 参考：https://juejin.cn/post/7261555752586084410
    //   // 1、安装 github.com/apps/giscus
    //   // 2、设置仓库 & 分类 giscus.app/zh-CN
    //   provider: "Giscus",
    //   repo: "javashub/javashub.github.io",
    //   repoId: "R_kgDOOJTEmQ", // 替换下
    //   category: "Announcements",
    //   categoryId: "DIC_kwDOOJTEmc4CoNmU" // 替换下
    // },


    // docsearch 搜索插件选项
    docsearch: {
      // 必填
      apiKey: 'b2a3b223caeed0e8976dcb3f313c5026',
      indexName: 'imlyk',
      appId: 'KH7SY7AEUO',

      // 可选
      placeholder: '搜索文档',
    },

    // 简单一点的搜索
    // slimsearch: { // SlimSearchPluginOptions 对象
    //   // 是否索引正文，默认false
    //   indexContent: true,
    //   // 是否在输入时提供自动建议
    //   suggestion: true,
    //   // 存储查询历史的最大数量,设置 0 时禁用
    //   queryHistoryCount: 5,
    //   // 存储结果历史的最大数量 0 禁用
    //   resultHistoryCount: 5,
    //   // 弹出热键
    //   // hotKeys:
    //   // 自定义 CustomFieldOptions 对象数组
    //   customFields: [
    //
    //   ]
    // },

    // 订阅
    // feed: {
    //   atom: true,
    //   json: true,
    //   rss: true,
    // },

    // 开启复制自动附加版权
    copyright: {
      author: "JavasHub",
      license: "Apache-License 2.0",
      triggerLength: 100,
      maxLength: 700,
      canonical: "http://javashub.cn/",
      global: true,
    },

    components: {
      components: ["Badge", "VPCard"],
    },

    icon: {
      prefix: "fa6-solid:",
    },

    // 如果你需要 PWA。安装 @vuepress/plugin-pwa 并取消下方注释
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cacheImage: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
});
