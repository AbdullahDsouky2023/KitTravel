import { StyleProp, View, ViewStyle } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import Header from './Header'
import HotelListCoomponent from './HotelListCoomponent'
import { StyleProps } from 'react-native-reanimated'
type Props = {
  containerStyle?:ViewStyle
}

const HotelList = ({containerStyle}: Props) => {
  return (
    <View style={[tw`flex-1 my-4 px-4`,containerStyle]}>
      <Header/>
      <HotelListCoomponent horizontal={true}/>
    </View>
  )
}

export default HotelList