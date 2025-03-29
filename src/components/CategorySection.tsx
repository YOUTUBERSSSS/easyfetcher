
import React from 'react';
import { Button } from '@/components/ui/button';
import { FileText, Film, Music, Package, Code, FileImage, FileArchive, Database } from 'lucide-react';

const categories = [
  { name: 'Documents', icon: FileText, count: 1243, color: 'bg-blue-500' },
  { name: 'Videos', icon: Film, count: 876, color: 'bg-red-500' },
  { name: 'Audio', icon: Music, count: 654, color: 'bg-yellow-500' },
  { name: 'Software', icon: Package, count: 1098, color: 'bg-green-500' },
  { name: 'Code', icon: Code, count: 765, color: 'bg-purple-500' },
  { name: 'Images', icon: FileImage, count: 932, color: 'bg-pink-500' },
  { name: 'Archives', icon: FileArchive, count: 543, color: 'bg-orange-500' },
  { name: 'Databases', icon: Database, count: 321, color: 'bg-teal-500' },
];

const CategorySection = () => {
  return (
    <section className="py-12 bg-muted/50">
      <div className="container">
        <h2 className="text-2xl font-bold mb-8 text-center">Browse by Category</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Button
                key={category.name}
                variant="outline"
                className="h-auto py-6 flex flex-col items-center justify-center gap-3 hover:bg-muted border-muted-foreground/20 card-hover"
              >
                <div className={`${category.color} p-3 rounded-full text-white`}>
                  <Icon className="h-6 w-6" />
                </div>
                <div className="text-center">
                  <div className="font-medium">{category.name}</div>
                  <div className="text-sm text-muted-foreground">{category.count} files</div>
                </div>
              </Button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
