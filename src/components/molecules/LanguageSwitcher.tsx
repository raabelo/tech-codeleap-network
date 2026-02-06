"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { Language } from "@/i18n/types/settings";
import { IconWorld } from "@tabler/icons-react";
import { ReactNode } from "react";

interface LanguageSwitcherProps extends React.HTMLAttributes<HTMLDivElement> {
    color?: string;
}

export default function LanguageSwitcher({ ...props }: LanguageSwitcherProps) {
    const { language, setLanguage } = useLanguage();

    const flags: Record<Language, ReactNode> = {
        en: "EN",
        pt: "PT",
        fr: "FR",
    };  

    return (
        <div className={`gap-2 flex flex-row items-center ${props.className}`}>
            <IconWorld />
            {(Object.keys(flags) as Language[]).map((lang) => (
                <button
                    key={lang}
                    className={`${language === lang ? "font-bold" : "opacity-50"}`}
                    onClick={() => setLanguage(lang)}
                >
                    <div className="text-sm mt-1">{flags[lang]}</div>
                </button>
            ))}
        </div>
    );
}
