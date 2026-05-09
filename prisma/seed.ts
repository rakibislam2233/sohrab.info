import dotenv from 'dotenv'
dotenv.config({ path: '.env.local' })
dotenv.config({ path: '.env' })

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

if (!connectionString) {
  throw new Error('Missing SUPABASE_DATABASE_URL or DATABASE_URL for seed script')
}

const prisma = new PrismaClient({ adapter: new PrismaPg({ connectionString }) })

// prisma instance configured with PrismaPg adapter

async function main(){
  // Make seed idempotent by clearing demo tables before inserting fresh data.
  await prisma.galleryPhoto.deleteMany()
  await prisma.achievement.deleteMany()
  await prisma.scoutActivity.deleteMany()
  await prisma.travelStory.deleteMany()
  await prisma.article.deleteMany()
  await prisma.voluntaryWork.deleteMany()

  const password = await bcrypt.hash('Sohrab@2026', 10)
  await prisma.admin.upsert({
    where: { email: 'admin@sohrab.info' },
    update: { password },
    create: { email: 'admin@sohrab.info', password }
  })

  // Real Articles based on Journalism experience
  const articlesData = [
    {
      title: 'Modern Rice Cultivation in Thakurgaon',
      slug: 'modern-rice-cultivation-thakurgaon',
      excerpt: 'Exploring how modern techniques are transforming agriculture in Northern Bangladesh.',
      content: '<p>Agriculture is the backbone of Thakurgaon...</p>',
      coverImage: 'https://images.unsplash.com/photo-1530507629858-e4977d30e9e0?auto=format&fit=crop&q=80&w=1000',
      category: 'Agriculture',
      isPublished: true
    },
    {
      title: 'The Pilkhana Tragedy: A Decade Later',
      slug: 'pilkhana-tragedy-anniversary',
      excerpt: 'Reflecting on the impact of the 2009 tragedy on the nation and the families left behind.',
      content: '<p>A deep dive into the historical significance...</p>',
      coverImage: 'https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&q=80&w=1000',
      category: 'Current Affairs',
      isPublished: true
    },
    {
      title: 'Commercial Dragon Fruit Cultivation Success',
      slug: 'dragon-fruit-success-story',
      excerpt: 'How local farmers are finding profitability in exotic fruit farming.',
      content: '<p>Thakurgaon farmers are leading the way...</p>',
      coverImage: 'https://images.unsplash.com/photo-1527333656061-ca7adf608ae1?auto=format&fit=crop&q=80&w=1000',
      category: 'Agriculture',
      isPublished: true
    }
  ]

  for (const data of articlesData) {
    await prisma.article.create({ data })
  }

  // Travel Stories
  const travelData = [
    {
      title: 'Exploring the Hidden Gems of Thakurgaon',
      slug: 'thakurgaon-hidden-gems',
      destination: 'Thakurgaon, Bangladesh',
      excerpt: 'A journey through the historical sites and natural beauty of my hometown.',
      content: '<p>From the Baliadangi Suryapuri Mango Tree to ancient temples...</p>',
      coverImage: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&q=80&w=1000',
      images: ['https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&q=80&w=800'],
      travelDate: new Date('2023-12-01'),
      isPublished: true
    }
  ]

  for (const data of travelData) {
    await prisma.travelStory.create({ data })
  }

  // Scout Activities
  const scoutData = [
    {
      title: 'National Scout Training Program',
      description: 'Participated in advanced leadership training for young scout leaders.',
      image: 'https://images.unsplash.com/photo-1563212891-94931a742f9e?auto=format&fit=crop&q=80&w=800',
      eventDate: new Date('2023-05-15'),
      location: 'National Scout Training Center, Gazipur'
    },
    {
      title: 'Messengers of Peace Workshop',
      description: 'Promoting peace and harmony through scouting initiatives.',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800',
      eventDate: new Date('2024-01-10'),
      location: 'Thakurgaon'
    }
  ]

  for (const data of scoutData) {
    await prisma.scoutActivity.create({ data })
  }

  // Achievements
  const achievementsData = [
    {
      title: 'National Service Award',
      description: 'Awarded by Bangladesh Scouts for outstanding volunteer work and relief distribution.',
      issuedBy: 'Bangladesh Scouts',
      issuedDate: new Date('2022-10-20'),
      category: 'Scout'
    },
    {
      title: 'Best Rover Scout (Division Level)',
      description: 'Recognized for exceptional commitment and leadership in the Rover Scout movement.',
      issuedBy: 'Bangladesh Scouts (Rangpur Division)',
      issuedDate: new Date('2021-12-15'),
      category: 'Scout'
    },
    {
      title: 'Best Team Award',
      description: 'Won three times nationally with the Prothom Alo Bondhushava team.',
      issuedBy: 'Prothom Alo Bondhushava',
      issuedDate: new Date('2023-08-01'),
      category: 'Leadership'
    }
  ]

  for (const data of achievementsData) {
    await prisma.achievement.create({ data })
  }

  // Gallery
  for(let i=1;i<=10;i++){
    await prisma.galleryPhoto.create({ data: {
      imageUrl: `https://images.unsplash.com/photo-${1500000000000 + i*1000}?auto=format&fit=crop&q=80&w=800`,
      caption: `Activity Moment ${i}`,
      category: i%3 === 0 ? 'Travel' : (i%3 === 1 ? 'Journalism' : 'Scout')
    }})
  }

  // Personal info
  await prisma.personalInfo.upsert({
    where: { id: 'primary' },
    update: {
      name: 'Sohrab Hossan',
      title: 'Staff Reporter & Scout Leader',
      bio: 'A passionate storyteller and committed scout leader from Bangladesh. Staff Reporter at Protidiner Bangladesh and Young Scout Leader at Bangladesh Scouts.',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400',
      socials: [
        'https://www.facebook.com/share/155DH45GhJ/',
        'https://www.youtube.com/@sohrab49',
        'https://www.instagram.com/sohrab_shrb/',
        'https://www.linkedin.com/in/sohrab49/'
      ]
    },
    create: {
      id: 'primary',
      name: 'Sohrab Hossan',
      title: 'Staff Reporter & Scout Leader',
      bio: 'A passionate storyteller and committed scout leader from Bangladesh. Staff Reporter at Protidiner Bangladesh and Young Scout Leader at Bangladesh Scouts.',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400',
      socials: [
        'https://www.facebook.com/share/155DH45GhJ/',
        'https://www.youtube.com/@sohrab49',
        'https://www.instagram.com/sohrab_shrb/',
        'https://www.linkedin.com/in/sohrab49/'
      ]
    }
  })

  console.log('Seed finished')
}

main().catch(e=>{console.error(e);process.exit(1)}).finally(()=>prisma.$disconnect())
