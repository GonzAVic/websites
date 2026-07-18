import type { Content } from "./types";

/**
 * ⚠️ certifications, skills y publications son CONTENIDO DE EJEMPLO (MOCK)
 * — solo para previsualizar el diseño de la sección de credenciales.
 * Reemplázalos con la información real antes de publicar el sitio.
 */
export const content: Content = {
  site: {
    name: "Karla Aracelly González Arana",
    shortName: "Karla González",
    tagline: "Fisioterapeuta especializada en rehabilitación vestibular avanzada",
    certification: "Certificada por la Universidad de Pittsburgh",
    bio: "🌀 Te ayudo a tratar el vértigo, mareo y desequilibrio.",
    email: "karla.fisiovestibular@gmail.com",
    whatsapp: "https://wa.link/yzawst",
    bookingUrl: "https://karlafisiovestibular.setmore.com/book",
    address: {
      street: "Marbella 83",
      city: "Mérida, Yucatán 97125",
      mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Marbella+83%2C+M%C3%A9rida%2C+Yucat%C3%A1n%2C+97125",
      embedUrl:
        "https://www.google.com/maps/embed/v1/place?key=AIzaSyDjM_kXtBbZQ_fKSuQuWkxPBglewSLcBW0&q=Marbella+83%2C+M%C3%A9rida%2C+Yucat%C3%A1n%2C+97125&zoom=13&language=es",
    },
    social: {
      instagram: "https://www.instagram.com/karla_fisiovestibular/",
      facebook: "https://www.facebook.com/SeguirEnMovimiento",
      tiktok: "https://www.tiktok.com/@karla.fisiovestibular",
    },
    rating: {
      average: 5.0,
      count: 30,
      breakdown: [
        { stars: 5, count: 29 },
        { stars: 4, count: 1 },
        { stars: 3, count: 0 },
        { stars: 2, count: 0 },
        { stars: 1, count: 0 },
      ],
    },
    workingHours: [
      { day: "Lunes", hours: "16:00 - 20:00" },
      { day: "Martes", hours: "16:00 - 20:00" },
      { day: "Miércoles", hours: "16:00 - 20:00" },
      { day: "Jueves", hours: "16:00 - 20:00" },
      { day: "Viernes", hours: "14:00 - 20:00" },
      { day: "Sábado", hours: "11:00 - 14:00" },
      { day: "Domingo", hours: "Cerrado" },
    ],
  },

  about: {
    heading: "Cómo trabajo contigo",
    paragraphs: [
      "Cada sesión comienza con una valoración clara de tus síntomas y estudios, para diseñarte un plan de ejercicios que se ajusta contigo, sesión a sesión, hasta ver resultados.",
      "Ya sea en consulta presencial en Mérida o por videollamada desde donde estés, te acompaño explicando cada paso y dando seguimiento constante, para que recuperes el equilibrio con confianza.",
    ],
    credential: "Certificación en Rehabilitación Vestibular — Universidad de Pittsburgh",
  },

  sessionTypes: [
    {
      id: "seguimiento",
      title: "Sesión de seguimiento",
      image: "/images/servicio-videoconsulta.jpeg",
      description:
        "Revisamos tu avance con los ejercicios, evaluamos los síntomas y signos persistentes, y ajustamos tu programa de rehabilitación para la siguiente etapa. Si lo necesitas, te refiero con el especialista adecuado.",
      modalities: [
        {
          label: "Videoconsulta",
          icon: "💻",
          duration: "1h",
          price: "$600 MXN",
          isVideoCall: true,
        },
        {
          label: "Presencial · Mérida",
          icon: "📍",
          duration: "1h",
          price: "$600 MXN",
          isVideoCall: false,
        },
      ],
    },
    {
      id: "inicial",
      title: "Sesión inicial — Valoración y primer tratamiento",
      image: "/images/servicio-presencial.jpeg",
      description:
        "Revisamos tu historial médico y estudios, hacemos las pruebas físicas necesarias y realizamos tu primera sesión de tratamiento con un programa de ejercicios diseñado para ti. Resolvemos todas tus dudas antes de empezar.",
      modalities: [
        {
          label: "Videoconsulta",
          icon: "💻",
          duration: "1h 30min",
          price: "$800 MXN",
          isVideoCall: true,
        },
        {
          label: "Presencial · Mérida",
          icon: "📍",
          duration: "1h 30min",
          price: "$800 MXN",
          isVideoCall: false,
        },
      ],
    },
  ],

  reviews: [
    {
      author: "Angel Roman Palomo Herrera",
      rating: 5,
      timeAgo: "El mes pasado",
      text: "EXCELENTE trato, atención y servicio a mi papá le ha ayudado muchísimo las sesiones que se han dado. Felicidades a la lic. Karla González por sus atenciones.",
    },
    {
      author: "LISSETH KUMUL",
      rating: 5,
      timeAgo: "El mes pasado",
      text: "Excelente atención, servicio y confianza. Padecía de vértigo por muchos años y no había un diagnóstico como tal. Acudí al lugar, se realizaron valoraciones y rehabilitación y realmente es increíble lo que puedes mejorar. Muchísimas gracias Dra. Karla.",
    },
    {
      author: "Alejandra Bustillos Arce",
      rating: 5,
      timeAgo: "Hace 7 meses",
      text: "La doctora Karla es muy profesional además de amable y atenta, me apoyó con terapia vestibular y a los pocos días de hacer los ejercicios pude notar mejoría; la recomiendo ampliamente.",
    },
    {
      author: "Tere Yam",
      rating: 5,
      timeAgo: "Hace 7 meses",
      text: "La Dra. Karla es una excelente fisioterapeuta, muy amable, preparada, que te guía con paciencia durante todo el proceso de rehabilitación vestibular. Ella posee una gran calidez humana.",
    },
    {
      author: "Jesús Dzib Ramírez",
      rating: 5,
      timeAgo: "Hace 9 meses",
      text: "Servicio y trato amable, profesionalismo y calidad, me ayudaron a concluir el tratamiento de infiltración en mis rodillas.",
    },
    {
      author: "Ulises Hernández",
      rating: 5,
      timeAgo: "Hace 11 meses",
      text: "Karla, una excelente profesional en rehabilitación vestibular. Es atenta, dedicada, muy preparada y con un trato humano que se aprecia y agradece sinceramente.",
    },
  ],

  certifications: [
    {
      title: "Certificación en Rehabilitación Vestibular",
      issuer: "Universidad de Pittsburgh",
      year: "2023",
    },
    {
      title: "Diplomado en Terapia Manual Ortopédica",
      issuer: "Instituto de Fisioterapia Avanzada",
      year: "2021",
    },
    {
      title: "Curso avanzado de maniobras de reposicionamiento (VPPB)",
      issuer: "Sociedad Mexicana de Fisioterapia",
      year: "2022",
    },
  ],

  skills: [
    "Reposicionamiento de otolitos (VPPB)",
    "Rehabilitación vestibular adaptativa",
    "Terapia manual",
    "Evaluación de la marcha y el equilibrio",
    "Ejercicios de habituación vestibular",
    "Manejo de vértigo y mareo crónico",
    "Telerehabilitación",
    "Acompañamiento y educación al paciente",
  ],

  publications: [
    {
      title: "Eficacia de la rehabilitación vestibular en pacientes con VPPB recurrente",
      venue: "Revista Mexicana de Fisioterapia",
      year: "2022",
    },
    {
      title: "Telerehabilitación vestibular: resultados en pacientes a distancia",
      venue: "Congreso Latinoamericano de Fisioterapia",
      year: "2023",
    },
  ],

  ui: {
    nav: {
      services: "Servicios",
      about: "Acerca de",
      credentials: "Credenciales",
      reviews: "Reseñas",
      address: "Dirección",
    },
    langSwitchLabel: "Cambiar idioma",
    logoAlt: "Logo de",
    bookNow: "Reservar",
    bookAppointment: "Reservar cita",
    whatsappCta: "Escríbeme por WhatsApp",
    whatsappLabel: "WhatsApp",
    followUs: "Síguenos:",
    reviewsOnGoogle: "reseñas en Google",
    reviewsWord: "reseñas",
    heroBadgeRole: "Rehabilitación vestibular",
    services: {
      eyebrow: "Servicios",
      heading: "Elige la modalidad que mejor se adapte a ti",
      subheading:
        "Cada sesión está disponible en videoconsulta o de forma presencial en Mérida, con el mismo cuidado y seguimiento.",
    },
    about: {
      eyebrow: "Acerca de",
      imageAlt: "Consulta de rehabilitación vestibular",
    },
    credentials: {
      eyebrow: "Formación y trayectoria",
      heading: "Respaldo clínico detrás de cada sesión",
      subheading:
        "Formación certificada, técnicas especializadas y trabajo divulgado en foros de fisioterapia.",
      mockNotice: "Contenido de ejemplo — se actualizará con información real",
      certifications: "Certificaciones",
      skills: "Habilidades",
      publications: "Publicaciones",
    },
    reviews: {
      eyebrow: "Reseñas",
      heading: "Lo que dicen mis pacientes",
    },
    address: {
      eyebrow: "Dirección",
      heading: "Visítanos en Mérida",
      workingHours: "Horario de apertura",
    },
    footer: {
      rights: "Todos los derechos reservados.",
    },
  },
};
