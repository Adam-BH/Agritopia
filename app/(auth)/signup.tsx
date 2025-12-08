import useAuthFlow from "@/hooks/useAuthFlow";
import { useState } from "react";
import { KeyboardAvoidingView, Platform, ScrollView, Text, View, Pressable } from "react-native";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const { signUp, signInGoogle, goToLogin } = useAuthFlow();

  return (
    <KeyboardAvoidingView style={{ flex: 1, backgroundColor: "#F4FAF4" }} behavior={Platform.OS === "ios" ? "padding" : undefined}>
      <ScrollView contentContainerStyle={{ padding: 24 }} keyboardShouldPersistTaps="handled">
      <View style={{ marginTop: 80, alignItems: "center" }}>
        <Text style={{ fontSize: 28, fontWeight: "700", color: "#003300" }}>Create Account</Text>
        <Text style={{ fontSize: 15, color: "#707B81", marginTop: 8 }}>Let’s Create Account Together</Text>
      </View>

      <View style={{ marginTop: 32, gap: 16 }}>
        <Input label="Your Name" value={name} onChangeText={setName} placeholder="Your Name" autoCapitalize="words" />
        <Input label="Email Address" value={email} onChangeText={setEmail} placeholder="Email" keyboardType="email-address" autoCapitalize="none" />
        <Input label="Password" value={password} onChangeText={setPassword} placeholder="Password" secureTextEntry />
        <Input label="Phone number" value={phone} onChangeText={setPhone} placeholder="Enter phone number" keyboardType="phone-pad" />
      </View>

      <View style={{ marginTop: 28, gap: 12 }}>
        <Button title="Sign Up" variant="primary" onPress={() => signUp(name, email, password, phone)} />
        <Button title="Sign in with google" variant="secondary" leftIconName="google" onPress={() => signInGoogle()} />
      </View>

      <View style={{ marginTop: 24, flexDirection: "row", justifyContent: "center", gap: 8 }}>
        <Text style={{ color: "#707B81", fontSize: 12 }}>Already have an account?</Text>
        <Pressable onPress={() => goToLogin()}> 
          <Text style={{ color: "#1A2530", fontSize: 12, fontWeight: "500" }}>Log in</Text>
        </Pressable>
      </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
