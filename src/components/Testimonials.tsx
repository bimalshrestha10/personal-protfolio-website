
import React, { useState, useEffect } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

// Sample testimonials
const testimonials = [
  {
    id: 1,
    name: 'Gopal Shrestha',
    position: 'Marketing Director',
    company: 'Sajilo Marketing',
    image: 'https://scontent.fktm6-1.fna.fbcdn.net/v/t1.6435-9/65387261_846786165692842_5909196677931073536_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=94e2a3&_nc_ohc=mriUSWePBG4Q7kNvgG8OGhz&_nc_oc=AdkR9R2Z_KnlouZrPhnGzThapIar3-dNs--WVD04xxUtBxKOw4hQUvseTXX_pinBJrXjpAB2DRHCCbFBPo7NlZl_&_nc_zt=23&_nc_ht=scontent.fktm6-1.fna&_nc_gid=Z_Ber9EBlEnaldv1CUYGEQ&oh=00_AYGAaxYm6uoaKmewLI4rOvFPlOltf-3oS1zeEpHZ1IL3CQ&oe=6805BC4C',
    text: 'Working with this video editor transformed our marketing campaign. The attention to detail and storytelling ability helped us increase engagement by 150% across all platforms.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Diwash Shrestha',
    position: 'Content Creator',
    company: 'Tiktok Creator',
    image: 'https://scontent.fktm6-1.fna.fbcdn.net/v/t39.30808-1/274579459_4702650186454790_6466858265338300410_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=106&ccb=1-7&_nc_sid=e99d92&_nc_ohc=kMoepPf_ZKgQ7kNvgHgiU7p&_nc_oc=AdlRkhVkjgcGXpQhj6K1ER3IRzg3tg_oSiHE5cbvg6V8U_62HCxRsx34X3t_h32Vk4hCgJLBnSB-IexmyuEMtYs3&_nc_zt=24&_nc_ht=scontent.fktm6-1.fna&_nc_gid=M5q9TzkDSL8-PIHXZFmUPw&oh=00_AYHlWn6C8a4ThtDR9ob7gCtObGIZ8Tm4XrqxsxduALya4g&oe=67E43EBA',
    text: 'The edits for my travel channel are perfect. The pacing, color grading, and music selection all work together to create a cohesive style that my viewers love.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Sagar Subedi',
    position: 'CEO',
    company: 'StartUp Innovations',
    image: 'https://scontent.fktm6-1.fna.fbcdn.net/v/t1.6435-9/29511758_2525716674319362_3529807099712241664_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=Bfa8GngdWjEQ7kNvgEtEr8z&_nc_oc=Adn3AGT0xf-hJar_qzcdoZ5_c6RQAWLeZtMjqiQAXPTu3-YWMnVnLKH_H3IxNVt86cCvv1nCZEFf_-neShb6ZLkw&_nc_zt=23&_nc_ht=scontent.fktm6-1.fna&_nc_gid=wlb2q1DrCTInZkmzNYWn3A&oh=00_AYGURmCdi2Tzo3-4p5SOBHPIuulXi0qxTeAHPEOuuLyMEA&oe=6805D60D',
    text: 'Our corporate videos have never looked better. The professional editing elevated our brand image and helped us secure major investors after presenting our company overview.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Sagar Chhetri',
    position: 'Social Media Manager',
    company: 'WoM-Marketing',
    image: 'https://scontent.fktm6-1.fna.fbcdn.net/v/t39.30808-6/481906116_1388675382567747_8977891194971134018_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=QIdIBrSe3YUQ7kNvgFEtAjE&_nc_oc=AdlOWQi2xL2XWjzHpoNNsjMlh_4z5kL7xBuOMSdtQzrs9deEMPvSpLo8uWdn01yY-ZRghA_Qa2gHQuBv3j7Lot4L&_nc_zt=23&_nc_ht=scontent.fktm6-1.fna&_nc_gid=HVb1Erw6LlHDz9bcIhZePg&oh=00_AYHUudKn_XDbnq5vJHdfDDXp9Yd9Dh48ClMcBKfSN67nQA&oe=67E43229',
    text: 'The instagram reels edited for our fashion brand consistently outperform all our other content. The quick turnaround time and quality are unmatched.',
    rating: 4,
  },
  {
    id: 5,
    name: 'Bishwash Lamichhane',
    position: 'Production Manager',
    company: 'Biiyond Productions',
    image: '/logo/biiyond_logo.jpg',
    text: 'I brought in this editor to help with my documentary and the emotional depth they brought to the footage was incredible. They truly understand the art of visual storytelling.',
    rating: 5,
  },
];

// Company logos
const companyLogos = [
  {
    name: 'Company 1',
    logo: '/logo/101infotech_logo.jpg',
  },
  {
    name: 'Company 2',
    logo: '/logo/wommarketing_logo.jpg',
  },
  {
    name: 'Company 3',
    logo: '/logo/biiyond_logo.jpg',
  },
  {
    name: 'Company 4',
    logo: '/logo/classicLogo.jpg',
  },
  {
    name: 'Company 5',
    logo: '/logo/chitrakala.jpg',
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
