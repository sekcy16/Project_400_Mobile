import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.tabIconDefault,
        headerShown: false,
        tabBarShowLabel: false, 
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute',
            backgroundColor: colors.background,
            borderTopWidth: 0,
            bottom: 30,
            alignSelf: 'center',
            marginHorizontal: 40, 
            width: '80%', 
            height: 60, 
            borderRadius: 30, 
            paddingTop: 8,
            paddingBottom: 8,
            // White drop shadow effect that extends below
            shadowOpacity: 0.4,
            shadowOffset: { width: 0, height: 10 },
            shadowRadius: 25,
            shadowColor: '#FFFFFF',
            elevation: 8, 
          },
          default: {
            position: 'absolute',
            backgroundColor: colors.background,
            borderTopWidth: 0,
            bottom: 30, 
            alignSelf: 'center',
            marginHorizontal: 40, 
            width: '80%', 
            height: 60, 
            borderRadius: 30, 
            paddingTop: 10,
            paddingBottom: 8,
            // White drop shadow effect that extends below
            shadowOpacity: 100,
            shadowOffset: { width: 0, height: 10 },
            shadowRadius: 25,
            shadowColor: '#888686ff',
            elevation: 8, // Android shadow
          },
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons 
              name={focused ? 'home' : 'home-outline'} 
              size={24} 
              color={color} 
            />
          ),
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          title: 'Notifications',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons 
              name={focused ? 'notifications' : 'notifications-outline'} 
              size={24} 
              color={color} 
            />
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: 'Cart',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons 
              name={focused ? 'cart' : 'cart-outline'} 
              size={24} 
              color={color} 
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons 
              name={focused ? 'person' : 'person-outline'} 
              size={24} 
              color={color} 
            />
          ),
        }}
      />
    </Tabs>
  );
}
