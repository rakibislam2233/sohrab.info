import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

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

  console.log('Seed finished')
}

main().catch(e=>{console.error(e);process.exit(1)}).finally(()=>prisma.$disconnect())
