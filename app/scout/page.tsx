import type { Metadata } from "next";
import ScoutClient from "../../components/scout/ScoutClient";

export const metadata: Metadata = {
  title: "Scouting — Be Prepared for Service",
  description:
    "A lifetime of dedication to the scouting movement. Discover Sohrab Hossan's journey as a Rover Scout Leader and his contributions to youth development.",
  openGraph: {
    title: "Scouting — Be Prepared for Service | Sohrab Hossan",
    description:
      "Explore the scouting highlights, training, and community service activities of Sohrab Hossan.",
  },
};

export default function ScoutPage() {
  return <ScoutClient />;
}
