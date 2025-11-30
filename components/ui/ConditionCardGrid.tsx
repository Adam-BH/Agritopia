import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import ConditionCard from "./ConditionCard";

type Condition = {
  iconName: keyof typeof MaterialCommunityIcons.glyphMap;
  iconColor: string;
  iconBackgroundColor: string;
  label: string;
  value: string;
};

type Props = {
  title: string;
  conditions: Condition[];
};

export default function ConditionCardGrid({ title, conditions }: Props) {
  return (
    <View style={{ marginBottom: 32 }}>
      <Text style={{ color: "#1F4E20", fontSize: 16, fontWeight: "600", marginBottom: 16 }}>{title}</Text>
      <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 12 }}>
        {conditions.map((condition, index) => (
          <ConditionCard key={index} {...condition} />
        ))}
      </View>
    </View>
  );
}

