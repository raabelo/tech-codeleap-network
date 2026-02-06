"use client";

import { useState } from "react";
import { useArticles } from "@/hooks/queries/useArticles";
import ArticleCard from "../molecules/ArticleCard";
import ListFilter from "../molecules/ListFilter";

export default function ArticleList() {
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("");

    const { data, isLoading, isError } = useArticles({ page, search });

    if (isLoading) return <p>Carregando artigos...</p>;
    if (isError || !data) return <p>Erro ao carregar artigos</p>;

    const { data: articles, meta } = data;

    return (
        <section className="space-y-4">
            <ListFilter search={search} setSearch={setSearch} setPage={setPage} />

            <div className="space-y-4">
                {articles.map((article) => (
                    <ArticleCard key={article.id} {...article} />
                ))}
            </div>

            <div className="flex justify-between items-center">
                <button disabled={page === 1} onClick={() => setPage((p) => p - 1)}>
                    {"<"}
                </button>

                <span>
                    {meta.page} / {meta.totalPages}
                </span>

                <button disabled={page === meta.totalPages} onClick={() => setPage((p) => p + 1)}>
                    {">"}
                </button>
            </div>
        </section>
    );
}
