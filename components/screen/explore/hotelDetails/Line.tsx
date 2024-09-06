import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { RFValue } from 'react-native-responsive-fontsize'

type Props = {}

const Line = (props: Props) => {
  return (
    <View style={tw`my-4 rounded-md bg-gray-300 h-[${RFValue(1)}px] self-center mx-4 min-w-[95%]`} />

  )
}

export default Line

const styles = StyleSheet.create({})