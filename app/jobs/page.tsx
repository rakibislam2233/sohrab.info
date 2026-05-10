import React from "react";
import { Metadata } from "next";
import JobsClient from "../../components/jobs/JobsClient";
import { jobs } from "../../lib/jobs";

export const metadata: Metadata = {
  title: "Job Opportunities — Join Our Team",
  description: "Explore exciting career opportunities in tech, design, and journalism. Discover your next career move and apply for roles that match your skills.",
  openGraph: {
    title: "Job Opportunities — Join Our Team | Sohrab Hossan",
    description: "Current job openings and career growth opportunities available in our network.",
  }
};

export default function JobsPage() {
  return <JobsClient jobs={jobs} />;
}
