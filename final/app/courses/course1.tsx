import { Text, View, StyleSheet } from "react-native";

export default function Course1() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>COURSE 1 NITO</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
  },
});
