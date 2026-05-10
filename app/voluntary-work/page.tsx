import React from "react";
import { Metadata } from "next";
import VoluntaryWorkClient from "../../components/voluntary-work/VoluntaryWorkClient";

export const metadata: Metadata = {
  title: "Voluntary Work — Service Before Self",
  description: "Explore Sohrab Hossan's contribution to community development, disaster relief, and social welfare projects across Bangladesh.",
  openGraph: {
    title: "Voluntary Work — Service Before Self | Sohrab Hossan",
    description: "Documentation of voluntary initiatives and community service by Sohrab Hossan.",
  }
};

const voluntaryWork = [
  {
    id: "1",
    title: "Relief Distribution Campaign 2020",
    slug: "relief-campaign-2020",
    location: "Thakurgaon, BD",
    date: "May 2020",
    excerpt:
      "Coordinating the distribution of essential food and hygiene supplies to families affected by the pandemic.",
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: "2",
    title: "Winter Clothing Drive for Vulnerable Groups",
    slug: "winter-clothing-drive",
    location: "Northern BD",
    date: "Dec 2022",
    excerpt:
      "A community-driven initiative to provide warm clothing and blankets to homeless individuals and rural families.",
    image:
      "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: "3",
    title: "Primary Education Awareness Workshop",
    slug: "education-awareness",
    location: "Rural Areas",
    date: "Mar 2023",
    excerpt:
      "Conducting workshops in rural villages to encourage parents to enroll their children in primary schools.",
    image:
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=1000",
  },
];

const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1000",
    caption: "Organizing relief packages for distribution",
    category: "Relief",
  },
  {
    url: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=1000",
    caption: "Distributing warm blankets in winter",
    category: "Social Welfare",
  },
  {
    url: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=1000",
    caption: "Conducting educational workshops",
    category: "Education",
  },
  {
    url: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb8?auto=format&fit=crop&q=80&w=1000",
    caption: "Community cleanup initiative",
    category: "Environment",
  },
  {
    url: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&q=80&w=1000",
    caption: "Mentoring youth volunteers",
    category: "Mentorship",
  },
  {
    url: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&q=80&w=1000",
    caption: "Healthcare awareness camp",
    category: "Health",
  },
  {
    url: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=80&w=1000",
    caption: "Food security program review",
    category: "Planning",
  },
];

export default function VoluntaryWorkPage() {
  return (
    <VoluntaryWorkClient
      voluntaryWork={voluntaryWork}
      galleryImages={galleryImages}
    />
  );
}
