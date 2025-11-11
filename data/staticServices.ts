// Static Services Data for D P System
// Hardcoded services displayed on landing page for fast loading
// Detail pages still fetch from Sanity CMS

export interface StaticService {
  id: number;
  title: string;
  slug: string;
  shortDescription: string;
  icon: string;
  category: string;
  order: number;
  highlights: string[];
  pricing?: {
    amount: string;
    type: string;
  };
  deliveryTime?: string;
}

// All 11 services for D P System
export const staticServices: StaticService[] = [
  {
    id: 1,
    title: "Custom PC Build — Gaming & Office PCs",
    slug: "custom-pc-build",
    shortDescription: "Tailor-made gaming and office PC builds—performance parts, testing, warranty and local support in Indore.",
    icon: "FaDesktop",
    category: "hardware",
    order: 1,
    highlights: [
      "Custom configurations based on budget",
      "Quality branded components",
      "Professional cable management",
      "1-year warranty included"
    ],
    pricing: {
      amount: "₹25,000",
      type: "starting"
    },
    deliveryTime: "2-3 Days"
  },
  {
    id: 2,
    title: "Laptop/All-in-One PC Services",
    slug: "laptop-services",
    shortDescription: "Comprehensive laptop repair, upgrade, and maintenance services. Screen replacement, RAM upgrade, SSD installation, and more.",
    icon: "FaLaptop",
    category: "hardware",
    order: 2,
    highlights: [
      "Expert technicians",
      "Genuine spare parts",
      "Quick turnaround time",
      "Data safety guaranteed"
    ],
    deliveryTime: "Same Day to 3 Days"
  },
  {
    id: 3,
    title: "Personal Server & NAS Solution for SME",
    slug: "server-nas-solution",
    shortDescription: "Enterprise-grade storage and server solutions for small and medium businesses. Data backup, file sharing, and remote access.",
    icon: "FaServer",
    category: "networking",
    order: 3,
    highlights: [
      "Business-grade reliability",
      "Secure data storage",
      "24/7 remote access",
      "Expert setup and support"
    ],
    pricing: {
      amount: "₹35,000",
      type: "starting"
    },
    deliveryTime: "3-5 Days"
  },
  {
    id: 4,
    title: "Networking Service — Custom Solutions",
    slug: "networking-solutions",
    shortDescription: "Professional networking setup for homes and businesses. LAN installation, WiFi configuration, router setup, and network security.",
    icon: "FaNetworkWired",
    category: "networking",
    order: 4,
    highlights: [
      "Structured cabling",
      "High-speed network setup",
      "Secure WiFi configuration",
      "Remote monitoring options"
    ],
    deliveryTime: "1-3 Days"
  },
  {
    id: 5,
    title: "All Printer Retail Services / Toner Replacement",
    slug: "printer-services",
    shortDescription: "Complete printer solutions—sales, repair, maintenance, and genuine toner replacement for all brands.",
    icon: "FaPrint",
    category: "hardware",
    order: 5,
    highlights: [
      "All major brands supported",
      "Genuine consumables",
      "Quick service response",
      "Competitive pricing"
    ],
    deliveryTime: "Same Day to 2 Days"
  },
  {
    id: 6,
    title: "Online Desktop/Remote Support",
    slug: "remote-support",
    shortDescription: "Get expert technical assistance remotely. Software installation, troubleshooting, virus removal, and system optimization.",
    icon: "FaHeadset",
    category: "support",
    order: 6,
    highlights: [
      "Instant support available",
      "Secure remote connection",
      "Experienced technicians",
      "Cost-effective solution"
    ],
    pricing: {
      amount: "₹300/hour",
      type: "hourly"
    },
    deliveryTime: "Immediate"
  },
  {
    id: 7,
    title: "AMC (Annual Maintenance Contract)",
    slug: "annual-maintenance-contract",
    shortDescription: "Comprehensive annual maintenance contracts for businesses. Regular servicing, priority support, and cost-effective IT management.",
    icon: "FaFileContract",
    category: "support",
    order: 7,
    highlights: [
      "Cost-effective IT management",
      "Reduced downtime",
      "Expert technical support",
      "Customizable plans"
    ],
    pricing: {
      amount: "₹5,000/year",
      type: "starting"
    },
    deliveryTime: "Immediate activation"
  },
  {
    id: 8,
    title: "All Types CCTV Camera Fitting and Services",
    slug: "cctv-installation",
    shortDescription: "Professional CCTV camera installation and maintenance. HD cameras, DVR/NVR setup, remote viewing, and complete security solutions.",
    icon: "FaVideo",
    category: "security",
    order: 8,
    highlights: [
      "Professional installation",
      "Quality branded cameras",
      "Mobile app viewing",
      "Maintenance support"
    ],
    pricing: {
      amount: "₹15,000",
      type: "starting"
    },
    deliveryTime: "2-3 Days"
  },
  {
    id: 9,
    title: "Virus Removal and Installation",
    slug: "virus-removal-installation",
    shortDescription: "Complete PC cleanup and OS installation services. Virus removal, malware cleanup, Windows installation, and software setup.",
    icon: "FaShieldAlt",
    category: "software",
    order: 9,
    highlights: [
      "Data safety guaranteed",
      "Genuine Windows installation",
      "Complete system cleanup",
      "Software recommendations"
    ],
    pricing: {
      amount: "₹500 - ₹1,500",
      type: "fixed"
    },
    deliveryTime: "Same Day"
  },
  {
    id: 10,
    title: "Data Backup",
    slug: "data-backup-services",
    shortDescription: "Professional data backup and recovery solutions. Cloud backup, external storage, and automated backup systems.",
    icon: "FaDatabase",
    category: "support",
    order: 10,
    highlights: [
      "Secure data protection",
      "Multiple backup options",
      "Easy restoration process",
      "Business continuity"
    ],
    pricing: {
      amount: "₹1,000",
      type: "starting"
    },
    deliveryTime: "1-2 Days"
  },
  {
    id: 11,
    title: "Provide Consultation on PC, Laptops, and Peripherals",
    slug: "it-consultation",
    shortDescription: "Expert advice on buying PCs, laptops, and peripherals. Configuration recommendations, budget planning, and vendor selection.",
    icon: "FaUserTie",
    category: "consultation",
    order: 11,
    highlights: [
      "Unbiased expert advice",
      "Cost-effective solutions",
      "Latest technology insights",
      "Free initial consultation"
    ],
    pricing: {
      amount: "Free consultation",
      type: "custom"
    },
    deliveryTime: "Immediate"
  }
];

// Helper function to get service by slug
export const getServiceBySlug = (slug: string): StaticService | undefined => {
  return staticServices.find(service => service.slug === slug);
};

// Helper function to get services by category
export const getServicesByCategory = (category: string): StaticService[] => {
  return staticServices.filter(service => service.category === category);
};

