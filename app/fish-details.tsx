import DetailsScreen from "@/components/details/DetailsScreen";
import { useLocalSearchParams } from "expo-router";

export default function FishDetails() {
  const params = useLocalSearchParams<{ id?: string; source?: string }>();
  const id = (params.id as string | undefined) ?? "";
  const origin = (params.source as "catalogue" | "myGarden" | undefined) ?? "catalogue";
  return <DetailsScreen type="fish" id={id} origin={origin} />;
}

