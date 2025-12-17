import Image from "next/image";

const initiatives = [
  {
    title: "Disaster Relief",
    period: "2019 - 2022",
    desc: "Frontline response during Sylhet floods and Cyclone Sitrang. Managed emergency food supply chains for 500+ affected families.",
    tags: ["Flood Response", "Logistics"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD2HoOl_8yxj6wFiHVDX3THO3Kp37AIPUPDnmO4gXsxl9YPvmQum6OSzMlygEZpKOrnGlTyLh8E7UThc8FAKgxEPMClpi-npEXKhTlsIj3vtWJ6mthDeOnw2hMTODCxdzTEoEfzlQGOB3BaZJ2kzShUZazzW9NFMTVRWSMqDR0_2IJq7hq_Y7ttWgJjVzf5Is0VTVusfjk3sRPEaK6ydttBD6OwNBzpvbynsWShTAz8Sj9MYFrkX3Eh2SkPcYmZvHkMgn5822rhRoM",
  },
  {
    title: "COVID-19 Relief",
    period: "2020 - 2021",
    desc: "Conducted awareness campaigns, distributed masks, and supported vaccination drives in remote unions to ensure public safety.",
    tags: ["Public Health", "Community"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC5sW5nqxgiA4p7OZB8FCI0t4DBIJXvIGxXmdiMeSnZsrX5IiHiIw3fdkngzcV0tp7u-lns87HK0sOoPp8S5DNuheM-Ja0iaPBYlfxlcfU9G_DopnRmoH39Br3CV0OaVZrWTiipsW9jQp-onoYrTSPoTxBiTzHtBMRf8zuR9bDUznXndXStOfEbapCSFCEinPigjk2fJARR1yfHxXhJf7O-IRXIIK2aEiufyHGlykDbYtnl8333fNjJYJEN8BQJRfpgttrXqShi44U",
  },
  {
    title: "Seasonal Support",
    period: "Annual",
    desc: 'Organizing "Winter Warmth" cloth distribution drives and Ramadan food package distribution for low-income households.',
    tags: ["Winterisation", "Food Security"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB7-ZnVHbcdcGUTcJ3Blch5srbKV4azHzkw15lbcQRHbbsx3MkBVYGmCEaRLWqRdlk1EQiydwQpSbhgsbjIKEM9uue6ohSxdkIrImGOHfsXAcpyGIudkTKJVcKFn81EC4m3nzFb9gdNC_JOMP3elc-AVJXph254fXB8SArcDETZO-c-iGb5Ul1iKueHVA-pItca48ZEKqe0TIjhwT6CcJOJ6aC79l5sbTCPlxeIhOGY_pcbbOiS2D7FD3GtJ2qy-x0Jz1xaZINVbjY",
  },
  {
    title: "Child Protection",
    period: "2021 - Present",
    desc: "Advocating for child rights and facilitating workshops on safety and education in underprivileged communities.",
    tags: ["Education", "Rights"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuByET5WhbaYnoHP0ALXV46Cl7ZxF5PueHB5NdspF3N9anOT3dpzbhZgsRCXLCGHS_lahCez8MUS2i711tmmRd0o8i_u4Xg-y50XOKSdaFdolj_TIZ7NyqVb21XQBqikhXEn9stl51QrC5oJC1GrL-GhC3eYqXpSsui5S6blDjngO3R4hnwqcGydmgaOCXIVMrcIWsJO0GpGc_XQf2S2cGlNGWB_EBZ_AonLx2L02IDsNfNR6-6vjhWegx_bDDQ2MmBpwXUy18ZoSB0",
  },
  {
    title: "Remote Field Work",
    period: "Ongoing",
    desc: "Extensive travel to remote districts to assess community needs and implement sustainable development projects.",
    tags: ["Survey", "Analysis"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAZmQ_UPgaOseAjeJ2Rn-F24478FqDFinIO24JP_wZxOI-oD9Qkl2CWE-bWWWREnME91-v0IQ9SsURVXMD7ApV3WIZPnXIamtXKnHd9w51-TWUm8eAr4Hj5tnhjkRQixctmoalowpgVVyMXVpusGdxZaphsJmXiVE0UZTxSiG4-CM7pisRjcQBr1c8OOga7vPNiFCqgdjLN2L_-yjLbv2ct3emwSke6HlMC-W0GDP1JoT2ZlvrT7ettSDc6Lm62G-G6CCuJ9R2YmTE",
  },
];

const ImpactInitiatives = () => {
  return (
    <section className="flex justify-center px-4 md:px-10 py-24">
      <div className="layout-content-container flex flex-col max-w-7xl w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="flex flex-col gap-4">
            <h2 className="text-white text-3xl md:text-4xl font-bold">
              Impact Initiatives
            </h2>
            <p className="text-text-muted max-w-2xl font-light">
              Beyond scouting, my voluntary work spans across critical areas
              including disaster response, public health crises, and seasonal
              community support.
            </p>
          </div>
          <a
            className="text-primary text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all"
            href="#"
          >
            View All Projects →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {initiatives.map((init, i) => (
            <div
              key={i}
              className="group flex flex-col rounded-2xl bg-card-dark border border-border-dark overflow-hidden transition-all hover:-translate-y-2 hover:shadow-xl hover:shadow-black/40"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={init.image}
                  alt={init.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card-dark via-transparent to-transparent opacity-80"></div>
              </div>
              <div className="flex flex-col flex-1 p-6 gap-4 -mt-10 relative z-10">
                <div className="flex justify-between items-center">
                  <h3 className="text-white text-xl font-bold group-hover:text-primary transition-colors">
                    {init.title}
                  </h3>
                  <span className="text-[10px] font-bold text-text-muted bg-white/5 px-2 py-1 rounded border border-white/10">
                    {init.period}
                  </span>
                </div>
                <p className="text-text-muted text-sm leading-relaxed line-clamp-3">
                  {init.desc}
                </p>
                <div className="mt-auto pt-4 border-t border-border-dark flex flex-wrap gap-2">
                  {init.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="text-[10px] font-bold text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactInitiatives;
