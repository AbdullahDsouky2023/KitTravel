import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import  { router } from 'expo-router'
type Props = {}

const ArrowBack = (props: Props) => {
  return (
    <Pressable
    style={tw`my-5 `}
    onPress={() => router.back()}
    >
        <Image source={require('@/assets/icons/Icon/chevron-left.png')}
            style={tw`w-9 h-9`}
        />
    </Pressable>
  )
}

export default ArrowBack
