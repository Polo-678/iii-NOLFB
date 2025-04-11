import { View, Text, StyleSheet, TouchableOpacity} from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function Course3() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Papaplitan toh</Text>
      <View>
       
        <Link href="/courses/course2/course2"asChild> 
        <TouchableOpacity style={styles.courseButtonEnder}>
        <Text style={styles.headerTitle}>Go back to course 2</Text>
        </TouchableOpacity>
        </Link>

        <Link href="/courses/course4/course4" asChild>
        <TouchableOpacity style={styles.courseButtonEnder}>
        <Text style={styles.headerTitle}>Go to course 4</Text> 
        </TouchableOpacity>
        </Link>

         <Link href="/courses/course3/quizgametest3" asChild>
         <TouchableOpacity style={styles.courseButtonEnder}>
         <Text style={styles.headerTitle}>Answer activity</Text>
         </TouchableOpacity>
         </Link>

           <Link href="/courses/course3/post_test3" asChild>
                          <TouchableOpacity style={styles.courseButtonEnder}>
                          <Text style={styles.buttonText}>answer post-test </Text>
                          </TouchableOpacity>
                          </Link>
        
        <Link href="/(main)/Homescreenstudents" asChild>  
        <TouchableOpacity style={styles.courseButtonEnder}>
        <Text style={styles.headerTitle}>Go Back to Home</Text>
        </TouchableOpacity>
        </Link>
      
      </View>
    </View>
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
  scrollView: {
    flex: 1,
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

  courseButtonEnder: {
    width: "100%",
    padding: 15,
    backgroundColor: "#D0D0D0", // Light grey button
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 5,
    marginBottom:30 ,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
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

