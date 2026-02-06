import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);

    const page = Number(searchParams.get("page") ?? 1);
    const limit = Number(searchParams.get("limit") ?? 10);
    const search = searchParams.get("search") ?? "";
    const ordering = searchParams.get("ordering");

    const skip = (page - 1) * limit;

    const where: Prisma.ArticleWhereInput = search
        ? {
              OR: [
                  { title: { contains: search, mode: "insensitive" as Prisma.QueryMode } },
                  { content: { contains: search, mode: "insensitive" as Prisma.QueryMode } },
              ],
          }
        : {};

    let articles;
    let total;

    if (ordering === "popularity") {
        const allArticles = await prisma.article.findMany({ where });
        allArticles.sort((a, b) => {
            const popA = a.likes.length + a.dislikes.length;
            const popB = b.likes.length + b.dislikes.length;
            return popB - popA;
        });
        total = allArticles.length;
        articles = allArticles.slice(skip, skip + limit);
    } else {
        let orderBy: { createdAt: "asc" | "desc" } = { createdAt: "desc" };

        if (ordering === "created_datetime") {
            orderBy = { createdAt: "asc" };
        }

        if (ordering === "-created_datetime") {
            orderBy = { createdAt: "desc" };
        }

        const [data, count] = await Promise.all([
            prisma.article.findMany({
                where,
                orderBy,
                skip,
                take: limit,
            }),
            prisma.article.count({ where }),
        ]);
        articles = data;
        total = count;
    }

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
