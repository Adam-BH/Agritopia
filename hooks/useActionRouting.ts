import { useRouter } from "expo-router";

export default function useActionRouting() {
  const router = useRouter();
  const addAction = (label: string) => {
    console.log("navigate: set-action", { action: label });
    router.push({ pathname: "/set-action", params: { action: label } });
  };
  return { addAction };
}
