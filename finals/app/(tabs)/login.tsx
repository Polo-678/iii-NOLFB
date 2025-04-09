import { SignedIn, SignedOut, useUser, useAuth } from "@clerk/clerk-expo";
import { Link, useRouter } from "expo-router";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

export default function Page() {
  const { user } = useUser();
  const { isLoaded, signOut } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    if (!isLoaded) return;
    try {
      await signOut();
      router.replace("/(tabs)/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const userRole = user?.unsafeMetadata?.role || "default";

  return (
    <View style={styles.container}>
      <SignedIn>
        <Text>Hello {user?.emailAddresses[0]?.emailAddress}</Text>

        <TouchableOpacity style={styles.button} onPress={handleLogout}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            if (userRole === "student") {
              router.push("/dashboard/students");
            } else if (userRole === "teacher") {
              router.push("/dashboard/teacher");
            }
          }}
        >
          <Text style={styles.buttonText}>Go to Dashboard</Text>
        </TouchableOpacity>
      </SignedIn>

      <SignedOut>
        <TouchableOpacity style={styles.button}>
          <Link href="/login/(auth)/sign-in">
            <Text style={styles.buttonText}>Sign in</Text>
          </Link>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Link href="/login/(auth)/sign-up">
            <Text style={styles.buttonText}>Sign up</Text>
          </Link>
        </TouchableOpacity>
      </SignedOut>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
  },
  button: {
    backgroundColor: "#006A71",
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 10,
    alignItems: "center",
    alignSelf: "center",
    maxWidth: 400,
    width: "100%",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

