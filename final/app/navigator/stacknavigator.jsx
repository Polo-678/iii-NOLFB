import React from "react";
import { Stack } from "expo-router";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native";
import { course1 } from "../courses/course1";
import { course2 } from "../courses/course2";

export function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="course1" component={course1} />
        <Stack.Screen name="course2" component={course2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
