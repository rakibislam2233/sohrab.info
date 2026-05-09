"use client"

import React, { useState } from 'react'
import { Button } from '../ui/Button'
import ImageUploader from './ImageUploader'

type GalleryFormProps = {
  initialData?: {
    id: string
    imageUrl: string
    caption: string | null
    category: string
  }
}

export default function GalleryForm({ initialData }: GalleryFormProps){
  const isEdit = Boolean(initialData)
  const [imageUrl, setImageUrl] = useState(initialData?.imageUrl ?? '')
  const [caption, setCaption] = useState(initialData?.caption ?? '')
  const [category, setCategory] = useState(initialData?.category ?? 'Travel')
  const [saving, setSaving] = useState(false)

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    setSaving(true)
    try {
      const payload = isEdit
        ? { id: initialData?.id, imageUrl, caption, category }
        : { imageUrl, caption, category }
      const response = await fetch('/api/admin/gallery', {
        method: isEdit ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!response.ok) throw new Error(isEdit ? 'Failed to update gallery photo' : 'Failed to create gallery photo')
      window.location.href = '/admin/gallery'
    } finally {
      setSaving(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block mb-1 text-sm">Upload Image</label>
        <ImageUploader onUploaded={setImageUrl} />
      </div>
      <input value={imageUrl} onChange={(event) => setImageUrl(event.target.value)} placeholder="Image URL" className="w-full p-2 rounded border" />
      <input value={caption} onChange={(event) => setCaption(event.target.value)} placeholder="Caption" className="w-full p-2 rounded border" />
      <select value={category} onChange={(event) => setCategory(event.target.value)} className="w-full p-2 rounded border">
        <option>Travel</option>
        <option>Journalism</option>
        <option>Scout</option>
      </select>
      <Button type="submit">{saving ? 'Saving...' : isEdit ? 'Update Photo' : 'Create Photo'}</Button>
    </form>
  )
}
