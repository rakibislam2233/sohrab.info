import { NextResponse } from 'next/server'
import { prisma } from '../../../../../lib/prisma'

export async function GET() {
  try {
    const items = await prisma.achievement.findMany({ orderBy: { createdAt: 'desc' } })
    return NextResponse.json({ items })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Failed to fetch achievements' }, { status: 500 })
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { title, description, image, issuedBy, issuedDate, category } = body
    if (!title || !description || !issuedBy || !issuedDate || !category) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const item = await prisma.achievement.create({
      data: {
        title,
        description,
        image: image || null,
        issuedBy,
        issuedDate: new Date(issuedDate),
        category,
      },
    })

    return NextResponse.json({ item }, { status: 201 })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Failed to create achievement' }, { status: 500 })
  }
}

export async function PUT(req: Request) {
  try {
    const body = await req.json()
    const { id, title, description, image, issuedBy, issuedDate, category } = body
    if (!id) return NextResponse.json({ error: 'Missing id' }, { status: 400 })

    const item = await prisma.achievement.update({
      where: { id },
      data: {
        title,
        description,
        image: image || null,
        issuedBy,
        issuedDate: issuedDate ? new Date(issuedDate) : undefined,
        category,
      },
    })

    return NextResponse.json({ item })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Failed to update achievement' }, { status: 500 })
  }
}

export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const id = searchParams.get('id')
    if (!id) return NextResponse.json({ error: 'Missing id' }, { status: 400 })
    await prisma.achievement.delete({ where: { id } })
    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Failed to delete achievement' }, { status: 500 })
  }
}
