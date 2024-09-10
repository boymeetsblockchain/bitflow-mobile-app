import { TextWrapperWhite } from "../textWrapper"
import tw from 'twrnc'
import { View,Image, Pressable } from "react-native"
import Button from "../button"

export const Receive =()=>{
    return(
   <View >
    <View style={tw ` justify-center items-center my-10 gap-y-4`}>
    <Image source={require('../../assets/images/btc.png')} style={tw `rounded-full h-10 w-10`}/>
    <TextWrapperWhite fontWeight="bold" style={tw `text-xl`}>Scan the QR code to get Receive address</TextWrapperWhite>
    <View>
    <Image source={require('../../assets/images/qr.png')} style={tw ` h-40 `} resizeMode="contain"/>
    </View>
     <View style={tw `flex-row items-center gap-x-4`}>
        <View  style={tw `h-1 w-[35%] bg-gray-700`}/>
     <TextWrapperWhite style={tw ``}>or</TextWrapperWhite>
       <View  style={tw `h-1 w-[35%] bg-gray-700`}/>
     </View>
     <TextWrapperWhite fontWeight="bold" style={tw `text-lg`}>Your Bitcoin Address</TextWrapperWhite>
     <TextWrapperWhite fontWeight="bold" style={tw `text-base p-3 bg-white rounded-md text-black `}>34HuwzDnSwxVRNCoyFCpQnRBXV2sVVmGUY</TextWrapperWhite>
     <Pressable style={tw `bg-[#ECF4FF] p-3 rounded-lg`}>
        <TextWrapperWhite style={tw`text-[#E5770E]`} fontWeight="bold">Copy Address</TextWrapperWhite>
     </Pressable>
    </View>
  <Button title="Share Address"/>
   </View>
    )
}