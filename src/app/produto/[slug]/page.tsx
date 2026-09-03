import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";import type { Metadata } from "next";
import ProductOrderButton from "@/components/ProductOrderButton";
import { getProductBySlug, products } from "@/lib/products";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
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
    title: `${product.name} | S.O.S`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-10 md:py-16">
        <nav className="mb-8 text-sm text-slate-500">
          <Link href="/" className="transition-colors hover:text-primary-600">
            Início
          </Link>
          <span className="mx-2">/</span>
          <Link
            href="/#categorias"
            className="transition-colors hover:text-primary-600"
          >
            {product.category}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-slate-900">{product.name}</span>
        </nav>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-square overflow-hidden rounded-2xl border border-slate-100 bg-slate-900">
            {product.image ? (
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain p-6"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            ) : (
              <div className="flex h-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-slate-50 to-primary-50 text-slate-400">
                <svg
                  className="h-24 w-24 text-primary-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={0.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z"
                  />
                </svg>
                <span className="text-sm">Imagem do produto</span>
              </div>
            )}
          </div>
          <div className="flex flex-col">
            <span className="inline-flex w-fit rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">
              {product.category}
            </span>

            <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              {product.name}
            </h1>

            <p className="mt-4 text-lg text-slate-600">{product.description}</p>

            <p className="mt-4 leading-relaxed text-slate-500">
              {product.longDescription}
            </p>

            <div className="mt-8">
              <ProductOrderButton productName={product.name} />
            </div>
          </div>
        </div>

        <section className="mt-16 border-t border-slate-100 pt-12">
          <h2 className="text-xl font-semibold text-slate-900">
            Especificações técnicas
          </h2>
          <dl className="mt-6 grid gap-4 sm:grid-cols-2">
            {product.specs.map((spec) => (
              <div
                key={spec.label}
                className="rounded-lg border border-slate-100 bg-slate-50 px-4 py-3"
              >
                <dt className="text-sm text-slate-500">{spec.label}</dt>
                <dd className="mt-1 font-medium text-slate-900">
                  {spec.value}
                </dd>
              </div>
            ))}
          </dl>
        </section>
      </div>
    </div>
  );
}
