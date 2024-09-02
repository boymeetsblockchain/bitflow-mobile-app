import React from 'react';
import { Text, TouchableOpacity, TextStyle, ViewStyle, StyleProp } from 'react-native';
import tw from 'twrnc';

// Define props type for the Button component
interface ButtonProps {
  title: string;
  titleClass?: string;
  containerClass?: string;
  onPress?: () => void;
}

// Button component
const Button: React.FC<ButtonProps> = ({ title, titleClass, containerClass, onPress }) => {
  // Define styles
  const buttonStyle: StyleProp<ViewStyle> = tw`bg-[#E5770E] flex-row justify-center items-center py-3 rounded-xl`;
  const textStyle: StyleProp<TextStyle> = tw`text-white font-medium text-base`;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[buttonStyle, containerClass ? tw`${containerClass}` : {}]}
    >
      <Text style={[textStyle, titleClass ? tw`${titleClass}` : {}]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
