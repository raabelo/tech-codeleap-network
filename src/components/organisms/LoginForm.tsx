"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useLang } from "@/hooks/useLang";
import { useAuth } from "@/hooks/mutations/useAuth";
import Form from "../molecules/Form";
import FormField from "../molecules/FormField";

export default function LoginForm() {
    const t = useLang();
    const router = useRouter();

    const [username, setUsername] = useState("");

    const authMutation = useAuth();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!username.trim()) return;

        authMutation.mutate(username, {
            onSuccess: () => router.replace("/"),
        });
    };

    return (
        <Form
            title={t("codeleap.login.title")}
            onSubmit={handleSubmit}
            submitLabel={t("codeleap.login.form.controls.submit")}
            isSubmitting={authMutation.isPending}
            submitDisabled={!username.trim()}
        >
            <FormField
                id="username"
                label={t("codeleap.login.form.fields.username.label")}
                value={username}
                onChange={setUsername}
                placeholder={t("codeleap.login.form.fields.username.placeholder")}
                maxLength={20}
                required
            />
        </Form>
    );
}
