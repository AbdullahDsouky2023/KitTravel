import { View, Text, Image, FlatList } from 'react-native'
import React from 'react'
import { card1, love } from '@/assets'
import tw from 'twrnc'
import Card from './Card'
type Props = {
  horizontal?:boolean
}

const HotelListCoomponent = ({horizontal}: Props) => {
  return (
 <View>
  <FlatList
   horizontal={horizontal}
  data={[{key: 'a'}, {key: 'b'}, {key: 'c'},
    {key: 'd'}, {key: 'e'}, {key: 'f'},
  ]}
  renderItem={({item}) => <Card/>}
  numColumns={horizontal ? 1 : 2}
  showsVerticalScrollIndicator={false}
  columnWrapperStyle={!horizontal ? tw`my-4 flex gap-4 items-center justify-center` : null}
  keyExtractor={(item) => item.key}
  contentContainerStyle={tw`flex gap-4`}
  showsHorizontalScrollIndicator={false}
  />

 </View>
  )
}

export default HotelListCoomponent