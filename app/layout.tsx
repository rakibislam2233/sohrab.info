import type { Metadata } from 'next'
import React from 'react'
import Navbar from '../components/Navbar'
import './globals.css'
import { Noto_Sans, Playfair_Display } from "next/font/google";
import { cn } from "@/lib/utils";

const playfairDisplayHeading = Playfair_Display({subsets:['latin'],variable:'--font-heading'});

const notoSans = Noto_Sans({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: 'Sohrab Hossan — Journalist · Traveller · Scout',
  description: 'Personal portfolio of Sohrab Hossan — journalist, traveller and scout from Bangladesh.'
}

export default function RootLayout({ children }: { children: React.ReactNode }){
  return (
    <html lang="en" className={cn("font-sans", notoSans.variable, playfairDisplayHeading.variable)}>
      <body>
        <Navbar />
        <div className="pt-24">{children}</div>
      </body>
    </html>
  )
}
