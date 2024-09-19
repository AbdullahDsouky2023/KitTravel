import { View, Text } from 'react-native'
import React from 'react'
import { useState, useRef } from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import { Entypo } from '@expo/vector-icons'
import Animated, { Easing } from 'react-native-reanimated'
import AppText from '@/components/AppText'
import tw from 'twrnc'
import AnimatedRollingNumber from 'react-native-animated-rolling-numbers'
import { useBookingStore } from '@/store/booking/BookingStore'
import { GuestType } from '@/types/hotel'



type AddPassengerButtonProps = {
    title: string
    subTitle: string
}
const AddPassengerButtonComponent: React.FC<AddPassengerButtonProps> = (
    {
        title,
        subTitle,

    }
) => {
    const {setGuests,numberOfGuests} = useBookingStore()
        const [count, setCount] = useState(numberOfGuests[title as keyof typeof numberOfGuests] || 0)
    const handleIncreaseCount = (count: number) => {
        if (count < 10) {
            setCount(count + 1)
            setGuests({...numberOfGuests, [title]: count + 1})
        }
    }
    const handleDecreaseCount = (count: number) => {
        if (count > 1) {
            setCount(count - 1)
            setGuests({...numberOfGuests, [title]: count - 1})
        }
    }
    //console.log(numberOfGuests)

    return (
        <View style={tw`flex w-full bg-white p-4 gap-4 justify-between flex-row`}>
            <View>
                <AppText style={tw`text-[${RFValue(16)}px] relative px-4 `}>
                    {title}
                </AppText>
                <AppText style={tw`text-[${RFValue(12)}px] text-gray-500 relative px-4 `}>
                    {subTitle}
                </AppText>
            </View>
            <View style={tw`flex flex-row items-center gap-2`}>
                <Entypo name="chevron-left" size={RFValue(20)} color={count > 1 ? 'black' : 'gray'} onPress={() => {
                    handleDecreaseCount(count)
                }} />
                <AnimatedRollingNumber
                    value={count}
                    useGrouping={true}
                    enableCompactNotation={true}
                    textStyle={tw`text-[${RFValue(16)}px] relative`}
                    spinningAnimationConfig={{ duration: 500, easing: Easing.bounce }}
                />
                <Entypo name="chevron-right" size={RFValue(20)} color={count < 10 ? "black" : "gray"} onPress={() => {
                    if (count < 10) {
                        handleIncreaseCount(count)
                    }
                }} />
            </View>
        </View>
    )
}

export default AddPassengerButtonComponent