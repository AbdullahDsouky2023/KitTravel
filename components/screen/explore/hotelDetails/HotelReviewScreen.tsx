import { View, Text, ScrollView, Pressable } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc'
import AppText from '@/components/AppText'
import { RFValue } from 'react-native-responsive-fontsize'
import Line from './Line'
import RatingCircles from './RatingCircles'
import { Colors } from '@/constants/Colors'
import RatingComponentAverage from './RatingComponentAverage'
import ReviewDetails from './ReviewDetails'
type Props = {}

const HotelReviewScreen = (props: Props) => {
    const [selectedRating, setSelectedRating] = useState<string>('Perfect');
    return (
        <ScrollView style={tw`flex-1 text-white bg-white px-4 mb-6`} showsVerticalScrollIndicator={false}>
            <AppText style={tw`text-[${RFValue(18)}px] px-4 mt-8`}>What other people says</AppText>
            <Line />
            <View style={tw`flex flex-row items-center gap-4`}>

            <RatingCircles rating={4.4}/>
            <AppText style={tw`text-[${RFValue(15)}px] text-[${Colors.black}]`}>
                Rating 4.4 ∙ 889 Reviews
            </AppText>
            </View>
            <View style={tw`flex  gap-3 my-4`}>

          <RatingComponentAverage percent={80} reviewCount={455} title='Perfect'/>
          <RatingComponentAverage percent={50} reviewCount={150} title='Average'/>
          <RatingComponentAverage percent={30} reviewCount={50} title='Bad'/>
            </View>
            <Line />
            <View style={tw`flex gap-3 my-4 bg-gray-100 rounded-xl px-4 py-2 flex-row items-center justify-center gap-4`}>
                <Pressable
                onPress={() => setSelectedRating('Perfect')}
                style={tw`flex flex-row items-center gap-2 rounded-lg px-4 py-2
                     ${selectedRating === 'Perfect' ? 'bg-white shadow-md' : 'bg-gray-100'}`}>
                <AppText style={tw`text-[${RFValue(14)}px]  `}>
                    Perfect
                </AppText>
                </Pressable>
                <Pressable onPress={() => setSelectedRating('Average')} style={tw`flex flex-row items-center gap-2 rounded-lg px-4 py-2 
                    ${selectedRating === 'Average' ? 'bg-white shadow-md' : 'bg-gray-100'}`}>
                <AppText style={tw`text-[${RFValue(14)}px] `}>
                    Average
                </AppText>
                </Pressable>
                <Pressable onPress={() => setSelectedRating('Bad')} style={tw`flex flex-row items-center gap-2 rounded-lg px-4 py-2 
                     ${selectedRating === 'Bad' ? 'bg-white shadow-md' : 'bg-gray-100'}`}>
                <AppText style={tw`text-[${RFValue(14)}px]  `}>
                    Bad
                </AppText>
                </Pressable>
               
            </View>
            <ReviewDetails/>
            <ReviewDetails/>
            <ReviewDetails/>
            <ReviewDetails/>
        </ScrollView>
    )
}

export default HotelReviewScreen