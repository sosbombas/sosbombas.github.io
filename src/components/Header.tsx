import Link from "next/link";
import Logo from "@/components/Logo";

const navLinks = [
  { href: "#categorias", label: "Categorias" },
  { href: "#catalogo", label: "Catálogo" },
  { href: "#sobre", label: "Sobre" },
  { href: "#contato", label: "Contato" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-cyan/15 bg-navy/95 backdrop-blur-md">
      <div className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between px-6">
        <Logo height={40} />

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-mono text-[11px] font-medium uppercase tracking-[0.15em] text-muted transition-colors hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="#contato"
          className="rounded-sm bg-amber px-4 py-2.5 text-sm font-semibold text-navy transition-colors hover:bg-[#e69c52]"
        >
          Solicitar orçamento
        </Link>
      </div>
    </header>
  );
}
