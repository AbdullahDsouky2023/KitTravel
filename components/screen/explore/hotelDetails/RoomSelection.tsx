import { View, Text, Image, FlatList } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc'
import { card1 } from '@/assets'
import { RFValue } from 'react-native-responsive-fontsize'
import { Colors } from '@/constants/Colors'
import AppText from '@/components/AppText'
import CardSelectionRoom from './CardSelectionRoom'
import { Room } from '@/types/hotel'
import { useBookingStore } from '@/store/booking/BookingStore'
type Props = {
  rooms: Room[]
}

const RoomSelection = ({rooms}: Props) => {
    const [active, setActive] = useState(0)
    const {setRoom} = useBookingStore()
  return (
    <View style={tw`flex my-4 gap-2 h-[350px] `}>
        <FlatList
        data={rooms}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item , index}) => (
            <CardSelectionRoom 
            onPress={() => {
                  setActive(index)
                  setRoom({description: item.description, name: item.name})
            }}
            room={item}
            active={active === index}
            />
        )}
        />
      
    </View>
  )
}

export default RoomSelection