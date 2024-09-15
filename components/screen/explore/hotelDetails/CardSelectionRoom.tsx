import { View, Text, Image, Pressable } from 'react-native'
import React, { useMemo, useRef } from 'react'
import tw from 'twrnc'
import { card1 } from '@/assets'
import { RFValue } from 'react-native-responsive-fontsize'
import { Colors } from '@/constants/Colors'
import AppText from '@/components/AppText'
import Animated, { useSharedValue } from 'react-native-reanimated'
import { Room } from '@/types/hotel'
type Props = {
    onPress: () => void,
    active: boolean,
    room: Room
}

const CardSelectionRoom = ({onPress, active, room}: Props) => {
    const scale = useSharedValue(1)

    const animated = useMemo(() => {
        return {
            transform: [
                {
                    scale: scale.value
                }
            ]
        }
    },[])
  return (
    <Pressable
    onPress={onPress}
    style={tw` flex my-4 gap-2 px-4 h-[800px]`}>
    <Animated.Image
    source={card1}
    style={[tw`${active ? 'border-[5px] border-blue-700' : ''} w-[200px] h-[200px] rounded-xl`, animated]}
    />
    <View style={tw`flex gap-1`}>
       <Text style={[tw`text-black text-[${RFValue(14)}px] font-bold max-w-[${RFValue(180)}px]`, Colors.FontStyleMain]}>
           {room.name}
       </Text>
       <AppText style={tw`text-slate-400 text-[${RFValue(14)}px] font-bold max-w-[${RFValue(150)}px]`}>
           {room.description}
           
       </AppText>
      
    </View>
   </Pressable>
  )
}

export default CardSelectionRoom