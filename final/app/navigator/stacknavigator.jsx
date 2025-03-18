import React from "react";
import { Stack } from "expo-router";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { course1 } from "../courses/course1";
import { course2 } from "../courses/course2";
import { course3 } from "../courses/course3";
import { student } from "../dashboard/students";
import { teachers } from "../dashboard/teacher";
import { Homescreen } from "../courses/Homescreen";
import { Quiz } from "../Quiz/Quiz_game";
const Tab = createBottomTabNavigator();

export function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="homescreen" component={Homescreen} />
        <Stack.Screen name="course1" component={course1} />
        <Stack.Screen name="course2" component={course2} />
        <Stack.Screen name="course3" component={course3} />
        <Stack.Screen name="students" component={student} />
        <Stack.Screen name="teachers" component={teachers} />
        <Stack.Screen name="Quizgame" component={Quiz} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
