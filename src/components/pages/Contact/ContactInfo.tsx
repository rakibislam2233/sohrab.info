import { Mail } from "lucide-react";
import { MdCall, MdLocationOn } from "react-icons/md";

const ContactInfo = () => {
  return (
    <div className="lg:col-span-5 space-y-6">
      <div className="glass-panel rounded-2xl p-6 sm:p-8 space-y-8 relative overflow-hidden group">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div>
          <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            Contact Details
          </h2>
          <div className="space-y-6 relative z-10">
            <div className="flex items-start gap-4 group/item">
              <div className="shrink-0 size-12 rounded-xl bg-navy-950 border border-white/5 flex items-center justify-center text-blue-400 group-hover/item:text-white group-hover/item:bg-blue-600 transition-all duration-300 shadow-lg">
                <MdCall className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
                  Phone
                </p>
                <a
                  href="tel:+8801704296649"
                  className="text-white hover:text-blue-400 font-medium text-lg transition-colors block"
                >
                  +880 1704-296649
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 group/item">
              <div className="shrink-0 size-12 rounded-xl bg-navy-950 border border-white/5 flex items-center justify-center text-blue-400 group-hover/item:text-white group-hover/item:bg-blue-600 transition-all duration-300 shadow-lg">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
                  Emails
                </p>
                <a
                  href="mailto:press.sohrab@gmail.com"
                  className="text-white hover:text-blue-400 transition-colors block mb-1"
                >
                  press.sohrab@gmail.com
                </a>
                <a
                  href="mailto:sitolhaua77@gmail.com"
                  className="text-slate-300 hover:text-blue-400 transition-colors block text-sm"
                >
                  sitolhaua77@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 group/item">
              <div className="flex-shrink-0 size-12 rounded-xl bg-navy-950 border border-white/5 flex items-center justify-center text-blue-400 group-hover/item:text-white group-hover/item:bg-blue-600 transition-all duration-300 shadow-lg">
                <MdLocationOn className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
                  Address
                </p>
                <p className="text-white leading-relaxed">
                  Wireless Gate, Mohakhali,
                  <br />
                  Dhaka-1212
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-white/5">
          <p className="text-sm font-medium text-slate-400 mb-4">
            Connect with me
          </p>
          <div className="flex gap-3">
            <a
              href="#"
              className="size-11 rounded-lg bg-navy-950 border border-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500/50 hover:bg-blue-700 transition-all duration-300 group/icon shadow-lg"
            >
              <span className="text-[22px] group-hover/icon:scale-110 transition-transform">
                work
              </span>
            </a>
            <a
              href="#"
              className="size-11 rounded-lg bg-navy-950 border border-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-500/50 hover:bg-slate-700 transition-all duration-300 group/icon shadow-lg"
            >
              <span className="text-[22px] group-hover/icon:scale-110 transition-transform">
                code
              </span>
            </a>
            <a
              href="#"
              className="size-11 rounded-lg bg-navy-950 border border-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:border-sky-500/50 hover:bg-sky-500 transition-all duration-300 group/icon shadow-lg"
            >
              <span className="text-[22px] group-hover/icon:scale-110 transition-transform">
                share
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Map Card */}
      <div className="rounded-2xl overflow-hidden border border-white/5 h-56 relative group shadow-2xl">
        <img
          alt="Dhaka Map"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsvxhUs18pR3l1ouFi7BE-x9PMCIY_NxCZFpNodin9XsFM0zgWQmIkclR-5vgGyfC454KVnrbTJ9kIDVneormvpgQ4GfL2w9C-v51EhwKkyC4rEiAlJwd__cO8qjZKD6JXmJ228khP6jzDuAxdzlt7yInenCvhMCCRumL5j04EEMetWvV5KOLFiL_7eY2WBiZGewPiqoopnxhhJ9UjUHSw5Uwv2p_3adJqd9IGjP5r3UtbvtIHZYZInwfTBvRr0u9oRnVSa9hLoUE"
          className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/20 to-transparent pointer-events-none"></div>
        <div className="absolute bottom-4 left-4 bg-navy-800/90 backdrop-blur-md border border-white/10 px-3 py-2 rounded-lg flex items-center gap-3 shadow-xl">
          <div className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
          </div>
          <div className="leading-tight">
            <span className="block text-xs font-bold text-white">
              Dhaka, Bangladesh
            </span>
            <span className="block text-[10px] text-slate-400">
              Local Time: GMT+6
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
