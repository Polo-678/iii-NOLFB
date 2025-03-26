import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function Course3() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Papaplitan toh</Text>
      <View>
        <Link href="/courses/course1/course1">Go back to course 1</Link>
        <Link href="/courses/course2/course2">Go to course 2 </Link>
         <Link href="/courses/course3/quizgametest3">Answer activity</Link>
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
