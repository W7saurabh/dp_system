// Static Testimonials Data for D P System
// Mock testimonial data for beautiful landing page display

export interface StaticTestimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  testimonial: string;
  rating: number;
  location: string;
  initials: string;
}

// Mock testimonials with Indian names and local context
export const staticTestimonials: StaticTestimonial[] = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Business Owner",
    company: "TechStart Solutions",
    testimonial: "D P System helped us set up our entire office network. Their team is professional, knowledgeable, and always available for support. Highly recommended!",
    rating: 5,
    location: "Indore, MP",
    initials: "RK"
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Freelance Designer",
    company: "Creative Studio",
    testimonial: "I got my custom PC built for video editing from D P System. The performance is outstanding and they stayed within my budget. Great service!",
    rating: 5,
    location: "Indore, MP",
    initials: "PS"
  },
  {
    id: 3,
    name: "Amit Patel",
    role: "IT Manager",
    company: "Bright Future Pvt. Ltd.",
    testimonial: "We've been using their AMC services for 2 years. Quick response time, genuine parts, and fair pricing. They truly understand business needs.",
    rating: 5,
    location: "Indore, MP",
    initials: "AP"
  },
  {
    id: 4,
    name: "Sneha Verma",
    role: "CA Firm Partner",
    company: "Verma & Associates",
    testimonial: "Excellent CCTV installation service. They completed the work professionally and the remote viewing feature works perfectly. Very satisfied!",
    rating: 5,
    location: "Indore, MP",
    initials: "SV"
  },
  {
    id: 5,
    name: "Vikram Singh",
    role: "Shop Owner",
    company: "Singh Electronics",
    testimonial: "Their printer service saved my business during a crucial time. Quick repair, genuine toner, and reasonable charges. Will definitely recommend!",
    rating: 5,
    location: "Indore, MP",
    initials: "VS"
  },
  {
    id: 6,
    name: "Anita Desai",
    role: "School Principal",
    company: "Modern Public School",
    testimonial: "D P System set up computer labs for our school. They handled everything from procurement to installation. Very professional team!",
    rating: 5,
    location: "Indore, MP",
    initials: "AD"
  }
];

// Helper function to get featured testimonials
export const getFeaturedTestimonials = (count: number = 3): StaticTestimonial[] => {
  return staticTestimonials.slice(0, count);
};

