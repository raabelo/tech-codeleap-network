"use client";

import { useReactArticle } from "@/hooks/mutations/useArticles";
import { IconBubbleText, IconThumbDown, IconThumbUp, IconThumbUpFilled } from "@tabler/icons-react";
import toast from "react-hot-toast";
import Loader from "../atoms/Loader";

interface ArticleFooterProps {
    id: string;
    likes: string[];
    dislikes: string[];
    currentUser: string | null;
}

export default function ArticleFooter({ id, likes, dislikes, currentUser }: ArticleFooterProps) {
    const mutation = useReactArticle();

    const handleReaction = (reaction: "like" | "dislike") => {
        if (!currentUser) return toast.error("Você precisa estar logado para reagir");
        mutation.mutate({ id, data: { reaction, username: currentUser } });
    };

    const isLiked = currentUser ? likes.includes(currentUser) : false;
    const isDisliked = currentUser ? dislikes.includes(currentUser) : false;

    return (
        <div className="bg-primary text-white flex justify-between p-2 px-4">
            <div>
                <IconBubbleText />
            </div>
            <div className="flex gap-4">
                {mutation.isPending ? (
                    <Loader />
                ) : (
                    <>
                        <button
                            type="button"
                            onClick={() => handleReaction("like")}
                            className="flex items-center gap-1 hover:text-success"
                        >
                            {isLiked ? <IconThumbUpFilled /> : <IconThumbUp />}
                            <span className="text-sm">{likes.length}</span>
                        </button>
                        <button
                            type="button"
                            onClick={() => handleReaction("dislike")}
                            className="flex items-center gap-1 hover:text-danger"
                        >
                            <IconThumbDown fill={isDisliked ? "white" : "none"} />
                            <span className="text-sm">{dislikes.length}</span>
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}
