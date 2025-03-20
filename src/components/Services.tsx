
import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Film, Youtube, Briefcase, Instagram, Clock, Star, PenTool, BarChart } from 'lucide-react';

const services = [
  {
    icon: <Film className="text-highlight" size={28} />,
    title: 'Commercial Video Editing',
    description: 'Polished, professional edits for brand commercials that convert viewers into customers.',
  },
  {
    icon: <Youtube className="text-highlight" size={28} />,
    title: 'YouTube Content',
    description: 'Engaging edits optimized for YouTube's algorithm with perfect pacing and retention hooks.',
  },
  {
    icon: <Briefcase className="text-highlight" size={28} />,
    title: 'Corporate Videos',
    description: 'Clear, concise corporate messaging that elevates your brand image and communicates values.',
  },
  {
    icon: <Instagram className="text-highlight" size={28} />,
    title: 'Social Media Content',
    description: 'Scroll-stopping short-form content perfectly optimized for each social platform.',
  },
  {
    icon: <Clock className="text-highlight" size={28} />,
    title: 'Quick Turnaround Edits',
    description: 'Fast, efficient editing services when you need quality content on a tight deadline.',
  },
  {
    icon: <Star className="text-highlight" size={28} />,
    title: 'Motion Graphics',
    description: 'Custom animations and motion graphics that enhance your videos and reinforce your brand.',
  },
  {
    icon: <PenTool className="text-highlight" size={28} />,
    title: 'Color Grading',
    description: 'Professional color correction and grading to establish mood and visual consistency.',
  },
  {
    icon: <BarChart className="text-highlight" size={28} />,
    title: 'Analytics & Optimization',
    description: 'Data-driven video optimization to maximize engagement and conversion metrics.',
  },
];

const Services = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section id="services" className="section-padding bg-secondary/30 dark:bg-secondary/5">
      <div 
        ref={ref}
        className={`container mx-auto transition-opacity duration-700 ease-out ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="text-center mb-16">
          <h2 className="section-heading">My <span className="highlight-text">Services</span></h2>
          <p className="section-subheading mx-auto">
            Professional video editing services tailored to elevate your visual storytelling and engage your audience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`glassmorphism p-6 rounded-2xl transition-all duration-500 hover:shadow-lg dark:hover:shadow-highlight/5 hover:translate-y-[-5px] ${
                isVisible ? 'animate-fade-in' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="rounded-lg inline-flex p-3 bg-secondary/50 dark:bg-secondary mb-5">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
