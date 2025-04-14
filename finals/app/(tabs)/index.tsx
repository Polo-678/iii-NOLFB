import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function HomeScreen() {
  console.log("nandito ako sa home");

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.overlay}>
        <Text style={styles.welcome}>📚 Welcome to NOLFB!</Text>
        <Text style={styles.description}>
          A quiz app for kids to help improve their reading comprehension skills in a fun way! 🧠📖
        </Text>
        <Text style={styles.instructions}>
          🚀 Get started by logging in with your Gmail account, or sign in to your existing account!
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fdf6e4", // updated soft cream background from screenshot
    padding: 20,
  },
  overlay: {
    backgroundColor: "#ffffffcc", // white with a bit of transparency
    borderRadius: 20,
    padding: 30,
    width: "100%",
    maxWidth: 400,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  welcome: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1b3254", // navy blue header text
    textAlign: "center",
    marginBottom: 15,
  },
  description: {
    fontSize: 18,
    color: "#3b3b3b",
    textAlign: "center",
    marginBottom: 15,
  },
  instructions: {
    fontSize: 16,
    color: "#4a4a4a",
    textAlign: "center",
  },
});
