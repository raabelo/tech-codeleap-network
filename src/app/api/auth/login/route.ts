import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const { username } = await req.json();

    if (!username) {
        return NextResponse.json({ error: "username is required" }, { status: 400 });
    }

    const ip =
        req.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? req.headers.get("x-real-ip");

    if (!ip) {
        return NextResponse.json({ error: "unable to resolve ip" }, { status: 400 });
    }

    const normalizedUsername = username.trim().toLowerCase();

    const user = await prisma.user.findUnique({
        where: { username: normalizedUsername },
    });

    if (!user) {
        return NextResponse.json({ error: "user not found" }, { status: 404 });
    }

    if (!user.connectedIn) {
        return NextResponse.json({ error: "user not connected yet" }, { status: 401 });
    }

    if (user.connectedIn !== ip) {
        return NextResponse.json({ error: "invalid ip or username" }, { status: 401 });
    }

    return NextResponse.json({ message: "login successful" }, { status: 200 });
}
