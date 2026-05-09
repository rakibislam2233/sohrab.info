import type { Metadata } from 'next'
import ScoutClient from './ScoutClient'

export const dynamic = 'force-dynamic'

export async function generateMetadata(): Promise<Metadata> {
  return { title: 'Scout — Sohrab Hossan' }
}

export default function ScoutPage() {
  return <ScoutClient />
}
