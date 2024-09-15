import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import { bookingCard } from '@/types/hotel'
import tw from 'twrnc'
import AppText from '@/components/AppText'
import { RFValue } from 'react-native-responsive-fontsize'
import { formatDate } from '@/components/AppUtils/hotel/utils'
import { home } from '@/assets'
import { router, useRouter } from 'expo-router'
type Props = {
    ticket: bookingCard
    index: number
}

const TicketCard = ({ticket, index}: Props) => {
    console.log(ticket.hotel)
    const {hotel, checkInDate, checkOutDate, selectedRoom, numberOfGuests} = ticket
  return (
      <Pressable
      onPress={() => {
        router.push({
            pathname: '/hotel/details/ticketDetails',
            params: {
                ticketId: index
            }
        })
      }}
      style={[tw`flex-1  h-[${RFValue(80)}px] my-2 rounded-lg mx-2 flex-row `]}>
           <View style={tw` bg-white`}>
            <Image source={{uri: ticket.hotel.images[0]}} style={tw`w-35 h-[${RFValue(70)}px] rounded-lg`} />
           </View>
           <View style={tw` bg-white px-4 flex gap-1` }>
            <AppText style={tw`text-[${RFValue(12)}px] font-bold`}>
                {ticket.hotel.name}
            </AppText>
            <AppText style={tw`text-[${RFValue(10)}px] text-gray-500`}>
                {formatDate(new Date(checkInDate))} until {formatDate(new Date(checkOutDate))}
            </AppText>
          <View style={tw` flex-row  items-center gap-2`}>
            <Image source={home} style={tw`w-[${RFValue(12)}px] h-[${RFValue(12)}px]`}/>
          <AppText style={tw`text-[${RFValue(10)}px] text-[#007AFF] my-2`}>
                Hotel Ticket
            </AppText>
          </View>
           </View>
      </Pressable>
  )
}

export default TicketCard