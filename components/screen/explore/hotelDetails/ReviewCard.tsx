import { View, Text } from 'react-native'
import React from 'react'
import GuideAvatarContainer from './GuideAvatarContainer'

type Props = {
  review: {
    name: string,
    date: string,
    avatar: string
  }
}

const ReviewCard = ({review}: Props) => {
  return (
    <View>
      <GuideAvatarContainer
      userName={review?.name}
      userRole={review?.date}
      userImage={review?.avatar}
      />
    </View>
  )
}

export default ReviewCard