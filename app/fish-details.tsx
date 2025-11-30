import Button from "@/components/ui/Button";
import ConditionCardGrid from "@/components/ui/ConditionCardGrid";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Pressable, ScrollView, StatusBar, Text, View } from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";

export default function FishDetails() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const params = useLocalSearchParams<{ id?: string }>();
  const typeId = params.id as string | undefined;
  const type = typeId ? require("@/data/types").FISH_TYPES.find((f: any) => f.id === typeId) : null;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F4FAF4" }} edges={[]}>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
      {/* Fixed Back Button */}
      <Pressable
        onPress={() => router.back()}
        style={{
          position: "absolute",
          top: insets.top + 16,
          left: 16,
          width: 44,
          height: 44,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 22,
          backgroundColor: "#FFFFFF",
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.15,
          shadowRadius: 4,
          elevation: 4,
          zIndex: 10,
        }}
      >
        <MaterialCommunityIcons name="arrow-left" size={22} color="#1F4E20" />
      </Pressable>

      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false} contentInsetAdjustmentBehavior="never">
        {/* Image Section */}
        <View style={{ position: "relative", width: "100%", height: 200 + insets.top, backgroundColor: "#E2E2E2" }}>
          {/* Placeholder Image */}
          <View style={{ width: "100%", height: "100%", backgroundColor: "#D0D0D0", justifyContent: "center", alignItems: "center" }}>
            <Text style={{ fontSize: 64 }}>🐟</Text>
            <Text style={{ marginTop: 8, color: "#666", fontSize: 14 }}>Fish Image</Text>
          </View>
        </View>

        {/* Content Card */}
        <View style={{ backgroundColor: "#F4FAF4", borderTopLeftRadius: 24, borderTopRightRadius: 24, marginTop: -24, paddingTop: 24, paddingHorizontal: 20, paddingBottom: 32 }}>
          {/* Fish Name */}
          <Text style={{ color: "#1F4E20", fontSize: 24, fontWeight: "700", marginBottom: 20 }}>
            {type?.name ?? "Fish"}
          </Text>

          {/* Description Section */}
          <View style={{ marginBottom: 28 }}>
            <Text style={{ color: "#1F4E20", fontSize: 16, fontWeight: "600", marginBottom: 12 }}>Description</Text>
            <Text style={{ color: "#666666", fontSize: 14, lineHeight: 22 }}>
              {type?.description ?? ""}
            </Text>
          </View>

          {/* Favored Conditions Section */}
          <ConditionCardGrid title="Favored Conditions" conditions={type?.conditions ?? []} />

          {/* Add to My Fish Button */}
          <Button title="Add to My Fish" onPress={() => {}} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

