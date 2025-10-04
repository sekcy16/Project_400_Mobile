import React, { useState, useEffect } from 'react';
import {
  View,
  ScrollView,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {
  SpecialDealsComponent,
  getSpecialDealsByCategory,
  getSpecialDealsByPlatform,
  searchSpecialDeals,
  sortDealsByDiscount,
  sortDealsByPrice,
  sortDealsByRating
} from './index';

const AdvancedExampleApp = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPlatform, setSelectedPlatform] = useState('All');
  const [sortBy, setSortBy] = useState('discount'); // discount, price, rating
  const [filteredDeals, setFilteredDeals] = useState([]);

  const categories = ['All', 'Action', 'Adventure', 'FPS', 'Strategy', 'Software', 'Sandbox', 'Survival', 'Tactical'];
  const platforms = ['All', 'Steam', 'EA App', 'Microsoft', 'RockStar'];

  useEffect(() => {
    applyFilters();
  }, [searchQuery, selectedCategory, selectedPlatform, sortBy]);

  const applyFilters = () => {
    let deals = [];

    // Apply search
    if (searchQuery) {
      deals = searchSpecialDeals(searchQuery);
    } else {
      // Apply category filter
      if (selectedCategory !== 'All') {
        deals = getSpecialDealsByCategory(selectedCategory);
      } else {
        deals = getSpecialDealsByCategory(); // Get all
      }
    }

    // Apply platform filter
    if (selectedPlatform !== 'All') {
      deals = deals.filter(deal => deal.platform === selectedPlatform);
    }

    // Apply sorting
    switch (sortBy) {
      case 'discount':
        deals = sortDealsByDiscount(deals);
        break;
      case 'price':
        deals = sortDealsByPrice(deals);
        break;
      case 'rating':
        deals = sortDealsByRating(deals);
        break;
      default:
        break;
    }

    setFilteredDeals(deals);
  };

  const handleViewMore = () => {
    console.log('Navigate to detailed special deals page');
  };

  const renderFilterChips = (items, selectedItem, onSelect) => (
    <ScrollView 
      horizontal 
      showsHorizontalScrollIndicator={false}
      style={styles.chipsContainer}
      contentContainerStyle={styles.chipsContent}
    >
      {items.map((item) => (
        <TouchableOpacity
          key={item}
          style={[
            styles.chip,
            selectedItem === item && styles.selectedChip
          ]}
          onPress={() => onSelect(item)}
        >
          <Text style={[
            styles.chipText,
            selectedItem === item && styles.selectedChipText
          ]}>
            {item}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Gaming Store</Text>
        
        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color="#666" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search games, software..."
            value={searchQuery}
            onChangeText={setSearchQuery}
            clearButtonMode="while-editing"
          />
        </View>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        
        {/* Filters Section */}
        <View style={styles.filtersSection}>
          
          {/* Category Filter */}
          <View style={styles.filterGroup}>
            <Text style={styles.filterLabel}>Categories</Text>
            {renderFilterChips(categories, selectedCategory, setSelectedCategory)}
          </View>

          {/* Platform Filter */}
          <View style={styles.filterGroup}>
            <Text style={styles.filterLabel}>Platforms</Text>
            {renderFilterChips(platforms, selectedPlatform, setSelectedPlatform)}
          </View>

          {/* Sort Options */}
          <View style={styles.filterGroup}>
            <Text style={styles.filterLabel}>Sort by</Text>
            <ScrollView 
              horizontal 
              showsHorizontalScrollIndicator={false}
              style={styles.chipsContainer}
              contentContainerStyle={styles.chipsContent}
            >
              {[
                { key: 'discount', label: 'Discount' },
                { key: 'price', label: 'Price' },
                { key: 'rating', label: 'Rating' }
              ].map((item) => (
                <TouchableOpacity
                  key={item.key}
                  style={[
                    styles.chip,
                    sortBy === item.key && styles.selectedChip
                  ]}
                  onPress={() => setSortBy(item.key)}
                >
                  <Text style={[
                    styles.chipText,
                    sortBy === item.key && styles.selectedChipText
                  ]}>
                    {item.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>

        {/* Results Info */}
        <View style={styles.resultsInfo}>
          <Text style={styles.resultsText}>
            {filteredDeals.length} deals found
          </Text>
        </View>

        {/* Special Deals Component */}
        <SpecialDealsComponent
          title="Special Deals"
          subtitle={`Found ${filteredDeals.length} amazing deals for you!`}
          onViewMore={handleViewMore}
          maxItems={filteredDeals.length}
          showNavigationButtons={true}
          // คุณสามารถ override data ได้โดยการแก้ไข component
        />

        {/* Additional sections */}
        <SpecialDealsComponent
          title="Top Rated Games"
          subtitle="Highest rated games by our community"
          maxItems={5}
          showNavigationButtons={false}
        />

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 15,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    paddingHorizontal: 15,
    height: 45,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#1a1a1a',
  },
  scrollView: {
    flex: 1,
  },
  filtersSection: {
    backgroundColor: '#fff',
    paddingVertical: 15,
  },
  filterGroup: {
    marginBottom: 15,
  },
  filterLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  chipsContainer: {
    paddingLeft: 20,
  },
  chipsContent: {
    paddingRight: 20,
  },
  chip: {
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
  },
  selectedChip: {
    backgroundColor: '#007AFF',
  },
  chipText: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  selectedChipText: {
    color: '#fff',
  },
  resultsInfo: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  resultsText: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
});

export default AdvancedExampleApp;