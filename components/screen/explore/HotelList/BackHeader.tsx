import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import { Colors } from '@/constants/Colors'
import {  chevronLeft, chevronRight } from '@/assets'
import { router } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
type Props = {
  title: string
  white?: boolean
}

const BackHeader = ({
  title,
  white
}: Props) => {
  return (
    <View style={tw`flex flex-row items-center  gap-4 px-4 mb-4`}>
  <Pressable onPress={()=>router.back()} >
     <Ionicons name='chevron-back' size={RFValue(22)} color={white ? 'white' : 'black'} />
  </Pressable>
  <View>

<Text style={[tw`text-[${RFPercentage(2.7)}px]  ${white ? 'text-white' : 'text-black'} `,Colors.FontStyleMain]}>{title ? title : 'Budget Staycation'} </Text>
  </View>
    </View>
  )
}

export default BackHeader