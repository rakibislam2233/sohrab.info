"use client"
import { signIn } from 'next-auth/react'
import React, { useState } from 'react'

export default function SignInForm(){
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [loading,setLoading]=useState(false)

  async function handleSubmit(e: React.FormEvent){
    e.preventDefault()
    setLoading(true)
    const res = await signIn('credentials', { redirect: true, email, password, callbackUrl: '/admin' })
    setLoading(false)
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-sm space-y-3">
      <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" className="w-full p-2 rounded border" />
      <input value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password" type="password" className="w-full p-2 rounded border" />
      <button className="bg-blush text-white px-4 py-2 rounded-full" disabled={loading}>{loading? 'Signing in...' : 'Sign in'}</button>
    </form>
  )
}
