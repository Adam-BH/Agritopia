import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";

type ControlCardProps = {
  icon: React.ComponentProps<typeof Ionicons>["name"];
  title: string;
  value: string;
  showDecrease?: boolean;
  showIncrease?: boolean;
  showPower?: boolean;
  marginBottom?: number;
};

export default function ControlCard({
  icon,
  title,
  value,
  showDecrease = true,
  showIncrease = true,
  showPower = false,
  marginBottom = 12,
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
          <View
            style={{
              flex: 1,
              backgroundColor: "#E8F5E9",
              borderRadius: 12,
              padding: 12,
              alignItems: "center",
            }}
          >
            <Ionicons name="remove-circle-outline" size={24} color="#1F4E20" />
          </View>
        )}
        {showIncrease && (
          <View
            style={{
              flex: 1,
              backgroundColor: "#E8F5E9",
              borderRadius: 12,
              padding: 12,
              alignItems: "center",
            }}
          >
            <Ionicons name="add-circle-outline" size={24} color="#1F4E20" />
          </View>
        )}
        {showPower && (
          <View
            style={{
              flex: 1,
              backgroundColor: "#E8F5E9",
              borderRadius: 12,
              padding: 12,
              alignItems: "center",
            }}
          >
            <Ionicons name="power-outline" size={24} color="#1F4E20" />
          </View>
        )}
      </View>
    </View>
  );
}

