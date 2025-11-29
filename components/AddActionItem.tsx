import React from "react";
import { Pressable, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type Props = {
  label: string;
  icon: string;
  onPress?: () => void;
};

export default function AddActionItem({ label, icon, onPress }: Props) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => ({
        opacity: pressed ? 0.8 : 1,
        width: 96,
        alignItems: "center",
        gap: 8,
      })}
    >
      <View
        style={{
          width: 64,
          height: 64,
          borderRadius: 16,
          backgroundColor: "#E7F4E8",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <MaterialCommunityIcons name={icon as any} size={28} color="#1F4E20" />
      </View>
      <Text style={{ fontSize: 14, color: "#1F2937" }}>{label}</Text>
    </Pressable>
  );
}

