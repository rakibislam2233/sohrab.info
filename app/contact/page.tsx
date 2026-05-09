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
      <div className="container mx-auto px-6 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <ContactMethod 
              icon={<Mail className="w-5 h-5 text-pink-600" />} 
              label="Email" 
              value="sohrabhossan@gmail.com" 
              href="mailto:sohrabhossan@gmail.com"
            />
            <ContactMethod 
              icon={<Phone className="w-5 h-5 text-blue-600" />} 
              label="Phone" 
              value="+880 1704 296649" 
              href="tel:+8801704296649"
            />
            <ContactMethod 
              icon={<MapPin className="w-5 h-5 text-emerald-600" />} 
              label="Location" 
              value="Rampura, Dhaka, Bangladesh" 
              href="https://maps.google.com/?q=Rampura,Dhaka"
            />
          </div>

          {/* Contact Form Placeholder */}
          <div className="bg-[#fafafa] p-6 rounded border border-gray-100">
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="Name" 
                  className="w-full bg-white border border-gray-100 rounded py-3 px-4 focus:outline-none focus:ring-1 focus:ring-pink-500 transition-all text-sm"
                />
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full bg-white border border-gray-100 rounded py-3 px-4 focus:outline-none focus:ring-1 focus:ring-pink-500 transition-all text-sm"
                />
              </div>
              <input 
                type="text" 
                placeholder="Subject" 
                className="w-full bg-white border border-gray-100 rounded py-3 px-4 focus:outline-none focus:ring-1 focus:ring-pink-500 transition-all text-sm"
              />
              <textarea 
                placeholder="Message" 
                rows={4}
                className="w-full bg-white border border-gray-100 rounded py-3 px-4 focus:outline-none focus:ring-1 focus:ring-pink-500 transition-all resize-none text-sm"
              ></textarea>
              <button className="w-full bg-black hover:bg-gray-800 text-white py-3 rounded font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-2 transition-colors">
                Send Message
                <Send className="w-3.5 h-3.5" />
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
    <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
      <div className="w-10 h-10 bg-[#fafafa] rounded flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-gray-100">
        {icon}
      </div>
      <div>
        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-0.5">{label}</p>
        <p className="text-lg font-bold text-black">{value}</p>
      </div>
    </a>
  );
}
