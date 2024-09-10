import { View, Pressable } from 'react-native';
import { Header } from '../../components/header';
import { SafeViewComponent } from '../../components/safeViewComponent';
import { TextWrapperWhite } from '../../components/textWrapper';
import { Swap as SwapComponent } from '../../components/swap/swap';
import { Exchange } from '../../components/swap/exchange';
import tw from 'twrnc';
import { useState } from 'react';

export default function Swap() {
  const [swap, setSwap] = useState('swap'); // Set default state to 'swap'

  return (
    <SafeViewComponent>
      {/* Header */}
      <Header title='Swap & Exchange' home={false} />

      {/* Toggle between Swap & Exchange */}
      <View style={tw`flex-row justify-between my-5`}>
        <Pressable onPress={() => setSwap('swap')}>
          <TextWrapperWhite 
            fontWeight='extraBold' 
            style={[tw`text-2xl`, swap === 'swap' ? tw`border-b-2 border-[#E5770E]` : tw`text-gray-500`]}
          >
            Swap
          </TextWrapperWhite>
        </Pressable>
        <Pressable onPress={() => setSwap('exchange')}>
          <TextWrapperWhite 
            fontWeight='extraBold' 
            style={[tw`text-2xl`, swap === 'exchange' ? tw`border-b-2 border-[#E5770E]` : tw`text-gray-500`]}
          >
            Exchange
          </TextWrapperWhite>
        </Pressable>
      </View>

      {/* Conditional rendering based on state */}
      <View style={tw`flex-1`}>
        {swap === 'swap' ? <SwapComponent /> : <Exchange />}
      </View>
    </SafeViewComponent>
  );
}
