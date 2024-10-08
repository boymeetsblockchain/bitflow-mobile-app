import React, { useState } from 'react';
import { TextInput, View, TouchableOpacity, StyleSheet, KeyboardTypeOptions } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import tw from 'twrnc';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TextWrapper } from './textWrapper';

// Define the props type for the InputComp component
interface InputCompProps {
  label?: string;
  placeholder?: string;
  placeholderTextColor?: string;
  keyboardType?: KeyboardTypeOptions;
  inputClass?: string;
  labelClass?: string;
  value: string;
  onChange: (text: string) => void; // onChange function prop
}

// Define the props type for the SelectInputComp component
interface SelectInputCompProps extends InputCompProps {
  data: { icon?: string; title: string }[]; 
}

// InputComp functional component
export const InputComp: React.FC<InputCompProps> = ({
  label,
  placeholder,
  placeholderTextColor = "#000000",
  keyboardType,
  inputClass = "",
  labelClass,
  value,
  onChange, // Handle the onChange prop
}) => {
  return (
    <View style={styles.container}>
      {label && <TextWrapper style={tw`text-white py-2.5 text-base capitalize ${labelClass ?? ""}`}>{label}</TextWrapper>}
      <TextInput
        style={[tw`bg-white h-11.5 rounded-xl px-4`, inputClass ? tw`${inputClass}` : {}]} // Handle conditional styling
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        keyboardType={keyboardType}
        value={value}
        onChangeText={onChange} // Use onChangeText instead of onChange for TextInput
      />
    </View>
  );
};

// PasswordInputComp functional component with password visibility toggle
export const PasswordInputComp: React.FC<Omit<InputCompProps, 'keyboardType'>> = ({
  label,
  placeholder,
  placeholderTextColor = "#000000",
  inputClass = "",
  value,
  onChange,
}) => {
  const [showPass, setShowPass] = useState(false);

  return (
    <View style={styles.container}>
      {label && <TextWrapper style={tw`text-white text-base py-2.5 capitalize`}>{label}</TextWrapper>}
      <View style={tw`relative`}>
        <TextInput
          style={[tw`bg-white h-11.5 rounded-xl px-4`, inputClass ? tw`${inputClass}` : {}]}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          secureTextEntry={!showPass}
          value={value}
          onChangeText={onChange} // Handle the onChange prop
        />
        <TouchableOpacity
          style={styles.eyeIcon}
          onPress={() => setShowPass(!showPass)}
        >
          <TextWrapper style={tw`text-gray-500`}>{showPass ? 'Hide' : 'Show'}</TextWrapper>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// SelectInputComp functional component with dropdown functionality
export const SelectInputComp: React.FC<SelectInputCompProps> = ({
  label,
  placeholder,
  value,
  data,
  inputClass = "",
  labelClass,
  onChange,
}) => {
  return (
    <View style={styles.container}>
      {label && <TextWrapper style={tw`text-white text-base py-2.5 capitalize ${labelClass ?? ""}`}>{label}</TextWrapper>}
      <SelectDropdown 

      defaultValue={data[0]}
        data={data}
        onSelect={(selectedItem, index) => {
          onChange(selectedItem.title); 
        }}
      
        renderButton={(selectedItem, isOpened) => (
          <View style={[tw`bg-white h-11.5 rounded-xl px-4 flex-row items-center justify-between`, inputClass ? tw`${inputClass}` : {}]}>
            {selectedItem && (
              <Icon name={selectedItem.icon} style={styles.dropdownButtonIconStyle} />
            )}
            <TextWrapper style={styles.dropdownButtonTxtStyle}>
              {(selectedItem && selectedItem.title) || placeholder}
            </TextWrapper>
            <Icon name={isOpened ? 'chevron-up' : 'chevron-down'} style={styles.dropdownButtonArrowStyle} />
          </View>
        )}
        renderItem={(item, index, isSelected) => (
          <View style={[styles.dropdownItemStyle, isSelected && { backgroundColor: '#D2D9DF' }]}>
            <Icon name={item.icon} style={styles.dropdownItemIconStyle} />
            <TextWrapper style={styles.dropdownItemTxtStyle}>{item.title}</TextWrapper>
          </View>
        )}
        showsVerticalScrollIndicator={false}
        dropdownStyle={styles.dropdownMenuStyle}
      />
    </View>
  );
};

// Styles for the components
const styles = StyleSheet.create({
  container: {
    marginBottom: 0, // Add spacing between input fields
  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
    top: '50%',
    transform: [{ translateY: -10 }],
    zIndex: 10,
  },
  dropdownButtonTxtStyle: {
    flex: 1,
    fontSize: 14,
    textTransform: 'capitalize',
    color: '#151E26',
  },
  dropdownButtonArrowStyle: {
    fontSize: 28,
  },
  dropdownButtonIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
  dropdownMenuStyle: {
    backgroundColor: '#E9ECEF',
    borderRadius: 8,
  },
  dropdownItemStyle: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
  },
  dropdownItemTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: '500',
    color: '#151E26',
  },
  dropdownItemIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
});
