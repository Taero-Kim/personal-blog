import { readdirSync } from "fs";
import { GetServerSideProps } from "next";

interface Page {
  location: string;
  lastMod: string;
}

const BASE_URL = "https://www.taero.blog";

const generateSitemap = (pages: Page[]) => {
  let xml = "";

  pages.map((page: Page) => {
    xml += `<url>
    <loc>${BASE_URL + page.location}</loc>
    <lastmod>${page.lastMod}</lastmod>
  </url>`;
  });

  return `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${xml}
    </urlset>`;
};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const dynamicPages = readdirSync("./posts").map((fileName) => {
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

  res.setHeader("Content-Type", "text/xml");
  res.write(generateSitemap(allPages));
  res.end();

  return { props: {} };
};

const Sitemap = () => {
  return;
};

export default Sitemap;
