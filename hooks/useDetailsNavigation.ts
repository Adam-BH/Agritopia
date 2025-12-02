import { useRouter } from "expo-router";

export default function useDetailsNavigation() {
  const router = useRouter();
  const openPlant = (id?: string) => {
    console.log("navigate: plant-details", { id });
    router.push({ pathname: "/plant-details", params: { id } });
  };
  const openFish = (id?: string) => {
    console.log("navigate: fish-details", { id });
    router.push({ pathname: "/fish-details", params: { id } });
  };
  const openByKind = (kind: "plant" | "fish", id?: string) => {
    if (kind === "plant") openPlant(id);
    else openFish(id);
  };
  return { openPlant, openFish, openByKind };
}
