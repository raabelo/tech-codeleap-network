import { useMutation, useQueryClient } from "@tanstack/react-query";
import { articlesService } from "@/services/articles.service";
import {
    ArticleEntity,
    ArticleReactionInput,
    CreateArticleInput,
    UpdateArticleInput,
} from "@/utils/types/Article";

export function useCreateArticle() {
    const qc = useQueryClient();

    return useMutation<ArticleEntity, Error, CreateArticleInput>({
        mutationFn: articlesService.create,
        onSuccess: () => {
            qc.invalidateQueries({ queryKey: ["articles"] });
        },
    });
}

export function useUpdateArticle() {
    const qc = useQueryClient();

    return useMutation<ArticleEntity, Error, { id: string; data: UpdateArticleInput }>({
        mutationFn: ({ id, data }) => articlesService.update(id, data),
        onSuccess: () => {
            qc.invalidateQueries({ queryKey: ["articles"] });
        },
    });
}

export function useDeleteArticle() {
    const qc = useQueryClient();

    return useMutation<void, Error, { id: string; username: string }>({
        mutationFn: async ({ id, username }) => {
            await articlesService.remove(id, username);
        },
        onSuccess: () => {
            qc.invalidateQueries({ queryKey: ["articles"] });
        },
    });
}

export function useReactArticle() {
    const qc = useQueryClient();

    return useMutation<ArticleEntity, Error, { id: string; data: ArticleReactionInput }>({
        mutationFn: ({ id, data }) => articlesService.react(id, data),
        onSuccess: () => {
            qc.invalidateQueries({ queryKey: ["articles"] });
        },
    });
}
