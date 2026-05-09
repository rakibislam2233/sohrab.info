"use client"
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Button from './ui/Button'

export default function Navbar(){
  const [scrolled, setScrolled] = useState(false)
  useEffect(()=>{
    const onScroll = ()=> setScrolled(window.scrollY > 32)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return ()=> window.removeEventListener('scroll', onScroll)
  },[])

  return (
    <header className={`w-full top-0 z-40 transition-colors ${scrolled? 'backdrop-blur bg-white/60 shadow-sm' : 'bg-transparent'}`}>
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="font-serif text-2xl">Sohrab Hossan</Link>
        <nav className="hidden md:flex gap-6 items-center">
          <Link href="/">Home</Link>
          <Link href="/journalism">Journalism</Link>
          <Link href="/travel">Travel</Link>
          <Link href="/scout">Scout</Link>
          <Link href="/about">About</Link>
          <Button variant="primary">Subscribe</Button>
        </nav>
      </div>
    </header>
  )
}
