import { View, Text, Image, FlatList } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc'
import { card1 } from '@/assets'
import { RFValue } from 'react-native-responsive-fontsize'
import { Colors } from '@/constants/Colors'
import AppText from '@/components/AppText'
import CardSelectionRoom from './CardSelectionRoom'
type Props = {}

const RoomSelection = (props: Props) => {
    const [active, setActive] = useState(0)
  return (
    <View style={tw`flex my-4 gap-2 h-[350px] `}>
        <FlatList
        data={[1,2,3,4,5,6]}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
            <CardSelectionRoom 
            onPress={() => {
                setActive(item)
            }}
            active={active === item}
            />
        )}
        />
      
    </View>
  )
}

export default RoomSelection