import dotenv from 'dotenv'
dotenv.config({ path: '../.env' })

import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

let connectionString = process.env.SUPABASE_DATABASE_URL ?? process.env.DATABASE_URL
if (!connectionString) {
  // try reading .env.local or .env manually
  try {
    const fs = await import('fs')
    const path = await import('path')
    const root = process.cwd()
    const envFiles = ['.env.local', '.env']
    for (const f of envFiles) {
      const p = path.join(root, f)
      if (fs.existsSync(p)) {
        const content = fs.readFileSync(p, 'utf8')
        const match = content.match(/DATABASE_URL=(.*)/)
        if (match) {
          connectionString = match[1].trim().replace(/^\"|\"$/g, '')
          break
        }
      }
    }
  } catch (e) {
    // ignore
  }
}
console.log('Using connectionString:', JSON.stringify(connectionString))
console.log('Using connectionString:', JSON.stringify(connectionString))
const prisma = new PrismaClient({ adapter: new PrismaPg({ connectionString }) })

// prisma instance configured with PrismaPg adapter

async function main(){
  const password = await bcrypt.hash('ChangeMe123!', 10)
  await prisma.admin.upsert({
    where: { email: 'admin@sohrab.info' },
    update: {},
    create: { email: 'admin@sohrab.info', password }
  })

  const articles = []
  for(let i=1;i<=5;i++){
    articles.push(await prisma.article.create({ data: {
      title: `Sample Article ${i}`,
      slug: `sample-article-${i}`,
      excerpt: 'This is a sample excerpt for seed article.',
      content: '<p>Rich content for the article.</p>',
      coverImage: `https://picsum.photos/seed/article${i}/1000/600`,
      category: 'Feature',
      isPublished: true
    }}))
  }

  for(let i=1;i<=4;i++){
    await prisma.travelStory.create({ data: {
      title: `Travel Story ${i}`,
      slug: `travel-story-${i}`,
      destination: 'Unknown',
      excerpt: 'Seed travel excerpt',
      content: '<p>Travel story content</p>',
      coverImage: `https://picsum.photos/seed/travel${i}/1000/600`,
      images: [`https://picsum.photos/seed/t${i}a/800/600`,`https://picsum.photos/seed/t${i}b/800/600`],
      travelDate: new Date(),
      isPublished: true
    }})
  }

  for(let i=1;i<=3;i++){
    await prisma.scoutActivity.create({ data: {
      title: `Scout Activity ${i}`,
      description: 'Scout activity description',
      image: `https://picsum.photos/seed/scout${i}/800/600`,
      eventDate: new Date(),
      location: 'Bangladesh'
    }})
  }

  for(let i=1;i<=5;i++){
    await prisma.achievement.create({ data: {
      title: `Achievement ${i}`,
      description: 'Achievement description',
      issuedBy: 'Organization',
      issuedDate: new Date(),
      category: i%2? 'Journalism' : 'Scout'
    }})
  }

  for(let i=1;i<=8;i++){
    await prisma.galleryPhoto.create({ data: {
      imageUrl: `https://picsum.photos/seed/gallery${i}/800/600`,
      caption: 'Gallery photo',
      category: i%2? 'Travel' : 'Journalism'
    }})
  }

  // Personal info
  await prisma.personalInfo.upsert({
    where: { id: 'primary' },
    update: {
      name: 'Sohrab Hossan',
      title: 'Full Stack Developer & Writer',
      bio: 'I build delightful web experiences. This is demo seed data — edit it from the admin panel.',
      avatar: 'https://picsum.photos/seed/avatar/400/400',
      socials: ['https://twitter.com/example','https://github.com/example','https://linkedin.com/in/example']
    },
    create: {
      id: 'primary',
      name: 'Sohrab Hossan',
      title: 'Full Stack Developer & Writer',
      bio: 'I build delightful web experiences. This is demo seed data — edit it from the admin panel.',
      avatar: 'https://picsum.photos/seed/avatar/400/400',
      socials: ['https://twitter.com/example','https://github.com/example','https://linkedin.com/in/example']
    }
  })

  console.log('Seed finished')
}

main().catch(e=>{console.error(e);process.exit(1)}).finally(()=>prisma.$disconnect())
