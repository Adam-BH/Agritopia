import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Pressable, ScrollView, Text, View, Linking } from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

type SettingItemProps = {
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
  label: string;
  onPress?: () => void;
  showExternalLink?: boolean;
};

function SettingItem({ icon, label, onPress, showExternalLink }: SettingItemProps) {
  return (
    <Pressable
      onPress={onPress}
      style={{
        backgroundColor: "#FFFFFF",
        borderRadius: 14,
        padding: 16,
        flexDirection: "row",
        alignItems: "center",
        marginTop: 12,
      }}
    >
      <MaterialCommunityIcons name={icon} size={24} color="#1F4E20" style={{ marginRight: 12 }} />
      <Text style={{ flex: 1, color: "#1F4E20", fontSize: 16, fontWeight: "500" }}>{label}</Text>
      {showExternalLink ? (
        <MaterialCommunityIcons name="open-in-new" size={20} color="#1F4E20" />
      ) : (
        <MaterialCommunityIcons name="chevron-right" size={24} color="#1F4E20" />
      )}
    </Pressable>
  );
}

type SectionProps = {
  title: string;
  children: React.ReactNode;
};

function Section({ title, children }: SectionProps) {
  return (
    <View style={{ marginTop: 32 }}>
      <Text style={{ color: "#1F4E20", fontSize: 18, fontWeight: "700", marginBottom: 8 }}>{title}</Text>
      {children}
    </View>
  );
}

export default function Settings() {
  const router = useRouter();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F4FAF4" }} edges={["top"]}>
      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 24, paddingTop: 24, paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Title */}
        <Text style={{ color: "#1F4E20", fontSize: 28, fontWeight: "700", textAlign: "center", marginBottom: 24 }}>
          Settings
        </Text>

        {/* Account Setting Section */}
        <Section title="Account Settings">
          <SettingItem
            icon="account-edit"
            label="Edit profile"
            onPress={() => {
              console.log("Action: navigate to edit profile");
              router.push("/(settings)/edit-profile");
            }}
          />
          <SettingItem
            icon="translate"
            label="Change language"
            onPress={() => {
              console.log("Action: navigate to change language");
              router.push("/(settings)/change-language");
            }}
          />
        </Section>

        {/* Legal Section */}
        <Section title="About">
          <SettingItem
            icon="information"
            label="About us"
            showExternalLink
            onPress={() => {
              console.log("Action: open about us link");
              Linking.openURL("https://agritopia.com/about");
            }}
          />
          <SettingItem
            icon="help-circle"
            label="Help"
            showExternalLink
            onPress={() => {
              console.log("Action: open help link");
              Linking.openURL("https://agritopia.com/help");
            }}
          />
        </Section>

        {/* Logout Button */}
        <Pressable
          style={{
            backgroundColor: "#FFFFFF",
            borderRadius: 14,
            padding: 16,
            alignItems: "center",
            marginTop: 40,
          }}
          onPress={() => {
            console.log("Action: logout");
            router.replace("/(auth)/login");
          }}
        >
          <Text style={{ color: "#1F4E20", fontSize: 16, fontWeight: "500", textDecorationLine: "underline" }}>
            Logout
          </Text>
        </Pressable>

        {/* Version */}
        <Text style={{ color: "#828A89", fontSize: 13, textAlign: "center", marginTop: 24 }}>Version 1.0.0</Text>
      </ScrollView>
    </SafeAreaView>
  );
}
