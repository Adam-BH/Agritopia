import { Text, View } from "react-native";
import PlantItem from "../ui/PlantItem";

type FishRecord = {
  name: string;
  status: "ready" | "attention" | "healthy";
  dateAdded: Date;
  dateHarvested?: Date;
};

export default function MyFishBoiler() {
  const items: FishRecord[] = [
    { name: "Tilapia", status: "healthy", dateAdded: new Date() },
    { name: "Catfish", status: "attention", dateAdded: new Date() },
    { name: "Salmon", status: "ready", dateAdded: new Date(), dateHarvested: new Date(new Date().setDate(new Date().getDate() - 1)) },
  ];

  const current = items.filter((it) => !it.dateHarvested);
  const history = items.filter((it) => !!it.dateHarvested);

  return (
    <View style={{ marginTop: 16 }}>
      <Text style={{ color: "#003300", fontSize: 18, fontWeight: "700", marginBottom: 8 }}>My Fishs</Text>

      <Text style={{ color: "#003300", fontSize: 16, fontWeight: "700", marginBottom: 8 }}>Current</Text>
      {current.map((it, i) => (
        <PlantItem key={`fc-${i}`} type="fish" name={it.name} status={it.status} />
      ))}

      <Text style={{ color: "#003300", fontSize: 16, fontWeight: "700", marginTop: 16, marginBottom: 8 }}>History</Text>
      {history.map((it, i) => (
        <PlantItem key={`fh-${i}`} type="fish" name={it.name} status={it.status} />
      ))}
    </View>
  );
}
