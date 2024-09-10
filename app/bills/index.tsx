import { View, Text, Pressable, Image } from "react-native";
import { Header } from "../../components/header";
import tw from "twrnc";
import { SafeViewComponent } from "../../components/safeViewComponent";
import { TextWrapperWhite } from "../../components/textWrapper";
import { router } from "expo-router";
export default function BillPayment() {
  return (
    <SafeViewComponent>
      <Header home={false} title="Bill Payment" />
      <View style={tw`flex-row justify-between my-2 items-center`}>
        <Pressable
          onPress={() => router.push("/services/data")}
          style={tw` items-center justify-center p-2 rounded-md`}
        >
          <Image
            source={require("../../assets/images/b1.png")}
            style={tw`h-12 w-12`}
          />
          <TextWrapperWhite style={tw`font-bold text-sm text-white`}>
            Data
          </TextWrapperWhite>
        </Pressable>
        <Pressable
          onPress={() => router.push("/services/cable")}
          style={tw` items-center justify-center p-2 rounded-md`}
        >
          <Image
            source={require("../../assets/images/b2.png")}
            style={tw`h-12 w-12`}
          />
          <TextWrapperWhite style={tw`font-bold text-sm text-white`}>
            Cable Tv
          </TextWrapperWhite>
        </Pressable>
        <Pressable
          onPress={() => router.push("/services/airtime")}
          style={tw` items-center justify-center p-2 rounded-md`}
        >
          <Image
            source={require("../../assets/images/b3.png")}
            style={tw`h-12 w-12`}
          />
          <TextWrapperWhite style={tw`font-bold text-sm text-white`}>
            Education
          </TextWrapperWhite>
        </Pressable>
      </View>
      <View style={tw`flex-row justify-between my-2 items-center`}>
        <Pressable
          onPress={() => router.push("/services/electricity")}
          style={tw` items-center justify-center p-2 rounded-md`}
        >
          <Image
            source={require("../../assets/images/b4.png")}
            style={tw`h-12 w-12`}
          />
          <TextWrapperWhite style={tw`font-bold text-sm text-white`}>
            Electricity
          </TextWrapperWhite>
        </Pressable>
        <Pressable
          onPress={() => router.push("/services/airtime")}
          style={tw` items-center justify-center p-2 rounded-md`}
        >
          <Image
            source={require("../../assets/images/b5.png")}
            style={tw`h-12 w-12`}
          />
          <TextWrapperWhite style={tw`font-bold text-sm text-white`}>
            Airtime
          </TextWrapperWhite>
        </Pressable>
        <Pressable
          onPress={() => router.push("/services/betting")}
          style={tw` items-center justify-center p-2 rounded-md`}
        >
          <Image
            source={require("../../assets/images/b6.png")}
            style={tw`h-12 w-12`}
          />
          <TextWrapperWhite style={tw`font-bold text-sm text-white`}>
            Betting
          </TextWrapperWhite>
        </Pressable>
      </View>
    </SafeViewComponent>
  );
}
