import React from "react";
import { Metadata } from "next";
import TravelClient from "../../components/travel/TravelClient";

export const metadata: Metadata = {
  title: "Travel — Exploring the Beauty of Bangladesh",
  description: "Join Sohrab Hossan on a journey through 64 districts of Bangladesh. Travel stories, visual journals, and action moments from across the country.",
  openGraph: {
    title: "Travel — Exploring the Beauty of Bangladesh | Sohrab Hossan",
    description: "Travel logs and visual stories from Sohrab Hossan's explorations across Bangladesh.",
  }
};

const videos = [
  {
    id: "1",
    title: "Suryapuri Mango Tree Documentary",
    thumbnail: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&q=80&w=1000",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    id: "2",
    title: "Exploring Dinajpur Temples",
    thumbnail: "https://images.unsplash.com/photo-1548013146-72479768bbaa?auto=format&fit=crop&q=80&w=1000",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    id: "3",
    title: "Sylhet Tea Gardens Aerial View",
    thumbnail: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=1000",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  }
];

const travelStories = [
  {
    id: "1",
    title: "The Ancient Suryapuri Mango Tree",
    slug: "suryapuri-mango-tree",
    destination: "Thakurgaon, BD",
    travelDate: "Nov 2023",
    excerpt:
      "Visiting the largest and oldest mango tree in Asia, a living monument of nature.",
    coverImage:
      "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: "2",
    title: "Historical Temples of Dinajpur",
    slug: "dinajpur-temples",
    destination: "Dinajpur, BD",
    travelDate: "May 2023",
    excerpt:
      "Exploring the intricate terracotta art and spiritual history of northern Bangladesh.",
    coverImage:
      "https://images.unsplash.com/photo-1548013146-72479768bbaa?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: "3",
    title: "Serene Tea Gardens of Sylhet",
    slug: "sylhet-tea-gardens",
    destination: "Sylhet, BD",
    travelDate: "Feb 2024",
    excerpt:
      "A peaceful retreat into the emerald hills and refreshing tea estates of the northeast.",
    coverImage:
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=1000",
  },
];

const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&q=80&w=1000",
    caption: "Oldest mango tree in Asia",
    category: "Nature",
  },
  {
    url: "https://images.unsplash.com/photo-1548013146-72479768bbaa?auto=format&fit=crop&q=80&w=1000",
    caption: "Terracotta temple details",
    category: "History",
  },
  {
    url: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80&w=1000",
    caption: "Local market vibes",
    category: "Street",
  },
  {
    url: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=1000",
    caption: "Sylhet tea gardens at dawn",
    category: "Landscape",
  },
  {
    url: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=1000",
    caption: "Road trip through the hills",
    category: "Travel",
  },
  {
    url: "https://images.unsplash.com/photo-1500835595327-8307e77032a3?auto=format&fit=crop&q=80&w=1000",
    caption: "Sunset at the river",
    category: "Nature",
  },
  {
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=1000",
    caption: "Camping in the wild",
    category: "Adventure",
  },
];

export default function TravelPage() {
  return (
    <TravelClient
      videos={videos}
      travelStories={travelStories}
      galleryImages={galleryImages}
    />
  );
}
