import ArticleForm from "@/components/organisms/ArticleForm";
import ArticleList from "@/components/organisms/ArticleList";
import Header from "@/components/organisms/Header";

export default function Home() {
    return (
        <main className="min-h-svh w-3xl bg-white items-center justify-start flex flex-col mx-auto max-w-svw relative">
            <Header />
            <section className="w-full p-6 flex flex-col gap-6">
                <ArticleForm />
                <ArticleList />
            </section>
        </main>
    );
}
