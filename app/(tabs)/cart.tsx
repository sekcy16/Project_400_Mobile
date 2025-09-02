import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function CartScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <ScrollView style={styles.content}>
        <Text style={[styles.title, { color: colors.text }]}>รายการสินค้าที่ซื้อ</Text>
        
        {/* กล่องที่ 1: รายการสินค้า */}
        <View style={[styles.box, { backgroundColor: '#22282A', borderColor: colors.tabIconDefault }]}>
          <Text style={[styles.boxTitle, { color: colors.text }]}>รายการสินค้า</Text>
          <View style={styles.totalRow}>
            <View style={styles.productItem}>
              <View style={styles.productInfo}>
                <View style={styles.productIcon}>
                  <Image 
                    source={{ uri: 'https://seagm-media.seagmcdn.com/icon_400/220.jpg?x-oss-process=image/resize,w_120' }}
                    style={styles.productIconImage}
                    resizeMode="cover"
                  />
                </View>
                <View style={styles.productDetails}>
                  <Text style={[styles.productName, { color: '#FFFFFF' }]}>Google Play Gift Card 100 USD US</Text>
                  <Text style={[styles.productQuantity, { color: '#CCCCCC' }]}>×1</Text>
                </View>
              </View>
              <Text style={[styles.productPrice, { color: '#00BBFD' }]}>฿3,398.13</Text>
            </View>
          </View>
        </View>

        {/* กล่องที่ 2: รายละเอียดก่อนชำระเงิน */}
        <View style={[styles.box, { backgroundColor: '#30383B', borderColor: colors.tabIconDefault }]}>
          <Text style={[styles.boxTitle, { color: colors.text }]}>รายละเอียดก่อนชำระเงิน</Text>
          <View style={styles.detailRow}>
            <Text style={[styles.detailLabel, { color: colors.text }]}>รวมก่อนลดราคา</Text>
            <Text style={[styles.detailValue, { color: colors.text }]}>฿3,398.13</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={[styles.detailLabel, { color: colors.text }]}>ส่วนลด</Text>
            <Text style={[styles.detailValue, { color: '#00BBFD' }]}>฿0.00</Text>
          </View>
        </View>

        {/* กล่องที่ 3: การจ่ายเงิน */}
        <View style={[styles.box, { backgroundColor: '#30383B', borderColor: colors.tabIconDefault }]}>
          <View style={styles.paymentRow}>
            <View style={styles.totalAmount}>
              <Text style={[styles.detailValue, { color: '#00BBFD' }]}>฿3,398.13</Text>
              <Text style={[styles.totalAmountLabel, { color: colors.tabIconDefault }]}>G2A Credits 00,000 </Text>
            </View>
            <TouchableOpacity 
              style={styles.payButton}
              activeOpacity={0.8}
            >
              <Text style={styles.payButtonText}>จ่ายตอนนี้</Text>
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
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'left',
  },
  box: {
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  boxTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
  },
  emptyState: {
    paddingVertical: 20,
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 14,
    textAlign: 'center',
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  detailLabel: {
    fontSize: 16,
  },
  detailValue: {
    fontSize: 16,
    fontWeight: '500',
  },
  totalRow: {
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    marginTop: 8,
    paddingTop: 12,
  },
  totalLabel: {
    fontWeight: 'bold',
    fontSize: 17,
  },
  totalValue: {
    fontWeight: 'bold',
    fontSize: 17,
  },
  paymentRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  totalAmount: {
    flex: 1,
  },
  totalAmountLabel: {
    fontSize: 14,
    marginBottom: 4,
  },
  totalAmountValue: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  payButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 20,
    marginLeft: 16,
  },
  payButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  productItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
  },
  productInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  productIcon: {
    width: 40,
    height: 40,
    borderRadius: 4,
    backgroundColor: '#4A5568',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    overflow: 'hidden',
  },
  productIconImage: {
    width: '100%',
    height: '100%',
  },
  productIconText: {
    fontSize: 20,
  },
  productDetails: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 4,
  },
  productQuantity: {
    fontSize: 14,
  },
  productPrice: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
  },
});
