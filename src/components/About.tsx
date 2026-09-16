import { Award, Truck, ShieldCheck, Wrench, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const highlights = [
  { code: "01", label: "Marcas líderes do mercado", icon: Award },
  { code: "02", label: "Entrega em todo o Brasil", icon: Truck },
  { code: "03", label: "Garantia de fábrica", icon: ShieldCheck },
  { code: "04", label: "Assistência técnica autorizada", icon: Wrench },
];

const commitments = [
  { value: "48h", label: "Envio médio p/ Sudeste" },
  { value: "30+", label: "Engenheiros de aplicação" },
  { value: "98%", label: "Satisfação dos clientes" },
  { value: "24/7", label: "Suporte via WhatsApp" },
];

export default function About() {
  return (
    <section id="sobre" className="bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.15em] text-amber-dark">
              Sobre a empresa
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold uppercase leading-none tracking-tight text-navy md:text-4xl">
              Especialistas em bombas hidráulicas
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-steel">
              Há mais de 20 anos no mercado, a S.O.S reúne as melhores marcas e
              modelos de bombas hidráulicas em um catálogo digital completo e
              fácil de navegar.
            </p>
            <p className="mt-4 max-w-md leading-relaxed text-steel">
              Seja para irrigação agrícola, abastecimento industrial ou uso
              residencial, nossa equipe técnica está pronta para indicar a
              solução ideal para cada projeto.
            </p>

            <ul className="mt-8 divide-y divide-navy/10 border-y border-navy/10">
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <li
                    key={item.code}
                    className="flex items-center gap-4 py-3.5 text-sm text-navy"
                  >
                    <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border border-navy/15 text-navy">
                      <Icon strokeWidth={1.5} className="h-4 w-4" />
                    </span>
                    <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-amber-dark">
                      {item.code}
                    </span>
                    {item.label}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="relative overflow-hidden rounded-xl border border-navy/10 bg-navy p-8 md:p-10">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(95,201,222,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(95,201,222,0.06)_1px,transparent_1px)] bg-[size:32px_32px]" />
            <div className="pointer-events-none absolute inset-4 hidden sm:block">
              <span className="absolute left-0 top-0 h-3 w-3 rounded-tl-sm border-l border-t border-cyan/40" />
              <span className="absolute right-0 top-0 h-3 w-3 rounded-tr-sm border-r border-t border-cyan/40" />
              <span className="absolute bottom-0 left-0 h-3 w-3 rounded-bl-sm border-b border-l border-cyan/40" />
              <span className="absolute bottom-0 right-0 h-3 w-3 rounded-br-sm border-b border-r border-cyan/40" />
            </div>

            <div className="relative">
              <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-cyan">
                Compromisso de atendimento · REV. 2026
              </span>
              <p className="mt-4 max-w-xs font-display text-2xl font-bold uppercase leading-tight tracking-tight text-ink">
                Engenharia de aplicação para cada projeto
              </p>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
                Seleção por vazão, pressão e potência — com suporte técnico
                antes e depois da venda.
              </p>

              <div className="mt-8 grid grid-cols-2 divide-x divide-y divide-cyan/15 overflow-hidden rounded-lg border border-cyan/15">
                {commitments.map((item) => (
                  <div key={item.label} className="px-4 py-5">
                    <div className="font-mono text-xl font-semibold text-ink">
                      {item.value}
                    </div>
                    <div className="mt-1 font-mono text-[10px] uppercase tracking-wider text-muted">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href="#contato"
                className="mt-8 inline-flex items-center gap-1.5 rounded-lg border border-cyan/30 px-5 py-2.5 font-mono text-[11px] uppercase tracking-wider text-cyan transition-colors hover:border-amber-dark hover:text-amber-dark"
              >
                Falar com um especialista
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}