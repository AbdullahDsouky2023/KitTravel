import { View, Text, Pressable, FlatList } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc'
import AppText from '@/components/AppText'
import { RFValue } from 'react-native-responsive-fontsize'
import Line from './Line'
import RatingCircles from './RatingCircles'
import { Colors } from '@/constants/Colors'
import RatingComponentAverage from './RatingComponentAverage'
import ReviewDetails from './ReviewDetails'
import { ScrollView } from 'react-native-virtualized-view'
import Hotel from '@/types/hotel'
import { useRoute } from '@react-navigation/native'
import { useLocalSearchParams } from 'expo-router'

type Props = {

}

const HotelReviewScreen = (props: Props) => {
    const [selectedRating, setSelectedRating] = useState<string>('Perfect');
    const { reviews } = useLocalSearchParams()
    const parsedReviews = reviews ? JSON.parse(reviews as string) : []
    const averageRate = parsedReviews.reduce((acc: any, review: any) => acc + review.rating, 0) / parsedReviews.length;
    const perfectReview = parsedReviews.filter((review: any) => review.rating > 4)
    const averageReview = parsedReviews.filter((review: any) => review.rating >= 3 && review.rating <= 4)
    const badReview = parsedReviews.filter((review: any) => review.rating >= 1 && review.rating <= 2)
    const SelectedReview = selectedRating === 'Perfect' ? perfectReview : selectedRating === 'Average' ? averageReview : badReview
    return (
        <ScrollView style={tw`flex-1 text-white bg-white px-4 mb-6`} showsVerticalScrollIndicator={false}>
            <AppText style={tw`text-[${RFValue(18)}px] px-4 mt-8`}>What other people says</AppText>
            <Line />
            <View style={tw`flex flex-row items-center gap-4`}>

                <RatingCircles rating={4.4} />
                <AppText style={tw`text-[${RFValue(15)}px] text-[${Colors.black}]`}>
                    Rating {averageRate} ∙ {parsedReviews.length} Reviews
                </AppText>
            </View>
            <View style={tw`flex  gap-3 my-4`}>

                <RatingComponentAverage percent={
                    (perfectReview.length / parsedReviews.length) * 80
                } reviewCount={perfectReview.length} title='Perfect' />
                <RatingComponentAverage percent={
                    (averageReview.length / parsedReviews.length) * 80
                } reviewCount={averageReview.length} title='Average' />
                <RatingComponentAverage percent={
                    (badReview.length / parsedReviews.length) * 80
                } reviewCount={badReview.length} title='Bad' />
            </View>
            <Line />
            <View style={tw`flex gap-3 my-4 bg-gray-100 rounded-xl px-4 py-2 flex-row items-center justify-center gap-4`}>
                <Pressable
                    onPress={() => setSelectedRating('Perfect')}
                    style={tw`flex flex-row items-center gap-2 rounded-lg px-4 py-2
                     ${selectedRating === 'Perfect' ? 'bg-white shadow-md' : 'bg-gray-100'}`}>
                    <AppText style={tw`text-[${RFValue(14)}px]  `}>
                        Perfect
                    </AppText>
                </Pressable>
                <Pressable onPress={() => setSelectedRating('Average')} style={tw`flex flex-row items-center gap-2 rounded-lg px-4 py-2 
                    ${selectedRating === 'Average' ? 'bg-white shadow-md' : 'bg-gray-100'}`}>
                    <AppText style={tw`text-[${RFValue(14)}px] `}>
                        Average
                    </AppText>
                </Pressable>
                <Pressable onPress={() => setSelectedRating('Bad')} style={tw`flex flex-row items-center gap-2 rounded-lg px-4 py-2 
                     ${selectedRating === 'Bad' ? 'bg-white shadow-md' : 'bg-gray-100'}`}>
                    <AppText style={tw`text-[${RFValue(14)}px]  `}>
                        Bad
                    </AppText>
                </Pressable>

            </View>
            <FlatList
                data={SelectedReview}
                renderItem={({ item }) => {
                    return (
                        <ReviewDetails review={item} />
                    )
                }}
                keyExtractor={(item, index) => String(index)}


            />
            {SelectedReview?.length === 0 &&
                <AppText style={tw`text-[${RFValue(14)}px] px-4 text-[${Colors.black}]`}>
                    No reviews found
                </AppText>
            }
        </ScrollView>
    )
}

export default HotelReviewScreen