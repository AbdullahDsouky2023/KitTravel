import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { RFPercentage } from 'react-native-responsive-fontsize'
import Button from '@/components/onboarding/Button'
type Props = {}

const RandomDistinationAction = (props: Props) => {
  return (
    <View style={tw`bg-black h-[170px] rounded-lg mx-3 flex items-center justify-center `}>
      <Text style={tw`text-white font-bold text-[${RFPercentage(0.6)}] max-w-[220px] text-center`}>Don’t know where 
      to go? Perfect!</Text>
      <Button
      title={`I'm Flexable`}
      style={tw`w-35 p-2 my-4`}
      styleText={tw`text-[15px]`}
      />
    </View>
  )
}

export default RandomDistinationAction