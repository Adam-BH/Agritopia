import { router } from "expo-router";
import { useEffect } from "react";
import { ActivityIndicator, Text, View } from "react-native";

export default function Splash() {
  useEffect(() => {
    const t = setTimeout(() => {
      router.replace("/(auth)/login");
    }, 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#FFFFFF" }}>
      <Text style={{ fontSize: 32, fontWeight: "700", color: "#1F4E20", marginBottom: 16 }}>Agritopia</Text>
      <ActivityIndicator size="small" color="#1F4E20" />
    </View>
  );
}
