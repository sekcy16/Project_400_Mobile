// Utility functions for Special Deals component

export const formatPrice = (price) => {
  // แปลงราคาให้เป็นรูปแบบที่ต้องการ
  if (typeof price === 'string') {
    return price;
  }
  return `€${price.toFixed(2)}`;
};

export const calculateDiscountAmount = (originalPrice, discountedPrice) => {
  const original = parseFloat(originalPrice.replace('€', ''));
  const discounted = parseFloat(discountedPrice.replace('€', ''));
  return original - discounted;
};

export const formatDiscountPercentage = (discount) => {
  // แปลง discount percentage ให้เป็นรูปแบบที่ต้องการ
  return discount.replace('%', '') + '%';
};

export const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};

export const getPlatformIcon = (platform) => {
  const platformIcons = {
    'Steam': 'logo-steam',
    'EA App': 'game-controller',
    'Microsoft': 'logo-windows',
    'Microsoft Store': 'logo-windows',
    'RockStar': 'game-controller',
    'default': 'desktop'
  };
  
  return platformIcons[platform] || platformIcons.default;
};

export const getCategoryColor = (category) => {
  const categoryColors = {
    'Action': '#FF6B6B',
    'Adventure': '#4ECDC4',
    'FPS': '#45B7D1',
    'Strategy': '#96CEB4',
    'Software': '#FECA57',
    'Sandbox': '#A29BFE',
    'Survival': '#6C5CE7',
    'Tactical': '#FD79A8',
    'default': '#74B9FF'
  };
  
  return categoryColors[category] || categoryColors.default;
};

export const sortDealsByDiscount = (deals, ascending = false) => {
  return [...deals].sort((a, b) => {
    const discountA = parseFloat(a.discount.replace('%', ''));
    const discountB = parseFloat(b.discount.replace('%', ''));
    
    return ascending ? discountA - discountB : discountB - discountA;
  });
};

export const sortDealsByPrice = (deals, ascending = true) => {
  return [...deals].sort((a, b) => {
    const priceA = parseFloat(a.discountedPrice.replace('€', ''));
    const priceB = parseFloat(b.discountedPrice.replace('€', ''));
    
    return ascending ? priceA - priceB : priceB - priceA;
  });
};

export const sortDealsByRating = (deals, ascending = false) => {
  return [...deals].sort((a, b) => {
    return ascending ? a.rating - b.rating : b.rating - a.rating;
  });
};

export const formatReviewCount = (count) => {
  if (count < 1000) return count.toString();
  if (count < 1000000) return (count / 1000).toFixed(1) + 'K';
  return (count / 1000000).toFixed(1) + 'M';
};

export const validateImageUrl = (url) => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};