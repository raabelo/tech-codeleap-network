export const languages = ["en", "pt", "fr"] as const;

type Langs = typeof languages;

export type Language = Langs[number];

export const defaultLang = "en";
