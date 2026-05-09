import type { Metadata } from 'next'
import Image from 'next/image'
import { prisma } from '../../lib/prisma'

export const dynamic = 'force-dynamic'

export async function generateMetadata(): Promise<Metadata>{
  return { title: 'Travel — Sohrab Hossan' }
}

export default async function TravelPage(){
  const stories = await prisma.travelStory.findMany({ where: { isPublished: true }, take: 12 })
  return (
    <main className="container py-12">
      <h1 className="text-4xl font-serif mb-8">Travel</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {stories.map(s=> (
          <article key={s.id} className="rounded-card p-6 relative">
            <div className="absolute -left-6 top-6"><span className="vertical-label">Travel</span></div>
            <div className="mb-4 overflow-hidden rounded"><Image src={s.coverImage} alt={s.title} width={600} height={400} className="object-cover w-full h-56"/></div>
            <h3 className="font-serif text-2xl mb-2">{s.title}</h3>
            <p className="text-sm text-gray-600 mb-4">{s.excerpt}</p>
          </article>
        ))}
      </div>
    </main>
  )
}
