import React, { useEffect, useState } from "react";
import { View, Text, Button, Alert } from "react-native";
import { db } from "../../firebase/firebaseConfig";
import { collection, getDocs, addDoc } from "firebase/firestore";

export default function StudentScreen() {
  const [questions, setQuestions] = useState<any[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  useEffect(() => {
    const fetchQuestions = async () => {
      const querySnapshot = await getDocs(collection(db, "course1"));
      const loadedQuestions = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setQuestions(loadedQuestions);
    };

    fetchQuestions();
  }, []);

  const handleAnswer = (answer: string) => {
    if (questions[currentQuestion].correctAnswer === answer) {
      setScore(score + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      Alert.alert("Quiz Finished!", `Your Score: ${score + 1}/${questions.length}`);
      setCurrentQuestion(0);
      setScore(0);
    }
  };

  if (questions.length === 0) {
    return <Text>Loading questions...</Text>;
  }

  return (
    <View style={{ padding: 20 }}>
      <Text>Question {currentQuestion + 1}: {questions[currentQuestion]?.question || "Loading..."}</Text>
  
      {questions[currentQuestion]?.options ? (
        <>
          <Button title={`A: ${questions[currentQuestion].options?.A || "N/A"}`} onPress={() => handleAnswer("A")} />
          <Button title={`B: ${questions[currentQuestion].options?.B || "N/A"}`} onPress={() => handleAnswer("B")} />
          <Button title={`C: ${questions[currentQuestion].options?.C || "N/A"}`} onPress={() => handleAnswer("C")} />
          <Button title={`D: ${questions[currentQuestion].options?.D || "N/A"}`} onPress={() => handleAnswer("D")} />
        </>
      ) : (
        <Text style={{ color: "red" }}>Options are missing for this question.</Text>
      )}
    </View>
  );
  
}
