import { router } from "expo-router";
import { useState } from "react";
import { KeyboardAvoidingView, Platform, Pressable, ScrollView, Text, View } from "react-native";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <KeyboardAvoidingView style={{ flex: 1, backgroundColor: "#F4FAF4" }} behavior={Platform.OS === "ios" ? "padding" : undefined}>
      <ScrollView contentContainerStyle={{ padding: 24 }} keyboardShouldPersistTaps="handled">

      <View style={{ marginTop: 120, alignItems: "center" }}>
        <Text style={{ fontSize: 28, fontWeight: "700", color: "#003300" }}>Hello Again!</Text>
        <Text style={{ fontSize: 15, color: "#707B81", marginTop: 8 }}>Welcome Back You’ve Been Missed!</Text>
      </View>

      <View style={{ marginTop: 32, gap: 16 }}>
        <Input label="Email Address" value={email} onChangeText={setEmail} placeholder="Email" keyboardType="email-address" autoCapitalize="none" />
        <Input label="Password" value={password} onChangeText={setPassword} placeholder="Password" secureTextEntry />
        <Pressable style={{ alignSelf: "flex-end", paddingVertical: 4 }}>
          <Text style={{ color: "#707B81", fontSize: 13 }}>Recovery Password</Text>
        </Pressable>
      </View>

      <View style={{ marginTop: 28, gap: 12 }}>
        <Button title="Sign In" variant="primary" onPress={() => router.replace("/(tabs)/home")} />
        <Button title="Sign in with google" variant="secondary" leftIconName="google" />
      </View>

      <View style={{ marginTop: 24, flexDirection: "row", justifyContent: "center", gap: 8 }}>
        <Text style={{ color: "#707B81", fontSize: 12 }}>Don’t have an account?</Text>
        <Pressable onPress={() => router.push("/(auth)/signup")}> 
          <Text style={{ color: "#1A2530", fontSize: 12, fontWeight: "500" }}>Sign Up for free</Text>
        </Pressable>
      </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
