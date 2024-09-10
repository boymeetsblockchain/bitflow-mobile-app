import { Image, TextInput, TouchableOpacity, View } from "react-native"
import { TextWrapperWhite } from "../textWrapper"
import tw from 'twrnc'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { router } from "expo-router";
import Button from "../button";

export const Send =()=>{
    return(
        <View style={tw `my-10 gap-y-4`}>
            <View style={tw `flex-row justify-between`}>
         <View style={tw `flex-row gap-x-4`}>
            <Image source={require('../../assets/images/btc.png')} style={tw `rounded-full h-10 w-10`}/>
            <View style={tw ``}>
                <TextWrapperWhite fontWeight="bold">Bitcoin</TextWrapperWhite>
                <TextWrapperWhite>BTC</TextWrapperWhite>
            </View>
        </View>
        <View>
        <TextWrapperWhite style={tw `text-base`}>Available Balance</TextWrapperWhite>
        <TextWrapperWhite fontWeight="bold" style={tw `text-lg`}>2.23464 BTC</TextWrapperWhite>
        </View>
         </View>
         <View style={tw `gap-y-3`}>
          <View>
            <TextWrapperWhite fontWeight="bold">Enter Address</TextWrapperWhite>
            <View style={tw `flex-row items-center gap-x-3  `}>
            <TextInput style={ tw`border border-gray-300 p-2 w-[80%] rounded-md`}/>
            <TouchableOpacity>
        <FontAwesome name="qrcode" size={28} color="white"  onPress={()=>router.push('/others/qr')}/>
      </TouchableOpacity>
            </View>
          </View>
          <View>
          <TextWrapperWhite fontWeight="bold">Amount</TextWrapperWhite>
          <TextInput style={ tw`border border-gray-300 p-2  rounded-md`}/>
          </View>
          <View>
          <TextWrapperWhite fontWeight="bold">Note</TextWrapperWhite>
          <TextInput style={ tw`border border-gray-300 p-2  rounded-md`}/>
          </View>
          <TextWrapperWhite  style={tw `text-gray-700`}>Transaction fees: 0.0000 BTC</TextWrapperWhite>
          <TextWrapperWhite fontWeight="bold">Min: 0.00061 BTC - Max: 2.0006 BTC</TextWrapperWhite>
         </View>

         <Button title="Send"/>
        </View>
    )
}