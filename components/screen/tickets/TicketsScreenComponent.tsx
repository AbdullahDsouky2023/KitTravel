import { View, Text, FlatList, RefreshControl } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc'
import { useState } from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import { useBookingStore } from '@/store/booking/BookingStore'
import AppText from '@/components/AppText'
import TicketCard from './TicketCard'
// import FlashList from '@shopify/flash-list'
type Props = {}

const TicketsScreenComponent = (props: Props) => {
    const {getBookingsFromStorage,userBookings} = useBookingStore()
    const [refreshing, setRefreshing] = useState(false)
    useEffect(() => {
        getBookingsFromStorage()
    },[])
    //console.log(userBookings.length)
  return (
    <SafeAreaView style={tw`flex-1 bg-white px-4`}>
      <AppText style={tw`text-black text-[${RFValue(18)}px]`}>Tickets</AppText>
      <AppText style={tw`text-black text-[${RFValue(14)}px] text-gray-400`}> Your Active Tickets for travling</AppText>
      <View style={tw`flex-1`}>
        <FlatList
        data={userBookings.slice(0,10)}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={getBookingsFromStorage} />}
        keyExtractor={(item,index) => index.toString()}

        contentContainerStyle={tw` my-4 pb-[100px]`}
        showsVerticalScrollIndicator={false}
        initialNumToRender={10}
        scrollEnabled
        // onRefresh={getBookingsFromStorage}
        renderItem={({item,index}) => {
            return (
              <TicketCard ticket={item}
              index={index}
              />
            )
        }}
        />
      </View>
    </SafeAreaView>
  )
}

export default TicketsScreenComponent