import { View, Text, Image, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import { card1, love } from '@/assets'
import tw from 'twrnc'
import Hotel from '@/types/hotel'
import { getAllHotels } from '@/utils/HotelsApi'
import Card from '@/components/screen/explore/HotelList/Card'
import { useHotelsStore } from '@/store/hotels/HotelsStore'
import { shallow } from 'zustand/shallow'
type Props = {
  horizontal?:boolean
}

const WhishListHotelComponet = ({horizontal}: Props) => {
  const hotelsIds = useHotelsStore((state) => state.hotels, shallow)
  const [AllHotels, setAllHotels] = useState<Hotel[]>([])
  useEffect(() => {
    const fetchHotels = async () => {
      const hotels = await getAllHotels()
      const filteredHotels = hotels.filter((hotel) => hotelsIds.includes(hotel._id))
      setAllHotels(filteredHotels)
    }
    fetchHotels()
  }, [hotelsIds])
  console.log(AllHotels)
  return (
 
  <FlatList
   horizontal={horizontal}
  data={AllHotels}
  renderItem={({item}) => <Card
  hotel={item}
  />}
  numColumns={horizontal ? 1 : 2}
  showsVerticalScrollIndicator={false}
  columnWrapperStyle={!horizontal ? tw`my-4 flex gap-4 px-4 ` : null}
  keyExtractor={(item) => item.name}
  // contentContainerStyle={tw`flex gap-4 px-4 flex-row gap-4 wrap w-full`}
  showsHorizontalScrollIndicator={false}
  />

  )
}

export default WhishListHotelComponet