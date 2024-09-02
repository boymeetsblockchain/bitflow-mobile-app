import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native';
import tw from 'twrnc';
import { Button, InputComp, PasswordInputComp } from '../../../components';
import { useRouter } from 'expo-router';

// LoginPage component for user authentication
export default function LoginPage() {
  // Router hook for navigation
  const router = useRouter();

  return (
    <SafeAreaView style={tw`flex-1 bg-[#01041F] px-2 pt-20`}>
      <ScrollView contentContainerStyle={tw`flex-grow`}>
        {/* Header Section */}
        <View style={tw`mb-4`}>
          <Text style={tw`text-white text-2xl font-bold`}>
            Welcome back!
          </Text>
          <Text style={tw`text-white pt-4`}>Login to continue</Text>
        </View>
        
        {/* Login Form */}
        <View style={tw`flex-col gap-1 pt-5`}>
          <InputComp label='Account' placeholder='Enter phone number or email' />
          <PasswordInputComp label='Password' placeholder='Enter Password' />
          <Text style={tw`text-[#E5770E] text-right pt-2`}>Forgot Password?</Text>
        </View>

        {/* Continue Button */}
        <View style={tw`py-4`}>
          <Button title='Continue' onPress={() => router.push("/auth/otpVerification")} />
        </View>

        {/* Social Login Options */}
        <View style={tw`my-8`}>
          <Text style={tw`text-center text-white`}>Or sign up with</Text>
          <View style={tw`flex-row pt-7 items-center justify-between`}>
            <TouchableOpacity style={tw`w-1/2`}>
              <Image
                style={tw`w-full h-13`}
                resizeMode='contain'
                source={require('../../../assets/images/google.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity style={tw`w-1/2`}>
              <Image
                style={tw`w-full h-13`}
                resizeMode='contain'
                source={require('../../../assets/images/apple.png')}
              />
            </TouchableOpacity>
          </View>

          {/* Registration Prompt */}
          <View style={tw`flex-row justify-center items-center py-4`}>
            <Text style={tw`text-center text-white`}>Don't have an account?</Text>
            <TouchableOpacity onPress={() => router.push("/auth/register")}>
              <Text style={tw`text-[#E5770E] mx-2`}>Register now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
