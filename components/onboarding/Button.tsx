import { View, Text, Pressable } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { Colors } from '@/constants/Colors'
type Props = {
    style?:any,
    styleText?:any,
    title:string,
    onPress?:()=>void,
    disabled?:boolean
}

const Button = ({title,style,styleText,onPress,disabled}: Props) => {
  return (
    <Pressable 
      onPress={onPress}
      disabled={disabled}
    style={
        [tw`bg-[${Colors.white}] w-full rounded-lg p-4 flex items-center`,style]
    }>
      <Text style={[{
            fontFamily: 'BeVietnam',
            fontSize: 18,
        },styleText]}>{title}</Text>
    </Pressable>
  )
}

export default Button