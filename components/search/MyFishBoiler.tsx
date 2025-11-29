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
      <View style={{ alignItems: "flex-start" }}>
        <Text style={{ color: "#003300", fontSize: 18, fontWeight: "400" }}>Current</Text>
      </View>
      <View style={{ marginTop: 12 }}>
        {current.map((it, i) => (
          <PlantItem key={`fc-${i}`} type="fish" name={it.name} status={it.status} />
        ))}
      </View>

      <View style={{ marginTop: 16, alignItems: "flex-start" }}>
        <Text style={{ color: "#003300", fontSize: 18, fontWeight: "400" }}>History</Text>
      </View>
      <View style={{ marginTop: 12 }}>
        {history.map((it, i) => (
          <PlantItem key={`fh-${i}`} type="fish" name={it.name} status={it.status} />
        ))}
      </View>
    </View>
  );
}
