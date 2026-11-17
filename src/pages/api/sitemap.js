const BASE_URL = "https://lab-14-seo.onrender.com";
const staticUrls = ["/", "/blog", "/contacto"];

async function getPostUrls() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
    if (!res.ok) return [];
    const posts = await res.json();
    return posts.map((post) => `/blog/${post.id}`);
  } catch {
    return [];
  }
}

export default async function handler(req, res) {
  const urls = [...staticUrls, ...(await getPostUrls())];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls.map((url) => `<url><loc>${BASE_URL}${url}</loc></url>`).join("")}
</urlset>`;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();
}