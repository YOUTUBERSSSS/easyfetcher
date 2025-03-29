
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-muted py-12 border-t">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="rounded-full bg-gradient-to-r from-primary to-secondary p-1">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="white"/>
                  <path d="M12 16L16 12H13V8H11V12H8L12 16Z" fill="white"/>
                </svg>
              </div>
              <span className="font-bold text-xl text-primary">EasyFetch</span>
            </div>
            <p className="text-sm text-muted-foreground">
              The easiest way to find and download high-quality resources all in one place.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="#" className="text-muted-foreground hover:text-primary">Software</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-primary">Documents</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-primary">Media</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-primary">Templates</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-primary">Archives</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="#" className="text-muted-foreground hover:text-primary">Submit Link</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-primary">Popular Downloads</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-primary">Recent Uploads</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-primary">Trending</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-primary">Request File</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Information</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="#" className="text-muted-foreground hover:text-primary">About Us</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-primary">Terms of Service</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-primary">DMCA</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-primary">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} EasyFetch. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
