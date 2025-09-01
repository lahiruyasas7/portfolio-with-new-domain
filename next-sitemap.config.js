/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl:
    process.env.NEXT_PUBLIC_URL || "https://lahirukarunathilaka.web.lk",
  generateRobotsTxt: true,
  sitemapSize: 5000,
};
