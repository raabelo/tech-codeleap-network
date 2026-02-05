"use client";

import { useLang } from "@/hooks/useLang";
import { timeAgo } from "@/utils/functions/timeAgo";
import { Article } from "@prisma/client";
import { IconBubbleText, IconThumbDown, IconThumbUp } from "@tabler/icons-react";
import { useState, useEffect, useRef } from "react";
import IconTrashcan from "../../../public/vectors/trashcan";
import IconEdit from "../../../public/vectors/edit";
import { getUser } from "@/utils/cookies/user";

export default function ArticleCard({
    id,
    username,
    title,
    content,
    likes,
    dislikes,
    createdAt,
}: Article) {
    const t = useLang();
    const user = getUser();

    const [isSeeingMore, setIsSeeingMore] = useState(false);
    const [canSeeMore, setCanSeeMore] = useState(false);
    const contentRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        if (!contentRef.current) return;
        const el = contentRef.current;
        setCanSeeMore(el.scrollHeight > el.clientHeight);
    }, [content]);

    return (
        <article id={id} className="rounded-2xl border border-neutral-dark overflow-hidden">
            <div className="bg-primary text-white w-full p-6 text-2xl font-bold flex flex-row justify-between">
                <p className="line-clamp-1">{title}</p>
                {user === username && (
                    <div className="flex flex-row gap-6">
                        <IconTrashcan />
                        <IconEdit />
                    </div>
                )}
            </div>

            <div className="p-6 w-full">
                <div className="flex justify-between text-sm text-neutral-dark mb-2">
                    <p className="font-bold">{`@${username}`}</p>
                    <p>{timeAgo(createdAt, t)}</p>
                </div>

                <p
                    ref={contentRef}
                    className={`${isSeeingMore ? "" : "line-clamp-6"} mb-2 whitespace-pre-line`}
                >
                    {content}
                </p>

                {canSeeMore && (
                    <button
                        type="button"
                        onClick={() => setIsSeeingMore((v) => !v)}
                        className=" text-primary font-bold"
                    >
                        {isSeeingMore
                            ? t("codeleap.common.seeMore.retract")
                            : t("codeleap.common.seeMore.expand")}
                    </button>
                )}
            </div>

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
        </article>
    );
}
