import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
    const { userId, type } = await req.json();

    const article = await prisma.article.findUnique({
        where: { id: params.id },
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
        where: { id: params.id },
        data: {
            likes: Array.from(likes),
            dislikes: Array.from(dislikes),
        },
    });

    return NextResponse.json(updated);
}
