import React from "react";
import { Text, TextProps } from "react-native";

interface TextWrapperComponentProps extends TextProps {
    children: React.ReactNode;
    fontWeight?: "regular" | "bold" | "extraBold";
}

export const TextWrapper = ({
    children,
    fontWeight = "regular", 
    style,
    ...props
}: TextWrapperComponentProps) => {
    const getFontFamily = () => {
        switch (fontWeight) {
            case "bold":
                return "Poppins-Bold";
            case "extraBold":
                return "Poppins-ExtraBold";
            default:
                return "Poppins-Regular";
        }
    };

    return (
        <Text style={[{ fontFamily: getFontFamily() }, style]} {...props}>
            {children}
        </Text>
    );
};
export const TextWrapperWhite = ({
    children,
    fontWeight = "regular", 
    style,
    ...props
}: TextWrapperComponentProps) => {
    const getFontFamily = () => {
        switch (fontWeight) {
            case "bold":
                return "Poppins-Bold";
            case "extraBold":
                return "Poppins-ExtraBold";
            default:
                return "Poppins-Regular";
        }
    };

    return (
        <Text style={[{ fontFamily: getFontFamily() , color:"#fff"}, style]} {...props}>
            {children}
        </Text>
    );
};
