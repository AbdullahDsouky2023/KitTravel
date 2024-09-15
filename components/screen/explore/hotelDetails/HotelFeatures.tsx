import { View, Text, Image, FlatList } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { home, image, pool } from '@/assets'
import { RFValue } from 'react-native-responsive-fontsize'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import FeatureItems from './FeatureItems'
import Button from '@/components/onboarding/Button'
import { router } from 'expo-router'
import { getHotelOffers } from './HotelOffersScreen'
type Props = {
  features: string[]
}


const HotelFeatures = ({ features }: Props) => {

  return (
    <View style={tw`flex-1 min-h-[190px]  bg-white px-4`}>
      <FlatList
        data={getHotelOffers(features).slice(0, 3)}
        scrollEnabled={true}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item: feature }) => {

          return <FeatureItems
            isAvailable={true}
            image={feature.image}
            title={feature.title}
            description={feature.description}
          />
        }}
      />


      <Button
        title={'Show All Features'}
        styleText={tw`text-black text-[${RFValue(14)}px]`}
        style={tw`border border-black my-4`}
        onPress={() => router.push({
          pathname: '/hotel/details/offers',
          params: {
            features: features
          }
        })}
      />

    </View>
  )
}

export default HotelFeatures