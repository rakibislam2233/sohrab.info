import { Award, Calendar, Users } from "lucide-react";
import { Metadata } from "next";
import PageBanner from "../../components/ui/PageBanner";

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
      <div className="container mx-auto px-4 sm:px-6 mt-10 sm:mt-12">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {scoutActivities.map((activity) => (
            <div key={activity.id} className="group border border-gray-100 rounded p-5 sm:p-6 hover:border-purple-600 transition-colors bg-white">
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 bg-purple-50 rounded flex items-center justify-center">
                  <Users className="w-5 h-5 text-purple-600" />
                </div>
                <span className="bg-purple-600 text-white px-2 py-1 rounded text-[8px] font-black uppercase tracking-widest">
                  {activity.rank}
                </span>
              </div>
              
              <h3 className="text-lg sm:text-xl font-bold text-black mb-2">{activity.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                {activity.description}
              </p>
              
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 text-[10px] text-gray-400 font-black uppercase tracking-widest pt-4 border-t border-gray-100">
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
