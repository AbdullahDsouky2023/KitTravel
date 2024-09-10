import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { router } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize'
import AppText from '@/components/AppText'
import { Colors } from '@/constants/Colors'
import tw from 'twrnc'
type Props = {}

const BookingHeader = ({title}:{title:string})=>{
    return(
        <View style={tw`flex flex-row bg-white self-start mx-4   p-4 px-6  rounded-full gap-4 my-8`}>
        <Pressable
        onPress={()=>{
            router.back()
        }}
        >
          <Ionicons name='chevron-back' size={RFValue(20)} color='black'/>
        </Pressable>
        <AppText style={[tw`text-black text-[${RFValue(14)}px]  font-bold`,Colors.BoldFontStyleMain]}>{title}</AppText>
    </View>
    
)
}

export default BookingHeader