"use client";

import { SetStateAction, useState } from "react";
import { useArticles } from "@/hooks/queries/useArticles";
import ArticleCard from "../molecules/ArticleCard";
import Input from "../atoms/Input";
import { useLang } from "@/hooks/useLang";

export default function ArticleList() {
    const t = useLang();

    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("");

    const { data, isLoading, isError } = useArticles({ page, search });

    if (isLoading) return <p>Carregando artigos...</p>;
    if (isError || !data) return <p>Erro ao carregar artigos</p>;

    const { data: articles, meta } = data;

    return (
        <section className="space-y-4">
            <Input
                type="text"
                placeholder={t("codeleap.home.search.input.placeholder")}
                value={search}
                onChange={(e: { target: { value: SetStateAction<string> } }) => {
                    setSearch(e.target.value);
                    setPage(1);
                }}
            />

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
