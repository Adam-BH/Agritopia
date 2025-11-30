import BackButton from "@/components/ui/BackButton";
import { Text, View } from "react-native";

export default function Scan() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <BackButton />
      <Text>Scan asba ok</Text>
    </View>
  );
}

