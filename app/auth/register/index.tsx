import React, { useState } from 'react';
import { View, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native';
import { TextWrapper } from '../../../components';
import tw from 'twrnc';
import { Button, InputComp, PasswordInputComp, SelectInputComp } from '../../../components';
import { useRouter } from 'expo-router';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const genderOptions = [
  { title: 'Select Gender', value: '' },
  { title: 'male', value: 'male' },
  { title: 'female', value: 'female' },
];

export default function RegisterPage() {
  const router = useRouter();

  // State for the form fields
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [gender, setGender] = useState('');

  const handleSubmit = async () => {
    console.log('Submitted Data:', fullName, email, password, confirmPassword, gender);

    // Validation checks
    if (!fullName || !email || !password || !confirmPassword || !gender) {
      alert("Please fill in all fields");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const userData = {
      fullName, email, phoneNumber,gender
    }

    await AsyncStorage.setItem("user", JSON.stringify(userData));


    try {
  
      const jsonData = JSON.stringify({
        fullName,
        email,
        password,
        gender,
        phoneNumber,
        confirmPassword
      });

  
      const response = await axios.post('https://bitflow-backend-server.vercel.app/api/auth/register', jsonData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status == 201) {

        alert(response.data.message)
        router.push("/auth/otpVerification/otpCodeVerification");
      } else {
        alert(response.data.message || "Registration failed");
      }
    } catch (error: any) {
      console.error(error.message);
      alert("An error occurred during registration. Please try again.");
    }
  };

  return (
    <SafeAreaView style={tw`flex-1 bg-[#01041F] px-2 pt-16`}>
      <ScrollView contentContainerStyle={tw``}>
        <View style={tw``}>
          <TextWrapper style={tw`text-white text-2xl text-center`} fontWeight='bold'>
            Sign up for a new account
          </TextWrapper>
        </View>
        
        <View style={tw`flex-col gap-1 pt-5`}>
          <InputComp
            label='Full name'
            placeholder='Example: Yann'
            value={fullName}
            onChange={setFullName}
          />
          <InputComp
            label='Email'
            placeholder='Example@gmail.com'
            value={email}
            onChange={setEmail}
            keyboardType="email-address"
          />
          <InputComp
            label='Phone Number'
            placeholder='0819902029'
            value={phoneNumber}
            onChange={setPhoneNumber}
            keyboardType="number-pad"
          />
          <PasswordInputComp
            label='Password'
            placeholder='Enter Password'
            value={password}
            onChange={setPassword}
          />
          <PasswordInputComp
            label='Confirm Password'
            placeholder='Enter Password'
            value={confirmPassword}
            onChange={setConfirmPassword}
          />
          <SelectInputComp
            label='Gender'
            placeholder='Select Gender'
            data={genderOptions}
            value={gender}
            onChange={(value) => {
              console.log('Selected Gender:', value);
              setGender(value);
            }}
          />
        </View>

        <View style={tw`py-4`}>
          <Button title='Continue' onPress={handleSubmit} />
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
}
