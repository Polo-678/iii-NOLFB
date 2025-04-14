import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { Link } from "expo-router";
import React from "react";

export default function Course2() {
  return (
     <View style={styles.container}>
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.header}>
              <Text style={styles.courseTitle}>📘 Course 2: Subject Nouns</Text>
              
            </View>
    
            <View style={styles.contentCard}>
                      <Text style={styles.sectionTitle}>💬 Subject Pronouns</Text>
                      <ScrollView style={styles.proverbScroll} nestedScrollEnabled={true}>
                        <Text style={styles.contentText}>
                        Personal pronouns are words used to substitute the name of a person or thing.
            
            Some pronouns are used as **subjects** of sentences. These are called **subject pronouns**, and they can be **singular** or **plural**:
            
            {"\n\n"}🔹 **Subject Pronouns**  
            {"\n"}Singular: I, he, she, it  
            {"\n"}Plural: we, they, you  
            
            {"\n\n"}🧍 **He** refers to a male or a boy. (Examples: Troy, father)  
            {"\n\n"}🧍‍♀️ **She** refers to a female or a girl. (Examples: Malyn, auntie)  
            {"\n\n"}🐾 **It** refers to a thing or animal. (Examples: pencil, dog)  
            {"\n\n"}🙋 **I** refers to oneself. (Example: I am Shirly.)  
            {"\n\n"}👥 **They** refers to more than one person, place or thing. (Examples: Ben and Berta, the valleys, books)  
            {"\n\n"}👫 **We** refers to others together with the person speaking. (Examples: Mary, Rex and I)  
            
            {"\n\n"}📝 **Examples**:  
            {"\n\n"}• Peter is our classroom president. → noun  
            {"\n\n"}• He is our classroom president. → subject pronoun  
            
            ---
            
            Some pronouns come after **action words** and **prepositions**. These are called **object pronouns**.  
            Object pronouns differ from subject pronouns in form, except for "you" and "it".
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
