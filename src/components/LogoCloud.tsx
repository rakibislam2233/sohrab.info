'use client';
import React from 'react';
import { Newspaper, ToyBrick, HeartHandshake, Globe } from 'lucide-react';

const LogoCloud: React.FC = () => {
  return (
    <section className="py-12 border-y border-border bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-bold text-muted-foreground uppercase tracking-widest mb-8">
          Associated Organizations & Media
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="flex items-center gap-2 group">
            <Newspaper className="text-3xl group-hover:text-blue-600 transition-colors" />
            <span className="text-xl font-bold text-foreground">Protidiner</span>
          </div>
          <div className="flex items-center gap-2 group">
            <ToyBrick className="text-3xl group-hover:text-purple-600 transition-colors" />
            <span className="text-xl font-bold text-foreground">JV AI</span>
          </div>
          <div className="flex items-center gap-2 group">
            <HeartHandshake className="text-3xl group-hover:text-green-600 transition-colors" />
            <span className="text-xl font-bold text-foreground">Scouts</span>
          </div>
          <div className="flex items-center gap-2 group">
            <Globe className="text-3xl group-hover:text-cyan-600 transition-colors" />
            <span className="text-xl font-bold text-foreground">Global News</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoCloud;