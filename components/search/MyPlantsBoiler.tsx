import { Text, View } from "react-native";
import PlantItem from "../ui/PlantItem";

type PlantRecord = {
  name: string;
  status: "ready" | "attention" | "healthy";
  dateAdded: Date;
  dateHarvested?: Date;
};

export default function MyPlantsBoiler() {
  const items: PlantRecord[] = [
    { name: "Anthurium", status: "healthy", dateAdded: new Date() },
    { name: "Potato", status: "attention", dateAdded: new Date() },
    { name: "Ginger", status: "attention", dateAdded: new Date(), dateHarvested: new Date(new Date().setDate(new Date().getDate() - 2)) },
    { name: "Tomato", status: "ready", dateAdded: new Date() },
    { name: "Sunflower", status: "ready", dateAdded: new Date(), dateHarvested: new Date(new Date().setDate(new Date().getDate() - 7)) },
  ];

  const current = items.filter((it) => !it.dateHarvested);
  const history = items.filter((it) => !!it.dateHarvested);

  return (
    <View style={{ marginTop: 16 }}>
      <View style={{ alignItems: "flex-start" }}>
        <Text style={{ color: "#003300", fontSize: 18, fontWeight: "400" }}>Current</Text>
      </View>
      <View style={{ marginTop: 12 }}>
        {current.map((it, i) => (
          <PlantItem key={`c-${i}`} type="plant" name={it.name} status={it.status} />
        ))}
      </View>

      <View style={{ marginTop: 16, alignItems: "flex-start" }}>
        <Text style={{ color: "#003300", fontSize: 18, fontWeight: "400" }}>History</Text>
      </View>
      <View style={{ marginTop: 12 }}>
        {history.map((it, i) => (
          <PlantItem key={`h-${i}`} type="plant" name={it.name} status={it.status} />
        ))}
      </View>
    </View>
  );
}
