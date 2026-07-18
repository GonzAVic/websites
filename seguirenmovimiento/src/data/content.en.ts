import type { Content } from "./types";

/**
 * ⚠️ certifications, skills and publications are MOCK CONTENT — only to
 * preview the design of the credentials section. Replace them with real
 * information before publishing the site.
 */
export const content: Content = {
  site: {
    name: "Karla Aracelly González Arana",
    shortName: "Karla González",
    tagline: "Physical therapist specialized in advanced vestibular rehabilitation",
    certification: "Certified by the University of Pittsburgh",
    bio: "🌀 I help you treat vertigo, dizziness, and imbalance.",
    email: "karla.fisiovestibular@gmail.com",
    whatsapp: "https://wa.link/yzawst",
    bookingUrl: "https://karlafisiovestibular.setmore.com/book",
    address: {
      street: "Marbella 83",
      city: "Mérida, Yucatán, Mexico 97125",
      mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Marbella+83%2C+M%C3%A9rida%2C+Yucat%C3%A1n%2C+97125",
      embedUrl:
        "https://www.google.com/maps/embed/v1/place?key=AIzaSyDjM_kXtBbZQ_fKSuQuWkxPBglewSLcBW0&q=Marbella+83%2C+M%C3%A9rida%2C+Yucat%C3%A1n%2C+97125&zoom=13&language=en",
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
      { day: "Monday", hours: "4:00 PM - 8:00 PM" },
      { day: "Tuesday", hours: "4:00 PM - 8:00 PM" },
      { day: "Wednesday", hours: "4:00 PM - 8:00 PM" },
      { day: "Thursday", hours: "4:00 PM - 8:00 PM" },
      { day: "Friday", hours: "2:00 PM - 8:00 PM" },
      { day: "Saturday", hours: "11:00 AM - 2:00 PM" },
      { day: "Sunday", hours: "Closed" },
    ],
  },

  about: {
    heading: "How I work with you",
    paragraphs: [
      "Every session starts with a clear assessment of your symptoms and medical studies, so I can design an exercise plan that adapts with you, session by session, until you see results.",
      "Whether in an in-person consultation in Mérida or by video call from wherever you are, I walk you through every step and provide ongoing follow-up, so you can regain your balance with confidence.",
    ],
    credential: "Vestibular Rehabilitation Certification — University of Pittsburgh",
  },

  sessionTypes: [
    {
      id: "seguimiento",
      title: "Follow-up session",
      image: "/images/servicio-videoconsulta.jpeg",
      description:
        "We review your progress with the exercises, assess any persistent symptoms, and adjust your rehabilitation program for the next stage. If needed, I'll refer you to the right specialist.",
      modalities: [
        {
          label: "Video consultation",
          icon: "💻",
          duration: "1h",
          price: "$600 MXN",
          isVideoCall: true,
        },
        {
          label: "In person · Mérida",
          icon: "📍",
          duration: "1h",
          price: "$600 MXN",
          isVideoCall: false,
        },
      ],
    },
    {
      id: "inicial",
      title: "Initial session — Assessment and first treatment",
      image: "/images/servicio-presencial.jpeg",
      description:
        "We review your medical history and studies, run the necessary physical tests, and carry out your first treatment session with an exercise program designed for you. We'll answer all your questions before we begin.",
      modalities: [
        {
          label: "Video consultation",
          icon: "💻",
          duration: "1h 30min",
          price: "$800 MXN",
          isVideoCall: true,
        },
        {
          label: "In person · Mérida",
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
      timeAgo: "Last month",
      text: "EXCELLENT treatment, care and service — the sessions have helped my dad tremendously. Congratulations to Lic. Karla González for her care.",
    },
    {
      author: "LISSETH KUMUL",
      rating: 5,
      timeAgo: "Last month",
      text: "Excellent care, service, and trust. I had suffered from vertigo for many years without a real diagnosis. I came here, went through assessments and rehabilitation, and the improvement is truly incredible. Thank you so much, Dra. Karla.",
    },
    {
      author: "Alejandra Bustillos Arce",
      rating: 5,
      timeAgo: "7 months ago",
      text: "Dr. Karla is very professional as well as kind and attentive. She helped me with vestibular therapy, and within a few days of doing the exercises I noticed improvement; I highly recommend her.",
    },
    {
      author: "Tere Yam",
      rating: 5,
      timeAgo: "7 months ago",
      text: "Dr. Karla is an excellent physical therapist — kind, knowledgeable, and patient in guiding you through the entire vestibular rehabilitation process. She has a wonderful warmth as a person.",
    },
    {
      author: "Jesús Dzib Ramírez",
      rating: 5,
      timeAgo: "9 months ago",
      text: "Friendly service and treatment, professionalism and quality — she helped me complete my knee infiltration treatment.",
    },
    {
      author: "Ulises Hernández",
      rating: 5,
      timeAgo: "11 months ago",
      text: "Karla is an excellent vestibular rehabilitation professional. She is attentive, dedicated, highly knowledgeable, and has a human touch that is truly appreciated.",
    },
  ],

  certifications: [
    {
      title: "Vestibular Rehabilitation Certification",
      issuer: "University of Pittsburgh",
      year: "2023",
    },
    {
      title: "Diploma in Orthopedic Manual Therapy",
      issuer: "Advanced Physiotherapy Institute",
      year: "2021",
    },
    {
      title: "Advanced Course on Repositioning Maneuvers (BPPV)",
      issuer: "Mexican Physiotherapy Society",
      year: "2022",
    },
  ],

  skills: [
    "Otolith repositioning (BPPV)",
    "Adaptive vestibular rehabilitation",
    "Manual therapy",
    "Gait and balance assessment",
    "Vestibular habituation exercises",
    "Chronic vertigo and dizziness management",
    "Telerehabilitation",
    "Patient education and support",
  ],

  publications: [
    {
      title: "Effectiveness of vestibular rehabilitation in patients with recurrent BPPV",
      venue: "Mexican Journal of Physiotherapy",
      year: "2022",
    },
    {
      title: "Vestibular telerehabilitation: outcomes in remote patients",
      venue: "Latin American Physiotherapy Congress",
      year: "2023",
    },
  ],

  ui: {
    nav: {
      services: "Services",
      about: "About",
      credentials: "Credentials",
      reviews: "Reviews",
      address: "Location",
    },
    langSwitchLabel: "Change language",
    logoAlt: "Logo of",
    bookNow: "Book now",
    bookAppointment: "Book an appointment",
    whatsappCta: "Message me on WhatsApp",
    whatsappLabel: "WhatsApp",
    followUs: "Follow me:",
    reviewsOnGoogle: "Google reviews",
    reviewsWord: "reviews",
    heroBadgeRole: "Vestibular rehabilitation",
    services: {
      eyebrow: "Services",
      heading: "Choose the format that works best for you",
      subheading:
        "Every session is available by video consultation or in person in Mérida, with the same care and follow-up.",
    },
    about: {
      eyebrow: "About",
      imageAlt: "Vestibular rehabilitation consultation",
    },
    credentials: {
      eyebrow: "Background and training",
      heading: "Clinical expertise behind every session",
      subheading:
        "Certified training, specialized techniques, and work shared at physiotherapy forums.",
      mockNotice: "Sample content — will be updated with real information",
      certifications: "Certifications",
      skills: "Skills",
      publications: "Publications",
    },
    reviews: {
      eyebrow: "Reviews",
      heading: "What my patients say",
    },
    address: {
      eyebrow: "Location",
      heading: "Visit us in Mérida",
      workingHours: "Opening hours",
    },
    footer: {
      rights: "All rights reserved.",
    },
  },
};
