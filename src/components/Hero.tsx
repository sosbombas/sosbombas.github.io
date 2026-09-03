import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0F2A4A]">
      {/* grid de prancheta */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(143,207,234,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(143,207,234,0.06)_1px,transparent_1px)] bg-[size:32px_32px]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_20%,rgba(143,207,234,0.10),transparent_55%)]" />

      {/* marcas de registro (crop marks) */}
      <div className="pointer-events-none absolute inset-6 hidden lg:block">
        <span className="absolute left-0 top-0 h-4 w-4 border-l border-t border-[#8FCFEA]/40" />
        <span className="absolute right-0 top-0 h-4 w-4 border-r border-t border-[#8FCFEA]/40" />
        <span className="absolute bottom-0 left-0 h-4 w-4 border-b border-l border-[#8FCFEA]/40" />
        <span className="absolute bottom-0 right-0 h-4 w-4 border-b border-r border-[#8FCFEA]/40" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-24 md:pb-28 md:pt-32">
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_420px]">
          {/* coluna de texto */}
          <div>
            <span className="inline-flex items-center gap-2 border border-[#8FCFEA]/30 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.15em] text-[#8FCFEA]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D98B3F]" />
              Catálogo técnico · linha completa
            </span>

            <h1 className="mt-7 max-w-xl font-[Big_Shoulders_Display,system-ui] text-5xl font-bold uppercase leading-[0.95] tracking-tight text-[#F2F5F7] md:text-6xl">
              Encontre a bomba certa pela{" "}
              <span className="relative inline-block text-[#8FCFEA]">
                curva de vazão e pressão
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  height="6"
                  viewBox="0 0 200 6"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 4 C 40 0, 80 6, 120 2 S 180 4, 200 1"
                    stroke="#D98B3F"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
              </span>
            </h1>

            <p className="mt-6 max-w-md text-base leading-relaxed text-[#9FB4C7]">
              Centrífugas, submersíveis, periféricas e de alta pressão — cada
              modelo com ficha técnica completa para irrigação, indústria e
              uso residencial.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#categorias"
                className="inline-flex h-12 items-center justify-center rounded-sm bg-[#D98B3F] px-7 text-sm font-semibold text-[#0F2A4A] transition-colors hover:bg-[#e69c52]"
              >
                Ver catálogo técnico
              </Link>
              <Link
                href="#contato"
                className="inline-flex h-12 items-center justify-center rounded-sm border border-[#8FCFEA]/30 px-7 text-sm font-medium text-[#F2F5F7] transition-colors hover:border-[#8FCFEA]/60 hover:bg-white/5"
              >
                Falar com engenheiro de aplicação
              </Link>
            </div>
          </div>

          {/* diagrama esquemático */}
          <div className="relative mx-auto hidden aspect-square w-full max-w-[420px] lg:block">
            <svg viewBox="0 0 400 400" className="h-full w-full">
              <circle
                cx="200"
                cy="200"
                r="150"
                fill="none"
                stroke="#8FCFEA"
                strokeOpacity="0.25"
                strokeWidth="1"
                strokeDasharray="4 6"
                className="motion-safe:animate-[spin_28s_linear_infinite] origin-center"
              />
              <circle cx="200" cy="200" r="90" fill="none" stroke="#8FCFEA" strokeOpacity="0.5" strokeWidth="1.5" />
              <circle cx="200" cy="200" r="34" fill="none" stroke="#F2F5F7" strokeWidth="2" />
              <path d="M200 166 L200 234 M166 200 L234 200" stroke="#F2F5F7" strokeWidth="1.5" />
              <path d="M50 200 H110" stroke="#8FCFEA" strokeWidth="1.5" markerEnd="url(#arrow)" />
              <path d="M290 200 L340 140" stroke="#D98B3F" strokeWidth="1.5" markerEnd="url(#arrowAmber)" />
              <defs>
                <marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                  <path d="M0 0 L8 4 L0 8 Z" fill="#8FCFEA" />
                </marker>
                <marker id="arrowAmber" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                  <path d="M0 0 L8 4 L0 8 Z" fill="#D98B3F" />
                </marker>
              </defs>
              <text x="50" y="190" fill="#8FCFEA" fontFamily="monospace" fontSize="11">ENTRADA</text>
              <text x="300" y="135" fill="#D98B3F" fontFamily="monospace" fontSize="11">SAÍDA · 12 bar</text>
              <text x="164" y="255" fill="#F2F5F7" fontFamily="monospace" fontSize="11">ROTOR</text>
            </svg>

            <div className="absolute -bottom-2 right-0 font-mono text-[10px] uppercase tracking-wider text-[#8FCFEA]/50">
              DESENHO Nº HX-01 · ESCALA N/A · REV. 2026
            </div>
          </div>
        </div>

        {/* plaqueta de especificações */}
        <div className="mt-20 grid grid-cols-2 divide-x divide-[#8FCFEA]/15 border-y border-[#8FCFEA]/15 sm:grid-cols-4">
          {[
            { value: "500+", label: "Modelos" },
            { value: "15+", label: "Marcas" },
            { value: "até 12 bar", label: "Pressão máx." },
            { value: "20+", label: "Anos de mercado" },
          ].map((stat) => (
            <div key={stat.label} className="px-4 py-6 text-center">
              <div className="font-mono text-2xl font-semibold text-[#F2F5F7]">
                {stat.value}
              </div>
              <div className="mt-1 font-mono text-[11px] uppercase tracking-wider text-[#9FB4C7]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#f8fafc] to-transparent" />
    </section>
  );
}