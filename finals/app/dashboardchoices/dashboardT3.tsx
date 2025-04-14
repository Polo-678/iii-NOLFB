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
            </Text>
          </View>  

      <Link href="/courses/course3/quiz_edit3"  replace asChild>
        <TouchableOpacity style={styles.courseButton3}>
          <Text style={styles.buttonText}>Add questions for Course 3</Text>
        </TouchableOpacity>
      </Link>

      <Link href="/courses/course3/course3(teachers)"  replace asChild>
        <TouchableOpacity style={styles.courseButton3}>
          <Text style={styles.buttonText}>Edit questions for Course 3</Text>
        </TouchableOpacity>
      </Link>
      <Link href="/courses/course3/test_results3"  replace asChild>
        <TouchableOpacity style={styles.courseButton3}>
          <Text style={styles.buttonText}>View scores Course 3</Text>
        </TouchableOpacity>
      </Link>

      <Link href="/courses/course3/post_testquestions3"  replace asChild>
        <TouchableOpacity style={styles.courseButton3}>
          <Text style={styles.buttonText}>Add questions for Post-test 3</Text>
        </TouchableOpacity>
      </Link>

        <Link href="/courses/course3/post_test3edit"  replace asChild>
        <TouchableOpacity style={styles.courseButton3}>
          <Text style={styles.buttonText}> Edit Questions for Post-test 3</Text>
        </TouchableOpacity>
      </Link>

      <Link href="/courses/course3/post_testresults3"  replace asChild>
        <TouchableOpacity style={styles.courseButtonEnder}>
          <Text style={styles.buttonText}> View Scores for Post-test 3</Text>
        </TouchableOpacity>
      </Link>

     

      <Link href="/(main)/Homescreenteachers"  replace asChild>
                <TouchableOpacity style={styles.return}>
                  <Text style={styles.buttonText}>Return to Dashnoard</Text>
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
    borderRadius: 50,
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
    borderRadius: 50,
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
    borderRadius: 50,
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
    borderRadius: 50,
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
    backgroundColor: "#e76f51",
    borderRadius: 50,
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
    borderRadius: 50,
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
    borderRadius: 50,
    alignItems: "center",
    marginTop: 12,
  },
  buttonText: {
    color: "#ffffff",
    fontWeight: "600",
    fontSize: 16,
  },
});
