import Reveal from "../ui/Reveal";
import Image from "next/image";
import { Heart } from "lucide-react";

const works = [
  {
    id: '1',
    title: 'Winter Relief Distribution',
    description: 'Organized and participated in a large-scale blanket distribution for the elderly and underprivileged people in Thakurgaon during the extreme cold.',
    organization: 'Thakurgaon Govt. College Rover Scout Group',
    date: '2020-01-14',
    image: 'https://lh3.googleusercontent.com/sitesv/AA5AbUBC3eDX-izt7AFNwcnl1yMjiL0xDONAbxgxWGftORflHuqlp2xxN7gkS0rIDBYyNxLBuqVAMsgZfIUNZjyIkNNoBgHl4l24jRbRA2rsdO8pjq0I2plYhpTCkZmOiDzMns1Onp4ttUy2fxKF2Kqu9u3m-gb5ygDrZWVyR0tYEbeI4LCq9kJO0aNtZx1foPBrj_Z-HNL9r1uCkK02eOzcaco_OFEUmoj8vuCW3k=w1280',
  },
  {
    id: '2',
    title: 'Environmental Service Campaign',
    description: 'Actively involved in tree plantation campaigns across Thakurgaon district to promote ecological balance and sustainability.',
    organization: 'Bangladesh Scouts',
    date: '2020-07-20',
    image: 'https://lh3.googleusercontent.com/sitesv/AA5AbUAVxk0gLpJKeeGL2iOivcsWizHT8T1crl7Fcet-S6SnwX4VJT8G3HWv8OQLBjhT6y3DYBO0aVfu_xrbJ00VCy8_WlZhucnOj7A0Fe_H0Ar7afV4hRMq_PkbOFrOnf3f1dQI7mdy-aPAggfoULnaJsxfclii6vwA3AFEQHFBy5-m7vqHjq4RMS_a0wOy4R_SppZI18NUwH2CUT75_CvNuUGUscvAJEw8czpI=w1280',
  },
];

export default async function VoluntaryWorkSection() {

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6">
        <Reveal>
          <div className="max-w-xl mb-8">
            <h2 className="text-2xl md:text-4xl font-black text-black mb-2 uppercase tracking-tighter">Voluntary Work</h2>
            <p className="text-sm text-gray-500 font-medium">
              Giving back to the community through environmental and humanitarian initiatives.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {works.map((work, index) => (
            <Reveal key={work.id} delay={index * 0.1}>
              <div className="group">
                <div className="relative aspect-video mb-4 overflow-hidden rounded bg-gray-100 border border-gray-100">
                  {work.image && (
                    <Image
                      src={work.image}
                      alt={work.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  )}
                  <div className="absolute top-3 left-3">
                    <span className="bg-white/90 backdrop-blur-sm text-black px-2 py-1 rounded text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5 border border-gray-100">
                      <Heart className="w-2.5 h-2.5 text-red-500" />
                      Social Service
                    </span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-black mb-2">{work.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{work.description}</p>
                <div className="mt-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  {work.organization} • {new Date(work.date).getFullYear()}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
