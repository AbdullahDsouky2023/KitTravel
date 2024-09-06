import { View, Text, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { home, image, pool } from '@/assets'
import { RFValue } from 'react-native-responsive-fontsize'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import FeatureItems from './FeatureItems'
import Button from '@/components/onboarding/Button'
import { router } from 'expo-router'
type Props = {}

const HotelFeatures = (props: Props) => {
  return (
    <View style={tw`flex-1 min-h-[190px]  bg-white px-4`}>
          <FeatureItems
          image={image}
          title='Ocean View'
          description='You’ll have privately ocean view from you staycation'
          />
       
          <FeatureItems
          image={home}
          title='Ocean View'
          description='You’ll have privately ocean view from you staycation'
          />
       
          <FeatureItems
          image={pool}
          title='Ocean View'
          description='You’ll have privately ocean view from you staycation'
          />

           <Button
            title={'Show All Features'}
            styleText={tw`text-black text-[${RFValue(14)}px]`}
            style={tw`border border-black my-4`}
            onPress={()=>router.push('/hotel/details/offers')}
          />
       
    </View>
  )
}

export default HotelFeatures