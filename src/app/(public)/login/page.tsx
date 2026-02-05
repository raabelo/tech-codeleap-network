"use client";

import { SubmitEvent, useState } from "react";
import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";
import { useLang } from "@/hooks/useLang";
import { useAuth } from "@/hooks/mutations/useAuth";
import Loader from "@/components/atoms/Loader";
import { useRouter } from "next/navigation";

export default function Login() {
    const t = useLang();
    const router = useRouter();

    const [username, setUsername] = useState("");

    const authMutation = useAuth();

    const handleSubmit = (e: SubmitEvent) => {
        e.preventDefault();

        if (!username) return;

        try {
            authMutation.mutate(username);
            router.replace("/");
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <main className="min-h-svh flex items-center justify-center">
            <section className="w-lg bg-white border rounded-2xl p-6 flex flex-col gap-6">
                <h1 className="font-bold text-xl">{t("codeleap.login.title")}</h1>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div>
                        <label htmlFor="username">
                            {t("codeleap.login.form.fields.username.label")}
                        </label>

                        <Input
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            maxLength={20}
                            placeholder={t("codeleap.login.form.fields.username.placeholder")}
                        />
                    </div>

                    <Button
                        variant="primary"
                        type="submit"
                        className="ml-auto"
                        disabled={!username.trim() || authMutation.isPending}
                    >
                        {authMutation.isPending ? (
                            <Loader />
                        ) : (
                            t("codeleap.login.form.controls.submit")
                        )}
                    </Button>
                </form>
            </section>
        </main>
    );
}
