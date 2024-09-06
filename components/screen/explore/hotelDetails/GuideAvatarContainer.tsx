import { View, Text, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import AppText from '@/components/AppText'
import { Ionicons } from '@expo/vector-icons'
import { Avatar } from '@/assets'
import { RFValue } from 'react-native-responsive-fontsize'

type Props = {}

const GuideAvatarContainer = (props: Props) => {
    return (
        <View style={tw`flex flex-row gap-2 my-4 justify-between`}>
            <View style={tw`flex gap-1`}>
                <View style={tw`flex flex-row items-center`}>

                    <AppText style={tw`text-black text-[${RFValue(16)}px]  font-bold`}>
                        Ron Dennis
                    </AppText>
                    <View style={tw`bg-blue-500 rounded-[150px] flex items-center justify-center h-6 w-6 mx-4`}  >

                        <Ionicons name="checkmark" size={20} color="white"
                        />
                    </View>
                </View>
                <AppText style={tw`text-gray-500`}>
                    Guide since June 2015
                </AppText>
            </View>
            <Image source={Avatar}
                style={tw`h-14 w-14`}
            />
        </View>
    )
}

export default GuideAvatarContainer