import {defineUserConfig} from "vuepress";
import {addViteConfig} from "@vuepress/helper";
import postcssPresetEnv from "postcss-preset-env";
import theme from "./theme.js";


export default defineUserConfig({
    base: "/",

    lang: "zh-CN",
    title: "JavasHub",
    description: "描述信息",

    theme,

    // 对更低版本的浏览器提供支持
    extendsBundlerOptions: (config, app) => {
        addViteConfig(config, app, {
            css: {
                postcss: {
                    plugins: [postcssPresetEnv()],
                },
            },
        });
    },

    // index.html中注入 head
    head: [
        [
            "link",
            { rel: "stylesheet" , href: "https://cdn.jsdelivr.net/npm/@docsearch/css@3"}
        ],
        [
            "script",
            { src: "https://cdn.jsdelivr.net/npm/@docsearch/js@3"}
        ]
    ]

    // 和 PWA 一起启用
    // shouldPrefetch: false,
});
