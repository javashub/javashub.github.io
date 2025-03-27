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
            indexName: "javashub_cn_9ju9ru2as7_articles",
            pathsToMatch: ["https://javashub.cn/**", "https://www.javashub.cn/**"],
            recordExtractor: ({ url, $, helpers }) => {
                return helpers.article({ $, url });
            },
        },
        {
            indexName: "javashub_cn_9ju9ru2as7_products",
            pathsToMatch: ["https://javashub.cn/**", "https://www.javashub.cn/**"],
            recordExtractor: ({ url, $, helpers }) => {
                return helpers.product({ $, url });
            },
        },
        {
            indexName: "javashub_cn_9ju9ru2as7_pages",
            pathsToMatch: ["https://javashub.cn/**", "https://www.javashub.cn/**"],
            recordExtractor: ({ url, $, helpers, contentLength, fileType }) => {
                return helpers.page({ $, url, contentLength, fileType });
            },
        },
    ],
    initialIndexSettings: {
        javashub_cn_9ju9ru2as7_articles: {
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
        javashub_cn_9ju9ru2as7_products: {
            distinct: true,
            attributeForDistinct: "url",
            searchableAttributes: [
                "unordered(name)",
                "unordered(description)",
                "url",
            ],
            customRanking: ["asc(depth)"],
            attributesForFaceting: ["category"],
        },
        javashub_cn_9ju9ru2as7_pages: {
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
