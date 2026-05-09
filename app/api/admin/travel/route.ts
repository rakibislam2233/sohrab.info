import { NextResponse } from 'next/server'
import { prisma } from '../../../../../lib/prisma'

export async function GET() {
  try {
    const items = await prisma.travelStory.findMany({ orderBy: { createdAt: 'desc' } })
    return NextResponse.json({ items })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Failed to fetch travel stories' }, { status: 500 })
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { title, slug, destination, excerpt, content, coverImage, images, travelDate, isPublished } = body
    if (!title || !slug || !destination || !travelDate) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const item = await prisma.travelStory.create({
      data: {
        title,
        slug,
        destination,
        excerpt: excerpt || '',
        content: content || '',
        coverImage: coverImage || '',
        images: Array.isArray(images) ? images : [],
        travelDate: new Date(travelDate),
        isPublished: !!isPublished,
      },
    })

    return NextResponse.json({ item }, { status: 201 })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Failed to create travel story' }, { status: 500 })
  }
}

export async function PUT(req: Request) {
  try {
    const body = await req.json()
    const { id, title, slug, destination, excerpt, content, coverImage, images, travelDate, isPublished } = body
    if (!id) return NextResponse.json({ error: 'Missing id' }, { status: 400 })

    const item = await prisma.travelStory.update({
      where: { id },
      data: {
        title,
        slug,
        destination,
        excerpt,
        content,
        coverImage,
        images: Array.isArray(images) ? images : [],
        travelDate: travelDate ? new Date(travelDate) : undefined,
        isPublished: typeof isPublished === 'boolean' ? isPublished : undefined,
      },
    })

    return NextResponse.json({ item })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Failed to update travel story' }, { status: 500 })
  }
}

export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const id = searchParams.get('id')
    if (!id) return NextResponse.json({ error: 'Missing id' }, { status: 400 })
    await prisma.travelStory.delete({ where: { id } })
    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Failed to delete travel story' }, { status: 500 })
  }
}
