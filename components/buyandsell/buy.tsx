import { View,ScrollView, TouchableOpacity } from "react-native"
import tw from 'twrnc'
import { TextWrapper } from "../textWrapper"
import { TextWrapperWhite } from "../textWrapper"

export const BuyComponent = ()=>{
    return (
        <View>
                 {/* List of Cryptocurrencies */}
      <View style={tw`flex-row items-center gap-x-5`}>
        <TextWrapperWhite fontWeight='bold'>USDT</TextWrapperWhite>
        <TextWrapperWhite fontWeight='bold' style={tw`text-gray-700`}>USDC</TextWrapperWhite>
        <TextWrapperWhite fontWeight='bold' style={tw`text-gray-700`}>BTC</TextWrapperWhite>
        <TextWrapperWhite fontWeight='bold' style={tw`text-gray-700`}>LITECOIN</TextWrapperWhite>
        <TextWrapperWhite fontWeight='bold' style={tw`text-gray-700`}>TRON</TextWrapperWhite>
      </View>

      {/* Filter Bar */}
      <View style={tw`flex-row items-center gap-x-5 my-5`}>
        <TextWrapperWhite fontWeight='bold' style={tw`text-gray-700`}>AMOUNT</TextWrapperWhite>
        <TextWrapperWhite fontWeight='bold' style={tw`text-gray-700`} 
        
        >ALL PAYMENT METHOD</TextWrapperWhite>
      </View>

      {/* Scrollable List */}
      <ScrollView>
        {/* Render each item */}
        {[...Array(5)].map((_, index) => (
          <View key={index} style={tw`flex-row items-center my-2 justify-between`}>
            <View style={tw`gap-y-0.5`}>
              <View style={tw`flex-row items-center gap-x-3`}>
                <View style={tw`bg-[#E5770E] rounded-full h-10 w-10 items-center justify-center`}>
                  <TextWrapper fontWeight='bold' style={tw`text-2xl`}>K</TextWrapper>
                </View>
                <View>
                  <TextWrapperWhite fontWeight='bold'>Kcee</TextWrapperWhite>
                  <TextWrapperWhite style={tw`text-gray-700`}>1 min ago</TextWrapperWhite>
                </View>
              </View>
              <TextWrapperWhite fontWeight='bold'>$1,000</TextWrapperWhite>
              <TextWrapperWhite fontWeight='bold'>Quantity  212.3085 USDT</TextWrapperWhite>
              <TextWrapperWhite fontWeight='bold'>Limits 100-1,000 USD</TextWrapperWhite>
              <TextWrapperWhite fontWeight='bold' style={tw`border-l-2 px-2 border-[#E5770E]`}>USDT</TextWrapperWhite>
            </View>
            <TouchableOpacity style={tw`px-3 py-2 rounded-lg bg-[#63D181]`}>
              <TextWrapperWhite>Buy</TextWrapperWhite>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
        </View>
    )
}