import React from "react";
import { View, Pressable,Image} from "react-native";
import { useRouter } from "expo-router";
import tw from "twrnc";
import { TextWrapper, TextWrapperWhite } from "../textWrapper";

export const HomePageFeatures = () => {
  const router = useRouter();

  return (
    <View>
      <View style={tw `flex-row justify-between px-3`}>
        <TextWrapperWhite fontWeight="bold">
          Features
        </TextWrapperWhite>
     <Pressable onPress={()=>router.push('/features')}>
     <TextWrapperWhite fontWeight="bold">
          View All
        </TextWrapperWhite>
     </Pressable>
      </View>
        <View style={tw`flex-row justify-between my-2 items-center`}>
      <Pressable
        onPress={() => router.push("/services/buyandsell")}
        style={tw` items-center justify-center p-2 rounded-md`}
      >
        <Image source={require('../../assets/images/h1.png')} style={tw `h-12 w-12`}/>
        <TextWrapper style={tw`text-sm text-white`} fontWeight="bold">Buy & Sell</TextWrapper>
      </Pressable>
      <Pressable
        onPress={() => router.push("/services/sendandreceive")}
        style={tw` items-center justify-center p-2 rounded-md`}
      >
        <Image source={require('../../assets/images/h2.png')} style={tw `h-12 w-12`}/>
        <TextWrapper style={tw`text-sm text-white`} fontWeight="bold">Send & Receive</TextWrapper>
      </Pressable>
      <Pressable
        onPress={() => router.push("/bills/")}
        style={tw` items-center justify-center p-2 rounded-md`}
      >
        <Image source={require('../../assets/images/h3.png')} style={tw `h-12 w-12`}/>
        <TextWrapper style={tw`text-sm text-white`} fontWeight="bold">Pay Bills</TextWrapper>
      </Pressable>
      <Pressable
        onPress={() => router.push("/services/withdraw")}
        style={tw` items-center justify-center p-2 rounded-md`}
      >
        <Image source={require('../../assets/images/h4.png')} style={tw `h-12 w-12`}/>
        <TextWrapper style={tw`text-sm text-white`} fontWeight="bold">Withdraw</TextWrapper>
      </Pressable>


    </View>
    </View>
  );
};
