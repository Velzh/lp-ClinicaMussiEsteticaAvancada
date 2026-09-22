Plano de Design (Fase 1) — Nicho: Estética Avançada & Clínica de Beleza
Aqui está o planejamento adaptado especificamente para o nicho de estética (clínica de cosmetologia, harmonização, estética corporal e facial em Sorocaba):

1. Tokens de Cores (CSS Variables)

--bg: #0F0E13 (Dark plum/grafite profundo que transmite sofisticação e higiene de clínica)

--surface: #181621 (Cards com toque aveludado para destacar os tratamentos)

--ink: #F7F5F8 (Texto principal off-white suave)

--muted: #A69FAF (Texto secundário e especificações técnicas)

--accent: #E2B872 (Dourado suave/champagne para detalhes luxuosos e CTAs)

--accent-2: #C48B9F (Rosa queimado elegante para detalhes de apoio)

--ring: rgba(226, 184, 114, 0.35)

2. Tipografia

Display (Títulos): Cormorant Garamond via next/font (sofisticação de alta costura e clínica premium)

Corpo (Textos): Plus Jakarta Sans via next/font (leitura limpa, moderna e legível)

3. Elemento-Assinatura do Nicho

Simulador Interativo de Protocolos por Zona/Queixa: Um componente onde a cliente seleciona o objetivo 
(ex: Linhas de expressão, Gordura localizada, Flacidez, Manchas/Melasma) 
e a tela revela dinamicamente o protocolo recomendado com tempo de sessão, número médio de etapas e resultados esperados.

4. Wireframe em ASCII

+-------------------------------------------------------+
| Header: Logo + Localização (Sorocaba) + CTA Whats     |
+-------------------------------------------------------+
| Hero: Headline Visual + Comparativo / Botão Agendar   |
+-------------------------------------------------------+
| Elemento-Assinatura: Simulador de Protocolo de Beleza |
+-------------------------------------------------------+
| Seção Protocolos: Faciais, Corporais e Harmonização   |
+-------------------------------------------------------+
| Prova & Segurança: Equipamentos com Anvisa + Dra.     |
+-------------------------------------------------------+
| CTA Final: Avaliação Gratuita no WhatsApp              |
+-------------------------------------------------------+
| Rodapé: Endereço Sorocaba, Horários e Licenças        |
+-------------------------------------------------------+
Conteúdo Integral do Arquivo Newcursos_Estetica.md
Markdown
# Newcursos_Estetica.md — Padrão de Construção de Landing Pages | Velz Hub (Estética)

> Este arquivo é **lei do projeto para o nicho de Estética & Beleza**. O agente deve lê-lo 
> por completo antes de escrever qualquer linha de código. Quando houver conflito entre 
> um pedido pontual e este arquivo, **este arquivo vence**.

---

## 1. Missão

Construir landing pages de prospecção para clínicas de estética e profissionais de beleza da 
região de Sorocaba que ainda não têm site ou possuem páginas desatualizadas. A primeira 
dobra precisa transmitir autoridade imediata, sofisticação e biossegurança. O objetivo é 
converter visualizações em agendamentos de avaliações no WhatsApp.

---

## 2. Stack fixa (não negociável)

| Camada | Escolha | Observação |
|---|---|---|
| Framework | **Next.js (App Router)** + **TypeScript** | Nunca Pages Router. Nunca JS puro. |
| Estilo | **Tailwind CSS** | Tokens no `globals.css` + `tailwind.config`. |
| Animação | **Framer Motion** | Transições suaves e elegantes. |
| Ícones | **lucide-react** | Ícones minimalistas. |
| Imagens | **next/image** sempre | Fotos de procedimentos e clínicas otimizadas. |
| Fontes | **next/font** (Cormorant Garamond + Plus Jakarta Sans) | Tipografia editorial de luxo. |
| Deploy | **Vercel** | Build 100% limpo. |

---

## 3. Estrutura de pastas

/app
layout.tsx            # fontes, metadata, JSON-LD (MedicalBusiness/BeautySalon)
page.tsx             # ordem das seções
globals.css          # tokens de cores champagne/dark plum
/components
/sections            # Hero, Protocolos, SimuladorAssinatura, Biosseguranca, CTA, Rodape
/ui                  # Button, Badge, Reveal, TreatmentCard
/lib
site-config.ts       # Dados da clínica (Single Source of Truth)
/public
/images              # imagens otimizadas


---

## 4. Fluxo de Trabalho (Fases 0 a 4)

### Fase 0 — Briefing do Nicho de Estética
- Coletar nome da clínica/doutora, registro profissional (ex: CRBM, COREN, CRMV), WhatsApp, endereço em Sorocaba e lista de tratamentos oferecidos.
- Montar `lib/site-config.ts`.

### Fase 1 — Plano de Design de Estética (Aprovação Prévia)
- Apresentar a paleta de cores (Dark Plum/Champagne), tipografia editorial, o simulador de protocolos como elemento-assinatura e o wireframe.

### Fase 2 — Filtro Anti-Clichê de Estética
- **Sem clichês:** Proibido usar "revelar sua beleza interior", "você mais linda", "excelência nos cuidados".
- **Com concretude:** Usar "protocolos com equipamentos certificados pela Anvisa", "avaliação facial computadorizada em 15 minutos".
- **Sem travessões (—).**

### Fase 3 — Construção Mobile-First
- Desenvolver pensando no celular (85%+ das clientes de estética navegam pelo Instagram/mobile).
- Foco em alvos de toque grandes e carregamento instantâneo.

### Fase 4 — Autocrítica e Checklist
- Validar contraste, responsividade em 360px e responsabilidade técnica (Anvisa/órgãos reguladores).

---

## 5. Tokens de Design (Estética)

```css
:root {
  --bg: #0F0E13;           /* Dark plum profundo */
  --surface: #181621;      /* Superfície dos cards */
  --ink: #F7F5F8;          /* Texto claro */
  --muted: #A69FAF;        /* Especificações e subtítulos */
  --accent: #E2B872;       /* Champagne/Dourado suave */
  --accent-2: #C48B9F;     /* Rosa queimado */
  --ring: rgba(226, 184, 114, 0.35);
}
6. Copywriting para Estética
Regras rígidas:

Sem travessões (—).

Foco em benefícios reais e duração das sessões.

Botões de ação diretos: "Consultar horários no WhatsApp", "Agendar avaliação da minha pele".

Garantir termos claros e transparentes sobre cada procedimento sem promessas irrealistas.

7. Definition of Done (Checklist Final)
[ ] Fase 0: Dados da clínica e tratamentos em site-config.ts.

[ ] Fase 1: Plano aprovado com visual dark plum/champagne.

[ ] Fase 2: Copy sem clichês de estética e sem travessões.

[ ] Fase 3: Simulador de protocolos por queixa/zona ativo.

[ ] Fase 4: Mobile testado em 360px com WhatsApp flutuante direto para agendamento.