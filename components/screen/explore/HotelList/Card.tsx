import { View, Text, Image, useWindowDimensions, TouchableWithoutFeedback, Pressable } from 'react-native'
import React, { useEffect } from 'react'
import { card1, love } from '@/assets'
import tw from 'twrnc'
import { Colors } from '@/constants/Colors'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import { router } from 'expo-router'
import Hotel from '@/types/hotel'
import { AntDesign } from '@expo/vector-icons'
import { useHotelsStore } from '@/store/hotels/HotelsStore'
import useWhishlist from '@/hooks/useWhishlist'
import AddToWhishlistButtonComponent from '../hotelDetails/AddToWhishlistButtonComponent'
// import { Skeleton } from 'moti/skeleton'
import { useBookingStore } from '@/store/booking/BookingStore'
type Props = {
  hotel: Hotel
}

const Card = (props: Props) => {
  const { width } = useWindowDimensions();
  const { setHotel, deleteHotel } = useHotelsStore();
  const {clearBooking} = useBookingStore()
    const handelPress = () => {
      clearBooking()
      router.push(`/hotel/${props.hotel._id}`)
    }
  // //console.log(props.hotel._id)
  return (
    <Pressable
        onPress={handelPress}
      style={tw`relative w-[${width * 0.44}px]`}>
      <Image
        source={{ uri: props.hotel.images[0] } || card1}
        style={{
          width: width * 0.44,
          height: width * 0.44,
          borderRadius: 10,
          position: 'relative'
        }}
      />
   <AddToWhishlistButtonComponent _id={props.hotel._id}/>
      <CardFooterComponent hotel={props.hotel}/>
    </Pressable>
  )
}

export default Card

const CardFooterComponent = (props: Props) => {
  return (
    <View style={tw`px-2`} >
      <Text style={[tw`text-[${RFPercentage(0.38)}] mt-4`, Colors.FontStyleMain]}>{props.hotel.name}</Text>
      {/* <Text style={[tw`text-[${RFPercentage(0.28)}] text-gray-500 mt-1`, Colors.FontStyleMain]}>{props.hotel.location} ∙ 1.3km</Text> */}
      <View style={tw`flex flex-row items-center`}>
        <Text style={[tw`text-[${RFPercentage(0.28)}] text-slate-900 mt-1`, Colors.FontStyleMain]}>$ {props.hotel.pricePerNight} </Text>
        <Text style={[tw`text-[${RFPercentage(0.28)}] text-gray-500 mt-1`, Colors.FontStyleMain]}>/night</Text>
      </View>
    </View>
  )
}