import { View, Text, Button } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Redirect, Stack, useRouter, Link } from "expo-router";
import { SignedIn, SignedOut, useUser, useAuth } from "@clerk/clerk-expo";
import { useEffect, useState } from "react";

export default function StudentDashboard() {
  const Tab = createBottomTabNavigator();

  return (
    <View>
      <Text>Welcome teachers!</Text>
    </View>
  );
}
