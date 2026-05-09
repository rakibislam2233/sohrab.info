import Reveal from "../../components/ui/Reveal";
import PageBanner from "../../components/ui/PageBanner";
import { Metadata } from "next";
import { Users, Award, Calendar, Play } from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = { title: "Leadership — Sohrab Hossan" };

const scoutActivities = [
  {
    id: '1',
    title: 'Rover Scout Leader',
    description: 'Serving as the primary lead for the Thakurgaon Govt. College Rover Scout Group, responsible for strategic planning and unit coordination.',
    eventDate: '2020-08-16',
    location: 'Thakurgaon Govt. College',
    rank: 'Rover Scout Leader'
  },
  {
    id: '2',
    title: 'Team Coordinator',
    description: 'Coordinating large-scale volunteer teams for national health campaigns and disaster relief efforts in the Northern region.',
    eventDate: '2020-05-06',
    location: 'Thakurgaon District Administration',
    rank: 'Coordinator'
  }
];

export default async function LeadershipPage() {

  return (
    <main className="min-h-screen bg-white pt-0 pb-20">
      <PageBanner 
        title="Leadership" 
        badge="Team Coordinator"
        themeColor="bg-[#f5f0ff]"
        textColor="text-[#3a1c5a]"
      />
      <div className="container mx-auto px-6 mt-12">
        {/* Featured Video Section - "Filmed instead" design */}
        <div className="mb-16">
          <Reveal>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-8">
              <div className="max-w-xl">
                <h2 className="text-2xl md:text-4xl font-black mb-2 italic tracking-tight">Filmed instead.</h2>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Leadership in action, guiding teams and creating change.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="relative aspect-video rounded overflow-hidden group cursor-pointer bg-gray-50 border border-gray-100 shadow-sm">
              <Image 
                src="https://lh3.googleusercontent.com/sitesv/AA5AbUA49r2u2zriZ8SwgDWca3Pn_Ssq5qcxjyI5Z-VRjqPfVFnO9oticCL6Fo_fYESwiC436s6hMvT09u2L7FVd7K9ke3c0l8YjAVBas7JTEC_ssTNMsAF-gVqx0m6fCpuJNjgi8LbkDyPtJJpSg6ueoJ0FKF2ZF4JAZHixVLF1XrocQMM3_BzTRjp-=w16383"
                alt="Leadership in Action"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
              
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="px-3 py-1 bg-purple-500/20 backdrop-blur-md border border-purple-500/30 text-purple-600 text-[8px] font-black uppercase tracking-[0.2em] rounded">Leadership</span>
                <span className="px-3 py-1 bg-white/40 backdrop-blur-md border border-white/20 text-black text-[8px] font-black uppercase tracking-[0.2em] rounded">Unit Head</span>
              </div>

              <div className="absolute top-4 right-4 px-2 py-0.5 bg-white/60 backdrop-blur-md rounded text-[10px] font-mono font-bold tracking-widest text-black">
                04:20
              </div>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded flex items-center justify-center group-hover:scale-110 transition-transform border border-white/30 shadow-2xl">
                  <Play className="w-6 h-6 text-white fill-white ml-0.5" />
                </div>
              </div>

              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-xl md:text-3xl font-black mb-2 text-white group-hover:text-purple-400 transition-colors leading-tight tracking-tight">
                  Unit Management & Strategic Planning
                </h3>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {scoutActivities.map((activity) => (
            <div key={activity.id} className="group border border-gray-100 rounded p-6 hover:border-purple-600 transition-colors bg-white">
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 bg-purple-50 rounded flex items-center justify-center">
                  <Users className="w-5 h-5 text-purple-600" />
                </div>
                <span className="bg-purple-600 text-white px-2 py-1 rounded text-[8px] font-black uppercase tracking-widest">
                  {activity.rank}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-black mb-2">{activity.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                {activity.description}
              </p>
              
              <div className="flex items-center gap-4 text-[10px] text-gray-400 font-black uppercase tracking-widest pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5" />
                  {new Date(activity.eventDate).toLocaleDateString("en-US", { month: "long", year: "numeric" })}
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-3.5 h-3.5" />
                  {activity.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
