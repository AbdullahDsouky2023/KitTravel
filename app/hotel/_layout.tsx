import { View, Text, PlatformColor } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { BlurHeaderStyle } from '@/constants/Colors'

type Props = {}

const _layout = (props: Props) => {
  return (

    <Stack>
        <Stack.Screen name="[id]" options={{ headerShown: false,presentation:'containedModal',
        }
      } />
        <Stack.Screen name="details/about" options={{ headerShown: false ,presentation:'modal'}} />
        <Stack.Screen name="details/offers" options={{ headerShown: false ,presentation:'modal'}} />
        <Stack.Screen name="details/rating" options={{ headerShown: false ,presentation:'modal'}} />
        <Stack.Screen name="details/avaiablity" options={{ headerShown: false ,presentation:'modal'}} />
        <Stack.Screen name="details/guests" options={{ headerShown: false ,presentation:'modal'}} />
        <Stack.Screen name="details/payment" options={{ headerShown: false,
          presentation:'fullScreenModal'
         }} />
        <Stack.Screen name="details/successPayment" options={{ headerShown: false,
          presentation:'fullScreenModal'
         }} />
    </Stack>
  )
}

export default _layout