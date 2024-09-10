import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import { RFValue } from 'react-native-responsive-fontsize'
import tw from 'twrnc'
import { router } from 'expo-router'

type Props = {
  pay: boolean
  confirm: boolean
  date?: string
}

const FloatingPricing = (props: Props) => {
      const {pay, confirm, date} = props
  
  const handlePress = () => {
    if (pay) {
      router.push('/hotel/details/payment')
    } else if (confirm) {
      router.push('/hotel/details/successPayment')
    } else {
      router.push('/hotel/details/avaiablity')
    }
  }

  return (
    <View style={[tw` absolute flex flex-row bottom-10 self-center
        w-[95%] bg-white shadow-xl shadow-black/10
        justify-between
        rounded-lg p-4`, {
       shadowColor: '#000',
       shadowOffset: {
         width: 0,
         height: 2,
       },
       shadowOpacity: 0.25,
       shadowRadius: 3.84,
       elevation: 5,
     }]}>
       <View style={[tw`flex flex-row gap-1 bg-white h-[50px] items-center rounded-xl mx-4`]}>
        {
          confirm ? (
            <Text style={[tw`text-[${RFValue(16)}px] font-bold`, Colors.FontStyleMain]}>
           $800
                </Text>
          ) : (
            <>
            <Text style={[tw`text-[${RFValue(16)}px] font-bold`, Colors.FontStyleMain]}>
           $80
                </Text>
         <Text style={[tw`text-[${RFValue(14)}px] font-bold text-slate-400`, Colors.FontStyleMain]}>
           / night
         </Text>
            </>
          )
        }
       </View>
       <Pressable
       onPress={handlePress}
       style={tw`flex-1 bg-black p-0 max-w-[${RFValue(150)}px] rounded-xl items-center justify-center`} >
         <Text style={[tw`text-[${RFValue(13)}px]  p-0 text-white font-bold`, Colors.FontStyleMain]}>
          {pay ? 'Apply' : confirm ? 'Book Now' : 'Check Availability'}
         </Text>
       </Pressable>
     </View>
  )
}

export default FloatingPricing