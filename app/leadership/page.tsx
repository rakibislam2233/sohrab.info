import React from "react";
import { Metadata } from "next";
import LeadershipClient from "../../components/leadership/LeadershipClient";

export const metadata: Metadata = {
  title: "Leadership — Empowering Youth and Community",
  description: "Explore Sohrab Hossan's leadership roles in regional and national platforms. Youth empowerment, strategic coordination, and community impact.",
  openGraph: {
    title: "Leadership — Empowering Youth and Community | Sohrab Hossan",
    description: "Major leadership roles and responsibilities held by Sohrab Hossan.",
  }
};

const leadershipRoles = [
  {
    id: "1",
    title: "District Coordinator",
    organization: "Youth Development Forum",
    description:
      "Coordinating district-level youth activities, organizing workshops on leadership and digital literacy, and managing a team of 50+ volunteers.",
    eventDate: "2021 - Present",
    location: "Thakurgaon, BD",
    rank: "Strategic Lead",
    image:
      "https://lh3.googleusercontent.com/sitesv/AA5AbUBC3eDX-izt7AFNwcnl1yMjiL0xDONAbxgxWGftORflHuqlp2xxN7gkS0rIDBYyNxLBuqVAMsgZfIUNZjyIkNNoBgHl4l24jRbRA2rsdO8pjq0I2plYhpTCkZmOiDzMns1Onp4ttUy2fxKF2Kqu9u3m-gb5ygDrZWVyR0tYEbeI4LCq9kJO0aNtZx1foPBrj_Z-HNL9r1uCkK02eOzcaco_OFEUmoj8vuCW3k=w1280",
  },
  {
    id: "2",
    title: "Regional Head of Scouts",
    organization: "Bangladesh Scouts",
    description:
      "Managing scout activities across northern districts, coordinating regional camps, and overseeing training programs for new scout leaders.",
    eventDate: "2019 - 2021",
    location: "Rangpur Division",
    rank: "Regional Admin",
    image:
      "https://lh3.googleusercontent.com/sitesv/AA5AbUBY_v3Y0eY8m74xK4Y93m5I_v39_z8f9z8f9z8f9z8f9z8f9z8f9z8f9z8f9z8f9z8f9z8f9z8f9z=w1280",
  },
];

const galleryImages = [
  {
    url: "https://lh3.googleusercontent.com/sitesv/AA5AbUBC3eDX-izt7AFNwcnl1yMjiL0xDONAbxgxWGftORflHuqlp2xxN7gkS0rIDBYyNxLBuqVAMsgZfIUNZjyIkNNoBgHl4l24jRbRA2rsdO8pjq0I2plYhpTCkZmOiDzMns1Onp4ttUy2fxKF2Kqu9u3m-gb5ygDrZWVyR0tYEbeI4LCq9kJO0aNtZx1foPBrj_Z-HNL9r1uCkK02eOzcaco_OFEUmoj8vuCW3k=w1280",
    caption: "Leading a youth workshop in Thakurgaon",
    category: "Events",
  },
  {
    url: "https://lh3.googleusercontent.com/sitesv/AA5AbUCY_v3Y0eY8m74xK4Y93m5I_v39_z8f9z8f9z8f9z8f9z8f9z8f9z8f9z8f9z8f9z8f9z8f9z8f9z=w1280",
    caption: "Regional scout camp coordination",
    category: "Scouts",
  },
  {
    url: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1000",
    caption: "Strategic planning session with community leaders",
    category: "Strategy",
  },
  {
    url: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=1000",
    caption: "Youth outreach program launch",
    category: "Launch",
  },
  {
    url: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&q=80&w=1000",
    caption: "Mentoring junior leaders",
    category: "Mentorship",
  },
  {
    url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1000",
    caption: "Organizing regional conference",
    category: "Coordination",
  },
];

export default function LeadershipPage() {
  return (
    <LeadershipClient
      leadershipRoles={leadershipRoles}
      galleryImages={galleryImages}
    />
  );
}
