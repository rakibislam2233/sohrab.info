"use client"
import React, { useState } from 'react'
import Button from '../ui/Button'
import ArticleEditor from './ArticleEditor'
import ImageUploader from './ImageUploader'

export default function NewArticleForm(){
  const [title,setTitle]=useState('')
  const [slug,setSlug]=useState('')
  const [excerpt,setExcerpt]=useState('')
  const [content,setContent]=useState('')
  const [cover,setCover]=useState('')
  const [saving,setSaving]=useState(false)

  async function handleSubmit(e: React.FormEvent){
    e.preventDefault()
    setSaving(true)
    try{
      const res = await fetch('/api/admin/articles', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ title, slug, excerpt, content, coverImage: cover, category: 'Feature', isPublished: false }) })
      const json = await res.json()
      if(json.article) alert('Created')
    }catch(err){ console.error(err); alert('Error') }
    finally{ setSaving(false) }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input value={title} onChange={e=>setTitle(e.target.value)} placeholder="Title" className="w-full p-2 rounded border" />
      <input value={slug} onChange={e=>setSlug(e.target.value)} placeholder="Slug" className="w-full p-2 rounded border" />
      <input value={excerpt} onChange={e=>setExcerpt(e.target.value)} placeholder="Excerpt" className="w-full p-2 rounded border" />
      <ArticleEditor content={content} onChange={setContent} />
      <div>
        <label className="block mb-2">Cover Image</label>
        <ImageUploader onUploaded={setCover} />
      </div>
      <div>
        <Button type="submit">{saving? 'Saving...' : 'Create Article'}</Button>
      </div>
    </form>
  )
}
