import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Pressable, Text, TextInput, View } from "react-native";
import { useState } from "react";

type Props = {
  label?: string;
  value: string;
  onChangeText: (t: string) => void;
  placeholder?: string;
  keyboardType?: "default" | "email-address" | "numeric" | "phone-pad";
  secureTextEntry?: boolean;
  autoCapitalize?: "none" | "sentences" | "words" | "characters";
  errorText?: string;
};

export default function Input({ label, value, onChangeText, placeholder, keyboardType = "default", secureTextEntry, autoCapitalize = "none", errorText }: Props) {
  const [show, setShow] = useState(false);
  const isPassword = !!secureTextEntry;
  const effectiveSecure = isPassword ? !show : false;

  return (
    <View style={{ width: "100%" }}>
      {label ? <Text style={{ fontSize: 16, fontWeight: "500", color: "#003300", marginBottom: 8 }}>{label}</Text> : null}
      <View style={{ backgroundColor: "#FFFFFF", borderRadius: 50, paddingHorizontal: 14, paddingVertical: isPassword ? 12 : 16, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          keyboardType={keyboardType}
          secureTextEntry={effectiveSecure}
          autoCapitalize={autoCapitalize}
          style={{ flex: 1 }}
        />
        {isPassword ? (
          <Pressable onPress={() => setShow((s) => !s)}>
            <MaterialCommunityIcons name={show ? "eye-off" : "eye"} size={24} color="#1A2530" />
          </Pressable>
        ) : null}
      </View>
      {errorText ? <Text style={{ color: "#B00020", marginTop: 6 }}>{errorText}</Text> : null}
    </View>
  );
}
