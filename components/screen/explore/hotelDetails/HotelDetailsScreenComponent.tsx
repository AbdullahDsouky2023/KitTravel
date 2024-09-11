import React, { useRef, useState, useEffect } from 'react';
import { View, TouchableOpacity, Image, FlatList, Dimensions, Animated, Text, ScrollView, Pressable } from 'react-native';
import tw from 'twrnc';
import { ChevronLeft } from '@/assets/images/svgs/Icon';
import Icon from '@/components/Icons';
import { router } from 'expo-router';
import { AntDesign, Entypo, EvilIcons } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { card1 } from '@/assets';
import { Colors } from '@/constants/Colors';
import { StatusBar } from 'expo-status-bar';
import ImageSlider from './ImagesSlider';
import RatingCircles from './RatingCircles';
import Button from '@/components/onboarding/Button';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import HotelDetails from './HotelDetails';
import { BaseButton } from 'react-native-gesture-handler';
import HotelFeatures from './HotelFeatures';
import RoomSelection from './RoomSelection';
import Line from './Line';
import AppText from '@/components/AppText';
import HotelList from '../HotelList/HotelList';
import GuideDetails from './GuideDetails';
import ReviewCard from './ReviewCard';
import ReviewContainer from './ReviewContainer';
import FloatingPricing from './FloatingPricing';
import Hotel from '@/types/hotel';

const { width } = Dimensions.get('window');


type Props = {
hotel:Hotel
};

const ICON_SIZE = 40;
const ICON_COLOR = '#FFFFFF';



const HotelDetailsScreenComponent: React.FC<Props> = ({
  hotel
}) => {


  const handleGoBack = () => {
    router.back();
  };





  return (
    <View style={tw`flex-1 bg-white relative  `} >

      <ScrollView style={tw`flex-1 bg-white`}
        showsVerticalScrollIndicator={false}
        scrollEnabled={true}>
        <ImageSlider
          images={hotel.images}
        />
        <StatusBar style='light' />
        <View style={tw`absolute top-0 left-0 right-0 h-[350px]`}>
          <View style={tw`absolute top-10 px-4 mt-4 z-10 bg-transparent flex flex-row w-full justify-between`}>
            <Entypo name="chevron-left" size={RFValue(28)} onPress={handleGoBack} color={Colors.white} />
            <View style={tw`flex flex-row gap-4`}>
              <EvilIcons name="share-google" size={RFValue(30)} color={Colors.white} />
              <AntDesign name="hearto" size={RFValue(25)} color={Colors.white} />
            </View>
          </View>
        </View>
        <HotelDetails />
        <Line />
        <HotelFeatures />
        <Line />
        <AppText style={tw`my-1 px-4 text-black text-[${RFValue(20)}px] font-bold`}>
          Where you’ll live?
        </AppText>
        <RoomSelection />
        <Line />
        <Text style={[tw`my-4 px-4 text-black text-[${RFValue(20)}px] font-bold`, Colors.FontStyleMain]}>
          What this place offers
        </Text>
        <HotelFeatures />
        <Line />
        <View style={tw`flex flex justify-between px-4`}>
          <AppText style={tw`my-1 px-4 text-black text-[${RFValue(20)}px] font-bold`}>
            Location
          </AppText>
          <Button
            title={'Start Directions'}
            styleText={tw`text-black text-[${RFValue(14)}px]`}
            style={tw`border border-black my-4`}
          />
        </View>
        <Line />

        <HotelList containerStyle={tw`my-8`} />
        <Line />
        <GuideDetails />
        <Line />
        <ReviewContainer />
        <Line />
      </ScrollView>
      <FloatingPricing />
    </View>
  );
};

export default HotelDetailsScreenComponent;