# Catálogo de Bombas Hidráulicas

Landing page de um catálogo digital de bombas hidráulicas, construída com Next.js 15, React 19 e Tailwind CSS 4.

## Como rodar

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

## Configuração do WhatsApp

Copie `.env.example` para `.env.local` e ajuste com seu número e mensagem:

```bash
cp .env.example .env.local
```

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=5511999999999
NEXT_PUBLIC_WHATSAPP_MESSAGE=Olá! Vim pelo site e gostaria de um orçamento.
```

O número deve estar no formato internacional (`55` + DDD + número, sem espaços ou símbolos).

## Estrutura

```
src/
├── app/
│   ├── globals.css      # Estilos globais + tema Tailwind
│   ├── layout.tsx       # Layout raiz com Header e Footer
│   └── page.tsx         # Landing page
└── components/
    ├── Header.tsx       # Navegação fixa
    ├── Footer.tsx       # Rodapé com contato
    ├── Hero.tsx         # Seção principal
    ├── Categories.tsx   # Categorias de bombas
    ├── Benefits.tsx     # Benefícios do catálogo
    ├── About.tsx        # Sobre a empresa
    ├── CTA.tsx          # Chamada para ação
    └── WhatsAppButton.tsx  # Botão flutuante do WhatsApp
```

## Seções da landing

- **Hero** — título, descrição e estatísticas
- **Categorias** — centrífugas, submersíveis, periféricas e alta pressão
- **Benefícios** — catálogo completo, fichas técnicas e suporte
- **Sobre** — apresentação da empresa
- **CTA** — solicitar orçamento
