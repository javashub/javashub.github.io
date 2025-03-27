new Crawler({
    appId: "KH7SY7AEUO",
    indexPrefix: "",
    rateLimit: 8,
    maxUrls: 300,
    schedule: "at 02:00 every 1 day",
    startUrls: ["https://javashub.cn/"],
    sitemaps: [],
    saveBackup: false,
    ignoreQueryParams: ["source", "utm_*"],
    actions: [
        {
            indexName: "javashub",
            pathsToMatch: ["https://javashub.cn/**", "https://www.javashub.cn/**"],
            recordExtractor: ({ url, $, helpers }) => {
                return helpers.article({ $, url });
            },
        },
    ],
    initialIndexSettings: {
        javashub: {
            distinct: true,
            attributeForDistinct: "url",
            searchableAttributes: [
                "unordered(keywords)",
                "unordered(title)",
                "unordered(description)",
                "url",
            ],
            customRanking: ["asc(depth)"],
            attributesForFaceting: ["category"],
        },
    },
    apiKey: "f3ac81adcd737c02a0602fdf7bf1b217",
});
