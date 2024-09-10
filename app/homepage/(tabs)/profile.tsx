import { View, Pressable, Image, ScrollView } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import tw from "twrnc";
import { router } from "expo-router";
import { SafeViewComponent } from "../../../components/safeViewComponent";
import { TextWrapperWhite } from "../../../components/textWrapper";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function ProfilePage() {
  return (
    <SafeViewComponent>
      <ScrollView
        contentContainerStyle={tw`flex-grow`}
        showsVerticalScrollIndicator={false}
      >
        {/* Profile Image and ID */}
        <View style={tw`items-center my-5 justify-center`}>
          <Image
            source={require("../../../assets/images/profile-pic.png")}
            style={tw`h-20 w-20 rounded-full`}
            resizeMode="contain"
          />
          <TextWrapperWhite style={tw` text-2xl mt-2`} fontWeight="bold">
            Edwin Izantim
          </TextWrapperWhite>
          <TextWrapperWhite style={tw`text-gray-400  mt-1`}>
            I.D: 214AV02
          </TextWrapperWhite>
        </View>

        {/* Profile Information Fields */}
        <View style={tw`gap-y-5 px-6`}>
          {/* Full Name */}
          <View>
            <TextWrapperWhite style={tw` mb-2`} fontWeight="bold">
              Full Name
            </TextWrapperWhite>
            <View
              style={tw`bg-[#8C6744] flex-row justify-between p-3 rounded-md items-center`}
            >
              <TextWrapperWhite>Edwin Izantim</TextWrapperWhite>
              <Ionicons name="pencil" size={24} color="white" />
            </View>
          </View>

          {/* Email */}
          <View>
            <TextWrapperWhite style={tw` mb-2`} fontWeight="bold">
              Email
            </TextWrapperWhite>
            <View
              style={tw`bg-[#8C6744] flex-row justify-between p-3 rounded-md items-center`}
            >
              <TextWrapperWhite>edwin@example.com</TextWrapperWhite>
              <Ionicons name="pencil" size={24} color="white" />
            </View>
          </View>

          {/* Phone Number */}
          <View>
            <TextWrapperWhite style={tw` mb-2`} fontWeight="bold">
              Phone Number
            </TextWrapperWhite>
            <View
              style={tw`bg-[#8C6744] flex-row justify-between p-3 rounded-md items-center`}
            >
              <TextWrapperWhite>+234 803 456 7890</TextWrapperWhite>
              <Ionicons name="pencil" size={24} color="white" />
            </View>
          </View>

          {/* Address */}
          <View>
            <TextWrapperWhite style={tw` mb-2`} fontWeight="bold">
              Address
            </TextWrapperWhite>
            <View
              style={tw`bg-[#8C6744] flex-row justify-between p-3 rounded-md items-center`}
            >
              <TextWrapperWhite>No. 15 Street, Lagos</TextWrapperWhite>
              <Ionicons name="pencil" size={24} color="white" />
            </View>
          </View>

          {/* Support Section */}
          <View>
            <TextWrapperWhite fontWeight="bold">Support</TextWrapperWhite>
            <Pressable
              onPress={() => router.push("/others/customer")}
              style={tw`flex-row justify-between my-2 p-3 bg-[#8C6744] rounded-md`}
            >
              <TextWrapperWhite>Customer Support</TextWrapperWhite>
              <Ionicons name="chevron-forward" size={20} color="white" />
            </Pressable>
            <Pressable
              style={tw`flex-row justify-between p-3 bg-[#8C6744] rounded-md`}
            >
              <TextWrapperWhite>About</TextWrapperWhite>
              <Ionicons name="chevron-forward" size={20} color="white" />
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeViewComponent>
  );
}
