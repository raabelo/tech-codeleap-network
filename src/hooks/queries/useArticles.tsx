import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { articlesService } from "@/services/articles.service";
import { ArticleEntity } from "@/utils/types/Article";
import { PaginatedResponse } from "@/utils/types/Responses";

export type ArticleSort = "-created_datetime" | "created_datetime" | "popularity";

type UseArticlesParams = {
    page: number;
    search?: string;
    ordering?: ArticleSort;
};

export function useArticles({ page, search, ordering }: UseArticlesParams) {
    return useQuery<PaginatedResponse<ArticleEntity>>({
        queryKey: ["articles", page, search, ordering],
        queryFn: () =>
            articlesService.getAll({
                page,
                limit: 10,
                search,
                ordering,
            }),
        placeholderData: (previousData, previousQuery) => {
            const oldKey = previousQuery?.queryKey as [
                string,
                number,
                string | undefined,
                string | undefined,
            ];
            if (oldKey && (oldKey[2] !== search || oldKey[3] !== ordering)) {
                return undefined;
            }
            return previousData;
        },
    });
}

export function useInfiniteArticles({ search, ordering }: Omit<UseArticlesParams, "page">) {
    return useInfiniteQuery<PaginatedResponse<ArticleEntity>>({
        queryKey: ["articles", "infinite", search, ordering],
        queryFn: ({ pageParam }) =>
            articlesService.getAll({
                page: pageParam as number,
                limit: 10,
                search,
                ordering,
            }),
        initialPageParam: 1,
        getNextPageParam: (lastPage) => {
            if (lastPage.meta.page < lastPage.meta.totalPages) return lastPage.meta.page + 1;
            return undefined;
        },
    });
}
