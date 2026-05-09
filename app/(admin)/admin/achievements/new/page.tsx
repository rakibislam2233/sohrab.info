import AchievementForm from '../../../../../components/admin/AchievementForm'

export const dynamic = 'force-dynamic'

export default function NewAchievementPage() {
  return (
    <main className="container py-12">
      <h1 className="text-2xl font-serif mb-4">New Achievement</h1>
      <AchievementForm />
    </main>
  )
}
