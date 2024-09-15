import { View, Text, ScrollView, FlatList } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import AppText from '@/components/AppText'
import { RFValue } from 'react-native-responsive-fontsize'
import Line from './Line'
import FeatureItems from './FeatureItems'
import { Ac, camera, desk, door, events, fire, firstAid, kitchen, planeTakeOff, wifi } from '@/assets'
import { useRoute } from '@react-navigation/native'
type Props = {}
interface RouteParams {
    features?: string[];
  }

  const HotelOffersScreen = (props: Props) => {
    const route = useRoute();
    const HotelsAvaiableFatures = (route.params as RouteParams)?.features || "";
    
   
    return (
        <View  style={tw`flex-1 text-white bg-white px-4 mb-1`} >
            <AppText style={tw`text-[${RFValue(18)}px] px-4 mt-8`}>What this place offers</AppText>
            <Line />
            <FlatList
                data={getHotelOffers(HotelsAvaiableFatures || [])}
                scrollEnabled={true}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <FeatureItems
                        isAvailable={item.isAvailable}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                    />
                )}
                contentContainerStyle={tw`pb-[100px] `}
            />
        </View>
    )
}

export default HotelOffersScreen

export  const getHotelOffers = (HotelsAvaiableFatures:string[])=>{
    enum Features {
        wifi = 'wifi',
        camera = 'camera',
        desk = 'desk',
        door = 'door',
        events = 'events',
        fire = 'fire',
        firstAid = 'firstAid',
        kitchen = 'kitchen',
        planeTakeOff = 'planeTakeOff',
        Ac = 'Ac',
        pool = 'pool',
    
      }
    const hotelOffers  = [{
        image: wifi,
        title: 'Wifi Connection',
        description: 'Wifi inside room and outside area',
        isAvailable: HotelsAvaiableFatures.includes(Features.wifi),
    
    }, {
        image: camera,
        title: 'Security',
        description: 'Security inside room and outside area',
        isAvailable: HotelsAvaiableFatures.includes(Features.camera),
    },
    {
        image: door,
        title: 'Private Entrance',
        description: 'Access to street or building entrance privately',
        isAvailable: HotelsAvaiableFatures.includes(Features.door),
    },
    {
        image: Ac,
        title: 'Air Conditioners',
        description: '3 unit Air Conditioners on every room',
        isAvailable: HotelsAvaiableFatures.includes(Features.Ac),
    },
    {
        image: desk,
        title: 'Workspace',
        description: 'Mini Dedicated workspace, sound reduction room',
        isAvailable: HotelsAvaiableFatures.includes(Features.desk),
    },
    {
        image: events,
        title: 'Event Space',
        description: 'Space for events wedding, family gathering',
        isAvailable: HotelsAvaiableFatures.includes(Features.events),
    },
    {
        image: fire,
        title: 'Emergency Fire',
        description: 'There 2 emergency fire tools',
        isAvailable: HotelsAvaiableFatures.includes(Features.fire),
    },
    {
        image: firstAid,
        title: 'First Aid',
        description: 'There 3 first aid emergency on eevry room',
        isAvailable: HotelsAvaiableFatures.includes(Features.firstAid),
    },
    {
        image: kitchen,
        title: 'Private Kitchen',
        description: 'There 3 first aid emergency on eevry room',
        isAvailable: HotelsAvaiableFatures.includes(Features.kitchen),
    },
    {
        image: planeTakeOff,
        title: 'Parking',
        description: 'There 3 first aid emergency on eevry room',
        isAvailable: HotelsAvaiableFatures.includes(Features.planeTakeOff),
    },
    ]
    return hotelOffers
}