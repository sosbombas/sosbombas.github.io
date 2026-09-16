import Link from "next/link";
import Logo from "@/components/Logo";

const links = [
  { href: "#categorias", label: "Categorias" },
  { href: "catalogo", label: "Catálogo" },
  { href: "#sobre", label: "Sobre" },
];

export default function Footer() {
  return (
    <footer id="contato" className="border-t border-cyan/15 bg-navy">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Logo height={36} />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              Comércio de bombas e peças para uso industrial, agrícola e
              residencial.
            </p>
          </div>

          <div>
            <h3 className="font-mono text-[11px] uppercase tracking-[0.15em] text-cyan">
              Índice
            </h3>
            <ul className="mt-4 space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-[11px] uppercase tracking-[0.15em] text-cyan">
              Contato
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li>contato@sosbombas.com.br</li>
              <li>(11) 4000-0000</li>
              <li>São Paulo, SP</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-cyan/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[11px] uppercase tracking-wider text-muted">
            &copy; {new Date().getFullYear()} S.O.S Comércio de bombas e peças
            Ltda.
          </p>
          <p className="font-mono text-[10px] uppercase tracking-wider text-cyan/50">
            DESENHO Nº WEB-01 · REV. 2026
          </p>
        </div>
      </div>
    </footer>
  );
}
