import { useState } from "react";
import { View } from "react-native";
import ActionItem from "../ui/ActionItem";
import CalendarBar from "../ui/CalendarBar";

type A = { type: "water" | "wind" | "sun" | "fertilize"; title: string; time: string; done?: boolean };

export default function ScheduleBoiler() {
  const today = new Date();
  const mondayIndex = (today.getDay() + 6) % 7;
  const [sel, setSel] = useState<number>(mondayIndex);
  const [actionsByDay, setActionsByDay] = useState<Record<number, A[]>>({
    0: [
      { type: "water", title: "Water Anthurium", time: "08:00" },
      { type: "wind", title: "Ventilate greenhouse", time: "12:00" },
    ],
    1: [{ type: "sun", title: "Move Potatoes to sunlight", time: "09:30" }],
    2: [
      { type: "fertilize", title: "Fertilize Ginger", time: "10:00" },
      { type: "water", title: "Irrigate tomatoes", time: "17:00" },
    ],
    3: [{ type: "wind", title: "Check ventilation", time: "13:00" }],
    4: [{ type: "sun", title: "Rotate planters", time: "11:00" }],
    5: [{ type: "water", title: "Water sunflowers", time: "08:30" }],
    6: [{ type: "fertilize", title: "Compost application", time: "15:00" }],
  });

  const items = actionsByDay[sel] ?? [];

  return (
    <View style={{ marginTop: 16 }}>
      <CalendarBar selectedIndex={sel} onSelect={setSel} />
      <View style={{ marginTop: 12 }}>
        {items.map((a, i) => (
          <ActionItem
            key={i}
            type={a.type}
            title={a.title}
            time={a.time}
            done={!!a.done}
            onToggle={() => {
              setActionsByDay((prev) => {
                const arr = [...(prev[sel] ?? [])];
                arr[i] = { ...arr[i], done: !arr[i].done };
                return { ...prev, [sel]: arr };
              });
            }}
          />
        ))}
      </View>
      
    </View>
  );
}
