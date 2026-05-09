import React from 'react'

export default function Card({ children, className = '' }: { children: React.ReactNode, className?: string }){
  return (
    <div className={`rounded-card p-4 ${className}`}>
      {children}
    </div>
  )
}
