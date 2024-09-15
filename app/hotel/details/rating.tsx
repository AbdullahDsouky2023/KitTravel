import { View, Text } from 'react-native'
import React from 'react'
import HotelReviewScreen from '@/components/screen/explore/hotelDetails/HotelReviewScreen'
import { useRoute } from '@react-navigation/native'
import { useLocalSearchParams } from 'expo-router'

type Props = {}

const rating = (props: Props) => {

  return (
   <HotelReviewScreen />
  )
}

export default rating