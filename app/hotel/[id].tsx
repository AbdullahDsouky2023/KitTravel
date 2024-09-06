import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import HotelDetailsScreenComponent from '@/components/screen/explore/hotelDetails/HotelDetailsScreenComponent'

type Props = {}

const HotelDetailsScreen = (props: Props) => {
    const { id } = useLocalSearchParams();
    return (
   <HotelDetailsScreenComponent/>
  )
}

export default HotelDetailsScreen