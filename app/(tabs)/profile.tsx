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
    { label: 'SEAGM Balance', iconType: 'feather', icon: 'dollar-sign' },
    { label: 'SEAGM Credits', iconType: 'feather', icon: 'gift' },
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
        {/* Header */}
        <View style={[styles.header]}>
          <View style={[styles.avatar, { backgroundColor: colors.border }]} />
          <Text style={[styles.username, { color: colors.text }]}>Username</Text>
        </View>

        {/* Big card placeholder */}
        <View
          style={[
            styles.bigCard,
            { backgroundColor: '#30383B' },
          ]}
        />

        {/* Menu list */}
        <View style={styles.menuContainer}>
          {MENU.map((item, idx) => (
            <TouchableOpacity
              key={idx}
              activeOpacity={0.7}
              style={[
                styles.menuItem,
                pressedIndex === idx && styles.menuItemPressed
              ]}
              onPressIn={() => setPressedIndex(idx)}
              onPressOut={() => setPressedIndex(null)}
            >
              <View style={styles.menuLeft}>
                {item.iconType === 'feather' ? (
                  <Feather
                    name={item.icon as any}
                    size={18}
                    color={colors.text}
                    style={styles.menuIcon}
                  />
                ) : (
                  <MaterialCommunityIcons
                    name={item.icon as any}
                    size={20}
                    color={colors.text}
                    style={styles.menuIcon}
                  />
                )}
                <Text style={[styles.menuLabel, { color: colors.text }]}>
                  {item.label}
                </Text>
              </View>

              <Feather
                name="chevron-right"
                size={18}
                color={colors.placeholder}
              />
            </TouchableOpacity>
          ))}
        </View>

        <View style={{ height: 28 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const AVATAR_SIZE = 48;

const styles = StyleSheet.create({
  container: { flex: 1 },
  scroll: {
    paddingHorizontal: 14,
    paddingTop: 12,
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
    height: 200,
    borderRadius: 12,
    marginVertical: 8,
  },

  menuContainer: {
    marginTop: 6,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 12,
    marginBottom: 10,
    justifyContent: 'space-between',
  },
  menuItemPressed: {
    backgroundColor: '#00BBFF',
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
