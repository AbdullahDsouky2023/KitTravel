import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { RFValue } from 'react-native-responsive-fontsize'
import RatingCircles from './RatingCircles'
import { Colors } from '@/constants/Colors'
import Button from '@/components/onboarding/Button'
import { router } from 'expo-router'
import Hotel from '@/types/hotel'


type Props = {
    hotel: Hotel
}

const HotelDetails = ({hotel}: Props) => {
    return (
        <ScrollView
        showsVerticalScrollIndicator={false}
        >
            <View style={tw`px-4 my-4 flex gap-2`}>
                <Text style={[tw`text-black text-[${RFValue(24)}px] font-bold`, Colors.FontStyleMain]}>{hotel.name}</Text>
                {/* <Text style={[tw`text-slate-500 text-[${RFValue(14)}px] font-bold`, Colors.FontStyleMain]}>{hotel.location} ∙ 1.3km</Text> */}
                <View style={tw`flex-row items-center mt-2`}>
                    <RatingCircles rating={hotel.rating} />
                    <Text style={tw`ml-2 text-blue-500 font-bold`}>{hotel.rating} (889 Reviews)</Text>
                </View>
                <View style={tw`my-4 rounded-md bg-gray-400 h-[${RFValue(1)}px] w-full`} />
            </View>
            <View style={tw`flex gap-2 px-4`}>
                <Text style={[tw`text-black text-[${RFValue(20)}px] font-bold`, Colors.FontStyleMain]}>About this Place</Text>
                <Text style={[tw`text-slate-500 text-[${RFValue(14)}px] font-bold`, Colors.FontStyleMain]}>
            {hotel.about.slice(0, 200)}...
                </Text>
                <Button
                    title={'Read More'}
                    styleText={tw`text-black text-[${RFValue(14)}px]`}
                    style={tw`border border-black my-4`}
                    onPress={() => router.push({
                        pathname: '/hotel/details/about',
                        params: { about: hotel.about }
                    })}
                />
            </View>

               </ScrollView>
    )
}

export default HotelDetails