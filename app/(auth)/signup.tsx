import { MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { KeyboardAvoidingView, Platform, Pressable, ScrollView, Text, View } from "react-native";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [location, setLocation] = useState<string | null>(null);

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
        <View>
          <Text style={{ fontSize: 16, fontWeight: "500", color: "#1A2530", marginBottom: 8, marginLeft: 8 }}>Location</Text>
          <Pressable
            onPress={() => setLocation("Your Location")}
            style={{ backgroundColor: "#FFFFFF", borderRadius: 50, paddingHorizontal: 14, paddingVertical: 16, flexDirection: "row", alignItems: "center", gap: 12 }}
          >
            <MaterialCommunityIcons name="map-marker" size={24} color="#1A2530" />
            <Text style={{ color: "#1A2530", fontSize: 14 }}>{location ?? "Choose Location"}</Text>
          </Pressable>
        </View>
      </View>

      <View style={{ marginTop: 28, gap: 12 }}>
        <Button title="Sign Up" variant="primary" onPress={() => router.replace("/(tabs)/home")} />
        <Button title="Sign in with google" variant="secondary" leftIconName="google" />
      </View>

      <View style={{ marginTop: 24, flexDirection: "row", justifyContent: "center", gap: 8 }}>
        <Text style={{ color: "#707B81", fontSize: 12 }}>Already have an account?</Text>
        <Pressable onPress={() => router.push("/(auth)/login")}> 
          <Text style={{ color: "#1A2530", fontSize: 12, fontWeight: "500" }}>Log in</Text>
        </Pressable>
      </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
