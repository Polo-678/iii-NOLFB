import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function Course3() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Papaplitan toh</Text>
      <View>
        <Link href="/courses/course1">Go back to course 1</Link>
        <Link href="/courses/course2">Go to course 2 </Link>
        <Link href="/(tabs)/Homescreen">Go Back to Home</Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#008000",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
  },
});
