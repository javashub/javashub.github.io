new Crawler({
    appId: "9JU9RU2AS7",
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
    apiKey: "3e81bda5968abae8996965fa0e491dd4",
});
