
import React, { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { X, Play, ExternalLink } from 'lucide-react';

// Sample portfolio items
const portfolioItems = [
  {
    id: 1,
    title: 'Commercials',
    category: 'commercial',
    thumbnail: '/thumbnails/netrascale.jpg',
    videoUrl: '/videos/0. Netrascale.mp4',
    client: 'Netrascale',
    description: 'A commercial for cyber security brand highlighting their features provided to conpanies.',
  },
  {
    id: 2,
    title: 'Cinematic',
    category: 'cinematic',
    thumbnail: 'https://i.ytimg.com/an_webp/9obOsk-PjCg/mqdefault_6s.webp?du=3000&sqp=CNiq-b4G&rs=AOn4CLBP0yzhMQ6NOZiG7vMXBRkUKyIwaw',
    videoUrl: '/videos/ratomachindranath.mp4',
    client: 'Classic Diamond',
    description: 'A detailed showcase popular newari fesitval, Rato Machindranath, celebrated in nepal.',
  },
  {
    id: 3,
    title: '2D Animaion',
    category: '2d animation',
    thumbnail: 'https://i.ytimg.com/an_webp/1_An-6wIG9k/mqdefault_6s.webp?du=3000&sqp=CLTC-b4G&rs=AOn4CLDvaRErA3HTinRGBb7ZgQUK9YKC6A',
    videoUrl: '/videos/OldTownLunchBox.mp4',
    client: 'Old Town Foods',
    description: 'Video promoting their corporate lunch box.',
  },
  {
    id: 4,
    title: 'Motion Design',
    category: 'motion design',
    thumbnail: 'https://i.ytimg.com/vi/a13M4B5A8A0/hqdefault.jpg?sqp=-oaymwFBCNACELwBSFryq4qpAzMIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB8AEB-AH-CYAC0AWKAgwIABABGBMgTyh_MA8=&rs=AOn4CLB1t3Tub_Yc_56AyHK__PRPdK43rA',
    videoUrl: '/videos/DiSkinSamacharpatiAd.mp4',
    client: 'DI Skin Hospital & Refferal Center',
    description: 'A professional overview of a corporate organization showcasing their values and mission.',
  },
  {
    id: 5,
    title: 'Reels',
    category: 'reels',
    thumbnail: 'https://i.ytimg.com/vi/diW5U63u9fs/oar2.jpg?sqp=-oaymwEoCMAEENAFSFqQAgHyq4qpAxcIARUAAIhC2AEB4gEKCBgQAhgGOAFAAQ==&rs=AOn4CLDh63tN_llIubWHwJbMxOYvuqJgNA',
    videoUrl: '/videos/Reel.mp4',
    client: 'Marketing Funnel',
    description: 'A trendy fashion reel created specifically for Instagram to showcase the marketing funnel.',
  },
  {
    id: 6,
    title: 'Logo Animation',
    category: 'logo animation',
    thumbnail: 'https://i.ytimg.com/vi/dXlkQobXloc/hqdefault.jpg?sqp=-oaymwFBCNACELwBSFryq4qpAzMIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB8AEB-AH-CYAC0AWKAgwIABABGFogZSgdMA8=&rs=AOn4CLAxCRj63remOVZh9GAo3QIFoPYVUg',
    videoUrl: '/videos/YourHostelLogoAnimation.mp4',
    client: 'Your Hostel',
    description: 'Logo Animation of your hostel, a webapp for hostel finder.',
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
          {['all', 'commercial', 'cinematic', 'motion design', '2d animation', 'logo animation', 'reels', ].map((filter) => (
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
