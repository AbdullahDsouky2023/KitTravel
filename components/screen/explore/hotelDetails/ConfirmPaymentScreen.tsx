import { View, Text, SafeAreaView, Image, ScrollView } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { StatusBar } from 'expo-status-bar'
import Header from '../HotelList/Header'
import BackHeader from '../HotelList/BackHeader'
import Line from './Line'
import { card1, visa } from '@/assets'
import { RFValue } from 'react-native-responsive-fontsize'
import AppText from '@/components/AppText'
import Button from '@/components/onboarding/Button'
import { Colors } from '@/constants/Colors'
import { AntDesign } from '@expo/vector-icons'
import FloatingPricing from './FloatingPricing'
type Props = {}

const ConfirmPaymentScreen = (props: Props) => {
  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <BackHeader 
      title="Confirm Payment"
      />
      <Line/>
    <ScrollView showsVerticalScrollIndicator={false} style={tw`flex-1 mb-[${RFValue(100)}px]`} >
      <SelectedRoomDetails/>
      <Line/>
      <PeopeDetails/>
      <Line/>
      <PriceDetails/>
      <Line/>
      <PaymentMethod/>
    </ScrollView>
    <FloatingPricing
    confirm={true}
    pay={false}
    />
      <StatusBar style="auto" />
    </SafeAreaView>
  )
}

export default ConfirmPaymentScreen

const SelectedRoomDetails = () => {
  return (
    <View style={tw`px-4 flex-row gap-4 my-4`}>
    <Image
    source={card1}
    style={tw`w-[${RFValue(110)}px] rounded-lg h-[${RFValue(110)}px]`}
    />
    <View style={tw`flex-1 gap-1`}>
      <AppText style={tw`text-[${RFValue(14)}px] font-bold `}>
      Saza Villa ∙ Home 1     
           </AppText>
      <AppText style={tw`text-[${RFValue(10)}px] text-gray-400 font-bold`}>
      1 king bed ∙ 1 couch
      </AppText>
      <AppText style={tw`text-[${RFValue(10)}px] text-gray-400 font-bold`}>
      2 suite bathroom ∙ private pool
      </AppText>
    </View>
  </View>
  )
}

const PeopeDetails = () => {
  return (
    <View style={tw` px-4`}>
    <AppText style={tw`text-[${RFValue(18)}px] font-bold`}>
    When & Who else?
    </AppText>
    <View style={tw` my-4 flex-row justify-between`}>
      <View style={tw``}>

      <AppText style={tw`text-[${RFValue(15)}px] font-bold`}>
      Dates
      </AppText>
      <AppText style={tw`text-[${RFValue(13)}px] text-gray-400 font-bold`}>
      11 June - 27 June
      </AppText>
      </View>
      <Button
      title="Edit Dates"
      style={tw`border border-[${Colors.Black100}]  max-w-[${RFValue(100)}px] h-[${RFValue(30)}px] rounded-lg px-1 py-1`}
      />
    </View>
    <View style={tw` my-4 flex-row justify-between`}>
      <View style={tw``}>

      <AppText style={tw`text-[${RFValue(15)}px] font-bold`}>
      Guests          </AppText>
      <AppText style={tw`text-[${RFValue(13)}px] text-gray-400 font-bold`}>
      2 Adults          </AppText>
      </View>
      <Button
      title="Edit Guests"
      style={tw`border border-[${Colors.Black100}]  max-w-[${RFValue(100)}px] h-[${RFValue(30)}px] rounded-lg px-1 py-1`}
      />
    </View>
  </View>
  )
}

const PriceDetails = () => {
return (
  <View style={tw`px-4`}>
    <AppText style={tw`text-[${RFValue(18)}px] font-bold`}>
    Price Details
    </AppText>
    <View style={tw`flex gap-4 justify-between my-4`}>
      <View style={tw`flex-row gap-2 w-full justify-between`}>

        <AppText style={tw`text-[${RFValue(15)}px] text-gray-400 font-bold`}>
        Home 1 x 10 nights   
           </AppText>
      <AppText style={tw`text-[${RFValue(15)}px] font-bold`}>
        $1,200
      </AppText>
      </View> 
      <View style={tw`flex-row gap-2 w-full justify-between`}>

        <AppText style={tw`text-[${RFValue(15)}px] text-gray-400 font-bold`}>
       Service Fee
           </AppText>
      <AppText style={tw`text-[${RFValue(15)}px] font-bold`}>
        $120
      </AppText>
      </View> 
      <View style={tw`flex-row gap-2 w-full justify-between`}>
        
        <AppText style={tw`text-[${RFValue(15)}px] font-bold`}>
        Total
      </AppText>
      <AppText style={tw`text-[${RFValue(15)}px] font-bold`}>
        $1,320
      </AppText>
      </View> 
    </View>
  </View>
)
}

const PaymentMethod = () => {
  return (
    <View style={tw`px-4`}>
      <AppText style={tw`text-[${RFValue(18)}px] font-bold`}>
      Payment Method
      </AppText>
      <View style={tw`flex-row items-center justify-between gap-4 my-4`}>
        <View style={tw`flex-row items-center gap-4`}>

      
        <Image
        source={visa}
        style={tw`w-[${RFValue(30)}px] h-[${RFValue(30)}px]`}
        />
        <View style={tw`flex  justify-center`}>
          <AppText style={tw`text-[${RFValue(15)}px] text-gray-400 font-bold`}>
MasterCard          </AppText>
          <AppText style={tw`text-[${RFValue(15)}px] font-bold`}>
          **** 1234
          </AppText>
        </View>
        </View>
       <AntDesign
       name="checkcircle"
       size={RFValue(20)}
       color="black"
       />
      </View>
    </View>
  )
}