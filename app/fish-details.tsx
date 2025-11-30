import DetailsScreen from "@/components/details/DetailsScreen";
import { useLocalSearchParams } from "expo-router";

export default function FishDetails() {
  const params = useLocalSearchParams<{ id?: string }>();
  const id = (params.id as string | undefined) ?? "";
  return <DetailsScreen type="fish" id={id} />;
}

