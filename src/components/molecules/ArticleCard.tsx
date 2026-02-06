"use client";

import { Article } from "@prisma/client";
import { getUser } from "@/utils/cookies/user";
import ArticleHeader from "./ArticleHeader";
import ArticleContent from "./ArticleContent";
import ArticleFooter from "./ArticleFooter";

export default function ArticleCard(article: Article) {
    const user = getUser();

    return (
        <article id={article.id} className="rounded-2xl border border-neutral-dark overflow-hidden">
            <ArticleHeader
                id={article.id}
                title={article.title}
                content={article.content}
                username={article.username}
                currentUser={user}
            />
            <ArticleContent
                username={article.username}
                content={article.content}
                createdAt={article.createdAt}
            />
            <ArticleFooter
                id={article.id}
                likes={article.likes}
                dislikes={article.dislikes}
                currentUser={user}
            />
        </article>
    );
}

export function ArticleCardSkeleton() {
    return (
        <div className="rounded-2xl border border-neutral-dark overflow-hidden animate-pulse">
            <div className="bg-neutral-dark/20 w-full h-20" />
            <div className="p-6 w-full space-y-4">
                <div className="flex justify-between mb-2">
                    <div className="h-4 bg-neutral-dark/20 rounded w-1/3" />
                    <div className="h-4 bg-neutral-dark/20 rounded w-1/4" />
                </div>
                <div className="space-y-2">
                    <div className="h-4 bg-neutral-dark/20 rounded w-full" />
                    <div className="h-4 bg-neutral-dark/20 rounded w-full" />
                    <div className="h-4 bg-neutral-dark/20 rounded w-3/4" />
                </div>
            </div>
            <div className="bg-neutral-dark/20 h-10 w-full" />
        </div>
    );
}
