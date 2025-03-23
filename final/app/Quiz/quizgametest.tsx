import React, { useEffect, useState } from "react";
import { View, Text, Button, Alert } from "react-native";
import { db } from "../firebase/firebaseConfig";
import { collection, getDocs, addDoc } from "firebase/firestore";

export default function StudentScreen() {
  const [questions, setQuestions] = useState<any[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const fetchQuestions = async () => {
      const querySnapshot = await getDocs(collection(db, "questions"));
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
      <Text>Question {currentQuestion + 1}: {questions[currentQuestion].question}</Text>

      <Button title={"A: " + questions[currentQuestion].options.A} onPress={() => handleAnswer("A")} />
      <Button title={"B: " + questions[currentQuestion].options.B} onPress={() => handleAnswer("B")} />
      <Button title={"C: " + questions[currentQuestion].options.C} onPress={() => handleAnswer("C")} />
      <Button title={"D: " + questions[currentQuestion].options.D} onPress={() => handleAnswer("D")} />
    </View>
  );
}
