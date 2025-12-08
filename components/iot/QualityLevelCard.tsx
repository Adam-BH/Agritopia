import { Text, View } from "react-native";
import Svg, { Circle, G } from "react-native-svg";

// Circular Progress Component
function CircularProgress({ value, max = 100, unit, color }: { value: number; max?: number; unit?: string; color: string }) {
  const size = 100;
  const strokeWidth = 8;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const denom = max > 0 ? max : 100;
  const progress = Math.min(Math.max(value / denom, 0), 1);
  const strokeDashoffset = circumference * (1 - progress);

  return (
    <View style={{ width: size, height: size, position: "relative", justifyContent: "center", alignItems: "center" }}>
      <Svg width={size} height={size} style={{ position: "absolute" }}>
        {/* Background circle */}
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#E0E0E0"
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        {/* Progress arc */}
        {progress > 0 && (
          <G rotation={-90} originX={size / 2} originY={size / 2}>
            <Circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              stroke={color}
              strokeWidth={strokeWidth}
              fill="transparent"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
            />
          </G>
        )}
      </Svg>
      {/* Center value with unit */}
      <Text style={{ color: "#1F4E20", fontSize: 18, fontWeight: "700" }}>
        {value.toFixed(2)}{'\n'}{unit ? ` ${unit}` : ""}
      </Text>
  </View>)
}

type QualityLevelCardProps = {
  value: number;
  color: string;
  label: string;
  unit?: string;
  max?: number;
};

export default function QualityLevelCard({ value, color, label, unit, max }: QualityLevelCardProps) {
  return (
    <View
      style={{
        backgroundColor: "#FFFFFF",
        borderRadius: 16,
        padding: 16,
        width: "47%",
        alignItems: "center",
        overflow: "hidden",
        minHeight: 160,
      }}
    >
      <CircularProgress value={value} max={max} unit={unit} color={color} />
      <Text
        style={{ color: "#1F4E20", fontSize: 14, fontWeight: "600", marginTop: 12, textAlign: "center", flexWrap: "wrap", lineHeight: 18, maxWidth: "100%" }}
        numberOfLines={2}
        ellipsizeMode="tail"
      >
        {label}
      </Text>
    </View>
  );
}
