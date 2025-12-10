import { Locale } from "@/i18n.config";
import { de } from "./dictionaries/de";
import { en } from "./dictionaries/en";
import { Dictionary } from "./dictionaries/types";

const dictionaries: Record<Locale, Dictionary> = {
  de,
  en,
};

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale] ?? dictionaries.de;
}
