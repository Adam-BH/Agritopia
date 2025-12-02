import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Pressable, Text, TextInput, View } from "react-native";
import { forwardRef } from "react";

type Props = {
  placeholder?: string;
  value?: string;
  onChangeText?: (t: string) => void;
  onPress?: () => void;
  autoFocus?: boolean;
};

const SearchBar = forwardRef<TextInput, Props>(function SearchBar({ placeholder = "Search", value, onChangeText, onPress, autoFocus }, ref) {
  const baseStyle = {
    backgroundColor: "#FFFFFF",
    borderRadius: 50,
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: "row" as const,
    alignItems: "center" as const,
  };

  if (onChangeText) {
    return (
      <View style={baseStyle}>
        <MaterialCommunityIcons name="magnify" size={24} color="#666666" style={{ marginRight: 8 }} />
        <TextInput
          ref={ref}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor="#999999"
          style={{ flex: 1, fontSize: 14, color: "#1F4E20" }}
          autoFocus={autoFocus}
        />
      </View>
    );
  }

  return (
    <Pressable onPress={onPress} style={[baseStyle, { justifyContent: "flex-start", gap: 12 }]}> 
      <MaterialCommunityIcons name="magnify" size={24} color="#828A89" />
      <Text style={{ flex: 1, color: "#828A89", fontSize: 16 }}>{placeholder}</Text>
    </Pressable>
  );
});

export default SearchBar;
