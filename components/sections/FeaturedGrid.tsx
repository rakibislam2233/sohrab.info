import { Newspaper } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Reveal from "../ui/Reveal";

const articles = [
  {
    id: '1',
    title: 'Transformation of Primary Education in Thakurgaon',
    slug: 'primary-education-thakurgaon',
    excerpt: 'Exploring how local schools are adapting to new curriculum and digital learning environments in Northern Bangladesh.',
    coverImage: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=1000',
    category: 'Education',
  },
  {
    id: '2',
    title: 'Agricultural Success: Commercial Mango Farming',
    slug: 'mango-farming-success',
    excerpt: 'Thakurgaon farmers find new prosperity through commercial mango orchards and modern agricultural practices.',
    coverImage: 'https://images.unsplash.com/photo-1553134839-89d81d421da1?auto=format&fit=crop&q=80&w=1000',
    category: 'Agriculture',
  },
  {
    id: '3',
    title: 'Current State of Local Governance in Thakurgaon',
    slug: 'local-governance-thakurgaon',
    excerpt: 'Analyzing the impact of recent policy changes on rural community development and local administration.',
    coverImage: 'https://images.unsplash.com/photo-1541872703-74c5e443d1f5?auto=format&fit=crop&q=80&w=1000',
    category: 'Current Affairs',
  },
];

export default async function FeaturedGrid() {

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

              <div className="relative aspect-16/10 mb-6 overflow-hidden bg-gray-100 rounded-lg">
                <Image
                  src={article.coverImage}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <h3 className="text-2xl md:text-3xl leading-tight mb-4 group-hover:text-pink-600 transition-colors">
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
