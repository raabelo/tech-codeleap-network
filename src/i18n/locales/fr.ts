import { flattenTranslations } from "@/utils/functions/flattenTranslations";
import { TranslationsType } from "./en";

const translationsFR: TranslationsType = {
    codeleap: {
        login: {
            title: "Bienvenue sur le réseau CodeLeap !",
            form: {
                fields: {
                    username: {
                        label: "Veuillez entrer votre nom d'utilisateur",
                        placeholder: "John doe",
                    },
                },
                controls: {
                    submit: "ENTRER",
                },
                toasts: {
                    fail: "Impossible de se connecter",
                },
            },
        },
        home: {
            header: {
                title: "Réseau CodeLeap",
                logout: {
                    toast: {
                        success: "Déconnexion réussie",
                        fail: "Impossible de se déconnecter",
                    },
                },
            },
            form: {
                title: "À quoi pensez-vous ?",
                fields: {
                    title: { label: "Titre", placeholder: "Bonjour le monde" },
                    content: { label: "Contenu", placeholder: "Contenu ici" },
                },
                controls: {
                    submit: "Créer",
                },
                toasts: {
                    success: "Article créé avec succès",
                    fail: "Article non créé",
                },
            },
            search: {
                input: {
                    placeholder:
                        "Rechercher des articles (commencez par '@' pour filtrer par nom d'utilisateur ou mention)...",
                },
                filter: {
                    sort: {
                        newest: "Le plus récent",
                        oldest: "Le plus ancien",
                        popular: "Populaire",
                    },
                },
            },
            modal: {
                delete: {
                    title: "Êtes-vous sûr de vouloir supprimer cet élément ?",
                    submit: "Supprimer",
                    toasts: {
                        success: "Article supprimé avec succès",
                        fail: "Article non supprimé",
                    },
                },
                edit: {
                    title: "Modifier l'élément",
                    submit: "Enregistrer",
                    form: {
                        fields: {
                            title: { label: "Titre", placeholder: "Bonjour le monde" },
                            content: { label: "Contenu", placeholder: "Contenu ici" },
                        },
                    },
                    toasts: {
                        success: "Article modifié avec succès",
                        fail: "Article non modifié",
                    },
                },
                logout: {
                    title: "Êtes-vous sûr de vouloir vous déconnecter ?",
                    submit: "Quitter",
                },
            },
        },
        common: {
            cancel: "Annuler",
            timeAgo: {
                time: {
                    seconds: { singular: "seconde", plural: "secondes" },
                    minutes: { singular: "minute", plural: "minutes" },
                    hours: { singular: "heure", plural: "heures" },
                    days: { singular: "jour", plural: "jours" },
                    weeks: { singular: "semaine", plural: "semaines" },
                    months: { singular: "mois", plural: "mois" },
                    years: { singular: "an", plural: "ans" },
                },
                ago: "il y a",
            },
            seeMore: { expand: "voir plus", retract: "réduire" },
        },
    },
};

export const TRANSLATIONS_FR = flattenTranslations(translationsFR);
