"use client";

import { useState } from "react";
import Button from "@/components/atoms/Button";
import { useDeleteArticle } from "@/hooks/mutations/useArticles";
import { useLang } from "@/hooks/useLang";
import Modal from "../molecules/Modal";
import { getUser } from "@/utils/cookies/user";
import IconTrashcan from "../../../public/vectors/trashcan";
import toast from "react-hot-toast";
import Loader from "../atoms/Loader";
import { getErrorMessage } from "@/utils/functions/errors";

interface ModalDeleteProps {
    id: string;
    username: string;
}
export default function ModalDelete({ id, username }: ModalDeleteProps) {
    const t = useLang();

    const user = getUser();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const deleteArticle = useDeleteArticle();

    if (!user) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        deleteArticle.mutate(
            { id, username },
            {
                onSuccess: () => {
                    toast.success(t("codeleap.home.modal.delete.toasts.success"));
                    setIsModalOpen(false);
                },
                onError: (err: Error) =>
                    toast.error(
                        t("codeleap.home.modal.delete.toasts.fail") + ":\n" + getErrorMessage(err),
                    ),
            },
        );
    };

    return (
        <>
            <button type="button" onClick={() => setIsModalOpen(true)}>
                <IconTrashcan />
            </button>
            <Modal
                isOpen={isModalOpen}
                close={() => setIsModalOpen(false)}
                title={t("codeleap.home.modal.delete.title")}
                submitButton={
                    <Button
                        variant="danger"
                        onClick={handleSubmit}
                        disabled={deleteArticle.isPending}
                    >
                        {deleteArticle.isPending ? (
                            <Loader />
                        ) : (
                            t("codeleap.home.modal.delete.submit")
                        )}
                    </Button>
                }
            />
        </>
    );
}
