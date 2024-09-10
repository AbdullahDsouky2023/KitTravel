import { View, Text, Pressable } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc'
import { RFValue } from 'react-native-responsive-fontsize'
import Line from '@/components/screen/explore/hotelDetails/Line'
import AppText from '@/components/AppText'
import { ScrollView } from 'react-native'
import {  Entypo,  } from '@expo/vector-icons'
import Button from '@/components/onboarding/Button'

type Props = {}

enum classType {
    economy = 'Economy Class',
    business = 'Business Class',
    first = 'First Class',
    premium = 'Premium  Class'
}
const ClassSelectorScreen = (props: Props) => {
    const [selected, setSelected] = useState<classType>(classType.economy)
  return (
    <View style={tw`flex-1 bg-white relative  `} >
    <ScrollView style={tw`flex-1 text-white relative bg-white px-4 mb-6`} showsVerticalScrollIndicator={false}>
        <AppText style={tw`text-[${RFValue(20)}px] relative px-4 mt-8`}>Seat class you prefer??</AppText>
        <Line />
      <View style={tw`flex w-full bg-white  gap-4 flex-row flex-wrap`}>
        <ClassSelector  
        onPress={()=>setSelected(classType.economy)}
        selected={selected === classType.economy} title={classType.economy}/>
        <ClassSelector 
        onPress={()=>setSelected(classType.business)}
        selected={selected === classType.business} title={classType.business}/>
        <ClassSelector 
        onPress={()=>setSelected(classType.first)}
        selected={selected === classType.first} title={classType.first}/>
        <ClassSelector 
        onPress={()=>setSelected(classType.premium)}
        selected={selected === classType.premium} title={classType.premium}/>

      </View>

    </ScrollView>
        <Button title='Apply' 
        
        style={tw`w-full absolute bg-black bottom-10 mx-4 w-[90%] self-center p-4`}
        styleText={tw`text-white text-[${RFValue(16)}px]`}
        onPress={()=>{}}/>


</View>
  )
}

export default ClassSelectorScreen


const ClassSelector = (
   {
    title,
    onPress,
    selected
   }:{
    title:string
    onPress:()=>void
    selected:boolean
   }
) => {
    return(
        <Pressable 
        onPress={onPress}
        style={tw`flex w-[45%]  p-4 gap-4   rounded-md
        ${selected ? 'bg-black' : 'bg-white border border-gray-200'}
        `}>
            <AppText style={tw`text-[${RFValue(18)}px] relative px-4 
            ${selected ? 'text-white' : 'text-gray-500'}
            `}>
            {title} 
            </AppText>
        </Pressable>
    )
}

