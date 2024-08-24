import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc'
import { StatusBar } from 'expo-status-bar'
import Button from '@/components/onboarding/Button'
import { Colors } from '@/constants/Colors'
import Animated, { useSharedValue, useAnimatedStyle, withSpring, withDelay, withTiming, Easing } from 'react-native-reanimated'

type Props = {}

const Index = (props: Props) => {
  const logoOpacity = useSharedValue(0)
  const textOpacity = useSharedValue(0)
  const buttonsTranslateY = useSharedValue(100)

  useEffect(() => {
    logoOpacity.value = withDelay(500, withSpring(1))
    textOpacity.value = withDelay(600, withSpring(1))
    buttonsTranslateY.value = withDelay(1000, withSpring(0))
  }, [])

  const logoAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: logoOpacity.value,
    }
  })

  const textAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: textOpacity.value,
    }
  })

  const buttonsAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: buttonsTranslateY.value }],
    }
  })

  return (
    <View>
      <StatusBar style='light' />
      <Image source={require('../../assets/images/onboarding.png')} style={tw`w-full h-full`} />

      <Animated.View style={[tw`absolute bottom-[100px] w-full`, buttonsAnimatedStyle]}>
        <SafeAreaView>
          <View style={tw`flex gap-4 justify-between px-5`}>
            <Button title='Login' />
            <Button title='Register' style={tw`bg-transparent border border-[${Colors.white}]`} styleText={tw`text-[${Colors.white}]`} />
          </View>
        </SafeAreaView>
      </Animated.View>

      <SafeAreaView style={tw`absolute top-[40px] w-full`}>
        <View style={tw`flex gap-4 justify-between px-5`}>
          <Animated.Image 
            source={require('../../assets/images/Logo-Horizontal.png')} 
            style={[tw`w-[150px] h-[28px]`, logoAnimatedStyle]} 
          />

          <Animated.Text 
            style={[
              tw`text-[${Colors.white}] font-bold text-2xl`,
              { fontFamily: 'BeVietnam', fontSize: 24 },
              textAnimatedStyle
            ]}
          >
            Discover and planning
            your travelling any
            location around the
            world just one app.
          </Animated.Text>
        </View>
      </SafeAreaView>
    </View>
  )
}

export default Index

const styles = StyleSheet.create({})