import { NextResponse } from 'next/server'

export async function POST(req: Request){
  try{
    const body = await req.json()
    // Mock response since database is not connected
    return NextResponse.json({ article: { id: Math.random().toString(), ...body } })
  }catch(err){
    return NextResponse.json({ error: 'Create failed' }, { status: 500 })
  }
}
