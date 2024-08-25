import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import tw from 'twrnc'
import { Colors } from '@/constants/Colors'
import RegisterScreen from '@/components/auth/RegisterScreen'
type Props = {}

const register = (props: Props) => {
  return (
  <RegisterScreen/>
    
  )
}

export default register