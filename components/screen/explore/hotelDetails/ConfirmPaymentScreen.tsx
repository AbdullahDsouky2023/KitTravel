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
import { useBookingStore } from '@/store/booking/BookingStore'
import { router } from 'expo-router'
import Hotel from '@/types/hotel'
 import { toast, Toaster } from 'sonner-native';

type Props = {}

const ConfirmPaymentScreen = (props: Props) => {
  const {hotel,saveBooking,totalPrice} = useBookingStore()
  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <BackHeader 
      title="Confirm Payment"
      />
      <Line/>
    <ScrollView showsVerticalScrollIndicator={false} style={tw`flex-1 mb-[${RFValue(100)}px]`} >
      <SelectedRoomDetails />
      <Line/>
      <PeopeDetails/>
      <Line/>
      <PriceDetails/>
      <Line/>
      <PaymentMethod/>
    </ScrollView>
    <FloatingPricing
    confirm={true}
    selectGuests={false}
    price={totalPrice}
    title='Book Now'
    onPress={() => {
      // toast.success('Payment Method Selected Successfully')
      
      toast.loading('Processing Payment', {
        duration: 5000,
        closeButton: false,
        invert: false,
        important: true,
      })
      setTimeout(() => {
        toast.success('Payment Successful')
        router.replace('/hotel/details/successPayment')
      }, 5000)
      saveBooking()
      
    }}
    />
      <StatusBar style="auto" />
   
    </SafeAreaView>
  )
}

export default ConfirmPaymentScreen


const SelectedRoomDetails = () => {
  const { selectedRoom } = useBookingStore()
  console.log(selectedRoom)
  return (
    <View style={tw`px-4 flex-row gap-4 my-4`}>
    <Image
    source={card1}
    style={tw`w-[${RFValue(110)}px] rounded-lg h-[${RFValue(110)}px]`}
    />
    <View style={tw`flex-1 gap-1`}>
      <AppText style={tw`text-[${RFValue(14)}px] font-bold `}>
      {selectedRoom?.name} 
           </AppText>
      <AppText style={tw`text-[${RFValue(10)}px] text-gray-400 font-bold`}>
      {selectedRoom?.description}
      </AppText>
      <AppText style={tw`text-[${RFValue(10)}px] text-gray-400 font-bold`}>
      </AppText>
    </View>
  </View>
  )
}

const PeopeDetails = () => {
  const {checkInDate, checkOutDate,hotel} = useBookingStore()

  const formatDate = (date: Date | null) => {
    if (!date) return '';
    return date.getDate() + ' ' + date.toLocaleString('en-US', { month: 'long' });
  }

  const {numberOfGuests} = useBookingStore()
  console.log(numberOfGuests)
  const {adults, children, infants} = numberOfGuests
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
      <AppText style={tw`text-[${RFValue(12)}px] text-gray-400 font-bold`}>
        {formatDate(checkInDate)} - {formatDate(checkOutDate)}
      </AppText>
      </View>
      <Button
      title="Edit Dates"
      onPress={() => {
        router.push({
            pathname: '/hotel/details/avaiablity',
            params: {
              price:hotel?.pricePerNight,
              hotel: hotel?._id
            }
          })}}

      
      style={tw`border border-[${Colors.Black100}]  max-w-[${RFValue(100)}px] h-[${RFValue(30)}px] rounded-lg px-1 py-1`}
      />
    </View>
    <View style={tw` my-4 flex-row justify-between`}>
      <View style={tw``}>

      <AppText style={tw`text-[${RFValue(15)}px] font-bold`}>
      Guests         
       </AppText>
      <AppText style={tw`text-[${RFValue(13)}px] text-gray-400 font-bold`}>
      {adults} Adults, {children} Children, {infants} Infants
        </AppText>
      </View>
      <Button
      title="Edit Guests"
      onPress={() => {
         router.navigate('/hotel/details/guests')
      }}
      style={tw`border border-[${Colors.Black100}]  max-w-[${RFValue(100)}px] h-[${RFValue(30)}px] rounded-lg px-1 py-1`}
      />
    </View>
  </View>
  )
}

const PriceDetails = () => {
  const { totalPrice, checkInDate, checkOutDate, selectedRoom, serviceFee } = useBookingStore();
  const numberOfNights = checkInDate && checkOutDate
    ? Math.ceil((checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 60 * 60 * 24))
    : 0;

  return (
    <View style={tw`px-4`}>
      <AppText style={tw`text-[${RFValue(18)}px] font-bold`}>
    Price Details
    </AppText>
    <View style={tw`flex gap-4 justify-between my-4`}>
      <View style={tw`flex-row gap-2 w-full justify-between`}>

        <AppText style={tw`text-[${RFValue(15)}px] text-gray-400 font-bold max-w-[${RFValue(170)}px]`}>
        {selectedRoom?.name} x {numberOfNights} nights   
           </AppText>
      <AppText style={tw`text-[${RFValue(15)}px] font-bold`}>
        {totalPrice} USD
      </AppText>
      </View> 
      <View style={tw`flex-row gap-2 w-full justify-between`}>

        <AppText style={tw`text-[${RFValue(15)}px] text-gray-400 font-bold`}>
       Service Fee
           </AppText>
      <AppText style={tw`text-[${RFValue(15)}px] font-bold`}>
        {serviceFee} USD
      </AppText>
      </View> 
      <View style={tw`flex-row gap-2 w-full justify-between`}>
        
        <AppText style={tw`text-[${RFValue(15)}px] font-bold`}>
        Total
      </AppText>
      <AppText style={tw`text-[${RFValue(15)}px] font-bold`}>
        {totalPrice} USD
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