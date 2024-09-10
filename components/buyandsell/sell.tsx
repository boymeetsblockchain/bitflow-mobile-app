import { TextWrapper, TextWrapperWhite } from "../textWrapper"
import tw from 'twrnc'
import { Image, View } from "react-native"
import Entypo from '@expo/vector-icons/Entypo';
import Button from "../button";

export const Sell=()=>{
    return(
        <View style={tw `gap-y-4`}>
          <View style={tw ``}>
            <TextWrapperWhite fontWeight="bold">Select Coin</TextWrapperWhite>
            <View style={tw ` bg-white p-3 rounded-md flex-row justify-between items-center`}>
                <View style={tw `flex-row items-center gap-x-4`}>
                <Image source={require('../../assets/images/eth.png')} style={tw `h-8 w-8 rounded-full`}/>
                <TextWrapper fontWeight="bold">ETH</TextWrapper>
                </View>
                <Entypo name="chevron-small-down" size={24} color="black" />
            </View>
          </View>
          <View style={tw ``}>
            <TextWrapperWhite fontWeight="bold">Limits</TextWrapperWhite>
            <View style={tw ` bg-white p-3 rounded-md flex-row justify-between items-center`}>
                <View style={tw `flex-row items-center gap-x-4`}>
                <Image source={require('../../assets/images/eth.png')} style={tw `h-8 w-8 rounded-full`}/>
                <TextWrapper fontWeight="bold">1,000 - 1,700</TextWrapper>
                </View>
                <Entypo name="chevron-small-down" size={24} color="black" />
            </View>
          </View>
          <View style={tw ``}>
            <TextWrapperWhite fontWeight="bold">Quantity</TextWrapperWhite>
            <View style={tw ` bg-white p-3 rounded-md flex-row justify-between items-center`}>
                <View style={tw `flex-row items-center gap-x-4`}>
                <Image source={require('../../assets/images/eth.png')} style={tw `h-8 w-8 rounded-full`}/>
                <TextWrapper fontWeight="bold">0.023554</TextWrapper>
                </View>
    
            </View>
          </View>
          <View style={tw ``}>
            <TextWrapperWhite fontWeight="bold">Enter Amount</TextWrapperWhite>
            <View style={tw ` bg-white p-3 rounded-md flex-row justify-between items-center`}>
                <View style={tw `flex-row items-center gap-x-4`}>
                <Image source={require('../../assets/images/eth.png')} style={tw `h-8 w-8 rounded-full`}/>
                <TextWrapper fontWeight="bold">$1,000</TextWrapper>
                </View>
                <Entypo name="chevron-small-down" size={24} color="black" />
            </View>
          </View>
          <TextWrapper style={tw `text-gray-700 text-xl text-center `} fontWeight="bold">
          Available Balance:  3.5849 ETH
          </TextWrapper>
      <View style={tw `mt-20`}>
      <Button title="Done"/>
      </View>
        </View>

    )
}