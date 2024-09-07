import { Pressable, View } from "react-native"
import AntDesign from '@expo/vector-icons/AntDesign';
import { router } from "expo-router";
import { TextWrapper } from "./textWrapper";
import tw from 'twrnc'
export const BackButton=()=>{
    return (
        <Pressable onPress={()=>router.back()} style={tw `flex-row items-center gap-x-3`}>
         <AntDesign name="arrowleft" size={20} color="black" />
         <TextWrapper style={tw `text-lg`}>Back</TextWrapper>
        </Pressable>
    )
}