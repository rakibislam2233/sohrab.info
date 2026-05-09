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
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <Reveal>
          <div className="max-w-2xl mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Voluntary Work</h2>
            <p className="text-lg text-gray-500">
              Giving back to the community through environmental and humanitarian initiatives.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {works.map((work, index) => (
            <Reveal key={work.id} delay={index * 0.1}>
              <div className="group">
                <div className="relative aspect-video mb-8 overflow-hidden rounded-3xl bg-gray-100">
                  {work.image && (
                    <Image
                      src={work.image}
                      alt={work.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  )}
                  <div className="absolute top-6 left-6">
                    <span className="bg-white/90 backdrop-blur-sm text-black px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                      <Heart className="w-3 h-3 text-red-500" />
                      Social Service
                    </span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">{work.title}</h3>
                <p className="text-gray-500 leading-relaxed">{work.description}</p>
                <div className="mt-4 text-sm font-bold text-gray-400">
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
