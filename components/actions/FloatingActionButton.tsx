import React from "react";
import { TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type Props = {
  onPress?: () => void;
};

export default function FloatingActionButton({ onPress }: Props) {
  const insets = useSafeAreaInsets();
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={{
        position: "absolute",
        bottom: insets.bottom + 80,
        right: 24,
        width: 56,
        height: 56,
        borderRadius: 28,
        backgroundColor: "#1F4E20",
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000000",
        shadowOpacity: 0.25,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 6 },
        elevation: 8,
        borderWidth: 0,
        zIndex: 100,
      }}
    >
      <MaterialCommunityIcons name="plus" size={26} color="#FFFFFF" />
    </TouchableOpacity>
  );
}

