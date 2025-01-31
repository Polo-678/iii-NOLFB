import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";

export default function Quiz_game() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const quizData = [
    {
      question: "Question 1?",
      options: ["answer1", "answer2", "answer3", "answer4"],
      answer: "answer1",
    },
    {
      question: "naka move on ka na?",
      options: ["pwede na", "oo", "hindi", "pff"],
      answer: "pwede na",
    },
  ];
  const handleAnswer = (selectedAnswer: string) => {
    const answer = quizData[currentQuestion]?.answer;
    if (answer === selectedAnswer) {
      setScore((prevScore) => prevScore + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <View style={style.container}>
      {showScore ? (
        <View>
          <Text> {score} </Text>
          <TouchableOpacity onPress={handRestart}>
            <Text style={style.resetButton}> Reset</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={style.questioncontainer}>
          <Text style={style.questionText}>
            {" "}
            {quizData[currentQuestion]?.question}
          </Text>
          {quizData[currentQuestion]?.options.map((item) => {
            return (
              <TouchableOpacity
                onPress={() => handleAnswer(item)}
                style={style.optionContainer}
              >
                <Text style={style.optionsStyle}> {item}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      )}
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#808080",
    alignItems: "center",
    justifyContent: "center",
  },
  questioncontainer: {
    backgroundColor: "@DDDDDD",
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  optionsStyle: {
    color: "blue",
    padding: 5,
    alignSelf: "center",
    fontSize: 18,
  },
  optionContainer: {
    borderColor: "black",
    borderWidth: 2,
    margin: 10,
  },
  questionText: {
    fontSize: 24,
  },
  resetButton: {
    borderColor: "Pi",
    borderWidth: 2,
    margin: 10,
  },
});
