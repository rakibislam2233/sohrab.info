import { NextResponse } from 'next/server'
import { prisma } from '../../../../lib/prisma'

export async function POST(req: Request){
  try{
    const body = await req.json()
    const { title, slug, excerpt, content, coverImage, category, isPublished } = body
    if(!title || !slug) return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
    const article = await prisma.article.create({ data: {
      title, slug, excerpt, content, coverImage, category: category || 'Feature', isPublished: !!isPublished
    }})
    return NextResponse.json({ article })
  }catch(err){
    console.error(err)
    return NextResponse.json({ error: 'Create failed' }, { status: 500 })
  }
}
