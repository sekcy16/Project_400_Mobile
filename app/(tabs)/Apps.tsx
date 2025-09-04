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

    const handleBack = () => {
        console.log('Back pressed');
    };

    const handleFavorite = () => {
        console.log('Favorite pressed');
    };

    return (
        <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
            <ScrollView
                contentContainerStyle={[
                    styles.scroll,
                    { paddingBottom: 100 + insets.bottom },
                ]}>
                {/* 🔹 Header (BG + ปุ่ม + รูป + ข้อความ) */}
                <View style={[styles.headerBG, { paddingTop: insets.top }]}>
                    {/* ปุ่ม Back & Favorite */}
                    <View style={styles.headerBar}>
                        <TouchableOpacity onPress={handleBack} style={styles.iconBtn}>
                            <Text style={styles.iconText}>{'<'}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handleFavorite} style={styles.iconBtn}>
                            <Text style={styles.iconText}>♡</Text>
                        </TouchableOpacity>
                    </View>

                    {/* 🔹 Row: รูปซ้าย + ข้อความขวา */}
                    <View style={styles.headerContent}>
                        <Image
                            source={{
                                uri: 'https://cdn.builder.io/api/v1/image/assets%2F6bd562c790ff467292987e3133ef2616%2Fc517a615d62f4fb696d03dbbcbeed2d6',
                            }}
                            style={styles.productImage}
                        />

                        <View style={styles.headerInfo}>
                            <Text style={styles.title}>Windows 11 Pro</Text>
                            <Text style={styles.detail}>detail</Text>
                            <Text style={styles.detail}>detail</Text>
                        </View>
                    </View>
                </View>

                {/* Price Section */}
                <View style={styles.card}>
                    <View style={styles.rowBetween}>
                        <View style={styles.row}>
                            <Image
                                source={{
                                    uri: 'https://cdn.builder.io/api/v1/image/assets%2F6bd562c790ff467292987e3133ef2616%2Fc517a615d62f4fb696d03dbbcbeed2d6',
                                }}
                                style={styles.smallImage}
                            />
                            <Text style={styles.subtitle}>Windows 11 Pro</Text>
                        </View>
                        <Text style={styles.qty}>×1</Text>
                    </View>

                    <View style={styles.rowBetween}>
                        <Text style={styles.label}>Total</Text>
                        <Text style={styles.price}>฿6,900.00</Text>
                    </View>

                    <Text style={styles.detail}>Credits: 500</Text>
                    <Text style={styles.detail}>Discount: ฿500.00 (7%)</Text>
                    <Text style={styles.detail}>VAT Incl.: 7%</Text>
                </View>

                {/* Coupon Section */}
                <View style={styles.card}>
                    <Text style={styles.subtitle}>Coupon</Text>
                </View>

                {/* About Section */}
                <View style={styles.card}>
                    <Text style={styles.subtitle}>About Windows 11 Pro</Text>
                    <Text style={styles.subtitle2}>
                        Windows 11 Pro is an operating system for businesses and power
                        users, offering all Home edition features plus enhanced security,
                        management tools, and virtualization capabilities like BitLocker and
                        Hyper-V. It supports remote work with features for management,
                        productivity, and cloud integration, providing a modern, secure, and
                        efficient platform with AI-powered assistance for enhanced
                        productivity and creativity
                    </Text>
                </View>
            </ScrollView>

            {/* Bottom Bar */}
            <View style={[styles.bottomBar, { paddingBottom: insets.bottom }]}>
                <TouchableOpacity style={styles.cartBtn}>
                    <Text style={styles.cartIcon}>🛒</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.addBtn}>
                    <Text style={styles.btnText}>ADD TO CART</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buyBtn}>
                    <Text style={styles.btnText}>BUY NOW</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default function App() {
    return (
        <SafeAreaProvider>
            <MainScreen />
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#111' ,},
    scroll: { paddingBottom: 100 },

    // 🔹 BG Header
    headerBG: {
        backgroundColor: '#222',
        paddingBottom: 20,
    },
    headerBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        marginBottom: 16,
    },
    iconBtn: { padding: 6 },
    iconText: { fontSize: 22, color: '#fff', fontWeight: 'bold' },

    // 🔹 Row: รูปซ้าย + ข้อความขวา
    headerContent: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
    },
    productImage: {
        width: 120,
        height: 100,
        borderRadius: 12,
        marginRight: 16,
    },
    headerInfo: { flex: 1 },
    title: { fontSize: 20, fontWeight: 'bold', color: '#fff' },
    detail: { fontSize: 14, color: '#eee', marginTop: 4 },

    // Card Content
    card: {
        backgroundColor: '#222',
        padding: 16,
        marginHorizontal: 16,
        marginTop: 12,
        borderRadius: 12,
    },
    row: { flexDirection: 'row', alignItems: 'center', marginBottom: 8 },
    smallImage: { width: 60, height: 50, borderRadius: 8, marginRight: 8 },
    subtitle: { fontSize: 16, fontWeight: '600', color: '#fff' },
    subtitle2: { fontSize: 13, fontWeight: '600', color: '#fff' },
    price: { fontSize: 20, fontWeight: 'bold', color: '#f44336', marginTop: 8 },
    rowBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
    qty: { fontSize: 14, color: '#aaa' },
    label: { fontSize: 16, fontWeight: 'bold', color: '#fff' },

    // Bottom Bar
    bottomBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderTopWidth: 1,
        borderColor: '#333',
        backgroundColor: '#111',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
    cartBtn: { padding: 12 },
    cartIcon: { fontSize: 20, color: '#fff' },
    addBtn: {
        flex: 1,
        backgroundColor: '#FFA000',
        marginHorizontal: 6,
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
    },
    buyBtn: {
        flex: 1,
        backgroundColor: '#E53935',
        marginHorizontal: 6,
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
    },
    btnText: { color: '#fff', fontWeight: 'bold' },
});
