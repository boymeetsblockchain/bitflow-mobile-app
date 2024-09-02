import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import { Button, InputComp, SelectInputComp } from '../../../components';
import { useRouter } from 'expo-router';

// Sample data for document type and country selection
const docType = [
  { title: 'NIN' },
  { title: "Voter's card" },
];

const country = [
  { title: 'Nigeria' },
  { title: 'Ghana' },
  { title: 'Russia' },
];

// ForgotPasswordPage component for handling identity verification
const ForgotPasswordPage: React.FC = () => {
  // State to manage the agreement checkbox
  const [checked, setChecked] = useState<boolean>(false);

  // Router hook for navigation
  const router = useRouter();

  // Handler for checkbox toggle
  const handleCheckboxToggle = () => {
    setChecked(prev => !prev);
  };

  // Handler for skip button
  const handleSkip = () => {
    // Implement skip functionality if needed
  };

  // Handler for verify button
  const handleVerify = () => {
    // Navigate to the next page or implement verify functionality
    router.push('/auth/nextPage'); // Update with actual path
  };

  return (
    <SafeAreaView style={tw`flex-1 bg-[#01041F] px-2 pt-20`}>
      <ScrollView contentContainerStyle={tw`flex-grow`}>
        <View style={tw`pb-20`}>
          {/* Form container */}
          <View style={tw`min-h-1/2 rounded-3xl bg-white w-full flex-col justify-center items-start px-4 py-6`}>
            {/* Title */}
            <Text style={tw`text-2xl font-medium text-[#E6780C] self-center`}>
              Verify Your Identity
            </Text>
            {/* Description */}
            <Text style={tw`py-4 text-black text-center leading-7`}>
              Your information is always secure. The only thing missing is KYC verification and Anti-Money Laundering agreements.
            </Text>
            {/* Input components for document type, country, and ID number */}
            <SelectInputComp
              inputClass='border min-w-full'
              labelClass='text-black'
              label='Document Type'
              placeholder='Select document type'
              data={docType}
            />
            <SelectInputComp
              inputClass='border min-w-full'
              labelClass='text-black'
              label='Country'
              placeholder='Select country'
              data={country}
            />
            <InputComp
              inputClass='border min-w-full'
              labelClass='text-black'
              label='ID Number'
              placeholder='876537......'
            />
            {/* Agreement checkbox */}
            <View style={tw`flex-row items-center gap-4`}>
              <TouchableOpacity onPress={handleCheckboxToggle}>
                <View style={tw`border rounded p-1`}>
                  <View style={tw`w-4 h-4 ${checked ? 'bg-[#E5770E]' : 'bg-white'}`} />
                </View>
              </TouchableOpacity>
              <Text style={tw`py-4 text-black w-[88%]`}>
                I agree that in line with the Federal government Anti-Money Laundering Law, all my activities here will be within the confines of the law.
              </Text>
            </View>
            {/* Action buttons */}
            <View style={tw`py-4 w-full flex-row justify-between gap-4`}>
              <View style={tw`flex-1`}>
              <Button title='Skip' onPress={handleSkip} />
              </View>
              <View style={tw`flex-1`}>
              <Button title='Verify' onPress={handleVerify} />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ForgotPasswordPage;
