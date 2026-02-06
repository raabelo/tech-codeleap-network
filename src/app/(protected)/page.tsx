import ArticleForm from "@/components/organisms/ArticleForm";
import ArticleList from "@/components/organisms/ArticleList";
import Header from "@/components/organisms/Header";
import { IconBrandLinkedin } from "@tabler/icons-react";
import Link from "next/link";

export default function Home() {
    return (
        <main className="min-h-svh w-3xl bg-white items-center justify-start flex flex-col mx-auto max-w-svw relative">
            <Header />
            <section className="w-full p-6 flex flex-col gap-6">
                <ArticleForm />
                <ArticleList />
            </section>
            <div className="flex flex-row gap-2 my-6 items-center">
                <span className="text-sm">Developed by Fabiano Rabelo</span>
                <Link
                    href={"https://www.linkedin.com/in/raabelo/"}
                    className="text-primary"
                    target="_blank"
                >
                    <IconBrandLinkedin />
                </Link>
            </div>
        </main>
    );
}
