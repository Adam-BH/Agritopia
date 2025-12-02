import { useRouter } from "expo-router";

type Payload = {
  system?: string;
  repeat?: string;
  quantity?: string;
};

export default function useActionsService() {
  const router = useRouter();
  const saveAction = async (payload: Payload) => {
    console.log("actions.save", payload);
    await new Promise((r) => setTimeout(r, 200));
    router.back();
  };
  return { saveAction };
}
