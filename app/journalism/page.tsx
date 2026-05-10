import React from "react";
import { Metadata } from "next";
import JournalismClient from "../../components/journalism/JournalismClient";

export const metadata: Metadata = {
  title: "Journalism — Truth Through the Lens",
  description: "Reporting on education, community, and the heart of Bangladesh. Explore featured articles and visual stories by Sohrab Hossan.",
  openGraph: {
    title: "Journalism — Truth Through the Lens | Sohrab Hossan",
    description: "Featured articles and field gallery from Sohrab Hossan's journalism career.",
  }
};

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

export default function JournalismPage() {
  return <JournalismClient articles={articles} galleryImages={galleryImages} />;
}
