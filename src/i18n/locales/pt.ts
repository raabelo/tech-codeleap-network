import { flattenTranslations } from "@/utils/functions/flattenTranslations";
import { TranslationsType } from "./en";

const translationsPT: TranslationsType = {
    codeleap: {
        login: {
            title: "Welcome to CodeLeap network!",
            form: {
                fields: {
                    username: {
                        label: "Please enter your username",
                        placeholder: "John doe",
                    },
                },
                controls: {
                    submit: "ENTER",
                },
            },
        },
        home: {
            title: "CodeLeap Network",
            form: {
                title: "What’s on your mind?",
                fields: {
                    title: { label: "Title", placeholder: "Hello world" },
                    content: { label: "Content", placeholder: "Content here" },
                },
                controls: {
                    submit: "Create",
                },
            },
        },
    },
};

export const TRANSLATIONS_PT = flattenTranslations(translationsPT);
