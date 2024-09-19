import { View } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import AppText from '@/components/AppText'
import { RFValue } from 'react-native-responsive-fontsize'
import GuideAvatarContainer from './GuideAvatarContainer'
import RatingCircles from './RatingCircles'
import Button from '@/components/onboarding/Button'
import { guide } from '@/types/hotel'
type Props = {
    guide: guide
}

const GuideDetails = ({
    guide
}: Props) => {
    //console.log('mett d' ,guide)
        if(!guide) return null
    return (
        <View style={tw`px-4 `}>
            <AppText style={tw`text-black text-[${RFValue(20)}px] font-bold`}>Meet your Guide</AppText>
            <GuideAvatarContainer userName={guide.name} userRole={''} userImage={guide.avatar} />
            <View style={tw`flex-row items-center mt-2`}>
                <RatingCircles rating={guide.rating} />
                <AppText style={tw`ml-2 text-blue-500 font-bold`}>{guide.rating} ({guide.reviewCount} Reviews)</AppText>
            </View>
            <AppText style={tw`my-4 text-[${RFValue(14)}px]`}>
                {guide.description}


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