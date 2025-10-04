import { SpecialDealItem, specialDealsData } from '@/components/specialDealsData';
import { Colors } from '@/constants/Colors';
import { Typography } from '@/constants/Typography';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Ionicons } from '@expo/vector-icons';
import { router, Stack } from 'expo-router';
import React, { useState } from 'react';
import {
    Dimensions,
    FlatList,
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

const { width } = Dimensions.get('window');

const SpecialDealsScreen = () => {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];
  const [selectedTab, setSelectedTab] = useState<'CARD' | 'DIRECT TOP UP'>('CARD');

  // Filter data based on selected tab
  const filteredData = specialDealsData.filter(item => {
    if (selectedTab === 'CARD') {
      return item.category.toLowerCase().includes('gift card') || 
             item.category.toLowerCase().includes('card') ||
             item.platform.toLowerCase().includes('card') ||
             item.sku.toLowerCase().includes('card') ||
             item.platform.toLowerCase().includes('xbox') ||
             item.platform.toLowerCase().includes('steam');
    } else {
      return item.category.toLowerCase().includes('mobile') || 
             item.title.toLowerCase().includes('mobile') ||
             item.sku.toLowerCase().includes('mobile') ||
             item.sku.toLowerCase().includes('diamond') ||
             item.sku.toLowerCase().includes('legends') ||
             item.sku.toLowerCase().includes('razer') ||
             item.sku.toLowerCase().includes('grab') ||
             item.category.toLowerCase().includes('transportation');
    }
  });

  const renderDealItem = ({ item }: { item: SpecialDealItem }) => (
    <TouchableOpacity 
      style={[styles.dealItem, { backgroundColor: colors.surface }]}
      activeOpacity={0.7}
    >
      {/* Top Section: Image and Title */}
      <View style={styles.topSection}>
        <View style={styles.dealImageContainer}>
          <Image
            source={{ uri: item.image }}
            style={styles.dealImage}
            resizeMode="cover"
          />
        </View>
        <View style={styles.titleContainer}>
          <Text style={[styles.dealTitle, { color: colors.text }]} numberOfLines={2}>
            {item.sku}
          </Text>
          <Text style={[styles.dealSubtitle, { color: colors.placeholder }]} numberOfLines={1}>
            {item.title}
          </Text>
        </View>
      </View>

      {/* Bottom Section: PROMO and Discount */}
      <View style={styles.bottomSection}>
        {item.discountedPrice === 'FREE' ? (
          <>
            <View style={styles.freeBadge}>
              <Text style={styles.freeBadgeText}>FREE</Text>
            </View>
            <Text style={[styles.freeSubtext, { color: colors.placeholder }]}>
              This is from information for the giveaway
            </Text>
          </>
        ) : (
          <>
            <View style={styles.promoBadge}>
              <Text style={styles.promoText}>PROMO</Text>
            </View>
            <Text style={styles.discountText}>-{item.discount}</Text>
          </>
        )}
      </View>
    </TouchableOpacity>
  );

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
        {/* Header Background */}
        <View style={[styles.headerBG, { backgroundColor: colors.surface }]}>
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity 
              style={styles.iconBtn}
              onPress={() => {
                if (router.canGoBack()) {
                  router.back();
                } else {
                  router.replace('/');
                }
              }}
            >
              <Ionicons name="chevron-back" size={26} color="#FF6B35" />
            </TouchableOpacity>
            <View style={styles.headerTitleContainer}>
              <Text style={styles.headerTitle}>Special Deals</Text>
              <Text style={styles.headerSubtitle}>Limited time offers</Text>
            </View>
            <TouchableOpacity style={styles.searchBtn}>
              <Ionicons name="search" size={22} color="#FF6B35" />
            </TouchableOpacity>
          </View>
        </View>

      {/* Tab Navigation */}
      <View style={[styles.tabContainer, { backgroundColor: colors.background }]}>
        <View style={styles.tabWrapper}>
          <TouchableOpacity
            style={[
              styles.tab,
              selectedTab === 'CARD' && styles.activeTab
            ]}
            onPress={() => setSelectedTab('CARD')}
          >
            <Ionicons 
              name="card" 
              size={16} 
              color={selectedTab === 'CARD' ? '#FF6B35' : colors.placeholder} 
              style={styles.tabIcon}
            />
            <Text style={[
              styles.tabText,
              selectedTab === 'CARD' ? styles.activeTabText : { color: colors.placeholder }
            ]}>
              GIFT CARDS
            </Text>
            {selectedTab === 'CARD' && <View style={styles.tabIndicator} />}
          </TouchableOpacity>
          
          <TouchableOpacity
            style={[
              styles.tab,
              selectedTab === 'DIRECT TOP UP' && styles.activeTab
            ]}
            onPress={() => setSelectedTab('DIRECT TOP UP')}
          >
            <Ionicons 
              name="phone-portrait" 
              size={16} 
              color={selectedTab === 'DIRECT TOP UP' ? '#FF6B35' : colors.placeholder} 
              style={styles.tabIcon}
            />
            <Text style={[
              styles.tabText,
              selectedTab === 'DIRECT TOP UP' ? styles.activeTabText : { color: colors.placeholder }
            ]}>
              MOBILE TOP UP
            </Text>
            {selectedTab === 'DIRECT TOP UP' && <View style={styles.tabIndicator} />}
          </TouchableOpacity>
        </View>
      </View>

      {/* Deals List */}
      <FlatList
        data={filteredData}
        renderItem={renderDealItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  // Header styles similar to ProductDetails
  headerBG: {
    paddingBottom: 20,
  },
  header: {
    marginTop: 10,
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 3,
  },
  headerTitle: { 
    color: "#2C3E50", 
    fontSize: Typography.fontSize.xl, 
    fontFamily: Typography.fontFamily.bold,
    letterSpacing: 0.5,
  },
  headerTitleContainer: {
    flex: 1,
    alignItems: 'center',
  },
  headerSubtitle: {
    color: "#666",
    fontSize: Typography.fontSize.sm,
    fontFamily: Typography.fontFamily.regular,
    marginTop: 2,
  },
  iconBtn: {
    width: 42, 
    height: 38, 
    alignItems: "center", 
    justifyContent: "center", 
    borderRadius: 12,
    backgroundColor: "#F8F9FA",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  searchBtn: {
    width: 42, 
    height: 38, 
    alignItems: "center", 
    justifyContent: "center", 
    borderRadius: 12,
    backgroundColor: "#F8F9FA",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  backButton: {
    padding: 4,
  },
  placeholder: {
    width: 32,
  },
  tabContainer: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  tabWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginHorizontal: 8,
    borderRadius: 25,
    position: 'relative',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#F8F9FA',
  },
  tabIcon: {
    marginRight: 6,
  },
  tabText: {
    fontSize: Typography.fontSize.sm,
    fontFamily: Typography.fontFamily.semiBold,
    textAlign: 'center',
  },
  activeTab: {
    backgroundColor: '#FFF5F0',
    borderWidth: 1,
    borderColor: '#FF6B35',
  },
  activeTabText: {
    color: '#FF6B35',
    fontFamily: Typography.fontFamily.bold,
  },
  tabIndicator: {
    position: 'absolute',
    bottom: -8,
    left: '50%',
    transform: [{ translateX: -10 }],
    width: 20,
    height: 3,
    backgroundColor: '#FF6B35',
    borderRadius: 2,
  },
  listContainer: {
    padding: 16,
  },
  dealItem: {
    flexDirection: 'column',
    padding: 0,
    marginBottom: 12,
    borderRadius: 16,
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    overflow: 'hidden',
  },
  topSection: {
    flexDirection: 'row',
    alignItems: 'stretch',
  },
  dealImageContainer: {
    width: 120,
    height: 80,
    overflow: 'hidden',
    position: 'relative',
  },
  dealImage: {
    width: '100%',
    height: '100%',
  },
  titleContainer: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  dealTitle: {
    fontSize: Typography.fontSize.md,
    fontFamily: Typography.fontFamily.semiBold,
    marginBottom: 4,
    lineHeight: Typography.lineHeight.md,
  },
  dealSubtitle: {
    fontSize: Typography.fontSize.sm,
    fontFamily: Typography.fontFamily.regular,
    lineHeight: Typography.lineHeight.sm,
  },
  bottomSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
  },
  promoBadge: {
    backgroundColor: '#FFD700',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  promoText: {
    color: '#333',
    fontSize: 11,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  discountText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  freeBadge: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  freeBadgeText: {
    fontSize: 11,
    fontWeight: 'bold',
    color: 'white',
    letterSpacing: 0.5,
  },
  freeSubtext: {
    fontSize: 11,
    fontStyle: 'italic',
  },
});

export default SpecialDealsScreen;