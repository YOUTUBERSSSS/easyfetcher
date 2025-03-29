
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

const Hero = () => {
  return (
    <div className="hero-gradient text-white py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-6">
          Find and Download Resources <span className="text-accent">Faster</span>
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-white/90">
          The easiest way to discover and download high-quality files, software, and resources all in one place.
        </p>
        
        <div className="relative max-w-md mx-auto mb-8">
          <div className="flex">
            <Input 
              className="h-12 pl-10 pr-24 rounded-l-full text-primary-foreground bg-white/10 backdrop-blur-sm border-white/20 placeholder:text-white/50"
              placeholder="Search for files, software, or resources..." 
            />
            <Button className="h-12 px-6 rounded-r-full bg-accent hover:bg-accent/90 text-white">
              <Search className="mr-2 h-4 w-4" />
              Search
            </Button>
          </div>
          <Search className="absolute left-3 top-3.5 h-5 w-5 text-white/70" />
        </div>
        
        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="outline" className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 text-white">
            Software
          </Button>
          <Button variant="outline" className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 text-white">
            Documents
          </Button>
          <Button variant="outline" className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 text-white">
            Media
          </Button>
          <Button variant="outline" className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 text-white">
            Templates
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
