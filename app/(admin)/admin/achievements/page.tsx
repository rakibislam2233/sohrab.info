import Link from 'next/link'
import { prisma } from '../../../../lib/prisma'

export const dynamic = 'force-dynamic'

export default async function AdminAchievements(){
  const items = await prisma.achievement.findMany({ orderBy: { createdAt: 'desc' } })
  return (
    <main className="container py-12">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-serif">Achievements</h1>
        <Link href="/admin/achievements/new" className="bg-blush text-white px-4 py-2 rounded-full">New Achievement</Link>
      </div>
      <div className="space-y-4">
        {items.map(i=> (
          <div key={i.id} className="rounded-card p-4 flex justify-between items-center">
            <div>
              <div className="font-semibold">{i.title}</div>
              <div className="text-sm text-gray-600">{i.issuedBy} • {new Date(i.issuedDate).toLocaleDateString()}</div>
            </div>
            <div className="text-sm">{i.category}</div>
          </div>
        ))}
      </div>
    </main>
  )
}
