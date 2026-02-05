"use client";

import { useModal } from "@/contexts/ModalContext";
import IconEdit from "../../../public/vectors/edit";
import IconTrashcan from "../../../public/vectors/trashcan";
import Button from "../atoms/Button";
import { useLang } from "@/hooks/useLang";

interface ArticleHeaderProps {
    title: string;
    username: string;
    currentUser: string | null;
}

export default function ArticleHeader({ title, username, currentUser }: ArticleHeaderProps) {
    const t = useLang();
    const { openModal } = useModal();

    const handleOpenDeleteModal = () => {
        openModal({
            title: t("codeleap.home.modal.delete.title"),
            submitButton: (
                <Button variant="danger" onClick={() => alert("Deletado!")}>
                    {t("codeleap.home.modal.delete.submit")}
                </Button>
            ),
        });
    };

    return (
        <div className="bg-primary text-white w-full p-6 text-2xl font-bold flex flex-row justify-between">
            <p className="line-clamp-1">{title}</p>
            {currentUser === username && (
                <div className="flex flex-row gap-6">
                    <button type="button" onClick={handleOpenDeleteModal}>
                        <IconTrashcan />
                    </button>
                    <IconEdit />
                </div>
            )}
        </div>
    );
}
