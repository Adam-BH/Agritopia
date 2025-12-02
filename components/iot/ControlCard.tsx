import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Pressable, Text, View } from "react-native";

type ControlCardProps = {
  icon: React.ComponentProps<typeof Ionicons>["name"];
  title: string;
  value: string;
  showDecrease?: boolean;
  showIncrease?: boolean;
  showPower?: boolean;
  marginBottom?: number;
  onDecrease?: () => void;
  onIncrease?: () => void;
  onTogglePower?: () => void;
};

export default function ControlCard({
  icon,
  title,
  value,
  showDecrease = true,
  showIncrease = true,
  showPower = false,
  marginBottom = 12,
  onDecrease,
  onIncrease,
  onTogglePower,
}: ControlCardProps) {
  return (
    <View
      style={{
        backgroundColor: "#FFFFFF",
        borderRadius: 16,
        padding: 20,
        marginBottom,
      }}
    >
      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons name={icon} size={24} color="#1F4E20" style={{ marginRight: 12 }} />
          <Text style={{ color: "#1F4E20", fontSize: 16, fontWeight: "600" }}>{title}</Text>
        </View>
        <Text style={{ color: "#1F4E20", fontSize: 18, fontWeight: "700" }}>{value}</Text>
      </View>
      <View style={{ flexDirection: "row", gap: 8 }}>
        {showDecrease && (
          <Pressable
            style={{
              flex: 1,
              backgroundColor: "#E8F5E9",
              borderRadius: 12,
              padding: 12,
              alignItems: "center",
            }}
            onPress={onDecrease}
          >
            <Ionicons name="remove-circle-outline" size={24} color="#1F4E20" />
          </Pressable>
        )}
        {showIncrease && (
          <Pressable
            style={{
              flex: 1,
              backgroundColor: "#E8F5E9",
              borderRadius: 12,
              padding: 12,
              alignItems: "center",
            }}
            onPress={onIncrease}
          >
            <Ionicons name="add-circle-outline" size={24} color="#1F4E20" />
          </Pressable>
        )}
        {showPower && (
          <Pressable
            style={{
              flex: 1,
              backgroundColor: "#E8F5E9",
              borderRadius: 12,
              padding: 12,
              alignItems: "center",
            }}
            onPress={onTogglePower}
          >
            <Ionicons name="power-outline" size={24} color="#1F4E20" />
          </Pressable>
        )}
      </View>
    </View>
  );
}

