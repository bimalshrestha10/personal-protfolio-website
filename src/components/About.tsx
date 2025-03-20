
import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Calendar, Award, Briefcase, FileText, Link } from 'lucide-react';

// Skills data
const skills = [
  { name: 'Adobe Premiere Pro', proficiency: 95 },
  { name: 'After Effects', proficiency: 90 },
  { name: 'DaVinci Resolve', proficiency: 85 },
  { name: 'Final Cut Pro', proficiency: 80 },
  { name: 'Motion Graphics', proficiency: 75 },
  { name: 'Color Grading', proficiency: 85 },
  { name: 'Audio Editing', proficiency: 80 },
  { name: 'Storytelling', proficiency: 90 },
];

// Timeline data
const timeline = [
  {
    year: '2023',
    title: 'Lead Video Editor',
    company: 'Creative Media Studios',
    description: 'Led a team of editors creating content for major brands, specializing in commercial and corporate videos.',
  },
  {
    year: '2021',
    title: 'Senior Video Editor',
    company: 'Digital Storytellers',
    description: 'Edited documentary and branded content for streaming platforms and social media campaigns.',
  },
  {
    year: '2019',
    title: 'Video Editor',
    company: 'Viral Content Agency',
    description: 'Created engaging content for social media platforms, focusing on short-form viral videos.',
  },
  {
    year: '2017',
    title: 'Junior Editor',
    company: 'StartUp Productions',
    description: 'Started career editing promotional videos and assisting senior editors with various projects.',
  },
];

const About = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section id="about" className="section-padding">
      <div 
        ref={ref}
        className={`container mx-auto transition-opacity duration-700 ease-out ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="text-center mb-16">
          <h2 className="section-heading">About <span className="highlight-text">Me</span></h2>
          <p className="section-subheading mx-auto">
            Get to know my background, expertise, and approach to video editing.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">
          {/* Left column - Bio */}
          <div className={`${isVisible ? 'animate-fade-in-right' : ''}`}>
            <div className="flex flex-col md:flex-row gap-8 mb-8 items-start">
              <div className="w-full md:w-1/3 aspect-square overflow-hidden rounded-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=800&auto=format&fit=crop" 
                  alt="Professional headshot"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="w-full md:w-2/3">
                <h3 className="text-2xl font-semibold mb-3">Passionate Video Editor & Visual Storyteller</h3>
                <p className="text-muted-foreground mb-4">
                  With over 7 years of experience, I've developed a keen eye for pacing, transitions, and visual flow
                  that keeps viewers engaged and delivers messages effectively.
                </p>
                <p className="text-muted-foreground mb-4">
                  I specialize in creating compelling narratives through thoughtful edits, whether for commercials,
                  corporate videos, documentaries, or social media content.
                </p>
                <div className="flex gap-4 mt-6">
                  <a 
                    href="#contact"
                    className="btn-primary"
                  >
                    Contact Me
                  </a>
                  <a 
                    href="#"
                    className="btn-secondary flex items-center gap-2"
                  >
                    <FileText size={18} />
                    <span>Resume</span>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Timeline */}
            <div className="mt-16">
              <h3 className="text-2xl font-semibold mb-8">My Journey</h3>
              
              <div className="relative border-l-2 border-highlight/30 pl-8 ml-2 space-y-8">
                {timeline.map((item, index) => (
                  <div 
                    key={index}
                    className={`pb-2 ${isVisible ? 'animate-fade-in' : ''}`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="absolute -left-2.5 mt-1.5 h-5 w-5 rounded-full border-4 border-highlight bg-background"></div>
                    <div className="flex items-center gap-4 mb-1">
                      <div className="bg-secondary/50 px-2 py-1 rounded text-sm font-medium flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{item.year}</span>
                      </div>
                      <h4 className="text-lg font-semibold">{item.title}</h4>
                    </div>
                    <p className="text-muted-foreground mb-1">{item.company}</p>
                    <p className="text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right column - Skills */}
          <div className={`${isVisible ? 'animate-fade-in-left' : ''}`}>
            <h3 className="text-2xl font-semibold mb-8">Skills & Expertise</h3>
            
            <div className="mb-12">
              {skills.map((skill, index) => (
                <div 
                  key={index}
                  className="mb-5"
                >
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium">{skill.name}</h4>
                    <span className="text-sm font-medium">{skill.proficiency}%</span>
                  </div>
                  <div className="w-full bg-secondary/50 rounded-full h-2.5">
                    <div 
                      className="bg-gradient-to-r from-highlight to-highlight/80 h-2.5 rounded-full"
                      style={{ 
                        width: `${skill.proficiency}%`,
                        transition: 'width 1s ease-in-out',
                        transitionDelay: `${index * 0.1}s`,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Awards & Certifications */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-6">Awards & Certifications</h3>
              
              <div className="space-y-4">
                <div className="glassmorphism p-4 rounded-xl flex gap-4 items-start">
                  <div className="p-2 bg-secondary/50 rounded-lg">
                    <Award className="text-highlight" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium">Best Editing Award 2022</h4>
                    <p className="text-sm text-muted-foreground">International Video Festival</p>
                  </div>
                </div>
                
                <div className="glassmorphism p-4 rounded-xl flex gap-4 items-start">
                  <div className="p-2 bg-secondary/50 rounded-lg">
                    <Award className="text-highlight" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium">Adobe Certified Expert</h4>
                    <p className="text-sm text-muted-foreground">Premiere Pro & After Effects</p>
                  </div>
                </div>
                
                <div className="glassmorphism p-4 rounded-xl flex gap-4 items-start">
                  <div className="p-2 bg-secondary/50 rounded-lg">
                    <Briefcase className="text-highlight" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium">DaVinci Resolve Certified</h4>
                    <p className="text-sm text-muted-foreground">Advanced Color Grading</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Brand logos */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">Previous Clients</h3>
              
              <div className="flex flex-wrap gap-4">
                <div className="bg-secondary/50 text-muted-foreground hover:text-foreground px-3 py-2 rounded-lg text-sm flex items-center gap-2 transition-colors">
                  <Link size={14} />
                  <span>Netflix</span>
                </div>
                <div className="bg-secondary/50 text-muted-foreground hover:text-foreground px-3 py-2 rounded-lg text-sm flex items-center gap-2 transition-colors">
                  <Link size={14} />
                  <span>Adidas</span>
                </div>
                <div className="bg-secondary/50 text-muted-foreground hover:text-foreground px-3 py-2 rounded-lg text-sm flex items-center gap-2 transition-colors">
                  <Link size={14} />
                  <span>Sony</span>
                </div>
                <div className="bg-secondary/50 text-muted-foreground hover:text-foreground px-3 py-2 rounded-lg text-sm flex items-center gap-2 transition-colors">
                  <Link size={14} />
                  <span>Red Bull</span>
                </div>
                <div className="bg-secondary/50 text-muted-foreground hover:text-foreground px-3 py-2 rounded-lg text-sm flex items-center gap-2 transition-colors">
                  <Link size={14} />
                  <span>Samsung</span>
                </div>
                <div className="bg-secondary/50 text-muted-foreground hover:text-foreground px-3 py-2 rounded-lg text-sm flex items-center gap-2 transition-colors">
                  <Link size={14} />
                  <span>Spotify</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
