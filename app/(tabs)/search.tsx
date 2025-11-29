import AddActionButton from "@/components/AddActionButton";
import AddActionScaffold from "@/components/AddActionScaffold";
import SwipePager from "@/components/SwipePager";
import { useState } from "react";
import { ScrollView, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import MyFishBoiler from "../../components/search/MyFishBoiler";
import MyPlantsBoiler from "../../components/search/MyPlantsBoiler";
import ScheduleBoiler from "../../components/search/ScheduleBoiler";
import SegmentToggle from "../../components/ui/SegmentToggle";

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
                { label: "Task", icon: "clipboard-plus", onPress: () => setShowAdd(false) },
                { label: "Reminder", icon: "bell-plus", onPress: () => setShowAdd(false) },
                { label: "Event", icon: "calendar-plus", onPress: () => setShowAdd(false) },
              ]}
            />
          </>
        ) : null}
      </View>
    </SwipePager>
  );
}
