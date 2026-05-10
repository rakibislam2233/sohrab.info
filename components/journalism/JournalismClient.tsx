"use client";
import React from "react";
import { Newspaper, Send, ArrowRight, PenTool } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import PageBanner from "../ui/PageBanner";
import Reveal from "../ui/Reveal";
import PhotoGallery from "../ui/PhotoGallery";

interface Article {
  id: string;
  title: string;
  slug: string;
  category: string;
  publishedAt: string;
  excerpt: string;
  image: string;
}

interface GalleryImage {
  url: string;
  caption: string;
  category: string;
}

interface JournalismClientProps {
  articles: Article[];
  galleryImages: GalleryImage[];
}

const JournalismClient: React.FC<JournalismClientProps> = ({ articles, galleryImages }) => {
  return (
    <main className="min-h-screen bg-white pb-24">
      <PageBanner
        title="Journalism"
        subtitle="Truth through the lens. Reporting on education, community, and the heart of Bangladesh since 2016."
        badge="Senior Reporter"
        icon={PenTool}
      />

      <div className="container mx-auto px-4 mt-16">
        {/* Gallery Section */}
        <section className="mb-20">
          <Reveal>
            <div className="flex flex-col items-start mb-10">
              <span className="text-black font-bold uppercase tracking-[0.2em] text-[10px] mb-2 border-l-2 border-black pl-3">
                Visual Stories
              </span>
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-3">
                <Send className="text-black" size={20} />
                Field Gallery
              </h2>
            </div>
          </Reveal>

          <PhotoGallery images={galleryImages} />
        </section>

        {/* Featured Articles Section */}
        <section>
          <Reveal>
            <div className="flex flex-col items-start mb-10">
              <span className="text-black font-bold uppercase tracking-[0.2em] text-[10px] mb-2 border-l-2 border-black pl-3">
                Published Works
              </span>
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-3">
                <Newspaper className="text-black" size={20} />
                Featured Articles
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, i) => (
              <Reveal key={article.id} delay={i * 0.1}>
                <Link
                  href={`/journalism/${article.slug}`}
                  className="group block h-full"
                >
                  <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-none transition-all duration-500 hover:border-black flex flex-col h-full">
                    <div className="relative aspect-16/10 overflow-hidden">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-2 py-0.5 bg-black text-white text-[8px] font-bold uppercase tracking-wider rounded-md border border-black">
                          {article.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 flex flex-col grow">
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">
                        {article.publishedAt}
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-black transition-colors leading-tight">
                        {article.title}
                      </h3>
                      <p className="text-gray-500 text-xs leading-relaxed mb-6 line-clamp-2">
                        {article.excerpt}
                      </p>

                      <div className="mt-auto pt-4 border-t border-gray-50 flex items-center text-black text-[10px] font-bold group-hover:gap-3 gap-2 transition-all uppercase tracking-widest">
                        Read Full Story <ArrowRight size={14} />
                      </div>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default JournalismClient;
