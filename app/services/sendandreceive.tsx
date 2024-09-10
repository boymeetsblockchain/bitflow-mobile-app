import { View, Text, TouchableOpacity, ScrollView, Pressable } from 'react-native';
import { SafeViewComponent } from '../../components/safeViewComponent';
import { TextWrapperWhite } from '../../components/textWrapper';
import { Send } from '../../components/sendandreceive/send';
import { Receive } from '../../components/sendandreceive/receive';
import { Header } from '../../components/header';
import tw from 'twrnc';
import { useState } from 'react';

export default function SendAndReceive() {
  const [send, setSend] = useState("send");

  return (
    <SafeViewComponent>
      {/* Header */}
      <Header title='Send & Receive' home={false} />
      
      {/* Toggle between Send & Receive */}
      <View style={tw`flex-row items-center justify-center my-5 gap-x-10`}>
        <Pressable onPress={() => setSend("send")}>
          <TextWrapperWhite 
            fontWeight='bold' 
            style={[
              tw`text-lg px-5 py-2`,
              send === "send" ? tw`border-b-2 border-[#E5770E]` : tw`text-gray-500`
            ]}
          >
            Send
          </TextWrapperWhite>
        </Pressable>
        <Pressable onPress={() => setSend("receive")}>
          <TextWrapperWhite 
            fontWeight='bold' 
            style={[
              tw`text-lg px-5 py-2`,
              send === "receive" ? tw`border-b-2 border-[#E5770E]` : tw`text-gray-500`
            ]}
          >
            Receive
          </TextWrapperWhite>
        </Pressable>
      </View>

      {/* Conditional Rendering of Send or Receive Components */}
      <View style={tw`flex-1`}>
        {send === "send" ? <Send /> : <Receive />}
      </View>
    </SafeViewComponent>
  );
}
