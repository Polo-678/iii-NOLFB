import React, { useEffect, useState } from "react";
import { View, Text, Pressable, Alert, StyleSheet } from "react-native";
import { db } from "../../firebase/firebaseConfig";
import { collection, getDocs, addDoc, setDoc, query, where, doc } from "firebase/firestore";
import {  useNavigation } from "@react-navigation/native";
import { Link } from "expo-router";
import { useUser } from "@clerk/clerk-expo";

export default function StudentScreen() {
  const [questions, setQuestions] = useState<any[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const navigation = useNavigation(); 

  const { user } = useUser();
  useEffect(() => {
    const fetchQuestions = async () => {
      const querySnapshot = await getDocs(collection(db, "course4"));
      const loadedQuestions = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setQuestions(loadedQuestions);
    };

    fetchQuestions();
  }, []);

  const handleAnswer = async (answer: string) => {

    let updatedScore = score;
    if ((questions[currentQuestion].correctAnswer) === answer) {
      updatedScore = score + 1;
      console.log("CORRECT " + questions[currentQuestion].correctAnswer);
      console.log("ANSWER KO " + answer)
      setScore(updatedScore);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    } else {
      setShowScore(true);
      
      const studentEmail = user?.primaryEmailAddress?.emailAddress || "anonymous"; // Clerk user email

      try {
        // Query Firestore to check if the student's score already exists
        const scoresRef = collection(db, "studentScores4");
        const q = query(scoresRef, where("student", "==", studentEmail));
        const querySnapshot = await getDocs(q);
      
        if (!querySnapshot.empty) {
          // If student already has a score, update the existing document
          const existingDoc = querySnapshot.docs[0]; // Get the first matching document
          await setDoc(doc(db, "studentScores4", existingDoc.id), {
            student: studentEmail,
            score: updatedScore, // Update with the latest score
            totalQuestions: questions.length,
            timestamp: new Date(),
          }, { merge: true }); // merge: true ensures only the updated fields are modified
      
          console.log("Score updated successfully!");
        } else {
          // If student has no record, create a new document
          await setDoc(doc(db, "studentScores4", studentEmail), {
            student: studentEmail,
            score: updatedScore,
            totalQuestions: questions.length,
            timestamp: new Date(),
          });
      
          console.log("New score document created successfully!");
        }
      } catch (error) {
        console.error("Error updating/saving score:", error);
      }

    };
      

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

          <Link href="/courses/course1/course1">
          <Pressable style={styles.button} >
            <Text style={styles.buttonText}>go back to course1</Text>
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
};

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