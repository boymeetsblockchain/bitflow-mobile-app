import React, { useState } from 'react';
import { Text, TextInput, View, TouchableOpacity, StyleSheet, KeyboardTypeOptions } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import tw from 'twrnc';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Define the props type for the InputComp component
interface InputCompProps {
  label?: string;
  placeholder?: string;
  placeholderTextColor?: string;
  keyboardType?: KeyboardTypeOptions; // Correct type for keyboardType
  inputClass?: string;
  labelClass?: string;
}

// Define the props type for the SelectInputComp component
interface SelectInputCompProps extends InputCompProps {
  data: { icon?: string; title: string }[]; // Data structure for dropdown items
  labelClass?: string;
}

// InputComp functional component
export const InputComp: React.FC<InputCompProps> = ({
  label,
  placeholder,
  placeholderTextColor = "#C6C6C6",
  keyboardType, // Optional, default is undefined
  inputClass = "", // Default to an empty string if not provided
  labelClass,
}) => {
  return (
    <View style={styles.container}>
      {label && <Text style={tw`text-white py-2.5 capitalize ${labelClass ?? ""}`}>{label}</Text>}
      <TextInput
        style={[tw`bg-white h-11.5 rounded-xl px-4`, inputClass ? tw`${inputClass}` : {}]} // Handle conditional styling
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        keyboardType={keyboardType} // Properly typed
      />
    </View>
  );
};

// PasswordInputComp functional component with password visibility toggle
export const PasswordInputComp: React.FC<Omit<InputCompProps, 'keyboardType'>> = ({
  label,
  placeholder,
  placeholderTextColor = "#C6C6C6",
  inputClass = "",
}) => {
  const [showPass, setShowPass] = useState(false); // State to toggle password visibility

  return (
    <View style={styles.container}>
      {label && <Text style={tw`text-white py-2.5 capitalize`}>{label}</Text>}
      <View style={tw`relative`}>
        <TextInput
          style={[tw`bg-white h-11.5 rounded-xl px-4`, inputClass ? tw`${inputClass}` : {}]}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          secureTextEntry={!showPass} // Toggle password visibility
        />
        <TouchableOpacity
          style={styles.eyeIcon}
          onPress={() => setShowPass(!showPass)} // Toggle password visibility
        >
          <Text style={tw`text-gray-500`}>{showPass ? 'Hide' : 'Show'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// SelectInputComp functional component with dropdown functionality
export const SelectInputComp: React.FC<SelectInputCompProps> = ({
  label,
  placeholder,
  data,
  inputClass = "",
  labelClass,
}) => {
  return (
    <View style={styles.container}>
      {label && <Text style={tw`text-white py-2.5 capitalize ${labelClass ?? ""}`}>{label}</Text>}
      <SelectDropdown
        data={data}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index);
        }}
        renderButton={(selectedItem, isOpened) => (
          <View style={[tw`bg-white h-11.5 rounded-xl px-4 flex-row items-center justify-between`, inputClass ? tw`${inputClass}` : {}]}>
            {selectedItem && (
              <Icon name={selectedItem.icon} style={styles.dropdownButtonIconStyle} />
            )}
            <Text style={styles.dropdownButtonTxtStyle}>
              {(selectedItem && selectedItem.title) || placeholder}
            </Text>
            <Icon name={isOpened ? 'chevron-up' : 'chevron-down'} style={styles.dropdownButtonArrowStyle} />
          </View>
        )}
        renderItem={(item, index, isSelected) => (
          <View style={[styles.dropdownItemStyle, isSelected && { backgroundColor: '#D2D9DF' }]}>
            <Icon name={item.icon} style={styles.dropdownItemIconStyle} />
            <Text style={styles.dropdownItemTxtStyle}>{item.title}</Text>
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
