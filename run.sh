docker run -it --env-file=.env -e "CONFIG=$(cat /Users/mac/blog/JavasHub/config.json | jq -r tostring)" algolia/docsearch-scraper
