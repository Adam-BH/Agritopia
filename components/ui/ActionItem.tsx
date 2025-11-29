import { View, Text, Pressable } from "react-native";

type Props = {
  type: "water" | "wind" | "sun" | "fertilize";
  title: string;
  time: string;
  done?: boolean;
  onToggle?: () => void;
};

const typeColor: Record<Props["type"], string> = {
  water: "#6AB9A9",
  wind: "#82A483",
  sun: "#A2C1A3",
  fertilize: "#A2C1A3",
};

const typeEmoji: Record<Props["type"], string> = {
  water: "💧",
  wind: "🌬️",
  sun: "☀️",
  fertilize: "🌱",
};

export default function ActionItem({ type, title, time, done = false, onToggle }: Props) {
  return (
    <View style={{ backgroundColor: "#FFFFFF", borderRadius: 14, padding: 16, flexDirection: "row", alignItems: "center", marginTop: 12 }}>
      <View style={{ width: 24, height: 24, borderRadius: 12, backgroundColor: typeColor[type], alignItems: "center", justifyContent: "center", marginRight: 12 }}>
        <Text style={{ fontSize: 12 }}>{typeEmoji[type]}</Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text style={{ color: "#1F4E20", fontSize: 16, fontWeight: "600" }}>{title}</Text>
        <Text style={{ color: "#828A89", marginTop: 4, fontSize: 13 }}>{time}</Text>
      </View>
      <Pressable onPress={onToggle} style={{ width: 24, height: 24, borderRadius: 12, borderWidth: 1, borderColor: "#1F4E20", alignItems: "center", justifyContent: "center", backgroundColor: done ? "#1F4E20" : "transparent" }}>
        <Text style={{ color: done ? "#FFFFFF" : "#1F4E20", fontSize: 14 }}>{done ? "✓" : ""}</Text>
      </Pressable>
    </View>
  );
}
