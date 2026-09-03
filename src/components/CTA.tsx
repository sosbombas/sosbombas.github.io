import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-700 via-primary-600 to-primary-800 py-16 md:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.08),transparent_60%)]" />
      <div className="pointer-events-none absolute -right-20 top-0 h-64 w-64 rounded-full bg-primary-400/20 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
          Precisa de ajuda para escolher?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-primary-100">
          Nossa equipe técnica pode indicar a bomba ideal para sua aplicação.
          Solicite um orçamento sem compromisso.
        </p>
        <Link
          href="#contato"
          className="mt-8 inline-flex h-12 items-center justify-center rounded-lg bg-white px-8 text-sm font-semibold text-primary-800 shadow-xl shadow-black/20 transition-all hover:-translate-y-0.5 hover:bg-primary-50 hover:shadow-2xl"
        >
          Solicitar orçamento
        </Link>
      </div>
    </section>
  );
}
