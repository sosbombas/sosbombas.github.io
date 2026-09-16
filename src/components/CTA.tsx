import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-navy py-16 md:py-20">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(143,207,234,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(143,207,234,0.06)_1px,transparent_1px)] bg-[size:32px_32px]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_0%,rgba(143,207,234,0.10),transparent_55%)]" />

      <div className="pointer-events-none absolute inset-6 hidden lg:block">
        <span className="absolute left-0 top-0 h-4 w-4 border-l border-t border-cyan/40" />
        <span className="absolute right-0 top-0 h-4 w-4 border-r border-t border-cyan/40" />
        <span className="absolute bottom-0 left-0 h-4 w-4 border-b border-l border-cyan/40" />
        <span className="absolute bottom-0 right-0 h-4 w-4 border-b border-r border-cyan/40" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-start justify-between gap-8 border-y border-cyan/15 py-10 sm:flex-row sm:items-center">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.15em] text-cyan">
              <span className="h-1.5 w-1.5 rounded-full bg-amber" />
              Engenharia de aplicação
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold uppercase leading-none tracking-tight text-ink md:text-4xl">
              Precisa de ajuda para escolher?
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
              Nossa equipe técnica indica a bomba ideal pela curva de vazão e
              pressão. Solicite um orçamento sem compromisso.
            </p>
          </div>

          <Link
            href="#contato"
            className="inline-flex h-12 shrink-0 items-center justify-center rounded-sm bg-amber px-7 text-sm font-semibold text-navy transition-colors hover:bg-[#e69c52]"
          >
            Solicitar orçamento
          </Link>
        </div>
      </div>
    </section>
  );
}
