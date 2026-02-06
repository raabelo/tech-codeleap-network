import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest, context: { params: Promise<{ id: string }> }) {
    const { id } = await context.params;
    const { username, reaction } = await req.json();

    const article = await prisma.article.findUnique({
        where: { id },
    });

    if (!article) {
        return NextResponse.json({ message: "Not found" }, { status: 404 });
    }

    const likes = new Set(article.likes);
    const dislikes = new Set(article.dislikes);

    if (reaction === "like") {
        if (likes.has(username)) {
            likes.delete(username);
        } else {
            likes.add(username);
            dislikes.delete(username);
        }
    }

    if (reaction === "dislike") {
        if (dislikes.has(username)) {
            dislikes.delete(username);
        } else {
            dislikes.add(username);
            likes.delete(username);
        }
    }

    const updated = await prisma.article.update({
        where: { id },
        data: {
            likes: Array.from(likes),
            dislikes: Array.from(dislikes),
        },
    });

    return NextResponse.json(updated);
}
