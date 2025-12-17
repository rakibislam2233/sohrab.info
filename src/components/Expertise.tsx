'use client';
import React from 'react';
import { ServiceItem } from '@/types';
import { FileText, Rocket, Users } from 'lucide-react';

interface ServiceWithIcon extends ServiceItem {
  IconComponent: React.ComponentType<{ className?: string; size?: number | string }>;
}

const services: ServiceWithIcon[] = [
  {
    title: 'Journalism',
    description: 'Investigative reporting and storytelling that sheds light on community issues.',
    IconComponent: FileText,
    color: 'text-blue-500',
    bgColor: 'bg-blue-100 dark:bg-blue-900/30'
  },
  {
    title: 'Business Dev',
    description: 'Strategic planning and partnership building for tech startups like JV AI.',
    IconComponent: Rocket,
    color: 'text-purple-500',
    bgColor: 'bg-purple-100 dark:bg-purple-900/30'
  },
  {
    title: 'Community',
    description: 'Mobilizing teams for disaster management and social welfare through Scouting.',
    IconComponent: Users,
    color: 'text-teal-500',
    bgColor: 'bg-teal-100 dark:bg-teal-900/30'
  }
];

const Expertise: React.FC = () => {
  return (
    <section className="py-24 bg-white dark:bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-600 dark:text-blue-400 font-bold text-sm tracking-wider uppercase">Core Competencies</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            Expertise that drives impact
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-2xl border border-border hover:border-blue-500/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-xl ${service.bgColor} flex items-center justify-center mb-6`}>
                <service.IconComponent className={`${service.color}`} size={24} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;