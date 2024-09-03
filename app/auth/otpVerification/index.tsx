import React from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import tw from 'twrnc';
import { Button, InputComp, SelectInputComp, TextWrapper } from '../../../components';
import { useRouter } from 'expo-router';

// Sample data for gender selection
const country = [
  { title: 'Nigeria' },
  { title: 'Ghana' },
];

export default function OTPVerificationScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={tw`flex-1 bg-[#01041F] px-2 pt-24`}>
      <ScrollView contentContainerStyle={tw``}>
        <View style={tw`flex-row justify-center`}>
          <TextWrapper style={tw`text-white text-2xl  text-[#F7A701]`} fontWeight='bold'>
          OTP Verification
          </TextWrapper>
        </View>
          <TextWrapper style={tw`text-white text-center pt-8 pb-4`}>we will send you a one time mobile password to this number</TextWrapper>
        
        <View style={tw`flex-col gap-1 pt-5`}>
          <SelectInputComp label='Country' placeholder='Select Country' data={country} />
          <InputComp keyboardType='numeric' label='Enter Phone Number' placeholder='080398357286' />
        </View>

        <View style={tw`py-4`}>
          <Button title='Continue' onPress={() => router.push("/auth/otpVerification/otpCodeVerification")} />
        </View>

      
      </ScrollView>
    </SafeAreaView>
  );
};

