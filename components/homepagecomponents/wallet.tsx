import { TouchableOpacity, View } from "react-native";
import { TextWrapper } from "../textWrapper";
import tw from 'twrnc';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { router } from "expo-router";

export const Wallet = () => {
  return (
    <View style={tw`w-full h-40 bg-[#E5770EB0] opacity-80 rounded-lg p-4`}>
      {/* QR Code Icon */}
      <TouchableOpacity>
        <FontAwesome name="qrcode" size={28} color="white"  onPress={()=>router.push('/others/qr')}/>
      </TouchableOpacity>

      {/* Portfolio Balance */}
      <View style={tw`flex-1 justify-center items-center gap-y-1`}>
        <TextWrapper style={tw`text-white text-lg`} fontWeight="bold">Total portfolio balance</TextWrapper>
        <TextWrapper style={tw`text-white text-2xl`} fontWeight="extraBold">$41,000</TextWrapper>
        <TextWrapper style={tw`text-green-400 text-base`}>+ $19.25 for today</TextWrapper>
      </View>

      {/* Top Up Button */}
      <View style={tw`absolute bottom-3  right-4`}>
        <TouchableOpacity>
          <TextWrapper style={tw`text-base bg-white text-[#E5770E] px-4 py-1 rounded-md`}>Top Up</TextWrapper>
        </TouchableOpacity>
      </View>
    </View>
  );
};
