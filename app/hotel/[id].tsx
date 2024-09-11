import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams } from 'expo-router'
import HotelDetailsScreenComponent from '@/components/screen/explore/hotelDetails/HotelDetailsScreenComponent'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useHotelsStore } from '@/store/hotels/HotelsStore'
import { getHotelById } from '@/utils/HotelsApi'
import Hotel from '@/types/hotel'

type Props = {}

const HotelDetailsScreen = (props: Props) => {
    const { id } = useLocalSearchParams();
    console.log('id', id)
    const [hotel, setHotel] = useState<Hotel | null>(null);
    useEffect(() => {
        getHotelById(id as string).then(setHotel);
    }, [id]);

    if (!hotel) {
        return <Text>Hotel not f</Text>
    }
    return (
      <>u

   <HotelDetailsScreenComponent hotel={hotel}/>
      </>
  )
}

export default HotelDetailsScreen