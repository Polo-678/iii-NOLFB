import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert, StyleSheet, Pressable } from "react-native";
import { db } from "../../firebase/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

export default function TeacherScreen() {
  const [question, setQuestion] = useState("");
  const [optionA, setOptionA] = useState("");
  const [optionB, setOptionB] = useState("");
  const [optionC, setOptionC] = useState("");
  const [optionD, setOptionD] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");

  const handleAddQuestion = async () => {
    if (!question || !optionA || !optionB || !optionC || !optionD || !correctAnswer) {
      alert("All fields are required. Please input all the necessary information.");
      return;
    }

    const questionData = {
      question,
      options: { A: optionA, B: optionB, C: optionC, D: optionD },
      correctAnswer,
    };

    try {
      const docRef = await addDoc(collection(db, "course2"), questionData);
      console.log(docRef.id)
      alert("Successfully added the question");
      setQuestion("");
      setOptionA("");
      setOptionB("");
      setOptionC("");
      setOptionD("");
      setCorrectAnswer("");
    } catch (error) {
      alert("Please check all details, eerror adding the question.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add a Question</Text>
      <TextInput style={styles.input} placeholder="Question" value={question} onChangeText={setQuestion} />
      <TextInput style={styles.input} placeholder="Option A" value={optionA} onChangeText={setOptionA} />
      <TextInput style={styles.input} placeholder="Option B" value={optionB} onChangeText={setOptionB} />
      <TextInput style={styles.input} placeholder="Option C" value={optionC} onChangeText={setOptionC} />
      <TextInput style={styles.input} placeholder="Option D" value={optionD} onChangeText={setOptionD} />
      <TextInput style={styles.input} placeholder="Correct Answer (A, B, C, or D)" value={correctAnswer} onChangeText={setCorrectAnswer} />
      
      <Pressable style={styles.button} onPress={handleAddQuestion}>
        <Text style={styles.buttonText}>Submit question</Text>
      </Pressable>
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
  }
});
