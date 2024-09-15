import { View, Text } from 'react-native'
import React, { useRef, useState } from 'react'
import tw from 'twrnc'
import { RFValue } from 'react-native-responsive-fontsize'
import Line from '@/components/screen/explore/hotelDetails/Line'
import AppText from '@/components/AppText'
import { ScrollView } from 'react-native'
import { Entypo, } from '@expo/vector-icons'
import Button from '@/components/onboarding/Button'
import Animated, { FadeInDown } from 'react-native-reanimated'
import { AnimatedRollingNumber } from "react-native-animated-rolling-numbers";
import { Easing } from "react-native-reanimated";
import AddPassengerButtonComponent from './components/AddPassengerButtonComponent'
import { router } from 'expo-router'
import { GuestType } from '@/types/hotel'
import { toast } from 'sonner-native'
type Props = {}

const WhoBookingScreenComponeont = (props: Props) => {
    return (
        <View style={tw`flex-1 bg-white relative  `} >
            <ScrollView style={tw`flex-1 text-white relative bg-white px-4 mb-6`} showsVerticalScrollIndicator={false}>
                <AppText style={tw`text-[${RFValue(20)}px] relative px-4 mt-8`}>Who is Coming?</AppText>
                <Line />
                <AddPassengerButtonComponent title={GuestType.ADULTS} subTitle='ages 12 and above' />
                <AddPassengerButtonComponent title={GuestType.CHILDREN} subTitle='ages 2-12' />
                <AddPassengerButtonComponent title={GuestType.INFANTS} subTitle='under 2' />
            </ScrollView>
            <Button title='Apply'
                style={tw`w-full absolute bg-black bottom-10 mx-4 w-[90%] self-center p-4`}
                styleText={tw`text-white text-[${RFValue(16)}px]`}
                onPress={() => {
                    router.navigate('/hotel/details/payment')
                    toast.success('Guests Added Successfully')
                }} />
        </View>
    )
}

export default WhoBookingScreenComponeont

