"use client";

import ArticleForm from "@/components/organisms/ArticleForm";
import ArticleList from "@/components/organisms/ArticleList";
import { useLang } from "@/hooks/useLang";

export default function Home() {
    const t = useLang();

    return (
        <main className="min-h-svh w-3xl bg-white items-center justify-start flex flex-col mx-auto max-w-svw relative">
            <header className="bg-primary text-white w-full py-7 px-9 text-2xl font-bold border-b border-neutral-dark sticky top-0">
                <h1>{t("codeleap.home.title")}</h1>
            </header>
            <section className="w-full p-6 flex flex-col gap-6">
                <ArticleForm />
                <ArticleList />
            </section>
        </main>
    );
}
