"use client";

import { useLang } from "@/hooks/useLang";

export default function Home() {
    const t = useLang();

    return (
        <main className="min-h-svh w-3xl bg-white items-center justify-start flex flex-col gap-6 mx-auto">
            <header className="bg-primary text-white w-full py-7 px-9 text-2xl font-bold border-b border-neutral-dark">
                <h1>{t("codeleap.home.title")}</h1>
            </header>
            <section className=""></section>
        </main>
    );
}
