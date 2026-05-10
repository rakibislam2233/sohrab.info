// import { PrismaPg } from '@prisma/adapter-pg'
// import { PrismaClient } from '@prisma/client'

// declare global {
//   // eslint-disable-next-line no-var
//   var prisma: PrismaClient | undefined
// }

// const connectionString = process.env.SUPABASE_DATABASE_URL ?? process.env.DATABASE_URL

// export const prisma = global.prisma ?? new PrismaClient({
//   adapter: new PrismaPg({ connectionString }),
// })
// if (process.env.NODE_ENV !== 'production') global.prisma = prisma

// export default prisma

// Temporary mock to prevent build/deployment errors when DB is not connected
const prismaMock = {
  article: {
    findMany: async () => [],
    findUnique: async () => null,
    count: async () => 0,
  },
  admin: {
    findUnique: async () => null,
  },
  scoutActivity: {
    findMany: async () => [],
    count: async () => 0,
  },
  travelStory: {
    findMany: async () => [],
    count: async () => 0,
  },
  achievement: {
    findMany: async () => [],
    count: async () => 0,
  },
  voluntaryWork: {
    findMany: async () => [],
    count: async () => 0,
  },
  personalInfo: {
    findFirst: async () => null,
  },
  galleryPhoto: {
    findMany: async () => [],
    count: async () => 0,
  }
};

export const prisma = prismaMock as any;
export default prisma;
