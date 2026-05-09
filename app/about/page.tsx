import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'About — Sohrab Hossan'
}

export default function About(){
  return (
    <main className="container py-12">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <Image src="https://picsum.photos/seed/about/600/600" alt="Sohrab" width={600} height={600} className="rounded-full" />
        </div>
        <div>
          <h1 className="text-4xl font-serif">About Me</h1>
          <p className="mt-4">I'm a digital nomad on the move. I'm passionate about web development and creating interactive experiences. This is my space, Edger, where I share my adventures and personal thoughts.</p>
        </div>
      </div>
    </main>
  )
}
