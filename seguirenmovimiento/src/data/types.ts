export type Modality = {
  label: string;
  icon: string;
  duration: string;
  price: string;
  isVideoCall: boolean;
};

export type SessionType = {
  id: string;
  title: string;
  description: string;
  image: string;
  modalities: Modality[];
};

export type Review = {
  author: string;
  rating: number;
  timeAgo: string;
  text: string;
};

export type Certification = {
  title: string;
  issuer: string;
  year: string;
};

export type Publication = {
  title: string;
  venue: string;
  year: string;
};

export type Content = {
  site: {
    name: string;
    shortName: string;
    tagline: string;
    certification: string;
    bio: string;
    email: string;
    whatsapp: string;
    bookingUrl: string;
    address: {
      street: string;
      city: string;
      mapsUrl: string;
      embedUrl: string;
    };
    social: {
      instagram: string;
      facebook: string;
      tiktok: string;
    };
    rating: {
      average: number;
      count: number;
      breakdown: { stars: number; count: number }[];
    };
    workingHours: { day: string; hours: string }[];
  };
  about: {
    heading: string;
    paragraphs: string[];
    credential: string;
  };
  sessionTypes: SessionType[];
  reviews: Review[];
  certifications: Certification[];
  skills: string[];
  publications: Publication[];
  ui: {
    nav: {
      services: string;
      about: string;
      credentials: string;
      reviews: string;
      address: string;
    };
    langSwitchLabel: string;
    logoAlt: string;
    bookNow: string;
    bookAppointment: string;
    whatsappCta: string;
    whatsappLabel: string;
    followUs: string;
    reviewsOnGoogle: string;
    reviewsWord: string;
    heroBadgeRole: string;
    services: {
      eyebrow: string;
      heading: string;
      subheading: string;
    };
    about: {
      eyebrow: string;
      imageAlt: string;
    };
    credentials: {
      eyebrow: string;
      heading: string;
      subheading: string;
      mockNotice: string;
      certifications: string;
      skills: string;
      publications: string;
    };
    reviews: {
      eyebrow: string;
      heading: string;
    };
    address: {
      eyebrow: string;
      heading: string;
      workingHours: string;
    };
    footer: {
      rights: string;
    };
  };
};
