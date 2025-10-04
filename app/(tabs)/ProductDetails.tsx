import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import {
    SafeAreaProvider,
    SafeAreaView,
    useSafeAreaInsets,
} from 'react-native-safe-area-context';

// Helper functions for product descriptions and features
const getProductDescription = (category: string, title: string): string => {
    if (title.toLowerCase().includes('windows 11')) {
        return "Windows 11 Pro is an operating system for businesses and power users, offering all Home edition features plus enhanced security, management tools, and virtualization capabilities like BitLocker and Hyper-V.";
    } else if (category === 'Antivirus') {
        return "Advanced security solution providing comprehensive protection against malware, viruses, and cyber threats with real-time monitoring and automatic updates.";
    } else if (category === 'Creative Software') {
        return "Professional creative suite offering industry-leading tools for design, video editing, photography, and digital content creation.";
    } else if (category === 'Office Software') {
        return "Complete productivity suite with word processing, spreadsheets, presentations, and collaboration tools for business and personal use.";
    } else if (category === 'Audio Software') {
        return "Professional audio software providing advanced voice modification and audio enhancement capabilities for gaming and content creation.";
    } else {
        return "Professional software solution designed to enhance productivity and provide advanced features for users.";
    }
};

const getProductFeatures = (category: string): string[] => {
    if (category === 'Software License') {
        return [
            "Enhanced Security Features",
            "Business Management Tools", 
            "Virtualization Support",
            "AI-Powered Assistance"
        ];
    } else if (category === 'Antivirus') {
        return [
            "Real-time Protection",
            "Malware Detection",
            "Firewall Security",
            "Automatic Updates"
        ];
    } else if (category === 'Creative Software') {
        return [
            "Professional Design Tools",
            "Video Editing Suite",
            "Cloud Storage",
            "Creative Templates"
        ];
    } else if (category === 'Office Software') {
        return [
            "Word Processing",
            "Spreadsheet Tools",
            "Presentation Suite",
            "Cloud Integration"
        ];
    } else if (category === 'Audio Software') {
        return [
            "Voice Modulation",
            "Real-time Effects",
            "Background Noise Removal",
            "Multiple Voice Presets"
        ];
    } else {
        return [
            "Professional Features",
            "Easy to Use Interface",
            "Regular Updates",
            "Customer Support"
        ];
    }
};

