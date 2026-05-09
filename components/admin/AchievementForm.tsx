"use client"

import React, { useState } from 'react'
import Button from '../ui/Button'

export default function AchievementForm(){
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')
  const [issuedBy, setIssuedBy] = useState('')
  const [issuedDate, setIssuedDate] = useState('')
  const [category, setCategory] = useState('Journalism')
  const [saving, setSaving] = useState(false)

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    setSaving(true)
    try {
      const response = await fetch('/api/admin/achievements', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, description, image, issuedBy, issuedDate, category }),
      })
      if (!response.ok) throw new Error('Failed to create achievement')
      window.location.href = '/admin/achievements'
    } finally {
      setSaving(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input value={title} onChange={(event) => setTitle(event.target.value)} placeholder="Title" className="w-full p-2 rounded border" />
      <textarea value={description} onChange={(event) => setDescription(event.target.value)} placeholder="Description" className="w-full p-2 rounded border min-h-32" />
      <input value={image} onChange={(event) => setImage(event.target.value)} placeholder="Image URL" className="w-full p-2 rounded border" />
      <input value={issuedBy} onChange={(event) => setIssuedBy(event.target.value)} placeholder="Issued by" className="w-full p-2 rounded border" />
      <input value={issuedDate} onChange={(event) => setIssuedDate(event.target.value)} type="date" className="w-full p-2 rounded border" />
      <select value={category} onChange={(event) => setCategory(event.target.value)} className="w-full p-2 rounded border">
        <option>Journalism</option>
        <option>Scout</option>
        <option>Community</option>
      </select>
      <Button type="submit">{saving ? 'Saving...' : 'Create Achievement'}</Button>
    </form>
  )
}
