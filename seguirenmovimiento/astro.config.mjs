// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// TODO: cuando tengas el dominio propio de este cliente en Hostinger,
// pon aquí la URL final (ej. 'https://karlafisiovestibular.com') y
// elimina BASE_PATH del workflow de despliegue (ya no hace falta).
const site = process.env.SITE_URL ?? undefined;
const base = process.env.BASE_PATH ?? '/';

// https://astro.build/config
export default defineConfig({
  site,
  base,
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
