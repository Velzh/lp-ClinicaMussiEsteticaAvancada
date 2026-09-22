# cursor.md — Padrão de Construção de Landing Pages | Velz Hub

> Este arquivo é **lei do projeto**. O agente deve lê-lo por completo antes de escrever
> qualquer linha de código e obedecê-lo em toda página gerada, independente do nicho.
> Quando houver conflito entre um pedido pontual e este arquivo, **este arquivo vence** —
> a menos que o operador humano diga explicitamente "sobrescreva a regra X".

---

## 1. Missão

Construir landing pages de prospecção para pequenas e médias empresas da região de
Sorocaba que ainda não têm site. Cada página é uma **isca de alto impacto**: a primeira
dobra precisa fazer o dono da empresa (o lead) querer ver o resto. O objetivo comercial é
gerar o desejo de contratar o site completo, então a página precisa parecer cara, rápida e
feita sob medida para aquele nicho.

Regra mental para toda decisão: *"Isso faria o dono dessa empresa parar o dedo e pensar
'eu quero isso pra mim'?"* Se a resposta é não, refaça.

---

## 2. Stack fixa (não negociável)

| Camada | Escolha | Observação |
|---|---|---|
| Framework | **Next.js (App Router)** + **TypeScript** | Nunca Pages Router. Nunca JS puro. |
| Estilo | **Tailwind CSS** | Sem CSS-in-JS pesado. Tokens no `globals.css` + `tailwind.config`. |
| Animação | **Framer Motion** | Única lib de animação. Nada de bibliotecas concorrentes. |
| Ícones | **lucide-react** | Consistência total. Sem misturar pacotes de ícone. |
| Imagens | **next/image** sempre | Proibido `<img>` cru em conteúdo. |
| Fontes | **next/font** (Google ou local) | Zero `<link>` manual de fonte no head. |
| Deploy | **Vercel** | Build precisa passar limpo (`next build` sem warning bloqueante). |
| Node | 18+ | |

**Proibido:** HTML estático solto, jQuery, Bootstrap, template pronto comprado,
page builder. A página é construída em componentes React de verdade.

---

## 3. Estrutura de pastas (idêntica em todo projeto)

```
/app
  layout.tsx            # fontes, metadata base, <html lang="pt-BR">
  page.tsx             # monta as seções na ordem
  globals.css          # tokens (cores, sombras) + base Tailwind
/components
  /sections            # Hero, Servicos, Processo, Galeria, Prova, CTA, Rodape...
  /ui                  # Button, Badge, SectionTitle, Reveal (wrapper de animação)...
/lib
  site-config.ts       # TODO o conteúdo do cliente vive aqui (single source of truth)
/public
  /images              # otimizadas (webp/avif quando possível)
tailwind.config.ts
next.config.ts
```

**Regra de ouro do conteúdo:** nome, telefone, WhatsApp, serviços, textos e cores
ficam **todos** em `lib/site-config.ts`. Nenhum texto de cliente hardcoded dentro de
componente. Isso é o que torna o padrão reutilizável entre nichos: troca-se o config,
troca-se o cliente.

---

## 4. Fluxo de trabalho obrigatório (o agente segue nesta ordem)

O agente **não sai codando**. Ele executa estas fases e mostra a Fase 1 ao operador
antes de construir.

**Fase 0 — Absorver o briefing.** Ler o config do nicho, o print/dados do cliente e o
prompt de construção. Se faltar dado essencial (WhatsApp, serviços, cidade), **perguntar**,
não inventar.

**Fase 1 — Plano de design (mostrar ao humano antes de codar).** Em texto curto, definir:
- **Paleta:** 4 a 6 hex nomeados, derivados do nicho e da marca do cliente.
- **Tipografia:** uma fonte display com personalidade (usada com moderação) + uma fonte de
  corpo legível + opcional uma de apoio para dados/legendas. Nunca a dupla "clichê de IA".
- **Layout:** conceito em uma frase + wireframe em ASCII das seções.
- **Elemento-assinatura:** a UMA coisa que essa página tem e nenhuma concorrente tem.
  Ele carrega a identidade do nicho (ex: numeração de etapas de obra, textura de material,
  antes/depois interativo). Sem assinatura, a página é genérica — reprove a si mesmo.

