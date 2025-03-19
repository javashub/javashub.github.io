import { defineUserConfig } from "vuepress";
import { addViteConfig } from "@vuepress/helper";
import postcssPresetEnv from "postcss-preset-env";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "JavasHub",
  description: "",

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

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
