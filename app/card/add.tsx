import { View, Image } from 'react-native';
import { Header } from '../../components/header';
import { Button } from '../../components';
import tw from 'twrnc';
import { TextWrapperWhite } from '../../components/textWrapper';
import { SafeViewComponent } from '../../components/safeViewComponent';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { InputComp } from '../../components';
import AntDesign from '@expo/vector-icons/AntDesign';
import { router } from 'expo-router';

export default function AddCard() {
  return (
    <SafeViewComponent>
      {/* Header Section */}
      <Header title="Top Up" home={false} />
      
      <View style={tw`flex-1 justify-between px-4`}>
        {/* Credit Card Image */}
        <View style={tw`w-full mb-6`}>
          <Image
            source={require('../../assets/images/credit-card-2.png')}
            style={tw`w-full h-48 rounded-lg`}
            resizeMode="contain"
          />
        </View>

        {/* Input Fields Section */}
        <View>
          <View style={tw`flex-col gap-y-6 mb-8`}>
            {/* Holder Name */}
            <View>
              <TextWrapperWhite style={tw`mb-2`}>Holder Name</TextWrapperWhite>
              <InputComp value='' onChange={()=>{}} placeholder='Jason Doung' />
            </View>

            {/* Card Number */}
            <View>
              <TextWrapperWhite style={tw`mb-2`}>Card Number</TextWrapperWhite>
              <View style={tw`relative`}>
                <InputComp value='' onChange={()=>{}} placeholder='1234 5678 9101 1121'  />
                <FontAwesome6 name="credit-card" size={20} color="gray" style={tw`absolute top-3 right-2 `} />
              </View>
            </View>
          </View>

          {/* MM/YY and CVC Fields */}
          <View style={tw`flex-row justify-between gap-x-6 mb-8`}>
            {/* Expiry Date */}
            <View style={tw`flex-1`}>
              <TextWrapperWhite style={tw`mb-2`}>MM/YY</TextWrapperWhite>
              <View style={tw`relative`}>
                <InputComp value='' onChange={()=>{}} placeholder='10/23' />
                <AntDesign name="calendar" size={24} color="grey" style={tw`absolute top-3 right-2`} />
              </View>
            </View>

            {/* CVC */}
            <View style={tw`flex-1`}>
              <TextWrapperWhite style={tw`mb-2`}>CVC</TextWrapperWhite>
              <View style={tw`relative`}>
                <InputComp value='' onChange={()=>{}} placeholder='000' />
                <AntDesign name="exclamationcircleo" size={24} color="grey" style={tw`absolute top-3 right-2`} />
              </View>
            </View>
          </View>
        </View>

        {/* Fund Button */}
        <View style={tw`mb-8`}>
          <Button title='Fund'  onPress={()=>router.push('/card/view')}/>
        </View>
      </View>
    </SafeViewComponent>
  );
}
