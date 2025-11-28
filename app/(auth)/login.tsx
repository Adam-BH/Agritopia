import { router } from "expo-router";
import { Pressable, Text, TextInput, View } from "react-native";

export default function Login() {
  return (
    <View style={{ flex: 1, padding: 24, justifyContent: "center" }}>
      <Text style={{ fontSize: 28, fontWeight: "600", color: "#1F4E20", textAlign: "center", marginBottom: 24 }}>
        Agritopia
      </Text>
      <Text style={{ fontSize: 18, fontWeight: "500", marginBottom: 12 }}>Log in</Text>
      <TextInput
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        style={{ borderWidth: 1, borderColor: "#E6E6E6", borderRadius: 12, paddingHorizontal: 14, paddingVertical: 12, marginBottom: 12 }}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        style={{ borderWidth: 1, borderColor: "#E6E6E6", borderRadius: 12, paddingHorizontal: 14, paddingVertical: 12, marginBottom: 20 }}
      />
      <Pressable
        onPress={() => router.replace("/(tabs)/home")}
        style={{ backgroundColor: "#1F4E20", paddingVertical: 14, borderRadius: 12 }}
      >
        <Text style={{ color: "#FFFFFF", textAlign: "center", fontWeight: "600" }}>Continue</Text>
      </Pressable>
      <Pressable onPress={() => router.push("/(auth)/signup")} style={{ paddingVertical: 14 }}>
        <Text style={{ color: "#003300", textAlign: "center" }}>No account? Sign up</Text>
      </Pressable>
    </View>
  );
}
