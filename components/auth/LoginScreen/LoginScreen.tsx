import { View, Text, StyleSheet, Dimensions, ScrollView, useWindowDimensions } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import tw from 'twrnc'
import { Colors } from '@/constants/Colors'
import ArrowBack from '../ArrowBack'
import { RFPercentage } from 'react-native-responsive-fontsize'
import RegisterForm from '../RegisterForm'
import LoginForm from './LoginForm'
type Props = {}

    const { width, height } = Dimensions.get('window')

const LoginScreen:React.FC<Props> = (props: Props) => {
    return (
        <SafeAreaView style={tw`flex-1 bg-[${Colors.white}] px-5`}>
            <ArrowBack />
            <ScrollView style={[tw`flex-1  gap-4`]}>
                <Text style={[Colors.FontStyleMain,styles.title]}>Welcome Back!</Text>
                <Text style={[Colors.FontStyleMain, styles.stke]}>Input your Email Address & Password</Text>
            <LoginForm/>
         
            </ScrollView>
            <StatusBar style='dark' />
        </SafeAreaView>


    )
}

export default LoginScreen

const styles = StyleSheet.create({
        container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: RFPercentage(3.5),
        fontWeight: 'bold',
    },
    stke: {
        fontSize: RFPercentage(2.4),
            width: width * 0.94,
            marginVertical:15
        
    },
    condition:
    {
        fontSize: RFPercentage(1.7),
        color: Colors.Black70,
        marginTop:10
    }
});