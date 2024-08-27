import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import { search } from '@/assets'
import tw from 'twrnc'
type Props = {}

const SearchComponent = (props: Props) => {
  return (
    <View style={[tw`absolute  top-10 bg-white h-11 w-95 rounded-3xl mx-4 my-8 text-center  flex flex-row items-center gap-4 justify-center`]}>
      <Image
      source={search}
      style={tw`w-5 h-5 rounded-xl relative`}
      />
      <TextInput style={tw``} 
      placeholder='Where are you going?'
      />
      </View>
  )
}

export default SearchComponent