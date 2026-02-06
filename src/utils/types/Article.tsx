import { Article } from "@prisma/client";

export type GetAllArticlesParams = {
    page?: number;
    limit?: number;
    search?: string;
    ordering?: string
};

export type CreateArticleInput = {
    username: string;
    title: string;
    content: string;
    parentArticleId?: string | null;
};

export type UpdateArticleInput = {
    username: string;
    title: string;
    content: string;
};

export type ArticleReactionInput = {
    username: string;
    reaction: "like" | "dislike";
};

export type ArticleEntity = Article;
