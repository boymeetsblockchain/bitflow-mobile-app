import { View, Text } from "react-native";
import { Header } from "../../components/header";
import tw from "twrnc";
import { SafeViewComponent } from "../../components/safeViewComponent";
import { Button, PasswordInputComp } from "../../components";
export default function SecurityPage() {
  return (
    <SafeViewComponent>
      <Header home={false} title="ChangePassword" />
      <View style={tw`gap-y-6 `}>
        <PasswordInputComp
          value=""
          onChange={() => {}}
          placeholder="Input Old Pin"
        />
        <PasswordInputComp
          value=""
          onChange={() => {}}
          placeholder="Input New Pin"
        />
        <PasswordInputComp
          value=""
          onChange={() => {}}
          placeholder="Confirm New Pin"
        />
        <Button title="ChangePassword" />
      </View>
    </SafeViewComponent>
  );
}
