import Image from "next/image";
import { MdEmojiEvents, MdMedicalServices, MdSecurity } from "react-icons/md";
const ScoutingSection = () => {
  return (
    <section className="flex justify-center px-4 md:px-10 py-24 bg-[#0D1424] border-y border-border-dark">
      <div className="layout-content-container flex flex-col max-w-7xl w-full">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="flex flex-col gap-8 lg:w-1/3 lg:sticky lg:top-32">
            <div className="inline-flex items-center gap-2 rounded-lg bg-primary/10 border border-primary/20 px-3 py-1 text-xs font-bold text-primary uppercase tracking-wide w-fit">
              <span className="text-sm">★</span>
              Core Experience
            </div>
            <div>
              <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight mb-4">
                A Lifetime of <br />
                <span className="text-primary">Scouting</span>
              </h2>
              <p className="text-text-muted text-base leading-relaxed font-light">
                From a young cub scout to a Patrol Leader, my journey with
                Bangladesh Scouts has been the foundation of my leadership
                values. It taught me discipline, service before self, and the
                power of unity.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
                <div className="h-10 w-10 rounded-full bg-card-dark border border-border-dark flex items-center justify-center text-primary">
                  <MdSecurity className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white text-sm font-semibold">
                    Patrol Leader
                  </h4>
                  <p className="text-text-secondary text-xs">
                    Led teams of 8-12 scouts
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
                <div className="h-10 w-10 rounded-full bg-card-dark border border-border-dark flex items-center justify-center text-primary">
                  <MdMedicalServices className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white text-sm font-semibold">
                    First Aid Certified
                  </h4>
                  <p className="text-text-secondary text-xs">
                    Expertise in emergency response
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
                <div className="h-10 w-10 rounded-full bg-card-dark border border-border-dark flex items-center justify-center text-primary">
                  <MdEmojiEvents className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white text-sm font-semibold">
                    National Jamboree
                  </h4>
                  <p className="text-text-secondary text-xs">
                    Participant & Volunteer
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:w-2/3">
            <div className="group flex flex-col gap-4 p-5 rounded-2xl bg-card-dark border border-border-dark hover:border-primary/40 transition-all hover:shadow-lg hover:shadow-primary/5">
              <div className="w-full h-56 rounded-xl bg-cover bg-center overflow-hidden relative">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZMwcOO91E1kHxJCznThwbWL8qZ8FekLpl89lwt2k5lrVgU-wn93DoUnhuLdAtUvf70WQvyLH4ktJ79KYWcNHO4_ZScpB50zlQ6WEId8UtRQ0ZXW9UBzKAAv3mti1iZtsQFwnRHzf3a_ATLiOtUMu3aYaa3CUgVLgyFj_Z1gW66maDZane5OXuwghPvzCgfus371H3gB_HKMa4hiTEdkJo3-661i93BSD8eUrKk-MrphbE8zOEXdO-jX2TqDzGRBKT7T61kA2aA1M"
                  alt="Scouts setting up tents"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-background-dark/20 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-white text-xl font-bold group-hover:text-primary transition-colors">
                  Leadership & Mentorship
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  Leading patrol teams during national jamborees and training
                  junior scouts in survival skills, knotting, and pioneering.
                </p>
              </div>
            </div>

            <div className="group flex flex-col gap-4 p-5 rounded-2xl bg-card-dark border border-border-dark hover:border-primary/40 transition-all hover:shadow-lg hover:shadow-primary/5">
              <div className="w-full h-56 rounded-xl bg-cover bg-center overflow-hidden relative">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJgc5h3Kjzy4xWAA9FqRpvN6wZPKIPyUyl8UOSAu7qXkj4ppXR6iQRt5lQlO0dt6at0uYqM_l7eyUCdFH3OedW2U9GNz3zsg_eHTe6jlVpBylR4KJsHG5E4FOvBfxAG54tkyNw7gjYVb-bANw4N8r3RIolP_rG6UU9J9CGMgXvzmu_ejEpTbiAsmbzQwirxU0AQslaRgw4rEMRYIu0B0YMTRGMynBmWYbR8ttanKQXXbTe2Ejgepv2ycshv-OLX-f4lA4B1mcnjvE"
                  alt="Group of people providing humanitarian aid"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-background-dark/20 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-white text-xl font-bold group-hover:text-primary transition-colors">
                  Field Operations
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  Coordinating on-ground logistics for large scout gatherings
                  and community service events, ensuring smooth execution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScoutingSection;
