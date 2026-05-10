import { compare } from 'bcryptjs'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { prisma } from './prisma'

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials): Promise<{ id: string; email: string } | null> {
        const email = credentials?.email ? String(credentials.email) : ''
        const password = credentials?.password ? String(credentials.password) : ''
        
        // Mock login for demo purposes since database is not connected
        if (email === 'admin@sohrab.info' && password === 'Sohrab@2026') {
          return { id: 'admin-id', email: 'admin@sohrab.info' }
        }
        return null
      }
    })
  ],
  session: { strategy: 'jwt' },
  pages: { signIn: '/admin/login' },
  secret: process.env.NEXTAUTH_SECRET
})
