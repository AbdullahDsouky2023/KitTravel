import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import AppText from '@/components/AppText'
import { RFValue } from 'react-native-responsive-fontsize'
import Line from './Line'
type Props = {}

const HotelAboutScreen = (props: Props) => {
    return (
        <ScrollView style={tw`flex-1 text-white bg-white px-4 mb-6`} showsVerticalScrollIndicator={false}>
            <AppText style={tw`text-[${RFValue(18)}px] px-4 mt-8`}>About This Place</AppText>
            <Line />
            <AppText style={tw`text-[${RFValue(14)}px] leading-8`}>
                Welcome to your next fantasy jungle getaway. This open concept 2 bedroom wooden villa blends the enjoyment of modern luxury with the natural world around you, creating a dreamlike space designed to awaken your senses and enlighten your spirit. Your new home is tucked away from the hustle and bustle of central Ubud, but everything you need is conveniently close by and easily accessible.

                The space
                It is located Penestanan village. Penestanan has an intimate yoga center, Intuitive Flow, and there are many good cafe or restaurants on walking distance: Cafe Vespa (only 3 min walk), Yellow Flower (10min walk) , Alchemy (10 min walk), Kopi Desa etc. It's only 5 minutes drive.Just 30 minute walk from central of Ubud. It is located in the heart of penestanan village

                Guest access
                There is some restaurants within a walking distance. Cupid barbeque, kopi desa, alchemy and cafe vespa
                There is some restaurants within a walking distance. Cupid barbeque, kopi desa, alchemy and cafe vespa
            </AppText>
        </ScrollView>
    )
}

export default HotelAboutScreen