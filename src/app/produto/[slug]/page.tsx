import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ChevronRight, ImageOff, ArrowUpRight, ArrowLeft } from "lucide-react";
import ProductOrderButton from "@/components/ProductOrderButton";
import {
  getProductBySlug,
  getRelatedProducts,
  getCategoryLabel,
  products,
} from "@/lib/products";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return products.flatMap((product) => [
    { slug: product.slug },
    ...(product.aliases ?? []).map((alias) => ({ slug: alias })),
  ]);
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return { title: "Produto não encontrado" };
  }

  return {
    title: `${product.name} · ${product.code} | S.O.S`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const Icon = product.icon;
  const categoryLabel = getCategoryLabel(product.category);
  const related = getRelatedProducts(product);

  const headlineSpecs = [
    { label: "Vazão", value: product.vazao },
    { label: "Pressão", value: product.pressao },
    { label: "Potência", value: product.potencia },
  ];

  return (
    <div className="bg-paper">
      {/* ───────── cabeçalho técnico ───────── */}
      <section className="relative overflow-hidden bg-navy pb-16 pt-24 md:pb-20 md:pt-28">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(95,201,222,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(95,201,222,0.06)_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_20%,rgba(95,201,222,0.10),transparent_55%)]" />

        <div className="pointer-events-none absolute inset-6 hidden lg:block">
          <span className="absolute left-0 top-0 h-4 w-4 rounded-tl-sm border-l border-t border-cyan/40" />
          <span className="absolute right-0 top-0 h-4 w-4 rounded-tr-sm border-r border-t border-cyan/40" />
          <span className="absolute bottom-0 left-0 h-4 w-4 rounded-bl-sm border-b border-l border-cyan/40" />
          <span className="absolute bottom-0 right-0 h-4 w-4 rounded-br-sm border-b border-r border-cyan/40" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6">
          {/* trilha de navegação */}
          <nav aria-label="Trilha de navegação">
            <ol className="flex flex-wrap items-center gap-1 font-mono text-[11px] uppercase tracking-wider text-muted">
              <li>
                <Link href="/" className="transition-colors hover:text-cyan">
                  Início
                </Link>
              </li>
              <ChevronRight aria-hidden="true" className="h-3 w-3 text-muted/50" />
              <li>
                <Link
                  href="/catalogo"
                  className="transition-colors hover:text-cyan"
                >
                  Catálogo
                </Link>
              </li>
              <ChevronRight aria-hidden="true" className="h-3 w-3 text-muted/50" />
              <li>
                <Link
                  href={`/catalogo?categoria=${product.category}`}
                  className="transition-colors hover:text-cyan"
                >
                  {categoryLabel}
                </Link>
              </li>
              <ChevronRight aria-hidden="true" className="h-3 w-3 text-muted/50" />
              <li aria-current="page" className="text-ink">
                {product.code}
              </li>
            </ol>
          </nav>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_420px] lg:gap-16">
            {/* identificação */}
            <div className="order-2 flex flex-col lg:order-1">
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-cyan/30 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.15em] text-cyan">
                <Icon strokeWidth={1.5} className="h-3.5 w-3.5" />
                {categoryLabel} · {product.code}
              </span>

              <h1 className="mt-6 max-w-xl font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight text-ink md:text-5xl">
                {product.name}
              </h1>

              <p className="mt-5 max-w-lg text-base leading-relaxed text-muted">
                {product.description}
              </p>

              {/* plaqueta de specs de destaque */}
              <div className="mt-8 grid max-w-md grid-cols-3 divide-x divide-cyan/15 overflow-hidden rounded-lg border border-cyan/15">
                {headlineSpecs.map((spec) => (
                  <div key={spec.label} className="px-4 py-5 text-center">
                    <div className="font-mono text-lg font-semibold text-ink">
                      {spec.value}
                    </div>
                    <div className="mt-1 font-mono text-[10px] uppercase tracking-wider text-muted">
                      {spec.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <ProductOrderButton productName={product.name} />
              </div>
            </div>

            {/* foto do produto */}
            <div className="order-1 lg:order-2">
              <div className="relative aspect-square overflow-hidden rounded-xl border border-cyan/20 bg-white/5">
                {product.image ? (
                  <Image
                    src={product?.image!}
                    alt={product.name}
                    fill
                    className="object-contain p-8"
                    sizes="(max-width: 1024px) 100vw, 420px"
                    priority
                  />
                ) : (
                  <div className="flex h-full flex-col items-center justify-center gap-3 text-muted">
                    <ImageOff strokeWidth={1} className="h-16 w-16 text-cyan/30" />
                    <span className="font-mono text-[11px] uppercase tracking-wider">
                      Imagem indisponível
                    </span>
                  </div>
                )}
              </div>
              <div className="mt-3 text-right font-mono text-[10px] uppercase tracking-wider text-cyan/50">
                Desenho nº {product.code} · Rev. 2026
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── descrição + ficha técnica ───────── */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.15em] text-amber-dark">
                Aplicação
              </span>
              <h2 className="mt-3 font-display text-2xl font-bold uppercase leading-none tracking-tight text-navy md:text-3xl">
                Sobre o modelo
              </h2>
              <p className="mt-5 leading-relaxed text-steel">
                {product.longDescription}
              </p>
            </div>

            <div>
              <span className="font-mono text-xs uppercase tracking-[0.15em] text-amber-dark">
                Ficha técnica
              </span>
              <h2 className="mt-3 font-display text-2xl font-bold uppercase leading-none tracking-tight text-navy md:text-3xl">
                Especificações
              </h2>

              <dl className="mt-6 overflow-hidden rounded-xl border border-navy/10">
                {[...headlineSpecs, ...product.specs].map((spec, index) => (
                  <div
                    key={spec.label}
                    className={`flex items-baseline justify-between gap-4 px-5 py-3.5 ${
                      index % 2 === 1 ? "bg-white" : "bg-paper"
                    }`}
                  >
                    <dt className="font-mono text-[11px] uppercase tracking-wider text-steel">
                      {spec.label}
                    </dt>
                    <dd className="text-right font-mono text-sm font-medium text-navy">
                      {spec.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <p className="mt-4 text-xs leading-relaxed text-steel">
                Valores de referência para o ponto de melhor rendimento. O
                dimensionamento final depende das condições reais da instalação.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── modelos relacionados ───────── */}
      {related.length > 0 && (
        <section className="border-t border-navy/10 py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.15em] text-amber-dark">
                  Mesma categoria
                </span>
                <h2 className="mt-3 font-display text-2xl font-bold uppercase leading-none tracking-tight text-navy md:text-3xl">
                  Modelos relacionados
                </h2>
              </div>
              <Link
                href="/catalogo"
                className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-navy transition-colors hover:text-amber-dark"
              >
                Ver catálogo completo
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-navy/10 bg-navy/10 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => {
                const RelatedIcon = item.icon;
                return (
                  <Link
                    key={item.slug}
                    href={`/produto/${item.slug}`}
                    className="group flex flex-col bg-paper p-6 transition-colors hover:bg-white"
                  >
                    <div className="flex items-start justify-between">
                      <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-navy/15 text-navy transition-colors group-hover:border-amber-dark group-hover:text-amber-dark">
                        <RelatedIcon strokeWidth={1.5} className="h-5 w-5" />
                      </span>
                      <ArrowUpRight
                        strokeWidth={1.5}
                        className="h-4 w-4 text-navy/20 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-amber-dark"
                      />
                    </div>
                    <span className="mt-5 font-mono text-[10px] uppercase tracking-[0.15em] text-steel">
                      {item.code}
                    </span>
                    <h3 className="mt-1 text-base font-semibold text-navy">
                      {item.name}
                    </h3>
                    <p className="mt-2 font-mono text-[11px] uppercase tracking-wider text-steel">
                      {item.vazao} · {item.pressao}
                    </p>
                  </Link>
                );
              })}
            </div>

            <Link
              href="/catalogo"
              className="mt-10 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-steel transition-colors hover:text-navy"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Voltar ao catálogo
            </Link>
          </div>
        </section>
      )}
    </div>
  );
}