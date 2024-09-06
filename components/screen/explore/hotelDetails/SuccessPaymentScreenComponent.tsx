import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { RFValue } from 'react-native-responsive-fontsize'
import { Colors } from '@/constants/Colors'
import AppText from '@/components/AppText'
import { Barcode, invoice, visa } from '@/assets'
import Button from '@/components/onboarding/Button'
import { router } from 'expo-router'

type Props = {}

const SuccessPaymentScreenComponent = (props: Props) => {
    return (
        <SafeAreaView style={tw`flex-1 bg-white `}>

            <Header />
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
                            Saza Villa at Bali
                        </AppText>
                    </View>
                    <View style={tw`flex justify-start items-start  gap-1`}>
                        <AppText style={tw`text-center text-[${RFValue(13)}px] font-bold`}>
                            Date
                        </AppText>
                        <AppText style={tw`text-center text-[${RFValue(11)}px] text-gray-400 font-bold`}>
                            11 Jun - 27 Jun, 2021
                        </AppText>
                    </View>
                    <View style={tw`flex justify-start items-start  gap-1`}>
                        <AppText style={tw`text-center text-[${RFValue(13)}px] font-bold`}>
                            Guests
                        </AppText>
                        <AppText style={tw`text-center text-[${RFValue(11)}px] text-gray-400 font-bold`}>
                            2 Adults, 1 Child
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
                    onPress={() => router.back()}
                    style={tw`w-90 self-center border border-black`}
                />
            </View>
        </SafeAreaView>
    )
}

export default SuccessPaymentScreenComponent

const Header = () => {
    return (
        <View style={tw` gap-2 mt-8 `}>


            <AppText style={tw`text-center text-[${RFValue(22)}px] font-bold`}>
                Reservation Success
            </AppText>
            <View style={tw`flex-row gap-1 justify-center`}>

                <AppText style={tw`text-center text-[${RFValue(14)}px] text-gray-400 font-medium`}>
                    Your reservation at
                </AppText>
                <AppText style={tw`text-center text-[${RFValue(14)}px]  font-medium`}>
                    Saza Villa at Bali
                </AppText>
            </View>
            <View style={tw`flex-row gap-1 justify-center`}>

                <AppText style={tw`text-center text-[${RFValue(14)}px] text-gray-400 font-medium`}>
                    booked at 20 June
                </AppText>
                <AppText style={tw`text-center text-[${RFValue(14)}px]  font-medium`}>
                    - 27 Aug          </AppText>
            </View>
        </View>
    )
}