import { TextWrapper } from "./textWrapper";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { View } from "react-native";
import tw from 'twrnc';

interface HeaderProps {
  title: string;
  home: boolean;
}

export const Header = ({ title, home }: HeaderProps) => {
  return (
    <View style={tw`flex-row justify-between items-center  py-2 bg-[#01041F]`}>
     
      <View style={tw`w-8`}>
        {home ? (
          <MaterialIcons name="list" color="white" size={24} />
        ) : (
          <MaterialIcons name="chevron-left" color="white" size={24} />
        )}
      </View>

      <TextWrapper style={tw`text-white text-xl`} fontWeight="bold">
        {title}
      </TextWrapper>

     
      <View style={tw`flex flex-row items-center gap-x-4 w-8 justify-end`}>
        {
            home && (
                <MaterialIcons name="compare" color="white" size={24} />
            )
        }
        {home ? (
          <MaterialIcons name="notifications-active" color="white" size={24} />
        ) : (
          <MaterialIcons name="ios-share" size={24} color="white" />
        )}
      </View>
    </View>
  );
};
