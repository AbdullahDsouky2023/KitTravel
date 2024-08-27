import React from 'react';
import { Text, useWindowDimensions, TouchableOpacity, View, StyleSheet, Dimensions } from 'react-native';

import tw from 'twrnc';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';


import InputComponent from './InputComponent';
import Button from '../onboarding/Button';
import { Colors } from '@/constants/Colors';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Link } from 'expo-router';
import { register } from '@/utils/auth';
import { router } from 'expo-router';

const { height , width  } = Dimensions.get('window');

const schema = z.object({
    email: z.string().email('Invalid email address'),
    password: z.string().min(8, 'Password must be at least 8 characters'),
});

type FormData = z.infer<typeof schema>;

const RegisterForm: React.FC = () => {
    const { width } = useWindowDimensions();
    const { control, handleSubmit, formState: { errors ,isValid } } = useForm<FormData>({
        resolver: zodResolver(schema),
        mode: 'onChange',
    });


    
    const onSubmit = async (data: FormData) => {
      try {
        const response = await register(data.email, data.password);

        console.log(response);
        if(response.token){
        router.replace('/(tabs)/explore')
        }
      
        // Handle successful registration (e.g., show success message, navigate to login)
      } catch (error) {
        console.error('Registration error:', error.response?.data || error?.message);
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
   <Text style={[Colors.FontStyleMain, styles.condition]}>
                <Text style={tw` flex text-[${Colors.Black40}]`}>
                By tapping 
                </Text>
                <Text style={tw` flex text-[${Colors.Black100}]`}>  Register & Accept </Text>
                <Text style={tw` flex text-[${Colors.Black40}]`}> that you have read our </Text>
                  
               <Link href="https://www.google.com" style={tw` flex m-2 text-[${Colors.primary}]`}>
                Privacy Policy 
               </Link>
               <Text style={tw` flex text-[${Colors.Black40}]`}>  and agree our </Text>
               
                <Link href="https://www.google.com" style={tw` flex m-2 text-[${Colors.primary}]`}>
                Terms and Conditions.               </Link>
              
                </Text>
            <Button
                onPress={handleSubmit(onSubmit)}
                title="Register & Accept"
                disabled={!isValid}
                style={{
                    backgroundColor: isValid ?  Colors.Black100 : Colors.Black40,
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

export default RegisterForm;
const styles = StyleSheet.create({
    condition: {
        fontSize: RFPercentage(1.7),
        width: width * 0.9,
        marginVertical: 15,
        color: Colors.Black40,
    },
});