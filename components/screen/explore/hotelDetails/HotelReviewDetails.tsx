import { View, Text } from 'react-native'
import React from 'react'
import ReviewCard from './ReviewCard'
import AppText from '@/components/AppText'

type Props = {
    review:any
}

const HotelReviewDetails = ({review}:Props) => {
    return (
        <View>
            <ReviewCard review={review} />
            <AppText>
                {review.review}
            </AppText>
        </View>
    )
}

export default HotelReviewDetails