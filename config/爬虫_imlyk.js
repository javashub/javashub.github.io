new Crawler({
    appId: "KH7SY7AEUO", // imlyk 的 Algolia App ID
    apiKey: "c8df03a5a5e8ac753a318c6595fb6658",
    rateLimit: 8,
    startUrls: [
        // 这是 Algolia 开始抓取网站的初始地址
        // 如果你的网站被分为数个独立部分，你可能需要在此设置多个入口链接
        "https://javashub.cn", "https://www.javashub.cn"
    ],
    sitemaps: [
        // 如果你在使用 Sitemap 插件 (如: @vuepress/plugin-sitemap)，你可以提供 Sitemap 链接
        "https://javashub.cn/sitemap.xml",
    ],
    ignoreCanonicalTo: false,
    exclusionPatterns: [
        // 你可以通过它阻止 Algolia 抓取某些 URL
    ],
    discoveryPatterns: [
        // 这是 Algolia 抓取 URL 的范围
        "https://javashub.cn/**",
    ],
    // 爬虫执行的计划时间，可根据文档更新频率设置
    schedule: "at 02:00 every 1 day",
    actions: [
        // 你可以拥有多个 action，特别是你在一个域名下部署多个文档时
        {
            // 使用适当的名称为索引命名
            indexName: "javashub",
            // 索引生效的路径
            pathsToMatch: [
                "https://javashub.cn/**",
                "https://www.javashub.cn/**"
            ],
            // 控制 Algolia 如何抓取你的站点
            recordExtractor: ({ $, helpers }) => {
                // 以下是适用于 vuepress-theme-hope 的默认选项选项
                return helpers.docsearch({
                    recordProps: {
                        lvl0: {
                            selectors: [".vp-sidebar-link.active", "[vp-content] h1"],
                            defaultValue: "Documentation",
                        },
                        lvl1: "[vp-content] h1",
                        lvl2: "[vp-content] h2",
                        lvl3: "[vp-content] h3",
                        lvl4: "[vp-content] h4",
                        lvl5: "[vp-content] h5",
                        lvl6: "[vp-content] h6",
                        content: "[vp-content] p, [vp-content] ul, [vp-content] li",
                    },
                    recordVersion: "v3",
                });
            },
        },
    ],
    initialIndexSettings: {
        // 控制索引如何被初始化，这仅当索引尚未生成时有效
        // 你可能需要在修改后手动删除并重新生成新的索引
        YOUR_INDEX_NAME: {
            attributesForFaceting: ["type", "lang"],
            attributesToRetrieve: ["hierarchy", "content", "anchor", "url"],
            attributesToHighlight: ["hierarchy", "hierarchy_camel", "content"],
            attributesToSnippet: ["content:10"],
            camelCaseAttributes: ["hierarchy", "hierarchy_radio", "content"],
            searchableAttributes: [
                "unordered(hierarchy_radio_camel.lvl0)",
                "unordered(hierarchy_radio.lvl0)",
                "unordered(hierarchy_radio_camel.lvl1)",
                "unordered(hierarchy_radio.lvl1)",
                "unordered(hierarchy_radio_camel.lvl2)",
                "unordered(hierarchy_radio.lvl2)",
                "unordered(hierarchy_radio_camel.lvl3)",
                "unordered(hierarchy_radio.lvl3)",
                "unordered(hierarchy_radio_camel.lvl4)",
                "unordered(hierarchy_radio.lvl4)",
                "unordered(hierarchy_radio_camel.lvl5)",
                "unordered(hierarchy_radio.lvl5)",
                "unordered(hierarchy_radio_camel.lvl6)",
                "unordered(hierarchy_radio.lvl6)",
                "unordered(hierarchy_camel.lvl0)",
                "unordered(hierarchy.lvl0)",
                "unordered(hierarchy_camel.lvl1)",
                "unordered(hierarchy.lvl1)",
                "unordered(hierarchy_camel.lvl2)",
                "unordered(hierarchy.lvl2)",
                "unordered(hierarchy_camel.lvl3)",
                "unordered(hierarchy.lvl3)",
                "unordered(hierarchy_camel.lvl4)",
                "unordered(hierarchy.lvl4)",
                "unordered(hierarchy_camel.lvl5)",
                "unordered(hierarchy.lvl5)",
                "unordered(hierarchy_camel.lvl6)",
                "unordered(hierarchy.lvl6)",
                "content",
            ],
            distinct: true,
            attributeForDistinct: "url",
            customRanking: [
                "desc(weight.pageRank)",
                "desc(weight.level)",
                "asc(weight.position)",
            ],
            ranking: [
                "words",
                "filters",
                "typo",
                "attribute",
                "proximity",
                "exact",
                "custom",
            ],
            highlightPreTag:
                '<span class="algolia-docsearch-suggestion--highlight">',
            highlightPostTag: "</span>",
            minWordSizefor1Typo: 3,
            minWordSizefor2Typos: 7,
            allowTyposOnNumericTokens: false,
            minProximity: 1,
            ignorePlurals: true,
            advancedSyntax: true,
            attributeCriteriaComputedByMinProximity: true,
            removeWordsIfNoResults: "allOptional",
        },
    },
});
