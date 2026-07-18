// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// TODO: cuando tengas un dominio propio en Hostinger para este sitio,
// pon aquí la URL final (ej. 'https://split.tudominio.com') y quita
// BASE_PATH del workflow de despliegue (ya no hace falta).
const site = process.env.SITE_URL ?? undefined;
const base = process.env.BASE_PATH ?? '/';

// https://astro.build/config
export default defineConfig({
  site,
  base,
  integrations: [react()],

  vite: {
    plugins: [tailwindcss()]
  }
});
