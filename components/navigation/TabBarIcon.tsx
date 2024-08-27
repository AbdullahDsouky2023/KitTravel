// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/

// import Ionicons from '@expo/vector-icons/Ionicons';
import { type IconProps } from '@expo/vector-icons/build/createIconSet';
import { type ComponentProps } from 'react';
import { Image } from 'react-native';
  //decalar the type for this 
  type IconType  = {
    style: ComponentProps<typeof Image>['style'];
    source:_SourceUri;
  }

export function TabBarIcon({ style,source,...rest}:IconType) {
  return <Image
  source={source}
 style={[{ marginBottom: -3 }, style]}  />;
}
