import Image from 'next/image'
import Link from 'next/link'
import { prisma } from '../../../../lib/prisma'

export const dynamic = 'force-dynamic'

export default async function AdminGallery(){
  const items = await prisma.galleryPhoto.findMany({ orderBy: { createdAt: 'desc' } })
  return (
    <main className="container py-12">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-serif">Gallery</h1>
        <Link href="/admin/gallery/new" className="bg-blush text-white px-4 py-2 rounded-full">New Photo</Link>
      </div>
      <div className="grid md:grid-cols-4 gap-4">
        {items.map(i=> (
          <div key={i.id} className="rounded overflow-hidden">
            <Image src={i.imageUrl} alt={i.caption || 'photo'} width={400} height={300} className="object-cover w-full h-40" />
          </div>
        ))}
      </div>
    </main>
  )
}
