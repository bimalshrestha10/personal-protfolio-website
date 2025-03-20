
import React, { useEffect, useRef, useState } from 'react';
import { Play } from 'lucide-react';

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
        <div className="absolute inset-0 bg-black/30 z-10"></div>
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
          <source src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      {/* Content */}
      <div className="container relative z-20 px-6 md:px-12 flex flex-col items-center text-center text-white">
        <div className="typing-container mb-6">
          <h2 className="typing-text text-2xl md:text-3xl font-heading tracking-wide">
            Video Editor & Visual Storyteller
          </h2>
        </div>
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 max-w-4xl">
          Crafting Stories, <span className="text-highlight">One Frame</span> at a Time
        </h1>
        
        <p className={`text-xl md:text-2xl max-w-2xl mb-12 text-white/80 transition-opacity duration-700 ${isTypingComplete ? 'opacity-100' : 'opacity-0'}`}>
          I transform raw footage into compelling narratives that captivate audiences and deliver your message with impact.
        </p>
        
        <div className={`flex flex-col sm:flex-row gap-4 transition-opacity duration-700 ${isTypingComplete ? 'opacity-100' : 'opacity-0'}`}>
          <a 
            href="#portfolio" 
            className="btn-primary flex items-center justify-center gap-2"
          >
            <Play size={18} />
            <span>View My Work</span>
          </a>
          <a 
            href="#contact" 
            className="btn-secondary border-white/20 text-white hover:bg-white/10"
          >
            Let's Connect
          </a>
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
