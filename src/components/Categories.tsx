import Link from "next/link";
import { Fan, Waves, Home, Gauge, ArrowUpRight } from "lucide-react";

const categories = [
  {
    code: "SÉRIE CF",
    title: "Centrífugas",
    slug: "bomba-centrifuga-imbil",
    description:
      "Alta vazão para irrigação, abastecimento e processos industriais.",
    icon: Fan,
  },
  {
    code: "SÉRIE SB",
    title: "Submersíveis",
    slug: "bomba-submersivel-bs-200",
    description:
      "Ideais para poços artesianos, drenagem e transferência de água.",
    icon: Waves,
  },
  {
    code: "SÉRIE PF",
    title: "Periféricas",
    slug: "bomba-periferica-bp-50",
    description:
      "Compactas e eficientes para uso doméstico e pequenos sistemas.",
    icon: Home,
  },
  {
    code: "SÉRIE AP",
    title: "Alta Pressão",
    slug: "bomba-alta-pressao-bap-300",
    description:
      "Para aplicações que exigem pressão elevada e desempenho contínuo.",
    icon: Gauge,
  },
];

export default function Categories() {
  return (
    <section id="categorias" className="bg-[#f8fafc] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-4 border-b border-[#0A3B52]/10 pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.15em] text-[#E2954A]">
              Índice de categorias
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold uppercase leading-none tracking-tight text-[#0A3B52] md:text-4xl">
              Categorias de bombas
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-[#4E7A8C]">
            Quatro famílias de produto, cada uma com ficha técnica própria e
            faixa de aplicação definida.
          </p>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-[#0A3B52]/10 bg-[#0A3B52]/10 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Link
                key={category.title}
                href={`/produto/${category.slug}`}
                className="group flex flex-col bg-[#f8fafc] p-6 transition-colors hover:bg-white"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#0A3B52]/15 text-[#0A3B52] transition-colors group-hover:border-[#E2954A] group-hover:text-[#E2954A]">
                    <Icon strokeWidth={1.5} className="h-5 w-5" />
                  </div>
                  <ArrowUpRight
                    strokeWidth={1.5}
                    className="h-4 w-4 text-[#0A3B52]/20 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#E2954A]"
                  />
                </div>

                <span className="mt-5 font-mono text-[10px] uppercase tracking-[0.15em] text-[#4E7A8C]">
                  {category.code}
                </span>
                <h3 className="mt-1 text-lg font-semibold text-[#0A3B52]">
                  {category.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#4E7A8C]">
                  {category.description}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}