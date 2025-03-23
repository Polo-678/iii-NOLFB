import { Image, StyleSheet, Platform, Pressable } from "react-native";
import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import React from "react";
import { Button, View, Text, Alert } from "react-native";
import { Link } from "expo-router";
import { Tabs } from "expo-router";
import { tokenCache } from "@/app/util/cache";
import { ClerkProvider } from "@clerk/clerk-expo";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

export default function HomeScreen()
 {
  return (
    
    <ThemedView style={styles.titleContainer}>
      <ThemedText type="title">NOLFB</ThemedText>
      <Text> Welcome to NOLFB </Text>
    </ThemedView>
  );
}
const Tab = createBottomTabNavigator();


const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  reactLogo: {
    alignItems: "center",
    height: 200,
    width: 290,
    position: "absolute",
    bottom: 0,
    left: 0,
  },
  Continue: {
    alignItems: "center",
    marginVertical: 10, // Adds spacing
  },
  image: {
    width: 400, // Fixed width
    height: 400, // Fixed height
    resizeMode: "contain", // Ensures the image scales properly
  },
  textContainer: {
    position: "absolute", // Keeps the text in place
    bottom: 120, // Adjust based on layout
    left: 20,
    right: 20,
    alignItems: "center",
  },
  Text: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: 14,
    width: "90%", // Prevents text from stretching
  },
});
