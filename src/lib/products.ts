import { Fan, Waves, Home, Gauge, type LucideIcon } from "lucide-react";

export type CategorySlug = "centrifuga" | "submersivel" | "periferica" | "alta-pressao";

export type Product = {
  code: string;
  name: string;
  slug: string;
  category: CategorySlug;
  icon: LucideIcon;
  image: string;
  vazao: string;
  pressao: string;
  potencia: string;
  /** valores numéricos para ordenação/filtro futuro */
  vazaoNum: number;
  pressaoNum: number;
  potenciaNum: number;
};

export const categories: { slug: CategorySlug; label: string; code: string; icon: LucideIcon }[] = [
  { slug: "centrifuga", label: "Centrífugas", code: "SÉRIE CF", icon: Fan },
  { slug: "submersivel", label: "Submersíveis", code: "SÉRIE SB", icon: Waves },
  { slug: "periferica", label: "Periféricas", code: "SÉRIE PF", icon: Home },
  { slug: "alta-pressao", label: "Alta Pressão", code: "SÉRIE AP", icon: Gauge },
];

const IMG = "/images/products/bomba-teste.png";

export const products: Product[] = [
  { code: "CF-2200", name: "Centrífuga industrial", slug: "cf-2200", category: "centrifuga", icon: Fan, image: IMG, vazao: "120 m³/h", pressao: "8 bar", potencia: "15 cv", vazaoNum: 120, pressaoNum: 8, potenciaNum: 15 },
  { code: "CF-1100", name: "Centrífuga para irrigação", slug: "cf-1100", category: "centrifuga", icon: Fan, image: IMG, vazao: "80 m³/h", pressao: "6 bar", potencia: "7,5 cv", vazaoNum: 80, pressaoNum: 6, potenciaNum: 7.5 },
  { code: "CF-3000", name: "Centrífuga para abastecimento", slug: "cf-3000", category: "centrifuga", icon: Fan, image: IMG, vazao: "200 m³/h", pressao: "10 bar", potencia: "30 cv", vazaoNum: 200, pressaoNum: 10, potenciaNum: 30 },
  { code: "CF-0750", name: "Centrífuga monobloco", slug: "cf-0750", category: "centrifuga", icon: Fan, image: IMG, vazao: "45 m³/h", pressao: "5 bar", potencia: "5 cv", vazaoNum: 45, pressaoNum: 5, potenciaNum: 5 },

  { code: "SB-150", name: "Submersível poço profundo", slug: "sb-150", category: "submersivel", icon: Waves, image: IMG, vazao: "18 m³/h", pressao: "6 bar", potencia: "3 cv", vazaoNum: 18, pressaoNum: 6, potenciaNum: 3 },
  { code: "SB-090", name: "Submersível de drenagem", slug: "sb-090", category: "submersivel", icon: Waves, image: IMG, vazao: "12 m³/h", pressao: "3 bar", potencia: "1 cv", vazaoNum: 12, pressaoNum: 3, potenciaNum: 1 },
  { code: "SB-220", name: "Submersível artesiano", slug: "sb-220", category: "submersivel", icon: Waves, image: IMG, vazao: "25 m³/h", pressao: "9 bar", potencia: "5 cv", vazaoNum: 25, pressaoNum: 9, potenciaNum: 5 },
  { code: "SB-320", name: "Submersível para efluentes", slug: "sb-320", category: "submersivel", icon: Waves, image: IMG, vazao: "30 m³/h", pressao: "4 bar", potencia: "7,5 cv", vazaoNum: 30, pressaoNum: 4, potenciaNum: 7.5 },

  { code: "PF-050", name: "Periférica doméstica", slug: "pf-050", category: "periferica", icon: Home, image: IMG, vazao: "3,6 m³/h", pressao: "4 bar", potencia: "0,5 cv", vazaoNum: 3.6, pressaoNum: 4, potenciaNum: 0.5 },
  { code: "PF-075", name: "Periférica reforçada", slug: "pf-075", category: "periferica", icon: Home, image: IMG, vazao: "5,4 m³/h", pressao: "5 bar", potencia: "0,75 cv", vazaoNum: 5.4, pressaoNum: 5, potenciaNum: 0.75 },
  { code: "PF-030", name: "Periférica compacta", slug: "pf-030", category: "periferica", icon: Home, image: IMG, vazao: "2,4 m³/h", pressao: "3,5 bar", potencia: "0,33 cv", vazaoNum: 2.4, pressaoNum: 3.5, potenciaNum: 0.33 },
  { code: "PF-100", name: "Periférica para pressurização", slug: "pf-100", category: "periferica", icon: Home, image: IMG, vazao: "6,6 m³/h", pressao: "5,5 bar", potencia: "1 cv", vazaoNum: 6.6, pressaoNum: 5.5, potenciaNum: 1 },

  { code: "AP-300", name: "Alta pressão industrial", slug: "ap-300", category: "alta-pressao", icon: Gauge, image: IMG, vazao: "45 m³/h", pressao: "12 bar", potencia: "20 cv", vazaoNum: 45, pressaoNum: 12, potenciaNum: 20 },
  { code: "AP-450", name: "Alta pressão para lavagem", slug: "ap-450", category: "alta-pressao", icon: Gauge, image: IMG, vazao: "30 m³/h", pressao: "15 bar", potencia: "25 cv", vazaoNum: 30, pressaoNum: 15, potenciaNum: 25 },
  { code: "AP-600", name: "Alta pressão industrial XL", slug: "ap-600", category: "alta-pressao", icon: Gauge, image: IMG, vazao: "60 m³/h", pressao: "18 bar", potencia: "40 cv", vazaoNum: 60, pressaoNum: 18, potenciaNum: 40 },
  { code: "AP-200", name: "Alta pressão compacta", slug: "ap-200", category: "alta-pressao", icon: Gauge, image: IMG, vazao: "18 m³/h", pressao: "10 bar", potencia: "10 cv", vazaoNum: 18, pressaoNum: 10, potenciaNum: 10 },
];