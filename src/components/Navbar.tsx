
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <div className="rounded-full bg-gradient-to-r from-primary to-secondary p-1">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="white"/>
                <path d="M12 16L16 12H13V8H11V12H8L12 16Z" fill="white"/>
              </svg>
            </div>
            <span className="font-bold text-xl text-primary">EasyFetch</span>
          </Link>
        </div>
        
        <div className="hidden md:flex relative max-w-sm w-full mx-4">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search for downloads..."
            className="w-full pl-8 rounded-full border-muted bg-background"
          />
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm">Categories</Button>
          <Button variant="ghost" size="sm">Popular</Button>
          <Button variant="ghost" size="sm">Recent</Button>
          <Button size="sm" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
            Submit Link
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
