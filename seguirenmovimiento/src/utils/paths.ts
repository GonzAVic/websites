/**
 * Antepone el `base` configurado en astro.config.mjs a una ruta de un
 * asset servido desde /public (ej. "/images/logo.png"). Necesario porque
 * Astro NO reescribe automáticamente rutas de string en src="/..." cuando
 * el sitio se publica bajo una subruta (ej. GitHub Pages sin dominio propio).
 */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL;
  const normalizedBase = base.endsWith("/") ? base.slice(0, -1) : base;
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${normalizedBase}${normalizedPath}`;
}
