import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Modal, Pressable, Text, View } from "react-native";
import { useMemo, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type Option = {
  label: string;
  value: string;
};

type Props = {
  label?: string;
  value?: string;
  options: Option[];
  placeholder?: string;
  onChange: (v: string) => void;
  disabled?: boolean;
};

export default function Dropdown({ label, value, options, placeholder = "Select", onChange, disabled }: Props) {
  const [open, setOpen] = useState(false);
  const insets = useSafeAreaInsets();

  const selectedLabel = useMemo(() => {
    const found = options.find((o) => o.value === value);
    return found ? found.label : "";
  }, [options, value]);

  return (
    <View style={{ width: "100%" }}>
      {label ? <Text style={{ fontSize: 16, fontWeight: "500", color: "#003300", marginBottom: 8 }}>{label}</Text> : null}
      <Pressable
        disabled={disabled}
        onPress={() => setOpen(true)}
        style={{ backgroundColor: "#FFFFFF", borderRadius: 50, paddingHorizontal: 16, paddingVertical: 16, flexDirection: "row", alignItems: "center", justifyContent: "space-between", opacity: disabled ? 0.6 : 1 }}
      >
        <Text style={{ color: selectedLabel ? "#1A2530" : "#828A89" }}>{selectedLabel || placeholder}</Text>
        <MaterialCommunityIcons name={open ? "chevron-up" : "chevron-down"} size={24} color="#1A2530" />
      </Pressable>

      {open ? (
        <Modal visible transparent animationType="fade" statusBarTranslucent>
          <View style={{ position: "absolute", left: 0, right: 0, top: 0, bottom: 0 }}>
            <Pressable onPress={() => setOpen(false)} style={{ position: "absolute", left: 0, right: 0, top: 0, bottom: 0, backgroundColor: "rgba(0, 51, 0, 0.4)" }} />
            <View
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "#FFFFFF",
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                paddingHorizontal: 24,
                paddingTop: 16,
                paddingBottom: insets.bottom + 16,
                shadowColor: "#000",
                shadowOpacity: 0.15,
                shadowRadius: 12,
                shadowOffset: { width: 0, height: -4 },
                elevation: 12,
              }}
            >
              <View style={{ alignItems: "center", marginBottom: 8 }}>
                <View style={{ width: 40, height: 4, borderRadius: 2, backgroundColor: "#E6E6E6" }} />
              </View>
              <Text style={{ fontSize: 18, fontWeight: "700", color: "#1F4E20", textAlign: "center" }}>{label || "Select option"}</Text>
              <View style={{ marginTop: 12 }}>
                {options.map((o, idx) => (
                  <View key={o.value}>
                    <Pressable
                      onPress={() => {
                        onChange(o.value);
                        setOpen(false);
                      }}
                      style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingVertical: 14 }}
                    >
                      <Text style={{ fontSize: 16, color: "#1A2530" }}>{o.label}</Text>
                      {value === o.value ? <MaterialCommunityIcons name="check" size={20} color="#1F4E20" /> : null}
                    </Pressable>
                    {idx < options.length - 1 ? <View style={{ height: 1, backgroundColor: "#E6E6E6" }} /> : null}
                  </View>
                ))}
              </View>
            </View>
          </View>
        </Modal>
      ) : null}
    </View>
  );
}

