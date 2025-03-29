
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import DownloadCard from './DownloadCard';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { mockDownloads } from '@/data/mockData';

const FeaturedSection = () => {
  return (
    <section className="py-12 container">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Featured Downloads</h2>
        <Button variant="ghost" className="text-primary">
          View All <ChevronRight className="ml-1 h-4 w-4" />
        </Button>
      </div>
      
      <Tabs defaultValue="popular">
        <TabsList className="mb-6">
          <TabsTrigger value="popular">Popular</TabsTrigger>
          <TabsTrigger value="recent">Recent</TabsTrigger>
          <TabsTrigger value="trending">Trending</TabsTrigger>
        </TabsList>
        
        <TabsContent value="popular" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {mockDownloads.filter(item => item.category === 'Software' || item.category === 'Template').slice(0, 8).map(download => (
              <DownloadCard key={download.id} {...download} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="recent" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {mockDownloads.filter(item => item.category === 'Document' || item.category === 'Media').slice(0, 8).map(download => (
              <DownloadCard key={download.id} {...download} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="trending" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {mockDownloads.sort((a, b) => b.downloads - a.downloads).slice(0, 8).map(download => (
              <DownloadCard key={download.id} {...download} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default FeaturedSection;
