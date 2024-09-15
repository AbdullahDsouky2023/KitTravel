import { View, Text } from 'react-native'
import React from 'react'
import ReviewCard from './ReviewCard'
import AppText from '@/components/AppText'
import { RFValue } from 'react-native-responsive-fontsize'
import tw from 'twrnc'
type Props = {
  review: {
    name: string,
    date: string,
    avatar: string,
    review: string
  }
}

const ReviewDetails = ({ review }: Props) => {
  console.log(review)
  return (
    <View style={tw`my-2 bg-gray-100 rounded-xl px-4 py-2`}>
      <ReviewCard
        review={review}
      />
      <AppText style={tw`text-[${RFValue(14)}px] mt-1`}>
        {review.review}
      </AppText>
    </View>
  )
}

export default ReviewDetails