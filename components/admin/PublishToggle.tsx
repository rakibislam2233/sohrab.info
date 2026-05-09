"use client"
import { useState } from 'react'

export default function PublishToggle({ id, initial }: { id: string, initial: boolean }){
  const [pub, setPub] = useState(initial)
  const [loading,setLoading] = useState(false)

  async function toggle(){
    setLoading(true)
    try{
      const res = await fetch('/api/admin/articles/publish', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id, publish: !pub }) })
      const json = await res.json()
      if(json.article) setPub(json.article.isPublished)
    }catch(err){ console.error(err) }
    finally{ setLoading(false) }
  }

  return (
    <button onClick={toggle} className={`px-3 py-1 rounded-full text-sm ${pub? 'bg-green-500 text-white' : 'bg-gray-200'}`} disabled={loading}>
      {pub? 'Published' : 'Draft'}
    </button>
  )
}
