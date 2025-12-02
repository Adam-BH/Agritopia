import { router } from "expo-router";

export default function useAuthFlow() {
  const signIn = (email: string, password: string) => {
    console.log("auth.signIn", { email });
    router.replace("/(tabs)/home");
  };
  const signUp = (name: string, email: string, password: string) => {
    console.log("auth.signUp", { name, email });
    router.replace("/(tabs)/home");
  };
  const goToSignup = () => router.push("/(auth)/signup");
  const goToLogin = () => router.push("/(auth)/login");
  return { signIn, signUp, goToSignup, goToLogin };
}
