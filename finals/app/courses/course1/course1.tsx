import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import { Link } from "expo-router";
import React from "react";

export default function Course1() {
  return (
    <View style={styles.container}>
      <ScrollView>
      <Text style={styles.text}>COURSE 1</Text>
      <ScrollView >
      <Text style={styles.text}>
        <ScrollView>
        </ScrollView>
      
      </Text>
</ScrollView>
      <View>
        <Link href="/courses/course2/course2">Go to course 2</Link>
        <Link href="/courses/course3/course3">Go to course 3</Link>
        <Link href="/courses/course1/quizgametest1">answer activity</Link>
        <Link href="/courses/Homescreen">Go Back to Home</Link>
      </View>
      </ScrollView>
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
