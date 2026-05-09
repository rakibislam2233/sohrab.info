"use client"

import { useState } from 'react'

type Props = {
  endpoint: string
  id: string
  label?: string
}

export default function DeleteButton({ endpoint, id, label = 'Delete' }: Props) {
  const [loading, setLoading] = useState(false)

  async function handleDelete() {
    if (!confirm('Delete this item?')) return
    setLoading(true)
    try {
      const response = await fetch(`${endpoint}?id=${encodeURIComponent(id)}`, { method: 'DELETE' })
      if (!response.ok) throw new Error('Delete failed')
      window.location.reload()
    } finally {
      setLoading(false)
    }
  }

  return (
    <button onClick={handleDelete} disabled={loading} className="px-3 py-1 rounded-full text-sm bg-red-100 text-red-700">
      {loading ? 'Deleting...' : label}
    </button>
  )
}
