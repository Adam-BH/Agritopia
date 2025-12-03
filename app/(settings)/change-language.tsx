import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import HeaderWithBack from "@/components/shared/HeaderWithBack";
import { useLanguage } from "../../contexts/LanguageContext";

const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "fr", label: "Français" },
  { code: "es", label: "Español" },
];

export default function ChangeLanguage() {
  const router = useRouter();
  const { language, setLanguage } = useLanguage();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F4FAF4" }} edges={["top"]}>
      <View style={{ paddingHorizontal: 24, paddingTop: 16 }}>
        <HeaderWithBack title="Change Language" />

        <View style={{ backgroundColor: "#FFFFFF", borderRadius: 14, padding: 8 }}>
          {LANGUAGES.map((lang) => (
            <Pressable
              key={lang.code}
              onPress={() => {
                console.log("Action: change language", { selected: lang.code });
                setLanguage(lang.code);
                router.back();
              }}
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingVertical: 16,
                paddingHorizontal: 12,
                borderRadius: 10,
                marginVertical: 4,
                backgroundColor: language === lang.code ? "#F4FAF4" : "transparent",
              }}
            >
              <Text style={{ flex: 1, color: "#1F4E20", fontSize: 16, fontWeight: "500" }}>{lang.label}</Text>
              {language === lang.code && (
                <MaterialCommunityIcons name="check" size={20} color="#1F4E20" />
              )}
            </Pressable>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}
