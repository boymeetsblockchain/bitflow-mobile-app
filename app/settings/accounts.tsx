import { View, Text } from "react-native";
import { Header } from "../../components/header";
import Feather from "@expo/vector-icons/Feather";
import { TextWrapperWhite } from "../../components/textWrapper";
import tw from "twrnc";
import { SafeViewComponent } from "../../components/safeViewComponent";
export default function AccountPage() {
  return (
    <SafeViewComponent>
      <Header home={false} title="Account" />
      <View style={tw`gap-y-6 `}>
        <View>
          <TextWrapperWhite style={tw`mb-3`} fontWeight="bold">
            Payment Method
          </TextWrapperWhite>
          <View
            style={tw`flex-row justify-between bg-[#8C6744] items-center  p-3 rounded-lg`}
          >
            <TextWrapperWhite>USD</TextWrapperWhite>
            <Feather name="chevron-right" size={24} color="white" />
          </View>
        </View>
        <View>
          <TextWrapperWhite style={tw`mb-3`} fontWeight="bold">
            Account Limits
          </TextWrapperWhite>
          <View
            style={tw`flex-row justify-between bg-[#8C6744] items-center  p-3 rounded-lg`}
          >
            <TextWrapperWhite>$30,000</TextWrapperWhite>
            <Feather name="chevron-right" size={24} color="white" />
          </View>
        </View>
        <View>
          <TextWrapperWhite style={tw`mb-3`} fontWeight="bold">
            Verification
          </TextWrapperWhite>
          <View
            style={tw`flex-row justify-between bg-[#8C6744] items-center  p-3 rounded-lg`}
          >
            <TextWrapperWhite>Verify</TextWrapperWhite>
            <View
              style={tw`items-center justify-center h-8 w-8 bg-blue-400 rounded-full`}
            >
              <Feather name="check" size={20} color="white" />
            </View>
          </View>
        </View>
      </View>
    </SafeViewComponent>
  );
}
