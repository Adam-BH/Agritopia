import { ActivityIndicator, Pressable, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type Props = {
  title: string;
  onPress?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  disabled?: boolean;
  loading?: boolean;
  leftIconName?: keyof typeof MaterialCommunityIcons.glyphMap;
};

export default function Button({ title, onPress, variant = "primary", disabled, loading, leftIconName }: Props) {
  const bg = variant === "primary" ? "#1F4E20" : variant === "secondary" ? "#FFFFFF" : "transparent";
  const color = variant === "primary" ? "#FFFFFF" : "#1A2530";
  const borderWidth = variant === "secondary" ? 0 : 0;

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled || loading}
      style={{ backgroundColor: bg, paddingVertical: 16, paddingHorizontal: 32, borderRadius: 50, opacity: disabled || loading ? 0.6 : 1, borderWidth }}
    >
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 8 }}>
        {loading ? (
          <ActivityIndicator color={color} />
        ) : (
          <>
            {leftIconName ? <MaterialCommunityIcons name={leftIconName} size={24} color={color} /> : null}
            <Text style={{ color, fontSize: 18, fontWeight: "600" }}>{title}</Text>
          </>
        )}
      </View>
    </Pressable>
  );
}
