"use client";

import { useState } from "react";
import { ArticleSort, useInfiniteArticles } from "@/hooks/queries/useArticles";
import ArticleCard, { ArticleCardSkeleton } from "../molecules/ArticleCard";
import ListFilter from "../molecules/ListFilter";
import Button from "../atoms/Button";
import Loader from "../atoms/Loader";
import { useLang } from "@/hooks/useLang";

export default function ArticleList() {
    const t = useLang();

    const [search, setSearch] = useState("");
    const [sort, setSort] = useState<ArticleSort>("-created_datetime");

    const { data, isLoading, isError, fetchNextPage, hasNextPage, isFetchingNextPage } =
        useInfiniteArticles({ search, ordering: sort });

    if (isError) return <p>{t("codeleap.home.articles.error")}</p>;

    return (
        <section className="space-y-4 pb-10">
            <ListFilter
                search={search}
                setSearch={setSearch}
                setPage={() => {}}
                sort={sort}
                setSort={setSort}
            />

            <div className="space-y-4 -mt-3">
                {isLoading
                    ? Array.from({ length: 10 }).map((_, i) => <ArticleCardSkeleton key={i} />)
                    : data?.pages.map((page) =>
                          page.data.map((article) => <ArticleCard key={article.id} {...article} />),
                      )}
            </div>

            {data?.pages[0].data.length === 0 && (
                <p className="text-center text-neutral-dark mt-8">
                    {t("codeleap.home.articles.empty")}
                </p>
            )}

            {hasNextPage && (
                <div className="flex justify-center mt-8">
                    <Button onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
                        {isFetchingNextPage ? <Loader /> : t("codeleap.common.seeMore.expand")}
                    </Button>
                </div>
            )}
        </section>
    );
}
