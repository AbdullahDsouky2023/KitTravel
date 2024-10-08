import React from 'react';
import { Text, useWindowDimensions, TouchableOpacity, View, StyleSheet, Dimensions, Alert } from 'react-native';

import tw from 'twrnc';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {toast} from 'sonner-native'

import InputComponent from '../InputComponent';
import Button from '../../onboarding/Button';
import { Colors } from '@/constants/Colors';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Link, router } from 'expo-router';
import axios from 'axios';
import { login } from '@/utils/auth';
const { height , width  } = Dimensions.get('window');

const schema = z.object({
    email: z.string().email('Invalid email address'),
    password: z.string().min(8, 'Password must be at least 8 characters'),
});

type FormData = z.infer<typeof schema>;

const LoginForm: React.FC = () => {
    const { control, handleSubmit, formState: { errors ,isValid } } = useForm<FormData>({
        resolver: zodResolver(schema),
        mode: 'onChange',
    });

    const onSubmit = async (data: FormData) => {
        try {
          const response = await login(data.email, data.password);
          //console.log(response);
          if(response.token){
          router.replace('/(tabs)')
          }else {

              Alert.alert('Error', response.message);
            }
          // Handle successful registration (e.g., show success message, navigate to login)
        } catch (error) {
            // Alert.alert('Error', error.response?.data.message);
            toast.error(
                    error?.response?.data?.msg
            )
        //   console.error('Registration error:', error.response?.data || error?.message);
          // Handle registration error (e.g., show error message)
        }
      };

    return (
        <View style={tw`flex-1 gap-2 my-4`}>
            <Controller
                control={control}
                name="email"
                render={({ field: { onChange, value } }) => (
                    <InputComponent
                        label="Email Address"
                        value={value}
                        onChangeText={onChange}
                        placeholder="Enter your email"
                        error={errors.email?.message}
                    />
                )}
            />

            <Controller
                control={control}
                name="password"
                render={({ field: { onChange, value } }) => (
                    <InputComponent
                        label="Password"
                        value={value}
                        onChangeText={onChange}
                        placeholder="Enter your password"
                        secureTextEntry
                        error={errors.password?.message}
                    />
                )}
            />
    <Link href="/auth/signin" asChild>
                <Text style={[Colors.FontStyleMain, tw`text-[${Colors.primary}] text-lg `]}>
                    Forgot Password?
                    </Text>
                    </Link>

            <Button
                onPress={handleSubmit(onSubmit)}
                title="Login"
                disabled={!isValid}
                style={{
                    backgroundColor: isValid ?  Colors.Black100 : Colors.Black40,
                    marginTop: 40,
                }
                }
                styleText={
                    {
                        color: Colors.white,
                        fontSize: RFPercentage(2.2),
                        ...Colors.BoldFontStyleMain
                    }
                }
            />
        </View>
    );
};

export default LoginForm;
const styles = StyleSheet.create({
    condition: {
        fontSize: RFPercentage(1.7),
        width: width * 0.9,
        marginVertical: 15,
        color: Colors.Black40,
    },
});