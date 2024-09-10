import { View, Text, Image, Switch } from "react-native";
import { Header } from "../../components/header";
import { TextWrapper, TextWrapperWhite } from "../../components/textWrapper";
import tw from "twrnc";
import Entypo from "@expo/vector-icons/Entypo";
import { SafeViewComponent } from "../../components/safeViewComponent";
import { useState } from "react";
import { Button } from "../../components";
export default function Price() {
  const [isPushEnabled, setIsPushEnabled] = useState(false);
  const togglePushNotifications = () => setIsPushEnabled((prev) => !prev);
  return (
    <SafeViewComponent>
      <Header home={false} title="Create Price Alert" />
      <View style={tw``}>
        <TextWrapperWhite fontWeight="bold" style={tw`mb-3`}>
          Select Coin
        </TextWrapperWhite>
        <View
          style={tw` bg-white p-3 rounded-md flex-row justify-between items-center`}
        >
          <View style={tw`flex-row items-center gap-x-4`}>
            <Image
              source={require("../../assets/images/eth.png")}
              style={tw`h-8 w-8 rounded-full`}
            />
            <TextWrapper>ETH</TextWrapper>
          </View>
          <Entypo name="chevron-down" size={24} color="black" />
        </View>
      </View>
      <View style={tw``}>
        <TextWrapperWhite fontWeight="bold" style={tw`mb-3`}>
          Enter Amount
        </TextWrapperWhite>
        <View
          style={tw` bg-white p-3 rounded-md flex-row justify-between items-center`}
        >
          <View style={tw`flex-row items-center gap-x-4`}>
            <Image
              source={require("../../assets/images/eth.png")}
              style={tw`h-8 w-8 rounded-full`}
            />
            <TextWrapper>$1000</TextWrapper>
          </View>
        </View>
      </View>
      {/* Enable Push Notifications */}
      <View
        style={tw`flex-row justify-between items-center my-4  p-3 rounded-lg`}
      >
        <TextWrapperWhite>Enable Push Notifications</TextWrapperWhite>
        <Switch
          trackColor={{ false: "#767577", true: "#E5770E" }}
          thumbColor={isPushEnabled ? "#f4f3f4" : "#f4f3f4"}
          onValueChange={togglePushNotifications}
          value={isPushEnabled}
        />
      </View>
      <Button title="Create" />
    </SafeViewComponent>
  );
}
