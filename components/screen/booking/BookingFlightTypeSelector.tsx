import { View, Text } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { Pressable } from 'react-native'
import tw from 'twrnc'
import AppText from '../../AppText'
import { RFValue } from 'react-native-responsive-fontsize'

type Props = {}
enum FlightType {
    OneWay = 'OneWay',
    Return = 'Return'
}

const BookingFlightTypeSelector = (
) => {
    const [selectedRating,setSelectedRating] = useState<('OneWay' | 'Return')>('OneWay')

    return(
        <View style={tw`flex gap-3 my-4 bg-gray-100 rounded-xl px-4 py-2 flex-row items-center justify-center gap-4`}>
        <Pressable
        onPress={() => setSelectedRating(FlightType.OneWay)}
        style={tw`flex flex-row items-center gap-2 rounded-lg px-4 py-2
             ${selectedRating === FlightType.OneWay ? 'bg-white shadow-md' : 'bg-gray-100'}`}>
        <AppText style={tw`text-[${RFValue(14)}px]  `}>
            One Way
        </AppText>
        </Pressable>
        <Pressable onPress={() => setSelectedRating(FlightType.Return)} style={tw`flex flex-row items-center gap-2 rounded-lg px-4 py-2 
            ${selectedRating ===   FlightType.Return  ? 'bg-white shadow-md' : 'bg-gray-100'}`}>
        <AppText style={tw`text-[${RFValue(14)}px] `}>
            Return
        </AppText>
        </Pressable>
        
       
    </View>
    )
}

export default BookingFlightTypeSelector