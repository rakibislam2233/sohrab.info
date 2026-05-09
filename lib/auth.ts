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
        if(!email || !password) return null
        const user = await prisma.admin.findUnique({ where: { email } })
        if(!user) return null
        const isValid = await compare(password, user.password)
        if(!isValid) return null
        return { id: user.id, email: user.email }
      }
    })
  ],
  session: { strategy: 'jwt' },
  pages: { signIn: '/admin/login' },
  secret: process.env.NEXTAUTH_SECRET
})
