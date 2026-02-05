import { flattenTranslations } from "@/utils/functions/flattenTranslations";

const translationsEN = {
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
            search: {
                input: {
                    placeholder: "Search articles..."
                }
            }
        },
        common: {
            timeAgo: {
                seconds: "seconds ago",
                minutes: "minutes ago",
                hours: "hours ago",
                days: "days ago",
                weeks: "weeks ago",
                months: "months ago",
                years: "years ago",
            },
            seeMore: { expand: "see more", retract: "retract" },
        },
    },
};

export const TRANSLATIONS_EN = flattenTranslations(translationsEN);
export type TranslationsType = typeof translationsEN;
