'use client';
import React from 'react';
import { Facebook, Instagram, Mail, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-blue-600 flex items-center justify-center text-white text-xs font-bold">
              S
            </div>
            <span className="text-foreground font-semibold">
              Sohrab Hossan
            </span>
          </div>

          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground hover:text-blue-500 transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-blue-500 transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-blue-500 transition-colors">
              <Mail size={20} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-blue-500 transition-colors">
              <Linkedin size={20} />
            </a>
          </div>

          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Sohrab Hossan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;