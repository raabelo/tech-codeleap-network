import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const search = searchParams.get("search");

    const users = await prisma.user.findMany({
        where: search ? {
            username: {
                contains: search,
                mode: "insensitive",
            },
        } : undefined,
        take: 5,
        orderBy: {
            username: 'asc',
        }
    });

    return NextResponse.json(users);
}
