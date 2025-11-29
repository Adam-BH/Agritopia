import { View } from "react-native";
import PlantItem from "../ui/PlantItem";

export default function MyPlantsBoiler() {
  const items = [
    { name: "Anthurium", status: "healthy" as const },
    { name: "Potato", status: "attention" as const },
    { name: "Ginger", status: "attention" as const },
    { name: "Tomato", status: "ready" as const },
    { name: "Sunflower", status: "ready" as const },
  ];
  return (
    <View style={{ marginTop: 16 }}>
      {items.map((it, i) => (
        <PlantItem
          key={i}
          name={it.name}
          status={it.status}
          onArrowPress={() => console.log("Arrow", it.name)}
          onDelete={() => console.log("Delete", it.name)}
        />
      ))}
    </View>
  );
}
