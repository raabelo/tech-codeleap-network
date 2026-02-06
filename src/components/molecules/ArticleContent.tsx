"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import { useLang } from "@/hooks/useLang";
import { timeAgo } from "@/utils/functions/timeAgo";

interface ArticleContentProps {
    username: string;
    content: string;
    createdAt: Date;
}

export default function ArticleContent({ username, content, createdAt }: ArticleContentProps) {
    const t = useLang();
    const [isSeeingMore, setIsSeeingMore] = useState(false);
    const [canSeeMore, setCanSeeMore] = useState(false);
    const contentRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        if (!contentRef.current) return;
        const el = contentRef.current;
        setCanSeeMore(el.scrollHeight > el.clientHeight);
    }, [content]);

    const formattedContent = useMemo(() => {
        const parts = content.split(/(@\w+)/g);
        return parts.map((part, i) => {
            if (part.startsWith("@") && part.length > 1) {
                return (
                    <span key={i} className="text-primary font-bold">
                        {part}
                    </span>
                );
            }
            return part;
        });
    }, [content]);

    return (
        <div className="p-6 w-full">
            <div className="flex justify-between text-sm text-neutral-dark mb-2">
                <p className="font-bold">{`@${username}`}</p>
                <p>{timeAgo(createdAt, t)}</p>
            </div>

            <p
                ref={contentRef}
                className={`${isSeeingMore ? "" : "line-clamp-6"} mb-2 whitespace-pre-line`}
            >
                {formattedContent}
            </p>

            {canSeeMore && (
                <button
                    type="button"
                    onClick={() => setIsSeeingMore((v) => !v)}
                    className="text-primary font-bold"
                >
                    {isSeeingMore
                        ? t("codeleap.common.seeMore.retract")
                        : t("codeleap.common.seeMore.expand")}
                </button>
            )}
        </div>
    );
}
