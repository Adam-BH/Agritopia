import { Text, View } from "react-native";
import CatalogItem from "../ui/CatalogItem";
import { FISH_TYPES } from "@/data/types";
import useDetailsNavigation from "@/hooks/useDetailsNavigation";

type FishRecord = {
  typeId: string;
  status: "ready" | "attention" | "healthy";
  dateAdded: Date;
  dateHarvested?: Date;
};

export default function MyFishBoiler() {
  const { openFish } = useDetailsNavigation();
  const items: FishRecord[] = [
    { typeId: "fish_tilapia", status: "healthy", dateAdded: new Date() },
    { typeId: "fish_catfish", status: "attention", dateAdded: new Date() },
    { typeId: "fish_salmon", status: "ready", dateAdded: new Date(), dateHarvested: new Date(new Date().setDate(new Date().getDate() - 1)) },
  ];

  const current = items.filter((it) => !it.dateHarvested);
  const history = items.filter((it) => !!it.dateHarvested);

  return (
    <View style={{ marginTop: 16 }}>
      <View style={{ alignItems: "flex-start" }}>
        <Text style={{ color: "#003300", fontSize: 18, fontWeight: "400" }}>Current</Text>
      </View>
      <View style={{ marginTop: 12 }}>
        {current.map((it, i) => {
          const t = FISH_TYPES.find((f) => f.id === it.typeId);
          return (
            <CatalogItem
              key={`fc-${i}`}
              type="fish"
              name={t?.name ?? "Fish"}
              status={it.status}
              onPress={() => openFish(t?.id)}
            />
          );
        })}
      </View>

      <View style={{ marginTop: 16, alignItems: "flex-start" }}>
        <Text style={{ color: "#003300", fontSize: 18, fontWeight: "400" }}>History</Text>
      </View>
      <View style={{ marginTop: 12 }}>
        {history.map((it, i) => {
          const t = FISH_TYPES.find((f) => f.id === it.typeId);
          return (
            <CatalogItem
              key={`fh-${i}`}
              type="fish"
              name={t?.name ?? "Fish"}
              status={it.status}
              onPress={() => openFish(t?.id)}
            />
          );
        })}
      </View>
    </View>
  );
}
