import React from 'react'

export default function Badge({ children }: { children: React.ReactNode }){
  return <span className="inline-block px-3 py-1 bg-white/60 rounded-full text-sm">{children}</span>
}
