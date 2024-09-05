import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import { useRouter } from 'expo-router';
import { Button } from '../../../../components';
import { OTPInputComp } from '../../../../components/OtpInputComp';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export default function OTPCodeVerificationScreen() {
  const router = useRouter();
  const [otpValue, setOtpValue] = useState<string>('');
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    const getEmail = async () => {
      try {
        const storedUser = await AsyncStorage.getItem("user");
        if (storedUser) {
          const user = JSON.parse(storedUser);
          setEmail(user.email); 
        }
      } catch (error) {
        console.error("Error retrieving user from AsyncStorage:", error);
      }
    };
  
    getEmail();
  }, []);
  

  const handleVerify = async () => {
    if (!otpValue || otpValue.length !== 6) {
      alert("Please enter a valid 6-digit OTP");
      return;
    }

    const jsonData = JSON.stringify({
      otp: otpValue,
    });

    try {
      const response = await axios.post('https://bitflow-backend-server.vercel.app/api/auth/verify-otp', jsonData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status == 200) {
        alert("Account Verified");
        router.push('/auth/login');
      } else if (response.status == 400) {
        alert("Invalid or Expired OTP");
      }
    } catch (error: any) {
      console.error(error.message);
      alert("An error occurred during verification. Please try again.");
    }
  };

  // Handler for resending OTP
  const handleResendOtp = async () => {
    try {
      // Add API call here to resend OTP
      console.log('Resend OTP');
      alert("OTP Resent to " + email);
    } catch (error) {
      console.error("Error resending OTP", error);
      alert("Failed to resend OTP, please try again.");
    }
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
          Enter The OTP Sent To {email ? email : 'your email'}
        </Text>

        {/* OTP Input */}
        <View style={tw`flex-col justify-center items-center py-20`}>
          <OTPInputComp onChangeText={setOtpValue} digits={6} />
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
