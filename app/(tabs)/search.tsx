import AddActionButton from "@/components/AddActionButton";
import AddActionScaffold from "@/components/AddActionScaffold";
import MyPlantsBoiler from "@/components/search/MyPlantsBoiler";
import ScheduleBoiler from "@/components/search/ScheduleBoiler";
import SwipePager from "@/components/SwipePager";
import SegmentToggle from "@/components/ui/SegmentToggle";
import { useState } from "react";
import { Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import MyFishBoiler from "../../components/search/MyFishBoiler";

export default function Search() {
  const [seg, setSeg] = useState(0);
  const [showAdd, setShowAdd] = useState(false);
  const insets = useSafeAreaInsets();
  return (
    <SwipePager>
      <View style={{ flex: 1, backgroundColor: "#F4FAF4" }}>
        <ScrollView
          contentContainerStyle={{ padding: 24, paddingBottom: insets.bottom + 120 }}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View style={{ paddingTop: 20, paddingBottom: 16 }}>
            <Text style={{ color: "#1F4E20", fontSize: 28, fontWeight: "700", textAlign: "center" }}>
              Search
            </Text>
          </View>
          <SegmentToggle options={["My Plants", "My Fishs", "Schedule"]} value={seg} onChange={setSeg} />
          {seg === 0 ? <MyPlantsBoiler /> : seg === 1 ? <MyFishBoiler /> : <ScheduleBoiler />}
        </ScrollView>
        {seg === 2 ? (
          <>
            <AddActionButton onPress={() => setShowAdd(true)} />
            <AddActionScaffold
              visible={showAdd}
              onClose={() => setShowAdd(false)}
              actions={[
                { label: "Watering", icon: "water", onPress: () => { console.log("Add action: Watering"); setShowAdd(false); } },
                { label: "O2 adding", icon: "waves", onPress: () => { console.log("Add action: O2 adding"); setShowAdd(false); } },
                { label: "Feeding", icon: "food", onPress: () => { console.log("Add action: Feeding"); setShowAdd(false); } },
              ]}
              title="Add action"
            />
          </>
        ) : null}
      </View>
    </SwipePager>
  );
}
