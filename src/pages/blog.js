import Head from "next/head";

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog de SEO y Next.js: Guías de Optimización | Mi Sitio</title>
        <meta
          name="description"
          content="Artículos y guías prácticas sobre SEO, meta tags, sitemap y rendimiento en Next.js para posicionar tu sitio mejor en Google."
        />
        <meta property="og:title" content="Blog de SEO y Next.js: Guías de Optimización" />
        <meta
          property="og:description"
          content="Guías prácticas sobre SEO, sitemap y rendimiento en Next.js."
        />
        <meta property="og:image" content="https://lab-14-seo.onrender.com/images/seo-image.png" />
        <meta property="og:url" content="https://lab-14-seo.onrender.com/blog" />
        <meta property="og:type" content="article" />
      </Head>

      <h1>Blog de SEO y Next.js</h1>
      <p>Guías para mejorar el posicionamiento y el rendimiento de tu sitio.</p>
      <ul>
        <li>Cómo escribir meta tags que mejoren tu ranking</li>
        <li>Sitemap dinámico en Next.js paso a paso</li>
        <li>Optimización de imágenes y fuentes con Next.js</li>
      </ul>
    </>
  );
}