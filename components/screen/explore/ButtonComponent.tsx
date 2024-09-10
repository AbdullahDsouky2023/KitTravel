import { View, Text, Image, TextInput, Pressable } from 'react-native'
import React from 'react'
import tw from 'twrnc'

type Props = {
    title:string,
    icon:_SourceUri
    onPress?:() => void
}

const ButtonComponent = ({title,icon,onPress}: Props) => {
  return (
    <Pressable
    onPress={onPress}
    
    style={tw`bg-slate-200 h-10 w-28  rounded-lg gap-2  flex flex-row  items-center justify-center`}>
        <Image source={icon} style={tw`h-5  w-5 `}/>
        <Text style={tw`text-black text-center `}>{title}</Text>
     </Pressable >
  )
}

export default ButtonComponent