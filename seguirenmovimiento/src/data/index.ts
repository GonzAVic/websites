import { content as es } from "./content.es";
import { content as en } from "./content.en";
import type { Content } from "./types";

export const locales = ["es", "en"] as const;
export type Locale = (typeof locales)[number];

const dictionaries: Record<Locale, Content> = { es, en };

export function getContent(locale: string | undefined): Content {
  if (locale === "en") return dictionaries.en;
  return dictionaries.es;
}
