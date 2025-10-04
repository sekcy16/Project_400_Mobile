import { Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import {
  Alert,
  Animated,
  Dimensions,
  Easing,
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width } = Dimensions.get("window");
const CARD_GAP = 12;
const COLS = 3;
const CARD_W = Math.floor((width - 32 - CARD_GAP * (COLS - 1)) / COLS);
const CARD_H = CARD_W + 34;

interface Product {
  id: string;
  title: string;
  img: string;
  price?: number;
  category?: string;
}

interface Category {
  id: string;
  label: string;
  count: number;
  icon: string;
  color: string;
}

const PRODUCTS: Product[] = [
  { 
    id: "1", 
    title: "Microsoft Windows 11 Pro - PC", 
    img: "https://cdn.builder.io/api/v1/image/assets%2F6bd562c790ff467292987e3133ef2616%2Fc517a615d62f4fb696d03dbbcbeed2d6",
    price: 6900,
    category: "Software License"
  },
  { 
    id: "2", 
    title: "Microsoft Windows 11 Home - PC", 
    img: "https://cdn.builder.io/api/v1/file/assets%2F6bd562c790ff467292987e3133ef2616%2F3707950225434f58bfa4a7f7355b8cc0",
    price: 4500,
    category: "Software License"
  },
  { 
    id: "3", 
    title: "Kaspersky Small Office Security - PC 5 Devices 12 Months", 
    img: "https://images.g2a.com/uiadminimages/170x227/1x1x0/kaspersky-small-office-security-pc-5-devices-12-months/5912777fae653ad8ab3924f4",
    price: 2800,
    category: "Antivirus"
  },
  { 
    id: "4", 
    title: "Adobe Creative Cloud - PC 1 Month", 
    img: "https://images.g2a.com/uiadminimages/170x226/1x1x0/adobe-creative-cloud-pc-1-month/7d4def41aecc4cc9a45fb8f2",
    price: 1200,
    category: "Creative Software"
  },
  { 
    id: "5", 
    title: "McAfee Total Protection - Multidevice 1 Device 3 Years", 
    img: "https://images.g2a.com/uiadminimages/170x227/1x1x0/mcafee-total-protection-multidevice-1-device-3-years/5b91ab9bae653a3b192fb6dc",
    price: 3500,
    category: "Antivirus"
  },
  { 
    id: "6", 
    title: "McAfee AntiVirus - PC 3 Years", 
    img: "https://cdn.builder.io/api/v1/image/assets/6bd562c790ff467292987e3133ef2616/4ff9326bdcf64fd5bf701e6f761debfb",
    price: 2200,
    category: "Antivirus"
  },
  { 
    id: "7", 
    title: "Microsoft Office 2024 | LTSC Professional Plus (PC)", 
    img: "https://images.g2a.com/uiadminimages/170x226/1x1x0/microsoft-office-2024-ltsc-professional-plus-pc/4ec6f1a5d25c42ab893c784f",
    price: 8900,
    category: "Office Software"
  },
  { 
    id: "8", 
    title: "Voicemod PRO Subscription Lifetime", 
    img: "https://cdn.builder.io/api/v1/image/assets/6bd562c790ff467292987e3133ef2616/d595e9d205564c839c5405528f490d40",
    price: 1500,
    category: "Audio Software"
  },
  { 
    id: "9", 
    title: "Adobe Creative Cloud (PC) 1 Year - Adobe Account", 
    img: "https://images.g2a.com/uiadminimages/170x226/1x1x0/adobe-creative-cloud-pc-1-year/82e1c7b4839848bea61a881d",
    price: 12000,
    category: "Creative Software"
  },
];

const CATEGORIES: Category[] = [
  { id: "c1", label: "Software PC", count: 9, icon: "monitor", color: "#865DFF" },
  { id: "c2", label: "Software Mobile", count: 13, icon: "cellphone", color: "#2CD3E1" },
  { id: "c3", label: "Microsoft products", count: 66, icon: "desktop-mac", color: "#FFB84C" },
  { id: "c4", label: "Bestsellers", count: 68, icon: "fire", color: "#F266AB" },
  { id: "c5", label: "VPNs", count: 72, icon: "shield-lock-outline", color: "#00B2FF" },
  { id: "c6", label: "iOS utilities", count: 29, icon: "cog-outline", color: "#5AC8FA" },
  { id: "c7", label: "Graphic Design", count: 26, icon: "palette-outline", color: "#F472B6" },
  { id: "c8", label: "Antivirus and security", count: 30, icon: "security", color: "#10B981" },
];

export default function AppsScreen() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const slideX = useRef(new Animated.Value(-Math.min(width * 0.82, 360))).current;
  const fade = useRef(new Animated.Value(0)).current;
  const router = useRouter();

  useEffect(() => {
    if (menuOpen) {
      Animated.parallel([
        Animated.timing(slideX, { 
          toValue: 0, 
          duration: 280, 
          easing: Easing.out(Easing.cubic), 
          useNativeDriver: true 
        }),
        Animated.timing(fade, { 
          toValue: 1, 
          duration: 180, 
          useNativeDriver: true 
        }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(slideX, {
          toValue: -Math.min(width * 0.82, 360),
          duration: 220,
          easing: Easing.in(Easing.cubic),
          useNativeDriver: true,
        }),
        Animated.timing(fade, { 
          toValue: 0, 
          duration: 200, 
          useNativeDriver: true 
        }),
      ]).start();
    }
  }, [menuOpen]);

  const onBack = (): void => {
    router.back();
  };

  const onProductPress = (product: Product): void => {
    // Navigate to ProductDetails with product data
    router.push({
      pathname: "/(tabs)/ProductDetails",
      params: {
        productId: product.id,
        title: product.title,
        image: product.img,
        price: product.price?.toString() || "0",
        category: product.category || "Software"
      }
    });
  };

  const onCategoryPress = (category: Category): void => {
    setMenuOpen(false);
    // Here you can add navigation to category-specific screens
    Alert.alert("Category", `Selected: ${category.label}`);
  };

  const renderItem = ({ item }: { item: Product }) => (
    <TouchableOpacity 
      style={styles.card} 
      activeOpacity={0.8}
      onPress={() => onProductPress(item)}
    >
      <View style={styles.thumbWrap}>
        <Image source={{ uri: item.img }} style={styles.thumb} />
        {item.price && (
          <View style={styles.priceOverlay}>
            <Text style={styles.priceTag}>
              ฿{item.price.toLocaleString()}
            </Text>
          </View>
        )}
      </View>
      <View style={styles.cardContent}>
        <Text numberOfLines={2} style={styles.cardTitle}>
          {item.title}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      {/* Header */}
      <SafeAreaView>
        <View style={styles.header}>
          <TouchableOpacity onPress={onBack} style={styles.iconBtn}>
            <Ionicons name="chevron-back" size={26} color="#2C3E50" />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Software</Text>

          <TouchableOpacity onPress={() => {}} style={styles.iconBtn}>
            <Ionicons name="search" size={22} color="#2C3E50" />
          </TouchableOpacity>
        </View>

        {/* Section row with HAMBURGER on the left */}
        <View style={styles.sectionRow}>
          <TouchableOpacity onPress={() => setMenuOpen(true)} style={styles.smallIconBtn}>
            <Ionicons name="menu" size={20} color="#5D6D7E" />
          </TouchableOpacity>

          <Text style={styles.sectionText}>Software PC</Text>
        </View>
      </SafeAreaView>

      {/* Grid */}
      <FlatList
        data={PRODUCTS}
        contentContainerStyle={styles.gridContainer}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        numColumns={COLS}
        columnWrapperStyle={styles.row}
        showsVerticalScrollIndicator={false}
      />

      {/* Overlay + Drawer */}
      {menuOpen && (
        <Pressable style={StyleSheet.absoluteFill} onPress={() => setMenuOpen(false)}>
          <Animated.View style={[styles.overlay, { opacity: fade }]} />
        </Pressable>
      )}

      <Animated.View
        style={[styles.drawer, { transform: [{ translateX: slideX }] }]}
        pointerEvents={menuOpen ? "auto" : "none"}
      >
        <View style={styles.drawerHeader}>
          <Text style={styles.drawerTitle}>Software</Text>
          <TouchableOpacity onPress={() => setMenuOpen(false)} style={styles.closeBtn}>
            <Feather name="x" size={22} color="#2C3E50" />
          </TouchableOpacity>
        </View>

        <FlatList
          data={CATEGORIES}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity 
              style={styles.catItem} 
              activeOpacity={0.8}
              onPress={() => onCategoryPress(item)}
            >
              <View style={[styles.catIconWrap, { backgroundColor: item.color + "22" }]}>
                <MaterialCommunityIcons name={item.icon as any} size={22} color={item.color} />
              </View>
              <View style={styles.catTextContainer}>
                <Text style={styles.catLabel}>{item.label}</Text>
              </View>
              <Text style={styles.catCount}>{item.count}</Text>
            </TouchableOpacity>
          )}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          contentContainerStyle={styles.categoryContainer}
          showsVerticalScrollIndicator={false}
        />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: "#FFFFFF"
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
    fontSize: 18, 
    fontWeight: "700",
    letterSpacing: 0.5,
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
  smallIconBtn: {
    width: 32, 
    height: 30, 
    alignItems: "center", 
    justifyContent: "center",
    borderRadius: 8, 
    marginRight: 8,
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  sectionRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#F8F9FA",
    marginHorizontal: 16,
    marginTop: 8,
    borderRadius: 12,
  },
  sectionText: { 
    color: "#5D6D7E", 
    fontSize: 14,
    fontWeight: "600",
    letterSpacing: 0.3,
  },
  gridContainer: { 
    paddingHorizontal: 16, 
    paddingTop: 16,
    paddingBottom: 24 
  },
  row: { 
    justifyContent: "space-between", 
    marginBottom: CARD_GAP + 4 
  },
  card: { 
    width: CARD_W, 
    height: CARD_H + 20,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 6,
    marginBottom: 8,
  },
  thumbWrap: { 
    borderRadius: 12, 
    overflow: "hidden", 
    backgroundColor: "#F8F9FA", 
    height: CARD_W, 
    marginBottom: 8,
    borderWidth: 1,
    borderColor: "#E9ECEF",
    position: "relative",
  },
  thumb: { 
    width: "100%", 
    height: "100%", 
    resizeMode: "cover" 
  },
  priceOverlay: {
    position: "absolute",
    bottom: 8,
    right: 8,
    backgroundColor: "rgba(255, 140, 0, 0.9)",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  priceTag: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 0.3,
  },
  cardContent: {
    padding: 8,
    flex: 1,
  },
  cardTitle: { 
    color: "#2C3E50", 
    fontSize: 12,
    fontWeight: "500",
    lineHeight: 16,
    textAlign: "left",
  },
  overlay: { 
    ...StyleSheet.absoluteFillObject, 
    backgroundColor: "#000" 
  },
  drawer: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    width: Math.min(width * 0.82, 360),
    backgroundColor: "#FFFFFF",
    borderTopRightRadius: 24,
    borderBottomRightRadius: 24,
    elevation: 20,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 16,
    shadowOffset: { width: 4, height: 0 },
  },
  drawerHeader: { 
    paddingTop: 20, 
    paddingHorizontal: 20, 
    paddingBottom: 16, 
    flexDirection: "row", 
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#E9ECEF",
  },
  drawerTitle: { 
    color: "#2C3E50", 
    fontSize: 20, 
    fontWeight: "700", 
    flex: 1,
    letterSpacing: 0.5,
  },
  closeBtn: {
    width: 40, 
    height: 40, 
    borderRadius: 12, 
    alignItems: "center", 
    justifyContent: "center", 
    backgroundColor: "#F1F2F6",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  categoryContainer: { 
    padding: 20, 
    paddingBottom: 24 
  },
  separator: { 
    height: 8 
  },
  catItem: {
    flexDirection: "row", 
    alignItems: "center", 
    backgroundColor: "#FFFFFF",
    borderRadius: 16, 
    paddingVertical: 14, 
    paddingHorizontal: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 1,
    borderColor: "#E9ECEF",
  },
  catIconWrap: { 
    width: 38, 
    height: 38, 
    borderRadius: 12, 
    alignItems: "center", 
    justifyContent: "center", 
    marginRight: 14,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  catTextContainer: { 
    flex: 1 
  },
  catLabel: { 
    color: "#2C3E50", 
    fontSize: 15, 
    fontWeight: "600",
    letterSpacing: 0.3,
  },
  catCount: { 
    color: "#7F8C8D", 
    fontSize: 13, 
    marginLeft: 12,
    fontWeight: "500",
    backgroundColor: "#F8F9FA",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 8,
  },
});