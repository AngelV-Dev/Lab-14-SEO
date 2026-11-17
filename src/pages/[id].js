import Head from "next/head";

export async function getServerSideProps({ params }) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
  if (!res.ok) return { notFound: true };
  const post = await res.json();
  return { props: { post } };
}

export default function Post({ post }) {
  const title = `${post.title.slice(0, 50)} | Blog SEO`;
  const description = post.body.replace(/\n/g, " ").slice(0, 155);
  const url = `https://lab-14-seo.onrender.com/blog/${post.id}`;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="https://lab-14-seo.onrender.com/images/seo-image.png" />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="article" />
      </Head>

      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </>
  );
}