import { View } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import AppText from '@/components/AppText'
import { RFValue } from 'react-native-responsive-fontsize'
import GuideAvatarContainer from './GuideAvatarContainer'
import RatingCircles from './RatingCircles'
import Button from '@/components/onboarding/Button'
type Props = {}

const GuideDetails = (props: Props) => {
    return (
        <View style={tw`px-4 `}>
            <AppText style={tw`text-black text-[${RFValue(20)}px] font-bold`}>Meet your Guide</AppText>
            <GuideAvatarContainer />
            <View style={tw`flex-row items-center mt-2`}>
                <RatingCircles rating={4.4} />
                <AppText style={tw`ml-2 text-blue-500 font-bold`}>4.4 (889 Reviews)</AppText>
            </View>
            <AppText style={tw`my-4 text-[${RFValue(14)}px]`}>
                Hi, my name is Ron.

                I am a local guide, living in the famous place to visit, Bali. We have one of the amazing beach, forest, mount.

                Come and I'll show you a best staycation on Bali.

            </AppText>
            <Button
            title={'Contact Tour Guide'}
            styleText={tw`text-black text-[${RFValue(14)}px]`}
            style={tw`border border-black my-4`}
          />
        </View>
    )
}

export default GuideDetails