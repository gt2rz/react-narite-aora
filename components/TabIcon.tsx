import { View, Text } from "react-native";
import React from "react";
import { Octicons } from "@expo/vector-icons";

type TabIconProps = {
  icon: string;
  color: string;
  name: string;
  focused: boolean;
};

const TabIcon = ({ icon, color, name, focused }: TabIconProps) => {
  return (
    <View className="items-center justify-center gap-2">
      <Octicons name={icon} size={24} color={color} />
      <Text
        className={`text-xs ${focused ? "font-psemibold" : "font-pregular"}`}
        style={{ color: color }}
      >
        {name}
      </Text>
    </View>
  );
};

export default TabIcon;
