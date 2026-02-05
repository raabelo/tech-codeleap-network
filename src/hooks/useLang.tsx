"use client"

import { TranslationKeys } from "@/i18n/types";
import { Language } from "@/i18n/types/settings";
import { ReactNode, useCallback } from "react";
import { useTranslation } from "react-i18next";

import { TRANSLATIONS_EN } from "@/i18n/locales/en";
import { TRANSLATIONS_PT } from "@/i18n/locales/pt";
import { TRANSLATIONS_FR } from "@/i18n/locales/fr";

type GetMessageFn = (
    overrides?: Record<string, string>,
) => <V extends Record<string, ReactNode> | undefined>(
    id: string,
    variables?: V,
) => ReactNode[] | ReactNode | string;

/**
 * Create a Hook that extracts messages from the passed object
 * @example
 * const messages = {
 *   'en': {
 *     test: 'Test'
 *   },
 *   'pt': {
 *     test: 'Teste'
 *   }
 * }
 *
 * const useMessage = createMessageHook(messages)
 * const getMessage - useMessage()
 * getMessage('test')
 */
export function createMessageHook(messages: Record<string, Record<string, string>>): GetMessageFn {
    return function useMessage(overrides) {
        const { i18n } = useTranslation();

        return useCallback(
            (id, variables) => {
                const localizedMessages = messages[i18n.language];
                const localizedString = get(localizedMessages, id, variables, "");

                const fallbackMessages = messages["en"];
                const fallbackLocalizedString = get(fallbackMessages, id, variables, "");

                const translatedMessage = localizedString || fallbackLocalizedString;

                return overrides
                    ? get(overrides, id, variables, translatedMessage)
                    : localizedString || translatedMessage;
            },
            [i18n.language, overrides],
        );
    };
}

/**
 * Get value from a deeply nested object using a string path.
 * Memoizes the value.
 * @param obj - the object
 * @param path - the string path
 * @param def  - the fallback value
 */
function get<V extends Record<string, ReactNode> | undefined>(
    obj: Record<string, string> | null | undefined,
    path: string,
    variables: V,
    fallback: string | ReactNode | ReactNode[] = "",
): ReactNode[] | ReactNode | string {
    const localizedMessage = obj?.[path];

    if (!localizedMessage) {
        return fallback;
    }

    if (!variables) {
        return localizedMessage;
    }

    const hasMatches = Object.keys(variables).some((key) =>
        new RegExp(`\\{${key}\\}`, "g").test(localizedMessage),
    );

    if (!hasMatches) {
        return localizedMessage;
    }

    const positions: Array<{ start: number; end: number; value: ReactNode }> = [];

    for (const [key, value] of Object.entries(variables)) {
        const regex = new RegExp(`\\{${key}\\}`, "g");

        while (true) {
            const match = regex.exec(localizedMessage);
            if (!match) {
                break;
            }

            positions.push({
                start: match.index,
                end: match.index + match[0].length,
                value,
            });
        }
    }

    positions.sort((a, b) => a.start - b.start);

    const nodes: ReactNode[] = [];
    let currIdx = 0;

    for (const position of positions) {
        if (position.start > currIdx) {
            nodes.push(localizedMessage.slice(currIdx, position.start));
        }
        nodes.push(position.value);
        currIdx = position.end;
    }

    if (currIdx < localizedMessage.length) {
        nodes.push(localizedMessage.slice(currIdx));
    }

    return nodes;
}

export const messages: Record<string, Record<Language, string>> = {
    en: TRANSLATIONS_EN,
    pt: TRANSLATIONS_PT,
    fr: TRANSLATIONS_FR,
};

export function useLang() {
    const messageHook = createMessageHook(messages);
    const t = messageHook();

    function fn(key: TranslationKeys): string;
    function fn(key: TranslationKeys, variables?: Record<string, string>): string;
    function fn(key: TranslationKeys, variables?: Record<string, ReactNode>): ReactNode;
    function fn(key: TranslationKeys, variables?: Record<string, ReactNode | string>): ReactNode {
        return t(key, variables);
    }

    return fn;
}
