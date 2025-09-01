/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl:
    process.env.NEXT_PUBLIC_URL || "https://lahiru-s-portfolio.vercel.app",
  generateRobotsTxt: true,
  sitemapSize: 5000,
};
