/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { PlatformColor } from "react-native";

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
  primary:'#2664ED',
  black:'#000000',
  white:'#ffffff',
  red:'#BA1735',
  green:'#1ACC72',
  grayIcon:'rgba(0,0,0,0.2)',
  Black100:'rgba(0,0,0,1)',
  Black70:'rgba(0,0,0,0.7)',
  Black40:'rgba(0,0,0,0.4)',
  Black20:'rgba(0,0,0,0.2)',
  Card:'#EFEFF4',
  white100:'rgba(255,255,255,1)',
  white70:'rgba(255,255,255,0.7)',
  white40:'rgba(255,255,255,0.4)',
  white20:'rgba(255,255,255,0.2)',
  Background:'#000000',
  Surface:'#ffffff',
  mainFont:'BeVietnam',
  FontStyleMain:{
    fontFamily:'BeVietnam'
  },
  BoldFontStyleMain:{
    fontFamily:'BoldBeVietnam'
  }


};


export const BlurHeaderStyle = {
  headerShown:true,
  headerTransparent: true,
  headerLargeTitle:true,
  headerLargeTitleShadowVisible:false,
  headerBlurEffect:'prominent',
  headerStyle:{
    backgroundColor: 'rgba(255,255,255,0.01)'
  },
  headerLargeStyle: {
    backgroundColor: PlatformColor('systemBackground')
  }
}