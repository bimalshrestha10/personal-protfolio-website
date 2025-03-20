
import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  
  return (
    <footer className="bg-background dark:bg-secondary/10 py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-12">
          <div className="md:w-1/3">
            <h2 className="text-2xl font-bold mb-4">FRAME<span className="text-highlight">CRAFT</span></h2>
            <p className="text-muted-foreground mb-4">
              Professional video editing services that transform your footage into compelling stories.
            </p>
            <p className="text-sm">
              &copy; {new Date().getFullYear()} FrameCraft. All rights reserved.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 md:gap-16">
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="text-muted-foreground hover:text-highlight transition-colors">Home</a>
                </li>
                <li>
                  <a href="#services" className="text-muted-foreground hover:text-highlight transition-colors">Services</a>
                </li>
                <li>
                  <a href="#portfolio" className="text-muted-foreground hover:text-highlight transition-colors">Portfolio</a>
                </li>
                <li>
                  <a href="#testimonials" className="text-muted-foreground hover:text-highlight transition-colors">Testimonials</a>
                </li>
                <li>
                  <a href="#about" className="text-muted-foreground hover:text-highlight transition-colors">About</a>
                </li>
                <li>
                  <a href="#contact" className="text-muted-foreground hover:text-highlight transition-colors">Contact</a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#services" className="text-muted-foreground hover:text-highlight transition-colors">Commercial Editing</a>
                </li>
                <li>
                  <a href="#services" className="text-muted-foreground hover:text-highlight transition-colors">YouTube Content</a>
                </li>
                <li>
                  <a href="#services" className="text-muted-foreground hover:text-highlight transition-colors">Corporate Videos</a>
                </li>
                <li>
                  <a href="#services" className="text-muted-foreground hover:text-highlight transition-colors">Social Media</a>
                </li>
                <li>
                  <a href="#services" className="text-muted-foreground hover:text-highlight transition-colors">Color Grading</a>
                </li>
                <li>
                  <a href="#services" className="text-muted-foreground hover:text-highlight transition-colors">Motion Graphics</a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="text-muted-foreground">Los Angeles, California</li>
                <li>
                  <a href="mailto:hello@framecraft.com" className="text-muted-foreground hover:text-highlight transition-colors">hello@framecraft.com</a>
                </li>
                <li>
                  <a href="tel:+15551234567" className="text-muted-foreground hover:text-highlight transition-colors">+1 (555) 123-4567</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            Designed with passion. Built with modern technologies.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="p-3 rounded-full bg-secondary/50 hover:bg-highlight hover:text-white transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
