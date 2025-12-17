import Image from "next/image";
import { Maximize2, Heart } from "lucide-react";

const photos = [
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuArM2998k-1EFdaNcLCnIeQC0-Vpfe8L-maX8tRef1v0iSfX_xQYkLzSP9nHdqXaMHo_MvP4IuCmTVf6RhiZ8_yXRQ9o3rrDHcLD3Jbfq8RaO3ibllZb6T9D55bpWN-Qe0iiGva4h_-yOjgwa-7YCRaLlRVoT0pzwXHmMvQEgJ32HkisbOoSxtiZ_tohzmXNIijXLTV_qjxQtxwFKNg4mntTjklR7uMQtuyxkxWs0AmILQM_mI_M9ZuaSxWsSOIS_By3b0wwLOApT4",
    title: "National Jamboree 2023",
    tag: "Scouting",
    span: "col-span-1 md:col-span-2 row-span-2",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB21FUMAiQ2ViKjyiWIMoSWxhBeTljAzFQQmSR00nnk4gAn_3DyTGickb8yzvTgrYSkYseBMoDPvNkgGXCPGpKBOAMZI-PGJ4ZQltYnc_qSKryMX09U_VOpylVIVYdsHAeqr3Q8jNi4l4EBGwWRlxq7Q8dC1ULofXDrzp-tbCIHtXaNWK3ChoC4E8OhXKZI_EZlDoeP1egZAa_i9DR_nbuzZef6oXgzpiPvjxBub5XWnO8e9soSgudZLMCUhQ8Vh7031UbPUFsmciw",
    title: "Press Conference",
    tag: "Journalism",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAqPum2xo0ydRh6usMoS2zKcVOL1Db-CiIytCFbmtQAWhBpuHfp7iXhqw-JB8EroO_np759uNrkvIpXpXV2XFNGQbXaUY8yH_dTohDcSBkLwg0cWL8s5wij5stBfGV6_G_Usc4HN0I0f21obUlTwUO0btdXOpzRiH9OfkstaHvxkw5g10wq5p7_MadFE3MKncij9lvGHwdcTI2R15WVOrPHcSBnZByowaRmH4Gwc4Ldo62uRVGZ1myfi614izblbozp3ayYaIN6-jw",
    title: "Tech Summit '22",
    tag: "Event",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBnriHkZuBRkqpZishUskSnDogIIKrVJtV93WRyLv4HaBNUFwSdyXxOkLBFR4qMQjZCJ-Dlu1sTf5lpIXiuZhoORauOSKaBRz_llI2tS_12eduSJLKgu6rNhGoTngwh9hRzg2HGLcSRcpAOweCc5pBXhg444P6SzVGO8xrAfITS1hNSasbDQnwHmlBJiu2XC0aLoEkFMH-jnrV4d_iId4nofzTAsMX1m4tRg5ooHC-hcjEMsmM_qO68hQz2G6Spwd25jCmIH2hwFZo",
    title: "Wilderness Survival",
    tag: "Scouting",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBypt4paQ18YoyldNyAhhPJqdEEn5LMEn08ufMyujBQfaTWk48842NXcR41ar-OShyW0kXLZFgiW2eY8LrFtH0f0-BnfjdUoxkNSyb82prr3FQwdjJX6Byl2oPZ6ptZc32wsrOA9IbMAJrJLRygFRyLzjzyIrsKBKZrWYw-u6bsfUDN1YosBebmpG_UE78qvzvcKtE3AfRYQO_LmyPorGoOjl0l809Ub-fuiobNF77QkS5lHMXXCHISjmHejg9NmEFD3YhnT7LLpEQ",
    title: "Product Launch",
    tag: "Event",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDvPd0usWl1Rbci1paGJb6YBiaLlOn358xGr95qnGtMbR1LARd7JRzrpE5haE9jNZw9LIfs5wj89X3DLGjZiy_H7CGgAYu-jrNuhlwV8EwpAWOORcz60EPt-iAjX0GkRDE21J9kdsOWd0nGZZPtwNnEE9msnWjDU4sDXLHyCt3ubiWy1LO69L7mbdBvyQ_PSO3VHHvXy1O2TYnu9wEM3W-75YiCaSjnuYm7jgGOMHCW8asUzIza_mtFpScfNsXddR2lb1q8K5RIs9Y",
    title: "Daily News Report",
    tag: "Journalism",
    span: "row-span-2",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC1yPlX_7fgcg8CZZ2QSotQ5HUBV6U1cQ2IXp-dviMQbm5MLK_HWpwXITOpBsEoZj3VEpf4RaMi4Ymo6qtzhD-Yz5qYYqjaFUNqMebz_g6HlQDcXNHzG8l4WnAfiuBvt8luCKsx7vZxPAKF-xJccR42H-GY_Qpd-UXcnUmloZLPEOh-VaWFLoXkIKhm7VyK5HsZmh-d836TBL19K0psBcyCAWHZZ9jfZtGQkwrjHiDkzSiAhJkpej5eGK8SdCWonOw_1fTquNGN2cg",
    title: "Campfire Stories",
    tag: "Scouting",
  },
];

const PhotoGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-[350px]">
      {photos.map((photo, i) => (
        <div
          key={i}
          className={`photo-card group relative overflow-hidden rounded-3xl bg-card border border-border ${
            photo.span || ""
          }`}
        >
          <Image
            src={photo.src}
            alt={photo.title}
            width={800}
            height={600}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 gallery-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
            <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <span className="inline-flex items-center px-3 py-1 mb-4 text-xs font-bold tracking-widest text-primary uppercase bg-black/40 backdrop-blur-md rounded-full border border-primary/20">
                {photo.tag}
              </span>
              <h3 className="text-3xl font-bold text-white mb-3">
                {photo.title}
              </h3>
              <p className="text-gray-200 text-base max-w-lg mb-6 leading-relaxed">
                {photo.desc || ""}
              </p>
              <div className="flex gap-4">
                <button className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/10 transition-all">
                  <Maximize2 className="w-5 h-5" />
                </button>
                <button className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/10 transition-all">
                  <Heart className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PhotoGrid;
