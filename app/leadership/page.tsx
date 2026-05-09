import Reveal from "../../components/ui/Reveal";
import PageBanner from "../../components/ui/PageBanner";
import { Metadata } from "next";
import { Users, Award, Calendar } from "lucide-react";

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
      <div className="container mx-auto px-6 mt-24">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {scoutActivities.map((activity) => (
            <div key={activity.id} className="group border border-gray-100 rounded-3xl p-8 hover:border-blue-600 transition-colors">
              <div className="flex items-start justify-between mb-8">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest">
                  {activity.rank}
                </span>
              </div>
              
              <h3 className="text-3xl font-bold text-black mb-4">{activity.title}</h3>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                {activity.description}
              </p>
              
              <div className="flex items-center gap-6 text-sm text-gray-400 font-medium pt-6 border-t border-gray-50">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {new Date(activity.eventDate).toLocaleDateString("en-US", { month: "long", year: "numeric" })}
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4" />
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
