import { View, Pressable } from 'react-native';
import { SafeViewComponent } from '../../components/safeViewComponent';
import { TextWrapperWhite } from '../../components/textWrapper';
import { Header } from '../../components/header';
import tw from 'twrnc';
import { BuyComponent } from '../../components/buyandsell/buy';
import { Sell } from '../../components/buyandsell/sell';
import { useState } from 'react';

export default function Buyandsell() {
  const [buy, setBuy] = useState("buy");

  return (
    <SafeViewComponent>
      {/* Header */}
      <Header title='Buy & Sell' home={false} />

      {/* Toggle between Buy & Sell */}
      <View style={tw`flex-row items-center my-5 justify-between`}>
        <View style={tw`flex-row items-center gap-x-4`}>
          <Pressable onPress={() => setBuy("buy")}>
            <TextWrapperWhite 
              fontWeight='bold' 
              style={tw`${buy === "buy" ? "border-b-2 border-[#E5770E]" : "text-gray-500"}`}
            >
              Buy
            </TextWrapperWhite>
          </Pressable>
          <Pressable onPress={() => setBuy("sell")}>
            <TextWrapperWhite 
              fontWeight='bold' 
              style={tw`${buy === "sell" ? "border-b-2 border-[#E5770E]" : "text-gray-500"}`}
            >
              Sell
            </TextWrapperWhite>
          </Pressable>
        </View>
        <TextWrapperWhite fontWeight='bold'>USDT</TextWrapperWhite>
      </View>

      {/* Conditional rendering based on the state */}
      <View style={tw`flex-1`}>
        {buy === "buy" ? <BuyComponent /> : <Sell />}
      </View>
    </SafeViewComponent>
  );
}
