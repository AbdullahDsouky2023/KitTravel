import { View, Text, Image } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import { useBookingStore } from '@/store/booking/BookingStore'
import { bookingCard } from '@/types/hotel'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc'
import { Header } from 'react-native/Libraries/NewAppScreen'
import BackHeader from '../explore/HotelList/BackHeader'
import { RFValue } from 'react-native-responsive-fontsize'
import { ScrollView } from 'react-native-virtualized-view'
import { Barcode, invoice } from '@/assets'
import AppText from '@/components/AppText'
import { Colors } from '@/constants/Colors'
import { formatDate } from '@/components/AppUtils/hotel/utils'
import Line from '../explore/hotelDetails/Line'
type Props = {

}

const TicketDetailsScreenComponent = (props: Props) => {
    const { userBookings } = useBookingStore()
    const { ticketId } = useLocalSearchParams()
    const ticket = userBookings[Number(ticketId)]
    return (
        <>
            <ScrollView style={tw`flex-1 bg-white `} showsVerticalScrollIndicator={false}>
                <Image source={{ uri: ticket?.hotel.images[1] }} style={tw`w-full h-[${RFValue(250)}px] rounded-b-[${RFValue(30)}px]`} />
                <View style={tw`flex-1`}>
                </View>
                <TicketContent ticket={ticket} />
            </ScrollView>
            <View style={tw`absolute  top-12 left-0 right-0`}>
                <BackHeader title={ticket?.hotel.name} />
            </View>
        </>
    )
}

export default TicketDetailsScreenComponent

const TicketContent = ({ ticket }: { ticket: bookingCard }) => {
    const nights = Math.ceil((new Date(ticket.checkOutDate).getTime() - new Date(ticket.checkInDate).getTime()) / (1000 * 60 * 60 * 24));
    return (
        <View style={tw`flex bg-white `}>
            <Image
                source={invoice}
                style={tw`w-full self-center  relative h-[${RFValue(450)}px] relative`}
            />
            <View style={tw`gap-2  absolute top-10 left-10  w-90 py-4 h-[${RFValue(250)}px]`}>
                <View style={tw`flex bg-gray-100 py-4 px-2`}>
                    <AppText style={[tw`text-center text-[${RFValue(16)}px] font-bold rounded-xl`, Colors.BoldFontStyleMain]}>{ticket.hotel.name}</AppText>
                </View>
                <View style={
                    tw`flex-row gap-2 items-center justify-between px-2 self-center my-2`
                }>
                    <View style={tw`flex gap-1`}>
                        <AppText style={[tw`text-[${RFValue(17)}px] font-bold`, Colors.BoldFontStyleMain]}>{formatDate(new Date(ticket.checkInDate)).slice(0, 7)}</AppText>
                        <AppText style={tw`text-[${RFValue(13)}px] font-bold text-center text-gray-500`}>Check In</AppText>
                    </View>
                    <AppText style={tw`text-[${RFValue(13)}px] px-3 font-bold text-center text-gray-500`}>
                        {nights} nights
                    </AppText>
                    <View style={tw`flex  gap-1`}>
                        <AppText style={[tw`text-[${RFValue(17)}px] font-bold`, Colors.BoldFontStyleMain]}>{formatDate(new Date(ticket.checkOutDate)).slice(0, 7)}</AppText>
                        <AppText style={tw`text-[${RFValue(13)}px] font-bold text-center text-gray-500`}>Check Out</AppText>
                    </View>
                </View>
                <Line />
                <View style={tw`flex-row justify-between px-2`}>
                    <View style={tw`flex gap-1 w-50`}>
                        <AppText style={tw`text-[${RFValue(13)}px] font-bold `}>Room Type</AppText>
                        <AppText style={tw`text-[${RFValue(13)}px] font-bold  text-gray-500`}>{ticket.hotel.rooms[0].name}</AppText>
                    </View>
                    <View style={tw`flex gap-1 w-50`}>
                        <AppText style={tw`text-[${RFValue(13)}px] font-bold `}>Guests</AppText>
                        <AppText style={tw`text-[${RFValue(13)}px] font-bold  text-gray-500`}>
                            {ticket.numberOfGuests.adults} Adults, {ticket.numberOfGuests.children} Child {ticket.numberOfGuests.infants} Infant
                        </AppText>
                    </View>
                </View>
                <View style={tw`flex justify-start  mr-2  my-4  gap-1`}>

                    <AppText style={tw`text-center text-[${RFValue(13)}px] text-gray-400 font-bold`}>
                        Order No. {ticket.bookingNumber}                      
                          </AppText>
                    <Image
                        source={Barcode}
                        style={tw`w-50 h-[${RFValue(30)}px] self-center my-1 `}
                    />
                </View>
            </View>
        </View>
    )
}