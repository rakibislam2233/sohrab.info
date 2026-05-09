import { NextResponse } from 'next/server'
import { prisma } from '../../../../../lib/prisma'

export async function GET() {
  try {
    const items = await prisma.galleryPhoto.findMany({ orderBy: { createdAt: 'desc' } })
    return NextResponse.json({ items })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Failed to fetch gallery photos' }, { status: 500 })
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { imageUrl, caption, category } = body
    if (!imageUrl || !category) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const item = await prisma.galleryPhoto.create({
      data: {
        imageUrl,
        caption: caption || null,
        category,
      },
    })

    return NextResponse.json({ item }, { status: 201 })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Failed to create gallery photo' }, { status: 500 })
  }
}

export async function PUT(req: Request) {
  try {
    const body = await req.json()
    const { id, imageUrl, caption, category } = body
    if (!id) return NextResponse.json({ error: 'Missing id' }, { status: 400 })

    const item = await prisma.galleryPhoto.update({
      where: { id },
      data: {
        imageUrl,
        caption: caption || null,
        category,
      },
    })

    return NextResponse.json({ item })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Failed to update gallery photo' }, { status: 500 })
  }
}

export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const id = searchParams.get('id')
    if (!id) return NextResponse.json({ error: 'Missing id' }, { status: 400 })
    await prisma.galleryPhoto.delete({ where: { id } })
    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Failed to delete gallery photo' }, { status: 500 })
  }
}
