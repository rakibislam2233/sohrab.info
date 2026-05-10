"use client";
import React from "react";
import { Heart, Calendar, Building2, ArrowRight, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import PageBanner from "../../components/ui/PageBanner";
import Reveal from "../../components/ui/Reveal";
import PhotoGallery from "../../components/ui/PhotoGallery";

const works = [
  {
    id: "1",
    title: "Winter Relief Distribution 2020",
    slug: "winter-relief-2020",
    description:
      "Organized and participated in a large-scale blanket distribution for the elderly and underprivileged people in Thakurgaon district.",
    organization: "Thakurgaon Govt. College Rover Scout Group",
    date: "Jan 2020",
    image:
      "https://lh3.googleusercontent.com/sitesv/AA5AbUBC3eDX-izt7AFNwcnl1yMjiL0xDONAbxgxWGftORflHuqlp2xxN7gkS0rIDBYyNxLBuqVAMsgZfIUNZjyIkNNoBgHl4l24jRbRA2rsdO8pjq0I2plYhpTCkZmOiDzMns1Onp4ttUy2fxKF2Kqu9u3m-gb5ygDrZWVyR0tYEbeI4LCq9kJO0aNtZx1foPBrj_Z-HNL9r1uCkK02eOzcaco_OFEUmoj8vuCW3k=w1280",
  },
  {
    id: "2",
    title: "Environmental Service Campaign",
    slug: "environmental-service",
    description:
      "Actively involved in tree plantation campaigns and waste management awareness programs across Thakurgaon.",
    organization: "Bangladesh Scouts",
    date: "Jul 2020",
    image:
      "https://lh3.googleusercontent.com/sitesv/AA5AbUAVxk0gLpJKeeGL2iOivcsWizHT8T1crl7Fcet-S6SnwX4VJT8G3HWv8OQLBjhT6y3DYBO0aVfu_xrbJ00VCy8_WlZhucnOj7A0Fe_H0Ar7afV4hRMq_PkbOFrOnf3f1dQI7mdy-aPAggfoULnaJsxfclii6vwA3AFEQHFBy5-m7vqHjq4RMS_a0wOy4R_SppZI18NUwH2CUT75_CvNuUGUscvAJEw8czpI=w1280",
  },
  {
    id: "3",
    title: "Health Awareness & Medical Camp",
    slug: "health-camp",
    description:
      "Assisting medical professionals in providing basic health checkups and distributing medicines to rural communities.",
    organization: "Voluntary Service Group",
    date: "Mar 2021",
    image:
      "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=1000",
  },
];

const galleryImages = [
  {
    url: "https://lh3.googleusercontent.com/sitesv/AA5AbUBC3eDX-izt7AFNwcnl1yMjiL0xDONAbxgxWGftORflHuqlp2xxN7gkS0rIDBYyNxLBuqVAMsgZfIUNZjyIkNNoBgHl4l24jRbRA2rsdO8pjq0I2plYhpTCkZmOiDzMns1Onp4ttUy2fxKF2Kqu9u3m-gb5ygDrZWVyR0tYEbeI4LCq9kJO0aNtZx1foPBrj_Z-HNL9r1uCkK02eOzcaco_OFEUmoj8vuCW3k=w1280",
    caption: "Relief distribution in progress",
    category: "Social Work",
  },
  {
    url: "https://lh3.googleusercontent.com/sitesv/AA5AbUAVxk0gLpJKeeGL2iOivcsWizHT8T1crl7Fcet-S6SnwX4VJT8G3HWv8OQLBjhT6y3DYBO0aVfu_xrbJ00VCy8_WlZhucnOj7A0Fe_H0Ar7afV4hRMq_PkbOFrOnf3f1dQI7mdy-aPAggfoULnaJsxfclii6vwA3AFEQHFBy5-m7vqHjq4RMS_a0wOy4R_SppZI18NUwH2CUT75_CvNuUGUscvAJEw8czpI=w1280",
    caption: "Planting trees for a greener future",
    category: "Environment",
  },
  {
    url: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1000",
    caption: "Supporting local children with education",
    category: "Education",
  },
  {
    url: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=1000",
    caption: "Medical aid camp coordination",
    category: "Health",
  },
  {
    url: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb8?auto=format&fit=crop&q=80&w=1000",
    caption: "Fundraising event for rural schools",
    category: "Community",
  },
  {
    url: "https://images.unsplash.com/photo-1459183885447-df53d1f0ed95?auto=format&fit=crop&q=80&w=1000",
    caption: "Workshop on skill development",
    category: "Education",
  },
  {
    url: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&q=80&w=1000",
    caption: "Community clean-up drive",
    category: "Environment",
  },
];

const VoluntaryWorkPage = () => {
  return (
    <main className="min-h-screen bg-white pb-24">
      <PageBanner
        title="Voluntary Work"
        subtitle="Giving back to the heart of Bangladesh. Dedicated to community service, pandemic relief, and social welfare."
        badge="Social Servant"
        icon={Heart}
      />

      <div className="container mx-auto px-4 mt-16">
        {/* Gallery Section */}
        <section className="mb-24">
          <Reveal>
            <div className="flex flex-col items-start mb-10">
              <span className="text-black font-bold uppercase tracking-[0.2em] text-[10px] mb-2 border-l-2 border-black pl-3">
                Service In Action
              </span>
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                <Heart className="text-black" size={20} />
                Impact Gallery
              </h2>
            </div>
          </Reveal>

          <PhotoGallery images={galleryImages} />
        </section>

        {/* Work Cards Section */}
        <section>
          <Reveal>
            <div className="flex flex-col items-start mb-10">
              <span className="text-black font-bold uppercase tracking-[0.2em] text-[10px] mb-2 border-l-2 border-black pl-3">
                Recent Projects
              </span>
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                <Building2 className="text-black" size={20} />
                Voluntary Initiatives
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {works.map((work, i) => (
              <Reveal key={work.id} delay={i * 0.1}>
                <Link
                  href={`/voluntary-work/${work.slug}`}
                  className="group block h-full"
                >
                  <div className="bg-white rounded overflow-hidden border border-gray-100 shadow-none transition-all duration-500 hover:border-black flex flex-col h-full">
                    <div className="relative aspect-16/10 overflow-hidden">
                      <Image
                        src={work.image}
                        alt={work.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-2 py-0.5 bg-white/90 backdrop-blur-md text-black text-[8px] font-bold uppercase tracking-wider rounded-sm border border-gray-100">
                          <MapPin size={10} /> {work.date}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 flex flex-col grow">
                      <div className="text-[10px] font-bold text-black uppercase tracking-widest mb-3 flex items-center gap-2">
                        <Building2 size={12} /> {work.organization}
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-black transition-colors leading-tight">
                        {work.title}
                      </h3>
                      <p className="text-gray-500 text-xs leading-relaxed mb-6 line-clamp-3">
                        {work.description}
                      </p>

                      <div className="mt-auto pt-4 border-t border-gray-50 flex items-center text-black text-[10px] font-bold group-hover:gap-3 gap-2 transition-all uppercase tracking-widest">
                        View Details <ArrowRight size={14} />
                      </div>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default VoluntaryWorkPage;
