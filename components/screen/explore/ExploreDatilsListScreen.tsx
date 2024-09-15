import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import HotelListCoomponent from './HotelList/HotelListCoomponent'
import BackHeader from './HotelList/BackHeader'
import { RFValue } from 'react-native-responsive-fontsize'
type Props = {}

const ExploreDatilsListScreen = (props: Props) => {
  return (
    <SafeAreaView style={tw`bg-white flex-1  mb-[${RFValue(50)}px]`}>
    <BackHeader title='Explore'/>
      <HotelListCoomponent />
    </SafeAreaView>
  )
}

export default ExploreDatilsListScreen

const styles = StyleSheet.create({})