import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import WhishListHotelComponent from './WhishListHotel'
import { Colors } from '@/constants/Colors'

type Props = {}

const WhishListScreen = (props: Props) => {
  return (
    <SafeAreaView style={{flex:1,backgroundColor:Colors.white}}>

        <WhishListHotelComponent />
    </SafeAreaView>
  )
}

export default WhishListScreen