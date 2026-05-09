import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Contact — Sohrab Hossan' }

export default function Contact(){
  return (
    <main className="container py-12">
      <h1 className="text-4xl font-serif mb-6">Contact</h1>
      <p>For inquiries: <a href="mailto:sohrab@example.com">sohrab@example.com</a></p>
    </main>
  )
}
