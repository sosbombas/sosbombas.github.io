import Link from "next/link";
import Logo from "@/components/Logo";

export default function Footer() {
  return (
    <footer
      id="contato"
      className="border-t border-slate-200/80 bg-white shadow-[0_-4px_24px_-8px_rgb(15_23_42_/_0.06)]"
    >
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <Logo height={36} />
            <p className="mt-4 text-sm leading-relaxed text-slate-500">
              Comércio de bombas e peças para uso industrial, agrícola e
              residencial.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-900">Links</h3>
            <ul className="mt-3 space-y-2">
              {[
                { href: "#categorias", label: "Categorias" },
                { href: "#beneficios", label: "Benefícios" },
                { href: "#sobre", label: "Sobre" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-500 transition-colors hover:text-primary-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-900">Contato</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-500">
              <li>contato@sosbombas.com.br</li>
              <li>(11) 4000-0000</li>
              <li>São Paulo, SP</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-6 text-center text-sm text-slate-400">
          &copy; {new Date().getFullYear()} S.O.S Comércio de bombas e peças
          Ltda. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
