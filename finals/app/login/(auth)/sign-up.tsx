import * as React from "react";
import { Text, TextInput, View, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { useSignUp } from "@clerk/clerk-expo";
import { useRouter } from "expo-router";

export default function SignUpScreen() {
  const { isLoaded, signUp, setActive } = useSignUp();
  const router = useRouter();

  const [emailAddress, setEmailAddress] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [role, setRole] = React.useState("");
  const [pendingVerification, setPendingVerification] = React.useState(false);
  const [code, setCode] = React.useState("");

  const onSignUpPress = async () => {
    if (!isLoaded || !role) return;

    try {
      await signUp.create({
        emailAddress,
        password,
        unsafeMetadata: { role },
      });

      alert("Please wait, verification in progress");
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
      setPendingVerification(true);
    } catch (err: any) {
      if (err.errors && Array.isArray(err.errors)) {
        const messages = err.errors.map((e: any) => {
          if (e.meta?.paramName === "email_address") {
            return "Please enter a valid email address.";
          } else if (e.meta?.paramName === "password") {
            return "Password must be at least 8 characters long.";
          } else {
            return e.longMessage || "Something went wrong. Please try again.";
          }
        });
  
        alert(messages.join("\n"));
      } else {
        alert("Something went wrong. Please try again.");
      }
    }
  };

  const onVerifyPress = async () => {
    if (!isLoaded) return;

    try {
      const signUpAttempt = await signUp.attemptEmailAddressVerification({ code });

      if (signUpAttempt.status === "complete") {
        await setActive({ session: signUpAttempt.createdSessionId });
        if (role === "student") {
          router.replace("/(main)/Homescreenstudents");
        } else if (role === "teacher") {
          router.replace("/(main)/Homescreenteachers");
        }
      } else {
    
        console.error(JSON.stringify(signUpAttempt, null, 2));
      }
    } catch (err: any) {
      console.log("Verification error:", err);
      if (err.errors && Array.isArray(err.errors)) {
        const messages = err.errors.map((e: any) => {
          if (e.meta?.paramName === "code") {
            return "The verification code is incorrect or expired.";
          } else {
            return e.longMessage || "Verification failed. Please try again.";
          }
        });
    
        Alert.alert('', messages.join("\n"));
      } else {
        Alert.alert('', 'Verification failed. Please try again.');
      }
    
    }
  };

  if (pendingVerification) {
    return (
      <View style={styles.container}>
        <Text>Verify your email</Text>
        <TextInput
          value={code}
          placeholder="Enter your verification code"
          onChangeText={setCode}
          style={styles.input}
        />
        <TouchableOpacity style={styles.button} onPress={onVerifyPress}>
          <Text style={styles.buttonText}>Verify</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign up</Text>
      <TextInput
        autoCapitalize="none"
        value={emailAddress}
        placeholder="Enter email"
        onChangeText={setEmailAddress}
        style={styles.input}
      />
      <TextInput
        value={password}
        placeholder="Enter password"
        secureTextEntry
        onChangeText={setPassword}
        style={styles.input}
      />

      <Text style={styles.subtitle}>Select your role:</Text>
      <TouchableOpacity onPress={() => setRole("student")}>
        <Text style={[styles.roleOption, role === "student" && styles.selectedRole]}>
          Student
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setRole("teacher")}>
        <Text style={[styles.roleOption, role === "teacher" && styles.selectedRole]}>
          Teacher
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, !role && styles.buttonDisabled]}
        onPress={onSignUpPress}
        disabled={!role}
      >
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    gap: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  subtitle: {
    fontWeight: "600",
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    borderRadius: 8,
  },
  roleOption: {
    fontSize: 16,
    paddingVertical: 4,
  },
  selectedRole: {
    color: "#007aff",
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#007aff",
    padding: 14,
    borderRadius: 8,
    marginTop: 20,
    alignItems: "center",
  },
  buttonDisabled: {
    backgroundColor: "#ccc",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
});
