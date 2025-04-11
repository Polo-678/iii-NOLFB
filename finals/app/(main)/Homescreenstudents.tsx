import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Link } from "expo-router";
import React from "react";

export default function HomeScreenstudents() {
  return (
    <ThemedView style={styles.container}>
      {/* ScrollView to allow scrolling if content overflows */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Header Section */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>NOLFB: NO ONE LEFT BEHIND</Text>
          <Text style={styles.headerDescription}>
            Description and purpose of NOLFB application
          </Text>
        </View>

        {/* Course Buttons */}
        <Link href="/courses/course1/course1" asChild>
          <TouchableOpacity style={styles.courseButton}>
            <Text style={styles.buttonText}>COURSE 1</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/courses/course2/course2" asChild>
          <TouchableOpacity style={styles.courseButton}>
            <Text style={styles.buttonText}>COURSE 2</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/courses/course3/course3" asChild>
          <TouchableOpacity style={styles.courseButton}>
            <Text style={styles.buttonText}>COURSE 3</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/courses/course4/course4" asChild>
          <TouchableOpacity style={styles.courseButton}>
            <Text style={styles.buttonText}>COURSE 4</Text>
          </TouchableOpacity>
          </Link>

        <Link href="/(tabs)/login" asChild>
          <TouchableOpacity style={styles.courseButton}>
            <Text style={styles.buttonText}>Return to Login</Text>
          </TouchableOpacity>
        </Link>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#E6E6E6", // Light grey background
  },
  scrollContainer: {
    flexGrow: 1, // Allow scrolling if the content is larger than the screen
    alignItems: "center", // Center all content
    justifyContent: "flex-start", // Keep content aligned at the top
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
    backgroundColor: "red",
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 10,
    alignItems: "center",
    alignSelf: "center",
    maxWidth: 400,
    width: "100%",
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center"
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