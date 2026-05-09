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
      title: 'Transformation of Primary Education in Thakurgaon',
      slug: 'primary-education-thakurgaon',
      excerpt: 'How local schools are adapting to new curriculum and digital learning environments.',
      content: '<p>As the Staff Reporter for the Education Desk at Protidiner Bangladesh, I have observed...</p>',
      coverImage: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=1000',
      category: 'Education',
      isPublished: true
    },
    {
      title: 'Agricultural Success: Commercial Mango Farming',
      slug: 'mango-farming-success',
      excerpt: 'Thakurgaon farmers find new prosperity through commercial mango orchards.',
      content: '<p>The agricultural landscape of Northern Bangladesh is shifting...</p>',
      coverImage: 'https://images.unsplash.com/photo-1553134839-89d81d421da1?auto=format&fit=crop&q=80&w=1000',
      category: 'Agriculture',
      isPublished: true
    },
    {
      title: 'Current State of Local Governance in Thakurgaon',
      slug: 'local-governance-thakurgaon',
      excerpt: 'Analyzing the impact of recent policy changes on rural community development.',
      content: '<p>Reporting from the heart of Thakurgaon...</p>',
      coverImage: 'https://images.unsplash.com/photo-1541872703-74c5e443d1f5?auto=format&fit=crop&q=80&w=1000',
      category: 'Current Affairs',
      isPublished: true
    }
  ]

  for (const data of articlesData) {
    await prisma.article.create({ data })
  }

  // Travel Stories
  const travelData = [
    {
      title: 'Thakurgaon Hidden Gems: Baliadangi Suryapuri Mango Tree',
      slug: 'baliadangi-mango-tree',
      destination: 'Thakurgaon, Bangladesh',
      excerpt: 'Visiting the largest and oldest mango tree in South Asia.',
      content: '<p>A majestic natural wonder that draws thousands of tourists...</p>',
      coverImage: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&q=80&w=1000',
      images: ['https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&q=80&w=800'],
      travelDate: new Date('2023-11-15'),
      isPublished: true
    }
  ]

  for (const data of travelData) {
    await prisma.travelStory.create({ data })
  }

  // Scout Activities & Leadership
  const scoutData = [
    {
      title: 'Rover Scout Leader - Team Coordinator',
      description: 'Leading the Thakurgaon Govt. College Rover Scout Group in regional events and social initiatives.',
      image: 'https://images.unsplash.com/photo-1563212891-94931a742f9e?auto=format&fit=crop&q=80&w=800',
      eventDate: new Date('2023-08-20'),
      location: 'Thakurgaon Govt. College',
      rank: 'Rover Scout Leader'
    },
    {
      title: 'National Level Scout Workshop',
      description: 'Participated as a mentor in the Messengers of Peace workshop for emerging scout leaders.',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800',
      eventDate: new Date('2024-02-05'),
      location: 'Gazipur'
    }
  ]

  for (const data of scoutData) {
    await prisma.scoutActivity.create({ data })
  }

  // Voluntary Work
  const voluntaryData = [
    {
      title: 'Regional Tree Plantation Campaign',
      description: 'Organized and executed a large-scale tree plantation drive in Thakurgaon to promote environmental sustainability.',
      organization: 'Bangladesh Scouts',
      date: new Date('2023-06-10'),
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Winter Relief Distribution',
      description: 'Distributed blankets and essential winter supplies to underprivileged families in the Northern regions.',
      organization: 'Prothom Alo Bondhushava',
      date: new Date('2023-12-20'),
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800'
    }
  ]

  for (const data of voluntaryData) {
    await prisma.voluntaryWork.create({ data })
  }

  // Achievements
  const achievementsData = [
    {
      title: 'Best Journalist Award 2023',
      description: 'Recognized for outstanding reporting on educational development and social issues.',
      issuedBy: 'Thakurgaon Press Club',
      issuedDate: new Date('2023-05-10'),
      category: 'Journalism'
    },
    {
      title: 'National Service Award',
      description: 'Highest recognition for volunteer service within the Bangladesh Scouts movement.',
      issuedBy: 'Bangladesh Scouts',
      issuedDate: new Date('2022-12-15'),
      category: 'Scout'
    },
    {
      title: 'Best Team Coordinator',
      description: 'Awarded for exceptional leadership in coordinating regional scouting events.',
      issuedBy: 'Rover Region, Bangladesh Scouts',
      issuedDate: new Date('2023-03-20'),
      category: 'Leadership'
    }
  ]

  for (const data of achievementsData) {
    await prisma.achievement.create({ data })
  }

  // Gallery
  for(let i=1;i<=12;i++){
    await prisma.galleryPhoto.create({ data: {
      imageUrl: `https://images.unsplash.com/photo-${1500000000000 + i*5000}?auto=format&fit=crop&q=80&w=800`,
      caption: `Field Activity Moment ${i}`,
      category: i%3 === 0 ? 'Travel' : (i%3 === 1 ? 'Journalism' : 'Scout')
    }})
  }

  // Personal info
  await prisma.personalInfo.upsert({
    where: { id: 'primary' },
    update: {
      name: 'Sohrab Hossan',
      title: 'Staff Reporter @ Protidiner Bangladesh | Scout Leader',
      bio: 'Professional journalist assigned to the Education Desk. Dedicated Rover Scout Leader at Thakurgaon Govt. College and committed social volunteer. Passionate about storytelling, leadership, and humanitarian service.',
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
      title: 'Staff Reporter @ Protidiner Bangladesh | Scout Leader',
      bio: 'Professional journalist assigned to the Education Desk. Dedicated Rover Scout Leader at Thakurgaon Govt. College and committed social volunteer. Passionate about storytelling, leadership, and humanitarian service.',
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
