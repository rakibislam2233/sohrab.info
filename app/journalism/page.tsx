"use client";
import React from "react";
import { Newspaper, Send, ArrowRight, PenTool } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import PageBanner from "../../components/ui/PageBanner";
import Reveal from "../../components/ui/Reveal";
import PhotoGallery from "../../components/ui/PhotoGallery";

const articles = [
  {
    id: "1",
    title: "Transformation of Primary Education: A Journey to the Roots",
    slug: "primary-education",
    category: "Education",
    publishedAt: "2023-11-10",
    excerpt:
      "Exploring how grassroots initiatives are reshaping the landscape of primary education in rural Bangladesh.",
    image:
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: "2",
    title: "Commercial Mango Farming Success in Northern Districts",
    slug: "mango-farming",
    category: "Agriculture",
    publishedAt: "2023-09-15",
    excerpt:
      "A deep dive into how modern techniques are helping local farmers achieve record-breaking yields.",
    image:
      "https://images.unsplash.com/photo-1553134839-89d81d421da1?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: "3",
    title: "Relief Distribution to 4,700 Families During Crisis",
    slug: "relief-2020",
    category: "Social Impact",
    publishedAt: "2020-05-06",
    excerpt:
      "Documenting the coordinated effort to provide essential supplies to those hardest hit by the pandemic.",
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1000",
  },
];

const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&q=80&w=1000",
    caption: "Field reporting at a remote location",
    category: "In Action",
  },
  {
    url: "https://lh3.googleusercontent.com/sitesv/AA5AbUCY_v3Y0eY8m74xK4Y93m5I_v39_z8f9z8f9z8f9z8f9z8f9z8f9z8f9z8f9z8f9z8f9z8f9z8f9z=w1280",
    caption: "Interviewing local community leaders",
    category: "Interviews",
  },
  {
    url: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=1000",
    caption: "Breaking news coverage",
    category: "Live",
  },
  {
    url: "https://images.unsplash.com/photo-1476242906366-d8eb64c2f661?auto=format&fit=crop&q=80&w=1000",
    caption: "Documentation of local culture",
    category: "Culture",
  },
  {
    url: "https://images.unsplash.com/photo-1585829365234-7547076d338e?auto=format&fit=crop&q=80&w=1000",
    caption: "Journalist workspace and tools",
    category: "Behind the Scenes",
  },
  {
    url: "https://lh3.googleusercontent.com/sitesv/AA5AbUBC3eDX-izt7AFNwcnl1yMjiL0xDONAbxgxWGftORflHuqlp2xxN7gkS0rIDBYyNxLBuqVAMsgZfIUNZjyIkNNoBgHl4l24jRbRA2rsdO8pjq0I2plYhpTCkZmOiDzMns1Onp4ttUy2fxKF2Kqu9u3m-gb5ygDrZWVyR0tYEbeI4LCq9kJO0aNtZx1foPBrj_Z-HNL9r1uCkK02eOzcaco_OFEUmoj8vuCW3k=w1280",
    caption: "Community outreach program",
    category: "Social",
  },
  {
    url: "https://images.unsplash.com/photo-1579532566591-943b1904803b?auto=format&fit=crop&q=80&w=1000",
    caption: "Press conference at city hall",
    category: "Press",
  },
];

const JournalismPage = () => {
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
        <section className="mb-24">
          <Reveal>
            <div className="flex flex-col items-start mb-10">
              <span className="text-black font-bold uppercase tracking-[0.2em] text-[10px] mb-2 border-l-2 border-black pl-3">
                Visual Stories
              </span>
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
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
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
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
                  <div className="bg-white rounded overflow-hidden border border-gray-100 shadow-none transition-all duration-500 hover:border-black flex flex-col h-full">
                    <div className="relative aspect-16/10 overflow-hidden">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-2 py-0.5 bg-black text-white text-[8px] font-bold uppercase tracking-wider rounded-sm border border-black">
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

export default JournalismPage;
