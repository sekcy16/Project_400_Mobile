import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { SpecialDealItem } from './specialDealsData';

interface SpecialDealCardProps {
  item: SpecialDealItem;
  onPress: () => void;
  width?: number;
  style?: ViewStyle;
}

const SpecialDealCard: React.FC<SpecialDealCardProps> = ({ item, onPress, width = 280, style }) => {
  const [imageLoading, setImageLoading] = useState<boolean>(true);
  const [imageError, setImageError] = useState<boolean>(false);

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  const handleImageError = () => {
    setImageLoading(false);
    setImageError(true);
  };

  // สร้าง rating stars
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Ionicons key={i} name="star" size={12} color="#FFD700" />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <Ionicons key="half" name="star-half" size={12} color="#FFD700" />
      );
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Ionicons key={`empty-${i}`} name="star-outline" size={12} color="#DDD" />
      );
    }

    return stars;
  };

  return (
    <TouchableOpacity
      style={[styles.container, { width }, style]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      {/* Product Image */}
      <View style={styles.imageContainer}>
        {imageLoading && (
          <View style={styles.imageLoadingContainer}>
            <ActivityIndicator size="small" color="#FF6B35" />
          </View>
        )}
        
        {!imageError ? (
          <Image
            source={{ uri: item.image }}
            style={styles.productImage}
            onLoad={handleImageLoad}
            onError={handleImageError}
            resizeMode="cover"
          />
        ) : (
          <View style={styles.errorImageContainer}>
            <Ionicons name="image-outline" size={40} color="#ccc" />
          </View>
        )}

        {/* Discount Badge */}
        <View style={styles.discountBadge}>
          <Text style={styles.discountText}>-{item.discount}</Text>
        </View>

        {/* Platform Badge */}
        <View style={styles.platformBadge}>
          <Text style={styles.platformText}>{item.platform}</Text>
        </View>
      </View>

      {/* Content */}
      <View style={styles.content}>
        {/* SKU Title */}
        <Text style={styles.sku} numberOfLines={2} ellipsizeMode="tail">
          {item.sku}
        </Text>

        {/* Platform & Region */}
        <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
          {item.title}
        </Text>

        {/* Rating */}
        <View style={styles.ratingContainer}>
          <View style={styles.starsContainer}>
            {renderStars(item.rating)}
          </View>
          <Text style={styles.ratingText}>
            {item.rating} ({item.reviewCount})
          </Text>
        </View>

        {/* Price Section */}
        <View style={styles.priceContainer}>
          <View style={styles.priceRow}>
            <Text style={styles.originalPrice}>{item.originalPrice}</Text>
            <Text style={styles.discountedPrice}>{item.discountedPrice}</Text>
          </View>
        </View>

        {/* Category Tag */}
        <View style={styles.categoryContainer}>
          <Text style={styles.categoryText}>{item.category}</Text>
        </View>
      </View>

      {/* Action Button */}
      <TouchableOpacity style={styles.actionButton} onPress={onPress}>
        <Ionicons name="cart-outline" size={16} color="#fff" />
        <Text style={styles.actionButtonText}>Add to Cart</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
    marginVertical: 8,
    overflow: 'hidden',
  },
  imageContainer: {
    position: 'relative',
    height: 180,
    backgroundColor: '#f8f9fa',
  },
  imageLoadingContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    zIndex: 1,
  },
  productImage: {
    width: '100%',
    height: '100%',
  },
  errorImageContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  discountBadge: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: '#FF3366',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    zIndex: 2,
  },
  discountText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  platformBadge: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderRadius: 8,
    zIndex: 2,
  },
  platformText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: '600',
  },
  content: {
    padding: 15,
    flex: 1,
  },
  sku: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 5,
    lineHeight: 20,
  },
  title: {
    fontSize: 12,
    color: '#666',
    marginBottom: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  starsContainer: {
    flexDirection: 'row',
    marginRight: 8,
  },
  ratingText: {
    fontSize: 11,
    color: '#888',
  },
  priceContainer: {
    marginBottom: 10,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  originalPrice: {
    fontSize: 14,
    color: '#999',
    textDecorationLine: 'line-through',
  },
  discountedPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF6B35',
  },
  categoryContainer: {
    alignSelf: 'flex-start',
  },
  categoryText: {
    fontSize: 11,
    color: '#666',
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 10,
    overflow: 'hidden',
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF6B35',
    paddingVertical: 12,
    paddingHorizontal: 15,
    margin: 10,
    marginTop: 0,
    borderRadius: 8,
  },
  actionButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 6,
  },
});

export default SpecialDealCard;