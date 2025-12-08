import useDetailsNavigation from "@/hooks/useDetailsNavigation";
import { getById } from "@/services/catalogueService";
import { Text, View } from "react-native";
import CatalogItem from "../ui/CatalogItem";

type PlantRecord = {
  typeId: string;
  status: "ready" | "attention" | "healthy";
  dateAdded: Date;
  dateHarvested?: Date;
};

export default function MyPlantsBoiler() {
  const { openPlant } = useDetailsNavigation();
  const items: PlantRecord[] = [
    { typeId: "plant_lettuce", status: "healthy", dateAdded: new Date() },
    { typeId: "plant_basil", status: "attention", dateAdded: new Date() },
    { typeId: "plant_spinach", status: "attention", dateAdded: new Date(), dateHarvested: new Date(new Date().setDate(new Date().getDate() - 2)) },
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
          const t = getById(it.typeId);
          return (
            <CatalogItem
              key={`c-${i}`}
              type="plant"
              name={t?.name ?? "Plant"}
              status={it.status}
              imageSource={(t as any)?.imageSource}
              onPress={() => openPlant(t?.id, "myGarden")}
            />
          );
        })}
      </View>

      <View style={{ marginTop: 16, alignItems: "flex-start" }}>
        <Text style={{ color: "#003300", fontSize: 18, fontWeight: "400" }}>History</Text>
      </View>
      <View style={{ marginTop: 12 }}>
        {history.map((it, i) => {
          const t = getById(it.typeId);
          return (
            <CatalogItem
              key={`h-${i}`}
              type="plant"
              name={t?.name ?? "Plant"}
              status={it.status}
              imageSource={(t as any)?.imageSource}
              onPress={() => openPlant(t?.id, "myGarden")}
            />
          );
        })}
      </View>
    </View>
  );
}
