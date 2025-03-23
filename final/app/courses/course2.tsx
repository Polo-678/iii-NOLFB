import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";
import React from "react";

export default function Course2() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>COURSE 2</Text>
      <View>
        <Link href="/courses/course1">Go back to course 1</Link>
        <Link href="/courses/course3">Go to course 3</Link>
        <Link href="/courses/Homescreen">Go Back to Home</Link>
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
