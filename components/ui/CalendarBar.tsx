import { View, Text, Pressable } from "react-native";

function getWeekDates(today: Date) {
  const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const d = new Date(today);
  const day = d.getDay(); // 0=Sun .. 6=Sat
  const offsetToMonday = (day + 6) % 7;
  d.setHours(0, 0, 0, 0);
  d.setDate(d.getDate() - offsetToMonday);
  const days = [] as { label: string; date: Date }[];
  for (let i = 0; i < 7; i++) {
    const di = new Date(d);
    di.setDate(d.getDate() + i);
    days.push({ label: labels[i], date: di });
  }
  return { days, currentIndex: offsetToMonday };
}

export default function CalendarBar({ date = new Date(), selectedIndex, onSelect }: { date?: Date; selectedIndex?: number; onSelect?: (index: number) => void }) {
  const { days, currentIndex } = getWeekDates(date);
  const sel = typeof selectedIndex === "number" ? selectedIndex : currentIndex;
  return (
    <View style={{ backgroundColor: "#FFFFFF", height: 70, borderRadius: 15, width: 335, alignSelf: "center", overflow: "hidden", justifyContent: "center" }}>
      <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 16 }}>
        {days.map((d, i) => {
          const isToday = i === sel;
          const color = isToday ? "#003300" : "rgba(112,123,129,0.6)"; // #707B81 at 60%
          return (
            <Pressable key={i} onPress={() => onSelect && onSelect(i)} style={{ width: 31, alignItems: "center" }}>
              <Text style={{ color, fontSize: 12, fontWeight: "600" }}>{d.label}</Text>
              <Text style={{ color, fontSize: 12, fontWeight: "600" }}>{d.date.getDate()}</Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}
