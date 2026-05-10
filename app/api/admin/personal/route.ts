import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ info: null })
}

export async function PUT(req: Request) {
  try {
    const body = await req.json()
    return NextResponse.json({ info: body })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update' }, { status: 500 })
  }
}
