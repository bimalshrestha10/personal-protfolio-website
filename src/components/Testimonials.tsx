
import React, { useState, useEffect } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

// Sample testimonials
const testimonials = [
  {
    id: 1,
    name: 'Alex Johnson',
    position: 'Marketing Director',
    company: 'Brand Innovators',
    image: 'https://i.pravatar.cc/150?img=11',
    text: 'Working with this video editor transformed our marketing campaign. The attention to detail and storytelling ability helped us increase engagement by 150% across all platforms.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Sarah Chen',
    position: 'Content Creator',
    company: 'Travel Enthusiast',
    image: 'https://i.pravatar.cc/150?img=5',
    text: 'The edits for my travel channel are perfect. The pacing, color grading, and music selection all work together to create a cohesive style that my viewers love.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Michael Rodriguez',
    position: 'CEO',
    company: 'StartUp Innovations',
    image: 'https://i.pravatar.cc/150?img=8',
    text: 'Our corporate videos have never looked better. The professional editing elevated our brand image and helped us secure major investors after presenting our company overview.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Emily Park',
    position: 'Social Media Manager',
    company: 'Fashion Forward',
    image: 'https://i.pravatar.cc/150?img=9',
    text: 'The instagram reels edited for our fashion brand consistently outperform all our other content. The quick turnaround time and quality are unmatched.',
    rating: 4,
  },
  {
    id: 5,
    name: 'David Wilson',
    position: 'Documentary Filmmaker',
    company: 'Indie Productions',
    image: 'https://i.pravatar.cc/150?img=12',
    text: 'I brought in this editor to help with my documentary and the emotional depth they brought to the footage was incredible. They truly understand the art of visual storytelling.',
    rating: 5,
  },
];

// Company logos
const companyLogos = [
  {
    name: 'Company 1',
    logo: 'https://i.imgur.com/Qcd0AJF.png',
  },
  {
    name: 'Company 2',
    logo: 'https://i.imgur.com/IG0lTsV.png',
  },
  {
    name: 'Company 3',
    logo: 'https://i.imgur.com/DfZY2os.png',
  },
  {
    name: 'Company 4',
    logo: 'https://i.imgur.com/UD2hBWT.png',
  },
  {
    name: 'Company 5',
    logo: 'https://i.imgur.com/2YfbpLy.png',
  },
];

const Testimonials = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  // Auto-rotate testimonials
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, [isPaused]);
  
  const handlePrevious = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    setIsPaused(true);
    
    // Resume auto-rotation after 8 seconds of inactivity
    setTimeout(() => setIsPaused(false), 8000);
  };
  
  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    setIsPaused(true);
    
    // Resume auto-rotation after 8 seconds of inactivity
    setTimeout(() => setIsPaused(false), 8000);
  };
  
  return (
    <section id="testimonials" className="section-padding bg-primary/5">
      <div 
        ref={ref}
        className={`container mx-auto transition-opacity duration-700 ease-out ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="text-center mb-16">
          <h2 className="section-heading">Client <span className="highlight-text">Testimonials</span></h2>
          <p className="section-subheading mx-auto">
            Hear what clients have to say about their experience working with me.
          </p>
        </div>
        
        {/* Testimonial carousel */}
        <div className="relative max-w-4xl mx-auto mb-20">
          <div className="overflow-hidden glassmorphism p-8 md:p-12 rounded-2xl">
            <div 
              className="transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              <div className="flex w-full">
                {testimonials.map((testimonial) => (
                  <div 
                    key={testimonial.id}
                    className="w-full flex-shrink-0 px-4"
                  >
                    <div className="text-center">
                      <div className="flex justify-center mb-6">
                        {[...Array(5)].map((_, index) => (
                          <Star 
                            key={index}
                            size={20}
                            className={`${
                              index < testimonial.rating 
                                ? 'text-highlight fill-highlight' 
                                : 'text-muted-foreground'
                            }`}
                          />
                        ))}
                      </div>
                      
                      <p className="text-lg md:text-xl italic mb-8">"{testimonial.text}"</p>
                      
                      <div className="flex items-center justify-center">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full object-cover border-4 border-border"
                        />
                        <div className="ml-4 text-left">
                          <h4 className="font-semibold">{testimonial.name}</h4>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.position}, {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Navigation buttons */}
          <button 
            onClick={handlePrevious}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-5 md:-translate-x-6 w-10 h-10 md:w-12 md:h-12 rounded-full bg-background border border-border shadow-lg flex items-center justify-center hover:bg-secondary/50 transition-colors z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          
          <button 
            onClick={handleNext}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-5 md:translate-x-6 w-10 h-10 md:w-12 md:h-12 rounded-full bg-background border border-border shadow-lg flex items-center justify-center hover:bg-secondary/50 transition-colors z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
          
          {/* Indicators */}
          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveIndex(index);
                  setIsPaused(true);
                  setTimeout(() => setIsPaused(false), 8000);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? 'w-6 bg-highlight' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        {/* Client logos */}
        <div className="pt-8 border-t border-border">
          <h3 className="text-xl font-medium text-center mb-10">Trusted by amazing companies</h3>
          
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
            {companyLogos.map((company, index) => (
              <div 
                key={index}
                className={`opacity-60 hover:opacity-100 transition-opacity duration-300 ${
                  isVisible ? 'animate-fade-in' : ''
                }`}
                style={{ animationDelay: `${index * 0.1 + 0.5}s` }}
              >
                <img 
                  src={company.logo} 
                  alt={company.name}
                  className="h-8 md:h-10 w-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
