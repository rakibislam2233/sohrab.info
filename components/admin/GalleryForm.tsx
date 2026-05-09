"use client"

import React, { useState } from 'react'
import Button from '../ui/Button'

export default function GalleryForm(){
  const [imageUrl, setImageUrl] = useState('')
  const [caption, setCaption] = useState('')
  const [category, setCategory] = useState('Travel')
  const [saving, setSaving] = useState(false)

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    setSaving(true)
    try {
      const response = await fetch('/api/admin/gallery', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ imageUrl, caption, category }),
      })
      if (!response.ok) throw new Error('Failed to create gallery photo')
      window.location.href = '/admin/gallery'
    } finally {
      setSaving(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input value={imageUrl} onChange={(event) => setImageUrl(event.target.value)} placeholder="Image URL" className="w-full p-2 rounded border" />
      <input value={caption} onChange={(event) => setCaption(event.target.value)} placeholder="Caption" className="w-full p-2 rounded border" />
      <select value={category} onChange={(event) => setCategory(event.target.value)} className="w-full p-2 rounded border">
        <option>Travel</option>
        <option>Journalism</option>
        <option>Scout</option>
      </select>
      <Button type="submit">{saving ? 'Saving...' : 'Create Photo'}</Button>
    </form>
  )
}
