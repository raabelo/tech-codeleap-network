"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { TRANSLATIONS_EN } from "./locales/en";
import { TRANSLATIONS_PT } from "./locales/pt";
import { TRANSLATIONS_FR } from "./locales/fr";

i18n.use(initReactI18next).init({
    resources: {
        pt: { translation: TRANSLATIONS_PT },
        en: { translation: TRANSLATIONS_EN },
        fr: { translation: TRANSLATIONS_FR },
    },
    lng: "pt",
    fallbackLng: "pt",
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
