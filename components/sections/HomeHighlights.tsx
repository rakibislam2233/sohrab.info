import Link from 'next/link';
import Reveal from '../ui/Reveal';
import { Compass, Newspaper, Users, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const blocks = [
  {
    title: 'Journalism',
    text: 'Staff Reporter at Protidiner Bangladesh. Writing about Agriculture, Education, and Current Affairs.',
    href: '/journalism',
    icon: <Newspaper className="w-8 h-8 text-pink-600" />,
    color: 'bg-pink-50',
  },
  {
    title: 'Scout Leadership',
    text: 'Young Scout Leader at Bangladesh Scouts. Recipient of the National Service Award for volunteer work.',
    href: '/scout',
    icon: <Users className="w-8 h-8 text-blue-600" />,
    color: 'bg-blue-50',
  },
  {
    title: 'Travel & Vlogging',
    text: 'Exploring the hidden beauty of Bangladesh. Capturing stories through lens and words.',
    href: '/travel',
    icon: <Compass className="w-8 h-8 text-emerald-600" />,
    color: 'bg-emerald-50',
  },
];

export default function HomeHighlights() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6">
        <Reveal>
          <div className="max-w-xl mb-8">
            <h2 className="text-2xl md:text-4xl font-black text-black mb-2 uppercase tracking-tighter">What I Focus On</h2>
            <p className="text-sm text-gray-500 font-medium">
              Merging professional journalism with a lifelong commitment to scouting and a passion for travel.
            </p>
          </div>
        </Reveal>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blocks.map((block, index) => (
            <Reveal key={block.title} delay={index * 0.1}>
              <Link href={block.href} className="group block h-full">
                <div className={`h-full p-6 rounded transition-all duration-300 border border-transparent hover:border-gray-200 hover:-translate-y-1 ${block.color}`}>
                  <div className="bg-white w-12 h-12 rounded flex items-center justify-center mb-6">
                    {block.icon}
                  </div>
                  <h3 className="text-lg font-bold text-black mb-2">{block.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">{block.text}</p>
                  
                  <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest group-hover:text-pink-600 transition-colors">
                    Explore More
                    <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
