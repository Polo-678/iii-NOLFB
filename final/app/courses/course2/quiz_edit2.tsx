import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, Alert, FlatList,   } from "react-native";
import { db } from "../../firebase/firebaseConfig";
import { collection, addDoc, getDoc } from "firebase/firestore";

export default function TeacherScreen() {
  const [question, setQuestion] = useState("");
  const [optionA, setOptionA] = useState("");
  const [optionB, setOptionB] = useState("");
  const [optionC, setOptionC] = useState("");
  const [optionD, setOptionD] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");

  const handleAddQuestion = async () => {
    if (!question || !optionA || !optionB || !optionC || !optionD || !correctAnswer) {
      Alert.alert("Error", "All fields are required.");
      return;
    }
  
    const questionData = {
      question,
      options: { A: optionA, B: optionB, C: optionC, D: optionD },
      correctAnswer
    };
  
    console.log("Adding question:", questionData); // ✅ Debugging log
  
    try {
      const docRef = await addDoc(collection(db, "course2"), questionData);
      Alert.alert("Success", `Question added! ID: ${docRef.id}`);
      setQuestion("");
      setOptionA("");
      setOptionB("");
      setOptionC("");
      setOptionD("");
      setCorrectAnswer("");
    } catch (error) {
      console.error("Error adding question:", error);
      Alert.alert("Error", `Could not add question:`);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Question:</Text>
      <TextInput value={question} onChangeText={setQuestion} style={{ borderWidth: 1, padding: 5, marginBottom: 10 }} />
      
      <Text>Option A:</Text>
      <TextInput value={optionA} onChangeText={setOptionA} style={{ borderWidth: 1, padding: 5, marginBottom: 10 }} />

      <Text>Option B:</Text>
      <TextInput value={optionB} onChangeText={setOptionB} style={{ borderWidth: 1, padding: 5, marginBottom: 10 }} />

      <Text>Option C:</Text>
      <TextInput value={optionC} onChangeText={setOptionC} style={{ borderWidth: 1, padding: 5, marginBottom: 10 }} />

      <Text>Option D:</Text>
      <TextInput value={optionD} onChangeText={setOptionD} style={{ borderWidth: 1, padding: 5, marginBottom: 10 }} />

      <Text>Correct Answer (A, B, C, or D):</Text>
      <TextInput value={correctAnswer} onChangeText={setCorrectAnswer} style={{ borderWidth: 1, padding: 5, marginBottom: 10 }} />
      

      <Button title="Add Question" onPress={handleAddQuestion} />
    </View>
  );
}
