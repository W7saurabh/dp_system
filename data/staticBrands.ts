// Static Brand Partners Data for D P System
// Each brand includes: id, name, category, logo URL, website, featured status, and display order
// Brands are organized by priority: PC/Laptop/Motherboard/Printer first, then others
// Using reliable logo sources with fallback support

export interface Brand {
  id: string;
  name: string;
  category: string;
  logo: string;
  logos?: string[]; // Optional list of alternative logo sources for robustness
  website: string;
  featured: boolean;
  order: number; // Display order (lower = appears first)
}

export const brands: Brand[] = [
  // ============================================
  // PRIORITY GROUP 1: PC, LAPTOP, MOTHERBOARD BRANDS
  // ============================================
  
  // Laptops & Desktop Computers
  {
    id: 'dell',
    name: 'Dell',
    category: 'Laptops & Desktops',
    logo: 'https://logo.clearbit.com/dell.com',
    website: 'https://www.dell.com',
    featured: true,
    order: 1
  },
  {
    id: 'hp',
    name: 'HP',
    category: 'Laptops & Computers',
    logo: 'https://logo.clearbit.com/hp.com',
    website: 'https://www.hp.com',
    featured: true,
    order: 2
  },
  {
    id: 'lenovo',
    name: 'Lenovo',
    category: 'Laptops & Desktops',
    logo: 'https://logo.clearbit.com/lenovo.com',
    website: 'https://www.lenovo.com',
    featured: true,
    order: 3
  },
  {
    id: 'asus',
    name: 'ASUS',
    category: 'Laptops & Motherboards',
    logo: 'https://logo.clearbit.com/asus.com',
    website: 'https://www.asus.com',
    featured: true,
    order: 4
  },
  {
    id: 'acer',
    name: 'Acer',
    category: 'Laptops & Computers',
    logo: 'https://logo.clearbit.com/acer.com',
    website: 'https://www.acer.com',
    featured: true,
    order: 8
  },
  
  // Processors & Graphics
  {
    id: 'intel',
    name: 'Intel',
    category: 'Processors',
    logo: 'https://logo.clearbit.com/intel.com',
    website: 'https://www.intel.com',
    featured: true,
    order: 6
  },
  {
    id: 'amd',
    name: 'AMD',
    category: 'Processors & Graphics',
    logo: 'https://logo.clearbit.com/amd.com',
    website: 'https://www.amd.com',
    featured: true,
    order: 7
  },
  {
    id: 'nvidia',
    name: 'NVIDIA',
    category: 'Graphics Cards',
    logo: 'https://logo.clearbit.com/nvidia.com',
    logos: [
      'https://logo.clearbit.com/nvidia.com',
      'https://www.vectorlogo.zone/logos/nvidia/nvidia-icon.svg',
      'https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg'
    ],
    website: 'https://www.nvidia.com',
    featured: true,
    order: 5
  },
  
  // Motherboards & Gaming Hardware
  {
    id: 'msi',
    name: 'MSI',
    category: 'Motherboards & Gaming',
    logo: 'https://logo.clearbit.com/msi.com',
    logos: [
      'https://logo.clearbit.com/msi.com',
      'https://www.vectorlogo.zone/logos/msi-computer/msi-computer-icon.svg',
      'https://upload.wikimedia.org/wikipedia/commons/1/1e/MSI_Logo.svg'
    ],
    website: 'https://www.msi.com',
    featured: true,
    order: 9
  },
  {
    id: 'gigabyte',
    name: 'Gigabyte',
    category: 'Motherboards & Graphics',
    logo: 'https://logo.clearbit.com/gigabyte.com',
    website: 'https://www.gigabyte.com',
    featured: true,
    order: 10
  },
  {
    id: 'asrock',
    name: 'ASRock',
    category: 'Motherboards',
    logo: 'https://logo.clearbit.com/asrock.com',
    website: 'https://www.asrock.com',
    featured: true,
    order: 11
  },
  
  // ============================================
  // PRIORITY GROUP 2: PRINTER BRANDS
  // ============================================
  {
    id: 'canon',
    name: 'Canon',
    category: 'Printers & Scanners',
    logo: 'https://logo.clearbit.com/canon.com',
    website: 'https://www.canon.com',
    featured: true,
    order: 12
  },
  {
    id: 'epson',
    name: 'Epson',
    category: 'Printers & Scanners',
    logo: 'https://logo.clearbit.com/epson.com',
    website: 'https://www.epson.com',
    featured: true,
    order: 13
  },
  {
    id: 'brother',
    name: 'Brother',
    category: 'Printers & Scanners',
    logo: 'https://logo.clearbit.com/brother.com',
    website: 'https://www.brother.com',
    featured: true,
    order: 14
  },
  
  // Monitors & Displays
  {
    id: 'samsung',
    name: 'Samsung',
    category: 'Monitors & Displays',
    logo: 'https://logo.clearbit.com/samsung.com',
    logos: [
      'https://logo.clearbit.com/samsung.com',
      'https://www.vectorlogo.zone/logos/samsung/samsung-icon.svg',
      'https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg'
    ],
    website: 'https://www.samsung.com',
    featured: true,
    order: 15
  },
  {
    id: 'benq',
    name: 'BenQ',
    category: 'Monitors & Displays',
    logo: 'https://logo.clearbit.com/benq.com',
    website: 'https://www.benq.com',
    featured: true,
    order: 16
  },
  {
    id: 'lg',
    name: 'LG',
    category: 'Monitors & Displays',
    logo: 'https://logo.clearbit.com/lg.com',
    website: 'https://www.lg.com',
    featured: true,
    order: 17
  },
  
  // ============================================
  // GROUP 3: CCTV & SURVEILLANCE (Camera Hardware)
  // ============================================
  {
    id: 'dahua',
    name: 'Dahua',
    category: 'CCTV & Surveillance',
    logo: 'https://logo.clearbit.com/dahuasecurity.com',
    logos: [
      'https://logo.clearbit.com/dahuasecurity.com'
    ],
    website: 'https://www.dahuasecurity.com',
    featured: true,
    order: 18
  },
  {
    id: 'cpplus',
    name: 'CP Plus',
    category: 'CCTV & Surveillance',
    logo: 'https://logo.clearbit.com/cpplusworld.com',
    logos: [
      'https://logo.clearbit.com/cpplusworld.com',
      'https://logo.clearbit.com/cpplus.in'
    ],
    website: 'https://www.cpplus.in',
    featured: true,
    order: 19
  },
  {
    id: 'unv',
    name: 'Uniview',
    category: 'CCTV & Surveillance',
    logo: 'https://logo.clearbit.com/uniview.com',
    logos: [
      'https://logo.clearbit.com/uniview.com'
    ],
    website: 'https://www.uniview.com',
    featured: true,
    order: 20
  },
  {
    id: 'hifocus',
    name: 'Hifocus',
    category: 'CCTV & Surveillance',
    logo: 'https://logo.clearbit.com/hifocus.in',
    logos: [
      'https://logo.clearbit.com/hifocus.in',
      'https://logo.clearbit.com/hifocuscctv.com'
    ],
    website: 'https://www.hifocus.in',
    featured: true,
    order: 21
  },
  {
    id: 'hikvision',
    name: 'Hikvision',
    category: 'CCTV & Surveillance',
    logo: 'https://logo.clearbit.com/hikvision.com',
    logos: [
      'https://logo.clearbit.com/hikvision.com',
      'https://logo.clearbit.com/hikvisionindia.com'
    ],
    website: 'https://www.hikvision.com',
    featured: true,
    order: 22
  },
  
  // ============================================
  // GROUP 4: NETWORKING & WIFI
  // ============================================
  {
    id: 'dlink',
    name: 'D-Link',
    category: 'Networking & WiFi',
    logo: 'https://logo.clearbit.com/dlink.com',
    logos: [
      'https://logo.clearbit.com/dlink.com'
    ],
    website: 'https://www.dlink.com',
    featured: true,
    order: 23
  },
  {
    id: 'tplink',
    name: 'TP-Link',
    category: 'Networking & WiFi',
    logo: 'https://logo.clearbit.com/tp-link.com',
    logos: [
      'https://logo.clearbit.com/tp-link.com'
    ],
    website: 'https://www.tp-link.com',
    featured: true,
    order: 24
  },
  {
    id: 'cisco',
    name: 'Cisco',
    category: 'Networking',
    logo: 'https://logo.clearbit.com/cisco.com',
    website: 'https://www.cisco.com',
    featured: true,
    order: 25
  },
  {
    id: 'netgear',
    name: 'NETGEAR',
    category: 'Networking & WiFi',
    logo: 'https://logo.clearbit.com/netgear.com',
    website: 'https://www.netgear.com',
    featured: true,
    order: 26
  },
  
  // ============================================
  // GROUP 5: PERIPHERALS
  // ============================================
  {
    id: 'logitech',
    name: 'Logitech',
    category: 'Peripherals',
    logo: 'https://logo.clearbit.com/logitech.com',
    website: 'https://www.logitech.com',
    featured: true,
    order: 27
  },
  {
    id: 'corsair',
    name: 'Corsair',
    category: 'Gaming Peripherals',
    logo: 'https://logo.clearbit.com/corsair.com',
    website: 'https://www.corsair.com',
    featured: true,
    order: 28
  },
  {
    id: 'razer',
    name: 'Razer',
    category: 'Gaming Peripherals',
    logo: 'https://logo.clearbit.com/razer.com',
    website: 'https://www.razer.com',
    featured: true,
    order: 29
  },
  
  // ============================================
  // GROUP 6: STORAGE SOLUTIONS
  // ============================================
  {
    id: 'western-digital',
    name: 'Western Digital',
    category: 'Storage Solutions',
    logo: 'https://logo.clearbit.com/westerndigital.com',
    website: 'https://www.westerndigital.com',
    featured: true,
    order: 30
  },
  {
    id: 'seagate',
    name: 'Seagate',
    category: 'Storage Solutions',
    logo: 'https://logo.clearbit.com/seagate.com',
    website: 'https://www.seagate.com',
    featured: true,
    order: 31
  },
  {
    id: 'kingston',
    name: 'Kingston',
    category: 'Memory & Storage',
    logo: 'https://logo.clearbit.com/kingston.com',
    website: 'https://www.kingston.com',
    featured: true,
    order: 32
  },
  {
    id: 'crucial',
    name: 'Crucial',
    category: 'Memory & Storage',
    logo: 'https://logo.clearbit.com/crucial.com',
    website: 'https://www.crucial.com',
    featured: true,
    order: 33
  },
  {
    id: 'sandisk',
    name: 'SanDisk',
    category: 'Memory & Storage',
    logo: 'https://logo.clearbit.com/sandisk.com',
    website: 'https://www.sandisk.com',
    featured: true,
    order: 34
  }
];

// ============================================
// Helper Functions
// ============================================

// Get only featured brands (for homepage display) - Sorted by order
export const getFeaturedBrands = (): Brand[] => {
  return brands
    .filter(brand => brand.featured)
    .sort((a, b) => a.order - b.order);
};

// Get brands by specific category - Sorted by order
export const getBrandsByCategory = (category: string): Brand[] => {
  return brands
    .filter(brand => brand.category === category)
    .sort((a, b) => a.order - b.order);
};

// Get all unique categories
export const getAllCategories = (): string[] => {
  const categories = brands.map(brand => brand.category);
  return [...new Set(categories)];
};

// Group brands by category
export const brandsByCategory = brands.reduce((acc, brand) => {
  const category = brand.category;
  if (!acc[category]) {
    acc[category] = [];
  }
  acc[category].push(brand);
  return acc;
}, {} as Record<string, Brand[]>);

export default brands;

