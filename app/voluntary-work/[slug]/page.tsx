"use client";
import React from "react";
import { useParams } from "next/navigation";
import {
  ArrowLeft,
  Calendar,
  Building2,
  MapPin,
  Share2,
  Heart,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Reveal from "../../../components/ui/Reveal";

const VoluntaryDetail = () => {
  const { slug } = useParams();

  // Demo data matching the slugs in VoluntaryWorkPage
  const work = {
    title:
      slug === "winter-relief-2020"
        ? "Winter Relief Distribution 2020"
        : slug === "environmental-service"
          ? "Environmental Service Campaign"
          : "Health Awareness & Medical Camp",
    organization:
      slug === "winter-relief-2020"
        ? "Thakurgaon Govt. College Rover Scout Group"
        : slug === "environmental-service"
          ? "Bangladesh Scouts"
          : "Voluntary Service Group",
    date: slug === "winter-relief-2020" ? "Jan 14, 2020" : "Jul 20, 2020",
    location: "Thakurgaon, Bangladesh",
    image:
      "https://lh3.googleusercontent.com/sitesv/AA5AbUBC3eDX-izt7AFNwcnl1yMjiL0xDONAbxgxWGftORflHuqlp2xxN7gkS0rIDBYyNxLBuqVAMsgZfIUNZjyIkNNoBgHl4l24jRbRA2rsdO8pjq0I2plYhpTCkZmOiDzMns1Onp4ttUy2fxKF2Kqu9u3m-gb5ygDrZWVyR0tYEbeI4LCq9kJO0aNtZx1foPBrj_Z-HNL9r1uCkK02eOzcaco_OFEUmoj8vuCW3k=w1280",
    content: `
      <p className="mb-6">Community service has always been at the core of my values. This project was a testament to what collective action can achieve when driven by empathy and organized effort.</p>
      
      <h2 className="text-2xl font-bold mb-4 text-gray-900">Project Overview</h2>
      <p className="mb-6">During the harsh winter months in Thakurgaon, many elderly and underprivileged families struggle with the extreme cold. Our team at the Rover Scout Group initiated a fundraising campaign that successfully reached over 1,000 donors.</p>
      
      <div className="bg-gray-50 p-8 rounded-2xl mb-8 border border-gray-100">
        <h3 className="text-xl font-bold mb-4 text-black">Key Achievements:</h3>
        <ul className="space-y-3 text-gray-800">
          <li className="flex items-center gap-2 font-medium">✓ Distributed 4,700 high-quality blankets</li>
          <li className="flex items-center gap-2 font-medium">✓ Reached 15 remote villages in the district</li>
          <li className="flex items-center gap-2 font-medium">✓ Coordinated a team of 45 active volunteers</li>
          <li className="flex items-center gap-2 font-medium">✓ Partnered with 3 local NGOs for logistics</li>
        </ul>
      </div>

      <p className="mb-6">The distribution process was meticulously planned to ensure that the aid reached the most deserving individuals. We used a token-based system and conducted home visits prior to the main event.</p>

      <h2 className="text-2xl font-bold mb-4 text-gray-900">Personal Reflection</h2>
      <p className="mb-6">Standing there in the cold, seeing the smiles and hearing the prayers of the elders as they received their blankets, was a life-changing experience. It reinforced my commitment to scouting and community service.</p>
    `,
  };

  return (
    <main className="min-h-screen bg-white pb-24">
      {/* Hero Section */}
      <div className="relative h-[50vh] md:h-[60vh] w-full overflow-hidden">
        <Image
          src={work.image}
          alt={work.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 flex flex-col justify-end container mx-auto px-4 pb-12">
          <Reveal>
            <Link
              href="/voluntary-work"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-6 text-sm font-medium"
            >
              <ArrowLeft size={16} /> Back to Voluntary Work
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex items-center gap-2 px-3 py-1 bg-black text-white text-[10px] font-bold uppercase tracking-widest rounded-full mb-4 w-fit">
              <Heart size={12} fill="white" /> Impact Project
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 max-w-4xl leading-tight">
              {work.title}
            </h1>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="flex flex-wrap items-center gap-6 text-white/70 text-sm">
              <span className="flex items-center gap-2">
                <Building2 size={16} className="text-gray-400" />{" "}
                {work.organization}
              </span>
              <span className="flex items-center gap-2">
                <Calendar size={16} className="text-gray-400" /> {work.date}
              </span>
              <span className="flex items-center gap-2">
                <MapPin size={16} className="text-gray-400" /> {work.location}
              </span>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 mt-12 md:mt-20">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <div
              className="prose prose-lg prose-neutral max-w-none text-gray-600 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: work.content }}
            />
          </Reveal>

          <Reveal delay={0.4}>
            <div className="mt-16 pt-8 border-t border-gray-100 flex items-center justify-between">
              <div className="flex items-center gap-2 text-black font-bold">
                <Heart size={20} fill="currentColor" />
                Making a difference, one step at a time.
              </div>
              <button className="p-2 rounded-full bg-gray-100 text-black hover:bg-black hover:text-white transition-all duration-300">
                <Share2 size={20} />
              </button>
            </div>
          </Reveal>
        </div>
      </div>
    </main>
  );
};

export default VoluntaryDetail;
