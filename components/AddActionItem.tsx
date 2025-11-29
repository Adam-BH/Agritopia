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
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 14,
        gap: 12,
      })}
    >
      <View
        style={{
          width: 44,
          height: 44,
          borderRadius: 22,
          backgroundColor: "#A6DABD",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <MaterialCommunityIcons name={icon as any} size={22} color="#FFFFFF" />
      </View>
      <Text style={{ fontSize: 16, color: "#1F4E20", fontWeight: "600" }}>{label}</Text>
      <MaterialCommunityIcons name="chevron-right" size={20} color="#1F4E20" style={{ marginLeft: "auto" }} />
    </Pressable>
  );
}
