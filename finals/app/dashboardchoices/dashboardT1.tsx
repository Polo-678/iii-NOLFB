import { StyleSheet, View, Text, TouchableOpacity, ScrollView, } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Link } from "expo-router";
import React from "react";

export default function HomeScreenteachers() {
  return (
      <ThemedView style={styles.container}>
        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
          {/* Header Section */}
          <View style={styles.header}>
            <Text style={styles.headerTitle}>NOLFB: NO ONE LEFT BEHIND (Teacher's Dashboard)</Text>
            <Text style={styles.headerDescription}>
              Description and purpose of NOLFB application
            </Text>
          </View>

      {/* Course Buttons */}
      <Link href="/courses/course1/quiz_edit1" asChild>
        <TouchableOpacity style={styles.courseButton1}>
          <Text style={styles.buttonText}>Add questions for Course 1</Text>
        </TouchableOpacity>
      </Link>

      <Link href="/courses/course1/course1(teachers)" asChild>
        <TouchableOpacity style={styles.courseButton1}>
          <Text style={styles.buttonText}>Edit questions for Course 1</Text>
        </TouchableOpacity>
      </Link>

      <Link href="/courses/course1/test_results1" asChild>
        <TouchableOpacity style={styles.courseButton1}>
          <Text style={styles.buttonText}>view scores Course 1</Text>
        </TouchableOpacity>
      </Link>

      <Link href="/courses/course1/post_testquestions1" asChild>
        <TouchableOpacity style={styles.courseButton1}>
          <Text style={styles.buttonText}>Add questions for Post-test 1</Text>
        </TouchableOpacity>
      </Link>

        <Link href="/courses/course1/post_test1edit" asChild>
        <TouchableOpacity style={styles.courseButton1}>
          <Text style={styles.buttonText}> Edit Questions for Post-test 1</Text>
        </TouchableOpacity>
      </Link>

      <Link href="/courses/course1/post_testresults1" asChild>
        <TouchableOpacity style={styles.courseButtonEnder}>
          <Text style={styles.buttonText}> View Scores for Post-test 1</Text>
        </TouchableOpacity>
      </Link>

      

      <Link href="/(tabs)/login" asChild>
          <TouchableOpacity style={styles.return}>
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
    padding: 24,
    backgroundColor: "#fef6e4",
  },
  scrollView: {
    flex: 1,
    width: "100%",
  },
  header: {
    width: "100%",
    padding: 24,
    backgroundColor: "#1d3557",
    borderRadius: 20,
    marginBottom: 24,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 6,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 6,
    textAlign: "center",
  },
  headerDescription: {
    fontSize: 14,
    color: "#a8dadc",
    textAlign: "center",
  },
  courseButton1: {
    backgroundColor: "#2a9d8f",
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 16,
    alignItems: "center",
    alignSelf: "center",
    maxWidth: 400,
    width: "100%",
    marginVertical: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  courseButton2: {
    backgroundColor: "#f4a261",
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 16,
    alignItems: "center",
    alignSelf: "center",
    maxWidth: 400,
    width: "100%",
    marginVertical: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  courseButton3: {
    backgroundColor: "#e76f51",
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 16,
    alignItems: "center",
    alignSelf: "center",
    maxWidth: 400,
    width: "100%",
    marginVertical: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  courseButton4: {
    backgroundColor: "#e63946",
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 16,
    alignItems: "center",
    alignSelf: "center",
    maxWidth: 400,
    width: "100%",
    marginVertical: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  courseButtonEnder: {
    width: "100%",
    padding: 16,
    backgroundColor: "#f1faee",
    borderRadius: 16,
    alignItems: "center",
    marginTop: 12,
    marginBottom: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  return: {
    width: "100%",
    padding: 16,
    backgroundColor: "#adb5bd",
    borderRadius: 16,
    alignItems: "center",
    marginTop: 12,
    marginBottom: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  nextButton: {
    width: "100%",
    padding: 16,
    backgroundColor: "#adb5bd",
    borderRadius: 16,
    alignItems: "center",
    marginTop: 12,
  },
  buttonText: {
    color: "#ffffff",
    fontWeight: "600",
    fontSize: 16,
  },
});
