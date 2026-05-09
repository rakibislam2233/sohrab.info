import { Briefcase, Camera, Globe, Send } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#fafafa] border-t border-gray-100 pt-16 sm:pt-20 pb-10">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-12 mb-12 sm:mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-2xl font-bold tracking-tight text-black mb-4 sm:mb-6 block">
              Sohrab.
            </Link>
            <p className="text-gray-500 max-w-md mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
              Journalist, Traveler, and Scout Leader. Capturing the essence of Bangladesh through stories and community service.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <SocialLink href="https://facebook.com/sohrab49" icon={<Globe className="w-5 h-5" />} />
              <SocialLink href="https://instagram.com/sohrab_shrb" icon={<Camera className="w-5 h-5" />} />
              <SocialLink href="https://linkedin.com/in/sohrab49" icon={<Briefcase className="w-5 h-5" />} />
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-black mb-4 sm:mb-6 uppercase tracking-wider text-xs">Explore</h4>
            <ul className="grid gap-3 sm:gap-4 text-sm sm:text-base">
              <FooterLink href="/work">Work</FooterLink>
              <FooterLink href="/experience">Experience</FooterLink>
              <FooterLink href="/journalism">Journalism</FooterLink>
              <FooterLink href="/scout">Scouting</FooterLink>
              <FooterLink href="/travel">Travel Stories</FooterLink>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-black mb-4 sm:mb-6 uppercase tracking-wider text-xs">Newsletter</h4>
            <p className="text-sm text-gray-500 mb-5 sm:mb-6">Receive exclusive stories and updates directly in your inbox.</p>
            <form className="relative">
              <input 
                type="email" 
                placeholder="Your email" 
                className="w-full bg-white border border-gray-200 rounded-full py-3 pl-4 pr-12 sm:px-6 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all"
              />
              <button className="absolute right-1 top-1 bg-black hover:bg-gray-800 text-white p-2 rounded-full transition-colors">
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 sm:pt-10 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-gray-400">
          <p className="text-center sm:text-left">© {currentYear} Sohrab Hossan. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
            <Link href="/privacy" className="hover:text-black transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-black transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-black hover:text-white hover:border-black transition-all duration-300"
    >
      {icon}
    </a>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-gray-500 hover:text-black transition-colors block py-0.5">
        {children}
      </Link>
    </li>
  );
}
