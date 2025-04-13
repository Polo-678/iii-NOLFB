import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function Course3() {
  return (
    <View style={styles.container}>
         <ScrollView contentContainerStyle={styles.scrollContainer}>
           <View style={styles.header}>
             <Text style={styles.courseTitle}>📘 Course 4: Analogies</Text>
             <Text style={styles.subTitle}>Understanding Salawikain and Our Cultural Wisdom</Text>
           </View>
   
           <View style={styles.contentCard}>
             <Text style={styles.sectionTitle}>💬 Filipino Proverbs & Cultural Wisdom</Text>
             <ScrollView style={styles.proverbScroll} nestedScrollEnabled={true}>
             <Text style={styles.contentText}>
  An analogy shows the similarities and relationships between pairs of words.

  {"\n\n"}Example:  
  Clock is to time as compass is to direction.

  {"\n\n"}🔎 Guide Questions:
  {"\n"}1. What is the relationship between clock and time?
  {"\n"}2. What is the relationship between compass and direction?
  {"\n"}3. How are the pairs of words related to each other?

  {"\n\n"}✅ Explanation:  
  A clock is used to tell time.  
  A compass is used to tell direction.  
  → Both show a **purpose relationship**.

  {"\n\n"}📘 Analogy Format:  
  clock: time :: compass: direction  
  (Read as “Clock is to time as compass is to direction.”)

  {"\n\n"}📚 Types of Analogies:

  {"\n"}a. Purpose Relationship  
  • crayon: color  
  • knife: slice  
  (One word shows the purpose of the other.)

  {"\n\n"}b. Opposite Relationship  
  • long: short  
  • near: far  
  (Words are opposites.)

  {"\n\n"}c. Part-Whole Relationship  
  • finger: hand  
  • branch: tree  
  (One word is a part of the other.)

  {"\n\n"}d. Similarity Relationship  
  • pretty: beautiful  
  • smart: intelligent  
  (Words are similar in meaning.)

  {"\n\n"}e. Action-Object Relationship  
  • bird: fly  
  • horse: neigh  
  (One word does the action of the other.)

  {"\n\n"}f. Association Relationship  
  • vase: flower  
  • key: padlock  
  (One word is commonly associated with the other.)

  {"\n\n"}g. Object-Location Relationship  
  • plane: hangar  
  • bed: room  
  (One word shows where the other is found.)

  {"\n\n"}h. Cause-Effect Relationship  
  • earthquake: loss of lives  
  • study: high scores  
  (One word causes the other.)
</Text>

             </ScrollView>
           </View>
           
               <View style={styles.sectionHeader}>
                 <Text style={styles.sectionTitle}>📚 Activities & Assessments</Text>
               </View>
       
              
       
               <Link href="/courses/course4/post_test4"  replace asChild>
                 <TouchableOpacity style={styles.actionCard}>
                   <Text style={styles.actionText}>🧪 Take the Post-Test</Text>
                 </TouchableOpacity>
               </Link>
       
               <Link href="/courses/course4/quizgametest4"  replace asChild>
                 <TouchableOpacity style={styles.actionCard}>
                   <Text style={styles.actionText}>🎮 Take the Activity</Text>
                 </TouchableOpacity>
               </Link>
       
               <Link href="/(main)/Homescreenstudents"  replace asChild>
                 <TouchableOpacity style={styles.backButton}>
                   <Text style={styles.backButtonText}>🏠 Back to Home</Text>
                 </TouchableOpacity>
               </Link>
             </ScrollView>
           </View>
     );
   }
   
   const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#F3F4F6",
    },
    scrollContainer: {
      padding: 20,
      paddingBottom: 40,
    },
    proverbScroll: {
      maxHeight: 320, 
      marginTop: 10,
    },
    
    header: {
      backgroundColor: "#1E3A8A",
      padding: 24,
      borderRadius: 20,
      marginBottom: 20,
      alignItems: "center",
      shadowColor: "#000",
      shadowOpacity: 0.1,
      shadowRadius: 10,
      elevation: 4,
    },
    courseTitle: {
      fontSize: 24,
      fontWeight: "bold",
      color: "#FFFFFF",
      marginBottom: 6,
    },
    subTitle: {
      fontSize: 15,
      color: "#CBD5E1",
      textAlign: "center",
    },
    contentCard: {
      backgroundColor: "#FFFFFF",
      padding: 20,
      borderRadius: 16,
      marginBottom: 24,
      shadowColor: "#000",
      shadowOpacity: 0.05,
      shadowRadius: 4,
      elevation: 2,
    },
    contentText: {
      fontSize: 15,
      color: "#1F2937",
      lineHeight: 24,
    },
    sectionHeader: {
      marginBottom: 10,
    },
    sectionTitle: {
      fontSize: 20,
      fontWeight: "700",
      color: "#1E293B",
    },
    actionCard: {
      backgroundColor: "#E0F2FE",
      padding: 16,
      borderRadius: 14,
      marginVertical: 8,
      shadowColor: "#000",
      shadowOpacity: 0.05,
      shadowRadius: 4,
      elevation: 1,
    },
    actionText: {
      fontSize: 16,
      fontWeight: "600",
      color: "#0C4A6E",
    },
    backButton: {
      backgroundColor: "#D1D5DB",
      padding: 14,
      borderRadius: 12,
      alignItems: "center",
      marginTop: 24,
    },
    backButtonText: {
      fontSize: 16,
      fontWeight: "600",
      color: "#1E293B",
    },
  });

