import Image from 'next/image';
import Link from 'next/link';
import Reveal from '../ui/Reveal';
import { prisma } from '@/lib/prisma';
import { Newspaper } from 'lucide-react';

export default async function FeaturedGrid() {
  const articles = await prisma.article.findMany({
    where: { isPublished: true },
    orderBy: { publishedAt: 'desc' },
    take: 3,
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      {articles.map((article, index) => (
        <Reveal key={article.id} delay={index * 0.1}>
          <Link href={`/journalism/${article.slug}`} className="group block">
            <article className="h-full border-b md:border-b-0 md:border-r last:border-0 border-gray-100 pr-0 md:pr-10 pb-10 md:pb-0">
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-pink-600 mb-4">
                <Newspaper className="w-3 h-3" />
                {article.category}
              </div>
              
              <div className="relative aspect-[16/10] mb-6 overflow-hidden bg-gray-100 rounded-lg">
                <Image 
                  src={article.coverImage} 
                  alt={article.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110" 
                />
              </div>
              
              <h3 className="font-serif text-2xl md:text-3xl leading-tight mb-4 group-hover:text-pink-600 transition-colors">
                {article.title}
              </h3>
              
              <p className="text-gray-500 leading-relaxed line-clamp-3 mb-6">
                {article.excerpt}
              </p>
              
              <div className="flex items-center text-sm font-semibold gap-2 group-hover:translate-x-2 transition-transform">
                Read Story
                <span className="text-xl">→</span>
              </div>
            </article>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
