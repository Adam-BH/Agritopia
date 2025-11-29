import { ActivityIndicator, Pressable, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type Props = {
  title: string;
  onPress?: () => void;
  variant?: "primary" | "secondary" | "ghost" | "outline";
  disabled?: boolean;
  loading?: boolean;
  leftIconName?: keyof typeof MaterialCommunityIcons.glyphMap;
  textWeight?: "400" | "500" | "600" | "700" | "800" | "900";
  compact?: boolean;
};

export default function Button({ title, onPress, variant = "primary", disabled, loading, leftIconName, textWeight = "600", compact = false }: Props) {
  const bg = variant === "primary" ? "#1F4E20" : variant === "secondary" ? "#FFFFFF" : variant === "outline" ? "transparent" : "transparent";
  const color = variant === "primary" ? "#FFFFFF" : "#1A2530";
  const borderWidth = variant === "outline" ? 1 : 0;
  const borderColor = variant === "outline" ? "#1A2530" : "transparent";
  const paddingVertical = compact ? 12 : 16;
  const paddingHorizontal = compact ? 24 : 32;
  const fontSize = compact ? 16 : 18;

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled || loading}
      style={{ backgroundColor: bg, paddingVertical, paddingHorizontal, borderRadius: 50, opacity: disabled || loading ? 0.6 : 1, borderWidth, borderColor }}
    >
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 8 }}>
        {loading ? (
          <ActivityIndicator color={color} />
        ) : (
          <>
            {leftIconName ? <MaterialCommunityIcons name={leftIconName} size={24} color={color} /> : null}
            <Text style={{ color, fontSize, fontWeight: textWeight }}>{title}</Text>
          </>
        )}
      </View>
    </Pressable>
  );
}
