import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import { useRouter } from 'expo-router';
import { Button } from '../../../../components';
import { OTPInputComp } from '../../../../components/OtpInputComp';

// Sample data for gender selection
const country = [
  { title: 'Nigeria' },
  { title: 'Ghana' },
];

export default function OTPCodeVerificationScreen() {
  const router = useRouter();
  const [value, setValue] = useState('');


    // Handle OTP input
  useEffect(() => {
    if (value.length === 6) {
    }
  }, [value]);

  return (
    <SafeAreaView style={tw`flex-1 bg-[#01041F] px-2 pt-24`}>
      <ScrollView contentContainerStyle={tw``}>
        <View style={tw`flex-row justify-center`}>
          <Text style={tw`text-white text-2xl font-bold text-[#F7A701]`}>
          OTP Verification
          </Text>
        </View>
          <Text style={tw`text-white text-center pt-8 pb-4`}>Enter The OTP Sent To You +23480398357286</Text>
        
        <View style={tw`flex-col justify-center items-center py-20`}>
          <OTPInputComp onChangeText={digit => setValue(digit)} digits={4} />

        </View>
<View style={tw`flex-row justify-center items-center py-4`}>
            <Text style={tw`text-center text-white`}>Didn’t receive the OTP?</Text>
            <TouchableOpacity onPress={() => router.push("/auth/login")}>
              <Text style={tw`text-[#E5770E] mx-2`}>Resend OTP</Text>
            </TouchableOpacity>
          </View>
        <View style={tw`py-4`}>
          <Button title='Verify' onPress={() => router.push("/auth/login")} />
        </View>

      
      </ScrollView>
    </SafeAreaView>
  );
};

