import { Article } from "@prisma/client";

export type GetAllArticlesParams = {
    page?: number;
    limit?: number;
    search?: string;
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
    userId: string;
    type: "like" | "dislike";
};

export type ArticleEntity = Article;
