"use client"
import Image from "next/image";
import Reveal from "../ui/Reveal";
import { motion } from "framer-motion";

const scoutStats = [
  { label: "Active Years", value: "8+" },
  { label: "Events Led", value: "25+" },
  { label: "Awards", value: "5" },
];

export default function ScoutingFocus() {
  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 items-center">
          <Reveal>
            <div className="relative">
              <div className="aspect-square relative rounded overflow-hidden bg-gray-100 border border-gray-100 shadow-sm max-w-sm mx-auto lg:mx-0">
                <Image 
                  src="https://lh3.googleusercontent.com/sitesv/AA5AbUA49r2u2zriZ8SwgDWca3Pn_Ssq5qcxjyI5Z-VRjqPfVFnO9oticCL6Fo_fYESwiC436s6hMvT09u2L7FVd7K9ke3c0l8YjAVBas7JTEC_ssTNMsAF-gVqx0m6fCpuJNjgi8LbkDyPtJJpSg6ueoJ0FKF2ZF4JAZHixVLF1XrocQMM3_BzTRjp-=w16383"
                  alt="Scouting Leadership"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Floating Stat Card */}
              <motion.div 
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="absolute -right-4 bottom-6 bg-white p-4 rounded text-black shadow-lg border border-gray-100 hidden md:block z-10"
              >
                <div className="grid grid-cols-3 gap-6">
                  {scoutStats.map((stat, i) => (
                    <div key={i} className="text-center">
                      <div className="text-xl font-bold mb-0.5">{stat.value}</div>
                      <div className="text-[8px] uppercase tracking-widest text-gray-500 font-black">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <h2 className="text-2xl md:text-4xl font-black text-black mb-4 leading-tight uppercase tracking-tighter">
                The Scouting Spirit: <br />
                Leadership & Service
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-sm text-gray-500 mb-6 leading-relaxed font-medium">
                As a Rover Scout Leader at Thakurgaon Govt. College, I believe in the power of youth-led change. My journey in scouting is not just about personal growth, but about mentoring the next generation of leaders.
              </p>
            </Reveal>
            
            <div className="space-y-4">
              <ScoutPoint 
                title="Mentorship" 
                text="Directly mentoring over 100+ rover scouts in personal development and skill acquisition."
              />
              <ScoutPoint 
                title="Crisis Management" 
                text="Coordinated emergency response teams during natural disasters and the COVID-19 pandemic."
              />
              <ScoutPoint 
                title="Community Building" 
                text="Organizing regular workshops on 'Messengers of Peace' and social harmony."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ScoutPoint({ title, text }: { title: string; text: string }) {
  return (
    <Reveal>
      <div className="flex gap-4">
        <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
        <div>
          <h4 className="text-base font-bold text-black mb-1">{title}</h4>
          <p className="text-gray-500 text-sm leading-relaxed">{text}</p>
        </div>
      </div>
    </Reveal>
  );
}
