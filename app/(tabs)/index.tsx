import SpecialDealsComponent from '@/components/SpecialDealsComponent';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

const { width } = Dimensions.get('window');

interface CategoryItem {
  id: string;
  title: string;
  icon: string;
  color: string;
}

const categories: CategoryItem[] = [
  { id: '1', title: 'Game Cards', icon: 'game-controller', color: '#FF6B6B' },
  { id: '2', title: 'Gift Cards', icon: 'gift', color: '#4ECDC4' },
  { id: '3', title: 'CD-Keys', icon: 'key', color: '#45B7D1' },
  { id: '4', title: 'Console Cards', icon: 'tv', color: '#96CEB4' },
  { id: '5', title: 'Shopping', icon: 'bag', color: '#FFEAA7' },
  { id: '6', title: 'Music', icon: 'musical-notes', color: '#DDA0DD' },
  { id: '7', title: 'Game Top Up', icon: 'card', color: '#98D8C8' },
  { id: '8', title: 'Mobile Recharge', icon: 'phone-portrait', color: '#F7DC6F' },
];

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];

  const CategoryIcon = ({ name }: { name: string }) => {
    return <Ionicons name={name as any} size={24} color="white" />;
  };

  const CategoryCard = ({ item }: { item: CategoryItem }) => (
    <TouchableOpacity style={styles.categoryCard}>
      <View style={[styles.categoryIcon, { backgroundColor: item.color }]}>
        <CategoryIcon name={item.icon} />
      </View>
      <Text style={[styles.categoryText, { color: colors.text }]} numberOfLines={2}>
        {item.title}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingTop: 30, paddingBottom: 120 }} // Add top padding for status bar spacing
      >
        {/* Promotional Banner */}
        <TouchableOpacity style={[styles.banner, { backgroundColor: colors.primary }]}>
          <Image
            source={{
              uri: 'https://cdn.builder.io/api/v1/image/assets%2Fe12b532e063c4412a1a4def250f89020%2Fd4d3251bcf9f4f1a93b2ce1b24a4b4ff'
            }}
            style={styles.bannerImage}
            resizeMode="cover"
          />
        </TouchableOpacity>


        {/* Search Bar */}
        <View style={[styles.searchContainer, { backgroundColor: colors.surface }]}>
          <Ionicons name="search" size={20} color={colors.placeholder} />
          <TextInput
            style={[styles.searchInput, { color: colors.text }]}
            placeholder="Search for games, cards, and more..."
            placeholderTextColor={colors.placeholder}
          />
          <TouchableOpacity>
            <Ionicons name="options" size={20} color={colors.placeholder} />
          </TouchableOpacity>
        </View>

        {/* Categories Grid */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={[styles.sectionTitle, { color: colors.text }]}>Categories</Text>
          </View>
          <View style={styles.categoriesGrid}>
            {categories.map((item) => (
              <CategoryCard key={item.id} item={item} />
            ))}
          </View>
        </View>

        {/* Special Deals */}
        <SpecialDealsComponent 
          title="Special Deals"
          subtitle="Discover amazing deals and discounts on your favorite games!"
          maxItems={5}
          showNavigationButtons={false}
          cardWidth={160}
          onViewMore={() => router.push('/special-deals')}
        />

        {/* Quick Actions */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={[styles.sectionTitle, { color: colors.text }]}>Quick Actions</Text>
          </View>
          <View style={styles.quickActions}>
            <TouchableOpacity style={[styles.quickAction, { backgroundColor: colors.surface }]}>
              <Ionicons name="wallet" size={24} color={colors.primary} />
              <Text style={[styles.quickActionText, { color: colors.text }]}>My Wallet</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.quickAction, { backgroundColor: colors.surface }]}>
              <Ionicons name="receipt" size={24} color={colors.primary} />
              <Text style={[styles.quickActionText, { color: colors.text }]}>Orders</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.quickAction, { backgroundColor: colors.surface }]}>
              <Ionicons name="headset" size={24} color={colors.primary} />
              <Text style={[styles.quickActionText, { color: colors.text }]}>Support</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 20,
  },
  greeting: {
    fontSize: 14,
    marginBottom: 4,
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  profileButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  banner: {
    marginHorizontal: 20,
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 6,
  },
bannerImage: {
  width: '100%',
  height: 160,
},

  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 16,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 6,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.05)',
  },
  searchInput: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
  },
  section: {
    marginBottom: 32,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  seeAllText: {
    fontSize: 14,
    fontWeight: '600',
  },
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  categoryCard: {
    width: (width - 60) / 4,
    alignItems: 'center',
    marginBottom: 20,
  },
  categoryIcon: {
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  categoryText: {
    fontSize: 12,
    textAlign: 'center',
    lineHeight: 16,
  },
  quickActions: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  quickAction: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 20,
    marginHorizontal: 8,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 6,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.05)',
  },
  quickActionText: {
    marginTop: 8,
    fontSize: 12,
    fontWeight: '600',
  },
});
