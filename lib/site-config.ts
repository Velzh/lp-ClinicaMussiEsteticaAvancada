export type QueixaId =
  | "linhas-expressao"
  | "gordura-localizada"
  | "flacidez"
  | "limpeza-rejuvenescimento";

export type ProtocolCategory = "facial" | "corporal" | "spa";

export const siteConfig = {
  siteUrl: "https://clinica-mussi-estetica.vercel.app",
  shortName: "Clínica Mussi",

  business: {
    name: "Clínica Mussi Estética Avançada & Saúde",
    nameShort: "Clínica Mussi",
    tagline: "Estética avançada facial e corporal em Sorocaba",
    founders: "Eny Mussi (CEO) e Dra. Samie Baptista",
    ceo: "Eny Mussi",
    ceoRole: "CEO",
    professional: "Dra. Samie Baptista",
    credential: "Estética Avançada",
    since: 2006,
    yearsActive: 20,
    yearsLabel: "Há 20 anos transformando autoestima em Sorocaba",
    instagram: "@clinicamussiestetica",
    instagramUrl: "https://www.instagram.com/clinicamussiestetica/",
    locationBadge: "Sorocaba SP",
  },

  contact: {
    whatsapp: "5515996593623",
    whatsappDisplay: "(15) 99659-3623",
    phoneDisplay: "(15) 99659-3623",
    address: {
      street: "R. Dilermando Viêira Borges, 220",
      neighborhood: "Jardim Nova Ipanema",
      city: "Sorocaba",
      state: "SP",
      zip: "18071-000",
      full: "R. Dilermando Viêira Borges, 220 - Jardim Nova Ipanema, Sorocaba - SP, 18071-000",
    },
    hours: [
      { day: "Segunda-feira", time: "Fechado", closed: true },
      { day: "Terça-feira", time: "09:00–19:00", closed: false },
      { day: "Quarta-feira", time: "09:00–19:00", closed: false },
      { day: "Quinta-feira", time: "09:00–19:00", closed: false },
      { day: "Sexta-feira", time: "09:00–19:00", closed: false },
      { day: "Sábado", time: "09:00–17:00", closed: false },
      { day: "Domingo", time: "Fechado", closed: true },
    ],
    hoursSummary: "Ter a sex 09h–19h · Sáb 09h–17h · Dom e seg fechado",
  },

  socialProof: {
    googleRating: 5.0,
    googleRatingLabel: "5,0",
    googleReviews: 48,
    googleReviewsLabel: "48+ avaliações no Google",
    yearsActive: 20,
  },

  mapEmbed: {
    lat: -23.5015,
    lng: -47.4581,
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=R.+Dilermando+Vi%C3%Aaira+Borges,+220+-+Jardim+Nova+Ipanema,+Sorocaba+-+SP",
  },

  nav: [
    { label: "Simulador", href: "#simulador" },
    { label: "Protocolos", href: "#protocolos" },
    { label: "Biossegurança", href: "#biosseguranca" },
    { label: "Depoimentos", href: "#depoimentos" },
  ],

  copy: {
    skipLink: "Ir para o conteúdo",
    navAria: "Navegação principal",
    navWhatsapp: "WhatsApp",
    headerCta: "Agendar no WhatsApp",

    heroKicker: "Estética avançada · Sorocaba",
    heroTitle: "Clínica Mussi",
    heroSupport:
      "Há 20 anos transformando autoestima em Sorocaba com protocolos faciais, corporais e Day Spa. Equipamentos com certificação Anvisa e atendimento humanizado.",
    ctaPrimary: "Agendar minha avaliação no WhatsApp",
    ctaSecondary: "Simular meu protocolo",
    heroProof: "5,0 no Google Maps",
    heroProofDetail: "48+ avaliações reais",

    simuladorKicker: "Elemento-assinatura",
    simuladorTitle: "Simulador de protocolos por queixa",
    simuladorSupport:
      "Selecione sua queixa principal. A clínica indica o protocolo, o tempo de sessão, as tecnologias Anvisa e o resultado esperado.",
    simuladorLabel: "Qual é a sua queixa principal?",
    simuladorResultLabel: "Protocolo recomendado",
    simuladorCta: "Agendar este protocolo no WhatsApp",
    simuladorDurationLabel: "Tempo estimado",
    simuladorTechLabel: "Tecnologias Anvisa",
    simuladorResultadoLabel: "Resultado esperado",

    protocolosKicker: "Protocolos",
    protocolosTitle: "Faciais, corporais e Day Spa Mussi",
    protocolosSupport:
      "Tratamentos com avaliação presencial, equipe multidisciplinar e equipamentos certificados pela Anvisa.",

    bioKicker: "Biossegurança",
    bioTitle: "Autoridade de 20 anos e infraestrutura preparada",
    bioSupport:
      "Atendimento humanizado, instalações acolhedoras e equipe multidisciplinar em estética avançada, podologia, terapia holística e massoterapia.",

    depoimentosKicker: "Depoimentos",
    depoimentosTitle: "O que as clientes dizem no Google",
    depoimentosSupport:
      "Nota 5,0 com dezenas de avaliações reais sobre atendimento, ambiente e resultados.",

    ctaKicker: "Próximo passo",
    ctaTitle: "Agende sua avaliação na Clínica Mussi",
    ctaSupport:
      "Conte sua queixa no WhatsApp. A equipe orienta o protocolo ideal e os horários disponíveis.",
    ctaButton: "Agendar minha avaliação no WhatsApp",
    ctaHours: "Consultar horários de atendimento",

    footerAtendimento: "Atendimento",
    footerContato: "Contato",
    footerEndereco: "Endereço",
    footerLegal:
      "Resultados variam conforme avaliação individual. Protocolos estéticos com equipamentos certificados pela Anvisa.",
    footerLicensesPlaceholder:
      "Licenças e registros profissionais: a confirmar antes da publicação.",
    floatAria: "Abrir conversa no WhatsApp com a Clínica Mussi",
  },

  whatsappMessages: {
    default:
      "Olá, Clínica Mussi! Gostaria de agendar uma avaliação de estética.",
    simulador: (protocolName: string) =>
      `Olá, Clínica Mussi! Vi o simulador e tenho interesse no protocolo: ${protocolName}.`,
    hours: "Olá, Clínica Mussi! Gostaria de consultar os horários de atendimento.",
  },

  diferenciais: [
    {
      id: "humanizado",
      title: "Atendimento humanizado",
      description:
        "Acolhimento real em cada etapa, do primeiro contato ao pós-procedimento.",
    },
    {
      id: "anvisa",
      title: "Equipamentos com certificação Anvisa",
      description:
        "Tecnologias reguladas para procedimentos faciais e corporais com segurança.",
    },
    {
      id: "infra",
      title: "Instalações acolhedoras",
      description:
        "Ambiente limpo e preparado para protocolos de estética avançada e Day Spa.",
    },
    {
      id: "equipe",
      title: "Equipe multidisciplinar",
      description:
        "Estética avançada, podologia, terapia holística e massoterapia no mesmo espaço.",
    },
  ],

  protocols: [
    {
      id: "botox",
      category: "facial" as ProtocolCategory,
      title: "Botox preventivo e suavização de rugas",
      summary:
        "Protocolo para linhas de expressão com avaliação facial e plano individual.",
      duration: "30 a 45 min",
    },
    {
      id: "criolipolise",
      category: "corporal" as ProtocolCategory,
      title: "Criolipólise Dinâmica",
      summary:
        "Redução de gordura localizada, flacidez e contorno corporal com tecnologia Anvisa.",
      duration: "40 a 60 min por área",
    },
    {
      id: "limpeza",
      category: "facial" as ProtocolCategory,
      title: "Limpeza de pele profunda oxigenante",
      summary:
        "Limpeza profunda com ação oxigenante para pele opaca, oleosa ou congestionada.",
      duration: "60 a 90 min",
    },
    {
      id: "rejuvenescimento",
      category: "facial" as ProtocolCategory,
      title: "Rejuvenescimento facial e papada",
      summary:
        "Protocolos para firmeza, contorno e suavização da região do pescoço e papada.",
      duration: "45 a 75 min",
    },
    {
      id: "day-spa",
      category: "spa" as ProtocolCategory,
      title: "Day Spa Mussi",
      summary:
        "Mini Spa, Terapêutico, Luxo e Premium para relaxamento e cuidado corporal completo.",
      duration: "90 a 180 min",
    },
  ],

  protocolCategories: [
    { id: "facial" as ProtocolCategory, label: "Faciais" },
    { id: "corporal" as ProtocolCategory, label: "Corporais" },
    { id: "spa" as ProtocolCategory, label: "Day Spa" },
  ],

  simuladorQueixas: [
    {
      id: "linhas-expressao" as QueixaId,
      label: "Linhas de expressão",
      shortLabel: "Botox / rugas",
      protocolName: "Botox preventivo e suavização de rugas",
      duration: "30 a 45 minutos",
      technologies: [
        "Avaliação facial presencial",
        "Aplicação com protocolo clínico",
        "Insumos com rastreabilidade",
      ],
      expectedResult:
        "Suavização das linhas de expressão e prevenção do aprofundamento das marcas, com plano personalizado.",
      whatsappHint: "Botox e linhas de expressão",
    },
    {
      id: "gordura-localizada" as QueixaId,
      label: "Gordura localizada",
      shortLabel: "Criolipólise",
      protocolName: "Criolipólise Dinâmica",
      duration: "40 a 60 minutos por área",
      technologies: [
        "Criolipólise Dinâmica com certificação Anvisa",
        "Mapeamento das áreas de contorno",
        "Acompanhamento de flacidez associada",
      ],
      expectedResult:
        "Redução progressiva da gordura localizada e melhora do contorno corporal na área tratada.",
      whatsappHint: "Criolipólise Dinâmica",
    },
    {
      id: "flacidez" as QueixaId,
      label: "Flacidez facial ou corporal",
      shortLabel: "Flacidez",
      protocolName: "Rejuvenescimento facial, papada e contorno",
      duration: "45 a 75 minutos",
      technologies: [
        "Protocolos de firmeza facial e corporal",
        "Tecnologias Anvisa para estímulo de tecido",
        "Plano combinado conforme avaliação",
      ],
      expectedResult:
        "Mais firmeza e definição nas áreas avaliadas, com protocolo ajustado à queixa facial ou corporal.",
      whatsappHint: "Flacidez facial ou corporal",
    },
    {
      id: "limpeza-rejuvenescimento" as QueixaId,
      label: "Limpeza e rejuvenescimento",
      shortLabel: "Pele / glow",
      protocolName: "Limpeza de pele profunda oxigenante",
      duration: "60 a 90 minutos",
      technologies: [
        "Limpeza profunda com ação oxigenante",
        "Protocolo de rejuvenescimento facial",
        "Cuidados pós-sessão orientados",
      ],
      expectedResult:
        "Pele mais limpa, oxigenada e preparada para protocolos de rejuvenescimento contínuo.",
      whatsappHint: "Limpeza de pele e rejuvenescimento",
    },
  ],

  testimonials: [
    {
      id: "adriana",
      quote:
        "Atendimento maravilhoso, humanizado, do jeito que gostamos. Equipe maravilhosa!",
      author: "Adriana H.",
      source: "Google Maps",
    },
    {
      id: "sabrina",
      quote:
        "O atendimento foi impecável, ambiente lindo, limpo e acolhedor.",
      author: "Sabrina F.",
      source: "Google Maps",
    },
    {
      id: "fernanda",
      quote:
        "Os resultados superaram minhas expectativas, sou cliente há quase 3 anos.",
      author: "Fernanda A.",
      source: "Google Maps",
    },
  ],

  team: [
    { name: "Eny Mussi", role: "CEO" },
    { name: "Dra. Samie Baptista", role: "Estética Avançada" },
  ],

  specialties: [
    "Estética Avançada",
    "Podologia",
    "Terapia Holística",
    "Massoterapia",
  ],
} as const;

export type SiteConfig = typeof siteConfig;
