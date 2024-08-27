import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { Colors } from '@/constants/Colors'
import {  chevronLeft, chevronRight } from '@/assets'
import { router } from 'expo-router'
type Props = {}

const BackHeader = (props: Props) => {
  return (
    <View style={tw`flex flex-row items-center  gap-4 px-4 my-8 mb-4`}>
  <Pressable onPress={()=>router.back()} >
      <Image
      source={chevronLeft}
      style={tw`w-8 h-8`}
      />
  </Pressable>
  <View>

<Text style={[tw`text-[${RFPercentage(2.7)}px] `,Colors.FontStyleMain]}>Budget Staycation</Text>
  </View>
    </View>
  )
}

export default BackHeader