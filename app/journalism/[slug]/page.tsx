"use client"
import React from 'react';
import { useParams } from 'next/navigation';
import { ArrowLeft, Calendar, User, Tag, Share2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Reveal from '../../../components/ui/Reveal';

const JournalismDetail = () => {
  const { slug } = useParams();

  // Demo data matching the slugs in JournalismPage
  const article = {
    title: slug === 'primary-education' ? 'Transformation of Primary Education: A Journey to the Roots' : 
           slug === 'mango-farming' ? 'Commercial Mango Farming Success in Northern Districts' :
           'Relief Distribution to 4,700 Families During Crisis',
    category: slug === 'primary-education' ? 'Education' : 
              slug === 'mango-farming' ? 'Agriculture' : 'Social Impact',
    date: 'Oct 24, 2023',
    author: 'Sohrab Hossan',
    image: 'https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&q=80&w=1200',
    content: `
      <p className="mb-6">The landscape of rural Bangladesh is undergoing a silent yet powerful transformation. In the heart of Thakurgaon, a new wave of educational initiatives is reshaping how children learn and grow.</p>
      
      <h2 className="text-2xl font-bold mb-4 text-gray-900">Breaking the Barriers</h2>
      <p className="mb-6">For decades, access to quality primary education was a luxury reserved for those in urban centers. However, through grassroots coordination and dedicated reporting on the ground, we've documented a significant shift in resource allocation and teaching methodologies.</p>
      
      <blockquote className="border-l-4 border-pink-600 pl-6 py-2 italic text-gray-700 text-lg mb-8 bg-pink-50 rounded-r-xl">
        "Education is not just about literacy; it's about empowering the next generation to dream beyond their immediate surroundings."
      </blockquote>

      <p className="mb-6">Our investigation reveals that local community involvement has increased by 40% over the last two years. Parents are now more engaged in the school committees, ensuring that teachers are present and resources are utilized effectively.</p>

      <h2 className="text-2xl font-bold mb-4 text-gray-900">The Role of Local Journalism</h2>
      <p className="mb-6">As a reporter on the field, my goal has always been to bring these stories to light. By highlighting both the successes and the challenges, we create a platform for accountability and inspiration.</p>
    `
  };

  return (
    <main className="min-h-screen bg-white pb-24">
      {/* Hero Section */}
      <div className="relative h-[50vh] md:h-[60vh] w-full overflow-hidden">
        <Image 
          src={article.image} 
          alt={article.title} 
          fill 
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>
        <div className="absolute inset-0 flex flex-col justify-end container mx-auto px-4 pb-12">
          <Reveal>
            <Link 
              href="/journalism" 
              className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-6 text-sm font-medium"
            >
              <ArrowLeft size={16} /> Back to Journalism
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <span className="px-3 py-1 bg-pink-600 text-white text-[10px] font-bold uppercase tracking-widest rounded-full mb-4 inline-block">
              {article.category}
            </span>
          </Reveal>
          <Reveal delay={0.2}>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 max-w-4xl leading-tight">
              {article.title}
            </h1>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="flex flex-wrap items-center gap-6 text-white/70 text-sm">
              <span className="flex items-center gap-2"><User size={16} className="text-pink-400" /> {article.author}</span>
              <span className="flex items-center gap-2"><Calendar size={16} className="text-pink-400" /> {article.date}</span>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 mt-12 md:mt-20">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <div 
              className="prose prose-lg prose-pink max-w-none text-gray-600 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </Reveal>
          
          <Reveal delay={0.4}>
            <div className="mt-16 pt-8 border-t border-gray-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Tag size={18} className="text-gray-400" />
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-gray-50 text-gray-500 text-xs rounded-full">Reporting</span>
                  <span className="px-3 py-1 bg-gray-50 text-gray-500 text-xs rounded-full">Community</span>
                </div>
              </div>
              <button className="p-2 rounded-full bg-pink-50 text-pink-600 hover:bg-pink-600 hover:text-white transition-all duration-300">
                <Share2 size={20} />
              </button>
            </div>
          </Reveal>
        </div>
      </div>
    </main>
  );
};

export default JournalismDetail;
