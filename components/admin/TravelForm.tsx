"use client"

import React, { useState } from 'react'
import { Button } from '../ui/Button'

export default function TravelForm(){
  const [title, setTitle] = useState('')
  const [slug, setSlug] = useState('')
  const [destination, setDestination] = useState('')
  const [excerpt, setExcerpt] = useState('')
  const [content, setContent] = useState('')
  const [coverImage, setCoverImage] = useState('')
  const [images, setImages] = useState('')
  const [travelDate, setTravelDate] = useState('')
  const [saving, setSaving] = useState(false)

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    setSaving(true)
    try {
      const response = await fetch('/api/admin/travel', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title,
          slug,
          destination,
          excerpt,
          content,
          coverImage,
          images: images.split('\n').map((item) => item.trim()).filter(Boolean),
          travelDate,
          isPublished: false,
        }),
      })

      if (!response.ok) throw new Error('Failed to create travel story')
      window.location.href = '/admin/travel'
    } finally {
      setSaving(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input value={title} onChange={(event) => setTitle(event.target.value)} placeholder="Title" className="w-full p-2 rounded border" />
      <input value={slug} onChange={(event) => setSlug(event.target.value)} placeholder="Slug" className="w-full p-2 rounded border" />
      <input value={destination} onChange={(event) => setDestination(event.target.value)} placeholder="Destination" className="w-full p-2 rounded border" />
      <textarea value={excerpt} onChange={(event) => setExcerpt(event.target.value)} placeholder="Excerpt" className="w-full p-2 rounded border" />
      <textarea value={content} onChange={(event) => setContent(event.target.value)} placeholder="Content HTML" className="w-full p-2 rounded border min-h-40" />
      <input value={coverImage} onChange={(event) => setCoverImage(event.target.value)} placeholder="Cover image URL" className="w-full p-2 rounded border" />
      <textarea value={images} onChange={(event) => setImages(event.target.value)} placeholder="One image URL per line" className="w-full p-2 rounded border min-h-32" />
      <input value={travelDate} onChange={(event) => setTravelDate(event.target.value)} type="date" className="w-full p-2 rounded border" />
      <Button type="submit">{saving ? 'Saving...' : 'Create Travel Story'}</Button>
    </form>
  )
}
