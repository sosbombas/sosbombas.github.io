export default function About() {
  return (
    <section id="sobre" className="bg-[#f8fafc] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Especialistas em bombas hidráulicas
            </h2>
            <p className="mt-4 leading-relaxed text-slate-600">
              Há mais de 20 anos no mercado, a S.O.S reúne as melhores marcas e
              modelos de bombas hidráulicas em um catálogo digital completo e
              fácil de navegar.
            </p>
            <p className="mt-4 leading-relaxed text-slate-600">
              Seja para irrigação agrícola, abastecimento industrial ou uso
              residencial, nossa equipe técnica está pronta para indicar a
              solução ideal para cada projeto.
            </p>

            <ul className="mt-8 space-y-3">
              {[
                "Marcas líderes do mercado",
                "Entrega em todo o Brasil",
                "Garantia de fábrica",
                "Assistência técnica autorizada",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm text-slate-700"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-100">
                    <svg
                      className="h-3.5 w-3.5 text-primary-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-primary-700 via-primary-600 to-primary-800 shadow-xl shadow-primary-900/20">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.12),transparent_60%)]" />
              <div className="flex h-full items-center justify-center">
                <svg
                  className="h-32 w-32 text-primary-300/80"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={0.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v18m0-18C8.5 3 5 6 5 10c0 4 3.5 7 7 7m0-17c3.5 0 7 3 7 7 0 4-3.5 7-7 7m0 0v4"
                  />
                </svg>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 rounded-xl border border-slate-100 bg-white px-5 py-3 shadow-xl">
              <div className="text-2xl font-bold text-primary-600">500+</div>
              <div className="text-xs text-slate-500">modelos disponíveis</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