**Fase 2 — Autocrítica do plano.** Perguntar: "se eu recebesse qualquer briefing parecido,
chegaria nesse mesmo layout?" Se sim, é default disfarçado. Trocar a parte genérica e dizer
o que mudou e por quê.

**Fase 3 — Construção.** Código seguindo o plano aprovado. Mobile-first sempre (ver §8).

**Fase 4 — Autocrítica do resultado.** Rodar o checklist da §13. Só entrega quando passa.

---

## 5. Sistema de design por nicho (tokens)

Toda paleta, sombra e raio vira **CSS variable** em `globals.css` e é consumida via
Tailwind. Nunca hex solto no meio do JSX.

```css
:root {
  --bg: #0B1220;           /* fundo dominante do nicho */
  --surface: #111A2E;      /* cards/blocos */
  --ink: #F5F7FA;          /* texto principal */
  --muted: #9AA7BD;        /* texto secundário */
  --accent: #E8B54B;       /* cor de marca — usada com parcimônia */
  --accent-2: #2E6BF2;     /* apoio */
  --ring: rgba(232,181,75,.35);
}
```

O **accent** é a cor mais forte da marca e aparece pouco: em CTAs, num número, num detalhe.
Se estiver por toda parte, perde impacto. Gaste ousadia em UM lugar (o elemento-assinatura)
e mantenha o resto disciplinado.

---

## 6. Copywriting (regras rígidas)

A copy é material de design. Segue as regras abaixo sem exceção.

**Proibido:**
- **Travessão (—) na copy da página.** Nenhum. Reescreva a frase.
- Clichês vazios: "soluções sob medida", "excelência em cada detalhe", "qualidade e
  compromisso", "transformamos sonhos", "o parceiro ideal". Se a frase serve pra qualquer
  empresa, ela não serve pra essa.
- Parede de texto. Frase curta ganha de parágrafo.
- Superlativo sem prova ("a melhor de Sorocaba" sem nada que sustente).

**Obrigatório:**
- Falar do lado do cliente do lead: o que ele ganha, não o que a empresa "é".
- Verbo no comando do CTA dizendo o que acontece ao clicar. "Pedir orçamento no WhatsApp",
  não "Enviar" ou "Saiba mais".
- Concretude vence esperteza. "Obra entregue no prazo combinado" vence "compromisso com
  prazos".
- Às vezes menos é mais: um título forte + uma linha de apoio pode bater três parágrafos.
- Sentence case nos botões e títulos de UI (a não ser que o design do nicho peça caixa alta
  como recurso estético deliberado).

---

## 7. Motion e dinamismo (Framer Motion)

Movimento serve ao conteúdo, nunca é enfeite disperso.

- **Entrada da hero:** uma sequência orquestrada (título, subtítulo, CTA entrando em ritmo)
  bate mais do que dez efeitos espalhados.
- **Scroll reveal:** seções surgem suavemente ao entrar na viewport (usar um componente
  `Reveal` reutilizável com `whileInView`, `once: true`).
- **Micro-interações:** hover em cards/botões com transição de 150–250ms. Elevação sutil,
  não exagerada.
- **Respeitar `prefers-reduced-motion`.** Se o usuário desativou animação no SO, entrega a
  versão estática. Isso é obrigatório, não opcional.
- Excesso de animação faz a página parecer "gerada por IA". Na dúvida, tire uma animação.

---

## 8. Responsividade mobile-first (garantida em toda página)

O lead vai abrir no celular. Mobile não é adaptação, é o ponto de partida.

- Estilo base = mobile. `sm:`, `md:`, `lg:` só para crescer, nunca para consertar.
- Alvos de toque com no mínimo 44px de altura.
- Nada de scroll horizontal acidental. Testar em 360px de largura.
- Tipografia fluida com `clamp()` nos títulos grandes.
- Hero precisa funcionar em tela de celular sem cortar o CTA principal.
- Testar mentalmente/na preview em 360px, 768px e 1280px antes de considerar pronto.

---

## 9. Performance (Core Web Vitals)

