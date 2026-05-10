import React from "react";
import { Metadata } from "next";
import AchievementsClient from "../../components/achievements/AchievementsClient";

export const metadata: Metadata = {
  title: "Achievements — Recognition of Excellence",
  description: "Explore the awards, milestones, and professional recognition received by Sohrab Hossan for contributions to journalism, scouting, and community service.",
  openGraph: {
    title: "Achievements — Recognition of Excellence | Sohrab Hossan",
    description: "A showcase of milestones, awards, and certifications earned by Sohrab Hossan.",
  }
};

const achievements = [
  {
    id: "1",
    title: "Best Regional Scout Leader",
    issuedBy: "Bangladesh Scouts",
    issuedDate: "2022",
    description:
      "Awarded for exceptional leadership in coordinating regional scout activities and fostering youth engagement in northern Bangladesh.",
    category: "Scouting",
  },
  {
    id: "2",
    title: "Excellence in Community Reporting",
    issuedBy: "Journalism Association",
    issuedDate: "2021",
    description:
      "Recognized for outstanding investigative reporting on rural education challenges and grassroots community success stories.",
    category: "Journalism",
  },
  {
    id: "3",
    title: "Outstanding Youth Mentor",
    issuedBy: "Youth Development Forum",
    issuedDate: "2023",
    description:
      "Honored for dedicated mentorship of over 100 junior leaders and volunteers across the Rangpur division.",
    category: "Leadership",
  },
  {
    id: "4",
    title: "National Volunteer Award",
    issuedBy: "Social Welfare Dept.",
    issuedDate: "2020",
    description:
      "Received for tireless service during disaster relief efforts and coordinating healthcare awareness programs in remote areas.",
    category: "Voluntary",
  },
];

export default function AchievementsPage() {
  return <AchievementsClient achievements={achievements} />;
}
