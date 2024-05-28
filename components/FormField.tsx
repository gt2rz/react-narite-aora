import {
  View,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

import { Octicons } from "@expo/vector-icons";

type FormFieldProps = {
  title: string;
  value: string;
  placeholder: string;
  handleChangeText: (e: string) => void;
  otherStyles?: string;
  type?: string;
  keyboardType?: string;
};

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  type = "text",
  ...props
}: FormFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-gray-100 font-pmedium">{title}</Text>
      <View className="border-2 border-black-200 w-full h-16 px-4 bg-black-100 rounded-2xl focus:border-secondary items-center">
        <TextInput
          className="flex-1 text-white font-psemibold text-base w-full h-full bg-transparent"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7b7b8b"
          onChangeText={handleChangeText}
          secureTextEntry={
            type.toLocaleLowerCase() === "password" && !showPassword
          }
        />

        {type.toLocaleLowerCase() === "password" && (
          <TouchableOpacity
            className="absolute right-4 justify-center items-center h-full"
            onPress={() => setShowPassword(!showPassword)}
          >
            <Octicons
              name={showPassword ? "eye-closed" : "eye"}
              size={24}
              color="#7b7b8b"
              className="w-6 h-6"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
