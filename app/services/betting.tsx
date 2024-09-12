import React, { useState } from "react";
import {
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Modal,
  Pressable,
  ImageSourcePropType,
} from "react-native";
import { Header } from "../../components/header";
import tw from "twrnc";
import { Entypo } from "@expo/vector-icons";
import { SafeViewComponent } from "../../components/safeViewComponent";
import { TextWrapper, TextWrapperWhite } from "../../components/textWrapper";
import { Button } from "../../components";

type Provider = "mtn" | "airtel" | "glo" | "nine_mobile";

interface DataType {
  [key: string]: {
    title: string;
    imgSrc: ImageSourcePropType;
  };
}

const dataType: DataType = {
  mtn: {
    title: "Sporty",
    imgSrc: require("../../assets/images/sporty.png"),
  },
  airtel: {
    title: "BetKing",
    imgSrc: require("../../assets/images/betking.jpg"),
  },
  glo: {
    title: "Bet9ja",
    imgSrc: require("../../assets/images/bet0ja.png"),
  },
  nine_mobile: {
    title: "Bet 365",
    imgSrc: require("../../assets/images/365.png"),
  },
};

export default function Airtime() {
  const [selectedProvider, setSelectedProvider] = useState<Provider>("mtn");
  const [isPickerVisible, setPickerVisible] = useState<boolean>(false);

  const handleProviderChange = (providerKey: Provider) => {
    setSelectedProvider(providerKey);
    setPickerVisible(false);
  };

  return (
    <SafeViewComponent>
      <Header home={false} title="Betting" />

      <View style={tw`px-4 pt-4 flex-1 justify-between`}>
        <View style={tw` gap-y-4`}>
          <View style={tw``}>
            <TextWrapperWhite style={tw`text-lg font-semibold mb-2`}>
              Choose Provider
            </TextWrapperWhite>
            <TouchableOpacity
              style={tw`flex-row items-center justify-between border border-gray-300 bg-white rounded-md py-2 px-3`}
              onPress={() => setPickerVisible(true)}
            >
              <Image
                source={dataType[selectedProvider].imgSrc}
                style={tw`w-8 h-8 rounded-full`}
              />
              <TextWrapperWhite>
                {dataType[selectedProvider].title}
              </TextWrapperWhite>
              <Entypo name="chevron-down" color="black" size={20} />
            </TouchableOpacity>
          </View>

          {/* Number Input */}
          <View style={tw``}>
            <TextWrapperWhite style={tw`text-lg font-semibold mb-2`}>
              Bet Account
            </TextWrapperWhite>
            <TextInput
              style={tw`border border-gray-300 bg-white rounded-md py-2 px-3`}
              placeholder="Enter Your bet Account"
              keyboardType="phone-pad"
            />
          </View>
          <View style={tw``}>
            <TextWrapperWhite style={tw`text-lg font-semibold mb-2`}>
              Enter Amount
            </TextWrapperWhite>
            <TextInput
              style={tw`border border-gray-300 bg-white rounded-md py-2 px-3`}
              placeholder="0.00"
              keyboardType="phone-pad"
            />
          </View>
        </View>

        {/* Pay Button */}
        <Button title="Pay" />

        {/* Modal for Provider Selection */}
        <Modal
          transparent={true}
          visible={isPickerVisible}
          animationType="slide"
          onRequestClose={() => setPickerVisible(false)}
        >
          <View
            style={tw`flex-1 justify-center items-center bg-black bg-opacity-50`}
          >
            <View style={tw`bg-white w-4/5 rounded-lg py-4 px-4`}>
              <TextWrapper style={tw`text-lg font-semibold mb-4 text-center`}>
                Select Network
              </TextWrapper>

              {/* Provider Options */}
              {Object.keys(dataType).map((providerKey) => (
                <TouchableOpacity
                  key={providerKey}
                  style={tw`flex-row items-center py-2 px-3 border-b border-gray-300`}
                  onPress={() => handleProviderChange(providerKey as Provider)}
                >
                  <Image
                    source={dataType[providerKey].imgSrc}
                    style={tw`w-8 h-8 mr-3 rounded-full`}
                  />
                  <TextWrapper style={tw`text-lg`}>
                    {dataType[providerKey].title}
                  </TextWrapper>
                </TouchableOpacity>
              ))}

              {/* Close Button */}
              <Pressable
                style={tw`bg-[#E5770E] mt-3 rounded-md py-2`}
                onPress={() => setPickerVisible(false)}
              >
                <TextWrapperWhite style={tw`text-center text-lg`}>
                  Close
                </TextWrapperWhite>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    </SafeViewComponent>
  );
}
