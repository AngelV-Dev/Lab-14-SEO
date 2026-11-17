import Link from "next/link";
import { useRouter } from "next/router";

const links = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/contacto", label: "Contacto" },
];

export default function Navbar() {
  const { pathname } = useRouter();

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav className="cy-nav">
      <Link href="/" className="cy-logo">Mi Sitio SEO</Link>
      <div className="cy-links">
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className={`cy-link ${isActive(l.href) ? "active" : ""}`}
          >
            {l.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}