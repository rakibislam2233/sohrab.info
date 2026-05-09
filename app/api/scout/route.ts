import { NextResponse } from 'next/server'
import { prisma } from '../../../lib/prisma'

export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    const activities = await prisma.scoutActivity.findMany({ orderBy: { createdAt: 'desc' } })
    return NextResponse.json({ activities })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Failed to fetch scout activities' }, { status: 500 })
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { title, description, image, eventDate, location, rank } = body

    if (!title || !description || !image || !eventDate || !location) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const activity = await prisma.scoutActivity.create({
      data: {
        title,
        description,
        image,
        eventDate: new Date(eventDate),
        location,
        rank: rank || null,
      },
    })

    return NextResponse.json({ activity }, { status: 201 })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Failed to create scout activity' }, { status: 500 })
  }
}

export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const id = searchParams.get('id')

    if (!id) {
      return NextResponse.json({ error: 'Missing id' }, { status: 400 })
    }

    await prisma.scoutActivity.delete({ where: { id } })
    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Failed to delete scout activity' }, { status: 500 })
  }
}
