import { useMemo, useState } from "react";
import { Text, View } from "react-native";
import ActionItem from "../ui/ActionItem";
import CalendarBar from "../ui/CalendarBar";

export default function ScheduleBoiler() {
  const today = new Date();
  const mondayIndex = (today.getDay() + 6) % 7;
  const [sel, setSel] = useState<number>(mondayIndex);
  const fullLabels = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const startOfWeek = new Date(today);
  startOfWeek.setHours(0, 0, 0, 0);
  startOfWeek.setDate(startOfWeek.getDate() - mondayIndex);
  const selectedDate = new Date(startOfWeek);
  selectedDate.setDate(startOfWeek.getDate() + sel);

  const tasks = useMemo(
    () => [
    { id: "1", title: "Check O2 levels", day: 0, time: "08:00 A.M.", completed: true },
    { id: "2", title: "Feed fish", day: 0, time: "09:00 A.M.", completed: false },
    { id: "3", title: "Test pH levels", day: 0, time: "06:00 P.M.", completed: false },
    { id: "4", title: "Check water temp", day: 1, time: "08:30 A.M.", completed: false },
    { id: "5", title: "Feed fish", day: 1, time: "09:00 A.M.", completed: false },
    { id: "6", title: "Inspect pump filter", day: 2, time: "10:00 A.M.", completed: false },
    { id: "7", title: "Check water level", day: 2, time: "05:00 P.M.", completed: false },
    { id: "8", title: "Feed fish", day: 3, time: "09:00 A.M.", completed: false },
    { id: "9", title: "Clean grow beds", day: 3, time: "03:00 P.M.", completed: false },
    { id: "10", title: "Test ammonia levels", day: 4, time: "10:00 A.M.", completed: false },
    { id: "11", title: "Feed fish", day: 4, time: "09:00 A.M.", completed: false },
    { id: "12", title: "Harvest lettuce", day: 5, time: "11:00 A.M.", completed: false },
    { id: "13", title: "Check air stones", day: 5, time: "02:00 P.M.", completed: false },
    { id: "14", title: "Feed fish", day: 6, time: "09:00 A.M.", completed: false },
    { id: "15", title: "Weekly system check", day: 6, time: "04:00 P.M.", completed: false },
    ],
    []
  );

  const tasksForDay = tasks.filter((t) => t.day === sel);

  return (
    <View style={{ marginTop: 16 }}>
      <CalendarBar selectedIndex={sel} onSelect={setSel} />
      <View style={{ marginTop: 12, alignItems: "flex-start" }}>
        <Text style={{ color: "#003300", fontSize: 18, fontWeight: "400" }}>
          {fullLabels[sel]}
        </Text>
      </View>
      <View style={{ marginTop: 12 }}>
        {tasksForDay.map((it) => (
          <ActionItem
            key={it.id}
            id={it.id}
            title={it.title}
            time={it.time}
            initialCompleted={it.completed}
            onToggle={(id) => console.log("Toggle", id)}
            onEdit={(id) => console.log("Edit", id)}
            onDelete={(id) => console.log("Delete", id)}
          />
        ))}
      </View>
    </View>
  );
}
