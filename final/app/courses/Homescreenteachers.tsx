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
        <Link href="/courses/course1/quiz_edit1">edit Course1</Link>
        <Link href="/courses/course2/quiz_edit2" style={styles.hehehhe}>
          Course2
        </Link>
        <Link href="/courses/course3/quiz_edit3">edit Course3</Link>
        <Link href="/courses/course4/quiz_edit4">edit Course4</Link>
        <Link href="/Quiz/Quiz_game">Quiz game</Link>
      </View>

      <Text>
        NOLFB stands for No One Left Behind. This is an android project
        developed by STEM 8A.
      </Text>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  hehehhe: {
    color: "#007BFF", // Classic link blue
    textDecorationLine: "underline", // Underline the link
    backgroundColor: "yellow",
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


