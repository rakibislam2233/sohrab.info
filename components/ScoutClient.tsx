"use client"

import Image from 'next/image'
import useSWR from 'swr'

type ScoutActivity = {
  id: string
  title: string
  description: string
  image: string
  eventDate: string
  location: string
  rank: string | null
}

const fetcher = async (url: string) => {
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error('Failed to load scout activities')
  }
  return response.json() as Promise<{ activities: ScoutActivity[] }>
}

export default function ScoutClient() {
  const { data, error, isLoading } = useSWR('/api/scout', fetcher, { revalidateOnFocus: false })

  return (
    <main className="container py-12">
      <h1 className="text-4xl font-serif mb-8">Scout Highlights</h1>

      {isLoading && <div className="rounded-card p-6">Loading scout activities...</div>}

      {error && <div className="rounded-card p-6 text-red-600">Unable to load scout activities.</div>}

      <div className="grid md:grid-cols-2 gap-8">
        {data?.activities.map((activity) => (
          <div key={activity.id} className="rounded-card p-6 relative">
            <div className="absolute -left-6 top-6">
              <span className="vertical-label">Scout</span>
            </div>
            <div className="mb-4 overflow-hidden rounded">
              <Image
                src={activity.image}
                alt={activity.title}
                width={600}
                height={400}
                className="object-cover w-full h-56"
              />
            </div>
            <h3 className="font-serif text-2xl mb-2">{activity.title}</h3>
            <p className="text-sm text-gray-600">{activity.description}</p>
          </div>
        ))}
      </div>
    </main>
  )
}
