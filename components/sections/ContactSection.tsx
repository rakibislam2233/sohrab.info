"use client"
import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import Reveal from '../ui/Reveal';

const ContactSection = () => {
  return (
    <section className="py-24 bg-white" id="contact">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Left Side: Contact Info */}
          <div>
            <Reveal>
              <span className="text-pink-600 font-bold uppercase tracking-[0.2em] text-[10px] mb-4 block">Get In Touch</span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 uppercase tracking-tighter">Let's Connect</h2>
              <p className="text-gray-500 text-lg mb-12 max-w-md">
                Have a story to share, a project in mind, or just want to say hi? I'm always open to new opportunities and conversations.
              </p>
            </Reveal>

            <div className="space-y-10">
              <ContactInfo 
                icon={<Mail size={20} />} 
                title="Email Me" 
                detail="sohrab.hossan@example.com" 
                href="mailto:sohrab.hossan@example.com"
                delay={0.1}
              />
              <ContactInfo 
                icon={<Phone size={20} />} 
                title="Call Me" 
                detail="+880 1XXX XXXXXX" 
                href="tel:+8801XXXXXXXXX"
                delay={0.2}
              />
              <ContactInfo 
                icon={<MapPin size={20} />} 
                title="Office Location" 
                detail="Thakurgaon, Bangladesh" 
                href="#"
                delay={0.3}
              />
            </div>
          </div>

          {/* Right Side: Form */}
          <Reveal delay={0.4}>
            <div className="bg-gray-50 p-8 md:p-12 rounded border border-gray-100">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe"
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded text-sm focus:border-pink-600 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded text-sm focus:border-pink-600 outline-none transition-all"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Subject</label>
                  <input 
                    type="text" 
                    placeholder="Inquiry about..."
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded text-sm focus:border-pink-600 outline-none transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Message</label>
                  <textarea 
                    rows={5}
                    placeholder="Your message here..."
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded text-sm focus:border-pink-600 outline-none transition-all resize-none"
                  ></textarea>
                </div>

                <button className="w-full py-4 bg-black text-white rounded font-bold text-xs uppercase tracking-widest hover:bg-pink-600 transition-all duration-300 flex items-center justify-center gap-3 group">
                  Send Message
                  <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

const ContactInfo = ({ icon, title, detail, href, delay }: { icon: React.ReactNode, title: string, detail: string, href: string, delay: number }) => (
  <Reveal delay={delay}>
    <a href={href} className="flex gap-6 items-start group">
      <div className="w-12 h-12 bg-white rounded border border-gray-100 flex items-center justify-center text-gray-400 group-hover:bg-pink-600 group-hover:text-white group-hover:border-pink-600 transition-all duration-300 shadow-sm">
        {icon}
      </div>
      <div>
        <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">{title}</h4>
        <p className="text-gray-900 font-bold group-hover:text-pink-600 transition-colors">{detail}</p>
      </div>
    </a>
  </Reveal>
);

export default ContactSection;
