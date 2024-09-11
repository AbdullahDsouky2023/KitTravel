import { View, Text, Image, useWindowDimensions, TouchableWithoutFeedback, Pressable } from 'react-native'
import React from 'react'
import { card1, love } from '@/assets'
import tw from 'twrnc'
import { Colors } from '@/constants/Colors'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import { router } from 'expo-router'
import Hotel from '@/types/hotel'
import { AntDesign } from '@expo/vector-icons'
import { useHotelsStore } from '@/store/hotels/HotelsStore'
import useWhishlist from '@/hooks/useWhishlist'
import { Skeleton } from 'moti/skeleton'
type Props = {
  hotel: Hotel
}

const Card = (props: Props) => {
  const { width } = useWindowDimensions();
  const { setHotel, deleteHotel } = useHotelsStore();
    const isWhishlist = useWhishlist(props.hotel._id);
  const handleWhishlist = () => {
    if (isWhishlist) {
        deleteHotel(props.hotel);
    } else {
      setHotel(props.hotel);
    }
  }
  if (!props.hotel) {
    return <Skeleton
    show={true}
    height={width * 0.44}
    width={width * 0.44}
    transition={{
      type: 'timing',
      duration: 1000,
    }}
    />
  }
  // console.log(props.hotel._id)
  return (
    <Pressable
      onPress={() => router.push(`/hotel/${props.hotel._id}`)}
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
      <Pressable 
      onPress={handleWhishlist}
      style={tw`h-9 w-9 absolute bg-white p-2 right-4 top-4 rounded-full flex items-center`}   >
        {
          isWhishlist ? <AntDesign name="heart" size={RFValue(15)} color={Colors.red} /> : <AntDesign name="hearto" size={RFValue(15)} color="black" />
        }
        
      </Pressable>
      <View style={tw`px-2`} >
        <Text style={[tw`text-[${RFPercentage(0.38)}] mt-4`, Colors.FontStyleMain]}>{props.hotel.name}</Text>
        <Text style={[tw`text-[${RFPercentage(0.28)}] text-gray-500 mt-1`, Colors.FontStyleMain]}>{props.hotel.location} ∙ 1.3km</Text>
        <View style={tw`flex flex-row items-center`}>
          <Text style={[tw`text-[${RFPercentage(0.28)}] text-slate-900 mt-1`, Colors.FontStyleMain]}>$ 20 </Text>
          <Text style={[tw`text-[${RFPercentage(0.28)}] text-gray-500 mt-1`, Colors.FontStyleMain]}>/night</Text>
        </View>
      </View>
    </Pressable>
  )
}

export default Card