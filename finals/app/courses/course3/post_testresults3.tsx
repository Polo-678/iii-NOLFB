import React, { useEffect, useState, } from "react";
import { View, Text, FlatList, StyleSheet, ScrollView, Pressable  } from "react-native";
import { db } from "../../firebase/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { Link } from "expo-router";
export default function TeacherScores() {
  const [scores, setScores] = useState<any[]>([]);

  useEffect(() => {
    const fetchScores = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "Post-test_3_scores"));
        const loadedScores = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setScores(loadedScores);
      } catch (error) {
        console.error("Error fetching scores:", error);
      }
    };

    fetchScores();
  }, []);

  return (
    <View style={styles.container}>
    <ScrollView>
      <Text style={styles.title}>Student Scores</Text>
      <FlatList
        data={scores}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.scoreItem}>
            <Text style={styles.studentName}>{item.student}</Text>
            <Text style={styles.score}>
              Score: {item.score} / {item.totalQuestions}
            </Text>
            <Text style={styles.timestamp}>
               {item.timestamp?.seconds
     ? new Date(item.timestamp.seconds * 1000).toLocaleString()
                  : "No timestamp available"
              }
            </Text>
          </View>
        )}
      />

      <Link href="/(tabs)/login">
              <Pressable>
                <Text >Return to Login</Text>
              </Pressable>
        </Link> 
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  scoreItem: {
    padding: 15,
    marginVertical: 5,
    backgroundColor: "#e0f7fa",
    borderRadius: 10,
  },
  studentName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  score: {
    fontSize: 16,
    color: "#00796b",
  },
  timestamp: {
    fontSize: 14,
    color: "#666",
  },
});
