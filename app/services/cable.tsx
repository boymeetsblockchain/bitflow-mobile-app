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
    title: "Dstv",
    imgSrc: require("../../assets/images/dstv.png"),
  },
  airtel: {
    title: "Gotv",
    imgSrc: require("../../assets/images/gotv.png"),
  },
  glo: {
    title: "Star Times",
    imgSrc: require("../../assets/images/startimes.png"),
  },
  showmax: {
    title: "Show Max",
    imgSrc: require("../../assets/images/showmax.webp"),
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
      <Header home={false} title="Cable" />

      <View style={tw`px-4 pt-4 flex-1 justify-between`}>
        <View style={tw` gap-y-4`}>
          {/* Choose Provider */}
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

          {/* Select Package */}
          <View style={tw``}>
            <TextWrapperWhite style={tw`text-lg font-semibold mb-2`}>
              Select Package
            </TextWrapperWhite>
            <TextInput
              style={tw`border border-gray-300 bg-white rounded-md py-2 px-3`}
              placeholder="Select Package"
              keyboardType="phone-pad"
            />
          </View>

          {/* Decoder Number */}
          <View style={tw``}>
            <TextWrapperWhite style={tw`text-lg font-semibold mb-2`}>
              Decoder Number
            </TextWrapperWhite>
            <TextInput
              style={tw`border border-gray-300 bg-white rounded-md py-2 px-3`}
              placeholder="Input Decoder Number"
              keyboardType="phone-pad"
            />
          </View>

          {/* Dummy Recent Purchase */}
          <View style={tw`bg-gray-800 p-4 rounded-md my-4`}>
            <TextWrapperWhite style={tw`font-semibold text-lg mb-2`}>
              Recent Purchase
            </TextWrapperWhite>
            <View style={tw`flex-row justify-between items-center`}>
              <View style={tw`flex-row items-center`}>
                <Image
                  source={require("../../assets/images/dstv.png")}
                  style={tw`w-8 h-8 rounded-full`}
                />
                <View style={tw`ml-3`}>
                  <TextWrapperWhite style={tw`font-semibold`}>
                    DSTV Package
                  </TextWrapperWhite>
                  <TextWrapperWhite style={tw`text-sm text-gray-400`}>
                    Decoder: 1234567890
                  </TextWrapperWhite>
                </View>
              </View>
              <TextWrapperWhite style={tw`font-semibold`}>
                ₦12,000
              </TextWrapperWhite>
            </View>
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
