import { View, Text } from 'react-native'
import React from 'react'
import ReviewCard from './ReviewCard'
import AppText from '@/components/AppText'
import { RFValue } from 'react-native-responsive-fontsize'
import tw from 'twrnc'
type Props = {}

const ReviewDetails = (props: Props) => {
  return (
    <View>
   <ReviewCard />
            <AppText style={tw`text-[${RFValue(14)}px] mt-1`}>
            Great place for a getaway from the city. If you look at the map technically this place is surrounded by houses, restaurants, etc but there’s a small jungle-like.
            </AppText>
    </View>
  )
}

export default ReviewDetails