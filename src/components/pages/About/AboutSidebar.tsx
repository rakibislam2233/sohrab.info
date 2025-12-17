import Image from "next/image";
import {
  MapPin,
  Mail,
  Facebook,
  Twitter,
  Github,
  Languages,
} from "lucide-react";

const AboutSidebar = () => {
  return (
    <div className="lg:col-span-4 space-y-6">
      <div className="bg-card rounded-2xl p-6 border border-border shadow-xl">
        <div className="aspect-square w-full rounded-xl overflow-hidden mb-6 relative group">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOslVvpaMSWGeA-sE8RsJIzb8N4lrxT9K24rWxlkdWG1gbwFjSkWLUqqzFQ-Pbqst2lpKfEmMCvkt7vRnQ68C6OpoPTvNwlcdArYLLb05XzP_02XHe5HA4wMkgi_nGt65IqiWT-Mbp_TCB8ocO2M_lWuHc8pf1Um_T0x3lvNJ8s5XCc_VX_Zh0_myEkdKqyCeMLrenZYTkiPXQMtA7gpoBbZfl7xStq_Arzl1ko6gEa_fJzgxCa0AVYWzXB7nE2uFeVRjNLTtABVw"
            alt="Sohrab Hossan"
            width={400}
            height={400}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
            <span className="text-white text-sm font-medium">
              Available for hire
            </span>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-foreground mb-1">
          Sohrab Hossan
        </h3>
        <p className="text-primary font-medium mb-6">
          Full Stack Developer & Biologist
        </p>

        <div className="space-y-4">
          <div className="flex items-center gap-3 text-muted-foreground">
            <MapPin className="w-5 h-5 text-primary" />
            <span>Dhaka, Bangladesh</span>
          </div>
          <div className="flex items-center gap-3 text-muted-foreground">
            <Mail className="w-5 h-5 text-primary" />
            <span>contact@sohrabhossan.com</span>
          </div>
          <div className="flex items-center gap-3 text-muted-foreground">
            <Languages className="w-5 h-5 text-primary" />
            <span>English, Bengali</span>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border">
          <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
            Social Profiles
          </h4>
          <div className="flex gap-3">
            <a
              href="#"
              className="h-10 w-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="h-10 w-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="h-10 w-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSidebar;
