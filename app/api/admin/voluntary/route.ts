import { NextResponse } from 'next/server'
import { prisma } from '../../../../../lib/prisma'

export async function GET() {
  try {
    const items = await prisma.voluntaryWork.findMany({ orderBy: { createdAt: 'desc' } })
    return NextResponse.json({ items })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Failed to fetch voluntary work items' }, { status: 500 })
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { title, description, image, organization, date } = body
    if (!title || !description || !organization || !date) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const item = await prisma.voluntaryWork.create({
      data: {
        title,
        description,
        image: image || null,
        organization,
        date: new Date(date),
      },
    })

    return NextResponse.json({ item }, { status: 201 })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Failed to create voluntary work item' }, { status: 500 })
  }
}

export async function PUT(req: Request) {
  try {
    const body = await req.json()
    const { id, title, description, image, organization, date } = body
    if (!id) return NextResponse.json({ error: 'Missing id' }, { status: 400 })

    const item = await prisma.voluntaryWork.update({
      where: { id },
      data: {
        title,
        description,
        image: image || null,
        organization,
        date: date ? new Date(date) : undefined,
      },
    })

    return NextResponse.json({ item })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Failed to update voluntary work item' }, { status: 500 })
  }
}

export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const id = searchParams.get('id')
    if (!id) return NextResponse.json({ error: 'Missing id' }, { status: 400 })
    await prisma.voluntaryWork.delete({ where: { id } })
    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Failed to delete voluntary work item' }, { status: 500 })
  }
}
