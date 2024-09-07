import { View, Image } from 'react-native';
import { TextWrapperWhite } from '../../components/textWrapper';
import { SafeViewComponent } from '../../components/safeViewComponent';
import tw from 'twrnc';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Header } from '../../components/header';
import { Button } from '../../components';
import { router } from 'expo-router';

export default function CardPage() {
  return (
    <SafeViewComponent>

      <Header title="Card" home={false} />

      <View style={tw`flex-1 justify-between`}>
        <View style={tw`w-full mb-5`}>
          <Image
            source={require('../../assets/images/credit-card-2.png')}
            style={tw`w-full h-48 rounded-lg`}
            resizeMode="contain"
          />
        </View>

        {/* Other Cards Section */}
        <View style={tw`px-4`}>
          <View style={tw`flex-row justify-between items-center mb-4`}>
            <TextWrapperWhite
              fontWeight="bold"
              style={tw`text-2xl`}
            >
              Other Cards
            </TextWrapperWhite>
            <Ionicons name="add-sharp" size={24} color="white" />
          </View>

        
          <View style={tw`flex-col gap-y-4`}>
           
            <View style={tw`flex-row justify-between items-center`}>
              <View style={tw`h-5 w-5 border border-white items-center justify-center rounded-full`}>
                <View style={tw`h-3 w-3 bg-orange-400 rounded-full`} />
              </View>
              <View style={tw`flex-row gap-x-3 items-center`}>
                <Image source={require('../../assets/images/master.png')} style={tw`rounded-md ml-9`} />
                <TextWrapperWhite style={tw`text-sm`}>Mastercard</TextWrapperWhite>
              </View>
              <TextWrapperWhite style={tw`text-sm`}>**** **** 2823</TextWrapperWhite>
            </View>

        
            <View style={tw`flex-row justify-between items-center`}>
              <View style={tw`h-5 w-5 border border-white items-center justify-center rounded-full`} />
              <View style={tw`flex-row gap-x-3 items-center`}>
                <Image source={require('../../assets/images/visa.png')} style={tw`rounded-md`} />
                <TextWrapperWhite style={tw`text-sm`}>Visa</TextWrapperWhite>
              </View>
              <TextWrapperWhite style={tw`text-sm`}>**** **** 2823</TextWrapperWhite>
            </View>

    
            <View style={tw`flex-row justify-between items-center`}>
              <View style={tw`h-5 w-5 border border-white items-center justify-center rounded-full`} />
              <View style={tw`flex-row gap-x-3 items-center`}>
                <Image source={require('../../assets/images/amex.png')} style={tw`rounded-md`} />
                <TextWrapperWhite style={tw`text-sm`}>Debit</TextWrapperWhite>
              </View>
              <TextWrapperWhite style={tw`text-sm`}>**** **** 2823</TextWrapperWhite>
            </View>
          </View>
        </View>

        <View style={tw`px-4 py-6`}>
          <Button title="Confirm"  onPress={()=>router.push('/card/add')} />
        </View>
      </View>
    </SafeViewComponent>
  );
}
