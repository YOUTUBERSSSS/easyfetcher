
import React from 'react';
import { Download, Users, Files, Clock } from 'lucide-react';

const stats = [
  { name: 'Total Downloads', value: '10M+', icon: Download, description: 'Downloads from our platform' },
  { name: 'Active Users', value: '500K+', icon: Users, description: 'Happy users worldwide' },
  { name: 'Available Files', value: '50K+', icon: Files, description: 'Resources to download' },
  { name: 'Years Online', value: '5+', icon: Clock, description: 'Years of trusted service' },
];

const StatsSection = () => {
  return (
    <section className="py-16 container">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.name} className="flex flex-col items-center text-center p-6 rounded-lg bg-card border">
              <div className="p-3 rounded-full bg-primary/10 mb-4">
                <Icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
              <p className="font-medium">{stat.name}</p>
              <p className="text-sm text-muted-foreground mt-2">{stat.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default StatsSection;
