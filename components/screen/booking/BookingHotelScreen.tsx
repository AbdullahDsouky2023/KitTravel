import { Image, Pressable, ScrollView, View } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc'
import { RFValue } from 'react-native-responsive-fontsize'
import AppText from '@/components/AppText'
import { Colors } from '@/constants/Colors'
import BookingHeader from './BookingHeader'
import { StatusBar } from 'expo-status-bar'
import { calendar, Class, passenger, planeLanding, planeTakeOff } from '@/assets'
import Line from '../explore/hotelDetails/Line'
import Button from '@/components/onboarding/Button'
import BookingFlightTypeSelector from './BookingFlightTypeSelector'
import { router } from 'expo-router'
type Props = {}

const BookingHotelScreen = (props: Props) => {
    const [isDisabled,setIsDisabled] = useState(true)
  return (
<>

    <ScrollView
    showsVerticalScrollIndicator={false}
    contentContainerStyle={tw`bg-white items-center pb-30`}
    
  >
        <View style={tw`h-[${RFValue(280)}px]  
         rounded-b-[${RFValue(20)}px] w-full flex items-center justify-center bg-black`}>
         <BookingHeader title='Flight'/>
         <AppText style={[tw`text-white text-[${RFValue(30)}px] max-w-95 text-center font-bold`,Colors.BoldFontStyleMain]}>Where are you going?</AppText>
        </View>
        <View style={tw`flex w-full bg-white p-4 gap-4`}>
           <BookingNavigationButton icon={planeTakeOff} title='Egypt' onPress={() => {}}/>
           <BookingNavigationButton icon={planeLanding} placeholder='going to where?' onPress={() => router.push('/booking/whereGoing')}/>
        </View>
        <View style={tw`flex w-full bg-white p-4 gap-4`}>
        <Line/>

        <BookingFlightTypeSelector/>
        </View>
        <View style={tw`flex w-full bg-white p-4 gap-6`}>
           <BookingNavigationButton icon={calendar} placeholder='when are you going?' onPress={() => router.push('/booking/whenBooking')}/>
           <BookingNavigationButton icon={passenger} placeholder='Who is coming?' onPress={() => router.push('/booking/whoBooking')}/>
           <BookingNavigationButton icon={Class} placeholder='Seat class you prefer?' onPress={() => router.push('/booking/classSelector')}/>
        </View>
        <StatusBar style='light'/>
    </ScrollView>
        <View style={tw` w-full bg-white my-4  absolute bottom-0 p-4 gap-4`}>
            <Button title='Find Flights' 
            style={tw`w-full ${isDisabled ? 'bg-[#00000040]' : 'bg-black'}`}
            styleText={tw`text-white`}
            onPress={()=>{}}/>
        </View>
        </>
  )
}

export default BookingHotelScreen


const BookingNavigationButton = (
    {
        icon,
        title,
        onPress,
        placeholder
    }: {
        icon: any,
        title?: string,
        onPress: () => void,
        placeholder?: string
    }
) => {
    return (
        <Pressable onPress={onPress}  style={tw`flex w-full flex flex-row items-center gap-6 bg-gray-100 p-4 px-8 rounded-full`}>
                <Image
                source={icon}
                style={tw`w-[${RFValue(16)}px] h-[${RFValue(16)}px]`}
                />
                <AppText style={[tw`text-black text-[${RFValue(14)}px] font-bold ${placeholder ? 'text-gray-400' : ''}`]}>{placeholder ? placeholder : title}</AppText>
            </Pressable>

    )
}

