import { ActionScaffold, FloatingActionButton } from "@/components";
import MyPlantsBoiler from "@/components/search/MyPlantsBoiler";
import ScheduleBoiler from "@/components/search/ScheduleBoiler";
import SegmentToggle from "@/components/ui/SegmentToggle";
import useActionRouting from "@/hooks/useActionRouting";
import { useState } from "react";
import { Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import MyFishBoiler from "../../components/search/MyFishBoiler";

export default function MyGarden() {
  const { addAction } = useActionRouting();
  const [seg, setSeg] = useState(0);
  const [showAdd, setShowAdd] = useState(false);
  const insets = useSafeAreaInsets();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F4FAF4" }} edges={["top"]}>
      <View style={{ flex: 1 }}>
        <ScrollView
          contentContainerStyle={{ paddingHorizontal: 24, paddingTop: 24, paddingBottom: insets.bottom + 120 }}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <Text style={{ color: "#1F4E20", fontSize: 28, fontWeight: "700", textAlign: "center", marginBottom: 24 }}>
            My Garden
          </Text>
          <SegmentToggle options={["My Plants", "My Fishs", "Schedule"]} value={seg} onChange={setSeg} />
          {seg === 0 ? <MyPlantsBoiler /> : seg === 1 ? <MyFishBoiler /> : <ScheduleBoiler />}
        </ScrollView>
        {seg === 2 ? (
          <>
            <FloatingActionButton onPress={() => setShowAdd(true)} />
            <ActionScaffold
              visible={showAdd}
              onClose={() => setShowAdd(false)}
              actions={[
                { label: "Watering", icon: "water", onPress: () => { setShowAdd(false); addAction("Watering"); } },
                { label: "O2 adding", icon: "waves", onPress: () => { setShowAdd(false); addAction("O2 adding"); } },
                { label: "Feeding", icon: "food", onPress: () => { setShowAdd(false); addAction("Feeding"); } },
              ]}
              title="Add action"
            />
          </>
        ) : null}
      </View>
    </SafeAreaView>
  );
}
