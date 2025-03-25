import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet, FlatList } from "react-native";
import { db } from "../../firebase/firebaseConfig";
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";

export default function TeacherScreen() {
  const [question, setQuestion] = useState("");
  const [optionA, setOptionA] = useState("");
  const [optionB, setOptionB] = useState("");
  const [optionC, setOptionC] = useState("");
  const [optionD, setOptionD] = useState("");
  const [editBtnStatus, setEditButtonSttus] = useState(false); // Now it's a boolean

  const [correctAnswer, setCorrectAnswer] = useState("");
  const [questions, setQuestions] = useState<any[]>([]);
  const [editingQuestionId, setEditingQuestionId] = useState(null);

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    const querySnapshot = await getDocs(collection(db, "course1"));
    const loadedQuestions = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setQuestions(loadedQuestions);
  };

  
  const handleDeleteQuestion = async (id: string) => {
    await deleteDoc(doc(db, "course1", id));
    setQuestions(questions.filter((q) => q.id !== id));
  };

  const handleEditQuestion = async (id:string) => {
    const questionRef = doc(db, "course1", id);
    await updateDoc(questionRef, {
      question,
      options: { A: optionA, B: optionB, C: optionC, D: optionD },
      correctAnswer,
    });
    setEditingQuestionId(null);
    setQuestion("");
    setOptionA("");
    setOptionB("");
    setOptionC("");
    setOptionD("");
    setCorrectAnswer("");
    fetchQuestions();
  };

  return (
    <View style={styles.container}>

    <FlatList
            data={questions}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
            <View style={styles.questionContainer}>
                <Text style={styles.questionText}>{item.question}</Text>
                <Pressable style={styles.editButton} onPress={() => {
                
                setEditingQuestionId(item.id);
                setQuestion(item.question);
                setOptionA(item.options.A);
                setOptionB(item.options.B);
                setOptionC(item.options.C);
                setOptionD(item.options.D);
                setCorrectAnswer(item.correctAnswer);
                }}>
                <Text style={styles.buttonText}>Edit</Text>
                </Pressable>
                <Pressable style={styles.deleteButton} onPress={() => handleDeleteQuestion(item.id)}>
                <Text style={styles.buttonText}>Delete</Text>
                </Pressable>
            </View>
            )}
        />
            
      <Text style={styles.header}>Edit Question</Text>
      <TextInput style={styles.input} placeholder="Question" value={question} onChangeText={setQuestion} />
      <TextInput style={styles.input} placeholder="Option A" value={optionA} onChangeText={setOptionA} />
      <TextInput style={styles.input} placeholder="Option B" value={optionB} onChangeText={setOptionB} />
      <TextInput style={styles.input} placeholder="Option C" value={optionC} onChangeText={setOptionC} />
      <TextInput style={styles.input} placeholder="Option D" value={optionD} onChangeText={setOptionD} />
      <TextInput style={styles.input} placeholder="Correct Answer (A, B, C, or D)" value={correctAnswer} onChangeText={setCorrectAnswer} />
      
      <Pressable style={styles.button} onPress={() => handleEditQuestion}>
        <Text style={styles.buttonText}>Save Changes</Text>
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
    backgroundColor: "#0962ea",
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
    color: "white",
  },
  input: {
    width: "100%",
    padding: 12,
    borderRadius: 10,
    backgroundColor: "#fffdfb",
    marginBottom: 15,
    color: "blue",
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
  questionContainer: {
    backgroundColor: "#ffffff",
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
    width: "100%",
  },
  questionText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
  editButton: {
    backgroundColor: "#F0AD4E",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginVertical: 5,
  },
  deleteButton: {
    backgroundColor: "#D9534F",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
});
