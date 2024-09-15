import { View, Text, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { RFValue } from 'react-native-responsive-fontsize'
import { Colors } from '@/constants/Colors'
import { home } from '@/assets'
type Props = {
    image: any
    title: string
    description: string
    isAvailable: boolean
  }

const FeatureItems = ({
    image,
    title,
    description,
    isAvailable
}: Props) => {
  if(!isAvailable) return null
  return (
    <View style={tw`flex-1 bg-white mb-4 flex flex-row gap-4 justify-center items-center`}>
      <Image source={image} style={tw`w-[${RFValue(20)}px] h-[${RFValue(20)}px]`} />    
    <View style={tw`flex-1 gap-2`}>
        <Text style={[tw`text-black text-[${RFValue(14)}px] `,Colors.FontStyleMain]}>
          {title}
        </Text>
        <Text style={[tw`text-slate-500 text-[${RFValue(12)}px] `,Colors.FontStyleMain]}>
        {description}
        </Text>
    </View>
    </View>
  )
}

export default FeatureItems