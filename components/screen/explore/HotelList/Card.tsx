import { View, Text, Image, useWindowDimensions, TouchableWithoutFeedback, Pressable } from 'react-native'
import React from 'react'
import { card1, love } from '@/assets'
import tw from 'twrnc'
import { Colors } from '@/constants/Colors'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { router } from 'expo-router'
type Props = {}

const Card = (props: Props) => {
  const { width } = useWindowDimensions();
  return (
    <Pressable
    onPress={()=>router.push('/hotel/1')}
    style={tw`relative w-[${width*0.44}px]`}>
     <Image
     source={card1}
     style={{
       width: width*0.44,
       height: width*0.44,
       borderRadius: 10,
       position:'relative'
     }}
     />
     <View   style={tw`h-9 w-9 absolute bg-white p-2 right-4 top-4 rounded-full flex items-center`}   >

     <Image
     source={love}
     style={tw`h-5 w-5 self-center`}
     />
     </View>
     <View style={tw`px-2`} >
        <Text style={[tw`text-[${RFPercentage(0.38)}] mt-4`,Colors.FontStyleMain]}>Adasaza Hotel</Text>
        <Text style={[tw`text-[${RFPercentage(0.28)}] text-gray-500 mt-1`,Colors.FontStyleMain]}>Kuta ∙ 1.3km</Text>
        <View style={tw`flex flex-row items-center`}>
        <Text style={[tw`text-[${RFPercentage(0.28)}] text-slate-900 mt-1`,Colors.FontStyleMain]}>$ 80 </Text>
        <Text style={[tw`text-[${RFPercentage(0.28)}] text-gray-500 mt-1`,Colors.FontStyleMain]}>/night</Text>
            </View>
     </View>
    </Pressable>
  )
}

export default Card