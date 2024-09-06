import React from 'react';
import { View } from 'react-native';
type Props =  {
    Svg:string;
    width:number;
    height:number;
    color:string,
}
const Icon = ({ Svg, width, height, color }:Props) => {
  return (
    <View style={{ width, height }}>
      <Svg width={width} height={height} fill={color} />
    </View>
  );
};

export default Icon;   
