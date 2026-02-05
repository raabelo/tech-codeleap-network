import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
    const { username, title, content } = await req.json();

    const article = await prisma.article.findUnique({
        where: { id: params.id },
    });

    if (!article || article.username !== username) {
        return NextResponse.json({ message: "Unauthorized" }, { status: 403 });
    }

    const updated = await prisma.article.update({
        where: { id: params.id },
        data: { title, content },
    });

    return NextResponse.json(updated);
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
    const { username } = await req.json();

    const article = await prisma.article.findUnique({
        where: { id: params.id },
    });

    if (!article || article.username !== username) {
        return NextResponse.json({ message: "Unauthorized" }, { status: 403 });
    }

    await prisma.article.delete({ where: { id: params.id } });

    return NextResponse.json(null, { status: 204 });
}
