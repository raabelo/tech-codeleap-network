import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest, context: { params: Promise<{ id: string }> }) {
    const { id } = await context.params;
    const { userId, type } = await req.json();

    const article = await prisma.article.findUnique({
        where: { id },
    });

    if (!article) {
        return NextResponse.json({ message: "Not found" }, { status: 404 });
    }

    const likes = new Set(article.likes);
    const dislikes = new Set(article.dislikes);

    if (type === "like") {
        likes.add(userId);
        dislikes.delete(userId);
    }

    if (type === "dislike") {
        dislikes.add(userId);
        likes.delete(userId);
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
