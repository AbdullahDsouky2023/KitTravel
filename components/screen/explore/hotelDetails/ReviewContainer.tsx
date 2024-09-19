import { View, Text } from 'react-native'
import React from 'react'
import ReviewCard from './ReviewCard'
import tw from 'twrnc'
import AppText from '@/components/AppText'
import Button from '@/components/onboarding/Button'
import { RFValue } from 'react-native-responsive-fontsize'
import { Colors } from '@/constants/Colors'
import { router } from 'expo-router'
import HotelReviewDetails from './HotelReviewDetails'
type Props = {
  reviews: any
}

const ReviewContainer = ({ reviews }: Props) => {
  //console.log(reviews)
  const averageRate = reviews.reduce((acc: any, review: any) => acc + review.rating, 0) / reviews.length;

  return (
    <View style={tw`px-4 h-[500px] `}>
        <AppText style={tw`text-[${Colors.primary}] text-[${RFValue(18)}px] my-4`}>
        Rating {averageRate} ∙ {reviews.length} Reviews
        </AppText>
      <HotelReviewDetails review={reviews[0]}/>
      <Button
            title={'Show All Reviews'}
            styleText={tw`text-black text-[${RFValue(14)}px]`}
            style={tw`border border-black my-6`}
            onPress={()=>{
                router.push({
                  pathname: '/hotel/details/rating',
                  params:{
                    reviews:JSON.stringify(reviews)
                  }
                  
                })
            }}
          />
    </View>
  )
}

export default ReviewContainer