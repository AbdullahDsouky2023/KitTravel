import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import tw from 'twrnc'
import { RFValue } from 'react-native-responsive-fontsize'
import { Colors } from '../../../../constants/Colors'
import AppText from '../../../../components/AppText'
import Animated, { Extrapolation, interpolate, useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated'
type Props = {
    percent: number
    reviewCount: number
    title: string

}

const RatingComponentAverage = ({
    percent,
    reviewCount,
    title
}: Props) => {
    const Progress = useSharedValue<number>(30);

    const animatedStyles = useAnimatedStyle(() => ({
      width: `${Progress.value}%`
    }));

    useEffect(() => {
        Progress.value = withTiming(percent, {duration: 900});
    }, [percent]);

  return (
    <View style={tw`flex flex-row items-center gap-4 bg-gray-200 rounded-full`}>
    <Animated.View style={[tw`bg-[${Colors.Black100}] px-2 py-1 rounded-full `, animatedStyles]}>

    <AppText style={tw`text-[${RFValue(13)}px] px-4 text-[${Colors.white}] bg-[${Colors.Black100}]
    `}>
        {title}
    </AppText>
    </Animated.View>
    <AppText style={tw`text-[${RFValue(12)}px] px-4 text-[${Colors.black}]`}>
        {reviewCount}
    </AppText>
</View>
  )
}

export default RatingComponentAverage