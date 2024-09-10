import { View,Image } from "react-native"
import { TextWrapper } from "../textWrapper"
import { TextWrapperWhite } from "../textWrapper"
import Entypo from '@expo/vector-icons/Entypo';
import Button from "../button";
import tw from 'twrnc'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export const Swap =()=>{
    return (
        <View style={tw `gap-y-6`}>
        <View style={tw ``}>
          <TextWrapperWhite fontWeight="bold">Choose your Crypto</TextWrapperWhite>
          <View style={tw ` bg-white p-3 rounded-md flex-row justify-between items-center`}>
              <View style={tw `flex-row items-center gap-x-4`}>
              <Image source={require('../../assets/images/btc.png')} style={tw `h-8 w-8 rounded-full`}/>
              <TextWrapper fontWeight="bold">BTC</TextWrapper>
              </View>
              <Entypo name="chevron-small-down" size={24} color="black" />
          </View>
        </View>
        <View style={tw ``}>
          <TextWrapperWhite fontWeight="bold">Amount</TextWrapperWhite>
          <View style={tw ` bg-white p-3 rounded-md flex-row justify-between items-center`}>
              <View style={tw `flex-row items-center gap-x-4`}>
              <Image source={require('../../assets/images/btc.png')} style={tw `h-8 w-8 rounded-full`}/>
             
              </View>
              <TextWrapper fontWeight="bold"> 0.000032.157</TextWrapper>
          </View>
        </View>
       <View style={tw `items-center justify-center my-5`}>
       <MaterialCommunityIcons name="swap-vertical-circle" size={30} color="#E5770E"  />
       </View>
       
       <View style={tw ``}>
          <TextWrapperWhite fontWeight="bold">Choose your Crypto</TextWrapperWhite>
          <View style={tw ` bg-white p-3 rounded-md flex-row justify-between items-center`}>
              <View style={tw `flex-row items-center gap-x-4`}>
              <Image source={require('../../assets/images/eth.png')} style={tw `h-8 w-8 rounded-full`}/>
              <TextWrapper fontWeight="bold">ETH</TextWrapper>
              </View>
              <Entypo name="chevron-small-down" size={24} color="black" />
          </View>
        </View>
   

   <View style={tw`items-center justify-center bg-[#E5770E] p-3 rounded-md `}>
    <TextWrapperWhite>Total Balance: ₦1,565,520.57</TextWrapperWhite>
   </View>
    <View style={tw ``}>
    <Button title="Swap Crypto"/>
    </View>
      </View>

    )
}