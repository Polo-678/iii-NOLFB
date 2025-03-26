import React, { useEffect, useState } from "react";
import { View, Text, Pressable, Alert, StyleSheet } from "react-native";
import { db } from "../../firebase/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { Link } from "expo-router";


export default function StudentScreen() {
  const [questions, setQuestions] = useState<any[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  useEffect(() => {
    const fetchQuestions = async () => {
      const querySnapshot = await getDocs(collection(db, "course2"));
      const loadedQuestions = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setQuestions(loadedQuestions);
    };

    fetchQuestions();
  }, []);

  const handleAnswer = (answer: string) => {
    if ((questions[currentQuestion].correctAnswer) === answer) {
      console.log("CORRECT " + questions[currentQuestion].correctAnswer);
      console.log("ANSWER KO " + answer)
      setScore((prevScore) => prevScore + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    } else {
      setShowScore(true);
    }

    console.log("CORRECT " + questions[currentQuestion].correctAnswer);
    console.log("ANSWER KO " + answer)
  };


  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  if (questions.length === 0) {
    return <Text style={styles.loadingText}>Loading questions...</Text>;
  }

  return (
    <View style={styles.container}>
      {showScore ? (
        <View style={styles.scoreContainer}>
          <Text style={styles.scoreText}>Quiz Finished!</Text>
          <Text style={styles.scoreText}>Your Score: {score}/{questions.length}</Text>
          <Pressable style={styles.button} onPress={restartQuiz}>
            <Text style={styles.buttonText}>Restart Quiz</Text>
          </Pressable>

           <Link href="/courses/course2/course2">
                    <Pressable style={styles.button} >
                      <Text style={styles.buttonText}>go back to course2</Text>
                    </Pressable>
                    </Link>
        </View>
      ) : (
        <>
          <Text style={styles.questionText}>Question {currentQuestion + 1}: {questions[currentQuestion]?.question || "Loading..."}</Text>
          {questions[currentQuestion]?.options ? (
            <>
              <Pressable style={styles.button} onPress={() => handleAnswer("A")}>
                <Text style={styles.buttonText}>A: {questions[currentQuestion].options?.A || "N/A"}</Text>
              </Pressable>
              <Pressable style={styles.button} onPress={() => handleAnswer("B")}>
                <Text style={styles.buttonText}>B: {questions[currentQuestion].options?.B || "N/A"}</Text>
              </Pressable>
              <Pressable style={styles.button} onPress={() => handleAnswer("C")}>
                <Text style={styles.buttonText}>C: {questions[currentQuestion].options?.C || "N/A"}</Text>
              </Pressable>
              <Pressable style={styles.button} onPress={() => handleAnswer("D")}>
                <Text style={styles.buttonText}>D: {questions[currentQuestion].options?.D || "N/A"}</Text>
              </Pressable>
            </>
          ) : (
            <Text style={styles.errorText}>Options are missing for this question.</Text>
          )}
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundImage: "linear-gradient( 30.5deg, #0ba360 0%, #3cba92 100%);"


  },
  questionText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "white"
  },
  button: {
    backgroundColor: "linear-gradient(109.6deg, rgb(251, 250, 225) 11.2%, rgb(206, 240, 185) 47.5%, rgb(100, 163, 111) 100.2%);",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    width: "100%",
    marginVertical: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  loadingText: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
  },
  errorText: {
    fontSize: 16,
    color: "red",
    textAlign: "center",
  },
  scoreContainer: {
    alignItems: "center",
  },
  scoreText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
});