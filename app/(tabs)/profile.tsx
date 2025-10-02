import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function ProfileScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];
  const [pressedIndex, setPressedIndex] = useState<number | null>(null);

  const MENU: {
    label: string;
    iconType: 'feather' | 'mci';
    icon: string;
  }[] = [
    { label: 'บัญชีของฉัน', iconType: 'feather', icon: 'user' },
    { label: 'เติมเงิน', iconType: 'feather', icon: 'credit-card' },
    { label: 'คำสั่งของฉัน', iconType: 'feather', icon: 'file-text' },
    { label: 'บัตรของฉัน', iconType: 'feather', icon: 'smartphone' },
    { label: 'ใบแจ้งหนี้ของฉัน', iconType: 'feather', icon: 'file' },
    { label: 'คูปองของฉัน', iconType: 'feather', icon: 'tag' },
    { label: 'My STAR', iconType: 'mci', icon: 'star-outline' },
    { label: 'G2A Balance', iconType: 'feather', icon: 'dollar-sign' },
    { label: 'G2A Credits', iconType: 'feather', icon: 'gift' },
    { label: 'เกี่ยวกับของฉัน', iconType: 'feather', icon: 'info' },
    { label: 'การตั้งค่าของฉัน', iconType: 'feather', icon: 'settings' },
    { label: 'การแจ้งเตือน', iconType: 'feather', icon: 'bell' },
  ];

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
      >
          {/* User info section */}
          <View style={[styles.cardHeader, { backgroundColor: colors.surface, borderRadius: 16, padding: 16, marginBottom: 20, shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.1, shadowRadius: 8, elevation: 6 }]}>
            <View style={[styles.cardAvatar, { backgroundColor: colors.primary }]}>
              <Feather name="user" size={24} color="#FFFFFF" />
            </View>
            <View style={styles.cardUserInfo}>
              <Text style={[styles.cardUsername, { color: colors.text }]}>Username</Text>
              <Text style={[styles.cardBalance, { color: colors.placeholder }]}>G2A Balance : $00.00</Text>
            </View>
            <TouchableOpacity style={[styles.topUpButton, { backgroundColor: colors.primary }]} activeOpacity={0.7}>
              <Feather name="plus" size={16} color="#FFFFFF" />
              <Text style={styles.topUpButtonText}>เติมเงิน</Text>
            </TouchableOpacity>
          </View>

        {/* Big card with user info */}
        <View
          style={[
            styles.bigCard,
            { backgroundColor: colors.surface },
          ]}
        >
          {/* Star level section */}
          <View style={styles.starSection}>
            <MaterialCommunityIcons name="star" size={20} color={colors.warning} />
            <Text style={[styles.starText, { color: colors.text }]}>ระดับ Star : Rookie</Text>
          </View>

          {/* Divider */}
          <View style={[styles.divider, { backgroundColor: colors.border }]} />

          {/* Personal info section */}
          <View style={styles.personalInfo}>
            <View style={styles.sectionHeader}>
              <Text style={[styles.sectionTitle, { color: colors.text }]}>ข้อมูลผู้ใช้</Text>
              <TouchableOpacity style={[styles.editButtonSmall, { backgroundColor: colors.background, borderColor: colors.border }]} activeOpacity={0.7}>
                <Feather name="edit-2" size={14} color={colors.text} />
              </TouchableOpacity>
            </View>
            
            <View style={styles.infoRow}>
              <Text style={[styles.infoLabel, { color: colors.placeholder }]}>อีเมล :</Text>
              <Text style={[styles.infoValue, { color: colors.success }]}>gmail@gmail.com</Text>
              <View style={[styles.verifiedBadge, { backgroundColor: 'rgba(76, 175, 80, 0.15)', borderColor: 'rgba(76, 175, 80, 0.3)' }]}>
                <Text style={styles.verifiedText}>ตรวจสอบแล้ว</Text>
                <Feather name="check" size={12} color="#4CAF50" />
              </View>
            </View>

            <View style={styles.infoRow}>
              <Text style={[styles.infoLabel, { color: colors.placeholder }]}>โทรศัพท์ :</Text>
              <Text style={[styles.infoValue, { color: colors.success }]}>XXX-XXXX-XXX</Text>
              <View style={[styles.verifiedBadge, { backgroundColor: 'rgba(76, 175, 80, 0.15)', borderColor: 'rgba(76, 175, 80, 0.3)' }]}>
                <Text style={styles.verifiedText}>ตรวจสอบแล้ว</Text>
                <Feather name="check" size={12} color="#4CAF50" />
              </View>
            </View>
          </View>

          {/* Divider */}
          <View style={[styles.divider, { backgroundColor: colors.border }]} />

          {/* Statistics section */}
          <View style={styles.statsSection}>
            <View style={styles.statItem}>
              <Text style={[styles.statNumber, { color: colors.text }]}>0</Text>
              <Text style={[styles.statLabel, { color: colors.placeholder }]}>รอดำเนินการ</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={[styles.statNumber, { color: colors.text }]}>0</Text>
              <Text style={[styles.statLabel, { color: colors.placeholder }]}>กำลังดำเนิน</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={[styles.statNumber, { color: colors.text }]}>0</Text>
              <Text style={[styles.statLabel, { color: colors.placeholder }]}>เสร็จสิ้น</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={[styles.statNumber, { color: colors.text }]}>0</Text>
              <Text style={[styles.statLabel, { color: colors.placeholder }]}>คืนเงิน</Text>
            </View>
          </View>
        </View>

        {/* Menu list */}
        <View style={[styles.menuContainer, { backgroundColor: colors.surface, borderRadius: 16, padding: 8, shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.1, shadowRadius: 8, elevation: 6 }]}>
          {MENU.map((item, idx) => (
            <TouchableOpacity
              key={idx}
              activeOpacity={0.7}
              style={[
                styles.menuItem,
                { backgroundColor: pressedIndex === idx ? colors.primary : 'transparent' }
              ]}
              onPressIn={() => setPressedIndex(idx)}
              onPressOut={() => setPressedIndex(null)}
            >
              <View style={styles.menuLeft}>
                {item.iconType === 'feather' ? (
                  <Feather
                    name={item.icon as any}
                    size={18}
                    color={pressedIndex === idx ? '#FFFFFF' : colors.text}
                    style={styles.menuIcon}
                  />
                ) : (
                  <MaterialCommunityIcons
                    name={item.icon as any}
                    size={20}
                    color={pressedIndex === idx ? '#FFFFFF' : colors.text}
                    style={styles.menuIcon}
                  />
                )}
                <Text style={[styles.menuLabel, { color: pressedIndex === idx ? '#FFFFFF' : colors.text }]}>
                  {item.label}
                </Text>
              </View>

              <Feather
                name="chevron-right"
                size={18}
                color={pressedIndex === idx ? '#FFFFFF' : colors.placeholder}
              />
            </TouchableOpacity>
          ))}
        </View>

        <View style={{ height: 28 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const AVATAR_SIZE = 60;

const styles = StyleSheet.create({
  container: { flex: 1 },
  scroll: {
    paddingHorizontal: 14,
    paddingTop: 50,
    paddingBottom: 100, // เพิ่ม padding ด้านล่างเพื่อไม่ให้ Nav Bar ทับ
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 12,
  },
  avatar: {
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
    borderRadius: AVATAR_SIZE / 2,
  },
  username: {
    fontSize: 16,
    fontWeight: '600',
  },

  bigCard: {
    borderRadius: 16,
    marginVertical: 8,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 10,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.05)',
  },

  // Card styles
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardAvatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardUserInfo: {
    flex: 1,
  },
  cardUsername: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
  },
  cardBalance: {
    fontSize: 14,
  },
  editButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  topUpButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 6,
  },
  topUpButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 6,
  },

  // Star section
  starSection: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 152, 0, 0.1)',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(255, 152, 0, 0.3)',
  },
  starText: {
    fontSize: 14,
    marginLeft: 8,
    fontWeight: '500',
  },

  // Divider
  divider: {
    height: 1,
    marginVertical: 18,
  },

  // Personal info section
  personalInfo: {
    marginBottom: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
  },
  editButtonSmall: {
    width: 28,
    height: 28,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  infoLabel: {
    fontSize: 13,
    width: 60,
  },
  infoValue: {
    fontSize: 13,
    flex: 1,
    marginLeft: 8,
  },
  verifiedBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(76, 175, 80, 0.15)',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'rgba(76, 175, 80, 0.3)',
  },
  verifiedText: {
    fontSize: 10,
    color: '#4CAF50',
    marginRight: 4,
    fontWeight: '500',
  },

  // Statistics section
  statsSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statNumber: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 11,
    textAlign: 'center',
  },

  menuContainer: {
    marginTop: 6,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 12,
    marginBottom: 4,
    justifyContent: 'space-between',
  },
  menuLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuIcon: {
    marginRight: 10,
  },
  menuLabel: {
    fontSize: 14,
    fontWeight: '500',
  },
});
