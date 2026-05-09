import { NextResponse } from 'next/server'
import { prisma } from '../../../../../lib/prisma'

export async function POST(req: Request){
  try{
    const body = await req.json()
    const { id, publish } = body
    if(!id) return NextResponse.json({ error: 'Missing id' }, { status: 400 })
    const article = await prisma.article.update({ where: { id }, data: { isPublished: !!publish } })
    return NextResponse.json({ article })
  }catch(err){
    console.error(err)
    return NextResponse.json({ error: 'Failed' }, { status: 500 })
  }
}
