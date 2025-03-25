import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const about_us = () => {
  console.log("nandito ako sa about us");
  const Tab = createBottomTabNavigator();

  return (
    <View>
      <Text>about_us</Text>
    </View>
  );
};

export default about_us;
