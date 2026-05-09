"use client"
import React, { useState } from 'react'

export default function ImageUploader({ onUploaded }: { onUploaded?: (url: string)=>void }){
  const [loading,setLoading] = useState(false)
  const [preview,setPreview] = useState<string | null>(null)

  async function handleFile(e: React.ChangeEvent<HTMLInputElement>){
    const file = e.target.files?.[0]
    if(!file) return
    setLoading(true)
    const reader = new FileReader()
    reader.onload = async ()=>{
      const base64 = reader.result as string
      try{
        const res = await fetch('/api/admin/upload', { method: 'POST', body: JSON.stringify({ data: base64 }), headers: { 'Content-Type': 'application/json' } })
        const json = await res.json()
        if(json.url){
          setPreview(json.url)
          onUploaded?.(json.url)
        }
      }catch(err){
        console.error(err)
      }finally{ setLoading(false) }
    }
    reader.readAsDataURL(file)
  }

  return (
    <div className="space-y-2">
      <input type="file" accept="image/*" onChange={handleFile} />
      {loading && <div className="text-sm text-gray-500">Uploading…</div>}
      {preview && <img src={preview} alt="preview" className="w-48 h-32 object-cover rounded" />}
    </div>
  )
}
