"use client"
import { motion } from 'framer-motion'
import React from 'react'

export default function Button({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>){
  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-md font-medium"
      {...props}
    >
      {children}
    </motion.button>
  )
}
"use client"

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'ghost' }

export default function Button({ variant = 'primary', className = '', ...props }: Props){
  const base = 'px-4 py-2 rounded-full font-medium'
  const style = variant === 'primary' ? `bg-blush text-white ${base}` : `bg-white/60 border ${base}`
  return <button className={`${style} ${className}`} {...props} />
}
