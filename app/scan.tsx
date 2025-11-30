import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Scan() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Pressable
        onPress={() => router.back()}
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
        }}
      >
        <MaterialCommunityIcons name="arrow-left" size={22} color="#1F4E20" />
      </Pressable>
      <Text>Scan asba ok</Text>
    </View>
  );
}

