import { View, Text, Image, TextInput, ScrollView } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { banner, flight, home, image, search } from '@/assets'
import { StatusBar } from 'expo-status-bar'
import SearchComponent from './SearchComponent'
import ButtonComponent from './ButtonComponent'
import { RFPercentage } from 'react-native-responsive-fontsize'
import Button from '@/components/onboarding/Button'
import { router } from 'expo-router'
type Props = {}


const ButtonContainerComponent = (props: Props) => {
  return (
    <>
        <View style={tw`absolute top-30 my-4 px-8 flex flex-row gap-4 justify-center`}>

<ButtonComponent
 icon={flight}
 title='Flights'
 onPress={() => router.navigate('/booking')}
/>
<ButtonComponent
 icon={home}
 title='Hotels'
/>
<ButtonComponent
 icon={image}
 title='Spots'
/>

  </View>
  <View style={tw`absolute top-[250px] w-full  rounded-xl flex  gap-4 items-center justify-center`}>
     <Text style={tw`text-[${RFPercentage(4.5)}px]  text-white font-bold text-center px-4`}>
     do not have idea
     where to go?
     </Text>
     <Button
     title='Explore Now'
     style={tw`w-50 rounded-full`}
     styleText={tw`text-lg`}
     onPress={() => router.navigate('/exploreMoreScreen')}
     />
     </View>
    </>
  )
}

export default ButtonContainerComponent