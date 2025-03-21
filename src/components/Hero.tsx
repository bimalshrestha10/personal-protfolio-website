
import React, { useEffect, useRef, useState } from 'react';
import { Play, ArrowRight } from 'lucide-react';
import { AspectRatio } from './ui/aspect-ratio';
import { Avatar } from './ui/avatar';

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    // Set typing complete after animation duration (3.5s)
    const timer = setTimeout(() => {
      setIsTypingComplete(true);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  const handleVideoLoaded = () => {
    setIsVideoLoaded(true);
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden"
    >
      {/* Video background with overlay */}
      <div className="absolute inset-0 video-grain">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        {isVideoLoaded ? null : (
          <div className="absolute inset-0 flex items-center justify-center z-10 bg-black">
            <div className="w-16 h-16 border-4 border-highlight border-t-transparent rounded-full animate-spin-slow"></div>
          </div>
        )}
        <video 
          ref={videoRef}
          autoPlay 
          muted 
          loop 
          playsInline
          onLoadedData={handleVideoLoaded}
          className={`w-full h-full object-cover transition-opacity duration-1000 ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`}
        >
          <source src="/bg2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      {/* Content */}
      <div className="container relative z-20 px-6 md:px-12 flex flex-col md:flex-row md:items-center md:justify-between md:gap-8 text-white">
        {/* Left content - Profile and introduction */}
        <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left mb-12 md:mb-0">
          <div className="mb-8 flex items-center gap-6">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-highlight/70 shadow-lg shadow-highlight/20">
              <AspectRatio ratio={1/1}>
                <img 
                  src="/pp.png" 
                  alt="Profile photo"
                  className="object-cover w-full h-full"
                />
              </AspectRatio>
            </div>
            <div className="typing-container hidden md:block">
              <h2 className="typing-text text-xl md:text-2xl font-heading tracking-wide">
                Video Editor & Storyteller
              </h2>
            </div>
          </div>
          
          <div className="typing-container md:hidden mb-6">
            <h2 className="typing-text text-xl font-heading tracking-wide">
              Video Editor & Storyteller
            </h2>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 max-w-lg">
            Crafting <span className="text-highlight">Visual</span> Stories That Captivate
          </h1>
          
          <p className={`text-lg md:text-xl max-w-lg mb-8 text-white/90 transition-opacity duration-700 ${isTypingComplete ? 'opacity-100' : 'opacity-0'}`}>
            I transform raw footage into compelling narratives that captivate audiences and deliver your message with impact.
          </p>

          <div className={`flex gap-4 transition-opacity duration-700 ${isTypingComplete ? 'opacity-100' : 'opacity-0'}`}>
            <a 
              href="#portfolio" 
              className="btn-primary flex items-center justify-center gap-2"
            >
              <Play size={18} />
              <span>View My Work</span>
            </a>
            <a 
              href="#contact" 
              className="flex items-center text-white/90 hover:text-highlight transition-colors font-medium"
            >
              Contact me
              <ArrowRight size={18} className="ml-1" />
            </a>
          </div>
        </div>
        
        {/* Right content - Experience and stats */}
        <div className="md:w-5/12 glassmorphism p-6 md:p-8 rounded-2xl border border-white/10">
          <h3 className="text-xl md:text-2xl font-semibold mb-6">Professional Experience</h3>
          
          <div className="space-y-6">
            <div className={`transition-opacity duration-700 ${isTypingComplete ? 'opacity-100' : 'opacity-0'}`}>
              <p className="text-white/70 mb-2">Experience</p>
              <div className="flex items-end gap-1">
                <span className="text-3xl md:text-4xl font-bold">5+</span>
                <span className="text-white/70 mb-1">years</span>
              </div>
            </div>
            
            <div className={`transition-opacity duration-700 delay-100 ${isTypingComplete ? 'opacity-100' : 'opacity-0'}`}>
              <p className="text-white/70 mb-2">Projects Completed</p>
              <div className="flex items-end gap-1">
                <span className="text-3xl md:text-4xl font-bold">250+</span>
                <span className="text-white/70 mb-1">videos</span>
              </div>
            </div>
            
            <div className={`transition-opacity duration-700 delay-200 ${isTypingComplete ? 'opacity-100' : 'opacity-0'}`}>
              <p className="text-white/70 mb-2">Satisfied Clients</p>
              <div className="flex items-end gap-1">
                <span className="text-3xl md:text-4xl font-bold">80+</span>
                <span className="text-white/70 mb-1">clients</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center p-1">
          <div className="w-1 h-2 bg-white/70 rounded-full animate-[float_1.5s_ease-in-out_infinite]"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
