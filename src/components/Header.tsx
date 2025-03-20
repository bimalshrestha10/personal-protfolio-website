
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '@/context/ThemeContext';
import { Moon, Sun, Menu, X } from 'lucide-react';

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-3 glassmorphism' : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-6 lg:px-8">
        <Link 
          to="/" 
          className="text-2xl font-bold font-heading tracking-tighter hover:opacity-90 transition-opacity"
        >
          FRAME<span className="text-highlight">CRAFT</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex items-center space-x-6">
            <a href="#home" className="animated-underline py-1 font-medium">Home</a>
            <a href="#services" className="animated-underline py-1 font-medium">Services</a>
            <a href="#portfolio" className="animated-underline py-1 font-medium">Portfolio</a>
            <a href="#testimonials" className="animated-underline py-1 font-medium">Testimonials</a>
            <a href="#about" className="animated-underline py-1 font-medium">About</a>
            <a href="#contact" className="animated-underline py-1 font-medium">Contact</a>
          </nav>
          
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full bg-secondary/50 hover:bg-secondary transition-colors duration-300"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
        
        <div className="md:hidden flex items-center">
          <button 
            onClick={toggleTheme}
            className="p-2 mr-2 rounded-full bg-secondary/50 hover:bg-secondary transition-colors duration-300"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-full bg-secondary/50 hover:bg-secondary transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glassmorphism absolute top-full left-0 right-0 py-4 px-6 animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <a 
              href="#home" 
              className="py-2 font-medium hover:text-highlight transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#services" 
              className="py-2 font-medium hover:text-highlight transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#portfolio" 
              className="py-2 font-medium hover:text-highlight transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Portfolio
            </a>
            <a 
              href="#testimonials" 
              className="py-2 font-medium hover:text-highlight transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="#about" 
              className="py-2 font-medium hover:text-highlight transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#contact" 
              className="py-2 font-medium hover:text-highlight transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
