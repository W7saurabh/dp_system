// Homepage for D P System
// Assembles all sections into the main landing page

import Hero from '@/components/sections/Hero';
import FeaturedProducts from '@/components/sections/FeaturedProducts';
import Services from '@/components/sections/Services';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import Testimonials from '@/components/sections/Testimonials';
import Brands from '@/components/sections/Brands';
import Contact from '@/components/sections/Contact';

export default function HomePage() {
  return (
    <>
      {/* Hero Section - First impression */}
      <Hero />

      {/* Featured Products - What we sell */}
      <FeaturedProducts />

      {/* Services - What we do */}
      <Services />

      {/* Why Choose Us - Competitive advantages */}
      <WhyChooseUs />

      {/* Testimonials - Social proof */}
      <Testimonials />

      {/* Brands - Partner logos */}
      <Brands />

      {/* Contact - Lead generation */}
      <Contact />
    </>
  );
}
