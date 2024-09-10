import { router } from "expo-router";
import { View, Pressable, Image } from "react-native";
import tw from "twrnc";
import { TextWrapperWhite } from "../../components/textWrapper";
import { SafeViewComponent } from "../../components/safeViewComponent";
import { Header } from "../../components/header";
export default function index() {
  return (
    <SafeViewComponent>
      <Header home={false} title="Features" />
      <View>
        <View style={tw`flex-row justify-between my-2 items-center`}>
          <Pressable
            onPress={() => router.push("/services/recharge")}
            style={tw` items-center justify-center p-2 rounded-md`}
          >
            <Image
              source={require("../../assets/images/h2.png")}
              style={tw`h-12 w-12`}
            />
            <TextWrapperWhite style={tw`text-sm text-white`} fontWeight="bold">
              Send & Receive
            </TextWrapperWhite>
          </Pressable>
          <Pressable
            onPress={() => router.push("/bills/")}
            style={tw` items-center justify-center p-2 rounded-md`}
          >
            <Image
              source={require("../../assets/images/h3.png")}
              style={tw`h-12 w-12`}
            />
            <TextWrapperWhite style={tw`text-sm text-white`} fontWeight="bold">
              Pay Bills
            </TextWrapperWhite>
          </Pressable>

          <Pressable style={tw` items-center justify-center p-2 rounded-md`}>
            <Image
              source={require("../../assets/images/h4.png")}
              style={tw`h-12 w-12`}
            />
            <TextWrapperWhite style={tw`text-sm text-white`} fontWeight="bold">
              Withdraw
            </TextWrapperWhite>
          </Pressable>
        </View>
        <View style={tw`flex-row justify-between my-2 items-center`}>
          <Pressable
            onPress={() => router.push("/services/swap")}
            style={tw` items-center justify-center p-2 rounded-md`}
          >
            <Image
              source={require("../../assets/images/h5.png")}
              style={tw`h-12 w-12`}
            />
            <TextWrapperWhite style={tw`text-sm text-white`} fontWeight="bold">
              Swap
            </TextWrapperWhite>
          </Pressable>
          <Pressable
            onPress={() => router.push("/services/refer")}
            style={tw` items-center justify-center p-2 rounded-md`}
          >
            <Image
              source={require("../../assets/images/h6.png")}
              style={tw`h-12 w-12`}
            />
            <TextWrapperWhite style={tw`text-sm text-white`} fontWeight="bold">
              Refer
            </TextWrapperWhite>
          </Pressable>
          <Pressable
            onPress={() => router.push("/services/recharge")}
            style={tw` items-center justify-center p-2 rounded-md`}
          >
            <Image
              source={require("../../assets/images/h1.png")}
              style={tw`h-12 w-12`}
            />
            <TextWrapperWhite style={tw`text-sm text-white`} fontWeight="bold">
              Buy & Sell
            </TextWrapperWhite>
          </Pressable>
        </View>
      </View>
    </SafeViewComponent>
  );
}
