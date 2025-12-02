import Button from "@/components/ui/Button";
import ConditionCardGrid from "@/components/ui/ConditionCardGrid";
import BackButton from "@/components/ui/BackButton";
import { ScrollView, StatusBar, Text, View } from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import { PLANT_TYPES, FISH_TYPES } from "@/data/types";

type Props = {
  type: "plant" | "fish";
  id: string;
};

export default function DetailsScreen({ type, id }: Props) {
  const insets = useSafeAreaInsets();
  const item =
    type === "plant"
      ? PLANT_TYPES.find((p) => p.id === id)
      : FISH_TYPES.find((f) => f.id === id);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F4FAF4" }} edges={[]}>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
      <BackButton />
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false} contentInsetAdjustmentBehavior="never">
        <View style={{ position: "relative", width: "100%", height: 200 + insets.top, backgroundColor: "#E2E2E2" }}>
          <View style={{ width: "100%", height: "100%", backgroundColor: "#D0D0D0", justifyContent: "center", alignItems: "center" }}>
            <Text style={{ fontSize: 64 }}>{type === "plant" ? "🌿" : "🐟"}</Text>
            <Text style={{ marginTop: 8, color: "#666", fontSize: 14 }}>{type === "plant" ? "Plant Image" : "Fish Image"}</Text>
          </View>
        </View>

        <View style={{ backgroundColor: "#F4FAF4", borderTopLeftRadius: 24, borderTopRightRadius: 24, marginTop: -24, paddingTop: 24, paddingHorizontal: 20, paddingBottom: 32 }}>
          <Text style={{ color: "#1F4E20", fontSize: 24, fontWeight: "700", marginBottom: 20 }}>
            {item?.name ?? (type === "plant" ? "Plant" : "Fish")}
          </Text>

          <View style={{ marginBottom: 28 }}>
            <Text style={{ color: "#1F4E20", fontSize: 16, fontWeight: "600", marginBottom: 12 }}>Description</Text>
            <Text style={{ color: "#666666", fontSize: 14, lineHeight: 22 }}>
              {item?.description ?? ""}
            </Text>
          </View>

          <ConditionCardGrid title="Favored Conditions" conditions={item?.conditions ?? []} />

          <Button title={type === "plant" ? "Add to My Plants" : "Add to My Fish"} onPress={() => {}} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
