import { useLocalSearchParams } from "expo-router";
import DetailsScreen from "@/components/details/DetailsScreen";

export default function PlantDetails() {
  const params = useLocalSearchParams<{ id?: string; source?: string }>();
  const id = (params.id as string | undefined) ?? "";
  const origin = (params.source as "catalogue" | "myGarden" | undefined) ?? "catalogue";
  return <DetailsScreen type="plant" id={id} origin={origin} />;
}

