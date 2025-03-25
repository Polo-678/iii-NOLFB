import { View, Text, Button, Image, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Redirect, Stack, useRouter, Link } from "expo-router";
import { SignedIn, SignedOut, useUser, useAuth } from "@clerk/clerk-expo";
import { useEffect, useState } from "react";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import React from "react";

export default function StudentDashboard() {
  const Tab = createBottomTabNavigator();

  return (
    <View>
      <Text>Welcome teachers</Text>
      <Link href="/courses/Homescreenteachers">
        <Image
          source={require("@/assets/images/coure3.png")}
          style={styles.image}
        />
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 400, // Fixed width
    height: 400, // Fixed height
    resizeMode: "contain", // Ensures the image scales properly
  },
});
