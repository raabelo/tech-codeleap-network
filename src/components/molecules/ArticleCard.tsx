"use client";

import { useLang } from "@/hooks/useLang";
import { timeAgo } from "@/utils/functions/timeAgo";
import { Article } from "@prisma/client";
import { IconBubbleText, IconThumbDown, IconThumbUp } from "@tabler/icons-react";
import { useState } from "react";
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

    return (
        <article id={id}>
            <div className="bg-primary">
                <p className="line-clamp-1">{title}</p>
                {user === username && (
                    <div>
                        <IconTrashcan />
                        <IconEdit />
                    </div>
                )}
            </div>
            <div>
                <div>
                    <p>{`@${username}}`}</p>
                    <p>{timeAgo(createdAt, t)}</p>
                </div>
                <p className={`${isSeeingMore ? "" : "line-clamp-6"}`}>{content}</p>

                <button
                    type="button"
                    onClick={() => {
                        setIsSeeingMore(true);
                    }}
                    className="mr-0 ml-auto py-1 px-2"
                >
                    {isSeeingMore
                        ? t("codeleap.common.seeMore.retract")
                        : t("codeleap.common.seeMore.expand")}
                </button>
            </div>
            <div className="bg-primary">
                <div>
                    <IconBubbleText />
                </div>
                <div>
                    <div>
                        <IconThumbUp />
                        {likes.length}
                    </div>
                    <div>
                        <IconThumbDown />
                        {dislikes.length}
                    </div>
                </div>
            </div>
        </article>
    );
}
