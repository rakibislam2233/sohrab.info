import { NextResponse } from 'next/server'
import { prisma } from '../../../../lib/prisma'

export async function GET() {
  try {
    const info = await prisma.personalInfo.findFirst()
    return NextResponse.json({ info })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Failed to fetch personal info' }, { status: 500 })
  }
}

export async function PUT(req: Request) {
  try {
    const body = await req.json()
    const { name, title, bio, avatar, socials } = body
    let existing = await prisma.personalInfo.findFirst()
    if (!existing) {
      const created = await prisma.personalInfo.create({ data: { name, title, bio, avatar, socials } })
      return NextResponse.json({ info: created })
    }
    const updated = await prisma.personalInfo.update({ where: { id: existing.id }, data: { name, title, bio, avatar, socials } })
    return NextResponse.json({ info: updated })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Failed to update personal info' }, { status: 500 })
  }
}
