import type { Metadata } from 'next'
import React from 'react'
import Navbar from '../components/Navbar'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sohrab Hossan — Journalist · Traveller · Scout',
  description: 'Personal portfolio of Sohrab Hossan — journalist, traveller and scout from Bangladesh.'
}

export default function RootLayout({ children }: { children: React.ReactNode }){
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="pt-24">{children}</div>
      </body>
    </html>
  )
}
