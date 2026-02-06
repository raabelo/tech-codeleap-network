import { flattenTranslations } from "@/utils/functions/flattenTranslations";
import { TranslationsType } from "./en";

const translationsPT: TranslationsType = {
    codeleap: {
        login: {
            title: "Bem-vindo à rede CodeLeap!",
            form: {
                fields: {
                    username: {
                        label: "Por favor, insira seu nome de usuário",
                        placeholder: "John doe",
                    },
                },
                controls: {
                    submit: "ENTRAR",
                },
                toasts: {
                    fail: "Não foi possível entrar",
                },
            },
        },
        home: {
            header: {
                title: "Rede CodeLeap",
                logout: {
                    toast: {
                        success: "Logout realizado com sucesso",
                        fail: "Não foi possível sair",
                    },
                },
            },
            form: {
                title: "O que você está pensando?",
                fields: {
                    title: { label: "Título", placeholder: "Olá mundo" },
                    content: { label: "Conteúdo", placeholder: "Conteúdo aqui" },
                },
                controls: {
                    submit: "Criar",
                },
                toasts: {
                    success: "Artigo criado com sucesso",
                    fail: "Artigo não criado",
                },
            },
            search: {
                input: {
                    placeholder:
                        "Buscar artigos (comece com '@' para filtrar por nome de usuário ou menção)...",
                },
                filter: {
                    sort: {
                        newest: "Mais recente",
                        oldest: "Mais antigo",
                        popular: "Popular",
                    },
                },
            },
            modal: {
                delete: {
                    title: "Tem certeza de que deseja excluir este item?",
                    submit: "Excluir",
                    toasts: {
                        success: "Artigo excluído com sucesso",
                        fail: "Artigo não excluído",
                    },
                },
                edit: {
                    title: "Editar item",
                    submit: "Salvar",
                    form: {
                        fields: {
                            title: { label: "Título", placeholder: "Olá mundo" },
                            content: { label: "Conteúdo", placeholder: "Conteúdo aqui" },
                        },
                    },
                    toasts: {
                        success: "Artigo editado com sucesso",
                        fail: "Artigo não editado",
                    },
                },
                logout: {
                    title: "Tem certeza de que deseja sair?",
                    submit: "Sair",
                },
            },
        },
        common: {
            cancel: "Cancelar",
            timeAgo: {
                time: {
                    seconds: { singular: "segundo", plural: "segundos" },
                    minutes: { singular: "minuto", plural: "minutos" },
                    hours: { singular: "hora", plural: "horas" },
                    days: { singular: "dia", plural: "dias" },
                    weeks: { singular: "semana", plural: "semanas" },
                    months: { singular: "mês", plural: "meses" },
                    years: { singular: "ano", plural: "anos" },
                },
                ago: "atrás",
            },
            seeMore: { expand: "ver mais", retract: "recolher" },
        },
    },
};

export const TRANSLATIONS_PT = flattenTranslations(translationsPT);
