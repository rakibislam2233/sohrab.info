import Image from "next/image";
import { ArrowRight, PlayCircle, Briefcase, Trophy } from "lucide-react";
import heroImage from "@/assets/images/hero-image.png";
const Hero = () => {
  return (
    <section className="relative pt-12 pb-24 lg:pt-24 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-8">
              <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-xs font-semibold text-primary tracking-wide uppercase">
                Open to Opportunities
              </span>
              <ArrowRight className="w-3 h-3 text-primary" />
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-foreground mb-6 leading-tight">
              Sohrab{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
                Hossan
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl font-medium text-muted-foreground mb-6">
              Journalist • Business Developer • Scout Leader
            </p>

            {/* Description */}
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Dynamic professional with over 5 years experience in journalism,
              business development, sales, community mobilization, and disaster
              management. Also a passionate Traveler & Enthusiast.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-16">
              <a
                href="#"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-base text-primary-foreground bg-card  border border-border"
              >
                <PlayCircle className="w-5 h-5 mr-2" />
                View Portfolio
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-border  text-foreground "
              >
                Download Resume
              </a>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto lg:mx-0">
              {/* Current Role Card */}
              <div className="group relative p-5 bg-card border border-border rounded-xl  transition-all duration-300 ">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Briefcase className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">
                      Current Role
                    </h3>
                    <p className="font-semibold text-foreground text-sm">
                      Staff Reporter
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Protidiner Bangladesh
                    </p>
                    <div className="h-px w-full bg-border my-2"></div>
                    <p className="font-semibold text-foreground text-sm">
                      Business Dev. Executive
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Joint Venture AI
                    </p>
                  </div>
                </div>
              </div>

              {/* Recognition Card */}
              <div className="group relative p-5 bg-card border border-border rounded-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-amber-500/10 rounded-lg group-hover:bg-amber-500/20 transition-colors">
                    <Trophy className="w-6 h-6 text-amber-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">
                      Recognition
                    </h3>
                    <p className="font-bold text-foreground text-base">
                      Best Rover Scout
                    </p>
                    <p className="text-sm text-primary font-medium mt-1">
                      Awarded 2024
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">
                      Recognized for outstanding leadership and community
                      service excellence.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="lg:col-span-5 mt-12 lg:mt-0 relative">
            {/* Animated Background Blob */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-linear-to-br from-primary to-purple-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>

            {/* Image Container */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-border ring-4 ring-border/50">
              <Image
                src={heroImage.src}
                alt="Sohrab Hossan"
                width={800}
                height={1000}
                className="w-full h-96 object-cover transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
