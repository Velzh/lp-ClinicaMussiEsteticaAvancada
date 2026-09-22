# Clínica Mussi Estética Avançada

Landing page de prospecção da **Clínica Mussi Estética Avançada & Saúde** (Sorocaba/SP), construída no padrão Velz Hub.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4
- Framer Motion
- lucide-react
- `next/font` (Cormorant Garamond + Plus Jakarta Sans)

## Como rodar

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Editar conteúdo do cliente

Todo texto, contato, horários, protocolos, simulador e depoimentos ficam em:

`lib/site-config.ts`

Troque dados ali. Não hardcode conteúdo nos componentes.

## Build

```bash
npm run build
npm start
```

## Pendências antes de publicar

- [ ] Fotos reais (logo, clínica, procedimentos) em `public/images`
- [ ] Licenças / registros profissionais no rodapé (hoje há placeholder)
- [ ] Confirmar URL final no `siteUrl` do `site-config.ts`
- [ ] Coordenadas do mapa (hoje aproximadas para Jardim Nova Ipanema)

## Deploy (Vercel)

1. Criar repositório e conectar ao time Velz
2. `vercel.json` já define `framework: nextjs`
3. Publicar sem SSO
