import React from 'react';
import { Text, TextProps } from 'react-native';
import { Colors } from '@/constants/Colors';
import tw from 'twrnc';
import { RFValue } from 'react-native-responsive-fontsize';

interface AppTextProps extends TextProps {
  size?: number;
  color?: string;
  bold?: boolean;
}

const AppText: React.FC<AppTextProps> = ({ 
  children, 
  style, 
  size = 14, 
  color = 'black', 
  bold = false,
  ...props 
}) => {
  return (
    <Text
      style={[
        tw`text-[${RFValue(size)}px] text-${color}`,
        bold && tw`font-bold`,
        Colors.FontStyleMain,
        style,
      ]}
      {...props}
    >
      {children}
    </Text>
  );
};

export default AppText;
