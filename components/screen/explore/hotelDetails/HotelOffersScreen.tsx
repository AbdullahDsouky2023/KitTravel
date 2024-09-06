import { View, Text, ScrollView, FlatList } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import AppText from '@/components/AppText'
import { RFValue } from 'react-native-responsive-fontsize'
import Line from './Line'
import FeatureItems from './FeatureItems'
import { Ac, camera, desk, door, events, fire, firstAid, kitchen, planeTakeOff, wifi } from '@/assets'
type Props = {}

const HotelOffersScreen = (props: Props) => {
    const features = [{
        image: wifi,
        title: 'Wifi Connection',
        description: 'Wifi inside room and outside area',

    }, {
        image: camera,
        title: 'Security',
        description: 'Security inside room and outside area',
    },
    {
        image: door,
        title: 'Private Entrance',
        description: 'Access to street or building entrance privately'
    },
    {
        image: Ac,
        title: 'Air Conditioners',
        description: '3 unit Air Conditioners on every room'
    },
    {
        image: desk,
        title: 'Workspace',
        description: 'Mini Dedicated workspace, sound reduction room'
    },
    {
        image: events,
        title: 'Event Space',
        description: 'Space for events wedding, family gathering'
    },
    {
        image: fire,
        title: 'Emergency Fire',
        description: 'There 2 emergency fire tools'
    },
    {
        image: firstAid,
        title: 'First Aid',
        description: 'There 3 first aid emergency on eevry room'
    },
    {
        image: kitchen,
        title: 'Private Kitchen',
        description: 'There 3 first aid emergency on eevry room'
    },
    {
        image: planeTakeOff,
        title: 'Parking',
        description: 'There 3 first aid emergency on eevry room'
    },
]
    return (
        <ScrollView style={tw`flex-1 text-white bg-white px-4 mb-1`} showsVerticalScrollIndicator={false}>
            <AppText style={tw`text-[${RFValue(18)}px] px-4 mt-8`}>What this place offers</AppText>
            <Line />
            <FlatList
                data={features}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => {
                    return <FeatureItems
                        image={item?.image}
                        title={item?.title}
                        description={item?.description}
                    />
                }}
                ItemSeparatorComponent={() => <View style={tw`my-4`} />}
            // contentContainerStyle={tw`bg-red-400 `}
            />
        </ScrollView>
    )
}

export default HotelOffersScreen