- Lighthouse mobile alvo: **Performance 90+**, Acessibilidade 95+, SEO 100.
- `next/image` com `width`/`height` ou `fill` + `sizes`. Sem layout shift.
- Imagem da hero com `priority`. Demais com lazy padrão.
- Fonte via `next/font` com `display: swap`.
- Zero biblioteca pesada só pra um efeito. Framer Motion é suficiente.
- Sem dependência que não é usada.

---

## 10. SEO (base já pensando no site futuro)

- `metadata` no `layout.tsx` e por página: title, description, Open Graph, `lang="pt-BR"`.
- Um único `<h1>` por página (na hero).
- Hierarquia real de headings (`h1 > h2 > h3`), sem pular nível por estética.
- `alt` descritivo em toda imagem de conteúdo.
- JSON-LD `LocalBusiness` com nome, telefone, cidade e área de atendimento (Sorocaba e
  região). Isso já prepara o terreno pra quando virar site completo.

---

## 11. Acessibilidade (piso de qualidade, sem exceção)

- Contraste AA no texto sobre o fundo do nicho.
- Foco de teclado visível em links e botões (usar `--ring`).
- Todo elemento clicável é `<button>` ou `<a>` de verdade, com rótulo acessível.
- `aria-label` no botão flutuante de WhatsApp e em ícones sem texto.
- Ordem de leitura lógica no DOM.

---

## 12. Deploy (Vercel)

- `next build` precisa passar sem erro e sem warning bloqueante.
- Variáveis sensíveis (se houver) em `.env`, nunca commitadas.
- README curto com: como rodar local (`npm i && npm run dev`) e como editar o
  `lib/site-config.ts` para trocar de cliente.

---

## 13. Definition of Done (o agente só entrega se marcar tudo)

- [ ] Fase 1 (plano de design) foi mostrada e aprovada antes de codar.
- [ ] Todo conteúdo do cliente está em `lib/site-config.ts`, nada hardcoded.
- [ ] Existe um elemento-assinatura claro, específico do nicho.
- [ ] Nenhum travessão e nenhum clichê da §6 na copy.
- [ ] Funciona em 360px sem scroll horizontal e com CTA visível.
- [ ] `prefers-reduced-motion` respeitado.
- [ ] Foco de teclado visível; contraste AA.
- [ ] `next/image` em toda imagem; hero com `priority`.
- [ ] Um `<h1>`, headings hierárquicos, `alt` em tudo.
- [ ] `metadata` + JSON-LD LocalBusiness preenchidos.
- [ ] `next build` passa limpo.
- [ ] WhatsApp float funcional com o link real do cliente.

---

## 14. Como adaptar para um NOVO nicho (coração da reutilização)

Ao mudar de nicho (barbearia, reforma, estética, oficina, advocacia...), o agente **não
recomeça do zero**. Ele:

1. Mantém stack, estrutura de pastas, componentes de UI e o fluxo das §1–§13.
2. Reescreve **apenas**: os tokens de cor (§5), a dupla tipográfica, a copy e o
   elemento-assinatura — tudo derivado do mundo daquele nicho.
3. Pergunta a si mesmo: "o que é material, instrumento ou linguagem visível desse nicho?"
   e tira a assinatura daí. Barbearia tem outra atmosfera que reforma, que tem outra que
   advocacia. A estrutura é a mesma; a alma muda.
4. Nunca cai em um dos três "looks de IA" a evitar: (a) fundo creme + serifa de alto
   contraste + terracota; (b) preto quase puro com um único acento verde-limão/vermelho;
   (c) layout de jornal com fios finos e zero border-radius. Se o nicho não pede, não usa.

---

## 15. O que NUNCA fazer

- Entregar HTML simples disfarçado de React.
- Copiar layout de template genérico.
- Usar travessão ou clichê na copy.
- Inventar telefone, endereço ou serviço que o cliente não confirmou.
- Deixar conteúdo hardcoded fora do `site-config.ts`.
- Ignorar mobile ou `prefers-reduced-motion`.
- Pôr o accent em todo lugar e matar o impacto.
- Codar antes de mostrar o plano de design da Fase 1.
