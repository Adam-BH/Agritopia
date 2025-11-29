import { View } from "react-native";
import PlantItem from "../ui/PlantItem";

export default function MyPlantsBoiler() {
  const items = [
    { name: "Anthurium", status: "Healthy", statusColor: "#828A89", badges: [{ type: "water", color: "#6AB9A9" }, { type: "wind", color: "#82A483" }] },
    { name: "Potato", status: "Need Attention", statusColor: "#AE0C0C", badges: [{ type: "wind", color: "#82A483" }, { type: "sun", color: "#A2C1A3" }] },
    { name: "Ginger", status: "Add Fertilizer", statusColor: "#828A89", badges: [{ type: "water", color: "#6AB9A9" }, { type: "sun", color: "#A2C1A3" }] },
    { name: "Tomato", status: "Ready to harvest", statusColor: "#828A89", badges: [{ type: "wind", color: "#82A483" }, { type: "water", color: "#6AB9A9" }] },
    { name: "Sunflower", status: "Ready to harvest", statusColor: "#828A89", badges: [{ type: "wind", color: "#82A483" }, { type: "water", color: "#6AB9A9" }] },
  ];
  return (
    <View style={{ marginTop: 16 }}>
      {items.map((it, i) => (
        <PlantItem key={i} name={it.name} status={it.status} statusColor={it.statusColor} badges={it.badges as any} />
      ))}
    </View>
  );
}
