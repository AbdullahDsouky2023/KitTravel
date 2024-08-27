import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import tw from 'twrnc'

type Props = {
    title:string,
    icon:_SourceUri
}

const ButtonComponent = ({title,icon}: Props) => {
  return (
    <View style={tw`bg-slate-200 h-10 w-28  rounded-lg gap-2  flex flex-row  items-center justify-center`}>
        <Image source={icon} style={tw`h-5  w-5 `}/>
        <Text style={tw`text-black text-center `}>{title}</Text>
     </View>
  )
}

export default ButtonComponent