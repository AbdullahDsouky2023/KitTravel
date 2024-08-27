import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import HotelListCoomponent from './HotelList/HotelListCoomponent'
import BackHeader from './HotelList/BackHeader'
type Props = {}

const ExploreDatilsListScreen = (props: Props) => {
  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
    <BackHeader/>
      <HotelListCoomponent />
    </SafeAreaView>
  )
}

export default ExploreDatilsListScreen

const styles = StyleSheet.create({})