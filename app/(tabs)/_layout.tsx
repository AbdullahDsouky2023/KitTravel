import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { BlurHeaderStyle, Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { explore, home, love, ticket, user } from '@/assets';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { View } from 'react-native-reanimated/lib/typescript/Animated';
import { StyleSheet } from 'react-native';
export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
    screenOptions={{
      tabBarActiveTintColor: Colors.Black100,
      headerShown: false,
      tabBarStyle:styles.tabBarStyle,
    }}>
    <Tabs.Screen
      name="index"
      options={{
        title: 'Explore',
        tabBarLabelStyle:styles.labelStyles,
        tabBarActiveTintColor: Colors.Black100,
        tabBarInactiveTintColor: Colors.Black70,
        tabBarIcon: ({ color, focused }) => (
          <TabBarIcon source={explore}  style={{ width: 29, height: 29 ,opacity:focused?1:0.5}} />
        ),
      }}
    />
    <Tabs.Screen
      name="wishlist"
  
      options={{
        tabBarLabelStyle:styles.labelStyles,
        tabBarActiveTintColor: Colors.Black100,
        tabBarInactiveTintColor: Colors.Black70,
        tabBarIcon: ({ color, focused }) => (
          <TabBarIcon source={love}  style={{ width: 29, height: 29 ,opacity:focused?1:0.5}} />
        ),
      }}
    />
    <Tabs.Screen
      name="tickets"
      options={{
        title: 'Tickets',
        tabBarLabelStyle:styles.labelStyles,
        tabBarActiveTintColor: Colors.Black100,
        tabBarInactiveTintColor: Colors.Black70,
        tabBarIcon: ({ color, focused }) => (
          <TabBarIcon source={ticket}  style={{ width: 29, height: 29 ,opacity:focused?1:0.5}} />
        ),
      }}
    />
    <Tabs.Screen
      name="profile"
      options={{
        title: 'Profile',
        tabBarLabelStyle:styles.labelStyles,
        tabBarActiveTintColor: Colors.Black100,
        tabBarInactiveTintColor: Colors.Black70,
        tabBarIcon: ({ color, focused }) => (
          <TabBarIcon source={user}  style={{ width: 29, height: 29 ,opacity:focused?1:0.5}} />
        ),
      }}
    />
  
  </Tabs>  );
}

const styles = StyleSheet.create({
  tabBarStyle:{
    backgroundColor:'white',
    marginVertical:20,
    paddingVertical:20,
    marginHorizontal:'2.5%',
    borderRadius:30,
    width:'95%',
    position:'absolute',
    alignSelf:'center',
    zIndex:1000
 

  },
  labelStyles:{
    ...Colors.FontStyleMain,
    fontSize:RFPercentage(1.5),
   marginBottom:-5,
   marginTop:16
  }
});