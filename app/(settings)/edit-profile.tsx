import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, TextInput, Pressable } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";
import HeaderWithBack from "@/components/shared/HeaderWithBack";
import Avatar from "@/components/ui/Avatar";

export default function EditProfile() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email] = useState("you@example.com");
  const [phone, setPhone] = useState("");

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F4FAF4" }} edges={["top"]}>
      <View style={{ paddingHorizontal: 24, paddingTop: 16 }}>
        <HeaderWithBack title="Edit Profile" />

        <View style={{ alignItems: "center", marginBottom: 16 }}>
          <Avatar size={100} uri={null} />
        </View>

        <View style={{ backgroundColor: "#FFFFFF", borderRadius: 14, padding: 16 }}>
          <Text style={{ color: "#1F4E20", fontSize: 14, fontWeight: "600", marginBottom: 8 }}>Name</Text>
          <TextInput
            value={name}
            onChangeText={setName}
            placeholder="Your name"
            placeholderTextColor="#828A89"
            style={{
              backgroundColor: "#F4FAF4",
              borderRadius: 10,
              paddingHorizontal: 12,
              paddingVertical: 12,
              color: "#1F4E20",
              marginBottom: 16,
            }}
          />

          <Text style={{ color: "#1F4E20", fontSize: 14, fontWeight: "600", marginBottom: 8 }}>Email</Text>
          <TextInput
            value={email}
            editable={false}
            selectTextOnFocus={false}
            style={{
              backgroundColor: "#F4FAF4",
              borderRadius: 10,
              paddingHorizontal: 12,
              paddingVertical: 12,
              color: "#828A89",
              marginBottom: 16,
            }}
          />

          <Text style={{ color: "#1F4E20", fontSize: 14, fontWeight: "600", marginBottom: 8 }}>Phone number</Text>
          <TextInput
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
            placeholder="Enter phone number"
            placeholderTextColor="#828A89"
            style={{
              backgroundColor: "#F4FAF4",
              borderRadius: 10,
              paddingHorizontal: 12,
              paddingVertical: 12,
              color: "#1F4E20",
              marginBottom: 16,
            }}
          />

          <Pressable
            onPress={() => {
              console.log("Action: save profile", { name, phone });
              router.back();
            }}
            style={{
              backgroundColor: "#1F4E20",
              borderRadius: 10,
              paddingVertical: 12,
              alignItems: "center",
              marginTop: 8,
            }}
          >
            <Text style={{ color: "#FFFFFF", fontSize: 16, fontWeight: "600" }}>Save</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
