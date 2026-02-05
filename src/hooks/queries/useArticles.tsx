import { useQuery } from "@tanstack/react-query";
import { articlesService } from "@/services/articles.service";
import { ArticleEntity } from "@/utils/types/Article";
import { PaginatedResponse } from "@/utils/types/Responses";

type UseArticlesParams = {
    page: number;
    search?: string;
};

export function useArticles({ page, search }: UseArticlesParams) {
    return useQuery<PaginatedResponse<ArticleEntity>>({
        queryKey: ["articles", page, search],
        queryFn: () =>
            articlesService.getAll({
                page,
                limit: 10,
                search,
            }),
        placeholderData: (previousData) => previousData,
    });
}
