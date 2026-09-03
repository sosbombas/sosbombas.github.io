export type Product = {
  slug: string;
  name: string;
  category: string;
  description: string;
  longDescription: string;
  image?: string;
  specs: { label: string; value: string }[];
};

export const products: Product[] = [
  {
    slug: "bomba-centrifuga-imbil",
    name: "Bomba Centrífuga IMBIL",
    category: "Centrífugas",
    description:
      "Bomba centrífuga industrial em ferro fundido, ideal para irrigação, abastecimento e processos industriais.",
    longDescription:
      "Bomba centrífuga robusta da linha IMBIL, com corpo em ferro fundido pintado e flange de sucção frontal. Projetada para operação contínua em sistemas de irrigação, transferência de água e aplicações industriais que exigem alta confiabilidade e durabilidade.",
    image: "/images/bomba-teste.png",
    specs: [
      { label: "Marca", value: "IMBIL" },
      { label: "Tipo", value: "Centrífuga" },
      { label: "Material", value: "Ferro fundido" },
      { label: "Conexão", value: "Flange" },
    ],
  },
  {
    slug: "bomba-centrifuga-bc-100",    name: "Bomba Centrífuga BC-100",
    category: "Centrífugas",
    description:
      "Bomba centrífuga monofásica de alta vazão, ideal para irrigação e abastecimento.",
    longDescription:
      "A BC-100 é uma bomba centrífuga robusta projetada para aplicações de irrigação agrícola, abastecimento de reservatórios e uso industrial leve. Corpo em ferro fundido com rotor em bronze, garantindo durabilidade e eficiência operacional.",
    specs: [
      { label: "Vazão máxima", value: "5.000 L/h" },
      { label: "Pressão máxima", value: "35 mca" },
      { label: "Potência", value: "1,0 cv" },
      { label: "Entrada/Saída", value: "1\" / 1\"" },
    ],
  },
  {
    slug: "bomba-submersivel-bs-200",
    name: "Bomba Submersível BS-200",
    category: "Submersíveis",
    description:
      "Bomba submersível para poços artesianos com alto desempenho e longa vida útil.",
    longDescription:
      "Projetada para operação contínua em poços profundos, a BS-200 oferece excelente relação custo-benefício para uso residencial, comercial e agrícola. Motor resistente a surtos e proteção térmica integrada.",
    specs: [
      { label: "Vazão máxima", value: "3.000 L/h" },
      { label: "Profundidade máxima", value: "80 m" },
      { label: "Potência", value: "0,75 cv" },
      { label: "Diâmetro", value: "4\"" },
    ],
  },
  {
    slug: "bomba-periferica-bp-50",
    name: "Bomba Periférica BP-50",
    category: "Periféricas",
    description:
      "Bomba periférica compacta para uso doméstico e pequenos sistemas de pressurização.",
    longDescription:
      "A BP-50 é a escolha ideal para residências que precisam de pressão constante na rede de água. Silenciosa, compacta e de fácil instalação, atende banheiros, cozinhas e áreas de serviço com eficiência.",
    specs: [
      { label: "Vazão máxima", value: "1.800 L/h" },
      { label: "Pressão máxima", value: "25 mca" },
      { label: "Potência", value: "0,5 cv" },
      { label: "Entrada/Saída", value: "3/4\" / 3/4\"" },
    ],
  },
  {
    slug: "bomba-alta-pressao-bap-300",
    name: "Bomba Alta Pressão BAP-300",
    category: "Alta Pressão",
    description:
      "Bomba de alta pressão para aplicações industriais e sistemas de lavagem.",
    longDescription:
      "A BAP-300 foi desenvolvida para operar sob alta pressão de forma contínua. Indicada para processos industriais, sistemas de combate a incêndio e equipamentos de lavagem de alta pressão.",
    specs: [
      { label: "Vazão máxima", value: "2.400 L/h" },
      { label: "Pressão máxima", value: "60 mca" },
      { label: "Potência", value: "2,0 cv" },
      { label: "Entrada/Saída", value: "1\" / 1\"" },
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((product) => product.category === category);
}
