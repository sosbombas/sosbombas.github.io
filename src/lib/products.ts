import { Fan, Waves, Home, Gauge, type LucideIcon } from "lucide-react";

export type CategorySlug =
  | "centrifuga"
  | "submersivel"
  | "periferica"
  | "alta-pressao";

export type Spec = { label: string; value: string };

export type Product = {
  code: string;
  name: string;
  slug: string;
  /** URLs antigas que ainda devem resolver para este produto */
  aliases?: string[];
  category: CategorySlug;
  icon: LucideIcon;
  image: string | null;
  description: string;
  longDescription: string;
  /** specs de destaque, usadas nos cards do catálogo */
  vazao: string;
  pressao: string;
  potencia: string;
  /** valores numéricos para ordenação/filtro */
  vazaoNum: number;
  pressaoNum: number;
  potenciaNum: number;
  /** specs adicionais, exibidas apenas na ficha técnica */
  specs: Spec[];
};

export const categories: {
  slug: CategorySlug;
  label: string;
  code: string;
  icon: LucideIcon;
}[] = [
  { slug: "centrifuga", label: "Centrífugas", code: "SÉRIE CF", icon: Fan },
  { slug: "submersivel", label: "Submersíveis", code: "SÉRIE SB", icon: Waves },
  { slug: "periferica", label: "Periféricas", code: "SÉRIE PF", icon: Home },
  { slug: "alta-pressao", label: "Alta Pressão", code: "SÉRIE AP", icon: Gauge },
];

export function getCategoryLabel(slug: CategorySlug): string {
  return categories.find((category) => category.slug === slug)?.label ?? "";
}

const IMG = "/images/products/bomba-teste.png";

