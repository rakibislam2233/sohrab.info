import Image from "next/image";
import { MdFormatQuote } from "react-icons/md";

const QuoteBanner = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
      <div className="relative rounded-[2rem] overflow-hidden bg-card border border-border group">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent z-10"></div>
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHHViY1tYm5xnBf3VUzozahylmP-GUA3qKEpxuJIjIwplKqdeqxw8BeJYmSo04tbx9rV-6e-P05h3CXkAyj4LGFLPijhvC5ewg_o1VEbL11S5GqjBsUdpgVf1KpDQfvhmwGtr-iZIL8EGgUHNw2JDQp9lUKrQJDKkb-yEtWw6tEAnIHx8kbAVMP9MoG7kf166-0ICEtpUSnMH6syrllhU-Kopq-HpvITh1i7Aa6ROcQx2DtoJ4eEOJU3GZcojV23AbA84RPSXCQMs"
          alt="Leadership concept"
          width={1400}
          height={500}
          className="w-full h-[500px] object-cover opacity-50 mix-blend-overlay group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 z-20 flex flex-col justify-center px-8 md:px-16 max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-10 h-1 bg-blue-500 rounded-full"></span>
            <span className="text-blue-400 font-bold tracking-widest uppercase text-xs">
              Philosophy
            </span>
          </div>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
            "Leadership is not about being in charge. It is about taking care of
            those in your charge."
          </h3>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 border border-slate-700">
              <MdFormatQuote className="w-6 h-6" />
            </div>
            <div>
              <p className="text-white font-bold">Simon Sinek</p>
              <p className="text-muted text-sm">Inspiration</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteBanner;
