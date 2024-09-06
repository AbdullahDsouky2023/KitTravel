import { View, Text } from 'react-native'
import React from 'react'
import ReviewCard from './ReviewCard'
import tw from 'twrnc'
import AppText from '@/components/AppText'
import Button from '@/components/onboarding/Button'
import { RFValue } from 'react-native-responsive-fontsize'
import { Colors } from '@/constants/Colors'
import { router } from 'expo-router'
type Props = {}

const ReviewContainer = (props: Props) => {
  return (
    <View style={tw`px-4 h-[500px] `}>
        <AppText style={tw`text-[${Colors.primary}] text-[${RFValue(18)}px] my-4`}>
        Rating 4.4 ∙ 889 Reviews
        </AppText>
      <ReviewCard/>
      <AppText>
      Great place for a getaway from the city. If you look at the map technically this place is surrounded by houses, restaurants, etc but there’s a small jungle-like …
      </AppText>
      <Button
            title={'Show All Reviews'}
            styleText={tw`text-black text-[${RFValue(14)}px]`}
            style={tw`border border-black my-6`}
            onPress={()=>{
                router.navigate('/hotel/details/rating')
            }}
          />
    </View>
  )
}

export default ReviewContainer