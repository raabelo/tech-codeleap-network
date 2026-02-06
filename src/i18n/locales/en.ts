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
                toasts: {
                    fail: "Couldn't sign in",
                },
            },
        },
        home: {
            header: {
                title: "CodeLeap Network",
                logout: { toast: { success: "Logged out successfully", fail: "Couldn't log out" } },
            },
            form: {
                title: "What’s on your mind?",
                fields: {
                    title: { label: "Title", placeholder: "Hello world" },
                    content: { label: "Content", placeholder: "Content here" },
                },
                controls: {
                    submit: "Create",
                },
                toasts: {
                    success: "Article created successfully",
                    fail: "Article not created",
                },
            },
            search: {
                input: {
                    placeholder: "Search articles (start with '@' to filter by username or mention)...",
                },
                filter: {
                    sort: {
                        newest: "Newest",
                        oldest: "Oldest",
                        popular: "Popular",
                    },
                },
            },
            modal: {
                delete: {
                    title: "Are you sure you want to delete this item?",
                    submit: "Delete",
                    toasts: {
                        success: "Article deleted successfully",
                        fail: "Article not deleted",
                    },
                },
                edit: {
                    title: "Edit item",
                    submit: "Save",
                    form: {
                        fields: {
                            title: { label: "Title", placeholder: "Hello world" },
                            content: { label: "Content", placeholder: "Content here" },
                        },
                    },
                    toasts: {
                        success: "Article edited successfully",
                        fail: "Article not edited",
                    },
                },
                logout: {
                    title: "Are you sure you want to log out?",
                    submit: "Leave",
                },
            },
        },
        common: {
            cancel: "Cancel",
            timeAgo: {
                time: {
                    seconds: { singular: "second", plural: "seconds" },
                    minutes: { singular: "minute", plural: "minutes" },
                    hours: { singular: "hour", plural: "hours" },
                    days: { singular: "day", plural: "days" },
                    weeks: { singular: "week", plural: "weeks" },
                    months: { singular: "month", plural: "months" },
                    years: { singular: "year", plural: "years" },
                },
                ago: "ago",
            },
            seeMore: { expand: "see more", retract: "retract" },
        },
    },
};

export const TRANSLATIONS_EN = flattenTranslations(translationsEN);
export type TranslationsType = typeof translationsEN;
