import { View, Text, TouchableOpacity, Switch } from "react-native";
import { SafeViewComponent } from "../../components/safeViewComponent";
import { Header } from "../../components/header";
import { TextWrapperWhite } from "../../components/textWrapper";
import Feather from "@expo/vector-icons/Feather";
import tw from "twrnc";
import { useState } from "react";
import { router } from "expo-router";

export default function SettingsPage() {
  const [isDarkTheme, setIsDarkTheme] = useState(false); // State for theme toggle
  const [isPushEnabled, setIsPushEnabled] = useState(false); // State for push notifications toggle

  const toggleTheme = () => setIsDarkTheme((prev) => !prev);
  const togglePushNotifications = () => setIsPushEnabled((prev) => !prev);

  return (
    <SafeViewComponent>
      <Header home={false} title="Settings" />
      <View>
        <View style={tw`gap-y-4 mt-4`}>
          {/* Accounts */}
          <TouchableOpacity
            onPress={() => router.push("/settings/accounts")}
            style={tw`flex-row justify-between items-center border border-white p-3 rounded-lg`}
          >
            <TextWrapperWhite>Accounts</TextWrapperWhite>
            <Feather name="chevron-right" size={24} color="white" />
          </TouchableOpacity>

          {/* Security */}
          <TouchableOpacity
            onPress={() => router.push("/settings/security")}
            style={tw`flex-row justify-between items-center border border-white p-3 rounded-lg`}
          >
            <TextWrapperWhite>Security</TextWrapperWhite>
            <Feather name="chevron-right" size={24} color="white" />
          </TouchableOpacity>

          {/* Language */}
          <TouchableOpacity
            onPress={() => router.push("/settings/language")}
            style={tw`flex-row justify-between items-center border border-white p-3 rounded-lg`}
          >
            <TextWrapperWhite>Language</TextWrapperWhite>
            <Feather name="chevron-right" size={24} color="white" />
          </TouchableOpacity>

          {/* Change Theme */}
          <View
            style={tw`flex-row justify-between items-center border border-white p-3 rounded-lg`}
          >
            <TextWrapperWhite>Change Theme</TextWrapperWhite>
            <Switch
              trackColor={{ false: "#767577", true: "#E5770E" }}
              thumbColor={isDarkTheme ? "#f4f3f4" : "#f4f3f4"}
              onValueChange={toggleTheme}
              value={isDarkTheme}
            />
          </View>

          {/* Enable Push Notifications */}
          <View
            style={tw`flex-row justify-between items-center border border-white p-3 rounded-lg`}
          >
            <TextWrapperWhite>Enable Push Notifications</TextWrapperWhite>
            <Switch
              trackColor={{ false: "#767577", true: "#E5770E" }}
              thumbColor={isPushEnabled ? "#f4f3f4" : "#f4f3f4"}
              onValueChange={togglePushNotifications}
              value={isPushEnabled}
            />
          </View>

          {/* Price Alert */}
          <TouchableOpacity
            onPress={() => router.push("/settings/price")}
            style={tw`flex-row justify-between items-center border border-white p-3 rounded-lg`}
          >
            <TextWrapperWhite>Price Alert</TextWrapperWhite>
            <Feather name="chevron-right" size={24} color="white" />
          </TouchableOpacity>

          {/* Log Out and Delete Account */}
          <View>
            <TextWrapperWhite
              onPress={() => router.push("/")}
              fontWeight="extraBold"
              style={tw`p-3 text-xl text-[#E5770E] text-center`}
            >
              Log Out
            </TextWrapperWhite>
            <TextWrapperWhite
              fontWeight="extraBold"
              style={tw`p-3 text-xl text-red-500 text-center`}
            >
              Delete Account
            </TextWrapperWhite>
          </View>
        </View>
      </View>
    </SafeViewComponent>
  );
}
