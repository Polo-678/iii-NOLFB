import { Image, StyleSheet, Platform, Pressable } from "react-native";
import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import React from "react";
import { Button, View, Text, Alert } from "react-native";
import { Link } from "expo-router";

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">NOLFB</ThemedText>
      </ThemedView>

      <View>
        <Link href="/(tabs)/Homescreen" style={styles.Course2}>
          Continue
        </Link>
      </View>

      <Text>
        NOLFB stands for No One Left Behind. This is an android project
        developed by STEM 8A.
      </Text>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  Course2: {
    color: "#000000", // Classic link blue
    backgroundColor: "#49416D",
    width: 100,
    borderRadius: 10,
  },

  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
