import Link from 'next/link'
import DeleteButton from '../../../../components/admin/DeleteButton'
import { prisma } from '../../../../lib/prisma'

export const dynamic = 'force-dynamic'

export default async function AdminVoluntary(){
  const items = await prisma.voluntaryWork.findMany({ orderBy: { createdAt: 'desc' } })
  return (
    <main className="container py-12">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-serif">Voluntary Work</h1>
        <Link href="/admin/voluntary/new" className="bg-blush text-white px-4 py-2 rounded-full">New</Link>
      </div>
      <div className="space-y-4">
        {items.map(i=> (
          <div key={i.id} className="rounded-card p-4 flex justify-between items-center gap-4">
            <div>
              <div className="font-semibold">{i.title}</div>
              <div className="text-sm text-gray-600">{i.organization} • {new Date(i.date).toLocaleDateString()}</div>
            </div>
            <DeleteButton endpoint="/api/admin/voluntary" id={i.id} />
          </div>
        ))}
      </div>
    </main>
  )
}
