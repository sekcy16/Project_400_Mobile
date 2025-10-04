// ข้อมูลข้อเสนอพิเศษ (Special Deals) สำหรับ React Native

export interface SpecialDealItem {
  id: string;
  title: string;
  sku: string;
  image: string;
  discount: string;
  originalPrice: string;
  discountedPrice: string;
  rating: number;
  reviewCount: number;
  platform: string;
  region: string;
  category: string;
}

export const specialDealsData: SpecialDealItem[] = [
  {
    id: "2039",
    title: "Steam • Account • GLOBAL",
    sku: "Battlefield 6 Phantom Edition PC",
    image: "https://images.g2a.com/uiadminimages/170x226/1x1x0/battlefield-6-phantom-edition-pc/49f1af701a5e47f28101a6cd",
    discount: "41.0%",
    originalPrice: "€69.99",
    discountedPrice: "€41.29",
    rating: 4.5,
    reviewCount: 1250,
    platform: "Steam",
    region: "GLOBAL",
    category: "Action"
  },
  {
    id: "2040",
    title: "Steam • Account • GLOBAL", 
    sku: "Peak PC",
    image: "https://images.g2a.com/uiadminimages/170x226/1x1x0/peak-pc/87af7d3ac0bd414f9f286aea",
    discount: "69.0%",
    originalPrice: "€29.99",
    discountedPrice: "€9.29",
    rating: 4.2,
    reviewCount: 820,
    platform: "Steam",
    region: "GLOBAL",
    category: "Adventure"
  },
  {
    id: "2041",
    title: "EA App • KEY",
    sku: "Battlefield 2042 PC",
    image: "https://images.g2a.com/uiadminimages/170x226/1x1x0/battlefield-2042-pc/7a882745aa1a482892ad2aa7",
    discount: "81.0%",
    originalPrice: "€59.99",
    discountedPrice: "€11.39",
    rating: 3.8,
    reviewCount: 2100,
    platform: "EA App",
    region: "GLOBAL",
    category: "FPS"
  },
  {
    id: "2042",
    title: "Steam • Key • GLOBAL",
    sku: "Warhammer 40,000: Space Marine 2 PC",
    image: "https://images.g2a.com/uiadminimages/170x226/1x1x0/warhammer-40000-space-marine-2-pc/85b81c1357dd497384071daf",
    discount: "41.0%",
    originalPrice: "€59.99",
    discountedPrice: "€35.39",
    rating: 4.7,
    reviewCount: 890,
    platform: "Steam",
    region: "GLOBAL",
    category: "Action"
  },
  {
    id: "2043",
    title: "Microsoft • Key • GLOBAL",
    sku: "Microsoft Windows 11 Home - PC",
    image: "https://images.g2a.com/uiadminimages/170x226/1x1x0/microsoft-windows-11-home-pc/170274206c1e4db397c4668e",
    discount: "81.0%",
    originalPrice: "€145.00",
    discountedPrice: "€27.55",
    rating: 4.3,
    reviewCount: 3200,
    platform: "Microsoft",
    region: "GLOBAL",
    category: "Software"
  },
  {
    id: "2044",
    title: "Steam • Key • GLOBAL",
    sku: "Total War: THREE KINGDOMS Royal Edition PC",
    image: "https://images.g2a.com/uiadminimages/170x226/1x1x0/total-war-three-kingdoms-royal-edition-pc/428c0b9fe6f544558d563252",
    discount: "52.0%",
    originalPrice: "€79.99",
    discountedPrice: "€38.39",
    rating: 4.6,
    reviewCount: 1540,
    platform: "Steam",
    region: "GLOBAL",
    category: "Strategy"
  },
  {
    id: "2045",
    title: "Microsoft Store • Key • GLOBAL",
    sku: "Minecraft: Java & Bedrock Edition Java & Bedrock Edition PC",
    image: "https://images.g2a.com/uiadminimages/170x226/1x1x0/minecraft-java-and-bedrock-edition-java-and-bedrock-edition-pc/b2b8cb146e9447d9af4613dd",
    discount: "81.0%",
    originalPrice: "€26.95",
    discountedPrice: "€5.12",
    rating: 4.9,
    reviewCount: 5600,
    platform: "Microsoft Store",
    region: "GLOBAL",
    category: "Sandbox"
  },
  {
    id: "2046",
    title: "RockStar • Key • GLOBAL",
    sku: "Grand Theft Auto V Enhanced PC",
    image: "https://images.g2a.com/uiadminimages/170x226/1x1x0/grand-theft-auto-v-enhanced-pc/59e5efeb5bafe304c4426c47",
    discount: "77.0%",
    originalPrice: "€39.99",
    discountedPrice: "€9.19",
    rating: 4.8,
    reviewCount: 8900,
    platform: "RockStar",
    region: "GLOBAL",
    category: "Action"
  },
  {
    id: "2047",
    title: "Steam • Gift • GLOBAL",
    sku: "Project Zomboid PC",
    image: "https://images.g2a.com/uiadminimages/170x226/1x1x0/project-zomboid-pc/5911ec31ae653ab87820ee42",
    discount: "62.0%",
    originalPrice: "€16.79",
    discountedPrice: "€6.38",
    rating: 4.4,
    reviewCount: 2800,
    platform: "Steam",
    region: "GLOBAL",
    category: "Survival"
  },
  {
    id: "2048",
    title: "Steam • Key • GLOBAL",
    sku: "Squad Commander Edition PC",
    image: "https://images.g2a.com/uiadminimages/170x226/1x1x0/squad-commander-edition-pc/5912cc4fae653a844f6059b1",
    discount: "34.0%",
    originalPrice: "€49.99",
    discountedPrice: "€32.99",
    rating: 4.1,
    reviewCount: 670,
    platform: "Steam",
    region: "GLOBAL",
    category: "Tactical"
  },
  // Mobile/Direct Top Up Items
  {
    id: "3001",
    title: "Razer Gold • Malaysia (MYR)",
    sku: "Razer Gold 50MYR",
    image: "https://images.g2a.com/uiadminimages/170x226/1x1x0/razer-gold-50myr/5c8e8f29ae653a0c642a8f89",
    discount: "3.0%",
    originalPrice: "RM 56.00",
    discountedPrice: "RM 54.32",
    rating: 4.8,
    reviewCount: 1580,
    platform: "Razer Gold",
    region: "Malaysia",
    category: "Mobile Credit"
  },
  {
    id: "3002",
    title: "Mobile Legends • Diamonds Pin",
    sku: "Mobile Legends 1159 Diamonds Pin",
    image: "https://images.g2a.com/uiadminimages/170x226/1x1x0/mobile-legends-1159-diamonds/7c9e8f29ae653a0c642a8f90",
    discount: "5.0%",
    originalPrice: "RM 94.92",
    discountedPrice: "RM 90.17",
    rating: 4.7,
    reviewCount: 2240,
    platform: "Mobile Legends",
    region: "Global",
    category: "Mobile Game"
  },
  {
    id: "3003",
    title: "Grab • Transportation (RM5)",
    sku: "Travel & Transportation (RM5 GRAB)",
    image: "https://images.g2a.com/uiadminimages/170x226/1x1x0/grab-transportation/8d1e8f29ae653a0c642a8f91",
    discount: "0%",
    originalPrice: "FREE",
    discountedPrice: "FREE",
    rating: 4.5,
    reviewCount: 890,
    platform: "Grab",
    region: "Malaysia",
    category: "Transportation"
  },
  {
    id: "3004",
    title: "11835 Diamonds",
    sku: "11835 Diamonds",
    image: "https://images.g2a.com/uiadminimages/170x226/1x1x0/11835-diamonds/9e2e8f29ae653a0c642a8f92",
    discount: "6.0%",
    originalPrice: "RM 78.61",
    discountedPrice: "RM 73.89",
    rating: 4.6,
    reviewCount: 1920,
    platform: "Mobile Game",
    region: "Global",
    category: "Mobile Game"
  }
];

// ฟังก์ชันสำหรับกรองข้อมูลตามหมวดหมู่
export const getSpecialDealsByCategory = (category?: string): SpecialDealItem[] => {
  if (!category) return specialDealsData;
  return specialDealsData.filter(item => item.category.toLowerCase() === category.toLowerCase());
};

// ฟังก์ชันสำหรับกรองข้อมูลตาม platform
export const getSpecialDealsByPlatform = (platform?: string): SpecialDealItem[] => {
  if (!platform) return specialDealsData;
  return specialDealsData.filter(item => item.platform.toLowerCase().includes(platform.toLowerCase()));
};

// ฟังก์ชันสำหรับค้นหา
export const searchSpecialDeals = (searchTerm?: string): SpecialDealItem[] => {
  if (!searchTerm) return specialDealsData;
  const term = searchTerm.toLowerCase();
  return specialDealsData.filter(item => 
    item.title.toLowerCase().includes(term) ||
    item.sku.toLowerCase().includes(term) ||
    item.category.toLowerCase().includes(term)
  );
};