import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const photos = await prisma.galleryPhoto.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(photos);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch gallery" }, { status: 500 });
  }
}
