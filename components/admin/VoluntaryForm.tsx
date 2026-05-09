"use client"

import React, { useState } from 'react'
import Button from '../ui/Button'

export default function VoluntaryForm(){
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')
  const [organization, setOrganization] = useState('')
  const [date, setDate] = useState('')
  const [saving, setSaving] = useState(false)

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    setSaving(true)
    try {
      const response = await fetch('/api/admin/voluntary', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, description, image, organization, date }),
      })
      if (!response.ok) throw new Error('Failed to create voluntary work item')
      window.location.href = '/admin/voluntary'
    } finally {
      setSaving(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input value={title} onChange={(event) => setTitle(event.target.value)} placeholder="Title" className="w-full p-2 rounded border" />
      <textarea value={description} onChange={(event) => setDescription(event.target.value)} placeholder="Description" className="w-full p-2 rounded border min-h-32" />
      <input value={image} onChange={(event) => setImage(event.target.value)} placeholder="Image URL" className="w-full p-2 rounded border" />
      <input value={organization} onChange={(event) => setOrganization(event.target.value)} placeholder="Organization" className="w-full p-2 rounded border" />
      <input value={date} onChange={(event) => setDate(event.target.value)} type="date" className="w-full p-2 rounded border" />
      <Button type="submit">{saving ? 'Saving...' : 'Create Voluntary Work'}</Button>
    </form>
  )
}
