"use client";

import ModalDelete from "../organisms/ModalDelete";
import ModalEdit from "../organisms/ModalEdit";

interface ArticleHeaderProps {
    id: string;
    title: string;
    content: string;
    username: string;
    currentUser: string | null;
}

export default function ArticleHeader({
    id,
    title,
    content,
    username,
    currentUser,
}: ArticleHeaderProps) {
    return (
        <div className="bg-primary text-white w-full p-6 text-2xl font-bold flex flex-row justify-between">
            <p className="line-clamp-1">{title}</p>
            {currentUser === username && (
                <div className="flex flex-row gap-6">
                    <ModalDelete id={id} username={username} />
                    <ModalEdit id={id} title={title} content={content} />
                </div>
            )}
        </div>
    );
}
