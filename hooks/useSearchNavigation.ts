import { useRouter } from "expo-router";

export default function useSearchNavigation() {
  const router = useRouter();
  const openCatalogueSearch = () => {
    console.log("navigate: catalogue", { focus: true });
    router.push({ pathname: "/(tabs)/catalogue", params: { focus: "1" } });
  };
  return { openCatalogueSearch };
}
