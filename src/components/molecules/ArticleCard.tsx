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
            <ArticleHeader title={article.title} username={article.username} currentUser={user} />
            <ArticleContent
                username={article.username}
                content={article.content}
                createdAt={article.createdAt}
            />
            <ArticleFooter likes={article.likes} dislikes={article.dislikes} />
        </article>
    );
}
