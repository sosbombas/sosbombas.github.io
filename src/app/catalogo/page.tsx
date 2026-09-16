import type { Metadata } from "next";
import CatalogList from "@/components/CatalogList";

export const metadata: Metadata = {
  title: "Catálogo de bombas hidráulicas | S.O.S",
  description:
    "Catálogo técnico completo de bombas centrífugas, submersíveis, periféricas e de alta pressão — com vazão, pressão e potência de cada modelo.",
};

export default function CatalogoPage() {
  return <CatalogList />;
}