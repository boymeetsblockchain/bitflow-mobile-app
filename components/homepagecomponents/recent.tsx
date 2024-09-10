import { Pressable, View, ScrollView } from "react-native";
import { TextWrapper, TextWrapperWhite } from "../textWrapper";
import tw from "twrnc";
import { router } from "expo-router";
export const RecentTransactions = () => {
  return (
    <ScrollView>
      <View style={tw`bg-[#966F4A] flex-row justify-between p-2 rounded-lg`}>
        <TextWrapperWhite>Recent Transactions</TextWrapperWhite>
        <Pressable onPress={() => router.push("/others/recent")}>
          <TextWrapperWhite>View More</TextWrapperWhite>
        </Pressable>
      </View>
      <View style={tw`my-3 flex-row items-center justify-between`}>
        <View style={tw`flex-col gap-y-0.5`}>
          <TextWrapperWhite fontWeight="bold">ETH</TextWrapperWhite>
          <TextWrapperWhite
            style={tw`bg-green-200 text-green-600 rounded-md text-center`}
          >
            Success
          </TextWrapperWhite>
          <TextWrapperWhite>ID 839883</TextWrapperWhite>
        </View>
        <View style={tw`flex-col gap-y-0.5`}>
          <TextWrapperWhite>AMount 43030.2</TextWrapperWhite>
          <TextWrapperWhite>
            Type <TextWrapper style={tw`text-[#E5770E]`}>839883</TextWrapper>
          </TextWrapperWhite>
        </View>
        <View style={tw`flex-col gap-y-0.5`}>
          <TextWrapperWhite>18-06-20</TextWrapperWhite>
          <TextWrapperWhite>12:43:30</TextWrapperWhite>
        </View>
      </View>
      <View style={tw`my-3 flex-row items-center justify-between`}>
        <View style={tw`flex-col gap-y-0.5`}>
          <TextWrapperWhite fontWeight="bold">ETH</TextWrapperWhite>
          <TextWrapperWhite
            style={tw`bg-green-200 text-green-600 rounded-md text-center`}
          >
            Success
          </TextWrapperWhite>
          <TextWrapperWhite>ID 839883</TextWrapperWhite>
        </View>
        <View style={tw`flex-col gap-y-0.5`}>
          <TextWrapperWhite>AMount 43030.2</TextWrapperWhite>
          <TextWrapperWhite>
            Type <TextWrapper style={tw`text-[#E5770E]`}>839883</TextWrapper>
          </TextWrapperWhite>
        </View>
        <View style={tw`flex-col gap-y-0.5`}>
          <TextWrapperWhite>18-06-20</TextWrapperWhite>
          <TextWrapperWhite>12:43:30</TextWrapperWhite>
        </View>
      </View>
      <View style={tw`my-3 flex-row items-center justify-between`}>
        <View style={tw`flex-col gap-y-0.5`}>
          <TextWrapperWhite fontWeight="bold">ETH</TextWrapperWhite>
          <TextWrapperWhite
            style={tw`bg-green-200 text-green-600 rounded-md text-center`}
          >
            Success
          </TextWrapperWhite>
          <TextWrapperWhite>ID 839883</TextWrapperWhite>
        </View>
        <View style={tw`flex-col gap-y-0.5`}>
          <TextWrapperWhite>AMount 43030.2</TextWrapperWhite>
          <TextWrapperWhite>
            Type <TextWrapper style={tw`text-[#E5770E]`}>839883</TextWrapper>
          </TextWrapperWhite>
        </View>
        <View style={tw`flex-col gap-y-0.5`}>
          <TextWrapperWhite>18-06-20</TextWrapperWhite>
          <TextWrapperWhite>12:43:30</TextWrapperWhite>
        </View>
      </View>
      <View style={tw`my-3 flex-row items-center justify-between`}>
        <View style={tw`flex-col gap-y-0.5`}>
          <TextWrapperWhite fontWeight="bold">ETH</TextWrapperWhite>
          <TextWrapperWhite
            style={tw`bg-green-200 text-green-600 rounded-md text-center`}
          >
            Success
          </TextWrapperWhite>
          <TextWrapperWhite>ID 839883</TextWrapperWhite>
        </View>
        <View style={tw`flex-col gap-y-0.5`}>
          <TextWrapperWhite>AMount 43030.2</TextWrapperWhite>
          <TextWrapperWhite>
            Type <TextWrapper style={tw`text-[#E5770E]`}>839883</TextWrapper>
          </TextWrapperWhite>
        </View>
        <View style={tw`flex-col gap-y-0.5`}>
          <TextWrapperWhite>18-06-20</TextWrapperWhite>
          <TextWrapperWhite>12:43:30</TextWrapperWhite>
        </View>
      </View>
      <View style={tw`my-3 flex-row items-center justify-between`}>
        <View style={tw`flex-col gap-y-0.5`}>
          <TextWrapperWhite fontWeight="bold">ETH</TextWrapperWhite>
          <TextWrapperWhite
            style={tw`bg-green-200 text-green-600 rounded-md text-center`}
          >
            Success
          </TextWrapperWhite>
          <TextWrapperWhite>ID 839883</TextWrapperWhite>
        </View>
        <View style={tw`flex-col gap-y-0.5`}>
          <TextWrapperWhite>AMount 43030.2</TextWrapperWhite>
          <TextWrapperWhite>
            Type <TextWrapper style={tw`text-[#E5770E]`}>839883</TextWrapper>
          </TextWrapperWhite>
        </View>
        <View style={tw`flex-col gap-y-0.5`}>
          <TextWrapperWhite>18-06-20</TextWrapperWhite>
          <TextWrapperWhite>12:43:30</TextWrapperWhite>
        </View>
      </View>
      <View style={tw`my-3 flex-row items-center justify-between`}>
        <View style={tw`flex-col gap-y-0.5`}>
          <TextWrapperWhite fontWeight="bold">ETH</TextWrapperWhite>
          <TextWrapperWhite
            style={tw`bg-green-200 text-green-600 rounded-md text-center`}
          >
            Success
          </TextWrapperWhite>
          <TextWrapperWhite>ID 839883</TextWrapperWhite>
        </View>
        <View style={tw`flex-col gap-y-0.5`}>
          <TextWrapperWhite>AMount 43030.2</TextWrapperWhite>
          <TextWrapperWhite>
            Type <TextWrapper style={tw`text-[#E5770E]`}>839883</TextWrapper>
          </TextWrapperWhite>
        </View>
        <View style={tw`flex-col gap-y-0.5`}>
          <TextWrapperWhite>18-06-20</TextWrapperWhite>
          <TextWrapperWhite>12:43:30</TextWrapperWhite>
        </View>
      </View>
    </ScrollView>
  );
};
