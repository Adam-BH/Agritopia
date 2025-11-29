import SwipePager from "@/components/SwipePager";
import { useState } from "react";
import { ScrollView, View } from "react-native";
import MyFishBoiler from "../../components/search/MyFishBoiler";
import MyPlantsBoiler from "../../components/search/MyPlantsBoiler";
import ScheduleBoiler from "../../components/search/ScheduleBoiler";
import SegmentToggle from "../../components/ui/SegmentToggle";

export default function Search() {
  const [seg, setSeg] = useState(0);
  return (
    <SwipePager>
      <View style={{ flex: 1, backgroundColor: "#F4FAF4" }}>
        <ScrollView contentContainerStyle={{ padding: 24 }} keyboardShouldPersistTaps="handled">
          <SegmentToggle options={["My Plants", "My Fishs", "Schedule"]} value={seg} onChange={setSeg} />
          {seg === 0 ? <MyPlantsBoiler /> : seg === 1 ? <MyFishBoiler /> : <ScheduleBoiler />}
        </ScrollView>
      </View>
    </SwipePager>
  );
}
