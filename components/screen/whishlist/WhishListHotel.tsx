import { View, Text, Image, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import { card1, love } from '@/assets'
import tw from 'twrnc'
import Hotel from '@/types/hotel'
import { getAllHotels } from '@/utils/HotelsApi'
import Card from '@/components/screen/explore/HotelList/Card'
import { useHotelsStore } from '@/store/hotels/HotelsStore'
import { shallow } from 'zustand/shallow'
import { RFValue } from 'react-native-responsive-fontsize'
import AppText from '@/components/AppText'
import { Colors } from '@/constants/Colors'
type Props = {
  horizontal?: boolean
}

const WhishListHotelComponet = ({ horizontal }: Props) => {
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
    <View>
      <View style={tw`flex  px-4`}>
        <AppText style={tw`text-[${RFValue(18)}px] font-bold `}>
          Whishlist
        </AppText>
        <AppText style={tw`text-[${RFValue(12)}px] text-[${Colors.Black40}] font-bold `}>
          Plan your travel destination for later
        </AppText>
      </View>
      <FlatList
        horizontal={horizontal}
        data={AllHotels}
        renderItem={({ item }) => <Card
          hotel={item}
        />}
        numColumns={horizontal ? 1 : 2}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={!horizontal ? tw`my-4 flex gap-4 px-4 ` : null}
        keyExtractor={(item) => item.name}

        // contentContainerStyle={tw`flex gap-4 px-4 flex-row gap-4 wrap w-full`}
        showsHorizontalScrollIndicator={false}
      />
      {
        AllHotels.length === 0 && (
          <View style={tw`flex h-[${RFValue(100)}px] justify-center rounded-lg mx-4 items-center bg-gray-100 absolute bottom-[-${RFValue(300)}px] w-95 self-center`}>
            <AppText style={[tw`text-[${RFValue(14)}px] text-[${Colors.Black70}] font-bold px-4`]}>
              No hotels in your whishlist
            </AppText>
          </View>
        )
      }
    </View>

  )
}

export default WhishListHotelComponet