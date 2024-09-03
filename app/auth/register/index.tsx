import React from 'react';
import { View, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native';
import { TextWrapper } from '../../../components';
import tw from 'twrnc';
import { Button, InputComp, PasswordInputComp, SelectInputComp } from '../../../components';
import { useRouter } from 'expo-router';
import { SafeViewComponent } from '../../../components/safeViewComponent';

// Sample data for gender selection
const gender = [
  { title: 'man' },
  { title: 'woman' },
];

export default function RegisterPage() {
  const router = useRouter();

  return (
    <SafeAreaView style={tw`flex-1 bg-[#01041F] px-2 pt-16`}>
      <ScrollView contentContainerStyle={tw``}>
        <View style={tw``}>
          <TextWrapper style={tw`text-white text-2xl text-center`} fontWeight='bold'>
            Sign up for a  new account
          </TextWrapper>
        </View>
        
        <View style={tw`flex-col gap-1 pt-5`}>
          <InputComp label='Full name' placeholder='Example: Yann' />
          <InputComp label='Email' placeholder='Example@gmail.com' />
          <PasswordInputComp label='Password' placeholder='Enter Password' />
          <PasswordInputComp label='Confirm Password' placeholder='Enter Password' />
          <SelectInputComp label='Gender' placeholder='Select Gender' data={gender} />
        </View>

        <View style={tw`py-4`}>
          <Button title='Continue' onPress={() => router.push("/auth/otpVerification")} />
        </View>

        <View style={tw`mb-8`}>
          <TextWrapper style={tw`text-center text-white`}>Or sign up with</TextWrapper>
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
          <View style={tw`flex-row justify-center items-center py-4`}>
            <TextWrapper style={tw`text-center text-white`}>Already have an account?</TextWrapper>
            <TouchableOpacity onPress={() => router.push("/auth/login")}>
              <TextWrapper style={tw`text-[#E5770E] mx-2`}>Login now</TextWrapper>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

