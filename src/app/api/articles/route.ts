import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);

    const page = Number(searchParams.get("page") ?? 1);
    const limit = Number(searchParams.get("limit") ?? 10);
    const search = searchParams.get("search") ?? "";

    const skip = (page - 1) * limit;

    const where = search
        ? {
              OR: [{ title: { contains: search } }, { content: { contains: search } }],
          }
        : {};

    const [articles, total] = await Promise.all([
        prisma.article.findMany({
            where,
            orderBy: { createdAt: "desc" },
            skip,
            take: limit,
        }),
        prisma.article.count({ where }),
    ]);

    return NextResponse.json({
        data: articles,
        meta: {
            page,
            limit,
            total,
            totalPages: Math.ceil(total / limit),
        },
    });
}

export async function POST(req: NextRequest) {
    const { username, title, content, parentArticleId } = await req.json();

    if (!username || !title || !content) {
        return NextResponse.json({ message: "Invalid data" }, { status: 400 });
    }

    const article = await prisma.article.create({
        data: {
            username,
            title,
            content,
            parentArticleId: parentArticleId ?? null,
            likes: [],
            dislikes: [],
        },
    });

    return NextResponse.json(article, { status: 201 });
}
