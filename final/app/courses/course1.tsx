import { Text, View, StyleSheet, Image } from "react-native";
import { Link } from "expo-router";

export default function Course1() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>COURSE 1</Text>
      <View>
        <Link href="/courses/course2">Go to course 2</Link>
        <Link href="/courses/course3">Go to course 3</Link>
        <Link href="/courses/Homescreen">Go Back to Home</Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#008000",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
  },
});
