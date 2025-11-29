import { Image, Pressable, Text, View } from "react-native";

type Badge = {
  type: "water" | "wind" | "sun";
  color: string; // background circle color
};

type Props = {
  kind?: "plant" | "fish";
  name: string;
  status: string;
  statusColor?: string; // e.g., "#828A89" or "#AE0C0C"
  imageUri?: string;
  badges?: Badge[];
  onPress?: () => void;
  onDelete?: () => void;
};

export default function PlantItem({ kind = "plant", name, status, statusColor = "#828A89", imageUri, badges = [], onPress, onDelete }: Props) {
  return (
    <Pressable onPress={onPress} style={{ backgroundColor: "#FFFFFF", height: 96, borderRadius: 14, paddingRight: 40, marginBottom: 16 }}>
      <View style={{ position: "absolute", right: 8, top: 16 }}>
        <Pressable onPress={onDelete}>
          <Text style={{ fontSize: 12, color: "#828A89" }}>🗑️</Text>
        </Pressable>
      </View>
      <View style={{ position: "absolute", right: 8, top: 48 }}>
        <Text style={{ fontSize: 18, color: "#003300" }}>{"›"}</Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center", height: 72, marginLeft: 16.5, marginTop: 12 }}>
        <View style={{ width: 72, height: 72, borderRadius: 12, backgroundColor: "#E2E2E2", alignItems: "center", justifyContent: "center", overflow: "hidden", paddingHorizontal: 8, paddingVertical: 10 }}>
          {imageUri ? (
            <Image source={{ uri: imageUri }} style={{ width: 56, height: 58, resizeMode: "cover", transform: [{ rotateX: "180deg" }, { scaleY: -1 }] }} />
          ) : (
            <Text style={{ fontSize: 32 }}>{kind === "fish" ? "🐟" : "🌿"}</Text>
          )}
        </View>
        <View style={{ marginLeft: 11.5, height: 44, justifyContent: "center" }}>
          <Text style={{ color: "#1F4E20", fontSize: 16, fontWeight: "600" }}>{name}</Text>
          <Text style={{ color: statusColor, fontSize: 13 }}>{status}</Text>
        </View>
        <View style={{ marginLeft: 12, flexDirection: "row" }}>
          {badges.map((b, idx) => (
            <View key={idx} style={{ width: 20, height: 20, borderRadius: 10, backgroundColor: b.color, alignItems: "center", justifyContent: "center", marginRight: 7.5 }}>
              <Text style={{ fontSize: 12 }}>{b.type === "water" ? "💧" : b.type === "wind" ? "🌬️" : "☀️"}</Text>
            </View>
          ))}
        </View>
      </View>
    </Pressable>
  );
}
