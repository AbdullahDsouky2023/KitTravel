import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

type Props = {}

const _layout = (props: Props) => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="whereGoing" options={{ headerShown: false,presentation:'modal' }} />
      <Stack.Screen name="whenBooking" options={{ headerShown: false,presentation:'modal' }} />
      <Stack.Screen name="whoBooking" options={{ headerShown: false,presentation:'modal' }} />
      <Stack.Screen name="classSelector" options={{ headerShown: false,presentation:'modal' }} />
    </Stack>
  )
}

export default _layout