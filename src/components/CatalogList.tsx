"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, X, ArrowUpRight, SlidersHorizontal } from "lucide-react";
import { products, categories, type CategorySlug } from "@/lib/products";

/** remove acentos para que "centrifuga" encontre "Centrífuga" */
function normalize(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

export default function CatalogList() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<CategorySlug | "todas">("todas");

  const filtered = useMemo(() => {
    const q = normalize(query);

    return products.filter((product) => {
      const matchesCategory =
        activeCategory === "todas" || product.category === activeCategory;
      if (!matchesCategory) return false;
      if (!q) return true;

      const categoryLabel =
        categories.find((c) => c.slug === product.category)?.label ?? "";

      return (
        normalize(product.code).includes(q) ||
        normalize(product.name).includes(q) ||
        normalize(categoryLabel).includes(q)
      );
    });
  }, [query, activeCategory]);

  const hasFilters = query !== "" || activeCategory !== "todas";

  function clearFilters() {
    setQuery("");
    setActiveCategory("todas");
  }

  return (
    <>
      {/* ───────── cabeçalho da página ───────── */}
      <section className="relative overflow-hidden bg-navy pb-16 pt-24 md:pb-20 md:pt-32">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(95,201,222,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(95,201,222,0.06)_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_20%,rgba(95,201,222,0.10),transparent_55%)]" />

        <div className="pointer-events-none absolute inset-6 hidden lg:block">
          <span className="absolute left-0 top-0 h-4 w-4 rounded-tl-sm border-l border-t border-cyan/40" />
          <span className="absolute right-0 top-0 h-4 w-4 rounded-tr-sm border-r border-t border-cyan/40" />
          <span className="absolute bottom-0 left-0 h-4 w-4 rounded-bl-sm border-b border-l border-cyan/40" />
          <span className="absolute bottom-0 right-0 h-4 w-4 rounded-br-sm border-b border-r border-cyan/40" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan/30 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.15em] text-cyan">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-dark" />
            Catálogo completo · {products.length} modelos
          </span>

          <h1 className="mt-7 max-w-2xl font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight text-ink md:text-5xl">
            Catálogo de bombas hidráulicas
          </h1>

          <p className="mt-5 max-w-lg text-base leading-relaxed text-muted">
            Busque por código, nome ou categoria — cada modelo com vazão,
            pressão e potência na ficha técnica.
          </p>

          {/* campo de busca */}
          <div className="mt-9 max-w-xl">
            <label htmlFor="busca-catalogo" className="sr-only">
              Buscar bombas por código, nome ou categoria
            </label>
            <div className="group relative">
              <Search
                strokeWidth={1.5}
                aria-hidden="true"
                className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-cyan/60 transition-colors group-focus-within:text-cyan"
              />
              <input
                id="busca-catalogo"
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Ex.: CF-2200, submersível, alta pressão…"
                className="w-full rounded-lg border border-cyan/25 bg-white/5 py-3.5 pl-11 pr-11 text-sm text-ink placeholder:text-muted/70 outline-none transition-colors focus:border-cyan/60 focus:bg-white/10"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  aria-label="Limpar busca"
                  className="absolute right-3 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-md text-muted transition-colors hover:bg-white/10 hover:text-ink"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ───────── lista ───────── */}
      <section className="bg-paper py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          {/* filtros por categoria */}
          <div className="flex flex-col gap-5 border-b border-navy/10 pb-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap items-center gap-2">
              <span className="mr-1 hidden items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.15em] text-steel sm:inline-flex">
                <SlidersHorizontal strokeWidth={1.5} className="h-3.5 w-3.5" />
                Filtrar
              </span>

              <button
                type="button"
                onClick={() => setActiveCategory("todas")}
                aria-pressed={activeCategory === "todas"}
                className={`rounded-full border px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.12em] transition-colors ${
                  activeCategory === "todas"
                    ? "border-navy bg-navy text-ink"
                    : "border-navy/15 text-steel hover:border-navy/40 hover:text-navy"
                }`}
              >
                Todas
              </button>

              {categories.map((category) => {
                const isActive = activeCategory === category.slug;
                const Icon = category.icon;
                return (
                  <button
                    key={category.slug}
                    type="button"
                    onClick={() => setActiveCategory(category.slug)}
                    aria-pressed={isActive}
                    className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.12em] transition-colors ${
                      isActive
                        ? "border-navy bg-navy text-ink"
                        : "border-navy/15 text-steel hover:border-navy/40 hover:text-navy"
                    }`}
                  >
                    <Icon strokeWidth={1.5} className="h-3.5 w-3.5" />
                    {category.label}
                  </button>
                );
              })}
            </div>

            <div className="flex items-center gap-4">
              <span
                aria-live="polite"
                className="font-mono text-[11px] uppercase tracking-wider text-steel"
              >
                {filtered.length === 1
                  ? "01 modelo"
                  : `${String(filtered.length).padStart(2, "0")} modelos`}
              </span>
              {hasFilters && (
                <button
                  type="button"
                  onClick={clearFilters}
                  className="font-mono text-[11px] uppercase tracking-wider text-amber-dark underline-offset-4 transition-colors hover:underline"
                >
                  Limpar
                </button>
              )}
            </div>
          </div>

          {/* grade de produtos */}
          {filtered.length > 0 ? (
            <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-navy/10 bg-navy/10 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((product) => {
                const Icon = product.icon;
                return (
                  <Link
                    key={product.code}
                    href={`/produto/${product.slug}`}
                    className="group flex flex-col bg-paper transition-colors hover:bg-white"
                  >
                    <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-navy/10 bg-white">
                      <Image
                        src={product?.image!}
                        alt={product.name}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className="absolute left-3 top-3 flex h-8 w-8 items-center justify-center rounded-lg border border-navy/15 bg-paper/80 text-navy backdrop-blur-sm transition-colors group-hover:border-amber-dark group-hover:text-amber-dark">
                        <Icon strokeWidth={1.5} className="h-4 w-4" />
                      </span>
                    </div>

                    <div className="flex flex-1 flex-col justify-between p-6">
                      <div>
                        <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-steel">
                          {product.code}
                        </span>
                        <h2 className="mt-1 text-base font-semibold text-navy">
                          {product.name}
                        </h2>
                      </div>

                      <div className="mt-6 grid grid-cols-3 divide-x divide-navy/10 border-t border-navy/10 pt-3">
                        {[
                          { label: "Vazão", value: product.vazao },
                          { label: "Pressão", value: product.pressao },
                          { label: "Potência", value: product.potencia },
                        ].map((spec) => (
                          <div key={spec.label} className="px-2 text-center first:pl-0">
                            <div className="font-mono text-xs font-medium text-navy">
                              {spec.value}
                            </div>
                            <div className="mt-0.5 font-mono text-[9px] uppercase tracking-wider text-steel">
                              {spec.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="mt-4 flex items-center gap-1 font-mono text-[11px] uppercase tracking-wider text-amber-dark opacity-0 transition-opacity group-hover:opacity-100">
                        Ver ficha técnica
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            /* estado vazio */
            <div className="mt-10 rounded-xl border border-dashed border-navy/20 px-6 py-16 text-center">
              <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-lg border border-navy/15 text-navy">
                <Search strokeWidth={1.5} className="h-5 w-5" />
              </span>
              <p className="mt-5 font-display text-lg font-bold uppercase tracking-tight text-navy">
                Nenhum modelo encontrado
              </p>
              <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-steel">
                Tente outro código ou termo de busca. Se preferir, fale com um
                engenheiro de aplicação para indicarmos o modelo ideal.
              </p>
              <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={clearFilters}
                  className="inline-flex h-11 items-center justify-center rounded-lg border border-navy/20 px-6 text-sm font-medium text-navy transition-colors hover:border-navy/50 hover:bg-white"
                >
                  Limpar filtros
                </button>
                <Link
                  href="/#contato"
                  className="inline-flex h-11 items-center justify-center rounded-lg bg-amber-dark px-6 text-sm font-semibold text-navy transition-colors hover:bg-[#eda664]"
                >
                  Falar com especialista
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
