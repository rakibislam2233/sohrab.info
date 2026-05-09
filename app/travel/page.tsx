import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { prisma } from '../../lib/prisma'
import { Compass, MapPin, Calendar } from 'lucide-react'

export const dynamic = 'force-dynamic'

export async function generateMetadata(): Promise<Metadata>{
  return { title: 'Travel — Sohrab Hossan' }
}

export default async function TravelPage(){
  const stories = await prisma.travelStory.findMany({ where: { isPublished: true }, orderBy: { travelDate: 'desc' }, take: 12 })
  
  return (
    <main className="min-h-screen bg-white pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">Travel Stories</h1>
          <p className="text-xl text-gray-500">
            Field notes, routes, and real experiences from exploring the historical sites and natural beauty of Bangladesh.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {stories.map((s) => (
            <Link key={s.id} href={`/travel/${s.slug}`} className="group block">
              <article className="h-full">
                <div className="relative aspect-video mb-8 overflow-hidden rounded-3xl bg-gray-100">
                  <Image 
                    src={s.coverImage} 
                    alt={s.title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute top-6 left-6">
                    <span className="bg-emerald-600 text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                      <Compass className="w-4 h-4" />
                      Travel
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center gap-6 mb-4 text-sm text-gray-400 font-medium">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {new Date(s.travelDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {s.destination}
                  </div>
                </div>
                
                <h3 className="text-3xl font-bold text-black mb-4 group-hover:text-emerald-600 transition-colors">
                  {s.title}
                </h3>
                <p className="text-gray-500 text-lg leading-relaxed mb-6 line-clamp-2">
                  {s.excerpt}
                </p>
                
                <div className="flex items-center text-sm font-bold gap-2 group-hover:translate-x-2 transition-transform">
                  Explore Journey
                  <span className="text-xl">→</span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
