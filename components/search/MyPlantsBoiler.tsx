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
      <Text style={{ color: "#003300", fontSize: 18, fontWeight: "700", marginBottom: 8 }}>Current Plants</Text>
      {current.map((it, i) => (
        <PlantItem key={`c-${i}`} type="plant" name={it.name} status={it.status} />
      ))}

      <Text style={{ color: "#003300", fontSize: 18, fontWeight: "700", marginTop: 16, marginBottom: 8 }}>History</Text>
      {history.map((it, i) => (
        <PlantItem key={`h-${i}`} type="plant" name={it.name} status={it.status} />
      ))}
    </View>
  );
}
