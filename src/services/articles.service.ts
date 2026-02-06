import { api } from "@/lib/axios";
import {
    ArticleEntity,
    ArticleReactionInput,
    CreateArticleInput,
    GetAllArticlesParams,
    UpdateArticleInput,
} from "@/utils/types/Article";
import { PaginatedResponse } from "@/utils/types/Responses";

export const articlesService = {
    getAll: async (params?: GetAllArticlesParams) =>
        await api
            .get<PaginatedResponse<ArticleEntity>>("/articles", { params })
            .then((res) => res.data),

    create: async (data: CreateArticleInput) =>
        await api.post<ArticleEntity>("/articles", data).then((res) => res.data),

    update: async (id: string, data: UpdateArticleInput) =>
        await api.put<ArticleEntity>(`/articles/${id}`, data).then((res) => res.data),

    remove: async (id: string, username: string) =>
        await api.delete(`/articles/${id}`, { data: { username } }),

    react: async (id: string, data: ArticleReactionInput) =>
        await api.post<ArticleEntity>(`/articles/${id}/reaction`, data).then((res) => res.data),
};
