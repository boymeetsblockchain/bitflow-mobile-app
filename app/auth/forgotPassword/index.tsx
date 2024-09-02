import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import tw from 'twrnc';
import { Button, InputComp } from '../../../components';
import { useRouter } from 'expo-router';

// ForgotPasswordPage component for handling password recovery and two-factor authentication
export default function ForgotPasswordPage() {
  // State to manage whether the user is in two-factor authentication mode
  const [isTwoFactor, setIsTwoFactor] = useState<boolean>(false);

  // Router hook for navigation
  const router = useRouter();


  // Determine the text and input placeholder based on the two-factor state
  const title = isTwoFactor ? 'Two-factor ' : 'Forgot';
  const subTitle = isTwoFactor ? 'authentication ' : 'Password';
  const description = isTwoFactor
    ? 'Kindly verify via email. Input authentication code promptly for secure access.'
    : 'Enter your email address associated with your account to reset your password. You will receive an email with a confirmation code.';
  const inputLabel = isTwoFactor ? 'Authentication code' : 'Email';
  const inputPlaceholder = isTwoFactor ? 'Enter code here...' : 'user.mail@gmail.com';

  return (
    <SafeAreaView style={tw`flex-1 bg-[#01041F] px-2 pt-40`}>
      <ScrollView contentContainerStyle={tw`flex-grow`}>
        <View style={tw`pb-20`}>
          {/* Form container */}
          <View style={tw`min-h-1/2 rounded-3xl bg-white w-full flex-col justify-center items-start px-4 py-6`}>
            {/* Title */}
            <Text style={tw`text-2xl font-medium text-black`}>
              {title} <Text style={tw`text-[#E6780C]`}>{subTitle}</Text>
            </Text>
            {/* Description */}
            <Text style={tw`py-4 text-black`}>
              {description}
            </Text>
            {/* Input component for email or authentication code */}
            <InputComp
              inputClass='border min-w-full'
              labelClass='text-black'
              label={inputLabel}
              placeholder={inputPlaceholder}
            />
          </View>
        </View>

        {/* Continue Button */}
        <View style={tw`py-4`}>
          <Button title='Continue' onPress={() => {setIsTwoFactor(true)
                if (isTwoFactor) {
                    router.push("/auth/identityVerification");
                    }
          }} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

