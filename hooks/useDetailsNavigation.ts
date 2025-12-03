import { useRouter } from "expo-router";

export default function useDetailsNavigation() {
  const router = useRouter();
  const openPlant = (id?: string, source?: "catalogue" | "myGarden") => {
    console.log("navigate: plant-details", { id, source });
    router.push({ pathname: "/plant-details", params: { id, source } });
  };
  const openFish = (id?: string, source?: "catalogue" | "myGarden") => {
    console.log("navigate: fish-details", { id, source });
    router.push({ pathname: "/fish-details", params: { id, source } });
  };
  const openByKind = (kind: "plant" | "fish", id?: string) => {
    if (kind === "plant") openPlant(id, "catalogue");
    else openFish(id, "catalogue");
  };
  return { openPlant, openFish, openByKind };
}
