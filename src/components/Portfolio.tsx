
import React, { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { X, Play, ExternalLink } from 'lucide-react';

// Sample portfolio items
const portfolioItems = [
  {
    id: 1,
    title: 'Brand Commercial',
    category: 'commercial',
    thumbnail: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1600&auto=format&fit=crop',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-top-aerial-shot-of-seashore-with-rocks-1090-large.mp4',
    client: 'Luxury Brand',
    description: 'A cinematic commercial for a luxury lifestyle brand highlighting their new collection.',
  },
  {
    id: 2,
    title: 'Product Showcase',
    category: 'commercial',
    thumbnail: 'https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?q=80&w=1600&auto=format&fit=crop',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-hands-holding-a-smart-watch-with-the-stopwatch-running-32808-large.mp4',
    client: 'Tech Company',
    description: 'A detailed showcase of the latest tech product with specifications and features.',
  },
  {
    id: 3,
    title: 'Travel Vlog',
    category: 'youtube',
    thumbnail: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1600&auto=format&fit=crop',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-traveling-on-the-road-near-the-sea-32809-large.mp4',
    client: 'Travel Creator',
    description: 'An engaging travel vlog featuring beautiful destinations and authentic experiences.',
  },
  {
    id: 4,
    title: 'Corporate Overview',
    category: 'corporate',
    thumbnail: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1600&auto=format&fit=crop',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-group-of-colleagues-in-an-office-meeting-33868-large.mp4',
    client: 'Finance Firm',
    description: 'A professional overview of a corporate organization showcasing their values and mission.',
  },
  {
    id: 5,
    title: 'Fashion Reel',
    category: 'social',
    thumbnail: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1600&auto=format&fit=crop',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-fashion-model-with-a-cold-and-serious-look-39997-large.mp4',
    client: 'Fashion Brand',
    description: 'A trendy fashion reel created specifically for Instagram to showcase the latest collection.',
  },
  {
    id: 6,
    title: 'Documentary Excerpt',
    category: 'documentary',
    thumbnail: 'https://images.unsplash.com/photo-1635805737707-575885ab0820?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-close-view-of-a-pigeon-pecking-at-crumbs-of-bread-42906-large.mp4',
    client: 'Independent Filmmaker',
    description: 'A powerful excerpt from a documentary showcasing authentic human stories and emotions.',
  },
];

const Portfolio = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [selectedVideo, setSelectedVideo] = useState<typeof portfolioItems[0] | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');
  
  const handleVideoClick = (item: typeof portfolioItems[0]) => {
    setSelectedVideo(item);
    // Add overflow hidden to body to prevent scrolling when modal is open
    document.body.style.overflow = 'hidden';
  };
  
  const closeModal = () => {
    setSelectedVideo(null);
    // Remove overflow hidden from body when modal is closed
    document.body.style.overflow = '';
  };
  
  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);
  
  return (
    <section id="portfolio" className="section-padding overflow-hidden">
      <div 
        ref={ref}
        className={`container mx-auto transition-opacity duration-700 ease-out ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="text-center mb-16">
          <h2 className="section-heading">My <span className="highlight-text">Portfolio</span></h2>
          <p className="section-subheading mx-auto">
            Explore my video editing projects spanning different genres and styles.
          </p>
        </div>
        
        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {['all', 'commercial', 'youtube', 'corporate', 'social', 'documentary'].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full text-sm font-medium capitalize transition-all duration-300 ${
                activeFilter === filter 
                  ? 'bg-highlight text-white shadow-lg shadow-highlight/20' 
                  : 'bg-secondary/50 hover:bg-secondary'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
        
        {/* Grid gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div 
              key={item.id}
              className={`group relative overflow-hidden rounded-xl bg-muted/30 aspect-video shadow-lg cursor-pointer transition-all duration-500 ${
                isVisible ? 'animate-fade-in' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => handleVideoClick(item)}
            >
              <img 
                src={item.thumbnail} 
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <div className="bg-highlight p-3 rounded-full absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Play className="text-white" size={20} />
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                <p className="text-white/80 text-sm">{item.client}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Video modal */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-5xl">
            <button 
              onClick={closeModal}
              className="absolute -top-12 right-0 p-2 text-white hover:text-highlight transition-colors"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>
            
            <div className="bg-background rounded-xl overflow-hidden shadow-xl">
              <div className="aspect-video bg-black">
                <video 
                  controls 
                  autoPlay 
                  className="w-full h-full object-contain"
                >
                  <source src={selectedVideo.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold">{selectedVideo.title}</h3>
                    <p className="text-muted-foreground">Client: {selectedVideo.client}</p>
                  </div>
                  <span className="px-3 py-1 text-xs uppercase tracking-wider font-medium bg-secondary rounded-full">
                    {selectedVideo.category}
                  </span>
                </div>
                <p className="text-muted-foreground mb-4">{selectedVideo.description}</p>
                
                <a 
                  href="#" 
                  className="flex items-center gap-2 text-highlight font-medium hover:underline"
                >
                  <ExternalLink size={16} />
                  <span>View full project</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