export const products: Product[] = [
  {
    code: "CF-2200",
    name: "Centrífuga industrial",
    slug: "cf-2200",
    aliases: ["bomba-centrifuga-imbil"],
    category: "centrifuga",
    icon: Fan,
    image: IMG,
    description:
      "Alta vazão para processos industriais e abastecimento contínuo.",
    longDescription:
      "Bomba centrífuga monoestágio construída para regime de trabalho contínuo. O rotor fechado em ferro fundido e a vedação por selo mecânico garantem estabilidade em linhas de processo, torres de resfriamento e sistemas de abastecimento predial de grande porte.",
    vazao: "120 m³/h",
    pressao: "8 bar",
    potencia: "15 cv",
    vazaoNum: 120,
    pressaoNum: 8,
    potenciaNum: 15,
    specs: [
      { label: "Altura manométrica", value: "80 m.c.a." },
      { label: "Rotação", value: "3.500 rpm" },
      { label: "Diâmetro de recalque", value: '2 1/2"' },
      { label: "Material do rotor", value: "Ferro fundido" },
      { label: "Vedação", value: "Selo mecânico" },
      { label: "Tensão", value: "220/380 V trifásico" },
    ],
  },
  {
    code: "CF-1100",
    name: "Centrífuga para irrigação",
    slug: "cf-1100",
    category: "centrifuga",
    icon: Fan,
    image: IMG,
    description: "Vazão elevada para irrigação agrícola e transferência.",
    longDescription:
      "Projetada para sistemas de irrigação por aspersão e pivô central, entrega vazão constante mesmo com variação de nível na captação. O conjunto aceita acoplamento a motor elétrico ou a motor estacionário a diesel.",
    vazao: "80 m³/h",
    pressao: "6 bar",
    potencia: "7,5 cv",
    vazaoNum: 80,
    pressaoNum: 6,
    potenciaNum: 7.5,
    specs: [
      { label: "Altura manométrica", value: "60 m.c.a." },
      { label: "Rotação", value: "3.500 rpm" },
      { label: "Diâmetro de recalque", value: '2"' },
      { label: "Material do rotor", value: "Ferro fundido" },
      { label: "Vedação", value: "Selo mecânico" },
      { label: "Tensão", value: "220/380 V trifásico" },
    ],
  },
  {
    code: "CF-3000",
    name: "Centrífuga para abastecimento",
    slug: "cf-3000",
    category: "centrifuga",
    icon: Fan,
    image: IMG,
    description: "Maior vazão da linha, para redes de abastecimento.",
    longDescription:
      "Indicada para estações elevatórias e redes de distribuição de água tratada. A carcaça bipartida facilita a manutenção do rotor sem desmontar a tubulação, reduzindo o tempo de parada do sistema.",
    vazao: "200 m³/h",
    pressao: "10 bar",
    potencia: "30 cv",
    vazaoNum: 200,
    pressaoNum: 10,
    potenciaNum: 30,
    specs: [
      { label: "Altura manométrica", value: "100 m.c.a." },
      { label: "Rotação", value: "3.500 rpm" },
      { label: "Diâmetro de recalque", value: '4"' },
      { label: "Material do rotor", value: "Bronze" },
      { label: "Vedação", value: "Selo mecânico" },
      { label: "Tensão", value: "380/440 V trifásico" },
    ],
  },
  {
    code: "CF-0750",
    name: "Centrífuga monobloco",
    slug: "cf-0750",
    category: "centrifuga",
    icon: Fan,
    image: IMG,
    description: "Compacta, para sistemas prediais e pequenas linhas.",
    longDescription:
      "Construção monobloco que dispensa alinhamento entre bomba e motor, reduzindo custo de instalação. Boa escolha para recalque predial, piscinas e sistemas de reuso de água.",
    vazao: "45 m³/h",
    pressao: "5 bar",
    potencia: "5 cv",
    vazaoNum: 45,
    pressaoNum: 5,
    potenciaNum: 5,
    specs: [
      { label: "Altura manométrica", value: "50 m.c.a." },
      { label: "Rotação", value: "3.500 rpm" },
      { label: "Diâmetro de recalque", value: '1 1/2"' },
      { label: "Material do rotor", value: "Ferro fundido" },
      { label: "Vedação", value: "Selo mecânico" },
      { label: "Tensão", value: "220/380 V trifásico" },
    ],
  },

  {
    code: "SB-150",
    name: "Submersível poço profundo",
    slug: "sb-150",
    aliases: ["bomba-submersivel-bs-200"],
    category: "submersivel",
    icon: Waves,
    image: IMG,
    description: "Para poços artesianos de grande profundidade.",
    longDescription:
      "Bomba multiestágio de 4 polegadas para instalação submersa em poços tubulares profundos. Camisa em aço inoxidável e estágios em material técnico resistente à abrasão por areia fina.",
    vazao: "18 m³/h",
    pressao: "6 bar",
    potencia: "3 cv",
    vazaoNum: 18,
    pressaoNum: 6,
    potenciaNum: 3,
    specs: [
      { label: "Altura manométrica", value: "60 m.c.a." },
      { label: "Diâmetro do poço", value: '4" mínimo' },
      { label: "Profundidade máx.", value: "80 m" },
      { label: "Nº de estágios", value: "12" },
      { label: "Corpo", value: "Aço inoxidável AISI 304" },
      { label: "Tensão", value: "220 V monofásico" },
    ],
  },
  {
    code: "SB-090",
    name: "Submersível de drenagem",
    slug: "sb-090",
    category: "submersivel",
    icon: Waves,
    image: IMG,
    description: "Drenagem de valas, obras e áreas alagadas.",
    longDescription:
      "Equipamento portátil para remoção de água limpa ou com sólidos leves em suspensão. O rotor semiaberto reduz o risco de entupimento e a boia de nível permite operação automática.",
    vazao: "12 m³/h",
    pressao: "3 bar",
    potencia: "1 cv",
    vazaoNum: 12,
    pressaoNum: 3,
    potenciaNum: 1,
    specs: [
      { label: "Altura manométrica", value: "30 m.c.a." },
      { label: "Passagem de sólidos", value: "10 mm" },
      { label: "Profundidade máx.", value: "10 m" },
      { label: "Rotor", value: "Semiaberto" },
      { label: "Corpo", value: "Ferro fundido" },
      { label: "Tensão", value: "220 V monofásico" },
    ],
  },
  {
    code: "SB-220",
    name: "Submersível artesiano",
    slug: "sb-220",
    category: "submersivel",
    icon: Waves,
    image: IMG,
    description: "Alta pressão para captação em poço profundo.",
    longDescription:
      "Versão reforçada da linha submersível, com maior número de estágios para vencer desníveis elevados entre o poço e o reservatório. Indicada para propriedades rurais e condomínios abastecidos por poço próprio.",
    vazao: "25 m³/h",
    pressao: "9 bar",
    potencia: "5 cv",
    vazaoNum: 25,
    pressaoNum: 9,
    potenciaNum: 5,
    specs: [
      { label: "Altura manométrica", value: "90 m.c.a." },
      { label: "Diâmetro do poço", value: '6" mínimo' },
      { label: "Profundidade máx.", value: "120 m" },
      { label: "Nº de estágios", value: "18" },
      { label: "Corpo", value: "Aço inoxidável AISI 304" },
      { label: "Tensão", value: "220/380 V trifásico" },
    ],
  },
  {
    code: "SB-320",
    name: "Submersível para efluentes",
    slug: "sb-320",
    category: "submersivel",
    icon: Waves,
    image: IMG,
    description: "Bombeamento de efluentes e água com sólidos.",
    longDescription:
      "Construída para estações elevatórias de esgoto e reservatórios de efluente industrial. O rotor tipo vortex mantém a passagem livre para sólidos e fibras, reduzindo paradas por obstrução.",
    vazao: "30 m³/h",
    pressao: "4 bar",
    potencia: "7,5 cv",
    vazaoNum: 30,
    pressaoNum: 4,
    potenciaNum: 7.5,
    specs: [
      { label: "Altura manométrica", value: "40 m.c.a." },
      { label: "Passagem de sólidos", value: "50 mm" },
      { label: "Profundidade máx.", value: "20 m" },
      { label: "Rotor", value: "Vortex" },
      { label: "Corpo", value: "Ferro fundido" },
      { label: "Tensão", value: "380 V trifásico" },
    ],
  },

  {
    code: "PF-050",
    name: "Periférica doméstica",
    slug: "pf-050",
    aliases: ["bomba-periferica-bp-50"],
    category: "periferica",
    icon: Home,
    image: IMG,
    description: "Uso residencial em caixas d'água e cisternas.",
    longDescription:
      "Bomba periférica de rotor tipo turbina, silenciosa e de instalação simples. Indicada para recalque de água limpa em residências, com boa pressão mesmo em vazões baixas.",
    vazao: "3,6 m³/h",
    pressao: "4 bar",
    potencia: "0,5 cv",
    vazaoNum: 3.6,
    pressaoNum: 4,
    potenciaNum: 0.5,
    specs: [
      { label: "Altura manométrica", value: "40 m.c.a." },
      { label: "Rotação", value: "3.500 rpm" },
      { label: "Diâmetro de recalque", value: '3/4"' },
      { label: "Rotor", value: "Turbina em latão" },
      { label: "Corpo", value: "Ferro fundido" },
      { label: "Tensão", value: "127/220 V monofásico" },
    ],
  },
  {
    code: "PF-075",
    name: "Periférica reforçada",
    slug: "pf-075",
    category: "periferica",
    icon: Home,
    image: IMG,
    description: "Mais pressão para residências de dois pavimentos.",
    longDescription:
      "Versão de maior potência da linha periférica, indicada quando o desnível entre o reservatório e os pontos de consumo exige pressão adicional. Aceita operação com pressostato.",
    vazao: "5,4 m³/h",
    pressao: "5 bar",
    potencia: "0,75 cv",
    vazaoNum: 5.4,
    pressaoNum: 5,
    potenciaNum: 0.75,
    specs: [
      { label: "Altura manométrica", value: "50 m.c.a." },
      { label: "Rotação", value: "3.500 rpm" },
      { label: "Diâmetro de recalque", value: '3/4"' },
      { label: "Rotor", value: "Turbina em latão" },
      { label: "Corpo", value: "Ferro fundido" },
      { label: "Tensão", value: "127/220 V monofásico" },
    ],
  },
  {
    code: "PF-030",
    name: "Periférica compacta",
    slug: "pf-030",
    category: "periferica",
    icon: Home,
    image: IMG,
    description: "Menor modelo da linha, para pontos isolados.",
    longDescription:
      "Solução econômica para recalque de pequenos volumes, como filtros, aquecedores e pontos de consumo isolados. Baixo consumo e dimensões reduzidas facilitam a instalação em espaços apertados.",
    vazao: "2,4 m³/h",
    pressao: "3,5 bar",
    potencia: "0,33 cv",
    vazaoNum: 2.4,
    pressaoNum: 3.5,
    potenciaNum: 0.33,
    specs: [
      { label: "Altura manométrica", value: "35 m.c.a." },
      { label: "Rotação", value: "3.500 rpm" },
      { label: "Diâmetro de recalque", value: '1/2"' },
      { label: "Rotor", value: "Turbina em latão" },
      { label: "Corpo", value: "Ferro fundido" },
      { label: "Tensão", value: "127/220 V monofásico" },
    ],
  },
  {
    code: "PF-100",
    name: "Periférica para pressurização",
    slug: "pf-100",
    category: "periferica",
    icon: Home,
    image: IMG,
    description: "Pressurização de chuveiros e redes prediais.",
    longDescription:
      "Conjunto voltado à pressurização de redes hidráulicas residenciais e comerciais de pequeno porte. Funciona acoplada a pressostato ou inversor para partida automática conforme a demanda.",
    vazao: "6,6 m³/h",
    pressao: "5,5 bar",
    potencia: "1 cv",
    vazaoNum: 6.6,
    pressaoNum: 5.5,
    potenciaNum: 1,
    specs: [
      { label: "Altura manométrica", value: "55 m.c.a." },
      { label: "Rotação", value: "3.500 rpm" },
      { label: "Diâmetro de recalque", value: '1"' },
      { label: "Rotor", value: "Turbina em latão" },
      { label: "Corpo", value: "Ferro fundido" },
      { label: "Tensão", value: "127/220 V monofásico" },
    ],
  },

  {
    code: "AP-300",
    name: "Alta pressão industrial",
    slug: "ap-300",
    aliases: ["bomba-alta-pressao-bap-300"],
    category: "alta-pressao",
    icon: Gauge,
    image: IMG,
    description: "Pressão elevada para processos industriais.",
    longDescription:
      "Bomba multiestágio para aplicações que exigem pressão constante acima de 10 bar, como caldeiras, sistemas de combate a incêndio e linhas de processo. Construção em aço inoxidável em contato com o fluido.",
    vazao: "45 m³/h",
    pressao: "12 bar",
    potencia: "20 cv",
    vazaoNum: 45,
    pressaoNum: 12,
    potenciaNum: 20,
    specs: [
      { label: "Altura manométrica", value: "120 m.c.a." },
      { label: "Nº de estágios", value: "6" },
      { label: "Rotação", value: "3.500 rpm" },
      { label: "Diâmetro de recalque", value: '2"' },
      { label: "Corpo", value: "Aço inoxidável AISI 316" },
      { label: "Tensão", value: "380/440 V trifásico" },
    ],
  },
  {
    code: "AP-450",
    name: "Alta pressão para lavagem",
    slug: "ap-450",
    category: "alta-pressao",
    icon: Gauge,
    image: IMG,
    description: "Linhas de lavagem industrial e higienização.",
    longDescription:
      "Voltada a sistemas de lavagem de alta pressão em frigoríficos, laticínios e pátios industriais. Suporta ciclos frequentes de partida e parada sem perda de desempenho.",
    vazao: "30 m³/h",
    pressao: "15 bar",
    potencia: "25 cv",
    vazaoNum: 30,
    pressaoNum: 15,
    potenciaNum: 25,
    specs: [
      { label: "Altura manométrica", value: "150 m.c.a." },
      { label: "Nº de estágios", value: "8" },
      { label: "Rotação", value: "3.500 rpm" },
      { label: "Diâmetro de recalque", value: '1 1/2"' },
      { label: "Corpo", value: "Aço inoxidável AISI 316" },
      { label: "Tensão", value: "380/440 V trifásico" },
    ],
  },
  {
    code: "AP-600",
    name: "Alta pressão industrial XL",
    slug: "ap-600",
    category: "alta-pressao",
    icon: Gauge,
    image: IMG,
    description: "Maior pressão do catálogo, para uso pesado.",
    longDescription:
      "Topo da linha de alta pressão, dimensionada para plantas industriais com demanda severa e operação ininterrupta. Requer análise de aplicação prévia para definição do ponto de trabalho.",
    vazao: "60 m³/h",
    pressao: "18 bar",
    potencia: "40 cv",
    vazaoNum: 60,
    pressaoNum: 18,
    potenciaNum: 40,
    specs: [
      { label: "Altura manométrica", value: "180 m.c.a." },
      { label: "Nº de estágios", value: "10" },
      { label: "Rotação", value: "3.500 rpm" },
      { label: "Diâmetro de recalque", value: '2 1/2"' },
      { label: "Corpo", value: "Aço inoxidável AISI 316" },
      { label: "Tensão", value: "440 V trifásico" },
    ],
  },
  {
    code: "AP-200",
    name: "Alta pressão compacta",
    slug: "ap-200",
    category: "alta-pressao",
    icon: Gauge,
    image: IMG,
    description: "Alta pressão em instalações de espaço reduzido.",
    longDescription:
      "Alternativa de menor porte da série AP, mantendo pressão de trabalho elevada com footprint reduzido. Indicada para casas de máquinas compactas e sistemas de reforço de pressão.",
    vazao: "18 m³/h",
    pressao: "10 bar",
    potencia: "10 cv",
    vazaoNum: 18,
    pressaoNum: 10,
    potenciaNum: 10,
    specs: [
      { label: "Altura manométrica", value: "100 m.c.a." },
      { label: "Nº de estágios", value: "5" },
      { label: "Rotação", value: "3.500 rpm" },
      { label: "Diâmetro de recalque", value: '1 1/4"' },
      { label: "Corpo", value: "Aço inoxidável AISI 316" },
      { label: "Tensão", value: "220/380 V trifásico" },
    ],
  },
];

/** Busca por slug canônico ou por alias de URL antiga. */
export function getProductBySlug(slug: string): Product | undefined {
  return products.find(
    (product) => product.slug === slug || product.aliases?.includes(slug)
  );
}

/** Produtos da mesma categoria, excluindo o próprio. */
export function getRelatedProducts(product: Product, limit = 3): Product[] {
  return products
    .filter((item) => item.category === product.category && item.slug !== product.slug)
    .slice(0, limit);
}