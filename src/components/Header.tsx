import Link from "next/link";
import Logo from "@/components/Logo";

const navLinks = [
  { href: "#categorias", label: "Categorias" },
  { href: "#beneficios", label: "Benefícios" },
  { href: "#sobre", label: "Sobre" },
  { href: "#contato", label: "Contato" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/90 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between px-6">
        <Logo height={40} />

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-primary-600"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="#contato"
          className="rounded-lg bg-gradient-to-b from-primary-500 to-primary-700 px-4 py-2.5 text-sm font-medium text-white shadow-md shadow-primary-600/25 transition-all hover:from-primary-600 hover:to-primary-800 hover:shadow-lg hover:shadow-primary-600/30"
        >
          Solicitar orçamento
        </Link>
      </div>
    </header>
  );
}
