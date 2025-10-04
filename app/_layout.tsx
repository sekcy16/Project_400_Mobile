import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    // Noto Sans font family
    'NotoSans-Regular': require('../assets/fonts/NotoSans-Regular.ttf'),
    'NotoSans-Bold': require('../assets/fonts/NotoSans-Bold.ttf'),
    'NotoSans-Medium': require('../assets/fonts/NotoSans-Medium.ttf'),
    'NotoSans-SemiBold': require('../assets/fonts/NotoSans-SemiBold.ttf'),
    'NotoSans-Light': require('../assets/fonts/NotoSans-Light.ttf'),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="auth" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="font-test" options={{ 
          title: 'Font Test',
          headerShown: true 
        }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
