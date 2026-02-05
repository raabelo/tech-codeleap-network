"use client";

import { IconBubbleText, IconThumbDown, IconThumbUp } from "@tabler/icons-react";

interface ArticleFooterProps {
    likes: string[];
    dislikes: string[];
}

export default function ArticleFooter({ likes, dislikes }: ArticleFooterProps) {
    return (
        <div className="bg-primary text-white flex justify-between p-2 px-4">
            <div>
                <IconBubbleText />
            </div>
            <div className="flex gap-4">
                <div className="flex items-center gap-1">
                    <IconThumbUp />
                    <span className="text-sm">{likes.length}</span>
                </div>
                <div className="flex items-center gap-1">
                    <IconThumbDown />
                    <span className="text-sm">{dislikes.length}</span>
                </div>
            </div>
        </div>
    );
}
