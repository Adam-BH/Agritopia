import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import { Image, Pressable, Text, View } from "react-native";

type Status = "ready" | "attention" | "healthy";

type Props = {
  type?: "plant" | "fish";
  name: string;
  status: Status;
  imageUri?: string;
  onPress?: () => void;
  onDelete?: () => void;
};

export default function PlantItem({ type = "plant", name, status, imageUri, onPress, onDelete }: Props) {
  const [expanded, setExpanded] = useState(false);
  const [hidden, setHidden] = useState(false);

  const statusMeta: Record<Status, { label: string; color: string; icon: React.ComponentProps<typeof MaterialCommunityIcons>["name"]; textColor: string }> = {
    ready: { label: "Ready to harvest", color: "#a3e635", icon: "basket", textColor: "#1f2937" },
    attention: { label: "Need attention", color: "#f59e0b", icon: "alert-circle", textColor: "#1f2937" },
    healthy: { label: "Healthy", color: "#22c55e", icon: "leaf", textColor: "#ffffff" },
  };

  const meta = statusMeta[status];

  if (hidden) return null;

  return (
    <Pressable onPress={onPress} style={{ backgroundColor: "#FFFFFF", borderRadius: 14, padding: 12, marginBottom: 16 }}>
      <View style={{ position: "absolute", right: 8, top: 12 }}>
        <Pressable
          onPress={() => {
            setExpanded((prev) => !prev);
            console.log("toggle", name, !expanded);
          }}
        >
          <MaterialCommunityIcons name={expanded ? "chevron-down" : "chevron-right"} size={22} color="#003300" />
        </Pressable>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
        <View style={{ width: 72, height: 72, borderRadius: 12, backgroundColor: "#E2E2E2", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
          {imageUri ? (
            <Image source={{ uri: imageUri }} style={{ width: 56, height: 56, resizeMode: "cover" }} />
          ) : (
            <MaterialCommunityIcons name={type === "fish" ? "fish" : "sprout"} size={36} color="#1F4E20" />
          )}
        </View>
        <View style={{ flex: 1 }}>
          <Text style={{ color: "#1F4E20", fontSize: 16, fontWeight: "600" }}>{name}</Text>
          <View style={{ marginTop: 6, flexDirection: "row", alignItems: "center" }}>
            <View style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: 10, height: 24, borderRadius: 12, backgroundColor: meta.color }}>
              <MaterialCommunityIcons name={meta.icon} size={16} color={meta.textColor} />
              <Text style={{ marginLeft: 6, fontSize: 12, color: meta.textColor, fontWeight: "600" }}>{meta.label}</Text>
            </View>
          </View>
        </View>
      </View>
    </Pressable>
  );
}
