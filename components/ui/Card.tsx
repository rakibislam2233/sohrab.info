export default function Card({ children }: { children: React.ReactNode }){
  return (
    <div className="rounded-xl bg-white shadow-sm p-4">
      {children}
    </div>
  )
}
import React from 'react'

export default function Card({ children, className = '' }: { children: React.ReactNode, className?: string }){
  return (
    <div className={`rounded-card p-4 ${className}`}>
      {children}
    </div>
  )
}
