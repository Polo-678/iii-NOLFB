import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import React from "react";

export default function Course1() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <Text style={styles.courseTitle}>📘 Course 1: Filipino Proverbs</Text>
          <Text style={styles.subTitle}>Understanding Salawikain and Our Cultural Wisdom</Text>
        </View>

        <View style={styles.contentCard}>

          <Text style={styles.contentText}>
          Damiana L. Eugenio, the mother of Philippine Folklore compiled and edited what may very well be considered as the most comprehensive collection of proverbs in our country. There is a limited number of works like this in existence. She spent a lifetime collecting pieces of folk literature that reveal our ancestors‘ wisdom. When she gathered proverbs from various areas in our country, she declared that our elders lived by simple,  yet very meaningful rules of righteous living. In fact, she asserted that even the  Spaniards who colonized our country noticed how proverbs formed part of the native spirit. Spanish missionaries were found to have translated such proverbs and other oral expressions in Spanish in order for their fellow religious people to learn our indigenous languages. By doing so, they were able to interact with the early Filipinos their and eventually introduce the Catholic faith.

Proverbs are brief instructive expressions that suggest a specific action,  behavior, or judgment. Referred to by some scholars as ―the wisdom of many and the wit of one‖, they are commonly written in the form of short assertions or poetic two-liners which have rhyme. It is interesting to note that people are easily struck by proverbs when they are woven in conversations or writings. This is perhaps because they have the power to teach people the more essential truths about life and the complexity of living. Compared to lengthy narrations, descriptions, or argumentations, proverbs are  able to effect quickly a change in view or disposition. 
In Filipino, proverbs are called salawikain or sawikain. They prescribe norms,  impart a lesson, or emphasize traditions and beliefs in a community. In the anthology of  Damiana L. Eugenio, she classified proverbs into six categories: (1) proverbs  expressing a general attitude towards life and the laws that govern life; (2) ethical  proverbs recommending certain virtues and condemning certain vices; (3) proverbs  expressing a system of values; (4) proverbs expressing general truths and observations  about life and human nature; (5) humorous proverbs and (6) miscellaneous proverbs.  Below are examples of each category. 
          </Text>
        </View>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>📚 Activities & Assessments</Text>
        </View>

    

        <Link href="/courses/course1/posttest1" asChild>
          <TouchableOpacity style={styles.actionCard}>
            <Text style={styles.actionText}>🧪 Take the Post-Test</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/courses/course1/quizgametest1" asChild>
          <TouchableOpacity style={styles.actionCard}>
            <Text style={styles.actionText}>🎮 Take the Activity</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/(main)/Homescreenstudents" asChild>
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
  },
  header: {
    backgroundColor: "#1E3A8A",
    padding: 24,
    borderRadius: 16,
    marginBottom: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
  },
  courseTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 4,
  },
  subTitle: {
    fontSize: 14,
    color: "#CBD5E1",
    textAlign: "center",
  },
  contentCard: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 14,
    marginBottom: 24,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  contentText: {
    fontSize: 14,
    color: "#1F2937",
    lineHeight: 22,
  },
  sectionHeader: {
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1E293B",
  },
  actionCard: {
    backgroundColor: "#E0F2FE",
    padding: 16,
    borderRadius: 12,
    marginVertical: 6,
    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 1,
  },
  actionText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#0C4A6E",
  },
  backButton: {
    backgroundColor: "#D1D5DB",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  backButtonText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#1E293B",
  },
  scrollText: {
    fontSize: 14,
    lineHeight: 22,
    color: '#1F2937',
  },
});
