import { readdirSync, writeFileSync } from "fs";

const BASE_URL = "https://www.taero.blog";

(async () => {
  const generateSitemap = (pages) => {
    let xml = "";

    pages.map((page) => {
      xml += `
    <url>
      <loc>${BASE_URL + page.location}</loc>
      <lastmod>${page.lastMod}</lastmod>
    </url>`;
    });

    return `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${xml}
      </urlset>`;
  };

  const dynamicPages = readdirSync("../posts").map((fileName) => {
    const file = fileName.replace(".mdx", "");

    return { location: `/posts/${file}`, lastMod: new Date().toISOString() };
  });

  const allPages = [
    {
      location: "",
      lastMod: new Date().toISOString(),
    },
    {
      location: "/about",
      lastMod: new Date().toISOString(),
    },
    ...dynamicPages,
  ];

  writeFileSync("../public/sitemap.xml", generateSitemap(allPages), "utf8");
})();
