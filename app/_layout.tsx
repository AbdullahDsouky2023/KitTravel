import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { router, Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import { loadToken } from '@/utils/auth';


// import { loadToken } from '@/utils/storage';
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    BeVietnam:require('../assets/fonts/BeVietnam-Regular.ttf'),
    BoldBeVietnam:require('../assets/fonts/BeVietnam-Bold.ttf'),

  });

  useEffect(() => {
   const OnLoad= async()=>{
    try {
      if (loaded) {
        SplashScreen.hideAsync();
       const token = await loadToken()
        if(token){
          router.replace('/(tabs)')
        }else {
          router.replace('/onboarding');
        }
      }
    } catch (error) {
      
    }
   }
   OnLoad()
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="onboarding/index" options={{ headerShown: false }}  />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
        <Stack.Screen name="auth/register" options={{ headerShown: false }} />
        <Stack.Screen name="auth/signin" options={{ headerShown: false }} />
        <Stack.Screen name="exploreMoreScreen" options={{ headerShown: false }} />
        <Stack.Screen name="hotel/[id]" options={{ headerShown: false ,presentation:'containedModal'}} />
        <Stack.Screen name="hotel/details/about" options={{ headerShown: false ,presentation:'modal'}} />
        <Stack.Screen name="hotel/details/offers" options={{ headerShown: false ,presentation:'modal'}} />
        <Stack.Screen name="hotel/details/rating" options={{ headerShown: false ,presentation:'modal'}} />
        <Stack.Screen name="hotel/details/avaiablity" options={{ headerShown: false ,presentation:'modal'}} />
        <Stack.Screen name="hotel/details/payment" options={{ headerShown: false,
          presentation:'fullScreenModal'
         }} />
        <Stack.Screen name="hotel/details/successPayment" options={{ headerShown: false,
          presentation:'fullScreenModal'
         }} />
      </Stack>
    </ThemeProvider>
  );
}
