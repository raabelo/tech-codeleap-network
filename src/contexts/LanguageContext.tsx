"use client";

import { createContext, useContext, useEffect, useState } from "react";
import i18n from "@/i18n/i18n";
import { Language } from "@/i18n/types/settings";

type LanguageContextType = {
    language: Language;
    setLanguage: (lang: Language) => void;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

const SUPPORTED_LANGS: Language[] = ["pt", "en", "fr"];
const DEFAULT_LANG: Language = "en";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguageState] = useState<Language>(() => {
        if (typeof window !== "undefined") {
            const storedLang = localStorage.getItem("lang") as Language | null;
            if (storedLang && SUPPORTED_LANGS.includes(storedLang)) {
                return storedLang;
            }
        }
        return DEFAULT_LANG;
    });

    /* =======================
        SYNC I18N
    ======================= */

    useEffect(() => {
        i18n.changeLanguage(language);
    }, [language]);

    /* =======================
        UPDATE LANGUAGE
    ======================= */

    const setLanguage = (lang: Language) => {
        if (!SUPPORTED_LANGS.includes(lang)) return;

        setLanguageState(lang);
        i18n.changeLanguage(lang);
        localStorage.setItem("lang", lang);
    };

    return (
        <LanguageContext.Provider
            value={{
                language,
                setLanguage,
            }}
        >
            {children}
        </LanguageContext.Provider>
    );
}

/* =======================
    HOOK
======================= */

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
