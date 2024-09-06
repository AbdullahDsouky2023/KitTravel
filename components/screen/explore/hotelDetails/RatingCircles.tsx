import React from 'react';
import { View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import tw from 'twrnc';

type RatingCirclesProps = {
  rating: number;
};

const RatingCircles: React.FC<RatingCirclesProps> = ({ rating }) => {
  const filledCircles = Math.floor(rating);
  const partialFill = rating - filledCircles;

  return (
    <View style={tw`flex-row`}>
      {[...Array(5)].map((_, index) => (
        <View key={index} style={tw`w-[${RFValue(15)}px] h-[${RFValue(15)}px] rounded-full bg-gray-300 mr-1 overflow-hidden`}>
          <View
            style={[tw`absolute left-0 top-0 bottom-0 bg-blue-500`,{
                width: index < filledCircles ? '100%' : 
                       index === filledCircles ? `${partialFill * 100}%` : '0%'
              }]}
          />
        </View>
      ))}
    </View>
  );
};

export default RatingCircles;