import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Alert, StyleSheet } from "react-native";
import { db } from "../../../src/firebase/firebaseConfig";
import { collection, getDocs, setDoc, query, where, doc } from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";
import { Link } from "expo-router";
import { useUser } from "@clerk/clerk-expo";
import { useRouter } from "expo-router";

export default function StudentScreen() {
  const [questions, setQuestions] = useState<any[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const MAX_ATTEMPTS = 3;

  const navigation = useNavigation();
  const router = useRouter();
  const { user } = useUser();

  useEffect(() => {
    const fetchQuestionsAndAttempts = async () => {
      const querySnapshot = await getDocs(collection(db, "Post-test_4"));
      const loadedQuestions = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setQuestions(loadedQuestions);

      const studentEmail = user?.primaryEmailAddress?.emailAddress || "anonymous";
      const scoresRef = collection(db, "Post-test_4_scores");
      const q = query(scoresRef, where("student", "==", studentEmail));
      const attemptSnapshot = await getDocs(q);

      if (!attemptSnapshot.empty) {
        const data = attemptSnapshot.docs[0].data();
        const savedAttempts = data.attempts || 1;
        setAttempts(savedAttempts);

        if (savedAttempts >= MAX_ATTEMPTS) {
          setShowScore(true);
          setScore(data.score || 0);
        }
      }
    };

    fetchQuestionsAndAttempts();
  }, [user]);

  const handleAnswer = async (answer: string) => {
    let updatedScore = score;
    if (questions[currentQuestion].correctAnswer === answer) {
      updatedScore = score + 1;
      setScore(updatedScore);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    } else {
      setShowScore(true);
      const studentEmail = user?.primaryEmailAddress?.emailAddress || "anonymous";

      try {
        const scoresRef = collection(db, "Post-test_4_scores");
        const q = query(scoresRef, where("student", "==", studentEmail));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          const existingDoc = querySnapshot.docs[0];
          const updatedAttempts = (existingDoc.data().attempts || 0) +1;

          await setDoc(
            doc(db, "Post-test_4_scores", existingDoc.id),
            {
              student: studentEmail,
              score: updatedScore,
              totalQuestions: questions.length,
              timestamp: new Date(),
              attempts: updatedAttempts,
            },
            { merge: true }
          );
          setAttempts(updatedAttempts);
        } else {
          await setDoc(doc(db, "Post-test_4_scores", studentEmail), {
            student: studentEmail,
            score: updatedScore,
            totalQuestions: questions.length,
            timestamp: new Date(),
            attempts: 1,
          });
          setAttempts(1);
        }
      } catch (error) {
        console.error("Error updating/saving score:", error);
      }
    }
  };

  const restartQuiz = () => {
    if (attempts < MAX_ATTEMPTS) {
      setCurrentQuestion(0);
      setScore(0);
      setShowScore(false);
    } else {
      Alert.alert("No more attempts available!", "You have reached your maximum quiz attempts.");
    }
  };

  const Return = () => {
    router.replace("/courses/course1/course1");
  };

  if (questions.length === 0) {
    return <Text style={styles.loadingText}>Loading questions...</Text>;
  }

  if (attempts >= MAX_ATTEMPTS && !showScore) {
    return (
      <View style={styles.container}>
        <Text style={styles.lockedText}>You’ve reached the maximum number of quiz attempts.</Text>
        <Text style={styles.scoreText}>Last Score: {score}/{questions.length}</Text>
        <TouchableOpacity style={styles.button} onPress={Return}>
          <Text style={styles.buttonText}>Go back to course1</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {showScore ? (
        <View style={styles.scoreContainer}>
          <Text style={styles.scoreText}>Quiz Finished!</Text>
          <Text style={styles.scoreText}>
            Your Score: {score}/{questions.length}
          </Text>
          <Text style={styles.scoreText}>
            Attempt {attempts} of {MAX_ATTEMPTS}
          </Text>
          {attempts < MAX_ATTEMPTS ? (
            <TouchableOpacity style={styles.button} onPress={restartQuiz}>
              <Text style={styles.buttonText}>Restart Quiz</Text>
            </TouchableOpacity>
          ) : (
            <Text style={styles.lockedText}>Quiz Locked: Maximum attempts reached.</Text>
          )}
          <TouchableOpacity style={styles.button} onPress={Return}>
            <Text style={styles.buttonText}>Go back to course1</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <>
          <Text style={styles.questionText}>
            Question {currentQuestion + 1}: {questions[currentQuestion]?.question || "Loading..."}
          </Text>
          {questions[currentQuestion]?.options ? (
            <>
              <TouchableOpacity style={styles.button} onPress={() => handleAnswer("A")}>
                <Text style={styles.buttonText}>A: {questions[currentQuestion].options?.A || "N/A"}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={() => handleAnswer("B")}>
                <Text style={styles.buttonText}>B: {questions[currentQuestion].options?.B || "N/A"}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={() => handleAnswer("C")}>
                <Text style={styles.buttonText}>C: {questions[currentQuestion].options?.C || "N/A"}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={() => handleAnswer("D")}>
                <Text style={styles.buttonText}>D: {questions[currentQuestion].options?.D || "N/A"}</Text>
              </TouchableOpacity>
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
    backgroundColor: "#0ba360",
  },
  questionText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "white",
  },
  button: {
    backgroundColor: "#fbeae0",
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
    color: "#fff",
  },
  lockedText: {
    fontSize: 16,
    color: "red",
    marginVertical: 10,
  },
});
