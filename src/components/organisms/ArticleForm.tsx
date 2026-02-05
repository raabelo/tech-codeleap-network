"use client";

import { useState } from "react";
import { useLang } from "@/hooks/useLang";
import { useAuth } from "@/hooks/mutations/useAuth";
import Form from "../molecules/Form";
import FormField from "../molecules/FormField";

export default function ArticleForm() {
    const t = useLang();

    const [username, setUsername] = useState("");
    const [bio, setBio] = useState("");

    const authMutation = useAuth();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    return (
        <Form
            title={t("codeleap.home.form.title")}
            onSubmit={handleSubmit}
            submitLabel={t("codeleap.home.form.controls.submit")}
            isSubmitting={authMutation.isPending}
            submitDisabled={!username.trim()}
        >
            <FormField
                id="username"
                label={t("codeleap.home.form.fields.title.label")}
                value={username}
                onChange={setUsername}
                placeholder={t("codeleap.home.form.fields.title.placeholder")}
                maxLength={20}
                required
            />

            <FormField
                id="bio"
                label={t("codeleap.home.form.fields.content.label")}
                value={bio}
                onChange={setBio}
                placeholder={t("codeleap.home.form.fields.content.placeholder")}
                multiline
                rows={6}
            />
        </Form>
    );
}
