"use client";
import React from "react";
import Link from "next/link";
import { Briefcase, MapPin, Clock, ArrowRight, Search, Filter } from "lucide-react";
import PageBanner from "../../components/ui/PageBanner";
import Reveal from "../../components/ui/Reveal";
import { jobs } from "../../lib/jobs";

export default function JobsPage() {
  return (
    <main className="min-h-screen bg-[#fafafa] pb-24">
      <PageBanner
        title="Job Opportunities"
        subtitle="Discover your next career move. Explore exciting roles in tech, design, and more."
        badge="Career Growth"
        icon={Briefcase}
      />

      <div className="container mx-auto px-4 -mt-10 relative z-20">
        {/* Search & Filter Bar */}
        <Reveal>
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-4 mb-12">
            <div className="relative grow">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search for jobs..."
                className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-1 focus:ring-black transition-all text-sm"
              />
            </div>
            <div className="flex gap-2">
              <button className="flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-100 rounded-xl text-sm text-gray-600 hover:bg-gray-100 transition-colors">
                <Filter size={16} /> Filters
              </button>
              <button className="px-6 py-2 bg-gray-900 text-white rounded-xl text-sm font-bold hover:bg-black transition-colors">
                Search
              </button>
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-6">
          {jobs.map((job, i) => (
            <Reveal key={job.id} delay={i * 0.1}>
              <Link href={`/jobs/${job.id}`} className="block group">
                <div className="bg-white p-6 md:p-8 rounded-xl border border-gray-100 hover:border-black transition-all duration-500 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-none hover:shadow-lg hover:shadow-black/5">
                  <div className="grow">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="px-2 py-0.5 bg-black text-white text-[10px] font-bold uppercase tracking-wider rounded-md border border-black">
                        {job.category}
                      </span>
                      <span className="flex items-center gap-1 text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                        <Clock size={12} /> {job.postedDate}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-black transition-colors">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1.5">
                        <Briefcase size={16} className="text-gray-400" /> {job.company}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin size={16} className="text-gray-400" /> {job.location}
                      </span>
                      <span className="text-black font-bold">
                        {job.type}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="hidden md:block text-right mr-6">
                      <p className="text-xs text-gray-400 uppercase tracking-widest font-bold mb-1">Salary</p>
                      <p className="text-sm font-bold text-gray-900">{job.salary || "Not Specified"}</p>
                    </div>
                    <div className="size-12 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-black group-hover:text-white transition-all duration-500">
                      <ArrowRight size={20} />
                    </div>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        {jobs.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500">No job opportunities found at the moment.</p>
          </div>
        )}
      </div>
    </main>
  );
}
