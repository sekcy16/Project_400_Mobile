import { Ionicons } from '@expo/vector-icons';
import React, { useRef, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  Dimensions,
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import SpecialDealCard from './SpecialDealCard';
import { SpecialDealItem, specialDealsData } from './specialDealsData';

const { width } = Dimensions.get('window');

interface SpecialDealsComponentProps {
  title?: string;
  subtitle?: string;
  onViewMore?: () => void;
  maxItems?: number;
  showNavigationButtons?: boolean;
  cardWidth?: number;
}

const SpecialDealsComponent: React.FC<SpecialDealsComponentProps> = ({ 
  title = "Bestsellers", 
  subtitle = "The hottest items on our marketplace – discover what captured our users' hearts!",
  onViewMore,
  maxItems = 10,
  showNavigationButtons = true,
  cardWidth = width * 0.75
}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const flatListRef = useRef<FlatList<SpecialDealItem>>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // จำกัดจำนวน items ที่แสดง
  const displayData = specialDealsData.slice(0, maxItems);

  const handleItemPress = (item: SpecialDealItem) => {
    Alert.alert(
      item.sku,
      `Platform: ${item.platform}\nDiscount: ${item.discount}\nPrice: ${item.discountedPrice}`,
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'View Details', onPress: () => console.log('Navigate to details:', item.id) }
      ]
    );
  };

  const scrollToNext = () => {
    if (currentIndex < displayData.length - 1) {
      const nextIndex = currentIndex + 1;
      flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
      setCurrentIndex(nextIndex);
    }
  };

  const scrollToPrevious = () => {
    if (currentIndex > 0) {
      const prevIndex = currentIndex - 1;
      flatListRef.current?.scrollToIndex({ index: prevIndex, animated: true });
      setCurrentIndex(prevIndex);
    }
  };

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollPosition / cardWidth);
    setCurrentIndex(index);
  };

  const renderItem = ({ item, index }: { item: SpecialDealItem; index: number }) => (
    <SpecialDealCard
      item={item}
      onPress={() => handleItemPress(item)}
      width={cardWidth}
      style={{ marginRight: index === displayData.length - 1 ? 20 : 10 }}
    />
  );

  const keyExtractor = (item: SpecialDealItem) => item.id.toString();

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
        
        {onViewMore && (
          <TouchableOpacity style={styles.viewMoreButton} onPress={onViewMore}>
            <Text style={styles.viewMoreText}>View More</Text>
            <Ionicons name="arrow-forward" size={16} color="#FF6B35" />
          </TouchableOpacity>
        )}
      </View>

      {/* Loading Indicator */}
      {loading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#FF6B35" />
        </View>
      )}

      {/* Special Deals List */}
      <View style={styles.listContainer}>
        <FlatList
          ref={flatListRef}
          data={displayData}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled={false}
          snapToInterval={cardWidth + 10}
          snapToAlignment="start"
          decelerationRate="fast"
          contentContainerStyle={styles.flatListContent}
          onScroll={handleScroll}
          scrollEventThrottle={16}
          getItemLayout={(data, index) => ({
            length: cardWidth + 10,
            offset: (cardWidth + 10) * index,
            index,
          })}
        />

        {/* Navigation Buttons */}
        {showNavigationButtons && (
          <View style={styles.navigationContainer}>
            <TouchableOpacity
              style={[
                styles.navigationButton,
                styles.prevButton,
                currentIndex === 0 && styles.disabledButton
              ]}
              onPress={scrollToPrevious}
              disabled={currentIndex === 0}
            >
              <Ionicons 
                name="chevron-back" 
                size={24} 
                color={currentIndex === 0 ? "#ccc" : "#FF6B35"} 
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.navigationButton,
                styles.nextButton,
                currentIndex === displayData.length - 1 && styles.disabledButton
              ]}
              onPress={scrollToNext}
              disabled={currentIndex === displayData.length - 1}
            >
              <Ionicons 
                name="chevron-forward" 
                size={24} 
                color={currentIndex === displayData.length - 1 ? "#ccc" : "#FF6B35"} 
              />
            </TouchableOpacity>
          </View>
        )}
      </View>

      {/* Pagination Dots */}
      <View style={styles.paginationContainer}>
        {displayData.map((_, index) => (
          <View
            key={index}
            style={[
              styles.paginationDot,
              index === currentIndex && styles.activePaginationDot
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingVertical: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  titleContainer: {
    flex: 1,
    marginRight: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  viewMoreButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: '#f8f9fa',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#FF6B35',
  },
  viewMoreText: {
    fontSize: 14,
    color: '#FF6B35',
    fontWeight: '600',
    marginRight: 5,
  },
  loadingContainer: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContainer: {
    position: 'relative',
  },
  flatListContent: {
    paddingLeft: 20,
  },
  navigationContainer: {
    position: 'absolute',
    top: '50%',
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    zIndex: 1,
    transform: [{ translateY: -20 }],
  },
  navigationButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  prevButton: {
    marginLeft: 5,
  },
  nextButton: {
    marginRight: 5,
  },
  disabledButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 20,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#e0e0e0',
    marginHorizontal: 4,
  },
  activePaginationDot: {
    backgroundColor: '#FF6B35',
    width: 20,
  },
});

export default SpecialDealsComponent;