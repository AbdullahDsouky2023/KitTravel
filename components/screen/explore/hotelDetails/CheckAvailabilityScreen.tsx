import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import AppText from '@/components/AppText'
import { RFValue } from 'react-native-responsive-fontsize'
import Line from './Line'
import FloatingPricing from './FloatingPricing'
import CalendarComponent from './CalenderComponent'
import { useLocalSearchParams } from 'expo-router'
type Props = {}

const CheckAvailabilityScreen = (props: Props) => {
    const {price} = useLocalSearchParams()
    return (
        <View style={tw`flex-1 bg-white relative  `} >

            <ScrollView style={tw`flex-1 text-white relative bg-white px-4 mb-6`} showsVerticalScrollIndicator={false}>
                <AppText style={tw`text-[${RFValue(18)}px] relative px-4 mt-8`}>Check Avaibility</AppText>
                <Line />
                <CalendarComponent reservation={false} />
            </ScrollView>
            <FloatingPricing  pay={false} confirm={false} price={Number(price)} selectGuests={true} />
        </View>
    )
}


export default CheckAvailabilityScreen