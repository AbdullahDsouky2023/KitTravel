import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { RFValue } from 'react-native-responsive-fontsize'
import Line from '@/components/screen/explore/hotelDetails/Line'
import AppText from '@/components/AppText'
import { ScrollView } from 'react-native'
import {  Entypo,  } from '@expo/vector-icons'
import Button from '@/components/onboarding/Button'

type Props = {}

const WhoBookingScreenComponeont = (props: Props) => {
  return (
    <View style={tw`flex-1 bg-white relative  `} >
    <ScrollView style={tw`flex-1 text-white relative bg-white px-4 mb-6`} showsVerticalScrollIndicator={false}>
        <AppText style={tw`text-[${RFValue(20)}px] relative px-4 mt-8`}>Who is Coming?</AppText>
        <Line />
        <AddPassengerButton title='Adults' subTitle='ages 12 and above'/>
        <AddPassengerButton title='Children' subTitle='ages 2-12'/>
        <AddPassengerButton title='Infants' subTitle='under 2'/>
    </ScrollView>
        <Button title='Apply' 
        
        style={tw`w-full absolute bg-black bottom-10 mx-4 w-[90%] self-center p-4`}
        styleText={tw`text-white text-[${RFValue(16)}px]`}
        onPress={()=>{}}/>
</View>
  )
}

export default WhoBookingScreenComponeont

type AddPassengerButtonProps  = {
    title:string
    subTitle:string
}
const AddPassengerButton:React.FC<AddPassengerButtonProps> = (
    {
        title,
        subTitle,

    }
) => {
    return(
        <View style={tw`flex w-full bg-white p-4 gap-4 justify-between flex-row`}>
        <View>
            <AppText style={tw`text-[${RFValue(16)}px] relative px-4 `}>
            {title}
            </AppText>
            <AppText style={tw`text-[${RFValue(12)}px] text-gray-500 relative px-4 `}>
                {subTitle}
            </AppText>
        </View>
        <View style={tw`flex flex-row items-center gap-2`}>
        <Entypo name="chevron-left" size={RFValue(20)} color="black" />    
                    <AppText style={tw`text-[${RFValue(16)}px] relative px-4 `}>
                2
            </AppText>
            <Entypo name="chevron-right" size={RFValue(20)} color="black" />
        </View>
    </View>
    )
}