function MainScreen() {
    const insets = useSafeAreaInsets();
    const colorScheme = useColorScheme();
    const colors = Colors[colorScheme ?? 'light'];
    const router = useRouter();
    const params = useLocalSearchParams();

    // Use parameters from navigation or default values
    const productData = {
        id: (params.productId as string) || "1",
        title: (params.title as string) || "Windows 11 Pro",
        image: (params.image as string) || "https://cdn.builder.io/api/v1/image/assets%2F6bd562c790ff467292987e3133ef2616%2Fc517a615d62f4fb696d03dbbcbeed2d6",
        price: params.price ? parseInt(params.price as string) : 6900,
        category: (params.category as string) || "Software License"
    };

    const handleBack = () => {
        router.push('/(tabs)/Apps');
    };

    const handleFavorite = () => {
        console.log('Favorite pressed');
    };

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]} edges={['top', 'left', 'right']}>
            <ScrollView
                contentContainerStyle={[
                    styles.scroll,
                    { paddingBottom: 100 + insets.bottom },
                ]}>
                {/* 🔹 Header (BG + ปุ่ม + รูป + ข้อความ) */}
                <View style={[styles.headerBG, { backgroundColor: colors.surface }]}>
                    {/* Header */}
                    <View style={styles.header}>
                        <TouchableOpacity onPress={handleBack} style={styles.iconBtn}>
                            <Ionicons name="chevron-back" size={26} color="#2C3E50" />
                        </TouchableOpacity>

                        <Text style={styles.headerTitle}>Product Details</Text>

                        <TouchableOpacity onPress={handleFavorite} style={styles.iconBtn}>
                            <Ionicons name="heart-outline" size={22} color="#2C3E50" />
                        </TouchableOpacity>
                    </View>

                    {/* 🔹 Row: รูปซ้าย + ข้อความขวา */}
                    <View style={styles.headerContent}>
                        <View style={styles.productImageContainer}>
                            <Image
                                source={{
                                    uri: productData.image,
                                }}
                                style={styles.productImage}
                            />
                        </View>

                        <View style={styles.headerInfo}>
                            <Text style={[styles.title, { color: colors.text }]}>{productData.title}</Text>
                            <View style={styles.ratingContainer}>
                                <View style={styles.starsContainer}>
                                    <Ionicons name="star" size={16} color={colors.warning} />
                                    <Ionicons name="star" size={16} color={colors.warning} />
                                    <Ionicons name="star" size={16} color={colors.warning} />
                                    <Ionicons name="star" size={16} color={colors.warning} />
                                    <Ionicons name="star" size={16} color={colors.warning} />
                                </View>
                                <Text style={[styles.ratingText, { color: colors.placeholder }]}>(4.8)</Text>
                            </View>
                            <Text style={[styles.category, { color: colors.secondary }]}>{productData.category}</Text>
                            <View style={styles.availabilityContainer}>
                                <Ionicons name="checkmark-circle" size={16} color={colors.success} />
                                <Text style={[styles.availability, { color: colors.success }]}>In Stock</Text>
                            </View>
                        </View>
                    </View>
                </View>

                {/* Price Section */}
                <View style={[styles.card, { backgroundColor: colors.surface }]}>
                    <View style={styles.rowBetween}>
                        <View style={styles.row}>
                            <View style={styles.smallImageContainer}>
                                <Image
                                    source={{
                                        uri: productData.image,
                                    }}
                                    style={styles.smallImage}
                                />
                            </View>
                            <View>
                                <Text style={[styles.subtitle, { color: colors.text }]}>{productData.title}</Text>
                                <Text style={[styles.productCode, { color: colors.placeholder }]}>Product Code: {productData.id.toUpperCase()}</Text>
                            </View>
                        </View>
                        <Text style={[styles.qty, { color: colors.placeholder }]}>×1</Text>
                    </View>

                    <View style={styles.divider}></View>

                    <View style={styles.rowBetween}>
                        <Text style={[styles.label, { color: colors.text }]}>Subtotal</Text>
                        <Text style={[styles.priceRegular, { color: colors.text }]}>฿{productData.price.toLocaleString()}.00</Text>
                    </View>
                    
                    <View style={styles.rowBetween}>
                        <Text style={[styles.discountLabel, { color: colors.success }]}>Discount (7%)</Text>
                        <Text style={[styles.discountValue, { color: colors.success }]}>-฿{Math.round(productData.price * 0.07).toLocaleString()}.00</Text>
                    </View>

                    <View style={[styles.rowBetween, styles.totalRow]}>
                        <Text style={[styles.totalLabel, { color: colors.text }]}>Total</Text>
                        <Text style={[styles.price, { color: colors.primary }]}>฿{Math.round(productData.price * 0.93).toLocaleString()}.00</Text>
                    </View>

                    <View style={styles.creditsInfo}>
                        <View style={styles.creditsRow}>
                            <Text style={[styles.creditsLabel, { color: colors.placeholder }]}>Credits Available:</Text>
                            <Text style={[styles.creditsValue, { color: colors.secondary }]}>500</Text>
                        </View>
                        <Text style={[styles.vatInfo, { color: colors.placeholder }]}>VAT Included: 7%</Text>
                    </View>
                </View>

                {/* Coupon Section */}
                <View style={[styles.card, { backgroundColor: colors.surface }]}>
                    <View style={styles.sectionHeader}>
                        <View style={styles.sectionTitleContainer}>
                            <Ionicons name="ticket-outline" size={20} color={colors.text} />
                            <Text style={[styles.sectionTitle, { color: colors.text }]}>Coupon Code</Text>
                        </View>
                    </View>
                    <View style={[styles.couponInput, { borderColor: colors.border }]}>
                        <Text style={[styles.couponPlaceholder, { color: colors.placeholder }]}>Enter coupon code</Text>
                        <TouchableOpacity style={[styles.applyButton, { backgroundColor: colors.primary }]}>
                            <Text style={styles.applyButtonText}>Apply</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* About Section */}
                <View style={[styles.card, { backgroundColor: colors.surface }]}>
                    <View style={styles.sectionHeader}>
                        <View style={styles.sectionTitleContainer}>
                            <Ionicons name="document-text-outline" size={20} color={colors.text} />
                            <Text style={[styles.sectionTitle, { color: colors.text }]}>About {productData.title}</Text>
                        </View>
                    </View>
                    <Text style={[styles.aboutText, { color: colors.placeholder }]}>
                        {getProductDescription(productData.category, productData.title)}
                    </Text>
                    
                    <View style={styles.featuresList}>
                        {getProductFeatures(productData.category).map((feature, index) => (
                            <View key={index} style={styles.featureItem}>
                                <Ionicons name="checkmark" size={16} color={colors.success} />
                                <Text style={[styles.featureText, { color: colors.placeholder }]}>{feature}</Text>
                            </View>
                        ))}
                    </View>
                </View>
            </ScrollView>

            {/* Bottom Bar */}
            <View style={[styles.bottomBar, { backgroundColor: colors.background, borderColor: colors.border }]}>
                <TouchableOpacity style={[styles.cartBtn, { backgroundColor: colors.surface }]}>
                    <Ionicons name="bag-outline" size={24} color={colors.text} />
                    <View style={styles.cartBadge}>
                        <Text style={styles.cartBadgeText}>1</Text>
                    </View>
                </TouchableOpacity>
                
                <View style={styles.actionButtons}>
                    <TouchableOpacity style={[styles.addBtn, { backgroundColor: colors.warning }]}>
                        <Text style={styles.btnText}>Add to Cart</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.buyBtn, { backgroundColor: colors.primary }]}>
                        <Text style={styles.btnText}>Buy Now</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default function AppsScreen() {
    return (
        <SafeAreaProvider>
            <MainScreen />
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1 },
    scroll: { paddingBottom: 100 },

    // 🔹 BG Header
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
        fontSize: 18, 
        fontWeight: "700",
        letterSpacing: 0.5,
    },
    headerBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        marginBottom: 16,
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

    // 🔹 Row: รูปซ้าย + ข้อความขวา
    headerContent: {
        paddingTop: 16,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
    },
    productImageContainer: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 8,
        borderRadius: 16,
        marginRight: 16,
    },
    productImage: {
        width: 120,
        height: 100,
        borderRadius: 16,
    },
    headerInfo: { flex: 1 },
    title: { fontSize: 22, fontWeight: 'bold', marginBottom: 8 },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 4,
    },
    starsContainer: {
        flexDirection: 'row',
        marginRight: 8,
    },
    rating: {
        fontSize: 16,
        marginRight: 8,
    },
    ratingText: {
        fontSize: 14,
        fontWeight: '500',
    },
    category: {
        fontSize: 14,
        fontWeight: '600',
        marginBottom: 4,
    },
    availabilityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    availability: {
        fontSize: 14,
        fontWeight: '600',
        marginLeft: 4,
    },
    detail: { fontSize: 14, marginTop: 4 },

    // Card Content
    card: {
        padding: 20,
        marginHorizontal: 16,
        marginTop: 16,
        borderRadius: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 4,
    },
    row: { flexDirection: 'row', alignItems: 'center', marginBottom: 12 },
    smallImageContainer: {
        marginRight: 12,
        borderRadius: 8,
        overflow: 'hidden',
    },
    smallImage: { width: 60, height: 50, borderRadius: 8 },
    productCode: { fontSize: 12, marginTop: 2 },
    subtitle: { fontSize: 16, fontWeight: '600' },
    subtitle2: { fontSize: 13, fontWeight: '600' },
    price: { fontSize: 24, fontWeight: 'bold', marginTop: 8 },
    priceRegular: { fontSize: 16, fontWeight: '500' },
    discountLabel: { fontSize: 14, fontWeight: '500' },
    discountValue: { fontSize: 14, fontWeight: '600' },
    divider: {
        height: 1,
        backgroundColor: '#333',
        marginVertical: 12,
        opacity: 0.3,
    },
    totalRow: {
        marginTop: 8,
        paddingTop: 12,
        borderTopWidth: 1,
        borderTopColor: '#333',
    },
    totalLabel: { fontSize: 18, fontWeight: 'bold' },
    creditsInfo: {
        marginTop: 16,
        padding: 12,
        backgroundColor: 'rgba(79, 195, 247, 0.1)',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: 'rgba(79, 195, 247, 0.3)',
    },
    creditsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 4,
    },
    creditsLabel: { fontSize: 14, fontWeight: '500' },
    creditsValue: { fontSize: 16, fontWeight: 'bold' },
    vatInfo: { fontSize: 12, textAlign: 'center' },
    rowBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
    qty: { fontSize: 14, fontWeight: '500' },
    label: { fontSize: 16, fontWeight: '600' },

    // Section Styles
    sectionHeader: {
        marginBottom: 16,
    },
    sectionTitleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 8,
    },
    
    // Coupon Styles
    couponInput: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 12,
        padding: 12,
        justifyContent: 'space-between',
    },
    couponPlaceholder: {
        fontSize: 16,
        flex: 1,
    },
    applyButton: {
        paddingHorizontal: 20,
        paddingVertical: 8,
        borderRadius: 8,
    },
    applyButtonText: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 14,
    },

    // About & Features Styles
    aboutText: {
        fontSize: 14,
        lineHeight: 20,
        marginBottom: 16,
    },
    featuresList: {
        gap: 8,
    },
    featureItem: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    featureIcon: {
        marginRight: 12,
    },
    featureText: {
        fontSize: 14,
        flex: 1,
        marginLeft: 12,
    },

    // Bottom Bar
    bottomBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        borderTopWidth: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 8,
    },
    cartBtn: {
        padding: 12,
        borderRadius: 12,
        position: 'relative',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    cartBadge: {
        position: 'absolute',
        top: -4,
        right: -4,
        backgroundColor: '#FF5722',
        borderRadius: 10,
        minWidth: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cartBadgeText: {
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold',
    },
    actionButtons: {
        flexDirection: 'row',
        flex: 1,
        marginLeft: 16,
        gap: 12,
    },
    addBtn: {
        flex: 1,
        padding: 16,
        borderRadius: 12,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 4,
    },
    buyBtn: {
        flex: 1,
        padding: 16,
        borderRadius: 12,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 4,
    },
    btnText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
});