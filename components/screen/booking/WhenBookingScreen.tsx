import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { RFValue } from 'react-native-responsive-fontsize'
import Line from '@/components/screen/explore/hotelDetails/Line'
import CalendarComponent from '@/components/screen/explore/hotelDetails/CalenderComponent'
import FloatingPricing from '@/components/screen/explore/hotelDetails/FloatingPricing'
import AppText from '@/components/AppText'
import { ScrollView } from 'react-native'

type Props = {}

const WhenBookingScreen = (props: Props) => {
  return (
    <View style={tw`flex-1 bg-white relative  `} >

    <ScrollView style={tw`flex-1 text-white relative bg-white px-4 mb-6`} showsVerticalScrollIndicator={false}>
        <AppText style={tw`text-[${RFValue(18)}px] relative px-4 mt-8`}>Check Avaibility</AppText>
        <Line />
        <CalendarComponent  reservation={false}/>
    </ScrollView>
    <FloatingPricing  pay={true} confirm={false} date='1Aug' />
</View>
  )
}

export default WhenBookingScreen