
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedSection from '@/components/FeaturedSection';
import CategorySection from '@/components/CategorySection';
import StatsSection from '@/components/StatsSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <FeaturedSection />
      <CategorySection />
      <StatsSection />
      <Footer />
    </div>
  );
};

export default Index;
