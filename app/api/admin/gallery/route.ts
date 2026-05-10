import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ items: [] })
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    return NextResponse.json({ item: { id: Math.random().toString(), ...body } }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create' }, { status: 500 })
  }
}

export async function PUT(req: Request) {
  try {
    const body = await req.json()
    return NextResponse.json({ item: body })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update' }, { status: 500 })
  }
}

export async function DELETE(req: Request) {
  return NextResponse.json({ ok: true })
}
