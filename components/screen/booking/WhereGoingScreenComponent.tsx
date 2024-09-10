import { View, Text, ScrollView, Image, TextInput } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import AppText from '@/components/AppText'
import { RFValue } from 'react-native-responsive-fontsize'
import Line from '../explore/hotelDetails/Line'
import { search } from '@/assets'
import { Colors } from '@/constants/Colors'
type Props = {}

const WhereGoingScreenComponent = (props: Props) => {
    const popularDistination:string[] = [
        'London',
        'Paris',
        'New York',
        'Tokyo',
        'Dubai',
        'Sydney',
        'Rome',
        'Barcelona',
        'Madrid',
     ]
    return(
        <ScrollView style={tw`flex-1 text-white bg-white px-4 mb-6`} showsVerticalScrollIndicator={false}>
            <AppText style={tw`text-[${RFValue(18)}px] px-4 mt-8`}>Going to where?</AppText>
            <Line />
            <View style={tw`flex flex-row items-center justify-center gap-4 bg-gray-100 p-3 w-95 self-center rounded-full`}>
                <Image
                source={search}
                style={tw`w-[${RFValue(17)}px] h-[${RFValue(17)}px]`}
                />
                <TextInput
                    placeholder='Try input city or airport'
                    style={tw`flex-1 text-xl`}
                    // placeholderTextColor={Colors.MainColor}
                />
            </View>
            <AppText style={tw`text-[${RFValue(14)}px] px-3 my-8`}>Popular Destinations</AppText>
            <View style={tw`flex flex-row flex-wrap gap-2`}>

            {popularDistination.map((item,index)=>(
                <View key={index} style={tw`flex flex-row items-center justify-between
                    gap-4  px-3`}>
                    <AppText style={tw`text-[${RFValue(14)}px] border border-black px-4 py-2   rounded-xl`}>
                        {item}
                    </AppText>
            </View>
            ))}
            </View>
        </ScrollView>
    )
}


export default WhereGoingScreenComponent