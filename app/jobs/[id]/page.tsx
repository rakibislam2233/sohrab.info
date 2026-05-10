import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import JobDetailsClient from "../../../components/jobs/JobDetailsClient";
import { jobs } from "../../../lib/jobs";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const job = jobs.find((j) => j.id === id);

  if (!job) return { title: "Job Not Found" };

  return {
    title: `${job.title} at ${job.company}`,
    description: job.description.slice(0, 160),
    openGraph: {
      title: `${job.title} at ${job.company}`,
      description: job.description.slice(0, 160),
    }
  };
}

export default async function JobDetailsPage({ params }: Props) {
  const { id } = await params;
  const job = jobs.find((j) => j.id === id);

  if (!job) {
    notFound();
  }

  return <JobDetailsClient job={job} />;
}
