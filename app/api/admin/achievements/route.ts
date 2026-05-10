import { NextResponse } from 'next/server'
// Static demo data for API responses since database is not connected
const demoAchievements = [
  {
    id: "1",
    title: "Best Regional Scout Leader",
    issuedBy: "Bangladesh Scouts",
    issuedDate: "2022",
    category: "Scouting",
    description: "Awarded for exceptional leadership in coordinating regional scout activities."
  },
  {
    id: "2",
    title: "Excellence in Community Reporting",
    issuedBy: "Journalism Association",
    issuedDate: "2021",
    category: "Journalism",
    description: "Recognized for outstanding investigative reporting on rural education."
  }
];

export async function GET() {
  return NextResponse.json({ items: demoAchievements })
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
