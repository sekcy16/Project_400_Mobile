import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Ionicons } from '@expo/vector-icons';
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

function MainScreen() {
    const insets = useSafeAreaInsets();
    const colorScheme = useColorScheme();
    const colors = Colors[colorScheme ?? 'light'];

    const handleBack = () => {
        console.log('Back pressed');
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
                    {/* ปุ่ม Back & Favorite */}
                    <View style={[styles.headerBar, { paddingTop: insets.top + 10 }]}>
                        <TouchableOpacity 
                            onPress={handleBack} 
                            style={[styles.iconBtn, { backgroundColor: colors.background }]}
                            activeOpacity={0.8}
                        >
                            <Ionicons name="arrow-back" size={24} color={colors.text} />
                        </TouchableOpacity>
                        <View style={styles.headerTitle}>
                            <Text style={[styles.headerTitleText, { color: colors.text }]}>Product Details</Text>
                        </View>
                        <TouchableOpacity 
                            onPress={handleFavorite} 
                            style={[styles.iconBtn, { backgroundColor: colors.background }]}
                            activeOpacity={0.8}
                        >
                            <Ionicons name="heart-outline" size={24} color={colors.text} />
                        </TouchableOpacity>
                    </View>

                    {/* 🔹 Row: รูปซ้าย + ข้อความขวา */}
                    <View style={styles.headerContent}>
                        <View style={styles.productImageContainer}>
                            <Image
                                source={{
                                    uri: 'https://cdn.builder.io/api/v1/image/assets%2F6bd562c790ff467292987e3133ef2616%2Fc517a615d62f4fb696d03dbbcbeed2d6',
                                }}
                                style={styles.productImage}
                            />
                        </View>

                        <View style={styles.headerInfo}>
                            <Text style={[styles.title, { color: colors.text }]}>Windows 11 Pro</Text>
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
                            <Text style={[styles.category, { color: colors.secondary }]}>Software License</Text>
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
                                        uri: 'https://cdn.builder.io/api/v1/image/assets%2F6bd562c790ff467292987e3133ef2616%2Fc517a615d62f4fb696d03dbbcbeed2d6',
                                    }}
                                    style={styles.smallImage}
                                />
                            </View>
                            <View>
                                <Text style={[styles.subtitle, { color: colors.text }]}>Windows 11 Pro</Text>
                                <Text style={[styles.productCode, { color: colors.placeholder }]}>Product Code: WIN11PRO</Text>
                            </View>
                        </View>
                        <Text style={[styles.qty, { color: colors.placeholder }]}>×1</Text>
                    </View>

                    <View style={styles.divider}></View>

                    <View style={styles.rowBetween}>
                        <Text style={[styles.label, { color: colors.text }]}>Subtotal</Text>
                        <Text style={[styles.priceRegular, { color: colors.text }]}>฿7,400.00</Text>
                    </View>
                    
                    <View style={styles.rowBetween}>
                        <Text style={[styles.discountLabel, { color: colors.success }]}>Discount (7%)</Text>
                        <Text style={[styles.discountValue, { color: colors.success }]}>-฿500.00</Text>
                    </View>

                    <View style={[styles.rowBetween, styles.totalRow]}>
                        <Text style={[styles.totalLabel, { color: colors.text }]}>Total</Text>
                        <Text style={[styles.price, { color: colors.primary }]}>฿6,900.00</Text>
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
                            <Text style={[styles.sectionTitle, { color: colors.text }]}>About Windows 11 Pro</Text>
                        </View>
                    </View>
                    <Text style={[styles.aboutText, { color: colors.placeholder }]}>
                        Windows 11 Pro is an operating system for businesses and power
                        users, offering all Home edition features plus enhanced security,
                        management tools, and virtualization capabilities like BitLocker and
                        Hyper-V.
                    </Text>
                    
                    <View style={styles.featuresList}>
                        <View style={styles.featureItem}>
                            <Ionicons name="checkmark" size={16} color={colors.success} />
                            <Text style={[styles.featureText, { color: colors.placeholder }]}>Enhanced Security Features</Text>
                        </View>
                        <View style={styles.featureItem}>
                            <Ionicons name="checkmark" size={16} color={colors.success} />
                            <Text style={[styles.featureText, { color: colors.placeholder }]}>Business Management Tools</Text>
                        </View>
                        <View style={styles.featureItem}>
                            <Ionicons name="checkmark" size={16} color={colors.success} />
                            <Text style={[styles.featureText, { color: colors.placeholder }]}>Virtualization Support</Text>
                        </View>
                        <View style={styles.featureItem}>
                            <Ionicons name="checkmark" size={16} color={colors.success} />
                            <Text style={[styles.featureText, { color: colors.placeholder }]}>AI-Powered Assistance</Text>
                        </View>
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
                        <Text style={styles.btnText}>ADD TO CART</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.buyBtn, { backgroundColor: colors.primary }]}>
                        <Text style={styles.btnText}>BUY NOW</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default function ProductDetailScreen() {
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
    headerBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        marginBottom: 24,
    },
    headerTitle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerTitleText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    iconBtn: { 
        padding: 12,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.15,
        shadowRadius: 6,
        elevation: 6,
    },

    // 🔹 Row: รูปซ้าย + ข้อความขวา
    headerContent: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
    },
    productImageContainer: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.25,
        shadowRadius: 12,
        elevation: 10,
        borderRadius: 16,
        marginRight: 16,
        backgroundColor: '#fff',
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
        marginTop: 20,
        borderRadius: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 12,
        elevation: 8,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.05)',
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
        shadowOffset: { width: 0, height: -4 },
        shadowOpacity: 0.15,
        shadowRadius: 10,
        elevation: 12,
    },
    cartBtn: {
        padding: 12,
        borderRadius: 12,
        position: 'relative',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
        elevation: 6,
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
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 8,
        elevation: 8,
    },
    buyBtn: {
        flex: 1,
        padding: 16,
        borderRadius: 12,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 8,
        elevation: 8,
    },
    btnText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
});