import { navbar } from "vuepress-theme-hope";

export default navbar([
  { text: "Java面试", icon: "java", link: "/home.md" },
  // "/",
  // "/portfolio", // 档案
  "/demo/", // 功能演示
  {
    text: "指南",
    icon: "lightbulb",
    prefix: "/guide/",
    children: [
      {
        text: "Bar",
        icon: "lightbulb",
        prefix: "bar/",
        children: ["baz", { text: "...", icon: "ellipsis", link: "" }],
      },
      {
        text: "Foo",
        icon: "lightbulb",
        prefix: "foo/",
        children: ["ray", { text: "...", icon: "ellipsis", link: "" }],
      },
    ],
  },
  {
    text: "简历求职",
    prefix: "/work/",
    children: [
      {
        text: "简历网站",
        link: "resume-site/jian-li-wang-zhan-tui-jian.md",
      }
    ]
  },
]);
