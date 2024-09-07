import tw from 'twrnc';
import { TextWrapper, TextWrapperWhite } from '../textWrapper';
import { Image, Pressable, TouchableOpacity, View } from 'react-native';
import { CryptoCard } from './cryptocard';
import { router } from 'expo-router';


export const WalletCard = () => {
  return (
    <View style={tw`mb-3 flex-1 justify-center`}>
      {/* Header section */}
      <View style={tw`bg-[#E5770E] rounded-md p-3 mb-3`}>
        <TextWrapper style={tw`text-white text-center text-sm font-bold`}>
          Card
        </TextWrapper>
      </View>

      {/* Image section */}
      <View style={tw`w-full `}>
        <Image
          source={require('../../assets/images/credit-card-2.png')}
          style={tw`w-full h-48 rounded-lg`}
          resizeMode="contain"
        />
      </View>
            <View style={tw`bg-[#E5770E] rounded-md p-3 mb-3`}>
      <TouchableOpacity onPress={()=>router.push('/card')}>
      <TextWrapper style={tw`text-white text-center text-sm font-bold`}>
          Add  Card
        </TextWrapper>
      </TouchableOpacity>
      </View>
      <View style={tw `flex-row justify-between`}>
        <TextWrapperWhite>Your Coin</TextWrapperWhite>
         <Pressable>
         <TextWrapperWhite style={tw `text-[#E5770E]`}>Add Coin</TextWrapperWhite>
         </Pressable>
      </View>
      <CryptoCard/>
    </View>
  );
};
