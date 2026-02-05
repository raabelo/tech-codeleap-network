import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const { username } = await req.json();

    if (!username) {
        return NextResponse.json({ error: "username is required" }, { status: 400 });
    }

    const ip =
        req.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
        req.headers.get("x-real-ip") ??
        "unknown";

    const user = await prisma.user.findUnique({
        where: { username },
    });

    if (user && user.connectedIn) {
        return NextResponse.json({ error: "user already connected" }, { status: 409 });
    }

    if (user && !user.connectedIn) {
        await prisma.user.update({
            where: { username },
            data: { connectedIn: ip },
        });

        return NextResponse.json({ message: "user connected" }, { status: 200 });
    }

    await prisma.user.create({
        data: {
            username,
            connectedIn: ip,
        },
    });

    return NextResponse.json({ message: "user created and connected" }, { status: 201 });
}
