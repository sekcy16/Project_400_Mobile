// TypeScript definitions for Special Deals React Native Component

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

export interface SpecialDealsComponentProps {
  title?: string;
  subtitle?: string;
  onViewMore?: () => void;
  maxItems?: number;
  showNavigationButtons?: boolean;
  cardWidth?: number;
  data?: SpecialDealItem[];
  style?: any;
}

export interface SpecialDealCardProps {
  item: SpecialDealItem;
  onPress: (item: SpecialDealItem) => void;
  width?: number;
  style?: any;
}

export declare const SpecialDealsComponent: React.FC<SpecialDealsComponentProps>;
export declare const SpecialDealCard: React.FC<SpecialDealCardProps>;

export declare const specialDealsData: SpecialDealItem[];

export declare function getSpecialDealsByCategory(category?: string): SpecialDealItem[];
export declare function getSpecialDealsByPlatform(platform?: string): SpecialDealItem[];
export declare function searchSpecialDeals(searchTerm?: string): SpecialDealItem[];

export declare function formatPrice(price: string | number): string;
export declare function calculateDiscountAmount(originalPrice: string, discountedPrice: string): number;
export declare function formatDiscountPercentage(discount: string): string;
export declare function truncateText(text: string, maxLength: number): string;
export declare function getPlatformIcon(platform: string): string;
export declare function getCategoryColor(category: string): string;
export declare function sortDealsByDiscount(deals: SpecialDealItem[], ascending?: boolean): SpecialDealItem[];
export declare function sortDealsByPrice(deals: SpecialDealItem[], ascending?: boolean): SpecialDealItem[];
export declare function sortDealsByRating(deals: SpecialDealItem[], ascending?: boolean): SpecialDealItem[];
export declare function formatReviewCount(count: number): string;
export declare function validateImageUrl(url: string): boolean;
export declare function debounce(func: Function, wait: number): Function;