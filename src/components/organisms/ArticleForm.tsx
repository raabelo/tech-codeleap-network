"use client";

import { useState } from "react";
import { useLang } from "@/hooks/useLang";
import Form from "../molecules/Form";
import FormField from "../molecules/FormField";
import { getUser } from "@/utils/cookies/user";
import { useCreateArticle } from "@/hooks/mutations/useArticles";
import toast from "react-hot-toast";

export default function ArticleForm() {
    const t = useLang();
    const mutation = useCreateArticle();

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const username = getUser();
        if (!username || !title.trim() || !content.trim()) return;

        mutation.mutate(
            {
                username,
                title: title.trim(),
                content: content.trim(),
            },
            {
                onSuccess: () => {
                    toast.success(t("codeleap.home.form.toasts.success"));
                    setTitle("");
                    setContent("");
                },
            },
        );
    };

    return (
        <Form
            title={t("codeleap.home.form.title")}
            onSubmit={handleSubmit}
            submitLabel={t("codeleap.home.form.controls.submit")}
            isSubmitting={mutation.isPending}
            submitDisabled={!title.trim() || !content.trim()}
        >
            <FormField
                id="title"
                label={t("codeleap.home.form.fields.title.label")}
                value={title}
                onChange={setTitle}
                placeholder={t("codeleap.home.form.fields.title.placeholder")}
                maxLength={100}
                required
            />

            <FormField
                id="content"
                label={t("codeleap.home.form.fields.content.label")}
                value={content}
                onChange={setContent}
                placeholder={t("codeleap.home.form.fields.content.placeholder")}
                multiline
                maxLength={1000}
                rows={4}
                required
            />
        </Form>
    );
}
