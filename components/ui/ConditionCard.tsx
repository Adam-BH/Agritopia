import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Text, View } from "react-native";

type Props = {
  iconName: keyof typeof MaterialCommunityIcons.glyphMap;
  iconColor: string;
  iconBackgroundColor: string;
  label: string;
  value: string;
};

export default function ConditionCard({ iconName, iconColor, iconBackgroundColor, label, value }: Props) {
  return (
    <View
      style={{
        width: "47%",
        backgroundColor: "#FFFFFF",
        borderRadius: 16,
        padding: 16,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 6,
        elevation: 3,
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <View
        style={{
          width: 48,
          height: 48,
          borderRadius: 12,
          backgroundColor: iconBackgroundColor,
          justifyContent: "center",
          alignItems: "center",
          marginRight: 12,
        }}
      >
        <MaterialCommunityIcons name={iconName} size={24} color={iconColor} />
      </View>
      <View style={{ flex: 1 }}>
        <Text style={{ color: "#1F4E20", fontSize: 15, fontWeight: "600", marginBottom: 4 }}>{label}</Text>
        <Text style={{ color: "#666666", fontSize: 12 }}>{value}</Text>
      </View>
    </View>
  );
}

