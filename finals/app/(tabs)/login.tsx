import { SignedIn, SignedOut, useUser, useAuth } from "@clerk/clerk-expo";
import { Link, useRouter } from "expo-router";
import {  Text, TextInput, Button, View, StyleSheet, TouchableOpacity, } from "react-native";
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
      router.replace("/(tabs)/login");
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
        <TouchableOpacity style={styles.logout} onPress={handleLogout}>
        <Text style={styles.logouttext}> Logout</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
        style={styles.Dashboard}
          onPress={() => {
            if (userRole === "student") {
              router.push("/dashboard/students");
            } else if (userRole === "teacher") {
              router.push("/dashboard/teacher");
            }
          }}
        >
        <Text style={styles.Dashboardtext}>Go to Dashboard</Text>
        </TouchableOpacity>
      </SignedIn>

      <SignedOut>
        <TouchableOpacity>
        <Link href="/login/(auth)/sign-in">
          <Text>Sign in</Text>
        </Link>
        </TouchableOpacity>

        <TouchableOpacity>
        <Link href="/login/(auth)/sign-up">
          <Text>Sign up</Text>
        </Link>
        </TouchableOpacity>
      </SignedOut>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    width: "100%",
    padding: 12,
    borderRadius: 10,
    backgroundColor: "#9ACBD0",
    marginBottom: 15,
    color: "black"
  },
  logout: {
    marginTop: 10,
    marginBottom: 2,
    backgroundColor: "#006A71",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    width: "50%",  
  
  },

  logouttext: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    alignItems: "center",
  justifyContent: "center",
  }, 

  container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      padding: 20,
      
     
  },
  Dashboard: {
    marginTop: 2,
    marginBottom: 2,
    backgroundColor: "#006A71",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    width: "50%", 
    justifyContent: "center",
  }, 
  Dashboardtext: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    alignItems: "center",
  justifyContent: "center",
  }, 
  
  text: {
    width: "100%",
    padding: 12,
    borderRadius: 10,
    backgroundColor: "#F2EFE7",
  
    color: "black"
},
  center: {
    alignItems: "center",
    justifyContent: "center",
}, 
background: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100%", 
},

});
