import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { RFValue } from 'react-native-responsive-fontsize'
import { Colors } from '@/constants/Colors'
import AppText from '@/components/AppText'
import { Barcode, invoice, visa } from '@/assets'
import Button from '@/components/onboarding/Button'
import { router, useNavigation } from 'expo-router'
import ArrowBack from '@/components/auth/ArrowBack'
import { useBookingStore } from '@/store/booking/BookingStore'
import { formatDate } from '@/components/AppUtils/hotel/utils'

type Props = {}

const SuccessPaymentScreenComponent = (props: Props) => {
    const navigation = useNavigation()
    const {hotel,checkInDate,checkOutDate,numberOfGuests,clearBooking} = useBookingStore()


    return (
        <SafeAreaView style={tw`flex-1 bg-white `}>

            <Header 
            hotelName={hotel?.name || ''}
            checkInDate={formatDate(checkInDate)}
            checkOutDate={formatDate(checkOutDate)}
            />
            {/* <ArrowBack  /> */}
            <View style={tw`flex-1 gap-2 mt-8 `}>
                <Image
                    source={invoice}
                    style={tw`w-full  h-[${RFValue(350)}px] relative`}
                />
                <View style={tw` gap-2  absolute top-10 left-10  w-90 px-4 py-4 h-[${RFValue(250)}px]`}>
                    <View style={tw`flex-row justify-between`}>
                        <AppText style={tw`text-center text-[${RFValue(16)}px] font-bold`}>
                            Invoice
                        </AppText>
                        <Image
                            source={visa}
                            style={tw`w-[${RFValue(40)}px] h-[${RFValue(40)}px] rounded-full`}
                        />
                    </View>
                    <View style={tw`flex justify-start items-start  gap-1`}>
                        <AppText style={tw`text-center text-[${RFValue(13)}px] font-bold`}>
                            Hotel Info
                        </AppText>
                        <AppText style={tw`text-center text-[${RFValue(11)}px] text-gray-400 font-bold`}>
                      {hotel?.name}
                            </AppText>
                    </View>
                    <View style={tw`flex justify-start items-start  gap-1`}>
                        <AppText style={tw`text-center text-[${RFValue(13)}px] font-bold`}>
                            Date
                        </AppText>
                        <AppText style={tw`text-center text-[${RFValue(11)}px] text-gray-400 font-bold`}>
                            {formatDate(checkInDate)} - {formatDate(checkOutDate)}
                        </AppText>
                    </View>
                    <View style={tw`flex justify-start items-start  gap-1`}>
                        <AppText style={tw`text-center text-[${RFValue(13)}px] font-bold`}>
                            Guests
                        </AppText>
                        <AppText style={tw`text-center text-[${RFValue(11)}px] text-gray-400 font-bold`}>
                            {numberOfGuests.adults} Adults, {numberOfGuests.children} Child {numberOfGuests.infants} Infant
                        </AppText>
                    </View>
                    <View style={tw`flex justify-start  mr-2  my-4  gap-1`}>
                   
                        <AppText style={tw`text-center text-[${RFValue(13)}px] text-gray-400 font-bold`}>
                        Order No. 399202849211238                        </AppText>
                        <Image
                            source={Barcode}
                            style={tw`w-50 h-[${RFValue(30)}px] self-center my-1 `}
                        />
                    </View>

                </View>
            </View>
            <View style={tw`flex-1 justify-center items-center`}>
                <Button
                    title='Back to Home'
                    onPress={() => {
                        router.back()
                        router.navigate('/(tabs)/tickets')
                        router.dismissAll()
                        console.log('back to home', navigation.canGoBack())
                        clearBooking()
                    }}
                    style={tw`w-90 self-center border border-black`}
                />
            </View>
        </SafeAreaView>
    )
}

export default SuccessPaymentScreenComponent

const Header = ({
    hotelName,
    checkInDate,
    checkOutDate
}: {
    hotelName: string
    checkInDate: string
    checkOutDate: string
}) => {
    return (
        <View style={tw` gap-2 mt-8 `}>


            <AppText style={tw`text-center text-[${RFValue(20)}px] font-bold`}>
                Reservation Success
            </AppText>
            <View style={tw`flex-row gap-1 justify-center max-w-[${RFValue(300)}px]`}>

                <AppText style={tw`text-center text-[${RFValue(13)}px] px-2 text-gray-400 font-medium`}>
                    Your reservation at
                </AppText>
                <AppText style={tw`text-center text-[${RFValue(13)}px]  font-medium `}>
                    {hotelName}
                </AppText>
            </View>
            <View style={tw`flex-row gap-1 justify-center`}>

                <AppText style={tw`text-center text-[${RFValue(13)}px] text-gray-400 font-medium`}>
                    booked at {checkInDate}
                </AppText>
                <AppText style={tw`text-center text-[${RFValue(13)}px]  font-medium`}>
                   - {checkOutDate}       
                       </AppText>
            </View>
        </View>
    )
}