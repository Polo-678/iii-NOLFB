import * as React from "react";
import { Text, TextInput, Button, View, TouchableOpacity } from "react-native";
import { useSignUp } from "@clerk/clerk-expo";
import { useRouter } from "expo-router";

export default function SignUpScreen() {
  //Loads Clerk authentication system
  const { isLoaded, signUp, setActive } = useSignUp();
  const router = useRouter();

  const [emailAddress, setEmailAddress] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [role, setRole] = React.useState("");
  const [pendingVerification, setPendingVerification] = React.useState(false);
  const [code, setCode] = React.useState("");

  const onSignUpPress = async () => {
    console.log("isLoaded: " + isLoaded);
    console.log("role " + role);
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
    } catch (err) {
      alert(JSON.stringify(err, null, 2));
      console.error(JSON.stringify(err, null, 2));
    }
  };

  const onVerifyPress = async () => {
    console.log("isLoaded: " + isLoaded);
    console.log("role " + role);

    if (!isLoaded) return;

    try {
      const signUpAttempt = await signUp.attemptEmailAddressVerification({
        code,
      });

      if (signUpAttempt.status === "complete") {
        await setActive({ session: signUpAttempt.createdSessionId });
        if (role === "student") {
          router.replace("/dashboard/students");
        } else if (role === "teacher") {
          router.replace("/dashboard/teacher");
        } else {
          router.replace("/courses/course3");
        }
      } else {
        console.error(JSON.stringify(signUpAttempt, null, 2));
      }
    } catch (err) {
      alert(JSON.stringify(err, null, 2));
      console.error(JSON.stringify(err, null, 2));
    }
  };

  if (pendingVerification) {
    return (
      <View>
        <Text>Verify your email</Text>
        <TextInput
          value={code}
          placeholder="Enter your verification code"
          onChangeText={(code) => setCode(code)}
        />
        <Button title="Verify" onPress={onVerifyPress} />
      </View>
    );
  }

  return (
    <View>
      <Text>Sign up</Text>
      <TextInput
        autoCapitalize="none"
        value={emailAddress}
        placeholder="Enter email"
        onChangeText={(email) => setEmailAddress(email)}
      />
      <TextInput
        value={password}
        placeholder="Enter password"
        secureTextEntry={true}
        onChangeText={(password) => setPassword(password)}
      />

      <Text>Select your role:</Text>
      <TouchableOpacity onPress={() => setRole("student")}>
        <Text style={{ color: role === "student" ? "blue" : "black" }}>
          Student
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setRole("teacher")}>
        <Text style={{ color: role === "teacher" ? "blue" : "black" }}>
          Teacher
        </Text>
      </TouchableOpacity>

      <Button title="Continue" onPress={onSignUpPress} disabled={!role} />
    </View>
  );
}
