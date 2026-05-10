import React from "react";
import { Metadata } from "next";
import TravelDetailClient from "../../../components/travel/TravelDetailClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const title =
    slug === "suryapuri-mango-tree"
      ? "The Ancient Suryapuri Mango Tree"
      : slug === "dinajpur-temples"
        ? "Historical Temples of Dinajpur"
        : "Serene Tea Gardens of Sylhet";

  return {
    title: `${title} | Travel`,
    description: `Exploring ${title} in Bangladesh. A visual journey and travel log by Sohrab Hossan.`,
    openGraph: {
      title: `${title} | Travel Stories`,
      description: `Join Sohrab Hossan on a journey to ${title}.`,
    },
  };
}

export default async function TravelDetailPage({ params }: Props) {
  const { slug } = await params;

  const story = {
    title:
      slug === "suryapuri-mango-tree"
        ? "The Ancient Suryapuri Mango Tree"
        : slug === "dinajpur-temples"
          ? "Historical Temples of Dinajpur"
          : "Serene Tea Gardens of Sylhet",
    destination:
      slug === "suryapuri-mango-tree"
        ? "Thakurgaon, BD"
        : slug === "dinajpur-temples"
          ? "Dinajpur, BD"
          : "Sylhet, BD",
    date: slug === "suryapuri-mango-tree" ? "Nov 2023" : "May 2023",
    image:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=1200",
    content: `
      <p className="mb-6">Traveling is not just about reaching a destination; it's about the stories we collect along the way. My journey to northern Bangladesh brought me face to face with history and nature in its purest form.</p>
      
      <h2 className="text-2xl font-bold mb-4 text-gray-900">A Living Legend</h2>
      <p className="mb-6">The Suryapuri Mango Tree in Baliadangi is more than just a tree. It's a colossal living entity that spans over two bighas of land. Walking under its massive canopy feels like stepping into a different world where time has stood still for over 200 years.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="relative aspect-video rounded-xl overflow-hidden shadow-md">
          <img src="https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&q=80&w=800" alt="Tree Detail" className="object-cover w-full h-full" />
        </div>
        <div className="relative aspect-video rounded-xl overflow-hidden shadow-md">
          <img src="https://images.unsplash.com/photo-1548013146-72479768bbaa?auto=format&fit=crop&q=80&w=800" alt="Temple Art" className="object-cover w-full h-full" />
        </div>
      </div>

      <p className="mb-6">The intricate network of branches creates a natural cathedral. Local legends say the tree was planted during the British era, and it continues to bear thousands of mangoes every season, serving as a vital part of the local economy and culture.</p>

      <h2 className="text-2xl font-bold mb-4 text-gray-900">Through the Lens</h2>
      <p className="mb-6">Capturing the scale of this natural wonder was a challenge. I spent hours waiting for the right light to filter through the leaves, hoping to translate even a fraction of its majesty into a photograph.</p>
    `,
  };

  return <TravelDetailClient story={story} />;
}
