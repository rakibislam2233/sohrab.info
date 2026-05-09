"use client"

import Image from 'next/image'
import useSWR from 'swr'
import { motion } from 'framer-motion'
import { Users, MapPin, Calendar } from 'lucide-react'

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
    <main className="min-h-screen bg-white pt-32 pb-20">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">Scout Activities</h1>
          <p className="text-xl text-gray-500">
            A lifelong commitment to service, leadership, and community development through the Bangladesh Scouts movement.
          </p>
        </motion.div>

        {isLoading && (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
          </div>
        )}

        {error && (
          <div className="bg-red-50 text-red-600 p-6 rounded-2xl border border-red-100">
            Unable to load scout activities. Please try again later.
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {data?.activities.map((activity, idx) => (
            <motion.div 
              key={activity.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group"
            >
              <div className="relative aspect-video mb-8 overflow-hidden rounded-3xl bg-gray-100">
                <Image
                  src={activity.image}
                  alt={activity.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-6 left-6">
                  <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                    <Users className="w-3 h-3" />
                    Scout
                  </span>
                </div>
              </div>
              
              <div className="flex items-center gap-6 mb-4 text-sm text-gray-400 font-medium">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {new Date(activity.eventDate).toLocaleDateString()}
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  {activity.location}
                </div>
              </div>
              
              <h3 className="text-3xl font-bold text-black mb-4 group-hover:text-blue-600 transition-colors">
                {activity.title}
              </h3>
              <p className="text-gray-500 text-lg leading-relaxed">
                {activity.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  )
}
