import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { Colors } from '@/constants/Colors'
import {  chevronRight } from '@/assets'
import { router } from 'expo-router'
type Props = {}

const Header = (props: Props) => {
  return (
    <View style={tw`flex flex-row items-center justify-between mb-4`}>
  <View>

<Text style={[tw`text-[${RFPercentage(2.7)}px] `,Colors.FontStyleMain]}>Budget Staycation</Text>
<Text style={[tw`text-[${RFPercentage(1.8)}px] text-[${Colors.Black40}] `,Colors.FontStyleMain]}>Nearest staycation you can live</Text>
  </View>
  <Pressable onPress={()=>router.push('/exploreMoreScreen')} >
      <Image
      source={chevronRight}
      style={tw`w-8 h-8`}
      />
  </Pressable>
    </View>
  )
}

export default Header