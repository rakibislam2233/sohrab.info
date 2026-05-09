"use client"
import { useEffect, useState } from 'react'
import Button from '../ui/Button'
import ImageUploader from './ImageUploader'

export default function PersonalForm(){
  const [loading, setLoading] = useState(true)
  const [name, setName] = useState('')
  const [title, setTitle] = useState('')
  const [bio, setBio] = useState('')
  const [avatar, setAvatar] = useState('')
  const [socials, setSocials] = useState('')

  useEffect(()=>{
    fetch('/api/admin/personal').then(r=>r.json()).then(data=>{
      const info = data.info
      if(info){
        setName(info.name||'')
        setTitle(info.title||'')
        setBio(info.bio||'')
        setAvatar(info.avatar||'')
        setSocials((info.socials||[]).join(', '))
      }
      setLoading(false)
    })
  },[])

  async function handleSave(e: React.FormEvent){
    e.preventDefault()
    const payload = { name, title, bio, avatar, socials: socials.split(',').map(s=>s.trim()).filter(Boolean) }
    await fetch('/api/admin/personal', { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
    alert('Saved')
  }

  return (
    <form onSubmit={handleSave} className="space-y-4">
      <div>
        <label className="block mb-1">Name</label>
        <input value={name} onChange={e=>setName(e.target.value)} className="w-full p-2 border rounded" />
      </div>
      <div>
        <label className="block mb-1">Title</label>
        <input value={title} onChange={e=>setTitle(e.target.value)} className="w-full p-2 border rounded" />
      </div>
      <div>
        <label className="block mb-1">Bio</label>
        <textarea value={bio} onChange={e=>setBio(e.target.value)} className="w-full p-2 border rounded" />
      </div>
      <div>
        <label className="block mb-1">Avatar</label>
        <ImageUploader onUploaded={(url)=>setAvatar(url)} />
        {avatar && <img src={avatar} alt="avatar" className="w-24 h-24 rounded-full mt-2 object-cover" />}
      </div>
      <div>
        <label className="block mb-1">Socials (comma separated)</label>
        <input value={socials} onChange={e=>setSocials(e.target.value)} className="w-full p-2 border rounded" />
      </div>
      <div>
        <Button type="submit">Save</Button>
      </div>
    </form>
  )
}
