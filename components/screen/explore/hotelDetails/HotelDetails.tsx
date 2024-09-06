import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { RFValue } from 'react-native-responsive-fontsize'
import RatingCircles from './RatingCircles'
import { Colors } from '@/constants/Colors'
import Button from '@/components/onboarding/Button'
import { router } from 'expo-router'


type Props = {}

const HotelDetails = (props: Props) => {
    return (
        <ScrollView
        showsVerticalScrollIndicator={false}
        >
            <View style={tw`px-4 my-4 flex gap-2`}>
                <Text style={[tw`text-black text-[${RFValue(24)}px] font-bold`, Colors.FontStyleMain]}>Saza Villa</Text>
                <Text style={[tw`text-slate-500 text-[${RFValue(14)}px] font-bold`, Colors.FontStyleMain]}>Nusa Dua, Indonesia ∙ 2.7km</Text>
                <View style={tw`flex-row items-center mt-2`}>
                    <RatingCircles rating={4.4} />
                    <Text style={tw`ml-2 text-blue-500 font-bold`}>4.4 (889 Reviews)</Text>
                </View>
                <View style={tw`my-4 rounded-md bg-gray-400 h-[${RFValue(1)}px] w-full`} />
            </View>
            <View style={tw`flex gap-2 px-4`}>
                <Text style={[tw`text-black text-[${RFValue(20)}px] font-bold`, Colors.FontStyleMain]}>About this Place</Text>
                <Text style={[tw`text-slate-500 text-[${RFValue(14)}px] font-bold`, Colors.FontStyleMain]}>
                    This is a super cozy one-bedroom villa with a spacious private bathroom, private kitchen, dining room and the most stunning rice-fields and jungle view!
                </Text>
                <Button
                    title={'Read More'}
                    styleText={tw`text-black text-[${RFValue(14)}px]`}
                    style={tw`border border-black my-4`}
                    onPress={()=>router.push('/hotel/details/about')}
                />
            </View> 

               </ScrollView>
    )
}

export default HotelDetails