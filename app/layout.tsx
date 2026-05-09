import type { Metadata } from "next";
import React from "react";
import Navbar from "../components/Navbar";
import "./globals.css";
import { Nunito } from "next/font/google";

const notoSans = Nunito({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Sohrab Hossan — Journalist · Traveller · Scout",
  description:
    "Personal portfolio of Sohrab Hossan — journalist, traveller and scout from Bangladesh.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={notoSans.className}>
      <body>
        <Navbar />
        <div>{children}</div>
      </body>
    </html>
  );
}
