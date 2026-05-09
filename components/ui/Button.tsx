"use client"
import React from 'react'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'ghost' }

export default function Button({ variant = 'primary', className = '', ...props }: Props){
  const base = 'px-4 py-2 rounded-full font-medium'
  const style = variant === 'primary' ? `bg-blush text-white ${base}` : `bg-white/60 border ${base}`
  return <button className={`${style} ${className}`} {...props} />
}
