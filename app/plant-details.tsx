import { useLocalSearchParams } from "expo-router";
import DetailsScreen from "@/components/details/DetailsScreen";

export default function PlantDetails() {
  const params = useLocalSearchParams<{ id?: string }>();
  const id = (params.id as string | undefined) ?? "";
  return <DetailsScreen type="plant" id={id} />;
}

