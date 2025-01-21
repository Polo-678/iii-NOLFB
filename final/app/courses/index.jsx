import { View, Text } from "react-native";
import React from "react";
import { Button, Alert } from "react-native";

export default function index() {
  return (
    <View>
      <Text>Welcome!</Text>
      <Button
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
}
