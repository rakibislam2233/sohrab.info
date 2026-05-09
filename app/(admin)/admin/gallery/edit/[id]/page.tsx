import { notFound } from 'next/navigation'
import GalleryForm from '../../../../../../components/admin/GalleryForm'
import { prisma } from '../../../../../../lib/prisma'

export const dynamic = 'force-dynamic'

type Props = {
  params: Promise<{ id: string }>
}

export default async function EditGalleryPage({ params }: Props) {
  const { id } = await params
  const item = await prisma.galleryPhoto.findUnique({ where: { id } })
  if (!item) return notFound()

  return (
    <main className="container py-12">
      <h1 className="text-2xl font-serif mb-4">Edit Gallery Photo</h1>
      <GalleryForm initialData={item} />
    </main>
  )
}
