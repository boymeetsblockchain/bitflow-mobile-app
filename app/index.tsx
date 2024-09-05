import React, { useEffect, useState } from 'react';
import { View, SafeAreaView, ScrollView, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import tw from 'twrnc';
import { Button, InputComp, PasswordInputComp } from '../components';
import { useRouter } from 'expo-router';
import { TextWrapper } from '../components';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState<boolean>(false); 

  const router = useRouter();


  const handleSubmit = async () => {
    if (!email || !password) {
      alert('Please fill in all fields');
      return;
    }

    setLoading(true); // Show loading indicator when login is in progress

    try {
      const response = await axios.post(
        'https://bitflow-backend-server.vercel.app/api/auth/login',
        {
          email,
          password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.status === 200) {
        await AsyncStorage.setItem('token', response.data.token);
        alert('Login successful');
        router.push('/homepage'); 
      } else {
        alert(response.data.message || 'Login failed');
      }
    } catch (error: any) {
      console.error('Login error:', error?.message || error);
      alert('An error occurred during login. Please try again.');
    } finally {
      setLoading(false); 
    }
  };

  return (
    <SafeAreaView style={tw`flex-1 bg-[#01041F] px-2 pt-20`}>
      <ScrollView contentContainerStyle={tw`flex-grow`}>
        <View style={tw`mb-4`}>
          <TextWrapper style={tw`text-white text-2xl text-center`} fontWeight='bold'>
            Welcome back!
          </TextWrapper>
          <TextWrapper style={tw`text-white pt-4`}>Login to continue</TextWrapper>
        </View>

      
        <View style={tw`flex-col gap-1 pt-5`}>
          <InputComp
            value={email}
            onChange={setEmail}
            label='Account'
            placeholder='Enter phone number or email'
          />
          <PasswordInputComp
            value={password}
            onChange={setPassword}
            label='Password'
            placeholder='Enter Password'
          />
          <TouchableOpacity onPress={() => router.push('/auth/forgotPassword')}>
            <TextWrapper style={tw`text-[#E5770E] text-right pt-2`}>Forgot Password?</TextWrapper>
          </TouchableOpacity>
        </View>

        {/* Continue Button */}
        <View style={tw`py-4`}>
          <TouchableOpacity style={tw `w-full justify-center items-center bg-[#E5770E] py-3 rounded-md`} onPress={handleSubmit}>
            {
              loading ? <ActivityIndicator color={'white'}/> : (
                <TextWrapper style={tw `text-white text-xl`}>
                  Continue
                </TextWrapper>
              )
            }
          </TouchableOpacity>
        </View>

        {/* Social Login Options */}
        <View style={tw`my-8`}>
          <TextWrapper style={tw`text-center text-white`}>Or sign up with</TextWrapper>
          <View style={tw`flex-row pt-7 items-center justify-between`}>
            <TouchableOpacity style={tw`w-1/2`}>
              <Image
                style={tw`w-full h-13`}
                resizeMode='contain'
                source={require('../assets/images/google.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity style={tw`w-1/2`}>
              <Image
                style={tw`w-full h-13`}
                resizeMode='contain'
                source={require('../assets/images/apple.png')}
              />
            </TouchableOpacity>
          </View>

          {/* Registration Prompt */}
          <View style={tw`flex-row justify-center items-center py-4`}>
            <TextWrapper style={tw`text-center text-white`}>
              Don't have an account?
            </TextWrapper>
            <TouchableOpacity onPress={() => router.push('/auth/register')}>
              <TextWrapper style={tw`text-[#E5770E] mx-2`}>Register now</TextWrapper>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
