"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Fan,
  Waves,
  Home,
  Gauge,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
} from "lucide-react";

const products = [
  { code: "CF-2200", name: "Centrífuga industrial", icon: Fan, image: "/images/products/bomba-teste.png", vazao: "120 m³/h", pressao: "8 bar", potencia: "15 cv" },
  { code: "SB-150", name: "Submersível poço profundo", icon: Waves, image: "/images/products/bomba-teste.png", vazao: "18 m³/h", pressao: "6 bar", potencia: "3 cv" },
  { code: "PF-050", name: "Periférica doméstica", icon: Home, image: "/images/products/bomba-teste.png", vazao: "3,6 m³/h", pressao: "4 bar", potencia: "0,5 cv" },
  { code: "AP-300", name: "Alta pressão industrial", icon: Gauge, image: "/images/products/bomba-teste.png", vazao: "45 m³/h", pressao: "12 bar", potencia: "20 cv" },
  { code: "CF-1100", name: "Centrífuga para irrigação", icon: Fan, image: "/images/products/bomba-teste.png", vazao: "80 m³/h", pressao: "6 bar", potencia: "7,5 cv" },
  { code: "SB-090", name: "Submersível de drenagem", icon: Waves, image: "/images/products/bomba-teste.png", vazao: "12 m³/h", pressao: "3 bar", potencia: "1 cv" },
  { code: "PF-075", name: "Periférica reforçada", icon: Home, image: "/images/products/bomba-teste.png", vazao: "5,4 m³/h", pressao: "5 bar", potencia: "0,75 cv" },
  { code: "AP-450", name: "Alta pressão para lavagem", icon: Gauge, image: "/images/products/bomba-teste.png", vazao: "30 m³/h", pressao: "15 bar", potencia: "25 cv" },
  { code: "CF-3000", name: "Centrífuga para abastecimento", icon: Fan, image: "/images/products/bomba-teste.png", vazao: "200 m³/h", pressao: "10 bar", potencia: "30 cv" },
  { code: "SB-220", name: "Submersível artesiano", icon: Waves, image: "/images/products/bomba-teste.png", vazao: "25 m³/h", pressao: "9 bar", potencia: "5 cv" },
  { code: "PF-030", name: "Periférica compacta", icon: Home, image: "/images/products/bomba-teste.png", vazao: "2,4 m³/h", pressao: "3,5 bar", potencia: "0,33 cv" },
  { code: "AP-600", name: "Alta pressão industrial XL", icon: Gauge, image: "/images/products/bomba-teste.png", vazao: "60 m³/h", pressao: "18 bar", potencia: "40 cv" },
];

const PER_SLIDE = 6;
const slides = Array.from({ length: Math.ceil(products.length / PER_SLIDE) }, (_, i) =>
  products.slice(i * PER_SLIDE, i * PER_SLIDE + PER_SLIDE)
);

export default function CatalogPreview() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced || paused) return;

    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused]);

  return (
    <section
      id="catalogo"
      className="relative overflow-hidden bg-[#0A3B52] py-20 md:py-28"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(95,201,222,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(95,201,222,0.05)_1px,transparent_1px)] bg-[size:32px_32px]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.15em] text-[#E2954A]">
              Prévia do catálogo geral
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold uppercase leading-none tracking-tight text-[#EFF7F9] md:text-4xl">
              Páginas do catálogo
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-[#8AB6C4]">
            Uma amostra dos modelos mais procurados. O catálogo completo reúne
            centenas de fichas técnicas por categoria.
          </p>
        </div>

        {/* carrossel */}
        <div className="mt-12 overflow-hidden rounded-xl">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {slides.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                className="grid w-full flex-shrink-0 grid-cols-1 gap-px bg-[#5FC9DE]/10 sm:grid-cols-2 lg:grid-cols-3"
              >
                {slide.map((product) => {
                  const Icon = product.icon;
                  return (
                    <Link
                      key={product.code}
                      href={`/produto/${product.code.toLowerCase()}`}
                      className="group flex flex-col bg-[#0A3B52] transition-colors hover:bg-[#123f58]"
                    >
                      {/* foto do produto */}
                      <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-[#5FC9DE]/10">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                          className="object-cover grayscale contrast-125 transition-all duration-500 group-hover:grayscale-0"
                        />
                        <div className="absolute inset-0 bg-[#0A3B52]/40 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-0" />
                        <span className="absolute left-3 top-3 flex h-8 w-8 items-center justify-center rounded-lg border border-[#5FC9DE]/30 bg-[#0A3B52]/70 text-[#5FC9DE] backdrop-blur-sm">
                          <Icon strokeWidth={1.5} className="h-4 w-4" />
                        </span>
                      </div>

                      {/* conteúdo */}
                      <div className="flex flex-1 flex-col justify-between p-6">
                        <div>
                          <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-[#5FC9DE]/70">
                            {product.code}
                          </span>
                          <h3 className="mt-1 text-base font-semibold text-[#EFF7F9]">
                            {product.name}
                          </h3>
                        </div>

                        <div className="mt-6 grid grid-cols-3 divide-x divide-[#5FC9DE]/10 border-t border-[#5FC9DE]/10 pt-3">
                          {[
                            { label: "Vazão", value: product.vazao },
                            { label: "Pressão", value: product.pressao },
                            { label: "Potência", value: product.potencia },
                          ].map((spec) => (
                            <div key={spec.label} className="px-2 first:pl-0 text-center">
                              <div className="font-mono text-xs font-medium text-[#EFF7F9]">
                                {spec.value}
                              </div>
                              <div className="mt-0.5 font-mono text-[9px] uppercase tracking-wider text-[#8AB6C4]">
                                {spec.label}
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="mt-4 flex items-center gap-1 font-mono text-[11px] uppercase tracking-wider text-[#E2954A] opacity-0 transition-opacity group-hover:opacity-100">
                          Ver ficha técnica
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        {/* rodapé: leitura de página + controles */}
        <div className="mt-8 flex items-center justify-between border-t border-[#5FC9DE]/10 pt-6">
          <span className="font-mono text-xs uppercase tracking-wider text-[#8AB6C4]">
            Pág. {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
          </span>

          <div className="flex items-center gap-4">
            <div className="flex gap-1.5">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Ir para página ${i + 1}`}
                  className={`h-1 w-6 rounded-full transition-colors ${
                    i === current ? "bg-[#E2954A]" : "bg-[#5FC9DE]/20"
                  }`}
                />
              ))}
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)}
                aria-label="Página anterior"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#5FC9DE]/20 text-[#5FC9DE] transition-colors hover:border-[#E2954A] hover:text-[#E2954A]"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
                aria-label="Próxima página"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#5FC9DE]/20 text-[#5FC9DE] transition-colors hover:border-[#E2954A] hover:text-[#E2954A]"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}