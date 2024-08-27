import { View, Text, Image, TextInput, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { banner, flight, home, image, search } from '@/assets'
import { StatusBar } from 'expo-status-bar'
import SearchComponent from './SearchComponent'
import ButtonComponent from './ButtonComponent'
import { RFPercentage } from 'react-native-responsive-fontsize'
import Button from '@/components/onboarding/Button'
import ButtonContainerComponent from './ButtonContainerComponent'
type Props = {}

const HeroSection = (props: Props) => {
  return (
    <View>
         <Image
            source={banner}
            style={tw`w-full rounded-xl relative`}
            />
          <SearchComponent/>
        <ButtonContainerComponent/>
    </View>
  )
}

export default HeroSection

const styles = StyleSheet.create({})