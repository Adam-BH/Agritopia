import { Pressable, Text, View, ViewStyle } from "react-native";

type Props = {
  options: string[];
  value: number;
  onChange: (index: number) => void;
  style?: ViewStyle;
};

export default function SegmentToggle({ options, value, onChange, style }: Props) {
  return (
    <View style={[{ height: 50, borderRadius: 15, backgroundColor: "#FFFFFF", flexDirection: "row", overflow: "hidden" }, style]}>
      {options.map((label, i) => {
        const selected = value === i;
        return (
          <Pressable
            key={i}
            onPress={() => onChange(i)}
            style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: selected ? "#1F4E20" : "transparent", borderRadius: 12, margin: 6 }}
          >
            <Text style={{ fontSize: 14, fontWeight: "600", color: selected ? "#FFFFFF" : "#003300" }}>{label}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}
