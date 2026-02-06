"use client";

import { useState } from "react";
import Form from "@/components/molecules/Form";
import FormField from "@/components/molecules/FormField";
import Button from "@/components/atoms/Button";
import { useUpdateArticle } from "@/hooks/mutations/useArticles";
import { useLang } from "@/hooks/useLang";
import IconEdit from "../../../public/vectors/edit";
import Modal from "../molecules/Modal";
import { getUser } from "@/utils/cookies/user";
import toast from "react-hot-toast";
import Loader from "../atoms/Loader";
import { getErrorMessage } from "@/utils/functions/errors";

interface ModalEditProps {
    id: string;
    title: string;
    content: string;
}

export default function ModalEdit({ id, title, content }: ModalEditProps) {
    const t = useLang();

    const user = getUser();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const updateArticle = useUpdateArticle();

    const [editFields, setEditFields] = useState({ title, content });

    const clearFields = () => {
        setEditFields({ title: "", content: "" });
    };

    if (!user) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        updateArticle.mutate(
            { id, data: { username: user, title: editFields.title, content: editFields.content } },
            {
                onSuccess: () => {
                    toast.success(t("codeleap.home.modal.edit.toasts.success"));
                    setIsModalOpen(false);
                    clearFields();
                },
                onError: (err: Error) =>
                    toast.error(
                        t("codeleap.home.modal.edit.toasts.fail") + ":\n" + getErrorMessage(err),
                    ),
            },
        );
    };

    const handleOnChange = (field: string, value: string) => {
        setEditFields((prev) => ({ ...prev, [field]: value }));
    };

    return (
        <>
            <button type="button" onClick={() => setIsModalOpen(true)}>
                <IconEdit />
            </button>
            <Modal
                isOpen={isModalOpen}
                close={() => {
                    clearFields();
                    setIsModalOpen(false);
                }}
                title={t("codeleap.home.modal.edit.title")}
                content={
                    <Form
                        onSubmit={handleSubmit}
                        isSubmitting={updateArticle.isPending}
                        withWrapper={false}
                    >
                        <FormField
                            id="title"
                            label={t("codeleap.home.modal.edit.form.fields.title.label")}
                            value={editFields.title}
                            onChange={(val) => handleOnChange("title", val)}
                            placeholder={t(
                                "codeleap.home.modal.edit.form.fields.title.placeholder",
                            )}
                            maxLength={100}
                        />
                        <FormField
                            id="content"
                            label={t("codeleap.home.modal.edit.form.fields.content.label")}
                            value={editFields.content}
                            onChange={(val) => handleOnChange("content", val)}
                            placeholder={t(
                                "codeleap.home.modal.edit.form.fields.content.placeholder",
                            )}
                            maxLength={1000}
                            multiline
                            rows={4}
                        />
                    </Form>
                }
                submitButton={
                    <Button
                        variant="success"
                        onClick={handleSubmit}
                        disabled={
                            !editFields.title.trim() ||
                            !editFields.content.trim() ||
                            updateArticle.isPending
                        }
                    >
                        {updateArticle.isPending ? (
                            <Loader />
                        ) : (
                            t("codeleap.home.modal.edit.submit")
                        )}
                    </Button>
                }
            />
        </>
    );
}
