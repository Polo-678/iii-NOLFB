import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";

export default function Quiz_game() {
  const [shuffledQuestions, setShuffledQuestions] = useState<any[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const shuffleArray = (array: any[]) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const [quizData, setQuizData] = useState<
    {
      question: string;
      options: string[];
      answer: string;
    }[]
  >([
    {
      question: "Mahal mo ba? Mahal mo pa ba? Mahal ka pa ba?",
      options: ["answer1", "answer2", "answer3", "answer4"],
      answer: "answer1",
    },
    {
      question: "naka move on ka na?",
      options: ["Pff", "oo", "hindi", "pwede na"],
      answer: "pwede na",
    },
    {
      question: "Greatest player of all time??",
      options: ["Kd", "Mj", "Steph", "Lebron"],
      answer: "Lebron",
    },
    {
      question: "Which is a laufey song?",
      options: ["Glue Song", "From the Start", "Juno", "Juna"],
      answer: "From the Start",
    },
  ]);
  const handleAnswer = (selectedAnswer: string) => {
    const answer = shuffledQuestions[currentQuestion]?.answer;
    if (answer === selectedAnswer) {
      setScore((prevScore) => prevScore + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < shuffledQuestions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  useEffect(() => {
    setShuffledQuestions(shuffleArray([...quizData])); // Shuffle the questions on load
  }, []);

  const handRestart = () => {
    setShuffledQuestions(shuffleArray([...quizData])); // Reshuffle on restart
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
            <Text style={style.resetButton}> Reset </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={style.questioncontainer}>
          <Text style={style.questionText}>
            {" "}
            {shuffledQuestions[currentQuestion]?.question}
          </Text>
          {shuffledQuestions[currentQuestion]?.options.map((item: string) => {
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
    backgroundColor: "#DDDDDD",
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
    borderColor: "black",
    borderWidth: 2,
    margin: 10,
  },
});
