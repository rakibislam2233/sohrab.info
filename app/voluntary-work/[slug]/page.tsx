import React from "react";
import { Metadata } from "next";
import VoluntaryDetailClient from "../../../components/voluntary-work/VoluntaryDetailClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const title =
    slug === "winter-relief-2020"
      ? "Winter Relief Distribution"
      : slug === "environmental-service"
        ? "Environmental Service Campaign"
        : "Health Awareness & Medical Camp";

  return {
    title: `${title} | Voluntary Work`,
    description: `Details of the ${title} project. Community service and social impact initiatives by Sohrab Hossan.`,
    openGraph: {
      title: `${title} | Community Service`,
      description: `Impact report and details for ${title}.`,
    },
  };
}

export default async function VoluntaryDetailPage({ params }: Props) {
  const { slug } = await params;
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

  return <VoluntaryDetailClient work={work} />;
}
