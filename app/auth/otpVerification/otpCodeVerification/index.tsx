import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import { useRouter } from 'expo-router';
import { Button } from '../../../../components';
import { OTPInputComp } from '../../../../components/OtpInputComp';

// Sample data for country selection (not used in this screen but provided for completeness)
const country = [
  { title: 'Nigeria' },
  { title: 'Ghana' },
];

export default function OTPCodeVerificationScreen() {
  const router = useRouter();
  const [otpValue, setOtpValue] = useState<string>('');

  // Handler for verifying OTP
  const handleVerify = () => {
    // You might want to add OTP verification logic here
    router.push('/auth/login');
  };

  // Handler for resending OTP
  const handleResendOtp = () => {
    // Add logic to resend OTP
    console.log('Resend OTP');
  };

  return (
    <SafeAreaView style={tw`flex-1 bg-[#01041F] px-2 pt-24`}>
      <ScrollView contentContainerStyle={tw`flex-grow`}>
        {/* Header Section */}
        <View style={tw`flex-row justify-center`}>
          <Text style={tw`text-white text-2xl font-bold text-[#F7A701]`}>
            OTP Verification
          </Text>
        </View>

        {/* OTP Instruction */}
        <Text style={tw`text-white text-center pt-8 pb-4`}>
          Enter The OTP Sent To You +23480398357286
        </Text>

        {/* OTP Input */}
        <View style={tw`flex-col justify-center items-center py-20`}>
          <OTPInputComp onChangeText={setOtpValue} digits={4} />
        </View>

        {/* Resend OTP Section */}
        <View style={tw`flex-row justify-center items-center py-4`}>
          <Text style={tw`text-center text-white`}>Didn’t receive the OTP?</Text>
          <TouchableOpacity onPress={handleResendOtp}>
            <Text style={tw`text-[#E5770E] mx-2`}>Resend OTP</Text>
          </TouchableOpacity>
        </View>

        {/* Verify Button */}
        <View style={tw`py-4`}>
          <Button title='Verify' onPress={handleVerify} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
