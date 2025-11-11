// Static Products Data for D P System
// Hardcoded products displayed on landing page for fast loading
// Detail pages still fetch from Sanity CMS

export interface StaticProduct {
  id: number;
  title: string;
  slug: string;
  description: string;
  icon: string;
  category: string;
  features: string[];
  priceRange?: string;
  availability?: string;
  warranty?: string;
  imageUrl?: string; // High-quality product image URL
}

// All 10 product categories for D P System
export const staticProducts: StaticProduct[] = [
  {
    id: 1,
    title: "Custom PC",
    slug: "custom-pc",
    description: "Build your dream PC with our custom configuration service. Choose your components and we'll assemble it perfectly.",
    icon: "FaDesktop",
    category: "custom-pc",
    features: [
      "Latest generation processors",
      "High-performance graphics cards",
      "RGB lighting options",
      "Professional cable management"
    ],
    priceRange: "Starting from ₹25,000",
    availability: "made-to-order",
    warranty: "1 Year Standard Warranty",
    imageUrl: "/images/products/custompc.jpg" // Local high-quality custom PC image
  },
  {
    id: 2,
    title: "Laptops",
    slug: "laptops",
    description: "Wide range of laptops from all major brands. Business, gaming, and personal laptops with warranty and support.",
    icon: "FaLaptop",
    category: "laptop",
    features: [
      "All major brands available",
      "Student to professional range",
      "Gaming laptops",
      "Business notebooks",
      "Warranty and support included"
    ],
    priceRange: "₹25,000 - ₹1,50,000",
    availability: "in-stock",
    warranty: "1-3 Years (varies by brand)",
    imageUrl: "/images/products/laptop.jpg" // Local high-quality image
  },
  {
    id: 3,
    title: "Monitors",
    slug: "monitors",
    description: "Quality monitors for every need. Gaming, professional, and budget-friendly options from leading brands.",
    icon: "FaTv",
    category: "monitor",
    features: [
      "Full HD to 4K resolution",
      "High refresh rate gaming monitors",
      "Professional color-accurate displays",
      "Wide range of sizes (19\" to 34\")"
    ],
    priceRange: "₹5,000 - ₹50,000",
    availability: "in-stock",
    warranty: "1-3 Years",
    imageUrl: "/images/products/moniter.jpg" // Local high-quality image
  },
  {
    id: 4,
    title: "Printers",
    slug: "printers",
    description: "All types of printers—inkjet, laser, thermal, and multifunction. Home and office printing solutions with service support.",
    icon: "FaPrint",
    category: "printer",
    features: [
      "Inkjet and laser printers",
      "Multifunction (print, scan, copy)",
      "Wireless printing support",
      "Cost-effective ink/toner"
    ],
    priceRange: "₹3,000 - ₹50,000",
    availability: "in-stock",
    warranty: "1 Year + Extended options",
    imageUrl: "/images/products/epson.png" // Local Epson printer image
  },
  {
    id: 5,
    title: "CCTV",
    slug: "cctv-systems",
    description: "Complete CCTV security systems with HD cameras, DVR/NVR, and remote viewing. Protect your home or business.",
    icon: "FaVideo",
    category: "cctv",
    features: [
      "HD (720p, 1080p, 4K) cameras",
      "Night vision capability",
      "Weather-resistant outdoor cameras",
      "Mobile app remote viewing"
    ],
    priceRange: "Starting from ₹15,000",
    availability: "in-stock",
    warranty: "1 Year",
    imageUrl: "/images/products/cctv.jpg" // Local high-quality image
  },
  {
    id: 6,
    title: "Hard Disk and SSD/NVMe",
    slug: "storage-devices",
    description: "High-quality storage solutions—HDD, SATA SSD, and NVMe M.2 drives. Upgrade your PC or laptop for faster performance.",
    icon: "FaHdd",
    category: "storage",
    features: [
      "Traditional HDDs (500GB to 8TB)",
      "SATA SSDs (128GB to 4TB)",
      "NVMe M.2 SSDs (256GB to 2TB)",
      "Portable external drives"
    ],
    priceRange: "₹1,500 - ₹25,000",
    availability: "in-stock",
    warranty: "3-5 Years (varies by brand)",
    imageUrl: "/images/products/ssd.jpg" // Local high-quality image
  },
  {
    id: 7,
    title: "RAM",
    slug: "ram-memory",
    description: "Computer memory modules for desktops and laptops. DDR3, DDR4, and DDR5 RAM for performance upgrades.",
    icon: "FaMicrochip",
    category: "ram",
    features: [
      "Desktop and laptop RAM",
      "DDR3, DDR4, DDR5 modules",
      "4GB to 64GB capacity",
      "RGB lighting options"
    ],
    priceRange: "₹1,200 - ₹15,000",
    availability: "in-stock",
    warranty: "Lifetime (most brands)",
    imageUrl: "https://images.unsplash.com/photo-1541029071515-84cc54f84dc5?w=800&q=80"
  },
  {
    id: 8,
    title: "Networking Cable",
    slug: "networking-cables",
    description: "Quality networking cables and accessories. Cat5e, Cat6, Cat6a cables, connectors, and networking tools.",
    icon: "FaEthernet",
    category: "networking",
    features: [
      "Cat5e, Cat6, Cat6a cables",
      "Patch cords (ready-made)",
      "Bulk cable rolls",
      "RJ45 connectors and jacks"
    ],
    priceRange: "₹15 - ₹5,000",
    availability: "in-stock",
    warranty: "Varies by product",
    imageUrl: "/images/products/netwoking.jpg" // Local high-quality image
  },
  {
    id: 9,
    title: "All Peripherals",
    slug: "computer-peripherals",
    description: "Complete range of computer peripherals—keyboards, mice, webcams, speakers, and accessories for enhanced productivity.",
    icon: "FaKeyboard",
    category: "peripheral",
    features: [
      "Mechanical and membrane keyboards",
      "Wired and wireless mice",
      "HD webcams",
      "Speakers and headphones",
      "USB hubs and adapters"
    ],
    priceRange: "₹200 - ₹10,000",
    availability: "in-stock",
    warranty: "6 Months to 2 Years",
    imageUrl: "/images/products/peripherals.jpg" // Local high-quality image
  },
  {
    id: 10,
    title: "WiFi Routers",
    slug: "wifi-routers",
    description: "High-speed wireless routers and networking equipment. Dual-band, tri-band, and mesh WiFi systems for home and office.",
    icon: "FaWifi",
    category: "router",
    features: [
      "Dual-band and tri-band routers",
      "Mesh WiFi systems",
      "High-speed AC and AX standards",
      "Gigabit Ethernet ports",
      "Advanced security features"
    ],
    priceRange: "₹800 - ₹25,000",
    availability: "in-stock",
    warranty: "1-2 Years (varies by brand)",
    imageUrl: "/images/products/router.jpg" // Local router/WiFi image
  }
];

// Helper function to get product by slug
export const getProductBySlug = (slug: string): StaticProduct | undefined => {
  return staticProducts.find(product => product.slug === slug);
};

// Helper function to get products by category
export const getProductsByCategory = (category: string): StaticProduct[] => {
  return staticProducts.filter(product => product.category === category);
};

