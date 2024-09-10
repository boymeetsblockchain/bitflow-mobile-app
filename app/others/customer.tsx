import { View, TextInput } from 'react-native';
import { Header } from '../../components/header';
import tw from 'twrnc';
import { SafeViewComponent } from '../../components/safeViewComponent';
import { TextWrapperWhite } from '../../components/textWrapper';
import { Button } from '../../components';

export default function CustomerPage() {
  return (
    <SafeViewComponent>
      <Header title="Customer Support" home={false} />

      <View style={tw`flex-1 p-4`}>
        {/* Support Information */}
        <TextWrapperWhite style={tw` text-center text-xl my-2`} fontWeight='extraBold'>
          Contact us for any issue
        </TextWrapperWhite>
        <TextWrapperWhite style={tw` text-center text-base`}>
          Call : +23470457534 (24/7)
        </TextWrapperWhite>
        <TextWrapperWhite style={tw` text-center text-base`}>
          Email : support@payment.com
        </TextWrapperWhite>

        {/* Send Message Section */}
        <TextWrapperWhite style={tw` text-center text-xl my-4`} fontWeight='bold'>
          Send Message
        </TextWrapperWhite>

        {/* Name Input */}
        <TextInput
          placeholder="Name"
          placeholderTextColor="#A1A1A1"
          style={tw`border border-gray-300 px-4  py-4 text-lg rounded-lg mb-4 bg-white`}
        />

        {/* Email Input */}
        <TextInput
          placeholder="Email"
          placeholderTextColor="#A1A1A1"
          style={tw`border border-gray-300 px-4  py-4 text-lg rounded-lg mb-4 bg-white`}
        />

        {/* Mobile Number Input with Country Code */}
        <View style={tw`relative mb-4`}>
          <TextInput
            placeholder="Enter Mobile Number"
            placeholderTextColor="#A1A1A1"
            style={tw`border border-gray-300 rounded-lg py-4  px-4  text-lg bg-white`}
          />
          <View style={tw`absolute top-4 left-4 flex-row items-center`}>
            <TextWrapperWhite style={tw`text-lg`}>+234</TextWrapperWhite>
          </View>
        </View>

        {/* Message Input */}
        <TextInput
          placeholder="Write a Message"
          placeholderTextColor="#A1A1A1"
          multiline={true}
          style={tw`border border-gray-300 px-4 text-[#414141] py-5 text-lg rounded-lg mb-4 bg-white`}
        />

        {/* Send Button */}
        <Button title="Send" />
      </View>
    </SafeViewComponent>
  );
}
