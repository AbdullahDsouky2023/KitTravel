import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import WhishListHotelComponent from './WhishListHotel'

type Props = {}

const WhishListScreen = (props: Props) => {
  return (
    <SafeAreaView>
        <WhishListHotelComponent />
    </SafeAreaView>
  )
}

export default WhishListScreen