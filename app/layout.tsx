import type { Metadata } from "next";
import React from "react";
import Navbar from "../components/Navbar";
import "./globals.css";
import { Bricolage_Grotesque } from "next/font/google";

const bricolage_grotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: "Sohrab Hossan — Journalist · Traveller · Scout",
    template: "%s | Sohrab Hossan"
  },
  description: "Personal portfolio of Sohrab Hossan — a dedicated journalist, passionate traveller, and experienced scout leader from Bangladesh capturing life's essence through stories.",
  keywords: ["Sohrab Hossan", "Journalist Bangladesh", "Scout Leader", "Travel Blogger", "Thakurgaon", "Bangladesh Stories"],
  authors: [{ name: "Sohrab Hossan" }],
  creator: "Sohrab Hossan",
  openGraph: {
    type: "website",
    locale: "en_BD",
    url: "https://sohrab.info",
    title: "Sohrab Hossan — Journalist · Traveller · Scout",
    description: "Explore the journey of Sohrab Hossan, a journalist and scout leader from Bangladesh.",
    siteName: "Sohrab Hossan Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sohrab Hossan — Journalist · Traveller · Scout",
    description: "Personal portfolio of Sohrab Hossan, capturing stories across Bangladesh.",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={bricolage_grotesque.className}>
      <body className="overflow-x-hidden bg-background text-foreground">
        <Navbar />
        <div>{children}</div>
      </body>
    </html>
  );
}
