import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native';
import tw from 'twrnc';
import { Button, InputComp, PasswordInputComp, SelectInputComp } from '../../../components';
import { useRouter } from 'expo-router';

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
          <Text style={tw`text-white text-2xl font-bold max-w-[140px]`}>
            Sign up new account
          </Text>
        </View>
        
        <View style={tw`flex-col gap-1 pt-5`}>
          <InputComp label='Full name' placeholder='Example: Yann' />
          <InputComp label='Email' placeholder='Example@gmail.com' />
          <PasswordInputComp label='Password' placeholder='Enter Password' />
          <PasswordInputComp label='Confirm Password' placeholder='Enter Password' />
          <SelectInputComp label='Gender' placeholder='Select Gender' data={gender} />
        </View>

        <View style={tw`py-4`}>
          <Button title='Continue' onPress={() => router.push("/auth/register")} />
        </View>

        <View style={tw`mb-8`}>
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
          <View style={tw`flex-row justify-center items-center py-4`}>
            <Text style={tw`text-center text-white`}>Already have an account?</Text>
            <TouchableOpacity onPress={() => router.push("/auth/login")}>
              <Text style={tw`text-[#E5770E] mx-2`}>Login now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

