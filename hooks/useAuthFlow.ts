import { auth } from "@/config/firebase";
import { signInWithEmail, signOut, signUpWithEmail } from "@/services/auth";
import { makeRedirectUri, Prompt, ResponseType, useAuthRequest } from "expo-auth-session";
import { router } from "expo-router";
import * as WebBrowser from "expo-web-browser";
import { GoogleAuthProvider, signInWithCredential } from "firebase/auth";
import { Alert } from "react-native";

WebBrowser.maybeCompleteAuthSession();

export default function useAuthFlow() {
  const discovery = { authorizationEndpoint: "https://accounts.google.com/o/oauth2/v2/auth" } as const;
  const clientId = process.env.EXPO_PUBLIC_GOOGLE_OAUTH_CLIENT_ID as string;
  const redirectUri = makeRedirectUri({ scheme: "agritopia" });
  const [request, , promptAsync] = useAuthRequest(
    {
      clientId,
      redirectUri,
      responseType: ResponseType.IdToken,
      scopes: ["openid", "email", "profile"],
      prompt: Prompt.Consent,
    },
    discovery
  );
  const signIn = async (email: string, password: string) => {
    const { error } = await signInWithEmail(email, password);
    if (error) return Alert.alert("Sign in failed", error.message);
    router.replace("/(tabs)/home");
  };
  const signUp = async (name: string, email: string, password: string, phone: string) => {
    const { error } = await signUpWithEmail(name, email, password, phone);
    if (error) return Alert.alert("Sign up failed", error.message);
    router.replace("/(tabs)/home");
  };
  const signInGoogle = async () => {
    if (!request) return Alert.alert("Google sign-in failed", "Auth request not ready");
    const result = await promptAsync();
    if (result.type !== "success") return Alert.alert("Google sign-in failed", "OAuth flow canceled or failed");
    const token = (result as any)?.params?.id_token as string | undefined;
    if (!token) return Alert.alert("Google sign-in failed", "No id_token returned");
    try {
      const cred = GoogleAuthProvider.credential(token);
      await signInWithCredential(auth, cred);
      router.replace("/(tabs)/home");
    } catch (e: any) {
      return Alert.alert("Google sign-in failed", e?.message ?? "Error");
    }
  };
  const logout = async () => {
    const { error } = await signOut();
    if (error) return Alert.alert("Logout failed", error.message);
    router.replace("/(auth)/login");
  };
  const goToSignup = () => router.push("/(auth)/signup");
  const goToLogin = () => router.push("/(auth)/login");
  return { signIn, signUp, signInGoogle, logout, goToSignup, goToLogin };
}
