import { View, Text, FlatList, Pressable } from "react-native";
import { Header } from "../../components/header";
import { TextWrapperWhite } from "../../components/textWrapper";
import Ionicons from "@expo/vector-icons/Ionicons";
import Icon from "react-native-ico-flags";
import tw from "twrnc";
import { SafeViewComponent } from "../../components/safeViewComponent";
import { useState } from "react";
export default function LanguagePage() {
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const languages = [
    { name: "English", flag: "england" },
    { name: "Spanish", flag: "spain" },
    { name: "French", flag: "france" },
    { name: "Chinese", flag: "china" },
    { name: "German", flag: "germany" },
    { name: "Portuguese", flag: "portugal" },
    { name: "Russian", flag: "russia" },
  ];

  const handleLanguageSelect = (language: string) => {
    setSelectedLanguage(language);
  };
  return (
    <SafeViewComponent>
      <Header home={false} title="Change Language" />
      <FlatList
        data={languages}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <Pressable
            style={tw`flex-row justify-between items-center p-4 border border-white my-2`}
            onPress={() => handleLanguageSelect(item.name)}
          >
            {/* Flag and Language Name */}
            <View style={tw`flex-row items-center `}>
              <Icon name={item.flag} height={30} width={30} />

              <View>
                <TextWrapperWhite style={tw`ml-4 text-xl`}>
                  {item.name}
                </TextWrapperWhite>
                <TextWrapperWhite style={tw`ml-4 text-sm text-gray-500`}>
                  {item.name}
                </TextWrapperWhite>
              </View>
            </View>

            {/* Checkmark for Selected Language */}
            {selectedLanguage === item.name && (
              <View
                style={tw`h-6 w-6 rounded-full border border-[#E5770E] items-center justify-center`}
              >
                <Ionicons name="checkmark" size={16} color="#E5770E" />
              </View>
            )}
          </Pressable>
        )}
      />
    </SafeViewComponent>
  );
}
