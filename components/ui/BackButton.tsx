import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, ViewStyle } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type Props = {
  size?: number;
  color?: string;
  style?: ViewStyle;
  onPress?: () => void;
};

export default function BackButton({ size = 22, color = "#1F4E20", style, onPress }: Props) {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  return (
    <Pressable
      onPress={onPress ?? (() => router.back())}
      style={{
        position: "absolute",
        top: insets.top + 16,
        left: 16,
        width: 44,
        height: 44,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 22,
        backgroundColor: "#FFFFFF",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 4,
        elevation: 4,
        zIndex: 10,
        ...(style ?? {}),
      }}
    >
      <MaterialCommunityIcons name="arrow-left" size={size} color={color} />
    </Pressable>
  );
}

