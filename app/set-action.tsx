import { BackButton, Button, Dropdown } from "@/components";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SetAction() {
  const router = useRouter();
  const params = useLocalSearchParams<{ action?: string }>();
  const action = (params.action as string | undefined) ?? "";

  const [system, setSystem] = useState<string | undefined>(undefined);
  const [repeat, setRepeat] = useState<string | undefined>(undefined);
  const [quantity, setQuantity] = useState<string | undefined>(undefined);

  const onSave = () => {
      console.log(system, repeat, quantity) // TOD: make the save action call
      router.back();
    }

  const systemOptions = [
    { label: "Hydroponic System", value: "hydroponic" },
    { label: "Aquaponic System", value: "aquaponic" },
    { label: "Aeroponic System", value: "aeroponic" },
  ];

  const repeatOptions = [
    { label: "Once", value: "once" },
    { label: "Daily", value: "daily" },
    { label: "Weekly", value: "weekly" },
    { label: "Monthly", value: "monthly" },
  ];

  const quantityOptions = [
    { label: "Low", value: "low" },
    { label: "Medium", value: "medium" },
    { label: "High", value: "high" },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F4FAF4" }} edges={["top"]}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 16,
          paddingTop: 16,
          paddingBottom: 24,
        }}
      >
        <View style={{ width: 44 }}>
          <BackButton style={{ position: "relative", top: 0, left: 0 }} />
        </View>
        <Text
          style={{
            flex: 1,
            color: "#1F4E20",
            fontSize: 28,
            fontWeight: "700",
            textAlign: "center",
          }}
        >
          Set Action
        </Text>
        <View style={{ width: 44 }} />
      </View>

      <ScrollView contentContainerStyle={{ paddingHorizontal: 24, paddingTop: 0, paddingBottom: 40 }} showsVerticalScrollIndicator={false}>
        {action ? (
          <Text style={{ color: "#828A89", fontSize: 16, textAlign: "center", marginBottom: 24 }}>
            {`Configuring: ${action}`}
          </Text>
        ) : null}

        <View style={{ gap: 16 }}>
          <Dropdown label="System" value={system} options={systemOptions} onChange={setSystem} placeholder="Select system" />
          <Dropdown label="Repeat" value={repeat} options={repeatOptions} onChange={setRepeat} placeholder="Select repeat" />
          <Dropdown label="Quantity" value={quantity} options={quantityOptions} onChange={setQuantity} placeholder="Select quantity" />
        </View>

        <View style={{ marginTop: 32 }}>
          <Button
            title="Save"
            onPress={onSave}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

