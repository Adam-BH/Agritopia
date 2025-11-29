import SwipePager from "@/components/SwipePager";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Pressable, ScrollView, Text, View } from "react-native";
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
  return (
    <SwipePager>
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
          <Section title="Account Setting">
            <SettingItem icon="account-edit" label="Edit profile" />
            <SettingItem icon="translate" label="Change language" />
            <SettingItem icon="shield-account" label="Privacy" />
          </Section>

          {/* Legal Section */}
          <Section title="Legal">
            <SettingItem icon="help-circle" label="Help" showExternalLink />
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
          >
            <Text style={{ color: "#1F4E20", fontSize: 16, fontWeight: "500", textDecorationLine: "underline" }}>
              Logout
            </Text>
          </Pressable>

          {/* Version */}
          <Text style={{ color: "#828A89", fontSize: 13, textAlign: "center", marginTop: 24 }}>Version 1.0.0</Text>
        </ScrollView>
      </SafeAreaView>
    </SwipePager>
  );
}
