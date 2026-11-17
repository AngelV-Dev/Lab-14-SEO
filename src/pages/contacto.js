import Head from "next/head";

export default function Contacto() {
  return (
    <>
      <Head>
        <title>Contacto: Consultoría SEO con Next.js | Mi Sitio</title>
        <meta
          name="description"
          content="Contáctanos para recibir asesoría en SEO, optimización web y desarrollo con Next.js. Escríbenos y mejora el posicionamiento de tu sitio."
        />
        <meta property="og:title" content="Contacto: Consultoría SEO con Next.js" />
        <meta
          property="og:description"
          content="Escríbenos para recibir asesoría en SEO y optimización web con Next.js."
        />
        <meta property="og:image" content="https://lab-14-seo.onrender.com/images/seo-image.png" />
        <meta property="og:url" content="https://lab-14-seo.onrender.com/contacto" />
        <meta property="og:type" content="website" />
      </Head>

      <h1>Contacto</h1>
      <p>¿Quieres mejorar el SEO de tu sitio? Escríbenos y te ayudamos.</p>
    </>
  );
}