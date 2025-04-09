import { useSignIn } from "@clerk/clerk-expo";
import { Link, useRouter } from "expo-router";
import { Text, TextInput, Button, View, StyleSheet, TouchableOpacity, ImageBackground  } from "react-native";
import React from "react";

export default function Page() {
  const { signIn, setActive, isLoaded } = useSignIn();
  const router = useRouter();

  const [emailAddress, setEmailAddress] = React.useState("");
  const [password, setPassword] = React.useState("");

  const onSignInPress = async () => {
    if (!isLoaded) return;

    try {
      const signInAttempt = await signIn.create({
        identifier: emailAddress,
        password,
      });

      if (signInAttempt.status === "complete") {
        await setActive({ session: signInAttempt.createdSessionId });
        router.replace("/(tabs)/login");
      } else {
        console.error(JSON.stringify(signInAttempt, null, 2));
      }
    } catch (err) {
      console.error(JSON.stringify(err, null, 2));
    }
  };

  return (
    <ImageBackground
    source={require('@/assets/images/bookbackground.png')} 
    style={styles.background}
    resizeMode="stretch" 
  >
    
    <View style={styles.container}>
      <TextInput
      style={styles.input}
        autoCapitalize="none"
        value={emailAddress}
        placeholder="Enter email"
        onChangeText={(emailAddress) => setEmailAddress(emailAddress)}
      />
      <TextInput
      style={styles.input}
        value={password}
        placeholder="Enter password"
        secureTextEntry={true}
        onChangeText={(password) => setPassword(password)}
      />
<TouchableOpacity style={styles.signin}  onPress={onSignInPress}>
  <Text style={styles.signintext}> Sign in </Text>
</TouchableOpacity>      
      <View style={styles.center}>
        <Text style={styles.text}>Don't have an account?</Text>
        <Link href="/login/(auth)/sign-up">
        <TouchableOpacity style={styles.signup}>
          <Text style={styles.signuptext}>Sign up</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
    </ImageBackground>
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
  signin: {
    marginTop: 10,
    marginBottom: 2,
    backgroundColor: "#006A71",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    width: "50%",  
  },
  container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      padding: 20,
      
     
  },
  signup: {
    marginTop: 2,
    marginBottom: 2,
    backgroundColor: "#006A71",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    width: "100%", 
    justifyContent: "center",
  }, 
  signuptext: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    alignItems: "center",
  justifyContent: "center",
  }, 
  signintext: {
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
