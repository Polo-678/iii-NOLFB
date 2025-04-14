import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert, StyleSheet, Pressable,TouchableOpacity } from "react-native";
import { db } from "../../../src/firebase/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { Link } from "expo-router";

export default function TeacherScreen() {
  const [question, setQuestion] = useState("");
  const [optionA, setOptionA] = useState("");
  const [optionB, setOptionB] = useState("");
  const [optionC, setOptionC] = useState("");
  const [optionD, setOptionD] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");



  const handleAddQuestion = async () => {

    const questionData = {
      question,
      options: { A: optionA, B: optionB, C: optionC, D: optionD },
      correctAnswer,
    };


    if (!question || !optionA || !optionB || !optionC || !optionD || !correctAnswer) {
      alert("All fields are required. Please input all the necessary information.");
      return;
    } else if (!["A", "B", "C", "D"].includes(correctAnswer)) {
      alert("Invalid answer. Please select A, B, C, or D.");
    } else {
      try {
        const docRef = await addDoc(collection(db, "Post-test_2"), questionData);
        console.log(docRef.id)
        alert("Successfully added the question");
        setQuestion("");
        setOptionA("");
        setOptionB("");
        setOptionC("");
        setOptionD("");
        setCorrectAnswer("");
      } catch (error) {
        alert("Please check all details, error adding the question.");
      }
    }
    
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add a Question</Text>
      <TextInput style={styles.input} placeholder="Question" placeholderTextColor="blue" value={question} onChangeText={setQuestion} />
      <TextInput style={styles.input} placeholder="Option A" placeholderTextColor="blue" value={optionA} onChangeText={setOptionA} />
      <TextInput style={styles.input} placeholder="Option B" placeholderTextColor="blue" value={optionB} onChangeText={setOptionB} />
      <TextInput style={styles.input} placeholder="Option C" placeholderTextColor="blue" value={optionC} onChangeText={setOptionC} />
      <TextInput style={styles.input} placeholder="Option D" placeholderTextColor="blue" value={optionD} onChangeText={setOptionD} />
      <TextInput style={styles.input} placeholder="Correct Answer (A, B, C, or D)" placeholderTextColor="blue" value={correctAnswer} onChangeText={setCorrectAnswer} />
      
      <Pressable style={styles.button} onPress={handleAddQuestion}>
        <Text style={styles.buttonText}>Submit question</Text>
      </Pressable>

      <Link href="/dashboardchoices/dashboardT2" replace asChild>
                                <TouchableOpacity style={styles.button1}>
                                  <Text style={styles.buttonText} >Return to Course 2</Text>
                                </TouchableOpacity>
                              </Link>
                           
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#0962ea"
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
    color: "white"
  },
  input: {
    width: "100%",
    padding: 12,
    borderRadius: 10,
    backgroundColor: "#fffdfb",
    marginBottom: 15,
    color: "blue"
  },
  button: {
    marginTop: 10,
    backgroundColor: "#234c63",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    width: "100%",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#ffff",  
  },
  button1: {
    marginTop: 10,
    backgroundColor: "#632A23",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    width: "100%",
  },
});
