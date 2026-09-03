import Link from "next/link";

export default function ProductNotFound() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-24 text-center">
      <h1 className="text-2xl font-bold text-slate-900">
        Produto não encontrado
      </h1>
      <p className="mt-2 text-slate-500">
        O produto que você procura não existe ou foi removido.
      </p>
      <Link
        href="/"
        className="mt-6 inline-flex h-11 items-center justify-center rounded-lg bg-primary-600 px-6 text-sm font-medium text-white transition-colors hover:bg-primary-700"
      >
        Voltar ao início
      </Link>
    </div>
  );
}
