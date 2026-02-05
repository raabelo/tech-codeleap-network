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
    getAll: (params?: GetAllArticlesParams) =>
        api.get<PaginatedResponse<ArticleEntity>>("/articles", { params }).then((res) => res.data),

    create: (data: CreateArticleInput) =>
        api.post<ArticleEntity>("/articles", data).then((res) => res.data),

    update: (id: string, data: UpdateArticleInput) =>
        api.put<ArticleEntity>(`/articles/${id}`, data).then((res) => res.data),

    remove: (id: string, username: string) => api.delete(`/articles/${id}`, { data: { username } }),

    react: (id: string, data: ArticleReactionInput) =>
        api.post<ArticleEntity>(`/articles/${id}/reaction`, data).then((res) => res.data),
};
