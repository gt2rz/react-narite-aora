import { View, Text, Image } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import TabIcon from "@/components/TabIcon";

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false, // Hide the label
          tabBarActiveTintColor: "#FFA001", // Active color
          tabBarInactiveTintColor: "#CDCDE0", // Inactive color
          tabBarStyle: {
            backgroundColor: "#161622", // Background color
            borderTopWidth: 1, // Border top width
            borderTopColor: "#232533", // Border top color
            height: 84, // Height
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon="home"
                color={color}
                name="Home"
                focused={focused}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="create"
          options={{
            title: "Create",
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon="plus-circle"
                color={color}
                name="Create"
                focused={focused}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="bookmark"
          options={{
            title: "Bookmark",
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon="bookmark"
                color={color}
                name="Bookmark"
                focused={focused}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon="person"
                color={color}
                name="Profile"
                focused={focused}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;
