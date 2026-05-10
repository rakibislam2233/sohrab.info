"use client";
import React from "react";
import { useParams, useRouter } from "next/navigation";
import { Briefcase, MapPin, Clock, Calendar, CheckCircle2, ArrowLeft, ExternalLink, DollarSign } from "lucide-react";
import Link from "next/link";
import PageBanner from "../../../components/ui/PageBanner";
import Reveal from "../../../components/ui/Reveal";
import { jobs } from "../../../lib/jobs";

export default function JobDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;
  
  const job = jobs.find((j) => j.id === id);

  if (!job) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Job Not Found</h2>
          <button 
            onClick={() => router.back()}
            className="text-black font-bold flex items-center gap-2 mx-auto hover:opacity-70 transition-opacity"
          >
            <ArrowLeft size={20} /> Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#fafafa] pb-24">
      <PageBanner
        title={job.title}
        subtitle={`${job.company} • ${job.location}`}
        badge={job.category}
        icon={Briefcase}
      />

      <div className="container mx-auto px-4 -mt-10 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <Reveal>
              <div className="bg-white p-8 md:p-10 rounded-xl border border-gray-100">
                <div className="flex items-center gap-2 text-black font-bold text-[10px] uppercase tracking-widest mb-4 border-l-2 border-black pl-3">
                  <Briefcase size={14} /> Job Description
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Overview</h2>
                <p className="text-gray-600 leading-relaxed mb-10">
                  {job.description}
                </p>

                <h2 className="text-xl font-bold text-gray-900 mb-6">Key Responsibilities</h2>
                <ul className="space-y-4 mb-10">
                  {job.responsibilities.map((item, index) => (
                    <li key={index} className="flex gap-3 text-gray-600 text-sm md:text-base">
                      <CheckCircle2 className="text-black shrink-0" size={20} />
                      {item}
                    </li>
                  ))}
                </ul>

                <h2 className="text-xl font-bold text-gray-900 mb-6">Requirements</h2>
                <ul className="space-y-4">
                  {job.requirements.map((item, index) => (
                    <li key={index} className="flex gap-3 text-gray-600 text-sm md:text-base">
                      <CheckCircle2 className="text-black shrink-0" size={20} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Reveal delay={0.2}>
              <div className="bg-white p-6 rounded-xl border border-gray-100 sticky top-24">
                <h3 className="text-lg font-bold text-gray-900 mb-6">Job Summary</h3>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="size-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 shrink-0">
                      <Calendar size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Posted On</p>
                      <p className="text-sm font-bold text-gray-900">{job.postedDate}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="size-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 shrink-0">
                      <Clock size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Job Type</p>
                      <p className="text-sm font-bold text-gray-900">{job.type}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="size-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 shrink-0">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Location</p>
                      <p className="text-sm font-bold text-gray-900">{job.location}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="size-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 shrink-0">
                      <DollarSign size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Salary Range</p>
                      <p className="text-sm font-bold text-gray-900">{job.salary || "Negotiable"}</p>
                    </div>
                  </div>
                </div>

                <Link 
                  href={job.applyUrl}
                  target="_blank"
                  className="w-full py-4 bg-black hover:bg-gray-800 text-white rounded-xl font-bold transition-all flex items-center justify-center gap-2 group"
                >
                  Apply Now <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <p className="text-center text-[10px] text-gray-400 font-medium mt-4 uppercase tracking-widest">
                  Redirects to {new URL(job.applyUrl).hostname}
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <Link 
                href="/jobs"
                className="flex items-center justify-center gap-2 text-sm font-bold text-gray-500 hover:text-black transition-colors py-4"
              >
                <ArrowLeft size={16} /> Back to All Jobs
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </main>
  );
}
