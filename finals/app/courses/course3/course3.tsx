import { View, Text, StyleSheet, TouchableOpacity, ScrollView} from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function Course3() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <Text style={styles.courseTitle}>📘 Course 3: Voice of Verbs</Text>
          <Text style={styles.subTitle}>Understanding Active and Passive Voice</Text>
        </View>

        <View style={styles.contentCard}>
          <Text style={styles.sectionTitle}>🗣️ What Is Voice of Verbs?</Text>
          <ScrollView style={styles.proverbScroll} nestedScrollEnabled={true}>
          <Text style={styles.contentText}>
  Voice of verbs shows how most verbs can change form to show if the subject is performing the action or having the action performed on it.

  {"\n\n"}🔹 A verb is in the ACTIVE VOICE when the subject is the doer of the action.
  {"\n"}🔹 A verb is in the PASSIVE VOICE when the subject is the receiver of the action.

  {"\n\n"}📘 Examples:
  {"\n"}1. COVID-19 infected a lot of people. → Active voice
  {"\n"}2. A lot of people were infected by COVID-19. → Passive voice

  {"\n\n"}Let’s analyze:

  {"\n\n"}❓ Sentence 1
  {"\n"}• Subject: COVID-19
  {"\n"}• Does it perform the action? ✅ Yes
  {"\n"}→ Active voice

  {"\n\n"}❓ Sentence 2
  {"\n"}• Subject: A lot of people
  {"\n"}• Does it perform the action? ❌ No
  {"\n"}→ Passive voice

  {"\n\n"}🧠 How to Identify Voice of the Verb:
  {"\n"}1. What is the subject of the sentence?
  {"\n"}2. What is the verb of the sentence?
  {"\n"}3. Who or what does the action?
  {"\n"}→ If the subject performs the action: Active
  {"\n"}→ If the subject receives the action: Passive

  {"\n\n"}🔄 Changing from Active to Passive Voice (Simple Tenses)

  {"\n"}• Present:
  {"\n"}  Peter plays the guitar. → The guitar is played by Peter.

  {"\n"}• Past:
  {"\n"}  Anne called my name. → My name was called by Anne.

  {"\n"}• Future:
  {"\n"}  Mae will write the report. → The report will be written by Mae.


  {"\n\n"}📍 Quick Guide for Simple Tenses:
  {"\n"}1. The subject in the active becomes the object in the passive.
  {"\n"}2. Present Tense: Use is/are + past participle (e.g., is played)
  {"\n"}3. Past Tense: Use was/were + past participle (e.g., was called)
  {"\n"}4. Future Tense: Use will be + past participle (e.g., will be written)
  {"\n"}5. The by-phrase is optional in passive voice.
</Text>
          </ScrollView>
        </View>
       
               <Link href="/courses/course2/post_test2"  replace asChild>
                 <TouchableOpacity style={styles.actionCard}>
                   <Text style={styles.actionText}>🧪 Take the Post-Test</Text>
                 </TouchableOpacity>
               </Link>
       
               <Link href="/courses/course2/quizgametest2"  replace asChild>
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