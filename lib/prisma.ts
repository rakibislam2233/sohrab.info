import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from '@prisma/client'

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined
}

const connectionString = process.env.SUPABASE_DATABASE_URL ?? process.env.DATABASE_URL

export const prisma = global.prisma ?? new PrismaClient({
  adapter: new PrismaPg({ connectionString }),
})
if (process.env.NODE_ENV !== 'production') global.prisma = prisma

export default prisma
