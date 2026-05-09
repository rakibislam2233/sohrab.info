import PageBanner from "../../components/ui/PageBanner";
import type { Metadata } from "next";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export const metadata: Metadata = { title: "Contact — Sohrab Hossan" };

export default function Contact() {
  return (
    <main className="min-h-screen bg-white pt-0 pb-20">
      <PageBanner 
        title="Contact" 
        badge="Let's Connect"
        themeColor="bg-[#fff0f6]"
        textColor="text-[#7a1c4a]"
      />
      <div className="container mx-auto px-6 mt-24">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Info */}
          <div className="space-y-12">
            <ContactMethod 
              icon={<Mail className="w-6 h-6 text-pink-600" />} 
              label="Email" 
              value="sohrabhossan@gmail.com" 
              href="mailto:sohrabhossan@gmail.com"
            />
            <ContactMethod 
              icon={<Phone className="w-6 h-6 text-blue-600" />} 
              label="Phone" 
              value="+880 1704 296649" 
              href="tel:+8801704296649"
            />
            <ContactMethod 
              icon={<MapPin className="w-6 h-6 text-emerald-600" />} 
              label="Location" 
              value="Rampura, Dhaka, Bangladesh" 
              href="https://maps.google.com/?q=Rampura,Dhaka"
            />
          </div>

          {/* Contact Form Placeholder */}
          <div className="bg-[#fafafa] p-10 rounded-3xl border border-gray-100">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  placeholder="Name" 
                  className="w-full bg-white border border-gray-100 rounded-2xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all"
                />
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full bg-white border border-gray-100 rounded-2xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all"
                />
              </div>
              <input 
                type="text" 
                placeholder="Subject" 
                className="w-full bg-white border border-gray-100 rounded-2xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all"
              />
              <textarea 
                placeholder="Message" 
                rows={5}
                className="w-full bg-white border border-gray-100 rounded-2xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all resize-none"
              ></textarea>
              <button className="w-full bg-black hover:bg-gray-800 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-colors">
                Send Message
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

function ContactMethod({ icon, label, value, href }: { icon: React.ReactNode, label: string, value: string, href: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group">
      <div className="w-14 h-14 bg-[#fafafa] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <div>
        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">{label}</p>
        <p className="text-xl font-bold text-black">{value}</p>
      </div>
    </a>
  );
}
