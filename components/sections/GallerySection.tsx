import Image from 'next/image'
import Link from 'next/link'
import { prisma } from '../../lib/prisma'
import Reveal from '../ui/Reveal'

export default async function GallerySection() {
  const items = await prisma.galleryPhoto.findMany({
    orderBy: { createdAt: 'desc' },
    take: 6,
  })

  return (
    <section className="container py-12">
      <Reveal>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-serif">Gallery Highlights</h2>
          <Link href="/admin/gallery" className="px-4 py-2 rounded-full border">Manage Gallery</Link>
        </div>
      </Reveal>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {items.map((item, idx) => (
          <Reveal key={item.id} delay={idx * 0.06}>
            <div className="rounded overflow-hidden border border-black/10">
              <Image
                src={item.imageUrl}
                alt={item.caption || 'gallery image'}
                width={640}
                height={480}
                className="w-full h-44 md:h-56 object-cover"
              />
              <div className="px-3 py-2 text-sm flex justify-between items-center">
                <span className="truncate">{item.caption || 'Untitled'}</span>
                <span className="text-black/60">{item.category}</span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
