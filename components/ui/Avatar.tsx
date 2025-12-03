import { Image, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type Props = {
  size?: number;
  uri?: string | null;
};

export default function Avatar({ size = 96, uri }: Props) {
  const borderRadius = size / 2;
  if (uri) {
    return (
      <Image
        source={{ uri }}
        style={{ width: size, height: size, borderRadius, backgroundColor: "#F4FAF4" }}
      />
    );
  }
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius,
        backgroundColor: "#FFFFFF",
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 4,
        elevation: 4,
      }}
    >
      <MaterialCommunityIcons name="account" size={size * 0.6} color="#1F4E20" />
    </View>
  );
}

