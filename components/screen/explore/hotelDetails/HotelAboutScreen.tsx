import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import AppText from '@/components/AppText'
import { RFValue } from 'react-native-responsive-fontsize'
import Line from './Line'
import { useRoute } from '@react-navigation/native'
type Props = {
}
interface RouteParams {
    about?: string;
  }

const HotelAboutScreen = (props: Props) => {
    const route = useRoute();
    const about = (route.params as RouteParams)?.about || "";

    return (
        <ScrollView style={tw`flex-1 text-white bg-white px-4 mb-6`} showsVerticalScrollIndicator={false}>
            <AppText style={tw`text-[${RFValue(18)}px] px-4 mt-8`}>About This Place</AppText>
            <Line />
            <AppText style={tw`text-[${RFValue(14)}px] leading-8`}>
              {about}
            </AppText>
        </ScrollView>
    )
}

export default HotelAboutScreen