import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function PUT(req: NextRequest, context: { params: Promise<{ id: string }> }) {
    const { id } = await context.params;
    const { username, title, content } = await req.json();

    const article = await prisma.article.findUnique({
        where: { id },
    });

    if (!article || article.username !== username) {
        return NextResponse.json({ message: "Unauthorized" }, { status: 403 });
    }

    const updated = await prisma.article.update({
        where: { id },
        data: { title, content },
    });

    return NextResponse.json(updated);
}

export async function DELETE(req: NextRequest, context: { params: Promise<{ id: string }> }) {
    const { id } = await context.params;
    const { username } = await req.json();

    const article = await prisma.article.findUnique({
        where: { id },
    });

    if (!article || article.username !== username) {
        return NextResponse.json({ message: "Unauthorized" }, { status: 403 });
    }

    await prisma.article.delete({ where: { id } });

    return new NextResponse(null, { status: 204 });
}
