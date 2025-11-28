import React from "react";
import { TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { router } from "expo-router";

export default function QrButton() {
  const insets = useSafeAreaInsets();
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => router.push("/scan")}
      style={{
        position: "absolute",
        bottom: insets.bottom + 16,
        left: "50%",
        marginLeft: -32,
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: "#1F4E20",
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000000",
        shadowOpacity: 0.25,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 6 },
        elevation: 8,
        borderWidth: 0,
      }}
    >
      <MaterialCommunityIcons name="qrcode" size={28} color="#FFFFFF" />
    </TouchableOpacity>
  );
}
