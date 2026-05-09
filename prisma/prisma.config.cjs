const databaseUrl = process.env.SUPABASE_DATABASE_URL || process.env.DATABASE_URL

if (!databaseUrl) {
  throw new Error('Please set SUPABASE_DATABASE_URL or DATABASE_URL in your environment')
}

module.exports = {
  schema: './prisma/schema.prisma',
  datasource: {
    url: databaseUrl,
  },
  migrations: {
    path: './prisma/migrations'
  }
}
