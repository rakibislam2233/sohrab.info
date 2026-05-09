import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { prisma } from '../../lib/prisma'

export const dynamic = 'force-dynamic'

export async function generateMetadata(): Promise<Metadata>{
  return { title: 'Journalism — Sohrab Hossan' }
}

export default async function JournalismPage(){
  const articles = await prisma.article.findMany({ where: { isPublished: true }, take: 12 })
  return (
    <main className="container py-12">
      <h1 className="text-4xl font-serif mb-8">Journalism</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {articles.map(a=> (
          <article key={a.id} className="rounded-card p-6 relative">
            <div className="absolute -left-6 top-6"><span className="vertical-label">Journalism</span></div>
            <div className="mb-4 overflow-hidden rounded"><Image src={a.coverImage} alt={a.title} width={600} height={400} className="object-cover w-full h-56"/></div>
            <h3 className="font-serif text-2xl mb-2">{a.title}</h3>
            <p className="text-sm text-gray-600 mb-4">{a.excerpt}</p>
            <Link href={`/journalism/${a.slug}`} className="inline-block bg-blush text-white px-4 py-2 rounded-full">Read More</Link>
          </article>
        ))}
      </div>
    </main>
  )
}
