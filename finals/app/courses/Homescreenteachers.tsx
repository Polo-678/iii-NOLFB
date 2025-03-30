import { StyleSheet, View, Text, Pressable, ScrollView } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Link } from "expo-router";
import React from "react";

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
       <ScrollView>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>NOLFB: NO ONE LEFT BEHIND (teacher's Dashboard)</Text>
        <Text style={styles.headerDescription}>
          Description and purpose of NOLFB application
        </Text>
      </View>

      {/* Course Buttons */}
      <Link href="/courses/course1/quiz_edit1" >
        <Pressable style={styles.courseButton}>
          <Text style={styles.buttonText}>Add questions for Course 1</Text>
        </Pressable>
      </Link>

      <Link href="/courses/course1/course1(teachers)" >
        <Pressable style={styles.courseButton}>
          <Text style={styles.buttonText}>Edit questions for Course 1</Text>
        </Pressable>
      </Link>

      <Link href="/courses/course1/test_results1" >
        <Pressable style={styles.courseButton}>
          <Text style={styles.buttonText}>view scores Course 1</Text>
        </Pressable>
      </Link>

      <Link href="/courses/course2/quiz_edit2">
        <Pressable style={[styles.courseButton, styles.darkerButton]}>
          <Text style={styles.buttonText}>Add questions for Course 2</Text>
        </Pressable>
      </Link>

      <Link href="/courses/course2/course2(teachers)" >
        <Pressable style={styles.courseButton}>
          <Text style={styles.buttonText}>Edit questions for Course 2</Text>
        </Pressable>
      </Link>

      <Link href="/courses/course2/test_results2" >
        <Pressable style={styles.courseButton}>
          <Text style={styles.buttonText}>view scores Course 2</Text>
        </Pressable>
      </Link>

      <Link href="/courses/course3/quiz_edit3">
        <Pressable style={styles.courseButton}>
          <Text style={styles.buttonText}>Add questions for Course 3</Text>
        </Pressable>
      </Link>

      <Link href="/courses/course3/course3(teachers)" >
        <Pressable style={styles.courseButton}>
          <Text style={styles.buttonText}>Edit questions for Course 3</Text>
        </Pressable>
      </Link>
      <Link href="/courses/course3/test_results3" >
        <Pressable style={styles.courseButton}>
          <Text style={styles.buttonText}>view scores Course 3</Text>
        </Pressable>
      </Link>

      <Link href="/courses/course4/quiz_edit4">
        <Pressable style={styles.courseButton}>
          <Text style={styles.buttonText}>Add questions for Course 4</Text>
        </Pressable>
      </Link>

      <Link href="/courses/course4/course4(teachers)" >
        <Pressable style={styles.courseButton}>
          <Text style={styles.buttonText}>Edit questions for Course 4</Text>
        </Pressable>
      </Link>
      <Link href="/courses/course4/test_results4" >
        <Pressable style={styles.courseButton}>
          <Text style={styles.buttonText}>view scores Course 4</Text>
        </Pressable>
      </Link>

      <Link href="/(tabs)/login">
        <Pressable style={styles.courseButton}>
          <Text style={styles.buttonText}>Return to Login</Text>
        </Pressable>
      </Link>
      </ScrollView>
    </ThemedView>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#E6E6E6", // Light grey background
  },
  header: {
    width: "100%",
    padding: 20,
    backgroundColor: "#B0B0B0", // Grey header
    borderRadius: 10,
    marginBottom: 20,
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  headerDescription: {
    fontSize: 12,
    color: "#333",
  },
  courseButton: {
    width: "100%",
    padding: 15,
    backgroundColor: "#D0D0D0", // Light grey button
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 5,
  },
  darkerButton: {
    backgroundColor: "#A0A0A0", // Medium grey
  },
  darkestButton: {
    backgroundColor: "#808080", // Darker grey
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  nextButton: {
    width: "100%",
    padding: 15,
    backgroundColor: "#C0C0C0", // Light grey similar to course buttons
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
});
