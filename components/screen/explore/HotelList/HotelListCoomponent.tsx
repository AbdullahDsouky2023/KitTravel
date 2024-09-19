import { View, Text, Image, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import { card1, love } from '@/assets'
import tw from 'twrnc'
import Card from './Card'
import Hotel from '@/types/hotel'
import { getAllHotels } from '@/utils/HotelsApi'
type Props = {
  horizontal?:boolean
}

const HotelListCoomponent = ({horizontal}: Props) => {
  const [hotels, setHotels] = useState<Hotel[]>([]);
  useEffect(() => {
    getAllHotels().then(setHotels).catch((error) => {
      //console.log('error', error.message)
    });
  }, []);
  return (
 <View>
  <FlatList
   horizontal={horizontal}
  data={hotels}
  renderItem={({item}) => <Card
  hotel={item}
  />}
  numColumns={horizontal ? 1 : 2}
  showsVerticalScrollIndicator={false}
  columnWrapperStyle={!horizontal ? tw`my-4 flex gap-4 items-center justify-center` : null}
  keyExtractor={(item) => item.name}
  contentContainerStyle={tw`flex gap-4`}
  showsHorizontalScrollIndicator={false}
  />

 </View>
  )
}

export default HotelListCoomponent