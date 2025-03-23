import { SignedIn, SignedOut, useUser, useAuth } from "@clerk/clerk-expo";
import { Link, useRouter } from "expo-router";
import { Text, View, Button } from "react-native";
import { useEffect, useState } from "react";
import React from "react";

export default function Page() {
  const { user } = useUser();
  const { isLoaded, signOut } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    if (!isLoaded) return;
    try {
      await signOut();
      router.replace("/login/(auth)/sign-in");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const userRole = user?.unsafeMetadata?.role || "default";

  console.log("User Role:", userRole);

  return (
    <View>
      <SignedIn>
        <Text>Hello {user?.emailAddresses[0]?.emailAddress}</Text>
        <Button title="Logout" onPress={handleLogout} />
        <Button
          title="Go to Dashboard"
          onPress={() => {
            if (userRole === "student") {
              router.push("/dashboard/students");
            } else if (userRole === "teacher") {
              router.push("/dashboard/teacher");
            }
          }}
        />
      </SignedIn>

      <SignedOut>
        <Link href="/login/(auth)/sign-in">
          <Text>Sign in</Text>
        </Link>
        <Link href="/login/(auth)/sign-up">
          <Text>Sign up</Text>
        </Link>
      </SignedOut>
    </View>
  );
}
