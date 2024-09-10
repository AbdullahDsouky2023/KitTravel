import { ScrollView, View } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { StatusBar } from 'expo-status-bar'
import HeroSection from './HeroSection'
import HotelList from './HotelList/HotelList'
import RandomDistinationAction from './RandomDistinationAction'
type Props = {}

const  ExploreScreen = (props: Props) => {

  return (
    <ScrollView style={tw`flex-1 bg-white `} showsVerticalScrollIndicator={false}>
        <HeroSection/>
       <HotelList />
       <HotelList/>
       <RandomDistinationAction/>
       <HotelList containerStyle={tw`mb-[120px]`}/>
      <StatusBar style="dark" />

    </ScrollView>
  )
}

export default  ExploreScreen